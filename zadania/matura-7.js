(window.TASKS = window.TASKS || {})['matura-7'] = [
  {
    group: "Okręgi i wektory",
    src: "maj 2025 · zad. 8",
    pts: 5,
    tags: ["okręgi", "oś potęgowa", "wektory", "punkty przecięcia"],
    q: String.raw`<p>W kartezjańskim układzie współrzędnych \((x,y)\) dane są okręgi \(O_1\) oraz \(O_2\) o równaniach:</p>
<ul>
<li>\(O_1:\ (x-1)^2+(y+3)^2=5\),</li>
<li>\(O_2:\ (x-2)^2+(y-4)^2=45\).</li>
</ul>
<p>Te okręgi przecinają się w punktach \(A\) oraz \(B\). Punkt \(A\) ma pierwszą współrzędną dodatnią. Punkt \(M\) spełnia warunek \(\overrightarrow{AM}=-2\cdot\overrightarrow{BM}\).</p>
<p>Oblicz współrzędne punktów \(A\), \(B\) oraz \(M\).</p>`,
    ans: String.raw`\(A=\left(\tfrac{16}{5},-\tfrac{13}{5}\right)\), \(B=(-1,-2)\), \(M=\left(\tfrac25,-\tfrac{11}{5}\right)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Punkty \(A\) i \(B\) leżą na obu okręgach, więc spełniają oba równania naraz. Odejmując równania stronami, pozbywamy się wyrazów \(x^2\) i \(y^2\): zostaje równanie liniowe, czyli równanie <b>prostej \(AB\)</b>. Wstawiając je do jednego z okręgów, dostajemy równanie kwadratowe, którego dwa rozwiązania dają współrzędne \(A\) i \(B\).</p>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 274 311" width="274" height="311" role="img" aria-label="Okręgi O₁ i O₂ przecinające się w punktach A i B oraz punkt M na odcinku AB"><line class="s" x1="9.4" y1="196.4" x2="247.4" y2="196.4"/><path class="s" d="M241.4,193.4L247.4,196.4L241.4,199.4"/><line class="s" x1="94.4" y1="298.4" x2="94.4" y2="9.4"/><path class="s" d="M91.4,15.4L94.4,9.4L97.4,15.4"/><text x="253.4" y="209.4">x</text><text x="100.4" y="4.4">y</text><text x="88.4" y="209.4" text-anchor="end">O</text><circle class="a" cx="111.4" cy="247.4" r="38"/><circle class="p" cx="128.4" cy="128.4" r="114"/><line class="s d" x1="182.5" y1="245.4" x2="43.7" y2="225.6"/><circle class="dot" cx="111.4" cy="247.4" r="2.4"/><circle class="dot" cx="128.4" cy="128.4" r="2.4"/><circle class="dot" cx="148.8" cy="240.6" r="2.4"/><circle class="dot" cx="77.4" cy="230.4" r="2.4"/><circle class="dot" cx="101.2" cy="233.8" r="2.4"/><text x="105.4" y="260.4" text-anchor="end">O<tspan dy="3" font-size="9.5" font-style="normal">1</tspan></text><text x="134.4" y="123.4">O<tspan dy="3" font-size="9.5" font-style="normal">2</tspan></text><text x="154.8" y="253.6">A</text><text x="71.4" y="225.4" text-anchor="end">B</text><text x="101.2" y="226.8" text-anchor="middle">M</text></svg></div>
<p class="step"><b>Krok 1: prosta \(AB\).</b> Odejmujemy równania stronami (\(O_1-O_2\)):
\[(x-1)^2-(x-2)^2+(y+3)^2-(y-4)^2=5-45.\]
Rozwijamy: \((x-1)^2-(x-2)^2=(x^2-2x+1)-(x^2-4x+4)=2x-3\) oraz \((y+3)^2-(y-4)^2=(y^2+6y+9)-(y^2-8y+16)=14y-7\). Zatem \(2x-3+14y-7=-40\), czyli \(2x+14y=-30\), a po podzieleniu przez \(2\): \(x+7y=-15\). Stąd \(x=-15-7y\).</p>
<p class="step"><b>Krok 2: punkty przecięcia.</b> Wstawiamy \(x=-15-7y\) do równania \(O_1\) (wtedy \(x-1=-16-7y\)):
\[(-16-7y)^2+(y+3)^2=5\ \Longrightarrow\ 256+224y+49y^2+y^2+6y+9=5\ \Longrightarrow\ 50y^2+230y+260=0.\]
Po podzieleniu przez \(10\): \(5y^2+23y+26=0\). Wyróżnik \(\Delta=23^2-4\cdot5\cdot26=529-520=9\), więc \(y=\dfrac{-23\pm3}{10}\), czyli \(y=-2\) lub \(y=-\tfrac{13}5\). Odpowiednie \(x=-15-7y\): dla \(y=-2\) mamy \(x=-1\), a dla \(y=-\tfrac{13}5\) mamy \(x=-15+\tfrac{91}5=\tfrac{16}5\). Punkt \(A\) ma dodatnią pierwszą współrzędną, więc
\[A=\left(\tfrac{16}5,-\tfrac{13}5\right),\qquad B=(-1,-2).\]</p>
<p class="step"><b>Krok 3: punkt \(M\).</b> Zapis \(\overrightarrow{AM}=-2\,\overrightarrow{BM}\) oznacza \(M-A=-2\,(M-B)\). Rozwiązujemy względem \(M\): \(M-A=-2M+2B\), więc \(3M=A+2B\) i \(M=\dfrac{A+2B}3\):
\[M=\frac13\left(\frac{16}5+2\cdot(-1),\ -\frac{13}5+2\cdot(-2)\right)=\frac13\left(\frac65,-\frac{33}5\right)=\left(\frac25,-\frac{11}5\right).\]
Wektory \(\overrightarrow{AM}\) i \(\overrightarrow{BM}\) mają przeciwne zwroty, więc \(M\) leży między \(A\) i \(B\); skoro \(|AM|=2|BM|\), dzieli odcinek \(AB\) w stosunku \(2:1\) licząc od \(A\).</p>
<p class="step"><b>Sprawdzenie.</b> \(A\) leży na \(O_1\): \(\left(\tfrac{16}5-1\right)^2+\left(-\tfrac{13}5+3\right)^2=\left(\tfrac{11}5\right)^2+\left(\tfrac25\right)^2=\tfrac{121+4}{25}=5\) ✓ oraz na \(O_2\): \(\left(\tfrac{16}5-2\right)^2+\left(-\tfrac{13}5-4\right)^2=\tfrac{36+1089}{25}=45\) ✓. Dla \(B=(-1,-2)\): w \(O_1\) mamy \(4+1=5\) ✓, w \(O_2\) mamy \(9+36=45\) ✓.</p>
<p class="note"><b>Co warto zapamiętać.</b> Wspólne punkty dwóch okręgów znajdziesz, odejmując ich równania: wychodzi prosta (tzw. oś potęgowa), na której leżą oba punkty.</p>`
  },
  {
    group: "Okręgi i wektory",
    src: "maj 2026 · zad. 9",
    pts: 5,
    tags: ["trójkąt równoramienny", "symetralna odcinka", "równanie okręgu", "podział odcinka"],
    q: String.raw`<p>W kartezjańskim układzie współrzędnych \((x,y)\) punkty \(A=(1,-1)\) oraz \(B=(4,0)\) są wierzchołkami trójkąta \(ABC\), w którym \(|CA|=|CB|\). Jedno z ramion trójkąta \(ABC\) zawiera się w prostej o równaniu \(x+2y-4=0\). Na boku \(AC\) tego trójkąta obrano taki punkt \(M\), że \(|AM|:|MC|=1:4\).</p>
<p>Wyznacz równanie okręgu, który ma środek w punkcie \(M\) i przechodzi przez punkt \(C\).</p>`,
    ans: String.raw`\(\left(x-\tfrac65\right)^2+\left(y+\tfrac35\right)^2=\tfrac{16}5\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> W trójkącie równoramiennym o podstawie \(AB\) wierzchołek \(C\) leży na symetralnej odcinka \(AB\) (bo \(|CA|=|CB|\)). Jedno z ramion leży na danej prostej, więc \(C\) leży też na tej prostej. Punkt \(C\) znajdziemy jako przecięcie symetralnej \(AB\) z tą prostą; potem \(M\) i promień okręgu.</p>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 267 210" width="267" height="210" role="img" aria-label="Trójkąt równoramienny ABC, prosta zawierająca ramię CB, punkt M na boku AC i okrąg o środku M przechodzący przez C"><line class="s" x1="16.8" y1="109.2" x2="250" y2="109.2"/><path class="s" d="M244,106.2L250,109.2L244,112.2"/><line class="s" x1="38.8" y1="197.2" x2="38.8" y2="16.8"/><path class="s" d="M35.8,22.8L38.8,16.8L41.8,22.8"/><text x="256" y="122.2">x</text><text x="44.8" y="11.8">y</text><text x="32.8" y="122.2" text-anchor="end">O</text><line class="s d" x1="38.8" y1="21.2" x2="228" y2="115.8"/><circle class="a" cx="91.6" cy="135.6" r="78.7"/><polygon class="s" points="82.8,153.2 214.8,109.2 126.8,65.2"/><line class="p d" x1="126.8" y1="65.2" x2="148.8" y2="131.2"/><circle class="dot" cx="82.8" cy="153.2" r="2.4"/><circle class="dot" cx="214.8" cy="109.2" r="2.4"/><circle class="dot" cx="126.8" cy="65.2" r="2.4"/><circle class="dot" cx="91.6" cy="135.6" r="2.4"/><circle class="dot" cx="148.8" cy="131.2" r="2.4"/><text x="76.8" y="166.2" text-anchor="end">A</text><text x="220.8" y="104.2">B</text><text x="132.8" y="60.2">C</text><text x="97.6" y="148.6">M</text><text x="154.8" y="144.2">N</text></svg></div>
<p class="step"><b>Krok 1: które ramię leży na prostej?</b> Sprawdzamy, czy punkty \(A\) i \(B\) spełniają równanie \(x+2y-4=0\). Dla \(B=(4,0)\): \(4+0-4=0\) – tak. Dla \(A=(1,-1)\): \(1-2-4=-5\ne0\) – nie. Zatem na prostej leży ramię \(CB\), a \(C\) leży na tej prostej.</p>
<p class="step"><b>Krok 2: symetralna odcinka \(AB\).</b> Środek \(AB\): \(N=\left(\tfrac52,-\tfrac12\right)\). Współczynnik kierunkowy prostej \(AB\): \(\dfrac{0-(-1)}{4-1}=\tfrac13\), więc symetralna (prostopadła do \(AB\)) ma współczynnik \(-3\) (bo \(\tfrac13\cdot(-3)=-1\)). Jej równanie: \(y+\tfrac12=-3\left(x-\tfrac52\right)\), czyli \(y=-3x+7\).</p>
<p class="step"><b>Krok 3: punkt \(C\).</b> Rozwiązujemy układ \(y=-3x+7\) oraz \(x+2y=4\): \(x+2(-3x+7)=4\), więc \(-5x=-10\), \(x=2\) i \(y=1\). Zatem \(C=(2,1)\). Sprawdzenie: \(|CA|=\sqrt{1^2+2^2}=\sqrt5\) i \(|CB|=\sqrt{2^2+1^2}=\sqrt5\) ✓.</p>
<p class="step"><b>Krok 4: punkt \(M\).</b> Warunek \(|AM|:|MC|=1:4\) oznacza, że \(|AM|=\tfrac15|AC|\), czyli \(\overrightarrow{AM}=\tfrac15\overrightarrow{AC}\). Stąd
\[M=A+\tfrac15(C-A)=(1,-1)+\tfrac15(1,2)=\left(\tfrac65,-\tfrac35\right).\]</p>
<p class="step"><b>Krok 5: równanie okręgu.</b> Środek jest w \(M\), a okrąg ma przechodzić przez \(C\), więc promień to \(r=|MC|\), a \(r^2=\left(2-\tfrac65\right)^2+\left(1+\tfrac35\right)^2=\tfrac{16}{25}+\tfrac{64}{25}=\tfrac{80}{25}=\tfrac{16}5\). Równanie okręgu o środku \((a,b)\) i promieniu \(r\) to \((x-a)^2+(y-b)^2=r^2\), więc
\[\left(x-\tfrac65\right)^2+\left(y+\tfrac35\right)^2=\tfrac{16}5.\]</p>
<p class="note"><b>Drugi sposób na punkt \(C\).</b> Punkt na prostej \(x+2y=4\) zapisujemy jako \(C=(4-2y,\ y)\). Warunek \(|CA|^2=|CB|^2\) daje \((3-2y)^2+(y+1)^2=(-2y)^2+y^2\), czyli \(10-10y+5y^2=5y^2\), skąd \(y=1\) i \(C=(2,1)\).</p>`
  },
  {
    group: "Styczne do okręgu",
    src: "maj 2024 · zad. 11",
    pts: 5,
    tags: ["styczne do okręgu", "pole czworokąta", "rozważ wszystkie przypadki"],
    q: String.raw`<p>W kartezjańskim układzie współrzędnych \((x,y)\) środek \(S\) okręgu o promieniu \(\sqrt5\) leży na prostej o równaniu \(y=x+1\). Przez punkt \(A=(1,2)\), którego odległość od punktu \(S\) jest większa od \(\sqrt5\), poprowadzono dwie proste styczne do tego okręgu w punktach – odpowiednio – \(B\) i \(C\). Pole czworokąta \(ABSC\) jest równe \(15\).</p>
<p>Oblicz współrzędne punktu \(S\). Rozważ wszystkie przypadki.</p>`,
    ans: String.raw`\(S=(6,7)\) lub \(S=(-4,-3)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Promień poprowadzony do punktu styczności jest prostopadły do stycznej. Dlatego czworokąt \(ABSC\) składa się z dwóch trójkątów prostokątnych \(ABS\) i \(ACS\) (kąty proste przy \(B\) i \(C\)), które są przystające: mają wspólną przeciwprostokątną \(AS\) i równe przyprostokątne \(|SB|=|SC|=\sqrt5\). Z pola wyznaczymy \(|AB|\), potem \(|AS|\), a na końcu współrzędne \(S\).</p>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 250 250" width="250" height="250" role="img" aria-label="Okrąg o środku S i promieniu √5, styczne z punktu A w punktach B i C; czworokąt ABSC"><line class="s d" x1="11.4" y1="232.8" x2="232.8" y2="11.4"/><circle class="a" cx="162.6" cy="81.6" r="60.4"/><polygon class="f" points="27.6,216.6 189.6,135.6 162.6,81.6 108.6,54.6"/><polygon class="s" points="27.6,216.6 189.6,135.6 162.6,81.6 108.6,54.6"/><path class="s" d="M186.5,129.3L180.2,132.5L183.3,138.7"/><path class="s" d="M114.9,57.7L111.7,64L105.5,60.9"/><circle class="dot" cx="27.6" cy="216.6" r="2.4"/><circle class="dot" cx="189.6" cy="135.6" r="2.4"/><circle class="dot" cx="108.6" cy="54.6" r="2.4"/><circle class="dot" cx="162.6" cy="81.6" r="2.4"/><text x="33.6" y="229.6">A</text><text x="168.6" y="76.6">S</text><text x="195.6" y="148.6">B</text><text x="102.6" y="49.6" text-anchor="end">C</text><text x="99.6" y="169.1" text-anchor="end" class="m">3√5</text><text x="185.1" y="123.6" class="m">√5</text></svg></div>
<p class="step"><b>Krok 1: długość stycznej \(AB\).</b> Pole czworokąta to suma pól dwóch trójkątów prostokątnych: \(P_{ABSC}=2\cdot\tfrac12\cdot|AB|\cdot|SB|=|AB|\cdot\sqrt5=15\). Zatem \(|AB|=\dfrac{15}{\sqrt5}=3\sqrt5\).</p>
<p class="step"><b>Krok 2: odległość \(|AS|\).</b> Z twierdzenia Pitagorasa w trójkącie \(ABS\): \(|AS|^2=|AB|^2+|SB|^2=45+5=50\).</p>
<p class="step"><b>Krok 3: współrzędne \(S\).</b> Punkt \(S\) leży na prostej \(y=x+1\), więc \(S=(t,\ t+1)\). Odległość od \(A=(1,2)\):
\[|AS|^2=(t-1)^2+(t+1-2)^2=2(t-1)^2.\]
Z \(|AS|^2=50\) mamy \((t-1)^2=25\), czyli \(t-1=5\) lub \(t-1=-5\), skąd \(t=6\) lub \(t=-4\). Zatem \(S=(6,7)\) lub \(S=(-4,-3)\).</p>
<p class="step"><b>Krok 4: sprawdzenie warunków.</b> W obu przypadkach \(|AS|=\sqrt{50}=5\sqrt2>\sqrt5\), więc \(A\) leży na zewnątrz okręgu i styczne istnieją ✓.</p>
<p class="note"><b>Dlaczego są dwa rozwiązania?</b> Punkt \(A=(1,2)\) też leży na prostej \(y=x+1\) (bo \(2=1+1\)), więc środek \(S\) może leżeć na niej po obu stronach punktu \(A\), w odległości \(5\sqrt2\). Punkty \((6,7)\) i \((-4,-3)\) są symetryczne względem \(A\) (środek odcinka, który je łączy, to \(A\)), więc rysunek drugiego przypadku jest odbiciem pierwszego względem \(A\).</p>`
  },
  {
    group: "Parabola, prosta i okrąg",
    src: "maj 2023 · zad. 13",
    pts: 6,
    tags: ["parabola", "okrąg na średnicy", "tangens kąta", "kąt wpisany"],
    q: String.raw`<p>W kartezjańskim układzie współrzędnych \((x,y)\) prosta \(l\) o równaniu \(x-y-2=0\) przecina parabolę o równaniu \(y=4x^2-7x+1\) w punktach \(A\) oraz \(B\). Odcinek \(AB\) jest średnicą okręgu \(\mathcal{O}\). Punkt \(C\) leży na okręgu \(\mathcal{O}\) nad prostą \(l\), a kąt \(BAC\) jest ostry i ma miarę \(\alpha\) taką, że \(\operatorname{tg}\alpha=\tfrac13\) (zobacz rysunek).</p>
<p>Oblicz współrzędne punktu \(C\).</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 280 335" width="250" height="299" role="img" aria-label="Parabola, prosta l, okrąg o średnicy AB i punkt C"><path class="s" d="M14,125H268M262,121l6,4-6,4M70,330V8M66,14l4-6 4,6"/><path class="a" d="M67.5 23.1L71.7 52.6L75.9 80.5L80.1 106.7L84.3 131.2L88.5 154.1L92.7 175.3L96.9 194.8L101.1 212.6L105.3 228.7L109.5 243.1L113.7 255.9L117.9 267L122.1 276.4L126.3 284.1L130.5 290.2L134.7 294.5L138.9 297.2L143.1 298.2L147.3 297.6L151.5 295.2L155.7 291.2L159.9 285.5L164.1 278.1L168.3 269L172.5 258.3L176.7 245.8L180.9 231.7L185.1 215.9L189.3 198.4L193.5 179.3L197.7 158.5L201.9 136L206.1 111.8L210.3 85.9L214.5 58.3L218.7 29.1L219.9 20"/><line class="s" x1="53.2" y1="309.8" x2="246.4" y2="116.6"/><circle class="p" cx="154" cy="209" r="59.4"/><polyline class="p" points="112,251 162.4,150.2 196,167"/><path class="s" d="M127.6,235.4 A22,22 0 0 0 121.8,231.3"/><circle class="dot" cx="112" cy="251" r="2.6"/><circle class="dot" cx="196" cy="167" r="2.6"/><circle class="dot" cx="162.4" cy="150.2" r="2.6"/><text x="96" y="263">A</text><text x="204" y="170">B</text><text x="160" y="142">C</text><text x="138" y="237">α</text><text x="262" y="141">x</text><text x="76" y="14">y</text><text x="234" y="108">l</text><text class="m" x="151" y="140">1</text></svg>`,
    ans: String.raw`\(C=\left(\tfrac{11}{10},-\tfrac{3}{10}\right)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Najpierw znajdziemy \(A\) i \(B\), a z nich środek i promień okręgu. Kąt \(ACB\) jest wpisany i oparty na średnicy, więc jest prosty: \(ABC\) to trójkąt prostokątny, w którym znamy przeciwprostokątną \(AB\) i kąt \(\alpha\). Wyznaczymy bok \(AC\) oraz kierunek prostej \(AC\), a z nich – współrzędne \(C\).</p>
<p class="step"><b>Krok 1: punkty \(A\) i \(B\).</b> Przecinamy prostą \(y=x-2\) z parabolą \(y=4x^2-7x+1\): \(x-2=4x^2-7x+1\), czyli \(4x^2-8x+3=0\). Wyróżnik \(\Delta=64-48=16\), więc \(x=\dfrac{8\pm4}8\), czyli \(x=\tfrac12\) lub \(x=\tfrac32\). Stąd \(A=\left(\tfrac12,-\tfrac32\right)\) (punkt po lewej, jak na rysunku), \(B=\left(\tfrac32,-\tfrac12\right)\) oraz \(|AB|=\sqrt{1^2+1^2}=\sqrt2\). Środek okręgu: \(S=(1,-1)\), promień \(r=\tfrac{\sqrt2}2\).</p>
<p class="step"><b>Krok 2: długość \(AC\).</b> W trójkącie prostokątnym \(ABC\) (kąt prosty przy \(C\)) bok \(AC\) jest przyprostokątną przy kącie \(\alpha\), więc \(|AC|=|AB|\cos\alpha\). Z \(\operatorname{tg}\alpha=\tfrac13\) i ostrego \(\alpha\) mamy \(\cos\alpha=\dfrac1{\sqrt{1+\operatorname{tg}^2\alpha}}=\dfrac1{\sqrt{1+\frac19}}=\dfrac3{\sqrt{10}}\). Zatem
\[|AC|=\sqrt2\cdot\frac3{\sqrt{10}}=\frac3{\sqrt5}.\]</p>
<p class="step"><b>Krok 3: kierunek prostej \(AC\).</b> Prosta \(l\) (czyli \(AB\)) ma współczynnik kierunkowy \(1\), więc jest nachylona do osi \(Ox\) pod kątem \(45^\circ\). Punkt \(C\) leży nad prostą \(l\), więc prosta \(AC\) jest obrócona względem \(l\) o kąt \(\alpha\) „w górę”, czyli jej nachylenie do osi \(Ox\) to \(45^\circ+\alpha\). Ze wzoru na tangens sumy kątów:
\[\operatorname{tg}(45^\circ+\alpha)=\frac{\operatorname{tg}45^\circ+\operatorname{tg}\alpha}{1-\operatorname{tg}45^\circ\cdot\operatorname{tg}\alpha}=\frac{1+\frac13}{1-\frac13}=2.\]
Prosta \(AC\) ma więc współczynnik kierunkowy \(2\) i wektor kierunkowy \([1,2]\), którego długość to \(\sqrt5\).</p>
<p class="step"><b>Krok 4: współrzędne \(C\).</b> Od punktu \(A\) przesuwamy się o \(|AC|=\tfrac3{\sqrt5}\) w kierunku wektora \([1,2]\). Wektor \([1,2]\) ma długość \(\sqrt5\), więc potrzebne przesunięcie to \(\dfrac{3/\sqrt5}{\sqrt5}[1,2]=\tfrac35[1,2]=\left[\tfrac35,\tfrac65\right]\):
\[C=\left(\tfrac12,-\tfrac32\right)+\left(\tfrac35,\tfrac65\right)=\left(\tfrac{11}{10},-\tfrac3{10}\right).\]</p>
<p class="step"><b>Sprawdzenie.</b> Środek okręgu to \(S=(1,-1)\), a \(r^2=\tfrac12\). Dla \(C=(1{,}1;\,-0{,}3)\): \(|SC|^2=0{,}1^2+0{,}7^2=0{,}5=r^2\) ✓. Punkt \(C\) leży nad prostą \(l\), bo \(y_C=-0{,}3>x_C-2=-0{,}9\) ✓. Kąt \(\alpha\) między prostymi o współczynnikach \(1\) i \(2\): \(\operatorname{tg}\alpha=\left|\dfrac{2-1}{1+2\cdot1}\right|=\tfrac13\) ✓.</p>
<p class="note"><b>Drugi sposób na punkt \(C\).</b> Prosta \(AC\): \(y=2\left(x-\tfrac12\right)-\tfrac32=2x-\tfrac52\). Wstawiamy do równania okręgu \((x-1)^2+(y+1)^2=\tfrac12\): \((x-1)^2+\left(2x-\tfrac32\right)^2=\tfrac12\), czyli \(20x^2-32x+11=0\). Wyróżnik \(\Delta=144\), \(x=\tfrac12\) (to punkt \(A\)) lub \(x=\tfrac{11}{10}\), a stąd \(y=-\tfrac3{10}\).</p>`
  }
];
