(window.THEORY = window.THEORY || {})['matura-6'] = String.raw`
<div class="bx def"><span class="t">Oznaczenia w tym dziale</span>
<p>W trójkącie \(ABC\) przyjmujemy: \(a=|BC|\), \(b=|AC|\), \(c=|AB|\); kąty \(\alpha,\beta,\gamma\) leżą przy wierzchołkach \(A,B,C\), czyli naprzeciw boków \(a,b,c\). Dalej: \(P\) – pole, \(p=\tfrac{a+b+c}2\) – połowa obwodu, \(h_a\) – wysokość opuszczona na bok \(a\), \(R\) i \(r\) – promienie okręgów opisanego i wpisanego. Zapis \(|AB|\) oznacza długość odcinka, a \(\angle ABC\) – kąt przy wierzchołku \(B\).</p>
</div>

<h3>Kąty i proste równoległe</h3>
<div class="bx thm"><span class="t">Kąty przy dwóch prostych</span>
<div class="wf"><div>
<ul>
<li><b>Kąty wierzchołkowe</b> są równe. <b>Kąty przyległe</b> (leżące na jednej prostej) dają razem \(180^\circ\).</li>
<li>Gdy proste \(a\) i \(b\) są <b>równoległe</b>, a trzecia prosta je przecina, powstaje osiem kątów: wszystkie oznaczone \(\alpha\) są równe, wszystkie oznaczone \(\beta\) są równe i \(\alpha+\beta=180^\circ\).</li>
<li>Pary równych kątów mają swoje nazwy: <b>odpowiadające</b> (ten sam „narożnik” przy obu prostych, np. dwa kąty \(\alpha\) leżące pod prostymi i po prawej stronie siecznej) oraz <b>naprzemianległe</b> (po przeciwnych stronach siecznej, między prostymi).</li>
<li>Działa to też w drugą stronę: jeśli kąty odpowiadające albo naprzemianległe są równe, to proste są równoległe.</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 330 178" width="330" height="178" role="img" aria-label="Dwie proste równoległe a i b przecięte trzecią prostą: kąty α i β"><line class="s" x1="14" y1="56" x2="316" y2="56"/><line class="s" x1="14" y1="128" x2="316" y2="128"/><text x="10" y="51" text-anchor="end">a</text><text x="10" y="123" text-anchor="end">b</text><line class="s" x1="95.7" y1="21.6" x2="242.8" y2="161"/><path class="a" d="M144,56A12,12 0 0 1 140.7,64.3"/><text x="156.2" y="70.1" text-anchor="middle">α</text><path class="a" d="M120,56A12,12 0 0 1 123.3,47.7"/><text x="107.8" y="50.9" text-anchor="middle">α</text><path class="p" d="M151,56A19,19 0 0 0 118.2,42.9"/><text x="143.5" y="31.7" text-anchor="middle">β</text><path class="p" d="M113,56A19,19 0 0 0 145.8,69.1"/><text x="120.5" y="89.3" text-anchor="middle">β</text><path class="a" d="M220,128A12,12 0 0 1 216.7,136.3"/><text x="232.2" y="142.1" text-anchor="middle">α</text><path class="a" d="M196,128A12,12 0 0 1 199.3,119.7"/><text x="183.8" y="122.9" text-anchor="middle">α</text><path class="p" d="M227,128A19,19 0 0 0 194.2,114.9"/><text x="219.5" y="103.7" text-anchor="middle">β</text><path class="p" d="M189,128A19,19 0 0 0 221.8,141.1"/><text x="196.5" y="161.3" text-anchor="middle">β</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Suma kątów w trójkącie i wielokącie</span>
<ul>
<li>Suma kątów trójkąta jest równa \(180^\circ\). <b>Kąt zewnętrzny</b> trójkąta jest równy sumie dwóch kątów wewnętrznych do niego nieprzyległych.</li>
<li>Suma kątów wewnętrznych wypukłego \(n\)-kąta wynosi \((n-2)\cdot180^\circ\) (przekątnymi poprowadzonymi z jednego wierzchołka dzielimy go na \(n-2\) trójkątów). Suma kątów zewnętrznych wielokąta wypukłego to \(360^\circ\).</li>
</ul>
</div>

<h3>Twierdzenie Talesa i twierdzenie o dwusiecznej</h3>
<div class="bx thm"><span class="t">Twierdzenie Talesa</span>
<div class="wf"><div>
<p>Jeżeli ramiona kąta o wierzchołku \(O\) przetniemy dwiema prostymi równoległymi \(m\) i \(n\), to odcinki wyznaczone na jednym ramieniu są proporcjonalne do odpowiednich odcinków na drugim ramieniu:
\[m\parallel n\ \Longrightarrow\ \frac{|OA|}{|OC|}=\frac{|AB|}{|CD|}\quad\left(\text{oraz}\quad\frac{|OA|}{|OB|}=\frac{|OC|}{|OD|}\right).\]</p>
<p><b>Twierdzenie odwrotne:</b> jeśli \(\dfrac{|OA|}{|OC|}=\dfrac{|AB|}{|CD|}\), to proste \(m\) i \(n\) są równoległe.</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 330 190" width="330" height="190" role="img" aria-label="Ramiona kąta o wierzchołku O przecięte dwiema prostymi równoległymi m i n"><line class="s" x1="24" y1="164" x2="273" y2="142.2"/><line class="s" x1="24" y1="164" x2="146.1" y2="18.5"/><line class="p" x1="129.8" y1="165.3" x2="60.1" y2="99.2"/><line class="p" x1="237.4" y1="155.9" x2="112.2" y2="37.2"/><circle class="dot" cx="24" cy="164" r="2.4"/><circle class="dot" cx="119.6" cy="155.6" r="2.4"/><circle class="dot" cx="227.2" cy="146.2" r="2.4"/><circle class="dot" cx="70.3" cy="108.8" r="2.4"/><circle class="dot" cx="122.3" cy="46.8" r="2.4"/><text x="18" y="177" text-anchor="end">O</text><text x="125.6" y="150.6">A</text><text x="233.2" y="141.2">B</text><text x="63.3" y="113.3" text-anchor="end">C</text><text x="115.3" y="51.3" text-anchor="end">D</text><text x="54.1" y="94.2" text-anchor="end">m</text><text x="106.2" y="32.2" text-anchor="end">n</text></svg></div></div>
<p class="note">Skąd to wynika: trójkąty \(OAC\) i \(OBD\) mają wspólny kąt przy \(O\) i równe kąty odpowiadające przy \(A\) i \(B\), więc są podobne, a w trójkątach podobnych odpowiednie boki są proporcjonalne.</p>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Dla \(m\parallel n\) i \(|OA|=3\), \(|AB|=2\), \(|OC|=4{,}5\) mamy \(\dfrac3{4{,}5}=\dfrac2{|CD|}\), czyli \(|CD|=3\).</p>
</div>
<div class="bx thm"><span class="t">Twierdzenie o dwusiecznej kąta w trójkącie</span>
<div class="wf"><div>
<p>Dwusieczna kąta trójkąta dzieli przeciwległy bok na odcinki, których stosunek jest równy stosunkowi długości pozostałych boków. Dla dwusiecznej kąta \(C\) z rysunku:
\[\frac{|AD|}{|DB|}=\frac{|AC|}{|BC|},\qquad\text{czyli}\qquad\frac xy=\frac ba.\]</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 190" width="300" height="190" role="img" aria-label="Dwusieczna kąta C trójkąta ABC przecina bok AB w punkcie D"><polygon class="s" points="24,164 276,164 112,28"/><line class="p" x1="112" y1="28" x2="132.8" y2="164"/><path class="a" d="M97.9,49.8A26,26 0 0 0 115.9,53.7"/><text x="104" y="69.7" text-anchor="middle">δ</text><path class="a" d="M115.9,53.7A26,26 0 0 0 132,44.6"/><text x="130.7" y="65.6" text-anchor="middle">δ</text><circle class="dot" cx="132.8" cy="164" r="2.4"/><text x="18" y="177" text-anchor="end">A</text><text x="282" y="177">B</text><text x="112" y="21" text-anchor="middle">C</text><text x="132.8" y="178" text-anchor="middle">D</text><text x="78.4" y="190" text-anchor="middle">x</text><text x="204.4" y="190" text-anchor="middle">y</text><text x="62" y="91" text-anchor="end">b</text><text x="200" y="91">a</text></svg></div></div>
<p class="note">Skąd to wynika: trójkąty \(ACD\) i \(DCB\) mają wspólną wysokość poprowadzoną z \(C\), więc stosunek ich pól to \(|AD|:|DB|\). Z drugiej strony ich pola to \(\tfrac12|AC|\cdot|CD|\sin\delta\) i \(\tfrac12|BC|\cdot|CD|\sin\delta\) (kąty przy \(C\) są równe), czyli stosunek pól to \(|AC|:|BC|\). Stąd teza.</p>
</div>

<h3>Trójkąt prostokątny i trójkąt równoboczny</h3>
<div class="bx thm"><span class="t">Trójkąt prostokątny</span>
<div class="wf"><div>
<p>Niech \(a,b\) będą przyprostokątnymi, \(c\) – przeciwprostokątną, a \(\alpha\) – kątem ostrym leżącym naprzeciw boku \(b\) (jak na rysunku).</p>
<ul>
<li><b>Funkcje trygonometryczne:</b> \(\sin\alpha=\dfrac bc,\ \cos\alpha=\dfrac ac,\ \operatorname{tg}\alpha=\dfrac ba\). Dla drugiego kąta ostrego \(\beta=90^\circ-\alpha\) mamy \(\sin\beta=\cos\alpha\) i \(\cos\beta=\sin\alpha\).</li>
<li><b>Twierdzenie Pitagorasa:</b> \(a^2+b^2=c^2\). <b>Twierdzenie odwrotne:</b> jeśli boki trójkąta spełniają \(a^2+b^2=c^2\), to jest on prostokątny, a kąt prosty leży naprzeciw boku \(c\).</li>
<li><b>Pole:</b> \(P=\tfrac12ab\).</li>
<li><b>Okrąg opisany:</b> jego środkiem jest środek przeciwprostokątnej, więc \(R=\tfrac12c\). <b>Okrąg wpisany:</b> \(r=\dfrac{a+b-c}2\).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 190" width="300" height="190" role="img" aria-label="Trójkąt prostokątny o przyprostokątnych a, b i przeciwprostokątnej c; kąty ostre α i β"><polygon class="s" points="30,160 262,160 30,36"/><path class="s" d="M39,160L39,151L30,151"/><path class="a" d="M234,160A28,28 0 0 1 237.3,146.8"/><text x="221.3" y="154.3" text-anchor="middle">α</text><path class="p" d="M30,58A22,22 0 0 0 49.4,46.4"/><text x="48.5" y="71.4" text-anchor="middle">β</text><text x="146" y="174" text-anchor="middle">a</text><text x="23" y="102.5" text-anchor="end">b</text><text x="156" y="91">c</text></svg></div></div>
<p class="note">Skąd \(r=\tfrac{a+b-c}2\): od wierzchołka kąta prostego do punktów styczności okręgu wpisanego są odcinki długości \(r\), więc na przyprostokątnych zostają odcinki \(a-r\) i \(b-r\). Odcinki stycznych poprowadzonych z jednego punktu są równe, zatem \(c=(a-r)+(b-r)\).</p>
</div>
<div class="bx thm"><span class="t">Wysokość opuszczona na przeciwprostokątną</span>
<div class="wf"><div>
<p>Wysokość \(h\) poprowadzona z wierzchołka kąta prostego dzieli przeciwprostokątną na odcinki \(x=|AH|\) i \(y=|HB|\) (\(x+y=c\)). Wtedy
\[h^2=x\cdot y,\qquad b^2=x\cdot c,\qquad a^2=y\cdot c,\qquad h=\frac{ab}c.\]</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 190" width="300" height="190" role="img" aria-label="Wysokość h poprowadzona z wierzchołka kąta prostego dzieli przeciwprostokątną na odcinki x i y"><polygon class="s" points="26,158 274,158 114,39.3"/><line class="a" x1="114" y1="39.3" x2="114" y2="158"/><path class="s" d="M108.6,46.6L115.9,51.9L121.2,44.7"/><path class="a" d="M114,150L122,150L122,158"/><circle class="dot" cx="114" cy="39.3" r="2.4"/><circle class="dot" cx="114" cy="158" r="2.4"/><text x="20" y="171" text-anchor="end">A</text><text x="280" y="171">B</text><text x="114" y="32.3" text-anchor="middle">C</text><text x="114" y="172" text-anchor="middle">H</text><text x="70" y="184" text-anchor="middle">x</text><text x="194" y="184" text-anchor="middle">y</text><text x="121" y="103.2">h</text><text x="64" y="93.7" text-anchor="end">b</text><text x="200" y="93.7">a</text></svg></div></div>
<p class="note">Skąd to wynika: trójkąty \(AHC\), \(CHB\) i \(ACB\) są prostokątne i mają parami równe kąty ostre, więc są podobne. Z podobieństwa \(AHC\) i \(CHB\) mamy \(\dfrac hy=\dfrac xh\), czyli \(h^2=xy\). Z podobieństwa \(AHC\) i \(ACB\): \(\dfrac{|AC|}{|AB|}=\dfrac{|AH|}{|AC|}\), czyli \(b^2=xc\). Wzór \(h=\dfrac{ab}c\) to dwa wzory na to samo pole: \(\tfrac12ab=\tfrac12ch\).</p>
</div>
<div class="bx thm"><span class="t">Trójkąt równoboczny o boku \(a\)</span>
<div class="wf"><div>
<ul>
<li>Wysokość: \(h=\dfrac{a\sqrt3}2\). Pole: \(P=\dfrac{a^2\sqrt3}4\).</li>
<li>Promień okręgu opisanego \(R=\tfrac23h=\dfrac{a\sqrt3}3\), wpisanego \(r=\tfrac13h=\dfrac{a\sqrt3}6\); zawsze \(R=2r\).</li>
<li>Wysokości, środkowe, dwusieczne i symetralne boków pokrywają się, a ich wspólny punkt \(O\) jest środkiem obu okręgów.</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 280 246" width="280" height="246" role="img" aria-label="Trójkąt równoboczny o boku a, jego wysokość h oraz okręgi opisany (R) i wpisany (r)"><circle class="a" cx="140" cy="112.1" r="98.1"/><circle class="p" cx="140" cy="112.1" r="49.1"/><polygon class="s" points="140,14 55,161.2 225,161.2"/><line class="s d" x1="140" y1="14" x2="140" y2="161.2"/><line class="a" x1="140" y1="112.1" x2="225" y2="161.2"/><line class="p" x1="140" y1="112.1" x2="140" y2="161.2"/><path class="s" d="M140,153.2L148,153.2L148,161.2"/><circle class="dot" cx="140" cy="112.1" r="2.4"/><text x="146" y="9">A</text><text x="49" y="174.2" text-anchor="end">B</text><text x="231" y="174.2">C</text><text x="131" y="116.6" text-anchor="end">O</text><text x="140" y="175.2" text-anchor="middle">a</text><text x="190.5" y="130.7">R</text><text x="150" y="141.2">r</text><text x="127" y="59.7" text-anchor="end">h</text></svg></div></div>
<p class="note">Skąd \(h\): wysokość dzieli trójkąt na dwa trójkąty prostokątne o przyprostokątnej \(\tfrac a2\) i przeciwprostokątnej \(a\), więc \(h^2=a^2-\tfrac{a^2}4=\tfrac{3a^2}4\). Punkt \(O\) dzieli wysokość w stosunku \(2:1\) (jak każdą środkową), stąd \(R=\tfrac23h\) i \(r=\tfrac13h\).</p>
</div>
<div class="bx thm"><span class="t">Dwa ważne trójkąty prostokątne</span>
<div class="wf"><div>
<ul>
<li><b>Połowa kwadratu</b> (kąty \(45^\circ,45^\circ,90^\circ\)): boki mają się jak \(1:1:\sqrt2\).</li>
<li><b>Połowa trójkąta równobocznego</b> (kąty \(30^\circ,60^\circ,90^\circ\)): boki mają się jak \(1:\sqrt3:2\); bok leżący naprzeciw kąta \(30^\circ\) jest o połowę krótszy od przeciwprostokątnej.</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 330 150" width="330" height="150" role="img" aria-label="Trójkąty prostokątne o kątach 45°, 45°, 90° (boki 1, 1, √2) oraz 30°, 60°, 90° (boki 1, √3, 2)"><polygon class="s" points="24,128 104,128 24,48"/><path class="s" d="M32,128L32,120L24,120"/><path class="a" d="M84,128A20,20 0 0 1 89.9,113.9"/><text x="70.7" y="118.7" text-anchor="middle">45°</text><path class="a" d="M38.1,62.1A20,20 0 0 1 24,68"/><text x="37.8" y="85.8" text-anchor="middle">45°</text><text x="64" y="142" text-anchor="middle" class="m">1</text><text x="17" y="92.5" text-anchor="end" class="m">1</text><text x="73" y="82" class="m">√2</text><polygon class="s" points="200,128 328.2,128 200,54"/><path class="s" d="M208,128L208,120L200,120"/><path class="a" d="M300.2,128A28,28 0 0 1 303.9,114"/><text x="283.7" y="120.6" text-anchor="middle">30°</text><path class="a" d="M217.3,64A20,20 0 0 1 200,74"/><text x="217" y="87.9" text-anchor="middle">60°</text><text x="264.1" y="142" text-anchor="middle" class="m">√3</text><text x="193" y="95.5" text-anchor="end" class="m">1</text><text x="273.1" y="85" class="m">2</text></svg></div></div>
</div>

<h3>Twierdzenia sinusów i cosinusów, pole trójkąta</h3>
<div class="bx thm"><span class="t">Twierdzenie cosinusów i twierdzenie sinusów</span>
<div class="wf"><div>
<p>W dowolnym trójkącie o bokach \(a,b,c\) i kątach \(\alpha,\beta,\gamma\) (kąt leży naprzeciw boku oznaczonego tą samą literą):
\[\begin{aligned}c^2&=a^2+b^2-2ab\cos\gamma,\\ b^2&=a^2+c^2-2ac\cos\beta,\\ a^2&=b^2+c^2-2bc\cos\alpha,\end{aligned}\]
\[\frac a{\sin\alpha}=\frac b{\sin\beta}=\frac c{\sin\gamma}=2R.\]</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 190" width="300" height="190" role="img" aria-label="Trójkąt ABC z bokami a, b, c i kątami α, β, γ"><polygon class="s" points="28,160 268,160 124,30"/><path class="a" d="M52,160A24,24 0 0 0 42.3,140.7"/><text x="63.7" y="146.5" text-anchor="middle">α</text><path class="a" d="M251.7,145.3A22,22 0 0 0 246,160"/><text x="232.5" y="150.9" text-anchor="middle">β</text><path class="a" d="M110.9,47.7A22,22 0 0 0 140.3,44.7"/><text x="127.8" y="72.3" text-anchor="middle">γ</text><text x="22" y="173" text-anchor="end">A</text><text x="274" y="173">B</text><text x="124" y="23" text-anchor="middle">C</text><text x="202" y="90">a</text><text x="70" y="90" text-anchor="end">b</text><text x="148" y="174" text-anchor="middle">c</text></svg></div></div>
<ul>
<li>Dla \(\gamma=90^\circ\) twierdzenie cosinusów daje twierdzenie Pitagorasa (bo \(\cos90^\circ=0\)).</li>
<li><b>Które wybrać?</b> Twierdzenie <b>cosinusów</b> – gdy znamy dwa boki i kąt między nimi albo wszystkie trzy boki. Twierdzenie <b>sinusów</b> – gdy znamy bok i leżący naprzeciw niego kąt (dostajemy wtedy też \(R\)) albo dwa kąty i jeden bok.</li>
<li>Pamiętaj, że \(\alpha+\beta+\gamma=180^\circ\), więc \(\sin(\alpha+\beta)=\sin\gamma\). Sinus nie wyznacza kąta jednoznacznie (\(\sin\alpha=\sin(180^\circ-\alpha)\)), więc gdy kąt może być rozwarty, bezpieczniej użyć twierdzenia cosinusów.</li>
</ul>
</div>
<div class="bx thm"><span class="t">Nierówność trójkąta</span>
<p>Jeżeli boki trójkąta mają długości \(a\le b\le c\), to \(c&lt;a+b\). Z trzech odcinków można zbudować trójkąt wtedy i tylko wtedy, gdy najdłuższy z nich jest krótszy od sumy dwóch pozostałych. Naprzeciw dłuższego boku leży większy kąt.</p>
</div>
<div class="bx thm"><span class="t">Wzory na pole trójkąta</span>
\[P=\tfrac12ah_a=\tfrac12ab\sin\gamma=r\cdot p=\frac{abc}{4R}=\sqrt{p(p-a)(p-b)(p-c)}\qquad\left(p=\tfrac{a+b+c}2\right).\]
<ul>
<li>\(\tfrac12ah_a\) – podstawa i wysokość; \(\tfrac12ab\sin\gamma\) – dwa boki i kąt między nimi; \(r\cdot p\) – gdy znamy promień okręgu wpisanego; \(\tfrac{abc}{4R}\) – gdy znamy promień okręgu opisanego; ostatni (wzór Herona) – gdy znamy tylko boki.</li>
<li>Stąd \(r=\dfrac Pp\) oraz \(R=\dfrac{abc}{4P}=\dfrac a{2\sin\alpha}\).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>W trójkącie o bokach \(13,14,15\): \(p=21\), \(P=\sqrt{21\cdot8\cdot7\cdot6}=84\), \(r=\tfrac{84}{21}=4\), \(R=\tfrac{13\cdot14\cdot15}{4\cdot84}=\tfrac{65}8\), wysokość na bok \(14\): \(h=\tfrac{2\cdot84}{14}=12\).</p>
</div>

<h3>Środkowe, symetralne i okręgi wpisany i opisany</h3>
<div class="bx def"><span class="t">Linie w trójkącie</span>
<ul>
<li><b>Wysokość</b> – odcinek z wierzchołka prostopadły do prostej zawierającej przeciwległy bok. Wysokości (lub ich przedłużenia) przecinają się w jednym punkcie – ortocentrum.</li>
<li><b>Środkowa</b> – odcinek łączący wierzchołek ze środkiem przeciwległego boku.</li>
<li><b>Dwusieczna</b> kąta dzieli kąt na połowy. <b>Symetralna boku</b> to prosta prostopadła do boku, przechodząca przez jego środek.</li>
</ul>
</div>
<div class="bx thm"><span class="t">Twierdzenie o środkowych trójkąta</span>
<div class="wf"><div>
<p>Środkowe trójkąta przecinają się w jednym punkcie \(G\) (<b>środek ciężkości</b>), który dzieli każdą środkową w stosunku \(2:1\), licząc od wierzchołka: \(|CG|=2\,|GF|\) i tak samo dla pozostałych.</p>
<p>Długość środkowej: \(m_a=\tfrac12\sqrt{2b^2+2c^2-a^2}\). Środkowe dzielą trójkąt na sześć trójkątów o równych polach.</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 190" width="300" height="190" role="img" aria-label="Środkowe trójkąta przecinają się w środku ciężkości G i dzielą się w stosunku 2:1"><polygon class="s" points="26,166 276,166 100,26"/><line class="a" x1="26" y1="166" x2="188" y2="96"/><line class="a" x1="276" y1="166" x2="63" y2="96"/><line class="a" x1="100" y1="26" x2="151" y2="166"/><line class="s" x1="88.5" y1="170" x2="88.5" y2="162"/><line class="s" x1="213.5" y1="170" x2="213.5" y2="162"/><line class="s" x1="236.1" y1="129.1" x2="231.1" y2="135.4"/><line class="s" x1="232.9" y1="126.6" x2="227.9" y2="132.9"/><line class="s" x1="148.1" y1="59.1" x2="143.1" y2="65.4"/><line class="s" x1="144.9" y1="56.6" x2="139.9" y2="62.9"/><line class="s" x1="79.8" y1="55.6" x2="86.9" y2="59.3"/><line class="s" x1="78" y1="59.1" x2="85" y2="62.9"/><line class="s" x1="76.1" y1="62.7" x2="83.2" y2="66.4"/><line class="s" x1="42.8" y1="125.6" x2="49.9" y2="129.3"/><line class="s" x1="41" y1="129.1" x2="48" y2="132.9"/><line class="s" x1="39.1" y1="132.7" x2="46.2" y2="136.4"/><circle class="dot" cx="134" cy="119.3" r="2.4"/><circle class="dot" cx="188" cy="96" r="2.4"/><circle class="dot" cx="63" cy="96" r="2.4"/><circle class="dot" cx="151" cy="166" r="2.4"/><text x="20" y="179" text-anchor="end">A</text><text x="282" y="179">B</text><text x="100" y="19" text-anchor="middle">C</text><text x="194" y="91">D</text><text x="57" y="91" text-anchor="end">E</text><text x="151" y="180" text-anchor="middle">F</text><text x="144" y="134.3">G</text><text x="107" y="77.2" text-anchor="end">2k</text><text x="154.5" y="147.2">k</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Okrąg wpisany i opisany na trójkącie</span>
<ul>
<li><b>Dwusieczne</b> kątów (wewnętrznych) przecinają się w jednym punkcie – środku okręgu wpisanego w trójkąt (jest on równo oddalony od boków).</li>
<li><b>Symetralne</b> boków przecinają się w jednym punkcie – środku okręgu opisanego na trójkącie (jest on równo oddalony od wierzchołków).</li>
<li>Promienie: \(r=\dfrac Pp\), \(R=\dfrac{abc}{4P}=\dfrac a{2\sin\alpha}\). W trójkącie prostokątnym środek okręgu opisanego leży w środku przeciwprostokątnej, w ostrokątnym – wewnątrz trójkąta, w rozwartokątnym – poza nim.</li>
</ul>
<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 252 200" width="252" height="200" role="img" aria-label="Dwusieczne kątów trójkąta przecinają się w środku okręgu wpisanego"><circle class="a" cx="109.4" cy="119.2" r="52.8"/><polygon class="s" points="26,172 226,172 96,24"/><line class="p d" x1="26" y1="172" x2="109.4" y2="119.2"/><line class="p d" x1="226" y1="172" x2="109.4" y2="119.2"/><line class="p d" x1="96" y1="24" x2="109.4" y2="119.2"/><line class="a" x1="109.4" y1="119.2" x2="109.4" y2="172"/><path class="a" d="M109.4,165L116.4,165L116.4,172"/><circle class="dot" cx="109.4" cy="119.2" r="2.4"/><text x="20" y="185" text-anchor="end">A</text><text x="232" y="185">B</text><text x="96" y="17" text-anchor="middle">C</text><text x="118.4" y="112.2">I</text><text x="117.4" y="150.1">r</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 262 238" width="262" height="238" role="img" aria-label="Symetralne boków trójkąta przecinają się w środku okręgu opisanego"><circle class="a" cx="131" cy="122" r="100"/><polygon class="s" points="49.1,179.4 221.6,164.3 113.6,23.5"/><line class="p d" x1="135.4" y1="171.8" x2="131" y2="122"/><line class="p d" x1="167.6" y1="93.9" x2="131" y2="122"/><line class="p d" x1="81.4" y1="101.4" x2="131" y2="122"/><line class="a" x1="131" y1="122" x2="113.6" y2="23.5"/><line class="s" x1="92.6" y1="179.6" x2="91.9" y2="171.6"/><line class="s" x1="178.8" y1="172" x2="178.1" y2="164.1"/><line class="s" x1="199" y1="128.2" x2="192.7" y2="133.1"/><line class="s" x1="196.6" y1="125.1" x2="190.2" y2="129.9"/><line class="s" x1="145" y1="57.9" x2="138.7" y2="62.7"/><line class="s" x1="142.6" y1="54.7" x2="136.2" y2="59.6"/><line class="s" x1="67.4" y1="145.6" x2="60" y2="142.6"/><line class="s" x1="68.9" y1="141.9" x2="61.5" y2="138.9"/><line class="s" x1="70.4" y1="138.2" x2="63.1" y2="135.2"/><line class="s" x1="99.7" y1="67.7" x2="92.3" y2="64.6"/><line class="s" x1="101.2" y1="64" x2="93.8" y2="60.9"/><line class="s" x1="102.7" y1="60.3" x2="95.3" y2="57.3"/><circle class="dot" cx="131" cy="122" r="2.4"/><text x="43.1" y="192.4" text-anchor="end">A</text><text x="227.6" y="177.3">B</text><text x="119.6" y="18.5">C</text><text x="140" y="138">O</text><text x="130.3" y="77.3">R</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Odcinek łączący środki boków trójkąta</span>
<div class="wf"><div>
<p>Odcinek łączący środki dwóch boków trójkąta jest równoległy do trzeciego boku i ma długość równą jego połowie: \(DE\parallel AB\) oraz \(|DE|=\tfrac12|AB|\).</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 180" width="300" height="180" role="img" aria-label="Odcinek łączący środki dwóch boków trójkąta jest równoległy do trzeciego boku i dwa razy krótszy"><polygon class="s" points="24,158 276,158 112,24"/><line class="p" x1="68" y1="91" x2="194" y2="91"/><line class="s" x1="49.3" y1="126.7" x2="42.7" y2="122.3"/><line class="s" x1="93.3" y1="59.7" x2="86.7" y2="55.3"/><line class="s" x1="239.1" y1="122.7" x2="234" y2="128.9"/><line class="s" x1="236" y1="120.1" x2="230.9" y2="126.3"/><line class="s" x1="157.1" y1="55.7" x2="152" y2="61.9"/><line class="s" x1="154" y1="53.1" x2="148.9" y2="59.3"/><circle class="dot" cx="68" cy="91" r="2.4"/><circle class="dot" cx="194" cy="91" r="2.4"/><text x="18" y="171" text-anchor="end">A</text><text x="282" y="171">B</text><text x="112" y="17" text-anchor="middle">C</text><text x="61" y="95.5" text-anchor="end">D</text><text x="201" y="95.5">E</text><text x="150" y="172" text-anchor="middle">c</text><text x="131" y="82" text-anchor="middle">½c</text></svg></div></div>
<p class="note">Skąd to wynika: trójkąty \(CDE\) i \(CAB\) mają wspólny kąt przy \(C\) i proporcjonalne boki \(\dfrac{|CD|}{|CA|}=\dfrac{|CE|}{|CB|}=\tfrac12\), więc są podobne w skali \(\tfrac12\) (cecha bkb). Stąd równoległość (równe kąty odpowiadające) i \(|DE|=\tfrac12|AB|\).</p>
</div>

<h3>Podobieństwo i przystawanie figur</h3>
<div class="bx thm"><span class="t">Cechy przystawania i podobieństwa trójkątów</span>
<div class="wf"><div>
<ul>
<li><b>Trójkąty przystające</b> (takie same kształt i rozmiar): wystarczy zgodność <b>bbb</b> (trzy boki), <b>bkb</b> (dwa boki i kąt między nimi) albo <b>kbk</b> (bok i dwa kąty do niego przyległe).</li>
<li><b>Trójkąty podobne</b> w skali \(k\): wystarczy <b>bbb</b> (trzy pary boków proporcjonalne), <b>bkb</b> (dwie pary boków proporcjonalne i równy kąt między nimi) albo <b>kk</b> (dwa równe kąty).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 340 170" width="340" height="170" role="img" aria-label="Dwa trójkąty podobne w skali k: boki ka, kb, kc, równe kąty α, β, γ"><polygon class="s" points="18,138 94,138 54,80"/><polygon class="s" points="128,150 249.6,150 185.6,57.2"/><path class="a" d="M32,138A14,14 0 0 0 25.4,126.1"/><text x="39.8" y="130.3" text-anchor="middle">α</text><path class="a" d="M86.6,127.3A13,13 0 0 0 81,138"/><text x="71.9" y="130.9" text-anchor="middle">β</text><path class="a" d="M47.1,91A13,13 0 0 0 61.4,90.7"/><text x="54.6" y="109.5" text-anchor="middle">γ</text><path class="a" d="M148,150A20,20 0 0 0 138.5,133"/><text x="156.8" y="138.5" text-anchor="middle">α</text><path class="a" d="M239.4,135.2A18,18 0 0 0 231.6,150"/><text x="220.4" y="139.2" text-anchor="middle">β</text><path class="a" d="M176.1,72.5A18,18 0 0 0 195.8,72"/><text x="186.4" y="94.7" text-anchor="middle">γ</text><text x="56" y="152" text-anchor="middle">c</text><text x="80" y="104">a</text><text x="30" y="104" text-anchor="end">b</text><text x="188.8" y="164" text-anchor="middle">kc</text><text x="223.6" y="98.6">ka</text><text x="150.8" y="98.6" text-anchor="end">kb</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Skala podobieństwa</span>
<ul>
<li>Jeśli figury są podobne w skali \(k\), to wszystkie długości (boki, obwody, wysokości, środkowe, promienie okręgów wpisanych i opisanych) mnożą się przez \(k\), a <b>pola – przez \(k^2\)</b>. (Dla brył objętości mnożą się przez \(k^3\).)</li>
<li>Dotyczy to dowolnych <b>wielokątów podobnych</b>: stosunek ich obwodów jest równy skali podobieństwa, a stosunek pól – jej kwadratowi.</li>
</ul>
</div>
<div class="bx met"><span class="t">Gdzie szukać trójkątów podobnych</span>
<ul>
<li>Prosta równoległa do boku trójkąta odcina trójkąt podobny do danego.</li>
<li>W trapezie przekątne dzielą się w stosunku podstaw, a trójkąty przy podstawach są podobne.</li>
<li>W okręgu: kąty wpisane oparte na tym samym łuku są równe, co daje pary równych kątów (cecha kk).</li>
<li>Gdy trójkąty mają wspólną wysokość, stosunek pól jest równy stosunkowi podstaw; gdy mają wspólny kąt, stosunek pól jest iloczynem stosunków boków przy tym kącie.</li>
</ul>
</div>

<h3>Czworokąty</h3>
<div class="bx thm"><span class="t">Kwadrat i prostokąt</span>
<div class="wf"><div>
<ul>
<li><b>Kwadrat o boku \(a\):</b> przekątna \(d=a\sqrt2\) (z twierdzenia Pitagorasa), pole \(P=a^2=\tfrac12d^2\).</li>
<li><b>Prostokąt</b> o bokach \(a,b\): \(P=ab\), przekątna \(d=\sqrt{a^2+b^2}\); przekątne są równe i dzielą się na połowy.</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 190 150" width="190" height="150" role="img" aria-label="Kwadrat o boku a i jego przekątna d"><polygon class="s" points="34,128 144,128 144,18 34,18"/><line class="a" x1="34" y1="128" x2="144" y2="18"/><path class="s" d="M42,128L42,120L34,120"/><path class="s" d="M144,120L136,120L136,128"/><text x="89" y="142" text-anchor="middle">a</text><text x="151" y="77.5">a</text><text x="75" y="66" text-anchor="end">d</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Romb</span>
<div class="wf"><div>
<ul>
<li>Wszystkie boki mają długość \(a\). <b>Pole:</b> \(P=a\cdot h=\tfrac12pq=a^2\sin\alpha\) (\(h\) – wysokość, \(p,q\) – przekątne, \(\alpha\) – kąt rombu).</li>
<li>Przekątne przecinają się <b>pod kątem prostym</b>, dzielą się na połowy i zawierają się w dwusiecznych kątów rombu. Stąd \(a^2=\left(\tfrac p2\right)^2+\left(\tfrac q2\right)^2\).</li>
<li>W romb można wpisać okrąg o promieniu \(r=\tfrac h2\).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 272 150" width="272" height="150" role="img" aria-label="Romb o boku a, przekątnych p i q oraz wysokości h"><polygon class="s" points="24,128 144,128 228.9,43.1 108.9,43.1"/><line class="a" x1="24" y1="128" x2="228.9" y2="43.1"/><line class="a" x1="144" y1="128" x2="108.9" y2="43.1"/><line class="p d" x1="108.9" y1="43.1" x2="108.9" y2="128"/><path class="a" d="M129.1,92L135.6,89.4L132.9,82.9"/><path class="p" d="M108.9,121L115.9,121L115.9,128"/><circle class="dot" cx="126.4" cy="85.6" r="2.4"/><text x="84" y="142" text-anchor="middle">a</text><text x="84.2" y="122.8">p</text><text x="128.6" y="66.9">q</text><text x="98.9" y="90.1" text-anchor="end">h</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Równoległobok</span>
<div class="wf"><div>
<ul>
<li>Przeciwległe boki są równe i równoległe. <b>Pole:</b> \(P=a\cdot h=ab\sin\alpha\) (\(h\) – wysokość opuszczona na bok \(a\)).</li>
<li>Przekątne <b>dzielą się na połowy</b>. Kąty przeciwległe są równe, a suma kątów przy jednym boku wynosi \(180^\circ\): \(\alpha+\beta=180^\circ\).</li>
<li>\(d_1^2+d_2^2=2(a^2+b^2)\). Pole można też liczyć jako \(\tfrac12d_1d_2\sin\varphi\) (\(\varphi\) – kąt między przekątnymi).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 250 150" width="250" height="150" role="img" aria-label="Równoległobok o bokach a i b, wysokości h i kątach α, β"><polygon class="s" points="24,128 176,128 222,46 70,46"/><line class="p d" x1="70" y1="46" x2="70" y2="128"/><path class="p" d="M70,121L77,121L77,128"/><path class="a" d="M44,128A20,20 0 0 0 33.8,110.6"/><text x="52.5" y="115.8" text-anchor="middle">α</text><path class="a" d="M156,128A20,20 0 0 1 185.8,110.6"/><text x="159.3" y="104" text-anchor="middle">β</text><text x="100" y="142" text-anchor="middle">a</text><text x="209" y="91.5">b</text><text x="60" y="91.5" text-anchor="end">h</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Trapez</span>
<div class="wf"><div>
<ul>
<li><b>Pole:</b> \(P=\dfrac{a+b}2\cdot h\) (\(a,b\) – długości podstaw, \(h\) – wysokość).</li>
<li><b>Odcinek łączący środki ramion</b> jest równoległy do podstaw, a jego długość jest równa połowie sumy długości podstaw: \(d=\dfrac{a+b}2\).</li>
<li><b>Suma kątów przyległych do ramienia</b> wynosi \(180^\circ\) (\(\alpha+\beta=180^\circ\)).</li>
<li><b>Trapez równoramienny</b> ma równe ramiona, równe kąty przy każdej podstawie i równe przekątne; można na nim opisać okrąg. W <b>trapezie prostokątnym</b> jedno ramię jest prostopadłe do podstaw.</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 250 150" width="250" height="150" role="img" aria-label="Trapez o podstawach a i b, wysokości h i odcinku d łączącym środki ramion"><polygon class="s" points="22,128 214,128 172,44 80,44"/><line class="p" x1="51" y1="86" x2="193" y2="86"/><line class="a d" x1="80" y1="44" x2="80" y2="128"/><path class="a" d="M80,121L87,121L87,128"/><line class="s d" x1="22" y1="128" x2="172" y2="44"/><circle class="dot" cx="51" cy="86" r="2.4"/><circle class="dot" cx="193" cy="86" r="2.4"/><circle class="dot" cx="97" cy="86" r="2.4"/><path class="a" d="M42,128A20,20 0 0 0 33.4,111.5"/><text x="51.2" y="117.2" text-anchor="middle">α</text><path class="a" d="M95,44A15,15 0 0 1 71.5,56.3"/><text x="92.5" y="72.4" text-anchor="middle">β</text><text x="16" y="141" text-anchor="end">A</text><text x="220" y="141">B</text><text x="178" y="39">C</text><text x="74" y="39" text-anchor="end">D</text><text x="44" y="90.5" text-anchor="end">E</text><text x="200" y="90.5">F</text><text x="103" y="99">G</text><text x="118" y="142" text-anchor="middle">a</text><text x="126" y="33" text-anchor="middle">b</text><text x="116" y="77" text-anchor="middle">d</text><text x="70" y="104.5" text-anchor="end">h</text></svg></div></div>
<p class="note">Skąd \(d=\tfrac{a+b}2\): poprowadź przekątną \(AC\); przecina ona odcinek \(EF\) w punkcie \(G\). Odcinek \(EG\) łączy środki boków trójkąta \(ACD\), więc ma długość \(\tfrac b2\), a \(GF\) łączy środki boków trójkąta \(ABC\), więc ma długość \(\tfrac a2\). Razem \(|EF|=\tfrac{a+b}2\).</p>
</div>
<div class="bx thm"><span class="t">Deltoid</span>
<p>Ma dwie pary sąsiednich boków równych; jego przekątne są prostopadłe, a jedna z nich jest osią symetrii. Pole \(P=\tfrac12d_1d_2\) (tak samo jak dla rombu).</p>
</div>

<h3>Okrąg i koło: styczne, kąty w okręgu</h3>
<div class="bx def"><span class="t">Okrąg, koło, wycinek koła</span>
<div class="wf"><div>
<ul>
<li>\(o(S,r)\) – <b>okrąg</b> o środku \(S\) i promieniu \(r\) (sam brzeg); \(k(S,r)\) – <b>koło</b> (brzeg razem z wnętrzem).</li>
<li>Długość okręgu \(2\pi r\), pole koła \(\pi r^2\).</li>
<li><b>Wycinek koła</b> o kącie środkowym \(\alpha\): pole \(\dfrac\alpha{360^\circ}\cdot\pi r^2\), długość łuku \(\ell=\dfrac\alpha{360^\circ}\cdot2\pi r\). Gdy \(\alpha\) mierzymy w radianach: \(\ell=\alpha r\) i pole \(\tfrac12\alpha r^2\).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 230 168" width="230" height="168" role="img" aria-label="Wycinek koła o promieniu r i kącie środkowym α; łuk o długości ℓ"><path class="f" d="M90,86L141.8,48.4A64,64 0 0 1 141.8,123.6Z"/><circle class="s" cx="90" cy="86" r="64"/><line class="s" x1="90" y1="86" x2="141.8" y2="48.4"/><line class="s" x1="90" y1="86" x2="141.8" y2="123.6"/><path class="p" d="M141.8,48.4A64,64 0 0 1 141.8,123.6"/><path class="a" d="M107.8,73.1A22,22 0 0 1 107.8,98.9"/><text x="126" y="90.5" text-anchor="middle">α</text><circle class="dot" cx="90" cy="86" r="2.4"/><text x="83" y="90.5" text-anchor="end">S</text><text x="108.9" y="61.2" text-anchor="end">r</text><text x="169" y="90.5">ℓ</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Styczna do okręgu</span>
<ul>
<li><b>Styczna jest prostopadła do promienia</b> poprowadzonego do punktu styczności.</li>
<li><b>Twierdzenie o odcinkach stycznych:</b> jeśli styczne do okręgu w punktach \(A\) i \(B\) przecinają się w punkcie \(P\), to \(|PA|=|PB|\).</li>
</ul>
<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 190 160" width="190" height="160" role="img" aria-label="Styczna do okręgu w punkcie A jest prostopadła do promienia SA"><circle class="s" cx="84" cy="84" r="56"/><line class="a" x1="109" y1="11.8" x2="162.6" y2="112.5"/><line class="s" x1="84" y1="84" x2="133.4" y2="57.7"/><path class="s" d="M126.4,61.5L122.6,54.4L129.7,50.6"/><circle class="dot" cx="84" cy="84" r="2.4"/><circle class="dot" cx="133.4" cy="57.7" r="2.4"/><text x="77" y="88.5" text-anchor="end">S</text><text x="139.4" y="52.7">A</text><text x="102.7" y="85.9" text-anchor="end">r</text><text x="103" y="6.8" text-anchor="end">k</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 260 170" width="260" height="170" role="img" aria-label="Dwie styczne poprowadzone z punktu P mają równe odcinki: |PA| = |PB|"><circle class="s" cx="168" cy="85" r="50"/><line class="a" x1="30" y1="85" x2="149.9" y2="38.4"/><line class="a" x1="30" y1="85" x2="149.9" y2="131.6"/><line class="s" x1="168" y1="85" x2="149.9" y2="38.4"/><line class="s" x1="168" y1="85" x2="149.9" y2="131.6"/><path class="s" d="M152.4,44.9L145.9,47.5L143.4,40.9"/><path class="s" d="M152.4,125.1L145.9,122.5L143.4,129.1"/><line class="a" x1="91.4" y1="65.4" x2="88.5" y2="58"/><line class="a" x1="88.5" y1="112" x2="91.4" y2="104.6"/><circle class="dot" cx="30" cy="85" r="2.4"/><circle class="dot" cx="168" cy="85" r="2.4"/><circle class="dot" cx="149.9" cy="38.4" r="2.4"/><circle class="dot" cx="149.9" cy="131.6" r="2.4"/><text x="23" y="89.5" text-anchor="end">P</text><text x="175" y="89.5">S</text><text x="155.9" y="33.4">A</text><text x="155.9" y="144.6">B</text></svg></div></div>
<p class="note">Skąd \(|PA|=|PB|\): trójkąty prostokątne \(PAS\) i \(PBS\) mają wspólną przeciwprostokątną \(PS\) i równe przyprostokątne \(|SA|=|SB|=r\), więc są przystające. Można też policzyć wprost: \(|PA|=\sqrt{|PS|^2-r^2}=|PB|\).</p>
</div>
<div class="bx thm"><span class="t">Kąty w okręgu</span>
<ul>
<li><b>Kąt wpisany</b> (wierzchołek na okręgu) jest równy połowie <b>kąta środkowego</b> opartego na tym samym łuku.</li>
<li>Kąty wpisane oparte na tym samym łuku są równe.</li>
<li>Kąt wpisany oparty na średnicy jest kątem prostym (bo kąt środkowy oparty na średnicy ma \(180^\circ\)).</li>
<li><b>Kąt między styczną a cięciwą</b> jest równy kątowi wpisanemu opartemu na tej cięciwie (leżącemu po jej drugiej stronie).</li>
</ul>
<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 190 170" width="190" height="170" role="img" aria-label="Kąt wpisany ACB ma miarę α, a kąt środkowy ASB oparty na tym samym łuku ma miarę 2α"><circle class="s" cx="95" cy="84" r="64"/><line class="p" x1="95" y1="84" x2="39.6" y2="116"/><line class="p" x1="95" y1="84" x2="150.4" y2="116"/><line class="a" x1="95" y1="20" x2="39.6" y2="116"/><line class="a" x1="95" y1="20" x2="150.4" y2="116"/><path class="p" d="M77.7,94A20,20 0 0 0 112.3,94"/><text x="95" y="122.5" text-anchor="middle">2α</text><path class="a" d="M83,40.8A24,24 0 0 0 107,40.8"/><text x="95" y="61.5" text-anchor="middle">α</text><circle class="dot" cx="95" cy="84" r="2.4"/><circle class="dot" cx="39.6" cy="116" r="2.4"/><circle class="dot" cx="150.4" cy="116" r="2.4"/><circle class="dot" cx="95" cy="20" r="2.4"/><text x="33.6" y="129" text-anchor="end">A</text><text x="156.4" y="129">B</text><text x="95" y="13" text-anchor="middle">C</text><text x="102" y="88.5">S</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 190 170" width="190" height="170" role="img" aria-label="Kąty wpisane oparte na tym samym łuku są równe"><circle class="s" cx="95" cy="90" r="62"/><line class="a" x1="130.6" y1="39.2" x2="56.8" y2="138.9"/><line class="a" x1="130.6" y1="39.2" x2="133.2" y2="138.9"/><line class="a d" x1="59.4" y1="39.2" x2="56.8" y2="138.9"/><line class="a d" x1="59.4" y1="39.2" x2="133.2" y2="138.9"/><path class="a" d="M117.5,56.9A22,22 0 0 0 131.1,61.2"/><text x="120" y="77.1" text-anchor="middle">α</text><path class="a" d="M58.9,61.2A22,22 0 0 0 72.5,56.9"/><text x="70" y="77.1" text-anchor="middle">α</text><circle class="dot" cx="56.8" cy="138.9" r="2.4"/><circle class="dot" cx="133.2" cy="138.9" r="2.4"/><circle class="dot" cx="130.6" cy="39.2" r="2.4"/><circle class="dot" cx="59.4" cy="39.2" r="2.4"/><text x="50.8" y="151.9" text-anchor="end">A</text><text x="139.2" y="151.9">B</text><text x="136.6" y="34.2">C</text><text x="53.4" y="34.2" text-anchor="end">D</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 190 150" width="190" height="150" role="img" aria-label="Kąt wpisany oparty na średnicy jest kątem prostym"><circle class="s" cx="95" cy="78" r="66"/><line class="a" x1="29" y1="78" x2="161" y2="78"/><line class="s" x1="29" y1="78" x2="126" y2="19.7"/><line class="s" x1="126" y1="19.7" x2="161" y2="78"/><path class="s" d="M119.1,23.8L123.2,30.7L130.1,26.6"/><circle class="dot" cx="95" cy="78" r="2.4"/><circle class="dot" cx="29" cy="78" r="2.4"/><circle class="dot" cx="161" cy="78" r="2.4"/><circle class="dot" cx="126" cy="19.7" r="2.4"/><text x="22" y="82.5" text-anchor="end">A</text><text x="168" y="82.5">B</text><text x="126" y="12.7" text-anchor="middle">C</text><text x="95" y="94" text-anchor="middle">S</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 210 170" width="210" height="170" role="img" aria-label="Kąt między styczną a cięciwą jest równy kątowi wpisanemu opartemu na tej cięciwie"><circle class="s" cx="105" cy="80" r="56"/><line class="p" x1="35" y1="136" x2="183" y2="136"/><line class="a" x1="105" y1="136" x2="153.5" y2="52"/><line class="a d" x1="69" y1="37.1" x2="105" y2="136"/><line class="a d" x1="69" y1="37.1" x2="153.5" y2="52"/><path class="p" d="M127,136A22,22 0 0 0 116,116.9"/><text x="135.3" y="123" text-anchor="middle">α</text><path class="a" d="M76.5,57.8A22,22 0 0 0 90.7,40.9"/><text x="95.8" y="64.1" text-anchor="middle">α</text><circle class="dot" cx="105" cy="136" r="2.4"/><circle class="dot" cx="153.5" cy="52" r="2.4"/><circle class="dot" cx="69" cy="37.1" r="2.4"/><text x="99" y="149" text-anchor="end">A</text><text x="159.5" y="47">B</text><text x="63" y="32.1" text-anchor="end">C</text></svg></div></div>
</div>
<div class="bx thm"><span class="t">Dwa okręgi</span>
<p>Dwa okręgi o promieniach \(r_1,r_2\) i odległości środków \(d\) są: styczne zewnętrznie, gdy \(d=r_1+r_2\); styczne wewnętrznie, gdy \(d=|r_1-r_2|\); przecinają się w dwóch punktach, gdy \(|r_1-r_2|&lt;d&lt;r_1+r_2\); rozłączne, gdy \(d>r_1+r_2\) (lub jeden leży wewnątrz drugiego, gdy \(d&lt;|r_1-r_2|\)).</p>
<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 340 100" width="340" height="100" role="img" aria-label="Położenie dwóch okręgów: styczne zewnętrznie, przecinające się, styczne wewnętrznie"><circle class="a" cx="32" cy="44" r="22"/><circle class="p" cx="80" cy="44" r="26"/><circle class="dot" cx="32" cy="44" r="2.4"/><circle class="dot" cx="80" cy="44" r="2.4"/><circle class="a" cx="158" cy="44" r="28"/><circle class="p" cx="198" cy="44" r="26"/><circle class="dot" cx="158" cy="44" r="2.4"/><circle class="dot" cx="198" cy="44" r="2.4"/><circle class="a" cx="278" cy="44" r="36"/><circle class="p" cx="296" cy="44" r="18"/><circle class="dot" cx="278" cy="44" r="2.4"/><circle class="dot" cx="296" cy="44" r="2.4"/><text x="56" y="96.5" text-anchor="middle" class="m">d = r₁ + r₂</text><text x="178" y="96.5" text-anchor="middle" class="m">|r₁ − r₂| &lt; d &lt; r₁ + r₂</text><text x="290" y="96.5" text-anchor="middle" class="m">d = |r₁ − r₂|</text></svg></div></div>
</div>

<h3>Czworokąty wpisane i opisane, potęga punktu, wielokąty foremne</h3>
<div class="bx thm"><span class="t">Czworokąt opisany na okręgu</span>
<div class="wf"><div>
<p>W czworokąt można wpisać okrąg \(\iff\) sumy długości przeciwległych boków są równe: \(a+c=b+d\). Wtedy pole \(P=r\cdot p\), gdzie \(p\) – połowa obwodu.</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 250 196" width="250" height="196" role="img" aria-label="Czworokąt opisany na okręgu: a + c = b + d"><circle class="a" cx="118" cy="96" r="50"/><polygon class="s" points="173.3,121.8 158.6,38.1 60.1,55.4 81.2,175"/><text x="179.3" y="134.8">A</text><text x="164.6" y="33.1">B</text><text x="54.1" y="50.4" text-anchor="end">C</text><text x="75.2" y="188" text-anchor="end">D</text><text x="178.9" y="84.4">a</text><text x="109.3" y="37.8" text-anchor="middle">b</text><text x="57.6" y="119.7" text-anchor="end">c</text><text x="137.2" y="167.4">d</text></svg></div></div>
<p class="note">Skąd \(a+c=b+d\): odcinki stycznych poprowadzonych z jednego wierzchołka są równe. Jeśli odcinki przy kolejnych wierzchołkach mają długości \(x,y,z,t\), to boki wynoszą \(x+y\), \(y+z\), \(z+t\), \(t+x\) – a obie sumy przeciwległych boków są równe \(x+y+z+t\).</p>
</div>
<div class="bx thm"><span class="t">Czworokąt wpisany w okrąg</span>
<div class="wf"><div>
<ul>
<li>Na czworokącie można opisać okrąg \(\iff\) sumy miar przeciwległych kątów są równe i wynoszą \(180^\circ\): \(\alpha+\gamma=\beta+\delta=180^\circ\).</li>
<li><b>Twierdzenie Ptolemeusza:</b> \(|AC|\cdot|BD|=|AB|\cdot|CD|+|BC|\cdot|AD|\).</li>
<li><b>Wzór Brahmagupty:</b> \(P=\sqrt{(p-a)(p-b)(p-c)(p-d)}\) (\(p\) – połowa obwodu).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 240 190" width="240" height="190" role="img" aria-label="Czworokąt wpisany w okrąg: α + γ = β + δ = 180°"><circle class="a" cx="120" cy="94" r="66"/><polygon class="s" points="82.1,148.1 172,134.6 169,49.8 75.8,45"/><path class="p" d="M99.9,145.4A18,18 0 0 0 81,130.1"/><text x="101.7" y="128.5" text-anchor="middle">α</text><path class="p" d="M171.4,116.6A18,18 0 0 0 154.2,137.3"/><text x="148.2" y="119.3" text-anchor="middle">β</text><path class="p" d="M151.1,48.9A18,18 0 0 0 169.7,67.8"/><text x="146.9" y="76.1" text-anchor="middle">γ</text><path class="p" d="M76.9,62.9A18,18 0 0 0 93.8,45.9"/><text x="97.9" y="71.3" text-anchor="middle">δ</text><text x="76.1" y="161.1" text-anchor="end">A</text><text x="178" y="147.6">B</text><text x="175" y="44.8">C</text><text x="69.8" y="40" text-anchor="end">D</text></svg></div></div>
<p class="note">Skąd \(\alpha+\gamma=180^\circ\): kąty \(\alpha\) i \(\gamma\) są wpisane i oparte na dwóch łukach, które razem tworzą cały okrąg (\(360^\circ\)); a każdy kąt wpisany jest połową swojego łuku.</p>
</div>
<div class="bx thm"><span class="t">Potęga punktu względem okręgu</span>
<ul>
<li>Cięciwy \(AB\) i \(CD\) przecinają się w punkcie \(P\): \(|PA|\cdot|PB|=|PC|\cdot|PD|\).</li>
<li>Z punktu \(P\) poza okręgiem poprowadzono sieczną przecinającą okrąg w \(A\) i \(B\) oraz styczną w punkcie \(T\): \(|PT|^2=|PA|\cdot|PB|\). Dla dwóch siecznych \(|PA|\cdot|PB|=|PC|\cdot|PD|\).</li>
</ul>
<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 210 170" width="210" height="170" role="img" aria-label="Cięciwy AB i CD przecinają się w punkcie P: |PA|·|PB| = |PC|·|PD|"><circle class="s" cx="105" cy="85" r="64"/><line class="a" x1="43.2" y1="101.6" x2="161.5" y2="55"/><line class="p" x1="75" y1="28.5" x2="141.7" y2="137.4"/><circle class="dot" cx="43.2" cy="101.6" r="2.4"/><circle class="dot" cx="161.5" cy="55" r="2.4"/><circle class="dot" cx="75" cy="28.5" r="2.4"/><circle class="dot" cx="141.7" cy="137.4" r="2.4"/><circle class="dot" cx="104.8" cy="77.3" r="2.4"/><text x="36.2" y="106.1" text-anchor="end">A</text><text x="168.5" y="59.5">B</text><text x="75" y="21.5" text-anchor="middle">C</text><text x="141.7" y="151.4" text-anchor="middle">D</text><text x="110.8" y="90.3">P</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 290 176" width="290" height="176" role="img" aria-label="Z punktu P poprowadzono styczną PT i sieczną przecinającą okrąg w A i B: |PT|² = |PA|·|PB|"><circle class="s" cx="190" cy="90" r="56"/><line class="a" x1="24" y1="130" x2="159.8" y2="42.9"/><line class="p" x1="24" y1="130" x2="213.8" y2="39.3"/><line class="s d" x1="190" y1="90" x2="159.8" y2="42.9"/><path class="s" d="M163.5,48.8L157.6,52.5L153.9,46.7"/><circle class="dot" cx="24" cy="130" r="2.4"/><circle class="dot" cx="159.8" cy="42.9" r="2.4"/><circle class="dot" cx="135.6" cy="76.6" r="2.4"/><circle class="dot" cx="213.8" cy="39.3" r="2.4"/><text x="17" y="134.5" text-anchor="end">P</text><text x="159.8" y="35.9" text-anchor="middle">T</text><text x="129.6" y="89.6" text-anchor="end">A</text><text x="219.8" y="34.3">B</text><text x="197" y="94.5">S</text><circle class="dot" cx="190" cy="90" r="2.4"/></svg></div></div>
<p class="note">Skąd (cięciwy): trójkąty \(PAC\) i \(PDB\) mają równe kąty wpisane oparte na tych samych łukach i równe kąty wierzchołkowe przy \(P\), więc są podobne, a stąd \(\dfrac{|PA|}{|PD|}=\dfrac{|PC|}{|PB|}\).</p>
</div>
<div class="bx thm"><span class="t">Wielokąty foremne</span>
<div class="wf"><div>
<ul>
<li>Kąt wewnętrzny \(n\)-kąta foremnego: \(\dfrac{(n-2)\cdot180^\circ}n\). Okręgi wpisany i opisany mają wspólny środek.</li>
<li><b>Kwadrat:</b> \(r=\tfrac a2\), \(R=\tfrac{a\sqrt2}2\). <b>Sześciokąt foremny:</b> \(R=a\), \(r=\tfrac{a\sqrt3}2\), \(P=\tfrac{3a^2\sqrt3}2\) (sześć trójkątów równobocznych o boku \(a\)).</li>
<li>Ogólnie \(P=\tfrac12\cdot\text{obwód}\cdot r\).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 200 190" width="200" height="190" role="img" aria-label="Sześciokąt foremny o boku a składa się z sześciu trójkątów równobocznych"><polygon class="s" points="178,95 139,27.5 61,27.5 22,95 61,162.5 139,162.5"/><line class="a" x1="100" y1="95" x2="178" y2="95"/><line class="a" x1="100" y1="95" x2="139" y2="27.5"/><line class="a" x1="100" y1="95" x2="61" y2="27.5"/><line class="a" x1="100" y1="95" x2="22" y2="95"/><line class="a" x1="100" y1="95" x2="61" y2="162.5"/><line class="a" x1="100" y1="95" x2="139" y2="162.5"/><circle class="dot" cx="100" cy="95" r="2.4"/><text x="94" y="90" text-anchor="end">O</text><text x="164.5" y="56.2">a</text><text x="139" y="109" text-anchor="middle">a</text></svg></div></div>
</div>

<h3>Dowody geometryczne</h3>
<div class="bx met"><span class="t">Jak podejść do dowodu</span>
<ol>
<li><b>Narysuj dokładny rysunek</b> i zapisz, co jest dane, a co masz wykazać. Oznacz kąty literami \(\alpha,\beta\) – często wszystko wyraża się przez dwa kąty.</li>
<li>Szukaj <b>trójkątów podobnych lub przystających</b>; uzasadnij równości kątów (wierzchołkowe, odpowiadające, wpisane w okrąg).</li>
<li>Użyj <b>pól</b> (trójkąty o wspólnej wysokości) lub <b>trygonometrii</b> (twierdzenie sinusów i cosinusów) – często sprowadza to dowód do rachunku.</li>
<li>Dorysuj <b>pomocniczy odcinek</b>: wysokość, odcinek równoległy, przekątną, okrąg opisany; użyj <b>współrzędnych</b>, gdy figura jest „prostokątna”.</li>
<li>Zapisz dowód zdaniami: „z twierdzenia … mamy …”, „zatem …”, kończąc tezą.</li>
</ol>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Wykaż, że środkowe trójkąta dzielą go na sześć trójkątów o równych polach (rysunek środkowych – wyżej). Trójkąty o równych podstawach leżących na jednej prostej i wspólnym wierzchołku mają równe pola, więc \([AFG]=[FBG]=x\), \([BDG]=[DCG]=y\), \([CEG]=[EAG]=z\). Każda środkowa dzieli trójkąt na dwie części o równych polach. Z środkowej \(AD\): \(2x+y=y+2z\), czyli \(x=z\). Ze środkowej \(BE\): \(2x+z=2y+z\), czyli \(x=y\). Zatem \(x=y=z\) i wszystkie sześć pól jest równych.</p>
</div>
`;
