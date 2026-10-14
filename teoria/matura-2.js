(window.THEORY = window.THEORY || {})['matura-2'] = String.raw`
<h3>Równania i nierówności liniowe, układy równań</h3>
<div class="bx thm"><span class="t">Równanie \(ax+b=0\)</span>
<ul>
<li>\(a\ne0\): jedno rozwiązanie \(x=-\tfrac ba\). \(a=0,\ b=0\): równanie tożsamościowe (każde \(x\)). \(a=0,\ b\ne0\): równanie sprzeczne (brak rozwiązań).</li>
<li>W nierównościach <b>mnożenie lub dzielenie przez liczbę ujemną zmienia zwrot</b> nierówności: \(-2x&lt;6\iff x>-3\).</li>
</ul>
</div>
<div class="bx met"><span class="t">Układ dwóch równań liniowych</span>
<p>\(\begin{cases}a_1x+b_1y=c_1\\a_2x+b_2y=c_2\end{cases}\). Metody: <b>podstawiania</b> (wyznacz jedną niewiadomą i wstaw), <b>przeciwnych współczynników</b> (dodaj równania pomnożone przez odpowiednie liczby), <b>wyznaczników</b>:
\[W=a_1b_2-a_2b_1,\quad W_x=c_1b_2-c_2b_1,\quad W_y=a_1c_2-a_2c_1.\]
Gdy \(W\ne0\): jedno rozwiązanie \(x=\tfrac{W_x}W,\ y=\tfrac{W_y}W\) (proste przecinają się). Gdy \(W=0\): układ sprzeczny (proste równoległe) albo nieoznaczony (proste pokrywają się).</p>
</div>
<p>Układy nieliniowe (np. prosta i parabola, dwa okręgi) rozwiązujemy przez podstawienie – dostajemy równanie kwadratowe, a jego rozwiązania interpretujemy jako punkty wspólne.</p>

<h3>Równanie i nierówność kwadratowa, wzory Viète’a</h3>
<div class="bx thm"><span class="t">Równanie \(ax^2+bx+c=0\), \(a\ne0\)</span>
<p>\(\Delta=b^2-4ac\). Gdy \(\Delta>0\): dwa pierwiastki \(x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}\); gdy \(\Delta=0\): jeden (podwójny) \(x_0=-\dfrac b{2a}\); gdy \(\Delta&lt;0\): brak pierwiastków rzeczywistych. Postać iloczynowa: \(a(x-x_1)(x-x_2)\).</p>
</div>
<div class="bx thm"><span class="t">Wzory Viète’a (dla \(\Delta\ge0\))</span>
\[x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca.\]
<p>Przydatne przekształcenia: \(x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2\), \(\ x_1^3+x_2^3=(x_1+x_2)^3-3x_1x_2(x_1+x_2)\), \(\ |x_1-x_2|=\dfrac{\sqrt\Delta}{|a|}\), \(\ \dfrac1{x_1}+\dfrac1{x_2}=\dfrac{x_1+x_2}{x_1x_2}\).</p>
</div>
<div class="bx met"><span class="t">Znaki i położenie pierwiastków</span>
<ul>
<li>Dwa różne pierwiastki: \(\Delta>0\). Ten sam znak: \(\Delta>0\) i \(x_1x_2>0\). Dwa dodatnie: dodatkowo \(x_1+x_2>0\); dwa ujemne: \(x_1+x_2&lt;0\). Różne znaki: \(x_1x_2&lt;0\) (wtedy \(\Delta>0\) automatycznie).</li>
<li>Pierwiastki po obu stronach liczby \(p\) (dla \(a>0\)): \(f(p)&lt;0\). Oba większe od \(p\): \(\Delta\ge0\), \(f(p)>0\), \(x_w>p\) (analogicznie mniejsze). Oba w przedziale \((p,q)\): \(\Delta>0\), \(f(p)>0\), \(f(q)>0\), \(p&lt;x_w&lt;q\) (dla \(a>0\)).</li>
</ul>
</div>
<p><b>Nierówność kwadratowa:</b> znajdź miejsca zerowe, naszkicuj parabolę (ramiona w górę dla \(a>0\)) i odczytaj przedziały: np. dla \(a>0\) i \(\Delta>0\): \(f(x)&lt;0\) na \((x_1,x_2)\), \(f(x)>0\) na \((-\infty,x_1)\cup(x_2,\infty)\).</p>

<h3>Równania i nierówności z wartością bezwzględną</h3>
<div class="bx met"><span class="t">Metody</span>
<ol>
<li><b>Z definicji (przedziały):</b> znajdź punkty, w których wyrażenia pod modułami zmieniają znak, podziel oś na przedziały, w każdym opuść moduły i rozwiąż; sumuj rozwiązania z częścią wspólną założenia przedziału.</li>
<li><b>Interpretacja geometryczna:</b> \(|x-a|\) to odległość \(x\) od \(a\). Np. \(|x-1|+|x+2|&lt;7\) – suma odległości od \(1\) i \(-2\).</li>
<li><b>Równania typu \(|A|=B\):</b> \(B\ge0\) i (\(A=B\) lub \(A=-B\)). <b>Nierówności:</b> \(|A|&lt;B\iff-B&lt;A&lt;B\); \(|A|>B\iff A&lt;-B\) lub \(A>B\) (dla \(B\ge0\); gdy \(B&lt;0\): \(|A|>B\) zawsze, \(|A|&lt;B\) nigdy).</li>
<li><b>Dwa moduły z obu stron:</b> \(|A|&lt;|B|\iff A^2&lt;B^2\iff(A-B)(A+B)&lt;0\). Również \(|A|=|B|\iff A=B\) lub \(A=-B\).</li>
</ol>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(|x-1|&lt;|x+3|\iff(x-1)^2&lt;(x+3)^2\iff-2x+1&lt;6x+9\iff x>-1\). To zbiór punktów bliższych \(1\) niż \(-3\).</p>
</div>
<p><b>Z parametrem:</b> liczba rozwiązań równania \(|f(x)|=m\) odpowiada liczbie punktów wspólnych wykresu \(y=|f(x)|\) z poziomą prostą \(y=m\) (dla \(m&lt;0\) brak rozwiązań).</p>

<h3>Wielomiany</h3>
<div class="bx def"><span class="t">Definicje</span>
<p>Wielomian stopnia \(n\): \(W(x)=a_nx^n+\dots+a_1x+a_0\), \(a_n\ne0\). Dwa wielomiany są równe, gdy mają ten sam stopień i równe odpowiednie współczynniki. Pierwiastek (miejsce zerowe): \(W(a)=0\). Pierwiastek \(a\) ma <b>krotność \(k\)</b>, gdy \((x-a)^k\mid W(x)\), ale \((x-a)^{k+1}\nmid W(x)\).</p>
</div>
<div class="bx thm"><span class="t">Dzielenie i twierdzenie Bézouta</span>
<ul>
<li><b>Dzielenie z resztą:</b> \(W(x)=P(x)\,Q(x)+R(x)\), przy czym stopień \(R\) jest mniejszy od stopnia \(P\).</li>
<li><b>Twierdzenie o reszcie (Bézouta):</b> reszta z dzielenia \(W(x)\) przez \((x-a)\) jest równa \(W(a)\). Zatem \(a\) jest pierwiastkiem \(\iff\) \((x-a)\mid W(x)\).</li>
<li>Wielomian stopnia \(n\) ma co najwyżej \(n\) pierwiastków rzeczywistych. Wielomian nieparzystego stopnia ma co najmniej jeden pierwiastek.</li>
<li>Jeśli wielomian \(W\) stopnia \(n\) ma \(n\) pierwiastków \(x_1,\dots,x_n\) (liczonych z krotnościami), to \(W(x)=a_n(x-x_1)(x-x_2)\cdots(x-x_n)\). Np. gdy liczby \(-3,\ 1,\ 7\) są pierwiastkami wielomianu \(W(x)=5x^3+bx^2+cx+d\), to \(W(x)=5(x+3)(x-1)(x-7)\).</li>
<li><b>Schemat Hornera</b> ułatwia dzielenie przez \(x-a\) i liczenie \(W(a)\).</li>
</ul>
</div>
<div class="bx thm"><span class="t">Twierdzenie o pierwiastkach wymiernych</span>
<p>Jeśli \(W\) ma współczynniki całkowite i liczba wymierna \(\tfrac pq\) (ułamek nieskracalny) jest jego pierwiastkiem, to \(p\mid a_0\) i \(q\mid a_n\). W szczególności, gdy \(a_n=1\), pierwiastki wymierne są całkowite i dzielą \(a_0\).</p>
</div>
<div class="bx met"><span class="t">Rozwiązywanie równań i nierówności wielomianowych</span>
<ol>
<li>Rozłóż na czynniki: wyłączanie, grupowanie, wzory skróconego mnożenia, szukanie pierwiastków wymiernych i dzielenie.</li>
<li>Równania dwukwadratowe \(ax^4+bx^2+c=0\): podstawienie \(t=x^2\ge0\).</li>
<li>Nierówność \(W(x)&lt;0\) lub \(>0\): zaznacz pierwiastki na osi, narysuj „wężyk” zaczynając od prawej strony od góry (gdy \(a_n>0\)); przy pierwiastku <b>parzystej krotności</b> wykres się odbija (znak się nie zmienia), przy nieparzystej – przechodzi na drugą stronę.</li>
</ol>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(W(x)=(x-1)(x+2)^2(x-3)\ge0\): pierwiastki \(-2\) (podwójny), \(1\), \(3\); wężyk: \(+\) dla \(x>3\), \(-\) na \((1,3)\), \(+\) na \((-2,1)\), \(+\) dla \(x&lt;-2\) (odbicie w \(-2\)). Rozwiązanie: \((-\infty,1]\cup[3,\infty)\). Punkt \(-2\) należy do niego, bo tam \(W=0\), a nierówność jest nieostra.</p>
</div>

<h3>Równania i nierówności wymierne</h3>
<div class="bx met"><span class="t">Zasady</span>
<ul>
<li>Najpierw <b>dziedzina</b>: mianowniki \(\ne0\).</li>
<li>\(\dfrac AB=0\iff A=0\) i \(B\ne0\).</li>
<li><b>Nierówności:</b> nie mnóż przez wyrażenie o nieznanym znaku. Przenieś wszystko na jedną stronę i sprowadź do jednego ułamka. Dalej: \(\dfrac AB>0\iff A\cdot B>0\); \(\ \dfrac AB\ge0\iff A\cdot B\ge0\) i \(B\ne0\). Rozwiąż jak nierówność wielomianową.</li>
<li>Równanie z niewiadomą w mianowniku i parametrem: po rozwiązaniu sprawdź, czy rozwiązanie mieści się w dziedzinie (wyklucza ono pewne wartości parametru).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(\dfrac{x+1}{x-2}\ge1\iff\dfrac{x+1-(x-2)}{x-2}\ge0\iff\dfrac3{x-2}\ge0\iff x>2\). (Mnożenie przez \(x-2\) byłoby błędem – nie znamy znaku.)</p>
</div>

<h3>Równania z parametrem i równania niewymierne</h3>
<ul>
<li><b>Z parametrem:</b> rozważ przypadki, w których zmienia się charakter równania (np. współczynnik przy \(x^2\) równy \(0\); znak \(\Delta\)). Zapisz warunki zadania jako warunki na \(\Delta\), sumę i iloczyn pierwiastków albo wartość funkcji w punkcie.</li>
<li><b>Niewymierne:</b> określ dziedzinę (wyrażenie pod pierwiastkiem stopnia parzystego \(\ge0\)). Równanie \(\sqrt{A}=B\) jest równoważne \(B\ge0\) i \(A=B^2\). Nierówność \(\sqrt A&lt;B\iff A\ge0\), \(B>0\), \(A&lt;B^2\); \(\ \sqrt A>B\iff\) (\(B&lt;0\) i \(A\ge0\)) lub (\(B\ge0\) i \(A>B^2\)).</li>
<li>Po podnoszeniu do kwadratu możliwe są <b>rozwiązania obce</b> – zawsze sprawdź warunek \(B\ge0\).</li>
</ul>
`;
