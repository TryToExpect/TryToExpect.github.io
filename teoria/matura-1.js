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

<h3>Dowody algebraiczne i nierówności</h3>
<div class="bx thm"><span class="t">Podstawowe nierówności</span>
<p>Dla dowolnych liczb rzeczywistych \(a,b\): \(a^2+b^2\ge2ab\) oraz \((a+b)^2\ge4ab\) (obie wynikają z \((a-b)^2\ge0\)); równość zachodzi tylko dla \(a=b\). Dla \(a,b>0\): \(\dfrac ab+\dfrac ba\ge2\), a dla \(a>0\): \(a+\dfrac1a\ge2\).</p>
</div>
<details class="opt"><summary><span class="optb">Poza wymaganiami</span>Nierówność między średnimi (harmoniczna, geometryczna, arytmetyczna, kwadratowa)</summary>
<div class="opt-body">
<div class="bx thm"><span class="t">Nierówność między średnimi</span>
<p>Dla dodatnich liczb \(a,b\):
\[\frac{2ab}{a+b}\ \le\ \sqrt{ab}\ \le\ \frac{a+b}2\ \le\ \sqrt{\frac{a^2+b^2}2},\]
(średnia harmoniczna \(\le\) geometryczna \(\le\) arytmetyczna \(\le\) kwadratowa), a równość zachodzi tylko dla \(a=b\). Dla \(n\) liczb dodatnich: \(\sqrt[n]{a_1\cdots a_n}\le\dfrac{a_1+\dots+a_n}n\).</p>
<p>Wnioski: \(a+\dfrac1a\ge2\) dla \(a>0\); \(a^2+b^2\ge2ab\) dla dowolnych \(a,b\).</p>
<div class="fg"><svg class="fig" viewBox="0 0 250 176" width="250" height="176" role="img" aria-label="Pol okregu o srednicy a+b: wysokosc CD = pierwiastek z ab nie przekracza promienia (a+b)/2"><path class="s" d="M20,138 A100,100 0 0 1 220,138"/><line class="s" x1="20" y1="138" x2="220" y2="138"/><line class="a" x1="70" y1="138" x2="70" y2="51.4"/><line class="p d" x1="120" y1="138" x2="70" y2="51.4"/><path class="s w" d="M78,138 L78,130 L70,130"/><circle class="dot" cx="70" cy="51.4" r="3"/><circle class="dot" cx="70" cy="138" r="2.6"/><circle class="dot" cx="120" cy="138" r="2.6"/><text x="20" y="156" text-anchor="middle">A</text><text x="70" y="156" text-anchor="middle">C</text><text x="120" y="156" text-anchor="middle">O</text><text x="220" y="156" text-anchor="middle">B</text><text x="63" y="45.4" text-anchor="end">D</text><text class="ac" x="45" y="131" text-anchor="middle">a</text><text class="ac" x="145" y="131" text-anchor="middle">b</text><text class="ac" x="63" y="110" text-anchor="end">√(ab)</text><text class="pn" x="104" y="92" text-anchor="start">(a+b)/2</text><text class="m" x="125" y="172" text-anchor="middle">wysokość CD ≤ promień OD</text></svg></div>
<p class="note">Geometrycznie: w półokręgu o średnicy \(AB=a+b\) poprowadź z punktu \(C\) (gdzie \(AC=a\), \(CB=b\)) odcinek \(CD\) prostopadły do \(AB\). Trójkąt \(ADB\) jest prostokątny (kąt oparty na średnicy), więc \(CD^2=AC\cdot CB=ab\). Wysokość \(CD\) nie przekracza promienia \(OD=\tfrac{a+b}2\), czyli \(\sqrt{ab}\le\tfrac{a+b}2\).</p>
</div>
</div></details>
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

