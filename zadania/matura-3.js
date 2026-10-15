(window.TASKS = window.TASKS || {})['matura-3'] = [
  {
    id: 7,
    group: "Pojęcie funkcji i dziedzina",
    label: "autorskie",
    pts: 2,
    tags: ["dziedzina funkcji", "pierwiastek", "mianownik"],
    req: ["ZP V.1"],
    q: String.raw`<p>Wyznacz dziedzinę funkcji \(f(x)=\dfrac{\sqrt{x^2-x-6}}{x-4}\).</p>`,
    ans: String.raw`\(D_f=(-\infty,-2]\cup[3,4)\cup(4,\infty)\)`,
    sol: String.raw`<p class="step"><b>Warunki.</b> Wyrażenie pod pierwiastkiem musi być nieujemne: \(x^2-x-6\ge0\), a mianownik różny od zera: \(x\ne4\).</p>
<p class="step"><b>Nierówność.</b> \(x^2-x-6=(x-3)(x+2)\ge0\iff x\le-2\) lub \(x\ge3\).</p>
<p class="step"><b>Część wspólna z \(x\ne4\).</b> Liczba \(4\) należy do \([3,\infty)\), więc ją wyłączamy: \(D_f=(-\infty,-2]\cup[3,4)\cup(4,\infty)\).</p>`
  },
  {
    id: 8,
    group: "Odczytywanie własności z wykresu",
    label: "autorskie",
    pts: 4,
    tags: ["wykres funkcji", "zbiór wartości", "monotoniczność", "miejsca zerowe"],
    req: ["ZP V.4"],
    fig: String.raw`<svg class="fig" viewBox="0 0 320 232" width="352" height="255" role="img" aria-label="Wykres funkcji g złożony z odcinków: łamana przez punkty (-3,1), (-1,-3), (1,-3), (2,1), (4,3)"><line class="gr" x1="44.7" y1="181.8" x2="44.7" y2="38.2"/><line class="gr" x1="77.3" y1="181.8" x2="77.3" y2="38.2"/><line class="gr" x1="110" y1="181.8" x2="110" y2="38.2"/><line class="gr" x1="142.7" y1="181.8" x2="142.7" y2="38.2"/><line class="gr" x1="175.3" y1="181.8" x2="175.3" y2="38.2"/><line class="gr" x1="208" y1="181.8" x2="208" y2="38.2"/><line class="gr" x1="240.7" y1="181.8" x2="240.7" y2="38.2"/><line class="gr" x1="273.3" y1="181.8" x2="273.3" y2="38.2"/><line class="gr" x1="51.2" y1="186.9" x2="266.8" y2="186.9"/><line class="gr" x1="51.2" y1="161.3" x2="266.8" y2="161.3"/><line class="gr" x1="51.2" y1="135.6" x2="266.8" y2="135.6"/><line class="gr" x1="51.2" y1="110" x2="266.8" y2="110"/><line class="gr" x1="51.2" y1="84.4" x2="266.8" y2="84.4"/><line class="gr" x1="51.2" y1="58.7" x2="266.8" y2="58.7"/><line class="gr" x1="51.2" y1="33.1" x2="266.8" y2="33.1"/><line class="ax" x1="6" y1="110" x2="311" y2="110"/><polygon class="ah" points="316,110 309,112.9 309,107.1"/><line class="ax" x1="142.7" y1="216" x2="142.7" y2="9"/><polygon class="ah" points="142.7,4 145.6,11 139.7,11"/><text x="314" y="125" text-anchor="end">x</text><text x="151.7" y="13" text-anchor="start">y</text><polyline class="a" points="44.7,84.4 110,186.9 175.3,186.9 208,84.4 273.3,33.1"/><circle class="dota" cx="44.7" cy="84.4" r="3.6"/><circle class="dota" cx="273.3" cy="33.1" r="3.6"/><line class="ax" x1="44.7" y1="107" x2="44.7" y2="113"/><text class="m" x="44.7" y="125" text-anchor="middle">−3</text><line class="ax" x1="77.3" y1="107" x2="77.3" y2="113"/><text class="m" x="77.3" y="125" text-anchor="middle">−2</text><line class="ax" x1="110" y1="107" x2="110" y2="113"/><text class="m" x="110" y="125" text-anchor="middle">−1</text><line class="ax" x1="175.3" y1="107" x2="175.3" y2="113"/><text class="m" x="175.3" y="125" text-anchor="middle">1</text><line class="ax" x1="208" y1="107" x2="208" y2="113"/><text class="m" x="208" y="125" text-anchor="middle">2</text><line class="ax" x1="240.7" y1="107" x2="240.7" y2="113"/><text class="m" x="240.7" y="125" text-anchor="middle">3</text><line class="ax" x1="273.3" y1="107" x2="273.3" y2="113"/><text class="m" x="273.3" y="125" text-anchor="middle">4</text><line class="ax" x1="139.7" y1="186.9" x2="145.7" y2="186.9"/><text class="m" x="135.7" y="190.9" text-anchor="end">−3</text><line class="ax" x1="139.7" y1="161.3" x2="145.7" y2="161.3"/><text class="m" x="135.7" y="165.3" text-anchor="end">−2</text><line class="ax" x1="139.7" y1="135.6" x2="145.7" y2="135.6"/><text class="m" x="135.7" y="139.6" text-anchor="end">−1</text><line class="ax" x1="139.7" y1="84.4" x2="145.7" y2="84.4"/><text class="m" x="135.7" y="88.4" text-anchor="end">1</text><line class="ax" x1="139.7" y1="58.7" x2="145.7" y2="58.7"/><text class="m" x="135.7" y="62.7" text-anchor="end">2</text><line class="ax" x1="139.7" y1="33.1" x2="145.7" y2="33.1"/><text class="m" x="135.7" y="37.1" text-anchor="end">3</text></svg>`,
    q: String.raw`<p>Na rysunku przedstawiono wykres funkcji \(g\) określonej w przedziale \([-3,4]\); jest to łamana o wierzchołkach \((-3,1)\), \((-1,-3)\), \((1,-3)\), \((2,1)\), \((4,3)\).</p>
<p>a) Podaj zbiór wartości funkcji \(g\) oraz przedziały, w których \(g\) jest malejąca, stała i rosnąca.<br>
b) Podaj miejsca zerowe funkcji \(g\) i rozwiąż nierówność \(g(x)>0\).<br>
c) Podaj najmniejszą i największą wartość funkcji \(g\) w przedziale \([0,4]\) oraz argumenty, dla których je przyjmuje.</p>`,
    ans: String.raw`a) zbiór wartości \([-3,3]\); malejąca w \([-3,-1]\), stała w \([-1,1]\), rosnąca w \([1,4]\). b) miejsca zerowe \(-\tfrac52\) i \(\tfrac74\); \(g(x)>0\) dla \(x\in\left[-3,-\tfrac52\right)\cup\left(\tfrac74,4\right]\). c) najmniejsza \(-3\) (dla \(x\in[0,1]\)), największa \(3\) (dla \(x=4\)).`,
    sol: String.raw`<p class="step"><b>a)</b> Najniższy punkt wykresu ma rzędną \(-3\) (odcinek od \(x=-1\) do \(x=1\)), najwyższy \(3\) (dla \(x=4\)), więc zbiór wartości to \([-3,3]\). Wykres opada od \(x=-3\) do \(x=-1\), jest poziomy od \(-1\) do \(1\) i rośnie od \(1\) do \(4\).</p>
<p class="step"><b>b)</b> Pierwszy odcinek leży na prostej przez \((-3,1)\) i \((-1,-3)\): \(y=-2x-5\), zero dla \(x=-\tfrac52\). Odcinek od \((1,-3)\) do \((2,1)\) leży na prostej \(y=4x-7\), zero dla \(x=\tfrac74\). Wykres leży nad osią \(Ox\) dla \(x\in\left[-3,-\tfrac52\right)\) oraz dla \(x\in\left(\tfrac74,4\right]\).</p>
<p class="step"><b>c)</b> W przedziale \([0,4]\) wykres jest poziomo na wysokości \(-3\) dla \(x\in[0,1]\), potem rośnie do \(3\). Zatem wartość najmniejsza to \(-3\) (dla każdego \(x\in[0,1]\)), największa \(3\) (dla \(x=4\)).</p>`
  },
  {
    id: 9,
    group: "Funkcje określone przedziałami",
    label: "autorskie",
    pts: 3,
    tags: ["funkcja określona przedziałami", "wartość funkcji", "równanie"],
    req: ["ZP V.1", "ZP V.2"],
    q: String.raw`<p>Funkcja \(f\) jest określona wzorem
\[f(x)=\begin{cases}2x+1&amp;\text{dla }x&lt;1,\\ x^2-2x+4&amp;\text{dla }x\ge1.\end{cases}\]
a) Oblicz \(f(-2)+f(1)+f(3)\).<br>
b) Rozwiąż równanie \(f(x)=4\).</p>`,
    ans: String.raw`a) \(7\); b) \(x=2\)`,
    sol: String.raw`<p class="step"><b>a)</b> \(f(-2)=2\cdot(-2)+1=-3\) (bo \(-2&lt;1\)); \(f(1)=1-2+4=3\) (bo \(1\ge1\)); \(f(3)=9-6+4=7\). Suma: \(-3+3+7=7\).</p>
<p class="step"><b>b)</b> Rozważamy oba wzory osobno.</p>
<p class="step"><i>Dla \(x&lt;1\):</i> \(2x+1=4\), czyli \(x=\tfrac32\) – to nie spełnia założenia \(x&lt;1\), więc odpada.</p>
<p class="step"><i>Dla \(x\ge1\):</i> \(x^2-2x+4=4\), czyli \(x(x-2)=0\); \(x=0\) nie spełnia założenia \(x\ge1\), a \(x=2\) tak.</p>
<p class="step"><b>Odpowiedź.</b> Jedyne rozwiązanie: \(x=2\).</p>`
  },
  {
    id: 10,
    group: "Monotoniczność i składanie funkcji",
    label: "autorskie",
    pts: 3,
    tags: ["monotoniczność z definicji", "funkcja homograficzna", "dowód"],
    req: ["ZR V.3"],
    q: String.raw`<p>Wykaż, korzystając z definicji monotoniczności, że funkcja \(f(x)=\dfrac{2x+1}{x-3}\) jest malejąca w przedziale \((3,\infty)\).</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Zapisujemy wzór w prostszej postaci: \(f(x)=\dfrac{2(x-3)+7}{x-3}=2+\dfrac7{x-3}\).</p>
<p class="step"><b>Różnica.</b> Niech \(3&lt;x_1&lt;x_2\). Wtedy
\[f(x_2)-f(x_1)=\frac7{x_2-3}-\frac7{x_1-3}=\frac{7\,\bigl[(x_1-3)-(x_2-3)\bigr]}{(x_1-3)(x_2-3)}=\frac{7\,(x_1-x_2)}{(x_1-3)(x_2-3)}.\]</p>
<p class="step"><b>Znak.</b> Licznik jest ujemny (\(x_1&lt;x_2\)), a mianownik dodatni (oba czynniki dodatnie). Zatem \(f(x_2)&lt;f(x_1)\) – funkcja jest malejąca w \((3,\infty)\). \(\blacksquare\)</p>`
  },
  {
    id: 11,
    group: "Monotoniczność i składanie funkcji",
    label: "autorskie",
    pts: 3,
    tags: ["monotoniczność z definicji", "wielomian", "dowód"],
    req: ["ZR V.3"],
    q: String.raw`<p>Wykaż, że funkcja \(g(x)=x^3+x\) jest rosnąca w zbiorze liczb rzeczywistych.</p>`,
    sol: String.raw`<p class="step"><b>Różnica.</b> Niech \(x_1&lt;x_2\). Ze wzoru \(a^3-b^3=(a-b)(a^2+ab+b^2)\):
\[g(x_2)-g(x_1)=(x_2^3-x_1^3)+(x_2-x_1)=(x_2-x_1)\bigl(x_2^2+x_1x_2+x_1^2+1\bigr).\]</p>
<p class="step"><b>Znak.</b> Pierwszy czynnik jest dodatni. W drugim: \(x_2^2+x_1x_2+x_1^2=\left(x_1+\tfrac{x_2}2\right)^2+\tfrac34x_2^2\ge0\), więc cały nawias jest nie mniejszy niż \(1\), czyli dodatni. Zatem \(g(x_2)>g(x_1)\) i funkcja jest rosnąca. \(\blacksquare\)</p>`
  },
  {
    id: 12,
    group: "Monotoniczność i składanie funkcji",
    label: "autorskie",
    pts: 4,
    tags: ["składanie funkcji", "dziedzina", "równanie niewymierne"],
    req: ["ZR V.2"],
    q: String.raw`<p>Dane są funkcje \(f(x)=x^2-1\) i \(g(x)=\sqrt{x+3}\).</p>
<p>a) Wyznacz wzory i dziedziny funkcji \(f\circ g\) oraz \(g\circ f\).<br>
b) Rozwiąż równanie \((f\circ g)(x)=(g\circ f)(x)\).</p>`,
    ans: String.raw`a) \((f\circ g)(x)=x+2\), \(D=[-3,\infty)\); \((g\circ f)(x)=\sqrt{x^2+2}\), \(D=\mathbb R\). b) \(x=-\tfrac12\)`,
    sol: String.raw`<p class="step"><b>a)</b> \((f\circ g)(x)=f(g(x))=\bigl(\sqrt{x+3}\bigr)^2-1=x+2\). Dziedziną jest dziedzina funkcji wewnętrznej \(g\), czyli \(x+3\ge0\): \(D=[-3,\infty)\) (wzór \(x+2\) „widzi” więcej, ale funkcja istnieje tylko tam).</p>
<p class="step">\((g\circ f)(x)=g(f(x))=\sqrt{x^2-1+3}=\sqrt{x^2+2}\). Wyrażenie \(x^2+2\) jest zawsze dodatnie, więc \(D=\mathbb R\).</p>
<p class="step"><b>b)</b> Szukamy \(x\ge-3\), dla których \(x+2=\sqrt{x^2+2}\). Prawa strona jest nieujemna, więc musi być \(x+2\ge0\), czyli \(x\ge-2\). Po podniesieniu do kwadratu: \(x^2+4x+4=x^2+2\), skąd \(4x=-2\) i \(x=-\tfrac12\).</p>
<p class="step"><b>Sprawdzenie.</b> \(x=-\tfrac12\ge-2\); lewa strona \(-\tfrac12+2=\tfrac32\), prawa \(\sqrt{\tfrac14+2}=\sqrt{\tfrac94}=\tfrac32\) ✓.</p>`
  },
  {
    id: 13,
    group: "Funkcja liniowa",
    label: "autorskie",
    pts: 3,
    tags: ["funkcja liniowa", "prosta przez dwa punkty", "prosta prostopadła"],
    req: ["ZP V.6", "ZP IX.2"],
    q: String.raw`<p>Wykres funkcji liniowej \(f\) przechodzi przez punkty \(A=(-1,5)\) i \(B=(3,-3)\).</p>
<p>a) Wyznacz wzór funkcji \(f\).<br>
b) Podaj współrzędne punktu przecięcia wykresu z osią \(Ox\).<br>
c) Wyznacz równanie prostej prostopadłej do wykresu \(f\), przechodzącej przez początek układu współrzędnych.</p>`,
    ans: String.raw`a) \(f(x)=-2x+3\); b) \(\left(\tfrac32,0\right)\); c) \(y=\tfrac12x\)`,
    sol: String.raw`<p class="step"><b>a)</b> Współczynnik kierunkowy \(a=\dfrac{-3-5}{3-(-1)}=-2\). Z \(y-5=-2(x+1)\) mamy \(y=-2x+3\).</p>
<p class="step"><b>b)</b> \(-2x+3=0\iff x=\tfrac32\), więc punkt \(\left(\tfrac32,0\right)\).</p>
<p class="step"><b>c)</b> Prosta prostopadła ma współczynnik \(a'\) spełniający \(a\cdot a'=-1\), czyli \(a'=\tfrac12\). Przechodzi przez \((0,0)\), więc \(y=\tfrac12x\).</p>`
  },
  {
    id: 14,
    group: "Przekształcenia wykresów",
    label: "autorskie",
    pts: 4,
    tags: ["wartość bezwzględna z funkcji", "liczba rozwiązań", "wykres z parametrem"],
    req: ["ZR V.1", "ZR III.4"],
    q: String.raw`<p>Naszkicuj wykres funkcji \(h(x)=|x^2-2x-3|\) i określ, ile rozwiązań ma równanie \(|x^2-2x-3|=m\) w zależności od liczby rzeczywistej \(m\).</p>`,
    ans: String.raw`brak rozwiązań dla \(m&lt;0\); \(2\) dla \(m=0\); \(4\) dla \(0&lt;m&lt;4\); \(3\) dla \(m=4\); \(2\) dla \(m>4\)`,
    sol: String.raw`<p class="step"><b>Wykres.</b> Parabola \(y=x^2-2x-3=(x-1)^2-4\) ma miejsca zerowe \(-1\) i \(3\) oraz wierzchołek \((1,-4)\). Część poniżej osi \(Ox\) (między \(-1\) i \(3\)) odbijamy symetrycznie względem osi \(Ox\); wierzchołek przechodzi w punkt \((1,4)\).</p>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 300 224" width="315" height="235" role="img" aria-label="Wykres y=|x^2-2x-3| i prosta y=4 mająca z nim trzy punkty wspólne"><line class="gr" x1="24.5" y1="174.6" x2="24.5" y2="25.7"/><line class="gr" x1="55.6" y1="174.6" x2="55.6" y2="25.7"/><line class="gr" x1="86.7" y1="174.6" x2="86.7" y2="25.7"/><line class="gr" x1="117.9" y1="174.6" x2="117.9" y2="25.7"/><line class="gr" x1="149" y1="174.6" x2="149" y2="25.7"/><line class="gr" x1="180.1" y1="174.6" x2="180.1" y2="25.7"/><line class="gr" x1="211.3" y1="174.6" x2="211.3" y2="25.7"/><line class="gr" x1="242.4" y1="174.6" x2="242.4" y2="25.7"/><line class="gr" x1="273.5" y1="174.6" x2="273.5" y2="25.7"/><line class="gr" x1="30.7" y1="178.5" x2="267.3" y2="178.5"/><line class="gr" x1="30.7" y1="158.9" x2="267.3" y2="158.9"/><line class="gr" x1="30.7" y1="139.3" x2="267.3" y2="139.3"/><line class="gr" x1="30.7" y1="119.7" x2="267.3" y2="119.7"/><line class="gr" x1="30.7" y1="100.1" x2="267.3" y2="100.1"/><line class="gr" x1="30.7" y1="80.5" x2="267.3" y2="80.5"/><line class="gr" x1="30.7" y1="60.9" x2="267.3" y2="60.9"/><line class="gr" x1="30.7" y1="41.3" x2="267.3" y2="41.3"/><line class="gr" x1="30.7" y1="21.8" x2="267.3" y2="21.8"/><line class="ax" x1="6" y1="178.5" x2="291" y2="178.5"/><polygon class="ah" points="296,178.5 289,181.4 289,175.5"/><line class="ax" x1="117.9" y1="208" x2="117.9" y2="9"/><polygon class="ah" points="117.9,4 120.8,11 114.9,11"/><text x="294" y="193.5" text-anchor="end">x</text><text x="126.9" y="13" text-anchor="start">y</text><polyline class="p d" points="86.7,178.5 88,181.6 89.2,184.6 90.5,187.6 91.7,190.5 93,193.4 94.2,196.2 95.4,198.9 96.7,201.6"/><polyline class="p d" points="201.3,201.6 202.6,198.9 203.8,196.2 205,193.4 206.3,190.5 207.5,187.6 208.8,184.6 210,181.6 211.3,178.5"/><polyline class="a" points="39.2,13 40,16.9 40.9,20.7 41.8,24.5 42.6,28.2 43.5,32 44.4,35.7 45.3,39.3 46.1,43 47,46.6 47.9,50.2 48.7,53.7 49.6,57.2 50.5,60.7 51.4,64.2 52.2,67.6 53.1,71 54,74.4 54.8,77.7 55.7,81 56.6,84.3 57.5,87.5 58.3,90.7 59.2,93.9 60.1,97.1 60.9,100.2 61.8,103.3 62.7,106.3 63.6,109.3 64.4,112.3 65.3,115.3 66.2,118.2 67,121.1 67.9,124 68.8,126.9 69.7,129.7 70.5,132.4 71.4,135.2 72.3,137.9 73.2,140.6 74,143.3 74.9,145.9 75.8,148.5 76.6,151 77.5,153.6 78.4,156.1 79.3,158.6 80.1,161 81,163.4 81.9,165.8 82.7,168.1 83.6,170.5 84.5,172.7 85.4,175 86.2,177.2 87.1,177.6 88,175.4 88.8,173.3 89.7,171.1 90.6,169.1 91.5,167 92.3,165 93.2,163 94.1,161.1 94.9,159.2 95.8,157.3 96.7,155.4 97.6,153.6 98.4,151.8 99.3,150 100.2,148.3 101,146.6 101.9,144.9 102.8,143.3 103.7,141.7 104.5,140.1 105.4,138.5 106.3,137 107.2,135.5 108,134.1 108.9,132.6 109.8,131.2 110.6,129.9 111.5,128.5 112.4,127.2 113.3,125.9 114.1,124.7 115,123.5 115.9,122.3 116.7,121.2 117.6,120 118.5,118.9 119.4,117.9 120.2,116.8 121.1,115.9 122,114.9 122.8,113.9 123.7,113 124.6,112.2 125.5,111.3 126.3,110.5 127.2,109.7 128.1,109 128.9,108.2 129.8,107.6 130.7,106.9 131.6,106.3 132.4,105.7 133.3,105.1 134.2,104.6 135.1,104.1 135.9,103.6 136.8,103.1 137.7,102.7 138.5,102.3 139.4,102 140.3,101.7 141.2,101.4 142,101.1 142.9,100.9 143.8,100.7 144.6,100.5 145.5,100.4 146.4,100.3 147.3,100.2 148.1,100.1 149,100.1 149.9,100.1 150.7,100.2 151.6,100.3 152.5,100.4 153.4,100.5 154.2,100.7 155.1,100.9 156,101.1 156.8,101.4 157.7,101.7 158.6,102 159.5,102.3 160.3,102.7 161.2,103.1 162.1,103.6 162.9,104.1 163.8,104.6 164.7,105.1 165.6,105.7 166.4,106.3 167.3,106.9 168.2,107.6 169.1,108.2 169.9,109 170.8,109.7 171.7,110.5 172.5,111.3 173.4,112.2 174.3,113 175.2,113.9 176,114.9 176.9,115.9 177.8,116.8 178.6,117.9 179.5,118.9 180.4,120 181.3,121.2 182.1,122.3 183,123.5 183.9,124.7 184.7,125.9 185.6,127.2 186.5,128.5 187.4,129.9 188.2,131.2 189.1,132.6 190,134.1 190.8,135.5 191.7,137 192.6,138.5 193.5,140.1 194.3,141.7 195.2,143.3 196.1,144.9 196.9,146.6 197.8,148.3 198.7,150 199.6,151.8 200.4,153.6 201.3,155.4 202.2,157.3 203.1,159.2 203.9,161.1 204.8,163 205.7,165 206.5,167 207.4,169.1 208.3,171.1 209.2,173.3 210,175.4 210.9,177.6 211.8,177.2 212.6,175 213.5,172.7 214.4,170.5 215.3,168.1 216.1,165.8 217,163.4 217.9,161 218.7,158.6 219.6,156.1 220.5,153.6 221.4,151 222.2,148.5 223.1,145.9 224,143.3 224.8,140.6 225.7,137.9 226.6,135.2 227.5,132.4 228.3,129.7 229.2,126.9 230.1,124 231,121.1 231.8,118.2 232.7,115.3 233.6,112.3 234.4,109.3 235.3,106.3 236.2,103.3 237.1,100.2 237.9,97.1 238.8,93.9 239.7,90.7 240.5,87.5 241.4,84.3 242.3,81 243.2,77.7 244,74.4 244.9,71 245.8,67.6 246.6,64.2 247.5,60.7 248.4,57.2 249.3,53.7 250.1,50.2 251,46.6 251.9,43 252.7,39.3 253.6,35.7 254.5,32 255.4,28.2 256.2,24.5 257.1,20.7 258,16.9 258.8,13"/><line class="s d w" x1="15.1" y1="100.1" x2="282.9" y2="100.1"/><circle class="dota" cx="60.9" cy="100.1" r="3.4"/><circle class="dota" cx="149" cy="100.1" r="3.4"/><circle class="dota" cx="237.1" cy="100.1" r="3.4"/><circle class="dot" cx="86.7" cy="178.5" r="3"/><circle class="dot" cx="211.3" cy="178.5" r="3"/><line class="ax" x1="86.7" y1="175.5" x2="86.7" y2="181.5"/><text class="m" x="86.7" y="193.5" text-anchor="middle">−1</text><line class="ax" x1="149" y1="175.5" x2="149" y2="181.5"/><text class="m" x="149" y="193.5" text-anchor="middle">1</text><line class="ax" x1="211.3" y1="175.5" x2="211.3" y2="181.5"/><text class="m" x="211.3" y="193.5" text-anchor="middle">3</text><line class="ax" x1="114.9" y1="100.1" x2="120.9" y2="100.1"/><text class="m" x="110.9" y="104.1" text-anchor="end">4</text><text class="pn" x="279.8" y="94.1" text-anchor="end">y = m = 4</text></svg></div>
<p class="step"><b>Liczba rozwiązań</b> to liczba punktów wspólnych wykresu \(h\) z poziomą prostą \(y=m\):</p>
<ul>
<li>\(m&lt;0\): brak rozwiązań (wartość bezwzględna nie jest ujemna);</li>
<li>\(m=0\): dwa (\(x=-1\) i \(x=3\));</li>
<li>\(0&lt;m&lt;4\): cztery (prosta przecina dwa ramiona paraboli i odbity „garb”);</li>
<li>\(m=4\): trzy (prosta dotyka wierzchołka \((1,4)\) i przecina dwa ramiona w punktach \(1\pm2\sqrt2\));</li>
<li>\(m>4\): dwa (tylko ramiona paraboli).</li>
</ul>`
  },
  {
    id: 15,
    group: "Funkcja wymierna i odwrotna proporcjonalność",
    label: "autorskie",
    pts: 3,
    tags: ["odwrotna proporcjonalność", "funkcja a/x", "zadanie z kontekstem"],
    req: ["ZP V.13"],
    q: String.raw`<p>Czas \(t\) (w godzinach) napełniania zbiornika jest odwrotnie proporcjonalny do liczby \(n\) jednakowych pomp. Dwie pompy napełniają zbiornik w ciągu \(9\) godzin.</p>
<p>a) Zapisz wzór funkcji \(t(n)\).<br>
b) Ile godzin potrwa napełnianie zbiornika przez \(6\) pomp?<br>
c) Jaka jest najmniejsza liczba pomp, które napełnią zbiornik w czasie nie dłuższym niż \(2{,}5\) godziny?</p>`,
    ans: String.raw`a) \(t(n)=\dfrac{18}n\); b) \(3\) godziny; c) \(8\) pomp`,
    sol: String.raw`<p class="step"><b>a)</b> Odwrotna proporcjonalność oznacza stały iloczyn: \(n\cdot t=2\cdot9=18\), więc \(t(n)=\dfrac{18}n\).</p>
<p class="step"><b>b)</b> \(t(6)=\dfrac{18}6=3\) godziny.</p>
<p class="step"><b>c)</b> \(\dfrac{18}n\le2{,}5\iff n\ge\dfrac{18}{2{,}5}=7{,}2\). Liczba pomp jest całkowita, więc najmniejsza to \(n=8\) (dla \(7\) pomp czas wynosi \(\tfrac{18}7\approx2{,}57\) h – za długo).</p>`
  },
  {
    id: 16,
    group: "Funkcja wymierna i odwrotna proporcjonalność",
    label: "autorskie",
    pts: 4,
    tags: ["funkcja homograficzna", "asymptoty", "równanie wymierne"],
    req: ["ZP V.13", "ZR V.1"],
    q: String.raw`<p>Dana jest funkcja \(f(x)=\dfrac{3x-5}{x-1}\).</p>
<p>a) Zapisz wzór funkcji w postaci \(f(x)=\dfrac k{x-p}+q\) i podaj równania asymptot jej wykresu oraz zbiór wartości.<br>
b) Oblicz miejsce zerowe funkcji \(f\).<br>
c) Rozwiąż równanie \(f(x)=x\).</p>`,
    ans: String.raw`a) \(f(x)=3-\dfrac2{x-1}\); asymptoty \(x=1\), \(y=3\); zbiór wartości \(\mathbb R\setminus\{3\}\). b) \(x=\tfrac53\). c) brak rozwiązań`,
    sol: String.raw`<p class="step"><b>a)</b> \(\dfrac{3x-5}{x-1}=\dfrac{3(x-1)-2}{x-1}=3-\dfrac2{x-1}\), więc \(k=-2\), \(p=1\), \(q=3\). Asymptota pionowa \(x=1\), pozioma \(y=3\); dziedzina \(\mathbb R\setminus\{1\}\), zbiór wartości \(\mathbb R\setminus\{3\}\).</p>
<p class="step"><b>b)</b> \(3x-5=0\iff x=\tfrac53\) (należy do dziedziny).</p>
<p class="step"><b>c)</b> Dla \(x\ne1\): \(3x-5=x(x-1)\), czyli \(x^2-4x+5=0\). Wyróżnik \(\Delta=16-20=-4&lt;0\), więc równanie nie ma rozwiązań rzeczywistych.</p>`
  }
];
