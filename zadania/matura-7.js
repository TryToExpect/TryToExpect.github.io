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
    sol: String.raw`<p class="step"><b>Pomysł.</b> Punkty wspólne okręgów spełniają oba równania, więc spełniają też ich różnicę – to równanie prostej \(AB\). Wstawiając je do jednego z okręgów, dostajemy równanie kwadratowe.</p>
<p class="step"><b>Krok 1: prosta \(AB\).</b> Odejmujemy równania: \((x-1)^2+(y+3)^2-(x-2)^2-(y-4)^2=5-45\). Po rozwinięciu \(2x+14y-10=-40\), czyli \(x+7y=-15\) i \(x=-15-7y\).</p>
<p class="step"><b>Krok 2: punkty przecięcia.</b> Wstawiamy do \(O_1\): \((-16-7y)^2+(y+3)^2=5\), czyli \(50y^2+230y+260=0\), skąd \(5y^2+23y+26=0\), \(\Delta=529-520=9\) i \(y\in\{-2,\ -\tfrac{13}5\}\). Wtedy \(x=-1\) (dla \(y=-2\)) lub \(x=\tfrac{16}5\) (dla \(y=-\tfrac{13}5\)). Pierwsza współrzędna punktu \(A\) jest dodatnia, więc
\[A=\left(\tfrac{16}5,-\tfrac{13}5\right),\qquad B=(-1,-2).\]</p>
<p class="step"><b>Krok 3: punkt \(M\).</b> Warunek \(\overrightarrow{AM}=-2\,\overrightarrow{BM}\) oznacza \(M-A=-2(M-B)\), więc \(3M=A+2B\):
\[M=\tfrac13\left(\tfrac{16}5-2,\ -\tfrac{13}5-4\right)=\left(\tfrac25,\ -\tfrac{11}5\right).\]</p>
<p class="note"><b>Sprawdzenie:</b> dla \(A\): \(\left(\tfrac{11}5\right)^2+\left(-\tfrac{13}5+3\right)^2=\tfrac{121+4}{25}=5\) ✓ (leży na \(O_1\)).</p>`
  },
  {
    group: "Okręgi i wektory",
    src: "maj 2026 · zad. 9",
    pts: 5,
    tags: ["trójkąt równoramienny", "prosta", "równanie okręgu", "podział odcinka"],
    q: String.raw`<p>W kartezjańskim układzie współrzędnych \((x,y)\) punkty \(A=(1,-1)\) oraz \(B=(4,0)\) są wierzchołkami trójkąta \(ABC\), w którym \(|CA|=|CB|\). Jedno z ramion trójkąta \(ABC\) zawiera się w prostej o równaniu \(x+2y-4=0\). Na boku \(AC\) tego trójkąta obrano taki punkt \(M\), że \(|AM|:|MC|=1:4\).</p>
<p>Wyznacz równanie okręgu, który ma środek w punkcie \(M\) i przechodzi przez punkt \(C\).</p>`,
    ans: String.raw`\(\left(x-\tfrac65\right)^2+\left(y+\tfrac35\right)^2=\tfrac{16}5\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wierzchołek \(C\) leży na jednym z ramion (\(CA\) lub \(CB\)) i na symetralnej odcinka \(AB\). Sprawdzimy najpierw, które ramię może leżeć na danej prostej.</p>
<p class="step"><b>Krok 1: które ramię?</b> Dla \(B=(4,0)\): \(4+0-4=0\), więc \(B\) leży na prostej. Dla \(A=(1,-1)\): \(1-2-4=-5\ne0\), więc \(A\) nie leży na prostej. Zatem na prostej leży ramię \(CB\) i \(C=(4-2y,\ y)\).</p>
<p class="step"><b>Krok 2: warunek \(|CA|=|CB|\).</b> \((3-2y)^2+(y+1)^2=(-2y)^2+y^2\Rightarrow10-10y+5y^2=5y^2\Rightarrow y=1\). Stąd \(C=(2,1)\). Sprawdzenie: \(|CA|=|CB|=\sqrt5\).</p>
<p class="step"><b>Krok 3: punkt \(M\).</b> \(|AM|:|MC|=1:4\) oznacza \(\overrightarrow{AM}=\tfrac15\overrightarrow{AC}\), więc \(M=A+\tfrac15(C-A)=(1,-1)+\tfrac15(1,2)=\left(\tfrac65,-\tfrac35\right)\).</p>
<p class="step"><b>Krok 4: promień.</b> \(r=|MC|=\tfrac45|AC|=\tfrac45\sqrt5\), więc \(r^2=\tfrac{16}5\).</p>`
  },
  {
    group: "Styczne do okręgu",
    src: "maj 2024 · zad. 11",
    pts: 5,
    tags: ["styczne do okręgu", "pole czworokąta", "rozważ wszystkie przypadki"],
    q: String.raw`<p>W kartezjańskim układzie współrzędnych \((x,y)\) środek \(S\) okręgu o promieniu \(\sqrt5\) leży na prostej o równaniu \(y=x+1\). Przez punkt \(A=(1,2)\), którego odległość od punktu \(S\) jest większa od \(\sqrt5\), poprowadzono dwie proste styczne do tego okręgu w punktach – odpowiednio – \(B\) i \(C\). Pole czworokąta \(ABSC\) jest równe \(15\).</p>
<p>Oblicz współrzędne punktu \(S\). Rozważ wszystkie przypadki.</p>`,
    ans: String.raw`\(S=(6,7)\) lub \(S=(-4,-3)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Czworokąt \(ABSC\) składa się z dwóch przystających trójkątów prostokątnych (kąty przy \(B\) i \(C\) są proste, bo promień jest prostopadły do stycznej w punkcie styczności). Z pola wyznaczymy \(|AB|\), a potem \(|AS|\).</p>
<p class="step"><b>Krok 1.</b> \(P_{ABSC}=2\cdot\tfrac12\cdot|AB|\cdot r=|AB|\sqrt5=15\), więc \(|AB|=\tfrac{15}{\sqrt5}=3\sqrt5\).</p>
<p class="step"><b>Krok 2.</b> W trójkącie \(ABS\) (kąt prosty przy \(B\)): \(|AS|^2=|AB|^2+r^2=45+5=50\).</p>
<p class="step"><b>Krok 3.</b> \(S=(t,\ t+1)\), więc \(|AS|^2=(t-1)^2+(t-1)^2=2(t-1)^2=50\), skąd \((t-1)^2=25\) i \(t=6\) lub \(t=-4\). Oba punkty spełniają \(|AS|=5\sqrt2>\sqrt5\).</p>
<p class="note"><b>Uwaga:</b> punkt \(A=(1,2)\) leży na prostej \(y=x+1\), więc oba rozwiązania są po przeciwnych stronach punktu \(A\) – stąd dwa przypadki.</p>`
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
    sol: String.raw`<p class="step"><b>Pomysł.</b> Najpierw znajdziemy \(A\) i \(B\), a z nich środek i promień okręgu. Kąt \(ACB\) oparty na średnicy jest prosty, więc \(C\) wyznaczymy z trójkąta prostokątnego \(ABC\) i danego \(\operatorname{tg}\alpha\).</p>
<p class="step"><b>Krok 1: punkty \(A\) i \(B\).</b> Z \(y=x-2\) i \(y=4x^2-7x+1\): \(4x^2-8x+3=0\), \(\Delta=16\), \(x=\tfrac12\) lub \(x=\tfrac32\). Zatem \(A=\left(\tfrac12,-\tfrac32\right)\), \(B=\left(\tfrac32,-\tfrac12\right)\) i \(|AB|=\sqrt2\). (Punkt \(A\) jest po lewej stronie, tak jak na rysunku.)</p>
<p class="step"><b>Krok 2: trójkąt \(ABC\).</b> \(\angle ACB=90^\circ\) (kąt wpisany oparty na średnicy). Z \(\operatorname{tg}\alpha=\tfrac13\) mamy \(\cos\alpha=\tfrac3{\sqrt{10}}\) i \(\sin\alpha=\tfrac1{\sqrt{10}}\), więc
\[|AC|=|AB|\cos\alpha=\sqrt2\cdot\frac3{\sqrt{10}}=\frac3{\sqrt5}.\]</p>
<p class="step"><b>Krok 3: położenie \(C\).</b> Wektor jednostkowy wzdłuż \(AB\): \(\mathbf u=\tfrac1{\sqrt2}(1,1)\). Wektor jednostkowy prostopadły do \(l\), skierowany „nad prostą”: \(\mathbf n=\tfrac1{\sqrt2}(-1,1)\). Wtedy
\[C=A+|AC|\,(\cos\alpha\cdot\mathbf u+\sin\alpha\cdot\mathbf n)=\left(\tfrac12,-\tfrac32\right)+\tfrac9{10}(1,1)+\tfrac3{10}(-1,1)=\left(\tfrac{11}{10},-\tfrac3{10}\right).\]</p>
<p class="note"><b>Sprawdzenie:</b> środek okręgu to \(S=(1,-1)\), \(r=\tfrac{\sqrt2}2\). Dla \(C=(1{,}1;\,-0{,}3)\): \(|SC|^2=0{,}1^2+0{,}7^2=0{,}5=r^2\) ✓. Punkt \(C\) leży nad prostą \(l\), bo \(-0{,}3>1{,}1-2\).</p>`
  }
];
