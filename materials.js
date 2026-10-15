/*
  Treść strony. Tu zmieniasz tytuł, działy i listę podtematów.

  Temat (topic):
    key      stały klucz działu, np. "matura-11" (opcjonalny; zob. niżej)
    title    nazwa działu
    formula  wzór w LaTeX-u pokazywany na karcie (opcjonalnie; w tekście JS pamiętaj o podwójnym \\)
    items    lista podtematów: zwykły tekst albo { title, files: [...] }
    info     true: dział informacyjny (poradnik): nie dostaje numeru "Dział NN", tylko podpis z pola kicker
    kicker   własny podpis nad nazwą działu (opcjonalnie, zwykle razem z info)
    files    PDF-y do całego działu (opcjonalnie; obecnie nieużywane)

  Teoria i zadania są osobnymi plikami JS, wczytywanymi w index.html:
    teoria/<sekcja>-<numer>.js   tekst teorii (HTML + wzory w \( \) i \[ \]), np. teoria/matura-3.js
    zadania/<sekcja>-<numer>.js  lista zadań z odpowiedziami i rozwiązaniami, np. zadania/matura-3.js
  <sekcja>-<numer> to klucz działu: pole key, a gdy go nie ma, pozycja działu na liście poniżej (od 1, tak jest w „Studiach”).
  Klucz jest częścią nazw plików, adresu linku (#matura-4-zadania-6) i zapisu zaliczeń w przeglądarkach uczniów.
  Działy matury mają stałe klucze, więc kolejność na liście można zmieniać, a działy dzielić i dodawać bez psucia linków
  i zaliczeń. Nowy dział dostaje nowy, nieużywany numer (prefiks jak sekcja, np. "matura-15"); klucza nie zmieniaj.
  Gdy przenosisz zadanie do innego działu, dopisz je w window.MOVED_TASKS na końcu pliku (as: { staryId: nowyId },
  gdy w nowym dziale zadanie dostaje inne id).

  Zadanie (obiekt w zadania/<sekcja>-<numer>.js):
    id       stały numer zadania w tym pliku. Nie zmieniaj go i nie używaj ponownie: od niego zależą linki
             do zadań (#matura-4-zadania-6) oraz zaliczenia zapisane w przeglądarkach uczniów. Nowe zadanie
             dostaje kolejny wolny numer, także gdy wstawiasz je w środek listy.
    group    nagłówek grupy (zadania z tą samą grupą trzymaj obok siebie)
    tags, q, ans, sol   słowa kluczowe, treść, odpowiedź, rozwiązanie (HTML + wzory; znak < we wzorze pisz jako &lt;)
    req      lista kodów wymagań z podstawy programowej, np. ["ZR III.5"]; kody i ich opisy są w window.REQS (na dole pliku)
    fig, pts, src, label   opcjonalnie: rysunek, punkty, źródło, własny podpis zamiast „CKE · matura …” (np. "autorskie")
  Napis "Zadanie N" w oknie to pozycja na liście (od 1 w każdym dziale), więc nie wpisuj pola no.

  Teoria: fragment spoza wymagań podstawy programowej opakuj w
    <details class="opt"><summary><span class="optb">Poza wymaganiami</span>Tytuł</summary><div class="opt-body">…</div></details>
  a dowód z listy podstawy w ramkę <div class="bx pf" data-pf="zp1">…</div> (spis dowodów w teoria/matura-1.js).
  Poprawność plików sprawdza tools/check.mjs (uruchamia go GitHub Actions po każdym pushu).
*/

window.SITE = {
  title: "JcobMath",
  lead: "Strona od pasjonata matematyki. Teoria, zadania i rozwiązania krok po kroku, wszystko w jednym miejscu. Wybierz dział i ucz się swoim tempem.",
  contact: "", // np. adres e-mail; pokaże się w stopce, gdy nie jest pusty
};

