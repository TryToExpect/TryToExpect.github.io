(window.THEORY ||= {})['matura-8'] = String.raw`
<div class="bx met"><span class="t">Główna idea: stereometria to planimetria w przekroju</span>
<p>Prawie każde zadanie z bryłą rozwiązujesz tak samo:</p>
<ol>
<li><b>Rysunek.</b> Narysuj bryłę, zaznacz dane i to, czego szukasz (wysokość, kąt, odległość).</li>
<li><b>Trójkąt prostokątny.</b> Znajdź płaszczyznę (przekrój), w której leży szukany odcinek lub kąt, a w niej trójkąt prostokątny. Narysuj go osobno i opisz długościami.</li>
<li><b>Obliczenia.</b> Brakujące boki wyznacz z podstawy (przekątna, wysokość trójkąta, promienie okręgów) oraz z twierdzenia Pitagorasa lub trygonometrii.</li>
<li><b>Odpowiedź.</b> Dopiero na końcu licz pole lub objętość i sprawdź, czy wynik odpowiada na pytanie.</li>
</ol>
</div>

<h3>Proste i płaszczyzny w przestrzeni, kąty</h3>
<div class="bx def"><span class="t">Wzajemne położenie</span>
<div class="tw"><table>
<thead><tr><th>Co</th><th>Możliwości</th></tr></thead>
<tbody>
<tr><td>dwie proste</td><td><b>równoległe</b> (leżą w jednej płaszczyźnie i nie mają punktów wspólnych), <b>przecinające się</b> (jeden punkt wspólny) albo <b>skośne</b> (nie leżą w jednej płaszczyźnie)</td></tr>
<tr><td>prosta i płaszczyzna</td><td>prosta <b>leży</b> w płaszczyźnie, jest do niej <b>równoległa</b> albo ją <b>przecina</b> w jednym punkcie</td></tr>
<tr><td>dwie płaszczyzny</td><td><b>równoległe</b> albo przecinają się wzdłuż <b>prostej</b> (jak dwie ściany bryły wzdłuż krawędzi)</td></tr>
</tbody></table></div>
<p><b>Przykład.</b> W sześcianie \(ABCDEFGH\) (\(E\) nad \(A\)) krawędzie \(AB\) i \(EF\) są równoległe, \(AB\) i \(BC\) się przecinają, a \(AB\) i \(CG\) są skośne.</p>
</div>
<div class="bx def"><span class="t">Prostopadłość</span>
<ul>
<li>Prosta jest <b>prostopadła do płaszczyzny</b>, gdy jest prostopadła do każdej prostej leżącej w tej płaszczyźnie.</li>
<li><b>Wystarczą dwie proste:</b> jeśli prosta \(k\) jest prostopadła do dwóch <i>przecinających się</i> prostych płaszczyzny \(\pi\), to \(k\perp\pi\). Na tym opiera się większość dowodów prostopadłości w ostrosłupach i graniastosłupach.</li>
<li><b>Odległość punktu od płaszczyzny</b> to długość odcinka prostopadłego do płaszczyzny, który łączy punkt z płaszczyzną. Jego koniec w płaszczyźnie to <b>rzut prostokątny</b> punktu. Wysokość bryły jest właśnie taką odległością.</li>
</ul>
<p><b>Przykład.</b> W sześcianie krawędź \(AE\) jest prostopadła do przecinających się krawędzi \(AB\) i \(AD\), więc \(AE\perp\) podstawa \(ABCD\), a zatem także \(AE\perp AC\).</p>
</div>
<div class="bx thm"><span class="t">Trzy rodzaje kątów</span>
<ul>
<li><b>Kąt prostej z płaszczyzną</b> – kąt między prostą a jej <b>rzutem prostokątnym</b> na tę płaszczyznę (od \(0^\circ\) do \(90^\circ\)). <i>Jak go znaleźć:</i> z punktu prostej opuść prostopadłą na płaszczyznę. Powstaje trójkąt prostokątny: wysokość, rzut i prosta. Przykład: kąt krawędzi bocznej ostrosłupa z podstawą.</li>
<li><b>Kąt dwuścienny</b> (między dwiema płaszczyznami, np. ścianami) – kąt między dwiema prostymi, po jednej w każdej płaszczyźnie, obie <b>prostopadłe do wspólnej krawędzi</b> i wychodzące z tego samego jej punktu. <i>Jak go znaleźć:</i> wybierz punkt krawędzi i poprowadź z niego w obu ścianach odcinki prostopadłe do krawędzi. Kąt między ścianami mierzymy wewnątrz bryły, więc może być rozwarty. Kąt nachylenia ściany bocznej do podstawy to kąt \(SMO\) z rozdziału o ostrosłupach.</li>
<li><b>Kąt między prostymi skośnymi</b> – kąt między przecinającymi się prostymi, które są równoległe do danych. <i>Jak go znaleźć:</i> przesuń jedną prostą równolegle (np. wzdłuż krawędzi), aż przetnie drugą.</li>
</ul>
</div>
<div class="fg"><svg class="fig" viewBox="0 0 280 192" width="280" height="192" role="img" aria-label="Kąt nachylenia prostej k do płaszczyzny P: kąt α między prostą k a jej rzutem prostokątnym k′ na tę płaszczyznę"><polygon class="f" points="22,164 216,164 266,122 72,122"/><polygon class="s" points="22,164 216,164 266,122 72,122"/><line class="s d w" x1="84" y1="36" x2="84" y2="142"/><line class="a" x1="170" y1="150" x2="84" y2="36"/><line class="p" x1="170" y1="150" x2="84" y2="142"/><path class="s w" d="M84,134 L92,134.8 L92,142.8"/><path class="a" d="M152,121.2 A34,34 0 0 0 136.1,147"/><circle class="dot" cx="170" cy="150" r="3"/><circle class="dot" cx="84" cy="36" r="3"/><circle class="dot" cx="84" cy="142" r="3"/><text class="ac" x="122" y="112" text-anchor="middle">α</text><text x="77" y="40" text-anchor="end">T</text><text x="78" y="158" text-anchor="end">T′</text><text x="178" y="144" text-anchor="start">O</text><text class="ac" x="118" y="78" text-anchor="end">k</text><text class="pn" x="124" y="168" text-anchor="middle">k′</text><text x="238" y="156" text-anchor="middle">P</text></svg></div>
<p class="note">Kąt prostej \(k\) z płaszczyzną \(P\) to kąt \(\alpha\) między \(k\) a jej rzutem prostokątnym \(k\prime\) na \(P\) (odcinek \(TT\prime\) jest prostopadły do płaszczyzny).</p>
<div class="bx thm"><span class="t">Twierdzenie o trzech prostych prostopadłych</span>
<p>Niech prosta \(k\) przecina płaszczyznę \(\pi\) (nie jest do niej ani prostopadła, ani równoległa), a \(k'\) będzie rzutem prostokątnym prostej \(k\) na \(\pi\). Jeśli prosta \(\ell\) leży w \(\pi\) i przechodzi przez punkt wspólny \(k\) i \(\pi\), to
\[\ell\perp k\iff\ell\perp k'.\]</p>
<p><b>Prościej:</b> prosta z płaszczyzny jest prostopadła do prostej \(k\) wtedy i tylko wtedy, gdy jest prostopadła do rzutu prostej \(k\) na tę płaszczyznę.</p>
<p><b>Najczęstsze zastosowanie.</b> \(SO\) jest wysokością ostrosłupa, a punkt \(M\) leży na krawędzi podstawy \(AB\) i \(OM\perp AB\). Odcinek \(OM\) jest rzutem odcinka \(SM\) na podstawę, więc także \(SM\perp AB\). Zatem \(SM\) jest wysokością ściany \(ABS\), a <b>kąt \(SMO\) jest kątem nachylenia tej ściany do podstawy</b>.</p>
<p><b>Przykład.</b> W sześcianie \(ABCDEFGH\) rzutem przekątnej \(EC\) na podstawę jest \(AC\). Prosta \(\ell\) przez \(C\) równoległa do \(BD\) jest prostopadła do \(AC\) (przekątne kwadratu), więc \(\ell\perp EC\), czyli \(BD\perp EC\).</p>
</div>

<h3>Graniastosłupy</h3>
<div class="bx thm"><span class="t">Graniastosłup</span>
<ul>
<li>\(V=P_p\cdot H\), \(\ P_c=2P_p+P_b\), gdzie \(P_p\) to pole podstawy, \(H\) – wysokość, a \(P_b\) – pole powierzchni bocznej (suma pól ścian bocznych).</li>
<li><b>Graniastosłup prosty</b> ma krawędzie boczne prostopadłe do podstaw, więc jego ściany boczne są prostokątami, a \(P_b\) to obwód podstawy razy \(H\). <b>Graniastosłup prawidłowy</b> to graniastosłup prosty, którego podstawą jest wielokąt foremny.</li>
</ul>
<p><b>Przykład.</b> Graniastosłup prawidłowy trójkątny o krawędzi podstawy \(4\) i wysokości \(10\): \(P_p=4\sqrt3\), \(V=40\sqrt3\), \(P_b=3\cdot4\cdot10=120\), \(P_c=120+8\sqrt3\).</p>
</div>
<div class="bx thm"><span class="t">Prostopadłościan i sześcian</span>
<ul>
<li><b>Prostopadłościan</b> \(a\times b\times c\): \(V=abc\), \(\ P_c=2(ab+bc+ca)\), przekątna podstawy \(\sqrt{a^2+b^2}\), przekątna bryły \(d=\sqrt{a^2+b^2+c^2}\).</li>
<li><b>Sześcian</b> o krawędzi \(a\): \(V=a^3\), \(\ P_c=6a^2\), przekątna ściany \(a\sqrt2\), przekątna bryły \(a\sqrt3\).</li>
</ul>
<p>Wzór na \(d\) to dwa razy twierdzenie Pitagorasa: najpierw przekątna podstawy \(\sqrt{a^2+b^2}\), potem trójkąt prostokątny z krawędzią \(c\).</p>
<p><b>Przykład.</b> Prostopadłościan \(2\times3\times6\): \(V=36\), \(P_c=2(6+18+12)=72\), \(d=\sqrt{4+9+36}=7\). Sześcian o krawędzi \(5\): przekątna \(5\sqrt3\).</p>
</div>
<div class="fg"><svg class="fig" viewBox="0 0 244 186" width="244" height="186" role="img" aria-label="Prostopadłościan: przekątna bryły d, przekątna podstawy i kąt β nachylenia przekątnej bryły do podstawy"><polygon class="f" points="30,152 180,120 180,38"/><line class="s" x1="30" y1="152" x2="132" y2="152"/><line class="s" x1="132" y1="152" x2="180" y2="120"/><line class="s" x1="30" y1="152" x2="30" y2="70"/><line class="s" x1="132" y1="152" x2="132" y2="70"/><line class="s" x1="180" y1="120" x2="180" y2="38"/><line class="s" x1="30" y1="70" x2="132" y2="70"/><line class="s" x1="132" y1="70" x2="180" y2="38"/><line class="s" x1="180" y1="38" x2="78" y2="38"/><line class="s" x1="78" y1="38" x2="30" y2="70"/><line class="s d w" x1="78" y1="120" x2="30" y2="152"/><line class="s d w" x1="78" y1="120" x2="180" y2="120"/><line class="s d w" x1="78" y1="120" x2="78" y2="38"/><line class="a" x1="30" y1="152" x2="180" y2="38"/><line class="p d" x1="30" y1="152" x2="180" y2="120"/><path class="a" d="M65.2,144.5 A36,36 0 0 0 58.7,130.2"/><text x="24" y="166" text-anchor="end">A</text><text x="136" y="166" text-anchor="start">B</text><text x="187" y="124" text-anchor="start">C</text><text x="186" y="40" text-anchor="start">C′</text><text class="ac" x="80" y="168" text-anchor="middle">a</text><text class="ac" x="168" y="146" text-anchor="start">b</text><text class="ac" x="140" y="114" text-anchor="start">c</text><text class="ac" x="88" y="88" text-anchor="end">d</text><text class="ac" x="82" y="128" text-anchor="middle">β</text></svg></div>
<p class="note">Kąt \(\beta\) nachylenia przekątnej bryły do podstawy leży w trójkącie prostokątnym \(ACC\prime\): \(\operatorname{tg}\beta=\dfrac{c}{\sqrt{a^2+b^2}}\).</p>
<div class="bx ex"><span class="t">Przykład</span>
<p>Prostopadłościan \(3\times4\times12\): przekątna podstawy \(\sqrt{3^2+4^2}=5\), przekątna bryły \(d=\sqrt{3^2+4^2+12^2}=\sqrt{169}=13\), \(\operatorname{tg}\beta=\tfrac{12}5\).</p>
</div>

<h3>Ostrosłupy</h3>
<div class="bx thm"><span class="t">Ostrosłup</span>
<ul>
<li>\(V=\tfrac13P_p\cdot H\), \(\ P_c=P_p+P_b\).</li>
<li><b>Wysokość</b> \(H\) to odcinek od wierzchołka \(S\) prostopadły do podstawy. Jego koniec \(O\) w płaszczyźnie podstawy to <b>spodek wysokości</b>.</li>
<li><b>Ostrosłup prawidłowy</b> ma w podstawie wielokąt foremny, a spodek wysokości jest środkiem tego wielokąta. Wtedy wszystkie krawędzie boczne są równe, a ściany boczne są przystającymi trójkątami równoramiennymi.</li>
</ul>
<p><b>Przykład.</b> Ostrosłup o podstawie prostokąta \(3\times4\) i wysokości \(5\): \(V=\tfrac13\cdot12\cdot5=20\).</p>
</div>
<div class="bx thm"><span class="t">Ostrosłup prawidłowy: cztery trójkąty prostokątne</span>
<div class="wf"><div>
<p>Oznaczenia (rysunek): \(O\) – środek podstawy (spodek wysokości), \(M\) – środek krawędzi \(AB\), \(r\) – promień okręgu <b>wpisanego</b> w podstawę, \(R\) – promień okręgu <b>opisanego</b> na podstawie, \(h_s\) – wysokość ściany bocznej, \(b\) – krawędź boczna. Prawie wszystko, czego potrzebujesz, daje jeden z czterech trójkątów prostokątnych:</p>
<ul>
<li>\(SOM\) (kąt prosty przy \(O\)): \(h_s^2=H^2+r^2\). Kąt \(\beta=\angle SMO\) to kąt nachylenia <b>ściany</b> bocznej do podstawy: \(\operatorname{tg}\beta=\dfrac Hr\).</li>
<li>\(SOA\) (kąt prosty przy \(O\)): \(b^2=H^2+R^2\). Kąt \(\alpha=\angle SAO\) to kąt nachylenia <b>krawędzi</b> bocznej do podstawy: \(\operatorname{tg}\alpha=\dfrac HR\).</li>
<li>\(SMA\) (kąt prosty przy \(M\)): \(b^2=h_s^2+\left(\tfrac a2\right)^2\).</li>
<li>\(OMA\) (w podstawie, kąt prosty przy \(M\)): \(R^2=r^2+\left(\tfrac a2\right)^2\).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 252" width="300" height="252" role="img" aria-label="Ostrosłup prawidłowy czworokątny ABCDS: O – środek podstawy, M – środek krawędzi AB; wysokość H, promień r okręgu wpisanego w podstawę (OM) i wysokość ściany bocznej h_s (SM) tworzą trójkąt SOM, a wysokość H, promień R okręgu opisanego (OA) i krawędź boczna b (SA) tworzą trójkąt SOA"><polygon class="f" points="149,93 149,193 115,218"/><line class="s" x1="40" y1="218" x2="190" y2="218"/><line class="s" x1="190" y1="218" x2="258" y2="168"/><line class="p" x1="149" y1="93" x2="40" y2="218"/><line class="s" x1="149" y1="93" x2="190" y2="218"/><line class="s" x1="149" y1="93" x2="258" y2="168"/><line class="s d w" x1="40" y1="218" x2="108" y2="168"/><line class="s d w" x1="108" y1="168" x2="258" y2="168"/><line class="s d w" x1="149" y1="93" x2="108" y2="168"/><line class="a d" x1="149" y1="93" x2="149" y2="193"/><line class="a d" x1="149" y1="193" x2="115" y2="218"/><line class="a" x1="149" y1="93" x2="115" y2="218"/><line class="p d" x1="149" y1="193" x2="40" y2="218"/><circle class="dot" cx="149" cy="193" r="2.6"/><text x="149" y="85" text-anchor="middle">S</text><text x="33" y="230" text-anchor="end">A</text><text x="196" y="232" text-anchor="start">B</text><text x="266" y="172" text-anchor="start">C</text><text x="101" y="164" text-anchor="end">D</text><text x="158" y="190" text-anchor="start">O</text><text x="108" y="234" text-anchor="end">M</text><text class="ac" x="156" y="149" text-anchor="start">H</text><text class="ac" x="141" y="213" text-anchor="end">r</text><text class="ac" x="117" y="186" text-anchor="end">h<tspan dy="3" font-size="10">s</tspan></text><text class="pn" x="91" y="150" text-anchor="end">b</text><text class="pn" x="96" y="200" text-anchor="middle">R</text></svg></div></div>
<p class="note">Niebieskie odcinki \(H\), \(r\), \(h_s\) tworzą trójkąt \(SOM\) (zacieniowany), a czerwone \(R\), \(b\) razem z \(H\) – trójkąt \(SOA\).</p>
<p><b>Przykład.</b> Ostrosłup prawidłowy trójkątny o krawędzi podstawy \(6\) i wysokości \(4\): \(r=\sqrt3\), \(R=2\sqrt3\), \(h_s=\sqrt{16+3}=\sqrt{19}\), \(b=\sqrt{16+12}=2\sqrt7\), \(\operatorname{tg}\beta=\tfrac4{\sqrt3}\).</p>
</div>
<div class="tw"><table>
<thead><tr><th>Podstawa (bok \(a\))</th><th class="c">promień wpisanego \(r\)</th><th class="c">promień opisanego \(R\)</th><th class="c">pole</th></tr></thead>
<tbody>
<tr><td>trójkąt równoboczny</td><td class="c">\(\tfrac{a\sqrt3}6\)</td><td class="c">\(\tfrac{a\sqrt3}3\)</td><td class="c">\(\tfrac{a^2\sqrt3}4\)</td></tr>
<tr><td>kwadrat</td><td class="c">\(\tfrac a2\)</td><td class="c">\(\tfrac{a\sqrt2}2\)</td><td class="c">\(a^2\)</td></tr>
<tr><td>sześciokąt foremny</td><td class="c">\(\tfrac{a\sqrt3}2\)</td><td class="c">\(a\)</td><td class="c">\(\tfrac{3a^2\sqrt3}2\)</td></tr>
</tbody></table></div>
<p class="note">Zapamiętaj: w trójkącie równobocznym \(R=2r\), w kwadracie \(R=r\sqrt2\), a w sześciokącie foremnym \(R\) jest równe bokowi \(a\).</p>
<div class="bx fact"><span class="t">Gdzie leży spodek wysokości?</span>
<ul>
<li>Jeśli <b>wszystkie krawędzie boczne są równe</b> (albo tworzą z podstawą równe kąty), to spodek wysokości jest środkiem okręgu <b>opisanego</b> na podstawie.</li>
<li>Jeśli <b>wszystkie ściany boczne tworzą z podstawą równe kąty</b> (albo ich wysokości poprowadzone z wierzchołka są równe), to spodek wysokości jest środkiem okręgu <b>wpisanego</b> w podstawę.</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Ostrosłup prawidłowy czworokątny o krawędzi podstawy \(a=6\) i wysokości \(H=4\): \(r=3\), \(R=3\sqrt2\). Wysokość ściany bocznej \(h_s=\sqrt{4^2+3^2}=5\), krawędź boczna \(b=\sqrt{4^2+18}=\sqrt{34}\). Pola i objętość: \(P_b=4\cdot\tfrac12\cdot6\cdot5=60\), \(P_c=36+60=96\), \(V=\tfrac13\cdot36\cdot4=48\). Kąt nachylenia ściany do podstawy: \(\operatorname{tg}\beta=\tfrac43\).</p>
</div>
<div class="bx fact"><span class="t">Czworościan foremny</span>
<div class="wf"><div>
<p>Wszystkie krawędzie mają długość \(a\), a wszystkie ściany są trójkątami równobocznymi.</p>
<ul>
<li>\(P_c=4\cdot\dfrac{a^2\sqrt3}4=a^2\sqrt3\).</li>
<li><b>Wysokość.</b> Spodek wysokości \(O\) jest środkiem trójkąta równobocznego \(ABC\), więc \(|AO|=\dfrac{a\sqrt3}3\), a z trójkąta prostokątnego \(AOD\) mamy \(H=\sqrt{a^2-\dfrac{a^2}3}=\dfrac{a\sqrt6}3\).</li>
<li><b>Objętość:</b> \(V=\dfrac13\cdot\dfrac{a^2\sqrt3}4\cdot\dfrac{a\sqrt6}3=\dfrac{a^3\sqrt2}{12}\).</li>
<li><b>Kula wpisana i kula opisana mają wspólny środek \(S\)</b> na wysokości \(DO\). Dzieli on tę wysokość w stosunku \(3:1\): \(|SO|=r_k=\dfrac H4=\dfrac{a\sqrt6}{12}\), \(|SD|=R_k=\dfrac{3H}4=\dfrac{a\sqrt6}4\).</li>
</ul>
</div><div class="fg"><svg class="fig" viewBox="0 0 256 246" width="256" height="246" role="img" aria-label="Przekrój czworościanu foremnego płaszczyzną DCM, gdzie M jest środkiem krawędzi AB: okrąg to przekrój kuli wpisanej, styczny do podstawy w punkcie O; jej środek S leży na wysokości DO, odcinek SO ma długość r_k (jedna czwarta wysokości), a odcinek SD długość R_k (trzy czwarte wysokości)"><polygon class="f" points="30,222 161.6,35.8 227.5,222"/><circle class="s f2" cx="161.6" cy="175.5" r="46.5"/><polygon class="s" points="30,222 161.6,35.8 227.5,222"/><line class="a d" x1="161.6" y1="35.8" x2="161.6" y2="222"/><path class="s w" d="M161.6,215 L168.6,215 L168.6,222"/><circle class="dot" cx="161.6" cy="175.5" r="2.4"/><circle class="dot" cx="161.6" cy="222" r="2.4"/><text x="161.6" y="27.8" text-anchor="middle">D</text><text x="24" y="236" text-anchor="end">C</text><text x="233.5" y="236" text-anchor="start">M</text><text x="161.6" y="238" text-anchor="middle">O</text><text x="169.6" y="180.5" text-anchor="start">S</text><text class="ac" x="153.6" y="110.6" text-anchor="end">R<tspan dy="3" font-size="10">k</tspan></text><text class="ac" x="153.6" y="203.7" text-anchor="end">r<tspan dy="3" font-size="10">k</tspan></text></svg></div></div>
<p class="note">Rysunek: przekrój płaszczyzną \(DCM\), gdzie \(M\) jest środkiem krawędzi \(AB\).</p>
<p><b>Przykład.</b> Dla \(a=6\): \(H=2\sqrt6\), \(V=\dfrac{216\sqrt2}{12}=18\sqrt2\), \(P_c=36\sqrt3\), \(r_k=\dfrac{\sqrt6}2\), \(R_k=\dfrac{3\sqrt6}2\).</p>
</div>

<h3>Bryły obrotowe: walec, stożek, kula</h3>
<div class="bx thm"><span class="t">Wzory</span>
<ul>
<li><b>Walec</b> (promień podstawy \(r\), wysokość \(H\)): \(V=\pi r^2H\), \(\ P_b=2\pi rH\), \(\ P_c=2\pi r(r+H)\).</li>
<li><b>Stożek</b> (promień podstawy \(r\), wysokość \(H\), tworząca \(l\)): \(V=\tfrac13\pi r^2H\), \(\ P_b=\pi rl\), \(\ P_c=\pi r(r+l)\). Zawsze \(l^2=r^2+H^2\) (trójkąt prostokątny o bokach \(r\), \(H\), \(l\)).</li>
<li><b>Kula</b> (promień \(R\)): \(V=\tfrac43\pi R^3\), \(\ P=4\pi R^2\).</li>
</ul>
<p><b>Przykład.</b> Walec \(r=3\), \(H=5\): \(V=45\pi\), \(P_c=2\pi\cdot3\cdot8=48\pi\). Kula \(R=3\): \(V=36\pi\), \(P=36\pi\).</p>
</div>
<div class="bx def"><span class="t">Przekrój osiowy i rozwinięcie</span>
<ul>
<li><b>Walec:</b> przekrój osiowy to prostokąt \(2r\times H\). Rozwinięcie powierzchni bocznej to prostokąt \(2\pi r\times H\).</li>
<li><b>Stożek:</b> przekrój osiowy to trójkąt równoramienny o podstawie \(2r\), ramionach \(l\) i wysokości \(H\). Jego kąt przy wierzchołku to <b>kąt rozwarcia</b> stożka, równy \(2\alpha\), gdzie \(\sin\alpha=\dfrac rl\).</li>
<li><b>Rozwinięcie powierzchni bocznej stożka</b> to wycinek koła o promieniu \(l\) i łuku długości \(2\pi r\). Kąt wycinka: \(\varphi=\dfrac r l\cdot360^\circ\).</li>
<li><b>Kula:</b> przekrój osiowy to koło wielkie o promieniu \(R\). Przekrój płaszczyzną odległą o \(d\) od środka kuli to koło o promieniu \(\sqrt{R^2-d^2}\).</li>
</ul>
<p><b>Przykład.</b> Stożek \(r=6\), \(H=8\): tworząca \(l=10\), przekrój osiowy to trójkąt o bokach \(10,10,12\), kąt wycinka \(\varphi=\tfrac6{10}\cdot360^\circ=216^\circ\).</p>
</div>
<div class="fgs"><div class="fg"><svg class="fig" viewBox="0 0 176 152" width="176" height="152" role="img" aria-label="Przekrój osiowy stożka: promień podstawy r, wysokość H, tworząca l i kąt rozwarcia 2α"><polygon class="f" points="88,14 28,112 148,112"/><polygon class="s" points="88,14 28,112 148,112"/><line class="a d" x1="88" y1="14" x2="88" y2="112"/><path class="s w" d="M96,112 L96,104 L88,104"/><path class="a" d="M73,37.7 A28,28 0 0 0 103,37.7"/><circle class="dot" cx="88" cy="112" r="2.6"/><text class="ac" x="82" y="66" text-anchor="end">H</text><text class="ac" x="118" y="130" text-anchor="middle">r</text><text class="ac" x="132" y="58" text-anchor="start">l</text><text class="ac" x="88" y="56" text-anchor="middle">2α</text><text class="m" x="88" y="148" text-anchor="middle">przekrój osiowy</text></svg></div><div class="fg"><svg class="fig" viewBox="0 0 190 160" width="190" height="160" role="img" aria-label="Rozwinięcie powierzchni bocznej stożka: wycinek koła o promieniu l i łuku długości 2πr, kąt wycinka φ"><path class="s f2" d="M95,36 L11.3,8.8 A88,88 0 1 0 178.7,8.8 Z"/><path class="a" d="M77.9,30.4 A18,18 0 1 0 112.1,30.4"/><text class="ac" x="95" y="80" text-anchor="middle">φ</text><text class="ac" x="49.2" y="15.4" text-anchor="end">l</text><text class="ac" x="95" y="139" text-anchor="middle">łuk 2πr</text><text class="m" x="95" y="156" text-anchor="middle">wycinek koła</text></svg></div></div>
<div class="bx thm"><span class="t">Stożek ścięty</span>
<p>Dla promieni podstaw \(R>r\) i wysokości \(H\): \(V=\dfrac{\pi H}3\left(R^2+Rr+r^2\right)\). Łatwiej jednak (i bez uczenia się wzoru) obliczyć objętość jako różnicę objętości dwóch podobnych stożków – zob. rozdział o bryłach podobnych.</p>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Stożek o promieniu podstawy \(r=3\) i wysokości \(H=4\): \(l=\sqrt{3^2+4^2}=5\), \(V=\tfrac13\pi\cdot9\cdot4=12\pi\), \(P_b=\pi\cdot3\cdot5=15\pi\), \(P_c=\pi\cdot3\cdot(3+5)=24\pi\). Kąt wycinka: \(\varphi=\dfrac35\cdot360^\circ=216^\circ\).</p>
</div>

<h3>Kula wpisana i opisana</h3>
<div class="bx met"><span class="t">Jak to liczyć: przekrój przez środek kuli</span>
<p>Poprowadź płaszczyznę przez <b>środek kuli</b> i oś (albo wysokość) bryły. Kula daje w takim przekroju koło wielkie, więc zadanie zamienia się w planimetrię: okrąg wpisany w trójkąt (prostokąt, trapez) albo opisany na nim. Wzorów poniżej nie trzeba uczyć się na pamięć – wystarczy umieć je szybko wyprowadzić z takiego rysunku.</p>
</div>
<div class="bx thm"><span class="t">Promienie kuli wpisanej (\(r_k\)) i opisanej (\(R_k\))</span>
<ul>
<li><b>Sześcian</b> (krawędź \(a\)): \(r_k=\dfrac a2\), \(\ R_k=\dfrac{a\sqrt3}2\) (połowa przekątnej).</li>
<li><b>Graniastosłup prosty</b> (np. prostopadłościan, graniastosłup prawidłowy). Kula wpisana istnieje, gdy w podstawę można wpisać okrąg o promieniu \(r\) i \(H=2r\); wtedy \(r_k=r\). Kula opisana istnieje, gdy na podstawie można opisać okrąg o promieniu \(R\); wtedy \(R_k=\sqrt{R^2+\left(\tfrac H2\right)^2}\).</li>
<li><b>Walec</b> (\(r\), \(H\)): kula wpisana istnieje tylko dla \(H=2r\) (wtedy \(r_k=r\)); kula opisana ma promień \(R_k=\sqrt{r^2+\left(\tfrac H2\right)^2}\).</li>
<li><b>Stożek</b> (\(r\), \(H\), \(l\)): w przekroju osiowym kula daje okrąg wpisany w trójkąt (promień to pole podzielone przez półobwód) albo opisany na nim: \(r_k=\dfrac{rH}{r+l}\), \(\ R_k=\dfrac{l^2}{2H}\).</li>
<li><b>Ostrosłup prawidłowy:</b> \(r_k=\dfrac{rH}{r+h_s}\), gdzie \(r\) jest promieniem okręgu wpisanego w podstawę (środek kuli leży na wysokości, na dwusiecznej kąta \(SMO\) w trójkącie \(SOM\)); można też liczyć \(r_k=\dfrac{3V}{P_c}\). Kula opisana: \(R_k=\dfrac{b^2}{2H}\) (jej środek też leży na wysokości).</li>
<li><b>Czworościan foremny</b> (krawędź \(a\)): \(r_k=\dfrac H4=\dfrac{a\sqrt6}{12}\), \(\ R_k=\dfrac{3H}4=\dfrac{a\sqrt6}4\).</li>
</ul>
<p><b>Przykład.</b> Walec \(r=3\), \(H=8\): \(R_k=\sqrt{9+16}=5\). Stożek \(r=3\), \(H=4\), \(l=5\): \(r_k=\tfrac{12}8=\tfrac32\), \(R_k=\tfrac{25}8\).</p>
</div>
<div class="bx fact"><span class="t">Objętość wielościanu z kulą wpisaną</span>
<p>Jeśli kula o promieniu \(r_k\) jest styczna do wszystkich ścian wielościanu, to dzieli go na ostrosłupy o wierzchołku w jej środku i podstawach będących ścianami. Każdy z nich ma wysokość \(r_k\), więc
\[V=\tfrac13\,r_k\,P_c,\qquad r_k=\frac{3V}{P_c}.\]
To najszybszy sposób na promień kuli wpisanej, gdy znasz \(V\) i \(P_c\).</p>
</div>
<div class="bx ex"><span class="t">Przykład – kule przy ostrosłupie</span>
<p>Ostrosłup prawidłowy czworokątny z poprzedniego przykładu (\(r=3\), \(h_s=5\), \(H=4\), \(b^2=34\), \(V=48\), \(P_c=96\)): kula wpisana ma promień \(r_k=\dfrac{3\cdot4}{3+5}=\dfrac32\) (sprawdzenie: \(\dfrac{3V}{P_c}=\dfrac{144}{96}=\dfrac32\)), a kula opisana \(R_k=\dfrac{b^2}{2H}=\dfrac{34}8=\dfrac{17}4\).</p>
</div>
<div class="bx ex"><span class="t">Przykład – kula na sześcianie</span>
<p>Kula opisana na sześcianie o krawędzi \(a=4\): \(R_k=\dfrac{4\sqrt3}2=2\sqrt3\), \(V=\tfrac43\pi(2\sqrt3)^3=32\sqrt3\,\pi\), \(P=4\pi\cdot12=48\pi\).</p>
</div>

<h3>Bryły podobne</h3>
<div class="bx thm"><span class="t">Skala podobieństwa \(k\)</span>
<p>Jeśli bryły są podobne w skali \(k\), to wszystkie <b>długości</b> (krawędzie, wysokości, promienie) mnożą się przez \(k\), <b>pola</b> powierzchni przez \(k^2\), a <b>objętości</b> przez \(k^3\).</p>
<p><b>Przykład.</b> Ostrosłupy podobne w skali \(2\): wysokość \(3\) przechodzi w \(6\), pole powierzchni \(6\) w \(24\), objętość \(5\) w \(40\).</p>
</div>
<div class="bx fact"><span class="t">Płaszczyzna równoległa do podstawy</span>
<div class="wf"><div>
<p>Płaszczyzna równoległa do podstawy ostrosłupa lub stożka odcina od niego bryłę <b>podobną do całej</b>. Pozostaje <b>bryła ścięta</b> (ostrosłup ścięty, stożek ścięty).</p>
<p>Skala podobieństwa to stosunek wysokości <b>liczonych od wierzchołka</b>:
\[k=\frac hH,\]
gdzie \(h\) jest odległością płaszczyzny od wierzchołka, a \(H\) – wysokością całej bryły.</p>
<p>Objętość bryły ściętej to różnica: \(V-k^3V=(1-k^3)\,V\).</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 312 222" width="312" height="222" role="img" aria-label="Przekrój osiowy stożka płaszczyzną równoległą do podstawy: płaszczyzna π odcina stożek podobny do danego; h jest odległością płaszczyzny od wierzchołka S, H wysokością całego stożka, promień odciętego stożka to kr, a skala podobieństwa k = h/H"><polygon class="f" points="180,24 100,137.3 260,137.3"/><polygon class="f2" points="100,137.3 260,137.3 300,194 60,194"/><polygon class="s" points="180,24 60,194 300,194"/><line class="a" x1="100" y1="137.3" x2="260" y2="137.3"/><line class="a d" x1="180" y1="24" x2="180" y2="194"/><line class="p" x1="180" y1="194" x2="300" y2="194"/><line class="p" x1="180" y1="137.3" x2="260" y2="137.3"/><line class="gr" x1="30" y1="24" x2="180" y2="24"/><line class="gr" x1="30" y1="194" x2="60" y2="194"/><line class="gr" x1="76" y1="137.3" x2="100" y2="137.3"/><line class="ax" x1="30" y1="24" x2="30" y2="194"/><line class="ax" x1="26" y1="24" x2="34" y2="24"/><line class="ax" x1="26" y1="194" x2="34" y2="194"/><line class="ax" x1="76" y1="24" x2="76" y2="137.3"/><line class="ax" x1="72" y1="24" x2="80" y2="24"/><line class="ax" x1="72" y1="137.3" x2="80" y2="137.3"/><circle class="dot" cx="180" cy="24" r="2.4"/><text x="180" y="16" text-anchor="middle">S</text><text class="ac" x="22" y="114" text-anchor="end">H</text><text class="ac" x="68" y="85.7" text-anchor="end">h</text><text class="pn" x="240" y="210" text-anchor="middle">r</text><text class="pn" x="220" y="131.3" text-anchor="middle">kr</text><text class="ac" x="272" y="141.3" text-anchor="start">π</text></svg></div></div>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Płaszczyzna równoległa do podstawy odcina od ostrosłupa podobny ostrosłup o objętości równej \(\tfrac8{27}\) objętości całego. Wtedy \(k^3=\tfrac8{27}\), więc \(k=\tfrac23\): płaszczyzna leży w \(\tfrac23\) wysokości licząc od wierzchołka, czyli na wysokości \(\tfrac13H\) nad podstawą. Pole przekroju (podstawy odciętego ostrosłupa) to \(\tfrac49\) pola podstawy, a objętość bryły ściętej to \(\tfrac{19}{27}V\).</p>
</div>

<h3>Przekroje brył</h3>
<div class="bx def"><span class="t">Przekrój bryły płaszczyzną</span>
<ul>
<li>Przekrojem wielościanu jest wielokąt, którego <b>każdy bok leży w innej ścianie</b>. Dlatego ma on co najwyżej tyle boków, ile ścian ma bryła.</li>
<li>Płaszczyzna przechodząca przez wierzchołek ostrosłupa daje w przekroju trójkąt.</li>
<li><b>Przekrój osiowy</b> bryły obrotowej: walec – prostokąt, stożek – trójkąt równoramienny, kula – koło wielkie.</li>
</ul>
<p><b>Przykład.</b> Sześcian ma \(6\) ścian, więc jego przekrój ma co najwyżej \(6\) boków (np. sześciokąt foremny); przekrój czworościanu ma co najwyżej \(4\) boki.</p>
</div>
<div class="bx met"><span class="t">Jak wyznaczyć przekrój wielościanu</span>
<ol>
<li>Zaznacz punkty, przez które przechodzi płaszczyzna. <b>Dwa punkty leżące w jednej ścianie</b> łączymy odcinkiem – to bok przekroju.</li>
<li>Płaszczyzna przecina dwie <b>równoległe ściany</b> wzdłuż odcinków <b>równoległych</b>: przez punkt w jednej ścianie poprowadź prostą równoległą do boku przekroju z drugiej ściany.</li>
<li>Gdy dwa punkty nie leżą w jednej ścianie, <b>przedłuż</b> odcinek przekroju z jednej ściany, aż przetnie prostą zawierającą krawędź tej ściany. Ten punkt leży też w płaszczyźnie sąsiedniej ściany, więc możesz połączyć go z punktem tej ściany – tak znajdujesz kolejne boki.</li>
<li>Gdy linia przekroju wróci do punktu wyjścia, sprawdź, czy każdy bok leży w innej ścianie.</li>
</ol>
</div>
<div class="bx thm"><span class="t">Typowe przekroje sześcianu \(ABCDEFGH\) o krawędzi \(a\)</span>
<div class="tw"><table>
<thead><tr><th>Płaszczyzna</th><th>Przekrój</th><th class="c">Pole</th></tr></thead>
<tbody>
<tr><td>równoległa do ściany</td><td>kwadrat o boku \(a\)</td><td class="c">\(a^2\)</td></tr>
<tr><td>przez krawędź \(AE\) i przekątną podstawy \(AC\)</td><td>prostokąt \(ACGE\) o bokach \(a\sqrt2\) i \(a\)</td><td class="c">\(a^2\sqrt2\)</td></tr>
<tr><td>przez wierzchołki \(A,C,F\) (końce przekątnych trzech ścian wychodzących z wierzchołka \(B\))</td><td>trójkąt równoboczny o boku \(a\sqrt2\)</td><td class="c">\(\dfrac{a^2\sqrt3}2\)</td></tr>
<tr><td>przez środki sześciu krawędzi niewychodzących z końców przekątnej \(AG\) (płaszczyzna prostopadła do \(AG\))</td><td>sześciokąt foremny o boku \(\dfrac{a\sqrt2}2\)</td><td class="c">\(\dfrac{3a^2\sqrt3}4\)</td></tr>
</tbody></table></div>
</div>
<div class="bx ex"><span class="t">Przykład – przekrój sześcianu</span>
<div class="wf"><div>
<p>Sześcian o krawędzi \(a=6\). Płaszczyzna przechodzi przez wierzchołki \(A\), \(C\), \(F\). Wyznacz pole przekroju i kąt \(\varphi\) nachylenia tej płaszczyzny do podstawy.</p>
<p><i>Przekrój.</i> Wierzchołek \(B\) leży po jednej stronie płaszczyzny \(ACF\), a wszystkie pozostałe wierzchołki (poza \(A,C,F\)) po drugiej, więc płaszczyzna odcina narożnik \(B\) i przekrojem jest trójkąt \(ACF\). Jego boki są przekątnymi ścian: \(|AC|=|AF|=|CF|=6\sqrt2\), więc trójkąt jest równoboczny i
\[P=\frac{(6\sqrt2)^2\sqrt3}4=18\sqrt3.\]</p>
<p><i>Kąt.</i> Płaszczyzna przekroju przecina podstawę wzdłuż \(AC\). Niech \(M\) będzie środkiem \(AC\). Wtedy \(BM\perp AC\) (przekątne kwadratu są prostopadłe) i \(FM\perp AC\) (wysokość trójkąta równobocznego), więc \(\varphi=\angle FMB\). W trójkącie prostokątnym \(FBM\) (kąt prosty przy \(B\)) mamy \(|FB|=6\) i \(|BM|=3\sqrt2\), zatem
\[\operatorname{tg}\varphi=\frac6{3\sqrt2}=\sqrt2,\qquad\cos\varphi=\frac{|BM|}{|FM|}=\frac{3\sqrt2}{3\sqrt6}=\frac1{\sqrt3}.\]</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 250 206" width="250" height="206" role="img" aria-label="Sześcian ABCDEFGH; przekrój płaszczyzną ACF jest trójkątem równobocznym, a kąt φ nachylenia płaszczyzny do podstawy to kąt FMB, gdzie M jest środkiem AC"><polygon class="f" points="30,176 198,140 150,56"/><line class="s" x1="30" y1="176" x2="150" y2="176"/><line class="s" x1="150" y1="176" x2="198" y2="140"/><line class="s" x1="30" y1="176" x2="30" y2="56"/><line class="s" x1="150" y1="176" x2="150" y2="56"/><line class="s" x1="198" y1="140" x2="198" y2="20"/><line class="s" x1="30" y1="56" x2="150" y2="56"/><line class="s" x1="150" y1="56" x2="198" y2="20"/><line class="s" x1="198" y1="20" x2="78" y2="20"/><line class="s" x1="78" y1="20" x2="30" y2="56"/><line class="s d w" x1="78" y1="140" x2="30" y2="176"/><line class="s d w" x1="78" y1="140" x2="198" y2="140"/><line class="s d w" x1="78" y1="140" x2="78" y2="20"/><line class="a" x1="30" y1="176" x2="198" y2="140"/><line class="a" x1="30" y1="176" x2="150" y2="56"/><line class="a" x1="198" y1="140" x2="150" y2="56"/><line class="p d" x1="114" y1="158" x2="150" y2="176"/><line class="p" x1="114" y1="158" x2="150" y2="56"/><path class="p" d="M140.8,171.4 A30,30 0 0 0 124,129.7"/><circle class="dot" cx="114" cy="158" r="2.6"/><text x="24" y="190" text-anchor="end">A</text><text x="154" y="191" text-anchor="start">B</text><text x="205" y="144" text-anchor="start">C</text><text x="72" y="135" text-anchor="end">D</text><text x="24" y="53" text-anchor="end">E</text><text x="152" y="49" text-anchor="start">F</text><text x="205" y="18" text-anchor="start">G</text><text x="76" y="13" text-anchor="end">H</text><text x="106" y="154" text-anchor="end">M</text><text class="pn" x="160" y="118" text-anchor="middle">φ</text></svg></div></div>
</div>
<div class="bx ex"><span class="t">Przykład – przekrój ostrosłupa</span>
<div class="wf"><div>
<p>Ostrosłup prawidłowy czworokątny \(ABCDS\) ma w podstawie kwadrat o boku \(6\) i wysokość \(H=4\). Punkty \(M\) i \(N\) są środkami krawędzi \(AB\) i \(BC\). Oblicz pole przekroju płaszczyzną \(SMN\) i kąt \(\psi\) jej nachylenia do podstawy.</p>
<p>Przekrój jest trójkątem \(SMN\). Odcinek \(MN\) łączy środki boków trójkąta \(ABC\), więc \(|MN|=\tfrac12|AC|=3\sqrt2\). Odcinki \(SM\) i \(SN\) są wysokościami ścian bocznych: \(|SM|=|SN|=\sqrt{4^2+3^2}=5\). Trójkąt \(SMN\) jest równoramienny, więc jego wysokość poprowadzona na \(MN\) ma długość \(\sqrt{5^2-\left(\tfrac{3\sqrt2}2\right)^2}=\sqrt{\tfrac{41}2}\) i
\[P=\frac12\cdot3\sqrt2\cdot\sqrt{\frac{41}2}=\frac{3\sqrt{41}}2\approx9{,}6.\]</p>
<p>Płaszczyzna \(SMN\) przecina podstawę wzdłuż \(MN\). Spodek wysokości ostrosłupa \(O\) leży w odległości \(\tfrac{3\sqrt2}2\) od prostej \(MN\), zatem \(\operatorname{tg}\psi=\dfrac{H}{3\sqrt2/2}=\dfrac{4\sqrt2}3\).</p>
</div><div class="fg"><svg class="fig" viewBox="0 0 300 252" width="300" height="252" role="img" aria-label="Ostrosłup prawidłowy czworokątny ABCDS; przekrój płaszczyzną SMN, gdzie M i N są środkami krawędzi AB i BC, jest trójkątem równoramiennym"><polygon class="f" points="149,93 115,218 224,193"/><line class="s" x1="40" y1="218" x2="190" y2="218"/><line class="s" x1="190" y1="218" x2="258" y2="168"/><line class="s" x1="149" y1="93" x2="40" y2="218"/><line class="s" x1="149" y1="93" x2="190" y2="218"/><line class="s" x1="149" y1="93" x2="258" y2="168"/><line class="s d w" x1="40" y1="218" x2="108" y2="168"/><line class="s d w" x1="108" y1="168" x2="258" y2="168"/><line class="s d w" x1="149" y1="93" x2="108" y2="168"/><line class="a" x1="149" y1="93" x2="115" y2="218"/><line class="a" x1="149" y1="93" x2="224" y2="193"/><line class="a" x1="115" y1="218" x2="224" y2="193"/><line class="p d" x1="149" y1="93" x2="149" y2="193"/><circle class="dot" cx="149" cy="193" r="2.4"/><text x="149" y="85" text-anchor="middle">S</text><text x="33" y="230" text-anchor="end">A</text><text x="196" y="232" text-anchor="start">B</text><text x="266" y="172" text-anchor="start">C</text><text x="101" y="164" text-anchor="end">D</text><text x="109" y="234" text-anchor="end">M</text><text x="232" y="205" text-anchor="start">N</text><text x="140" y="197" text-anchor="end">O</text><text class="pn" x="156" y="149" text-anchor="start">H</text></svg></div></div>
<p class="note">Dla porównania przekrój płaszczyzną \(ASC\) (przez przekątną podstawy) jest trójkątem równoramiennym o podstawie \(|AC|=6\sqrt2\) i wysokości \(H=4\), więc ma pole \(\tfrac12\cdot6\sqrt2\cdot4=12\sqrt2\).</p>
</div>
<details class="opt"><summary><span class="optb">Poza wymaganiami</span>Współrzędne w przestrzeni i iloczyn wektorowy</summary>
<div class="opt-body">
<p>Długości w przekroju można liczyć w układzie współrzędnych w przestrzeni (np. \(A=(0,0,0)\)): \(|PQ|=\sqrt{\Delta x^2+\Delta y^2+\Delta z^2}\). Iloczyn skalarny daje kąt między wektorami (\(\cos\varphi=\frac{\vec u\cdot\vec v}{|\vec u||\vec v|}\)), a długość iloczynu wektorowego \(|\vec u\times\vec v|\) jest polem równoległoboku rozpiętego na \(\vec u\) i \(\vec v\), więc pole trójkąta to \(\tfrac12|\vec u\times\vec v|\).</p>
<p><i>Przykład.</i> Dla sześcianu z przykładu: \(\overrightarrow{AC}=[6,6,0]\), \(\overrightarrow{AF}=[6,0,6]\), \(\overrightarrow{AC}\times\overrightarrow{AF}=[36,-36,-36]\), \(|\overrightarrow{AC}\times\overrightarrow{AF}|=36\sqrt3\), więc pole trójkąta \(ACF\) to \(18\sqrt3\) – tyle samo co wyżej.</p>
</div></details>

<h3>Najczęstsze błędy i zadania optymalizacyjne</h3>
<div class="bx warn"><span class="t">Najczęstsze błędy</span>
<ul>
<li><b>Wysokość bryły \(H\) i wysokość ściany bocznej \(h_s\) to różne odcinki</b> (zawsze \(h_s>H\)). Nie podstawiaj jednej za drugą.</li>
<li><b>Zła para promieni.</b> Kąt nachylenia <b>ściany</b> liczymy z \(r\) (promień okręgu wpisanego w podstawę): \(\operatorname{tg}\beta=\tfrac Hr\). Kąt nachylenia <b>krawędzi</b> – z \(R\) (opisanego): \(\operatorname{tg}\alpha=\tfrac HR\).</li>
<li><b>Skala podobieństwa</b> jest liczona od wierzchołka. Pola skalują się przez \(k^2\), a objętości przez \(k^3\) – nie przez \(k\).</li>
<li><b>Rozwinięcie stożka:</b> promień wycinka to tworząca \(l\), a nie \(r\); długość łuku to \(2\pi r\).</li>
<li><b>Kąt dwuścienny</b> mierzymy między prostymi <b>prostopadłymi do krawędzi</b>. Na rysunku w perspektywie kąty proste wcale nie wyglądają na proste, więc nie ufaj oku.</li>
<li><b>Przekrój:</b> dwa punkty łączysz odcinkiem tylko wtedy, gdy leżą w <b>jednej ścianie</b>.</li>
</ul>
</div>
<div class="bx met"><span class="t">Zadania z parametrem i na największą lub najmniejszą wartość</span>
<p>Zapisz pole lub objętość jako funkcję <b>jednej zmiennej</b> (np. wysokości lub promienia, korzystając z podobieństwa albo z przekroju osiowego), ustal jej <b>dziedzinę</b> z geometrii zadania i zbadaj pochodną.</p>
</div>
`;
