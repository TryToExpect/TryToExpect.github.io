(window.TASKS = window.TASKS || {})['matura-2'] = [
  {
    group: "Wartość bezwzględna",
    src: "maj 2025 · zad. 5",
    pts: 4,
    tags: ["nierówność", "wartość bezwzględna", "przedziały"],
    q: String.raw`<p>Rozwiąż nierówność
\[|x-2|-2\cdot|x+3|&lt;-2.\]</p>`,
    ans: String.raw`\(x\in(-\infty,-10)\cup\left(-\tfrac23,\infty\right)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wyrażenia pod wartościami bezwzględnymi zmieniają znak w punktach \(x=2\) i \(x=-3\). Dzielimy oś liczbową na trzy przedziały i w każdym opuszczamy wartości bezwzględne.</p>
<p class="step"><b>1) \(x&lt;-3\).</b> Wtedy \(|x-2|=2-x\), \(|x+3|=-x-3\) i nierówność przyjmuje postać \((2-x)-2(-x-3)&lt;-2\), czyli \(x+8&lt;-2\), skąd \(x&lt;-10\). Razem z założeniem: \(x&lt;-10\).</p>
<p class="step"><b>2) \(-3\le x&lt;2\).</b> Wtedy \(|x-2|=2-x\), \(|x+3|=x+3\): \((2-x)-2(x+3)&lt;-2\), czyli \(-3x-4&lt;-2\), skąd \(x>-\tfrac23\). Razem z założeniem: \(x\in\left(-\tfrac23,\,2\right)\).</p>
<p class="step"><b>3) \(x\ge2\).</b> Wtedy \(|x-2|=x-2\), \(|x+3|=x+3\): \((x-2)-2(x+3)&lt;-2\), czyli \(-x-8&lt;-2\), skąd \(x>-6\). Razem z założeniem: \(x\ge2\).</p>
<p class="step"><b>Suma rozwiązań</b> z trzech przedziałów: \((-\infty,-10)\cup\left(-\tfrac23,2\right)\cup[2,\infty)=(-\infty,-10)\cup\left(-\tfrac23,\infty\right)\).</p>
<p class="note"><b>Sprawdzenie:</b> dla \(x=0\): \(2-6=-4&lt;-2\) ✓; dla \(x=-5\): \(7-4=3\not&lt;-2\) ✓ (nie należy do rozwiązania).</p>`
  },
  {
    group: "Wartość bezwzględna",
    src: "maj 2023 · zad. 9",
    pts: 4,
    tags: ["nierówność", "pierwiastki", "wartość bezwzględna"],
    q: String.raw`<p>Rozwiąż nierówność
\[\sqrt{x^2+4x+4}&lt;\frac{25}{3}-\sqrt{x^2-6x+9}.\]</p>`,
    ans: String.raw`\(x\in\left(-\tfrac{11}3,\ \tfrac{14}3\right)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wyrażenia pod pierwiastkami są kwadratami: \(x^2+4x+4=(x+2)^2\) i \(x^2-6x+9=(x-3)^2\). Ponieważ \(\sqrt{t^2}=|t|\), nierówność jest równoważna nierówności z wartościami bezwzględnymi:
\[|x+2|+|x-3|&lt;\frac{25}3.\]</p>
<p class="step"><b>1) \(x&lt;-2\).</b> \(-(x+2)-(x-3)=-2x+1&lt;\tfrac{25}3\Rightarrow x>-\tfrac{11}3\). Razem: \(x\in\left(-\tfrac{11}3,-2\right)\).</p>
<p class="step"><b>2) \(-2\le x\le3\).</b> \((x+2)-(x-3)=5&lt;\tfrac{25}3\) – zawsze prawda. Razem: cały przedział \([-2,3]\).</p>
<p class="step"><b>3) \(x>3\).</b> \((x+2)+(x-3)=2x-1&lt;\tfrac{25}3\Rightarrow x&lt;\tfrac{14}3\). Razem: \(x\in\left(3,\tfrac{14}3\right)\).</p>
<p class="step"><b>Suma:</b> \(x\in\left(-\tfrac{11}3,\tfrac{14}3\right)\).</p>
<p class="note"><b>Interpretacja:</b> \(|x+2|+|x-3|\) to suma odległości punktu \(x\) od liczb \(-2\) i \(3\). Wewnątrz odcinka \([-2,3]\) wynosi ona zawsze \(5\). Na zewnątrz jest równa \(5+2d\), gdzie \(d\) to odległość od najbliższego końca odcinka; warunek \(5+2d&lt;\tfrac{25}3\) daje \(d&lt;\tfrac53\). Rozwiązanie wystaje więc o \(\tfrac53\) poza oba końce: \(\left(-2-\tfrac53,\ 3+\tfrac53\right)\).</p>`
  },
  {
    group: "Wartość bezwzględna",
    src: "maj 2026 · zad. 5",
    pts: 4,
    tags: ["nierówność", "wartość bezwzględna", "rozkład na czynniki"],
    q: String.raw`<p>Rozwiąż nierówność
\[|2x-6|-|x^2-9|&lt;0.\]</p>`,
    ans: String.raw`\(x\in(-\infty,-5)\cup(-1,3)\cup(3,\infty)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wyłączamy wspólny czynnik \(x-3\): \(2x-6=2(x-3)\), a \(x^2-9=(x-3)(x+3)\).</p>
<p class="step"><b>Przekształcenie.</b> Nierówność \(|2x-6|&lt;|x^2-9|\) to \(2|x-3|&lt;|x-3|\cdot|x+3|\), czyli
\[|x-3|\cdot\bigl(2-|x+3|\bigr)&lt;0.\]</p>
<p class="step"><b>Rozstrzygnięcie.</b> Dla \(x=3\) lewa strona jest równa \(0\), więc \(x=3\) odpada. Dla \(x\ne3\) mamy \(|x-3|>0\), więc nierówność jest równoważna \(2-|x+3|&lt;0\), czyli \(|x+3|>2\). To oznacza \(x+3>2\) lub \(x+3&lt;-2\), czyli \(x>-1\) lub \(x&lt;-5\).</p>
<p class="step"><b>Wynik</b> (z wyłączeniem \(x=3\)): \(x\in(-\infty,-5)\cup(-1,3)\cup(3,\infty)\).</p>`
  },
  {
    group: "Wielomiany",
    src: "maj 2022 · zad. 9",
    pts: 4,
    tags: ["wielomiany", "twierdzenie o reszcie", "nierówność wielomianowa"],
    q: String.raw`<p>Reszta z dzielenia wielomianu \(W(x)=4x^3-6x^2-(5m+1)x-2m\) przez dwumian \(x+2\) jest równa \(-30\). Oblicz \(m\) i dla wyznaczonej wartości \(m\) rozwiąż nierówność \(W(x)\ge0\).</p>`,
    ans: String.raw`\(m=3\); \(x\in\left[-1,-\tfrac12\right]\cup[3,\infty)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Reszta z dzielenia wielomianu \(W(x)\) przez \(x+2\) to \(W(-2)\) (twierdzenie o reszcie). Stąd wyznaczymy \(m\), a potem rozłożymy \(W\) na czynniki.</p>
<p class="step"><b>Krok 1: parametr.</b> \(W(-2)=4\cdot(-8)-6\cdot4-(5m+1)(-2)-2m=-32-24+10m+2-2m=8m-54\). Z warunku \(8m-54=-30\) mamy \(m=3\).</p>
<p class="step"><b>Krok 2: rozkład.</b> Dla \(m=3\): \(W(x)=4x^3-6x^2-16x-6=2\,(2x^3-3x^2-8x-3)\). Dzielniki wyrazu wolnego: \(x=3\) daje \(54-27-24-3=0\), więc \((x-3)\) jest czynnikiem. Po podzieleniu \(2x^3-3x^2-8x-3=(x-3)(2x^2+3x+1)=(x-3)(2x+1)(x+1)\). Zatem
\[W(x)=2\,(x-3)(2x+1)(x+1).\]</p>
<p class="step"><b>Krok 3: nierówność \(W(x)\ge0\).</b> Pierwiastki: \(-1,\ -\tfrac12,\ 3\). Współczynnik przy \(x^3\) jest dodatni, więc znaki wielomianu (od prawej strony): \(+\) dla \(x>3\), \(-\) dla \(-\tfrac12&lt;x&lt;3\), \(+\) dla \(-1&lt;x&lt;-\tfrac12\), \(-\) dla \(x&lt;-1\). Stąd \(W(x)\ge0\) dla \(x\in\left[-1,-\tfrac12\right]\cup[3,\infty)\).</p>`
  },
  {
    group: "Wielomiany",
    src: "maj 2019 · zad. 13",
    pts: 6,
    tags: ["wielomiany", "podzielność", "twierdzenie o reszcie"],
    q: String.raw`<p>Wielomian określony wzorem \(W(x)=2x^3+(m^3+2)x^2-11x-2(2m+1)\) jest podzielny przez dwumian \(x-2\), a przy dzieleniu przez dwumian \(x+1\) daje resztę \(6\). Oblicz \(m\) i dla wyznaczonej wartości \(m\) rozwiąż nierówność \(W(x)\le0\).</p>`,
    ans: String.raw`\(m=1\); \(x\in(-\infty,-3]\cup\left[-\tfrac12,2\right]\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> „Podzielny przez \(x-2\)” oznacza \(W(2)=0\). Reszta \(6\) z dzielenia przez \(x+1\) oznacza \(W(-1)=6\). Dwa warunki dają równania na \(m\).</p>
<p class="step"><b>Warunek 1.</b> \(W(2)=16+4(m^3+2)-22-2(2m+1)=4m^3-4m=0\), czyli \(4m(m-1)(m+1)=0\) i \(m\in\{-1,0,1\}\).</p>
<p class="step"><b>Warunek 2.</b> \(W(-1)=-2+(m^3+2)+11-2(2m+1)=m^3-4m+9\). Z \(W(-1)=6\) mamy \(m^3-4m+3=0\). Sprawdzamy kandydatów: \(m=1\): \(1-4+3=0\) ✓; \(m=0\): \(3\ne0\); \(m=-1\): \(-1+4+3=6\ne0\). Zatem \(m=1\).</p>
<p class="step"><b>Wielomian.</b> \(W(x)=2x^3+3x^2-11x-6\). Skoro \(W(2)=0\), to dzielimy przez \(x-2\): \(W(x)=(x-2)(2x^2+7x+3)=(x-2)(2x+1)(x+3)\).</p>
<p class="step"><b>Nierówność \(W(x)\le0\).</b> Pierwiastki: \(-3,\ -\tfrac12,\ 2\). Współczynnik przy \(x^3\) jest dodatni, więc \(W\le0\) dla \(x\le-3\) oraz dla \(-\tfrac12\le x\le2\).</p>`
  },
  {
    group: "Równania wymierne z parametrem",
    src: "maj 2023 · zad. 11",
    pts: 5,
    tags: ["parametr", "wzory Viète'a", "równanie wymierne"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(m\ne2\), dla których równanie
\[x^2+4x-\frac{m-3}{m-2}=0\]
ma dwa różne rozwiązania rzeczywiste \(x_1\), \(x_2\) spełniające warunek \(x_1^3+x_2^3>-28\).</p>`,
    ans: String.raw`\(m\in\left(\tfrac{11}{5},\ \tfrac94\right)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Równanie jest kwadratowe względem \(x\) (współczynniki zależą od \(m\)). Najpierw warunek na dwa różne pierwiastki (\(\Delta>0\)), potem wzory Viète'a, które pozwalają zapisać \(x_1^3+x_2^3\) bez liczenia pierwiastków.</p>
<p class="step"><b>1) Dwa różne pierwiastki.</b> \(\Delta=16+4\cdot\dfrac{m-3}{m-2}=\dfrac{4\,(5m-11)}{m-2}>0\). Iloraz jest dodatni, gdy \(m&lt;2\) lub \(m>\tfrac{11}5\).</p>
<p class="step"><b>2) Wzory Viète'a.</b> \(x_1+x_2=-4\), \(x_1x_2=-\dfrac{m-3}{m-2}\). Stąd
\[x_1^3+x_2^3=(x_1+x_2)^3-3x_1x_2(x_1+x_2)=-64+12\,x_1x_2=-64-12\cdot\frac{m-3}{m-2}.\]</p>
<p class="step"><b>3) Nierówność.</b>
\[-64-12\cdot\frac{m-3}{m-2}>-28\iff\frac{m-3}{m-2}&lt;-3\iff\frac{m-3}{m-2}+3&lt;0\iff\frac{4m-9}{m-2}&lt;0.\]
Iloraz jest ujemny dla \(2&lt;m&lt;\tfrac94\).</p>
<p class="step"><b>4) Część wspólna:</b> \(\left(2,\tfrac94\right)\cap\Bigl(\left(-\infty,2\right)\cup\left(\tfrac{11}5,\infty\right)\Bigr)=\left(\tfrac{11}5,\tfrac94\right)\).</p>`
  }
];
