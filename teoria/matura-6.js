(window.THEORY = window.THEORY || {})['matura-6'] = String.raw`
<h3>Kąty, trójkąty i ich elementy</h3>
<div class="bx thm"><span class="t">Kąty i proste równoległe</span>
<ul>
<li>Kąty wierzchołkowe są równe; kąty przyległe dają razem \(180^\circ\). Dla prostych równoległych przeciętych trzecią: kąty odpowiadające i naprzemianległe są równe.</li>
<li>Suma kątów wewnętrznych \(n\)-kąta wynosi \((n-2)\cdot180^\circ\); każdy kąt wielokąta foremnego ma \(\dfrac{(n-2)\cdot180^\circ}n\). Suma kątów zewnętrznych wielokąta wypukłego to \(360^\circ\). Kąt zewnętrzny trójkąta jest równy sumie dwóch kątów wewnętrznych do niego nieprzyległych.</li>
<li><b>Nierówność trójkąta:</b> \(|b-c|&lt;a&lt;b+c\). Naprzeciw większego boku leży większy kąt.</li>
</ul>
</div>
<div class="bx thm"><span class="t">Twierdzenie Talesa i o dwusiecznej</span>
<ul>
<li><b>Tales:</b> proste równoległe przecinające ramiona kąta wyznaczają proporcjonalne odcinki: \(\dfrac{|OA|}{|OA'|}=\dfrac{|OB|}{|OB'|}\) (i \(\dfrac{|OA|}{|AB|}=\dfrac{|OA'|}{|A'B'|}\)). Twierdzenie odwrotne pozwala wnioskować o równoległości.</li>
<li><b>Dwusieczna kąta w trójkącie</b> dzieli przeciwległy bok na odcinki proporcjonalne do pozostałych boków: \(\dfrac{|AD|}{|DB|}=\dfrac{|AC|}{|BC|}\), gdzie \(D\in AB\) leży na dwusiecznej kąta \(C\).</li>
</ul>
</div>
<div class="bx def"><span class="t">Linie w trójkącie</span>
<ul>
<li><b>Wysokości</b> przecinają się w ortocentrum. <b>Środkowe</b> (do środków boków) przecinają się w środku ciężkości, który dzieli każdą w stosunku \(2:1\) licząc od wierzchołka; \(m_a^2=\dfrac{2b^2+2c^2-a^2}4\).</li>
<li><b>Dwusieczne</b> przecinają się w środku okręgu wpisanego. <b>Symetralne boków</b> – w środku okręgu opisanego.</li>
<li><b>Odcinek łączący środki dwóch boków</b> jest równoległy do trzeciego i ma połowę jego długości.</li>
</ul>
</div>
<div class="bx thm"><span class="t">Trójkąty szczególne</span>
<ul>
<li><b>Prostokątny:</b> \(a^2+b^2=c^2\); wysokość na przeciwprostokątną \(h\): \(h^2=pq\), \(a^2=pc\), \(b^2=qc\) (\(p,q\) – rzuty przyprostokątnych), \(h=\dfrac{ab}c\); środek okręgu opisanego to środek przeciwprostokątnej, \(R=\tfrac c2\); \(r=\dfrac{a+b-c}2\).</li>
<li><b>Równoboczny</b> o boku \(a\): \(h=\dfrac{a\sqrt3}2\), \(P=\dfrac{a^2\sqrt3}4\), \(R=\dfrac{a\sqrt3}3\), \(r=\dfrac{a\sqrt3}6\) (\(R=2r\)).</li>
<li>Połowa kwadratu: boki \(1:1:\sqrt2\) (kąty \(45^\circ\)); połowa trójkąta równobocznego: \(1:\sqrt3:2\) (kąty \(30^\circ,60^\circ,90^\circ\)).</li>
</ul>
</div>

<h3>Twierdzenia Pitagorasa, sinusów i cosinusów, pola trójkątów</h3>
<div class="bx thm"><span class="t">Wzory na pole trójkąta</span>
\[P=\tfrac12ah_a=\tfrac12ab\sin\gamma=\frac{abc}{4R}=r\cdot p=\sqrt{p(p-a)(p-b)(p-c)}\qquad\left(p=\tfrac{a+b+c}2\right).\]
<p>Stąd \(R=\dfrac{abc}{4P}=\dfrac a{2\sin\alpha}\) oraz \(r=\dfrac Pp\). Twierdzenie sinusów: \(\dfrac a{\sin\alpha}=2R\); cosinusów: \(c^2=a^2+b^2-2ab\cos\gamma\).</p>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>W trójkącie o bokach \(13,14,15\): \(p=21\), \(P=\sqrt{21\cdot8\cdot7\cdot6}=84\), \(r=\tfrac{84}{21}=4\), \(R=\tfrac{13\cdot14\cdot15}{4\cdot84}=\tfrac{65}8\), wysokość na bok \(14\): \(h=\tfrac{2\cdot84}{14}=12\).</p>
</div>

<h3>Podobieństwo i przystawanie figur, pola figur</h3>
<div class="bx thm"><span class="t">Cechy</span>
<ul>
<li><b>Przystawanie trójkątów:</b> bbb (trzy boki), bkb (dwa boki i kąt między nimi), kbk (bok i dwa przyległe kąty).</li>
<li><b>Podobieństwo trójkątów:</b> bbb (proporcjonalne boki), bkb (proporcjonalne dwa boki i równy kąt między nimi), kkk (dwa równe kąty).</li>
<li>W figurach podobnych w skali \(k\): długości odcinków (obwody) mnożą się przez \(k\), <b>pola przez \(k^2\)</b>. Stosunek wysokości, środkowych, promieni okręgów wpisanych i opisanych także \(k\).</li>
</ul>
</div>
<ul>
<li>Typowe pary trójkątów podobnych: z prostej równoległej do boku trójkąta; w trapezie (przekątne dzielą się w stosunku podstaw, trójkąty przy podstawach są podobne); ze wspólnym kątem i parą równych kątów (w okręgu).</li>
<li>Gdy trójkąty mają wspólną wysokość, stosunek pól jest równy stosunkowi podstaw; gdy wspólny kąt – stosunek pól jest iloczynem stosunków boków przy tym kącie.</li>
</ul>

<h3>Czworokąty i wielokąty foremne</h3>
<div class="bx thm"><span class="t">Czworokąty (pola)</span>
<ul>
<li><b>Równoległobok:</b> \(P=ah=ab\sin\alpha=\tfrac12d_1d_2\sin\varphi\); przekątne dzielą się na połowy; \(d_1^2+d_2^2=2(a^2+b^2)\).</li>
<li><b>Romb:</b> \(P=ah=a^2\sin\alpha=\tfrac12d_1d_2\); przekątne są prostopadłe, są dwusiecznymi kątów; \(r=\tfrac h2\).</li>
<li><b>Prostokąt, kwadrat:</b> \(P=ab\), \(P=a^2\); przekątna kwadratu \(a\sqrt2\).</li>
<li><b>Trapez</b> o podstawach \(a,b\) i wysokości \(h\): \(P=\dfrac{a+b}2h\); odcinek łączący środki ramion ma długość \(\dfrac{a+b}2\). Trapez równoramienny ma równe przekątne; można go wpisać w okrąg.</li>
<li><b>Deltoid:</b> \(P=\tfrac12d_1d_2\) (przekątne prostopadłe).</li>
</ul>
</div>
<div class="bx thm"><span class="t">Czworokąt wpisany i opisany</span>
<ul>
<li><b>Wpisany w okrąg</b> \(\iff\) sumy przeciwległych kątów równe \(180^\circ\). Wzór Brahmagupty: \(P=\sqrt{(p-a)(p-b)(p-c)(p-d)}\). Twierdzenie Ptolemeusza: \(|AC|\cdot|BD|=|AB||CD|+|BC||AD|\).</li>
<li><b>Opisany na okręgu</b> \(\iff\) sumy długości przeciwległych boków równe: \(a+c=b+d\); wtedy \(P=r\cdot p\) (\(p\) – półobwód).</li>
</ul>
</div>
<div class="bx thm"><span class="t">Wielokąty foremne</span>
<p>Kąt wewnętrzny \(\dfrac{(n-2)180^\circ}n\); okręgi wpisany i opisany mają wspólny środek; kwadrat: \(r=\tfrac a2\), \(R=\tfrac{a\sqrt2}2\); sześciokąt: \(R=a\), \(r=\tfrac{a\sqrt3}2\), \(P=\tfrac{3a^2\sqrt3}2\) (sześć trójkątów równobocznych).</p>
</div>

<h3>Okrąg i koło: kąty, styczne, potęga punktu</h3>
<div class="bx def"><span class="t">Okrąg i koło</span>
<p>Długość okręgu \(2\pi r\), pole koła \(\pi r^2\). Długość łuku o kącie środkowym \(\alpha\): \(l=\dfrac\alpha{360^\circ}\cdot2\pi r\); pole wycinka: \(\dfrac\alpha{360^\circ}\cdot\pi r^2\).</p>
</div>
<div class="bx thm"><span class="t">Kąty w okręgu</span>
<ul>
<li><b>Kąt wpisany</b> jest równy połowie kąta środkowego opartego na tym samym łuku. Kąty wpisane oparte na tym samym łuku są równe. Kąt wpisany oparty na średnicy jest prosty (<b>twierdzenie Talesa</b>).</li>
<li><b>Kąt między styczną a cięciwą</b> jest równy kątowi wpisanemu opartemu na tej cięciwie (po przeciwnej stronie).</li>
<li>Styczna jest prostopadła do promienia poprowadzonego do punktu styczności. Odcinki dwóch stycznych poprowadzonych z jednego punktu są równe.</li>
</ul>
</div>
<div class="bx thm"><span class="t">Potęga punktu</span>
<ul>
<li>Cięciwy \(AB\) i \(CD\) przecinają się w punkcie \(P\): \(|PA|\cdot|PB|=|PC|\cdot|PD|\).</li>
<li>Z punktu \(P\) poza okręgiem poprowadzono sieczną przez \(A,B\) i styczną w \(T\): \(|PT|^2=|PA|\cdot|PB|\); dla dwóch siecznych \(|PA|\cdot|PB|=|PC|\cdot|PD|\).</li>
</ul>
</div>
<ul>
<li><b>Dwa okręgi</b> o promieniach \(r_1,r_2\) i odległości środków \(d\): styczne zewnętrznie \(d=r_1+r_2\), wewnętrznie \(d=|r_1-r_2|\); przecinają się dla \(|r_1-r_2|&lt;d&lt;r_1+r_2\).</li>
<li>Okrąg opisany na trójkącie ma środek w punkcie przecięcia symetralnych; wpisany – dwusiecznych; promienie: \(R=\dfrac{abc}{4P}\), \(r=\dfrac Pp\).</li>
</ul>

<h3>Dowody geometryczne</h3>
<div class="bx met"><span class="t">Jak podejść do dowodu</span>
<ol>
<li><b>Narysuj dokładny rysunek</b> i zapisz, co dane, a co masz wykazać. Oznacz kąty literami \(\alpha,\beta\) – często wszystko wyraża się przez dwa kąty.</li>
<li>Szukaj <b>trójkątów podobnych lub przystających</b>; uzasadnij równości kątów (wierzchołkowe, odpowiadające, wpisane w okrąg).</li>
<li>Użyj <b>pól</b> (trójkąty o wspólnej wysokości) lub <b>trygonometrii</b> (twierdzenie sinusów i cosinusów) – często sprowadza dowód do rachunku.</li>
<li>Dorysuj <b>pomocniczy odcinek</b>: wysokość, odcinek równoległy, przekątną, okrąg opisany; użyj <b>współrzędnych</b>, gdy figura jest „prostokątna”.</li>
<li>Zapisz dowód zdaniami: „z twierdzenia … mamy …”, „zatem …”, kończąc tezą.</li>
</ol>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Wykaż, że środkowe trójkąta dzielą go na sześć trójkątów o równych polach. Trójkąty o wspólnym wierzchołku i podstawach równych leżących na jednej prostej mają równe pola (równe podstawy i wspólna wysokość); każda środkowa dzieli trójkąt na dwa trójkąty o polu \(\tfrac12P\), a stosunek \(2:1\) w środku ciężkości daje po \(\tfrac16P\) na każdy z sześciu trójkątów.</p>
</div>
`;
