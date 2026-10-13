/*
  Treść strony. Tu zmieniasz tytuł, działy i listę podtematów.

  Temat (topic):
    title    nazwa działu
    formula  wzór w LaTeX-u pokazywany na karcie (opcjonalnie; w tekście JS pamiętaj o podwójnym \\)
    items    lista podtematów: zwykły tekst albo { title, files: [...] }
    files    PDF-y do całego działu (opcjonalnie; obecnie nieużywane)

  Teoria i zadania są osobnymi plikami JS, wczytywanymi w index.html:
    teoria/<sekcja>-<numer>.js   tekst teorii (HTML + wzory w \( \) i \[ \]), np. teoria/matura-3.js
    zadania/<sekcja>-<numer>.js  lista zadań z odpowiedziami i rozwiązaniami, np. zadania/matura-3.js
  Numer to pozycja działu na liście poniżej (zaczynając od 1).
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
      "Wszystkie działy matury rozszerzonej z matematyki. Do każdego: teoria z definicjami i własnościami oraz zadania z arkuszy CKE z odpowiedziami i rozwiązaniami.",
    tasksLabel: "Zadania z rozwiązaniami",
    tasksNote:
      "Treści zadań są oddane własnymi słowami, z zachowaniem wszystkich danych; oryginalne sformułowania znajdziesz w arkuszach CKE. Rozwiązania są autorskie. Najpierw spróbuj samodzielnie, potem otwórz odpowiedź lub rozwiązanie.",
    topics: [
      {
        title: "Liczby rzeczywiste i wyrażenia algebraiczne",
        formula: "\\log_a b=\\frac{\\log_c b}{\\log_c a}",
        items: [
          "Zbiory liczbowe, przedziały, podzielność",
          "Procenty i procent składany",
          "Potęgi i pierwiastki",
          "Wartość bezwzględna i jej własności",
          "Logarytmy i ich własności",
          "Wzory skróconego mnożenia i przekształcanie wyrażeń",
          "Nierówność między średnimi i dowody algebraiczne",
        ],
        files: [],
      },
      {
        title: "Równania i nierówności",
        formula: "W(x)=(x-a)\\,Q(x)+W(a)",
        items: [
          "Równania i nierówności liniowe, układy równań",
          "Równanie i nierówność kwadratowa, wzory Viète’a",
          "Równania i nierówności z wartością bezwzględną",
          "Wielomiany (dzielenie, twierdzenie Bézouta, pierwiastki wymierne)",
          "Równania i nierówności wymierne",
          "Równania z parametrem i równania niewymierne",
        ],
        files: [],
      },
      {
        title: "Funkcje i ich własności",
        formula: "x_1+x_2=-\\frac{b}{a},\\qquad x_1x_2=\\frac{c}{a}",
        items: [
          "Pojęcie funkcji, dziedzina, zbiór wartości, monotoniczność, parzystość",
          "Funkcja liniowa i kwadratowa (wzory Viète’a, zadania z parametrem)",
          "Funkcja wymierna (homograficzna)",
          "Funkcja wykładnicza i logarytmiczna, równania i nierówności",
          "Przekształcenia wykresów funkcji (symetrie, przesunięcia, wartość bezwzględna z funkcji)",
        ],
        files: [],
      },
      {
        title: "Trygonometria",
        formula: "\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta",
        items: [
          "Funkcje trygonometryczne kąta, miara łukowa, okrąg jednostkowy",
          "Wzory redukcyjne i tożsamości trygonometryczne",
          "Wzory na sumę i różnicę kątów, kąt podwojony, sumy funkcji trygonometrycznych",
          "Wykresy i własności funkcji trygonometrycznych",
          "Równania i nierówności trygonometryczne",
          "Twierdzenie sinusów i cosinusów",
        ],
        files: [],
      },
      {
        title: "Ciągi",
        formula: "S=\\sum_{k=0}^{\\infty}a_1q^{k}=\\frac{a_1}{1-q},\\quad |q|<1",
        items: [
          "Pojęcie ciągu, monotoniczność, ciągi rekurencyjne",
          "Ciąg arytmetyczny i geometryczny (wersja rozszerzona)",
          "Procent składany",
          "Granica ciągu",
          "Szereg geometryczny i jego suma",
        ],
        files: [],
      },
      {
        title: "Planimetria",
        formula: "c^2=a^2+b^2-2ab\\cos\\gamma",
        items: [
          "Kąty i proste równoległe, kąty w trójkącie i wielokącie",
          "Twierdzenie Talesa i twierdzenie o dwusiecznej",
          "Trójkąt prostokątny i równoboczny, trygonometria w trójkącie",
          "Twierdzenia sinusów i cosinusów, wzory na pole trójkąta",
          "Środkowe, symetralne, okręgi wpisany i opisany na trójkącie",
          "Podobieństwo i przystawanie figur",
          "Czworokąty: kwadrat, romb, równoległobok, trapez, deltoid",
          "Okrąg i koło: styczne, kąty w okręgu, wycinek koła",
          "Czworokąty wpisane i opisane, potęga punktu, wielokąty foremne",
          "Dowody geometryczne",
        ],
        files: [],
      },
      {
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
        title: "Stereometria",
        formula: "V=\\frac13\\,P_p\\cdot H",
        items: [
          "Proste i płaszczyzny w przestrzeni, kąty (w tym kąt dwuścienny)",
          "Graniastosłupy i ostrosłupy (pola, objętości, kąty)",
          "Bryły obrotowe: walec, stożek, kula",
          "Przekroje brył i bryły podobne",
        ],
        files: [],
      },
      {
        title: "Kombinatoryka i prawdopodobieństwo",
        formula: "P(A\\mid B)=\\frac{P(B\\mid A)\\,P(A)}{P(B)}",
        items: [
          "Reguły zliczania, permutacje, wariacje, kombinacje",
          "Dwumian Newtona i zasada włączeń i wyłączeń",
          "Prawdopodobieństwo klasyczne i geometryczne",
          "Prawdopodobieństwo warunkowe, całkowite, wzór Bayesa",
          "Schemat Bernoulliego",
          "Wartość oczekiwana i statystyka opisowa",
        ],
        files: [],
      },
      {
        title: "Rachunek różniczkowy i analiza",
        formula: "f'(x_0)=\\lim_{h\\to0}\\frac{f(x_0+h)-f(x_0)}{h}",
        items: [
          "Granica funkcji i asymptoty",
          "Ciągłość funkcji",
          "Pochodna i reguły różniczkowania",
          "Styczna do wykresu funkcji",
          "Monotoniczność i ekstrema lokalne",
          "Zadania optymalizacyjne",
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
