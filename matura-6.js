(window.TASKS = window.TASKS || {})['matura-6'] = [
  {
    group: "Trójkąty",
    src: "maj 2025 · zad. 3",
    pts: 3,
    tags: ["trójkąt równoboczny", "pole trójkąta", "sinus różnicy kątów"],
    q: String.raw`<p>W trójkącie równobocznym \(ABC\) punkt \(D\) leży na boku \(BC\). Stosunek pola trójkąta \(ABD\) do pola trójkąta \(ADC\) jest równy \(\dfrac{\sqrt3-1}{2}\).</p>
<p>Oblicz miarę kąta \(DAC\).</p>`,
    ans: String.raw`\(\angle DAC=45^\circ\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Trójkąty \(ABD\) i \(ADC\) mają wspólny wierzchołek \(A\) i wspólny bok \(AD\), a boki \(AB\) i \(AC\) są równe (trójkąt \(ABC\) jest równoboczny). Dlatego ich pola łatwo porównać wzorem na pole z sinusem kąta: \(P=\tfrac12\,ab\sin\gamma\) (dwa boki i kąt między nimi).</p>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 280 214" width="280" height="214" role="img" aria-label="Trójkąt równoboczny ABC, punkt D na boku BC, kąty ψ = BAD oraz φ = DAC"><polygon class="s" points="140,22.8 40,196 240,196"/><line class="p" x1="140" y1="22.8" x2="93.6" y2="196"/><path class="a" d="M129.6,61.4A40,40 0 0 0 160,57.4"/><text x="147" y="80.8" text-anchor="middle">φ</text><path class="a" d="M120,57.4A40,40 0 0 0 129.6,61.4"/><text x="110" y="83.3" text-anchor="middle">ψ</text><circle class="dot" cx="93.6" cy="196" r="2.4"/><text x="140" y="15.8" text-anchor="middle">A</text><text x="34" y="209" text-anchor="end">B</text><text x="246" y="209">C</text><text x="93.6" y="210" text-anchor="middle">D</text></svg></div>
<p class="step"><b>Krok 1: oznaczenia kątów.</b> Niech \(\varphi=\angle DAC\) (to kąt, który mamy znaleźć) i \(\psi=\angle BAD\). Kąt przy wierzchołku \(A\) trójkąta równobocznego ma \(60^\circ\), więc \(\psi=60^\circ-\varphi\).</p>
<p class="step"><b>Krok 2: pola obu trójkątów.</b> Oba trójkąty mają dwa boki wychodzące z \(A\) i kąt między nimi:
\[P_{ABD}=\tfrac12\,|AB|\cdot|AD|\cdot\sin(60^\circ-\varphi),\qquad P_{ADC}=\tfrac12\,|AC|\cdot|AD|\cdot\sin\varphi.\]
Ponieważ \(|AB|=|AC|\), po podzieleniu skracają się wspólne czynniki \(\tfrac12|AB|\cdot|AD|\) i zostaje stosunek sinusów:
\[\frac{P_{ABD}}{P_{ADC}}=\frac{\sin(60^\circ-\varphi)}{\sin\varphi}=\frac{\sqrt3-1}{2}.\]</p>
<p class="step"><b>Krok 3: sinus różnicy.</b> Rozwijamy licznik wzorem \(\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta\):
\[\sin(60^\circ-\varphi)=\sin60^\circ\cos\varphi-\cos60^\circ\sin\varphi=\tfrac{\sqrt3}2\cos\varphi-\tfrac12\sin\varphi.\]
Dzielimy przez \(\sin\varphi\) (jest dodatni, bo \(0^\circ<\varphi<60^\circ\)) i oznaczamy \(\operatorname{ctg}\varphi=\dfrac{\cos\varphi}{\sin\varphi}\):
\[\frac{\sqrt3}2\operatorname{ctg}\varphi-\frac12=\frac{\sqrt3-1}2.\]</p>
<p class="step"><b>Krok 4: rozwiązanie równania.</b> Dodajemy \(\tfrac12\) do obu stron: \(\tfrac{\sqrt3}2\operatorname{ctg}\varphi=\tfrac{\sqrt3}2\), czyli \(\operatorname{ctg}\varphi=1\). Jedynym kątem ostrym o cotangensie równym \(1\) jest \(\varphi=45^\circ\).</p>
<p class="step"><b>Sprawdzenie.</b> Dla \(\varphi=45^\circ\) mamy \(\psi=15^\circ\) i \(\dfrac{\sin15^\circ}{\sin45^\circ}=\dfrac{(\sqrt6-\sqrt2)/4}{\sqrt2/2}=\dfrac{\sqrt6-\sqrt2}{2\sqrt2}=\dfrac{\sqrt3-1}2\) ✓.</p>
<p class="note"><b>Co warto zapamiętać.</b> Gdy dwa trójkąty mają wspólny wierzchołek i równe sąsiednie boki, stosunek ich pól jest stosunkiem sinusów kątów przy tym wierzchołku. Ten sam pomysł działa w wielu zadaniach o punkcie na boku trójkąta.</p>`
  },
  {
    group: "Trójkąty",
    src: "maj 2021 · zad. 8",
    pts: 3,
    tags: ["trójkąt równoboczny", "pole", "geometria analityczna jako narzędzie"],
    q: String.raw`<p>Dany jest trójkąt równoboczny \(ABC\). Na bokach \(AB\) i \(AC\) wybrano punkty – odpowiednio – \(D\) i \(E\) takie, że \(|BD|=|AE|=\tfrac13|AB|\). Odcinki \(CD\) i \(BE\) przecinają się w punkcie \(P\) (zobacz rysunek).</p>
<p>Wykaż, że pole trójkąta \(DBP\) jest \(21\) razy mniejsze od pola trójkąta \(ABC\).</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 330 272" width="270" height="223" role="img" aria-label="Trójkąt równoboczny ABC z odcinkami CD i BE"><polygon class="f" points="204,246 292,246 197.7,213.3"/><polygon class="s" points="28,246 292,246 160,17.4"/><line class="a" x1="160" y1="17.4" x2="204" y2="246"/><line class="a" x1="292" y1="246" x2="72" y2="169.8"/><circle class="dot" cx="204" cy="246" r="2.4"/><circle class="dot" cx="72" cy="169.8" r="2.4"/><circle class="dot" cx="197.7" cy="213.3" r="2.4"/><text x="12" y="262">A</text><text x="297" y="262">B</text><text x="156" y="12">C</text><text x="200" y="264">D</text><text x="54" y="172">E</text><text x="184" y="206">P</text></svg>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Szukamy stosunku dwóch pól, więc długość boku nie ma znaczenia: trójkąty równoboczne o różnych bokach są podobne, a ich pola mają ten sam stosunek. Przyjmujemy wygodną wartość \(|AB|=3\) (wtedy \(\tfrac13|AB|=1\)). Zamienimy rysunek na układ współrzędnych, punkt \(P\) znajdziemy jako przecięcie dwóch prostych, a pole trójkąta \(DBP\) policzymy z wysokości.</p>
<p class="step"><b>Krok 1: współrzędne punktów.</b> Bok \(AB\) kładziemy na osi \(Ox\): \(A=(0,0)\), \(B=(3,0)\). Wierzchołek \(C\) leży nad środkiem \(AB\), na wysokości trójkąta równobocznego o boku \(3\), czyli \(\tfrac{3\sqrt3}2\): \(C=\left(\tfrac32,\tfrac{3\sqrt3}2\right)\). Skoro \(|BD|=1\), to \(D=(2,0)\). Punkt \(E\) leży na \(AC\) w odległości \(\tfrac13|AC|\) od \(A\), więc \(E=\tfrac13C=\left(\tfrac12,\tfrac{\sqrt3}2\right)\).</p>
<p class="step"><b>Krok 2: proste \(CD\) i \(BE\).</b> Prostą przez dwa punkty zapisujemy, licząc najpierw współczynnik kierunkowy \(a=\dfrac{y_2-y_1}{x_2-x_1}\).
Dla \(CD\): \(a=\dfrac{0-\frac{3\sqrt3}2}{2-\frac32}=-3\sqrt3\), więc \(y=-3\sqrt3\,(x-2)\).
Dla \(BE\): \(a=\dfrac{\frac{\sqrt3}2-0}{\frac12-3}=-\dfrac{\sqrt3}5\), więc \(y=-\dfrac{\sqrt3}5\,(x-3)\).</p>
<p class="step"><b>Krok 3: punkt \(P\).</b> W punkcie przecięcia obu prostych wartości \(y\) są równe:
\[-3\sqrt3\,(x-2)=-\tfrac{\sqrt3}5\,(x-3).\]
Dzielimy przez \(-\sqrt3\) i mnożymy przez \(5\): \(15(x-2)=x-3\), czyli \(14x=27\) i \(x=\tfrac{27}{14}\). Wtedy \(y_P=-3\sqrt3\left(\tfrac{27}{14}-2\right)=\tfrac{3\sqrt3}{14}\).</p>
<p class="step"><b>Krok 4: pole trójkąta \(DBP\).</b> Podstawa \(DB\) leży na osi \(Ox\) i ma długość \(1\), a wysokość opuszczona z \(P\) to po prostu \(y_P\):
\[P_{DBP}=\tfrac12\cdot1\cdot\tfrac{3\sqrt3}{14}=\tfrac{3\sqrt3}{28}.\]
Pole trójkąta \(ABC\): \(\dfrac{a^2\sqrt3}4=\dfrac{9\sqrt3}4\).</p>
<p class="step"><b>Krok 5: iloraz.</b> \(\dfrac{P_{ABC}}{P_{DBP}}=\dfrac{9\sqrt3}{4}\cdot\dfrac{28}{3\sqrt3}=\dfrac{9\cdot28}{4\cdot3}=21\). Zatem pole trójkąta \(DBP\) jest \(21\) razy mniejsze od pola trójkąta \(ABC\). \(\blacksquare\)</p>
<p class="note"><b>Sprawdzenie sensowności.</b> Punkt \(P\) powinien leżeć wewnątrz trójkąta: \(0<\tfrac{27}{14}<3\) i \(y_P>0\) ✓. A pole \(DBP\) to około \(4{,}8\%\) pola \(ABC\) (\(\tfrac1{21}\)), co zgadza się z rysunkiem – to mały trójkąt przy wierzchołku \(B\).</p>`
  },
  {
    group: "Trójkąty",
    src: "maj 2023 · zad. 5",
    pts: 3,
    tags: ["trójkąt prostokątny", "twierdzenie sinusów", "dowód"],
    q: String.raw`<p>Dany jest trójkąt prostokątny \(ABC\), w którym \(|\angle ABC|=90^\circ\) oraz \(|\angle CAB|=60^\circ\). Punkty \(K\) i \(L\) leżą na bokach – odpowiednio – \(AB\) i \(BC\) tak, że \(|BK|=|BL|=1\) (zobacz rysunek). Odcinek \(KL\) przecina wysokość \(BD\) tego trójkąta w punkcie \(N\), a ponadto \(|AD|=2\).</p>
<p>Wykaż, że \(|ND|=\sqrt3+1\).</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 340 220" width="300" height="194" role="img" aria-label="Trójkąt prostokątny ABC z punktami K, L, D, N"><polygon class="s" points="24,20 24,196 328.8,196"/><line class="a" x1="24" y1="196" x2="100.2" y2="64"/><line class="p" x1="24" y1="152" x2="68" y2="196"/><path class="s" d="M24,188h8v8"/><circle class="dot" cx="24" cy="152" r="2.4"/><circle class="dot" cx="68" cy="196" r="2.4"/><circle class="dot" cx="100.2" cy="64" r="2.4"/><circle class="dot" cx="40.1" cy="168.1" r="2.4"/><text x="8" y="22">A</text><text x="8" y="214">B</text><text x="335" y="214">C</text><text x="8" y="156">K</text><text x="65" y="214">L</text><text x="106" y="60">D</text><text x="45" y="163">N</text></svg>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Punkt \(N\) leży na odcinku \(BD\), więc \(|ND|=|BD|-|BN|\). Obie długości policzymy osobno: \(|BD|\) z trójkąta prostokątnego \(ABD\), a \(|BN|\) z trójkąta \(BNL\) z twierdzenia sinusów (znamy w nim bok \(BL\) i dwa kąty).</p>
<p class="step"><b>Krok 1: wysokość \(BD\).</b> W trójkącie prostokątnym \(ABD\) (kąt prosty przy \(D\)) kąt przy \(A\) ma \(60^\circ\), a \(|AD|=2\). Ponieważ \(\cos60^\circ=\dfrac{|AD|}{|AB|}\), mamy \(|AB|=\dfrac2{1/2}=4\). Dalej \(|BD|=|AB|\cdot\sin60^\circ=4\cdot\dfrac{\sqrt3}2=2\sqrt3\).</p>
<p class="step"><b>Krok 2: kąty trójkąta \(BNL\).</b> W trójkącie \(ABC\) kąty to \(90^\circ\), \(60^\circ\) i \(\angle C=30^\circ\). W trójkącie prostokątnym \(DBC\) (kąt prosty przy \(D\)) kąt przy \(C\) ma \(30^\circ\), więc \(\angle DBC=90^\circ-30^\circ=60^\circ\). Skoro \(N\) leży na \(BD\) i \(L\) na \(BC\), to \(\angle NBL=60^\circ\).
Trójkąt \(KBL\) jest prostokątny i równoramienny (\(|BK|=|BL|=1\)), więc \(\angle BLK=45^\circ\); a ponieważ \(N\) leży na odcinku \(KL\), mamy \(\angle BLN=45^\circ\). Trzeci kąt trójkąta \(BNL\): \(\angle BNL=180^\circ-60^\circ-45^\circ=75^\circ\).</p>
<p class="step"><b>Krok 3: \(|BN|\) z twierdzenia sinusów.</b> W trójkącie \(BNL\) bok \(BN\) leży naprzeciw kąta \(45^\circ\) (przy \(L\)), a bok \(BL\) – naprzeciw kąta \(75^\circ\):
\[\frac{|BN|}{\sin45^\circ}=\frac{|BL|}{\sin75^\circ}\ \Longrightarrow\ |BN|=\frac{\sin45^\circ}{\sin75^\circ}.\]
Wartość \(\sin75^\circ\) znajdziemy ze wzoru na sinus sumy: \(\sin75^\circ=\sin(45^\circ+30^\circ)=\tfrac{\sqrt2}2\cdot\tfrac{\sqrt3}2+\tfrac{\sqrt2}2\cdot\tfrac12=\tfrac{\sqrt6+\sqrt2}4\). Zatem
\[|BN|=\frac{\frac{\sqrt2}2}{\frac{\sqrt6+\sqrt2}4}=\frac{2\sqrt2}{\sqrt6+\sqrt2}=\frac2{\sqrt3+1}=\frac{2(\sqrt3-1)}{3-1}=\sqrt3-1.\]
(skracamy przez \(\sqrt2\) i usuwamy niewymierność z mianownika).</p>
<p class="step"><b>Krok 4: wynik.</b> \(|ND|=|BD|-|BN|=2\sqrt3-(\sqrt3-1)=\sqrt3+1\). \(\blacksquare\)</p>
<p class="note"><b>Drugi sposób (współrzędne).</b> Przyjmijmy \(B=(0,0)\), \(A=(0,4)\), \(C=(4\sqrt3,0)\) (bo \(|BC|=|AB|\operatorname{tg}60^\circ=4\sqrt3\)), \(K=(0,1)\), \(L=(1,0)\). Prosta \(KL\): \(x+y=1\). Prosta \(AC\) ma współczynnik \(-\tfrac1{\sqrt3}\), więc wysokość \(BD\) (prostopadła do niej) ma współczynnik \(\sqrt3\): \(y=\sqrt3x\). Z \(x+\sqrt3x=1\) mamy \(x_N=\tfrac{\sqrt3-1}2\), a ponieważ \(y=\sqrt3x\), to \(|BN|=2x_N=\sqrt3-1\). Punkt \(D\): z \(\sqrt3x=4-\tfrac{x}{\sqrt3}\) mamy \(x_D=\sqrt3\), \(y_D=3\), \(|BD|=\sqrt{3+9}=2\sqrt3\). Zatem \(|ND|=2\sqrt3-(\sqrt3-1)=\sqrt3+1\).</p>`
  },
  {
    group: "Trójkąty",
    src: "maj 2024 · zad. 8",
    pts: 4,
    tags: ["dwusieczna", "podobieństwo trójkątów", "twierdzenie sinusów", "dowód"],
    q: String.raw`<p>Dany jest trójkąt \(ABC\), który nie jest równoramienny. W tym trójkącie miara kąta \(ABC\) jest dwa razy większa od miary kąta \(BAC\).</p>
<p>Wykaż, że długości boków tego trójkąta spełniają warunek
\[|AC|^2=|BC|^2+|AB|\cdot|BC|.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Znamy zależność między kątami (\(\angle B=2\angle A\)), a mamy dowieść zależności między bokami. Dobrze jest „rozbić” kąt \(2\alpha\) na dwa kąty \(\alpha\): poprowadźmy dwusieczną kąta \(B\). Powstanie trójkąt podobny do danego, a z twierdzenia o dwusiecznej dostaniemy drugi związek – porównamy je.</p>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 310 200" width="310" height="200" role="img" aria-label="Trójkąt ABC, w którym kąt B jest dwa razy większy od kąta A; dwusieczna kąta B przecina bok AC w punkcie D"><polygon class="s" points="24,176 192.4,34.7 274,176"/><line class="p" x1="192.4" y1="34.7" x2="167.5" y2="176"/><path class="a" d="M54,176A30,30 0 0 0 47,156.7"/><text x="65.3" y="165.5" text-anchor="middle">α</text><path class="a" d="M172.5,51.4A26,26 0 0 0 187.9,60.3"/><text x="172.4" y="73.8" text-anchor="middle">α</text><path class="a" d="M187.2,64.2A30,30 0 0 0 207.4,60.7"/><text x="200.4" y="84.5" text-anchor="middle">α</text><circle class="dot" cx="167.5" cy="176" r="2.4"/><text x="18" y="189" text-anchor="end">A</text><text x="192.4" y="27.7" text-anchor="middle">B</text><text x="280" y="189">C</text><text x="167.5" y="190" text-anchor="middle">D</text><text x="102.2" y="100.3" text-anchor="end">c</text><text x="239.2" y="100.3">a</text><text x="81.7" y="190" text-anchor="middle">b</text></svg></div>
<p class="step"><b>Krok 1: oznaczenia.</b> \(a=|BC|\), \(b=|AC|\), \(c=|AB|\), \(\alpha=\angle BAC\), więc \(\angle ABC=2\alpha\). Niech \(D\) będzie punktem, w którym dwusieczna kąta \(B\) przecina bok \(AC\). Wtedy \(\angle ABD=\angle DBC=\alpha\).</p>
<p class="step"><b>Krok 2: trójkąty podobne.</b> Trójkąty \(CBD\) i \(CAB\) mają wspólny kąt przy \(C\) oraz równe kąty \(\angle CBD=\alpha=\angle CAB\). Z cechy kk są podobne, przy czym \(C\leftrightarrow C\), \(B\leftrightarrow A\), \(D\leftrightarrow B\). Odpowiednie boki są proporcjonalne:
\[\frac{|CB|}{|CA|}=\frac{|CD|}{|CB|}\ \Longrightarrow\ \frac ab=\frac{|CD|}a\ \Longrightarrow\ |CD|=\frac{a^2}b.\]</p>
<p class="step"><b>Krok 3: twierdzenie o dwusiecznej.</b> Dwusieczna \(BD\) dzieli bok \(AC\) w stosunku pozostałych boków: \(\dfrac{|AD|}{|DC|}=\dfrac{|AB|}{|BC|}=\dfrac ca\). Ponieważ \(|AD|+|DC|=b\), mamy \(|DC|=\dfrac a{a+c}\cdot b=\dfrac{ab}{a+c}\).</p>
<p class="step"><b>Krok 4: porównanie.</b> Mamy dwa wyrażenia na \(|CD|\), więc są równe:
\[\frac{a^2}b=\frac{ab}{a+c}\ \Longrightarrow\ a^2(a+c)=ab\cdot b\ \Longrightarrow\ a(a+c)=b^2.\]
Czyli \(b^2=a^2+ac\), to znaczy \(|AC|^2=|BC|^2+|AB|\cdot|BC|\). \(\blacksquare\)</p>
<p class="note"><b>Drugi sposób (twierdzenie sinusów).</b> Kąty trójkąta to \(\alpha\), \(2\alpha\) i \(180^\circ-3\alpha\), a \(\sin(180^\circ-3\alpha)=\sin3\alpha\). Z twierdzenia sinusów \(\dfrac a{\sin\alpha}=\dfrac b{\sin2\alpha}=\dfrac c{\sin3\alpha}\). Stąd \(b=a\cdot\dfrac{\sin2\alpha}{\sin\alpha}=2a\cos\alpha\) oraz \(c=a\cdot\dfrac{\sin3\alpha}{\sin\alpha}=a\,(4\cos^2\alpha-1)\) (bo \(\sin3\alpha=\sin(2\alpha+\alpha)=\sin\alpha\,(3-4\sin^2\alpha)\) i \(3-4\sin^2\alpha=4\cos^2\alpha-1\)). Zatem \(a^2+ac=a^2+a^2(4\cos^2\alpha-1)=4a^2\cos^2\alpha=b^2\).</p>
<p class="note">Założenie, że trójkąt nie jest równoramienny, nie było nam potrzebne: teza zachodzi w każdym trójkącie, w którym \(\angle B=2\angle A\).</p>`
  },
  {
    group: "Czworokąty",
    src: "maj 2025 · zad. 7",
    pts: 4,
    tags: ["trapez", "pole trapezu", "odcinek łączący środki ramion", "dowód"],
    q: String.raw`<p>W trapezie \(ABCD\) o podstawach \(AB\) i \(CD\) punkt \(E\) jest środkiem ramienia \(AD\), a punkt \(F\) jest środkiem ramienia \(BC\) trapezu. Stosunek pola trapezu \(EFCD\) do pola trapezu \(ABFE\) jest równy \(\tfrac12\).</p>
<p>Wykaż, że \(\dfrac{|CD|}{|AB|}=\dfrac15\).</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Pola obu trapezów policzymy ze wzoru \(P=\dfrac{a+b}2\cdot h\), więc potrzebujemy długości podstaw i wysokości. Pomaga twierdzenie o odcinku łączącym środki ramion trapezu: jest równoległy do podstaw, a jego długość to średnia arytmetyczna długości podstaw.</p>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 250 160" width="250" height="160" role="img" aria-label="Trapez ABCD o podstawach AB i CD; E i F to środki ramion AD i BC"><polygon class="f" points="80,42 120,42 173,92 50,92"/><polygon class="f2" points="50,92 173,92 226,142 20,142"/><polygon class="s" points="20,142 226,142 120,42 80,42"/><line class="p" x1="50" y1="92" x2="173" y2="92"/><circle class="dot" cx="50" cy="92" r="2.4"/><circle class="dot" cx="173" cy="92" r="2.4"/><text x="14" y="155" text-anchor="end">A</text><text x="232" y="155">B</text><text x="126" y="37">C</text><text x="74" y="37" text-anchor="end">D</text><text x="43" y="96.5" text-anchor="end">E</text><text x="180" y="96.5">F</text><text x="123" y="156" text-anchor="middle">a</text><text x="100" y="35" text-anchor="middle">b</text></svg></div>
<p class="step"><b>Krok 1: długość \(EF\).</b> Niech \(|AB|=a\), \(|CD|=b\), a \(h\) – wysokość trapezu \(ABCD\). Odcinek \(EF\) łączy środki ramion, więc jest równoległy do podstaw i \(|EF|=\dfrac{a+b}2\).
(Skąd to wiemy? Przekątna \(AC\) przecina \(EF\) w punkcie \(G\). Odcinek \(EG\) łączy środki boków \(AD\) i \(AC\) trójkąta \(ACD\), więc ma długość \(\tfrac b2\); odcinek \(GF\) łączy środki boków \(AC\) i \(BC\) trójkąta \(ABC\), więc ma długość \(\tfrac a2\). Razem \(\tfrac{a+b}2\).)</p>
<p class="step"><b>Krok 2: wysokości.</b> Punkt \(E\) jest środkiem ramienia \(AD\), więc leży dokładnie w połowie drogi między podstawami: odległość prostej \(EF\) od każdej z podstaw wynosi \(\tfrac h2\). Zatem trapezy \(EFCD\) i \(ABFE\) mają wysokość \(\tfrac h2\).</p>
<p class="step"><b>Krok 3: pola.</b> Trapez \(EFCD\) ma podstawy \(b\) i \(\tfrac{a+b}2\), a trapez \(ABFE\) – podstawy \(a\) i \(\tfrac{a+b}2\):
\[P_{EFCD}=\frac12\Bigl(b+\frac{a+b}2\Bigr)\cdot\frac h2=\frac h8\,(a+3b),\qquad P_{ABFE}=\frac12\Bigl(a+\frac{a+b}2\Bigr)\cdot\frac h2=\frac h8\,(3a+b).\]</p>
<p class="step"><b>Krok 4: warunek z zadania.</b> Stosunek pól jest równy \(\tfrac12\) (wspólny czynnik \(\tfrac h8\) się skraca):
\[\frac{a+3b}{3a+b}=\frac12\iff2a+6b=3a+b\iff5b=a,\]
czyli \(\dfrac{|CD|}{|AB|}=\dfrac ba=\dfrac15\). \(\blacksquare\)</p>
<p class="note"><b>Sprawdzenie na liczbach.</b> Dla \(a=5\), \(b=1\): \(|EF|=3\), \(P_{EFCD}=\tfrac12(1+3)\cdot\tfrac h2=h\), \(P_{ABFE}=\tfrac12(5+3)\cdot\tfrac h2=2h\), a iloraz to \(\tfrac12\) ✓.</p>`
  },
  {
    group: "Czworokąty",
    src: "maj 2024 · zad. 9",
    pts: 4,
    tags: ["kwadrat", "pola figur", "podobieństwo trójkątów", "współrzędne"],
    q: String.raw`<p>Dany jest kwadrat \(ABCD\) o boku długości \(a\). Punkt \(E\) jest środkiem boku \(CD\). Punkt \(F\) jest punktem wspólnym odcinków \(AE\) i \(BD\), a punkt \(G\) – punktem wspólnym odcinków \(AC\) i \(BD\). Przekątna \(BD\) dzieli trójkąt \(ACE\) na dwie figury: \(AGF\) oraz \(CEFG\) (zobacz rysunek).</p>
<p>Oblicz pola figur \(AGF\) oraz \(CEFG\).</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 240 224" width="230" height="214" role="img" aria-label="Kwadrat ABCD z odcinkiem AE i przekątnymi AC, BD"><polygon class="f" points="30,200 118,112 88.7,82.7"/><polygon class="f2" points="206,24 118,24 88.7,82.7 118,112"/><polygon class="s" points="30,200 206,200 206,24 30,24"/><line class="a" x1="30" y1="200" x2="206" y2="24"/><line class="a" x1="206" y1="200" x2="30" y2="24"/><line class="p" x1="30" y1="200" x2="118" y2="24"/><circle class="dot" cx="118" cy="24" r="2.4"/><circle class="dot" cx="88.7" cy="82.7" r="2.4"/><circle class="dot" cx="118" cy="112" r="2.4"/><text x="12" y="216">A</text><text x="214" y="216">B</text><text x="214" y="18">C</text><text x="12" y="18">D</text><text x="115" y="14">E</text><text x="71" y="85">F</text><text x="124" y="126">G</text><text class="m" x="114" y="216">a</text></svg>`,
    ans: String.raw`\(P_{AGF}=\dfrac{a^2}{12}\), \(P_{CEFG}=\dfrac{a^2}{6}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Pole \(CEFG\) wyrazimy jako różnicę: \(P_{CEFG}=P_{ACE}-P_{AGF}\). Pole \(ACE\) jest proste do policzenia, więc głównym zadaniem jest pole \(AGF\). Do niego potrzebujemy wiedzieć, w jakim stosunku punkt \(F\) dzieli przekątną \(BD\) – pomogą trójkąty podobne.</p>
<p class="step"><b>Krok 1: gdzie leży \(F\)?</b> Odcinki \(AB\) i \(DE\) są równoległe (leżą na przeciwległych bokach kwadratu), przy czym \(|AB|=a\) i \(|DE|=\tfrac a2\). Trójkąty \(ABF\) i \(EDF\) mają równe kąty wierzchołkowe przy \(F\) oraz równe kąty naprzemianległe (\(\angle BAF=\angle DEF\)), więc są podobne w skali \(|AB|:|ED|=2:1\). Stąd \(|BF|:|FD|=2:1\), czyli \(|DF|=\tfrac13|BD|\).</p>
<p class="step"><b>Krok 2: odcinek \(GF\).</b> Przekątna \(BD\) ma długość \(a\sqrt2\), a \(G\) jest jej środkiem, więc \(|DG|=\tfrac12|BD|\). Punkt \(F\) leży bliżej \(D\) niż \(G\) (bo \(\tfrac13<\tfrac12\)), więc
\[|GF|=|DG|-|DF|=\Bigl(\tfrac12-\tfrac13\Bigr)|BD|=\tfrac16\,a\sqrt2.\]</p>
<p class="step"><b>Krok 3: pole \(AGF\).</b> Przekątne kwadratu są prostopadłe, więc odcinek \(AG\) jest wysokością trójkąta \(AGF\) opuszczoną na podstawę \(GF\) (leżącą na \(BD\)); \(|AG|=\tfrac12a\sqrt2\). Zatem
\[P_{AGF}=\tfrac12\cdot|GF|\cdot|AG|=\tfrac12\cdot\tfrac{a\sqrt2}6\cdot\tfrac{a\sqrt2}2=\tfrac12\cdot\tfrac{2a^2}{12}=\dfrac{a^2}{12}.\]</p>
<p class="step"><b>Krok 4: pole \(ACE\).</b> W trójkącie \(ACE\) podstawa \(CE\) ma długość \(\tfrac a2\), a wysokość z \(A\) (odległość \(A\) od prostej \(CD\)) to \(a\): \(P_{ACE}=\tfrac12\cdot\tfrac a2\cdot a=\dfrac{a^2}4\).</p>
<p class="step"><b>Krok 5: pole \(CEFG\).</b> \(P_{CEFG}=P_{ACE}-P_{AGF}=\dfrac{a^2}4-\dfrac{a^2}{12}=\dfrac{a^2}6\).</p>
<p class="note"><b>Drugi sposób (współrzędne).</b> Układ: \(A=(0,0)\), \(B=(a,0)\), \(C=(a,a)\), \(D=(0,a)\), \(E=\left(\tfrac a2,a\right)\), \(G=\left(\tfrac a2,\tfrac a2\right)\). Prosta \(AE\): \(y=2x\); prosta \(BD\): \(y=a-x\). Z \(2x=a-x\) mamy \(x=\tfrac a3\), więc \(F=\left(\tfrac a3,\tfrac{2a}3\right)\). Pole trójkąta o wierzchołku w początku układu: \(P_{AGF}=\tfrac12\left|x_Gy_F-x_Fy_G\right|=\tfrac12\left|\tfrac a2\cdot\tfrac{2a}3-\tfrac a3\cdot\tfrac a2\right|=\tfrac12\cdot\tfrac{a^2}6=\tfrac{a^2}{12}\) – ten sam wynik.</p>`
  },
  {
    group: "Czworokąty",
    src: "maj 2026 · zad. 4",
    pts: 3,
    tags: ["kwadrat", "prostopadłość", "współrzędne", "dowód"],
    q: String.raw`<p>Punkty \(K\) i \(L\) są środkami – odpowiednio – boków \(AB\) i \(BC\) kwadratu \(ABCD\) o boku długości \(a\). Punkt \(M\) jest takim punktem na boku \(BC\), że odcinki \(DK\) i \(KM\) są prostopadłe. Odcinek \(AL\) przecina odcinki \(DK\) oraz \(DM\) w punktach – odpowiednio – \(P\) oraz \(Q\) (zobacz rysunek).</p>
<p>Wykaż, że \(|PQ|=\dfrac{\sqrt5}{5}\,a\).</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 250 224" width="230" height="206" role="img" aria-label="Kwadrat ABCD z punktami K, L, M oraz P, Q"><polygon class="s" points="30,200 206,200 206,24 30,24"/><line class="a" x1="30" y1="24" x2="118" y2="200"/><line class="a" x1="118" y1="200" x2="206" y2="156"/><line class="p" x1="30" y1="200" x2="206" y2="112"/><line class="a" x1="30" y1="24" x2="206" y2="156"/><path class="s" d="M110,200v-8h8"/><circle class="dot" cx="118" cy="200" r="2.4"/><circle class="dot" cx="206" cy="112" r="2.4"/><circle class="dot" cx="206" cy="156" r="2.4"/><circle class="dot" cx="100.4" cy="164.8" r="2.4"/><circle class="dot" cx="170.8" cy="129.6" r="2.4"/><text x="12" y="216">A</text><text x="214" y="216">B</text><text x="214" y="18">C</text><text x="12" y="18">D</text><text x="114" y="216">K</text><text x="212" y="116">L</text><text x="212" y="161">M</text><text x="86" y="161">P</text><text x="157" y="126">Q</text></svg>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Ustawiamy kwadrat w układzie współrzędnych i zamieniamy geometrię na rachunki: punkt \(M\) znajdziemy z warunku prostopadłości, a punkty \(P\) i \(Q\) jako przecięcia prostych. Wystarczy rozwiązać zadanie dla boku \(a=1\): zmiana boku \(a\) razy zmienia wszystkie długości \(a\) razy (figury podobne), więc \(|PQ|\) wyjdzie jako \(\tfrac{\sqrt5}5\) razy \(a\).</p>
<p class="step"><b>Krok 1: współrzędne.</b> \(A=(0,0)\), \(B=(1,0)\), \(C=(1,1)\), \(D=(0,1)\). Środki boków: \(K=\left(\tfrac12,0\right)\), \(L=\left(1,\tfrac12\right)\). Punkt \(M\) leży na boku \(BC\), więc \(M=(1,m)\) dla pewnego \(m\in[0,1]\).</p>
<p class="step"><b>Krok 2: warunek \(DK\perp KM\).</b> Proste są prostopadłe, gdy iloczyn ich współczynników kierunkowych jest równy \(-1\). Współczynnik prostej \(DK\): \(\dfrac{0-1}{\frac12-0}=-2\). Współczynnik prostej \(KM\): \(\dfrac{m-0}{1-\frac12}=2m\). Zatem \((-2)\cdot2m=-1\), czyli \(m=\tfrac14\) i \(M=\left(1,\tfrac14\right)\).</p>
<p class="step"><b>Krok 3: równania prostych.</b> Prosta \(AL\) przechodzi przez \((0,0)\) i \(\left(1,\tfrac12\right)\): \(y=\tfrac12x\). Prosta \(DK\) ma współczynnik \(-2\) i przechodzi przez \(D=(0,1)\): \(y=1-2x\). Prosta \(DM\) przechodzi przez \((0,1)\) i \(\left(1,\tfrac14\right)\), więc ma współczynnik \(\tfrac14-1=-\tfrac34\): \(y=1-\tfrac34x\).</p>
<p class="step"><b>Krok 4: punkty \(P\) i \(Q\).</b> \(P=AL\cap DK\): \(\tfrac12x=1-2x\Rightarrow\tfrac52x=1\Rightarrow x=\tfrac25\), \(y=\tfrac15\), więc \(P=\left(\tfrac25,\tfrac15\right)\). \(Q=AL\cap DM\): \(\tfrac12x=1-\tfrac34x\Rightarrow\tfrac54x=1\Rightarrow x=\tfrac45\), \(y=\tfrac25\), więc \(Q=\left(\tfrac45,\tfrac25\right)\).</p>
<p class="step"><b>Krok 5: długość \(PQ\).</b> \(|PQ|=\sqrt{\left(\tfrac45-\tfrac25\right)^2+\left(\tfrac25-\tfrac15\right)^2}=\sqrt{\tfrac4{25}+\tfrac1{25}}=\dfrac{\sqrt5}5\). Dla kwadratu o boku \(a\) wszystkie długości są \(a\) razy większe, więc \(|PQ|=\dfrac{\sqrt5}{5}\,a\). \(\blacksquare\)</p>
<p class="note"><b>Drugi sposób na punkt \(M\) (podobieństwo).</b> Skoro \(\angle DKM=90^\circ\), to \(\angle AKD+\angle BKM=90^\circ\), a w trójkącie prostokątnym \(AKD\) mamy \(\angle ADK=90^\circ-\angle AKD\). Zatem \(\angle ADK=\angle BKM\) i trójkąty prostokątne \(AKD\) oraz \(BMK\) są podobne. Stąd \(\dfrac{|BM|}{|BK|}=\dfrac{|AK|}{|AD|}\), czyli \(|BM|=\dfrac{\frac12\cdot\frac12}1=\tfrac14\) – ten sam wynik.</p>`
  },
  {
    group: "Czworokąty",
    src: "maj 2023 · zad. 8",
    pts: 4,
    tags: ["czworokąt opisany na okręgu", "twierdzenie sinusów", "obwód"],
    q: String.raw`<p>Czworokąt \(ABCD\), w którym \(|BC|=4\) i \(|CD|=5\), jest opisany na okręgu. Przekątna \(AC\) tego czworokąta tworzy z bokiem \(BC\) kąt o mierze \(60^\circ\), natomiast z bokiem \(AB\) – kąt ostry, którego sinus jest równy \(\tfrac14\).</p>
<p>Oblicz obwód czworokąta \(ABCD\).</p>`,
    ans: String.raw`\(10+16\sqrt3\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> W czworokącie opisanym na okręgu sumy długości przeciwległych boków są równe: \(|AB|+|CD|=|BC|+|AD|\). Dlatego obwód to \(2\bigl(|AB|+|CD|\bigr)\) i wystarczy znaleźć \(|AB|\). Zrobimy to w trójkącie \(ABC\), w którym znamy bok \(BC\), kąt \(\angle ACB=60^\circ\) i sinus kąta \(\angle BAC\) – to sytuacja na twierdzenie sinusów.</p>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 231 274" width="231" height="274" role="img" aria-label="Czworokąt ABCD opisany na okręgu z przekątną AC"><circle class="a" cx="127" cy="193.1" r="57.5"/><polygon class="s" points="20.2,23.6 83.2,250.6 151.2,250.6 210.5,189.6"/><line class="p d" x1="20.2" y1="23.6" x2="151.2" y2="250.6"/><path class="a" d="M129.2,250.6A22,22 0 0 1 140.2,231.5"/><text x="118.3" y="236.1" text-anchor="middle">60°</text><text x="20.2" y="16.6" text-anchor="middle">A</text><text x="77.2" y="263.6" text-anchor="end">B</text><text x="157.2" y="263.6">C</text><text x="216.5" y="184.6">D</text><text x="117.2" y="266.6" text-anchor="middle" class="m">4</text><text x="191.9" y="224.6" class="m">5</text><text x="40.7" y="141.6" text-anchor="end">AB</text><text x="126.4" y="109.1">AD</text></svg></div>
<p class="step"><b>Krok 1: twierdzenie sinusów w trójkącie \(ABC\).</b> Bok \(BC\) leży naprzeciw kąta \(BAC\), a bok \(AB\) – naprzeciw kąta \(ACB\). Zatem
\[\frac{|BC|}{\sin\angle BAC}=\frac{|AB|}{\sin\angle ACB}\ \Longrightarrow\ \frac4{\frac14}=\frac{|AB|}{\frac{\sqrt3}2}\ \Longrightarrow\ |AB|=16\cdot\frac{\sqrt3}2=8\sqrt3.\]</p>
<p class="step"><b>Krok 2: bok \(AD\).</b> Z równości sum przeciwległych boków: \(|AD|=|AB|+|CD|-|BC|=8\sqrt3+5-4=8\sqrt3+1\).</p>
<p class="step"><b>Krok 3: obwód.</b> \(|AB|+|BC|+|CD|+|AD|=8\sqrt3+4+5+8\sqrt3+1=10+16\sqrt3\).</p>
<p class="note"><b>Dlaczego sumy przeciwległych boków są równe?</b> Odcinki stycznych poprowadzonych z jednego punktu do okręgu są równe. Jeśli odcinki od wierzchołków \(A,B,C,D\) do punktów styczności mają długości \(x,y,z,t\), to \(|AB|=x+y\), \(|BC|=y+z\), \(|CD|=z+t\), \(|DA|=t+x\). Obie sumy przeciwległych boków wynoszą wtedy \(x+y+z+t\).</p>`
  },
  {
    group: "Czworokąty",
    src: "maj 2026 · zad. 11",
    pts: 6,
    tags: ["czworokąt wpisany i opisany", "twierdzenie cosinusów", "pole"],
    q: String.raw`<p>W czworokącie \(ABCD\) są dane: \(|AB|=9\), \(|AD|=10\) oraz \(|\angle BAD|=60^\circ\). W ten czworokąt wpisano okrąg oraz na tym czworokącie opisano okrąg.</p>
<p>Oblicz długości boków \(BC\) i \(CD\) oraz pole czworokąta \(ABCD\).</p>`,
    ans: String.raw`\(|BC|=5\), \(|CD|=6\), \(P=30\sqrt3\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Czworokąt jest jednocześnie wpisany w okrąg i opisany na okręgu, a każda z tych własności daje jedno równanie: sumy przeciwległych kątów wynoszą \(180^\circ\) oraz sumy przeciwległych boków są równe. Przekątną \(BD\) policzymy dwa razy – raz z trójkąta \(ABD\), raz z \(BCD\) – i porównamy wyniki.</p>
<div class="fig-wrap"><svg class="fig" viewBox="0 0 252 252" width="252" height="252" role="img" aria-label="Czworokąt ABCD wpisany w okrąg: |AB| = 9, |AD| = 10, kąt A ma 60°, a kąt C ma 120°"><circle class="a" cx="126.2" cy="126.2" r="110.2"/><polygon class="s" points="36.2,189.7 216.2,189.7 230.4,90.7 136.2,16.5"/><line class="p d" x1="216.2" y1="189.7" x2="136.2" y2="16.5"/><path class="a" d="M62.2,189.7A26,26 0 0 0 49.2,167.1"/><text x="74.3" y="172.2" text-anchor="middle">60°</text><path class="a" d="M213.2,77.1A22,22 0 0 0 227.3,112.5"/><text x="189.6" y="111.5" text-anchor="middle">120°</text><text x="30.2" y="202.7" text-anchor="end">A</text><text x="222.2" y="202.7">B</text><text x="236.4" y="85.7">C</text><text x="130.2" y="11.5" text-anchor="end">D</text><text x="126.2" y="203.7" text-anchor="middle" class="m">9</text><text x="76.2" y="107.6" text-anchor="end" class="m">10</text><text x="239.3" y="144.7">x</text><text x="198.3" y="39.6">x + 1</text></svg></div>
<p class="step"><b>Krok 1: kąt przy \(C\).</b> W czworokącie wpisanym w okrąg sumy kątów przeciwległych są równe \(180^\circ\), więc \(\angle BCD=180^\circ-\angle BAD=120^\circ\).</p>
<p class="step"><b>Krok 2: długość \(BD\).</b> Twierdzenie cosinusów w trójkącie \(ABD\) (znamy boki \(9\) i \(10\) oraz kąt \(60^\circ\) między nimi):
\[|BD|^2=9^2+10^2-2\cdot9\cdot10\cdot\cos60^\circ=81+100-90=91.\]</p>
<p class="step"><b>Krok 3: warunek opisania okręgu.</b> Sumy przeciwległych boków są równe: \(|AB|+|CD|=|AD|+|BC|\), czyli \(9+|CD|=10+|BC|\). Niech \(|BC|=x\); wtedy \(|CD|=x+1\).</p>
<p class="step"><b>Krok 4: twierdzenie cosinusów w trójkącie \(BCD\).</b> Kąt między bokami \(x\) i \(x+1\) ma \(120^\circ\), a \(\cos120^\circ=-\tfrac12\):
\[91=x^2+(x+1)^2-2x(x+1)\cdot\Bigl(-\tfrac12\Bigr)=x^2+(x+1)^2+x(x+1)=3x^2+3x+1.\]
Zatem \(3x^2+3x-90=0\), czyli \(x^2+x-30=0\), \((x-5)(x+6)=0\). Długość jest dodatnia, więc \(x=5\): \(|BC|=5\) i \(|CD|=6\).</p>
<p class="step"><b>Krok 5: pole.</b> Dzielimy czworokąt przekątną \(BD\) na dwa trójkąty i liczymy pola wzorem \(\tfrac12ab\sin\gamma\):
\[P=\tfrac12\cdot9\cdot10\cdot\sin60^\circ+\tfrac12\cdot5\cdot6\cdot\sin120^\circ=\tfrac{45\sqrt3}2+\tfrac{15\sqrt3}2=30\sqrt3.\]</p>
<p class="note"><b>Kontrola wzorem Brahmagupty</b> (dla czworokąta wpisanego w okrąg): półobwód \(p=15\), \(P=\sqrt{(p-9)(p-5)(p-6)(p-10)}=\sqrt{6\cdot10\cdot9\cdot5}=\sqrt{2700}=30\sqrt3\) ✓. Przy okazji, z wzoru \(P=r\cdot p\) dla czworokąta opisanego wychodzi promień okręgu wpisanego \(r=\dfrac{30\sqrt3}{15}=2\sqrt3\).</p>`
  }
];
