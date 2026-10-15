(window.TASKS = window.TASKS || {})['matura-10'] = [
  {
    id: 1,
    group: "Granica funkcji",
    src: "maj 2024 · zad. 2",
    pts: 2,
    tags: ["granica funkcji", "granica jednostronna", "rozkład na czynniki"],
    req: ["ZR XIII.1"],
    q: String.raw`<p>Oblicz granicę
\[\lim_{x\to2^-}\frac{x^3-8}{(x-2)^2}.\]</p>`,
    ans: String.raw`\(-\infty\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Rozkładamy licznik: \(x^3-8=(x-2)(x^2+2x+4)\) i skracamy jeden czynnik \(x-2\).</p>
<p class="step"><b>Krok 1.</b> Dla \(x\ne2\): \(\dfrac{x^3-8}{(x-2)^2}=\dfrac{x^2+2x+4}{x-2}\).</p>
<p class="step"><b>Krok 2.</b> Gdy \(x\to2^-\), licznik dąży do \(2^2+2\cdot2+4=12>0\), a mianownik \(x-2\) dąży do \(0\) przez wartości ujemne (\(x&lt;2\)). Iloraz liczby dodatniej i małej liczby ujemnej jest duży i ujemny, więc granica jest równa \(-\infty\).</p>`
  },
  {
    id: 10,
    group: "Granica funkcji",
    label: "autorskie",
    pts: 3,
    tags: ["granica funkcji", "funkcja wykładnicza", "granica w nieskończoności"],
    req: ["ZR XIII.1"],
    q: String.raw`<p>Oblicz granice: a) \(\displaystyle\lim_{x\to+\infty}\frac{3\cdot2^x-5}{2^x+1}\); b) \(\displaystyle\lim_{x\to-\infty}\frac{3\cdot2^x-5}{2^x+1}\); c) \(\displaystyle\lim_{x\to+\infty}\frac{2^x-3^x}{2^x+3^x}\).</p>`,
    ans: String.raw`a) \(3\); b) \(-5\); c) \(-1\)`,
    sol: String.raw`<p class="step"><b>a)</b> Dzielimy licznik i mianownik przez \(2^x\): \(\dfrac{3-5\cdot2^{-x}}{1+2^{-x}}\). Gdy \(x\to+\infty\), \(2^{-x}\to0\), więc granica to \(\dfrac{3-0}{1+0}=3\).</p>
<p class="step"><b>b)</b> Gdy \(x\to-\infty\), \(2^x\to0\), więc licznik dąży do \(-5\), a mianownik do \(1\): granica \(-5\).</p>
<p class="step"><b>c)</b> Dzielimy przez najszybciej rosnący składnik \(3^x\): \(\dfrac{\left(\frac23\right)^x-1}{\left(\frac23\right)^x+1}\). Ponieważ \(0&lt;\tfrac23&lt;1\), \(\left(\tfrac23\right)^x\to0\), więc granica to \(\dfrac{0-1}{0+1}=-1\).</p>`
  },
  {
    id: 2,
    group: "Styczna do wykresu funkcji",
    src: "maj 2023 · zad. 3",
    pts: 3,
    tags: ["styczna", "pochodna ilorazu", "równanie stycznej"],
    req: ["ZR XIII.3", "ZR XIII.4"],
    q: String.raw`<p>Funkcja \(f\) jest określona wzorem \(f(x)=\dfrac{3x^2-2x}{x^2+2x+8}\) dla każdej liczby rzeczywistej \(x\). Punkt \(P=(x_0,\,3)\) należy do wykresu funkcji \(f\).</p>
<p>Oblicz \(x_0\) oraz wyznacz równanie stycznej do wykresu funkcji \(f\) w punkcie \(P\).</p>`,
    ans: String.raw`\(x_0=-3\); styczna: \(y=-\tfrac{8}{11}x+\tfrac{9}{11}\)`,
    sol: String.raw`<p class="step"><b>Krok 1: \(x_0\).</b> \(f(x_0)=3\): \(3x_0^2-2x_0=3(x_0^2+2x_0+8)\Rightarrow-2x_0=6x_0+24\Rightarrow x_0=-3\). (Mianownik \(x^2+2x+8\) jest zawsze dodatni.)</p>
<p class="step"><b>Krok 2: pochodna.</b> \(f'(x)=\dfrac{(6x-2)(x^2+2x+8)-(3x^2-2x)(2x+2)}{(x^2+2x+8)^2}\). Dla \(x=-3\): \(x^2+2x+8=11\), \(6x-2=-20\), \(3x^2-2x=33\), \(2x+2=-4\), więc
\[f'(-3)=\frac{-20\cdot11-33\cdot(-4)}{11^2}=\frac{-220+132}{121}=-\frac{88}{121}=-\frac8{11}.\]</p>
<p class="step"><b>Krok 3: styczna.</b> \(y-3=-\tfrac8{11}(x+3)\), czyli \(y=-\tfrac8{11}x+\tfrac9{11}\).</p>`
  },
  {
    id: 3,
    group: "Styczna do wykresu funkcji",
    src: "maj 2024 · zad. 4",
    pts: 3,
    tags: ["styczna", "pochodna", "współczynniki prostej"],
    req: ["ZR XIII.3", "ZR XIII.4"],
    q: String.raw`<p>Funkcja \(f\) jest określona wzorem \(f(x)=\dfrac{x^3-3x+2}{x}\) dla każdej liczby rzeczywistej \(x\) różnej od zera. W kartezjańskim układzie współrzędnych \((x,y)\) punkt \(P\), o pierwszej współrzędnej równej \(2\), należy do wykresu funkcji \(f\). Prosta o równaniu \(y=ax+b\) jest styczna do wykresu funkcji \(f\) w punkcie \(P\).</p>
<p>Oblicz współczynniki \(a\) oraz \(b\) w równaniu tej stycznej.</p>`,
    ans: String.raw`\(a=\tfrac72\), \(b=-5\) (czyli \(y=\tfrac72x-5\))`,
    sol: String.raw`<p class="step"><b>Krok 1: punkt \(P\).</b> \(f(2)=\dfrac{8-6+2}2=2\), więc \(P=(2,2)\).</p>
<p class="step"><b>Krok 2: pochodna.</b> \(f(x)=x^2-3+\dfrac2x\), więc \(f'(x)=2x-\dfrac2{x^2}\) i \(a=f'(2)=4-\dfrac12=\dfrac72\).</p>
<p class="step"><b>Krok 3: wyraz wolny.</b> Styczna przechodzi przez \(P\): \(2=\tfrac72\cdot2+b\Rightarrow b=-5\).</p>`
  },
  {
    id: 7,
    group: "Zadania dwuczęściowe: najpierw wzór, potem optymalizacja",
    src: "maj 2023 · zad. 12.1",
    pts: 2,
    tags: ["logarytmy", "zmiana podstawy", "potęgi"],
    req: ["ZP I.9", "ZR I.1"],
    q: String.raw`<p>Wykaż, że dla każdej liczby dodatniej \(x\) wyrażenie
\[81^{\log_3 x}+\frac{2\cdot\log_2\sqrt{27}\cdot\log_3 2}{3}\cdot x^2-6x\]
można równoważnie przekształcić do postaci \(x^4+x^2-6x\).</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Każdy składnik sprowadzamy do prostej postaci: potęgę o podstawie \(81\) do podstawy \(3\), a iloczyn logarytmów upraszczamy wzorem na zamianę podstawy.</p>
<p class="step"><b>Pierwszy składnik.</b> \(81=3^4\), więc \(81^{\log_3 x}=\bigl(3^{\log_3 x}\bigr)^4=x^4\) (dla \(x>0\)).</p>
<p class="step"><b>Drugi składnik.</b> \(\log_2\sqrt{27}=\log_2 3^{3/2}=\tfrac32\log_2 3\), a \(\log_2 3\cdot\log_3 2=1\). Zatem
\[\frac{2\cdot\log_2\sqrt{27}\cdot\log_3 2}{3}=\frac{2\cdot\frac32\cdot1}{3}=1,\]
więc drugi składnik jest równy \(1\cdot x^2=x^2\).</p>
<p class="step"><b>Wniosek.</b> Całe wyrażenie jest równe \(x^4+x^2-6x\). \(\blacksquare\)</p>`
  },
  {
    id: 4,
    group: "Zadania dwuczęściowe: najpierw wzór, potem optymalizacja",
    src: "maj 2023 · zad. 12.2",
    pts: 4,
    tags: ["najmniejsza wartość funkcji", "pochodna", "monotoniczność"],
    req: ["ZR XIII.5", "ZR XIII.6"],
    q: String.raw`<p>Funkcja \(f\) jest określona wzorem \(f(x)=x^4+x^2-6x\) dla każdej liczby dodatniej \(x\).</p>
<p>Oblicz najmniejszą wartość tej funkcji.</p>`,
    ans: String.raw`\(-4\)`,
    sol: String.raw`<p class="step"><b>Krok 1: pochodna.</b> \(f'(x)=4x^3+2x-6=2\,(2x^3+x-3)\). Wielomian \(2x^3+x-3\) ma pierwiastek \(x=1\) (\(2+1-3=0\)), więc \(2x^3+x-3=(x-1)(2x^2+2x+3)\).</p>
<p class="step"><b>Krok 2: znak pochodnej.</b> Trójmian \(2x^2+2x+3\) ma \(\Delta=4-24&lt;0\), więc jest dodatni. Zatem znak \(f'\) to znak \(x-1\): \(f'&lt;0\) dla \(0&lt;x&lt;1\), \(f'>0\) dla \(x>1\).</p>
<p class="step"><b>Krok 3: minimum.</b> Funkcja maleje na \((0,1]\) i rośnie na \([1,\infty)\), więc najmniejszą wartość przyjmuje dla \(x=1\): \(f(1)=1+1-6=-4\).</p>`
  },
  {
    id: 8,
    group: "Zadania dwuczęściowe: najpierw wzór, potem optymalizacja",
    src: "maj 2025 · zad. 12.1",
    pts: 2,
    tags: ["stożek", "objętość", "odległość od tworzącej"],
    req: ["ZP X.5"],
    q: String.raw`<p>Rozważamy wszystkie stożki, których wysokość jest większa od \(5\), a odległość środka podstawy od tworzącej jest równa \(5\).</p>
<p>Wykaż, że objętość \(V\) stożka, jako funkcja wysokości \(h\) stożka, wyraża się wzorem
\[V(h)=\frac\pi3\cdot\frac{25h^3}{h^2-25}.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Odległość środka podstawy od tworzącej to wysokość trójkąta prostokątnego o przyprostokątnych \(r\) (promień podstawy) i \(h\) (wysokość stożka), opuszczona na przeciwprostokątną – tworzącą \(l=\sqrt{r^2+h^2}\).</p>
<p class="step"><b>Krok 1.</b> Pole tego trójkąta liczymy na dwa sposoby: \(\tfrac12rh=\tfrac12\,l\cdot5\), więc \(rh=5\sqrt{r^2+h^2}\). Podnosimy do kwadratu: \(r^2h^2=25(r^2+h^2)\).</p>
<p class="step"><b>Krok 2.</b> Stąd \(r^2(h^2-25)=25h^2\), a ponieważ \(h>5\), możemy podzielić: \(r^2=\dfrac{25h^2}{h^2-25}\).</p>
<p class="step"><b>Krok 3.</b> \(V=\tfrac13\pi r^2h=\dfrac\pi3\cdot\dfrac{25h^3}{h^2-25}\). \(\blacksquare\)</p>`
  },
  {
    id: 5,
    group: "Zadania dwuczęściowe: najpierw wzór, potem optymalizacja",
    src: "maj 2025 · zad. 12.2",
    pts: 4,
    tags: ["optymalizacja", "objętość stożka", "pochodna ilorazu"],
    req: ["ZR XIII.6"],
    q: String.raw`<p>Objętość \(V\) stożka, jako funkcja wysokości \(h\) stożka, wyraża się wzorem
\[V(h)=\frac\pi3\cdot\frac{25h^3}{h^2-25}\qquad\text{dla }h\in(5,+\infty).\]</p>
<p>Wyznacz wysokość tego z rozważanych stożków, którego objętość jest najmniejsza. Oblicz tę najmniejszą objętość.</p>`,
    ans: String.raw`\(h=5\sqrt3\), \(V_{\min}=\dfrac{125\sqrt3}{2}\,\pi\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Stała \(\tfrac{25\pi}3\) nie wpływa na położenie minimum, więc wystarczy zbadać \(g(h)=\dfrac{h^3}{h^2-25}\) dla \(h>5\).</p>
<p class="step"><b>Krok 1: pochodna.</b> \(g'(h)=\dfrac{3h^2(h^2-25)-h^3\cdot2h}{(h^2-25)^2}=\dfrac{h^4-75h^2}{(h^2-25)^2}=\dfrac{h^2\,(h^2-75)}{(h^2-25)^2}\).</p>
<p class="step"><b>Krok 2: znak.</b> Dla \(h>5\) mianownik i \(h^2\) są dodatnie, więc znak \(g'\) to znak \(h^2-75\): \(g'&lt;0\) dla \(5&lt;h&lt;5\sqrt3\), \(g'>0\) dla \(h>5\sqrt3\). Funkcja maleje, a potem rośnie, więc minimum jest dla \(h=5\sqrt3\).</p>
<p class="step"><b>Krok 3: wartość.</b> \(V(5\sqrt3)=\dfrac\pi3\cdot\dfrac{25\cdot(5\sqrt3)^3}{75-25}=\dfrac\pi3\cdot\dfrac{25\cdot375\sqrt3}{50}=\dfrac{125\sqrt3}{2}\,\pi\).</p>`
  },
  {
    id: 9,
    group: "Zadania dwuczęściowe: najpierw wzór, potem optymalizacja",
    src: "maj 2024 · zad. 13.1",
    pts: 2,
    tags: ["graniastosłup prawidłowy trójkątny", "pole powierzchni całkowitej", "objętość"],
    req: ["ZP X.5"],
    q: String.raw`<p>Rozważamy wszystkie graniastosłupy prawidłowe trójkątne o objętości \(3456\), których krawędź podstawy ma długość nie większą niż \(8\sqrt3\).</p>
<p>Wykaż, że pole \(P\) powierzchni całkowitej graniastosłupa w zależności od długości \(a\) krawędzi podstawy graniastosłupa jest określone wzorem
\[P(a)=\frac{a^2\cdot\sqrt3}{2}+\frac{13824\sqrt3}{a}.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Z objętości wyrazimy wysokość graniastosłupa przez \(a\), a potem podstawimy do pola całkowitego \(P=2P_p+P_b\).</p>
<p class="step"><b>Krok 1: wysokość.</b> Pole podstawy (trójkąta równobocznego o boku \(a\)): \(P_p=\dfrac{a^2\sqrt3}4\). Z \(V=P_p\cdot H=3456\) mamy \(H=\dfrac{3456}{\frac{a^2\sqrt3}4}=\dfrac{13824}{a^2\sqrt3}\).</p>
<p class="step"><b>Krok 2: pole całkowite.</b> Powierzchnia boczna to trzy prostokąty \(a\times H\):
\[P(a)=2\cdot\frac{a^2\sqrt3}4+3aH=\frac{a^2\sqrt3}2+3a\cdot\frac{13824}{a^2\sqrt3}=\frac{a^2\sqrt3}2+\frac{41472}{a\sqrt3}=\frac{a^2\sqrt3}2+\frac{13824\sqrt3}{a}.\ \blacksquare\]
(w ostatnim kroku \(\dfrac{41472}{\sqrt3}=\dfrac{41472\sqrt3}{3}=13824\sqrt3\)).</p>`
  },
  {
    id: 6,
    group: "Zadania dwuczęściowe: najpierw wzór, potem optymalizacja",
    src: "maj 2024 · zad. 13.2",
    pts: 4,
    tags: ["optymalizacja", "pole powierzchni", "dziedzina funkcji"],
    req: ["ZR XIII.6"],
    q: String.raw`<p>Pole \(P\) powierzchni całkowitej graniastosłupa w zależności od długości \(a\) krawędzi podstawy graniastosłupa jest określone wzorem
\[P(a)=\frac{a^2\cdot\sqrt3}{2}+\frac{13824\sqrt3}{a}\qquad\text{dla }a\in\bigl(0,\,8\sqrt3\bigr].\]</p>
<p>Wyznacz długość krawędzi podstawy tego z rozważanych graniastosłupów, którego pole powierzchni całkowitej jest najmniejsze. Oblicz to najmniejsze pole.</p>`,
    ans: String.raw`\(a=8\sqrt3\), \(P_{\min}=1728+96\sqrt3\)`,
    sol: String.raw`<p class="step"><b>Krok 1: pochodna.</b> \(P'(a)=a\sqrt3-\dfrac{13824\sqrt3}{a^2}=\dfrac{\sqrt3\,(a^3-13824)}{a^2}\). Miejsce zerowe: \(a^3=13824=24^3\), czyli \(a=24\).</p>
<p class="step"><b>Krok 2: znak na dziedzinie.</b> Dziedzina to \((0,8\sqrt3]\), a \(8\sqrt3\approx13{,}86&lt;24\). Dla każdego \(a\) z dziedziny \(a^3&lt;13824\), więc \(P'(a)&lt;0\): funkcja jest malejąca. Najmniejsza wartość jest więc na prawym końcu przedziału, dla \(a=8\sqrt3\).</p>
<p class="step"><b>Krok 3: wartość.</b> \(a^2=192\), więc \(P(8\sqrt3)=\dfrac{192\sqrt3}2+\dfrac{13824\sqrt3}{8\sqrt3}=96\sqrt3+1728\).</p>
<p class="note"><b>Uwaga:</b> punkt \(a=24\), w którym pochodna się zeruje, leży poza dziedziną, więc minimum przypada na jej końcu – to częsta pułapka w zadaniach optymalizacyjnych.</p>`
  },
  {
    id: 11,
    group: "Własność Darboux",
    label: "autorskie",
    pts: 3,
    tags: ["własność Darboux", "istnienie rozwiązania", "funkcja ciągła"],
    req: ["ZR XIII.2"],
    q: String.raw`<p>Wykaż, że a) równanie \(x^3+x-1=0\) ma rozwiązanie w przedziale \((0,1)\); b) równanie \(2^x+x=5\) ma rozwiązanie w przedziale \((1,2)\).</p>`,
    sol: String.raw`<p class="step"><b>a)</b> Funkcja \(f(x)=x^3+x-1\) jest ciągła (wielomian). \(f(0)=-1&lt;0\), \(f(1)=1>0\). Z własności Darboux istnieje \(x_0\in(0,1)\), dla którego \(f(x_0)=0\). \(\blacksquare\)</p>
<p class="step"><b>b)</b> Funkcja \(g(x)=2^x+x-5\) jest ciągła jako suma funkcji ciągłych. \(g(1)=2+1-5=-2&lt;0\), \(g(2)=4+2-5=1>0\). Z własności Darboux istnieje \(x_0\in(1,2)\), dla którego \(g(x_0)=0\), czyli \(2^{x_0}+x_0=5\). \(\blacksquare\)</p>`
  },
  {
    id: 12,
    group: "Zadania optymalizacyjne",
    label: "autorskie",
    pts: 5,
    tags: ["optymalizacja", "pochodna", "objętość pudełka", "ekstremum"],
    req: ["ZR XIII.6", "ZP X.5"],
    q: String.raw`<p>Z kwadratowego kawałka tektury o boku \(12\) cm wycinamy w rogach cztery jednakowe kwadraty o boku \(x\) i z pozostałej części składamy pudełko bez wieczka. Dla jakiego \(x\) objętość pudełka jest największa? Ile wynosi ta objętość?</p>`,
    ans: String.raw`\(x=2\) cm; największa objętość \(128\ \text{cm}^3\)`,
    sol: String.raw`<p class="step"><b>Funkcja.</b> Podstawa pudełka to kwadrat o boku \(12-2x\), wysokość \(x\). Dziedzina: \(0&lt;x&lt;6\). Objętość \(V(x)=x(12-2x)^2=4x^3-48x^2+144x\).</p>
<p class="step"><b>Pochodna.</b> \(V'(x)=12x^2-96x+144=12(x^2-8x+12)=12(x-2)(x-6)\). W dziedzinie \(V'(x)=0\) tylko dla \(x=2\).</p>
<p class="step"><b>Charakter ekstremum.</b> Dla \(0&lt;x&lt;2\) mamy \(V'>0\) (rośnie), a dla \(2&lt;x&lt;6\) mamy \(V'&lt;0\) (maleje), więc w \(x=2\) jest maksimum, i to największa wartość w całej dziedzinie.</p>
<p class="step"><b>Odpowiedź.</b> \(x=2\) cm, \(V(2)=2\cdot8^2=128\ \text{cm}^3\).</p>`
  }
];
