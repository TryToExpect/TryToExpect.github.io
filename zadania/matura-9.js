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
    sol: String.raw`<div class="fig-wrap" data-sf="1"><svg class="fig" viewBox="0 0 228 238" width="228" height="238" role="img" aria-label="Siatka wyników dwóch rzutów kostką: zacieniowane pola, w których suma oczek jest podzielna przez 4 (9 pól), oraz pola z iloczynem 6 (4 pola)"><rect class="f" x="30" y="96" width="26" height="26"/><rect class="f2" x="30" y="18" width="26" height="26"/><rect class="f" x="56" y="122" width="26" height="26"/><rect class="f2" x="56" y="96" width="26" height="26"/><rect class="f" x="56" y="18" width="26" height="26"/><rect class="f" x="82" y="148" width="26" height="26"/><rect class="f2" x="82" y="122" width="26" height="26"/><rect class="f" x="82" y="44" width="26" height="26"/><rect class="f" x="108" y="70" width="26" height="26"/><rect class="f" x="134" y="96" width="26" height="26"/><rect class="f2" x="160" y="148" width="26" height="26"/><rect class="f" x="160" y="122" width="26" height="26"/><rect class="f" x="160" y="18" width="26" height="26"/><line class="gr" x1="30" y1="18" x2="30" y2="174"/><line class="gr" x1="30" y1="18" x2="186" y2="18"/><line class="gr" x1="56" y1="18" x2="56" y2="174"/><line class="gr" x1="30" y1="44" x2="186" y2="44"/><line class="gr" x1="82" y1="18" x2="82" y2="174"/><line class="gr" x1="30" y1="70" x2="186" y2="70"/><line class="gr" x1="108" y1="18" x2="108" y2="174"/><line class="gr" x1="30" y1="96" x2="186" y2="96"/><line class="gr" x1="134" y1="18" x2="134" y2="174"/><line class="gr" x1="30" y1="122" x2="186" y2="122"/><line class="gr" x1="160" y1="18" x2="160" y2="174"/><line class="gr" x1="30" y1="148" x2="186" y2="148"/><line class="gr" x1="186" y1="18" x2="186" y2="174"/><line class="gr" x1="30" y1="174" x2="186" y2="174"/><rect class="a" x="31" y="97" width="24" height="24"/><rect class="p" x="31" y="19" width="24" height="24"/><rect class="a" x="57" y="123" width="24" height="24"/><rect class="p" x="57" y="97" width="24" height="24"/><rect class="a" x="57" y="19" width="24" height="24"/><rect class="a" x="83" y="149" width="24" height="24"/><rect class="p" x="83" y="123" width="24" height="24"/><rect class="a" x="83" y="45" width="24" height="24"/><rect class="a" x="109" y="71" width="24" height="24"/><rect class="a" x="135" y="97" width="24" height="24"/><rect class="p" x="161" y="149" width="24" height="24"/><rect class="a" x="161" y="123" width="24" height="24"/><rect class="a" x="161" y="19" width="24" height="24"/><text class="m" x="43" y="189" text-anchor="middle">1</text><text class="m" x="22" y="165" text-anchor="end">1</text><text class="m" x="69" y="189" text-anchor="middle">2</text><text class="m" x="22" y="139" text-anchor="end">2</text><text class="m" x="95" y="189" text-anchor="middle">3</text><text class="m" x="22" y="113" text-anchor="end">3</text><text class="m" x="121" y="189" text-anchor="middle">4</text><text class="m" x="22" y="87" text-anchor="end">4</text><text class="m" x="147" y="189" text-anchor="middle">5</text><text class="m" x="22" y="61" text-anchor="end">5</text><text class="m" x="173" y="189" text-anchor="middle">6</text><text class="m" x="22" y="35" text-anchor="end">6</text><text x="190" y="189" text-anchor="start">a</text><text x="22" y="13" text-anchor="end">b</text><rect class="f" x="30" y="198" width="12" height="10"/><text class="m" x="47" y="207" text-anchor="start">suma podzielna przez 4 (9)</text><rect class="f2" x="30" y="214" width="12" height="10"/><text class="m" x="47" y="223" text-anchor="start">iloczyn równy 6 (4)</text></svg></div>
<p class="step"><b>Model.</b> \(\Omega\) to pary \((a,b)\), \(|\Omega|=36\), zdarzenia elementarne równoprawdopodobne.</p>
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
    sol: String.raw`<div class="fig-wrap" data-sf="1"><svg class="fig" viewBox="0 0 318 196" width="318" height="196" role="img" aria-label="Drzewo: z prawdopodobieństwem 1/3 losujemy z pierwszej urny (biała 3/5, czarna 2/5), z prawdopodobieństwem 2/3 z drugiej (biała 1/5, czarna 4/5); wyniki 1/5, 2/15, 2/15, 8/15"><line class="s" x1="22" y1="98" x2="128" y2="50"/><text class="m" x="71" y="68" text-anchor="end">1/3</text><line class="s" x1="22" y1="98" x2="128" y2="146"/><text class="m" x="71" y="136" text-anchor="end">2/3</text><line class="a" x1="128" y1="50" x2="236" y2="24"/><text class="m" x="180" y="31" text-anchor="middle">3/5</text><circle class="dota" cx="236" cy="24" r="3.2"/><text class="ac" x="245" y="28" text-anchor="start">B</text><text class="m" x="266" y="28" text-anchor="start">1/5</text><line class="s" x1="128" y1="50" x2="236" y2="76"/><text class="m" x="180" y="57" text-anchor="middle">2/5</text><circle class="dot" cx="236" cy="76" r="3.2"/><text x="245" y="80" text-anchor="start">C</text><text class="m" x="266" y="80" text-anchor="start">2/15</text><line class="a" x1="128" y1="146" x2="236" y2="120"/><text class="m" x="180" y="127" text-anchor="middle">1/5</text><circle class="dota" cx="236" cy="120" r="3.2"/><text class="ac" x="245" y="124" text-anchor="start">B</text><text class="m" x="266" y="124" text-anchor="start">2/15</text><line class="s" x1="128" y1="146" x2="236" y2="172"/><text class="m" x="180" y="153" text-anchor="middle">4/5</text><circle class="dot" cx="236" cy="172" r="3.2"/><text x="245" y="176" text-anchor="start">C</text><text class="m" x="266" y="176" text-anchor="start">8/15</text><circle class="dot" cx="128" cy="50" r="3.2"/><text x="126" y="41" text-anchor="middle">U₁</text><circle class="dot" cx="128" cy="146" r="3.2"/><text x="126" y="164" text-anchor="middle">U₂</text><circle class="dot" cx="22" cy="98" r="3.2"/></svg></div>
