(window.TASKS = window.TASKS || {})['studia-6'] = [
  {
    id: 1,
    group: "Przestrzeń probabilistyczna, niezależność, lematy Borela–Cantellego",
    tags: ["niezależność", "lemat Borela–Cantellego", "ciąg rzutów monetą"],
    q: String.raw`<p>Rzucamy monetą nieskończenie wiele razy, a kolejne rzuty są niezależne. W każdym rzucie orzeł (O) wypada z prawdopodobieństwem \(p\), gdzie \(0&lt;p&lt;1\), a reszka (R) z prawdopodobieństwem \(1-p\). Wyznacz prawdopodobieństwo, że w tym ciągu rzutów pojawi się seria OOOROORR, czyli osiem kolejnych wyników dokładnie w tej kolejności.</p>`,
    ans: String.raw`\(1\)`,
    sol: String.raw`<p>Seria OOOROORR zawiera \(5\) orłów i \(3\) reszki, więc dla ustalonych \(8\) kolejnych rzutów
\[q:=P(\text{OOOROORR})=p^5(1-p)^3,\qquad0&lt;q&lt;1,\]
bo \(0&lt;p&lt;1\). Podzielmy ciąg rzutów na rozłączne bloki po \(8\) rzutów: blok \(k\) to rzuty o numerach \(8k-7,\dots,8k\). Niech
\[A_k=\{\text{w bloku }k\text{ wypadło dokładnie OOOROORR}\}.\]
Bloki składają się z różnych rzutów, więc zdarzenia \(A_1,A_2,\dots\) są niezależne i \(P(A_k)=q\).</p>
<p>Niech \(B\) oznacza zdarzenie, że seria <b>nigdy</b> nie wypada. Wtedy w szczególności nie wypada ona w żadnym z pierwszych \(n\) bloków, czyli \(B\subset A_1^c\cap\dots\cap A_n^c\). Stąd dla każdego \(n\):
\[P(B)\le P\bigl(A_1^c\cap\dots\cap A_n^c\bigr)=(1-q)^n\xrightarrow[n\to\infty]{}0.\]
Zatem \(P(B)=0\), a szukane prawdopodobieństwo wynosi \(1\).</p>
<p class="note"><b>Uwaga.</b> Ponieważ \(\sum_kP(A_k)=\infty\), a zdarzenia \(A_k\) są niezależne, z drugiego lematu Borela–Cantellego seria wypada z prawdopodobieństwem \(1\) nawet <b>nieskończenie wiele razy</b>. Wynik nie zależy ani od \(p\), ani od konkretnej serii. Istotne jest tylko to, że ma ona dodatnie prawdopodobieństwo.</p>`
  },
  {
    id: 2,
    group: "Przestrzeń probabilistyczna, niezależność, lematy Borela–Cantellego",
    tags: ["lemat Borela–Cantellego", "szereg harmoniczny", "schemat urnowy"],
    q: String.raw`<p>Na początku w urnie są dwie kule: jedna czarna i jedna biała. W nieskończoność powtarzamy następujący krok: losujemy z urny jedną kulę, sprawdzamy jej kolor, wkładamy ją z powrotem i dodatkowo dorzucamy do urny jedną nową kulę białą. Wyznacz prawdopodobieństwo, że kula czarna zostanie wylosowana nieskończenie wiele razy.</p>`,
    ans: String.raw`\(1\)`,
    sol: String.raw`<p>Po każdym losowaniu dokładamy kulę białą <b>niezależnie od wyniku</b>, więc skład urny jest z góry ustalony: przed \(n\)-tym losowaniem jest w niej \(1\) kula czarna i \(n\) białych. Niech \(C_n=\{\text{w }n\text{-tym losowaniu wyciągnięto czarną}\}\). Wtedy
\[P(C_n)=\frac1{n+1},\]
a ponieważ skład urny nie zależy od wcześniejszych wyników, zdarzenia \(C_1,C_2,\dots\) są niezależne.</p>
<p><b>Sposób 1 (lemat Borela–Cantellego).</b> Szereg \(\sum_{n\ge1}\frac1{n+1}\) jest rozbieżny (szereg harmoniczny), a zdarzenia \(C_n\) są niezależne, więc z drugiego lematu Borela–Cantellego
\[P\Bigl(\limsup_{n\to\infty}C_n\Bigr)=1.\]</p>
<p><b>Sposób 2 (bezpośrednio).</b> Niech \(D_N\) oznacza zdarzenie, że po \(N\)-tym losowaniu czarna kula już nigdy nie zostanie wyciągnięta. Dla dowolnego \(M>N\), z niezależności i z iloczynu teleskopowego:
\[P(D_N)\le P\Bigl(\bigcap_{n=N+1}^MC_n^c\Bigr)=\prod_{n=N+1}^M\frac n{n+1}=\frac{N+1}{N+2}\cdot\frac{N+2}{N+3}\cdots\frac M{M+1}=\frac{N+1}{M+1}\xrightarrow[M\to\infty]{}0.\]
Zatem \(P(D_N)=0\) dla każdego \(N\). Zdarzenie „czarna tylko skończenie wiele razy” to \(\bigcup_{N\ge0}D_N\), więc \(P\bigl(\bigcup_ND_N\bigr)\le\sum_NP(D_N)=0\).</p>
<p class="note"><b>Uwaga.</b> Kluczowa jest rozbieżność szeregu harmonicznego. Gdyby kul białych przybywało tak szybko, że \(\sum P(C_n)&lt;\infty\) (np. \(P(C_n)\sim1/n^2\)), to z pierwszego lematu Borela–Cantellego odpowiedź wynosiłaby \(0\).</p>`
  },
  {
    id: 3,
    group: "Prawdopodobieństwo warunkowe, wzór Bayesa, kombinatoryka",
    tags: ["rozkład dwumianowy", "prawdopodobieństwo warunkowe"],
    q: String.raw`<p>Do dzika strzela trzech myśliwych. Każdy z nich, niezależnie od pozostałych, trafia z prawdopodobieństwem \(0{,}8\).</p>
<p>(a) Oblicz prawdopodobieństwo, że dzik zostanie trafiony.</p>
<p>(b) Wiedząc, że dzik został trafiony, oblicz prawdopodobieństwo, że trafiło go co najmniej dwóch myśliwych.</p>`,
    ans: String.raw`(a) \(0{,}992\); (b) \(\dfrac{28}{31}\approx0{,}903\)`,
    sol: String.raw`<p>Niech \(X\) będzie liczbą myśliwych, którzy trafili. Przy założeniu niezależności strzałów \(X\sim\mathrm{Bin}(3;0{,}8)\).</p>
<p><b>a)</b> Dzik jest trafiony, gdy trafił co najmniej jeden myśliwy:
\[P(X\ge1)=1-P(X=0)=1-0{,}2^3=1-0{,}008=0{,}992.\]</p>
<p><b>b)</b> Ponieważ \(\{X\ge2\}\subset\{X\ge1\}\), mamy \(P(\{X\ge2\}\cap\{X\ge1\})=P(X\ge2)\), gdzie
\[P(X\ge2)=\binom32\cdot0{,}8^2\cdot0{,}2+0{,}8^3=0{,}384+0{,}512=0{,}896.\]
Stąd
\[P(X\ge2\mid X\ge1)=\frac{P(X\ge2)}{P(X\ge1)}=\frac{0{,}896}{0{,}992}=\frac{896}{992}=\frac{28}{31}\approx0{,}903.\]</p>`
  },
  {
    id: 4,
    group: "Prawdopodobieństwo warunkowe, wzór Bayesa, kombinatoryka",
    tags: ["wzór Bayesa", "prawdopodobieństwo całkowite"],
    q: String.raw`<p>W szufladzie leży \(100\) monet. Dziewięćdziesiąt z nich jest symetrycznych, czyli orzeł i reszka wypadają na nich z jednakowym prawdopodobieństwem. Pozostałe dziesięć jest niesymetrycznych: orzeł wypada na nich trzy razy częściej niż reszka. Losujemy jedną monetę i rzucamy nią trzykrotnie, a za każdym razem wypada orzeł. Oblicz prawdopodobieństwo, że wylosowana moneta jest niesymetryczna.</p>`,
    ans: String.raw`\(\dfrac3{11}\approx0{,}273\)`,
    sol: String.raw`<p>Oznaczmy: \(S\) – wylosowano monetę symetryczną, \(N\) – niesymetryczną, \(T\) – w trzech rzutach wypadły trzy orły. Wtedy \(P(S)=0{,}9\) i \(P(N)=0{,}1\). Dla monety niesymetrycznej \(P(\mathrm O)=3P(\mathrm R)\) oraz \(P(\mathrm O)+P(\mathrm R)=1\), więc \(P(\mathrm O)=\tfrac34\). Rzuty są niezależne, zatem
\[P(T\mid S)=\left(\tfrac12\right)^3=\tfrac18,\qquad P(T\mid N)=\left(\tfrac34\right)^3=\tfrac{27}{64}.\]
Ze wzoru na prawdopodobieństwo całkowite:
\[P(T)=0{,}9\cdot\tfrac18+0{,}1\cdot\tfrac{27}{64}=\tfrac{72}{640}+\tfrac{27}{640}=\tfrac{99}{640}.\]
Ze wzoru Bayesa:
\[P(N\mid T)=\frac{P(T\mid N)P(N)}{P(T)}=\frac{27/640}{99/640}=\frac{27}{99}=\frac3{11}\approx0{,}273.\]</p>
<p class="note"><b>Komentarz.</b> Przed rzutami szansa na monetę niesymetryczną wynosiła \(10\%\). Po trzech orłach wzrosła do około \(27\%\).</p>`
  },
  {
    id: 5,
    group: "Prawdopodobieństwo warunkowe, wzór Bayesa, kombinatoryka",
    tags: ["zasada włączeń i wyłączeń", "zmienne wskaźnikowe", "liczba Stirlinga"],
    q: String.raw`<p>W urnie jest pięć kul w różnych kolorach: białym, czarnym, czerwonym, niebieskim i zielonym. Wykonujemy \(20\) losowań, za każdym razem odkładając wylosowaną kulę z powrotem do urny.</p>
<p>(a) Oblicz prawdopodobieństwo, że każda z pięciu kul zostanie wylosowana co najmniej raz.</p>
<p>(b) Oblicz wartość oczekiwaną liczby różnych kolorów, które pojawią się w tych \(20\) losowaniach.</p>`,
    ans: String.raw`(a) \(\dfrac{143\,847\,569\,376}{5^{16}}\approx0{,}9427\); (b) \(5-\dfrac{4^{20}}{5^{19}}\approx4{,}9424\)`,
    sol: String.raw`<p><b>a)</b> Dla \(i=1,\dots,5\) niech \(A_i=\{\text{kula koloru }i\text{ ani razu nie została wylosowana}\}\). Jeśli ustalimy \(k\) kolorów, które mają się nie pojawić, to w każdym losowaniu musi wypaść jeden z pozostałych \(5-k\) kolorów, więc
\[P\bigl(A_{i_1}\cap\dots\cap A_{i_k}\bigr)=\left(\frac{5-k}5\right)^{20}.\]
Z zasady włączeń i wyłączeń:
\[P(\text{każdy kolor co najmniej raz})=1-P\Bigl(\bigcup_{i=1}^5A_i\Bigr)=\sum_{k=0}^5(-1)^k\binom5k\left(\frac{5-k}5\right)^{20},\]
czyli
\[1-5\left(\tfrac45\right)^{20}+10\left(\tfrac35\right)^{20}-10\left(\tfrac25\right)^{20}+5\left(\tfrac15\right)^{20}=\frac{89\,904\,730\,860\,000}{5^{20}}=\frac{143\,847\,569\,376}{5^{16}}\approx0{,}9427.\]
Wkład poszczególnych składników: \(5\left(\tfrac45\right)^{20}\approx0{,}057646\), \(10\left(\tfrac35\right)^{20}\approx0{,}000366\), \(10\left(\tfrac25\right)^{20}\approx1{,}1\cdot10^{-7}\), \(5\left(\tfrac15\right)^{20}\approx5{,}2\cdot10^{-14}\).</p>
<p class="note"><b>Uwaga.</b> Licznik to \(5!\cdot S(20,5)\), gdzie \(S(20,5)=749\,206\,090\,500\) jest liczbą Stirlinga drugiego rodzaju (liczbą podziałów zbioru \(20\) losowań na \(5\) niepustych grup).</p>
<p><b>b)</b> Niech \(X\) będzie liczbą różnych wylosowanych kolorów. Zapiszmy ją jako sumę wskaźników:
\[X=\sum_{i=1}^5\mathbf 1_{A_i^c},\qquad P(A_i^c)=1-\left(\tfrac45\right)^{20}.\]
Z liniowości wartości oczekiwanej (która <b>nie</b> wymaga niezależności, a zdarzenia \(A_i\) niezależne nie są):
\[\mathbb EX=\sum_{i=1}^5P(A_i^c)=5\left(1-\left(\tfrac45\right)^{20}\right)=5-\frac{4^{20}}{5^{19}}=\frac{94\,267\,920\,012\,849}{19\,073\,486\,328\,125}\approx4{,}9424.\]</p>`
  },
  {
    id: 6,
    group: "Prawdopodobieństwo warunkowe, wzór Bayesa, kombinatoryka",
    tags: ["zmienne wskaźnikowe", "niezależność zdarzeń", "losowanie bez zwracania"],
    q: String.raw`<p>W klasie jest \(18\) chłopców i \(8\) dziewczynek, a wśród nich Jacek i Agatka. Na każdej lekcji nauczyciel losuje do odpowiedzi dwóch chłopców i jedną dziewczynkę.</p>
<p>(a) Oblicz prawdopodobieństwo, że w ciągu pierwszych pięciu lekcji zarówno Jacek, jak i Agatka odpowiadają co najmniej raz.</p>
<p>(b) Oblicz wartość oczekiwaną liczby dzieci wybranych do odpowiedzi w ciągu pierwszych pięciu lekcji.</p>`,
    ans: String.raw`(a) \(\dfrac{419\,471\,041}{1\,934\,917\,632}\approx0{,}2168\); (b) \(\dfrac{320\,014\,073}{26\,873\,856}\approx11{,}91\) (oczekiwana liczba różnych dzieci)`,
    sol: String.raw`<p>Zakładamy, że losowania na różnych lekcjach są niezależne, a na każdej lekcji wybór chłopców nie zależy od wyboru dziewczynki. Na jednej lekcji Jacek musi znaleźć się wśród dwóch chłopców wybranych spośród \(18\), więc
\[P(\text{Jacek odpowiada})=\frac{\binom{17}1}{\binom{18}2}=\frac{17}{153}=\frac19,\qquad P(\text{Agatka odpowiada})=\frac18.\]</p>
<p><b>a)</b> Niech \(J\) oznacza zdarzenie, że Jacek odpowiada co najmniej raz w ciągu \(5\) lekcji, a \(A\) – to samo dla Agatki. Przechodząc do zdarzeń przeciwnych:
\[P(J)=1-\left(\tfrac89\right)^5=\frac{26\,281}{59\,049}\approx0{,}4451,\qquad P(A)=1-\left(\tfrac78\right)^5=\frac{15\,961}{32\,768}\approx0{,}4871.\]
Zdarzenie \(J\) zależy tylko od losowań chłopców, a \(A\) tylko od losowań dziewczynek, więc są niezależne:
\[P(J\cap A)=\left(1-\left(\tfrac89\right)^5\right)\left(1-\left(\tfrac78\right)^5\right)=\frac{419\,471\,041}{1\,934\,917\,632}\approx0{,}2168.\]</p>
<p><b>b)</b> Na pięciu lekcjach jest zawsze \(5\cdot3=15\) wywołań, więc sensowne pytanie dotyczy liczby <b>różnych</b> dzieci, które odpowiadały co najmniej raz. Oznaczmy ją przez \(N\). Dla dziecka \(k\) (\(k=1,\dots,26\)) niech \(I_k=1\), jeśli odpowiadało co najmniej raz, i \(I_k=0\) w przeciwnym razie. Wtedy \(N=\sum_{k=1}^{26}I_k\). Każdy chłopiec odpowiada co najmniej raz z prawdopodobieństwem \(1-(8/9)^5\), a każda dziewczynka z prawdopodobieństwem \(1-(7/8)^5\). Z liniowości wartości oczekiwanej (która nie wymaga niezależności):
\[\mathbb EN=18\left(1-\left(\tfrac89\right)^5\right)+8\left(1-\left(\tfrac78\right)^5\right)=\frac{52\,562}{6\,561}+\frac{15\,961}{4\,096}=\frac{320\,014\,073}{26\,873\,856}\approx11{,}91.\]</p>`
  },
  {
    id: 7,
    group: "Dystrybuanta i rozkłady zmiennych losowych",
    tags: ["dystrybuanta", "rozkład mieszany", "wartość oczekiwana"],
    q: String.raw`<p>Dystrybuanta zmiennej losowej \(X\) jest dana wzorem
\[F_X(t)=\begin{cases}0, & t&lt;0,\\[2pt] \tfrac17, & 0\le t&lt;\tfrac1{14},\\[2pt] \tfrac27+t, & \tfrac1{14}\le t&lt;\tfrac37,\\[2pt] 1, & t\ge\tfrac37.\end{cases}\]
Oblicz \(P\bigl(0&lt;X&lt;\tfrac37\bigr)\), \(P(X=0)\) oraz \(\mathbb EX\).</p>`,
    ans: String.raw`\(P\bigl(0&lt;X&lt;\tfrac37\bigr)=\tfrac47\), \(P(X=0)=\tfrac17\), \(\mathbb EX=\tfrac{89}{392}\approx0{,}227\)`,
    sol: String.raw`<p>Przydadzą się dwa wzory, prawdziwe dla każdej dystrybuanty:
\[P(X=a)=F(a)-F(a^-),\qquad P(a&lt;X&lt;b)=F(b^-)-F(a),\]
gdzie \(F(a^-)\) oznacza granicę lewostronną w punkcie \(a\).</p>
<p><b>Budowa rozkładu.</b> Dystrybuanta ma trzy skoki:</p>
<ul>
<li>w \(t=0\): z \(0\) do \(\tfrac17\), czyli \(P(X=0)=\tfrac17=\tfrac2{14}\);</li>
<li>w \(t=\tfrac1{14}\): z \(\tfrac17=\tfrac2{14}\) do \(\tfrac27+\tfrac1{14}=\tfrac5{14}\), czyli \(P\bigl(X=\tfrac1{14}\bigr)=\tfrac3{14}\);</li>
<li>w \(t=\tfrac37\): z \(\tfrac27+\tfrac37=\tfrac57\) do \(1\), czyli \(P\bigl(X=\tfrac37\bigr)=\tfrac27=\tfrac4{14}\).</li>
</ul>
<p>Na przedziale \(\bigl(\tfrac1{14},\tfrac37\bigr)\) dystrybuanta rośnie liniowo z nachyleniem \(1\), więc rozkład ma tam część ciągłą o gęstości \(1\) i masie \(\tfrac37-\tfrac1{14}=\tfrac5{14}\). Kontrola: \(\tfrac2{14}+\tfrac3{14}+\tfrac4{14}+\tfrac5{14}=1\).</p>
<p><b>Prawdopodobieństwa.</b>
\[P\Bigl(0&lt;X&lt;\tfrac37\Bigr)=F\Bigl(\bigl(\tfrac37\bigr)^-\Bigr)-F(0)=\Bigl(\tfrac27+\tfrac37\Bigr)-\tfrac17=\tfrac47,\qquad P(X=0)=F(0)-F(0^-)=\tfrac17.\]
Zgadza się to z budową rozkładu: \(\tfrac3{14}+\tfrac5{14}=\tfrac8{14}=\tfrac47\).</p>
<p><b>Wartość oczekiwana.</b> Sumujemy część skokową i część ciągłą:
\[\mathbb EX=0\cdot\tfrac17+\tfrac1{14}\cdot\tfrac3{14}+\tfrac37\cdot\tfrac27+\int_{1/14}^{3/7}x\,dx=\tfrac3{196}+\tfrac6{49}+\tfrac12\Bigl(\tfrac9{49}-\tfrac1{196}\Bigr)=\tfrac{27}{196}+\tfrac5{56}=\tfrac{89}{392}\approx0{,}227.\]</p>
<p><b>Sprawdzenie.</b> Dla \(X\ge0\) zachodzi \(\mathbb EX=\int_0^\infty\bigl(1-F(t)\bigr)dt\), więc
\[\mathbb EX=\int_0^{1/14}\tfrac67\,dt+\int_{1/14}^{3/7}\Bigl(\tfrac57-t\Bigr)dt=\tfrac3{49}+\tfrac{65}{392}=\tfrac{24}{392}+\tfrac{65}{392}=\tfrac{89}{392}.\]</p>`
  },
  {
    id: 8,
    group: "Dystrybuanta i rozkłady zmiennych losowych",
    tags: ["dystrybuanta", "rozkład funkcji zmiennej losowej", "rozkład jednostajny"],
    q: String.raw`<p>(a) Wyznacz wszystkie \(a,b\in\mathbb R\), dla których funkcja
\[F(t)=\begin{cases}b-\dfrac a{(t+1)^2}, & t\ge-\tfrac12,\\[4pt] 0, & t&lt;-\tfrac12\end{cases}\]
jest dystrybuantą pewnej zmiennej losowej.</p>
<p>(b) Niech \(X\) ma dystrybuantę \(F\) z części (a) z parametrami \(a=\tfrac14\) i \(b=1\). Wyznacz dystrybuantę zmiennej \(Y=\dfrac2{(X+1)^2}\), uzasadnij, że \(Y\) ma gęstość, i znajdź tę gęstość.</p>`,
    ans: String.raw`(a) \(b=1\), \(0\le a\le\tfrac14\); (b) \(F_Y(y)=\tfrac y8\) dla \(0&lt;y&lt;8\), \(f_Y=\tfrac18\mathbf 1_{(0,8)}\) (rozkład jednostajny na \((0,8)\))`,
    sol: String.raw`<p><b>a)</b> Funkcja \(F\) jest dystrybuantą wtedy i tylko wtedy, gdy jest niemalejąca, prawostronnie ciągła, \(\lim_{t\to-\infty}F(t)=0\) oraz \(\lim_{t\to\infty}F(t)=1\). Sprawdzamy kolejno:</p>
<ul>
<li>\(\lim_{t\to-\infty}F(t)=0\) zachodzi zawsze.</li>
<li>\(\lim_{t\to\infty}F(t)=b\), więc musi być \(b=1\).</li>
<li>Prawostronna ciągłość zachodzi zawsze: na obu kawałkach \(F\) jest ciągła (dla \(t\ge-\tfrac12\) mamy \(t+1\ge\tfrac12>0\)), a wartość w punkcie \(-\tfrac12\) pochodzi z górnego wzoru.</li>
<li>Monotoniczność na \(\bigl[-\tfrac12,\infty\bigr)\): \(F'(t)=\dfrac{2a}{(t+1)^3}\) i \(t+1>0\), więc potrzeba \(a\ge0\).</li>
<li>Monotoniczność w punkcie sklejenia: na lewo od \(-\tfrac12\) jest \(F=0\), więc potrzeba \(F\bigl(-\tfrac12\bigr)=b-4a=1-4a\ge0\), czyli \(a\le\tfrac14\).</li>
</ul>
<p><b>Odpowiedź:</b> \(b=1\), \(0\le a\le\tfrac14\).</p>
<p class="note"><b>Uwaga.</b> Dla \(a&lt;\tfrac14\) dystrybuanta ma w punkcie \(-\tfrac12\) skok \(1-4a\), czyli rozkład ma tam atom. Dla \(a=0\) zmienna jest stała, \(X\equiv-\tfrac12\). Dla \(a=\tfrac14\) dystrybuanta jest ciągła.</p>
<p><b>b)</b> Dla \(a=\tfrac14\) i \(b=1\) mamy \(F(t)=1-\dfrac1{4(t+1)^2}\) dla \(t\ge-\tfrac12\) oraz \(F(t)=0\) dla \(t&lt;-\tfrac12\). Ta dystrybuanta jest ciągła i \(F\bigl(-\tfrac12\bigr)=0\), więc \(X>-\tfrac12\) z prawdopodobieństwem \(1\). Stąd \(X+1>\tfrac12\), czyli \((X+1)^2>\tfrac14\) i \(0&lt;Y&lt;8\). Zatem \(F_Y(y)=0\) dla \(y\le0\) oraz \(F_Y(y)=1\) dla \(y\ge8\).</p>
<p>Niech \(0&lt;y&lt;8\). Ponieważ \(X+1>0\),
\[\{Y\le y\}=\Bigl\{(X+1)^2\ge\tfrac2y\Bigr\}=\Bigl\{X\ge\sqrt{2/y}-1\Bigr\}.\]
Punkt \(s=\sqrt{2/y}-1\) spełnia \(s>-\tfrac12\) (bo \(y&lt;8\)), a \(F\) jest ciągła, więc
\[F_Y(y)=P(X\ge s)=1-F(s)=\frac1{4(s+1)^2}=\frac1{4\cdot\frac2y}=\frac y8,\]
bo \((s+1)^2=\tfrac2y\). Ostatecznie
\[F_Y(y)=\begin{cases}0,&y\le0,\\ \tfrac y8,&0&lt;y&lt;8,\\ 1,&y\ge8.\end{cases}\]
Ta dystrybuanta jest ciągła i spełnia \(F_Y(y)=\int_{-\infty}^yf_Y(s)\,ds\) dla \(f_Y(y)=\tfrac18\mathbf 1_{(0,8)}(y)\). Zatem \(Y\) ma gęstość, a dokładniej rozkład jednostajny na przedziale \((0,8)\).</p>
<p class="note"><b>Uwaga.</b> To nie przypadek: \(1-F(X)=\dfrac1{4(X+1)^2}=\dfrac Y8\), czyli \(Y=8\bigl(1-F(X)\bigr)\). Z zadania 9 zmienna \(F(X)\) ma rozkład jednostajny na \([0,1]\), więc \(Y\) ma rozkład jednostajny na \([0,8]\).</p>`
  },
  {
    id: 9,
    group: "Dystrybuanta i rozkłady zmiennych losowych",
    tags: ["dowód", "transformacja przez dystrybuantę", "rozkład jednostajny"],
    q: String.raw`<p>Niech \(X\) będzie zmienną losową o ciągłej dystrybuancie \(F\). Udowodnij, że zmienna losowa \(F(X)\) ma rozkład jednostajny na przedziale \([0,1]\).</p>`,
    sol: String.raw`<p>Niech \(U=F(X)\). Zmienna \(U\) przyjmuje wartości w \([0,1]\), więc wystarczy pokazać, że \(P(U\le u)=u\) dla każdego \(u\in[0,1]\).</p>
<p><b>Przypadek \(0&lt;u&lt;1\).</b> Określmy \(x_u=\sup\{t\in\mathbb R:F(t)\le u\}\). Zbiór pod supremum jest niepusty, bo \(F(t)\to0&lt;u\) przy \(t\to-\infty\), i ograniczony z góry, bo \(F(t)\to1>u\) przy \(t\to\infty\). Zatem \(x_u\in\mathbb R\).</p>
<p>Pokażemy, że \(F(x_u)=u\). Z definicji supremum istnieje ciąg \(t_n\to x_u\) taki, że \(F(t_n)\le u\), więc z ciągłości \(F(x_u)\le u\). Z drugiej strony dla każdego \(t>x_u\) mamy \(F(t)>u\), więc przechodząc z \(t\downarrow x_u\) dostajemy \(F(x_u)\ge u\).</p>
<p>Teraz zachodzi równość zdarzeń \(\{F(X)\le u\}=\{X\le x_u\}\). Jeśli \(X\le x_u\), to z monotoniczności \(F(X)\le F(x_u)=u\). Jeśli \(X>x_u\), to \(F(X)>u\) z definicji \(x_u\). Stąd
\[P(U\le u)=P(X\le x_u)=F(x_u)=u.\]</p>
<p><b>Końce przedziału.</b> Dla \(u=1\) mamy \(P(U\le1)=1\), bo zawsze \(U\le1\). Dla \(u=0\) i dowolnego \(\varepsilon\in(0,1)\) zachodzi \(P(U\le0)\le P(U\le\varepsilon)=\varepsilon\), więc \(P(U\le0)=0\).</p>
<p>Zatem \(F_U(u)=u\) dla \(u\in[0,1]\), \(F_U(u)=0\) dla \(u&lt;0\) i \(F_U(u)=1\) dla \(u>1\), czyli \(U=F(X)\) ma rozkład jednostajny na \([0,1]\). \(\blacksquare\)</p>
<p class="note"><b>Uwagi.</b> Ciągłość \(F\) jest konieczna: na przykład dla \(X\equiv c\) mamy \(F(X)\equiv1\). Odwrócenie tego faktu to <b>metoda odwrotnej dystrybuanty</b>: jeśli \(U\) ma rozkład jednostajny na \([0,1]\), to \(F^{-1}(U)\), gdzie \(F^{-1}(u)=\inf\{t:F(t)\ge u\}\), ma dystrybuantę \(F\). W ten sposób generuje się zmienne losowe w symulacjach Monte Carlo.</p>`
  },
  {
    id: 10,
    group: "Rozkłady funkcji zmiennych losowych, sumy niezależnych zmiennych",
    tags: ["prawdopodobieństwo geometryczne", "gęstość", "rozkład jednostajny"],
    q: String.raw`<p>Na odcinku długości \(2\) wybieramy losowo (zgodnie z prawdopodobieństwem geometrycznym) i niezależnie dwa punkty \(X\) i \(Y\). Wyznacz gęstość rozkładu odległości między nimi, czyli zmiennej \(D=|X-Y|\).</p>`,
    ans: String.raw`\(f_D(d)=\left(1-\tfrac d2\right)\mathbf 1_{(0,2)}(d)\)`,
    sol: String.raw`<p>Utożsamiamy odcinek z \([0,2]\). Wtedy \(X\) i \(Y\) są niezależne i mają rozkład jednostajny na \([0,2]\), więc punkt \((X,Y)\) ma rozkład jednostajny na kwadracie \([0,2]^2\) o polu \(4\). Prawdopodobieństwo zdarzenia to pole odpowiadającego mu zbioru podzielone przez \(4\).</p>
<svg class="fig" viewBox="0 0 230 225" width="210" height="205" role="img" aria-label="Kwadrat [0,2]x[0,2] z dwoma trójkątami |x-y|>d" style="float:right;margin:0 0 6px 14px"><polygon class="f" points="94,190 190,190 190,94"/><polygon class="f" points="30,126 30,30 126,30"/><polygon class="s" points="30,190 190,190 190,30 30,30"/><line class="a" x1="94" y1="190" x2="190" y2="94"/><line class="a" x1="30" y1="126" x2="126" y2="30"/><text x="14" y="206">0</text><text x="92" y="206">d</text><text x="186" y="206">2</text><text x="12" y="132">d</text><text x="14" y="36">2</text><text class="m" x="132" y="170">x − y &gt; d</text><text class="m" x="36" y="64">y − x &gt; d</text></svg>
<p>Niech \(0\le d\le2\). Zbiór \(\{|x-y|>d\}\) to dwa trójkąty prostokątne o przyprostokątnych długości \(2-d\). Ich łączne pole wynosi \(2\cdot\dfrac{(2-d)^2}2=(2-d)^2\). Zatem
\[F_D(d)=P(D\le d)=1-\frac{(2-d)^2}4\qquad\text{dla }0\le d\le2,\]
a \(F_D(d)=0\) dla \(d&lt;0\) i \(F_D(d)=1\) dla \(d>2\). Różniczkując, dostajemy
\[f_D(d)=\left(1-\frac d2\right)\mathbf 1_{(0,2)}(d).\]</p>
<p class="note"><b>Kontrola:</b> \(\int_0^2\bigl(1-\tfrac x2\bigr)dx=2-1=1\). Gęstość jest największa przy \(d=0\) i maleje liniowo do \(0\) przy \(d=2\), więc małe odległości są bardziej prawdopodobne niż duże. Przy okazji \(\mathbb ED=\int_0^2x\bigl(1-\tfrac x2\bigr)dx=\tfrac23\).</p>
<div style="clear:both"></div>`
  },
  {
    id: 11,
    group: "Rozkłady funkcji zmiennych losowych, sumy niezależnych zmiennych",
    tags: ["rozkład normalny", "wzór na prawdopodobieństwo całkowite", "funkcja charakterystyczna"],
    q: String.raw`<p>Zmienne losowe \(X,Y,Z\) są niezależne. Zmienne \(X\) i \(Y\) mają standardowy rozkład normalny \(N(0,1)\), a \(Z\) przyjmuje wartości \(3\) i \(-3\), każdą z prawdopodobieństwem \(\tfrac12\). Udowodnij, że zmienna \(X+YZ\) ma rozkład normalny, i wyznacz jego parametry.</p>`,
    ans: String.raw`\(X+YZ\sim N(0,10)\), czyli \(\mu=0\), \(\sigma^2=10\)`,
    sol: String.raw`<p>Rozbijamy zdarzenie względem wartości \(Z\). Ponieważ \(Z\) jest niezależna od pary \((X,Y)\), dla każdego \(t\in\mathbb R\):
\[P(X+YZ\le t)=P(X+3Y\le t)P(Z=3)+P(X-3Y\le t)P(Z=-3)=\tfrac12P(X+3Y\le t)+\tfrac12P(X-3Y\le t).\]
Zmienne \(3Y\) i \(-3Y\) mają rozkład \(N(0,9)\) i są niezależne od \(X\). Suma niezależnych zmiennych normalnych ma rozkład normalny, a średnie i wariancje się dodają, więc
\[X+3Y\sim N(0,1+9)=N(0,10),\qquad X-3Y\sim N(0,10).\]
Stąd
\[P(X+YZ\le t)=\tfrac12\Phi\Bigl(\tfrac t{\sqrt{10}}\Bigr)+\tfrac12\Phi\Bigl(\tfrac t{\sqrt{10}}\Bigr)=\Phi\Bigl(\tfrac t{\sqrt{10}}\Bigr),\]
gdzie \(\Phi\) jest dystrybuantą rozkładu \(N(0,1)\). Zatem \(X+YZ\sim N(0,10)\), czyli \(\mu=0\), \(\sigma^2=10\) (\(\sigma=\sqrt{10}\)).</p>
<p><b>Drugi sposób (funkcja charakterystyczna).</b> Ponieważ zawsze \(Z^2=9\), a \(X,Y,Z\) są niezależne,
\[\mathbb Ee^{is(X+YZ)}=\mathbb Ee^{isX}\cdot\mathbb E\bigl[\mathbb E\bigl(e^{isYZ}\mid Z\bigr)\bigr]=e^{-s^2/2}\cdot\mathbb Ee^{-s^2Z^2/2}=e^{-s^2/2}e^{-9s^2/2}=e^{-10s^2/2},\]
a to jest funkcja charakterystyczna rozkładu \(N(0,10)\).</p>
<p class="note"><b>Uwaga.</b> Kluczowe jest to, że \(|Z|\) jest stałe. Gdyby \(Z\) przyjmowała wartości o różnych modułach (np. \(1\) i \(3\)), dostalibyśmy mieszaninę rozkładów normalnych o różnych wariancjach, która nie jest rozkładem normalnym.</p>`
  },
  {
    id: 12,
    group: "Rozkłady funkcji zmiennych losowych, sumy niezależnych zmiennych",
    tags: ["gęstość", "stała normująca", "wariancja"],
    q: String.raw`<p>Zmienna losowa \(X\) ma gęstość \(g(x)=a\,x^2\,\mathbf 1_{(-1,3)}(x)\). Wyznacz stałą \(a\), a następnie wartość oczekiwaną i wariancję zmiennej \(X\).</p>`,
    ans: String.raw`\(a=\tfrac3{28}\), \(\mathbb EX=\tfrac{15}7\approx2{,}143\), \(\operatorname{Var}X=\tfrac{156}{245}\approx0{,}637\)`,
    sol: String.raw`<p><b>Stała \(a\).</b> Gęstość musi całkować się do \(1\):
\[1=\int_{-1}^3ax^2\,dx=a\Bigl[\tfrac{x^3}3\Bigr]_{-1}^3=a\cdot\tfrac{27+1}3=\tfrac{28a}3\ \Longrightarrow\ a=\tfrac3{28}.\]
Przy \(a=\tfrac3{28}>0\) funkcja \(g\) jest nieujemna, więc rzeczywiście jest gęstością.</p>
<p><b>Wartość oczekiwana.</b>
\[\mathbb EX=\tfrac3{28}\int_{-1}^3x^3\,dx=\tfrac3{28}\Bigl[\tfrac{x^4}4\Bigr]_{-1}^3=\tfrac3{28}\cdot\tfrac{81-1}4=\tfrac{60}{28}=\tfrac{15}7\approx2{,}143.\]</p>
<p><b>Wariancja.</b> Najpierw drugi moment:
\[\mathbb EX^2=\tfrac3{28}\int_{-1}^3x^4\,dx=\tfrac3{28}\Bigl[\tfrac{x^5}5\Bigr]_{-1}^3=\tfrac3{28}\cdot\tfrac{243+1}5=\tfrac{183}{35}.\]
Stąd
\[\operatorname{Var}X=\mathbb EX^2-(\mathbb EX)^2=\tfrac{183}{35}-\tfrac{225}{49}=\tfrac{1281-1125}{245}=\tfrac{156}{245}\approx0{,}637.\]</p>`
  },
  {
    id: 13,
    group: "Rozkłady funkcji zmiennych losowych, sumy niezależnych zmiennych",
    tags: ["splot", "gęstość sumy", "rozkład jednostajny"],
    q: String.raw`<p>Zmienne losowe \(X\) i \(Y\) są niezależne i obie mają rozkład jednostajny na przedziale \((0,1)\). Wyznacz gęstość zmiennej losowej \(2X-Y\).</p>`,
    ans: String.raw`\(f_Z(z)=\tfrac{z+1}2\) dla \(-1&lt;z&lt;0\); \(\tfrac12\) dla \(0\le z\le1\); \(\tfrac{2-z}2\) dla \(1&lt;z&lt;2\); \(0\) poza tym`,
    sol: String.raw`<p>Niech \(U=2X\) i \(V=-Y\). Wtedy \(U\) ma rozkład jednostajny na \((0,2)\) z gęstością \(f_U=\tfrac12\mathbf 1_{(0,2)}\), a \(V\) ma rozkład jednostajny na \((-1,0)\) z gęstością \(f_V=\mathbf 1_{(-1,0)}\). Zmienne \(U\) i \(V\) są niezależne, więc gęstość sumy \(Z=U+V=2X-Y\) jest splotem:
\[f_Z(z)=\int_{-\infty}^\infty f_U(u)\,f_V(z-u)\,du.\]
Mamy \(f_V(z-u)=1\) dokładnie wtedy, gdy \(-1&lt;z-u&lt;0\), czyli \(z&lt;u&lt;z+1\). Dlatego
\[f_Z(z)=\tfrac12\cdot\bigl|(0,2)\cap(z,z+1)\bigr|,\]
gdzie \(|\cdot|\) oznacza długość przedziału. Rozpatrujemy przypadki:</p>
<ul>
<li>\(-1&lt;z&lt;0\): przecięcie to \((0,z+1)\), długość \(z+1\);</li>
<li>\(0\le z\le1\): przedział \((z,z+1)\) leży cały w \((0,2)\), długość \(1\);</li>
<li>\(1&lt;z&lt;2\): przecięcie to \((z,2)\), długość \(2-z\);</li>
<li>poza przedziałem \((-1,2)\) przecięcie jest puste.</li>
</ul>
<p>Ostatecznie
\[f_Z(z)=\begin{cases}\dfrac{z+1}2,&-1&lt;z&lt;0,\\[4pt]\dfrac12,&0\le z\le1,\\[4pt]\dfrac{2-z}2,&1&lt;z&lt;2,\\[4pt]0,&\text{w pozostałych przypadkach.}\end{cases}\]
Kontrola: pole pod wykresem wynosi \(\tfrac14+\tfrac12+\tfrac14=1\). Wykres gęstości ma kształt trapezu.</p>`
  },
  {
    id: 14,
    group: "Rozkłady funkcji zmiennych losowych, sumy niezależnych zmiennych",
    tags: ["rozkład normalny", "gęstość funkcji zmiennej losowej", "dystrybuanta"],
    q: String.raw`<p>Zmienna losowa \(X\) ma rozkład normalny o wartości oczekiwanej \(1\) i wariancji \(5\). Wyznacz gęstość zmiennej losowej \(Y=2X^4+5\).</p>`,
    ans: String.raw`\(f_Y(y)=\dfrac1{8\sqrt{10\pi}}\Bigl(\tfrac{y-5}2\Bigr)^{-3/4}\Bigl[e^{-(r-1)^2/10}+e^{-(r+1)^2/10}\Bigr]\) dla \(y>5\), gdzie \(r=\bigl(\tfrac{y-5}2\bigr)^{1/4}\); \(0\) dla \(y\le5\)`,
    sol: String.raw`<p>Gęstość zmiennej \(X\sim N(1,5)\) to \(f_X(x)=\dfrac1{\sqrt{10\pi}}e^{-(x-1)^2/10}\). Ponieważ \(X^4\ge0\), zawsze \(Y\ge5\), więc \(F_Y(y)=0\) dla \(y\le5\). Niech \(y>5\) i \(r=r(y)=\bigl(\tfrac{y-5}2\bigr)^{1/4}>0\). Wtedy
\[\{Y\le y\}=\Bigl\{X^4\le\tfrac{y-5}2\Bigr\}=\{-r\le X\le r\},\]
więc
\[F_Y(y)=P(-r\le X\le r)=\Phi\Bigl(\tfrac{r-1}{\sqrt5}\Bigr)-\Phi\Bigl(\tfrac{-r-1}{\sqrt5}\Bigr),\]
gdzie \(\Phi\) jest dystrybuantą rozkładu \(N(0,1)\). Różniczkujemy jako funkcję złożoną:
\[f_Y(y)=F_Y'(y)=r'(y)\bigl[f_X(r)+f_X(-r)\bigr],\qquad r'(y)=\tfrac14\Bigl(\tfrac{y-5}2\Bigr)^{-3/4}\cdot\tfrac12=\tfrac18\Bigl(\tfrac{y-5}2\Bigr)^{-3/4}.\]
Ostatecznie
\[f_Y(y)=\begin{cases}\dfrac1{8\sqrt{10\pi}}\Bigl(\dfrac{y-5}2\Bigr)^{-3/4}\Bigl[e^{-(r-1)^2/10}+e^{-(r+1)^2/10}\Bigr],&y>5,\\[6pt]0,&y\le5,\end{cases}\qquad r=\Bigl(\tfrac{y-5}2\Bigr)^{1/4}.\]
Ponieważ \((r\mp1)^2=r^2+1\mp2r\), a \(r^2=\sqrt{(y-5)/2}\), wynik można też zapisać jako
\[f_Y(y)=\frac1{4\sqrt{10\pi}}\Bigl(\frac{y-5}2\Bigr)^{-3/4}\exp\Bigl(-\frac{\sqrt{(y-5)/2}+1}{10}\Bigr)\cosh\Bigl(\frac r5\Bigr)\qquad\text{dla }y>5.\]</p>
<p class="note"><b>Kontrola.</b> Podstawienie \(y=5+2r^4\), \(dy=8r^3\,dr\) daje \(\int_5^\infty f_Y(y)\,dy=\int_0^\infty\bigl[f_X(r)+f_X(-r)\bigr]dr=\int_{-\infty}^\infty f_X(x)\,dx=1\). Przy \(y\to5^+\) gęstość dąży do nieskończoności jak \((y-5)^{-3/4}\), ale wykładnik jest większy od \(-1\), więc gęstość jest całkowalna.</p>`
  },
  {
    id: 15,
    group: "Wartość oczekiwana, wariancja, kowariancja, korelacja",
    tags: ["momenty rozkładu normalnego", "całkowanie przez części"],
    q: String.raw`<p>Zmienna losowa \(X\) ma rozkład normalny o wartości oczekiwanej \(a\) i wariancji \(\sigma^2\). Oblicz \(\mathbb EX^4\).</p>`,
    ans: String.raw`\(\mathbb EX^4=a^4+6a^2\sigma^2+3\sigma^4\)`,
    sol: String.raw`<p>Zapiszmy \(X=a+\sigma Z\), gdzie \(Z\sim N(0,1)\). Potrzebujemy momentów zmiennej \(Z\).</p>
<p><b>Momenty \(Z\).</b> Gęstość \(\varphi(z)=\tfrac1{\sqrt{2\pi}}e^{-z^2/2}\) jest parzysta, więc momenty nieparzyste są zerowe: \(\mathbb EZ=\mathbb EZ^3=0\). Ponadto \(\mathbb EZ^2=\operatorname{Var}Z=1\). Do \(\mathbb EZ^4\) użyjemy równości \(\varphi'(z)=-z\varphi(z)\) i całkowania przez części:
\[\mathbb EZ^4=\int_{-\infty}^\infty z^3\cdot z\varphi(z)\,dz=\int_{-\infty}^\infty z^3\bigl(-\varphi'(z)\bigr)dz=\Bigl[-z^3\varphi(z)\Bigr]_{-\infty}^\infty+\int_{-\infty}^\infty3z^2\varphi(z)\,dz=0+3\,\mathbb EZ^2=3.\]</p>
<p><b>Rozwinięcie dwumianowe.</b>
\[\mathbb EX^4=\mathbb E(a+\sigma Z)^4=a^4+4a^3\sigma\,\mathbb EZ+6a^2\sigma^2\,\mathbb EZ^2+4a\sigma^3\,\mathbb EZ^3+\sigma^4\,\mathbb EZ^4,\]
więc \(\mathbb EX^4=a^4+6a^2\sigma^2+3\sigma^4\).</p>
<p class="note"><b>Sprawdzenie.</b> Dla \(a=0\) dostajemy znany wzór \(\mathbb EX^4=3\sigma^4\). Dla danych z zadania 14 (\(a=1\), \(\sigma^2=5\)) wychodzi \(\mathbb EX^4=1+30+75=106\), a stąd \(\mathbb E(2X^4+5)=217\).</p>`
  },
  {
    id: 16,
    group: "Wartość oczekiwana, wariancja, kowariancja, korelacja",
    tags: ["rozkład Poissona", "funkcja tworząca momentów", "szereg wykładniczy"],
    q: String.raw`<p>Zmienna losowa \(X\) ma rozkład Poissona z parametrem \(2\). Oblicz wartość oczekiwaną i wariancję zmiennej losowej \(e^{3X}\).</p>`,
    ans: String.raw`\(\mathbb Ee^{3X}=e^{2(e^3-1)}\approx3{,}78\cdot10^{16}\); \(\operatorname{Var}e^{3X}=e^{2(e^6-1)}-e^{4(e^3-1)}\approx3{,}51\cdot10^{349}\)`,
    sol: String.raw`<p>Dla \(X\sim\mathrm{Poiss}(\lambda)\) i dowolnego \(t\in\mathbb R\), korzystając z szeregu funkcji wykładniczej:
\[\mathbb Ee^{tX}=\sum_{k=0}^\infty e^{tk}e^{-\lambda}\frac{\lambda^k}{k!}=e^{-\lambda}\sum_{k=0}^\infty\frac{(\lambda e^t)^k}{k!}=e^{-\lambda}e^{\lambda e^t}=e^{\lambda(e^t-1)}.\]
Przyjmujemy \(\lambda=2\).</p>
<p><b>Wartość oczekiwana</b> (dla \(t=3\)): \(\mathbb Ee^{3X}=e^{2(e^3-1)}\approx3{,}78\cdot10^{16}\).</p>
<p><b>Wariancja.</b> Ponieważ \(\bigl(e^{3X}\bigr)^2=e^{6X}\), bierzemy \(t=6\):
\[\operatorname{Var}e^{3X}=\mathbb Ee^{6X}-\bigl(\mathbb Ee^{3X}\bigr)^2=e^{2(e^6-1)}-e^{4(e^3-1)}\approx3{,}51\cdot10^{349}.\]</p>
<p class="note"><b>Komentarz.</b> Liczby są ogromne, bo \(e^{3X}\) rośnie bardzo szybko wraz z \(X\). O wyniku decydują rzadkie, ale duże wartości \(X\): składniki sumy \(\sum_ke^{3k}P(X=k)\) są największe w okolicy \(k\approx2e^3\approx40\), choć typowo \(X\approx2\). Drugi składnik wariancji, \(e^{4(e^3-1)}\approx1{,}43\cdot10^{33}\), jest przy pierwszym zupełnie pomijalny.</p>`
  },
  {
    id: 17,
    group: "Wartość oczekiwana, wariancja, kowariancja, korelacja",
    tags: ["rozkład geometryczny", "szereg geometryczny", "wariancja"],
    q: String.raw`<p>Rzucamy jednocześnie dwiema kostkami tak długo, aż na co najmniej jednej z nich wypadnie szóstka. Oblicz wartość oczekiwaną i wariancję liczby wykonanych rzutów.</p>`,
    ans: String.raw`\(\mathbb EN=\tfrac{36}{11}\approx3{,}27\), \(\operatorname{Var}N=\tfrac{900}{121}\approx7{,}44\)`,
    sol: String.raw`<p>W jednym rzucie parą kostek szóstka nie wypada na żadnej kostce z prawdopodobieństwem \(\left(\tfrac56\right)^2=\tfrac{25}{36}\). Zatem <b>sukces</b>, czyli co najmniej jedna szóstka, ma prawdopodobieństwo
\[p=1-\tfrac{25}{36}=\tfrac{11}{36},\qquad q=1-p=\tfrac{25}{36}.\]
Rzuty są niezależne, więc liczba rzutów \(N\) ma rozkład geometryczny: \(P(N=k)=q^{k-1}p\) dla \(k=1,2,\dots\)</p>
<p><b>Wartość oczekiwana.</b> Korzystamy z \(\sum_{k\ge1}kq^{k-1}=\tfrac1{(1-q)^2}\) (pochodna szeregu geometrycznego):
\[\mathbb EN=p\sum_{k=1}^\infty kq^{k-1}=\frac p{(1-q)^2}=\frac1p=\frac{36}{11}\approx3{,}27.\]</p>
<p><b>Wariancja.</b> Korzystamy z \(\sum_{k\ge2}k(k-1)q^{k-2}=\tfrac2{(1-q)^3}\) (druga pochodna):
\[\mathbb EN(N-1)=pq\sum_{k=2}^\infty k(k-1)q^{k-2}=\frac{2pq}{p^3}=\frac{2q}{p^2},\]
więc
\[\operatorname{Var}N=\mathbb EN(N-1)+\mathbb EN-(\mathbb EN)^2=\frac{2q}{p^2}+\frac1p-\frac1{p^2}=\frac{2q-(1-p)}{p^2}=\frac q{p^2}=\frac{25/36}{(11/36)^2}=\frac{900}{121}\approx7{,}44.\]</p>`
  },
  {
    id: 18,
    group: "Wartość oczekiwana, wariancja, kowariancja, korelacja",
    tags: ["rozkład łączny", "niezależność", "kowariancja"],
    q: String.raw`<p>Rozkład łączny zmiennych losowych \(X\) i \(Y\) jest dany wzorami
\[P(X=1,Y=-1)=\tfrac12,\quad P(X=1,Y=3)=\tfrac14,\quad P(X=2,Y=-1)=\tfrac15,\quad P(X=2,Y=3)=\tfrac1{20}.\]</p>
<p>(a) Czy zmienne \(X\) i \(Y\) są niezależne?</p>
<p>(b) Oblicz \(\mathbb EX\), \(\operatorname{Var}X\), \(\mathbb EY\) oraz \(\operatorname{Cov}(X,Y)\).</p>`,
    ans: String.raw`(a) nie są niezależne; (b) \(\mathbb EX=\tfrac54\), \(\operatorname{Var}X=\tfrac3{16}\), \(\mathbb EY=\tfrac15\), \(\operatorname{Cov}(X,Y)=-\tfrac1{10}\)`,
    sol: String.raw`<p>Zapiszmy rozkład w tabeli i dopiszmy rozkłady brzegowe, czyli sumy w wierszach i kolumnach:</p>
<div class="tw"><table>
<thead><tr><th></th><th class="c">\(Y=-1\)</th><th class="c">\(Y=3\)</th><th class="c">\(P(X=x)\)</th></tr></thead>
<tbody>
<tr><td>\(X=1\)</td><td class="c">\(\tfrac12\)</td><td class="c">\(\tfrac14\)</td><td class="c">\(\tfrac34\)</td></tr>
<tr><td>\(X=2\)</td><td class="c">\(\tfrac15\)</td><td class="c">\(\tfrac1{20}\)</td><td class="c">\(\tfrac14\)</td></tr>
<tr><td>\(P(Y=y)\)</td><td class="c">\(\tfrac7{10}\)</td><td class="c">\(\tfrac3{10}\)</td><td class="c">\(1\)</td></tr>
</tbody></table></div>
<p><b>a)</b> Gdyby \(X\) i \(Y\) były niezależne, każda komórka tabeli byłaby iloczynem odpowiednich sum brzegowych. Tymczasem
\[P(X=1)P(Y=-1)=\tfrac34\cdot\tfrac7{10}=\tfrac{21}{40}\ne\tfrac{20}{40}=\tfrac12=P(X=1,Y=-1),\]
więc zmienne \(X\) i \(Y\) <b>nie są niezależne</b>.</p>
<p><b>b)</b>
\[\mathbb EX=1\cdot\tfrac34+2\cdot\tfrac14=\tfrac54,\quad\mathbb EX^2=1\cdot\tfrac34+4\cdot\tfrac14=\tfrac74,\quad\operatorname{Var}X=\tfrac74-\tfrac{25}{16}=\tfrac3{16},\]
\[\mathbb EY=(-1)\cdot\tfrac7{10}+3\cdot\tfrac3{10}=\tfrac15.\]
Do kowariancji potrzebujemy \(\mathbb EXY\), które liczymy z rozkładu łącznego:
\[\mathbb EXY=1\cdot(-1)\cdot\tfrac12+1\cdot3\cdot\tfrac14+2\cdot(-1)\cdot\tfrac15+2\cdot3\cdot\tfrac1{20}=\frac{-10+15-8+6}{20}=\tfrac3{20},\]
\[\operatorname{Cov}(X,Y)=\mathbb EXY-\mathbb EX\,\mathbb EY=\tfrac3{20}-\tfrac54\cdot\tfrac15=\tfrac3{20}-\tfrac5{20}=-\tfrac1{10}.\]</p>
<p class="note"><b>Uwaga.</b> Zmienne niezależne mają kowariancję \(0\), więc niezerowa kowariancja to drugi, niezależny dowód odpowiedzi w części (a).</p>`
  },
  {
    id: 19,
    group: "Wartość oczekiwana, wariancja, kowariancja, korelacja",
    tags: ["korelacja", "dowód", "nierówność Czebyszewa"],
    q: String.raw`<p>(a) Podaj przykład zmiennych losowych, które są nieskorelowane, ale nie są niezależne.</p>
<p>(b) Udowodnij, że jeśli współczynnik korelacji zmiennych losowych \(X\) i \(Y\) wynosi \(1\), to istnieją liczby \(a>0\) i \(b\) takie, że \(X=aY+b\) prawie na pewno.</p>`,
    sol: String.raw`<p><b>a)</b> Niech \(X\) przyjmuje wartości \(-1,0,1\), każdą z prawdopodobieństwem \(\tfrac13\), i niech \(Y=X^2\). Zmienne są nieskorelowane: \(\mathbb EX=0\) oraz \(\mathbb EXY=\mathbb EX^3=\tfrac13(-1+0+1)=0\), więc \(\operatorname{Cov}(X,Y)=\mathbb EXY-\mathbb EX\,\mathbb EY=0-0=0\). Obie wariancje są dodatnie (\(\operatorname{Var}X=\tfrac23\), \(\operatorname{Var}Y=\tfrac29\)), więc współczynnik korelacji jest określony i wynosi \(0\).</p>
<p>Zmienne są zależne, bo \(Y\) jest funkcją \(X\). Na przykład
\[P(X=0,Y=1)=0\ne\tfrac13\cdot\tfrac23=P(X=0)P(Y=1).\]
Korelacja mierzy tylko zależność <b>liniową</b>, a tutaj zależność jest kwadratowa.</p>
<p><b>b)</b> Współczynnik korelacji \(\rho=\dfrac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}\) jest określony tylko wtedy, gdy \(\sigma_X^2=\operatorname{Var}X>0\) i \(\sigma_Y^2=\operatorname{Var}Y>0\). Rozważmy zmienną
\[W=\frac X{\sigma_X}-\frac Y{\sigma_Y}.\]
Z własności wariancji:
\[\operatorname{Var}W=\frac{\operatorname{Var}X}{\sigma_X^2}+\frac{\operatorname{Var}Y}{\sigma_Y^2}-2\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}=1+1-2\rho=0.\]
Zmienna o zerowej wariancji jest prawie na pewno stała. Rzeczywiście, z nierówności Czebyszewa \(P\bigl(|W-\mathbb EW|\ge\varepsilon\bigr)\le\operatorname{Var}W/\varepsilon^2=0\) dla każdego \(\varepsilon>0\), a stąd \(P(W\ne\mathbb EW)=P\bigl(\bigcup_n\{|W-\mathbb EW|\ge\tfrac1n\}\bigr)=0\). Oznaczając \(c=\mathbb EW\), mamy więc prawie na pewno
\[\frac X{\sigma_X}=\frac Y{\sigma_Y}+c\ \Longrightarrow\ X=\underbrace{\frac{\sigma_X}{\sigma_Y}}_{a}\,Y+\underbrace{c\,\sigma_X}_{b}.\]
Tutaj \(a=\tfrac{\sigma_X}{\sigma_Y}>0\), a \(b=c\sigma_X=\mathbb EX-a\,\mathbb EY\). \(\blacksquare\)</p>
<p class="note"><b>Uwaga.</b> Tak samo dla \(\rho=-1\): biorąc \(W=\tfrac X{\sigma_X}+\tfrac Y{\sigma_Y}\), dostajemy \(X=aY+b\) z \(a&lt;0\).</p>`
  },
  {
    id: 20,
    group: "Rozkłady łączne, niezależność, korelacja",
    tags: ["rozkład Poissona", "suma niezależnych zmiennych"],
    q: String.raw`<p>Zmienne losowe \(X\) i \(Y\) są niezależne i obie mają rozkład Poissona z parametrem \(3\). Oblicz:</p>
<p>(a) \(P(X+Y=7)\);</p>
<p>(b) \(P(XY\le1)\).</p>`,
    ans: String.raw`(a) \(\dfrac{6^7}{7!}e^{-6}=\dfrac{1944}{35}e^{-6}\approx0{,}1377\); (b) \(2e^{-3}+8e^{-6}\approx0{,}1194\)`,
    sol: String.raw`<p>Mamy \(P(X=k)=P(Y=k)=e^{-3}\dfrac{3^k}{k!}\) dla \(k=0,1,2,\dots\)</p>
<p><b>a)</b> Rozbijamy względem wartości \(X\) i korzystamy z niezależności:
\[P(X+Y=7)=\sum_{k=0}^7P(X=k)P(Y=7-k)=\sum_{k=0}^7e^{-3}\frac{3^k}{k!}\cdot e^{-3}\frac{3^{7-k}}{(7-k)!}=\frac{e^{-6}3^7}{7!}\sum_{k=0}^7\binom7k=\frac{e^{-6}3^72^7}{7!}.\]
Zatem \(P(X+Y=7)=\dfrac{e^{-6}6^7}{7!}=\dfrac{1944}{35}e^{-6}\approx0{,}1377\).</p>
<p>Ten rachunek pokazuje przy okazji ogólny fakt: suma niezależnych zmiennych Poissona z parametrami \(\lambda\) i \(\mu\) ma rozkład Poissona z parametrem \(\lambda+\mu\). Tutaj \(X+Y\sim\mathrm{Poiss}(6)\).</p>
<p><b>b)</b> Iloczyn \(XY\) jest nieujemną liczbą całkowitą, więc warunek \(XY\le1\) oznacza \(XY=0\) lub \(XY=1\). Ponadto
\[XY=0\iff X=0\text{ lub }Y=0,\qquad XY=1\iff X=1\text{ i }Y=1.\]
Te dwa zdarzenia są rozłączne, więc
\[P(XY\le1)=P(X=0\text{ lub }Y=0)+P(X=1)P(Y=1).\]
Pierwszy składnik liczymy ze zdarzenia przeciwnego:
\[P(X=0\text{ lub }Y=0)=1-P(X\ge1)P(Y\ge1)=1-\bigl(1-e^{-3}\bigr)^2=2e^{-3}-e^{-6},\]
a drugi wynosi \(\bigl(3e^{-3}\bigr)^2=9e^{-6}\). Razem:
\[P(XY\le1)=2e^{-3}-e^{-6}+9e^{-6}=2e^{-3}+8e^{-6}\approx0{,}1194.\]</p>`
  },
  {
    id: 21,
    group: "Rozkłady łączne, niezależność, korelacja",
    tags: ["rozkład wykładniczy", "brak pamięci", "prawdopodobieństwo całkowite (wersja ciągła)"],
    q: String.raw`<p>Zmienne losowe \(X\) i \(Y\) są niezależne. Zmienna \(X\) ma rozkład wykładniczy z parametrem \(2\), a \(Y\) rozkład wykładniczy z parametrem \(3\). Oblicz:</p>
<p>(a) \(P(X>Y)\);</p>
<p>(b) \(P(X-Y>t\mid X>Y)\) dla każdego \(t\in\mathbb R\).</p>`,
    ans: String.raw`(a) \(\tfrac35\); (b) \(1\) dla \(t\le0\), \(e^{-2t}\) dla \(t>0\)`,
    sol: String.raw`<p>Rozkład wykładniczy z parametrem \(\lambda\) ma gęstość \(\lambda e^{-\lambda x}\) dla \(x>0\) oraz ogon \(P(X>x)=e^{-\lambda x}\) dla \(x\ge0\). Zatem \(f_Y(y)=3e^{-3y}\) i \(P(X>x)=e^{-2x}\).</p>
<p><b>a)</b> Warunkujemy względem wartości \(Y\) i korzystamy z niezależności:
\[P(X>Y)=\int_0^\infty f_Y(y)\,P(X>y)\,dy=\int_0^\infty3e^{-3y}e^{-2y}\,dy=\frac35.\]
Ogólnie \(P(X>Y)=\dfrac\mu{\lambda+\mu}\), gdy \(X\sim\mathrm{Exp}(\lambda)\) i \(Y\sim\mathrm{Exp}(\mu)\).</p>
<p><b>b)</b> <b>Przypadek \(t\le0\).</b> Jeśli \(X>Y\), to \(X-Y>0\ge t\), więc \(\{X>Y\}\subset\{X-Y>t\}\) i prawdopodobieństwo warunkowe wynosi \(1\).</p>
<p><b>Przypadek \(t>0\).</b> Wtedy \(\{X-Y>t\}\cap\{X>Y\}=\{X>Y+t\}\) oraz
\[P(X>Y+t)=\int_0^\infty3e^{-3y}e^{-2(y+t)}\,dy=\frac35e^{-2t},\]
więc
\[P(X-Y>t\mid X>Y)=\frac{\frac35e^{-2t}}{\frac35}=e^{-2t}.\]
Ostatecznie
\[P(X-Y>t\mid X>Y)=\begin{cases}1,&t\le0,\\ e^{-2t},&t>0.\end{cases}\]</p>
<p class="note"><b>Interpretacja.</b> Pod warunkiem \(X>Y\) nadwyżka \(X-Y\) ma znowu rozkład wykładniczy z parametrem \(2\), czyli taki sam jak \(X\). To skutek braku pamięci rozkładu wykładniczego: skoro wiemy, że \(X\) przekroczyło wartość \(Y\), dalsze oczekiwanie zaczyna się od nowa.</p>`
  },
  {
    id: 22,
    group: "Rozkłady łączne, niezależność, korelacja",
    tags: ["gęstość łączna", "gęstości brzegowe", "kowariancja"],
    q: String.raw`<p>Wektor losowy \((X,Y)\) ma gęstość
\[f(x,y)=\begin{cases}8xy,&0\le x\le y\le1,\\ 0,&\text{w przeciwnym razie.}\end{cases}\]
Wyznacz gęstości brzegowe zmiennych \(X\) i \(Y\) oraz oblicz \(\operatorname{Cov}(X,Y)\).</p>`,
    ans: String.raw`\(f_X(x)=4x(1-x^2)\mathbf 1_{[0,1]}(x)\), \(f_Y(y)=4y^3\mathbf 1_{[0,1]}(y)\), \(\operatorname{Cov}(X,Y)=\tfrac4{225}\approx0{,}0178\)`,
    sol: String.raw`<p>Gęstość jest dodatnia na trójkącie \(\{0\le x\le y\le1\}\). Dla ustalonego \(x\) zmienna \(y\) przebiega przedział \([x,1]\), a dla ustalonego \(y\) zmienna \(x\) przebiega \([0,y]\). Kontrola: \(\int_0^1\int_0^y8xy\,dx\,dy=\int_0^14y^3\,dy=1\).</p>
<p><b>Gęstości brzegowe.</b> Dla \(x,y\in[0,1]\):
\[f_X(x)=\int_x^18xy\,dy=4x(1-x^2),\qquad f_Y(y)=\int_0^y8xy\,dx=4y^3,\]
a poza przedziałem \([0,1]\) obie gęstości są równe \(0\):
\[f_X(x)=4x(1-x^2)\mathbf 1_{[0,1]}(x),\qquad f_Y(y)=4y^3\mathbf 1_{[0,1]}(y).\]</p>
<p><b>Kowariancja.</b>
\[\mathbb EX=\int_0^1x\cdot4x(1-x^2)\,dx=4\Bigl(\tfrac13-\tfrac15\Bigr)=\tfrac8{15},\qquad\mathbb EY=\int_0^1y\cdot4y^3\,dy=\tfrac45,\]
\[\mathbb EXY=\int_0^1\int_0^yxy\cdot8xy\,dx\,dy=\int_0^18y^2\cdot\tfrac{y^3}3\,dy=\tfrac83\cdot\tfrac16=\tfrac49.\]
Stąd
\[\operatorname{Cov}(X,Y)=\mathbb EXY-\mathbb EX\,\mathbb EY=\tfrac49-\tfrac8{15}\cdot\tfrac45=\tfrac{100}{225}-\tfrac{96}{225}=\tfrac4{225}\approx0{,}0178.\]</p>
<p class="note"><b>Uwaga.</b> Zmienne \(X\) i \(Y\) nie są niezależne: na przykład \(f(x,y)=0\) dla \(0&lt;y&lt;x&lt;1\), choć tam \(f_X(x)f_Y(y)>0\). Kowariancja jest dodatnia, bo przy warunku \(X\le Y\) duże wartości \(Y\) dopuszczają duże wartości \(X\).</p>`
  },
  {
    id: 23,
    group: "Rozkłady łączne, niezależność, korelacja",
    tags: ["wariancja zerowa", "korelacja", "rozkład jednopunktowy"],
    q: String.raw`<p>O zmiennych losowych \(X\) i \(Y\) wiadomo, że \(\mathbb EX=1\), \(\operatorname{Var}X=2\), \(\mathbb EY=3\), \(\operatorname{Var}Y=2\) oraz \(\mathbb EXY=5\). Czy te informacje wystarczą do wyznaczenia rozkładu zmiennej \(X-Y\)?</p>`,
    ans: String.raw`tak: \(X-Y=-2\) prawie na pewno (rozkład jednopunktowy)`,
    sol: String.raw`<p>Zwykle kilka momentów nie wyznacza rozkładu, ale tutaj odpowiedź brzmi <b>tak</b>. Policzmy:
\[\operatorname{Cov}(X,Y)=\mathbb EXY-\mathbb EX\,\mathbb EY=5-1\cdot3=2,\]
\[\operatorname{Var}(X-Y)=\operatorname{Var}X+\operatorname{Var}Y-2\operatorname{Cov}(X,Y)=2+2-4=0,\qquad\mathbb E(X-Y)=1-3=-2.\]
Zmienna o zerowej wariancji jest prawie na pewno stała (z nierówności Czebyszewa, jak w zadaniu 19). Zatem
\[X-Y=-2\quad\text{prawie na pewno},\]
czyli \(X-Y\) ma rozkład jednopunktowy skupiony w \(-2\).</p>
<p class="note"><b>Uwaga.</b> Współczynnik korelacji wynosi \(\rho=\dfrac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}X\operatorname{Var}Y}}=\dfrac22=1\). Zgodnie z zadaniem 19 musi więc zachodzić \(X=aY+b\) z \(a>0\). Tutaj \(a=1\) i \(b=-2\).</p>`
  },
  {
    id: 24,
    group: "Twierdzenia graniczne",
    tags: ["centralne twierdzenie graniczne", "de Moivre–Laplace", "poprawka na ciągłość"],
    q: String.raw`<p>Rzucamy symetryczną kostką \(3600\) razy. Oblicz w przybliżeniu prawdopodobieństwo, że szóstka wypadnie co najmniej \(700\) razy. Wynik zapisz przy użyciu dystrybuanty \(\Phi\) standardowego rozkładu normalnego.</p>`,
    ans: String.raw`\(P(S\ge700)\approx1-\Phi\bigl(2\sqrt5\bigr)=1-\Phi(4{,}47)\approx3{,}9\cdot10^{-6}\)`,
    sol: String.raw`<p>Liczba szóstek \(S\) ma rozkład dwumianowy \(\mathrm{Bin}\bigl(3600,\tfrac16\bigr)\), czyli jest sumą \(3600\) niezależnych zmiennych zero-jedynkowych. Zatem
\[\mathbb ES=3600\cdot\tfrac16=600,\qquad\operatorname{Var}S=3600\cdot\tfrac16\cdot\tfrac56=500,\qquad\sqrt{\operatorname{Var}S}=10\sqrt5\approx22{,}36.\]
Z centralnego twierdzenia granicznego (twierdzenia de Moivre’a–Laplace’a) zmienna \(\dfrac{S-600}{\sqrt{500}}\) ma w przybliżeniu rozkład \(N(0,1)\), więc
\[P(S\ge700)=P\Bigl(\frac{S-600}{\sqrt{500}}\ge\frac{100}{10\sqrt5}\Bigr)\approx1-\Phi\bigl(2\sqrt5\bigr)=1-\Phi(4{,}47)\approx3{,}9\cdot10^{-6}.\]</p>
<p class="note"><b>Uwagi.</b></p>
<ul>
<li>Z poprawką na ciągłość, czyli \(P(S\ge700)=P(S>699{,}5)\), dostajemy \(1-\Phi\Bigl(\tfrac{99{,}5}{\sqrt{500}}\Bigr)=1-\Phi(4{,}45)\approx4{,}3\cdot10^{-6}\).</li>
<li>Dokładna wartość dla rozkładu dwumianowego to około \(6{,}4\cdot10^{-6}\). Tak daleko w ogonie (ponad \(4\) odchylenia standardowe od średniej) przybliżenie normalne oddaje tylko rząd wielkości. Wniosek i tak jest jasny: \(700\) szóstek to praktycznie niemożliwy wynik.</li>
</ul>`
  },
  {
    id: 25,
    group: "Twierdzenia graniczne",
    tags: ["przybliżenie Poissona", "prawdopodobieństwo warunkowe", "suma Poissonów"],
    q: String.raw`<p>W pewnej grze liczbowej losowanie odbywa się raz w tygodniu, a w każdym losowaniu niezależnie od siebie bierze udział \(60\,000\) osób. Każda z nich wygrywa w danym losowaniu z prawdopodobieństwem \(\tfrac1{30\,000}\).</p>
<p>(a) Oblicz w przybliżeniu prawdopodobieństwo, że w ciągu trzech ustalonych tygodni padną łącznie co najmniej dwie wygrane.</p>
<p>(b) Wiadomo, że w ciągu czterech ustalonych tygodni padło łącznie \(10\) wygranych. Oblicz w przybliżeniu prawdopodobieństwo, że w pierwszym z tych tygodni były dokładnie \(3\) wygrane.</p>`,
    ans: String.raw`(a) \(1-7e^{-6}\approx0{,}9826\); (b) \(\dbinom{10}3\dfrac{3^7}{4^{10}}=\dfrac{32\,805}{131\,072}\approx0{,}2503\)`,
    sol: String.raw`<p>Liczba wygranych w jednym tygodniu ma rozkład \(\mathrm{Bin}\bigl(60\,000,\tfrac1{30\,000}\bigr)\). Prób jest dużo, a prawdopodobieństwo sukcesu jest małe, więc stosujemy przybliżenie Poissona z parametrem \(\lambda=np=60\,000\cdot\tfrac1{30\,000}=2\). Liczby wygranych \(W_1,W_2,\dots\) w kolejnych tygodniach są niezależne.</p>
<p><b>a)</b> Łączna liczba wygranych w trzech tygodniach ma rozkład \(\mathrm{Bin}\bigl(180\,000,\tfrac1{30\,000}\bigr)\), czyli w przybliżeniu rozkład Poissona z parametrem \(6\). Zatem
\[P(W_1+W_2+W_3\ge2)\approx1-e^{-6}-6e^{-6}=1-7e^{-6}\approx0{,}9826.\]
Dokładny rachunek dla rozkładu dwumianowego daje \(0{,}98265\), więc przybliżenie jest bardzo dobre.</p>
<p><b>b)</b> Niech \(S=W_1+W_2+W_3+W_4\). W przybliżeniu Poissona zmienne \(W_1\sim\mathrm{Poiss}(2)\) i \(W_2+W_3+W_4\sim\mathrm{Poiss}(6)\) są niezależne, a \(S\sim\mathrm{Poiss}(8)\). Stąd
\[P(W_1=3\mid S=10)=\frac{P(W_1=3)\,P(W_2+W_3+W_4=7)}{P(S=10)}=\frac{e^{-2}\frac{2^3}{3!}\cdot e^{-6}\frac{6^7}{7!}}{e^{-8}\frac{8^{10}}{10!}}=\binom{10}3\Bigl(\tfrac14\Bigr)^3\Bigl(\tfrac34\Bigr)^7.\]
Zatem
\[P(W_1=3\mid S=10)\approx\binom{10}3\frac{3^7}{4^{10}}=\frac{32\,805}{131\,072}\approx0{,}2503.\]</p>
<p class="note"><b>Interpretacja.</b> Pod warunkiem \(S=10\) każda z dziesięciu wygranych niezależnie przypada na pierwszy tydzień z prawdopodobieństwem \(\tfrac14\), więc \(W_1\) ma rozkład \(\mathrm{Bin}\bigl(10,\tfrac14\bigr)\). Dokładny rachunek (rozkład hipergeometryczny) daje praktycznie to samo: \(0{,}25029\).</p>`
  },
  {
    id: 26,
    group: "Twierdzenia graniczne",
    tags: ["mocne prawo wielkich liczb", "zbieżność prawie na pewno", "dowód"],
    q: String.raw`<p>Zmienne losowe \(X_1,X_2,\dots\) są niezależne i mają ten sam rozkład jednostajny na przedziale \((-1,1)\). Udowodnij, że iloczyn \(X_1X_2\cdots X_n\) dąży do zera prawie na pewno.</p>`,
    sol: String.raw`<p>Wystarczy pokazać, że \(|X_1\cdots X_n|=|X_1|\cdots|X_n|\to0\) prawie na pewno. Zmienne \(|X_i|\) są niezależne i mają rozkład jednostajny na \((0,1)\). Z prawdopodobieństwem \(1\) wszystkie \(|X_i|\) są dodatnie, więc możemy logarytmować:
\[\ln|X_1\cdots X_n|=\sum_{i=1}^n\ln|X_i|.\]
Zmienne \(\ln|X_i|\) są niezależne, mają ten sam rozkład i są całkowalne:
\[\mathbb E\ln|X_i|=\int_0^1\ln u\,du=\bigl[u\ln u-u\bigr]_0^1=-1.\]
Z mocnego prawa wielkich liczb
\[\frac1n\sum_{i=1}^n\ln|X_i|\xrightarrow[n\to\infty]{}-1\quad\text{prawie na pewno},\]
więc prawie na pewno \(\sum_{i=1}^n\ln|X_i|=n\bigl(-1+o(1)\bigr)\to-\infty\). Zatem
\[|X_1\cdots X_n|=\exp\Bigl(\sum_{i=1}^n\ln|X_i|\Bigr)\to0\quad\text{prawie na pewno.}\ \blacksquare\]</p>
<p><b>Drugi sposób (bez prawa wielkich liczb).</b> Ponieważ \(|X_i|&lt;1\), ciąg \(P_n=|X_1\cdots X_n|\) jest malejący, więc ma granicę \(L\ge0\). Z niezależności \(\mathbb EP_n=\bigl(\mathbb E|X_1|\bigr)^n=2^{-n}\), a \(0\le L\le P_n\), więc \(0\le\mathbb EL\le2^{-n}\) dla każdego \(n\). Stąd \(\mathbb EL=0\), a nieujemna zmienna o zerowej wartości oczekiwanej jest prawie na pewno równa \(0\).</p>
<p class="note"><b>Uwaga.</b> Pierwszy sposób mówi więcej: iloczyn maleje wykładniczo, w przybliżeniu jak \(e^{-n}\).</p>`
  },
  {
    id: 27,
    group: "Twierdzenia graniczne",
    tags: ["mocne prawo wielkich liczb", "błądzenie losowe z dryfem", "dowód"],
    q: String.raw`<p>Zmienne losowe \(X_1,X_2,\dots\) są niezależne i mają ten sam rozkład: \(P(X_n=1)=\tfrac34\) oraz \(P(X_n=-1)=\tfrac14\). Udowodnij, że \(X_1+\dots+X_n\to+\infty\) prawie na pewno.</p>`,
    sol: String.raw`<p>Niech \(S_n=X_1+\dots+X_n\). Zmienne \(X_i\) są niezależne, mają ten sam rozkład i są ograniczone, więc całkowalne, a
\[\mathbb EX_1=1\cdot\tfrac34+(-1)\cdot\tfrac14=\tfrac12.\]
Z mocnego prawa wielkich liczb
\[\frac{S_n}n\xrightarrow[n\to\infty]{}\frac12\quad\text{prawie na pewno.}\]
Ustalmy \(\omega\) z tego zdarzenia pełnej miary. Istnieje \(N=N(\omega)\) takie, że \(\dfrac{S_n(\omega)}n>\dfrac14\) dla wszystkich \(n\ge N\). Wtedy
\[S_n(\omega)>\frac n4\xrightarrow[n\to\infty]{}\infty.\]
Zatem \(S_n\to+\infty\) prawie na pewno. \(\blacksquare\)</p>
<p class="note"><b>Interpretacja.</b> To błądzenie losowe z dryfem: krok w prawo jest bardziej prawdopodobny niż w lewo, więc położenie rośnie średnio o \(\tfrac12\) na krok. Losowe wahania są rzędu \(\sqrt n\), a dryf rzędu \(n\), więc dryf wygrywa.</p>`
  },
  {
    id: 28,
    group: "Twierdzenia graniczne",
    tags: ["mocne prawo wielkich liczb", "granica ilorazu", "rozkład wykładniczy"],
    q: String.raw`<p>Zmienne losowe \(X_1,X_2,\dots\) są niezależne i mają ten sam rozkład wykładniczy z parametrem \(3\). Udowodnij, że ciąg zmiennych losowych
\[\frac{X_1+\dots+X_n+3n}{X_1^2+\dots+X_n^2}\]
jest zbieżny prawie na pewno, i wyznacz jego granicę.</p>`,
    ans: String.raw`\(15\) (prawie na pewno)`,
    sol: String.raw`<p>Jak w zadaniu 21 przyjmujemy, że parametr oznacza intensywność, czyli gęstość \(3e^{-3x}\) dla \(x>0\). Wtedy
\[\mathbb EX_1=\tfrac13,\qquad\mathbb EX_1^2=\operatorname{Var}X_1+(\mathbb EX_1)^2=\tfrac19+\tfrac19=\tfrac29.\]
Zmienne \(X_i\) są dodatnie z prawdopodobieństwem \(1\), więc mianownik jest dodatni. Dzielimy licznik i mianownik przez \(n\):
\[\frac{X_1+\dots+X_n+3n}{X_1^2+\dots+X_n^2}=\frac{\frac1n\sum_{i=1}^nX_i+3}{\frac1n\sum_{i=1}^nX_i^2}.\]
Ciągi \((X_i)\) i \((X_i^2)\) składają się z niezależnych zmiennych o tym samym rozkładzie, a obie wartości oczekiwane są skończone. Z mocnego prawa wielkich liczb
\[\frac1n\sum_{i=1}^nX_i\xrightarrow[n\to\infty]{}\frac13\qquad\text{oraz}\qquad\frac1n\sum_{i=1}^nX_i^2\xrightarrow[n\to\infty]{}\frac29\]
prawie na pewno. Część wspólna dwóch zdarzeń o prawdopodobieństwie \(1\) też ma prawdopodobieństwo \(1\), więc obie zbieżności zachodzą jednocześnie prawie na pewno. Granica mianownika jest różna od zera, więc iloraz zbiega do ilorazu granic:
\[\frac{X_1+\dots+X_n+3n}{X_1^2+\dots+X_n^2}\xrightarrow[n\to\infty]{}\frac{\frac13+3}{\frac29}=\frac{10}3\cdot\frac92=15\quad\text{prawie na pewno.}\]</p>
<p class="note"><b>Uwaga.</b> Gdyby parametr oznaczał wartość oczekiwaną (\(\mathbb EX_1=3\)), to \(\mathbb EX_1^2=18\) i granica wyniosłaby \(\tfrac{3+3}{18}=\tfrac13\).</p>`
  },
  {
    id: 29,
    group: "Dystrybuanta empiryczna i statystyki pozycyjne",
    tags: ["dystrybuanta empiryczna", "kowariancja", "estymator nieobciążony"],
    q: String.raw`<p>Niech \(X_1,\dots,X_n\) będą niezależnymi zmiennymi losowymi o tym samym rozkładzie z dystrybuantą \(F\), a \(\hat F_n(t)=\tfrac1n\#\{i\le n:X_i\le t\}\) niech oznacza dystrybuantę empiryczną. Oblicz \(\mathbb E\hat F_n(x)\), \(\operatorname{Var}\hat F_n(x)\) oraz \(\operatorname{Cov}\bigl(\hat F_n(x),\hat F_n(y)\bigr)\).</p>`,
    ans: String.raw`\(\mathbb E\hat F_n(x)=F(x)\), \(\operatorname{Var}\hat F_n(x)=\dfrac{F(x)(1-F(x))}n\), \(\operatorname{Cov}\bigl(\hat F_n(x),\hat F_n(y)\bigr)=\dfrac{F(\min(x,y))-F(x)F(y)}n\)`,
    sol: String.raw`<p>Niech \(I_i(t)=\mathbf 1_{\{X_i\le t\}}\). Wtedy \(\hat F_n(t)=\tfrac1n\sum_{i=1}^nI_i(t)\). Dla ustalonego \(t\) zmienne \(I_1(t),\dots,I_n(t)\) są niezależne i mają rozkład zero-jedynkowy z \(P\bigl(I_i(t)=1\bigr)=P(X_i\le t)=F(t)\). Innymi słowy \(n\hat F_n(t)\sim\mathrm{Bin}\bigl(n,F(t)\bigr)\).</p>
<p><b>Wartość oczekiwana.</b> \(\mathbb EI_i(x)=F(x)\), więc \(\mathbb E\hat F_n(x)=F(x)\), czyli \(\hat F_n(x)\) jest nieobciążonym estymatorem \(F(x)\).</p>
<p><b>Wariancja.</b> \(\operatorname{Var}I_i(x)=F(x)\bigl(1-F(x)\bigr)\), a składniki są niezależne, więc
\[\operatorname{Var}\hat F_n(x)=\frac1{n^2}\cdot nF(x)\bigl(1-F(x)\bigr)=\frac{F(x)\bigl(1-F(x)\bigr)}n.\]</p>
<p><b>Kowariancja.</b> Z dwuliniowości kowariancji
\[\operatorname{Cov}\bigl(\hat F_n(x),\hat F_n(y)\bigr)=\frac1{n^2}\sum_{i=1}^n\sum_{j=1}^n\operatorname{Cov}\bigl(I_i(x),I_j(y)\bigr).\]
Dla \(i\ne j\) zmienne \(I_i(x)\) i \(I_j(y)\) są niezależne, więc ich kowariancja jest zerowa. Zostaje \(n\) składników z \(i=j\), a w nich \(I_i(x)I_i(y)=\mathbf 1_{\{X_i\le x,\,X_i\le y\}}=I_i(\min(x,y))\), więc
\[\operatorname{Cov}\bigl(I_i(x),I_i(y)\bigr)=\mathbb E\bigl[I_i(x)I_i(y)\bigr]-F(x)F(y)=F\bigl(\min(x,y)\bigr)-F(x)F(y).\]
Zatem
\[\operatorname{Cov}\bigl(\hat F_n(x),\hat F_n(y)\bigr)=\frac{F\bigl(\min(x,y)\bigr)-F(x)F(y)}n,\]
a w szczególności dla \(x\le y\) jest to \(\tfrac1nF(x)\bigl(1-F(y)\bigr)\). Dla \(x=y\) dostajemy z powrotem wzór na wariancję.</p>`
  },
  {
    id: 30,
    group: "Dystrybuanta empiryczna i statystyki pozycyjne",
    tags: ["centralne twierdzenie graniczne", "dystrybuanta empiryczna", "zbieżność według rozkładu"],
    q: String.raw`<p>Przy oznaczeniach z zadania 29 udowodnij, że ciąg zmiennych losowych \(\sqrt n\bigl(\hat F_n(x)-F(x)\bigr)\) jest zbieżny według rozkładu do rozkładu normalnego, i wyznacz parametry tego rozkładu.</p>`,
    ans: String.raw`\(N\bigl(0,\,F(x)(1-F(x))\bigr)\)`,
    sol: String.raw`<p>Z oznaczeniami z zadania 29:
\[\sqrt n\bigl(\hat F_n(x)-F(x)\bigr)=\frac{\sum_{i=1}^n\bigl(I_i(x)-F(x)\bigr)}{\sqrt n}.\]
Zmienne \(I_i(x)\) są niezależne, mają ten sam rozkład, średnią \(F(x)\) i skończoną wariancję \(\sigma^2=F(x)\bigl(1-F(x)\bigr)\).</p>
<p><b>Przypadek \(0&lt;F(x)&lt;1\).</b> Wtedy \(\sigma^2>0\) i z centralnego twierdzenia granicznego (Lindeberga–Lévy’ego)
\[\frac{\sum_{i=1}^n\bigl(I_i(x)-F(x)\bigr)}{\sigma\sqrt n}\xrightarrow{d}N(0,1),\]
więc
\[\sqrt n\bigl(\hat F_n(x)-F(x)\bigr)\xrightarrow{d}N\Bigl(0,\,F(x)\bigl(1-F(x)\bigr)\Bigr).\]</p>
<p><b>Przypadek \(F(x)\in\{0,1\}\).</b> Wtedy \(I_i(x)=F(x)\) prawie na pewno, więc ciąg jest stale równy \(0\). Granicą jest rozkład jednopunktowy w \(0\), czyli zdegenerowany rozkład normalny \(N(0,0)\), zgodny z tym samym wzorem.</p>
<p class="note"><b>Uwaga.</b> Wariancja \(F(x)\bigl(1-F(x)\bigr)\) jest największa, gdy \(F(x)=\tfrac12\), czyli w okolicy mediany. W ogonach rozkładu dystrybuanta empiryczna przybliża \(F\) dokładniej.</p>`
  },
  {
    id: 31,
    group: "Dystrybuanta empiryczna i statystyki pozycyjne",
    tags: ["statystyki pozycyjne", "dowód", "rozkład dwumianowy"],
    q: String.raw`<p>Niech \(X_1,\dots,X_n\) będzie próbą z rozkładu o dystrybuancie \(F\), a \(X_{1:n}\le X_{2:n}\le\dots\le X_{n:n}\) jej statystykami pozycyjnymi, czyli wartościami próby uporządkowanymi rosnąco. Udowodnij, że
\[P(X_{k:n}\le x)=\sum_{i=k}^n\binom ni F(x)^i\bigl(1-F(x)\bigr)^{n-i}.\]</p>`,
    sol: String.raw`<p>Ustalmy \(x\) i niech \(N_x=\#\{i\le n:X_i\le x\}\) będzie liczbą obserwacji nie większych od \(x\). Tak jak w zadaniu 29, \(N_x\sim\mathrm{Bin}\bigl(n,F(x)\bigr)\), bo \(N_x\) jest sumą \(n\) niezależnych wskaźników \(\mathbf 1_{\{X_i\le x\}}\), z których każdy jest równy \(1\) z prawdopodobieństwem \(F(x)\).</p>
<p>Kluczowa równość zdarzeń:
\[\{X_{k:n}\le x\}=\{N_x\ge k\}.\]
(\(\subset\)) Jeśli \(X_{k:n}\le x\), to \(X_{1:n}\le\dots\le X_{k:n}\le x\), więc co najmniej \(k\) obserwacji jest nie większych od \(x\).</p>
<p>(\(\supset\)) Jeśli \(N_x\ge k\), to obserwacje nie większe od \(x\) są najmniejszymi wartościami próby, więc po uporządkowaniu zajmują pierwsze \(N_x\) miejsc. Stąd \(X_{N_x:n}\le x\), a skoro \(k\le N_x\), to \(X_{k:n}\le X_{N_x:n}\le x\).</p>
<p>Zatem
\[P(X_{k:n}\le x)=P(N_x\ge k)=\sum_{i=k}^n\binom ni F(x)^i\bigl(1-F(x)\bigr)^{n-i}.\ \blacksquare\]</p>
<p class="note"><b>Szczególne przypadki.</b> Dla maksimum (\(k=n\)) dostajemy \(P(X_{n:n}\le x)=F(x)^n\), a dla minimum (\(k=1\)) \(P(X_{1:n}\le x)=1-\bigl(1-F(x)\bigr)^n\). Dowód nie wymaga ciągłości \(F\), więc remisy w próbie nie przeszkadzają.</p>`
  },
  {
    id: 32,
    group: "Niezależność warunkowa, wzór całkowity i wzór Bayesa",
    tags: ["wzór na prawdopodobieństwo całkowite", "wzór Bayesa", "niezależność warunkowa"],
    q: String.raw`<p>Mamy trzy skrzynie z towarem, a zawartość każdej pochodzi z innej z trzech fabryk. Pierwsza fabryka produkuje \(6\%\) wadliwych sztuk, druga \(10\%\), a trzecia \(4\%\). Wybieramy losowo jedną skrzynię (każdą z prawdopodobieństwem \(\tfrac13\)), a z niej losowo jedną sztukę towaru.</p>
<p>(a) Oblicz prawdopodobieństwo, że wylosowana sztuka jest wadliwa.</p>
<p>(b) Wylosowana sztuka okazała się wadliwa. Oblicz prawdopodobieństwo, że pochodzi z pierwszej fabryki.</p>
<p>(c) Wylosowana sztuka okazała się wadliwa. Wkładamy ją z powrotem do skrzyni i losujemy ponownie z tej samej skrzyni. Oblicz prawdopodobieństwo, że i tym razem wylosujemy sztukę wadliwą.</p>`,
    ans: String.raw`(a) \(\tfrac1{15}\approx0{,}0667\); (b) \(\tfrac3{10}\); (c) \(0{,}076=\tfrac{19}{250}\)`,
    sol: String.raw`<p>Niech \(S_i\) oznacza wybór skrzyni z fabryki \(i\), a \(W\) – wylosowanie sztuki wadliwej. Mamy \(P(S_i)=\tfrac13\) oraz
\[p_1=P(W\mid S_1)=0{,}06,\qquad p_2=P(W\mid S_2)=0{,}10,\qquad p_3=P(W\mid S_3)=0{,}04.\]</p>
<p><b>a)</b> Ze wzoru na prawdopodobieństwo całkowite:
\[P(W)=\tfrac13\bigl(0{,}06+0{,}10+0{,}04\bigr)=\tfrac{0{,}20}3=\tfrac1{15}\approx0{,}0667.\]</p>
<p><b>b)</b> Ze wzoru Bayesa:
\[P(S_1\mid W)=\frac{\frac13\cdot0{,}06}{\frac13\cdot0{,}20}=\frac3{10}.\]
Analogicznie \(P(S_2\mid W)=\tfrac12\) i \(P(S_3\mid W)=\tfrac15\).</p>
<p><b>c)</b> Niech \(W_1\) i \(W_2\) oznaczają wadliwość w pierwszym i drugim losowaniu. Sztuka wraca do skrzyni, więc przy ustalonej skrzyni \(i\) losowania są niezależne i każde daje sztukę wadliwą z prawdopodobieństwem \(p_i\). Zatem
\[P(W_2\mid W_1)=\frac{P(W_1\cap W_2)}{P(W_1)}=\frac{\frac13\sum_ip_i^2}{\frac13\sum_ip_i}=\frac{0{,}0036+0{,}0100+0{,}0016}{0{,}20}=\frac{0{,}0152}{0{,}20}=0{,}076=\frac{19}{250}.\]
Ten sam wynik daje uśrednienie po skrzyniach z prawdopodobieństwami z części (b): \(0{,}3\cdot0{,}06+0{,}5\cdot0{,}10+0{,}2\cdot0{,}04=0{,}076\).</p>
<p class="note"><b>Uwaga.</b> Wynik \(0{,}076\) jest większy niż \(\tfrac1{15}\approx0{,}067\) z części (a). Pierwsza wadliwa sztuka zwiększa szansę, że trafiliśmy na gorszą skrzynię (z fabryki 2), więc druga wadliwa staje się bardziej prawdopodobna. Losowania są niezależne tylko <b>przy ustalonej</b> skrzyni, a bez tej wiedzy już nie.</p>`
  },
  {
    id: 33,
    group: "Estymacja punktowa i przedziały ufności",
    tags: ["estymator największej wiarogodności", "rozkład wielomianowy"],
    q: String.raw`<p>Samoloty bombowe przelatują przez dwie linie obrony przeciwlotniczej. Każdy samolot, niezależnie od pozostałych, zostaje zestrzelony przez pierwszą linię z prawdopodobieństwem \(\theta\). Jeśli ją przetrwa, zostaje zestrzelony przez drugą linię również z prawdopodobieństwem \(\theta\). Wartość \(\theta\) jest nieznana. Spośród \(n=100\) samolotów pierwsza linia zestrzeliła \(K_1=40\), a druga kolejne \(K_2=20\).</p>
<p>(a) Wyznacz funkcję wiarogodności dla tych obserwacji, czyli \(P_\theta(K_1=40,K_2=20)\).</p>
<p>(b) Wyznacz estymator największej wiarogodności parametru \(\theta\).</p>`,
    ans: String.raw`(a) \(L(\theta)=\dfrac{100!}{40!\,20!\,40!}\theta^{60}(1-\theta)^{100}\); (b) \(\hat\theta=\tfrac38=0{,}375\)`,
    sol: String.raw`<p><b>a)</b> Każdy samolot kończy przelot na jeden z trzech sposobów:</p>
<ul>
<li>zestrzelony przez pierwszą linię: z prawdopodobieństwem \(\theta\);</li>
<li>zestrzelony przez drugą linię: z prawdopodobieństwem \((1-\theta)\theta\);</li>
<li>przetrwał obie linie: z prawdopodobieństwem \((1-\theta)^2\).</li>
</ul>
<p>Samoloty są niezależne, więc liczby samolotów w tych trzech grupach mają rozkład wielomianowy. Obie linie przetrwało \(100-40-20=40\) samolotów, więc
\[L(\theta)=P_\theta(K_1=40,K_2=20)=\frac{100!}{40!\,20!\,40!}\,\theta^{40}\bigl[(1-\theta)\theta\bigr]^{20}\bigl[(1-\theta)^2\bigr]^{40},\]
czyli
\[L(\theta)=\frac{100!}{40!\,20!\,40!}\,\theta^{60}(1-\theta)^{100},\qquad\theta\in[0,1].\]</p>
<p><b>b)</b> Maksymalizujemy \(L\), a wygodniej jego logarytm:
\[\ell(\theta)=\ln L(\theta)=\text{const}+60\ln\theta+100\ln(1-\theta),\qquad\ell'(\theta)=\frac{60}\theta-\frac{100}{1-\theta}.\]
Równanie \(\ell'(\theta)=0\) daje \(60(1-\theta)=100\theta\), czyli \(\theta=\tfrac{60}{160}\). Funkcja \(\ell\) jest wklęsła, bo \(\ell''(\theta)=-\dfrac{60}{\theta^2}-\dfrac{100}{(1-\theta)^2}&lt;0\), a \(L(0)=L(1)=0\), więc jest to maksimum:
\[\hat\theta=\tfrac38=0{,}375.\]</p>
<p class="note"><b>Wzór ogólny i interpretacja.</b> Dla dowolnych danych \(L(\theta)\propto\theta^{K_1+K_2}(1-\theta)^{2n-2K_1-K_2}\), więc \(\hat\theta=\dfrac{K_1+K_2}{2n-K_1}\). Mianownik to liczba wszystkich spotkań samolotów z liniami obrony (\(n=100\) samolotów spotyka pierwszą linię, a \(n-K_1=60\) drugą), a licznik to liczba zestrzeleń. Estymator jest więc po prostu częstością zestrzeleń: \(\tfrac{60}{160}\).</p>`
  },
  {
    id: 34,
    group: "Estymacja punktowa i przedziały ufności",
    tags: ["estymator największej wiarogodności", "rozkład normalny", "obciążenie", "nierówność Jensena"],
    q: String.raw`<p>Niech \(X_1,\dots,X_n\) będzie próbą z rozkładu normalnego \(N(0,\sigma^2)\), czyli o wartości oczekiwanej \(0\) i nieznanej wariancji.</p>
<p>(a) Wyznacz estymator największej wiarogodności \(\hat\sigma\) odchylenia standardowego \(\sigma\).</p>
<p>(b) Oblicz wartość oczekiwaną i wariancję \(\hat\sigma^2\).</p>`,
    ans: String.raw`(a) \(\hat\sigma=\sqrt{\tfrac1n\sum X_i^2}\); (b) \(\mathbb E\hat\sigma^2=\sigma^2\), \(\operatorname{Var}\hat\sigma^2=\dfrac{2\sigma^4}n\)`,
    sol: String.raw`<p><b>a)</b> Funkcja wiarogodności dla obserwacji \(x_1,\dots,x_n\) to
\[L(\sigma)=\prod_{i=1}^n\frac1{\sigma\sqrt{2\pi}}e^{-x_i^2/(2\sigma^2)}=(2\pi)^{-n/2}\sigma^{-n}\exp\Bigl(-\frac1{2\sigma^2}\sum_{i=1}^nx_i^2\Bigr),\qquad\sigma>0.\]
Logarytm i jego pochodna:
\[\ell(\sigma)=\text{const}-n\ln\sigma-\frac1{2\sigma^2}\sum_{i=1}^nx_i^2,\qquad\ell'(\sigma)=-\frac n\sigma+\frac1{\sigma^3}\sum_{i=1}^nx_i^2.\]
Równanie \(\ell'(\sigma)=0\) daje \(\sigma^2=\tfrac1n\sum x_i^2\). Pochodna jest dodatnia na lewo od tego punktu i ujemna na prawo, więc jest to maksimum. Zakładamy przy tym, że nie wszystkie \(x_i\) są zerami, co zachodzi z prawdopodobieństwem \(1\). Zatem
\[\hat\sigma=\sqrt{\frac1n\sum_{i=1}^nX_i^2}.\]
Dzielimy przez \(n\), a nie przez \(n-1\), bo średnia jest znana i równa \(0\).</p>
<p><b>b)</b> Mamy \(\hat\sigma^2=\tfrac1n\sum X_i^2\). Ponieważ \(\mathbb EX_i=0\), to \(\mathbb EX_i^2=\operatorname{Var}X_i=\sigma^2\). Z zadania 15 (dla \(a=0\)) \(\mathbb EX_i^4=3\sigma^4\), więc \(\operatorname{Var}X_i^2=3\sigma^4-\sigma^4=2\sigma^4\). Z niezależności:
\[\mathbb E\hat\sigma^2=\sigma^2,\qquad\operatorname{Var}\hat\sigma^2=\frac1{n^2}\cdot n\cdot2\sigma^4=\frac{2\sigma^4}n.\]
Estymator \(\hat\sigma^2\) jest więc nieobciążony, a jego wariancja dąży do zera, gdy \(n\to\infty\).</p>
<p class="note"><b>Uwaga.</b> Sam \(\hat\sigma\) jest już obciążony. Z ostrej nierówności Jensena \(\mathbb E\hat\sigma=\mathbb E\sqrt{\hat\sigma^2}&lt;\sqrt{\mathbb E\hat\sigma^2}=\sigma\).</p>`
  },
  {
    id: 35,
    group: "Estymacja punktowa i przedziały ufności",
    tags: ["funkcja ryzyka", "błąd średniokwadratowy", "porównanie estymatorów"],
    q: String.raw`<p>Wykonujemy \(n=8\) niezależnych doświadczeń, z których każde kończy się sukcesem z nieznanym prawdopodobieństwem \(\theta\) (schemat Bernoulliego). Niech \(K\) oznacza liczbę sukcesów. Porównujemy dwa estymatory:
\[\hat\theta_1=\frac Kn=\frac K8,\qquad\hat\theta_2=\frac{K+1}{n+2}=\frac{K+1}{10}.\]
Wyznacz ich funkcje ryzyka \(R_i(\theta)=\mathbb E_\theta\bigl(\hat\theta_i-\theta\bigr)^2\) dla \(i=1,2\).</p>`,
    ans: String.raw`\(R_1(\theta)=\dfrac{\theta(1-\theta)}8\), \(R_2(\theta)=\dfrac{1+4\theta(1-\theta)}{100}\); \(R_2&lt;R_1\) dla \(\theta\in\bigl(\tfrac12-\tfrac3{2\sqrt{17}},\tfrac12+\tfrac3{2\sqrt{17}}\bigr)\approx(0{,}136;0{,}864)\)`,
    sol: String.raw`<p>Mamy \(K\sim\mathrm{Bin}(8,\theta)\), więc \(\mathbb EK=8\theta\) i \(\operatorname{Var}K=8\theta(1-\theta)\). Skorzystamy z rozkładu błędu średniokwadratowego na wariancję i kwadrat obciążenia:
\[\mathbb E\bigl(\hat\theta-\theta\bigr)^2=\operatorname{Var}\hat\theta+\bigl(\mathbb E\hat\theta-\theta\bigr)^2.\]</p>
<p><b>Estymator \(\hat\theta_1\).</b> \(\mathbb E\hat\theta_1=\theta\), więc obciążenie jest zerowe i
\[R_1(\theta)=\frac{\operatorname{Var}K}{8^2}=\frac{8\theta(1-\theta)}{64}=\frac{\theta(1-\theta)}8.\]</p>
<p><b>Estymator \(\hat\theta_2\).</b>
\[\mathbb E\hat\theta_2=\frac{8\theta+1}{10},\qquad\mathbb E\hat\theta_2-\theta=\frac{1-2\theta}{10},\qquad\operatorname{Var}\hat\theta_2=\frac{8\theta(1-\theta)}{100},\]
więc
\[R_2(\theta)=\frac{8\theta(1-\theta)+(1-2\theta)^2}{100},\qquad\text{czyli}\qquad R_2(\theta)=\frac{1+4\theta(1-\theta)}{100}.\]</p>
<p><b>Porównanie.</b> Oznaczmy \(u=\theta(1-\theta)\in\bigl[0,\tfrac14\bigr]\). Nierówność \(R_2&lt;R_1\) oznacza \(\dfrac{1+4u}{100}&lt;\dfrac u8\), czyli \(u>\tfrac2{17}\). Rozwiązując \(\theta(1-\theta)>\tfrac2{17}\), dostajemy
\[R_2(\theta)&lt;R_1(\theta)\iff\theta\in\Bigl(\tfrac12-\tfrac3{2\sqrt{17}},\ \tfrac12+\tfrac3{2\sqrt{17}}\Bigr)\approx(0{,}136;\ 0{,}864).\]
Żaden estymator nie jest więc lepszy dla wszystkich \(\theta\): \(\hat\theta_2\) wygrywa w środku przedziału, a \(\hat\theta_1\) w pobliżu \(0\) i \(1\). Największe ryzyka to \(\max R_1=R_1\bigl(\tfrac12\bigr)=\tfrac1{32}\approx0{,}031\) oraz \(\max R_2=R_2\bigl(\tfrac12\bigr)=0{,}02\), więc w najgorszym przypadku lepszy jest \(\hat\theta_2\).</p>`
  },
  {
    id: 36,
    group: "Estymacja punktowa i przedziały ufności",
    tags: ["przedział ufności dla mediany", "statystyki pozycyjne", "metoda nieparametryczna"],
    q: String.raw`<p>Niech \(X_1,\dots,X_8\) będzie próbą z nieznanego rozkładu o ciągłej dystrybuancie i jedynej medianie \(m\), a \(X_{1:8}\le\dots\le X_{8:8}\) jej statystykami pozycyjnymi. Za przedział ufności dla \(m\) bierzemy \([X_{4:8},X_{5:8}]\). Oblicz poziom ufności tego przedziału, czyli \(P(X_{4:8}\le m\le X_{5:8})\).</p>`,
    ans: String.raw`\(\dbinom84\dfrac1{2^8}=\dfrac{35}{128}\approx0{,}273\)`,
    sol: String.raw`<p>Dystrybuanta \(F\) jest ciągła, a \(m\) jest medianą, więc \(F(m)=\tfrac12\) i \(P(X_i=m)=0\). Niech \(N=\#\{i\le8:X_i\le m\}\) będzie liczbą obserwacji nie większych od mediany. Wtedy \(N\sim\mathrm{Bin}\bigl(8,\tfrac12\bigr)\).</p>
<p><b>Lewy koniec.</b> Tak jak w zadaniu 31, \(\{X_{4:8}\le m\}=\{N\ge4\}\).</p>
<p><b>Prawy koniec.</b> Nierówność \(X_{5:8}&lt;m\) zachodzi wtedy i tylko wtedy, gdy co najmniej \(5\) obserwacji jest mniejszych od \(m\). Z prawdopodobieństwem \(1\) żadna obserwacja nie jest równa \(m\), więc liczba obserwacji mniejszych od \(m\) to \(N\). Stąd \(\{m\le X_{5:8}\}=\{N\le4\}\), z dokładnością do zdarzenia o prawdopodobieństwie \(0\).</p>
<p>Zatem
\[P(X_{4:8}\le m\le X_{5:8})=P(N=4)=\binom84\frac1{2^8}=\frac{70}{256}=\frac{35}{128}\approx0{,}273.\]</p>
<p class="note"><b>Uwaga.</b> To bardzo niski poziom ufności. Ten sam rachunek daje ogólnie \(P(X_{k:8}\le m\le X_{l:8})=\sum_{j=k}^{l-1}\binom8j2^{-8}\). Na przykład przedział \([X_{2:8},X_{7:8}]\) ma poziom ufności \(\tfrac{238}{256}\approx0{,}93\). Wynik nie zależy od rozkładu próby, więc jest to przykład metody nieparametrycznej.</p>`
  },
  {
    id: 37,
    group: "Estymacja punktowa i przedziały ufności",
    tags: ["estymator nieobciążony", "rozkład gamma", "zgodność"],
    q: String.raw`<p>Zmienne losowe \(X_1,\dots,X_n\) są niezależne i mają ten sam rozkład o gęstości
\[f_\theta(x)=\begin{cases}\dfrac1{120\,\theta^6}\,x^5e^{-x/\theta},&x>0,\\[4pt]0,&\text{w przeciwnym razie,}\end{cases}\]
gdzie \(\theta>0\) jest nieznanym parametrem. Wiadomo, że \(\mathbb E_\theta X_i=6\theta\) i \(\operatorname{Var}_\theta X_i=6\theta^2\). Wyznacz stałą \(c\), dla której statystyka \(T=\dfrac cn(X_1+\dots+X_n)\) jest nieobciążonym estymatorem \(\theta\), i oblicz wariancję \(T\).</p>`,
    ans: String.raw`\(c=\tfrac16\), \(\operatorname{Var}_\theta T=\dfrac{\theta^2}{6n}\)`,
    sol: String.raw`<p><b>Nieobciążoność.</b> Z liniowości wartości oczekiwanej
\[\mathbb E_\theta T=\frac cn\cdot n\cdot6\theta=6c\theta.\]
Warunek \(\mathbb E_\theta T=\theta\) dla każdego \(\theta>0\) daje
\[c=\tfrac16,\qquad\text{czyli}\qquad T=\frac{X_1+\dots+X_n}{6n}=\frac{\bar X}6.\]</p>
<p><b>Wariancja.</b> Zmienne są niezależne, więc wariancje się sumują:
\[\operatorname{Var}_\theta T=\frac1{36n^2}\cdot n\cdot6\theta^2=\frac{\theta^2}{6n}.\]
Wariancja dąży do zera, gdy \(n\to\infty\), więc \(T\) jest także estymatorem zgodnym w sensie średniokwadratowym.</p>
<p class="note"><b>Uwaga.</b> To rozkład gamma o parametrze kształtu \(6\) i parametrze skali \(\theta\) (stała \(120=5!\)). Stąd biorą się wzory \(\mathbb EX_i=6\theta\) i \(\operatorname{Var}X_i=6\theta^2\).</p>`
  },
  {
    id: 38,
    group: "Estymacja punktowa i przedziały ufności",
    tags: ["przedział ufności dla średniej", "znana wariancja", "kwantyl rozkładu normalnego"],
    q: String.raw`<p>Zważono \(10\) paczek białego sera i otrzymano następujące wyniki:
\[195,\ 198,\ 201,\ 191,\ 202,\ 194,\ 196,\ 198,\ 197,\ 198.\]</p>
<p>(a) Oblicz średnią i wariancję tej próby.</p>
<p>(b) Przyjmij, że jest to próba z rozkładu normalnego \(N(\mu,9)\) o nieznanej średniej \(\mu\) i wariancji \(9\). Wyznacz przedział ufności dla \(\mu\) na poziomie ufności \(1-\alpha=0{,}95\). Możesz przyjąć \(\Phi^{-1}(0{,}95)\approx1{,}645\) oraz \(\Phi^{-1}(0{,}975)\approx1{,}96\).</p>`,
    ans: String.raw`(a) \(\bar x=197\), wariancja \(9{,}4\) (wersja nieobciążona \(s^2=\tfrac{94}9\approx10{,}44\)); (b) \([195{,}14;\ 198{,}86]\)`,
    sol: String.raw`<p><b>a)</b> Suma wyników wynosi \(1970\), więc średnia to \(\bar x=\tfrac{1970}{10}=197\). Odchylenia od średniej to \(-2,1,4,-6,5,-3,-1,1,0,1\), a suma ich kwadratów:
\[\sum_{i=1}^{10}(x_i-\bar x)^2=4+1+16+36+25+9+1+1+0+1=94.\]
Stąd wariancja z próby \(\tfrac1{10}\sum(x_i-\bar x)^2=9{,}4\), a jej wersja nieobciążona, dzielona przez \(n-1\):
\[s^2=\frac19\sum_{i=1}^{10}(x_i-\bar x)^2=\frac{94}9\approx10{,}44.\]
Zależnie od definicji przyjętej na zajęciach wariancją próby nazywa się jedną z tych dwóch wielkości.</p>
<p><b>b)</b> Wariancja jest znana, \(\sigma^2=9\), więc \(\bar X\sim N\bigl(\mu,\tfrac9{10}\bigr)\) i
\[Z=\frac{\bar X-\mu}{3/\sqrt{10}}\sim N(0,1).\]
Przedział dwustronny na poziomie \(0{,}95\) wymaga kwantyla \(\Phi^{-1}(0{,}975)\approx1{,}96\), bo \(P(-1{,}96\le Z\le1{,}96)=0{,}95\). Przekształcając tę nierówność względem \(\mu\), dostajemy przedział
\[\Bigl[\bar x-1{,}96\cdot\frac3{\sqrt{10}},\ \bar x+1{,}96\cdot\frac3{\sqrt{10}}\Bigr]=\bigl[197-1{,}86;\ 197+1{,}86\bigr]\approx[195{,}14;\ 198{,}86].\]</p>
<p class="note"><b>Uwaga.</b> Kwantyl \(1{,}645=\Phi^{-1}(0{,}95)\) byłby właściwy dla przedziału jednostronnego na poziomie \(0{,}95\) albo dwustronnego na poziomie \(0{,}90\). W przedziale dwustronnym na każdy z ogonów przypada \(\tfrac\alpha2=0{,}025\).</p>`
  },
  {
    id: 39,
    group: "Estymacja punktowa i przedziały ufności",
    tags: ["wektor gaussowski", "niezależność średniej i wariancji z próby", "dowód"],
    q: String.raw`<p>Zmienne losowe \(X_1,\dots,X_n\) są niezależne i mają ten sam rozkład \(N(\mu,\sigma^2)\). Udowodnij, że statystyki
\[\bar X=\frac1n\sum_{i=1}^nX_i\qquad\text{oraz}\qquad S^2=\frac1{n-1}\sum_{i=1}^n\bigl(X_i-\bar X\bigr)^2\]
są niezależne.</p>
<p><i>Wskazówka:</i> kombinacje liniowe niezależnych zmiennych normalnych są niezależne, jeśli są nieskorelowane.</p>`,
    sol: String.raw`<p>Niech \(D_j=X_j-\bar X\) dla \(j=1,\dots,n\). Zmienna \(S^2\) jest funkcją wektora \(D=(D_1,\dots,D_n)\):
\[S^2=\frac1{n-1}\sum_{j=1}^nD_j^2.\]
Wystarczy więc pokazać, że \(\bar X\) jest niezależna od całego wektora \(D\), bo funkcje niezależnych zmiennych (lub wektorów) losowych są niezależne.</p>
<p><b>Krok 1: wszystkie te zmienne są kombinacjami liniowymi \(X_1,\dots,X_n\).</b>
\[\bar X=\sum_{i=1}^n\tfrac1nX_i,\qquad D_j=\sum_{i=1}^n\Bigl(\delta_{ij}-\tfrac1n\Bigr)X_i,\]
gdzie \(\delta_{ij}=1\) dla \(i=j\) i \(\delta_{ij}=0\) w przeciwnym razie. Zatem \((\bar X,D_1,\dots,D_n)\) jest wektorem gaussowskim.</p>
<p><b>Krok 2: brak korelacji.</b> Z niezależności zmiennych \(X_i\) mamy \(\operatorname{Cov}(\bar X,X_j)=\tfrac1n\operatorname{Var}X_j=\tfrac{\sigma^2}n\) oraz \(\operatorname{Var}\bar X=\tfrac{\sigma^2}n\), więc dla każdego \(j\)
\[\operatorname{Cov}(\bar X,D_j)=\operatorname{Cov}(\bar X,X_j)-\operatorname{Var}\bar X=\frac{\sigma^2}n-\frac{\sigma^2}n=0.\]</p>
<p><b>Krok 3: niezależność.</b> Ze wskazówki, w wersji dla wektorów, z kroków 1 i 2 wynika, że \(\bar X\) jest niezależna od wektora \(D\). Uzasadnienie: funkcja charakterystyczna wektora gaussowskiego zależy tylko od wektora średnich i macierzy kowariancji. Tutaj macierz kowariancji wektora \((\bar X,D)\) jest blokowo-diagonalna, więc dla wszystkich \(s,t_1,\dots,t_n\)
\[\mathbb E\exp\Bigl(i\Bigl(s\bar X+\sum_jt_jD_j\Bigr)\Bigr)=\mathbb Ee^{is\bar X}\cdot\mathbb E\exp\Bigl(i\sum_jt_jD_j\Bigr),\]
a to oznacza niezależność \(\bar X\) i \(D\). Ponieważ \(S^2\) jest funkcją \(D\), zmienne \(\bar X\) i \(S^2\) są niezależne. \(\blacksquare\)</p>
<p class="note"><b>Uwaga.</b> Założenie normalności jest kluczowe. Na przykład dla próby z rozkładu wykładniczego \(\bar X\) i \(S^2\) są wyraźnie skorelowane: w symulacji dla \(n=5\) współczynnik korelacji wynosi około \(0{,}69\). Niezależność \(\bar X\) i \(S^2\) jest wręcz charakteryzacją rozkładu normalnego.</p>`
  },
  {
    id: 40,
    group: "Estymacja punktowa i przedziały ufności",
    tags: ["estymator największej wiarogodności", "rozkład hipergeometryczny", "metoda Lincolna–Petersena"],
    q: String.raw`<p>W jeziorze żyje nieznana liczba \(N\) ryb. Aby ją oszacować, odłowiono \(m\) ryb, oznakowano je i wypuszczono z powrotem. Po pewnym czasie złowiono \(n\) ryb i okazało się, że \(k\) spośród nich jest oznakowanych. Wyznacz oszacowanie \(N\) metodą największej wiarogodności.</p>`,
    ans: String.raw`\(\hat N=\Bigl\lfloor\dfrac{mn}k\Bigr\rfloor\) (dla \(k\ge1\)); zwykle \(\hat N=\dfrac{mn}k\)`,
    sol: String.raw`<p>Zakładamy, że między połowami liczba ryb się nie zmienia, oznakowane ryby wymieszały się z pozostałymi, a drugi połów to losowy wybór \(n\) różnych ryb spośród \(N\), w którym każdy zestaw jest jednakowo prawdopodobny. Wtedy liczba oznakowanych ryb w drugim połowie ma rozkład hipergeometryczny, a wiarogodność obserwacji \(k\) wynosi
\[L(N)=\frac{\binom mk\binom{N-m}{n-k}}{\binom Nn}.\]
Jest ona dodatnia dla całkowitych \(N\ge m+n-k\). Dla mniejszych \(N\) nie dałoby się złowić \(n-k\) ryb nieoznakowanych.</p>
<p><b>Szukanie maksimum.</b> \(N\) jest liczbą całkowitą, więc zamiast pochodnej badamy iloraz kolejnych wartości. Korzystając z \(\binom ar\big/\binom{a-1}r=\dfrac a{a-r}\) oraz \(\binom{N-1}n\big/\binom Nn=\dfrac{N-n}N\), dla \(N>m+n-k\) dostajemy
\[\frac{L(N)}{L(N-1)}=\frac{N-m}{N-m-n+k}\cdot\frac{N-n}N=\frac{(N-m)(N-n)}{N(N-m-n+k)}.\]
Stąd
\[\frac{L(N)}{L(N-1)}\ge1\iff N^2-(m+n)N+mn\ge N^2-(m+n)N+kN\iff N\le\frac{mn}k.\]
Zatem funkcja \(L\) nie maleje, dopóki \(N\le\tfrac{mn}k\), a dalej maleje. Maksimum przypada w punkcie
\[\hat N=\Bigl\lfloor\frac{mn}k\Bigr\rfloor\qquad(k\ge1).\]
Jest to dopuszczalna wartość, bo \(\dfrac{mn}k-(m+n-k)=\dfrac{(m-k)(n-k)}k\ge0\).</p>
<p class="note"><b>Uwagi.</b></p>
<ul>
<li>Gdy \(\tfrac{mn}k\) jest liczbą całkowitą, iloraz w tym punkcie wynosi \(1\), więc \(L\bigl(\tfrac{mn}k\bigr)=L\bigl(\tfrac{mn}k-1\bigr)\) i obie wartości są estymatorami największej wiarogodności. Zwykle przyjmuje się \(\hat N=\tfrac{mn}k\).</li>
<li>Interpretacja: odsetek oznakowanych ryb w połowie powinien być bliski odsetkowi w całym jeziorze, czyli \(\tfrac kn\approx\tfrac mN\), skąd \(N\approx\tfrac{mn}k\). To tzw. estymator Lincolna–Petersena.</li>
<li>Jeśli \(k=0\), iloraz jest zawsze większy od \(1\), więc wiarogodność rośnie bez końca i estymator największej wiarogodności nie istnieje. Dane sugerują wtedy tylko, że \(N\) jest bardzo duże.</li>
<li>Przykład: dla \(m=100\), \(n=50\), \(k=7\) dostajemy \(\hat N=\lfloor714{,}29\rfloor=714\).</li>
</ul>`
  },
  {
    id: 41,
    group: "Estymacja punktowa i przedziały ufności",
    tags: ["rozkład jednostajny", "estymatory nieobciążone", "porównanie wariancji", "maksimum próby"],
    q: String.raw`<p>Niech \(X_1,\dots,X_n\) będzie próbą z rozkładu jednostajnego na przedziale \((0,\theta)\), gdzie \(\theta>0\). Rozważamy dwa estymatory parametru \(\theta\):
\[T=\frac{n+1}n\max\{X_1,\dots,X_n\},\qquad S=2\bar X.\]
Czy są one nieobciążone? Który z nich ma mniejszą wariancję?</p>`,
    ans: String.raw`oba nieobciążone; \(\operatorname{Var}T=\dfrac{\theta^2}{n(n+2)}\), \(\operatorname{Var}S=\dfrac{\theta^2}{3n}\); dla \(n\ge2\) mniejszą wariancję ma \(T\)`,
    sol: String.raw`<p><b>Estymator \(S\).</b> Dla \(X_i\sim U(0,\theta)\) mamy \(\mathbb EX_i=\tfrac\theta2\) i \(\operatorname{Var}X_i=\tfrac{\theta^2}{12}\). Zatem
\[\mathbb ES=2\cdot\frac\theta2=\theta,\qquad\operatorname{Var}S=4\operatorname{Var}\bar X=4\cdot\frac{\theta^2}{12n}=\frac{\theta^2}{3n}.\]</p>
<p><b>Estymator \(T\).</b> Niech \(M=\max\{X_1,\dots,X_n\}\). Z niezależności, dla \(0\le x\le\theta\):
\[P(M\le x)=P(X_1\le x,\dots,X_n\le x)=\Bigl(\frac x\theta\Bigr)^n,\qquad\text{więc}\qquad f_M(x)=\frac{nx^{n-1}}{\theta^n}\ \text{na }(0,\theta).\]
Momenty maksimum:
\[\mathbb EM=\int_0^\theta x\cdot\frac{nx^{n-1}}{\theta^n}\,dx=\frac n{n+1}\theta,\qquad\mathbb EM^2=\int_0^\theta x^2\cdot\frac{nx^{n-1}}{\theta^n}\,dx=\frac n{n+2}\theta^2,\]
\[\operatorname{Var}M=\frac n{n+2}\theta^2-\frac{n^2}{(n+1)^2}\theta^2=\frac{n\theta^2}{(n+1)^2(n+2)},\]
bo \((n+1)^2-n(n+2)=1\). Stąd
\[\mathbb ET=\frac{n+1}n\cdot\frac n{n+1}\theta=\theta,\qquad\operatorname{Var}T=\frac{(n+1)^2}{n^2}\cdot\frac{n\theta^2}{(n+1)^2(n+2)}=\frac{\theta^2}{n(n+2)}.\]</p>
<p><b>Odpowiedź.</b> Oba estymatory są <b>nieobciążone</b>: \(\mathbb ET=\mathbb ES=\theta\). Ich wariancje to
\[\operatorname{Var}T=\frac{\theta^2}{n(n+2)}\qquad\text{oraz}\qquad\operatorname{Var}S=\frac{\theta^2}{3n}.\]
Ponieważ \(n+2\ge3\), zawsze \(\operatorname{Var}T\le\operatorname{Var}S\), a równość zachodzi tylko dla \(n=1\), kiedy \(T=S=2X_1\). Dla \(n\ge2\) estymator \(T\) ma <b>mniejszą wariancję</b>, a stosunek wariancji wynosi \(\dfrac{\operatorname{Var}S}{\operatorname{Var}T}=\dfrac{n+2}3\). Na przykład dla \(n=10\) wariancja \(T\) jest \(4\) razy mniejsza.</p>
<p class="note"><b>Uwagi.</b></p>
<ul>
<li>Wariancja \(T\) maleje jak \(\tfrac1{n^2}\), a wariancja \(S\) tylko jak \(\tfrac1n\). Maksimum niesie dużo więcej informacji o \(\theta\), bo \(\theta\) jest prawym końcem przedziału, a największa obserwacja leży tuż pod nim.</li>
<li>Estymator \(S\) może dać wynik absurdalny, mniejszy od jednej z obserwacji. Na przykład dla próby \(0{,}1;\ 0{,}1;\ 0{,}9\) mamy \(S=2\cdot\tfrac{1{,}1}3\approx0{,}73&lt;0{,}9\), choć na pewno \(\theta>0{,}9\). Estymator \(T\) zawsze spełnia \(T>\max X_i\).</li>
</ul>`
  }
];
