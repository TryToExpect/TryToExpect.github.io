(window.THEORY = window.THEORY || {})['studia-6'] = String.raw`
<div class="bx ex"><span class="t">O skrypcie</span>
<p><b>Rachunek prawdopodobieństwa i statystyka</b> – od aksjomatów Kołmogorowa i zmiennych losowych, przez twierdzenia graniczne, po estymację, przedziały ufności i testowanie hipotez.</p>
<ul>
<li>Skrypt zbiera definicje, twierdzenia (z pełnymi założeniami), metody rozwiązywania typowych zadań i standardowe przykłady. W rozdziale 12 zebrano narzędzia z analizy i kombinatoryki, z których korzystają rozwiązania zadań.</li>
<li>Pod każdą pozycją podano numery zadań, w których jest ona używana (zakładka „Zadania z rozwiązaniami”). Pozycje bez numerów to standardowy materiał, który nie pojawił się w rozwiązaniach, ale warto go znać. Dopisek „dowodzone tamże” oznacza, że pozycja jest w danym zadaniu przedmiotem dowodu.</li>
<li><b>Rodzaje pozycji</b> (kolor paska po lewej): Definicja, Twierdzenie, Fakt, Wniosek, Metoda, Przykład.</li>
</ul>
</div>

<h3>Przestrzeń probabilistyczna i kombinatoryka</h3>
<div class="bx def"><span class="t">Definicja 1.1 – przestrzeń probabilistyczna</span>
<p>Trójka \((\Omega,\mathcal F,P)\), w której</p>
<ul>
<li>\(\mathcal F\) jest \(\sigma\)-ciałem podzbiorów \(\Omega\) (zdarzeń),</li>
<li>\(P:\mathcal F\to[0,1]\) spełnia \(P(\Omega)=1\) i jest przeliczalnie addytywna: \(P\Bigl(\bigcup A_n\Bigr)=\sum P(A_n)\) dla parami rozłącznych \(A_n\) (aksjomaty Kołmogorowa).</li>
</ul>
<p class="use">Użyte w zad. 199, 200.</p>
</div>
<div class="bx fact"><span class="t">Fakt 1.2 – własności prawdopodobieństwa</span>
<ul>
<li>\(P(A')=1-P(A)\); jeśli \(A\subset B\), to \(P(A)\le P(B)\);</li>
<li>\(P(A\cup B)=P(A)+P(B)-P(A\cap B)\);</li>
<li>podaddytywność: \(P\Bigl(\bigcup A_n\Bigr)\le\sum P(A_n)\);</li>
<li>ciągłość: dla wstępującego ciągu zdarzeń \(P\Bigl(\bigcup A_n\Bigr)=\lim P(A_n)\), dla zstępującego \(P\Bigl(\bigcap A_n\Bigr)=\lim P(A_n)\).</li>
</ul>
<p class="use">Użyte w zad. 199, 200.</p>
</div>
<div class="bx fact"><span class="t">Fakt 1.3 – model klasyczny i kombinatoryka</span>
<p>Dla równoprawdopodobnych wyników \(P(A)=\dfrac{|A|}{|\Omega|}\).</p>
<ul>
<li>Liczba ciągów długości \(k\) z \(n\) elementów: \(n^k\) (ze zwracaniem), \(\dfrac{n!}{(n-k)!}\) (bez zwracania).</li>
<li>Liczba \(k\)-elementowych podzbiorów: \(\binom nk\).</li>
<li>Liczba sposobów rozmieszczenia \(k\) nierozróżnialnych kul w \(n\) szufladach: \(\binom{n+k-1}{k}\).</li>
<li>Liczba podziałów zbioru \(n\)-elementowego na \(k\) niepustych podzbiorów to liczba Stirlinga drugiego rodzaju \(S(n,k)\); liczba surjekcji zbioru \(n\)-elementowego na zbiór \(k\)-elementowy wynosi \(k!\,S(n,k)\).</li>
</ul>
<p class="use">Użyte w zad. 203, 204, 238.</p>
</div>
<div class="bx fact"><span class="t">Fakt 1.4 – model geometryczny</span>
<p>Gdy punkt losujemy jednostajnie z obszaru \(\Omega\), to \(P(A)=\dfrac{|A|}{|\Omega|}\), gdzie \(|\cdot|\) jest długością, polem lub objętością. Dwa niezależne punkty jednostajne na odcinku to jeden punkt jednostajny w kwadracie.</p>
<p class="use">Użyte w zad. 208.</p>
</div>
<div class="bx fact"><span class="t">Fakt 1.5 – zasada włączeń i wyłączeń</span>
\[P\Bigl(\bigcup_{i=1}^nA_i\Bigr)=\sum_{k=1}^n(-1)^{k+1}\sum_{|I|=k}P\Bigl(\bigcap_{i\in I}A_i\Bigr).\]
<p>Typowe zastosowanie: prawdopodobieństwo, że w \(n\) losowaniach pojawi się każdy z \(m\) wyników.</p>
<p class="use">Użyte w zad. 203.</p>
</div>
<div class="bx met"><span class="t">Metoda 1.6 – jak liczyć prawdopodobieństwa</span>
<ul>
<li>Zdarzenie „co najmniej jeden” licz przez zdarzenie przeciwne.</li>
<li>Rozbijaj zdarzenie na rozłączne przypadki (wzór na prawdopodobieństwo całkowite).</li>
<li>Korzystaj z symetrii.</li>
<li>Wartość oczekiwaną liczby zdarzeń licz przez sumę wskaźników.</li>
<li>Dla zdarzeń w nieskończonym ciągu prób dziel ciąg na rozłączne bloki i korzystaj z niezależności bloków.</li>
</ul>
<p class="use">Użyte w zad. 199, 201, 203, 204.</p>
</div>

<h3>Prawdopodobieństwo warunkowe i niezależność</h3>
<div class="bx def"><span class="t">Definicja 2.1 – prawdopodobieństwo warunkowe</span>
\[P(A\mid B)=\frac{P(A\cap B)}{P(B)}\qquad(P(B)>0).\]
<p>Wzór łańcuchowy: \(P(A_1\cap\dots\cap A_n)=P(A_1)\,P(A_2\mid A_1)\cdots P(A_n\mid A_1\cap\dots\cap A_{n-1})\). Jeśli \(A\subset B\), to \(P(A\mid B)=\dfrac{P(A)}{P(B)}\).</p>
<p class="use">Użyte w zad. 201, 202, 219, 223, 230.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 2.2 – wzór na prawdopodobieństwo całkowite i wzór Bayesa</span>
<p>Dla rozbicia \(\Omega=\bigsqcup B_i\) na zdarzenia o dodatnich prawdopodobieństwach:
\[P(A)=\sum_iP(A\mid B_i)P(B_i),\qquad P(B_j\mid A)=\frac{P(A\mid B_j)P(B_j)}{\sum_iP(A\mid B_i)P(B_i)}.\]</p>
<p><b>Wersja ciągła</b> (warunkowanie względem wartości niezależnej zmiennej): jeśli \(X,Y\) są niezależne, a \(Y\) ma gęstość \(f_Y\), to
\[P\bigl((X,Y)\in A\bigr)=\int f_Y(y)\,P\bigl((X,y)\in A\bigr)\,dy;\]
na przykład \(P(X>Y)=\displaystyle\int f_Y(y)\,P(X>y)\,dy\).</p>
<p class="use">Użyte w zad. 202, 209, 219, 230.</p>
</div>
<div class="bx def"><span class="t">Definicja 2.3 – niezależność zdarzeń</span>
<p>Zdarzenia \(A_1,\dots,A_n\) są niezależne, gdy
\[P\Bigl(\bigcap_{i\in I}A_i\Bigr)=\prod_{i\in I}P(A_i)\quad\text{dla każdego zbioru indeksów }I.\]
Niezależność parami nie wystarcza. Jeśli zdarzenia są niezależne, to niezależne są też ich dopełnienia i zdarzenia wyznaczone przez rozłączne grupy zdarzeń.</p>
<p class="use">Użyte w zad. 199, 200, 201, 203, 204.</p>
</div>
<div class="bx fact"><span class="t">Fakt 2.4 – niezależność warunkowa</span>
<p>Zdarzenia mogą być niezależne przy każdym ustalonym warunku (np. losowania z tej samej skrzyni przy znanej skrzyni), a mimo to zależne bez warunku. Wtedy
\[P(A\cap B)=\sum_iP(A\mid B_i)\,P(B\mid B_i)\,P(B_i).\]</p>
<p class="use">Użyte w zad. 230.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 2.5 – lematy Borela–Cantellego</span>
<ul>
<li>Jeśli \(\sum P(A_n)&lt;\infty\), to z prawdopodobieństwem \(1\) zachodzi tylko skończenie wiele zdarzeń \(A_n\).</li>
<li>Jeśli zdarzenia \(A_n\) są niezależne i \(\sum P(A_n)=\infty\), to z prawdopodobieństwem \(1\) zachodzi nieskończenie wiele z nich.</li>
</ul>
<p class="use">Użyte w zad. 199, 200.</p>
</div>
<div class="bx fact"><span class="t">Fakt 2.6 – schemat Bernoulliego</span>
<ul>
<li>W \(n\) niezależnych próbach z prawdopodobieństwem sukcesu \(p\) liczba sukcesów ma rozkład dwumianowy, a numer pierwszego sukcesu rozkład geometryczny.</li>
<li>W nieskończonym ciągu prób (przy \(0&lt;p&lt;1\)) każdy ustalony skończony wzorzec wyników pojawia się z prawdopodobieństwem \(1\) (nawet nieskończenie wiele razy).</li>
</ul>
<p class="use">Użyte w zad. 199, 201, 215, 222.</p>
</div>

<h3>Zmienne losowe i ich rozkłady</h3>
<div class="bx def"><span class="t">Definicja 3.1 – zmienna losowa, dystrybuanta</span>
<p>Dystrybuanta \(F(t)=P(X\le t)\) jest</p>
<ul>
<li>niemalejąca i prawostronnie ciągła,</li>
<li>z granicami \(0\) w \(-\infty\) i \(1\) w \(+\infty\).</li>
</ul>
<p>Każda funkcja o tych własnościach jest dystrybuantą pewnej zmiennej losowej. Dystrybuanta wyznacza rozkład.</p>
<p class="use">Użyte w zad. 205, 206, 207, 208, 212, 227, 229.</p>
</div>
<div class="bx fact"><span class="t">Fakt 3.2 – prawdopodobieństwa z dystrybuanty</span>
\[P(X=a)=F(a)-F(a^-),\qquad P(a&lt;X\le b)=F(b)-F(a),\qquad P(a&lt;X&lt;b)=F(b^-)-F(a).\]
<p>Skoki dystrybuanty to atomy rozkładu; rozkład może być mieszany, czyli mieć atomy i część ciągłą. Dystrybuanta jest ciągła wtedy i tylko wtedy, gdy \(P(X=a)=0\) dla każdego \(a\).</p>
<p class="use">Użyte w zad. 205, 206, 207, 234.</p>
</div>
<div class="bx def"><span class="t">Definicja 3.3 – rozkład dyskretny i ciągły, gęstość</span>
<ul>
<li><b>Rozkład dyskretny</b> zadają liczby \(P(X=x_i)\) o sumie \(1\).</li>
<li><b>Rozkład ciągły</b> ma gęstość \(f\ge0\) z \(\int f=1\) i \(P(X\in A)=\int_Af\); wtedy \(F'=f\) w punktach ciągłości \(f\). Stałą normującą gęstość wyznacza się z warunku \(\int f=1\).</li>
<li>Zmienna prawie na pewno stała, \(X=c\), ma rozkład jednopunktowy (dystrybuanta \(\mathbf 1_{[c,\infty)}\)).</li>
</ul>
<p class="use">Użyte w zad. 205, 206, 208, 210, 211, 212, 220, 221, 228.</p>
</div>
<div class="bx fact"><span class="t">Fakt 3.4 – najważniejsze rozkłady</span>
<p>Poniżej \(q=1-p\).</p>
<div class="tw"><table>
<thead><tr><th>rozkład</th><th>funkcja prawdopodobieństwa lub gęstość</th><th>\(\mathbb EX\)</th><th>\(\operatorname{Var}X\)</th></tr></thead>
<tbody>
<tr><td>dwumianowy \(B(n,p)\)</td><td>\(\binom nk p^kq^{n-k},\ k=0,\dots,n\)</td><td>\(np\)</td><td>\(npq\)</td></tr>
<tr><td>geometryczny</td><td>\(q^{k-1}p,\ k=1,2,\dots\)</td><td>\(\dfrac1p\)</td><td>\(\dfrac q{p^2}\)</td></tr>
<tr><td>Poissona \(\mathcal P(\lambda)\)</td><td>\(e^{-\lambda}\dfrac{\lambda^k}{k!},\ k=0,1,\dots\)</td><td>\(\lambda\)</td><td>\(\lambda\)</td></tr>
<tr><td>hipergeometryczny</td><td>\(\dbinom mk\dbinom{N-m}{n-k}\Big/\dbinom Nn\)</td><td>\(\dfrac{nm}N\)</td><td>\(\dfrac{nm(N-m)(N-n)}{N^2(N-1)}\)</td></tr>
<tr><td>wielomianowy \(M(n,\mathbf p)\)</td><td>\(\dfrac{n!}{k_1!\cdots k_r!}\,p_1^{k_1}\cdots p_r^{k_r}\)</td><td>\(np_i\)</td><td>\(np_i(1-p_i)\)</td></tr>
<tr><td>jednostajny \(U(a,b)\)</td><td>\(\dfrac1{b-a}\) na \((a,b)\)</td><td>\(\dfrac{a+b}2\)</td><td>\(\dfrac{(b-a)^2}{12}\)</td></tr>
<tr><td>wykładniczy \(\mathrm{Exp}(\lambda)\)</td><td>\(\lambda e^{-\lambda x},\ x>0\)</td><td>\(\dfrac1\lambda\)</td><td>\(\dfrac1{\lambda^2}\)</td></tr>
<tr><td>normalny \(N(\mu,\sigma^2)\)</td><td>\(\dfrac1{\sigma\sqrt{2\pi}}\exp\Bigl(-\dfrac{(x-\mu)^2}{2\sigma^2}\Bigr)\)</td><td>\(\mu\)</td><td>\(\sigma^2\)</td></tr>
<tr><td>gamma \(\Gamma(k,\theta)\)</td><td>\(\dfrac{x^{k-1}e^{-x/\theta}}{\Gamma(k)\,\theta^k},\ x>0\)</td><td>\(k\theta\)</td><td>\(k\theta^2\)</td></tr>
</tbody></table></div>
<ul>
<li>Dla rozkładu wielomianowego (\(n\) niezależnych doświadczeń o \(r\) możliwych wynikach z prawdopodobieństwami \(p_1,\dots,p_r\), \(\sum k_i=n\)) podano wartość oczekiwaną i wariancję liczby \(K_i\) wyników \(i\)-tego rodzaju. Dla \(n=1\) rozkład dwumianowy jest zero–jedynkowy.</li>
<li>Uwaga na konwencję: „rozkład wykładniczy z parametrem \(\lambda\)” zwykle oznacza intensywność (średnia \(\tfrac1\lambda\)), ale bywa też używany dla średniej. Rozkład \(\mathrm{Exp}(\lambda)\) to \(\Gamma\bigl(1,\tfrac1\lambda\bigr)\).</li>
</ul>
<p class="use">Użyte w zad. 201, 208, 211, 214, 215, 218, 219, 222, 223, 224, 226, 227, 229, 231, 233, 234, 235, 238, 239.</p>
</div>
<div class="bx fact"><span class="t">Fakt 3.5 – brak pamięci</span>
\[P(X>s+t\mid X>s)=P(X>t)\qquad(s,t\ge0).\]
<p>Wśród rozkładów ciągłych własność tę ma tylko rozkład wykładniczy, a wśród rozkładów na \(\{1,2,\dots\}\) tylko geometryczny. Dla niezależnych \(X\sim\mathrm{Exp}(\lambda)\), \(Y\sim\mathrm{Exp}(\mu)\):
\[P(X>Y)=\frac\mu{\lambda+\mu},\qquad\min(X,Y)\sim\mathrm{Exp}(\lambda+\mu).\]</p>
<p class="use">Użyte w zad. 219.</p>
</div>
<div class="bx fact"><span class="t">Fakt 3.6 – rozkład normalny</span>
<ul>
<li>Jeśli \(X\sim N(\mu,\sigma^2)\), to \(\dfrac{X-\mu}\sigma\sim N(0,1)\) i \(aX+b\sim N(a\mu+b,a^2\sigma^2)\).</li>
<li>Dla dystrybuanty \(\Phi\) rozkładu \(N(0,1)\): \(\Phi(-x)=1-\Phi(x)\), \(\Phi^{-1}(0{,}95)\approx1{,}645\), \(\Phi^{-1}(0{,}975)\approx1{,}96\).</li>
<li>Momenty: \(\mathbb EZ^{2k+1}=0\), \(\mathbb EZ^2=1\), \(\mathbb EZ^4=3\) dla \(Z\sim N(0,1)\), więc \(\mathbb EX^4=\mu^4+6\mu^2\sigma^2+3\sigma^4\).</li>
</ul>
<p class="use">Użyte w zad. 209, 212, 213, 222, 232, 236.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 3.7 – transformacja przez dystrybuantę</span>
<ul>
<li>Jeśli \(F\) jest ciągła, to \(F(X)\) ma rozkład jednostajny na \([0,1]\).</li>
<li>Odwrotnie: jeśli \(U\) ma rozkład jednostajny na \([0,1]\), a \(F^{-1}(u)=\inf\{t:F(t)\ge u\}\), to \(F^{-1}(U)\) ma dystrybuantę \(F\) (metoda odwrotnej dystrybuanty w symulacjach).</li>
</ul>
<p class="use">Użyte w zad. 206, 207 (dowodzone tamże).</p>
</div>
<div class="bx met"><span class="t">Metoda 3.8 – rozkład funkcji zmiennej losowej</span>
<ul>
<li>Najpewniejsza droga prowadzi przez dystrybuantę: zdarzenie \(\{g(X)\le y\}\) zapisz jako zdarzenie dla \(X\) i zróżniczkuj.</li>
<li>Dla ściśle monotonicznej \(g\) klasy \(C^1\): \(f_Y(y)=f_X\bigl(g^{-1}(y)\bigr)\,\bigl|(g^{-1})'(y)\bigr|\).</li>
<li>Dla niemonotonicznej sumuj po gałęziach (np. dla \(Y=X^2\) po \(\pm\sqrt y\)).</li>
<li>Najpierw ustal zbiór wartości \(Y\).</li>
</ul>
<p class="use">Użyte w zad. 206, 208, 211, 212.</p>
</div>

<h3>Wektory losowe i rozkłady łączne</h3>
<div class="bx def"><span class="t">Definicja 4.1 – rozkład łączny i brzegowy</span>
<ul>
<li>Dla zmiennych dyskretnych rozkład brzegowy to sumy w wierszach i kolumnach tabeli rozkładu łącznego.</li>
<li>Dla gęstości łącznej \(f(x,y)\): \(f_X(x)=\int f(x,y)\,dy\), \(f_Y(y)=\int f(x,y)\,dx\), przy czym granice całkowania wynikają z nośnika \(f\).</li>
<li>\(P\bigl((X,Y)\in A\bigr)=\iint_Af\).</li>
</ul>
<p class="use">Użyte w zad. 216, 220.</p>
</div>
<div class="bx def"><span class="t">Definicja 4.2 – niezależność zmiennych losowych</span>
<ul>
<li>\(X\) i \(Y\) są niezależne, gdy \(P(X\in A,Y\in B)=P(X\in A)P(Y\in B)\); równoważnie dystrybuanta łączna (gęstość łączna, rozkład dyskretny) jest iloczynem brzegowych.</li>
<li>Gdy nośnik gęstości łącznej nie jest iloczynem kartezjańskim (np. trójkąt \(0\le x\le y\le1\)), zmienne są zależne.</li>
<li>Funkcje niezależnych zmiennych są niezależne.</li>
</ul>
<p class="use">Użyte w zad. 208, 209, 211, 216, 217, 218, 219, 220, 224, 227, 229, 237.</p>
</div>
<div class="bx fact"><span class="t">Fakt 4.3 – gęstość sumy: splot</span>
<p>Dla niezależnych \(X,Y\) z gęstościami
\[f_{X+Y}(z)=\int f_X(x)\,f_Y(z-x)\,dx.\]
Dla \(aX+bY\) najpierw wyznacz gęstości \(aX\) i \(bY\), a potem splot. Alternatywnie licz dystrybuantę jako pole części kwadratu (dla rozkładów jednostajnych).</p>
<p class="use">Użyte w zad. 208, 211.</p>
</div>
<div class="bx fact"><span class="t">Fakt 4.4 – sumy niezależnych zmiennych o znanych rozkładach</span>
<p>Dla niezależnych zmiennych:</p>
<ul>
<li>\(\mathcal P(\lambda)+\mathcal P(\mu)=\mathcal P(\lambda+\mu)\);</li>
<li>\(N(\mu_1,\sigma_1^2)+N(\mu_2,\sigma_2^2)=N(\mu_1+\mu_2,\sigma_1^2+\sigma_2^2)\);</li>
<li>\(B(n,p)+B(m,p)=B(n+m,p)\);</li>
<li>suma \(n\) niezależnych \(\mathrm{Exp}(\lambda)\) ma rozkład \(\Gamma\bigl(n,\tfrac1\lambda\bigr)\);</li>
<li>pod warunkiem \(X+Y=n\) dla niezależnych zmiennych Poissona zmienna \(X\) ma rozkład \(B\bigl(n,\tfrac\lambda{\lambda+\mu}\bigr)\).</li>
</ul>
<p class="use">Użyte w zad. 209, 218, 223.</p>
</div>
<div class="bx fact"><span class="t">Fakt 4.5 – wektor gaussowski</span>
<ul>
<li>Wektor jest <b>gaussowski</b>, gdy każda kombinacja liniowa jego współrzędnych ma rozkład normalny (np. gdy jest obrazem liniowym wektora niezależnych zmiennych normalnych).</li>
<li>Jego rozkład jest wyznaczony przez wektor średnich i macierz kowariancji, a nieskorelowane bloki współrzędnych są niezależne.</li>
<li>Uwaga: dwie zmienne normalne nieskorelowane, ale nie tworzące wektora gaussowskiego, mogą być zależne.</li>
</ul>
<p class="use">Użyte w zad. 237.</p>
</div>
<div class="bx fact"><span class="t">Fakt 4.6 – maksimum i minimum niezależnych zmiennych</span>
<p>Dla niezależnych \(X_1,\dots,X_n\) o dystrybuantach \(F_i\):
\[P(\max X_i\le t)=\prod F_i(t),\qquad P(\min X_i>t)=\prod\bigl(1-F_i(t)\bigr).\]</p>
<p class="use">Użyte w zad. 229, 239.</p>
</div>

<h3>Wartość oczekiwana, wariancja, momenty</h3>
<div class="bx def"><span class="t">Definicja 5.1 – wartość oczekiwana</span>
\[\mathbb EX=\sum x_iP(X=x_i)\quad\text{albo}\quad\mathbb EX=\int xf(x)\,dx,\]
<p>o ile szereg (całka) jest zbieżny bezwzględnie. Dla funkcji: \(\mathbb Eg(X)=\sum g(x_i)P(X=x_i)\) albo \(\int g(x)f(x)\,dx\), a dla wektora \(\mathbb Eg(X,Y)=\iint gf\). Dla zmiennej mieszanej sumujemy część skokową i całkę z części ciągłej.</p>
<p class="use">Użyte w zad. 205, 208, 210, 213, 214, 220, 224, 239.</p>
</div>
<div class="bx fact"><span class="t">Fakt 5.2 – własności wartości oczekiwanej</span>
<ul>
<li>Liniowość (bez założenia niezależności) i monotoniczność.</li>
<li>Dla niezależnych \(X,Y\): \(\mathbb EXY=\mathbb EX\,\mathbb EY\).</li>
<li>Zmienne wskaźnikowe: \(\mathbb E\mathbf 1_A=P(A)\), więc liczba zdarzeń, które zaszły, ma wartość oczekiwaną \(\sum P(A_i)\), nawet gdy zdarzenia są zależne.</li>
</ul>
<p class="use">Użyte w zad. 203, 204, 213, 224, 227, 232, 233, 235, 239.</p>
</div>
<div class="bx fact"><span class="t">Fakt 5.3 – wartość oczekiwana przez ogon rozkładu</span>
<p>Dla \(X\ge0\):
\[\mathbb EX=\int_0^\infty P(X>t)\,dt=\int_0^\infty\bigl(1-F(t)\bigr)\,dt;\]
dla \(X\) o wartościach w \(\{0,1,2,\dots\}\): \(\mathbb EX=\sum_{k\ge1}P(X\ge k)\).</p>
<p class="use">Użyte w zad. 205.</p>
</div>
<div class="bx def"><span class="t">Definicja 5.4 – wariancja, kowariancja, korelacja</span>
\[\operatorname{Var}X=\mathbb E(X-\mathbb EX)^2=\mathbb EX^2-(\mathbb EX)^2,\quad\operatorname{Cov}(X,Y)=\mathbb EXY-\mathbb EX\,\mathbb EY,\quad\rho(X,Y)=\frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}X\,\operatorname{Var}Y}}.\]
<p>Własności:</p>
<ul>
<li>\(\operatorname{Var}(aX+b)=a^2\operatorname{Var}X\); \(\operatorname{Var}(X\pm Y)=\operatorname{Var}X+\operatorname{Var}Y\pm2\operatorname{Cov}(X,Y)\);</li>
<li>kowariancja jest dwuliniowa;</li>
<li>dla niezależnych zmiennych kowariancja jest zerowa, a wariancja sumy jest sumą wariancji.</li>
</ul>
<p class="use">Użyte w zad. 210, 213, 214, 215, 216, 217, 220, 221, 227, 232, 233, 235, 237, 239.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 5.5 – o współczynniku korelacji</span>
<ul>
<li>\(|\rho(X,Y)|\le1\) (nierówność Cauchy’ego–Schwarza).</li>
<li>\(\rho=1\) (odpowiednio \(-1\)) wtedy i tylko wtedy, gdy \(X=aY+b\) prawie na pewno z \(a>0\) (odpowiednio \(a&lt;0\)).</li>
<li>Zmienna o zerowej wariancji jest prawie na pewno stała.</li>
<li>Zmienne niezależne są nieskorelowane, ale nie odwrotnie.</li>
</ul>
<p class="use">Użyte w zad. 217 (dowodzone tamże), 221.</p>
</div>
<div class="bx fact"><span class="t">Fakt 5.6 – warunkowa wartość oczekiwana</span>
<p>\(\mathbb E(X\mid Z)\) to funkcja zmiennej \(Z\) dająca średnią \(X\) przy znanym \(Z\). Zachodzą wzory
\[\mathbb EX=\mathbb E\bigl[\mathbb E(X\mid Z)\bigr],\qquad\operatorname{Var}X=\mathbb E\operatorname{Var}(X\mid Z)+\operatorname{Var}\mathbb E(X\mid Z).\]
Dla \(Z\) dyskretnej: \(\mathbb EX=\sum_z\mathbb E(X\mid Z=z)\,P(Z=z)\).</p>
<p class="use">Użyte w zad. 230.</p>
</div>
<div class="bx fact"><span class="t">Fakt 5.7 – funkcje tworzące i charakterystyczne</span>
<ul>
<li>Funkcja tworząca momentów \(M_X(t)=\mathbb Ee^{tX}\) (gdy istnieje w otoczeniu zera) i funkcja charakterystyczna \(\varphi_X(s)=\mathbb Ee^{isX}\) wyznaczają rozkład; dla niezależnych zmiennych \(\varphi_{X+Y}=\varphi_X\varphi_Y\).</li>
<li>Dla \(\mathcal P(\lambda)\): \(\mathbb Ee^{tX}=e^{\lambda(e^t-1)}\); dla \(N(\mu,\sigma^2)\): \(\varphi(s)=e^{i\mu s-\sigma^2s^2/2}\).</li>
<li>Momenty: \(\mathbb EX^k=M_X^{(k)}(0)\).</li>
</ul>
<p class="use">Użyte w zad. 209, 214, 237.</p>
</div>

<h3>Nierówności i twierdzenia graniczne</h3>
<div class="bx thm"><span class="t">Twierdzenie 6.1 – nierówności Markowa i Czebyszewa</span>
<p>Dla \(X\ge0\) i \(a>0\):
\[P(X\ge a)\le\frac{\mathbb EX}a.\]
Stąd (nierówność Czebyszewa)
\[P(|X-\mathbb EX|\ge\varepsilon)\le\frac{\operatorname{Var}X}{\varepsilon^2}.\]
Wnioski: zmienna o zerowej wariancji jest prawie na pewno stała, a zmienna \(X\ge0\) o zerowej wartości oczekiwanej jest prawie na pewno równa zeru, bo \(P\bigl(X\ge\tfrac1n\bigr)\le n\,\mathbb EX=0\) dla każdego \(n\).</p>
<p class="use">Użyte w zad. 217, 221, 224.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 6.2 – nierówność Jensena dla wartości oczekiwanej</span>
<p>Jeśli \(f\) jest wypukła, to
\[f(\mathbb EX)\le\mathbb Ef(X);\]
dla wklęsłej odwrotnie, a dla funkcji ściśle wypukłej (wklęsłej) i niestałej \(X\) nierówność jest ostra. Na przykład \(\mathbb E\sqrt Y&lt;\sqrt{\mathbb EY}\) dla niestałej \(Y\ge0\), więc pierwiastek z nieobciążonego estymatora wariancji jest obciążonym estymatorem odchylenia standardowego.</p>
<p class="use">Użyte w zad. 232.</p>
</div>
<div class="bx def"><span class="t">Definicja 6.3 – rodzaje zbieżności</span>
<ul>
<li>\(X_n\to X\) <b>prawie na pewno</b>, gdy \(P(X_n\to X)=1\);</li>
<li><b>według prawdopodobieństwa</b>, gdy \(P(|X_n-X|>\varepsilon)\to0\) dla każdego \(\varepsilon>0\);</li>
<li><b>według rozkładu</b>, gdy \(F_{X_n}(t)\to F_X(t)\) w punktach ciągłości \(F_X\);</li>
<li><b>w sensie średniokwadratowym</b>, gdy \(\mathbb E(X_n-X)^2\to0\).</li>
</ul>
<p>Zbieżność prawie na pewno pociąga zbieżność według prawdopodobieństwa, a ta według rozkładu; odwrotnie na ogół nie (wyjątek: zbieżność według rozkładu do stałej). Zbieżność średniokwadratowa pociąga zbieżność według prawdopodobieństwa (nierówność Czebyszewa).</p>
<p class="use">Użyte w zad. 224, 225, 226, 228, 235.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 6.4 – prawa wielkich liczb</span>
<ul>
<li><b>Słabe:</b> dla niezależnych zmiennych o tym samym rozkładzie i skończonej wariancji \(\bar X_n\to\mu\) według prawdopodobieństwa (wynika z nierówności Czebyszewa).</li>
<li><b>Mocne</b> (Kołmogorow): dla niezależnych zmiennych o tym samym rozkładzie z \(\mathbb E|X_1|&lt;\infty\) mamy \(\bar X_n\to\mathbb EX_1\) prawie na pewno.</li>
</ul>
<p>Stosuje się też do \(g(X_i)\), np. do \(\ln|X_i|\) lub \(X_i^2\), oraz do ilorazów średnich (granica ilorazu to iloraz granic).</p>
<p class="use">Użyte w zad. 224, 225, 226.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 6.5 – centralne twierdzenie graniczne</span>
<p>Dla niezależnych zmiennych o tym samym rozkładzie z wariancją \(0&lt;\sigma^2&lt;\infty\):
\[P\Bigl(\frac{S_n-n\mu}{\sigma\sqrt n}\le x\Bigr)\to\Phi(x)\qquad(\text{zbieżność według rozkładu do }N(0,1)).\]
Szczególny przypadek dla rozkładu dwumianowego to twierdzenie de Moivre’a–Laplace’a.</p>
<p class="use">Użyte w zad. 222, 228.</p>
</div>
<div class="bx met"><span class="t">Metoda 6.6 – przybliżanie rozkładem normalnym</span>
<ol>
<li>Policz \(\mathbb ES_n=n\mu\) i \(\operatorname{Var}S_n=n\sigma^2\).</li>
<li>Ustandaryzuj zdarzenie i zastąp dystrybuantę przez \(\Phi\).</li>
<li>Dla zmiennej całkowitej poprawka na ciągłość (\(P(S\ge k)=P\bigl(S>k-\tfrac12\bigr)\)) poprawia przybliżenie.</li>
</ol>
<p>Daleko w ogonie (więcej niż ok. \(3\) odchylenia standardowe) przybliżenie oddaje tylko rząd wielkości.</p>
<p class="use">Użyte w zad. 222.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 6.7 – przybliżenie Poissona</span>
<p>Jeśli \(n\to\infty\), \(p_n\to0\) i \(np_n\to\lambda\), to
\[P\bigl(B(n,p_n)=k\bigr)\to e^{-\lambda}\frac{\lambda^k}{k!}.\]
W praktyce stosujemy je dla dużego \(n\) i małego \(p\) z \(\lambda=np\).</p>
<p class="use">Użyte w zad. 223.</p>
</div>

<h3>Próba i statystyki</h3>
<div class="bx def"><span class="t">Definicja 7.1 – próba prosta, średnia i wariancja z próby</span>
<ul>
<li><b>Próba prosta</b> to niezależne zmienne \(X_1,\dots,X_n\) o tym samym rozkładzie.</li>
<li><b>Średnia</b> \(\bar X=\tfrac1n\sum X_i\) spełnia \(\mathbb E\bar X=\mu\), \(\operatorname{Var}\bar X=\dfrac{\sigma^2}n\).</li>
<li><b>Wariancja z próby</b> \(S^2=\dfrac1{n-1}\sum(X_i-\bar X)^2\) jest nieobciążonym estymatorem \(\sigma^2\); wersja z dzieleniem przez \(n\) jest obciążona.</li>
</ul>
<p class="use">Użyte w zad. 236, 237.</p>
</div>
<div class="bx fact"><span class="t">Fakt 7.2 – statystyki pozycyjne</span>
<p>Dla próby z dystrybuantą \(F\):
\[P(X_{k:n}\le x)=\sum_{i=k}^n\binom ni F(x)^i\bigl(1-F(x)\bigr)^{n-i},\]
bo zdarzenie \(\{X_{k:n}\le x\}\) oznacza, że co najmniej \(k\) obserwacji jest \(\le x\). W szczególności \(F_{\max}=F^n\) i \(F_{\min}=1-(1-F)^n\). Dla \(U(0,\theta)\): \(\mathbb E\max X_i=\dfrac n{n+1}\theta\).</p>
<p class="use">Użyte w zad. 229 (dowodzone tamże), 234, 239.</p>
</div>
<div class="bx fact"><span class="t">Fakt 7.3 – dystrybuanta empiryczna</span>
<p>\(\hat F_n(x)=\tfrac1n\#\{i:X_i\le x\}\) spełnia \(n\hat F_n(x)\sim B\bigl(n,F(x)\bigr)\), czyli
\[\mathbb E\hat F_n(x)=F(x),\qquad\operatorname{Var}\hat F_n(x)=\frac{F(x)\bigl(1-F(x)\bigr)}n,\]
\[\operatorname{Cov}\bigl(\hat F_n(x),\hat F_n(y)\bigr)=\frac{F(\min(x,y))-F(x)F(y)}n,\qquad\sqrt n\bigl(\hat F_n(x)-F(x)\bigr)\to N\bigl(0,F(x)(1-F(x))\bigr).\]
Twierdzenie Gliwienki–Cantellego: \(\sup_x|\hat F_n(x)-F(x)|\to0\) prawie na pewno.</p>
<p class="use">Użyte w zad. 227, 228, 229.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 7.4 – próba z rozkładu normalnego</span>
<p>Dla próby z \(N(\mu,\sigma^2)\):</p>
<ul>
<li>\(\bar X\sim N\bigl(\mu,\tfrac{\sigma^2}n\bigr)\), a zmienne \(\bar X\) i \(S^2\) są niezależne;</li>
<li>\(\dfrac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1}\) oraz \(\dfrac{\bar X-\mu}{S/\sqrt n}\sim t_{n-1}\) (rozkład Studenta).</li>
</ul>
<p>Dla innych rozkładów \(\bar X\) i \(S^2\) są na ogół zależne.</p>
<p class="use">Użyte w zad. 236, 237 (dowodzone tamże).</p>
</div>

<h3>Estymacja punktowa</h3>
<div class="bx def"><span class="t">Definicja 8.1 – estymator: obciążenie i zgodność</span>
<p>Estymator \(\hat\theta\) parametru \(\theta\) to funkcja próby.</p>
<ul>
<li>Jest <b>nieobciążony</b>, gdy \(\mathbb E_\theta\hat\theta=\theta\) dla każdego \(\theta\).</li>
<li>Jest <b>zgodny</b>, gdy \(\hat\theta_n\to\theta\) (według prawdopodobieństwa lub prawie na pewno). Estymator nieobciążony o wariancji dążącej do zera jest zgodny, i to w sensie średniokwadratowym (\(\mathbb E(\hat\theta_n-\theta)^2\to0\)).</li>
<li>Nieobciążony estymator postaci \(c\cdot T\) dostajemy, dobierając \(c\) z warunku \(\mathbb E(cT)=\theta\).</li>
</ul>
<p class="use">Użyte w zad. 227, 232, 233, 235, 239.</p>
</div>
<div class="bx def"><span class="t">Definicja 8.2 – ryzyko i błąd średniokwadratowy</span>
<p>Funkcja ryzyka (przy kwadratowej funkcji straty):
\[R(\theta)=\mathbb E_\theta(\hat\theta-\theta)^2=\operatorname{Var}_\theta\hat\theta+\bigl(\mathbb E_\theta\hat\theta-\theta\bigr)^2.\]
Z dwóch estymatorów żaden nie musi być lepszy dla wszystkich \(\theta\); wtedy porównuje się na przykład największe ryzyko. Z dwóch estymatorów nieobciążonych lepszy jest ten o mniejszej wariancji.</p>
<p class="use">Użyte w zad. 233, 239.</p>
</div>
<div class="bx met"><span class="t">Metoda 8.3 – estymator największej wiarogodności</span>
<ol>
<li>Zapisz wiarogodność \(L(\theta)=\prod f_\theta(x_i)\) (lub prawdopodobieństwo zaobserwowanych danych), przejdź do \(\ell=\ln L\).</li>
<li>Rozwiąż \(\ell'(\theta)=0\) i sprawdź, że to maksimum.</li>
<li>Gdy parametr jest całkowity, porównuj \(L(N)/L(N-1)\) z jedynką.</li>
<li>Gdy nośnik zależy od parametru (np. \(U(0,\theta)\)), maksimum leży na brzegu, np. \(\hat\theta=\max X_i\).</li>
</ol>
<p>Estymatorem największej wiarogodności \(g(\theta)\) jest \(g(\hat\theta)\). Estymator może nie istnieć (gdy wiarogodność nie osiąga maksimum).</p>
<p class="use">Użyte w zad. 231, 232, 238.</p>
</div>
<div class="bx met"><span class="t">Metoda 8.4 – metoda momentów</span>
<p>Przyrównaj momenty teoretyczne \(\mathbb E_\theta X^k\) do momentów z próby \(\tfrac1n\sum X_i^k\) i rozwiąż względem \(\theta\). Przykład: dla \(U(0,\theta)\) z \(\mathbb EX=\tfrac\theta2\) dostajemy \(\hat\theta=2\bar X\).</p>
<p class="use">Użyte w zad. 239.</p>
</div>
<div class="bx fact"><span class="t">Fakt 8.5 – porównywanie estymatorów</span>
<p>Wariancję estymatora liczymy z wariancji użytych statystyk.</p>
<ul>
<li>Dla \(U(0,\theta)\): \(\operatorname{Var}(2\bar X)=\dfrac{\theta^2}{3n}\), a \(\operatorname{Var}\Bigl(\dfrac{n+1}n\max X_i\Bigr)=\dfrac{\theta^2}{n(n+2)}\), więc estymator oparty na maksimum jest znacznie lepszy.</li>
<li>Dla rozkładu normalnego ze znaną średnią \(0\): \(\hat\sigma^2=\tfrac1n\sum X_i^2\) ma \(\operatorname{Var}=\dfrac{2\sigma^4}n\).</li>
</ul>
<p class="use">Użyte w zad. 232, 239.</p>
</div>

<h3>Przedziały ufności</h3>
<div class="bx def"><span class="t">Definicja 9.1 – przedział ufności</span>
<p>Przedział \([L,U]\), którego końce są funkcjami próby, jest przedziałem ufności dla \(\theta\) na poziomie \(1-\alpha\), gdy \(P_\theta(L\le\theta\le U)\ge1-\alpha\) dla każdego \(\theta\).</p>
<p class="use">Użyte w zad. 234, 236.</p>
</div>
<div class="bx met"><span class="t">Metoda 9.2 – konstrukcja przez funkcję centralną</span>
<ol>
<li>Znajdź zmienną zależną od próby i \(\theta\), której rozkład nie zależy od \(\theta\) (np. \(\dfrac{\bar X-\mu}{\sigma/\sqrt n}\sim N(0,1)\)).</li>
<li>Zapisz dla niej przedział o prawdopodobieństwie \(1-\alpha\).</li>
<li>Przekształć nierówności względem \(\theta\).</li>
</ol>
<p>Przedział dwustronny bierze kwantyle rzędu \(\tfrac\alpha2\) i \(1-\tfrac\alpha2\).</p>
<p class="use">Użyte w zad. 236.</p>
</div>
<div class="bx fact"><span class="t">Fakt 9.3 – przedziały dla rozkładu normalnego</span>
<ul>
<li>Średnia przy znanym \(\sigma\): \(\bar x\pm z_{1-\alpha/2}\dfrac\sigma{\sqrt n}\), gdzie \(z_{1-\alpha/2}=\Phi^{-1}\bigl(1-\tfrac\alpha2\bigr)\) (dla \(\alpha=0{,}05\): \(1{,}96\)).</li>
<li>Średnia przy nieznanym \(\sigma\): \(\bar x\pm t_{n-1,1-\alpha/2}\dfrac s{\sqrt n}\).</li>
<li>Wariancja: \(\left[\dfrac{(n-1)s^2}{\chi^2_{n-1,1-\alpha/2}},\ \dfrac{(n-1)s^2}{\chi^2_{n-1,\alpha/2}}\right]\).</li>
</ul>
<p>Symbole \(t_{k,p}\) i \(\chi^2_{k,p}\) oznaczają kwantyle rzędu \(p\) rozkładów Studenta i \(\chi^2\) o \(k\) stopniach swobody.</p>
<p class="use">Użyte w zad. 236.</p>
</div>
<div class="bx fact"><span class="t">Fakt 9.4 – przedział asymptotyczny dla prawdopodobieństwa sukcesu</span>
<p>Dla dużego \(n\) i częstości \(\hat p\) (z centralnego twierdzenia granicznego):
\[\hat p\pm z_{1-\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}n}.\]</p>
<p class="use">Poza rozwiązaniami (materiał standardowy).</p>
</div>
<div class="bx fact"><span class="t">Fakt 9.5 – przedział dla mediany</span>
<p>Dla rozkładu ciągłego z medianą \(m\) liczba obserwacji \(\le m\) ma rozkład \(B\bigl(n,\tfrac12\bigr)\), więc
\[P(X_{k:n}\le m\le X_{l:n})=\sum_{j=k}^{l-1}\binom nj2^{-n}.\]
Wynik nie zależy od rozkładu (metoda nieparametryczna).</p>
<p class="use">Użyte w zad. 234.</p>
</div>
<h3>Testowanie hipotez</h3>
<div class="bx def"><span class="t">Definicja 10.1 – test statystyczny</span>
<p>Test to reguła odrzucania hipotezy zerowej \(H_0\) na rzecz alternatywy \(H_1\), gdy statystyka testowa wpada do obszaru krytycznego \(K\).</p>
<ul>
<li><b>Błąd I rodzaju:</b> odrzucenie prawdziwej \(H_0\) (jego prawdopodobieństwo nie przekracza poziomu istotności \(\alpha\)).</li>
<li><b>Błąd II rodzaju:</b> nieodrzucenie fałszywej \(H_0\).</li>
<li><b>Moc testu:</b> prawdopodobieństwo odrzucenia \(H_0\), gdy prawdziwa jest \(H_1\).</li>
<li><b>Wartość \(p\):</b> najmniejszy poziom istotności, przy którym dane prowadzą do odrzucenia \(H_0\).</li>
</ul>
<p class="use">Poza rozwiązaniami (materiał standardowy).</p>
</div>
<div class="bx fact"><span class="t">Fakt 10.2 – testy dla średniej rozkładu normalnego</span>
<p>\(H_0:\mu=\mu_0\). Statystyka testowa:</p>
<ul>
<li>przy znanym \(\sigma\): \(Z=\dfrac{\bar X-\mu_0}{\sigma/\sqrt n}\sim N(0,1)\),</li>
<li>przy nieznanym \(\sigma\): \(T=\dfrac{\bar X-\mu_0}{S/\sqrt n}\sim t_{n-1}\).</li>
</ul>
<p>Dla alternatywy dwustronnej odrzucamy \(H_0\), gdy \(|Z|>z_{1-\alpha/2}\), dla jednostronnej \(\mu>\mu_0\), gdy \(Z>z_{1-\alpha}\). Przedział ufności i test są dualne: \(H_0\) odrzucamy dokładnie wtedy, gdy \(\mu_0\) nie należy do przedziału ufności.</p>
<p class="use">Poza rozwiązaniami (materiał standardowy).</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 10.3 – lemat Neymana–Pearsona</span>
<p>Dla prostych hipotez \(H_0:\theta=\theta_0\) i \(H_1:\theta=\theta_1\) najmocniejszy test na poziomie \(\alpha\) odrzuca \(H_0\), gdy iloraz wiarogodności \(\dfrac{L(\theta_1)}{L(\theta_0)}\) przekracza stałą dobraną tak, by prawdopodobieństwo błędu I rodzaju wynosiło \(\alpha\).</p>
<p class="use">Poza rozwiązaniami (materiał standardowy).</p>
</div>

<h3>Katalog przykładów i kontrprzykładów</h3>
<div class="bx ex"><span class="t">Przykład 11.1 – zależność i korelacja</span>
<ul>
<li>Dla \(X\) jednostajnego na \(\{-1,0,1\}\) zmienne \(X\) i \(X^2\) są nieskorelowane, ale zależne.</li>
<li>W dwóch rzutach monetą zdarzenia „orzeł w pierwszym”, „orzeł w drugim” i „oba wyniki równe” są parami niezależne, ale nie łącznie.</li>
<li>Jeśli \(X,Y\sim N(0,1)\) są niezależne i \(Z=\pm3\), to \(X+YZ\sim N(0,10)\), ale gdyby \(|Z|\) przyjmowało różne wartości, dostalibyśmy mieszaninę rozkładów normalnych, która nie jest normalna.</li>
</ul>
<p class="use">Użyte w zad. 209, 217.</p>
</div>
<div class="bx ex"><span class="t">Przykład 11.2 – rozkłady i momenty</span>
<ul>
<li>Rozkład Cauchy’ego (gęstość \(\dfrac1{\pi(1+x^2)}\)) nie ma wartości oczekiwanej, a średnia z próby ma ten sam rozkład Cauchy’ego, więc nie zbiega do żadnej stałej.</li>
<li>Dystrybuanta może mieć jednocześnie skoki i część ciągłą (rozkład mieszany).</li>
<li>Funkcja \(b-\dfrac a{(t+1)^2}\) dla \(t\ge-\tfrac12\) (i \(0\) poniżej) jest dystrybuantą tylko dla \(b=1\), \(0\le a\le\tfrac14\).</li>
</ul>
<p class="use">Użyte w zad. 205, 206.</p>
</div>
<div class="bx ex"><span class="t">Przykład 11.3 – zbieżności i twierdzenia graniczne</span>
<ul>
<li>Jeśli \(A_n=A\) dla wszystkich \(n\) i \(P(A)=\tfrac12\), to \(\sum P(A_n)=\infty\), ale \(P(\limsup A_n)=\tfrac12\): drugi lemat Borela–Cantellego wymaga niezależności.</li>
<li>Dla \(X\sim N(0,1)\) ciąg stały \(X_n=X\) zbiega według rozkładu do \(-X\), ale nie według prawdopodobieństwa.</li>
</ul>
<p class="use">Użyte w zad. 199, 200.</p>
</div>
<div class="bx ex"><span class="t">Przykład 11.4 – estymacja</span>
<ul>
<li>Estymator obciążony może mieć mniejsze ryzyko niż nieobciążony dla większości wartości parametru (np. \(\dfrac{K+1}{n+2}\) i \(\dfrac Kn\) w schemacie Bernoulliego).</li>
<li>Estymator największej wiarogodności może nie istnieć (metoda wielokrotnego połowu, gdy żadna ryba nie jest oznakowana).</li>
<li>Pierwiastek z nieobciążonego estymatora wariancji jest obciążonym estymatorem odchylenia standardowego.</li>
</ul>
<p class="use">Użyte w zad. 232, 233, 238.</p>
</div>

<h3>Dodatek: narzędzia z analizy i kombinatoryki</h3>
<p>Rozwiązania zadań korzystają też z kilku faktów z analizy i kombinatoryki. Zebrano je tutaj, aby skrypt był samodzielny.</p>
<div class="bx thm"><span class="t">Twierdzenie 12.1 – wzór Newtona–Leibniza i całka niewłaściwa</span>
<p>Jeśli \(F\) jest funkcją pierwotną funkcji ciągłej \(f\) na \([a,b]\), to \(\displaystyle\int_a^bf=F(b)-F(a)\). Całka niewłaściwa to \(\displaystyle\int_a^\infty f=\lim_{T\to\infty}\int_a^Tf\); jest zbieżna, gdy ta granica jest skończona.</p>
<p class="use">Użyte w zad. 205, 208, 210, 220, 224, 239.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 12.2 – całkowanie przez podstawienie</span>
<p>Jeśli \(\varphi\) jest klasy \(C^1\), a \(f\) ciągła, to
\[\int_a^bf(\varphi(t))\,\varphi'(t)\,dt=\int_{\varphi(a)}^{\varphi(b)}f(s)\,ds\]
(także dla całek niewłaściwych).</p>
<p class="use">Użyte w zad. 212.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie 12.3 – całkowanie przez części</span>
\[\int_a^buv'\,dx=\bigl[uv\bigr]_a^b-\int_a^bu'v\,dx.\]
<p class="use">Użyte w zad. 213, 224.</p>
</div>
<div class="bx fact"><span class="t">Fakt 12.4 – reguła łańcuchowa</span>
<p>\((g\circ r)'(y)=g'(r(y))\,r'(y)\); stosuje się ją do różniczkowania dystrybuanty zmiennej \(Y=g(X)\).</p>
<p class="use">Użyte w zad. 212.</p>
</div>
<div class="bx cor"><span class="t">Wniosek 12.5 – znak pochodnej a ekstremum</span>
<p>Jeśli \(f\) jest ciągła w \(c\), \(f'>0\) na lewo od \(c\) i \(f'&lt;0\) na prawo od \(c\), to \(f(c)\) jest wartością największą (analogicznie dla najmniejszej). W szczególności funkcja wklęsła (\(f''&lt;0\)) ma w punkcie, w którym \(f'=0\), maksimum.</p>
<p class="use">Użyte w zad. 231, 232.</p>
</div>
<div class="bx fact"><span class="t">Fakt 12.6 – szereg geometryczny i jego pochodne</span>
<p>Dla \(|q|&lt;1\):
\[\sum_{n\ge0}q^n=\frac1{1-q},\qquad\sum_{k\ge1}kq^{k-1}=\frac1{(1-q)^2},\qquad\sum_{k\ge2}k(k-1)q^{k-2}=\frac2{(1-q)^3}\]
(różniczkowanie wyraz po wyrazie).</p>
<p class="use">Użyte w zad. 215.</p>
</div>
<div class="bx fact"><span class="t">Fakt 12.7 – szereg wykładniczy</span>
\[e^x=\sum_{k=0}^\infty\frac{x^k}{k!}\qquad\text{dla każdego }x\in\mathbb R.\]
<p class="use">Użyte w zad. 214.</p>
</div>
<div class="bx fact"><span class="t">Fakt 12.8 – szereg harmoniczny i iloczyn teleskopowy</span>
<ul>
<li>Szereg \(\sum_{n\ge1}\dfrac1n\) jest rozbieżny.</li>
<li>\(\displaystyle\prod_{n=N+1}^M\frac n{n+1}=\frac{N+1}{M+1}\).</li>
</ul>
<p class="use">Użyte w zad. 200.</p>
</div>
<div class="bx fact"><span class="t">Fakt 12.9 – granice ciągów</span>
<ul>
<li>Jeśli \(a_n\to a\) i \(b_n\to b\), to \(a_n+b_n\to a+b\), \(a_nb_n\to ab\) oraz \(a_n/b_n\to a/b\) przy \(b\ne0\).</li>
<li>Ciąg monotoniczny i ograniczony jest zbieżny.</li>
<li>Przecięcie skończenie wielu zdarzeń o prawdopodobieństwie \(1\) ma prawdopodobieństwo \(1\), więc te same reguły działają dla zbieżności prawie na pewno.</li>
</ul>
<p class="use">Użyte w zad. 224 (ciąg monotoniczny), 226 (iloraz granic).</p>
</div>
<div class="bx fact"><span class="t">Fakt 12.10 – wzór dwumianowy Newtona, współczynnik dwumianowy</span>
\[(a+b)^n=\sum_{k=0}^n\binom nk a^kb^{n-k},\qquad\binom nk=\frac{n!}{k!(n-k)!},\]
<p>gdzie \(\binom nk\) to liczba \(k\)-elementowych podzbiorów zbioru \(n\)-elementowego.</p>
<p class="use">Użyte w zad. 201, 203, 204, 213, 223, 229, 234, 238.</p>
</div>
`;
