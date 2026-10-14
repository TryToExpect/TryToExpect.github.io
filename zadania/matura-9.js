(window.TASKS = window.TASKS || {})['matura-9'] = [
  {
    id: 1,
    group: "Kombinatoryka",
    src: "maj 2024 · zad. 6",
    pts: 3,
    tags: ["kombinatoryka", "liczby bez powtórzeń cyfr", "kombinacje i permutacje"],
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
    id: 3,
    group: "Prawdopodobieństwo warunkowe",
    src: "maj 2025 · zad. 4",
    pts: 3,
    tags: ["prawdopodobieństwo warunkowe", "rzut kostką"],
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
    q: String.raw`<p>Ze zbioru wszystkich liczb naturalnych czterocyfrowych losujemy jedną liczbę.</p>
<p>Oblicz prawdopodobieństwo zdarzenia polegającego na tym, że wylosowana liczba jest podzielna przez \(15\), jeśli wiadomo, że jest ona podzielna przez \(18\).</p>`,
    ans: String.raw`\(\dfrac{1}{5}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> \(P(A\mid B)=\dfrac{|A\cap B|}{|B|}\), gdzie \(B\) – „podzielna przez \(18\)”, a \(A\cap B\) – „podzielna przez \(18\) i przez \(15\)”, czyli (bo \(\mathrm{NWW}(15,18)=90\)) „podzielna przez \(90\)”.</p>
<p class="step"><b>Krok 1: podzielne przez \(18\).</b> Najmniejsza czterocyfrowa: \(18\cdot56=1008\); największa: \(18\cdot555=9990\). Jest ich \(555-56+1=500\).</p>
<p class="step"><b>Krok 2: podzielne przez \(90\).</b> Najmniejsza: \(90\cdot12=1080\); największa: \(90\cdot111=9990\). Jest ich \(111-12+1=100\).</p>
<p class="step"><b>Krok 3.</b> \(P=\dfrac{100}{500}=\dfrac15\).</p>`
  },
  {
    id: 5,
    group: "Schemat Bernoulliego",
    src: "maj 2023 · zad. 2",
    pts: 3,
    tags: ["schemat Bernoulliego", "co najmniej cztery sukcesy"],
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
    q: String.raw`<p>W pewnym zakładzie mleczarskim śmietana produkowana jest w \(200\)-gramowych opakowaniach. Prawdopodobieństwo zdarzenia, że w losowo wybranym opakowaniu śmietana zawiera mniej niż \(36\%\) tłuszczu, jest równe \(0{,}01\). Kontroli poddajemy \(10\) losowo wybranych opakowań ze śmietaną.</p>
<p>Oblicz prawdopodobieństwo zdarzenia polegającego na tym, że wśród opakowań poddanych tej kontroli będzie co najwyżej jedno opakowanie ze śmietaną, która zawiera mniej niż \(36\%\) tłuszczu. Wynik zapisz w postaci ułamka dziesiętnego w zaokrągleniu do części tysięcznych.</p>`,
    ans: String.raw`\(\approx0{,}996\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Schemat Bernoulliego z \(n=10\) i prawdopodobieństwem „sukcesu” (opakowanie z za małą zawartością tłuszczu) \(p=0{,}01\). Interesuje nas \(P(S_{10}\le1)=P(S_{10}=0)+P(S_{10}=1)\).</p>
<p class="step"><b>Krok 1.</b> \(P(S_{10}=0)=0{,}99^{10}\approx0{,}904382\) oraz \(P(S_{10}=1)=\binom{10}{1}\cdot0{,}01\cdot0{,}99^9=0{,}1\cdot0{,}99^9\approx0{,}091352\).</p>
<p class="step"><b>Krok 2.</b> \(P\approx0{,}904382+0{,}091352=0{,}995734\approx0{,}996\).</p>`
  }
];
