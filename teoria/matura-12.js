(window.THEORY = window.THEORY || {})['matura-12'] = String.raw`
<h3>Funkcja wykładnicza i jej własności</h3>
<div class="bx def"><span class="t">Funkcja wykładnicza \(f(x)=a^x\), \(a>0\), \(a\ne1\)</span>
<ul>
<li>\(D=\mathbb R\), zbiór wartości \((0,\infty)\), wykres przechodzi przez punkt \((0,1)\), asymptota pozioma \(y=0\). Brak miejsc zerowych.</li>
<li>\(a>1\): funkcja rosnąca; \(0&lt;a&lt;1\): funkcja malejąca. Wykresy \(y=a^x\) i \(y=\left(\tfrac1a\right)^x\) są symetryczne względem osi \(Oy\).</li>
<li><b>Równania:</b> \(a^{f(x)}=a^{g(x)}\iff f(x)=g(x)\). <b>Nierówności:</b> dla \(a>1\): \(a^{f}&lt;a^{g}\iff f&lt;g\); dla \(0&lt;a&lt;1\): \(a^f&lt;a^g\iff f>g\) (nierówność zmienia zwrot).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Nierówność \(\left(\tfrac57\right)^{x}&lt;\left(\tfrac57\right)^{2{,}5}\) spełniają liczby \(x>2{,}5\), bo podstawa \(\tfrac57\) należy do przedziału \((0,1)\).</p>
</div>

<h3>Funkcja logarytmiczna i jej własności</h3>
<div class="bx def"><span class="t">Funkcja logarytmiczna \(f(x)=\log_ax\), \(a>0\), \(a\ne1\)</span>
<ul>
<li>\(D=(0,\infty)\), zbiór wartości \(\mathbb R\), miejsce zerowe \(x=1\), asymptota pionowa \(x=0\). \(a>1\): funkcja rosnąca; \(0&lt;a&lt;1\): malejąca.</li>
<li>Jest odwrotna do funkcji \(a^x\): wykresy \(y=a^x\) i \(y=\log_ax\) są symetryczne względem prostej \(y=x\).</li>
<li>Wzory na logarytm iloczynu, ilorazu i potęgi oraz zamianę podstawy znajdziesz w dziale „Liczby rzeczywiste, procenty, potęgi i logarytmy”.</li>
</ul>
</div>

<h3>Równania i nierówności wykładnicze i logarytmiczne</h3>
<div class="bx thm"><span class="t">Równoważności</span>
<ul>
<li>\(\log_af(x)=\log_ag(x)\iff f(x)=g(x)\) <b>i</b> \(f(x)>0\) (wtedy też \(g(x)>0\)); \(\ \log_af(x)=c\iff f(x)=a^c\) (przy \(f(x)>0\)).</li>
<li>Dla \(a>1\): \(\log_af&lt;\log_ag\iff0&lt;f&lt;g\). Dla \(0&lt;a&lt;1\): \(\log_af&lt;\log_ag\iff f>g>0\). Zawsze uwzględnij dziedzinę.</li>
</ul>
</div>
<div class="bx met"><span class="t">Typowe metody</span>
<ul>
<li><b>Wspólna podstawa:</b> zapisz obie strony jako potęgi tej samej liczby i porównaj wykładniki (z pamiętaniem o zwrocie nierówności).</li>
<li><b>Podstawienie</b> \(t=a^x>0\) (np. \(4^x-3\cdot2^x+2=0\): \(t=2^x\), \(t^2-3t+2=0\), \(t=1\) lub \(t=2\), więc \(x=0\) lub \(x=1\)).</li>
<li><b>Logarytmowanie obu stron</b> – gdy nie da się sprowadzić do wspólnej podstawy; <b>zamiana sumy logarytmów na logarytm iloczynu</b> (najpierw dziedzina, bo po przekształceniu mogą pojawić się rozwiązania obce).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykłady</span>
<p>\(\left(\tfrac13\right)^{2x-1}\ge9\iff3^{1-2x}\ge3^2\iff1-2x\ge2\iff x\le-\tfrac12\) (podstawa \(3>1\), więc zwrot się nie zmienia).</p>
<p>\(\log_2(x-1)+\log_2(x+1)=3\). Dziedzina: \(x>1\). Wtedy \(\log_2(x^2-1)=3\), czyli \(x^2-1=8\), \(x=3\) lub \(x=-3\); do dziedziny należy tylko \(x=3\).</p>
</div>

<h3>Zastosowania: wzrost wykładniczy, rozpad, stygnięcie</h3>
<div class="bx thm"><span class="t">Modele wykładnicze</span>
<ul>
<li><b>Stała zmiana procentowa w jednostce czasu:</b> \(N(t)=N_0\,k^t\), gdzie \(N_0=N(0)\), a \(k=1+\tfrac p{100}\) przy wzroście o \(p\%\) albo \(k=1-\tfrac p{100}\) przy spadku o \(p\%\). Wartości w kolejnych jednostkach czasu tworzą ciąg geometryczny o ilorazie \(k\) (por. „Procent składany” w dziale „Ciągi”).</li>
<li><b>Rozpad promieniotwórczy</b> z czasem połowicznego rozpadu \(T\): \(N(t)=N_0\left(\tfrac12\right)^{t/T}\).</li>
<li><b>Stygnięcie</b> (prawo Newtona): \(T(t)=(T_p-T_z)\,k^{-t}+T_z\) dla \(k>1\), gdzie \(T_p\) – temperatura początkowa, \(T_z\) – temperatura otoczenia. Temperatura zbliża się do \(T_z\), ale jej nie osiąga.</li>
<li><b>Szukanie czasu</b> sprowadza się do nierówności lub równania wykładniczego. Gdy nie ma wspólnej podstawy, sprawdzaj kolejne wartości całkowite albo użyj logarytmu.</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Masa substancji maleje o \(19\%\) na dobę, na początku jest równa \(4\) g, więc \(m(t)=4\cdot0{,}81^t\). Po ilu pełnych dobach masa będzie mniejsza niż \(1\) g? Szukamy \(t\), dla którego \(0{,}81^t&lt;\tfrac14\). Funkcja jest malejąca, a \(0{,}81^6\approx0{,}282>0{,}25\) i \(0{,}81^7\approx0{,}229&lt;0{,}25\), więc potrzeba \(7\) dób. (Z logarytmem: \(t>\log_{0{,}81}\tfrac14\approx6{,}58\).)</p>
</div>
`;
