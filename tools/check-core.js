// Kontrola treści strony: logika wspólna dla tools/check.mjs (Node, GitHub Actions) i dla testów w przeglądarce.
// Nie korzysta z API Node.js. Wzory TeX sprawdza funkcja texCheck(tex, display) -> komunikat błędu albo null.
//
// runChecks(site, texCheck) -> { problems: [{ level, file, line, message }], stats }
//   site = {
//     indexHtml,                         tekst index.html
//     files: { ścieżka: tekst },         materials.js, zadania/*.js, teoria/*.js (do podania numerów linii)
//     repoFiles: [ścieżki],              wszystkie pliki repozytorium (ukośniki /, względem katalogu głównego)
//     data: { MATERIALS, TASKS, THEORY },   dane po wykonaniu skryptów strony
//     loadErrors: [{ file, line, message }] błędy składni lub wykonania przy wczytywaniu skryptów
//   }

const TASK_FIELDS = ['id', 'group', 'src', 'label', 'pts', 'tags', 'q', 'ans', 'sol', 'fig'];
const TASK_REQUIRED = ['id', 'group', 'q', 'sol'];
const HTML_TAGS = new Set([
  'p', 'b', 'i', 'em', 'strong', 'u', 'sub', 'sup', 'br', 'hr', 'a', 'code', 'pre', 'blockquote',
  'ul', 'ol', 'li', 'div', 'span', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'h3', 'h4',
  'svg', 'g', 'line', 'path', 'circle', 'ellipse', 'polygon', 'polyline', 'rect', 'text', 'tspan', 'title', 'desc', 'defs', 'marker', 'use'
]);
const VOID_TAGS = new Set(['br', 'hr']);
const BLOCK_TAGS = new Set(['p', 'div', 'ul', 'ol', 'table', 'h3', 'h4', 'blockquote', 'pre', 'hr']);
const BX_KINDS = new Set(['def', 'thm', 'fact', 'cor', 'met', 'ex', 'warn']);