<p class="step"><b>Oznaczenia.</b> \(U_1\) – losowanie z pierwszej urny, \(P(U_1)=\tfrac26=\tfrac13\); \(U_2\) – z drugiej, \(P(U_2)=\tfrac23\); \(B\) – kula biała. \(P(B\mid U_1)=\tfrac35\), \(P(B\mid U_2)=\tfrac15\).</p>
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
    sol: String.raw`<div class="fig-wrap" data-sf="1"><svg class="fig" viewBox="0 0 318 216" width="318" height="216" role="img" aria-label="Diagram słupkowy wyników testu: 3 punkty – 1 osoba, 4 – 2, 5 – 3, 6 – 1, 7 – 1, 8 – 1, 9 – 1; dominanta i mediana 5, średnia 5,6"><line class="ax" x1="28" y1="156" x2="281" y2="156"/><polygon class="ah" points="286,156 279,158.9 279,153.1"/><line class="ax" x1="28" y1="156" x2="28" y2="33"/><polygon class="ah" points="28,28 30.9,35 25.1,35"/><rect class="f" x="40" y="126" width="26" height="30"/><rect class="s" x="40" y="126" width="26" height="30"/><text class="m" x="53" y="171" text-anchor="middle">3</text><rect class="f" x="74" y="96" width="26" height="60"/><rect class="s" x="74" y="96" width="26" height="60"/><text class="m" x="87" y="171" text-anchor="middle">4</text><rect class="f2" x="108" y="66" width="26" height="90"/><rect class="s" x="108" y="66" width="26" height="90"/><text class="m" x="121" y="171" text-anchor="middle">5</text><rect class="f" x="142" y="126" width="26" height="30"/><rect class="s" x="142" y="126" width="26" height="30"/><text class="m" x="155" y="171" text-anchor="middle">6</text><rect class="f" x="176" y="126" width="26" height="30"/><rect class="s" x="176" y="126" width="26" height="30"/><text class="m" x="189" y="171" text-anchor="middle">7</text><rect class="f" x="210" y="126" width="26" height="30"/><rect class="s" x="210" y="126" width="26" height="30"/><text class="m" x="223" y="171" text-anchor="middle">8</text><rect class="f" x="244" y="126" width="26" height="30"/><rect class="s" x="244" y="126" width="26" height="30"/><text class="m" x="257" y="171" text-anchor="middle">9</text><line class="ax" x1="25" y1="126" x2="31" y2="126"/><text class="m" x="21" y="130" text-anchor="end">1</text><line class="ax" x1="25" y1="96" x2="31" y2="96"/><text class="m" x="21" y="100" text-anchor="end">2</text><line class="ax" x1="25" y1="66" x2="31" y2="66"/><text class="m" x="21" y="70" text-anchor="end">3</text><text class="m" x="286" y="186" text-anchor="end">punkty</text><text class="m" x="28" y="20" text-anchor="start">liczba osób</text><line class="p d" x1="141.4" y1="160" x2="141.4" y2="40"/><text class="pn" x="145.4" y="38" text-anchor="start">średnia 5,6</text><text class="m" x="119" y="58" text-anchor="end">Me = Mo = 5</text></svg></div>
<p class="step"><b>a)</b> Suma wyników: \(3+4+4+5+5+5+6+7+8+9=56\), więc średnia \(\dfrac{56}{10}=5{,}6\). Dane są uporządkowane; dla dziesięciu liczb mediana to średnia piątej i szóstej: \(\dfrac{5+5}2=5\). Najczęściej występuje \(5\) (trzy razy) – dominanta \(5\).</p>
<p class="step"><b>b)</b> Niech nowa osoba uzyskała \(x\) punktów. Z \(\dfrac{56+x}{11}=6\) mamy \(56+x=66\), czyli \(x=10\).</p>`
  }
];
