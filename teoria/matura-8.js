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
<div class="bx thm"><span class="t">Kula (promień \(R\))</span>
<p>\(V=\tfrac43\pi R^3\), \(\ P=4\pi R^2\). Przekrój kuli płaszczyzną odległą o \(d\) od środka jest kołem o promieniu \(\sqrt{R^2-d^2}\). Kula wpisana w sześcian o krawędzi \(a\): \(R=\tfrac a2\); kula wpisana w walec (możliwa tylko, gdy \(H=2r\)): \(R=r\); kula opisana na sześcianie: \(R=\tfrac{a\sqrt3}2\). Kula wpisana w stożek (promień kuli to promień okręgu wpisanego w przekrój osiowy): \(r_k=\dfrac{rH}{r+l}\).</p>
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
