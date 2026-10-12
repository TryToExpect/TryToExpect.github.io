(window.THEORY = window.THEORY || {})['matura-7'] = String.raw`
<h3>Wektory na płaszczyźnie i ich zastosowania</h3>
<div class="bx def"><span class="t">Definicje</span>
<ul>
<li>Wektor \(\overrightarrow{AB}=[x_B-x_A,\ y_B-y_A]\). Wektor o współrzędnych \(\mathbf u=[u_1,u_2]\) ma długość \(|\mathbf u|=\sqrt{u_1^2+u_2^2}\). Wektor zerowy \([0,0]\); wektor przeciwny \(-\mathbf u=[-u_1,-u_2]\).</li>
<li>Dodawanie i odejmowanie po współrzędnych: \(\mathbf u\pm\mathbf v=[u_1\pm v_1,u_2\pm v_2]\); mnożenie przez liczbę: \(k\mathbf u=[ku_1,ku_2]\) (\(|k\mathbf u|=|k||\mathbf u|\)).</li>
<li>Równość wektorów: równe współrzędne. \(\overrightarrow{AB}=\overrightarrow{DC}\iff ABCD\) jest równoległobokiem (punkty w tej kolejności).</li>
</ul>
</div>
<div class="bx thm"><span class="t">Własności i iloczyn skalarny</span>
<ul>
<li><b>Równoległość:</b> \(\mathbf u\parallel\mathbf v\iff u_1v_2-u_2v_1=0\) (czyli \(\mathbf v=k\mathbf u\)).</li>
<li><b>Iloczyn skalarny:</b> \(\mathbf u\cdot\mathbf v=u_1v_1+u_2v_2=|\mathbf u||\mathbf v|\cos\varphi\). Stąd kąt: \(\cos\varphi=\dfrac{\mathbf u\cdot\mathbf v}{|\mathbf u||\mathbf v|}\) i prostopadłość: \(\mathbf u\perp\mathbf v\iff\mathbf u\cdot\mathbf v=0\).</li>
<li><b>Przesunięcie o wektor</b> \(\mathbf v\): \(P\mapsto P+\mathbf v\). Środek odcinka \(AB\): \(S=\tfrac12(A+B)\). Punkt \(P\) dzielący odcinek \(AB\) w stosunku \(|AP|:|PB|=m:n\): \(P=\dfrac{nA+mB}{m+n}\), czyli \(\overrightarrow{AP}=\tfrac m{m+n}\overrightarrow{AB}\).</li>
<li>Warunek \(\overrightarrow{AM}=k\,\overrightarrow{BM}\) zapisuje się współrzędnymi i daje równanie na \(M\) (np. \(\overrightarrow{AM}=-2\overrightarrow{BM}\Rightarrow M=\tfrac13(A+2B)\)).</li>
</ul>
</div>

<h3>Odcinek: długość, środek, podział w danym stosunku</h3>
<div class="bx thm"><span class="t">Wzory</span>
\[|AB|=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2},\qquad S_{AB}=\left(\frac{x_A+x_B}2,\ \frac{y_A+y_B}2\right).\]
<ul>
<li><b>Symetria względem punktu \(S\):</b> \(A'=2S-A\). <b>Symetria względem osi \(Ox\):</b> \((x,y)\mapsto(x,-y)\); względem \(Oy\): \((-x,y)\); względem prostej \(y=x\): \((y,x)\).</li>
<li><b>Środek ciężkości trójkąta</b> \(ABC\): \(G=\tfrac13(A+B+C)\).</li>
<li><b>Pole trójkąta</b> \(ABC\): \(P=\tfrac12\left|(x_B-x_A)(y_C-y_A)-(x_C-x_A)(y_B-y_A)\right|\).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Dla \(A=(1,-1)\), \(B=(4,3)\): \(|AB|=\sqrt{9+16}=5\); środek \(S=\left(\tfrac52,1\right)\). Punkt \(P\) taki, że \(|AP|:|PB|=2:3\): \(P=\dfrac{3A+2B}5=\left(\tfrac{11}5,\tfrac35\right)\).</p>
</div>

<h3>Prosta: postacie równania, położenie, odległości, kąt</h3>
<div class="bx def"><span class="t">Postacie równania prostej</span>
<ul>
<li><b>Ogólna:</b> \(Ax+By+C=0\), \((A,B)\ne(0,0)\). Wektor \([A,B]\) jest prostopadły do prostej (wektor normalny), a \([-B,A]\) – równoległy (kierunkowy).</li>
<li><b>Kierunkowa:</b> \(y=ax+b\), gdzie \(a=\operatorname{tg}\alpha\) to współczynnik kierunkowy (nie dotyczy prostych pionowych \(x=c\)).</li>
<li><b>Przez punkt \((x_0,y_0)\) ze współczynnikiem \(a\):</b> \(y-y_0=a(x-x_0)\). <b>Przez dwa punkty:</b> \((y-y_1)(x_2-x_1)=(y_2-y_1)(x-x_1)\), współczynnik \(a=\dfrac{y_2-y_1}{x_2-x_1}\).</li>
<li><b>Odcinkowa:</b> \(\dfrac xp+\dfrac yq=1\) (punkty przecięcia z osiami: \((p,0)\), \((0,q)\)).</li>
</ul>
</div>
<div class="bx thm"><span class="t">Położenie, odległości, kąt</span>
<ul>
<li><b>Równoległość:</b> \(a_1=a_2\) (dla ogólnych: \(A_1B_2-A_2B_1=0\)). <b>Prostopadłość:</b> \(a_1a_2=-1\) (ogólne: \(A_1A_2+B_1B_2=0\)).</li>
<li><b>Odległość punktu \(P_0=(x_0,y_0)\) od prostej \(Ax+By+C=0\):</b> \(d=\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}\). Odległość prostych równoległych \(Ax+By+C_1=0\), \(Ax+By+C_2=0\): \(\dfrac{|C_1-C_2|}{\sqrt{A^2+B^2}}\).</li>
<li><b>Kąt \(\varphi\) między prostymi</b> (ostry): \(\operatorname{tg}\varphi=\left|\dfrac{a_1-a_2}{1+a_1a_2}\right|\), gdy \(a_1a_2\ne-1\).</li>
<li><b>Symetralna odcinka \(AB\):</b> zbiór punktów równo oddalonych od \(A\) i \(B\) – prosta prostopadła do \(AB\) przez jego środek; równanie z warunku \(|PA|=|PB|\).</li>
<li><b>Rzut punktu na prostą:</b> przecięcie prostej z prostą do niej prostopadłą przez ten punkt. Punkt symetryczny względem prostej: \(P'=2\cdot\text{rzut}-P\).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Odległość punktu \((2,1)\) od prostej \(3x-4y+5=0\): \(d=\dfrac{|6-4+5|}{5}=\dfrac75\).</p>
</div>

<h3>Okrąg: równanie, położenie względem prostej i innego okręgu</h3>
<div class="bx def"><span class="t">Równanie okręgu</span>
<ul>
<li><b>Kanoniczne:</b> \((x-a)^2+(y-b)^2=r^2\) – środek \(S=(a,b)\), promień \(r>0\).</li>
<li><b>Ogólne:</b> \(x^2+y^2+Ax+By+C=0\); środek \(S=\left(-\tfrac A2,-\tfrac B2\right)\), \(r^2=\tfrac{A^2+B^2}4-C\) (okrąg istnieje, gdy \(r^2>0\)).</li>
<li>Punkt \(P\) leży wewnątrz okręgu, gdy \(|SP|&lt;r\); na okręgu – gdy \(|SP|=r\); na zewnątrz – gdy \(|SP|>r\).</li>
</ul>
</div>
<div class="bx thm"><span class="t">Prosta a okrąg; dwa okręgi</span>
<ul>
<li>Odległość środka od prostej \(d\): \(d&lt;r\) – sieczna (dwa punkty wspólne), \(d=r\) – styczna (jeden), \(d>r\) – rozłączne. Równoważnie: podstawienie równania prostej do równania okręgu daje równanie kwadratowe z \(\Delta>0,=0,&lt;0\).</li>
<li><b>Styczna do okręgu w punkcie \(P_0=(x_0,y_0)\) na okręgu:</b> \((x_0-a)(x-a)+(y_0-b)(y-b)=r^2\) (prostopadła do \(SP_0\)).</li>
<li><b>Styczne z punktu zewnętrznego:</b> prosta przez \(P\) z warunkiem \(d(S,\text{prosta})=r\) albo rozwiąż układ „punkt na okręgu + \(SP_0\perp P_0P\)”. Długość stycznej: \(\sqrt{|SP|^2-r^2}\).</li>
<li><b>Dwa okręgi</b> (środki w odległości \(d\)): styczne zewnętrznie \(d=r_1+r_2\), wewnętrznie \(d=|r_1-r_2|\), przecinają się \(|r_1-r_2|&lt;d&lt;r_1+r_2\). Prosta przez punkty wspólne (oś potęgowa): odejmij równania okręgów.</li>
</ul>
</div>
<p><b>Okrąg opisany na trójkącie:</b> środek jest w przecięciu symetralnych (układ \(|SA|=|SB|=|SC|\)); <b>wpisany:</b> \(r=\dfrac Pp\), środek w przecięciu dwusiecznych. Okrąg styczny do obu osi układu w I ćwiartce: \((x-r)^2+(y-r)^2=r^2\).</p>

<h3>Przekształcenia geometryczne i pole figury w układzie współrzędnych</h3>
<div class="bx thm"><span class="t">Przekształcenia</span>
<ul>
<li><b>Przesunięcie o wektor</b> \([p,q]\): \((x,y)\mapsto(x+p,y+q)\); wykres funkcji \(y=f(x)\) przechodzi w \(y-q=f(x-p)\).</li>
<li><b>Symetria osiowa</b> względem osi: patrz wyżej; względem prostej \(y=c\): \((x,y)\mapsto(x,2c-y)\); względem \(x=c\): \((2c-x,y)\).</li>
<li><b>Symetria środkowa</b> względem \(S\): \(P\mapsto2S-P\) (przekątne równoległoboku dzielą się na połowy w tym punkcie).</li>
<li><b>Jednokładność</b> o środku \(S\) i skali \(k\): \(P\mapsto S+k\cdot\overrightarrow{SP}\); długości zmieniają się \(|k|\) razy, pola \(k^2\) razy. Okrąg \((x-a)^2+(y-b)^2=r^2\) przechodzi w okrąg o promieniu \(|k|r\).</li>
</ul>
</div>
<div class="bx met"><span class="t">Typowe zadania</span>
<ul>
<li><b>Trójkąt równoramienny:</b> wierzchołek przy podstawie \(AB\) leży na symetralnej \(AB\) (warunek \(|CA|=|CB|\)). <b>Równoległobok</b> z trzech wierzchołków: \(D=A+C-B\) (dla kolejności \(ABCD\)). <b>Prostokąt</b>: prostopadłość boków (iloczyn skalarny \(=0\)).</li>
<li><b>Punkt na prostej w danej odległości od innej prostej / okręgu:</b> parametryzuj punkt jako \((t,at+b)\) i ułóż równanie.</li>
<li><b>Pole figury:</b> trójkąt – wzór ze współrzędnych lub \(\tfrac12|AB|\cdot h\) z odległości punktu od prostej; wielokąt – podział na trójkąty.</li>
<li>Zawsze sprawdź, czy dane rozwiązanie spełnia wszystkie założenia (np. „punkt leży nad prostą”, „kąt jest ostry”).</li>
</ul>
</div>
`;
