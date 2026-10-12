(window.THEORY = window.THEORY || {})['matura-9'] = String.raw`
<h3>Reguły zliczania, permutacje, wariacje, kombinacje</h3>
<div class="bx thm"><span class="t">Reguły</span>
<ul>
<li><b>Reguła mnożenia:</b> jeśli wybór składa się z \(k\) kolejnych etapów, w których mamy odpowiednio \(n_1,\dots,n_k\) możliwości (niezależnie od poprzednich wyborów), to wszystkich wyborów jest \(n_1\cdot n_2\cdots n_k\).</li>
<li><b>Reguła dodawania:</b> jeśli zbiory możliwości są rozłączne, to liczby możliwości dodajemy. Dla dowolnych zbiorów: \(|A\cup B|=|A|+|B|-|A\cap B|\).</li>
<li><b>Zdarzenie przeciwne</b> w zliczaniu: „co najmniej jeden” \(=\) wszystkie \(-\) „żaden”.</li>
</ul>
</div>
<div class="bx def"><span class="t">Wzory kombinatoryczne</span>
<div class="tw"><table>
<thead><tr><th>Co liczymy</th><th>Wzór</th></tr></thead>
<tbody>
<tr><td><b>Permutacje</b> \(n\) różnych elementów (kolejność)</td><td>\(P_n=n!=1\cdot2\cdots n\) (\(0!=1\))</td></tr>
<tr><td>Permutacje z powtórzeniami (\(k_1,\dots,k_r\) jednakowych, \(\sum k_i=n\))</td><td>\(\dfrac{n!}{k_1!\,k_2!\cdots k_r!}\)</td></tr>
<tr><td><b>Wariacje bez powtórzeń</b> – \(k\) z \(n\), kolejność ważna</td><td>\(V_n^k=\dfrac{n!}{(n-k)!}=n(n-1)\cdots(n-k+1)\)</td></tr>
<tr><td><b>Wariacje z powtórzeniami</b></td><td>\(n^k\)</td></tr>
<tr><td><b>Kombinacje</b> – \(k\)-elementowe podzbiory \(n\)-elementowego zbioru</td><td>\(\dbinom nk=\dfrac{n!}{k!\,(n-k)!}\)</td></tr>
</tbody></table></div>
</div>
<div class="bx thm"><span class="t">Własności symbolu Newtona</span>
\[\binom nk=\binom n{n-k},\qquad\binom nk+\binom n{k+1}=\binom{n+1}{k+1},\qquad\sum_{k=0}^n\binom nk=2^n,\qquad\binom n0=\binom nn=1,\ \binom n1=n.\]
</div>
<div class="bx met"><span class="t">Typowe schematy</span>
<ul>
<li><b>Liczby \(n\)-cyfrowe:</b> pierwsza cyfra nie może być \(0\) (\(9\) wyborów, kolejne cyfry \(10\)). Bez powtórzeń cyfr: \(9\cdot9\cdot8\cdots\).</li>
<li><b>Ustawianie osób/liter z warunkami:</b> osoby, które muszą stać obok siebie, „sklejamy” w jeden element (i mnożymy przez permutacje wewnątrz); osoby, które nie mogą stać razem – liczymy wszystkie ustawienia i odejmujemy te z sąsiedztwem.</li>
<li><b>Wybór bez uwzględniania kolejności</b> (komisja, drużyna, karty): kombinacje; z podziałem na role: najpierw wybór, potem przydział.</li>
<li><b>Podział na grupy</b> o danych rozmiarach: iloczyn kombinacji, a przy jednakowych rozmiarach i nierozróżnialnych grupach – dzielenie przez liczbę permutacji grup.</li>
<li><b>Rzuty kostką/monetą:</b> wyniki ciągi: \(6^n\), \(2^n\) (wariacje z powtórzeniami).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Ile jest liczb czterocyfrowych o różnych cyfrach? \(9\cdot9\cdot8\cdot7=4536\). Na ile sposobów można ustawić w rzędzie \(5\) osób, jeśli dwie z nich mają stać obok siebie? \(4!\cdot2!=48\) (skleiliśmy parę w jeden element i uwzględniliśmy kolejność wewnątrz pary).</p>
</div>

<h3>Dwumian Newtona i zasada włączeń i wyłączeń</h3>
<div class="bx thm"><span class="t">Wzór dwumianowy Newtona</span>
\[(a+b)^n=\sum_{k=0}^n\binom nk a^{n-k}b^k=a^n+n\,a^{n-1}b+\binom n2a^{n-2}b^2+\dots+b^n.\]
<p>Wyraz ogólny: \(T_{k+1}=\binom nk a^{n-k}b^k\). Współczynniki to wiersze trójkąta Pascala: \(1;\ 1,1;\ 1,2,1;\ 1,3,3,1;\ 1,4,6,4,1;\dots\) Szczególnie: \((1+x)^n=\sum\binom nk x^k\), \(\ (a-b)^n\) – wyrazy o naprzemiennych znakach.</p>
</div>
<div class="bx thm"><span class="t">Zasada włączeń i wyłączeń</span>
<p>\(|A\cup B|=|A|+|B|-|A\cap B|\); \(\ |A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|\). To samo dla prawdopodobieństwa: \(P(A\cup B)=P(A)+P(B)-P(A\cap B)\).</p>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Współczynnik przy \(x^3\) w \((2x+1)^5\): \(T_{k+1}=\binom5k(2x)^{k}\cdot1^{5-k}\), dla \(k=3\): \(\binom53\cdot8=80\). Ile liczb ze zbioru \(\{1,\dots,100\}\) dzieli się przez \(2\) lub przez \(3\)? \(50+33-16=67\).</p>
</div>

<h3>Prawdopodobieństwo klasyczne i geometryczne</h3>
<div class="bx def"><span class="t">Podstawowe pojęcia</span>
<p><b>Zdarzenia elementarne</b> tworzą przestrzeń \(\Omega\); <b>zdarzenie</b> to podzbiór \(A\subseteq\Omega\). Zdarzenie pewne \(\Omega\), niemożliwe \(\emptyset\), przeciwne \(A'=\Omega\setminus A\); zdarzenia \(A,B\) są rozłączne, gdy \(A\cap B=\emptyset\).</p>
<p><b>Prawdopodobieństwo klasyczne</b> (zdarzenia elementarne równoprawdopodobne): \(P(A)=\dfrac{|A|}{|\Omega|}\).</p>
</div>
<div class="bx thm"><span class="t">Własności prawdopodobieństwa</span>
<ul>
<li>\(0\le P(A)\le1\), \(P(\Omega)=1\), \(P(\emptyset)=0\); \(A\subseteq B\Rightarrow P(A)\le P(B)\).</li>
<li>\(P(A')=1-P(A)\); \(\ P(A\cup B)=P(A)+P(B)-P(A\cap B)\); dla rozłącznych \(P(A\cup B)=P(A)+P(B)\).</li>
<li>\(P(A\cup B)\le P(A)+P(B)\); \(\ P(A\cap B)\ge P(A)+P(B)-1\).</li>
</ul>
</div>
<ul>
<li><b>Prawdopodobieństwo geometryczne:</b> punkt wybrany losowo z obszaru \(\Omega\) (długość, pole, objętość): \(P(A)=\dfrac{|A|}{|\Omega|}\), gdzie \(|\cdot|\) to miara obszaru.</li>
<li>Przy wyborach <b>ze zwracaniem</b> używamy wariacji z powtórzeniami (\(|\Omega|=n^k\)), <b>bez zwracania</b> – wariacji bez powtórzeń lub kombinacji (gdy kolejność nie ma znaczenia, trzeba konsekwentnie liczyć \(\Omega\) i \(A\) w tym samym modelu).</li>
</ul>

<h3>Prawdopodobieństwo warunkowe, całkowite, wzór Bayesa</h3>
<div class="bx def"><span class="t">Prawdopodobieństwo warunkowe</span>
<p>\(P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}\) dla \(P(B)>0\). Wzór na iloczyn: \(P(A\cap B)=P(B)\,P(A\mid B)\). W modelu klasycznym: \(P(A\mid B)=\dfrac{|A\cap B|}{|B|}\) (zawężamy \(\Omega\) do \(B\)).</p>
</div>
<div class="bx def"><span class="t">Niezależność</span>
<p>Zdarzenia \(A,B\) są <b>niezależne</b>, gdy \(P(A\cap B)=P(A)\cdot P(B)\) (równoważnie \(P(A\mid B)=P(A)\)). Niezależność nie oznacza rozłączności: zdarzenia rozłączne o dodatnich prawdopodobieństwach są zależne.</p>
</div>
<div class="bx thm"><span class="t">Wzór na prawdopodobieństwo całkowite i wzór Bayesa</span>
<p>Jeśli zdarzenia \(B_1,\dots,B_n\) o dodatnich prawdopodobieństwach tworzą rozbicie \(\Omega\) (parami rozłączne, suma \(=\Omega\)), to
\[P(A)=\sum_{i=1}^nP(A\mid B_i)\,P(B_i),\qquad P(B_j\mid A)=\frac{P(A\mid B_j)\,P(B_j)}{\sum_{i}P(A\mid B_i)\,P(B_i)}.\]</p>
</div>
<div class="bx met"><span class="t">Drzewo stochastyczne</span>
<p>Prawdopodobieństwo ścieżki to iloczyn prawdopodobieństw na jej gałęziach; prawdopodobieństwo zdarzenia to suma po ścieżkach prowadzących do niego. Zadania „z jakiej urny/maszyny pochodził element, jeśli…” rozwiązujemy wzorem Bayesa.</p>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Maszyna A produkuje \(60\%\) detali, B – \(40\%\); braki: \(2\%\) w A i \(5\%\) w B. Wylosowany detal jest wadliwy. Prawdopodobieństwo, że pochodzi z B: \(P(B\mid W)=\dfrac{0{,}05\cdot0{,}4}{0{,}02\cdot0{,}6+0{,}05\cdot0{,}4}=\dfrac{0{,}020}{0{,}032}=\dfrac58\).</p>
</div>

<h3>Schemat Bernoulliego</h3>
<div class="bx thm"><span class="t">Wzór</span>
<p>Powtarzamy \(n\) niezależnych prób; w każdej „sukces” z prawdopodobieństwem \(p\), „porażka” z \(q=1-p\). Prawdopodobieństwo dokładnie \(k\) sukcesów:
\[P_n(k)=\binom nk\,p^k\,q^{\,n-k},\qquad k=0,1,\dots,n.\]
</p>
<ul>
<li>\(P(\text{co najmniej }k)=\sum_{j\ge k}P_n(j)\); „co najmniej jeden sukces” \(=1-q^n\).</li>
<li>Najbardziej prawdopodobna liczba sukcesów \(k_0\) spełnia \((n+1)p-1\le k_0\le(n+1)p\). Wartość oczekiwana liczby sukcesów \(np\), wariancja \(npq\).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Rzucamy \(6\) razy monetą symetryczną. Prawdopodobieństwo dokładnie dwóch orłów: \(\binom62\cdot\left(\tfrac12\right)^6=\tfrac{15}{64}\). Co najmniej jednego orła: \(1-\tfrac1{64}=\tfrac{63}{64}\).</p>
</div>

<h3>Wartość oczekiwana i statystyka opisowa</h3>
<div class="bx def"><span class="t">Zmienna losowa dyskretna</span>
<p>Zmienna \(X\) przyjmuje wartości \(x_1,\dots,x_n\) z prawdopodobieństwami \(p_i\) (\(\sum p_i=1\)). <b>Wartość oczekiwana</b> \(EX=\sum x_ip_i\) (średnia wartość „w długim okresie”). Własności: \(E(aX+b)=aEX+b\), \(E(X+Y)=EX+EY\). <b>Wariancja</b> \(\operatorname{Var}X=E(X-EX)^2=EX^2-(EX)^2\).</p>
</div>
<div class="bx def"><span class="t">Statystyka opisowa dla danych \(x_1,\dots,x_n\)</span>
<ul>
<li><b>Średnia arytmetyczna</b> \(\bar x=\tfrac1n\sum x_i\); <b>ważona</b> \(\dfrac{\sum w_ix_i}{\sum w_i}\); <b>mediana</b> – środkowa wartość uporządkowanych danych (dla parzystej liczby – średnia dwóch środkowych); <b>dominanta</b> – najczęściej występująca wartość.</li>
<li><b>Wariancja</b> \(\sigma^2=\tfrac1n\sum(x_i-\bar x)^2=\overline{x^2}-\bar x^2\); <b>odchylenie standardowe</b> \(\sigma=\sqrt{\sigma^2}\). Dodanie stałej do wszystkich danych nie zmienia \(\sigma\); pomnożenie przez \(a\) mnoży \(\sigma\) przez \(|a|\), a średnią przez \(a\).</li>
</ul>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>Dane: \(2,4,4,6,9\). \(\bar x=5\), mediana \(4\), dominanta \(4\), \(\sigma^2=\tfrac{9+1+1+1+16}5=5{,}6\).</p>
</div>
`;
