(window.THEORY = window.THEORY || {})['matura-7'] = String.raw`
<div class="bx def"><span class="t">Oznaczenia w tym dziale</span>
<p>Punkty zapisujemy współrzędnymi: \(A=(x_A,y_A)\), \(B=(x_B,y_B)\). Wektory: \(\vec v=[v_X,v_Y]\), \(\vec u=[u_X,u_Y]\); wektor o początku \(A\) i końcu \(B\) to \(\overrightarrow{AB}\). Oś pozioma to \(Ox\), pionowa – \(Oy\).</p>
</div>

<h3>Wektory</h3>
<div class="bx def"><span class="t">Współrzędne, równość i długość wektora</span>
<div class="wf"><div>
<ul>
<li><b>Współrzędne wektora</b> o początku \(A\) i końcu \(B\): \(\overrightarrow{AB}=[x_B-x_A,\ y_B-y_A]\) (od współrzędnych końca odejmujemy współrzędne początku).</li>
<li><b>Równość wektorów:</b> \(\vec v=\vec u\iff v_X=u_X\) i \(v_Y=u_Y\). Zatem \(\overrightarrow{AB}=\overrightarrow{DC}\iff ABCD\) jest równoległobokiem (punkty w tej kolejności).</li>
<li><b>Długość wektora</b> \(\vec v=[v_X,v_Y]\): \(|\vec v|=\sqrt{v_X^2+v_Y^2}\) (twierdzenie Pitagorasa). Wektor zerowy to \([0,0]\), wektor przeciwny do \(\vec v\) to \(-\vec v=[-v_X,-v_Y]\).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 200" width="300" height="200" role="img" aria-label="Wektor AB o początku A i końcu B oraz jego współrzędne"><line class="s" x1="18" y1="172" x2="280" y2="172"/><path class="s" d="M274,169L280,172L274,175"/><line class="s" x1="34" y1="184" x2="34" y2="16"/><path class="s" d="M31,22L34,16L37,22"/><text x="286" y="185">x</text><text x="40" y="11">y</text><line class="s d" x1="84" y1="128" x2="214" y2="128"/><line class="s d" x1="214" y1="128" x2="214" y2="56"/><line class="s" x1="84" y1="169" x2="84" y2="175"/><line class="s" x1="214" y1="169" x2="214" y2="175"/><line class="s" x1="31" y1="128" x2="37" y2="128"/><line class="s" x1="31" y1="56" x2="37" y2="56"/><line class="s d" x1="84" y1="128" x2="84" y2="172"/><line class="s d" x1="214" y1="56" x2="214" y2="172"/><line class="s d" x1="34" y1="128" x2="84" y2="128"/><line class="s d" x1="34" y1="56" x2="214" y2="56"/><line class="a" x1="84" y1="128" x2="214" y2="56"/><path class="a" d="M206.2,56.3L214,56L209.6,62.5"/><circle class="dot" cx="84" cy="128" r="2.4"/><circle class="dot" cx="214" cy="56" r="2.4"/><text x="78" y="141" text-anchor="end">A</text><text x="220" y="51">B</text><text x="84" y="187" text-anchor="middle">x<tspan dy="3" font-size="9.5" font-style="normal">A</tspan></text><text x="214" y="187" text-anchor="middle">x<tspan dy="3" font-size="9.5" font-style="normal">B</tspan></text><text x="22" y="133.5" text-anchor="end">y<tspan dy="3" font-size="9.5" font-style="normal">A</tspan></text><text x="22" y="61.5" text-anchor="end">y<tspan dy="3" font-size="9.5" font-style="normal">B</tspan></text><text x="149" y="142" text-anchor="middle">x<tspan dy="3" font-size="9.5" font-style="normal">B</tspan><tspan dy="-3"> − x</tspan><tspan dy="3" font-size="9.5" font-style="normal">A</tspan></text><text x="225" y="96.5">y<tspan dy="3" font-size="9.5" font-style="normal">B</tspan><tspan dy="-3"> − y</tspan><tspan dy="3" font-size="9.5" font-style="normal">A</tspan></text><text x="137" y="83" text-anchor="end">AB</text><text x="129.6" y="72" text-anchor="middle" class="m">→</text><text x="28" y="185" text-anchor="end">O</text></svg></div></div>
</div>
<div class="bx def"><span class="t">Mnożenie wektora przez liczbę</span>
<div class="wf"><div>
<ul>
<li><b>Analitycznie:</b> \(k\cdot\vec v=[k\cdot v_X,\ k\cdot v_Y]\).</li>
<li><b>Geometrycznie:</b> iloczynem niezerowego wektora \(\vec v\) przez liczbę \(k\ne0\) jest wektor \(\vec w\), dla którego \(|\vec w|=|k|\cdot|\vec v|\); gdy \(k>0\), zwrot \(\vec w\) jest zgodny ze zwrotem \(\vec v\), a gdy \(k&lt;0\) – przeciwny.</li>
<li>Wektory \(\vec v\) i \(k\vec v\) są <b>równoległe</b>.</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 100" width="300" height="100" role="img" aria-label="Wektory v, 2v oraz −v: ten sam kierunek, długość mnożona przez |k|, zwrot zależny od znaku k"><line class="a" x1="110" y1="26" x2="170" y2="26"/><path class="a" d="M163,22.5L170,26L163,29.5"/><text x="140" y="19" text-anchor="middle">v</text><text x="140" y="8" text-anchor="middle" class="m">→</text><line class="p" x1="30" y1="58" x2="150" y2="58"/><path class="p" d="M143,54.5L150,58L143,61.5"/><text x="90" y="51" text-anchor="middle">2v</text><text x="90" y="40" text-anchor="middle" class="m">→</text><line class="s" x1="200" y1="86" x2="140" y2="86"/><path class="s" d="M147,89.5L140,86L147,82.5"/><text x="170" y="79" text-anchor="middle">−v</text><text x="170" y="68" text-anchor="middle" class="m">→</text></svg></div></div>
</div>
<div class="bx def"><span class="t">Dodawanie i odejmowanie wektorów</span>
<div class="wf"><div>
<ul>
<li><b>Analitycznie:</b> \(\vec v+\vec u=[v_X+u_X,\ v_Y+u_Y]\); odejmowanie: \(\vec v-\vec u=\vec v+(-\vec u)\).</li>
<li><b>Geometrycznie (reguła trójkąta):</b> odkładamy \(\vec u\) tak, by jego początek był końcem \(\vec v\). Suma biegnie od początku \(\vec v\) do końca \(\vec u\). W szczególności \(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 140" width="300" height="140" role="img" aria-label="Suma wektorów v i u: koniec pierwszego jest początkiem drugiego, suma biegnie od początku pierwszego do końca drugiego"><line class="a" x1="24" y1="112" x2="174" y2="90"/><path class="a" d="M166.6,87.6L174,90L167.6,94.5"/><line class="p" x1="174" y1="90" x2="266" y2="30"/><path class="p" d="M258.2,30.9L266,30L262,36.8"/><line class="s" x1="24" y1="112" x2="266" y2="30"/><path class="s" d="M258.2,28.9L266,30L260.5,35.6"/><text x="99" y="115" text-anchor="middle">v</text><text x="99" y="104" text-anchor="middle" class="m">→</text><text x="233" y="66.5">u</text><text x="236.7" y="55.5" text-anchor="middle" class="m">→</text><text x="134" y="63" text-anchor="end">w</text><text x="130.3" y="52" text-anchor="middle" class="m">→</text><circle class="dot" cx="24" cy="112" r="2.4"/><circle class="dot" cx="174" cy="90" r="2.4"/><circle class="dot" cx="266" cy="30" r="2.4"/></svg></div></div>
</div>
<div class="bx thm"><span class="t">Równoległość, prostopadłość i kąt między wektorami</span>
<ul>
<li><b>Równoległość:</b> \(\vec u\parallel\vec v\iff u_Xv_Y-u_Yv_X=0\) (czyli \(\vec v=k\vec u\) dla pewnego \(k\)).</li>
<li><b>Iloczyn skalarny</b> (dodatkowe, ale wygodne narzędzie): \(\vec u\cdot\vec v=u_Xv_X+u_Yv_Y=|\vec u||\vec v|\cos\varphi\). Stąd \(\cos\varphi=\dfrac{\vec u\cdot\vec v}{|\vec u||\vec v|}\) oraz \(\vec u\perp\vec v\iff\vec u\cdot\vec v=0\).</li>
<li><b>Przesunięcie o wektor</b> \(\vec v\): \(P\mapsto P+\vec v\). Warunek typu \(\overrightarrow{AM}=k\,\overrightarrow{BM}\) zapisujemy współrzędnymi i dostajemy równania na \(M\); np. \(\overrightarrow{AM}=-2\overrightarrow{BM}\Rightarrow M-A=-2(M-B)\Rightarrow M=\tfrac13(A+2B)\).</li>
</ul>
</div>

<h3>Odcinek i trójkąt: długość, środek, pole</h3>
<div class="bx thm"><span class="t">Długość i środek odcinka, podział w stosunku</span>
\[|AB|=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2},\qquad S=\left(\frac{x_A+x_B}2,\ \frac{y_A+y_B}2\right).\]
<div class="wf"><div>
<ul>
<li>Wzór na długość to twierdzenie Pitagorasa w trójkącie prostokątnym o przyprostokątnych \(|x_B-x_A|\) i \(|y_B-y_A|\). Współrzędne środka są średnimi arytmetycznymi współrzędnych końców.</li>
<li><b>Podział odcinka w stosunku:</b> punkt \(P\) leżący na odcinku \(AB\) i spełniający \(|AP|:|PB|=m:n\) ma współrzędne \(P=\dfrac{nA+mB}{m+n}\), czyli \(\overrightarrow{AP}=\tfrac m{m+n}\overrightarrow{AB}\).</li>
<li><b>Środek ciężkości trójkąta</b> \(ABC\): \(G=\tfrac13(A+B+C)\).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 200" width="300" height="200" role="img" aria-label="Odcinek AB, jego długość z twierdzenia Pitagorasa i środek S"><line class="s" x1="18" y1="172" x2="280" y2="172"/><path class="s" d="M274,169L280,172L274,175"/><line class="s" x1="34" y1="184" x2="34" y2="16"/><path class="s" d="M31,22L34,16L37,22"/><text x="286" y="185">x</text><text x="40" y="11">y</text><line class="s d" x1="76" y1="136" x2="226" y2="136"/><line class="s d" x1="226" y1="136" x2="226" y2="50"/><path class="s" d="M219,136L219,129L226,129"/><line class="a" x1="76" y1="136" x2="226" y2="50"/><circle class="dot" cx="76" cy="136" r="2.4"/><circle class="dot" cx="226" cy="50" r="2.4"/><circle class="dot" cx="151" cy="93" r="2.4"/><text x="70" y="149" text-anchor="end">A</text><text x="232" y="45">B</text><text x="157" y="106">S</text><text x="151" y="150" text-anchor="middle">|x<tspan dy="3" font-size="9.5" font-style="normal">B</tspan><tspan dy="-3"> − x</tspan><tspan dy="3" font-size="9.5" font-style="normal">A</tspan><tspan dy="-3">|</tspan></text><text x="237" y="97.5">|y<tspan dy="3" font-size="9.5" font-style="normal">B</tspan><tspan dy="-3"> − y</tspan><tspan dy="3" font-size="9.5" font-style="normal">A</tspan><tspan dy="-3">|</tspan></text><text x="141" y="82" text-anchor="end">|AB|</text><text x="28" y="185" text-anchor="end">O</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Pole trójkąta</span>
<p>Dla trójkąta o wierzchołkach \(A,B,C\) i wektorach \(\vec v=\overrightarrow{AB}\), \(\vec u=\overrightarrow{AC}\):
\[P=\tfrac12\left|v_Xu_Y-v_Yu_X\right|=\tfrac12\left|(x_B-x_A)(y_C-y_A)-(y_B-y_A)(x_C-x_A)\right|.\]</p>
<div class="wf"><div>
<p class="note">Skąd to wynika: liczba \(|v_Xu_Y-v_Yu_X|\) to pole równoległoboku rozpiętego na wektorach \(\vec v\) i \(\vec u\), a trójkąt jest jego połową. Wzór pozwala liczyć pola wielokątów, dzieląc je na trójkąty.</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 170" width="300" height="170" role="img" aria-label="Trójkąt ABC rozpięty na wektorach v i u wychodzących z jednego wierzchołka; pole to połowa pola równoległoboku"><polygon class="f" points="30,146 180,120 114,46"/><line class="s d" x1="180" y1="120" x2="264" y2="20"/><line class="s d" x1="114" y1="46" x2="264" y2="20"/><polygon class="s" points="30,146 180,120 114,46"/><line class="a" x1="30" y1="146" x2="180" y2="120"/><path class="a" d="M172.5,117.7L180,120L173.7,124.6"/><line class="p" x1="30" y1="146" x2="114" y2="46"/><path class="p" d="M106.8,49.1L114,46L112.2,53.6"/><circle class="dot" cx="30" cy="146" r="2.4"/><text x="105" y="147" text-anchor="middle">v</text><text x="105" y="136" text-anchor="middle" class="m">→</text><text x="61" y="100.5" text-anchor="end">u</text><text x="57.3" y="89.5" text-anchor="middle" class="m">→</text><text x="24" y="159" text-anchor="end">A</text><text x="186" y="133">B</text><text x="108" y="41" text-anchor="end">C</text></svg></div></div>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Dla \(A=(1,-1)\), \(B=(4,3)\): \(|AB|=\sqrt{9+16}=5\); środek \(S=\left(\tfrac52,1\right)\). Punkt \(P\) taki, że \(|AP|:|PB|=2:3\): \(P=\dfrac{3A+2B}5=\left(\tfrac{11}5,\tfrac35\right)\).</p>
</div>

<h3>Prosta: równanie, położenie, odległość</h3>
<div class="bx def"><span class="t">Postacie równania prostej</span>
<div class="wf"><div>
<ul>
<li><b>Ogólna:</b> \(Ax+By+C=0\), gdzie \((A,B)\ne(0,0)\). Opisuje <i>każdą</i> prostą, także pionową: np. \(x+5=0\), czyli \(x=-5\), to prosta równoległa do osi \(Oy\), przecinająca oś \(Ox\) w punkcie \((-5,0)\).</li>
<li><b>Kierunkowa:</b> \(y=ax+b\); \(a\) to współczynnik kierunkowy, a \((0,b)\) – punkt przecięcia z osią \(Oy\). Jeśli prosta jest nachylona do osi \(Ox\) pod kątem \(\alpha\), to \(a=\operatorname{tg}\alpha\). Prosta pionowa nie ma postaci kierunkowej.</li>
<li><b>Przez punkt \((x_0,y_0)\) ze współczynnikiem \(a\):</b> \(y-y_0=a(x-x_0)\).</li>
<li><b>Przez dwa punkty</b> \(A,B\) (gdy \(x_B\ne x_A\)): \(y-y_A=a(x-x_A)\), gdzie \(a=\dfrac{y_B-y_A}{x_B-x_A}\).</li>
<li><b>Odcinkowa:</b> \(\dfrac xp+\dfrac yq=1\) (prosta przecina osie w punktach \((p,0)\) i \((0,q)\)).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 190" width="300" height="190" role="img" aria-label="Prosta y = ax + b nachylona do osi Ox pod kątem α; tg α = a"><line class="s" x1="24" y1="152" x2="270" y2="152"/><path class="s" d="M264,149L270,152L264,155"/><line class="s" x1="64" y1="170" x2="64" y2="20"/><path class="s" d="M61,26L64,20L67,26"/><text x="276" y="165">x</text><text x="70" y="15">y</text><line class="a" x1="60.8" y1="171.7" x2="234.1" y2="36.3"/><line class="s" x1="86" y1="152" x2="170" y2="152"/><line class="s d" x1="170" y1="152" x2="170" y2="86.4"/><path class="s" d="M163,152L163,145L170,145"/><path class="p" d="M112,152A26,26 0 0 0 106.5,136"/><text x="123.8" y="143.5" text-anchor="middle">α</text><circle class="dot" cx="86" cy="152" r="2.4"/><circle class="dot" cx="170" cy="86.4" r="2.4"/><text x="128" y="166" text-anchor="middle" class="m">1</text><text x="181" y="123.7">a</text><text x="240.1" y="31.3">y = ax + b</text><text x="58" y="165" text-anchor="end">O</text></svg></div></div>
<p class="note">Od postaci ogólnej do kierunkowej (gdy \(B\ne0\)): np. z \(3x+5y-10=0\) przenosimy \(3x\) i \(-10\) na drugą stronę, zmieniając znaki: \(5y=-3x+10\), a po podzieleniu przez \(5\): \(y=-\tfrac35x+2\).</p>
</div>
<div class="bx thm"><span class="t">Proste równoległe i prostopadłe</span>
<div class="wf"><div>
<ul>
<li><b>Postać kierunkowa</b> (\(y=ax+b\) i \(y=cx+d\)): proste są równoległe \(\iff a=c\); prostopadłe \(\iff a\cdot c=-1\), czyli \(c=-\dfrac1a\).</li>
<li><b>Postać ogólna</b> (\(A_1x+B_1y+C_1=0\) i \(A_2x+B_2y+C_2=0\)): równoległe \(\iff A_1B_2-A_2B_1=0\); prostopadłe \(\iff A_1A_2+B_1B_2=0\).</li>
<li>W szczególności dla dowolnej liczby \(D\) prosta \(Ax+By+D=0\) jest <b>równoległa</b> do prostej \(Ax+By+C=0\) (zmienia się tylko wyraz wolny), a prosta \(Bx-Ay+D=0\) (także \(-Bx+Ay+D=0\)) jest do niej <b>prostopadła</b>.</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 340 170" width="340" height="170" role="img" aria-label="Proste równoległe mają równe współczynniki kierunkowe; proste prostopadłe mają iloczyn współczynników równy −1"><line class="a" x1="18" y1="150" x2="120.4" y2="70"/><line class="a" x1="60" y1="150" x2="162.4" y2="70"/><text x="114.4" y="65" text-anchor="end">y = ax + b</text><text x="168.4" y="65">y = ax + d</text><line class="a" x1="177.7" y1="127" x2="294.3" y2="65"/><line class="p" x1="266" y1="152.5" x2="206" y2="39.5"/><path class="s" d="M243.9,91.8L239.7,83.8L231.8,88.1"/><text x="294.3" y="58" text-anchor="middle">y = ax + b</text><text x="212" y="34.5">y = cx + d</text></svg></div></div>
<p class="note">Skąd \(a\cdot c=-1\): prosta o współczynniku \(a\) ma wektor kierunkowy \([1,a]\). Obrót tego wektora o \(90^\circ\) daje \([-a,1]\), a prosta o takim wektorze ma współczynnik kierunkowy \(\dfrac1{-a}=-\dfrac1a\).</p>
</div>
<div class="bx thm"><span class="t">Wektor prostopadły do prostej</span>
<div class="wf"><div>
<p>Dla dowolnej liczby \(C\) prosta \(Ax+By+C=0\) jest prostopadła do wektora \(\vec w=[A,B]\) (wektor normalny). Wektor \([-B,A]\) jest do niej równoległy (wektor kierunkowy).</p>
<p class="note">Skąd to wynika: dla dwóch punktów \(P_1,P_2\) tej prostej mamy \(Ax_1+By_1+C=0\) i \(Ax_2+By_2+C=0\). Po odjęciu: \(A(x_2-x_1)+B(y_2-y_1)=0\), czyli iloczyn skalarny \([A,B]\cdot\overrightarrow{P_1P_2}\) jest równy zero.</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 200" width="300" height="200" role="img" aria-label="Prosta Ax + By + C = 0 jest prostopadła do wektora [A, B]"><line class="s" x1="46" y1="170" x2="284" y2="170"/><path class="s" d="M278,167L284,170L278,173"/><line class="s" x1="60" y1="180" x2="60" y2="16"/><path class="s" d="M57,22L60,16L63,22"/><text x="290" y="183">x</text><text x="66" y="11">y</text><line class="a" x1="54.6" y1="15.2" x2="141" y2="188"/><line class="p" x1="96" y1="98" x2="136" y2="78"/><path class="p" d="M128.2,78L136,78L131.3,84.3"/><line class="s" x1="96" y1="98" x2="76" y2="58"/><path class="s" d="M76,65.8L76,58L82.3,62.7"/><path class="s" d="M103.2,94.4L99.6,87.3L92.4,90.8"/><circle class="dot" cx="96" cy="98" r="2.4"/><text x="146" y="82.5">[A, B]</text><text x="87" y="58.5">[−B, A]</text><text x="151" y="190.5">Ax + By + C = 0</text><text x="54" y="183" text-anchor="end">O</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Odległość punktu od prostej</span>
<div class="wf"><div>
<p>Odległość punktu \(P=(x_P,y_P)\) od prostej \(Ax+By+C=0\):
\[d=\frac{|Ax_P+By_P+C|}{\sqrt{A^2+B^2}}.\]</p>
<p>Odległość prostych równoległych \(Ax+By+C_1=0\) i \(Ax+By+C_2=0\) wynosi \(\dfrac{|C_1-C_2|}{\sqrt{A^2+B^2}}\) (wystarczy wziąć punkt jednej prostej i policzyć jego odległość od drugiej).</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 170" width="300" height="170" role="img" aria-label="Odległość punktu P od prostej l to długość odcinka PH prostopadłego do l"><line class="a" x1="22" y1="128" x2="278" y2="60"/><line class="p" x1="150" y1="24" x2="167.4" y2="89.4"/><path class="p" d="M165.3,81.7L173,79.6L175.1,87.3"/><circle class="dot" cx="150" cy="24" r="2.4"/><circle class="dot" cx="167.4" cy="89.4" r="2.4"/><text x="156" y="19">P</text><text x="173.4" y="102.4">H</text><text x="169.7" y="61.2">d</text><text x="16" y="123" text-anchor="end">l</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Kąt między prostymi, symetralna, rzut punktu</span>
<ul>
<li><b>Kąt ostry \(\varphi\) między prostymi</b> \(y=a_1x+b_1\) i \(y=a_2x+b_2\): \(\operatorname{tg}\varphi=\left|\dfrac{a_1-a_2}{1+a_1a_2}\right|\), gdy \(a_1a_2\ne-1\) (gdy \(a_1a_2=-1\), proste są prostopadłe).</li>
<li><b>Symetralna odcinka \(AB\)</b> to zbiór punktów równo oddalonych od \(A\) i \(B\): prosta prostopadła do \(AB\), przechodząca przez środek odcinka. Jej równanie dostajemy też z warunku \(|PA|=|PB|\).</li>
<li><b>Rzut punktu na prostą</b> to punkt przecięcia tej prostej z prostą do niej prostopadłą, przechodzącą przez dany punkt. Punkt symetryczny względem prostej: \(P'=2\cdot\text{rzut}-P\).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Odległość punktu \((2,1)\) od prostej \(3x-4y+5=0\): \(d=\dfrac{|6-4+5|}{5}=\dfrac75\).</p>
</div>

<h3>Okrąg: równanie, położenie względem prostej i innego okręgu</h3>
<div class="bx def"><span class="t">Równanie okręgu</span>
<div class="wf"><div>
<ul>
<li><b>Kanoniczne:</b> okrąg o środku \(S=(a,b)\) i promieniu \(r>0\) ma równanie \((x-a)^2+(y-b)^2=r^2\). Wynika to z wzoru na odległość: punkt \((x,y)\) leży na okręgu, gdy jego odległość od \(S\) jest równa \(r\).</li>
<li><b>Ogólne:</b> \(x^2+y^2+Ax+By+C=0\); środek \(S=\left(-\tfrac A2,-\tfrac B2\right)\), \(r^2=\tfrac{A^2+B^2}4-C\) (okrąg istnieje, gdy \(r^2>0\)). Do postaci kanonicznej przechodzimy przez uzupełnianie do kwadratu.</li>
<li>Punkt \(P\) leży <b>wewnątrz</b> okręgu, gdy \(|SP|&lt;r\); <b>na</b> okręgu, gdy \(|SP|=r\); <b>na zewnątrz</b>, gdy \(|SP|>r\).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 200" width="300" height="200" role="img" aria-label="Okrąg o środku S = (a, b) i promieniu r: punkt (x, y) leży na okręgu, gdy (x−a)² + (y−b)² = r²"><line class="s" x1="18" y1="176" x2="276" y2="176"/><path class="s" d="M270,173L276,176L270,179"/><line class="s" x1="30" y1="188" x2="30" y2="16"/><path class="s" d="M27,22L30,16L33,22"/><text x="282" y="189">x</text><text x="36" y="11">y</text><circle class="a" cx="140" cy="96" r="64"/><line class="p" x1="140" y1="96" x2="190.4" y2="56.6"/><line class="s d" x1="140" y1="96" x2="190.4" y2="96"/><line class="s d" x1="190.4" y1="96" x2="190.4" y2="56.6"/><path class="s" d="M183.4,96L183.4,89L190.4,89"/><circle class="dot" cx="140" cy="96" r="2.4"/><circle class="dot" cx="190.4" cy="56.6" r="2.4"/><text x="134" y="109" text-anchor="end">S</text><text x="196.4" y="51.6">(x, y)</text><text x="157.2" y="69.3" text-anchor="end">r</text><text x="165.2" y="110" text-anchor="middle">x − a</text><text x="201.4" y="80.8">y − b</text><text x="24" y="189" text-anchor="end">O</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Prosta i okrąg</span>
<ul>
<li>Niech \(d\) będzie odległością środka okręgu od prostej. Gdy \(d&lt;r\) – prosta jest <b>sieczna</b> (dwa punkty wspólne); gdy \(d=r\) – <b>styczna</b> (jeden punkt); gdy \(d>r\) – prosta i okrąg są rozłączne. Równoważnie: po podstawieniu równania prostej do równania okręgu dostajemy równanie kwadratowe z \(\Delta>0\), \(\Delta=0\) lub \(\Delta&lt;0\).</li>
<li><b>Styczna do okręgu w punkcie \(P_0=(x_0,y_0)\)</b> leżącym na okręgu: \((x_0-a)(x-a)+(y_0-b)(y-b)=r^2\) (jest prostopadła do promienia \(SP_0\)).</li>
<li><b>Styczne z punktu \(P\) leżącego na zewnątrz:</b> szukamy prostej przez \(P\), której odległość od \(S\) jest równa \(r\) (albo rozwiązujemy układ: punkt styczności leży na okręgu i \(SP_0\perp P_0P\)). Długość odcinka stycznej: \(\sqrt{|SP|^2-r^2}\).</li>
</ul>
<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 330 124" width="330" height="124" role="img" aria-label="Prosta i okrąg: sieczna (d &lt; r), styczna (d = r), prosta rozłączna z okręgiem (d > r)"><circle class="a" cx="52" cy="52" r="34"/><line class="s" x1="6" y1="68" x2="98" y2="68"/><line class="p d" x1="52" y1="52" x2="52" y2="68"/><circle class="dot" cx="52" cy="52" r="2.4"/><text x="62" y="66.5">d</text><circle class="a" cx="164" cy="52" r="34"/><line class="s" x1="118" y1="86" x2="210" y2="86"/><line class="p d" x1="164" y1="52" x2="164" y2="86"/><circle class="dot" cx="164" cy="52" r="2.4"/><text x="174" y="75.5">d</text><circle class="a" cx="276" cy="52" r="34"/><line class="s" x1="230" y1="100" x2="322" y2="100"/><line class="p d" x1="276" y1="52" x2="276" y2="100"/><circle class="dot" cx="276" cy="52" r="2.4"/><text x="286" y="82.5">d</text><text x="52" y="122.5" text-anchor="middle" class="m">d &lt; r</text><text x="164" y="122.5" text-anchor="middle" class="m">d = r</text><text x="276" y="122.5" text-anchor="middle" class="m">d > r</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Dwa okręgi</span>
<p>Dla okręgów o promieniach \(r_1,r_2\) i odległości środków \(d\): styczne zewnętrznie, gdy \(d=r_1+r_2\); styczne wewnętrznie, gdy \(d=|r_1-r_2|\); przecinają się w dwóch punktach, gdy \(|r_1-r_2|&lt;d&lt;r_1+r_2\). Prostą przechodzącą przez punkty wspólne dwóch przecinających się okręgów (oś potęgowa) dostajemy, <b>odejmując stronami</b> ich równania.</p>
<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 340 100" width="340" height="100" role="img" aria-label="Położenie dwóch okręgów: styczne zewnętrznie, przecinające się, styczne wewnętrznie"><circle class="a" cx="32" cy="44" r="22"/><circle class="p" cx="80" cy="44" r="26"/><circle class="dot" cx="32" cy="44" r="2.4"/><circle class="dot" cx="80" cy="44" r="2.4"/><circle class="a" cx="158" cy="44" r="28"/><circle class="p" cx="198" cy="44" r="26"/><circle class="dot" cx="158" cy="44" r="2.4"/><circle class="dot" cx="198" cy="44" r="2.4"/><circle class="a" cx="278" cy="44" r="36"/><circle class="p" cx="296" cy="44" r="18"/><circle class="dot" cx="278" cy="44" r="2.4"/><circle class="dot" cx="296" cy="44" r="2.4"/><text x="56" y="96.5" text-anchor="middle" class="m">d = r₁ + r₂</text><text x="178" y="96.5" text-anchor="middle" class="m">|r₁ − r₂| &lt; d &lt; r₁ + r₂</text><text x="290" y="96.5" text-anchor="middle" class="m">d = |r₁ − r₂|</text></svg></div></div>
</div>
<p><b>Okrąg opisany na trójkącie:</b> środek znajdujemy w przecięciu symetralnych boków (układ \(|SA|=|SB|=|SC|\)). <b>Okrąg wpisany:</b> \(r=\dfrac Pp\), środek w przecięciu dwusiecznych. Okrąg styczny do obu osi układu w I ćwiartce ma równanie \((x-r)^2+(y-r)^2=r^2\).</p>

<h3>Przekształcenia geometryczne i pole figury w układzie współrzędnych</h3>
<div class="bx thm"><span class="t">Przekształcenia</span>
<ul>
<li><b>Przesunięcie o wektor</b> \([p,q]\): \((x,y)\mapsto(x+p,y+q)\); wykres funkcji \(y=f(x)\) przechodzi w \(y-q=f(x-p)\).</li>
<li><b>Symetria osiowa:</b> względem osi \(Ox\): \((x,y)\mapsto(x,-y)\); względem \(Oy\): \((-x,y)\); względem prostej \(y=x\): \((y,x)\); względem prostej \(y=c\): \((x,2c-y)\); względem \(x=c\): \((2c-x,y)\).</li>
<li><b>Symetria środkowa</b> względem punktu \(S\): \(P\mapsto2S-P\) (w tym punkcie przekątne równoległoboku dzielą się na połowy).</li>
<li><b>Jednokładność</b> o środku \(S\) i skali \(k\): \(P\mapsto S+k\cdot\overrightarrow{SP}\); długości zmieniają się \(|k|\) razy, pola \(k^2\) razy. Okrąg \((x-a)^2+(y-b)^2=r^2\) przechodzi w okrąg o promieniu \(|k|r\).</li>
</ul>
</div>
<div class="bx met"><span class="t">Typowe zadania</span>
<ul>
<li><b>Trójkąt równoramienny:</b> wierzchołek przy ramionach leży na symetralnej podstawy (warunek \(|CA|=|CB|\)). <b>Równoległobok</b> z trzech wierzchołków: \(D=A+C-B\) (dla kolejności \(ABCD\)). <b>Prostokąt:</b> prostopadłość boków (iloczyn skalarny równy \(0\) albo iloczyn współczynników kierunkowych \(-1\)).</li>
<li><b>Punkt na prostej w danej odległości od innej prostej lub okręgu:</b> zapisz punkt jako \((t,at+b)\) i ułóż równanie.</li>
<li><b>Pole figury:</b> trójkąt – wzór ze współrzędnych albo \(\tfrac12|AB|\cdot h\) z odległości punktu od prostej; wielokąt – podział na trójkąty.</li>
<li>Zawsze sprawdź, czy otrzymane rozwiązanie spełnia wszystkie założenia (np. „punkt leży nad prostą”, „kąt jest ostry”).</li>
</ul>
</div>
`;
