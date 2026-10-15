(window.THEORY = window.THEORY || {})['matura-15'] = String.raw`
<h3>Wielomian, działania, równość wielomianów</h3>
<div class="bx def"><span class="t">Definicje</span>
<p>Wielomian stopnia \(n\): \(W(x)=a_nx^n+\dots+a_1x+a_0\), \(a_n\ne0\). Dwa wielomiany są równe, gdy mają ten sam stopień i równe odpowiednie współczynniki. Pierwiastek (miejsce zerowe): \(W(a)=0\). Pierwiastek \(a\) ma <b>krotność \(k\)</b>, gdy \((x-a)^k\mid W(x)\), ale \((x-a)^{k+1}\nmid W(x)\).</p>
</div>
<div class="bx thm"><span class="t">Działania na wielomianach</span>
<ul>
<li>Wielomiany dodajemy, odejmujemy i mnożymy wyraz po wyrazie, redukując wyrazy podobne. Stopień sumy nie przekracza większego ze stopni składników, a <b>stopień iloczynu</b> jest równy sumie stopni czynników.</li>
<li><b>Nieznane współczynniki</b> wyznaczamy z równości wielomianów: wykonaj działania po jednej stronie i <b>porównaj współczynniki przy tych samych potęgach \(x\)</b>.</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Dla jakich liczb \(p,q\) zachodzi \((x-1)(x^2+px+q)=x^3-2x^2-x+2\)? Po wymnożeniu lewa strona to \(x^3+(p-1)x^2+(q-p)x-q\). Porównujemy współczynniki przy \(x^2\), \(x\) i wyrazy wolne: \(p-1=-2\), \(q-p=-1\), \(-q=2\). Stąd \(p=-1\) i \(q=-2\); trzecie równanie potwierdza wynik.</p>
</div>

<h3>Dzielenie wielomianów, twierdzenie Bézouta, schemat Hornera</h3>
<div class="bx thm"><span class="t">Dzielenie i twierdzenie Bézouta</span>
<ul>
<li><b>Dzielenie z resztą:</b> \(W(x)=P(x)\,Q(x)+R(x)\), przy czym stopień \(R\) jest mniejszy od stopnia \(P\).</li>
<li><b>Twierdzenie o reszcie (Bézouta):</b> reszta z dzielenia \(W(x)\) przez \((x-a)\) jest równa \(W(a)\). Zatem \(a\) jest pierwiastkiem \(\iff\) \((x-a)\mid W(x)\).</li>
<li><b>Schemat Hornera</b> ułatwia dzielenie przez \(x-a\) i liczenie \(W(a)\).</li>
</ul>
</div>
<div class="bx pf" data-pf="zr3"><span class="t">Dowód twierdzenia o dzieleniu przez \(x-a\) i schematu Hornera</span>
<p><b>Twierdzenie.</b> Dla wielomianu \(W\) i liczby \(a\) istnieją wielomian \(Q\) i liczba \(r\) takie, że \(W(x)=(x-a)Q(x)+r\), przy czym \(r=W(a)\); współczynniki \(Q\) i liczbę \(r\) dają wzory rekurencyjne (schemat Hornera).</p>
<p><b>Dowód dla wielomianu czwartego stopnia</b> \(W(x)=a_4x^4+a_3x^3+a_2x^2+a_1x+a_0\) (dla dowolnego stopnia rachunek jest taki sam). Szukamy \(Q(x)=b_3x^3+b_2x^2+b_1x+b_0\) i liczby \(r\). Po wymnożeniu
\[(x-a)Q(x)+r=b_3x^4+(b_2-ab_3)x^3+(b_1-ab_2)x^2+(b_0-ab_1)x+(r-ab_0).\]
Dwa wielomiany są równe, gdy mają równe współczynniki, więc porównując je z \(W\):
\[b_3=a_4,\quad b_2=a_3+ab_3,\quad b_1=a_2+ab_2,\quad b_0=a_1+ab_1,\quad r=a_0+ab_0.\]
Te równania wyznaczają \(b_3,b_2,b_1,b_0,r\) kolejno, więc rozkład istnieje (i jest jedyny). Podstawiając \(x=a\) do \(W(x)=(x-a)Q(x)+r\) dostajemy \(W(a)=r\). \(\blacksquare\)</p>
<p><b>Schemat Hornera w praktyce.</b> Każdy kolejny współczynnik ilorazu to współczynnik \(W\) powiększony o \(a\) razy poprzedni wynik. Dla \(W(x)=2x^3-3x^2-8x-3\) i \(a=3\):</p>
<div class="tw"><table>
<thead><tr><th></th><th class="c">\(2\)</th><th class="c">\(-3\)</th><th class="c">\(-8\)</th><th class="c">\(-3\)</th></tr></thead>
<tbody><tr><td>\(a=3\)</td><td class="c">\(2\)</td><td class="c">\(-3+3\cdot2=3\)</td><td class="c">\(-8+3\cdot3=1\)</td><td class="c">\(-3+3\cdot1=0\)</td></tr></tbody>
</table></div>
<p>Iloraz to \(2x^2+3x+1\), a reszta jest równa \(0\), więc \(2x^3-3x^2-8x-3=(x-3)(2x^2+3x+1)\).</p>
</div>
<div class="bx ex"><span class="t">Przykłady</span>
<p><b>Reszta bez dzielenia.</b> Reszta z dzielenia \(W(x)=x^5-2x+1\) przez \(x+1=x-(-1)\) jest równa \(W(-1)=-1+2+1=2\).</p>
<p><b>Schemat Hornera.</b> Dzielimy \(W(x)=2x^3-5x^2+x-7\) przez \(x-3\). Współczynniki: \(2,\ -5,\ 1,\ -7\); kolejno \(2\), \(-5+3\cdot2=1\), \(1+3\cdot1=4\), \(-7+3\cdot4=5\). Iloraz \(2x^2+x+4\), reszta \(5\) (zgadza się z \(W(3)=54-45+3-7=5\)).</p>
</div>

<h3>Pierwiastki wielomianu i rozkład na czynniki</h3>
<div class="bx thm"><span class="t">Pierwiastki i rozkład</span>
<ul>
<li>Wielomian stopnia \(n\) ma co najwyżej \(n\) pierwiastków rzeczywistych. Wielomian nieparzystego stopnia ma co najmniej jeden pierwiastek.</li>
<li>Jeśli wielomian \(W\) stopnia \(n\) ma \(n\) pierwiastków \(x_1,\dots,x_n\) (liczonych z krotnościami), to \(W(x)=a_n(x-x_1)(x-x_2)\cdots(x-x_n)\). Np. gdy liczby \(-3,\ 1,\ 7\) są pierwiastkami wielomianu \(W(x)=5x^3+bx^2+cx+d\), to \(W(x)=5(x+3)(x-1)(x-7)\).</li>
</ul>
</div>
<div class="bx thm"><span class="t">Twierdzenie o pierwiastkach wymiernych</span>
<p>Jeśli \(W\) ma współczynniki całkowite i liczba wymierna \(\tfrac pq\) (ułamek nieskracalny) jest jego pierwiastkiem, to \(p\mid a_0\) i \(q\mid a_n\). W szczególności, gdy \(a_n=1\), pierwiastki wymierne są całkowite i dzielą \(a_0\).</p>
</div>
<div class="bx met"><span class="t">Jak rozłożyć wielomian na czynniki</span>
<ol>
<li><b>Wyłącz wspólny czynnik</b> i użyj <b>wzorów skróconego mnożenia</b> (\(a^2-b^2\), \(a^3\pm b^3\)).</li>
<li><b>Pogrupuj wyrazy</b>, gdy po wyłączeniu w grupach pojawia się ten sam nawias.</li>
<li><b>Znajdź pierwiastek:</b> sprawdź dzielniki wyrazu wolnego (dla współczynnika przy najwyższej potędze równego \(1\) pierwiastki wymierne są całkowite). Gdy \(W(a)=0\), podziel przez \(x-a\) schematem Hornera i rozkładaj dalej iloraz.</li>
</ol>
</div>
<div class="bx ex"><span class="t">Przykłady</span>
<p><b>Grupowanie.</b> \(x^3+3x^2-4x-12=x^2(x+3)-4(x+3)=(x+3)(x^2-4)=(x+3)(x-2)(x+2)\).</p>
<p><b>Pierwiastek całkowity.</b> Dla \(W(x)=x^3+2x^2-5x-6\) dzielniki liczby \(-6\) to \(\pm1,\pm2,\pm3,\pm6\). Dla \(x=2\): \(8+8-10-6=0\). Schemat Hornera dla \(a=2\): \(1,\ 2+2\cdot1=4,\ -5+2\cdot4=3,\ -6+2\cdot3=0\), więc iloraz to \(x^2+4x+3\). Zatem \(W(x)=(x-2)(x^2+4x+3)=(x-2)(x+1)(x+3)\).</p>
</div>

<h3>Równania i nierówności wielomianowe</h3>
<div class="bx met"><span class="t">Rozwiązywanie równań i nierówności wielomianowych</span>
<ol>
<li>Rozłóż na czynniki (zob. poprzednia sekcja): wyłączanie, grupowanie, wzory skróconego mnożenia, pierwiastki całkowite i dzielenie.</li>
<li>Równania dwukwadratowe \(ax^4+bx^2+c=0\): podstawienie \(t=x^2\ge0\).</li>
<li>Nierówność \(W(x)&lt;0\) lub \(>0\): zaznacz pierwiastki na osi, narysuj „wężyk” zaczynając od prawej strony od góry (gdy \(a_n>0\)); przy pierwiastku <b>parzystej krotności</b> wykres się odbija (znak się nie zmienia), przy nieparzystej – przechodzi na drugą stronę.</li>
<li>Przy nierówności ostrej pierwiastki nie należą do rozwiązania, przy nieostrej (\(\ge\), \(\le\)) – należą (także te parzystej krotności).</li>
</ol>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(W(x)=(x-1)(x+2)^2(x-3)\ge0\): pierwiastki \(-2\) (podwójny), \(1\), \(3\); wężyk: \(+\) dla \(x>3\), \(-\) na \((1,3)\), \(+\) na \((-2,1)\), \(+\) dla \(x&lt;-2\) (odbicie w \(-2\)). Rozwiązanie: \((-\infty,1]\cup[3,\infty)\). Punkt \(-2\) należy do niego, bo tam \(W=0\), a nierówność jest nieostra.</p>
<div class="fg"><svg class="fig" viewBox="0 0 340 214" width="340" height="214" role="img" aria-label="Wykres wielomianu (x-1)(x+2)^2(x-3) z pierwiastkami -2, 1, 3 i znakami w przedzialach"><text class="m" x="8" y="14" text-anchor="start">W(x) = (x−1)(x+2)²(x−3)</text><line class="ax" x1="4" y1="120.7" x2="331" y2="120.7"/><polygon class="ah" points="336,120.7 329,123.6 329,117.7"/><line class="ax" x1="150.9" y1="174" x2="150.9" y2="9"/><polygon class="ah" points="150.9,4 153.9,11 148,11"/><text x="334" y="135.7" text-anchor="end">x</text><text x="159.9" y="13" text-anchor="start">y</text><polyline class="a" points="14.3,46.8 15.2,50.1 16.2,53.4 17.1,56.5 18.1,59.6 19,62.6 20,65.4 20.9,68.2 21.9,70.9 22.9,73.5 23.8,76 24.8,78.4 25.7,80.7 26.7,83 27.6,85.2 28.6,87.2 29.5,89.3 30.5,91.2 31.4,93 32.4,94.8 33.3,96.5 34.3,98.2 35.3,99.7 36.2,101.2 37.2,102.6 38.1,104 39.1,105.3 40,106.5 41,107.7 41.9,108.8 42.9,109.9 43.8,110.9 44.8,111.8 45.7,112.7 46.7,113.5 47.6,114.3 48.6,115 49.6,115.7 50.5,116.3 51.5,116.9 52.4,117.4 53.4,117.9 54.3,118.4 55.3,118.8 56.2,119.1 57.2,119.4 58.1,119.7 59.1,120 60,120.2 61,120.3 62,120.5 62.9,120.6 63.9,120.6 64.8,120.7 65.8,120.7 66.7,120.7 67.7,120.6 68.6,120.5 69.6,120.4 70.5,120.3 71.5,120.1 72.4,120 73.4,119.8 74.4,119.6 75.3,119.3 76.3,119.1 77.2,118.8 78.2,118.5 79.1,118.2 80.1,117.8 81,117.5 82,117.1 82.9,116.8 83.9,116.4 84.8,116 85.8,115.6 86.8,115.2 87.7,114.8 88.7,114.3 89.6,113.9 90.6,113.5 91.5,113 92.5,112.6 93.4,112.1 94.4,111.6 95.3,111.2 96.3,110.7 97.2,110.2 98.2,109.8 99.1,109.3 100.1,108.8 101.1,108.3 102,107.9 103,107.4 103.9,107 104.9,106.5 105.8,106 106.8,105.6 107.7,105.1 108.7,104.7 109.6,104.3 110.6,103.8 111.5,103.4 112.5,103 113.5,102.6 114.4,102.2 115.4,101.8 116.3,101.4 117.3,101.1 118.2,100.7 119.2,100.4 120.1,100 121.1,99.7 122,99.4 123,99.1 123.9,98.8 124.9,98.5 125.9,98.3 126.8,98 127.8,97.8 128.7,97.6 129.7,97.4 130.6,97.2 131.6,97 132.5,96.9 133.5,96.7 134.4,96.6 135.4,96.5 136.3,96.4 137.3,96.3 138.3,96.2 139.2,96.2 140.2,96.2 141.1,96.1 142.1,96.2 143,96.2 144,96.2 144.9,96.3 145.9,96.3 146.8,96.4 147.8,96.5 148.7,96.7 149.7,96.8 150.6,97 151.6,97.2 152.6,97.4 153.5,97.6 154.5,97.8 155.4,98.1 156.4,98.3 157.3,98.6 158.3,98.9 159.2,99.2 160.2,99.6 161.1,99.9 162.1,100.3 163,100.7 164,101.1 165,101.5 165.9,102 166.9,102.4 167.8,102.9 168.8,103.4 169.7,103.9 170.7,104.4 171.6,104.9 172.6,105.5 173.5,106 174.5,106.6 175.4,107.2 176.4,107.8 177.4,108.4 178.3,109.1 179.3,109.7 180.2,110.4 181.2,111 182.1,111.7 183.1,112.4 184,113.1 185,113.8 185.9,114.5 186.9,115.3 187.8,116 188.8,116.8 189.7,117.5 190.7,118.3 191.7,119.1 192.6,119.8 193.6,120.6 194.5,121.4 195.5,122.2 196.4,123 197.4,123.8 198.3,124.7 199.3,125.5 200.2,126.3 201.2,127.1 202.1,127.9 203.1,128.8 204.1,129.6 205,130.4 206,131.2 206.9,132.1 207.9,132.9 208.8,133.7 209.8,134.5 210.7,135.3 211.7,136.1 212.6,136.9 213.6,137.7 214.5,138.5 215.5,139.2 216.5,140 217.4,140.7 218.4,141.5 219.3,142.2 220.3,142.9 221.2,143.6 222.2,144.3 223.1,145 224.1,145.6 225,146.3 226,146.9 226.9,147.5 227.9,148.1 228.9,148.6 229.8,149.2 230.8,149.7 231.7,150.2 232.7,150.7 233.6,151.1 234.6,151.5 235.5,151.9 236.5,152.3 237.4,152.6 238.4,152.9 239.3,153.2 240.3,153.4 241.2,153.6 242.2,153.8 243.2,153.9 244.1,154 245.1,154.1 246,154.1 247,154.1 247.9,154 248.9,153.9 249.8,153.7 250.8,153.5 251.7,153.3 252.7,153 253.6,152.7 254.6,152.3 255.6,151.8 256.5,151.3 257.5,150.8 258.4,150.1 259.4,149.5 260.3,148.8 261.3,148 262.2,147.1 263.2,146.2 264.1,145.2 265.1,144.2 266,143.1 267,141.9 268,140.7 268.9,139.4 269.9,138 270.8,136.5 271.8,135 272.7,133.4 273.7,131.7 274.6,129.9 275.6,128.1 276.5,126.1 277.5,124.1 278.4,122 279.4,119.8 280.4,117.5 281.3,115.2 282.3,112.7 283.2,110.2 284.2,107.5 285.1,104.7 286.1,101.9 287,98.9 288,95.9 288.9,92.7 289.9,89.5 290.8,86.1 291.8,82.6 292.7,79 293.7,75.3 294.7,71.5 295.6,67.6 296.6,63.5 297.5,59.4 298.5,55.1 299.4,50.7 300.4,46.1"/><line class="tha" x1="10" y1="120.7" x2="193.6" y2="120.7"/><line class="tha" x1="279" y1="120.7" x2="326" y2="120.7"/><circle class="dot" cx="65.5" cy="120.7" r="3.4"/><circle class="dot" cx="193.6" cy="120.7" r="3.4"/><circle class="dot" cx="279" cy="120.7" r="3.4"/><text x="65.5" y="136.7" text-anchor="middle">−2</text><text x="193.6" y="136.7" text-anchor="middle">1</text><text x="279" y="136.7" text-anchor="middle">3</text><text class="m" x="65.5" y="151.7" text-anchor="middle">parzysta krotność</text><text class="b" x="33.5" y="108.9" text-anchor="middle">+</text><text class="b" x="129.6" y="108.9" text-anchor="middle">+</text><text class="b" x="236.3" y="138.4" text-anchor="middle">−</text><text class="b" x="304.6" y="102.9" text-anchor="middle">+</text><text class="m" x="8" y="208" text-anchor="start">W(x) ≥ 0 dla x ∈ (−∞, 1] ∪ [3, ∞)</text></svg></div>
</div>
<div class="bx ex"><span class="t">Przykład – nierówność ostra z pierwiastkiem podwójnym</span>
<p>\((x-1)^2(x+2)>0\). Pierwiastki: \(1\) (podwójny) i \(-2\); współczynnik przy najwyższej potędze jest dodatni. Wężyk: \(+\) dla \(x>1\), \(+\) na \((-2,1)\) (odbicie w \(1\)), \(-\) dla \(x&lt;-2\). Nierówność jest ostra, więc pierwiastki odpadają: \(x\in(-2,1)\cup(1,\infty)\). Wystarczy też zauważyć, że \((x-1)^2\ge0\) i jest równe \(0\) tylko dla \(x=1\), więc nierówność jest równoważna \(x+2>0\) i \(x\ne1\).</p>
</div>
<div class="bx ex"><span class="t">Przykłady – równania dwukwadratowe</span>
<p>\(x^4-5x^2+4=0\): podstawiamy \(t=x^2\ge0\), \(t^2-5t+4=0\), \(t\in\{1,4\}\), więc \(x^2=1\) lub \(x^2=4\) i \(x\in\{-2,-1,1,2\}\).</p>
<p>\(x^4+x^2-6=0\): \(t^2+t-6=0\), \(t\in\{2,-3\}\). Wartość \(t=-3\) odrzucamy (\(t=x^2\ge0\)); z \(x^2=2\) mamy \(x=\pm\sqrt2\).</p>
</div>

<h3>Wielomiany z parametrem</h3>
<div class="bx met"><span class="t">Jak tłumaczyć warunki zadania</span>
<ul>
<li><b>„\(W\) jest podzielny przez \(x-a\)”</b> oznacza \(W(a)=0\); <b>„reszta z dzielenia przez \(x-a\) jest równa \(r\)”</b> – \(W(a)=r\). Dla podzielności przez iloczyn \((x-a)(x-b)\), gdzie \(a\ne b\), trzeba \(W(a)=0\) i \(W(b)=0\).</li>
<li><b>Równość wielomianów</b> (np. \(W(x)=(x-1)(x^2+px+q)\)) daje układ równań z porównania współczynników.</li>
<li><b>Liczba rozwiązań</b> zależna od parametru: rozłóż wielomian na czynniki (jeden z nich bywa niezależny od parametru) i sprawdź, kiedy pierwiastki się pokrywają.</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Dla jakich liczb \(a,b\) wielomian \(W(x)=x^3+ax^2+bx+6\) jest podzielny przez \((x-1)(x+2)\)? Musi być \(W(1)=0\) i \(W(-2)=0\): \(1+a+b+6=0\), czyli \(a+b=-7\); \(-8+4a-2b+6=0\), czyli \(2a-b=1\). Dodając równania: \(3a=-6\), więc \(a=-2\), \(b=-5\). Sprawdzenie: \(x^3-2x^2-5x+6=(x-1)(x+2)(x-3)\).</p>
</div>
`;
