(window.THEORY = window.THEORY || {})['matura-1'] = String.raw`
<h3>Wzory skróconego mnożenia i przekształcanie wyrażeń</h3>
<div class="bx thm"><span class="t">Wzory</span>
<div class="two">
<div>
\[(a\pm b)^2=a^2\pm2ab+b^2\]
\[a^2-b^2=(a-b)(a+b)\]
\[(a+b+c)^2=a^2+b^2+c^2+2ab+2bc+2ca\]
</div>
<div>
\[(a\pm b)^3=a^3\pm3a^2b+3ab^2\pm b^3\]
\[a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)\]
\[a^n-b^n=(a-b)\left(a^{n-1}+a^{n-2}b+\dots+b^{n-1}\right)\]
</div>
</div>
</div>
<ul>
<li><b>Przekształcanie:</b> wyłączanie wspólnego czynnika, grupowanie wyrazów, uzupełnianie do kwadratu (\(x^2+px=\left(x+\tfrac p2\right)^2-\tfrac{p^2}4\)).</li>
<li><b>Wyrażenia wymierne:</b> określamy dziedzinę (mianowniki \(\ne0\)), skracamy dopiero po rozkładzie na czynniki, dodajemy po sprowadzeniu do wspólnego mianownika.</li>
<li>Użyteczne: \(x^2+y^2=(x+y)^2-2xy\), \(x^3+y^3=(x+y)^3-3xy(x+y)\), \(\dfrac1x+\dfrac1y=\dfrac{x+y}{xy}\).</li>
</ul>

<div class="bx ex"><span class="t">Przykład – przekształcanie wyrażeń</span>
<p>Różnica kwadratów: \((2x-3)^2-(x+1)^2=\bigl[(2x-3)-(x+1)\bigr]\bigl[(2x-3)+(x+1)\bigr]=(x-4)(3x-2)\).</p>
<p>Różnica sześcianów: \(x^3-8=(x-2)(x^2+2x+4)\). Uzupełnianie do kwadratu: \(x^2+6x+2=(x+3)^2-7\).</p>
</div>

<h3>Nierówność między średnimi i dowody algebraiczne</h3>
<div class="bx thm"><span class="t">Nierówność między średnimi</span>
<p>Dla dodatnich liczb \(a,b\):
\[\frac{2ab}{a+b}\ \le\ \sqrt{ab}\ \le\ \frac{a+b}2\ \le\ \sqrt{\frac{a^2+b^2}2},\]
(średnia harmoniczna \(\le\) geometryczna \(\le\) arytmetyczna \(\le\) kwadratowa), a równość zachodzi tylko dla \(a=b\). Dla \(n\) liczb dodatnich: \(\sqrt[n]{a_1\cdots a_n}\le\dfrac{a_1+\dots+a_n}n\).</p>
<p>Wnioski: \(a+\dfrac1a\ge2\) dla \(a>0\); \(a^2+b^2\ge2ab\) dla dowolnych \(a,b\).</p>
<div class="fg"><svg class="fig" viewBox="0 0 250 176" width="250" height="176" role="img" aria-label="Pol okregu o srednicy a+b: wysokosc CD = pierwiastek z ab nie przekracza promienia (a+b)/2"><path class="s" d="M20,138 A100,100 0 0 1 220,138"/><line class="s" x1="20" y1="138" x2="220" y2="138"/><line class="a" x1="70" y1="138" x2="70" y2="51.4"/><line class="p d" x1="120" y1="138" x2="70" y2="51.4"/><path class="s w" d="M78,138 L78,130 L70,130"/><circle class="dot" cx="70" cy="51.4" r="3"/><circle class="dot" cx="70" cy="138" r="2.6"/><circle class="dot" cx="120" cy="138" r="2.6"/><text x="20" y="156" text-anchor="middle">A</text><text x="70" y="156" text-anchor="middle">C</text><text x="120" y="156" text-anchor="middle">O</text><text x="220" y="156" text-anchor="middle">B</text><text x="63" y="45.4" text-anchor="end">D</text><text class="ac" x="45" y="131" text-anchor="middle">a</text><text class="ac" x="145" y="131" text-anchor="middle">b</text><text class="ac" x="63" y="110" text-anchor="end">√(ab)</text><text class="pn" x="104" y="92" text-anchor="start">(a+b)/2</text><text class="m" x="125" y="172" text-anchor="middle">wysokość CD ≤ promień OD</text></svg></div>
<p class="note">Geometrycznie: w półokręgu o średnicy \(AB=a+b\) poprowadź z punktu \(C\) (gdzie \(AC=a\), \(CB=b\)) odcinek \(CD\) prostopadły do \(AB\). Trójkąt \(ADB\) jest prostokątny (kąt oparty na średnicy), więc \(CD^2=AC\cdot CB=ab\). Wysokość \(CD\) nie przekracza promienia \(OD=\tfrac{a+b}2\), czyli \(\sqrt{ab}\le\tfrac{a+b}2\).</p>
</div>
<div class="bx met"><span class="t">Jak dowodzić nierówności i równości</span>
<ol>
<li>Przenieś wszystko na jedną stronę i <b>rozłóż na czynniki</b>; pokaż, że wyrażenie jest iloczynem czynników o znanym znaku (np. \((a-b)^2\cdot(a+b)\ge0\)).</li>
<li>Wykorzystaj, że kwadrat liczby rzeczywistej jest nieujemny: \(a^2+b^2+c^2-ab-bc-ca=\tfrac12\bigl[(a-b)^2+(b-c)^2+(c-a)^2\bigr]\ge0\).</li>
<li><b>Dwie zmienne \(x,y\):</b> zapisz wyrażenie jako <b>sumę kwadratów</b>. Wyrazy z \(y\) dopełnij do kwadratu (\(y^2-4xy\) daje \((2x-y)^2\)), a resztę zbierz w kolejny kwadrat, np. \(5x^2+y^2-4xy+6x+9=(2x-y)^2+(x+3)^2\). Można też potraktować wyrażenie jako trójmian jednej zmiennej z parametrem: wystarczy, że współczynnik przy kwadracie jest dodatni, a \(\Delta\le0\).</li>
<li><b>Warunek dodatkowy</b> (np. \(a+b=1\), \(x^2+y^2=2\), \(2x>y\), \(x\ne y\)): użyj go, by uprościć wyrażenie albo ustalić znak jednego z czynników. Założenie \(x\ne y\) daje nierówność <b>ostrą</b>, bo wtedy \((x-y)^2>0\).</li>
<li>Sprawdź, kiedy zachodzi <b>równość</b> – podpowiada, jaki kwadrat ma się pojawić (równość dla \(x=y\) sugeruje \((x-y)^2\)).</li>
<li>Stosuj przekształcenia <b>równoważne</b> (mnożenie obu stron przez liczbę dodatnią; kwadrat dla nieujemnych) i zakończ zdaniem prawdziwym.</li>
<li><b>Podzielność:</b> zapisz liczbę przez resztę, np. \(n(n+1)\) jest parzyste, \(n^3-n=(n-1)n(n+1)\) dzieli się przez \(6\) (iloczyn trzech kolejnych liczb całkowitych).</li>
<li><b>Dowód nie wprost:</b> załóż zaprzeczenie tezy i doprowadź do sprzeczności.</li>
</ol>
</div>
<div class="bx fact"><span class="t">Przydatne rozkłady i oszacowania (dla liczb rzeczywistych \(x,y\))</span>
<ul>
<li>\(4xy\le(x+y)^2\le2(x^2+y^2)\); w obu nierównościach równość zachodzi tylko dla \(x=y\).</li>
<li>\(x^3+y^3-x^2y-xy^2=(x+y)(x-y)^2\).</li>
<li>\(x^4+y^4-x^3y-xy^3=(x-y)^2(x^2+xy+y^2)\).</li>
<li>\(x^2+xy+y^2=\left(x+\tfrac y2\right)^2+\tfrac34y^2=\tfrac12\bigl(x^2+y^2+(x+y)^2\bigr)\ge0\), a równość tylko dla \(x=y=0\).</li>
<li>Dla \(x,y>0\): \(\dfrac xy+\dfrac yx\ge2\) oraz \(\dfrac1x+\dfrac1y\ge\dfrac4{x+y}\).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Udowodnij, że dla \(a,b>0\): \(\dfrac ab+\dfrac ba\ge2\). Mnożąc przez \(ab>0\), otrzymujemy równoważną nierówność \(a^2+b^2\ge2ab\), czyli \((a-b)^2\ge0\) – prawdziwą.</p>
</div>
<div class="bx ex"><span class="t">Przykład – suma kwadratów</span>
<p>Wykaż, że dla dowolnych liczb rzeczywistych \(x,y\) zachodzi \(x^2+y^2+1\ge xy+x+y\). Rzeczywiście,
\[x^2+y^2+1-xy-x-y=\tfrac12\bigl[(x-y)^2+(x-1)^2+(y-1)^2\bigr]\ge0,\]
a równość zachodzi tylko dla \(x=y=1\).</p>
</div>
`;
