(window.THEORY = window.THEORY || {})['matura-1'] = String.raw`
<h3>Zbiory liczbowe, przedziały, podzielność</h3>
<div class="bx def"><span class="t">Zbiory liczbowe</span>
<ul>
<li>\(\mathbb N=\{1,2,3,\dots\}\) – liczby naturalne (z zerem: \(\mathbb N_0\)), \(\mathbb Z\) – całkowite, \(\mathbb Q=\left\{\tfrac pq:\ p\in\mathbb Z,\ q\in\mathbb Z\setminus\{0\}\right\}\) – wymierne.</li>
<li><b>Liczby niewymierne</b> to liczby rzeczywiste niebędące wymiernymi (np. \(\sqrt2\), \(\pi\)). Rozwinięcie dziesiętne liczby wymiernej jest skończone lub okresowe, niewymiernej – nieokresowe.</li>
<li>\(\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R\).</li>
</ul>
</div>
<p><b>Przedziały:</b> \((a,b)=\{x:a&lt;x&lt;b\}\), \([a,b]=\{x:a\le x\le b\}\), \((a,\infty)\), \((-\infty,b]\) itd. Działania na zbiorach: suma \(A\cup B\), część wspólna \(A\cap B\), różnica \(A\setminus B\), dopełnienie \(A'=\mathbb R\setminus A\).</p>
<div class="bx ex"><span class="t">Przykład</span>
<p>Dla \(A=(-2,3]\) i \(B=[1,5)\): \(A\cup B=(-2,5)\), \(A\cap B=[1,3]\), \(A\setminus B=(-2,1)\).</p>
<p>Dowód niewymierności \(\sqrt2\) (nie wprost): jeśli \(\sqrt2=\tfrac pq\) (ułamek nieskracalny), to \(p^2=2q^2\), więc \(p\) jest parzyste, \(p=2k\), a stąd \(q^2=2k^2\) i \(q\) też jest parzyste – sprzeczność z nieskracalnością.</p>
</div>
<div class="bx thm"><span class="t">Podzielność</span>
<ul>
<li>\(a\mid b\) (\(a\) dzieli \(b\)), gdy \(b=ka\) dla pewnej liczby całkowitej \(k\). Dzielenie z resztą: \(a=bq+r\), \(0\le r&lt;b\).</li>
<li><b>Cechy podzielności:</b> przez \(2\) – ostatnia cyfra parzysta; przez \(3\) (\(9\)) – suma cyfr podzielna przez \(3\) (\(9\)); przez \(4\) – dwie ostatnie cyfry tworzą liczbę podzielną przez \(4\); przez \(5\) – ostatnia cyfra \(0\) lub \(5\); przez \(10\) – ostatnia cyfra \(0\); przez \(11\) – różnica sum cyfr na miejscach parzystych i nieparzystych podzielna przez \(11\).</li>
<li>Liczba pierwsza ma dokładnie dwa dzielniki (\(1\) i siebie). Każda liczba naturalna \(>1\) rozkłada się jednoznacznie na czynniki pierwsze.</li>
<li>\(\mathrm{NWD}(a,b)\cdot\mathrm{NWW}(a,b)=a\cdot b\). Liczby względnie pierwsze mają \(\mathrm{NWD}=1\).</li>
</ul>
</div>

<h3>Procenty i procent składany</h3>
<ul>
<li>\(p\%\) liczby \(a\) to \(\dfrac p{100}\cdot a\). Jaki procent liczby \(b\) stanowi \(a\): \(\dfrac ab\cdot100\%\).</li>
<li><b>Wzrost o \(p\%\)</b>: nowa wartość \(=\) stara \(\cdot\left(1+\tfrac p{100}\right)\); <b>spadek o \(p\%\)</b>: \(\cdot\left(1-\tfrac p{100}\right)\). Kolejne zmiany <b>mnożymy</b>, nie dodajemy.</li>
<li><b>Punkty procentowe</b> to różnica dwóch wartości procentowych (z \(20\%\) na \(25\%\): wzrost o \(5\) punktów procentowych, ale o \(25\%\)).</li>
<li><b>Procent składany:</b> \(K_n=K_0\left(1+\tfrac p{100}\right)^n\) (więcej w dziale „Ciągi”).</li>
<li><b>Stężenie procentowe:</b> \(c=\dfrac{m_s}{m_r}\cdot100\%\) (masa substancji do masy roztworu). Przy mieszaniu roztworów dodajemy masy substancji i masy roztworów.</li>
</ul>
<div class="bx ex"><span class="t">Przykład</span>
<p>Cenę podniesiono o \(20\%\), a potem obniżono o \(20\%\). Cena końcowa: \(1{,}2\cdot0{,}8=0{,}96\) ceny pierwotnej, czyli spadek o \(4\%\).</p>
</div>

<h3>Potęgi i pierwiastki</h3>
<div class="bx def"><span class="t">Definicje</span>
<ul>
<li>\(a^n=\underbrace{a\cdot a\cdots a}_{n}\), \(a^0=1\) (\(a\ne0\)), \(a^{-n}=\dfrac1{a^n}\) (\(a\ne0\)).</li>
<li><b>Pierwiastek stopnia \(n\)</b> z liczby \(a\): \(\sqrt[n]{a}=b\iff b^n=a\) i (\(b\ge0\), gdy \(n\) parzyste). Dla \(n\) parzystego wymagane \(a\ge0\); dla nieparzystego \(a\in\mathbb R\) (np. \(\sqrt[3]{-8}=-2\)).</li>
<li>Wykładnik wymierny (\(a>0\)): \(a^{m/n}=\sqrt[n]{a^m}=\left(\sqrt[n]{a}\right)^m\).</li>
</ul>
</div>
<div class="bx thm"><span class="t">Prawa działań</span>
<div class="two">
<div>
\[a^m\cdot a^n=a^{m+n},\qquad\frac{a^m}{a^n}=a^{m-n}\]
\[(a^m)^n=a^{mn},\qquad(ab)^n=a^nb^n,\qquad\left(\frac ab\right)^n=\frac{a^n}{b^n}\]
</div>
<div>
\[\sqrt[n]{ab}=\sqrt[n]{a}\sqrt[n]{b},\qquad\sqrt[n]{\tfrac ab}=\frac{\sqrt[n]{a}}{\sqrt[n]{b}}\quad(a,b\ge0)\]
\[\sqrt[m]{\sqrt[n]{a}}=\sqrt[mn]{a},\qquad\sqrt{a^2}=|a|\]
</div>
</div>
</div>
<p><b>Usuwanie niewymierności z mianownika:</b> \(\dfrac1{\sqrt a}=\dfrac{\sqrt a}a\), \(\dfrac1{\sqrt a+\sqrt b}=\dfrac{\sqrt a-\sqrt b}{a-b}\) (mnożymy przez sprzężenie).</p>
<p><b>Porównywanie potęg:</b> dla \(a>1\) funkcja \(a^x\) rośnie, dla \(0&lt;a&lt;1\) maleje; dla tego samego wykładnika dodatniego większa podstawa daje większą potęgę. Aby porównać \(2^{50}\) i \(3^{30}\), sprowadzamy do wspólnego wykładnika: \(2^{50}=(2^5)^{10}=32^{10}\), \(3^{30}=(3^3)^{10}=27^{10}\), więc \(2^{50}>3^{30}\).</p>

<h3>Wartość bezwzględna</h3>
<div class="bx def"><span class="t">Definicja</span>
\[|a|=\begin{cases}a & a\ge0\\ -a & a&lt;0\end{cases}\]
<p>Geometrycznie \(|a|\) to odległość liczby \(a\) od zera na osi liczbowej, a \(|a-b|\) – odległość liczb \(a\) i \(b\).</p>
</div>
<div class="bx thm"><span class="t">Własności</span>
<ul>
<li>\(|a|\ge0\); \(|a|=0\iff a=0\); \(|-a|=|a|\); \(|a|^2=a^2\); \(\sqrt{a^2}=|a|\).</li>
<li>\(|ab|=|a||b|\); \(\left|\tfrac ab\right|=\tfrac{|a|}{|b|}\) (\(b\ne0\)).</li>
<li><b>Nierówność trójkąta:</b> \(|a+b|\le|a|+|b|\); \(\bigl||a|-|b|\bigr|\le|a-b|\).</li>
<li>Dla \(c>0\): \(|x|&lt;c\iff-c&lt;x&lt;c\); \(|x|>c\iff x&lt;-c\) lub \(x>c\).</li>
</ul>
</div>

<h3>Logarytmy i ich własności</h3>
<div class="bx def"><span class="t">Definicja</span>
\[\log_a b=c\iff a^c=b\qquad(a>0,\ a\ne1,\ b>0).\]
<p>Szczególne: \(\log_a1=0\), \(\log_aa=1\), \(a^{\log_ab}=b\), \(\log_aa^c=c\). \(\lg x=\log_{10}x\), \(\ln x=\log_ex\).</p>
</div>
<div class="bx thm"><span class="t">Własności (dla \(x,y>0\), \(a,b\) dopuszczalnych podstaw)</span>
<div class="two">
<div>
\[\log_a(xy)=\log_ax+\log_ay\]
\[\log_a\frac xy=\log_ax-\log_ay\]
\[\log_ax^r=r\log_ax\]
</div>
<div>
\[\log_ab=\frac{\log_cb}{\log_ca}\]
\[\log_ab=\frac1{\log_ba},\qquad\log_ab\cdot\log_bc=\log_ac\]
\[\log_{a^k}b=\frac1k\log_ab\]
</div>
</div>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(\log_2 12-\log_2 3=\log_24=2\); \(\;\log_95=\dfrac{\log_35}{\log_39}=\tfrac12\log_35\); \(\;81^{\log_3x}=3^{4\log_3x}=x^4\).</p>
</div>
<div class="bx warn"><span class="t">Uwaga</span>
<p>\(\log_a(x+y)\) <b>nie</b> rozkłada się na sumę logarytmów. Wyrażenia pod logarytmem muszą być dodatnie – po przekształceniach trzeba pamiętać o dziedzinie.</p>
</div>

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

<h3>Nierówność między średnimi i dowody algebraiczne</h3>
<div class="bx thm"><span class="t">Nierówność między średnimi</span>
<p>Dla dodatnich liczb \(a,b\):
\[\frac{2ab}{a+b}\ \le\ \sqrt{ab}\ \le\ \frac{a+b}2\ \le\ \sqrt{\frac{a^2+b^2}2},\]
(średnia harmoniczna \(\le\) geometryczna \(\le\) arytmetyczna \(\le\) kwadratowa), a równość zachodzi tylko dla \(a=b\). Dla \(n\) liczb dodatnich: \(\sqrt[n]{a_1\cdots a_n}\le\dfrac{a_1+\dots+a_n}n\).</p>
<p>Wnioski: \(a+\dfrac1a\ge2\) dla \(a>0\); \(a^2+b^2\ge2ab\) dla dowolnych \(a,b\).</p>
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
