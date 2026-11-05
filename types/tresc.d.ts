// Typy treści strony JcobMath: materials.js, teoria/*.js i zadania/*.js.
// Nie zmieniają wyglądu ani działania strony (przeglądarka w ogóle ich nie wczytuje).
// Służą edytorowi (np. VS Code), który dzięki nim i plikowi jsconfig.json podkreśla błędy
// w treści: literówkę w nazwie pola, brakujące pole, tekst zamiast liczby itp.
// Opis pól jest też w komentarzu na początku materials.js.

/** Fragment HTML (może zawierać wzory w \( \) i \[ \]; znak < we wzorze pisz jako &lt;). */
type Html = string;

/** Plik PDF podpięty do działu albo podtematu. */
interface PdfFile {
  /** ścieżka lub adres pliku */
  file: string;
  /** własny podpis (domyślnie nazwa działu lub podtematu) */
  title?: string;
  /** data dodania, np. "2026-11-05" (świeże pliki dostają znacznik „Nowe”) */
  date?: string;
  type?: 'teoria' | 'zadania' | 'rozwiazania' | 'arkusz';
}

/** Podtemat działu: zwykły tekst albo obiekt z plikami. */
type TopicItem = string | { title: string; files?: PdfFile[] };

/** Dział (temat) na liście w materials.js. */
interface Topic {
  /** stały klucz działu, np. "matura-11"; nie zmieniaj go */
  key?: string;
  title?: string;
  /** wzór w LaTeX-u na karcie (w tekście JS podwójny \\) */
  formula?: string;
  items?: TopicItem[];
  /** dział informacyjny (poradnik): bez numeru „Dział NN” */
  info?: boolean;
  /** własny podpis nad nazwą działu */
  kicker?: string;
  files?: PdfFile[];
}

/** Sekcja strony, np. „Matura rozszerzona” albo „Studia”. */
interface Section {
  name: string;
  glyph?: string;
  /** np. "Dział" albo "Przedmiot" */
  unit?: string;
  /** odmiana: [1, 2–4, 5+], np. ["dział", "działy", "działów"] */
  units?: [string, string, string];
  intro?: string;
  tasksLabel?: string;
  tasksNote?: string;
  topics: Topic[];
}

/** Zadanie w zadania/<klucz działu>.js. */
interface Task {
  /** stały numer zadania w pliku: nie zmieniaj i nie używaj ponownie */
  id: number | string;
  /** nagłówek grupy (zadania z tą samą grupą trzymaj obok siebie) */
  group: string;
  /** treść */
  q: Html;
  /** rozwiązanie */
  sol: Html;
  /** odpowiedź */
  ans?: Html;
  /** rysunek pod treścią (SVG) */
  fig?: Html;
  /** słowa kluczowe do wyszukiwarki */
  tags?: string[];
  /** kody wymagań z podstawy programowej (klucze window.REQS), np. ["ZR III.5"] */
  req?: string[] | string;
  /** liczba punktów */
  pts?: number;
  /** źródło, np. "maj 2025 · zad. 11" */
  src?: string;
  /** własny podpis zamiast „CKE · matura …”, np. "autorskie" */
  label?: string;
}

/** Wpis w window.MOVED_TASKS: zadania przeniesione do innego działu. */
interface MovedTasks {
  from: string;
  to: string;
  ids: (number | string)[];
  /** { staryId: nowyId }, gdy w nowym dziale zadanie ma inne id */
  as?: Record<string, number | string>;
}

interface Window {
  SITE: { title?: string; lead?: string; contact?: string };
  MATERIALS: Record<string, Section>;
  /** teoria działów: klucz działu → HTML */
  THEORY: Record<string, Html>;
  /** zadania działów: klucz działu → lista zadań */
  TASKS: Record<string, Task[]>;
  MOVED_TASKS: MovedTasks[];
  /** kod wymagania → opis */
  REQS: Record<string, string>;
}
