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
