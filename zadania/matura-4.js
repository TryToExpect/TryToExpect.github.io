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
  }
];
