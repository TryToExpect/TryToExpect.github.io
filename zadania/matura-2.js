(window.TASKS = window.TASKS || {})['matura-2'] = [
  {
    id: 7,
    group: "Układy równań",
    label: "autorskie",
    pts: 3,
    tags: ["układ równań", "prosta i okrąg", "podstawianie"],
    req: ["ZR IV"],
    q: String.raw`<p>Rozwiąż układ równań
\[\begin{cases}x^2+y^2=10,\\ x-y=2.\end{cases}\]</p>`,
    ans: String.raw`\((3,1)\) oraz \((-1,-3)\)`,
    sol: String.raw`<p class="step"><b>Podstawienie.</b> Z drugiego równania \(x=y+2\). Wstawiamy do pierwszego: \((y+2)^2+y^2=10\), czyli \(2y^2+4y-6=0\), a po podzieleniu przez \(2\): \(y^2+2y-3=0\).</p>
<p class="step"><b>Rozwiązanie.</b> \((y+3)(y-1)=0\), więc \(y=1\) lub \(y=-3\). Stąd \(x=3\) lub \(x=-1\).</p>
<p class="step"><b>Sprawdzenie.</b> \(3^2+1^2=10\), \(3-1=2\) ✓; \((-1)^2+(-3)^2=10\), \(-1-(-3)=2\) ✓.</p>`
  },
  {
    id: 8,
    group: "Układy równań",
    label: "autorskie",
    pts: 4,
    tags: ["układ równań", "dwa okręgi", "cięciwa wspólna"],
    req: ["ZR IV", "ZR IX.2"],
    q: String.raw`<p>Wyznacz punkty wspólne okręgów o równaniach \(x^2+y^2-6x=0\) oraz \(x^2+y^2-6y=0\) i oblicz długość ich wspólnej cięciwy.</p>`,
    ans: String.raw`punkty \((0,0)\) i \((3,3)\); długość cięciwy \(3\sqrt2\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Odejmujemy równania stronami – zniknie część kwadratowa i dostaniemy równanie prostej przechodzącej przez punkty wspólne.</p>
<p class="step"><b>Prosta.</b> \((x^2+y^2-6x)-(x^2+y^2-6y)=0\iff-6x+6y=0\iff y=x\).</p>
<p class="step"><b>Punkty.</b> Wstawiamy \(y=x\) do pierwszego równania: \(2x^2-6x=0\iff2x(x-3)=0\), więc \(x=0\) lub \(x=3\). Punkty wspólne: \((0,0)\) i \((3,3)\).</p>
<p class="step"><b>Cięciwa.</b> Długość odcinka o końcach \((0,0)\) i \((3,3)\) wynosi \(\sqrt{9+9}=3\sqrt2\).</p>`
  },
  {
    id: 9,
    group: "Zadania tekstowe",
    label: "autorskie",
    pts: 4,
    tags: ["zadanie tekstowe", "równanie wymierne", "wspólna praca"],
    req: ["ZP IV.2", "ZR III.2"],
    q: String.raw`<p>Dwie koparki pracując razem wykonują wykop w \(6\) dni. Pierwsza koparka sama wykonałaby ten wykop o \(5\) dni szybciej niż druga. W ile dni każda z koparek wykona wykop samodzielnie?</p>`,
    ans: String.raw`pierwsza w \(10\) dni, druga w \(15\) dni`,
    sol: String.raw`<p class="step"><b>Niewiadome.</b> Niech pierwsza koparka wykonuje wykop w \(x\) dni, wtedy druga w \(x+5\) dni (\(x>0\)). Dziennie wykonują one odpowiednio \(\tfrac1x\) i \(\tfrac1{x+5}\) wykopu.</p>
<p class="step"><b>Równanie.</b> Razem w jeden dzień: \(\dfrac1x+\dfrac1{x+5}=\dfrac16\). Mnożymy przez \(6x(x+5)\): \(6(x+5)+6x=x(x+5)\), czyli \(x^2-7x-30=0\).</p>
<p class="step"><b>Rozwiązanie.</b> \(\Delta=49+120=169\), \(x=\dfrac{7\pm13}2\), więc \(x=10\) lub \(x=-3\). Ujemne odrzucamy.</p>
<p class="step"><b>Odpowiedź.</b> Pierwsza koparka: \(10\) dni, druga: \(15\) dni. (Sprawdzenie: \(\tfrac1{10}+\tfrac1{15}=\tfrac3{30}+\tfrac2{30}=\tfrac16\) ✓.)</p>`
  },
  {
    id: 1,
    group: "Wartość bezwzględna",
    src: "maj 2025 · zad. 5",
    pts: 4,
    tags: ["nierówność", "wartość bezwzględna", "przedziały"],
    req: ["ZR III.4"],
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
    id: 2,
    group: "Wartość bezwzględna",
    src: "maj 2023 · zad. 9",
    pts: 4,
    tags: ["nierówność", "pierwiastki", "wartość bezwzględna"],
    req: ["ZR III.4"],
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
    id: 3,
    group: "Wartość bezwzględna",
    src: "maj 2026 · zad. 5",
    pts: 4,
    tags: ["nierówność", "wartość bezwzględna", "rozkład na czynniki"],
    req: ["ZR III.4"],
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
    id: 13,
    group: "Wartość bezwzględna",
    label: "autorskie",
    pts: 5,
    tags: ["wartość bezwzględna", "równanie", "nierówność", "metoda przedziałów"],
    req: ["ZR III.4"],
    q: String.raw`<p>Rozwiąż: a) równanie \(|2x-1|=x+4\); b) nierówność \(|x+1|+|x-4|&lt;7\).</p>`,
    ans: String.raw`a) \(x=-1\) lub \(x=5\); b) \(x\in(-2,5)\)`,
    sol: String.raw`<p class="step"><b>a)</b> Równanie \(|A|=B\) jest równoważne \(B\ge0\) oraz (\(A=B\) lub \(A=-B\)). Tu \(B=x+4\ge0\), czyli \(x\ge-4\).</p>
<p class="step">\(2x-1=x+4\iff x=5\) (spełnia \(x\ge-4\)); \(\ 2x-1=-(x+4)\iff3x=-3\iff x=-1\) (też spełnia). Rozwiązania: \(x=-1\) i \(x=5\).</p>
<p class="step"><b>b)</b> Wyrażenia zerują się dla \(x=-1\) i \(x=4\). Dzielimy oś na trzy przedziały.</p>
<p class="step">\(x&lt;-1\): \(-(x+1)-(x-4)=3-2x&lt;7\iff x>-2\), razem \(x\in(-2,-1)\).<br>
\(-1\le x&lt;4\): \((x+1)-(x-4)=5&lt;7\) – zawsze prawda, razem \(x\in[-1,4)\).<br>
\(x\ge4\): \((x+1)+(x-4)=2x-3&lt;7\iff x&lt;5\), razem \(x\in[4,5)\).</p>
<p class="step"><b>Suma:</b> \(x\in(-2,5)\). (Interpretacja: suma odległości punktu \(x\) od \(-1\) i od \(4\) jest mniejsza niż \(7\); środek odcinka to \(1{,}5\), a zbiór jest przedziałem o promieniu \(3{,}5\).)</p>`
  },
  {
    id: 4,
    group: "Wielomiany",
    src: "maj 2022 · zad. 9",
    pts: 4,
    tags: ["wielomiany", "twierdzenie o reszcie", "nierówność wielomianowa"],
    req: ["ZR II.1", "ZR III.1"],
    q: String.raw`<p>Reszta z dzielenia wielomianu \(W(x)=4x^3-6x^2-(5m+1)x-2m\) przez dwumian \(x+2\) jest równa \(-30\). Oblicz \(m\) i dla wyznaczonej wartości \(m\) rozwiąż nierówność \(W(x)\ge0\).</p>`,
    ans: String.raw`\(m=3\); \(x\in\left[-1,-\tfrac12\right]\cup[3,\infty)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Reszta z dzielenia wielomianu \(W(x)\) przez \(x+2\) to \(W(-2)\) (twierdzenie o reszcie). Stąd wyznaczymy \(m\), a potem rozłożymy \(W\) na czynniki.</p>
<p class="step"><b>Krok 1: parametr.</b> \(W(-2)=4\cdot(-8)-6\cdot4-(5m+1)(-2)-2m=-32-24+10m+2-2m=8m-54\). Z warunku \(8m-54=-30\) mamy \(m=3\).</p>
<p class="step"><b>Krok 2: rozkład.</b> Dla \(m=3\): \(W(x)=4x^3-6x^2-16x-6=2\,(2x^3-3x^2-8x-3)\). Dzielniki wyrazu wolnego: \(x=3\) daje \(54-27-24-3=0\), więc \((x-3)\) jest czynnikiem. Po podzieleniu \(2x^3-3x^2-8x-3=(x-3)(2x^2+3x+1)=(x-3)(2x+1)(x+1)\). Zatem
\[W(x)=2\,(x-3)(2x+1)(x+1).\]</p>
<p class="step"><b>Krok 3: nierówność \(W(x)\ge0\).</b> Pierwiastki: \(-1,\ -\tfrac12,\ 3\). Współczynnik przy \(x^3\) jest dodatni, więc znaki wielomianu (od prawej strony): \(+\) dla \(x>3\), \(-\) dla \(-\tfrac12&lt;x&lt;3\), \(+\) dla \(-1&lt;x&lt;-\tfrac12\), \(-\) dla \(x&lt;-1\). Stąd \(W(x)\ge0\) dla \(x\in\left[-1,-\tfrac12\right]\cup[3,\infty)\).</p>`
  },
  {
    id: 5,
    group: "Wielomiany",
    src: "maj 2019 · zad. 13",
    pts: 6,
    tags: ["wielomiany", "podzielność", "twierdzenie o reszcie"],
    req: ["ZR II.1", "ZR III.1"],
    q: String.raw`<p>Wielomian określony wzorem \(W(x)=2x^3+(m^3+2)x^2-11x-2(2m+1)\) jest podzielny przez dwumian \(x-2\), a przy dzieleniu przez dwumian \(x+1\) daje resztę \(6\). Oblicz \(m\) i dla wyznaczonej wartości \(m\) rozwiąż nierówność \(W(x)\le0\).</p>`,
    ans: String.raw`\(m=1\); \(x\in(-\infty,-3]\cup\left[-\tfrac12,2\right]\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> „Podzielny przez \(x-2\)” oznacza \(W(2)=0\). Reszta \(6\) z dzielenia przez \(x+1\) oznacza \(W(-1)=6\). Dwa warunki dają równania na \(m\).</p>
<p class="step"><b>Warunek 1.</b> \(W(2)=16+4(m^3+2)-22-2(2m+1)=4m^3-4m=0\), czyli \(4m(m-1)(m+1)=0\) i \(m\in\{-1,0,1\}\).</p>
<p class="step"><b>Warunek 2.</b> \(W(-1)=-2+(m^3+2)+11-2(2m+1)=m^3-4m+9\). Z \(W(-1)=6\) mamy \(m^3-4m+3=0\). Sprawdzamy kandydatów: \(m=1\): \(1-4+3=0\) ✓; \(m=0\): \(3\ne0\); \(m=-1\): \(-1+4+3=6\ne0\). Zatem \(m=1\).</p>
<p class="step"><b>Wielomian.</b> \(W(x)=2x^3+3x^2-11x-6\). Skoro \(W(2)=0\), to dzielimy przez \(x-2\): \(W(x)=(x-2)(2x^2+7x+3)=(x-2)(2x+1)(x+3)\).</p>
<p class="step"><b>Nierówność \(W(x)\le0\).</b> Pierwiastki: \(-3,\ -\tfrac12,\ 2\). Współczynnik przy \(x^3\) jest dodatni, więc \(W\le0\) dla \(x\le-3\) oraz dla \(-\tfrac12\le x\le2\).</p>`
  },
  {
    id: 14,
    group: "Wielomiany",
    label: "autorskie",
    pts: 3,
    tags: ["wielomian", "nierówność wielomianowa", "pierwiastek całkowity"],
    req: ["ZR II.3", "ZR III.1"],
    q: String.raw`<p>Rozwiąż nierówność \(x^3-2x^2-5x+6\ge0\).</p>`,
    ans: String.raw`\(x\in[-2,1]\cup[3,\infty)\)`,
    sol: String.raw`<p class="step"><b>Pierwiastek.</b> Dzielniki wyrazu wolnego \(6\): sprawdzamy \(x=1\): \(1-2-5+6=0\), więc \((x-1)\) jest czynnikiem.</p>
<p class="step"><b>Rozkład.</b> Dzielenie daje \(x^3-2x^2-5x+6=(x-1)(x^2-x-6)=(x-1)(x-3)(x+2)\).</p>
<p class="step"><b>Znaki.</b> Pierwiastki: \(-2,\ 1,\ 3\); współczynnik przy \(x^3\) dodatni, więc od prawej: \(+\) dla \(x>3\), \(-\) w \((1,3)\), \(+\) w \((-2,1)\), \(-\) dla \(x&lt;-2\).</p>
<p class="step"><b>Odpowiedź.</b> Nierówność \(\ge0\): \(x\in[-2,1]\cup[3,\infty)\) (końce należą, bo nierówność jest nieostra).</p>`
  },
  {
    id: 15,
    group: "Wielomiany",
    label: "autorskie",
    pts: 4,
    tags: ["wielomian", "pierwiastki", "współczynniki", "trzeci pierwiastek"],
    req: ["ZR II.1", "ZR II.3"],
    q: String.raw`<p>Liczby \(1\) i \(2\) są pierwiastkami wielomianu \(W(x)=x^3+ax^2+bx-6\). Wyznacz współczynniki \(a\) i \(b\) oraz trzeci pierwiastek tego wielomianu.</p>`,
    ans: String.raw`\(a=-6\), \(b=11\); trzeci pierwiastek \(3\)`,
    sol: String.raw`<p class="step"><b>Układ równań.</b> \(W(1)=1+a+b-6=0\), czyli \(a+b=5\). \(W(2)=8+4a+2b-6=0\), czyli \(2a+b=-1\).</p>
<p class="step"><b>Rozwiązanie.</b> Odejmując: \(a=-6\), a stąd \(b=11\). Wielomian: \(W(x)=x^3-6x^2+11x-6\).</p>
<p class="step"><b>Trzeci pierwiastek.</b> Z wzorów Viète’a dla wielomianu stopnia trzeciego iloczyn pierwiastków to \(-(-6)=6\), więc \(1\cdot2\cdot x_3=6\) i \(x_3=3\). Sprawdzenie: \((x-1)(x-2)(x-3)=x^3-6x^2+11x-6\) ✓.</p>`
  },
  {
    id: 16,
    group: "Wielomiany",
    label: "autorskie",
    pts: 2,
    tags: ["rozkład na czynniki", "grupowanie wyrazów", "równanie wielomianowe"],
    req: ["ZR II.2", "ZP III.5"],
    q: String.raw`<p>Rozłóż wielomian \(W(x)=x^3-3x^2-4x+12\) na czynniki pierwszego stopnia i rozwiąż równanie \(W(x)=0\).</p>`,
    ans: String.raw`\(W(x)=(x-3)(x-2)(x+2)\); \(x\in\{-2,2,3\}\)`,
    sol: String.raw`<p class="step"><b>Grupowanie.</b> \(x^3-3x^2-4x+12=x^2(x-3)-4(x-3)=(x-3)(x^2-4)\).</p>
<p class="step"><b>Wzór skróconego mnożenia.</b> \(x^2-4=(x-2)(x+2)\), więc \(W(x)=(x-3)(x-2)(x+2)\).</p>
<p class="step"><b>Równanie.</b> Iloczyn jest równy zero, gdy któryś czynnik jest zerem: \(x=3\), \(x=2\) lub \(x=-2\).</p>`
  },
  {
    id: 12,
    group: "Równania dwukwadratowe",
    label: "autorskie",
    pts: 5,
    tags: ["równanie dwukwadratowe", "parametr", "liczba rozwiązań"],
    req: ["ZR III.6", "ZR III.5"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(m\), dla których równanie \(x^4-(m+1)x^2+m=0\) ma dokładnie trzy różne rozwiązania rzeczywiste.</p>`,
    ans: String.raw`\(m=0\)`,
    sol: String.raw`<p class="step"><b>Rozkład.</b> Podstawiamy \(t=x^2\ge0\): \(t^2-(m+1)t+m=(t-1)(t-m)=0\), więc \(t=1\) lub \(t=m\). Wracając do \(x\): \(x^2=1\) lub \(x^2=m\).</p>
<p class="step"><b>Liczba rozwiązań.</b> Z \(x^2=1\) mamy zawsze dwa rozwiązania \(x=\pm1\). Równanie \(x^2=m\) daje:</p>
<ul>
<li>\(m&lt;0\): brak rozwiązań – razem \(2\) rozwiązania;</li>
<li>\(m=0\): jedno rozwiązanie \(x=0\) – razem \(3\) rozwiązania (\(-1,0,1\));</li>
<li>\(m=1\): rozwiązania \(\pm1\) już policzone – razem \(2\);</li>
<li>\(m>0,\ m\ne1\): dwa nowe rozwiązania \(\pm\sqrt m\) – razem \(4\).</li>
</ul>
<p class="step"><b>Odpowiedź.</b> Dokładnie trzy rozwiązania są tylko dla \(m=0\).</p>`
  },
  {
    id: 10,
    group: "Równania i nierówności wymierne",
    label: "autorskie",
    pts: 3,
    tags: ["równanie wymierne", "dziedzina", "iloczyn równy zero"],
    req: ["ZR III.7"],
    q: String.raw`<p>Rozwiąż równanie \(\dfrac{x^3-4x}{x^2-x-6}=0\).</p>`,
    ans: String.raw`\(x\in\{0,\ 2\}\)`,
    sol: String.raw`<p class="step"><b>Dziedzina.</b> \(x^2-x-6=(x-3)(x+2)\ne0\), czyli \(x\ne3\) i \(x\ne-2\).</p>
<p class="step"><b>Licznik.</b> \(x^3-4x=x(x-2)(x+2)=0\iff x\in\{-2,0,2\}\).</p>
<p class="step"><b>Odpowiedź.</b> Ułamek jest równy zero, gdy licznik jest równy zero, a mianownik nie. Liczba \(-2\) nie należy do dziedziny, więc zostają \(x=0\) i \(x=2\).</p>`
  },
  {
    id: 11,
    group: "Równania i nierówności wymierne",
    label: "autorskie",
    pts: 3,
    tags: ["nierówność wymierna", "znak ilorazu"],
    req: ["ZR III.2"],
    q: String.raw`<p>Rozwiąż nierówność \(\dfrac{x+3}{x-1}\le\dfrac2x\).</p>`,
    ans: String.raw`\(x\in(0,1)\)`,
    sol: String.raw`<p class="step"><b>Dziedzina.</b> \(x\ne0\) i \(x\ne1\).</p>
<p class="step"><b>Jedna strona.</b> Nie mnożymy przez wyrażenie o nieznanym znaku, tylko przenosimy i sprowadzamy do wspólnego mianownika:
\[\frac{x+3}{x-1}-\frac2x\le0\iff\frac{x(x+3)-2(x-1)}{x(x-1)}\le0\iff\frac{x^2+x+2}{x(x-1)}\le0.\]</p>
<p class="step"><b>Znaki.</b> Licznik \(x^2+x+2\) ma \(\Delta=1-8&lt;0\), więc jest zawsze dodatni. Ułamek jest więc niedodatni wtedy i tylko wtedy, gdy mianownik jest ujemny: \(x(x-1)&lt;0\iff0&lt;x&lt;1\). (Zero w liczniku nie występuje, więc nierówność nieostra daje ten sam wynik.)</p>
<p class="step"><b>Odpowiedź.</b> \(x\in(0,1)\).</p>`
  }
];
