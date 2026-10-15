(window.TASKS = window.TASKS || {})['matura-15'] = [
  {
    id: 4,
    group: "Równość wielomianów, dzielenie i reszta",
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
    group: "Równość wielomianów, dzielenie i reszta",
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
    id: 15,
    group: "Równość wielomianów, dzielenie i reszta",
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
    id: 17,
    group: "Równość wielomianów, dzielenie i reszta",
    label: "autorskie",
    pts: 3,
    tags: ["twierdzenie o reszcie", "wielomian z parametrem", "reszta z dzielenia"],
    req: ["ZR II.1"],
    q: String.raw`<p>Reszta z dzielenia wielomianu \(W(x)=x^4-3x^3+ax-5\) przez dwumian \(x-2\) jest równa \(3\). Wyznacz \(a\) i oblicz resztę z dzielenia tego wielomianu przez dwumian \(x+1\).</p>`,
    ans: String.raw`\(a=8\); reszta \(-9\)`,
    sol: String.raw`<p class="step"><b>Twierdzenie o reszcie.</b> Reszta z dzielenia \(W(x)\) przez \(x-2\) to \(W(2)\). Zatem \(W(2)=16-24+2a-5=2a-13=3\), czyli \(a=8\).</p>
<p class="step"><b>Druga reszta.</b> Dla \(a=8\): \(W(x)=x^4-3x^3+8x-5\). Reszta z dzielenia przez \(x+1=x-(-1)\) to \(W(-1)=1+3-8-5=-9\).</p>`
  },
  {
    id: 18,
    group: "Równość wielomianów, dzielenie i reszta",
    label: "autorskie",
    pts: 3,
    tags: ["równość wielomianów", "porównywanie współczynników"],
    req: ["ZP II.2"],
    q: String.raw`<p>Wyznacz liczby \(a\) i \(b\) takie, że wielomiany \(P(x)=(x^2+ax+b)(x-2)\) oraz \(Q(x)=x^3+x^2-4x-4\) są równe.</p>`,
    ans: String.raw`\(a=3\), \(b=2\)`,
    sol: String.raw`<p class="step"><b>Wymnażamy.</b> \(P(x)=x^3+(a-2)x^2+(b-2a)x-2b\).</p>
<p class="step"><b>Porównanie współczynników</b> z \(Q(x)=x^3+x^2-4x-4\): przy \(x^2\): \(a-2=1\); przy \(x\): \(b-2a=-4\); wyrazy wolne: \(-2b=-4\).</p>
<p class="step"><b>Rozwiązanie.</b> Z pierwszego \(a=3\), z trzeciego \(b=2\); drugie równanie: \(2-6=-4\) ✓. Zatem \(a=3\), \(b=2\) i \(Q(x)=(x^2+3x+2)(x-2)\).</p>`
  },
  {
    id: 16,
    group: "Rozkład na czynniki i pierwiastki",
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
    id: 19,
    group: "Rozkład na czynniki i pierwiastki",
    label: "autorskie",
    pts: 4,
    tags: ["pierwiastki wymierne", "schemat Hornera", "równanie wielomianowe"],
    req: ["ZR II.3", "ZR II.2", "ZP III.5"],
    q: String.raw`<p>Rozwiąż równanie \(2x^3-3x^2-11x+6=0\).</p>`,
    ans: String.raw`\(x\in\left\{-2,\ \tfrac12,\ 3\right\}\)`,
    sol: String.raw`<p class="step"><b>Szukamy pierwiastka.</b> Sprawdzamy dzielniki wyrazu wolnego: dla \(x=3\) mamy \(54-27-33+6=0\), więc \(x=3\) jest pierwiastkiem.</p>
<p class="step"><b>Schemat Hornera</b> dla \(a=3\) i współczynników \(2,\ -3,\ -11,\ 6\): \(2\), \(-3+3\cdot2=3\), \(-11+3\cdot3=-2\), \(6+3\cdot(-2)=0\). Iloraz to \(2x^2+3x-2\), więc \(2x^3-3x^2-11x+6=(x-3)(2x^2+3x-2)\).</p>
<p class="step"><b>Dalszy rozkład.</b> \(2x^2+3x-2\): \(\Delta=9+16=25\), pierwiastki \(\dfrac{-3\pm5}4\), czyli \(\tfrac12\) i \(-2\). Zatem \(W(x)=(x-3)(2x-1)(x+2)\).</p>
<p class="step"><b>Odpowiedź.</b> \(x=-2\), \(x=\tfrac12\) lub \(x=3\).</p>`
  },
  {
    id: 14,
    group: "Nierówności wielomianowe",
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
    id: 20,
    group: "Nierówności wielomianowe",
    label: "autorskie",
    pts: 3,
    tags: ["nierówność wielomianowa", "pierwiastek podwójny", "wężyk"],
    req: ["ZR III.1"],
    q: String.raw`<p>Rozwiąż nierówność \((x^2-4)(x-1)^2(x+3)\le0\).</p>`,
    ans: String.raw`\(x\in(-\infty,-3]\cup[-2,2]\)`,
    sol: String.raw`<p class="step"><b>Pierwiastki.</b> \(x^2-4=(x-2)(x+2)\), więc pierwiastki to \(-3\), \(-2\), \(2\) (jednokrotne) oraz \(1\) (podwójny, bo czynnik \((x-1)^2\)).</p>
<p class="step"><b>Wężyk.</b> Po wymnożeniu współczynnik przy najwyższej potędze (\(x^5\)) jest dodatni, więc zaczynamy od prawej strony od góry: \(+\) dla \(x>2\); \(-\) na \((1,2)\); w \(1\) znak się nie zmienia (pierwiastek parzystej krotności), więc \(-\) także na \((-2,1)\); \(+\) na \((-3,-2)\); \(-\) dla \(x&lt;-3\).</p>
<p class="step"><b>Odpowiedź.</b> Szukamy miejsc, gdzie wielomian jest niedodatni (łącznie z pierwiastkami): \(x\in(-\infty,-3]\cup[-2,2]\). Liczba \(1\) należy do przedziału \([-2,2]\).</p>`
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
    id: 21,
    group: "Wielomiany z parametrem",
    label: "autorskie",
    pts: 4,
    tags: ["podzielność wielomianów", "współczynniki", "nierówność wielomianowa"],
    req: ["ZR II.1", "ZR III.1"],
    q: String.raw`<p>Wielomian \(W(x)=x^4+ax^3+bx^2-4x-4\) jest podzielny przez \(x^2-1\). Wyznacz \(a\) i \(b\), a następnie rozwiąż nierówność \(W(x)\ge0\).</p>`,
    ans: String.raw`\(a=4\), \(b=3\); \(x\in(-\infty,-1]\cup[1,\infty)\)`,
    sol: String.raw`<p class="step"><b>Warunki.</b> \(x^2-1=(x-1)(x+1)\), więc \(W(1)=0\) i \(W(-1)=0\): \(1+a+b-4-4=0\), czyli \(a+b=7\); \(1-a+b+4-4=0\), czyli \(b-a=-1\). Stąd \(a=4\), \(b=3\).</p>
<p class="step"><b>Rozkład.</b> \(W(x)=x^4+4x^3+3x^2-4x-4=(x^2-1)(x^2+4x+4)=(x^2-1)(x+2)^2\).</p>
<p class="step"><b>Nierówność.</b> \((x+2)^2\ge0\) dla każdego \(x\), więc znak \(W\) zależy od \(x^2-1\), a dla \(x=-2\) mamy \(W=0\). \(W(x)\ge0\iff x^2-1\ge0\) (lub \(x=-2\), które i tak spełnia \(x\le-1\)). Odpowiedź: \(x\in(-\infty,-1]\cup[1,\infty)\).</p>`
  },
  {
    id: 22,
    group: "Wielomiany z parametrem",
    label: "autorskie",
    pts: 3,
    tags: ["równanie wielomianowe z parametrem", "liczba rozwiązań", "rozkład na czynniki"],
    req: ["ZR III.5", "ZR II.3"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(m\), dla których równanie \(x^3-(m+2)x^2+(2m+1)x-m=0\) ma dokładnie dwa różne rozwiązania rzeczywiste.</p>`,
    ans: String.raw`\(m\in\mathbb R\setminus\{1\}\)`,
    sol: String.raw`<p class="step"><b>Pierwiastek niezależny od \(m\).</b> Dla \(x=1\): \(1-(m+2)+(2m+1)-m=0\), więc \(x=1\) jest pierwiastkiem dla każdego \(m\).</p>
<p class="step"><b>Rozkład.</b> Dzielimy przez \(x-1\) (schemat Hornera: \(1,\ -(m+2)+1=-(m+1),\ (2m+1)-(m+1)=m,\ -m+m=0\)): \(x^3-(m+2)x^2+(2m+1)x-m=(x-1)\bigl(x^2-(m+1)x+m\bigr)\). Trójmian ma pierwiastki \(1\) i \(m\), więc
\[x^3-(m+2)x^2+(2m+1)x-m=(x-1)^2(x-m).\]</p>
<p class="step"><b>Rozwiązania.</b> Równanie ma rozwiązania \(x=1\) i \(x=m\). Są to dwie różne liczby wtedy i tylko wtedy, gdy \(m\ne1\); dla \(m=1\) jedynym rozwiązaniem jest \(x=1\) (pierwiastek potrójny).</p>
<p class="step"><b>Odpowiedź.</b> \(m\in\mathbb R\setminus\{1\}\).</p>`
  }
];