<h3>Dowody liczbowe i podzielność</h3>
<div class="bx met"><span class="t">Dowody o liczbach całkowitych</span>
<ol>
<li><b>Zapisz liczby wzorami:</b> parzysta \(2k\), nieparzysta \(2k+1\), podzielna przez \(3\): \(3k\); kolejne liczby całkowite \(n,\ n+1,\ n+2\); liczba dająca resztę \(r\) z dzielenia przez \(m\): \(mk+r\).</li>
<li><b>Przekształć wyrażenie</b> (wyłączanie, wzory skróconego mnożenia) do postaci iloczynu, w którym widać szukany dzielnik.</li>
<li><b>Rozbij na przypadki</b> według reszty z dzielenia (np. \(n=3k,\ 3k+1,\ 3k+2\)) i w każdym wykaż tezę.</li>
<li>Sprawdzenie na kilku liczbach nie jest dowodem – liczby w dowodzie muszą być <b>dowolne</b>.</li>
</ol>
</div>
<div class="bx ex"><span class="t">Przykłady</span>
<p><b>Cztery kolejne liczby.</b> Iloczyn \(n(n+1)(n+2)(n+3)\) czterech kolejnych liczb naturalnych dzieli się przez \(24\). Wśród czterech kolejnych liczb są dwie parzyste, a jedna z nich dzieli się przez \(4\), więc iloczyn dzieli się przez \(2\cdot4=8\). Wśród trzech kolejnych liczb jest wielokrotność \(3\), więc iloczyn dzieli się też przez \(3\). Liczby \(8\) i \(3\) są względnie pierwsze, więc iloczyn dzieli się przez \(24\). \(\blacksquare\)</p>
<p><b>Kwadrat liczby nieparzystej.</b> \((2k+1)^2=4k(k+1)+1\). Iloczyn \(k(k+1)\) jest parzysty, więc \(4k(k+1)\) dzieli się przez \(8\), a kwadrat liczby nieparzystej daje resztę \(1\) z dzielenia przez \(8\). \(\blacksquare\)</p>
<p><b>Reszty z dzielenia.</b> Suma kwadratów trzech kolejnych liczb całkowitych \((n-1)^2+n^2+(n+1)^2=3n^2+2\) daje przy dzieleniu przez \(3\) resztę \(2\). \(\blacksquare\)</p>
<p><b>Rozbicie na przypadki.</b> Dla \(n=3k\) mamy \(n^2=9k^2\); dla \(n=3k+1\): \(n^2=3(3k^2+2k)+1\); dla \(n=3k+2\): \(n^2=3(3k^2+4k+1)+1\). Kwadrat liczby całkowitej daje więc przy dzieleniu przez \(3\) resztę \(0\) lub \(1\). Jeśli \(3\mid x^2+y^2\), to reszty kwadratów muszą wynosić \(0+0\) (suma reszt \(0+1\) albo \(1+1\) nie jest podzielna przez \(3\)), czyli \(3\mid x\) i \(3\mid y\). \(\blacksquare\)</p>
</div>
<div class="bx pf" data-pf="zp1"><span class="t">Dowód, że liczb pierwszych jest nieskończenie wiele</span>
<p>Przypuśćmy, że liczb pierwszych jest skończenie wiele: \(p_1,p_2,\dots,p_n\). Rozważmy liczbę \(N=p_1p_2\cdots p_n+1>1\). Ma ona pewien dzielnik pierwszy \(p\), więc \(p\) jest jedną z liczb \(p_i\). Ale \(p_i\) dzieli iloczyn \(p_1\cdots p_n\), więc nie może dzielić liczby \(N\), która jest od niego o \(1\) większa (dzieliłoby wtedy różnicę \(N-p_1\cdots p_n=1\)). Sprzeczność. \(\blacksquare\)</p>
</div>
<div class="bx pf" data-pf="zr2b"><span class="t">Dowód wzoru na \(a^n-b^n\) i podzielności \(a-b\mid a^n-b^n\)</span>
<p>Niech \(S=a^{n-1}+a^{n-2}b+\dots+ab^{n-2}+b^{n-1}\). Wtedy
\[aS=a^n+a^{n-1}b+\dots+a^2b^{n-2}+ab^{n-1},\qquad bS=a^{n-1}b+a^{n-2}b^2+\dots+ab^{n-1}+b^n.\]
Po odjęciu stronami skracają się wszystkie składniki z wyjątkiem pierwszego w \(aS\) i ostatniego w \(bS\), więc \((a-b)S=a^n-b^n\). Jeśli \(a,b\) są liczbami całkowitymi, to \(S\) też jest liczbą całkowitą, więc \(a-b\) dzieli \(a^n-b^n\). \(\blacksquare\)</p>
<p class="note">Np. \(7^n-1\) dzieli się przez \(7-1=6\), a \(5^n-2^n\) przez \(3\). Dla nieparzystego \(n\), po zastąpieniu \(b\) przez \(-b\), dostajemy \(a+b\mid a^n+b^n\).</p>
</div>

