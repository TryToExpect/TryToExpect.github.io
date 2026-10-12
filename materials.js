/*
  Treść strony. Tu zmieniasz tytuł, działy i dodajesz PDF-y (patrz README.md).

  Temat (topic):
    title    nazwa działu
    formula  wzór w LaTeX-u pokazywany na karcie (opcjonalnie; w tekście JS pamiętaj o podwójnym \\)
    items    lista podtematów: zwykły tekst albo { title, files: [...] }
    files    PDF-y do całego działu (opcjonalnie)

  Plik PDF (file):
    type     "teoria" | "zadania" | "rozwiazania" | "arkusz"
    file     ścieżka względem index.html, np. "pdf/matura/logarytmy-teoria.pdf"
    title    własny podpis (opcjonalnie)
    date     "RRRR-MM-DD" (opcjonalnie; do 14 dni od tej daty plik ma znacznik "nowe")
    pages    liczba stron (opcjonalnie)
*/

window.SITE = {
  title: "JcobMath",
  lead: "Notatki, zadania i rozwiązania w PDF. Skład w LaTeX-u, żeby dobrze czytało się je na ekranie i na papierze.",
  contact: "", // np. adres e-mail; pokaże się w stopce, gdy nie jest pusty
};

window.MATERIALS = {
  matura: {
    name: "Matura rozszerzona",
    glyph: "π",
    unit: "Dział",
    units: ["dział", "działy", "działów"],
    intro:
      "Wszystkie działy matury rozszerzonej z matematyki. Do każdego dodaję notatki z teorią, zadania i rozwiązania.",
    topics: [
      {
        title: "Liczby rzeczywiste i wyrażenia algebraiczne",
        formula: "\\log_a b=\\frac{\\log_c b}{\\log_c a}",
        items: [
          "Działania na potęgach i pierwiastkach",
          "Wartość bezwzględna i jej własności",
          "Logarytmy i ich własności",
          "Dowody algebraiczne (podzielność, nierówności)",
        ],
        files: [],
      },
      {
        title: "Równania i nierówności",
        formula: "W(x)=(x-a)\\,Q(x)+W(a)",
        items: [
          "Równania i nierówności z wartością bezwzględną oraz z parametrem",
          "Wielomiany (dzielenie wielomianów, twierdzenie o reszcie, twierdzenie o pierwiastkach wymiernych)",
          "Równania i nierówności wymierne",
        ],
        files: [],
      },
      {
        title: "Funkcje i ich własności",
        formula: "x_1+x_2=-\\frac{b}{a},\\qquad x_1x_2=\\frac{c}{a}",
        items: [
          "Pojęcie funkcji, dziedzina, zbiór wartości",
          "Funkcja kwadratowa (wzory Viète’a, zadania z parametrem)",
          "Funkcja wykładnicza i logarytmiczna",
          "Przekształcenia wykresów funkcji (symetrie, przesunięcia, wartość bezwzględna z funkcji)",
        ],
        files: [],
      },
      {
        title: "Trygonometria",
        formula: "\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta",
        items: [
          "Tożsamości i równania trygonometryczne",
          "Funkcje trygonometryczne sumy i różnicy kątów, wzory na sumę i różnicę funkcji trygonometrycznych",
          "Wykresy funkcji trygonometrycznych",
        ],
        files: [],
      },
      {
        title: "Ciągi",
        formula: "S=\\sum_{k=0}^{\\infty}a_1q^{k}=\\frac{a_1}{1-q},\\quad |q|<1",
        items: [
          "Ciąg arytmetyczny i geometryczny (wersja rozszerzona)",
          "Granica ciągu",
          "Szereg geometryczny i jego suma",
        ],
        files: [
          { type: "teoria", file: "pdf/matura/ciagi-teoria.pdf", title: "Wprowadzenie teoretyczne: ciągi, granice, szereg geometryczny", date: "2026-10-12", pages: 5 },
          { type: "zadania", file: "pdf/matura/ciagi-zadania-cke.pdf", title: "11 zadań z arkuszy CKE (2018–2026) z odpowiedziami", date: "2026-10-12", pages: 4 },
          { type: "rozwiazania", file: "pdf/matura/ciagi-rozwiazania-cke.pdf", title: "Rozwiązania i wyjaśnienia zadań z arkuszy CKE", date: "2026-10-12", pages: 5 },
        ],
      },
      {
        title: "Planimetria",
        formula: "c^2=a^2+b^2-2ab\\cos\\gamma",
        items: [
          "Twierdzenie sinusów i cosinusów",
          "Własności trójkątów, czworokątów i okręgów (kąty wpisane, środkowe, styczne)",
          "Podobieństwo i przystawanie figur, pola figur",
          "Dowody geometryczne",
        ],
        files: [],
      },
      {
        title: "Geometria analityczna",
        formula: "d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}",
        items: [
          "Prosta w układzie współrzędnych (równanie ogólne i kierunkowe, odległość punktu od prostej)",
          "Okrąg w układzie współrzędnych (równanie okręgu, wzajemne położenie prostej i okręgu)",
          "Wektory na płaszczyźnie i ich zastosowania",
        ],
        files: [],
      },
      {
        title: "Stereometria",
        formula: "V=\\frac13\\,P_p\\cdot H",
        items: [
          "Kąty między odcinkami i płaszczyznami w bryłach (graniastosłupy, ostrosłupy, bryły obrotowe)",
          "Przekroje brył",
          "Objętości i pola powierzchni brył",
        ],
        files: [],
      },
      {
        title: "Kombinatoryka i prawdopodobieństwo",
        formula: "P(A\\mid B)=\\frac{P(B\\mid A)\\,P(A)}{P(B)}",
        items: [
          "Reguły mnożenia i dodawania, permutacje, kombinacje, wariacje",
          "Prawdopodobieństwo klasyczne i geometryczne",
          "Prawdopodobieństwo warunkowe, wzór na prawdopodobieństwo całkowite oraz wzór Bayesa",
          "Schemat Bernoulliego",
        ],
        files: [],
      },
      {
        title: "Rachunek różniczkowy i analiza",
        formula: "f'(x_0)=\\lim_{h\\to0}\\frac{f(x_0+h)-f(x_0)}{h}",
        items: [
          "Granica funkcji w punkcie",
          "Pochodna funkcji (obliczanie pochodnych, równanie stycznej do wykresu funkcji)",
          "Badanie monotoniczności funkcji i wyznaczanie ekstremów lokalnych",
          "Zadania optymalizacyjne z wykorzystaniem pochodnej",
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
      "Przedmioty z pierwszych lat studiów ścisłych i informatycznych. Notatki z teorią, zbiory zadań i rozwiązania.",
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
          "Przestrzeń probabilistyczna, prawdopodobieństwo warunkowe, niezależność",
          "Zmienne losowe dyskretne i ciągłe, dystrybuanta, gęstość",
          "Wartość oczekiwana, wariancja, kowariancja",
          "Prawa wielkich liczb i centralne twierdzenie graniczne",
          "Estymacja punktowa i przedziałowa",
          "Testowanie hipotez statystycznych",
        ],
        files: [],
      },
    ],
  },
};
