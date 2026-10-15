(window.THEORY = window.THEORY || {})['matura-10'] = String.raw`
<h3>Granica funkcji i asymptoty</h3>
<div class="bx def"><span class="t">Granica funkcji w punkcie</span>
<p>Liczba \(g\) jest <b>granicą funkcji</b> \(f\) w punkcie \(x_0\) (\(\lim\limits_{x\to x_0}f(x)=g\)), gdy dla każdego ciągu \((x_n)\) o wyrazach z dziedziny, \(x_n\ne x_0\), zbieżnego do \(x_0\), ciąg \(f(x_n)\) jest zbieżny do \(g\) (definicja Heinego). Granice <b>jednostronne</b>: \(\lim\limits_{x\to x_0^-}\) (z lewej, \(x&lt;x_0\)) i \(\lim\limits_{x\to x_0^+}\) (z prawej). Granica istnieje, gdy obie jednostronne istnieją i są równe. Granice niewłaściwe: \(\pm\infty\); granice w nieskończoności: \(\lim\limits_{x\to\pm\infty}f(x)\).</p>
</div>
<div class="bx thm"><span class="t">Twierdzenia i granice, które trzeba znać</span>
<ul>
<li><b>Działania:</b> jeśli granice \(f\) i \(g\) istnieją i są skończone, to \(\lim(f\pm g)\), \(\lim(f\cdot g)\), \(\lim\tfrac fg\) (dla \(\lim g\ne0\)) są równe odpowiednio sumie, różnicy, iloczynowi, ilorazowi granic. Granica funkcji ciągłej: \(\lim\limits_{x\to x_0}f(x)=f(x_0)\).</li>
<li>\(\lim\limits_{x\to\pm\infty}\dfrac1{x^n}=0\); \(\ \lim\limits_{x\to0^+}\dfrac1x=+\infty\), \(\ \lim\limits_{x\to0^-}\dfrac1x=-\infty\); \(\ \lim\limits_{x\to0}\dfrac{\sin x}x=1\) (to ostatnie jest poza wymaganiami, ale często się przydaje).</li>
<li><b>Funkcja wymierna w \(\pm\infty\):</b> dzielimy licznik i mianownik przez najwyższą potęgę \(x\) – jak dla ciągów (granica to iloraz współczynników przy najwyższych potęgach, gdy stopnie równe; \(0\), gdy licznik niższego stopnia; \(\pm\infty\) – gdy wyższego).</li>
<li><b>Symbol \(\tfrac00\)</b> (np. \(\lim\limits_{x\to a}\dfrac{W(x)}{V(x)}\) z \(W(a)=V(a)=0\)): rozłóż licznik i mianownik na czynniki, skróć \((x-a)\) i policz granicę ponownie. Dla pierwiastków: pomnóż przez sprzężenie.</li>
<li>\(\dfrac c0\) dla \(c\ne0\): granica jest \(\pm\infty\) albo nie istnieje – zbadaj granice jednostronne i znak mianownika.</li>
</ul>
</div>
<div class="bx def"><span class="t">Asymptoty</span>
<ul>
<li><b>Pionowa</b> \(x=a\): gdy \(\lim\limits_{x\to a^\pm}f(x)=\pm\infty\) (przynajmniej jedna granica jednostronna).</li>
<li><b>Pozioma</b> \(y=b\): gdy \(\lim\limits_{x\to+\infty}f(x)=b\) lub \(\lim\limits_{x\to-\infty}f(x)=b\).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(\lim\limits_{x\to2}\dfrac{x^2-4}{x^2-5x+6}=\lim\limits_{x\to2}\dfrac{(x-2)(x+2)}{(x-2)(x-3)}=\dfrac4{-1}=-4\). \(\ \lim\limits_{x\to\infty}\dfrac{3x^2+1}{x^2-x}=3\). Funkcja \(\dfrac{x+1}{x-2}\) ma asymptotę pionową \(x=2\) i poziomą \(y=1\).</p>
</div>
<div class="bx met"><span class="t">Granice z funkcją wykładniczą</span>
<ul>
<li>Dla \(a>1\): \(a^x\to+\infty\) przy \(x\to+\infty\) oraz \(a^x\to0\) przy \(x\to-\infty\). Dla \(0&lt;a&lt;1\) jest odwrotnie.</li>
<li>W ilorazach dzielimy licznik i mianownik przez składnik, który <b>rośnie najszybciej</b> (przy \(x\to+\infty\) – przez potęgę o największej podstawie), i korzystamy z tego, że \(c^x\to0\) dla \(0&lt;c&lt;1\), gdy \(x\to+\infty\).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykłady – granice z funkcją wykładniczą</span>
<p>\(\displaystyle\lim_{x\to+\infty}\frac{3\cdot2^x-5}{2^x+1}=\lim_{x\to+\infty}\frac{3-5\cdot2^{-x}}{1+2^{-x}}=3\), natomiast \(\displaystyle\lim_{x\to-\infty}\frac{3\cdot2^x-5}{2^x+1}=\frac{3\cdot0-5}{0+1}=-5\) (bo \(2^x\to0\) przy \(x\to-\infty\)).</p>
<p>\(\displaystyle\lim_{x\to+\infty}\frac{2^x-3^x}{2^x+3^x}=\lim_{x\to+\infty}\frac{\left(\frac23\right)^x-1}{\left(\frac23\right)^x+1}=\frac{0-1}{0+1}=-1\).</p>
</div>
<details class="opt"><summary><span class="optb">Poza wymaganiami</span>Asymptota ukośna</summary>
<div class="opt-body">
<p>Prosta \(y=ax+b\) jest asymptotą ukośną wykresu \(f\) w \(\pm\infty\), gdy \(\lim(f(x)-(ax+b))=0\); wtedy \(a=\lim\dfrac{f(x)}x\) i \(b=\lim(f(x)-ax)\). Przykład: \(f(x)=\dfrac{x^2+1}{x}=x+\dfrac1x\) ma asymptotę ukośną \(y=x\) (bo \(f(x)-x=\tfrac1x\to0\)) oraz pionową \(x=0\).</p>
</div></details>

<h3>Ciągłość funkcji</h3>
<div class="bx def"><span class="t">Definicja</span>
<p>Funkcja \(f\) jest <b>ciągła w punkcie</b> \(x_0\) z dziedziny, gdy \(\lim\limits_{x\to x_0}f(x)=f(x_0)\), czyli istnieją granice jednostronne równe \(f(x_0)\). Jest ciągła w zbiorze, gdy jest ciągła w każdym jego punkcie. Funkcje elementarne (wielomiany, wymierne, wykładnicze, logarytmiczne, trygonometryczne) są ciągłe w swoich dziedzinach; suma, iloczyn, iloraz (z niezerowym mianownikiem) i złożenie funkcji ciągłych są ciągłe.</p>
<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 178 156" width="178" height="156" role="img" aria-label="Ciaglosc funkcji w punkcie x0: granice jednostronne różne"><line class="ax" x1="4" y1="122" x2="169" y2="122"/><polygon class="ah" points="174,122 167,124.9 167,119.1"/><line class="ax" x1="10" y1="128" x2="10" y2="9"/><polygon class="ah" points="10,4 12.9,11 7.1,11"/><text x="172" y="137" text-anchor="end">x</text><text x="19" y="13" text-anchor="start">y</text><line class="s d w" x1="83.5" y1="122" x2="83.5" y2="54.9"/><line class="ax" x1="83.5" y1="119" x2="83.5" y2="125"/><text x="83.5" y="137" text-anchor="middle">x₀</text><polyline class="a" points="21,67.2 22.1,67.9 23.1,68.6 24.1,69.2 25.2,69.9 26.2,70.6 27.3,71.2 28.3,71.8 29.4,72.5 30.4,73.1 31.4,73.7 32.5,74.3 33.5,74.8 34.6,75.4 35.6,75.9 36.6,76.5 37.7,77 38.7,77.5 39.8,78 40.8,78.5 41.8,79 42.9,79.5 43.9,79.9 45,80.4 46,80.8 47.1,81.2 48.1,81.6 49.1,82 50.2,82.4 51.2,82.8 52.3,83.1 53.3,83.5 54.3,83.8 55.4,84.2 56.4,84.5 57.5,84.8 58.5,85.1 59.5,85.3 60.6,85.6 61.6,85.9 62.7,86.1 63.7,86.3 64.7,86.6 65.8,86.8 66.8,87 67.9,87.1 68.9,87.3 70,87.5 71,87.6 72,87.8 73.1,87.9 74.1,88 75.2,88.1 76.2,88.2 77.2,88.3 78.3,88.3 79.3,88.4 80.4,88.4 81.4,88.4 82.4,88.5 83.5,88.5"/><polyline class="a" points="83.5,56.6 84.8,56.6 86.1,56.6 87.3,56.5 88.6,56.5 89.9,56.4 91.2,56.3 92.5,56.2 93.8,56 95.1,55.9 96.3,55.7 97.6,55.5 98.9,55.3 100.2,55.1 101.5,54.8 102.8,54.6 104.1,54.3 105.4,54 106.6,53.7 107.9,53.4 109.2,53 110.5,52.6 111.8,52.2 113.1,51.8 114.4,51.4 115.6,51 116.9,50.5 118.2,50 119.5,49.5 120.8,49 122.1,48.5 123.4,47.9 124.6,47.4 125.9,46.8 127.2,46.2 128.5,45.5 129.8,44.9 131.1,44.2 132.4,43.6 133.6,42.9 134.9,42.2 136.2,41.4 137.5,40.7 138.8,39.9 140.1,39.1 141.4,38.3 142.6,37.5 143.9,36.7 145.2,35.8 146.5,34.9 147.8,34 149.1,33.1 150.4,32.2 151.6,31.2 152.9,30.3 154.2,29.3 155.5,28.3 156.8,27.3 158.1,26.2 159.4,25.2 160.7,24.1"/><circle class="holea" cx="83.5" cy="88.5" r="3.4"/><circle class="dota" cx="83.5" cy="56.6" r="3.2"/><text class="m" x="89" y="150" text-anchor="middle">granice jednostronne różne</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 178 156" width="178" height="156" role="img" aria-label="Ciaglosc funkcji w punkcie x0: granica istnieje, ale ≠ f(x₀)"><line class="ax" x1="4" y1="122" x2="169" y2="122"/><polygon class="ah" points="174,122 167,124.9 167,119.1"/><line class="ax" x1="10" y1="128" x2="10" y2="9"/><polygon class="ah" points="10,4 12.9,11 7.1,11"/><text x="172" y="137" text-anchor="end">x</text><text x="19" y="13" text-anchor="start">y</text><line class="s d w" x1="83.5" y1="122" x2="83.5" y2="54.9"/><line class="ax" x1="83.5" y1="119" x2="83.5" y2="125"/><text x="83.5" y="137" text-anchor="middle">x₀</text><polyline class="a" points="21,67.2 22.4,68.1 23.8,69 25.2,69.9 26.6,70.8 28,71.7 29.4,72.5 30.8,73.3 32.2,74.1 33.6,74.9 35,75.6 36.4,76.3 37.8,77.1 39.2,77.7 40.6,78.4 42,79.1 43.4,79.7 44.8,80.3 46.2,80.9 47.6,81.4 48.9,82 50.3,82.5 51.7,83 53.1,83.4 54.5,83.9 55.9,84.3 57.3,84.7 58.7,85.1 60.1,85.5 61.5,85.8 62.9,86.2 64.3,86.5 65.7,86.7 67.1,87 68.5,87.2 69.9,87.5 71.3,87.7 72.7,87.8 74.1,88 75.5,88.1 76.9,88.2 78.3,88.3 79.7,88.4 81.1,88.4 82.5,88.5 83.9,88.5 85.3,88.5 86.6,88.4 88,88.4 89.4,88.3 90.8,88.2 92.2,88.1 93.6,87.9 95,87.7 96.4,87.6 97.8,87.3 99.2,87.1 100.6,86.9 102,86.6 103.4,86.3 104.8,86 106.2,85.7 107.6,85.3 109,84.9 110.4,84.5 111.8,84.1 113.2,83.7 114.6,83.2 116,82.7 117.4,82.2 118.8,81.7 120.2,81.1 121.6,80.6 123,80 124.3,79.3 125.7,78.7 127.1,78.1 128.5,77.4 129.9,76.7 131.3,76 132.7,75.2 134.1,74.5 135.5,73.7 136.9,72.9 138.3,72.1 139.7,71.2 141.1,70.3 142.5,69.4 143.9,68.5 145.3,67.6 146.7,66.6 148.1,65.7 149.5,64.7 150.9,63.7 152.3,62.6 153.7,61.6 155.1,60.5 156.5,59.4 157.9,58.3 159.3,57.1 160.7,55.9"/><circle class="holea" cx="83.5" cy="88.5" r="3.4"/><circle class="dota" cx="83.5" cy="108.6" r="3.2"/><text class="m" x="89" y="150" text-anchor="middle">granica istnieje, ale ≠ f(x₀)</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 178 156" width="178" height="156" role="img" aria-label="Ciaglosc funkcji w punkcie x0: funkcja ciągła w x₀"><line class="ax" x1="4" y1="122" x2="169" y2="122"/><polygon class="ah" points="174,122 167,124.9 167,119.1"/><line class="ax" x1="10" y1="128" x2="10" y2="9"/><polygon class="ah" points="10,4 12.9,11 7.1,11"/><text x="172" y="137" text-anchor="end">x</text><text x="19" y="13" text-anchor="start">y</text><line class="s d w" x1="83.5" y1="122" x2="83.5" y2="54.9"/><line class="ax" x1="83.5" y1="119" x2="83.5" y2="125"/><text x="83.5" y="137" text-anchor="middle">x₀</text><polyline class="a" points="21,67.2 22.4,68.1 23.8,69 25.2,69.9 26.6,70.8 28,71.7 29.4,72.5 30.8,73.3 32.2,74.1 33.6,74.9 35,75.6 36.4,76.3 37.8,77.1 39.2,77.7 40.6,78.4 42,79.1 43.4,79.7 44.8,80.3 46.2,80.9 47.6,81.4 48.9,82 50.3,82.5 51.7,83 53.1,83.4 54.5,83.9 55.9,84.3 57.3,84.7 58.7,85.1 60.1,85.5 61.5,85.8 62.9,86.2 64.3,86.5 65.7,86.7 67.1,87 68.5,87.2 69.9,87.5 71.3,87.7 72.7,87.8 74.1,88 75.5,88.1 76.9,88.2 78.3,88.3 79.7,88.4 81.1,88.4 82.5,88.5 83.9,88.5 85.3,88.5 86.6,88.4 88,88.4 89.4,88.3 90.8,88.2 92.2,88.1 93.6,87.9 95,87.7 96.4,87.6 97.8,87.3 99.2,87.1 100.6,86.9 102,86.6 103.4,86.3 104.8,86 106.2,85.7 107.6,85.3 109,84.9 110.4,84.5 111.8,84.1 113.2,83.7 114.6,83.2 116,82.7 117.4,82.2 118.8,81.7 120.2,81.1 121.6,80.6 123,80 124.3,79.3 125.7,78.7 127.1,78.1 128.5,77.4 129.9,76.7 131.3,76 132.7,75.2 134.1,74.5 135.5,73.7 136.9,72.9 138.3,72.1 139.7,71.2 141.1,70.3 142.5,69.4 143.9,68.5 145.3,67.6 146.7,66.6 148.1,65.7 149.5,64.7 150.9,63.7 152.3,62.6 153.7,61.6 155.1,60.5 156.5,59.4 157.9,58.3 159.3,57.1 160.7,55.9"/><circle class="dota" cx="83.5" cy="88.5" r="3.2"/><text class="m" x="89" y="150" text-anchor="middle">funkcja ciągła w x₀</text></svg></div></div>
<p class="note">Funkcja nie jest ciągła w \(x_0\), gdy granice jednostronne są różne (skok) albo gdy granica istnieje, ale różni się od wartości \(f(x_0)\).</p>
</div>
<div class="bx thm"><span class="t">Twierdzenia</span>
<ul>
<li><b>Własność Darboux:</b> funkcja ciągła w \([a,b]\) przyjmuje każdą wartość pośrednią między \(f(a)\) i \(f(b)\). W szczególności, gdy \(f(a)\cdot f(b)&lt;0\), równanie \(f(x)=0\) ma rozwiązanie w \((a,b)\).</li>
<li>Zadania z parametrem: dobór parametru tak, aby funkcja określona „kawałkami” była ciągła w punkcie sklejenia – przyrównaj granice jednostronne i wartość funkcji.</li>
</ul>
</div>
<div class="bx met"><span class="t">Jak użyć własności Darboux (istnienie rozwiązania)</span>
<ol>
<li>Zapisz równanie w postaci \(f(x)=0\) i uzasadnij, że \(f\) jest ciągła w przedziale \([a,b]\) (np. jest sumą funkcji elementarnych).</li>
<li>Policz \(f(a)\) i \(f(b)\) i pokaż, że mają przeciwne znaki.</li>
<li>Zapisz wniosek: istnieje \(x_0\in(a,b)\), dla którego \(f(x_0)=0\).</li>
</ol>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Wykaż, że równanie \(2^x+x=4\) ma rozwiązanie w przedziale \((1,2)\). Niech \(f(x)=2^x+x-4\); jest ciągła jako suma funkcji ciągłych. Mamy \(f(1)=2+1-4=-1&lt;0\) i \(f(2)=4+2-4=2>0\). Z własności Darboux istnieje \(x_0\in(1,2)\), dla którego \(f(x_0)=0\), czyli \(2^{x_0}+x_0=4\).</p>
<p>Podobnie równanie \(x^3-3x+1=0\) ma rozwiązanie w \((0,1)\), bo \(f(0)=1>0\) i \(f(1)=-1&lt;0\).</p>
<p class="note">Własność Darboux gwarantuje istnienie rozwiązania, ale nie mówi, ile ich jest ani ile wynosi.</p>
</div>
<details class="opt"><summary><span class="optb">Poza wymaganiami</span>Twierdzenie Weierstrassa</summary>
<div class="opt-body">
<p>Funkcja ciągła w przedziale domkniętym \([a,b]\) przyjmuje w nim wartość najmniejszą i największą. Dlatego w zadaniach z przedziałem domkniętym wartości ekstremalne zawsze istnieją; w przedziale otwartym lub nieograniczonym mogą nie istnieć.</p>
</div></details>

<h3>Pochodna i reguły różniczkowania</h3>
<div class="bx def"><span class="t">Definicja pochodnej</span>
<p>\[f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0},\]
o ile granica istnieje i jest skończona (wtedy \(f\) jest <b>różniczkowalna</b> w \(x_0\); różniczkowalność pociąga ciągłość, a nie odwrotnie – np. \(|x|\) w zerze). <b>Interpretacja geometryczna:</b> \(f'(x_0)\) to współczynnik kierunkowy stycznej do wykresu w punkcie \((x_0,f(x_0))\), czyli \(\operatorname{tg}\alpha\). <b>Fizyczna:</b> chwilowa prędkość zmiany (prędkość, gdy \(f\) to droga).</p>
</div>
<div class="bx thm"><span class="t">Wzory na pochodne</span>
\[(c)'=0,\qquad(ax+b)'=a,\qquad(x^{\alpha})'=\alpha x^{\alpha-1}\quad(\alpha\in\mathbb R,\ x>0).\]
<p>Dla \(\alpha\) całkowitego wzór zachodzi też dla innych \(x\), o ile wyrażenia mają sens. Ważne przypadki szczególne:
\[(\sqrt x)'=\frac1{2\sqrt x}\ \ (\alpha=\tfrac12),\qquad\left(\frac1x\right)'=-\frac1{x^2}\ \ (\alpha=-1),\qquad(x^3)'=3x^2.\]</p>
</div>
<details class="opt"><summary><span class="optb">Poza wymaganiami</span>Pochodne funkcji trygonometrycznych, wykładniczej i logarytmicznej</summary>
<div class="opt-body">
<div class="two">
<div>
\[(\sin x)'=\cos x,\qquad(\cos x)'=-\sin x\]
\[(\operatorname{tg}x)'=\frac1{\cos^2x}\]
</div>
<div>
\[(e^x)'=e^x,\qquad(a^x)'=a^x\ln a\]
\[(\ln x)'=\frac1x,\qquad(\log_ax)'=\frac1{x\ln a}\]
</div>
</div>
</div></details>
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
<div class="fg"><svg class="fig" viewBox="0 0 256 214" width="256" height="214" role="img" aria-label="Styczna do wykresu funkcji w punkcie: wspolczynnik kierunkowy rowny f prim od x0"><line class="ax" x1="6" y1="162" x2="247" y2="162"/><polygon class="ah" points="252,162 245,164.9 245,159.1"/><line class="ax" x1="83.6" y1="206" x2="83.6" y2="9"/><polygon class="ah" points="83.6,4 86.5,11 80.6,11"/><text x="250" y="177" text-anchor="end">x</text><text x="92.6" y="13" text-anchor="start">y</text><polyline class="a" points="19.7,129 20.7,130 21.6,131 22.6,132 23.6,133 24.6,133.9 25.6,134.8 26.6,135.7 27.5,136.6 28.5,137.5 29.5,138.4 30.5,139.2 31.5,140.1 32.5,140.9 33.4,141.7 34.4,142.5 35.4,143.3 36.4,144 37.4,144.8 38.4,145.5 39.3,146.2 40.3,146.9 41.3,147.6 42.3,148.2 43.3,148.9 44.3,149.5 45.2,150.1 46.2,150.7 47.2,151.3 48.2,151.9 49.2,152.5 50.2,153 51.2,153.5 52.1,154 53.1,154.5 54.1,155 55.1,155.5 56.1,155.9 57.1,156.3 58,156.7 59,157.1 60,157.5 61,157.9 62,158.2 63,158.6 63.9,158.9 64.9,159.2 65.9,159.5 66.9,159.8 67.9,160 68.9,160.3 69.8,160.5 70.8,160.7 71.8,160.9 72.8,161.1 73.8,161.2 74.8,161.4 75.7,161.5 76.7,161.6 77.7,161.7 78.7,161.8 79.7,161.9 80.7,161.9 81.7,162 82.6,162 83.6,162 84.6,162 85.6,162 86.6,161.9 87.6,161.9 88.5,161.8 89.5,161.7 90.5,161.6 91.5,161.5 92.5,161.4 93.5,161.2 94.4,161 95.4,160.9 96.4,160.7 97.4,160.5 98.4,160.2 99.4,160 100.3,159.7 101.3,159.4 102.3,159.2 103.3,158.9 104.3,158.5 105.3,158.2 106.2,157.8 107.2,157.5 108.2,157.1 109.2,156.7 110.2,156.3 111.2,155.8 112.2,155.4 113.1,154.9 114.1,154.5 115.1,154 116.1,153.4 117.1,152.9 118.1,152.4 119,151.8 120,151.3 121,150.7 122,150.1 123,149.4 124,148.8 124.9,148.2 125.9,147.5 126.9,146.8 127.9,146.1 128.9,145.4 129.9,144.7 130.8,143.9 131.8,143.2 132.8,142.4 133.8,141.6 134.8,140.8 135.8,140 136.7,139.1 137.7,138.3 138.7,137.4 139.7,136.5 140.7,135.6 141.7,134.7 142.7,133.8 143.6,132.8 144.6,131.9 145.6,130.9 146.6,129.9 147.6,128.9 148.6,127.9 149.5,126.8 150.5,125.8 151.5,124.7 152.5,123.6 153.5,122.5 154.5,121.4 155.4,120.2 156.4,119.1 157.4,117.9 158.4,116.7 159.4,115.5 160.4,114.3 161.3,113.1 162.3,111.9 163.3,110.6 164.3,109.3 165.3,108 166.3,106.7 167.2,105.4 168.2,104.1 169.2,102.7 170.2,101.3 171.2,99.9 172.2,98.5 173.2,97.1 174.1,95.7 175.1,94.2 176.1,92.8 177.1,91.3 178.1,89.8 179.1,88.3 180,86.8 181,85.2 182,83.7 183,82.1 184,80.5 185,78.9 185.9,77.3 186.9,75.6 187.9,74 188.9,72.3 189.9,70.6 190.9,68.9 191.8,67.2 192.8,65.5 193.8,63.8 194.8,62 195.8,60.2 196.8,58.4 197.8,56.6 198.7,54.8 199.7,53 200.7,51.1 201.7,49.2 202.7,47.3 203.7,45.4 204.6,43.5 205.6,41.6 206.6,39.6 207.6,37.7 208.6,35.7 209.6,33.7 210.5,31.7 211.5,29.7 212.5,27.6 213.5,25.6 214.5,23.5 215.5,21.4 216.4,19.3"/><polyline class="p" points="68.2,195.8 75.2,190 82.3,184.2 89.3,178.4 96.3,172.6 103.4,166.8 110.4,160.9 117.4,155.1 124.4,149.3 131.5,143.5 138.5,137.7 145.5,131.9 152.6,126.1 159.6,120.3 166.6,114.5 173.6,108.7 180.7,102.9 187.7,97.1 194.7,91.3 201.8,85.5 208.8,79.7"/><line class="s d w" x1="134.7" y1="162" x2="134.7" y2="140.9"/><line class="s d w" x1="83.6" y1="140.9" x2="134.7" y2="140.9"/><circle class="dot" cx="134.7" cy="140.9" r="3.6"/><text x="134.7" y="178" text-anchor="middle">x₀</text><text class="m" x="77.6" y="144.9" text-anchor="end">f(x₀)</text><path class="s w" d="M133.1,162 A24,24 0 0 0 119.8,140.5"/><text class="ac" x="143.1" y="150" text-anchor="middle">α</text><text class="pn" x="162.8" y="154.6" text-anchor="start">styczna</text><text class="ac" x="183.2" y="29" text-anchor="end">y = f(x)</text><text class="m" x="10" y="206" text-anchor="start">tg α = f′(x₀)</text></svg></div>
<ul>
<li><b>Styczna równoległa</b> do prostej o współczynniku \(a\): \(f'(x_0)=a\); <b>prostopadła</b> do prostej o współczynniku \(a\ne0\): \(f'(x_0)=-\tfrac1a\). Z równania wyznaczamy punkt styczności.</li>
<li><b>Styczna przechodząca przez dany punkt \(P\) spoza wykresu:</b> ustal punkt styczności \((t,f(t))\), zapisz równanie stycznej, wstaw współrzędne \(P\) i rozwiąż równanie na \(t\).</li>
<li><b>Normalna</b> do wykresu w \((x_0,f(x_0))\): prosta prostopadła do stycznej, \(y=f(x_0)-\dfrac1{f'(x_0)}(x-x_0)\) dla \(f'(x_0)\ne0\).</li>
<li>Kąt nachylenia stycznej do osi \(Ox\): \(\operatorname{tg}\alpha=f'(x_0)\). Dwie krzywe mają wspólną styczną w punkcie, gdy mają w nim równe wartości i równe pochodne.</li>
</ul>
</div>

<div class="bx ex"><span class="t">Przykład</span>
<p>Styczna do \(f(x)=x^2\) w punkcie \(x_0=1\): \(f(1)=1\), \(f'(x)=2x\), \(f'(1)=2\), więc \(y=1+2(x-1)=2x-1\) (rysunek wyżej).</p>
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
<div class="fg"><svg class="fig" viewBox="0 0 306 232" width="306" height="232" role="img" aria-label="Wykres funkcji x^3-3x z maksimum lokalnym w -1, minimum lokalnym w 1 i znakami pochodnej"><line class="ax" x1="4" y1="100.2" x2="297" y2="100.2"/><polygon class="ah" points="302,100.2 295,103.2 295,97.3"/><line class="ax" x1="151" y1="194" x2="151" y2="9"/><polygon class="ah" points="151,4 153.9,11 148.1,11"/><text x="300" y="115.2" text-anchor="end">x</text><text x="160" y="13" text-anchor="start">y</text><line class="s d w" x1="94.6" y1="188" x2="94.6" y2="51.5"/><line class="s d w" x1="207.4" y1="149" x2="207.4" y2="12.4"/><polyline class="a" points="29.4,186.9 30.2,183 31.1,179.2 31.9,175.4 32.7,171.8 33.5,168.1 34.4,164.6 35.2,161.1 36,157.7 36.8,154.3 37.7,151 38.5,147.8 39.3,144.7 40.2,141.6 41,138.5 41.8,135.5 42.6,132.6 43.5,129.8 44.3,127 45.1,124.2 45.9,121.5 46.8,118.9 47.6,116.4 48.4,113.9 49.3,111.4 50.1,109 50.9,106.7 51.7,104.4 52.6,102.2 53.4,100 54.2,97.9 55,95.8 55.9,93.8 56.7,91.9 57.5,90 58.4,88.1 59.2,86.3 60,84.6 60.8,82.9 61.7,81.3 62.5,79.7 63.3,78.1 64.1,76.6 65,75.2 65.8,73.8 66.6,72.4 67.5,71.1 68.3,69.9 69.1,68.6 69.9,67.5 70.8,66.4 71.6,65.3 72.4,64.3 73.2,63.3 74.1,62.3 74.9,61.4 75.7,60.6 76.6,59.7 77.4,59 78.2,58.2 79,57.5 79.9,56.9 80.7,56.3 81.5,55.7 82.3,55.2 83.2,54.7 84,54.2 84.8,53.8 85.7,53.4 86.5,53 87.3,52.7 88.1,52.5 89,52.2 89.8,52 90.6,51.8 91.4,51.7 92.3,51.6 93.1,51.5 93.9,51.5 94.8,51.5 95.6,51.5 96.4,51.5 97.2,51.6 98.1,51.7 98.9,51.9 99.7,52 100.5,52.2 101.4,52.5 102.2,52.7 103,53 103.8,53.3 104.7,53.6 105.5,54 106.3,54.4 107.2,54.8 108,55.2 108.8,55.7 109.6,56.2 110.5,56.7 111.3,57.2 112.1,57.8 112.9,58.4 113.8,58.9 114.6,59.6 115.4,60.2 116.3,60.9 117.1,61.5 117.9,62.2 118.7,62.9 119.6,63.7 120.4,64.4 121.2,65.2 122,66 122.9,66.8 123.7,67.6 124.5,68.4 125.4,69.3 126.2,70.1 127,71 127.8,71.9 128.7,72.8 129.5,73.7 130.3,74.6 131.1,75.5 132,76.5 132.8,77.4 133.6,78.4 134.5,79.4 135.3,80.4 136.1,81.4 136.9,82.4 137.8,83.4 138.6,84.4 139.4,85.4 140.2,86.4 141.1,87.5 141.9,88.5 142.7,89.6 143.6,90.6 144.4,91.7 145.2,92.7 146,93.8 146.9,94.9 147.7,95.9 148.5,97 149.3,98.1 150.2,99.1 151,100.2 151.8,101.3 152.7,102.4 153.5,103.4 154.3,104.5 155.1,105.6 156,106.6 156.8,107.7 157.6,108.8 158.4,109.8 159.3,110.9 160.1,111.9 160.9,113 161.8,114 162.6,115 163.4,116.1 164.2,117.1 165.1,118.1 165.9,119.1 166.7,120.1 167.5,121.1 168.4,122 169.2,123 170,124 170.9,124.9 171.7,125.8 172.5,126.8 173.3,127.7 174.2,128.6 175,129.5 175.8,130.3 176.6,131.2 177.5,132 178.3,132.9 179.1,133.7 180,134.5 180.8,135.3 181.6,136 182.4,136.8 183.3,137.5 184.1,138.2 184.9,138.9 185.7,139.6 186.6,140.2 187.4,140.9 188.2,141.5 189.1,142.1 189.9,142.7 190.7,143.2 191.5,143.7 192.4,144.2 193.2,144.7 194,145.2 194.8,145.6 195.7,146 196.5,146.4 197.3,146.8 198.2,147.1 199,147.4 199.8,147.7 200.6,148 201.5,148.2 202.3,148.4 203.1,148.6 203.9,148.7 204.8,148.8 205.6,148.9 206.4,149 207.2,149 208.1,149 208.9,148.9 209.7,148.9 210.6,148.8 211.4,148.6 212.2,148.4 213,148.2 213.9,148 214.7,147.7 215.5,147.4 216.3,147 217.2,146.7 218,146.2 218.8,145.8 219.7,145.3 220.5,144.7 221.3,144.2 222.1,143.6 223,142.9 223.8,142.2 224.6,141.5 225.4,140.7 226.3,139.9 227.1,139 227.9,138.1 228.8,137.2 229.6,136.2 230.4,135.2 231.2,134.1 232.1,133 232.9,131.8 233.7,130.6 234.5,129.3 235.4,128 236.2,126.7 237,125.3 237.9,123.8 238.7,122.3 239.5,120.8 240.3,119.2 241.2,117.5 242,115.8 242.8,114.1 243.6,112.3 244.5,110.5 245.3,108.6 246.1,106.6 247,104.6 247.8,102.5 248.6,100.4 249.4,98.3 250.3,96 251.1,93.8 251.9,91.4 252.7,89 253.6,86.6 254.4,84.1 255.2,81.5 256.1,78.9 256.9,76.2 257.7,73.5 258.5,70.7 259.4,67.8 260.2,64.9 261,61.9 261.8,58.9 262.7,55.8 263.5,52.6 264.3,49.4 265.2,46.1 266,42.7 266.8,39.3 267.6,35.8 268.5,32.3 269.3,28.7 270.1,25 270.9,21.3 271.8,17.4 272.6,13.6"/><circle class="dotp" cx="94.6" cy="51.5" r="3.6"/><circle class="dotp" cx="207.4" cy="149" r="3.6"/><text class="pn" x="90.6" y="42.5" text-anchor="middle">maks.</text><text class="pn" x="207.4" y="167" text-anchor="middle">min.</text><line class="ax" x1="94.6" y1="97.2" x2="94.6" y2="103.2"/><text class="m" x="94.6" y="115.2" text-anchor="middle">−1</text><line class="ax" x1="207.4" y1="97.2" x2="207.4" y2="103.2"/><text class="m" x="207.4" y="92.2" text-anchor="middle">1</text><text class="m" x="8" y="214" text-anchor="start">f′(x):</text><text class="ac" x="52.3" y="214" text-anchor="middle">+  ↗</text><text class="pn" x="151" y="214" text-anchor="middle">−  ↘</text><text class="ac" x="249.7" y="214" text-anchor="middle">+  ↗</text><text class="m" x="8" y="228" text-anchor="start">f′(x) = 3x² − 3 = 3(x−1)(x+1)</text></svg></div>
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
<p>Szkic wykresu funkcji (np. w zadaniach o liczbie rozwiązań równania z parametrem) łączy wszystko z tego działu:</p>
<ol>
<li>Dziedzina; punkty przecięcia z osiami.</li>
<li>Granice na końcach dziedziny i asymptoty (pionowe i poziome).</li>
<li>Pochodna: monotoniczność i ekstrema lokalne (tabelka znaków \(f'\)).</li>
<li>Zbiór wartości i szkic wykresu; liczba rozwiązań równania \(f(x)=m\) odczytana z wykresu.</li>
</ol>
<details class="opt"><summary><span class="optb">Poza wymaganiami</span>Parzystość, druga pochodna, wypukłość i punkty przegięcia</summary>
<div class="opt-body">
<ul>
<li>Parzystość lub nieparzystość funkcji skraca badanie o połowę (wykres symetryczny względem \(Oy\) albo względem początku układu).</li>
<li>Druga pochodna: \(f''>0\) – funkcja wypukła (krzywa „ku górze”), \(f''&lt;0\) – wklęsła; zmiana znaku \(f''\) oznacza punkt przegięcia. Asymptoty ukośne – patrz wyżej.</li>
</ul>
</div></details>
`;