window.MATERIALS = {
  matura: {
    name: "Matura rozszerzona",
    glyph: "π",
    unit: "Dział",
    units: ["dział", "działy", "działów"],
    intro:
      "Wszystkie działy matury rozszerzonej z matematyki. Do każdego: teoria z definicjami, własnościami i dowodami oraz zadania z odpowiedziami i rozwiązaniami (z arkuszy CKE i autorskie). Fragmenty spoza wymagań podstawy programowej są oznaczone plakietką „Poza wymaganiami” i zwinięte.",
    tasksLabel: "Zadania z rozwiązaniami",
    tasksNote:
      "Treści zadań z arkuszy CKE są oddane własnymi słowami, z zachowaniem wszystkich danych; oryginalne sformułowania znajdziesz w arkuszach. Zadania z oznaczeniem „autorskie” ułożono na wzór zadań maturalnych (nie pochodzą z arkuszy CKE, a liczba punktów przy nich jest orientacyjna). Rozwiązania są autorskie. Kod przy zadaniu (np. ZR III.5) to numer wymagania z podstawy programowej: ZP – zakres podstawowy, ZR – rozszerzony. Najpierw spróbuj samodzielnie, potem otwórz odpowiedź lub rozwiązanie.",
    topics: [
      {
        key: "matura-14",
        info: true,
        kicker: "Poradnik",
        title: "Jak wygląda matura i jak pisać rozwiązania",
        items: [
          "Mapa arkusza: ile zadań, ile punktów, jakie działy",
          "Waga działów w arkuszach 2023–2026",
          "Jak pisać rozwiązanie, żeby dostać punkty",
          "Lista dowodów z podstawy programowej",
        ],
        files: [],
      },
      {
        key: "matura-11",
        title: "Liczby rzeczywiste, procenty, potęgi i logarytmy",
        formula: "\\log_a b=\\frac{\\log_c b}{\\log_c a}",
        items: [
          "Zbiory liczbowe, przedziały, podzielność, dowód niewymierności",
          "Procenty, promile i procent składany",
          "Potęgi i pierwiastki, notacja wykładnicza (z dowodem własności potęg)",
          "Wartość bezwzględna i jej własności",
          "Logarytmy i ich własności (z dowodem)",
        ],
        files: [],
      },
      {
        key: "matura-1",
        title: "Wyrażenia algebraiczne i dowody",
        formula: "\\frac{a+b}{2}\\ge\\sqrt{ab}\\quad(a,b\\ge0)",
        items: [
          "Wzory skróconego mnożenia i przekształcanie wyrażeń",
          "Dowody algebraiczne i nierówności (nierówność między średnimi jako dodatek)",
          "Dowody liczbowe i podzielność, nieskończoność zbioru liczb pierwszych",
          "Lista dowodów z podstawy programowej z odnośnikami",
        ],
        files: [],
      },
      {
        key: "matura-2",
        title: "Równania i nierówności",
        formula: "W(x)=(x-a)\\,Q(x)+W(a)",
        items: [
          "Równania i nierówności liniowe, układy równań (także nieliniowe), zadania tekstowe",
          "Równanie i nierówność kwadratowa, wzory Viète’a (z dowodem)",
          "Równania i nierówności z wartością bezwzględną, metoda przedziałów",
          "Wielomiany (dzielenie, schemat Hornera, twierdzenie Bézouta, równania dwukwadratowe)",
          "Równania i nierówności wymierne",
          "Równania z parametrem i równania niewymierne",
        ],
        files: [],
      },
      {
        key: "matura-3",
        title: "Własności funkcji, funkcja liniowa i wymierna",
        formula: "f(x)=\\frac{k}{x-p}+q,\\quad k\\ne0",
        items: [
          "Pojęcie funkcji, dziedzina, zbiór wartości, monotoniczność",
          "Odczytywanie własności z wykresu, funkcje określone przedziałami",
          "Monotoniczność z definicji, składanie funkcji",
          "Funkcja liniowa",
          "Funkcja wymierna (homograficzna)",
          "Przekształcenia wykresów funkcji (symetrie, przesunięcia, wartość bezwzględna z funkcji)",
        ],
        files: [],
      },
      {
        key: "matura-13",
        title: "Funkcja kwadratowa i zadania z parametrem",
        formula: "f(x)=a(x-p)^2+q,\\quad p=-\\frac{b}{2a},\\ q=-\\frac{\\Delta}{4a}",
        items: [
          "Postacie funkcji kwadratowej, wierzchołek, wykres",
          "Wyznaczanie wzoru funkcji kwadratowej",
          "Największa i najmniejsza wartość, zadania z kontekstem",
          "Położenie pierwiastków i zadania z parametrem",
          "Schemat rozwiązywania zadań z parametrem",
        ],
        files: [],
      },
      {
        key: "matura-12",
        title: "Funkcja wykładnicza i logarytmiczna",
        formula: "a^x=b\\iff x=\\log_a b\\quad(a>0,\\ a\\ne1,\\ b>0)",
        items: [
          "Funkcja wykładnicza i jej własności",
          "Funkcja logarytmiczna i jej własności",
          "Równania i nierówności wykładnicze i logarytmiczne",
          "Zastosowania: wzrost wykładniczy, rozpad, stygnięcie",
        ],
        files: [],
      },
      {
        key: "matura-5",
        title: "Ciągi",
        formula: "S=\\sum_{k=0}^{\\infty}a_1q^{k}=\\frac{a_1}{1-q},\\quad |q|<1",
        items: [
          "Pojęcie ciągu, monotoniczność, ciągi rekurencyjne",
          "Ciąg arytmetyczny i geometryczny (z dowodem wzorów)",
          "Procent składany",
          "Granica ciągu",
          "Szereg geometryczny i jego suma",
        ],
        files: [],
      },
      {
        key: "matura-4",
        title: "Trygonometria",
        formula: "\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta",
        items: [
          "Funkcje trygonometryczne kąta, miara łukowa, okrąg jednostkowy",
          "Wzory redukcyjne i tożsamości trygonometryczne",
          "Wzory na sumę i różnicę kątów (z dowodem), kąt podwojony",
          "Wykresy i własności funkcji trygonometrycznych",
          "Równania trygonometryczne (nierówności i kąt pomocniczy jako dodatek)",
        ],
        files: [],
      },
      {
        key: "matura-6",
        title: "Planimetria",
        formula: "c^2=a^2+b^2-2ab\\cos\\gamma",
        items: [
          "Kąty i proste równoległe, kąty w trójkącie i wielokącie",
          "Twierdzenie Talesa i twierdzenie o dwusiecznej",
          "Trójkąt prostokątny i równoboczny, trygonometria w trójkącie",
          "Twierdzenia sinusów i cosinusów (z dowodami), rodzaj trójkąta, wzory na pole",
          "Środkowe, symetralne, okręgi wpisany i opisany; dowody o punktach szczególnych",
          "Podobieństwo i przystawanie figur",
          "Czworokąty: kwadrat, romb, równoległobok, trapez, deltoid",
          "Okrąg i koło: styczne, kąty w okręgu (z dowodem), wycinek koła",
          "Czworokąty wpisane i opisane (warunki z dowodami), wielokąty foremne",
          "Dowody geometryczne",
        ],
        files: [],
      },
      {
        key: "matura-7",
        title: "Geometria analityczna",
        formula: "d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}",
        items: [
          "Wektory: współrzędne, działania, równoległość",
          "Odcinek i trójkąt: długość, środek, podział w stosunku, pole",
          "Prosta: postacie równania, równoległość i prostopadłość, odległość punktu od prostej",
          "Okrąg: równanie, położenie względem prostej i innego okręgu, styczne",
          "Przekształcenia geometryczne i pole figury w układzie współrzędnych",
        ],
        files: [],
      },
      {
        key: "matura-8",
        title: "Stereometria",
        formula: "V=\\frac13\\,P_p\\cdot H",
        items: [
          "Proste i płaszczyzny w przestrzeni, kąty; twierdzenia o prostopadłości z dowodami",
          "Graniastosłupy i ostrosłupy (pola, objętości, kąty)",
          "Bryły obrotowe: walec, stożek, kula",
          "Przekroje sześcianu i ostrosłupów, bryły podobne",
        ],
        files: [],
      },
      {
        key: "matura-9",
        title: "Kombinatoryka i prawdopodobieństwo",
        formula: "P(A\\mid B)=\\frac{P(B\\mid A)\\,P(A)}{P(B)}",
        items: [
          "Reguły zliczania, permutacje, wariacje, kombinacje",
          "Dwumian Newtona (z dowodami) i zasada włączeń i wyłączeń",
          "Prawdopodobieństwo klasyczne (geometryczne jako dodatek)",
          "Prawdopodobieństwo warunkowe, całkowite, wzór Bayesa",
          "Schemat Bernoulliego",
          "Statystyka opisowa: średnia, mediana, dominanta (wartość oczekiwana jako dodatek)",
        ],
        files: [],
      },
      {
        key: "matura-10",
        title: "Optymalizacja i rachunek różniczkowy",
        formula: "f'(x_0)=\\lim_{h\\to0}\\frac{f(x_0+h)-f(x_0)}{h}",
        items: [
          "Granica funkcji i asymptoty, granice z funkcją wykładniczą",
          "Ciągłość funkcji, własność Darboux",
          "Pochodna i reguły różniczkowania",
          "Styczna do wykresu funkcji",
          "Monotoniczność i ekstrema lokalne",
          "Zadania optymalizacyjne, także dwuczęściowe",
        ],
        files: [],
      },
    ],
  },

  studia: {
    name: "Studia",
    glyph: "∫",
    unit: "Przedmiot",
    units: ["przedmiot", "przedmioty", "przedmiotów"],
    intro:
      "Przedmioty z pierwszych lat studiów ścisłych i informatycznych. Teoria i zadania z rozwiązaniami pojawiają się tu stopniowo.",
    tasksLabel: "Zadania z rozwiązaniami",
    tasksNote:
      "Zadania z rachunku prawdopodobieństwa i statystyki. Najpierw spróbuj samodzielnie, potem otwórz odpowiedź lub rozwiązanie.",
    topics: [
      {
        title: "Wstęp do matematyki",
        formula: "\\sum_{k=1}^{n}k=\\frac{n(n+1)}{2}",
        items: [
          "Rachunek zdań i kwantyfikatory",
          "Zbiory, działania na zbiorach, iloczyn kartezjański",
          "Relacje (równoważności, porządku) i funkcje (injekcje, surjekcje, bijekcje)",
          "Indukcja matematyczna i metody dowodzenia",
          "Moc zbiorów, zbiory przeliczalne",
        ],
        files: [],
      },
      {
        title: "Analiza matematyczna I",
        formula: "\\int_a^b f'(x)\\,dx=f(b)-f(a)",
        items: [
          "Ciągi i granice, twierdzenie o trzech ciągach",
          "Granica i ciągłość funkcji, własność Darboux",
          "Pochodna, reguła de l’Hospitala, wzór Taylora",
          "Badanie przebiegu zmienności funkcji",
          "Całka nieoznaczona (metody całkowania) i oznaczona, zastosowania",
          "Całki niewłaściwe",
        ],
        files: [],
      },
      {
        title: "Analiza matematyczna II",
        formula: "e^x=\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}",
        items: [
          "Szeregi liczbowe i kryteria zbieżności",
          "Szeregi potęgowe i szeregi Taylora",
          "Funkcje wielu zmiennych: granice, pochodne cząstkowe, gradient",
          "Ekstrema lokalne i warunkowe (mnożniki Lagrange’a)",
          "Całki wielokrotne i zamiana zmiennych",
          "Równania różniczkowe zwyczajne pierwszego i drugiego rzędu",
        ],
        files: [],
      },
      {
        title: "Algebra liniowa",
        formula: "A\\mathbf{v}=\\lambda\\mathbf{v}",
        items: [
          "Macierze, działania na macierzach, wyznacznik",
          "Układy równań liniowych (eliminacja Gaussa, twierdzenie Kroneckera–Capellego)",
          "Przestrzenie wektorowe: baza, wymiar, podprzestrzenie",
          "Przekształcenia liniowe, jądro i obraz",
          "Wartości i wektory własne, diagonalizacja",
          "Przestrzenie euklidesowe, ortogonalizacja Grama–Schmidta",
        ],
        files: [],
      },
      {
        title: "Matematyka dyskretna",
        formula: "\\sum_{v\\in V}\\deg(v)=2\\,|E|",
        items: [
          "Kombinatoryka: zasada włączeń i wyłączeń, współczynniki dwumianowe",
          "Rekurencje liniowe i funkcje tworzące",
          "Teoria grafów: drzewa, spójność, cykle Eulera i Hamiltona, kolorowanie",
          "Teoria liczb: podzielność, algorytm Euklidesa, kongruencje",
          "Zasada szufladkowa Dirichleta",
        ],
        files: [],
      },
      {
        title: "Rachunek prawdopodobieństwa i statystyka",
        formula: "\\operatorname{Var}X=\\mathbb{E}X^2-(\\mathbb{E}X)^2",
        items: [
          "Przestrzeń probabilistyczna, prawdopodobieństwo warunkowe i niezależność",
          "Zmienne losowe, rozkłady, wektory losowe, sumy niezależnych zmiennych",
          "Wartość oczekiwana, wariancja, kowariancja, funkcje tworzące",
          "Nierówności i twierdzenia graniczne (prawa wielkich liczb, CTG)",
          "Próba, statystyki, estymacja punktowa (metoda największej wiarogodności, metoda momentów)",
          "Przedziały ufności i testowanie hipotez",
        ],
        files: [],
      },
    ],
  },
};