// ---- HTML: znaczniki muszą być znane, domknięte i poprawnie zagnieżdżone ----
function checkHtml(text, report) {
  const stack = [];
  const TAG = /<(\/?)([^\s>\/]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/y;
  let i = 0;
  while ((i = text.indexOf('<', i)) !== -1) {
    if (!/[A-Za-z\/]/.test(text.charAt(i + 1))) { i++; continue; }   // zwykły znak < (np. "a < b")
    TAG.lastIndex = i;
    const m = TAG.exec(text);
    const near = text.slice(i, i + 40).replace(/\s+/g, ' ');
    if (!m) {
      report('error', 'Znak < bez zamykającego > ("' + near + '…"). We wzorze i w tekście zapisz < jako &lt;.', near);
      break;
    }
    i = m.index + m[0].length;
    const closing = m[1] === '/';
    const name = m[2].toLowerCase();
    if (!/^[a-z][a-z0-9]*$/.test(name)) {
      report('error', 'Podejrzany znacznik "<' + m[2].slice(0, 20) + '…": to chyba znak < we wzorze lub tekście. Zapisz go jako &lt;.', near);
      continue;
    }
    if (!HTML_TAGS.has(name)) {
      report('error', 'Nieznany znacznik <' + name + '> (jeśli jest zamierzony, dodaj go do HTML_TAGS w tools/check-core.js).', near);
    }
    if (closing) {
      if (VOID_TAGS.has(name)) continue;
      if (!stack.length) {
        report('error', 'Zbędny znacznik zamykający </' + name + '>.', near);
      } else if (stack[stack.length - 1] !== name) {
        report('error', 'Znacznik </' + name + '> zamyka <' + stack[stack.length - 1] + '>: zła kolejność lub brak zamknięcia.', near);
        const k = stack.lastIndexOf(name);
        if (k >= 0) stack.length = k;
      } else {
        stack.pop();
      }
    } else {
      const selfClosed = /\/\s*$/.test(m[3]);
      if (BLOCK_TAGS.has(name) && stack.includes('p')) {
        report('error', 'Element blokowy <' + name + '> wewnątrz <p>: przeglądarka zamknie akapit wcześniej i zepsuje układ.', near);
      }
      if (!VOID_TAGS.has(name) && !selfClosed) stack.push(name);
    }
  }
  for (const open of stack) report('error', 'Niezamknięty znacznik <' + open + '>.', '');
}

// ---- wzory: ograniczniki \( \) i \[ \] muszą być sparowane, a TeX poprawny ----
function checkMath(text, report, texCheck, cache, stats) {
  const clean = text.replace(/<svg[\s\S]*?<\/svg>/g, ' ');
  const RE = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;
  let m, last = 0, rest = '';
  while ((m = RE.exec(clean))) {
    rest += clean.slice(last, m.index) + ' ';
    last = m.index + m[0].length;
    const display = m[2] !== undefined;
    const tex = display ? m[2] : m[1];
    const near = tex.trim().slice(0, 50).replace(/\s+/g, ' ');
    if (!tex.trim()) { report('warning', 'Pusty wzór.', m[0]); continue; }
    if (/<\/?[A-Za-z!]/.test(tex)) {
      report('error', 'Znacznik HTML wewnątrz wzoru ("' + near + '…"). Znak < we wzorze zapisz jako &lt;.', tex.trim().slice(0, 20));
      continue;
    }
    const src = tex.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
    stats.formulas++;
    if (!texCheck) continue;
    const key = (display ? 'D' : 'I') + src;
    let msg = cache.get(key);
    if (msg === undefined) { msg = texCheck(src, display); cache.set(key, msg); }
    if (msg) report('error', 'Błąd we wzorze: ' + msg + ' (wzór: ' + near + '…)', tex.trim().slice(0, 30));
  }
  rest += clean.slice(last);
  const stray = /\\[()[\]]/.exec(rest);
  if (stray) {
    report('error', 'Niesparowany ogranicznik wzoru ' + stray[0] + ' ("' + rest.slice(Math.max(0, stray.index - 25), stray.index + 25).replace(/\s+/g, ' ') + '").', stray[0]);
  }
  if (/\$\$/.test(rest)) report('warning', 'W tekście jest $$, które MathJax potraktuje jak wzór wyświetlany.', '$$');
}

// ---- odwołania do numerów zadań ("z zadania 9", "Użyte w zad. 1, 2") muszą wskazywać istniejące zadania ----
function checkRefs(text, max, report) {
  for (const m of text.matchAll(/zadani(?:a|u|em|e)\s+(\d+)\b/gi)) {
    const n = +m[1];
    if (n < 1 || n > max) report('error', 'Odwołanie do nieistniejącego zadania ' + n + ' (w tym dziale jest ' + max + ' zadań).', m[0]);
  }
  for (const p of text.matchAll(/<p class="use">([\s\S]*?)<\/p>/g)) {
    const body = p[1].replace(/\([^)]*\)/g, '');
    if (!/\bzad\./.test(body)) continue;
    for (const m of body.matchAll(/\d+/g)) {
      const n = +m[0];
      if (n < 1 || n > max) report('error', 'Odwołanie do nieistniejącego zadania ' + n + ' w "' + p[1].replace(/\s+/g, ' ').slice(0, 50) + '" (w tym dziale jest ' + max + ' zadań).', p[1].slice(0, 30));
    }
  }
}