<h3>Lista dowodów z podstawy programowej</h3>
<p>Podstawa programowa wymienia dowody twierdzeń, które uczeń powinien znać. Poniżej spis z odnośnikami do miejsc, w których znajdziesz je na tej stronie (ramki oznaczone „z listy podstawy”). Dowód każdego z tych twierdzeń jest też wzorem rozumowania, którego można użyć w zadaniu typu „wykaż, że”.</p>
<div class="tw"><table>
<thead><tr><th>Twierdzenie</th><th>Gdzie</th></tr></thead>
<tbody>
<tr><td><span class="note">podst.</span> Liczb pierwszych jest nieskończenie wiele</td><td><a href="#matura-1-teoria-3" data-pf-link="zp1">Wyrażenia i dowody, sekcja 3</a></td></tr>
<tr><td><span class="note">podst.</span> Niewymierność liczb \(\sqrt2\) i \(\log_25\)</td><td><a href="#matura-11-teoria-1" data-pf-link="zp2">Liczby i logarytmy, sekcja 1</a></td></tr>
<tr><td><span class="note">podst.</span> Wzory na pierwiastki trójmianu kwadratowego</td><td><a href="#matura-13-teoria-1" data-pf-link="zp3">Funkcja kwadratowa, sekcja 1</a></td></tr>
<tr><td><span class="note">podst.</span> Własności potęg (wykładniki całkowite i wymierne) i logarytmów</td><td><a href="#matura-11-teoria-3" data-pf-link="zp4a">Liczby i logarytmy, sekcja 3</a>, <a href="#matura-11-teoria-5" data-pf-link="zp4b">Liczby i logarytmy, sekcja 5</a></td></tr>
<tr><td><span class="note">podst.</span> Wzory na \(n\)-ty wyraz i sumę \(n\) początkowych wyrazów ciągu arytmetycznego i geometrycznego</td><td><a href="#matura-5-teoria-3" data-pf-link="zp5">Ciągi, sekcja 3</a></td></tr>
<tr><td><span class="note">podst.</span> Kąt wpisany jest połową kąta środkowego; kąty wpisane i równe łuki</td><td><a href="#matura-6-teoria-8" data-pf-link="zp6">Planimetria, sekcja 8</a></td></tr>
<tr><td><span class="note">podst.</span> Odcinki w trójkącie prostokątnym (wysokość poprowadzona z wierzchołka kąta prostego)</td><td><a href="#matura-6-teoria-3" data-pf-link="zp7">Planimetria, sekcja 3</a></td></tr>
<tr><td><span class="note">podst.</span> Twierdzenie o dwusiecznej kąta w trójkącie</td><td><a href="#matura-6-teoria-2" data-pf-link="zp8">Planimetria, sekcja 2</a></td></tr>
<tr><td><span class="note">podst.</span> Wzór na pole trójkąta \(P=\tfrac12ab\sin\gamma\)</td><td><a href="#matura-6-teoria-4" data-pf-link="zp9">Planimetria, sekcja 4</a></td></tr>
<tr><td><span class="note">podst.</span> Twierdzenie cosinusów i twierdzenie odwrotne do twierdzenia Pitagorasa</td><td><a href="#matura-6-teoria-4" data-pf-link="zp10">Planimetria, sekcja 4</a></td></tr>
<tr><td><span class="note">rozsz.</span> Tożsamość \(\binom nk=\binom{n-1}{k-1}+\binom{n-1}k\) (dowód kombinatoryczny)</td><td><a href="#matura-9-teoria-1" data-pf-link="zr1">Kombinatoryka i prawdopodobieństwo, sekcja 1</a></td></tr>
<tr><td><span class="note">rozsz.</span> Wzór dwumianowy Newtona; wzór na \(a^n-b^n\) i podzielność \(a-b\mid a^n-b^n\)</td><td><a href="#matura-9-teoria-2" data-pf-link="zr2a">Kombinatoryka i prawdopodobieństwo, sekcja 2</a>, <a href="#matura-1-teoria-3" data-pf-link="zr2b">Wyrażenia i dowody, sekcja 3</a></td></tr>
<tr><td><span class="note">rozsz.</span> Dzielenie wielomianu z resztą przez \(x-a\), schemat Hornera</td><td><a href="#matura-2-teoria-4" data-pf-link="zr3">Równania i nierówności, sekcja 4</a></td></tr>
<tr><td><span class="note">rozsz.</span> Wzory Viète’a</td><td><a href="#matura-2-teoria-2" data-pf-link="zr4">Równania i nierówności, sekcja 2</a></td></tr>
<tr><td><span class="note">rozsz.</span> Wzory na sinus i cosinus sumy oraz różnicy kątów</td><td><a href="#matura-4-teoria-3" data-pf-link="zr5">Trygonometria, sekcja 3</a></td></tr>
<tr><td><span class="note">rozsz.</span> Twierdzenie sinusów</td><td><a href="#matura-6-teoria-4" data-pf-link="zr6">Planimetria, sekcja 4</a></td></tr>
<tr><td><span class="note">rozsz.</span> Punkty szczególne trójkąta: symetralne i wysokości, środkowe</td><td><a href="#matura-6-teoria-5" data-pf-link="zr7a">Planimetria, sekcja 5</a>, <a href="#matura-6-teoria-5" data-pf-link="zr7b">Planimetria, sekcja 5</a></td></tr>
<tr><td><span class="note">rozsz.</span> Warunek wpisania czworokąta w okrąg</td><td><a href="#matura-6-teoria-9" data-pf-link="zr8">Planimetria, sekcja 9</a></td></tr>
<tr><td><span class="note">rozsz.</span> Warunek opisania okręgu na czworokącie (sumy przeciwległych boków)</td><td><a href="#matura-6-teoria-9" data-pf-link="zr9">Planimetria, sekcja 9</a></td></tr>
<tr><td><span class="note">rozsz.</span> Twierdzenie o prostej prostopadłej do płaszczyzny</td><td><a href="#matura-8-teoria-1" data-pf-link="zr10">Stereometria, sekcja 1</a></td></tr>
<tr><td><span class="note">rozsz.</span> Twierdzenie o trzech prostych prostopadłych</td><td><a href="#matura-8-teoria-1" data-pf-link="zr11">Stereometria, sekcja 1</a></td></tr>
</tbody></table></div>
`;
