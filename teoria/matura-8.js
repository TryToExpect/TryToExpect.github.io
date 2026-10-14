(window.THEORY = window.THEORY || {})['matura-8'] = String.raw`
<h3>Proste i płaszczyzny w przestrzeni, kąty</h3>
<div class="bx def"><span class="t">Wzajemne położenie</span>
<ul>
<li><b>Dwie proste:</b> równoległe (leżą w jednej płaszczyźnie, brak punktów wspólnych), przecinające się (jeden punkt wspólny), <b>skośne</b> (nie leżą w jednej płaszczyźnie).</li>
<li><b>Prosta i płaszczyzna:</b> prosta leży w płaszczyźnie, jest do niej równoległa albo ją przecina w jednym punkcie. <b>Dwie płaszczyzny:</b> równoległe albo przecinają się wzdłuż prostej (krawędzi).</li>
<li>Prosta jest <b>prostopadła do płaszczyzny</b>, gdy jest prostopadła do każdej prostej tej płaszczyzny mającej z nią punkt wspólny. Wystarczy sprawdzić prostopadłość do dwóch przecinających się prostych tej płaszczyzny. Odległość punktu od płaszczyzny to długość odcinka prostopadłego.</li>
</ul>
</div>
<div class="bx thm"><span class="t">Kąty</span>
<ul>
<li><b>Kąt prostej z płaszczyzną:</b> kąt między prostą a jej <b>rzutem prostokątnym</b> na tę płaszczyznę (kąt ostry). W bryłach: kąt przekątnej lub krawędzi z płaszczyzną podstawy to kąt w trójkącie prostokątnym o przyprostokątnej-wysokości i przyprostokątnej-rzucie.</li>
<li><b>Kąt dwuścienny</b> między płaszczyznami: kąt między prostymi leżącymi w tych płaszczyznach i prostopadłymi do krawędzi w jednym jej punkcie (kąt liniowy). Kąt nachylenia ściany do podstawy to kąt między wysokością ściany (prostopadłą do krawędzi podstawy) a jej rzutem na podstawę.</li>
<li><b>Twierdzenie o trzech prostych prostopadłych:</b> niech \(k\) będzie prostą, która nie jest równoległa ani prostopadła do płaszczyzny \(\pi\), a \(\ell\) prostą zawartą w \(\pi\) i przechodzącą przez punkt wspólny \(k\) i \(\pi\). Wtedy \(\ell\perp k\iff\ell\perp k'\), gdzie \(k'\) jest rzutem prostokątnym prostej \(k\) na \(\pi\). Używamy go, by wykazać prostopadłość wysokości ściany bocznej do krawędzi podstawy (rzutem tej wysokości na podstawę jest odcinek prostopadły do krawędzi).</li>
<li><b>Kąt między prostymi skośnymi:</b> kąt między prostymi do nich równoległymi, przecinającymi się.</li>
</ul>
</div>
<div class="fg"><svg class="fig" viewBox="0 0 280 192" width="280" height="192" role="img" aria-label="Kat nachylenia prostej k do plaszczyzny P: kat miedzy k a jej rzutem prostokatnym k prim"><polygon class="f" points="22,164 216,164 266,122 72,122"/><polygon class="s" points="22,164 216,164 266,122 72,122"/><line class="s d w" x1="84" y1="36" x2="84" y2="142"/><line class="a" x1="170" y1="150" x2="84" y2="36"/><line class="p" x1="170" y1="150" x2="84" y2="142"/><path class="s w" d="M84,134 L92,134.8 L92,142.8"/><path class="a" d="M152,121.2 A34,34 0 0 0 136.1,147"/><circle class="dot" cx="170" cy="150" r="3"/><circle class="dot" cx="84" cy="36" r="3"/><circle class="dot" cx="84" cy="142" r="3"/><text class="ac" x="122" y="112" text-anchor="middle">α</text><text x="77" y="40" text-anchor="end">T</text><text x="78" y="158" text-anchor="end">T′</text><text x="178" y="144" text-anchor="start">O</text><text class="ac" x="118" y="78" text-anchor="end">k</text><text class="pn" x="124" y="168" text-anchor="middle">k′</text><text x="238" y="156" text-anchor="middle">P</text></svg></div>
<p class="note">Kąt prostej \(k\) z płaszczyzną \(P\) to kąt \(\alpha\) między \(k\) a jej rzutem prostokątnym \(k\prime\) na \(P\) (odcinek \(TT\prime\) jest prostopadły do płaszczyzny).</p>
<div class="bx met"><span class="t">Metoda</span>
<p>Prawie każde zadanie z kątem lub odległością sprowadza się do wskazania <b>trójkąta prostokątnego</b> w odpowiedniej płaszczyźnie (przekroju) i użycia twierdzenia Pitagorasa lub funkcji trygonometrycznych. Narysuj ten trójkąt osobno z oznaczonymi długościami.</p>
</div>

<h3>Graniastosłupy i ostrosłupy (pola, objętości, kąty)</h3>
<div class="bx thm"><span class="t">Graniastosłup</span>
<ul>
<li>\(V=P_p\cdot H\), \(\ P_c=2P_p+P_b\), gdzie \(P_b\) – suma pól ścian bocznych (dla graniastosłupa prostego: obwód podstawy razy wysokość).</li>
<li><b>Prosty</b> – krawędzie boczne prostopadłe do podstaw; <b>prawidłowy</b> – prosty o podstawie wielokąta foremnego.</li>
<li><b>Prostopadłościan</b> \(a\times b\times c\): \(V=abc\), \(P_c=2(ab+bc+ca)\), przekątna \(d=\sqrt{a^2+b^2+c^2}\). <b>Sześcian:</b> \(V=a^3\), \(P_c=6a^2\), przekątna \(a\sqrt3\), przekątna ściany \(a\sqrt2\).</li>
</ul>
</div>
<div class="fg"><svg class="fig" viewBox="0 0 244 186" width="244" height="186" role="img" aria-label="Prostopadloscian: przekatna bryly d, przekatna podstawy i kat beta nachylenia przekatnej do podstawy"><polygon class="f" points="30,152 180,120 180,38"/><line class="s" x1="30" y1="152" x2="132" y2="152"/><line class="s" x1="132" y1="152" x2="180" y2="120"/><line class="s" x1="30" y1="152" x2="30" y2="70"/><line class="s" x1="132" y1="152" x2="132" y2="70"/><line class="s" x1="180" y1="120" x2="180" y2="38"/><line class="s" x1="30" y1="70" x2="132" y2="70"/><line class="s" x1="132" y1="70" x2="180" y2="38"/><line class="s" x1="180" y1="38" x2="78" y2="38"/><line class="s" x1="78" y1="38" x2="30" y2="70"/><line class="s d w" x1="78" y1="120" x2="30" y2="152"/><line class="s d w" x1="78" y1="120" x2="180" y2="120"/><line class="s d w" x1="78" y1="120" x2="78" y2="38"/><line class="a" x1="30" y1="152" x2="180" y2="38"/><line class="p d" x1="30" y1="152" x2="180" y2="120"/><path class="a" d="M65.2,144.5 A36,36 0 0 0 58.7,130.2"/><text x="24" y="166" text-anchor="end">A</text><text x="136" y="166" text-anchor="start">B</text><text x="187" y="124" text-anchor="start">C</text><text x="186" y="40" text-anchor="start">C′</text><text class="ac" x="80" y="168" text-anchor="middle">a</text><text class="ac" x="168" y="146" text-anchor="start">b</text><text class="ac" x="140" y="114" text-anchor="start">c</text><text class="ac" x="88" y="88" text-anchor="end">d</text><text class="ac" x="82" y="128" text-anchor="middle">β</text></svg></div>
<p class="note">Kąt \(\beta\) nachylenia przekątnej bryły do podstawy leży w trójkącie prostokątnym \(ACC\prime\): \(\operatorname{tg}\beta=\dfrac{c}{\sqrt{a^2+b^2}}\).</p>
<div class="bx ex"><span class="t">Przykład</span>
<p>Prostopadłościan \(3\times4\times12\): przekątna podstawy \(\sqrt{3^2+4^2}=5\), przekątna bryły \(d=\sqrt{3^2+4^2+12^2}=\sqrt{169}=13\), \(\operatorname{tg}\beta=\tfrac{12}5\).</p>
</div>

<div class="bx thm"><span class="t">Ostrosłup</span>
<ul>
<li>\(V=\tfrac13P_p\cdot H\), \(\ P_c=P_p+P_b\). <b>Spodek wysokości</b> ostrosłupa to ten koniec wysokości, który leży w płaszczyźnie podstawy.</li>
<li><b>Twierdzenia o ostrosłupach.</b> (1) Jeśli wszystkie krawędzie boczne są równe (lub tworzą z płaszczyzną podstawy równe kąty), to na podstawie można opisać okrąg, którego środkiem jest spodek wysokości. (2) Jeśli wszystkie ściany boczne tworzą z podstawą równe kąty (lub wysokości wszystkich ścian bocznych, poprowadzone z wierzchołka ostrosłupa, są równe), to w podstawę można wpisać okrąg, którego środkiem jest spodek wysokości.</li>
<li><b>Ostrosłup prawidłowy:</b> w podstawie wielokąt foremny, a spodek wysokości jest jego środkiem (równoważnie: wszystkie krawędzie boczne są równe, a podstawa jest wielokątem foremnym). W prawidłowym czworokątnym podstawą jest kwadrat, a spodkiem wysokości punkt przecięcia jego przekątnych; w prawidłowym trójkątnym – trójkąt równoboczny i punkt przecięcia jego wysokości. Wszystkie krawędzie boczne mają równą długość \(b\), ściany boczne są przystającymi trójkątami równoramiennymi; ich wysokość \(h_s\) („apotem”) spełnia \(h_s^2=b^2-\left(\tfrac a2\right)^2\) i \(h_s^2=H^2+r^2\), gdzie \(r\) – promień okręgu <b>wpisanego</b> w podstawę. Krawędź boczna: \(b^2=H^2+R^2\), gdzie \(R\) – promień okręgu <b>opisanego</b> na podstawie.</li>
<li><b>Kąt nachylenia krawędzi bocznej do podstawy:</b> \(\operatorname{tg}\alpha=\dfrac HR\). <b>Kąt nachylenia ściany bocznej do podstawy:</b> \(\operatorname{tg}\beta=\dfrac Hr\).</li>
<li><b>Czworościan foremny</b> (ostrosłup, którego wszystkie ściany są trójkątami równobocznymi; krawędź \(a\)): \(H=\dfrac{a\sqrt6}3\), \(V=\dfrac{a^3\sqrt2}{12}\), \(P_c=a^2\sqrt3\); promień kuli opisanej \(R_k=\dfrac{a\sqrt6}4\), promień kuli wpisanej \(r_k=\dfrac{a\sqrt6}{12}\).</li>
</ul>
</div>
<div class="tw"><table>
<thead><tr><th>Podstawa (bok \(a\))</th><th class="c">promień wpisanego \(r\)</th><th class="c">promień opisanego \(R\)</th><th class="c">pole</th></tr></thead>
<tbody>
<tr><td>trójkąt równoboczny</td><td class="c">\(\tfrac{a\sqrt3}6\)</td><td class="c">\(\tfrac{a\sqrt3}3\)</td><td class="c">\(\tfrac{a^2\sqrt3}4\)</td></tr>
<tr><td>kwadrat</td><td class="c">\(\tfrac a2\)</td><td class="c">\(\tfrac{a\sqrt2}2\)</td><td class="c">\(a^2\)</td></tr>
<tr><td>sześciokąt foremny</td><td class="c">\(\tfrac{a\sqrt3}2\)</td><td class="c">\(a\)</td><td class="c">\(\tfrac{3a^2\sqrt3}2\)</td></tr>
</tbody></table></div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Ostrosłup prawidłowy czworokątny o krawędzi podstawy \(a=6\) i wysokości \(H=4\): \(r=3\), \(R=3\sqrt2\); wysokość ściany bocznej \(h_s=\sqrt{4^2+3^2}=5\); \(P_b=4\cdot\tfrac12\cdot6\cdot5=60\); \(P_c=36+60=96\); \(V=\tfrac13\cdot36\cdot4=48\). Krawędź boczna \(b=\sqrt{16+18}=\sqrt{34}\). Kąt nachylenia ściany do podstawy: \(\operatorname{tg}\beta=\tfrac43\).</p>
<div class="fg"><svg class="fig" viewBox="0 0 300 252" width="300" height="252" role="img" aria-label="Ostroslup prawidlowy czworokatny: wysokosc H, promien okregu wpisanego r i wysokosc sciany bocznej h_s"><polygon class="f" points="149,93 149,193 115,218"/><line class="s" x1="40" y1="218" x2="190" y2="218"/><line class="s" x1="190" y1="218" x2="258" y2="168"/><line class="s" x1="149" y1="93" x2="40" y2="218"/><line class="s" x1="149" y1="93" x2="190" y2="218"/><line class="s" x1="149" y1="93" x2="258" y2="168"/><line class="s d w" x1="40" y1="218" x2="108" y2="168"/><line class="s d w" x1="108" y1="168" x2="258" y2="168"/><line class="s d w" x1="149" y1="93" x2="108" y2="168"/><line class="a d" x1="149" y1="93" x2="149" y2="193"/><line class="a d" x1="149" y1="193" x2="115" y2="218"/><line class="a" x1="149" y1="93" x2="115" y2="218"/><circle class="dot" cx="149" cy="193" r="2.6"/><text x="149" y="85" text-anchor="middle">S</text><text x="33" y="230" text-anchor="end">A</text><text x="196" y="232" text-anchor="start">B</text><text x="266" y="172" text-anchor="start">C</text><text x="101" y="164" text-anchor="end">D</text><text x="158" y="190" text-anchor="start">O</text><text x="108" y="234" text-anchor="end">M</text><text class="ac" x="156" y="149" text-anchor="start">H</text><text class="ac" x="141" y="213" text-anchor="end">r</text><text class="ac" x="124" y="157.5" text-anchor="end">h<tspan dy="3" font-size="10">s</tspan></text></svg></div>
<p class="note">Zacieniowany trójkąt \(SOM\) jest prostokątny, z przyprostokątnymi \(H=4\), \(r=3\) i przeciwprostokątną \(h_s=5\); kąt \(\beta\) leży przy wierzchołku \(M\).</p>
</div>

<h3>Bryły obrotowe: walec, stożek, kula</h3>
<div class="bx thm"><span class="t">Walec (\(r\) – promień podstawy, \(H\) – wysokość)</span>
<p>\(V=\pi r^2H\), \(\ P_b=2\pi rH\), \(\ P_c=2\pi r(r+H)\). Przekrój osiowy: prostokąt \(2r\times H\). Rozwinięcie powierzchni bocznej: prostokąt \(2\pi r\times H\).</p>
</div>
<div class="bx thm"><span class="t">Stożek (\(l\) – tworząca, \(l^2=r^2+H^2\))</span>
<ul>
<li>\(V=\tfrac13\pi r^2H\), \(\ P_b=\pi rl\), \(\ P_c=\pi r(r+l)\).</li>
<li>Przekrój osiowy: trójkąt równoramienny o podstawie \(2r\), ramionach \(l\), wysokości \(H\). Kąt rozwarcia stożka (kąt przy wierzchołku w przekroju osiowym) jest równy \(2\alpha\), gdzie \(\alpha\) to kąt między osią a tworzącą, \(\sin\alpha=\tfrac rl\).</li>
<li><b>Rozwinięcie powierzchni bocznej</b> – wycinek koła o promieniu \(l\) i długości łuku \(2\pi r\); kąt wycinka \(\varphi=\dfrac r l\cdot360^\circ\).</li>
<li><b>Stożek ścięty</b> (promienie \(R>r\), wysokość \(H\)): \(V=\dfrac{\pi H}3(R^2+Rr+r^2)\).</li>
</ul>
</div>
<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 176 152" width="176" height="152" role="img" aria-label="Przekroj osiowy stozka: promien podstawy r, wysokosc H, tworzaca l i kat rozwarcia 2 alfa"><polygon class="f" points="88,14 28,112 148,112"/><polygon class="s" points="88,14 28,112 148,112"/><line class="a d" x1="88" y1="14" x2="88" y2="112"/><path class="s w" d="M96,112 L96,104 L88,104"/><path class="a" d="M73,37.7 A28,28 0 0 0 103,37.7"/><circle class="dot" cx="88" cy="112" r="2.6"/><text class="ac" x="82" y="66" text-anchor="end">H</text><text class="ac" x="118" y="130" text-anchor="middle">r</text><text class="ac" x="132" y="58" text-anchor="start">l</text><text class="ac" x="88" y="56" text-anchor="middle">2α</text><text class="m" x="88" y="148" text-anchor="middle">przekrój osiowy</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 190 160" width="190" height="160" role="img" aria-label="Rozwiniecie powierzchni bocznej stozka: wycinek kola o promieniu l i luku dlugosci 2 pi r"><path class="s f2" d="M95,36 L11.3,8.8 A88,88 0 1 0 178.7,8.8 Z"/><path class="a" d="M77.9,30.4 A18,18 0 1 0 112.1,30.4"/><text class="ac" x="95" y="80" text-anchor="middle">φ</text><text class="ac" x="49.2" y="15.4" text-anchor="end">l</text><text class="ac" x="95" y="139" text-anchor="middle">łuk 2πr</text><text class="m" x="95" y="156" text-anchor="middle">wycinek koła</text></svg></div></div>
<p class="note">Rozwinięcie powierzchni bocznej to wycinek koła o promieniu \(l\), którego łuk ma długość \(2\pi r\); kąt wycinka \(\varphi=\dfrac rl\cdot360^\circ\).</p>
<div class="bx ex"><span class="t">Przykład</span>
<p>Stożek o promieniu podstawy \(r=3\) i wysokości \(H=4\): \(l=\sqrt{3^2+4^2}=5\), \(V=\tfrac13\pi\cdot9\cdot4=12\pi\), \(P_b=\pi\cdot3\cdot5=15\pi\), \(P_c=\pi\cdot3\cdot(3+5)=24\pi\). Kąt wycinka: \(\varphi=\dfrac35\cdot360^\circ=216^\circ\).</p>
</div>

<div class="bx thm"><span class="t">Kula (promień \(R\))</span>
<p>\(V=\tfrac43\pi R^3\), \(\ P=4\pi R^2\). Przekrój kuli płaszczyzną odległą o \(d\) od środka jest kołem o promieniu \(\sqrt{R^2-d^2}\). Kula wpisana w sześcian o krawędzi \(a\): \(R=\tfrac a2\); kula wpisana w walec (możliwa tylko, gdy \(H=2r\)): \(R=r\); kula opisana na sześcianie: \(R=\tfrac{a\sqrt3}2\). Kula wpisana w stożek (promień kuli to promień okręgu wpisanego w przekrój osiowy): \(r_k=\dfrac{rH}{r+l}\).</p>
</div>

<div class="bx ex"><span class="t">Przykład</span>
<p>Kula opisana na sześcianie o krawędzi \(a=4\): \(R=\dfrac{4\sqrt3}2=2\sqrt3\), \(V=\tfrac43\pi(2\sqrt3)^3=\tfrac43\pi\cdot24\sqrt3=32\sqrt3\,\pi\), \(P=4\pi\cdot12=48\pi\).</p>
</div>

<h3>Przekroje brył i bryły podobne</h3>
<ul>
<li><b>Bryły podobne w skali \(k\):</b> długości \(\times k\), pola powierzchni \(\times k^2\), objętości \(\times k^3\). Przykład: płaszczyzna równoległa do podstawy ostrosłupa lub stożka odcina bryłę podobną do całej w skali \(k=\dfrac{H_1}{H}\) (stosunek wysokości).</li>
<li><b>Przekroje płaszczyzną</b> prowadzimy przez wskazane punkty; przekrój wielościanu jest wielokątem, którego boki leżą na ścianach. Przekrój osiowy bryły obrotowej: walec – prostokąt, stożek – trójkąt, kula – koło wielkie. Przekrój ostrosłupa płaszczyzną przez wierzchołek – trójkąt.</li>
<li><b>Wyznaczanie długości w przekroju:</b> wygodny jest układ współrzędnych w przestrzeni (\(A=(0,0,0)\) itd.) i wzory: \(|PQ|=\sqrt{\Delta x^2+\Delta y^2+\Delta z^2}\), iloczyn skalarny do kąta, iloczyn wektorowy do pola trójkąta.</li>
</ul>
<div class="bx met"><span class="t">Strategia w zadaniach</span>
<ol>
<li>Wypisz, co dane i czego szukasz; zaznacz na rysunku wysokość bryły i kąt, o który pytają.</li>
<li>Wskaż trójkąt prostokątny zawierający ten kąt; policz potrzebne odcinki z podstawy (wysokość, promienie okręgów wpisanego i opisanego).</li>
<li>Wyznacz brakujące elementy bryły (wysokość, krawędź boczną, wysokość ściany), a na końcu pole lub objętość.</li>
<li>Zadania z parametrem lub optymalizacyjne: zapisz pole lub objętość jako funkcję jednej zmiennej (z dziedziną!) i zbadaj ją pochodną.</li>
</ol>
</div>
`;