// Zadania przeniesione z jednego działu do drugiego (id zadania zostaje takie samo). Dzięki temu zaliczenia uczniów
// i stare linki (np. #matura-1-zadania-2) nadal działają. from – klucz dawnego działu, to – klucz nowego, ids – id zadań.
window.MOVED_TASKS = [
  { from: "matura-1", to: "matura-11", ids: [1, 2] },
  { from: "matura-3", to: "matura-12", ids: [1, 2, 3] },
  { from: "matura-3", to: "matura-13", ids: [4, 5, 6] },
  { from: "matura-2", to: "matura-13", ids: [6], as: { 6: 7 } },
  { from: "matura-11", to: "matura-10", ids: [1], as: { 1: 7 } },
  { from: "matura-8", to: "matura-10", ids: [1, 2], as: { 1: 8, 2: 9 } },
];

// Kody wymagań z podstawy programowej (ZPE, rok szkolny 2025/26), pokazywane przy zadaniach (pole req).
// ZP – zakres podstawowy, ZR – rozszerzony; rzymska liczba to dział podstawy, arabska – numer punktu.
window.REQS = {
  "ZP I.2": "proste dowody o podzielności i resztach",
  "ZP I.4": "prawa działań na potęgach i pierwiastkach",
  "ZP I.5": "monotoniczność potęgowania, porównywanie potęg",
  "ZP I.7": "wartość bezwzględna jako odległość, równania typu |x+4|=5",
  "ZP I.8": "potęgi w zadaniach praktycznych, procent składany",
  "ZP I.9": "logarytm: związek z potęgowaniem, wzory na iloczyn, iloraz i potęgę",
  "ZP II.1": "wzory skróconego mnożenia na (a±b)² i a²−b²",
  "ZP III.1": "przekształcenia równoważne równań i nierówności",
  "ZP III.4": "równania i nierówności kwadratowe",
  "ZP III.5": "równania wielomianowe w postaci iloczynowej",
  "ZP IV.1": "układy dwóch równań liniowych",
  "ZP IV.2": "układy równań w zadaniach tekstowych",
  "ZP V.1": "funkcja zadana opisem, tabelą, wykresem lub wzorem (także różnymi wzorami na przedziałach)",
  "ZP V.2": "obliczanie wartości funkcji ze wzoru",
  "ZP V.4": "odczytywanie własności funkcji z wykresu",
  "ZP V.6": "wzór funkcji liniowej z wykresu lub własności",
  "ZP V.9": "wzór funkcji kwadratowej z informacji o funkcji lub wykresie",
  "ZP V.10": "najmniejsza i największa wartość funkcji kwadratowej w przedziale domkniętym",
  "ZP V.11": "funkcje liniowa i kwadratowa w zagadnieniach praktycznych",
  "ZP V.12": "przekształcenia wykresów: y=f(x−a) i y=f(x)+b",
  "ZP V.13": "funkcja f(x)=a/x, wielkości odwrotnie proporcjonalne",
  "ZP V.14": "funkcje wykładnicza i logarytmiczna w zagadnieniach praktycznych",
  "ZP VI.5": "wyraz ogólny i suma ciągu arytmetycznego",
  "ZP VI.6": "wyraz ogólny i suma ciągu geometrycznego",
  "ZP VI.7": "własności ciągów w zadaniach, także praktycznych",
  "ZP VII.3": "twierdzenia sinusów i cosinusów, pole trójkąta ½ab·sinγ",
  "ZP VIII.2": "rodzaj trójkąta na podstawie długości boków",
  "ZP VIII.4": "własności czworokątów (prostokąt, równoległobok, romb, trapez)",
  "ZP VIII.8": "cechy podobieństwa trójkątów",
  "ZP VIII.9": "obwody i pola figur podobnych",
  "ZP VIII.11": "dowody geometryczne",
  "ZP VIII.12": "funkcje trygonometryczne w obliczaniu odcinków i pól",
  "ZP IX.2": "równania prostych, prosta o zadanych własnościach",
  "ZP IX.3": "odległość dwóch punktów",
  "ZP IX.4": "równanie okręgu",
  "ZP X.2": "kąt prostej z płaszczyzną i kąt dwuścienny",
  "ZP X.3": "kąty między odcinkami i ścianami w graniastosłupach i ostrosłupach",
  "ZP X.5": "objętość i pole powierzchni brył",
  "ZP X.6": "zależności między objętościami brył podobnych",
  "ZP XI.2": "reguły mnożenia i dodawania",
  "ZP XII.1": "prawdopodobieństwo w modelu klasycznym",
  "ZP XII.2": "średnia, mediana i dominanta",
  "ZP XIII.1": "optymalizacja opisana funkcją kwadratową",
  "ZR I.1": "zamiana podstawy logarytmu",
  "ZR II.1": "dzielenie wielomianu przez x−a",
  "ZR II.2": "rozkład wielomianu na czynniki (wyłączanie, grupowanie)",
  "ZR II.3": "pierwiastki całkowite wielomianu o współczynnikach całkowitych",
  "ZR II.4": "trójkąt Pascala i symbol Newtona",
  "ZR II.5": "wzory na a³±b³ oraz (a±b)ⁿ",
  "ZR II.6": "dodawanie i odejmowanie wyrażeń wymiernych",
  "ZR III.1": "równania i nierówności wielomianowe",
  "ZR III.2": "równania i nierówności wymierne",
  "ZR III.3": "wzory Viète’a",
  "ZR III.4": "równania i nierówności z wartością bezwzględną",
  "ZR III.5": "równania i nierówności z parametrem",
  "ZR III.6": "równania wielomianowe sprowadzalne do kwadratowych (dwukwadratowe)",
  "ZR III.7": "równania wymierne W(x)/V(x)=0",
  "ZR IV": "układy równań liniowych i kwadratowych z dwiema niewiadomymi",
  "ZR V.1": "szkicowanie wykresów na podstawie wykresu y=f(x)",
  "ZR V.2": "składanie funkcji",
  "ZR V.3": "dowodzenie monotoniczności funkcji z definicji",
  "ZR VI.1": "granice ciągów i twierdzenia o granicach",
  "ZR VI.2": "szereg geometryczny i jego suma",
  "ZR VII.1": "miara łukowa kąta",
  "ZR VII.2": "wykresy funkcji sin, cos, tg",
  "ZR VII.3": "okresowość funkcji trygonometrycznych",
  "ZR VII.4": "wzory redukcyjne",
  "ZR VII.5": "wzory na sin, cos, tg sumy, różnicy i kąta podwojonego",
  "ZR VII.6": "równania trygonometryczne",
  "ZR VII.7": "twierdzenie sinusów",
  "ZR VII.8": "rozwiązywanie trójkątów",
  "ZR VIII.1": "czworokąty wpisane w okrąg i opisane na okręgu",
  "ZR VIII.2": "twierdzenie odwrotne do twierdzenia Talesa",
  "ZR IX.1": "punkty wspólne prostej i okręgu",
  "ZR IX.2": "punkty wspólne dwóch okręgów",
  "ZR IX.3": "wektory w układzie współrzędnych",
  "ZR IX.4": "prosta prostopadła i prosta styczna do okręgu",
  "ZR X.1": "prosta prostopadła do płaszczyzny, twierdzenie o trzech prostopadłych",
  "ZR X.2": "przekroje sześcianu i ostrosłupów prawidłowych",
  "ZR XI.1": "permutacje, wariacje, kombinacje",
  "ZR XI.2": "symbol Newtona w zadaniach kombinatorycznych",
  "ZR XII.1": "prawdopodobieństwo warunkowe, całkowite, wzór Bayesa",
  "ZR XII.2": "schemat Bernoulliego",
  "ZR XIII.1": "granice funkcji, także jednostronne",
  "ZR XIII.2": "własność Darboux",
  "ZR XIII.3": "definicja pochodnej, interpretacja geometryczna i fizyczna",
  "ZR XIII.4": "obliczanie pochodnych",
  "ZR XIII.5": "monotoniczność funkcji a pochodna",
  "ZR XIII.6": "zadania optymalizacyjne z pochodną",
};