const lineAt = (src, idx) => src.slice(0, idx).split('\n').length;
function taskStarts(src) {
  const re = /^  \{\s*$/gm, out = [];
  let m;
  while ((m = re.exec(src))) out.push(m.index);
  return out;
}

export function runChecks(site, texCheck) {
  const problems = [];
  const stats = { files: Object.keys(site.files || {}).length, topics: 0, tasks: 0, theory: 0, formulas: 0, texChecked: !!texCheck };
  const add = (level, file, line, message) => problems.push({ level, file: file || '', line: line || 0, message });
  const cache = new Map();
  const data = site.data || {};
  const { MATERIALS, TASKS, THEORY } = data;

  // 1. błędy składni i wykonania skryptów (taki plik w ogóle się nie wczyta)
  for (const e of site.loadErrors || []) add('error', e.file, e.line, 'Błąd w pliku, strona nie wczyta jego treści: ' + e.message);

  // 2. index.html: wczytywane skrypty i lokalne pliki muszą istnieć, a pliki z treścią muszą być wczytywane
  const html = site.indexHtml || '';
  const repo = new Set(site.repoFiles || []);
  const isLocal = (u) => !/^(?:[a-z]+:)?\/\//i.test(u) && !u.startsWith('#') && !u.startsWith('data:');
  const scripts = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map((m) => m[1]).filter(isLocal);
  const htmlLine = (needle) => { const k = html.indexOf(needle); return k < 0 ? 0 : lineAt(html, k); };
  for (const s of scripts) if (!repo.has(s)) add('error', 'index.html', htmlLine('src="' + s + '"'), 'index.html wczytuje nieistniejący plik ' + s + '.');
  for (const f of repo) {
    if (/^(zadania|teoria)\/[^/]+\.js$/.test(f) && !scripts.includes(f)) add('error', f, 0, 'Plik nie jest wczytywany w index.html (dodaj <script src="' + f + '"></script>), więc jego treść się nie pojawi.');
  }
  for (const m of html.matchAll(/<link\b[^>]*\bhref="([^"]+)"/g)) {
    const h = m[1].replace(/^\.\//, '');
    if (isLocal(h) && !repo.has(h)) add('error', 'index.html', htmlLine(m[1]), 'Brak pliku ' + h + ' (odwołanie w <link>).');
  }
  const canon = /<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/.exec(html);
  const og = /<meta\b[^>]*property="og:image"[^>]*content="([^"]+)"/.exec(html);
  if (canon && og) {
    try {
      const base = new URL(canon[1]), img = new URL(og[1]);
      if (img.origin === base.origin && !repo.has(img.pathname.replace(/^\//, ''))) add('error', 'index.html', htmlLine(og[1]), 'Brak pliku obrazu podglądu linku: ' + img.pathname + '.');
    } catch (e) { add('warning', 'index.html', 0, 'Nieprawidłowy adres w canonical lub og:image.'); }
  }

  // 3. materials.js: działy, tematy i wzory na kartach
  if (!MATERIALS || typeof MATERIALS !== 'object') {
    add('error', 'materials.js', 0, 'Brak window.MATERIALS: strona nie pokaże żadnych działów.');
  } else {
    for (const sid of Object.keys(MATERIALS)) {
      const sec = MATERIALS[sid];
      if (!sec || !Array.isArray(sec.topics)) { add('error', 'materials.js', 0, 'Zakładka "' + sid + '" nie ma listy topics.'); continue; }
      sec.topics.forEach((t, i) => {
        stats.topics++;
        const line = (() => { const src = (site.files || {})['materials.js'] || ''; const k = src.indexOf(t && t.title ? JSON.stringify(t.title) : '\u0000'); return k < 0 ? 0 : lineAt(src, k); })();
        if (!t || typeof t.title !== 'string' || !t.title.trim()) add('error', 'materials.js', line, sid + ' dział ' + (i + 1) + ': brak tytułu.');
        if (t && t.formula && texCheck) {
          const msg = texCheck('\\displaystyle ' + t.formula, false);
          if (msg) add('error', 'materials.js', line, sid + ' dział ' + (i + 1) + ': błąd we wzorze na karcie: ' + msg + ' (' + String(t.formula).slice(0, 40) + ').');
        }
      });
    }
  }
  const topicOf = (key) => {
    const m = /^([a-z]+)-(\d+)$/.exec(key);
    const sec = m && MATERIALS && MATERIALS[m[1]];
    return sec && Array.isArray(sec.topics) && sec.topics[+m[2] - 1] ? { sec: m[1], n: +m[2] } : null;
  };

  // 4. zadania: pola, identyfikatory, treść
  for (const key of Object.keys(TASKS || {})) {
    const file = 'zadania/' + key + '.js';
    const src = (site.files || {})[file] || '';
    const starts = taskStarts(src);
    const arr = TASKS[key];
    if (!topicOf(key)) add('error', file, 0, 'Klucz "' + key + '" nie odpowiada żadnemu działowi z materials.js (numer to pozycja działu na liście).');
    if (!Array.isArray(arr)) { add('error', file, 0, 'window.TASKS["' + key + '"] nie jest tablicą.'); continue; }
    stats.tasks += arr.length;
    const ids = new Map(), groups = new Set();
    let prevGroup = null;
    const seenQ = new Map();
    arr.forEach((t, i) => {
      const start = starts[i] != null ? starts[i] : 0, end = starts[i + 1] != null ? starts[i + 1] : src.length;
      const ref = 'zadanie ' + (i + 1) + (t && t.id != null ? ' (id ' + t.id + ')' : '');
      const locate = (snippet) => {
        if (!src) return 0;
        const k = snippet ? src.indexOf(snippet, start) : -1;
        return lineAt(src, k >= 0 && k < end ? k : start);
      };
      const at = (level, message, snippet) => add(level, file, locate(snippet), ref + ': ' + message);
      if (!t || typeof t !== 'object') { at('error', 'nie jest obiektem.'); return; }
      for (const f of Object.keys(t)) {
        if (TASK_FIELDS.includes(f)) continue;
        if (f === 'no') at('error', 'pole no nadpisuje automatyczną numerację "Zadanie N" (numer to pozycja na liście); usuń je.', 'no:');
        else at('error', 'nieznane pole "' + f + '" (literówka?). Dozwolone: ' + TASK_FIELDS.join(', ') + '.', f + ':');
      }
      for (const f of TASK_REQUIRED) if (t[f] == null || t[f] === '') at('error', 'brak pola ' + f + '.', '');
      if (t.id != null && t.id !== '') {
        const id = String(t.id);
        if (!/^[A-Za-z0-9_-]+$/.test(id)) at('error', 'id "' + id + '" może zawierać tylko litery, cyfry, _ i -.', 'id:');
        else if (ids.has(id)) at('error', 'id ' + id + ' jest już użyte przez zadanie ' + ids.get(id) + '; id musi być niepowtarzalne i stałe.', 'id:');
        else ids.set(id, i + 1);
      }
      for (const f of ['group', 'q', 'sol', 'ans', 'fig', 'src', 'label']) if (t[f] != null && typeof t[f] !== 'string') at('error', 'pole ' + f + ' musi być tekstem.', f + ':');
      if (t.pts != null && !(Number.isInteger(t.pts) && t.pts > 0)) at('error', 'pts musi być dodatnią liczbą całkowitą.', 'pts:');
      if (t.tags == null) at('warning', 'brak pola tags (słowa kluczowe do wyszukiwarki).', '');
      else if (!Array.isArray(t.tags) || t.tags.some((x) => typeof x !== 'string')) at('error', 'tags musi być listą tekstów.', 'tags:');
      if (typeof t.group === 'string' && t.group !== prevGroup) {
        if (groups.has(t.group)) at('warning', 'grupa "' + t.group + '" pojawia się ponownie po innej grupie, więc jej nagłówek zostanie powtórzony.', 'group:');
        groups.add(t.group);
        prevGroup = t.group;
      }
      if (typeof t.q === 'string') {
        const norm = t.q.replace(/\s+/g, ' ').trim();
        if (seenQ.has(norm)) at('warning', 'treść jest identyczna jak w zadaniu ' + seenQ.get(norm) + '.', 'q:');
        else seenQ.set(norm, i + 1);
      }
      for (const f of ['q', 'ans', 'sol', 'fig']) {
        if (typeof t[f] !== 'string' || !t[f]) continue;
        const report = (level, message, snippet) => at(level, 'pole ' + f + ': ' + message, snippet);
        checkHtml(t[f], report);
        checkMath(t[f], report, texCheck, cache, stats);
        checkRefs(t[f], arr.length, report);
      }
      if (typeof t.fig === 'string' || typeof t.sol === 'string') {
        for (const f of ['fig', 'sol']) {
          for (const s of String(t[f] || '').matchAll(/<svg\b[^>]*>/g)) {
            if (!/viewBox=/.test(s[0]) || !/role="img"/.test(s[0]) || !/aria-label=/.test(s[0])) at('warning', 'rysunek SVG w polu ' + f + ' bez viewBox, role="img" lub aria-label.', s[0].slice(0, 30));
          }
        }
      }
    });
  }

  // 5. teoria
  for (const key of Object.keys(THEORY || {})) {
    const file = 'teoria/' + key + '.js';
    const src = (site.files || {})[file] || '';
    const text = THEORY[key];
    const tasksCount = Array.isArray((TASKS || {})[key]) ? TASKS[key].length : 0;
    if (!topicOf(key)) add('error', file, 0, 'Klucz "' + key + '" nie odpowiada żadnemu działowi z materials.js (numer to pozycja działu na liście).');
    if (typeof text !== 'string' || !text.trim()) { add('error', file, 0, 'window.THEORY["' + key + '"] musi być niepustym tekstem.'); continue; }
    stats.theory++;
    const report = (level, message, snippet) => {
      const k = snippet ? src.indexOf(snippet) : -1;
      add(level, file, src ? (k >= 0 ? lineAt(src, k) : 0) : 0, message);
    };
    if (!/<h3[\s>]/.test(text)) report('warning', 'teoria bez nagłówków <h3> (nie powstanie spis treści).', '');
    for (const m of text.matchAll(/class="bx\s+([a-z]+)"/g)) if (!BX_KINDS.has(m[1])) report('warning', 'nieznany rodzaj ramki "bx ' + m[1] + '" (znane: ' + [...BX_KINDS].join(', ') + ').', m[0]);
    checkHtml(text, report);
    checkMath(text, report, texCheck, cache, stats);
    checkRefs(text, tasksCount, report);
  }

  const order = { error: 0, warning: 1 };
  problems.sort((a, b) => (a.file < b.file ? -1 : a.file > b.file ? 1 : 0) || a.line - b.line || order[a.level] - order[b.level]);
  return { problems, stats };
}
