(window.THEORY = window.THEORY || {})['matura-11'] = String.raw`
<h3>Zbiory liczbowe, przedziały, podzielność</h3>
<div class="bx def"><span class="t">Zbiory liczbowe</span>
<ul>
<li>\(\mathbb N=\{0,1,2,\dots\}\) – liczby naturalne (dodatnie: \(\mathbb N_+=\{1,2,3,\dots\}\)), \(\mathbb Z\) – całkowite, \(\mathbb Q=\left\{\tfrac pq:\ p\in\mathbb Z,\ q\in\mathbb Z\setminus\{0\}\right\}\) – wymierne.</li>
<li><b>Liczby niewymierne</b> to liczby rzeczywiste niebędące wymiernymi (np. \(\sqrt2\), \(\pi\)). Rozwinięcie dziesiętne liczby wymiernej jest skończone lub okresowe, niewymiernej – nieokresowe.</li>
<li>\(\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R\).</li>
</ul>
</div>
<p><b>Przedziały:</b> \((a,b)=\{x:a&lt;x&lt;b\}\), \([a,b]=\{x:a\le x\le b\}\), \((a,\infty)\), \((-\infty,b]\) itd. Działania na zbiorach: suma \(A\cup B\), część wspólna \(A\cap B\), różnica \(A\setminus B\), dopełnienie \(A'=\mathbb R\setminus A\).</p>
<div class="bx ex"><span class="t">Przykład</span>
<p>Dla \(A=(-2,3]\) i \(B=[1,5)\): \(A\cup B=(-2,5)\), \(A\cap B=[1,3]\), \(A\setminus B=(-2,1)\).</p>
<div class="fg"><svg class="fig" viewBox="0 0 310 176" width="310" height="176" role="img" aria-label="Przedzialy A=(-2,3] i B=[1,5) na osi liczbowej oraz ich czesc wspolna i suma"><line class="gr d" x1="72" y1="14" x2="72" y2="148"/><line class="gr d" x1="150" y1="14" x2="150" y2="148"/><line class="gr d" x1="202" y1="14" x2="202" y2="148"/><line class="gr d" x1="254" y1="14" x2="254" y2="148"/><line class="ax w" x1="46" y1="26" x2="280" y2="26"/><line class="tha" x1="72" y1="26" x2="202" y2="26"/><circle class="holea" cx="72" cy="26" r="3.4"/><circle class="dota" cx="202" cy="26" r="3.2"/><text class="b" x="8" y="31" text-anchor="start">A</text><line class="ax w" x1="46" y1="58" x2="280" y2="58"/><line class="thp" x1="150" y1="58" x2="254" y2="58"/><circle class="dotp" cx="150" cy="58" r="3.2"/><circle class="holep" cx="254" cy="58" r="3.4"/><text class="b" x="8" y="63" text-anchor="start">B</text><line class="ax w" x1="46" y1="90" x2="280" y2="90"/><line class="th" x1="150" y1="90" x2="202" y2="90"/><circle class="dot" cx="150" cy="90" r="3.2"/><circle class="dot" cx="202" cy="90" r="3.2"/><text class="b" x="8" y="95" text-anchor="start">A∩B</text><line class="ax w" x1="46" y1="122" x2="280" y2="122"/><line class="th" x1="72" y1="122" x2="254" y2="122"/><circle class="hole" cx="72" cy="122" r="3.4"/><circle class="hole" cx="254" cy="122" r="3.4"/><text class="b" x="8" y="127" text-anchor="start">A∪B</text><line class="ax" x1="46" y1="150" x2="283" y2="150"/><polygon class="ah" points="288,150 281,152.9 281,147.1"/><line class="ax" x1="72" y1="146" x2="72" y2="154"/><text class="m" x="72" y="168" text-anchor="middle">−2</text><line class="ax" x1="124" y1="146" x2="124" y2="154"/><text class="m" x="124" y="168" text-anchor="middle">0</text><line class="ax" x1="150" y1="146" x2="150" y2="154"/><text class="m" x="150" y="168" text-anchor="middle">1</text><line class="ax" x1="202" y1="146" x2="202" y2="154"/><text class="m" x="202" y="168" text-anchor="middle">3</text><line class="ax" x1="254" y1="146" x2="254" y2="154"/><text class="m" x="254" y="168" text-anchor="middle">5</text></svg></div>
<p class="note">Puste kółko oznacza, że liczba nie należy do przedziału, a pełne, że należy. Część wspólna to obszar, który leży w obu przedziałach naraz, a suma to obszar objęty co najmniej jednym z nich.</p>
</div>
<div class="bx pf" data-pf="zp2"><span class="t">Dowód niewymierności \(\sqrt2\) i \(\log_25\)</span>
<p><b>\(\sqrt2\).</b> Przypuśćmy, że \(\sqrt2=\tfrac pq\), gdzie \(p,q\) są dodatnimi liczbami całkowitymi bez wspólnego dzielnika większego od \(1\). Wtedy \(p^2=2q^2\), więc \(p^2\) jest parzyste, a stąd \(p\) jest parzyste: \(p=2k\). Podstawiając: \(4k^2=2q^2\), czyli \(q^2=2k^2\), więc \(q\) też jest parzyste. Liczby \(p\) i \(q\) mają wspólny dzielnik \(2\) – sprzeczność.</p>
<p><b>\(\log_25\).</b> Liczba \(\log_25\) jest dodatnia (bo \(5>1\)). Przypuśćmy, że \(\log_25=\tfrac pq\) dla dodatnich liczb całkowitych \(p,q\). Wtedy \(2^{p/q}=5\), więc \(2^p=5^q\). Lewa strona jest liczbą parzystą (bo \(p\ge1\)), a prawa nieparzystą – sprzeczność. Zatem \(\log_25\) jest niewymierna. \(\blacksquare\)</p>
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
<li><b>Promil:</b> \(1\)‰ liczby to \(\dfrac1{1000}\) tej liczby (\(1\%=10\)‰).</li>
<li><b>Procent składany:</b> \(K_n=K_0\left(1+\tfrac p{100}\right)^n\), gdzie \(K_0\) – kapitał początkowy, \(p\%\) – stopa procentowa w jednym okresie kapitalizacji, \(n\) – liczba okresów (więcej w dziale „Ciągi”).</li>
<li><b>Stężenie procentowe:</b> \(c=\dfrac{m_s}{m_r}\cdot100\%\) (masa substancji do masy roztworu). Przy mieszaniu roztworów dodajemy masy substancji i masy roztworów.</li>
</ul>
<div class="bx ex"><span class="t">Przykład</span>
<p>Cenę podniesiono o \(20\%\), a potem obniżono o \(20\%\). Cena końcowa: \(1{,}2\cdot0{,}8=0{,}96\) ceny pierwotnej, czyli spadek o \(4\%\).</p>
</div>

<div class="bx ex"><span class="t">Przykład – promil i procent składany</span>
<p>Prowizja \(7{,}5\)‰ od kwoty \(4000\) zł wynosi \(4000\cdot0{,}0075=30\) zł.</p>
<p>Lokata \(5000\) zł na \(3\) lata, \(4\%\) rocznie, kapitalizacja roczna: \(5000\cdot1{,}04^3=5000\cdot1{,}124864=5624{,}32\) zł.</p>
</div>

<h3>Potęgi i pierwiastki</h3>
<div class="bx def"><span class="t">Definicje</span>
<ul>
<li>\(a^n=\underbrace{a\cdot a\cdots a}_{n}\), \(a^0=1\) (\(a\ne0\)), \(a^{-n}=\dfrac1{a^n}\) (\(a\ne0\)).</li>
<li><b>Pierwiastek stopnia \(n\)</b> z liczby \(a\): \(\sqrt[n]{a}=b\iff b^n=a\) i (\(b\ge0\), gdy \(n\) parzyste). Dla \(n\) parzystego wymagane \(a\ge0\); dla nieparzystego \(a\in\mathbb R\) (np. \(\sqrt[3]{-8}=-2\)).</li>
<li>Wykładnik wymierny (\(a>0\), \(m\in\mathbb Z\), \(n\in\mathbb N\), \(n\ge2\)): \(a^{m/n}=\sqrt[n]{a^m}=\left(\sqrt[n]{a}\right)^m\). W szczególności \(a^{1/n}=\sqrt[n]{a}\) (dla \(a\ge0\)).</li>
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
<p>Prawa potęg zachodzą dla \(a,b>0\) i dowolnych wykładników rzeczywistych (dla wykładników całkowitych wystarczy \(a,b\ne0\)); wzory z pierwiastkami – dla \(a,b\ge0\), natomiast \(\sqrt{a^2}=|a|\) – dla każdego \(a\in\mathbb R\).</p>
<div class="bx pf" data-pf="zp4a"><span class="t">Dowód podstawowych własności potęg</span>
<p><b>Wykładniki naturalne.</b> \(a^m\cdot a^n\) to iloczyn \(m\) czynników \(a\) pomnożony przez iloczyn \(n\) czynników \(a\), czyli iloczyn \(m+n\) czynników: \(a^{m+n}\). Wyrażenie \((a^m)^n\) to iloczyn \(n\) bloków po \(m\) czynników \(a\), czyli \(a^{mn}\). Z przemienności mnożenia \((ab)^n=ab\cdot ab\cdots ab=a^nb^n\).</p>
<p><b>Wykładniki całkowite.</b> Definicje \(a^0=1\) i \(a^{-n}=\tfrac1{a^n}\) są tak dobrane, by prawa nadal działały: \(a^n\cdot a^{-n}=\tfrac{a^n}{a^n}=1=a^{n+(-n)}\). Dla \(m>n\) iloraz \(\tfrac{a^m}{a^n}\) po skróceniu \(n\) czynników daje \(a^{m-n}\), a dla \(m&lt;n\): \(\tfrac{a^m}{a^n}=\tfrac1{a^{n-m}}=a^{m-n}\).</p>
<p><b>Wykładniki wymierne</b> (\(a>0\)). Definiujemy \(a^{1/n}=\sqrt[n]a\) i \(a^{p/q}=\bigl(a^{1/q}\bigr)^p\). Dwa wykładniki wymierne sprowadzamy do wspólnego mianownika \(d\); dla \(x=a^{1/d}\) mamy \(a^{k/d}\cdot a^{l/d}=x^k\cdot x^l=x^{k+l}=a^{(k+l)/d}\). Dla potęgi potęgi: \(L=\bigl(a^{p/q}\bigr)^{r/s}\) i \(R=a^{pr/(qs)}\) spełniają \(L^{qs}=a^{pr}=R^{qs}\), a dwie liczby dodatnie o równych potęgach \(qs\) są równe, więc \(L=R\). Podobnie dla \((ab)^{p/q}\) i \(\bigl(\tfrac ab\bigr)^{p/q}\). \(\blacksquare\)</p>
</div>
<p><b>Usuwanie niewymierności z mianownika:</b> \(\dfrac1{\sqrt a}=\dfrac{\sqrt a}a\), \(\dfrac1{\sqrt a+\sqrt b}=\dfrac{\sqrt a-\sqrt b}{a-b}\) (mnożymy przez sprzężenie).</p>
<p><b>Porównywanie potęg:</b> dla \(a>1\) funkcja \(a^x\) rośnie, dla \(0&lt;a&lt;1\) maleje; dla tego samego wykładnika dodatniego większa podstawa daje większą potęgę. Aby porównać \(2^{50}\) i \(3^{30}\), sprowadzamy do wspólnego wykładnika: \(2^{50}=(2^5)^{10}=32^{10}\), \(3^{30}=(3^3)^{10}=27^{10}\), więc \(2^{50}>3^{30}\).</p>
<p><b>Notacja wykładnicza:</b> liczbę \(x>0\) zapisujemy w postaci \(a\cdot10^k\), gdzie \(1\le a&lt;10\) i \(k\in\mathbb Z\). Np. \(23\,456=2{,}3456\cdot10^4\), \(0{,}00071=7{,}1\cdot10^{-4}\).</p>

<div class="bx ex"><span class="t">Przykład – potęgi i pierwiastki</span>
<p>\(8^{2/3}=\left(\sqrt[3]{8}\right)^2=2^2=4\). \(\ \dfrac{2^5\cdot4^{-1}}{8^{1/3}}=\dfrac{32\cdot\frac14}{2}=4\). \(\ \sqrt[3]{-27}+\sqrt{16}=-3+4=1\).</p>
<p>Usuwanie niewymierności: \(\dfrac1{\sqrt5-\sqrt2}=\dfrac{\sqrt5+\sqrt2}{(\sqrt5-\sqrt2)(\sqrt5+\sqrt2)}=\dfrac{\sqrt5+\sqrt2}3\).</p>
</div>

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

<div class="bx ex"><span class="t">Przykład – wartość bezwzględna jako odległość</span>
<p>\(|x-1|&lt;3\) oznacza, że \(x\) leży od \(1\) bliżej niż \(3\), czyli \(x\in(-2,4)\). Z kolei \(|x+2|=5\) daje \(x+2=5\) lub \(x+2=-5\), czyli \(x=3\) lub \(x=-7\).</p>
<div class="fg"><svg class="fig" viewBox="0 0 300 104" width="300" height="104" role="img" aria-label="Rozwiazanie nierownosci |x-1|&lt;3 na osi liczbowej: przedzial (-2,4)"><line class="ax" x1="20" y1="62" x2="287" y2="62"/><polygon class="ah" points="292,62 285,64.9 285,59.1"/><line class="tha" x1="60" y1="62" x2="240" y2="62"/><circle class="holea" cx="60" cy="62" r="3.4"/><circle class="holea" cx="240" cy="62" r="3.4"/><circle class="dot" cx="150" cy="62" r="3.2"/><line class="ax" x1="60" y1="58" x2="60" y2="66"/><text class="m" x="60" y="82" text-anchor="middle">−2</text><line class="ax" x1="150" y1="58" x2="150" y2="66"/><text class="m" x="150" y="82" text-anchor="middle">1</text><line class="ax" x1="240" y1="58" x2="240" y2="66"/><text class="m" x="240" y="82" text-anchor="middle">4</text><line class="s w" x1="150" y1="34" x2="60" y2="34"/><line class="s w" x1="60" y1="30" x2="60" y2="38"/><line class="s w" x1="150" y1="34" x2="240" y2="34"/><line class="s w" x1="240" y1="30" x2="240" y2="38"/><line class="s w" x1="150" y1="30" x2="150" y2="38"/><text class="m" x="105" y="27" text-anchor="middle">3</text><text class="m" x="195" y="27" text-anchor="middle">3</text><text x="150" y="98" text-anchor="middle">|x − 1| &lt; 3</text></svg></div>
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
<div class="bx pf" data-pf="zp4b"><span class="t">Dowód własności logarytmów</span>
<p>Niech \(u=a^x\) i \(v=a^y\), czyli \(x=\log_au\), \(y=\log_av\) (\(u,v>0\)).</p>
<ul>
<li><b>Iloczyn:</b> \(uv=a^x\cdot a^y=a^{x+y}\), więc \(\log_a(uv)=x+y=\log_au+\log_av\).</li>
<li><b>Iloraz:</b> \(\dfrac uv=a^{x-y}\), więc \(\log_a\dfrac uv=\log_au-\log_av\).</li>
<li><b>Potęga:</b> \(u^r=(a^x)^r=a^{rx}\), więc \(\log_au^r=r\log_au\).</li>
<li><b>Zmiana podstawy:</b> niech \(t=\log_ab\), czyli \(a^t=b\). Logarytmując przy podstawie \(c\), dostajemy \(t\log_ca=\log_cb\), więc \(t=\dfrac{\log_cb}{\log_ca}\). \(\blacksquare\)</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(\log_2 12-\log_2 3=\log_24=2\); \(\;\log_95=\dfrac{\log_35}{\log_39}=\tfrac12\log_35\); \(\;81^{\log_3x}=3^{4\log_3x}=x^4\).</p>
</div>
<div class="bx warn"><span class="t">Uwaga</span>
<p>\(\log_a(x+y)\) <b>nie</b> rozkłada się na sumę logarytmów. Wyrażenia pod logarytmem muszą być dodatnie – po przekształceniach trzeba pamiętać o dziedzinie.</p>
</div>
`;
