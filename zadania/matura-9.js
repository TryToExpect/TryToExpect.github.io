(window.TASKS = window.TASKS || {})['matura-9'] = [
  {
    id: 1,
    group: "Kombinatoryka",
    src: "maj 2024 · zad. 6",
    pts: 3,
    tags: ["kombinatoryka", "liczby bez powtórzeń cyfr", "kombinacje i permutacje"],
    req: ["ZP XI.2", "ZR XI.1"],
    q: String.raw`<p>Rozważamy wszystkie liczby naturalne, w których zapisie dziesiętnym nie powtarza się jakakolwiek cyfra oraz dokładnie trzy cyfry są nieparzyste i dokładnie dwie cyfry są parzyste.</p>
<p>Oblicz, ile jest wszystkich takich liczb.</p>`,
    ans: String.raw`\(11\,040\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Liczba ma \(3+2=5\) różnych cyfr: trzy nieparzyste i dwie parzyste. Liczymy zbiory cyfr, a potem ich ustawienia, pamiętając, że zero nie może stać na początku.</p>
<p class="step"><b>Krok 1: wybór cyfr.</b> Nieparzyste: \(\binom53=10\) sposobów (z \(\{1,3,5,7,9\}\)). Parzyste: \(\binom52=10\) sposobów (z \(\{0,2,4,6,8\}\)). Razem \(100\) zbiorów cyfr.</p>
<p class="step"><b>Krok 2: ustawienia.</b> Każdy zbiór można ustawić na \(5!=120\) sposobów, ale trzeba odrzucić ustawienia z zerem na początku. Zbiorów zawierających \(0\) jest \(10\cdot\binom41=40\); w każdym z nich ustawień z zerem na początku jest \(4!=24\).</p>
<p class="step"><b>Krok 3: wynik.</b> \(100\cdot120-40\cdot24=12000-960=11040\).</p>`
  },
  {
    id: 2,
    group: "Prawdopodobieństwo klasyczne",
    src: "maj 2026 · zad. 2",
    pts: 3,
    tags: ["permutacje", "podzielność przez 3", "prawdopodobieństwo klasyczne"],
    req: ["ZP XII.1", "ZR XI.1"],
    q: String.raw`<p>Ze zbioru ośmiu liczb \(\{1,2,3,4,5,6,7,8\}\) losujemy bez zwracania osiem razy po jednej liczbie. Wylosowane liczby ustawiamy w ciąg zgodnie z kolejnością losowania.</p>
<p>Oblicz prawdopodobieństwo zdarzenia \(A\) polegającego na tym, że wylosowane liczby utworzą ciąg, w którym iloczyn każdych trzech kolejnych wyrazów będzie liczbą podzielną przez \(3\). Wynik podaj w postaci nieskracalnego ułamka zwykłego.</p>`,
    ans: String.raw`\(\dfrac{1}{28}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Iloczyn jest podzielny przez \(3\) wtedy i tylko wtedy, gdy któryś z trzech czynników jest podzielny przez \(3\), czyli jest równy \(3\) lub \(6\). Zatem w każdym „oknie” z trzech kolejnych miejsc musi stać \(3\) lub \(6\).</p>
<p class="step"><b>Krok 1.</b> \(|\Omega|=8!=40320\) (wszystkie permutacje).</p>
<p class="step"><b>Krok 2: gdzie mogą stać \(3\) i \(6\).</b> Niech zajmują miejsca \(p&lt;q\). Okno miejsc \(1,2,3\) musi zawierać jedną z tych liczb, więc \(p\le3\); okno \(6,7,8\) – więc \(q\ge6\). Między \(p\) i \(q\) nie mogą zmieścić się trzy kolejne miejsca bez \(3\) i \(6\), czyli \(q-p-1\le2\), a więc \(q-p\le3\). Jednocześnie \(q-p\ge6-3=3\). Zostaje jedynie \(p=3\), \(q=6\).</p>
<p class="step"><b>Krok 3: zliczanie.</b> Liczby \(3\) i \(6\) stoją na miejscach \(3\) i \(6\) (w jednej z \(2\) kolejności), a pozostałe sześć liczb ustawiamy dowolnie: \(|A|=2\cdot6!=1440\).</p>
<p class="step"><b>Krok 4.</b> \(P(A)=\dfrac{1440}{40320}=\dfrac1{28}\).</p>`
  },
  {
    id: 9,
    group: "Prawdopodobieństwo klasyczne",
    label: "autorskie",
    pts: 3,
    tags: ["model klasyczny", "dwie kostki", "suma zdarzeń"],
    req: ["ZP XII.1"],
    q: String.raw`<p>Rzucamy dwa razy symetryczną sześcienną kostką. Oblicz prawdopodobieństwo zdarzenia, że suma wyrzuconych oczek jest podzielna przez \(4\) lub iloczyn oczek jest równy \(6\).</p>`,
    ans: String.raw`\(\dfrac{13}{36}\)`,
    sol: String.raw`<p class="step"><b>Model.</b> \(\Omega\) to pary \((a,b)\), \(|\Omega|=36\), zdarzenia elementarne równoprawdopodobne.</p>
<p class="step"><b>Suma podzielna przez \(4\)</b> (czyli \(4\), \(8\) lub \(12\)): suma \(4\) – \((1,3),(2,2),(3,1)\); suma \(8\) – \((2,6),(3,5),(4,4),(5,3),(6,2)\); suma \(12\) – \((6,6)\). Razem \(9\) wyników.</p>
<p class="step"><b>Iloczyn równy \(6\):</b> \((1,6),(6,1),(2,3),(3,2)\) – \(4\) wyniki. Sumy tych par to \(7\) i \(5\), więc żadna nie jest podzielna przez \(4\) – zdarzenia są rozłączne.</p>
<p class="step"><b>Wynik.</b> \(P=\dfrac{9+4}{36}=\dfrac{13}{36}\).</p>`
  },
  {
    id: 3,
    group: "Prawdopodobieństwo warunkowe",
    src: "maj 2025 · zad. 4",
    pts: 3,
    tags: ["prawdopodobieństwo warunkowe", "rzut kostką"],
    req: ["ZR XII.1"],
    q: String.raw`<p>Doświadczenie losowe polega na czterokrotnym rzucie symetryczną sześcienną kostką do gry, która na każdej ściance ma inną liczbę oczek – od jednego do sześciu.</p>
<p>Oblicz prawdopodobieństwo zdarzenia polegającego na tym, że otrzymamy co najmniej jeden raz sześć oczek, pod warunkiem że otrzymamy dokładnie dwa razy pięć oczek.</p>`,
    ans: String.raw`\(\dfrac{9}{25}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> \(P(A\mid B)=\dfrac{|A\cap B|}{|B|}\), gdzie \(B\) – „dokładnie dwie piątki”, \(A\) – „co najmniej jedna szóstka”. Wszystkie ciągi czterech rzutów są jednakowo prawdopodobne.</p>
<p class="step"><b>Krok 1: \(|B|\).</b> Miejsca dwóch piątek: \(\binom42=6\) sposobów. Na pozostałych dwóch miejscach są liczby różne od \(5\): \(5\) możliwości na każdym. \(|B|=6\cdot5^2=150\).</p>
<p class="step"><b>Krok 2: \(|A\cap B|\).</b> W obrębie \(B\) policzmy zdarzenie przeciwne: na dwóch pozostałych miejscach nie ma szóstki (są liczby z \(\{1,2,3,4\}\)): \(6\cdot4^2=96\). Zatem \(|A\cap B|=150-96=54\).</p>
<p class="step"><b>Krok 3.</b> \(P(A\mid B)=\dfrac{54}{150}=\dfrac9{25}\).</p>`
  },
  {
    id: 4,
    group: "Prawdopodobieństwo warunkowe",
    src: "maj 2021 · zad. 9",
    pts: 4,
    tags: ["prawdopodobieństwo warunkowe", "podzielność", "liczby czterocyfrowe"],
    req: ["ZR XII.1"],
    q: String.raw`<p>Ze zbioru wszystkich liczb naturalnych czterocyfrowych losujemy jedną liczbę.</p>
<p>Oblicz prawdopodobieństwo zdarzenia polegającego na tym, że wylosowana liczba jest podzielna przez \(15\), jeśli wiadomo, że jest ona podzielna przez \(18\).</p>`,
    ans: String.raw`\(\dfrac{1}{5}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> \(P(A\mid B)=\dfrac{|A\cap B|}{|B|}\), gdzie \(B\) – „podzielna przez \(18\)”, a \(A\cap B\) – „podzielna przez \(18\) i przez \(15\)”, czyli (bo \(\mathrm{NWW}(15,18)=90\)) „podzielna przez \(90\)”.</p>
<p class="step"><b>Krok 1: podzielne przez \(18\).</b> Najmniejsza czterocyfrowa: \(18\cdot56=1008\); największa: \(18\cdot555=9990\). Jest ich \(555-56+1=500\).</p>
<p class="step"><b>Krok 2: podzielne przez \(90\).</b> Najmniejsza: \(90\cdot12=1080\); największa: \(90\cdot111=9990\). Jest ich \(111-12+1=100\).</p>
<p class="step"><b>Krok 3.</b> \(P=\dfrac{100}{500}=\dfrac15\).</p>`
  },
  {
    id: 8,
    group: "Prawdopodobieństwo warunkowe",
    label: "autorskie",
    pts: 4,
    tags: ["prawdopodobieństwo całkowite", "wzór Bayesa", "urny"],
    req: ["ZR XII.1"],
    q: String.raw`<p>W pierwszej urnie jest \(3\) kule białe i \(2\) czarne, a w drugiej \(1\) biała i \(4\) czarne. Rzucamy symetryczną sześcienną kostką: jeśli wypadnie \(1\) lub \(2\) oczka, losujemy jedną kulę z pierwszej urny, w przeciwnym razie – z drugiej.</p>
<p>a) Oblicz prawdopodobieństwo wylosowania kuli białej.<br>
b) Wylosowano kulę białą. Oblicz prawdopodobieństwo, że pochodzi z pierwszej urny.</p>`,
    ans: String.raw`a) \(\dfrac13\); b) \(\dfrac35\)`,
    sol: String.raw`<p class="step"><b>Oznaczenia.</b> \(U_1\) – losowanie z pierwszej urny, \(P(U_1)=\tfrac26=\tfrac13\); \(U_2\) – z drugiej, \(P(U_2)=\tfrac23\); \(B\) – kula biała. \(P(B\mid U_1)=\tfrac35\), \(P(B\mid U_2)=\tfrac15\).</p>
<p class="step"><b>a) Prawdopodobieństwo całkowite.</b> \(P(B)=P(U_1)P(B\mid U_1)+P(U_2)P(B\mid U_2)=\dfrac13\cdot\dfrac35+\dfrac23\cdot\dfrac15=\dfrac15+\dfrac2{15}=\dfrac13\).</p>
<p class="step"><b>b) Wzór Bayesa.</b> \(P(U_1\mid B)=\dfrac{P(U_1)P(B\mid U_1)}{P(B)}=\dfrac{\frac15}{\frac13}=\dfrac35\).</p>`
  },
  {
    id: 5,
    group: "Schemat Bernoulliego",
    src: "maj 2023 · zad. 2",
    pts: 3,
    tags: ["schemat Bernoulliego", "co najmniej cztery sukcesy"],
    req: ["ZR XII.2"],
    q: String.raw`<p>Tomek i Romek postanowili rozegrać między sobą pięć partii szachów. Prawdopodobieństwo wygrania pojedynczej partii przez Tomka jest równe \(\tfrac14\).</p>
<p>Oblicz prawdopodobieństwo wygrania przez Tomka co najmniej czterech z pięciu partii. Wynik podaj w postaci ułamka zwykłego nieskracalnego.</p>`,
    ans: String.raw`\(\dfrac{1}{64}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Schemat Bernoulliego: \(n=5\) niezależnych prób, prawdopodobieństwo sukcesu (wygrana Tomka) \(p=\tfrac14\). Szukamy \(P(S_5\ge4)=P(S_5=4)+P(S_5=5)\), gdzie \(P(S_n=k)=\binom nk p^k(1-p)^{n-k}\).</p>
<p class="step"><b>Krok 1.</b> \(P(S_5=4)=\binom54\left(\tfrac14\right)^4\cdot\tfrac34=5\cdot\tfrac1{256}\cdot\tfrac34=\tfrac{15}{1024}\) oraz \(P(S_5=5)=\left(\tfrac14\right)^5=\tfrac1{1024}\).</p>
<p class="step"><b>Krok 2.</b> \(P=\tfrac{15}{1024}+\tfrac1{1024}=\tfrac{16}{1024}=\tfrac1{64}\).</p>`
  },
  {
    id: 6,
    group: "Schemat Bernoulliego",
    src: "maj 2024 · zad. 3",
    pts: 3,
    tags: ["schemat Bernoulliego", "co najwyżej jeden sukces", "zaokrąglenie"],
    req: ["ZR XII.2"],
    q: String.raw`<p>W pewnym zakładzie mleczarskim śmietana produkowana jest w \(200\)-gramowych opakowaniach. Prawdopodobieństwo zdarzenia, że w losowo wybranym opakowaniu śmietana zawiera mniej niż \(36\%\) tłuszczu, jest równe \(0{,}01\). Kontroli poddajemy \(10\) losowo wybranych opakowań ze śmietaną.</p>
<p>Oblicz prawdopodobieństwo zdarzenia polegającego na tym, że wśród opakowań poddanych tej kontroli będzie co najwyżej jedno opakowanie ze śmietaną, która zawiera mniej niż \(36\%\) tłuszczu. Wynik zapisz w postaci ułamka dziesiętnego w zaokrągleniu do części tysięcznych.</p>`,
    ans: String.raw`\(\approx0{,}996\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Schemat Bernoulliego z \(n=10\) i prawdopodobieństwem „sukcesu” (opakowanie z za małą zawartością tłuszczu) \(p=0{,}01\). Interesuje nas \(P(S_{10}\le1)=P(S_{10}=0)+P(S_{10}=1)\).</p>
<p class="step"><b>Krok 1.</b> \(P(S_{10}=0)=0{,}99^{10}\approx0{,}904382\) oraz \(P(S_{10}=1)=\binom{10}{1}\cdot0{,}01\cdot0{,}99^9=0{,}1\cdot0{,}99^9\approx0{,}091352\).</p>
<p class="step"><b>Krok 2.</b> \(P\approx0{,}904382+0{,}091352=0{,}995734\approx0{,}996\).</p>`
  },
  {
    id: 7,
    group: "Dwumian Newtona",
    label: "autorskie",
    pts: 3,
    tags: ["symbol Newtona", "dwumian Newtona", "wyraz rozwinięcia"],
    req: ["ZR XI.2", "ZR II.5", "ZR II.4"],
    q: String.raw`<p>a) Rozwiąż równanie \(\dbinom{n+1}{2}=45\), gdzie \(n\) jest liczbą naturalną dodatnią.<br>
b) Wyznacz wyraz niezawierający \(x\) w rozwinięciu \(\left(x^2+\dfrac1x\right)^6\).</p>`,
    ans: String.raw`a) \(n=9\); b) \(15\)`,
    sol: String.raw`<p class="step"><b>a)</b> \(\dbinom{n+1}2=\dfrac{(n+1)n}2=45\iff n^2+n-90=0\iff(n-9)(n+10)=0\). Liczba \(n\) jest dodatnia, więc \(n=9\) (sprawdzenie: \(\binom{10}2=45\)).</p>
<p class="step"><b>b)</b> Wyraz ogólny: \(T_{k+1}=\dbinom6k\left(x^2\right)^{6-k}\left(\dfrac1x\right)^k=\dbinom6kx^{12-3k}\). Wykładnik jest równy \(0\) dla \(k=4\), więc szukany wyraz to \(\dbinom64=15\).</p>`
  },
  {
    id: 10,
    group: "Statystyka opisowa",
    label: "autorskie",
    pts: 3,
    tags: ["średnia", "mediana", "dominanta"],
    req: ["ZP XII.2"],
    q: String.raw`<p>Dziesięcioro uczniów uzyskało z testu następujące liczby punktów: \(3,\ 4,\ 4,\ 5,\ 5,\ 5,\ 6,\ 7,\ 8,\ 9\).</p>
<p>a) Oblicz średnią arytmetyczną, medianę i dominantę tych wyników.<br>
b) Do grupy dołączyła jedna osoba i średnia wyników wszystkich jedenastu osób jest równa \(6\). Ile punktów uzyskała ta osoba?</p>`,
    ans: String.raw`a) średnia \(5{,}6\), mediana \(5\), dominanta \(5\); b) \(10\) punktów`,
    sol: String.raw`<p class="step"><b>a)</b> Suma wyników: \(3+4+4+5+5+5+6+7+8+9=56\), więc średnia \(\dfrac{56}{10}=5{,}6\). Dane są uporządkowane; dla dziesięciu liczb mediana to średnia piątej i szóstej: \(\dfrac{5+5}2=5\). Najczęściej występuje \(5\) (trzy razy) – dominanta \(5\).</p>
<p class="step"><b>b)</b> Niech nowa osoba uzyskała \(x\) punktów. Z \(\dfrac{56+x}{11}=6\) mamy \(56+x=66\), czyli \(x=10\).</p>`
  }
];
