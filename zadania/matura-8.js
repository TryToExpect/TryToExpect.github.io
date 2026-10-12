(window.TASKS = window.TASKS || {})['matura-8'] = [
  {
    group: "Stożek i graniastosłup – wzory na pola i objętości",
    src: "maj 2025 · zad. 12.1",
    pts: 2,
    tags: ["stożek", "objętość", "odległość od tworzącej"],
    q: String.raw`<p>Rozważamy wszystkie stożki, których wysokość jest większa od \(5\), a odległość środka podstawy od tworzącej jest równa \(5\).</p>
<p>Wykaż, że objętość \(V\) stożka, jako funkcja wysokości \(h\) stożka, wyraża się wzorem
\[V(h)=\frac\pi3\cdot\frac{25h^3}{h^2-25}.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Odległość środka podstawy od tworzącej to wysokość trójkąta prostokątnego o przyprostokątnych \(r\) (promień podstawy) i \(h\) (wysokość stożka), opuszczona na przeciwprostokątną – tworzącą \(l=\sqrt{r^2+h^2}\).</p>
<p class="step"><b>Krok 1.</b> Pole tego trójkąta liczymy na dwa sposoby: \(\tfrac12rh=\tfrac12\,l\cdot5\), więc \(rh=5\sqrt{r^2+h^2}\). Podnosimy do kwadratu: \(r^2h^2=25(r^2+h^2)\).</p>
<p class="step"><b>Krok 2.</b> Stąd \(r^2(h^2-25)=25h^2\), a ponieważ \(h>5\), możemy podzielić: \(r^2=\dfrac{25h^2}{h^2-25}\).</p>
<p class="step"><b>Krok 3.</b> \(V=\tfrac13\pi r^2h=\dfrac\pi3\cdot\dfrac{25h^3}{h^2-25}\). \(\blacksquare\)</p>`
  },
  {
    group: "Stożek i graniastosłup – wzory na pola i objętości",
    src: "maj 2024 · zad. 13.1",
    pts: 2,
    tags: ["graniastosłup prawidłowy trójkątny", "pole powierzchni całkowitej", "objętość"],
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
    group: "Przekroje i kąty w ostrosłupach i sześcianie",
    src: "maj 2023 · zad. 7",
    pts: 4,
    tags: ["sześcian", "odległość punktu od prostej", "współrzędne w przestrzeni"],
    q: String.raw`<p>Dany jest sześcian \(ABCDEFGH\) o krawędzi długości \(6\). Punkt \(S\) jest punktem przecięcia przekątnych \(AH\) i \(DE\) ściany bocznej \(ADHE\) (zobacz rysunek).</p>
<p>Oblicz wysokość trójkąta \(SBH\) poprowadzoną z punktu \(S\) na bok \(BH\) tego trójkąta.</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 230 205" width="250" height="223" role="img" aria-label="Sześcian ABCDEFGH z punktem S w środku ściany ADHE"><polygon class="s" points="30,176 130,176 130,76 30,76"/><polyline class="s" points="30,76 76,30 176,30 130,76"/><line class="s" x1="130" y1="176" x2="176" y2="130"/><line class="s" x1="176" y1="130" x2="176" y2="30"/><line class="s d" x1="30" y1="176" x2="76" y2="130"/><line class="s d" x1="76" y1="130" x2="176" y2="130"/><line class="s d" x1="76" y1="130" x2="76" y2="30"/><line class="s d" x1="30" y1="176" x2="76" y2="30"/><line class="s d" x1="76" y1="130" x2="30" y2="76"/><polygon class="a" points="53,103 130,176 76,30"/><circle class="dot" cx="53" cy="103" r="2.4"/><text x="14" y="190">A</text><text x="134" y="190">B</text><text x="182" y="134">C</text><text x="74" y="144">D</text><text x="14" y="74">E</text><text x="134" y="68">F</text><text x="182" y="32">G</text><text x="70" y="24">H</text><text x="58" y="117">S</text><text class="m" x="76" y="192">6</text></svg>`,
    ans: String.raw`\(\sqrt6\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Policzymy długości trzech boków trójkąta \(SBH\) i jego pole, a wysokość z pola: \(h=\dfrac{2P}{|BH|}\). Wygodnie użyć współrzędnych: \(A=(0,0,0)\), \(B=(6,0,0)\), \(D=(0,6,0)\), \(E=(0,0,6)\), więc \(H=(0,6,6)\).</p>
<p class="step"><b>Krok 1: punkt \(S\).</b> \(S\) to środek odcinka \(AH\), czyli \(S=(0,3,3)\).</p>
<p class="step"><b>Krok 2: boki.</b> \(|BH|=\sqrt{6^2+6^2+6^2}=6\sqrt3\), \(|SB|=\sqrt{36+9+9}=3\sqrt6\), \(|SH|=\sqrt{0+9+9}=3\sqrt2\).</p>
<p class="step"><b>Krok 3: pole.</b> Wektory \(\overrightarrow{SB}=(6,-3,-3)\) i \(\overrightarrow{SH}=(0,3,3)\) mają iloczyn wektorowy \((0,-18,18)\) o długości \(18\sqrt2\), więc \(P_{SBH}=9\sqrt2\).</p>
<p class="step"><b>Krok 4: wysokość.</b> \(h=\dfrac{2P_{SBH}}{|BH|}=\dfrac{18\sqrt2}{6\sqrt3}=\dfrac{3\sqrt2}{\sqrt3}=\sqrt6\).</p>
<p class="note"><b>Bez wektorów:</b> twierdzenie cosinusów w trójkącie \(SBH\) daje \(\cos\angle SHB=\dfrac{|SH|^2+|BH|^2-|SB|^2}{2|SH||BH|}=\dfrac{18+108-54}{2\cdot3\sqrt2\cdot6\sqrt3}=\dfrac2{\sqrt6}\), więc \(\sin\angle SHB=\dfrac1{\sqrt3}\), a wysokość z \(S\) to \(|SH|\sin\angle SHB=3\sqrt2\cdot\dfrac1{\sqrt3}=\sqrt6\).</p>`
  },
  {
    group: "Przekroje i kąty w ostrosłupach i sześcianie",
    src: "maj 2026 · zad. 8",
    pts: 4,
    tags: ["ostrosłup prawidłowy trójkątny", "kąt dwuścienny", "twierdzenie cosinusów"],
    q: String.raw`<p>W ostrosłupie prawidłowym trójkątnym \(ABCS\) podstawa \(ABC\) jest trójkątem równobocznym. Długość okręgu opisanego na podstawie \(ABC\) jest równa \(6\sqrt2\pi\), a cosinus kąta między krawędziami bocznymi \(SB\) i \(SC\) jest równy \(\tfrac59\).</p>
<p>Oblicz długość krawędzi podstawy \(ABC\) oraz cosinus kąta między ścianami bocznymi \(SAC\) i \(SBC\) tego ostrosłupa.</p>`,
    ans: String.raw`krawędź podstawy \(3\sqrt6\); cosinus kąta między ścianami \(\dfrac5{14}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Z długości okręgu opisanego dostajemy promień \(R\) i krawędź podstawy \(a\). Z kąta między krawędziami bocznymi (twierdzenie cosinusów w trójkącie \(SBC\)) – długość krawędzi bocznej \(b\). Kąt między ścianami \(SAC\) i \(SBC\) to kąt dwuścienny przy krawędzi \(SC\).</p>
<p class="step"><b>Krok 1: krawędź podstawy.</b> \(2\pi R=6\sqrt2\pi\Rightarrow R=3\sqrt2\). Dla trójkąta równobocznego \(R=\dfrac{a\sqrt3}3\), więc \(a=R\sqrt3=3\sqrt6\) i \(a^2=54\).</p>
<p class="step"><b>Krok 2: krawędź boczna.</b> W trójkącie równoramiennym \(SBC\) (\(|SB|=|SC|=b\), \(|BC|=a\)): \(a^2=2b^2-2b^2\cos\angle BSC=2b^2\left(1-\tfrac59\right)=\tfrac89b^2\). Stąd \(b^2=\tfrac98a^2=\tfrac{243}4\).</p>
<p class="step"><b>Krok 3: wysokości ścian na krawędź \(SC\).</b> Trójkąty \(SAC\) i \(SBC\) są przystające (\(|SA|=|SB|\), \(|AC|=|BC|\), wspólny bok \(SC\)), więc wysokości poprowadzone z \(A\) i z \(B\) na prostą \(SC\) mają ten sam spodek \(H\) i równe długości \(|AH|=|BH|=h\). Pole trójkąta \(SAC\) liczymy na dwa sposoby: \(\tfrac12\cdot a\cdot\sqrt{b^2-\tfrac{a^2}4}\) (podstawa \(AC\), wysokość z \(S\)) oraz \(\tfrac12\cdot b\cdot h\) (podstawa \(SC\)). Stąd
\[h^2=\frac{a^2\left(b^2-\frac{a^2}4\right)}{b^2}=\frac{54\cdot\frac{189}4}{\frac{243}4}=42.\]</p>
<p class="step"><b>Krok 4: kąt między ścianami.</b> Kąt dwuścienny \(\varphi\) to kąt \(AHB\) w trójkącie równoramiennym \(AHB\) z \(|AH|=|BH|=h\) i \(|AB|=a\). Z twierdzenia cosinusów:
\[\cos\varphi=\frac{2h^2-a^2}{2h^2}=\frac{84-54}{84}=\frac5{14}.\]</p>`
  },
  {
    group: "Przekroje i kąty w ostrosłupach i sześcianie",
    src: "maj 2025 · zad. 10",
    pts: 5,
    tags: ["ostrosłup prawidłowy czworokątny", "kąt dwuścienny", "pole powierzchni bocznej"],
    q: String.raw`<p>Podstawą ostrosłupa \(ABCDS\) jest kwadrat \(ABCD\). Krawędź boczna \(SA\) jest wysokością ostrosłupa, natomiast krawędź podstawy ma długość \(3\sqrt{34}\). Cosinus kąta \(\beta\) między ścianami bocznymi \(CDS\) i \(BCS\) tego ostrosłupa jest równy \(-\tfrac9{25}\).</p>
<p>Oblicz pole powierzchni bocznej tego ostrosłupa.</p>`,
    ans: String.raw`\(P_b=918\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Kąt między ścianami \(BCS\) i \(CDS\) to kąt dwuścienny przy krawędzi \(SC\). Wyrazimy jego cosinus przez krawędź podstawy \(a\) i wysokość \(h=|SA|\), a stąd wyznaczymy \(h\).</p>
<p class="step"><b>Krok 1: współrzędne.</b> \(A=(0,0,0)\), \(B=(a,0,0)\), \(D=(0,a,0)\), \(C=(a,a,0)\), \(S=(0,0,h)\). Płaszczyzna \(BCS\): \(hx+az=ah\), a wektor normalny skierowany na zewnątrz bryły: \(\mathbf n_1=(h,0,a)\). Płaszczyzna \(CDS\): \(hy+az=ah\), \(\mathbf n_2=(0,h,a)\).</p>
<p class="step"><b>Krok 2: kąt \(\beta\).</b> Kąt dwuścienny wewnątrz bryły jest dopełnieniem do \(180^\circ\) kąta między normalnymi zewnętrznymi, więc
\[\cos\beta=-\frac{\mathbf n_1\cdot\mathbf n_2}{|\mathbf n_1|\,|\mathbf n_2|}=-\frac{a^2}{a^2+h^2}.\]
Z danych: \(\dfrac{a^2}{a^2+h^2}=\dfrac9{25}\Rightarrow25a^2=9a^2+9h^2\Rightarrow h=\dfrac43a\). Dla \(a=3\sqrt{34}\): \(h=4\sqrt{34}\).</p>
<p class="step"><b>Krok 3: pole powierzchni bocznej.</b> Ściany \(SAB\) i \(SAD\) to trójkąty prostokątne o przyprostokątnych \(a\) i \(h\), każda o polu \(\tfrac12ah\). Ściany \(SBC\) i \(SDC\): \(BC\perp AB\) oraz \(BC\perp SA\), więc \(BC\perp SB\) – trójkąt prostokątny o przyprostokątnych \(a\) i \(|SB|=\sqrt{a^2+h^2}=\tfrac53a\), każda o polu \(\tfrac12a\cdot\tfrac53a\). Razem
\[P_b=2\cdot\tfrac12a\cdot\tfrac43a+2\cdot\tfrac12a\cdot\tfrac53a=\tfrac43a^2+\tfrac53a^2=3a^2=3\cdot306=918.\]</p>
<p class="note"><b>Sprawdzenie:</b> \(a^2=9\cdot34=306\), więc \(h^2=\tfrac{16}9\cdot306=544\) i \(\dfrac{a^2}{a^2+h^2}=\dfrac{306}{850}=\dfrac9{25}\) ✓.</p>`
  }
];
