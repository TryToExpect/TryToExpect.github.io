(window.THEORY = window.THEORY || {})['matura-3'] = String.raw`
<h3>Pojęcie funkcji, dziedzina, zbiór wartości, własności</h3>
<div class="bx def"><span class="t">Definicja</span>
<p><b>Funkcja</b> \(f:X\to Y\) przyporządkowuje każdemu elementowi \(x\) zbioru \(X\) (dziedziny \(D_f\)) dokładnie jeden element \(f(x)\in Y\). <b>Zbiór wartości</b> to \(\{f(x):x\in D_f\}\). Wykres to zbiór punktów \((x,f(x))\); każda prosta pionowa przecina go w co najwyżej jednym punkcie. <b>Miejsce zerowe</b>: \(f(x)=0\).</p>
</div>
<div class="bx thm"><span class="t">Własności funkcji</span>
<ul>
<li><b>Rosnąca</b> w zbiorze \(A\): dla \(x_1&lt;x_2\) w \(A\) mamy \(f(x_1)&lt;f(x_2)\); <b>malejąca</b>: \(f(x_1)>f(x_2)\); <b>niemalejąca</b>: \(\le\); <b>nierosnąca</b>: \(\ge\); <b>stała</b>: \(f(x_1)=f(x_2)\).</li>
<li><b>Parzysta:</b> \(f(-x)=f(x)\) dla \(x\in D_f\) (wykres symetryczny względem osi \(Oy\)). <b>Nieparzysta:</b> \(f(-x)=-f(x)\) (symetria względem początku układu). Dziedzina musi być symetryczna względem \(0\).</li>
<li><b>Okresowa</b> z okresem \(T>0\): \(f(x+T)=f(x)\).</li>
<li><b>Różnowartościowa:</b> różnym argumentom odpowiadają różne wartości. Tylko taka funkcja ma <b>funkcję odwrotną</b> \(f^{-1}\) (wykresy \(f\) i \(f^{-1}\) są symetryczne względem prostej \(y=x\)).</li>
<li><b>Wartość największa (najmniejsza)</b> w zbiorze: \(f(x_0)\ge f(x)\) (\(\le\)) dla wszystkich \(x\) z tego zbioru. <b>Ograniczona:</b> \(|f(x)|\le M\).</li>
<li><b>Złożenie:</b> \((f\circ g)(x)=f(g(x))\), o ile wartości \(g\) należą do dziedziny \(f\).</li>
</ul>
</div>
<div class="bx met"><span class="t">Wyznaczanie dziedziny</span>
<p>Mianownik \(\ne0\); pod pierwiastkiem stopnia parzystego wyrażenie \(\ge0\); pod logarytmem wyrażenie \(>0\) (i podstawa dodatnia, \(\ne1\)); tangens: \(x\ne\tfrac\pi2+k\pi\). Dziedzinę określamy <b>przed</b> upraszczaniem wzoru: funkcje \(\dfrac{x^2-1}{x-1}\) i \(x+1\) mają różne dziedziny.</p>
</div>

<h3>Funkcja liniowa i kwadratowa</h3>
<div class="bx def"><span class="t">Funkcja liniowa \(f(x)=ax+b\)</span>
<p>Wykres to prosta; \(a=\operatorname{tg}\alpha\) (współczynnik kierunkowy), \(b=f(0)\). Dla \(a>0\) rosnąca, \(a&lt;0\) malejąca, \(a=0\) stała. Miejsce zerowe \(x_0=-\tfrac ba\). Proste \(y=a_1x+b_1\) i \(y=a_2x+b_2\): równoległe \(\iff a_1=a_2\), prostopadłe \(\iff a_1a_2=-1\).</p>
</div>
<div class="bx def"><span class="t">Funkcja kwadratowa \(f(x)=ax^2+bx+c\), \(a\ne0\)</span>
<ul>
<li><b>Postać ogólna</b> \(ax^2+bx+c\); <b>kanoniczna</b> \(a(x-p)^2+q\); <b>iloczynowa</b> \(a(x-x_1)(x-x_2)\) (gdy \(\Delta\ge0\)).</li>
<li><b>Wierzchołek</b> \(W=(p,q)\): \(p=-\dfrac b{2a}\), \(q=-\dfrac\Delta{4a}=f(p)\). Oś symetrii \(x=p\).</li>
<li>\(a>0\): ramiona w górę, \(f\) maleje na \((-\infty,p]\), rośnie na \([p,\infty)\), wartość najmniejsza \(q\), zbiór wartości \([q,\infty)\). \(a&lt;0\): ramiona w dół, wartość największa \(q\), zbiór wartości \((-\infty,q]\).</li>
</ul>
</div>
<div class="bx met"><span class="t">Największa i najmniejsza wartość w przedziale \([m,n]\)</span>
<p>Jeśli \(p\in[m,n]\), to wartość ekstremalna w wierzchołku, a drugą wartość ekstremalną znajdziemy na jednym z końców (porównaj \(f(m)\) i \(f(n)\)). Jeśli \(p\notin[m,n]\), funkcja jest monotoniczna w \([m,n]\) i wartości ekstremalne są na końcach.</p>
</div>
<div class="bx met"><span class="t">Zadania z parametrem (położenie pierwiastków)</span>
<p>Zamień opis słowny na warunki: liczba pierwiastków – znak \(\Delta\); ich znaki – wzory Viète’a (\(x_1x_2\), \(x_1+x_2\)); położenie względem liczby \(p\) – znak \(f(p)\) i położenie wierzchołka; warunki typu \((x_1-x_2)^2\le c\) – \(\dfrac\Delta{a^2}\le c\). Na koniec wyznacz <b>część wspólną</b> wszystkich warunków. Przy współczynniku \(a\) zależnym od parametru rozważ osobno przypadek \(a=0\).</p>
</div>

<h3>Funkcja wymierna (homograficzna)</h3>
<div class="bx def"><span class="t">Funkcja \(f(x)=\dfrac ax\), \(a\ne0\)</span>
<p>\(D=\mathbb R\setminus\{0\}\), nieparzysta; wykres – hiperbola z asymptotami \(x=0\) i \(y=0\). Dla \(a>0\) wykres w I i III ćwiartce (funkcja malejąca w każdym z przedziałów \((-\infty,0)\), \((0,\infty)\)), dla \(a&lt;0\) w II i IV (rosnąca w każdym).</p>
</div>
<div class="bx def"><span class="t">Funkcja homograficzna \(f(x)=\dfrac{ax+b}{cx+d}\), \(c\ne0\), \(ad-bc\ne0\)</span>
<p>Po wydzieleniu części całkowitej: \(f(x)=\dfrac k{x-p}+q\). Wykres to hiperbola \(y=\tfrac kx\) przesunięta o wektor \([p,q]\); asymptoty: \(x=p\) (pionowa), \(y=q\) (pozioma). Dziedzina \(\mathbb R\setminus\{p\}\), zbiór wartości \(\mathbb R\setminus\{q\}\).</p>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(f(x)=\dfrac{2x+1}{x-3}=\dfrac{2(x-3)+7}{x-3}=2+\dfrac7{x-3}\). Asymptoty: \(x=3\) i \(y=2\); \(k=7>0\), więc \(f\) maleje w \((-\infty,3)\) i w \((3,\infty)\).</p>
</div>
<p>Funkcje potęgowe: \(x^n\) dla \(n\) parzystego – parzysta, wartości \([0,\infty)\); dla \(n\) nieparzystego – nieparzysta, rosnąca, wartości \(\mathbb R\); \(\sqrt x\) – rosnąca, \(D=[0,\infty)\).</p>

<h3>Funkcja wykładnicza i logarytmiczna, równania i nierówności</h3>
<div class="bx def"><span class="t">Funkcja wykładnicza \(f(x)=a^x\), \(a>0\), \(a\ne1\)</span>
<ul>
<li>\(D=\mathbb R\), zbiór wartości \((0,\infty)\), przechodzi przez \((0,1)\), asymptota pozioma \(y=0\); \(a>1\): rosnąca, \(0&lt;a&lt;1\): malejąca. Brak miejsc zerowych.</li>
<li><b>Równania:</b> \(a^{f(x)}=a^{g(x)}\iff f(x)=g(x)\). <b>Nierówności:</b> dla \(a>1\): \(a^{f}&lt;a^{g}\iff f&lt;g\); dla \(0&lt;a&lt;1\): \(a^f&lt;a^g\iff f>g\).</li>
<li>Zastosowania: wzrost wykładniczy \(N(t)=N_0\,k^t\), rozpad promieniotwórczy, procent składany. Wzrost o \(p\%\) w jednostce czasu: \(k=1+\tfrac p{100}\).</li>
</ul>
</div>
<div class="bx def"><span class="t">Funkcja logarytmiczna \(f(x)=\log_ax\), \(a>0\), \(a\ne1\)</span>
<ul>
<li>\(D=(0,\infty)\), zbiór wartości \(\mathbb R\), miejsce zerowe \(x=1\), asymptota pionowa \(x=0\); \(a>1\): rosnąca; \(0&lt;a&lt;1\): malejąca. Jest odwrotna do \(a^x\).</li>
<li><b>Równania:</b> \(\log_af(x)=\log_ag(x)\iff f(x)=g(x)\) <b>i</b> \(f(x)>0\) (wtedy też \(g(x)>0\)); \(\log_af(x)=c\iff f(x)=a^c\) (\(f(x)>0\)).</li>
<li><b>Nierówności:</b> dla \(a>1\): \(\log_af&lt;\log_ag\iff0&lt;f&lt;g\); dla \(0&lt;a&lt;1\): \(\log_af&lt;\log_ag\iff f>g>0\). Zawsze uwzględnij dziedzinę.</li>
</ul>
</div>
<div class="bx met"><span class="t">Równania wykładnicze i logarytmiczne – typowe metody</span>
<ul>
<li>Sprowadzenie do wspólnej podstawy; podstawienie \(t=a^x>0\) (np. \(4^x-3\cdot2^x+2=0\iff t^2-3t+2=0\), \(t=2^x\)).</li>
<li>Logarytmowanie obu stron; zamiana sumy logarytmów na logarytm iloczynu (z dziedziną!).</li>
</ul>
</div>

<h3>Przekształcenia wykresów funkcji</h3>
<p>Niech dany będzie wykres \(y=f(x)\). Poniższe przekształcenia dają nowe wykresy:</p>
<div class="tw"><table>
<thead><tr><th>Wzór</th><th>Co się dzieje z wykresem \(f\)</th></tr></thead>
<tbody>
<tr><td>\(y=f(x)+c\)</td><td>przesunięcie o \(c\) w górę (\(c>0\)) lub w dół</td></tr>
<tr><td>\(y=f(x-a)\)</td><td>przesunięcie o \(a\) w prawo (\(a>0\)) lub w lewo</td></tr>
<tr><td>\(y=-f(x)\)</td><td>symetria względem osi \(Ox\)</td></tr>
<tr><td>\(y=f(-x)\)</td><td>symetria względem osi \(Oy\)</td></tr>
<tr><td>\(y=-f(-x)\)</td><td>symetria względem początku układu</td></tr>
<tr><td>\(y=|f(x)|\)</td><td>części poniżej osi \(Ox\) odbijamy do góry</td></tr>
<tr><td>\(y=f(|x|)\)</td><td>zostawiamy część dla \(x\ge0\), a lewą stronę zastępujemy odbiciem tej części względem \(Oy\)</td></tr>
<tr><td>\(y=a\cdot f(x)\), \(a>0\)</td><td>rozciągnięcie (\(a>1\)) lub ściśnięcie pionowe względem osi \(Ox\)</td></tr>
<tr><td>\(y=f(ax)\), \(a>0\)</td><td>ściśnięcie (\(a>1\)) lub rozciągnięcie poziome względem osi \(Oy\)</td></tr>
</tbody></table></div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Wykres \(y=|x^2-4|\): parabola \(y=x^2-4\) z częścią między miejscami zerowymi \(-2\) i \(2\) odbitą do góry. Liczba rozwiązań równania \(|x^2-4|=m\): dla \(m&lt;0\) brak; \(m=0\) dwa; \(0&lt;m&lt;4\) cztery; \(m=4\) trzy; \(m>4\) dwa.</p>
</div>
`;
