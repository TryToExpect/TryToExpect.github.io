(window.TASKS = window.TASKS || {})['matura-6'] = [
  {
    group: "Trójkąty",
    src: "maj 2025 · zad. 3",
    pts: 3,
    tags: ["trójkąt równoboczny", "pole trójkąta", "sinus różnicy kątów"],
    q: String.raw`<p>W trójkącie równobocznym \(ABC\) punkt \(D\) leży na boku \(BC\). Stosunek pola trójkąta \(ABD\) do pola trójkąta \(ADC\) jest równy \(\dfrac{\sqrt3-1}{2}\).</p>
<p>Oblicz miarę kąta \(DAC\).</p>`,
    ans: String.raw`\(\angle DAC=45^\circ\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Trójkąty \(ABD\) i \(ADC\) mają wspólny bok \(AD\) i równe boki \(AB=AC\). Pola policzymy ze wzoru \(\tfrac12ab\sin\gamma\).</p>
<p class="step"><b>Krok 1.</b> Niech \(\varphi=\angle DAC\). Kąt przy wierzchołku \(A\) trójkąta równobocznego ma \(60^\circ\), więc \(\angle BAD=60^\circ-\varphi\).</p>
<p class="step"><b>Krok 2.</b> \(P_{ABD}=\tfrac12|AB|\,|AD|\sin(60^\circ-\varphi)\) oraz \(P_{ADC}=\tfrac12|AC|\,|AD|\sin\varphi\). Ponieważ \(|AB|=|AC|\), iloraz pól wynosi
\[\frac{\sin(60^\circ-\varphi)}{\sin\varphi}=\frac{\sqrt3-1}{2}.\]</p>
<p class="step"><b>Krok 3.</b> Rozwijamy licznik: \(\sin(60^\circ-\varphi)=\tfrac{\sqrt3}2\cos\varphi-\tfrac12\sin\varphi\), więc \(\dfrac{\sqrt3}2\cdot\dfrac{\cos\varphi}{\sin\varphi}-\dfrac12=\dfrac{\sqrt3-1}2\). Stąd \(\dfrac{\sqrt3}{2}\operatorname{ctg}\varphi=\dfrac{\sqrt3}2\), czyli \(\operatorname{ctg}\varphi=1\).</p>
<p class="step"><b>Krok 4.</b> Kąt ostry, dla którego \(\operatorname{ctg}\varphi=1\), ma miarę \(45^\circ\).</p>`
  },
  {
    group: "Trójkąty",
    src: "maj 2021 · zad. 8",
    pts: 3,
    tags: ["trójkąt równoboczny", "pole", "geometria analityczna jako narzędzie"],
    q: String.raw`<p>Dany jest trójkąt równoboczny \(ABC\). Na bokach \(AB\) i \(AC\) wybrano punkty – odpowiednio – \(D\) i \(E\) takie, że \(|BD|=|AE|=\tfrac13|AB|\). Odcinki \(CD\) i \(BE\) przecinają się w punkcie \(P\) (zobacz rysunek).</p>
<p>Wykaż, że pole trójkąta \(DBP\) jest \(21\) razy mniejsze od pola trójkąta \(ABC\).</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 330 272" width="270" height="223" role="img" aria-label="Trójkąt równoboczny ABC z odcinkami CD i BE"><polygon class="f" points="204,246 292,246 197.7,213.3"/><polygon class="s" points="28,246 292,246 160,17.4"/><line class="a" x1="160" y1="17.4" x2="204" y2="246"/><line class="a" x1="292" y1="246" x2="72" y2="169.8"/><circle class="dot" cx="204" cy="246" r="2.4"/><circle class="dot" cx="72" cy="169.8" r="2.4"/><circle class="dot" cx="197.7" cy="213.3" r="2.4"/><text x="12" y="262">A</text><text x="297" y="262">B</text><text x="156" y="12">C</text><text x="200" y="264">D</text><text x="54" y="172">E</text><text x="184" y="206">P</text></svg>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wprowadzamy układ współrzędnych i liczymy pole trójkąta \(DBP\) z wysokości opuszczonej z \(P\) na \(AB\). Bok trójkąta przyjmujemy równy \(3\) (stosunek pól nie zależy od skali).</p>
<p class="step"><b>Współrzędne.</b> \(A=(0,0)\), \(B=(3,0)\), \(C=\left(\tfrac32,\tfrac{3\sqrt3}2\right)\). Skoro \(|BD|=|AE|=1\), to \(D=(2,0)\) oraz \(E=\tfrac13C=\left(\tfrac12,\tfrac{\sqrt3}2\right)\).</p>
<p class="step"><b>Punkt \(P\).</b> Prosta \(CD\) przechodzi przez \(\left(\tfrac32,\tfrac{3\sqrt3}2\right)\) i \((2,0)\), więc \(y=-3\sqrt3\,(x-2)\). Prosta \(BE\) przechodzi przez \((3,0)\) i \(\left(\tfrac12,\tfrac{\sqrt3}2\right)\), więc \(y=-\dfrac{\sqrt3}{5}\,(x-3)\). Z równania \(-3\sqrt3(x-2)=-\tfrac{\sqrt3}5(x-3)\) mamy \(15(x-2)=x-3\), czyli \(x=\tfrac{27}{14}\), a stąd \(y_P=\dfrac{\sqrt3}5\left(3-\dfrac{27}{14}\right)=\dfrac{3\sqrt3}{14}\).</p>
<p class="step"><b>Pola.</b> \(P_{DBP}=\tfrac12\cdot|DB|\cdot y_P=\tfrac12\cdot1\cdot\tfrac{3\sqrt3}{14}=\tfrac{3\sqrt3}{28}\), a \(P_{ABC}=\tfrac{\sqrt3}4\cdot3^2=\tfrac{9\sqrt3}4\).</p>
<p class="step"><b>Iloraz.</b> \(\dfrac{P_{ABC}}{P_{DBP}}=\dfrac{9\sqrt3}{4}\cdot\dfrac{28}{3\sqrt3}=21\). \(\blacksquare\)</p>`
  },
  {
    group: "Trójkąty",
    src: "maj 2023 · zad. 5",
    pts: 3,
    tags: ["trójkąt prostokątny", "twierdzenie sinusów", "dowód"],
    q: String.raw`<p>Dany jest trójkąt prostokątny \(ABC\), w którym \(|\angle ABC|=90^\circ\) oraz \(|\angle CAB|=60^\circ\). Punkty \(K\) i \(L\) leżą na bokach – odpowiednio – \(AB\) i \(BC\) tak, że \(|BK|=|BL|=1\) (zobacz rysunek). Odcinek \(KL\) przecina wysokość \(BD\) tego trójkąta w punkcie \(N\), a ponadto \(|AD|=2\).</p>
<p>Wykaż, że \(|ND|=\sqrt3+1\).</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 340 220" width="300" height="194" role="img" aria-label="Trójkąt prostokątny ABC z punktami K, L, D, N"><polygon class="s" points="24,20 24,196 328.8,196"/><line class="a" x1="24" y1="196" x2="100.2" y2="64"/><line class="p" x1="24" y1="152" x2="68" y2="196"/><path class="s" d="M24,188h8v8"/><circle class="dot" cx="24" cy="152" r="2.4"/><circle class="dot" cx="68" cy="196" r="2.4"/><circle class="dot" cx="100.2" cy="64" r="2.4"/><circle class="dot" cx="40.1" cy="168.1" r="2.4"/><text x="8" y="22">A</text><text x="8" y="214">B</text><text x="335" y="214">C</text><text x="8" y="156">K</text><text x="65" y="214">L</text><text x="106" y="60">D</text><text x="45" y="163">N</text></svg>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Policzymy \(|BD|\) z trójkąta \(ABD\), a \(|BN|\) z trójkąta \(BNL\) (twierdzenie sinusów). Punkt \(N\) leży na odcinku \(BD\), więc \(|ND|=|BD|-|BN|\).</p>
<p class="step"><b>Krok 1: wysokość \(BD\).</b> W trójkącie \(ABD\) kąt przy \(D\) jest prosty, a przy \(A\) ma \(60^\circ\). Stąd \(\angle ABD=30^\circ\), \(|AB|=2|AD|=4\) oraz \(|BD|=|AB|\sin60^\circ=2\sqrt3\).</p>
<p class="step"><b>Krok 2: kąty trójkąta \(BNL\).</b> \(\angle C=30^\circ\), więc \(\angle NBL=\angle DBC=90^\circ-30^\circ=60^\circ\). Trójkąt \(KBL\) jest prostokątny równoramienny (\(|BK|=|BL|=1\)), więc \(\angle BLN=\angle BLK=45^\circ\). Zatem \(\angle BNL=180^\circ-60^\circ-45^\circ=75^\circ\).</p>
<p class="step"><b>Krok 3: \(|BN|\).</b> Z twierdzenia sinusów w trójkącie \(BNL\): \(\dfrac{|BN|}{\sin45^\circ}=\dfrac{|BL|}{\sin75^\circ}\). Ponieważ \(\sin75^\circ=\dfrac{\sqrt6+\sqrt2}4\),
\[|BN|=\frac{\frac{\sqrt2}2}{\frac{\sqrt6+\sqrt2}4}=\frac{2\sqrt2}{\sqrt6+\sqrt2}=\frac2{\sqrt3+1}=\sqrt3-1.\]</p>
<p class="step"><b>Krok 4.</b> \(|ND|=|BD|-|BN|=2\sqrt3-(\sqrt3-1)=\sqrt3+1\). \(\blacksquare\)</p>`
  },
  {
    group: "Trójkąty",
    src: "maj 2024 · zad. 8",
    pts: 4,
    tags: ["twierdzenie sinusów", "dowód", "kąty w trójkącie"],
    q: String.raw`<p>Dany jest trójkąt \(ABC\), który nie jest równoramienny. W tym trójkącie miara kąta \(ABC\) jest dwa razy większa od miary kąta \(BAC\).</p>
<p>Wykaż, że długości boków tego trójkąta spełniają warunek
\[|AC|^2=|BC|^2+|AB|\cdot|BC|.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Z twierdzenia sinusów boki są proporcjonalne do sinusów przeciwległych kątów. Wyrazimy wszystkie boki przez jeden z nich i kąt \(\alpha\).</p>
<p class="step"><b>Oznaczenia.</b> \(\alpha=\angle BAC\), \(\angle ABC=2\alpha\), \(\angle ACB=180^\circ-3\alpha\). Niech \(a=|BC|\), \(b=|AC|\), \(c=|AB|\). Z twierdzenia sinusów (a \(\sin(180^\circ-3\alpha)=\sin3\alpha\)):
\[\frac a{\sin\alpha}=\frac b{\sin2\alpha}=\frac c{\sin3\alpha}.\]</p>
<p class="step"><b>Boki.</b> \(b=a\cdot\dfrac{\sin2\alpha}{\sin\alpha}=2a\cos\alpha\) oraz \(c=a\cdot\dfrac{\sin3\alpha}{\sin\alpha}=a\,(3-4\sin^2\alpha)=a\,(4\cos^2\alpha-1)\).</p>
<p class="step"><b>Teza.</b> \(a^2+a\cdot c=a^2+a^2(4\cos^2\alpha-1)=4a^2\cos^2\alpha=(2a\cos\alpha)^2=b^2\). \(\blacksquare\)</p>
<p class="note">Założenie, że trójkąt nie jest równoramienny, nie jest potrzebne w tej metodzie – wynika ona wprost z twierdzenia sinusów.</p>`
  },
  {
    group: "Czworokąty",
    src: "maj 2025 · zad. 7",
    pts: 4,
    tags: ["trapez", "pole trapezu", "odcinek łączący środki ramion", "dowód"],
    q: String.raw`<p>W trapezie \(ABCD\) o podstawach \(AB\) i \(CD\) punkt \(E\) jest środkiem ramienia \(AD\), a punkt \(F\) jest środkiem ramienia \(BC\) trapezu. Stosunek pola trapezu \(EFCD\) do pola trapezu \(ABFE\) jest równy \(\tfrac12\).</p>
<p>Wykaż, że \(\dfrac{|CD|}{|AB|}=\dfrac15\).</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Odcinek \(EF\) łączy środki ramion, więc jest równoległy do podstaw, a jego długość jest średnią arytmetyczną długości podstaw. Wysokość każdego z mniejszych trapezów to połowa wysokości całego trapezu.</p>
<p class="step"><b>Oznaczenia.</b> \(|AB|=a\), \(|CD|=b\), wysokość trapezu \(ABCD\) to \(h\). Wtedy \(|EF|=\dfrac{a+b}2\), a każdy z trapezów \(EFCD\), \(ABFE\) ma wysokość \(\dfrac h2\).</p>
<p class="step"><b>Pola.</b>
\[P_{EFCD}=\frac12\Bigl(b+\frac{a+b}2\Bigr)\cdot\frac h2=\frac h8\,(a+3b),\qquad P_{ABFE}=\frac12\Bigl(a+\frac{a+b}2\Bigr)\cdot\frac h2=\frac h8\,(3a+b).\]</p>
<p class="step"><b>Warunek.</b> \(\dfrac{P_{EFCD}}{P_{ABFE}}=\dfrac{a+3b}{3a+b}=\dfrac12\iff2a+6b=3a+b\iff5b=a\), czyli \(\dfrac{|CD|}{|AB|}=\dfrac ba=\dfrac15\). \(\blacksquare\)</p>`
  },
  {
    group: "Czworokąty",
    src: "maj 2024 · zad. 9",
    pts: 4,
    tags: ["kwadrat", "pola figur", "współrzędne"],
    q: String.raw`<p>Dany jest kwadrat \(ABCD\) o boku długości \(a\). Punkt \(E\) jest środkiem boku \(CD\). Punkt \(F\) jest punktem wspólnym odcinków \(AE\) i \(BD\), a punkt \(G\) – punktem wspólnym odcinków \(AC\) i \(BD\). Przekątna \(BD\) dzieli trójkąt \(ACE\) na dwie figury: \(AGF\) oraz \(CEFG\) (zobacz rysunek).</p>
<p>Oblicz pola figur \(AGF\) oraz \(CEFG\).</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 240 224" width="230" height="214" role="img" aria-label="Kwadrat ABCD z odcinkiem AE i przekątnymi AC, BD"><polygon class="f" points="30,200 118,112 88.7,82.7"/><polygon class="f2" points="206,24 118,24 88.7,82.7 118,112"/><polygon class="s" points="30,200 206,200 206,24 30,24"/><line class="a" x1="30" y1="200" x2="206" y2="24"/><line class="a" x1="206" y1="200" x2="30" y2="24"/><line class="p" x1="30" y1="200" x2="118" y2="24"/><circle class="dot" cx="118" cy="24" r="2.4"/><circle class="dot" cx="88.7" cy="82.7" r="2.4"/><circle class="dot" cx="118" cy="112" r="2.4"/><text x="12" y="216">A</text><text x="214" y="216">B</text><text x="214" y="18">C</text><text x="12" y="18">D</text><text x="115" y="14">E</text><text x="71" y="85">F</text><text x="124" y="126">G</text><text class="m" x="114" y="216">a</text></svg>`,
    ans: String.raw`\(P_{AGF}=\dfrac{a^2}{12}\), \(P_{CEFG}=\dfrac{a^2}{6}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Układ współrzędnych: \(A=(0,0)\), \(B=(a,0)\), \(C=(a,a)\), \(D=(0,a)\). Wtedy \(E=\left(\tfrac a2,a\right)\). Pole \(CEFG\) liczymy jako różnicę pól trójkątów \(ACE\) i \(AGF\).</p>
<p class="step"><b>Punkty \(F\) i \(G\).</b> \(G\) to środek kwadratu: \(G=\left(\tfrac a2,\tfrac a2\right)\). Prosta \(AE\): \(y=2x\); prosta \(BD\): \(y=a-x\). Z \(2x=a-x\) mamy \(x=\tfrac a3\), więc \(F=\left(\tfrac a3,\tfrac{2a}3\right)\).</p>
<p class="step"><b>Pole \(AGF\).</b> \(P_{AGF}=\tfrac12\left|x_Gy_F-x_Fy_G\right|=\tfrac12\left|\tfrac a2\cdot\tfrac{2a}3-\tfrac a3\cdot\tfrac a2\right|=\tfrac12\cdot\tfrac{a^2}6=\dfrac{a^2}{12}\).</p>
<p class="step"><b>Pole \(ACE\).</b> Podstawa \(|CE|=\tfrac a2\) leży na prostej \(y=a\), a wysokość z \(A\) wynosi \(a\): \(P_{ACE}=\tfrac12\cdot\tfrac a2\cdot a=\dfrac{a^2}4\).</p>
<p class="step"><b>Pole \(CEFG\).</b> \(P_{CEFG}=P_{ACE}-P_{AGF}=\dfrac{a^2}4-\dfrac{a^2}{12}=\dfrac{a^2}6\).</p>`
  },
  {
    group: "Czworokąty",
    src: "maj 2026 · zad. 4",
    pts: 3,
    tags: ["kwadrat", "prostopadłość", "współrzędne", "dowód"],
    q: String.raw`<p>Punkty \(K\) i \(L\) są środkami – odpowiednio – boków \(AB\) i \(BC\) kwadratu \(ABCD\) o boku długości \(a\). Punkt \(M\) jest takim punktem na boku \(BC\), że odcinki \(DK\) i \(KM\) są prostopadłe. Odcinek \(AL\) przecina odcinki \(DK\) oraz \(DM\) w punktach – odpowiednio – \(P\) oraz \(Q\) (zobacz rysunek).</p>
<p>Wykaż, że \(|PQ|=\dfrac{\sqrt5}{5}\,a\).</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 250 224" width="230" height="206" role="img" aria-label="Kwadrat ABCD z punktami K, L, M oraz P, Q"><polygon class="s" points="30,200 206,200 206,24 30,24"/><line class="a" x1="30" y1="24" x2="118" y2="200"/><line class="a" x1="118" y1="200" x2="206" y2="156"/><line class="p" x1="30" y1="200" x2="206" y2="112"/><line class="a" x1="30" y1="24" x2="206" y2="156"/><path class="s" d="M110,200v-8h8"/><circle class="dot" cx="118" cy="200" r="2.4"/><circle class="dot" cx="206" cy="112" r="2.4"/><circle class="dot" cx="206" cy="156" r="2.4"/><circle class="dot" cx="100.4" cy="164.8" r="2.4"/><circle class="dot" cx="170.8" cy="129.6" r="2.4"/><text x="12" y="216">A</text><text x="214" y="216">B</text><text x="214" y="18">C</text><text x="12" y="18">D</text><text x="114" y="216">K</text><text x="212" y="116">L</text><text x="212" y="161">M</text><text x="86" y="161">P</text><text x="157" y="126">Q</text></svg>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Układ współrzędnych z początkiem w \(A\) i bok \(a=1\) (wynik pomnożymy potem przez \(a\)): \(A=(0,0)\), \(B=(1,0)\), \(C=(1,1)\), \(D=(0,1)\), \(K=\left(\tfrac12,0\right)\), \(L=\left(1,\tfrac12\right)\).</p>
<p class="step"><b>Punkt \(M\).</b> \(M=(1,m)\). Wektory \(\overrightarrow{KD}=\left(-\tfrac12,1\right)\) i \(\overrightarrow{KM}=\left(\tfrac12,m\right)\) są prostopadłe, więc \(-\tfrac14+m=0\) i \(m=\tfrac14\).</p>
<p class="step"><b>Punkty \(P\) i \(Q\).</b> Prosta \(AL\): \(y=\tfrac x2\). Prosta \(DK\): \(y=1-2x\). Prosta \(DM\): przez \((0,1)\) i \(\left(1,\tfrac14\right)\), czyli \(y=1-\tfrac34x\). Punkt \(P\): \(\tfrac x2=1-2x\Rightarrow x=\tfrac25\), \(P=\left(\tfrac25,\tfrac15\right)\). Punkt \(Q\): \(\tfrac x2=1-\tfrac34x\Rightarrow x=\tfrac45\), \(Q=\left(\tfrac45,\tfrac25\right)\).</p>
<p class="step"><b>Długość.</b> \(|PQ|=\sqrt{\left(\tfrac25\right)^2+\left(\tfrac15\right)^2}=\dfrac{\sqrt5}5\). Dla boku \(a\) wszystkie odległości są \(a\) razy większe, więc \(|PQ|=\dfrac{\sqrt5}{5}\,a\). \(\blacksquare\)</p>`
  },
  {
    group: "Czworokąty",
    src: "maj 2023 · zad. 8",
    pts: 4,
    tags: ["czworokąt opisany na okręgu", "twierdzenie sinusów", "obwód"],
    q: String.raw`<p>Czworokąt \(ABCD\), w którym \(|BC|=4\) i \(|CD|=5\), jest opisany na okręgu. Przekątna \(AC\) tego czworokąta tworzy z bokiem \(BC\) kąt o mierze \(60^\circ\), natomiast z bokiem \(AB\) – kąt ostry, którego sinus jest równy \(\tfrac14\).</p>
<p>Oblicz obwód czworokąta \(ABCD\).</p>`,
    ans: String.raw`\(10+16\sqrt3\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> W czworokącie opisanym na okręgu sumy długości przeciwległych boków są równe: \(|AB|+|CD|=|BC|+|AD|\). Zatem obwód to \(2\,(|AB|+|CD|)\), więc wystarczy znaleźć \(|AB|\) – z twierdzenia sinusów w trójkącie \(ABC\).</p>
<p class="step"><b>Krok 1.</b> W trójkącie \(ABC\) mamy \(\angle ACB=60^\circ\) i \(\sin\angle BAC=\tfrac14\). Bok \(BC\) leży naprzeciw kąta \(BAC\), a bok \(AB\) naprzeciw kąta \(ACB\):
\[\frac{|BC|}{\sin\angle BAC}=\frac{|AB|}{\sin\angle ACB}\ \Longrightarrow\ \frac4{\frac14}=\frac{|AB|}{\frac{\sqrt3}2}\ \Longrightarrow\ |AB|=16\cdot\frac{\sqrt3}2=8\sqrt3.\]</p>
<p class="step"><b>Krok 2.</b> Z warunku opisania: \(|AD|=|AB|+|CD|-|BC|=8\sqrt3+5-4=8\sqrt3+1\).</p>
<p class="step"><b>Krok 3: obwód.</b> \(|AB|+|BC|+|CD|+|AD|=8\sqrt3+4+5+8\sqrt3+1=10+16\sqrt3\).</p>`
  },
  {
    group: "Czworokąty",
    src: "maj 2026 · zad. 11",
    pts: 6,
    tags: ["czworokąt wpisany i opisany", "twierdzenie cosinusów", "pole"],
    q: String.raw`<p>W czworokącie \(ABCD\) są dane: \(|AB|=9\), \(|AD|=10\) oraz \(|\angle BAD|=60^\circ\). W ten czworokąt wpisano okrąg oraz na tym czworokącie opisano okrąg.</p>
<p>Oblicz długości boków \(BC\) i \(CD\) oraz pole czworokąta \(ABCD\).</p>`,
    ans: String.raw`\(|BC|=5\), \(|CD|=6\), \(P=30\sqrt3\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Czworokąt jest jednocześnie wpisany w okrąg i opisany na okręgu. Daje to dwa warunki: \(\angle BCD=180^\circ-\angle BAD=120^\circ\) oraz \(|AB|+|CD|=|AD|+|BC|\). Przekątną \(BD\) policzymy dwa razy: z trójkąta \(ABD\) i z trójkąta \(BCD\).</p>
<p class="step"><b>Krok 1: przekątna \(BD\).</b> Twierdzenie cosinusów w trójkącie \(ABD\): \(|BD|^2=9^2+10^2-2\cdot9\cdot10\cdot\cos60^\circ=81+100-90=91\).</p>
<p class="step"><b>Krok 2: warunek opisania.</b> \(9+|CD|=10+|BC|\), więc \(|CD|=|BC|+1\). Niech \(|BC|=x\) i \(|CD|=x+1\).</p>
<p class="step"><b>Krok 3: trójkąt \(BCD\).</b> Kąt przy \(C\) ma \(120^\circ\), a \(\cos120^\circ=-\tfrac12\):
\[91=x^2+(x+1)^2+x(x+1)=3x^2+3x+1\ \Longrightarrow\ x^2+x-30=0\ \Longrightarrow\ x=5\]
(drugi pierwiastek, \(-6\), odrzucamy). Zatem \(|BC|=5\) i \(|CD|=6\).</p>
<p class="step"><b>Krok 4: pole.</b> \(P=P_{ABD}+P_{BCD}=\tfrac12\cdot9\cdot10\cdot\sin60^\circ+\tfrac12\cdot5\cdot6\cdot\sin120^\circ=\tfrac{45\sqrt3}2+\tfrac{15\sqrt3}2=30\sqrt3\).</p>
<p class="note"><b>Kontrola wzorem Brahmagupty</b> (dla czworokąta wpisanego w okrąg): \(s=15\), \(P=\sqrt{(s-9)(s-5)(s-6)(s-10)}=\sqrt{6\cdot10\cdot9\cdot5}=\sqrt{2700}=30\sqrt3\) ✓.</p>`
  }
];
