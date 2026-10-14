(window.THEORY = window.THEORY || {})['matura-5'] = String.raw`<h3>Pojęcie ciągu</h3>
<div class="bx def"><span class="t">Definicja</span>
<p><b>Ciąg nieskończony</b> to funkcja \(a:\mathbb{N}_+\to\mathbb{R}\). Wartość tej funkcji dla liczby \(n\) zapisujemy \(a_n\) i nazywamy <b>\(n\)-tym wyrazem</b> ciągu; sam ciąg oznaczamy \((a_n)\). <b>Ciąg skończony</b> ma dziedzinę \(\{1,2,\dots,N\}\).</p>
</div>
<p>Ciąg można zadać: <b>wzorem ogólnym</b> (np. \(a_n=\dfrac{2n-1}{n+1}\)), <b>rekurencyjnie</b> (np. \(a_1=1,\ a_{n+1}=2a_n+1\)) albo <b>opisowo</b> (np. „kolejne liczby pierwsze”).</p>

<div class="bx ex"><span class="t">Ciągi rekurencyjne</span>
<p>W zadaniu rekurencyjnym podany jest pierwszy (lub kilka pierwszych) wyraz i reguła na kolejne. Przykłady: \(a_1=2,\ a_{n+1}=a_n+3\) to ciąg arytmetyczny o różnicy \(3\); \(a_1=1,\ a_{n+1}=2a_n\) to ciąg geometryczny o ilorazie \(2\); ciąg Fibonacciego: \(a_1=a_2=1,\ a_{n+2}=a_{n+1}+a_n\), czyli \(1,1,2,3,5,8,\dots\). Aby rozpoznać rodzaj ciągu, sprawdź, czy stała jest różnica \(a_{n+1}-a_n\) albo iloraz \(\tfrac{a_{n+1}}{a_n}\).</p>
</div>

<h4>Monotoniczność i ograniczoność</h4>
<div class="tw"><table>
  <thead><tr><th>Ciąg jest…</th><th>gdy dla każdego \(n\)</th></tr></thead>
  <tbody>
    <tr><td>rosnący</td><td>\(a_{n+1}>a_n\)</td></tr>
    <tr><td>malejący</td><td>\(a_{n+1}&lt;a_n\)</td></tr>
    <tr><td>niemalejący / nierosnący</td><td>\(a_{n+1}\ge a_n\) / \(a_{n+1}\le a_n\)</td></tr>
    <tr><td>stały</td><td>\(a_{n+1}=a_n\)</td></tr>
    <tr><td>ograniczony</td><td>istnieje \(M\) takie, że \(|a_n|\le M\)</td></tr>
  </tbody>
</table></div>
<p>Monotoniczność badamy, określając znak różnicy \(a_{n+1}-a_n\). Dla ciągów o wyrazach dodatnich można też porównać iloraz \(\dfrac{a_{n+1}}{a_n}\) z jedynką.</p>
<div class="bx ex"><span class="t">Przykład 1</span>
<p>Ciąg \(a_n=\dfrac{2n-1}{n+1}\) jest rosnący, bo
\[a_{n+1}-a_n=\frac{2n+1}{n+2}-\frac{2n-1}{n+1}=\frac{(2n+1)(n+1)-(2n-1)(n+2)}{(n+1)(n+2)}=\frac{3}{(n+1)(n+2)}>0 .\]</p>
</div>

<h3>Ciąg arytmetyczny</h3>
<div class="bx def"><span class="t">Definicja</span>
<p>Ciąg \((a_n)\) jest <b>arytmetyczny</b>, gdy różnica \(a_{n+1}-a_n=r\) jest stała (to <b>różnica ciągu</b>). Dla \(r>0\) ciąg jest rosnący, dla \(r<0\) malejący, dla \(r=0\) stały.</p>
</div>
<div class="bx thm"><span class="t">Wzory</span>
<div class="two">
<div>
<p><b>Wyraz ogólny</b></p>
\[a_n=a_1+(n-1)r,\qquad a_n=a_k+(n-k)r\]
<p><b>Średnia arytmetyczna.</b> Liczby \(a,b,c\) (w tej kolejności) tworzą ciąg arytmetyczny wtedy i tylko wtedy, gdy</p>
\[2b=a+c .\]
</div>
<div>
<p><b>Suma \(n\) początkowych wyrazów</b></p>
\[S_n=\frac{a_1+a_n}{2}\cdot n=\frac{2a_1+(n-1)r}{2}\cdot n\]
<p><b>Związek z wyrazem:</b> \(a_1=S_1\) oraz \(a_n=S_n-S_{n-1}\) dla \(n\ge 2\).</p>
</div>
</div>
<p><b>Własność symetrii.</b> Jeśli \(k+l=m+p\), to \(a_k+a_l=a_m+a_p\) (np. \(a_1+a_{10}=a_4+a_7\)).</p>
</div>
<div class="bx ex"><span class="t">Przykład 2</span>
<p>W ciągu arytmetycznym \(a_3=7\) i \(a_8=22\). Obliczmy \(S_{20}\). Ponieważ \(a_8-a_3=5r\), mamy \(5r=15\), czyli \(r=3\) i \(a_1=a_3-2r=1\). Zatem
\[S_{20}=\frac{2\cdot1+19\cdot3}{2}\cdot 20=590 .\]</p>
</div>

<h3>Ciąg geometryczny</h3>
<div class="bx def"><span class="t">Definicja</span>
<p>Ciąg \((a_n)\) o wyrazach niezerowych jest <b>geometryczny</b>, gdy iloraz \(\dfrac{a_{n+1}}{a_n}=q\) jest stały (to <b>iloraz ciągu</b>), czyli \(a_{n+1}=a_n\cdot q\).</p>
</div>
<div class="bx thm"><span class="t">Wzory</span>
<div class="two">
<div>
<p><b>Wyraz ogólny</b></p>
\[a_n=a_1\cdot q^{\,n-1},\qquad a_n=a_k\cdot q^{\,n-k}\]
<p><b>Średnia geometryczna.</b> Liczby niezerowe \(a,b,c\) tworzą ciąg geometryczny wtedy i tylko wtedy, gdy</p>
\[b^2=a\cdot c .\]
</div>
<div>
<p><b>Suma \(n\) początkowych wyrazów</b></p>
\[S_n=a_1\cdot\frac{1-q^{\,n}}{1-q}\quad(q\ne1)\]<p>oraz \(S_n=n\,a_1\) dla \(q=1\).</p>
<p><b>Własność symetrii.</b> Jeśli \(k+l=m+p\), to \(a_k\cdot a_l=a_m\cdot a_p\).</p>
</div>
</div>
</div>
<div class="tw"><table>
  <thead><tr><th>Monotoniczność</th><th class="c">\(q>1\)</th><th class="c">\(0&lt;q&lt;1\)</th><th class="c">\(q=1\)</th><th class="c">\(q<0\)</th></tr></thead>
  <tbody>
    <tr><td>gdy \(a_1>0\)</td><td class="c">rosnący</td><td class="c">malejący</td><td class="c">stały</td><td class="c" rowspan="2">nie jest monotoniczny (znaki wyrazów na przemian)</td></tr>
    <tr><td>gdy \(a_1<0\)</td><td class="c">malejący</td><td class="c">rosnący</td><td class="c">stały</td></tr>
  </tbody>
</table></div>
<div class="bx ex"><span class="t">Przykład 3</span>
<p>W ciągu geometrycznym \(a_2=6\) i \(a_5=-48\). Wtedy \(q^3=\dfrac{a_5}{a_2}=-8\), więc \(q=-2\) i \(a_1=\dfrac{a_2}{q}=-3\). Stąd
\[S_6=-3\cdot\frac{1-(-2)^6}{1-(-2)}=-3\cdot\frac{-63}{3}=63 .\]</p>
</div>

<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 176 160" width="176" height="160" role="img" aria-label="Wyrazy ciagu arytmetycznego a_n=2n-1 leza na jednej prostej"><line class="ax" x1="6" y1="136" x2="167" y2="136"/><polygon class="ah" points="172,136 165,138.9 165,133.1"/><line class="ax" x1="12" y1="142" x2="12" y2="9"/><polygon class="ah" points="12,4 14.9,11 9.1,11"/><text x="170" y="151" text-anchor="end">n</text><text x="21" y="13" text-anchor="start">a</text><polyline class="gr d" points="25,134.1 31.3,128.6 37.6,123 43.9,117.5 50.2,112 56.5,106.4 62.8,100.9 69.1,95.4 75.4,89.8 81.7,84.3 88,78.8 94.3,73.2 100.6,67.7 106.9,62.2 113.2,56.6 119.5,51.1 125.8,45.6 132.1,40 138.4,34.5 144.7,29 151,23.4"/><circle class="dota" cx="33.7" cy="126.5" r="3.2"/><circle class="dota" cx="55.4" cy="107.4" r="3.2"/><circle class="dota" cx="77.1" cy="88.3" r="3.2"/><circle class="dota" cx="98.9" cy="69.2" r="3.2"/><circle class="dota" cx="120.6" cy="50.2" r="3.2"/><circle class="dota" cx="142.3" cy="31.1" r="3.2"/><text class="m" x="88" y="156" text-anchor="middle">arytmetyczny: aₙ = 2n − 1</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 176 160" width="176" height="160" role="img" aria-label="Wyrazy ciagu geometrycznego a_n=2^(n-1) leza na krzywej wykladniczej"><line class="ax" x1="6" y1="136" x2="167" y2="136"/><polygon class="ah" points="172,136 165,138.9 165,133.1"/><line class="ax" x1="12" y1="142" x2="12" y2="9"/><polygon class="ah" points="12,4 14.9,11 9.1,11"/><text x="170" y="151" text-anchor="end">n</text><text x="21" y="13" text-anchor="start">a</text><polyline class="gr d" points="25,133.3 26.3,133.2 27.5,133.1 28.8,133 30.1,132.8 31.3,132.7 32.6,132.6 33.8,132.4 35.1,132.3 36.4,132.1 37.6,132 38.9,131.8 40.1,131.7 41.4,131.5 42.7,131.3 43.9,131.1 45.2,130.9 46.4,130.7 47.7,130.5 49,130.2 50.2,130 51.5,129.8 52.7,129.5 54,129.2 55.3,129 56.5,128.7 57.8,128.4 59,128.1 60.3,127.7 61.6,127.4 62.8,127 64.1,126.7 65.3,126.3 66.6,125.9 67.8,125.5 69.1,125 70.4,124.6 71.6,124.1 72.9,123.6 74.1,123.1 75.4,122.6 76.7,122 77.9,121.5 79.2,120.9 80.4,120.3 81.7,119.6 83,118.9 84.2,118.2 85.5,117.5 86.7,116.7 88,116 89.3,115.1 90.5,114.3 91.8,113.4 93,112.5 94.3,111.5 95.6,110.5 96.8,109.4 98.1,108.4 99.3,107.2 100.6,106 101.9,104.8 103.1,103.5 104.4,102.2 105.6,100.8 106.9,99.4 108.2,97.9 109.4,96.3 110.7,94.7 111.9,93 113.2,91.2 114.4,89.4 115.7,87.5 117,85.5 118.2,83.4 119.5,81.2 120.7,79 122,76.7 123.3,74.2 124.5,71.7 125.8,69.1 127,66.3 128.3,63.4 129.6,60.5 130.8,57.4 132.1,54.1 133.3,50.8 134.6,47.3 135.9,43.7 137.1,39.9 138.4,35.9 139.6,31.8 140.9,27.5 142.2,23.1 143.4,18.5 144.7,13.6"/><circle class="dotp" cx="33.7" cy="132.5" r="3.2"/><circle class="dotp" cx="55.4" cy="128.9" r="3.2"/><circle class="dotp" cx="77.1" cy="121.8" r="3.2"/><circle class="dotp" cx="98.9" cy="107.7" r="3.2"/><circle class="dotp" cx="120.6" cy="79.3" r="3.2"/><circle class="dotp" cx="142.3" cy="22.6" r="3.2"/><text class="m" x="88" y="156" text-anchor="middle">geometryczny: aₙ = 2ⁿ⁻¹</text></svg></div></div>
<p class="note">Wyrazy ciągu arytmetycznego leżą na jednej prostej (stały przyrost), a wyrazy ciągu geometrycznego na krzywej wykładniczej (stały iloraz).</p>

<h3>Procent składany i lokaty</h3>
<p>Jeśli wielkość \(K_0\) w każdym okresie rośnie o \(p\%\) (odsetki doliczane są do kapitału), to kolejne wartości tworzą ciąg geometryczny o ilorazie \(q=1+\dfrac p{100}\).</p>
<div class="bx thm"><span class="t">Wzory</span>
\[K_n=K_0\left(1+\frac p{100}\right)^{n}\qquad\text{(wzrost)},\qquad K_n=K_0\left(1-\frac p{100}\right)^{n}\qquad\text{(spadek)}.\]
<p>Tu \(K_0\) – kapitał początkowy, \(p\%\) – stopa procentowa w jednym okresie kapitalizacji, \(n\) – liczba okresów kapitalizacji (miesięcy, kwartałów, lat itp.).</p>
<p>Gdy roczna stopa wynosi \(p\%\), a odsetki dopisuje się \(m\) razy w roku, to po \(t\) latach \(K=K_0\left(1+\dfrac{p}{100\,m}\right)^{mt}\).</p>
</div>
<div class="bx ex"><span class="t">Przykład 4</span>
<p>Kwota \(10\,000\) zł na lokacie \(4\%\) rocznie z roczną kapitalizacją wynosi po \(3\) latach \(10\,000\cdot1{,}04^3=11\,248{,}64\) zł. Po ilu pełnych latach kwota wzrośnie co najmniej o \(50\%\) przy stopie \(5\%\)? Szukamy najmniejszego \(n\), dla którego \(1{,}05^n\ge1{,}5\). Ponieważ \(1{,}05^8\approx1{,}477\) i \(1{,}05^9\approx1{,}551\), potrzeba \(9\) lat.</p>
</div>
<div class="bx warn"><span class="t">Uwaga</span>
<p>Procent składany to <b>mnożenie przez \(1+\tfrac p{100}\)</b>, a nie dodawanie \(p\%\) początkowej kwoty co okres. Dwa kolejne wzrosty o \(10\%\) dają razem \(21\%\) (\(1{,}1^2=1{,}21\)), a nie \(20\%\).</p>
</div>

<h3>Granica ciągu</h3>
<div class="bx def"><span class="t">Definicja</span>
<p>Liczba \(g\) jest <b>granicą ciągu</b> \((a_n)\), co zapisujemy \(\lim\limits_{n\to\infty}a_n=g\), gdy dla każdego \(\varepsilon>0\) istnieje takie \(N\), że dla wszystkich \(n>N\) zachodzi \(|a_n-g|<\varepsilon\). Ciąg mający granicę skończoną jest <b>zbieżny</b>, w przeciwnym razie – <b>rozbieżny</b>.</p>
<p><b>Granica niewłaściwa:</b> \(\lim a_n=+\infty\), gdy dla każdego \(M\) prawie wszystkie wyrazy są większe od \(M\) (analogicznie \(-\infty\)).</p>
</div>
<p>Granica ciągu, jeśli istnieje, jest jedyna. Każdy ciąg zbieżny jest ograniczony (odwrotnie nie: ciąg \((-1)^n\) jest ograniczony, a nie ma granicy).</p>

<div class="bx thm"><span class="t">Twierdzenia o działaniach na granicach</span>
<p>Jeśli \(\lim a_n=a\) i \(\lim b_n=b\) (skończone), to
\[\lim(a_n\pm b_n)=a\pm b,\quad \lim(a_n\cdot b_n)=a\cdot b,\quad \lim\frac{a_n}{b_n}=\frac{a}{b}\ \ (b\ne0).\]</p>
<p><b>Twierdzenie o trzech ciągach.</b> Jeśli \(a_n\le b_n\le c_n\) od pewnego miejsca oraz \(\lim a_n=\lim c_n=g\), to \(\lim b_n=g\).</p>
</div>

<h4>Granice, które warto znać</h4>
<div class="tw"><table>
  <thead><tr><th>Ciąg</th><th>Granica</th></tr></thead>
  <tbody>
    <tr><td>\(\dfrac{1}{n^k}\), gdzie \(k>0\)</td><td>\(0\)</td></tr>
    <tr><td>\(n^k\), gdzie \(k>0\)</td><td>\(+\infty\)</td></tr>
    <tr><td>\(q^n\)</td><td>\(0\) dla \(|q|<1\); \(1\) dla \(q=1\); \(+\infty\) dla \(q>1\); brak granicy dla \(q\le -1\)</td></tr>
  </tbody>
</table></div>
<p>Symbole nieoznaczone: \(\infty-\infty\), \(\dfrac{\infty}{\infty}\), \(0\cdot\infty\). Wymagają one wcześniejszego przekształcenia wyrażenia. Reguły oznaczone: \(\infty+\infty=\infty\), \(\infty\cdot\infty=\infty\), \(\dfrac{c}{\infty}=0\).</p>

<h4>Metody obliczania granic</h4>
<ol>
  <li><b>Ułamek, w którym są potęgi \(n\):</b> dzielimy licznik i mianownik przez najwyższą potęgę \(n\) w mianowniku. Dla wielomianów \(W(n)\) stopnia \(k\) i \(V(n)\) stopnia \(m\) o współczynnikach przy najwyższych potęgach \(w_k\), \(v_m\):
  \[\lim\frac{W(n)}{V(n)}=\begin{cases}0 & k&lt;m\\[2pt] \dfrac{w_k}{v_m} & k=m\\[4pt] \pm\infty & k>m\end{cases}\]</li>
  <li><b>Różnica pierwiastków:</b> mnożymy i dzielimy przez sprzężenie, \(\sqrt{A}-\sqrt{B}=\dfrac{A-B}{\sqrt{A}+\sqrt{B}}\).</li>
  <li><b>Potęgi o różnych podstawach</b> (np. \(2^n\), \(3^n\)): dzielimy przez potęgę o największej podstawie i korzystamy z \(q^n\to0\) dla \(|q|<1\).</li>
  <li><b>Symbol Newtona i silnia:</b> rozwijamy do wielomianu, np. \(\dbinom{n+2}{3}=\dfrac{(n+2)(n+1)n}{6}\).</li>
  <li><b>Sumy:</b> najpierw zwijamy sumę wzorem na \(S_n\) (ciąg arytmetyczny lub geometryczny), potem liczymy granicę.</li>
</ol>
<div class="bx ex"><span class="t">Przykłady 5–7</span>
<p>\(\displaystyle\lim\frac{3n^2-n+1}{5n^2+2}=\frac35\).  &nbsp; \(\displaystyle\lim\Bigl(\sqrt{n^2+n}-n\Bigr)=\lim\frac{n}{\sqrt{n^2+n}+n}=\lim\frac{1}{\sqrt{1+\frac1n}+1}=\frac12\).</p>
<p>\(\displaystyle\lim\frac{2^n+3^n}{3^{n+1}}=\lim\frac{\left(\frac23\right)^n+1}{3}=\frac13\).</p>
</div>

<h3>Suma nieskończonego ciągu geometrycznego (szereg geometryczny)</h3>
<div class="bx def"><span class="t">Szereg geometryczny</span>
<p>Wyrażenie \(a_1+a_1q+a_1q^2+a_1q^3+\dots\) nazywamy <b>szeregiem geometrycznym</b>. Gdy ma ono sumę \(S\), mówimy, że szereg jest <b>zbieżny</b>, a \(S\) jest <b>sumą nieskończonego ciągu geometrycznego</b>. Np. szereg \(2+6+18+54+\dots\) nie jest zbieżny, bo \(q=3\notin(-1,1)\).</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie</span>
<p>Suma wszystkich wyrazów nieskończonego ciągu geometrycznego \((a_n)\) istnieje i jest skończona wtedy i tylko wtedy, gdy \(|q|<1\) (lub \(a_1=0\)). Wynosi wtedy
\[S=a_1+a_1q+a_1q^2+\dots=\frac{a_1}{1-q}.\]</p>
<p><i>Skąd ten wzór:</i> \(S_n=a_1\dfrac{1-q^n}{1-q}\), a dla \(|q|<1\) mamy \(q^n\to0\), więc \(S=\lim S_n=\dfrac{a_1}{1-q}\).</p>
<div class="fg"><svg class="fig" viewBox="0 0 344 160" width="344" height="160" role="img" aria-label="Sumy czesciowe szeregu 1 + 1/2 + 1/4 + ... zblizaja sie do 2"><line class="ax" x1="12" y1="116" x2="333" y2="116"/><polygon class="ah" points="338,116 331,118.9 331,113.1"/><text class="b" x="8" y="16" text-anchor="start">1 + 1/2 + 1/4 + 1/8 + … = 2</text><path class="a" d="M20.0,116 A75.0,75.0 0 0 1 170.0,116"/><path class="p" d="M170.0,116 A37.5,37.5 0 0 1 245.0,116"/><path class="a" d="M245.0,116 A18.8,18.8 0 0 1 282.5,116"/><path class="p" d="M282.5,116 A9.4,9.4 0 0 1 301.2,116"/><path class="a" d="M301.2,116 A4.7,4.7 0 0 1 310.6,116"/><circle class="dot" cx="20" cy="116" r="2.8"/><circle class="dot" cx="170" cy="116" r="2.8"/><circle class="dot" cx="245" cy="116" r="2.8"/><circle class="dot" cx="282.5" cy="116" r="2.8"/><circle class="dot" cx="301.2" cy="116" r="2.8"/><circle class="dot" cx="310.6" cy="116" r="2.8"/><line class="s" x1="320" y1="110" x2="320" y2="122"/><text class="m" x="20" y="136" text-anchor="middle">0</text><text class="m" x="170" y="136" text-anchor="middle">S₁ = 1</text><text class="m" x="245" y="136" text-anchor="middle">S₂ = 1,5</text><text class="m" x="284.5" y="150" text-anchor="middle">S₃ = 1,75</text><text class="b" x="322" y="136" text-anchor="middle">2</text><text class="m" x="95" y="37" text-anchor="middle">a₁ = 1</text><text class="m" x="207.5" y="74" text-anchor="middle">½</text></svg></div>
<p class="note">Sumy częściowe \(S_n\) zbliżają się do \(\dfrac{a_1}{1-q}=\dfrac1{1-\frac12}=2\).</p>
</div>
<div class="bx warn"><span class="t">Uwaga: ciąg zbieżny a szereg zbieżny</span>
<p>Ciąg geometryczny \(a_n=a_1q^{n-1}\) jest <b>zbieżny</b>, gdy \(|q|<1\) lub \(q=1\) (ciąg stały) albo \(a_1=0\). Natomiast <b>suma wyrazów</b> ma sens tylko dla \(|q|<1\). Przy stałym ciągu \(q=1\) wyrazy mają granicę \(a_1\), ale suma jest nieskończona.</p>
</div>
<h4>Typowe zastosowania</h4>
<ul>
  <li><b>Ułamki okresowe.</b> \(0{,}(27)=\dfrac{0{,}27}{1-0{,}01}=\dfrac{27}{99}=\dfrac{3}{11}\); \(0{,}1(6)=\dfrac1{10}+\dfrac{0{,}06}{1-0{,}1}=\dfrac1{10}+\dfrac1{15}=\dfrac16\).</li>
  <li><b>Geometria.</b> Figury wpisywane jedna w drugą: długości boków, obwody i pola tworzą ciąg geometryczny. Jeśli kolejne figury są podobne w skali \(k\), to obwody mają iloraz \(k\), a pola \(k^2\).</li>
  <li><b>Szereg zależny od \(x\).</b> Szereg \(1+2x+4x^2+8x^3+\dots\) ma iloraz \(q=2x\), więc jest zbieżny wtedy i tylko wtedy, gdy \(|2x|&lt;1\), czyli \(x\in\left(-\tfrac12,\tfrac12\right)\). Wtedy jego suma to \(\dfrac1{1-2x}\).</li>
  <li><b>Równania z szeregiem.</b> Np. \(1+x+x^2+\dots=3\). Warunek zbieżności to \(|x|<1\). Wtedy \(\dfrac{1}{1-x}=3\), czyli \(x=\dfrac23\), co spełnia warunek.</li>
</ul>

<h3>Jak podchodzić do zadań maturalnych</h3>
<ol>
  <li><b>Zapisz dane przez \(a_1\) i \(r\) (lub \(q\)).</b> Większość zadań sprowadza się do układu dwóch równań z tymi niewiadomymi.</li>
  <li><b>Wygodne oznaczenia trzech kolejnych wyrazów:</b> \((x-r,\,x,\,x+r)\) dla ciągu arytmetycznego oraz \(\left(\dfrac{x}{q},\,x,\,xq\right)\) dla geometrycznego.</li>
  <li><b>Zadania mieszane</b> (jeden ciąg arytmetyczny, drugi geometryczny): zapisz warunek \(2b=a+c\) dla pierwszego i \(b^2=ac\) dla drugiego, wyrażając wszystkie wyrazy przez \(a_1\) i \(r\).</li>
  <li><b>Uważaj na dodatkowe założenia</b> („rosnący”, „o wyrazach dodatnich”, „zbieżny”, „liczba wyrazów większa od 6”). Często odrzucają one część rozwiązań – każde odrzucenie uzasadnij.</li>
  <li><b>Szereg geometryczny:</b> zawsze sprawdź i zapisz warunek \(|q|<1\).</li>
  <li><b>Granice:</b> dziel przez najwyższą potęgę \(n\), użyj sprzężenia, rozwiń symbol Newtona.</li>
  <li><b>Zadania z „kratkami”</b> (arkusze do 2022): najpierw policz wynik dokładnie, dopiero potem podaj cyfry rozwinięcia dziesiętnego.</li>
</ol>

<h3>Zestawienie wzorów</h3>
<div class="tw"><table>
  <thead><tr><th></th><th>Ciąg arytmetyczny</th><th>Ciąg geometryczny</th></tr></thead>
  <tbody>
    <tr><td>Definicja</td><td>\(a_{n+1}-a_n=r\)</td><td>\(a_{n+1}=q\,a_n\)</td></tr>
    <tr><td>Wyraz ogólny</td><td>\(a_n=a_1+(n-1)r\)</td><td>\(a_n=a_1q^{n-1}\)</td></tr>
    <tr><td>Trzy kolejne wyrazy \(a,b,c\)</td><td>\(2b=a+c\)</td><td>\(b^2=ac\)</td></tr>
    <tr><td>Suma \(n\) wyrazów</td><td>\(S_n=\dfrac{a_1+a_n}{2}\,n\)</td><td>\(S_n=a_1\dfrac{1-q^n}{1-q}\), \(q\ne1\)</td></tr>
    <tr><td>Symetria wskaźników \(k+l=m+p\)</td><td>\(a_k+a_l=a_m+a_p\)</td><td>\(a_k\,a_l=a_m\,a_p\)</td></tr>
    <tr><td>Suma nieskończona</td><td>–</td><td>\(S=\dfrac{a_1}{1-q}\), gdy \(|q|<1\)</td></tr>
  </tbody>
</table></div>`;
