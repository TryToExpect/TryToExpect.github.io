(window.TASKS = window.TASKS || {})['matura-4'] = [
  {
    group: "Równania trygonometryczne",
    src: "maj 2023 · zad. 6",
    pts: 3,
    tags: ["równanie trygonometryczne", "iloczyn na sumę"],
    q: String.raw`<p>Rozwiąż równanie
\[4\sin(4x)\cos(6x)=2\sin(10x)+1.\]</p>`,
    ans: String.raw`\(x=-\tfrac{\pi}{12}+k\pi\) lub \(x=\tfrac{7\pi}{12}+k\pi\), \(k\in\mathbb{Z}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Iloczyn sinusa i cosinusa zamieniamy na sumę wzorem \(2\sin\alpha\cos\beta=\sin(\alpha+\beta)+\sin(\alpha-\beta)\).</p>
<p class="step"><b>Krok 1.</b> \(4\sin4x\cos6x=2\bigl(\sin10x+\sin(-2x)\bigr)=2\sin10x-2\sin2x\).</p>
<p class="step"><b>Krok 2.</b> Równanie przyjmuje postać \(2\sin10x-2\sin2x=2\sin10x+1\), czyli \(-2\sin2x=1\), a stąd \(\sin2x=-\tfrac12\).</p>
<p class="step"><b>Krok 3.</b> \(2x=-\tfrac\pi6+2k\pi\) lub \(2x=\tfrac{7\pi}6+2k\pi\), więc
\[x=-\frac\pi{12}+k\pi\quad\text{lub}\quad x=\frac{7\pi}{12}+k\pi,\qquad k\in\mathbb{Z}.\]</p>`
  },
  {
    group: "Równania trygonometryczne",
    src: "maj 2022 · zad. 11",
    pts: 4,
    tags: ["równanie trygonometryczne", "suma sinusów", "przedział"],
    q: String.raw`<p>Rozwiąż równanie
\[\sin x+\sin2x+\sin3x=0\]
w przedziale \(\langle0,\pi\rangle\).</p>`,
    ans: String.raw`\(x\in\left\{0,\ \tfrac\pi2,\ \tfrac{2\pi}3,\ \pi\right\}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Grupujemy skrajne składniki: \(\sin x+\sin3x=2\sin2x\cos x\) (wzór na sumę sinusów). Pojawia się wspólny czynnik \(\sin2x\).</p>
<p class="step"><b>Krok 1.</b> \(\sin x+\sin3x+\sin2x=2\sin2x\cos x+\sin2x=\sin2x\,(2\cos x+1)=0\).</p>
<p class="step"><b>Krok 2: \(\sin2x=0\).</b> \(2x=k\pi\), czyli \(x=\tfrac{k\pi}2\). W przedziale \(\langle0,\pi\rangle\) są to \(0,\ \tfrac\pi2,\ \pi\).</p>
<p class="step"><b>Krok 3: \(\cos x=-\tfrac12\).</b> W przedziale \(\langle0,\pi\rangle\) jest to \(x=\tfrac{2\pi}3\).</p>`
  },
  {
    group: "Równania trygonometryczne",
    src: "maj 2026 · zad. 7",
    pts: 4,
    tags: ["równanie trygonometryczne", "sinus potrójnego kąta"],
    q: String.raw`<p>Rozwiąż równanie
\[\sin(6x)-2\sin(2x)=0.\]</p>`,
    ans: String.raw`\(x=\tfrac{k\pi}{2}\) lub \(x=\pm\tfrac{\pi}{12}+\tfrac{k\pi}{2}\), \(k\in\mathbb{Z}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> \(6x=3\cdot2x\), więc skorzystamy ze wzoru na sinus potrójnego kąta \(\sin3\alpha=3\sin\alpha-4\sin^3\alpha\) dla \(\alpha=2x\), podstawiając \(t=\sin2x\).</p>
<p class="step"><b>Krok 1.</b> \(\sin6x-2\sin2x=3t-4t^3-2t=t-4t^3=t\,(1-4t^2)=0\), skąd \(t=0\) lub \(t=\pm\tfrac12\).</p>
<p class="step"><b>Krok 2: \(\sin2x=0\).</b> \(2x=k\pi\), czyli \(x=\tfrac{k\pi}{2}\).</p>
<p class="step"><b>Krok 3: \(\sin2x=\pm\tfrac12\).</b> To znaczy \(\sin^22x=\tfrac14\), a stąd \(\cos4x=1-2\sin^22x=\tfrac12\). Zatem \(4x=\pm\tfrac\pi3+2k\pi\), czyli \(x=\pm\tfrac\pi{12}+\tfrac{k\pi}2\).</p>
<p class="note"><b>Sprawdzenie:</b> dla \(x=\tfrac{7\pi}{12}\) (\(=\tfrac\pi{12}+\tfrac\pi2\)) mamy \(\sin2x=\sin\tfrac{7\pi}6=-\tfrac12\), więc \(t=-\tfrac12\) ✓.</p>`
  },
  {
    group: "Równania trygonometryczne",
    src: "maj 2025 · zad. 9",
    pts: 5,
    tags: ["równanie trygonometryczne", "kąt podwojony", "przedział"],
    q: String.raw`<p>Rozwiąż równanie
\[3\cos^2x+\sqrt3\sin(2x)-3\sin^2x=0\]
w przedziale \([-\pi,\pi]\).</p>`,
    ans: String.raw`\(x\in\left\{-\tfrac{2\pi}{3},\ -\tfrac{\pi}{6},\ \tfrac{\pi}{3},\ \tfrac{5\pi}{6}\right\}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> \(\cos^2x-\sin^2x=\cos2x\), więc równanie zamienia się na równanie wyłącznie z kątem \(2x\).</p>
<p class="step"><b>Krok 1.</b> \(3(\cos^2x-\sin^2x)+\sqrt3\sin2x=3\cos2x+\sqrt3\sin2x=0\).</p>
<p class="step"><b>Krok 2.</b> Jeśli \(\cos2x=0\), to \(\sin2x=\pm1\) i lewa strona jest równa \(\pm\sqrt3\ne0\). Zatem \(\cos2x\ne0\) i możemy podzielić przez \(\cos2x\): \(3+\sqrt3\operatorname{tg}2x=0\), czyli \(\operatorname{tg}2x=-\sqrt3\).</p>
<p class="step"><b>Krok 3.</b> \(2x=-\tfrac\pi3+k\pi\), więc \(x=-\tfrac\pi6+\tfrac{k\pi}2\). Do przedziału \([-\pi,\pi]\) należą: dla \(k=-1\): \(-\tfrac{2\pi}3\); dla \(k=0\): \(-\tfrac\pi6\); dla \(k=1\): \(\tfrac\pi3\); dla \(k=2\): \(\tfrac{5\pi}6\). (Dla \(k=-2\) jest \(-\tfrac{7\pi}6&lt;-\pi\), a dla \(k=3\) jest \(\tfrac{4\pi}3>\pi\).)</p>`
  },
  {
    group: "Równania trygonometryczne",
    src: "maj 2024 · zad. 10",
    pts: 5,
    tags: ["równanie trygonometryczne", "wzory na cos3x i różnicę sinusów", "przedział"],
    q: String.raw`<p>Rozwiąż równanie
\[\sin(4x)-\sin(2x)=4\cos^2x-3\]
w zbiorze \([0,2\pi]\).</p>`,
    ans: String.raw`\(x\in\left\{\tfrac\pi6,\ \tfrac\pi4,\ \tfrac{5\pi}6,\ \tfrac{7\pi}6,\ \tfrac{5\pi}4,\ \tfrac{11\pi}6\right\}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Różnicę sinusów zamieniamy na iloczyn, a \(\cos3x\) rozpisujemy wzorem \(\cos3x=\cos x\,(4\cos^2x-3)\). Wtedy po obu stronach równania pojawia się ten sam czynnik \(4\cos^2x-3\).</p>
<p class="step"><b>Krok 1.</b> Lewa strona: \(\sin4x-\sin2x=2\cos3x\sin x=2\sin x\cos x\,(4\cos^2x-3)=\sin2x\,(4\cos^2x-3)\).</p>
<p class="step"><b>Krok 2.</b> Równanie przyjmuje postać \(\sin2x\,(4\cos^2x-3)=4\cos^2x-3\), czyli
\[(4\cos^2x-3)\,(\sin2x-1)=0.\]
(Nie dzielimy przez \(4\cos^2x-3\), żeby nie zgubić rozwiązań.)</p>
<p class="step"><b>Krok 3: \(\sin2x=1\).</b> \(2x=\tfrac\pi2+2k\pi\), \(x=\tfrac\pi4+k\pi\). W \([0,2\pi]\): \(\tfrac\pi4,\ \tfrac{5\pi}4\).</p>
<p class="step"><b>Krok 4: \(\cos^2x=\tfrac34\).</b> \(\cos x=\pm\tfrac{\sqrt3}2\). W \([0,2\pi]\): \(\tfrac\pi6,\ \tfrac{5\pi}6,\ \tfrac{7\pi}6,\ \tfrac{11\pi}6\).</p>`
  },
  {
    group: "Równania trygonometryczne",
    tags: ["równanie trygonometryczne", "sinus kąta podwojonego", "rozkład na czynniki", "przedział"],
    q: String.raw`<p>Rozwiąż równanie
\[\sin2x+2\sin x+\cos x+1=0\]
dla \(x\in\langle-\pi,\pi\rangle\).</p>`,
    ans: String.raw`\(x\in\left\{-\pi,\ -\tfrac{5\pi}{6},\ -\tfrac{\pi}{6},\ \pi\right\}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Zamieniamy \(\sin2x\) na \(2\sin x\cos x\) i rozkładamy lewą stronę na czynniki.</p>
<p class="step"><b>Krok 1: rozkład na czynniki.</b>
\[2\sin x\cos x+2\sin x+\cos x+1=0\]
\[2\sin x\,(\cos x+1)+(\cos x+1)=0\]
\[(\cos x+1)(2\sin x+1)=0\]
Zatem \(\cos x=-1\) lub \(\sin x=-\tfrac12\).</p>
<p class="step"><b>Krok 2: rozwiązania w przedziale \(\langle-\pi,\pi\rangle\).</b></p>
<ul>
<li>\(\cos x=-1\): \(x=-\pi\) oraz \(x=\pi\) (oba końce przedziału);</li>
<li>\(\sin x=-\tfrac12\): \(x=-\tfrac\pi6\) oraz \(x=-\tfrac{5\pi}6\) (sinus jest ujemny w III i IV ćwiartce).</li>
</ul>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 350 265" width="350" height="265" role="img" aria-label="Okrąg jednostkowy z prostą y = −1/2 i prostą x = −1; zaznaczone punkty odpowiadające kątom −π/6, −5π/6 oraz −π i π"><circle class="s" style="fill:var(--surface)" cx="150" cy="140" r="96"/><line class="s" x1="36" y1="140" x2="270" y2="140" style="stroke-width:1"/><path class="s" d="M264,137L270,140L264,143" style="stroke-width:1"/><line class="s" x1="150" y1="252" x2="150" y2="20" style="stroke-width:1"/><path class="s" d="M147,26L150,20L153,26" style="stroke-width:1"/><text x="276" y="144">x</text><text x="158" y="26">y</text><text class="m" x="249" y="155">1</text><line class="a d" x1="58" y1="188" x2="256" y2="188"/><line class="a d" x1="54" y1="78" x2="54" y2="182"/><line class="p" x1="150" y1="140" x2="233.1" y2="188"/><line class="p" x1="150" y1="140" x2="66.9" y2="188"/><line class="p" x1="150" y1="140" x2="54" y2="140"/><circle class="dot" style="fill:var(--pen)" cx="233.1" cy="188" r="3.6"/><circle class="dot" style="fill:var(--pen)" cx="66.9" cy="188" r="3.6"/><circle class="dot" style="fill:var(--pen)" cx="54" cy="140" r="3.6"/><text x="240.1" y="205">−π/6</text><text x="63.9" y="205" text-anchor="end">−5π/6</text><text x="45" y="144" text-anchor="end">−π, π</text><text x="262" y="192"><tspan style="font-style:normal">sin</tspan> x = −1/2</text><text x="54" y="70" text-anchor="middle"><tspan style="font-style:normal">cos</tspan> x = −1</text></svg></div>
<p class="note">Rys. Rozwiązania na okręgu jednostkowym (czerwone punkty). Kąty dodatnie liczymy w lewo od osi \(Ox\), ujemne w prawo.</p>`
  },
  {
    group: "Zadania z parametrem",
    tags: ["równanie z parametrem", "iloczyn równy zero", "nierówność trygonometryczna", "liczba rozwiązań"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(\alpha\in\langle0;2\pi\rangle\), dla których równanie
\[(x^2-\sin2\alpha)(x-1)=0\]
ma trzy rozwiązania.</p>`,
    ans: String.raw`\(\alpha\in\left(0;\tfrac\pi4\right)\cup\left(\tfrac\pi4;\tfrac\pi2\right)\cup\left(\pi;\tfrac{5\pi}4\right)\cup\left(\tfrac{5\pi}4;\tfrac{3\pi}2\right)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Liczba \(x=1\) zeruje drugi czynnik, więc jest rozwiązaniem zawsze. Trzy różne rozwiązania są więc wtedy, gdy równanie \(x^2=\sin2\alpha\) ma dwa różne rozwiązania i żadne z nich nie jest równe \(1\).</p>
<p class="step"><b>Krok 1: warunek na \(\sin2\alpha\).</b> Równanie \(x^2=\sin2\alpha\) ma dwa różne rozwiązania, \(x=\pm\sqrt{\sin2\alpha}\), dokładnie wtedy, gdy \(\sin2\alpha&gt;0\). Jedno z nich jest równe \(1\) tylko wtedy, gdy \(\sin2\alpha=1\). Szukamy więc takich \(\alpha\), że
\[0&lt;\sin2\alpha&lt;1.\]</p>
<p class="step"><b>Krok 2: rozwiązanie nierówności.</b> Dla \(\alpha\in\langle0;2\pi\rangle\) kąt \(2\alpha\) przebiega przedział \(\langle0;4\pi\rangle\). Sinus jest w nim dodatni dla \(2\alpha\in(0;\pi)\cup(2\pi;3\pi)\), czyli dla \(\alpha\in\left(0;\tfrac\pi2\right)\cup\left(\pi;\tfrac{3\pi}2\right)\). Wartość \(1\) przyjmuje dla \(2\alpha=\tfrac\pi2\) oraz \(2\alpha=\tfrac{5\pi}2\), czyli dla \(\alpha=\tfrac\pi4\) i \(\alpha=\tfrac{5\pi}4\). Te dwie liczby wyrzucamy z wyznaczonych przedziałów.</p>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 360 205" width="360" height="205" role="img" aria-label="Wykres funkcji y = sin 2α w przedziale od 0 do 2π z zaznaczonym pasem 0 &lt; y &lt; 1 i przedziałami, w których zachodzi 0 &lt; sin 2α &lt; 1"><rect class="f2" x="36" y="38" width="300" height="62"/><line class="s d" x1="36" y1="38" x2="336" y2="38" style="stroke-width:1;stroke:var(--ink-2)"/><line class="s" x1="36" y1="100" x2="336" y2="100" style="stroke-width:1;stroke:var(--ink-2)"/><line class="s" x1="30" y1="176" x2="348" y2="176" style="stroke-width:1"/><path class="s" d="M342,173L348,176L342,179" style="stroke-width:1"/><text x="353" y="180">α</text><line class="s" x1="36" y1="176" x2="36" y2="180" style="stroke-width:1"/><line class="s" x1="73.5" y1="176" x2="73.5" y2="180" style="stroke-width:1"/><line class="s" x1="111" y1="176" x2="111" y2="180" style="stroke-width:1"/><line class="s" x1="148.5" y1="176" x2="148.5" y2="180" style="stroke-width:1"/><line class="s" x1="186" y1="176" x2="186" y2="180" style="stroke-width:1"/><line class="s" x1="223.5" y1="176" x2="223.5" y2="180" style="stroke-width:1"/><line class="s" x1="261" y1="176" x2="261" y2="180" style="stroke-width:1"/><line class="s" x1="298.5" y1="176" x2="298.5" y2="180" style="stroke-width:1"/><line class="s" x1="336" y1="176" x2="336" y2="180" style="stroke-width:1"/><text class="m" x="336" y="193" text-anchor="middle">2π</text><text class="m" x="261" y="193" text-anchor="middle">3π/2</text><text class="m" x="223.5" y="193" text-anchor="middle">5π/4</text><text class="m" x="186" y="193" text-anchor="middle">π</text><text class="m" x="111" y="193" text-anchor="middle">π/2</text><text class="m" x="73.5" y="193" text-anchor="middle">π/4</text><text class="m" x="36" y="193" text-anchor="middle">0</text><line class="s" x1="36" y1="100" x2="36" y2="176" style="stroke-dasharray:1.5 3;stroke-width:1;stroke:var(--ink-2)"/><line class="s" x1="111" y1="100" x2="111" y2="176" style="stroke-dasharray:1.5 3;stroke-width:1;stroke:var(--ink-2)"/><line class="s" x1="186" y1="100" x2="186" y2="176" style="stroke-dasharray:1.5 3;stroke-width:1;stroke:var(--ink-2)"/><line class="s" x1="261" y1="100" x2="261" y2="176" style="stroke-dasharray:1.5 3;stroke-width:1;stroke:var(--ink-2)"/><line class="s" x1="73.5" y1="38" x2="73.5" y2="176" style="stroke-dasharray:1.5 3;stroke-width:1;stroke:var(--ink-2)"/><line class="s" x1="223.5" y1="38" x2="223.5" y2="176" style="stroke-dasharray:1.5 3;stroke-width:1;stroke:var(--ink-2)"/><path class="a" d="M111,100L112.9,104.9L114.8,109.7L116.6,114.5L118.5,119.2L120.4,123.7L122.2,128.1L124.1,132.4L126,136.4L127.9,140.3L129.8,143.8L131.6,147.1L133.5,150.2L135.4,152.9L137.2,155.2L139.1,157.3L141,159L142.9,160.3L144.8,161.2L146.6,161.8L148.5,162L150.4,161.8L152.2,161.2L154.1,160.3L156,159L157.9,157.3L159.8,155.2L161.6,152.9L163.5,150.2L165.4,147.1L167.2,143.8L169.1,140.3L171,136.4L172.9,132.4L174.8,128.1L176.6,123.7L178.5,119.2L180.4,114.5L182.2,109.7L184.1,104.9L186,100"/><path class="a" d="M261,100L262.9,104.9L264.8,109.7L266.6,114.5L268.5,119.2L270.4,123.7L272.2,128.1L274.1,132.4L276,136.4L277.9,140.3L279.8,143.8L281.6,147.1L283.5,150.2L285.4,152.9L287.2,155.2L289.1,157.3L291,159L292.9,160.3L294.8,161.2L296.6,161.8L298.5,162L300.4,161.8L302.2,161.2L304.1,160.3L306,159L307.9,157.3L309.8,155.2L311.6,152.9L313.5,150.2L315.4,147.1L317.2,143.8L319.1,140.3L321,136.4L322.9,132.4L324.8,128.1L326.6,123.7L328.5,119.2L330.4,114.5L332.2,109.7L334.1,104.9L336,100"/><path class="p" d="M36,100L37.9,95.1L39.8,90.3L41.6,85.5L43.5,80.8L45.4,76.3L47.2,71.9L49.1,67.6L51,63.6L52.9,59.7L54.8,56.2L56.6,52.9L58.5,49.8L60.4,47.1L62.2,44.8L64.1,42.7L66,41L67.9,39.7L69.8,38.8L71.6,38.2L73.5,38L75.4,38.2L77.2,38.8L79.1,39.7L81,41L82.9,42.7L84.8,44.8L86.6,47.1L88.5,49.8L90.4,52.9L92.2,56.2L94.1,59.7L96,63.6L97.9,67.6L99.8,71.9L101.6,76.3L103.5,80.8L105.4,85.5L107.2,90.3L109.1,95.1L111,100" style="stroke-width:2.4"/><path class="p" d="M186,100L187.9,95.1L189.8,90.3L191.6,85.5L193.5,80.8L195.4,76.3L197.2,71.9L199.1,67.6L201,63.6L202.9,59.7L204.8,56.2L206.6,52.9L208.5,49.8L210.4,47.1L212.2,44.8L214.1,42.7L216,41L217.9,39.7L219.8,38.8L221.6,38.2L223.5,38L225.4,38.2L227.2,38.8L229.1,39.7L231,41L232.9,42.7L234.8,44.8L236.6,47.1L238.5,49.8L240.4,52.9L242.2,56.2L244.1,59.7L246,63.6L247.9,67.6L249.8,71.9L251.6,76.3L253.5,80.8L255.4,85.5L257.2,90.3L259.1,95.1L261,100" style="stroke-width:2.4"/><line class="p" x1="36" y1="176" x2="111" y2="176" style="stroke-width:3.6"/><line class="p" x1="186" y1="176" x2="261" y2="176" style="stroke-width:3.6"/><circle class="p" style="fill:var(--surface)" cx="36" cy="176" r="3.6"/><circle class="p" style="fill:var(--surface)" cx="73.5" cy="176" r="3.6"/><circle class="p" style="fill:var(--surface)" cx="111" cy="176" r="3.6"/><circle class="p" style="fill:var(--surface)" cx="186" cy="176" r="3.6"/><circle class="p" style="fill:var(--surface)" cx="223.5" cy="176" r="3.6"/><circle class="p" style="fill:var(--surface)" cx="261" cy="176" r="3.6"/><circle class="p" style="fill:var(--surface)" cx="36" cy="100" r="3.4"/><circle class="p" style="fill:var(--surface)" cx="111" cy="100" r="3.4"/><circle class="p" style="fill:var(--surface)" cx="186" cy="100" r="3.4"/><circle class="p" style="fill:var(--surface)" cx="261" cy="100" r="3.4"/><circle class="p" style="fill:var(--surface)" cx="73.5" cy="38" r="3.4"/><circle class="p" style="fill:var(--surface)" cx="223.5" cy="38" r="3.4"/><text class="m" x="29" y="42" text-anchor="end">1</text><text class="m" x="29" y="104" text-anchor="end">0</text><text class="m" x="29" y="166" text-anchor="end">−1</text><text class="m" x="152" y="73" text-anchor="middle">0 &lt; sin 2α &lt; 1</text><text x="336" y="28" text-anchor="end">y = <tspan style="font-style:normal">sin</tspan> 2α</text></svg></div>
<p class="note">Rys. Wykres \(y=\sin2\alpha\). Czerwone fragmenty leżą w pasie \(0&lt;y&lt;1\), a odpowiadające im \(\alpha\) są zaznaczone na osi; puste kółka to punkty wyłączone.</p>`
  },
  {
    group: "Zadania z parametrem",
    tags: ["równanie z parametrem", "symetria wykresu", "liczba rozwiązań", "przedział"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(a\), dla których równanie
\[(\cos x+a)\cdot(\sin^2x-a)=0\]
ma w przedziale \(\langle0,2\pi\rangle\) dokładnie trzy różne rozwiązania.</p>`,
    ans: String.raw`\(a=1\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Zamiana \(x\) na \(2\pi-x\) nie zmienia lewej strony (\(\cos(2\pi-x)=\cos x\), \(\sin^2(2\pi-x)=\sin^2x\)), więc rozwiązania w przedziale \(\langle0,2\pi\rangle\) łączą się w pary \(x\) i \(2\pi-x\). Bez pary jest tylko \(x=\pi\). Liczba rozwiązań jest więc nieparzysta tylko wtedy, gdy \(x=\pi\) jest rozwiązaniem.</p>
<p class="step"><b>Krok 1: warunek konieczny.</b> Trzy to liczba nieparzysta, więc \(x=\pi\) musi być rozwiązaniem:
\[(\cos\pi+a)(\sin^2\pi-a)=(a-1)\cdot(-a)=0.\]
Stąd \(a=0\) lub \(a=1\).</p>
<p class="step"><b>Krok 2: sprawdzamy obie wartości.</b></p>
<ul>
<li>\(a=1\): równanie ma postać \((\cos x+1)(\sin^2x-1)=-(\cos x+1)\cos^2x=0\), więc \(\cos x=-1\) lub \(\cos x=0\), czyli \(x=\pi\), \(x=\tfrac\pi2\), \(x=\tfrac{3\pi}2\): <b>trzy</b> rozwiązania ✓;</li>
<li>\(a=0\): równanie ma postać \(\cos x\cdot\sin^2x=0\), więc \(\cos x=0\) (\(x=\tfrac\pi2,\ \tfrac{3\pi}2\)) lub \(\sin x=0\) (\(x=0,\ \pi,\ 2\pi\)): <b>pięć</b> rozwiązań ✗.</li>
</ul>
<div class="fig-wrap" style="flex-wrap:wrap;gap:6px 24px"><svg class="fig" viewBox="0 0 360 156" width="360" height="156" role="img" aria-label="Wykres y = cos x w przedziale od 0 do 2π dla a = 1: proste cos x = 0 i cos x = −1 dają trzy rozwiązania: π/2, π i 3π/2"><line class="s" x1="34" y1="134" x2="280" y2="134" style="stroke-width:1"/><path class="s" d="M274,131L280,134L274,137" style="stroke-width:1"/><text x="285" y="138">x</text><line class="s" x1="40" y1="134" x2="40" y2="138" style="stroke-width:1"/><text class="m" x="40" y="151" text-anchor="middle">0</text><line class="s" x1="97.5" y1="134" x2="97.5" y2="138" style="stroke-width:1"/><text class="m" x="97.5" y="151" text-anchor="middle">π/2</text><line class="s" x1="155" y1="134" x2="155" y2="138" style="stroke-width:1"/><text class="m" x="155" y="151" text-anchor="middle">π</text><line class="s" x1="212.5" y1="134" x2="212.5" y2="138" style="stroke-width:1"/><text class="m" x="212.5" y="151" text-anchor="middle">3π/2</text><line class="s" x1="270" y1="134" x2="270" y2="138" style="stroke-width:1"/><text class="m" x="270" y="151" text-anchor="middle">2π</text><line class="a d" x1="155" y1="17.2" x2="155" y2="134"/><line class="p d" x1="40" y1="70" x2="278" y2="70"/><text x="282" y="74">cos x = 0</text><line class="p d" x1="40" y1="114" x2="278" y2="114"/><text x="282" y="118">cos x = −1</text><path class="a" d="M40,26L42.3,26.1L44.6,26.3L46.9,26.8L49.2,27.4L51.5,28.2L53.8,29.1L56.1,30.2L58.4,31.4L60.7,32.8L63,34.4L65.3,36.1L67.6,37.9L69.9,39.9L72.2,42L74.5,44.1L76.8,46.4L79.1,48.8L81.4,51.3L83.7,53.8L86,56.4L88.3,59.1L90.6,61.8L92.9,64.5L95.2,67.2L97.5,70L99.8,72.8L102.1,75.5L104.4,78.2L106.7,80.9L109,83.6L111.3,86.2L113.6,88.7L115.9,91.2L118.2,93.6L120.5,95.9L122.8,98L125.1,100.1L127.4,102.1L129.7,103.9L132,105.6L134.3,107.2L136.6,108.6L138.9,109.8L141.2,110.9L143.5,111.8L145.8,112.6L148.1,113.2L150.4,113.7L152.7,113.9L155,114L157.3,113.9L159.6,113.7L161.9,113.2L164.2,112.6L166.5,111.8L168.8,110.9L171.1,109.8L173.4,108.6L175.7,107.2L178,105.6L180.3,103.9L182.6,102.1L184.9,100.1L187.2,98L189.5,95.9L191.8,93.6L194.1,91.2L196.4,88.7L198.7,86.2L201,83.6L203.3,80.9L205.6,78.2L207.9,75.5L210.2,72.8L212.5,70L214.8,67.2L217.1,64.5L219.4,61.8L221.7,59.1L224,56.4L226.3,53.8L228.6,51.3L230.9,48.8L233.2,46.4L235.5,44.1L237.8,42L240.1,39.9L242.4,37.9L244.7,36.1L247,34.4L249.3,32.8L251.6,31.4L253.9,30.2L256.2,29.1L258.5,28.2L260.8,27.4L263.1,26.8L265.4,26.3L267.7,26.1L270,26"/><circle class="dot" style="fill:var(--pen)" cx="97.5" cy="70" r="3.4"/><circle class="dot" style="fill:var(--pen)" cx="155" cy="114" r="3.4"/><circle class="dot" style="fill:var(--pen)" cx="212.5" cy="70" r="3.4"/><text class="m" x="33" y="30" text-anchor="end">1</text><text class="m" x="33" y="74" text-anchor="end">0</text><text class="m" x="33" y="118" text-anchor="end">−1</text><text x="40" y="14">a = 1, N = 3</text><text x="155" y="14" text-anchor="middle">x = π</text><text x="270" y="14" text-anchor="end">y = <tspan style="font-style:normal">cos</tspan> x</text></svg><svg class="fig" viewBox="0 0 360 156" width="360" height="156" role="img" aria-label="Wykres y = cos x w przedziale od 0 do 2π dla a = 0: proste cos x = 1, cos x = 0 i cos x = −1 dają pięć rozwiązań: 0, π/2, π, 3π/2 i 2π"><line class="s" x1="34" y1="134" x2="280" y2="134" style="stroke-width:1"/><path class="s" d="M274,131L280,134L274,137" style="stroke-width:1"/><text x="285" y="138">x</text><line class="s" x1="40" y1="134" x2="40" y2="138" style="stroke-width:1"/><text class="m" x="40" y="151" text-anchor="middle">0</text><line class="s" x1="97.5" y1="134" x2="97.5" y2="138" style="stroke-width:1"/><text class="m" x="97.5" y="151" text-anchor="middle">π/2</text><line class="s" x1="155" y1="134" x2="155" y2="138" style="stroke-width:1"/><text class="m" x="155" y="151" text-anchor="middle">π</text><line class="s" x1="212.5" y1="134" x2="212.5" y2="138" style="stroke-width:1"/><text class="m" x="212.5" y="151" text-anchor="middle">3π/2</text><line class="s" x1="270" y1="134" x2="270" y2="138" style="stroke-width:1"/><text class="m" x="270" y="151" text-anchor="middle">2π</text><line class="a d" x1="155" y1="17.2" x2="155" y2="134"/><line class="p d" x1="40" y1="26" x2="278" y2="26"/><text x="282" y="30">cos x = 1</text><line class="p d" x1="40" y1="70" x2="278" y2="70"/><text x="282" y="74">cos x = 0</text><line class="p d" x1="40" y1="114" x2="278" y2="114"/><text x="282" y="118">cos x = −1</text><path class="a" d="M40,26L42.3,26.1L44.6,26.3L46.9,26.8L49.2,27.4L51.5,28.2L53.8,29.1L56.1,30.2L58.4,31.4L60.7,32.8L63,34.4L65.3,36.1L67.6,37.9L69.9,39.9L72.2,42L74.5,44.1L76.8,46.4L79.1,48.8L81.4,51.3L83.7,53.8L86,56.4L88.3,59.1L90.6,61.8L92.9,64.5L95.2,67.2L97.5,70L99.8,72.8L102.1,75.5L104.4,78.2L106.7,80.9L109,83.6L111.3,86.2L113.6,88.7L115.9,91.2L118.2,93.6L120.5,95.9L122.8,98L125.1,100.1L127.4,102.1L129.7,103.9L132,105.6L134.3,107.2L136.6,108.6L138.9,109.8L141.2,110.9L143.5,111.8L145.8,112.6L148.1,113.2L150.4,113.7L152.7,113.9L155,114L157.3,113.9L159.6,113.7L161.9,113.2L164.2,112.6L166.5,111.8L168.8,110.9L171.1,109.8L173.4,108.6L175.7,107.2L178,105.6L180.3,103.9L182.6,102.1L184.9,100.1L187.2,98L189.5,95.9L191.8,93.6L194.1,91.2L196.4,88.7L198.7,86.2L201,83.6L203.3,80.9L205.6,78.2L207.9,75.5L210.2,72.8L212.5,70L214.8,67.2L217.1,64.5L219.4,61.8L221.7,59.1L224,56.4L226.3,53.8L228.6,51.3L230.9,48.8L233.2,46.4L235.5,44.1L237.8,42L240.1,39.9L242.4,37.9L244.7,36.1L247,34.4L249.3,32.8L251.6,31.4L253.9,30.2L256.2,29.1L258.5,28.2L260.8,27.4L263.1,26.8L265.4,26.3L267.7,26.1L270,26"/><circle class="dot" style="fill:var(--pen)" cx="40" cy="26" r="3.4"/><circle class="dot" style="fill:var(--pen)" cx="97.5" cy="70" r="3.4"/><circle class="dot" style="fill:var(--pen)" cx="155" cy="114" r="3.4"/><circle class="dot" style="fill:var(--pen)" cx="212.5" cy="70" r="3.4"/><circle class="dot" style="fill:var(--pen)" cx="270" cy="26" r="3.4"/><text class="m" x="33" y="30" text-anchor="end">1</text><text class="m" x="33" y="74" text-anchor="end">0</text><text class="m" x="33" y="118" text-anchor="end">−1</text><text x="40" y="14">a = 0, N = 5</text><text x="155" y="14" text-anchor="middle">x = π</text><text x="270" y="14" text-anchor="end">y = <tspan style="font-style:normal">cos</tspan> x</text></svg></div>
<p class="note">Rys. Rozwiązania równania dla \(a=1\) (po lewej) i \(a=0\) (po prawej); \(N\) to liczba rozwiązań. Rozwiązania leżą symetrycznie względem prostej \(x=\pi\).</p>`
  }
];
