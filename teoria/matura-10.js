(window.THEORY = window.THEORY || {})['matura-10'] = String.raw`
<h3>Granica funkcji i asymptoty</h3>
<div class="bx def"><span class="t">Granica funkcji w punkcie</span>
<p>Liczba \(g\) jest <b>granicą funkcji</b> \(f\) w punkcie \(x_0\) (\(\lim\limits_{x\to x_0}f(x)=g\)), gdy dla każdego ciągu \((x_n)\) o wyrazach z dziedziny, \(x_n\ne x_0\), zbieżnego do \(x_0\), ciąg \(f(x_n)\) jest zbieżny do \(g\) (definicja Heinego). Granice <b>jednostronne</b>: \(\lim\limits_{x\to x_0^-}\) (z lewej, \(x&lt;x_0\)) i \(\lim\limits_{x\to x_0^+}\) (z prawej). Granica istnieje, gdy obie jednostronne istnieją i są równe. Granice niewłaściwe: \(\pm\infty\); granice w nieskończoności: \(\lim\limits_{x\to\pm\infty}f(x)\).</p>
</div>
<div class="bx thm"><span class="t">Twierdzenia i granice, które trzeba znać</span>
<ul>
<li><b>Działania:</b> jeśli granice \(f\) i \(g\) istnieją i są skończone, to \(\lim(f\pm g)\), \(\lim(f\cdot g)\), \(\lim\tfrac fg\) (dla \(\lim g\ne0\)) są równe odpowiednio sumie, różnicy, iloczynowi, ilorazowi granic. Granica funkcji ciągłej: \(\lim\limits_{x\to x_0}f(x)=f(x_0)\).</li>
<li>\(\lim\limits_{x\to\pm\infty}\dfrac1{x^n}=0\); \(\ \lim\limits_{x\to0^+}\dfrac1x=+\infty\), \(\ \lim\limits_{x\to0^-}\dfrac1x=-\infty\); \(\ \lim\limits_{x\to0}\dfrac{\sin x}x=1\).</li>
<li><b>Funkcja wymierna w \(\pm\infty\):</b> dzielimy licznik i mianownik przez najwyższą potęgę \(x\) – jak dla ciągów (granica to iloraz współczynników przy najwyższych potęgach, gdy stopnie równe; \(0\), gdy licznik niższego stopnia; \(\pm\infty\) – gdy wyższego).</li>
<li><b>Symbol \(\tfrac00\)</b> (np. \(\lim\limits_{x\to a}\dfrac{W(x)}{V(x)}\) z \(W(a)=V(a)=0\)): rozłóż licznik i mianownik na czynniki, skróć \((x-a)\) i policz granicę ponownie. Dla pierwiastków: pomnóż przez sprzężenie.</li>
<li>\(\dfrac c0\) dla \(c\ne0\): granica jest \(\pm\infty\) albo nie istnieje – zbadaj granice jednostronne i znak mianownika.</li>
</ul>
</div>
<div class="bx def"><span class="t">Asymptoty</span>
<ul>
<li><b>Pionowa</b> \(x=a\): gdy \(\lim\limits_{x\to a^\pm}f(x)=\pm\infty\) (przynajmniej jedna granica jednostronna).</li>
<li><b>Pozioma</b> \(y=b\): gdy \(\lim\limits_{x\to+\infty}f(x)=b\) lub \(\lim\limits_{x\to-\infty}f(x)=b\). <b>Ukośna</b> \(y=ax+b\): gdy \(\lim(f(x)-(ax+b))=0\) w \(\pm\infty\); \(a=\lim\tfrac{f(x)}x\), \(b=\lim(f(x)-ax)\).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(\lim\limits_{x\to2}\dfrac{x^2-4}{x^2-5x+6}=\lim\limits_{x\to2}\dfrac{(x-2)(x+2)}{(x-2)(x-3)}=\dfrac4{-1}=-4\). \(\ \lim\limits_{x\to\infty}\dfrac{3x^2+1}{x^2-x}=3\). Funkcja \(\dfrac{x^2+1}{x}=x+\dfrac1x\) ma asymptotę pionową \(x=0\) i ukośną \(y=x\).</p>
</div>

<h3>Ciągłość funkcji</h3>
<div class="bx def"><span class="t">Definicja</span>
<p>Funkcja \(f\) jest <b>ciągła w punkcie</b> \(x_0\) z dziedziny, gdy \(\lim\limits_{x\to x_0}f(x)=f(x_0)\), czyli istnieją granice jednostronne równe \(f(x_0)\). Jest ciągła w zbiorze, gdy jest ciągła w każdym jego punkcie. Funkcje elementarne (wielomiany, wymierne, wykładnicze, logarytmiczne, trygonometryczne) są ciągłe w swoich dziedzinach; suma, iloczyn, iloraz (z niezerowym mianownikiem) i złożenie funkcji ciągłych są ciągłe.</p>
</div>
<div class="bx thm"><span class="t">Twierdzenia</span>
<ul>
<li><b>Własność Darboux:</b> funkcja ciągła w \([a,b]\) przyjmuje każdą wartość pośrednią między \(f(a)\) i \(f(b)\). W szczególności, gdy \(f(a)\cdot f(b)&lt;0\), równanie \(f(x)=0\) ma rozwiązanie w \((a,b)\).</li>
<li><b>Twierdzenie Weierstrassa:</b> funkcja ciągła w przedziale domkniętym \([a,b]\) przyjmuje w nim wartość najmniejszą i największą.</li>
<li>Zadania z parametrem: dobór parametru tak, aby funkcja określona „kawałkami” była ciągła w punkcie sklejenia – przyrównaj granice jednostronne i wartość funkcji.</li>
</ul>
</div>

<h3>Pochodna i reguły różniczkowania</h3>
<div class="bx def"><span class="t">Definicja pochodnej</span>
<p>\[f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0},\]
o ile granica istnieje i jest skończona (wtedy \(f\) jest <b>różniczkowalna</b> w \(x_0\); różniczkowalność pociąga ciągłość, a nie odwrotnie – np. \(|x|\) w zerze). <b>Interpretacja geometryczna:</b> \(f'(x_0)\) to współczynnik kierunkowy stycznej do wykresu w punkcie \((x_0,f(x_0))\), czyli \(\operatorname{tg}\alpha\). <b>Fizyczna:</b> chwilowa prędkość zmiany (prędkość, gdy \(f\) to droga).</p>
</div>
<div class="bx thm"><span class="t">Wzory na pochodne</span>
<div class="two">
<div>
\[(c)'=0,\qquad(ax+b)'=a,\qquad(x^n)'=nx^{n-1}\]
\[(\sqrt x)'=\frac1{2\sqrt x},\qquad\left(\frac1x\right)'=-\frac1{x^2}\]
\[(\sin x)'=\cos x,\qquad(\cos x)'=-\sin x\]
</div>
<div>
\[(\operatorname{tg}x)'=\frac1{\cos^2x}\]
\[(e^x)'=e^x,\qquad(a^x)'=a^x\ln a\]
\[(\ln x)'=\frac1x,\qquad(\log_ax)'=\frac1{x\ln a}\]
</div>
</div>
<p>(Pochodne funkcji wykładniczej, logarytmicznej i trygonometrycznych wykraczają poza wymagania matury rozszerzonej, ale pojawiają się na studiach.)</p>
</div>
<div class="bx thm"><span class="t">Reguły</span>
\[(f\pm g)'=f'\pm g',\quad(c\,f)'=c\,f',\quad(f\cdot g)'=f'g+fg',\quad\left(\frac fg\right)'=\frac{f'g-fg'}{g^2},\quad\bigl(f(g(x))\bigr)'=f'(g(x))\cdot g'(x).\]
<p>W złożeniu \(f(g(x))\) funkcję \(g\) nazywamy <b>wewnętrzną</b>, a \(f\) – <b>zewnętrzną</b>; pochodną liczymy od zewnętrznej (w punkcie \(g(x)\)) i mnożymy przez pochodną wewnętrznej.</p>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(f(x)=\dfrac{x^2-1}{x+2}\): \(f'(x)=\dfrac{2x(x+2)-(x^2-1)}{(x+2)^2}=\dfrac{x^2+4x+1}{(x+2)^2}\). \(\ g(x)=(3x-1)^5\): \(g'(x)=5(3x-1)^4\cdot3\). \(\ h(x)=\sqrt{x^2+1}\): \(h'(x)=\dfrac{x}{\sqrt{x^2+1}}\).</p>
</div>

<h3>Styczna do wykresu funkcji</h3>
<div class="bx thm"><span class="t">Równanie stycznej</span>
\[y=f(x_0)+f'(x_0)\,(x-x_0).\]
<ul>
<li><b>Styczna równoległa</b> do prostej o współczynniku \(a\): \(f'(x_0)=a\); <b>prostopadła</b> do prostej o współczynniku \(a\ne0\): \(f'(x_0)=-\tfrac1a\). Z równania wyznaczamy punkt styczności.</li>
<li><b>Styczna przechodząca przez dany punkt \(P\) spoza wykresu:</b> ustal punkt styczności \((t,f(t))\), zapisz równanie stycznej, wstaw współrzędne \(P\) i rozwiąż równanie na \(t\).</li>
<li><b>Normalna</b> do wykresu w \((x_0,f(x_0))\): prosta prostopadła do stycznej, \(y=f(x_0)-\dfrac1{f'(x_0)}(x-x_0)\) dla \(f'(x_0)\ne0\).</li>
<li>Kąt nachylenia stycznej do osi \(Ox\): \(\operatorname{tg}\alpha=f'(x_0)\). Dwie krzywe mają wspólną styczną w punkcie, gdy mają w nim równe wartości i równe pochodne.</li>
</ul>
</div>

<h3>Monotoniczność i ekstrema lokalne</h3>
<div class="bx thm"><span class="t">Monotoniczność</span>
<p>Jeśli \(f'(x)>0\) dla każdego \(x\) z przedziału, to \(f\) jest w nim rosnąca; jeśli \(f'(x)&lt;0\) – malejąca; jeśli \(f'(x)\ge0\) (i zeruje się tylko w izolowanych punktach) – nadal rosnąca (np. \(x^3\)).</p>
</div>
<div class="bx thm"><span class="t">Ekstrema lokalne</span>
<ul>
<li><b>Warunek konieczny:</b> jeśli \(f\) ma ekstremum lokalne w \(x_0\) i jest tam różniczkowalna, to \(f'(x_0)=0\). Punkty z \(f'=0\) nazywamy <b>punktami krytycznymi</b> (stacjonarnymi); zero pochodnej nie musi dawać ekstremum.</li>
<li><b>Warunek dostateczny:</b> jeśli \(f'\) zmienia znak z \(+\) na \(-\) w \(x_0\) – maksimum lokalne; z \(-\) na \(+\) – minimum lokalne. (Zmiana znaku nie następuje, gdy \(f'\) ma w \(x_0\) pierwiastek parzystej krotności.)</li>
<li>Maksimum lokalne nie musi być największą wartością funkcji w całej dziedzinie.</li>
</ul>
</div>
<div class="bx met"><span class="t">Największa i najmniejsza wartość</span>
<ul>
<li><b>W przedziale domkniętym \([a,b]\)</b> (funkcja ciągła): policz \(f\) w punktach krytycznych należących do \((a,b)\) oraz na końcach \(a,b\) i wybierz największą i najmniejszą z tych wartości.</li>
<li><b>W przedziale otwartym lub nieograniczonym:</b> zbadaj monotoniczność i granice na końcach (wartość ekstremalna może nie istnieć). Funkcja różniczkowalna z jedynym ekstremum lokalnym, będącym minimum (maksimum), ma tam wartość najmniejszą (największą) w całym przedziale.</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(f(x)=x^3-3x\): \(f'(x)=3x^2-3=3(x-1)(x+1)\). \(f'>0\) dla \(x&lt;-1\) i \(x>1\), \(f'&lt;0\) dla \(-1&lt;x&lt;1\). Zatem maksimum lokalne \(f(-1)=2\), minimum lokalne \(f(1)=-2\). W przedziale \([-2,3]\): \(f(-2)=-2\), \(f(3)=18\) – najmniejsza wartość \(-2\) (w \(x=-2\) i \(x=1\)), największa \(18\).</p>
</div>

<h3>Zadania optymalizacyjne</h3>
<div class="bx met"><span class="t">Algorytm</span>
<ol>
<li><b>Wybierz niewiadomą</b> \(x\) i wyraź przez nią wielkość, którą optymalizujesz (pole, objętość, koszt, odległość) jako funkcję \(f(x)\); użyj warunku z zadania do wyeliminowania pozostałych zmiennych.</li>
<li><b>Wyznacz dziedzinę</b> wynikającą z treści (długości dodatnie, ograniczenia geometryczne!).</li>
<li>Policz \(f'(x)\), znajdź punkty krytyczne w dziedzinie.</li>
<li><b>Uzasadnij charakter ekstremum:</b> badanie znaku pochodnej lub porównanie wartości na końcach domkniętej dziedziny. Gdy \(f\) jest funkcją kwadratową, wystarczą własności paraboli: wartość ekstremalna jest w wierzchołku (o ile jego pierwsza współrzędna należy do dziedziny), a ramiona w górę oznaczają minimum, w dół – maksimum.</li>
<li>Odpowiedz na pytanie z zadania (często potrzebna jest też wartość optymalizowanej wielkości, a nie tylko punkt \(x\)).</li>
</ol>
</div>
<div class="bx warn"><span class="t">Częste błędy</span>
<p>Pominięcie dziedziny (punkt z \(f'=0\) może leżeć poza nią – wtedy ekstremum jest na brzegu); brak uzasadnienia, że to minimum, a nie maksimum; odpowiedź podana dla \(x\) zamiast dla szukanej wielkości.</p>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Spośród prostokątów o obwodzie \(20\) znajdź ten o największym polu. Boki \(x\) i \(10-x\), \(x\in(0,10)\): \(P(x)=x(10-x)=10x-x^2\), \(P'(x)=10-2x=0\Rightarrow x=5\); \(P'>0\) dla \(x&lt;5\), \(P'&lt;0\) dla \(x>5\) – maksimum. Największe pole ma kwadrat \(5\times5\), \(P=25\).</p>
</div>

<h3>Badanie przebiegu zmienności funkcji (schemat)</h3>
<ol>
<li>Dziedzina; parzystość/nieparzystość; punkty przecięcia z osiami.</li>
<li>Granice na końcach dziedziny i asymptoty (pionowe, poziome, ukośne).</li>
<li>Pochodna: monotoniczność i ekstrema lokalne (tabelka znaków \(f'\)).</li>
<li>Druga pochodna (rozszerzenie): \(f''>0\) – funkcja wypukła (krzywa „ku górze”), \(f''&lt;0\) – wklęsła; zmiana znaku \(f''\) – punkt przegięcia.</li>
<li>Zbiór wartości i szkic wykresu; liczba rozwiązań równania \(f(x)=m\) odczytana z wykresu.</li>
</ol>
`;
