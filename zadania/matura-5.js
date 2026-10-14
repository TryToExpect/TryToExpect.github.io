(window.TASKS = window.TASKS || {})['matura-5'] = [
  {
    id: 1,
    group: "Ciąg arytmetyczny i geometryczny",
    src: "maj 2018 · zad. 13",
    pts: 4,
    tags: ["ciąg geometryczny","układ równań","suma n początkowych wyrazów"],
    q: String.raw`<p>Wyrazy ciągu geometrycznego \((a_n)\), określonego dla \(n\ge1\), spełniają układ równań
    \[\begin{cases}a_3+a_6=-84\\ a_4+a_7=168\end{cases}\]
    Wyznacz liczbę \(n\) początkowych wyrazów tego ciągu, których suma \(S_n\) jest równa \(32769\).</p>`,
    ans: String.raw`\(n=15\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> W ciągu geometrycznym przejście do następnego wyrazu to mnożenie przez \(q\): \(a_{k+1}=q\,a_k\). Dlatego równanie z wyrazami \(a_4,a_7\) jest równaniem z \(a_3,a_6\) pomnożonym przez \(q\).</p>
<p class="step"><b>Krok 1: iloraz.</b> \(a_4+a_7=q\,a_3+q\,a_6=q\,(a_3+a_6)\), więc
    \[168=q\cdot(-84)\ \Longrightarrow\ q=-2 .\]</p>
<p class="step"><b>Krok 2: pierwszy wyraz.</b> \(a_3+a_6=a_3\,(1+q^3)=a_3\,(1-8)=-7a_3=-84\), czyli \(a_3=12\). Ponieważ \(a_3=a_1q^2=4a_1\), mamy \(a_1=3\).</p>
<p class="step"><b>Krok 3: suma.</b>
    \[S_n=a_1\cdot\frac{1-q^n}{1-q}=3\cdot\frac{1-(-2)^n}{3}=1-(-2)^n .\]</p>
<p class="step"><b>Krok 4: równanie na \(n\).</b> \(1-(-2)^n=32769\), czyli \((-2)^n=-32768=-2^{15}\). Lewa strona jest ujemna, więc \(n\) jest nieparzyste; wtedy \((-2)^n=-2^n\) i \(2^n=2^{15}\).</p>
<p class="note"><b>Sprawdzenie:</b> \(S_{15}=1-(-2)^{15}=1+32768=32769\). &nbsp;<b>Uwaga:</b> trzeba rozstrzygnąć parzystość \(n\) – dla parzystego \(n\) suma \(1-2^n\) byłaby ujemna i nie mogłaby wynosić \(32769\).</p>`
  },
  {
    id: 2,
    group: "Ciąg arytmetyczny i geometryczny",
    src: "maj 2026 · zad. 6",
    pts: 4,
    tags: ["ciąg arytmetyczny","warunek geometryczności","suma"],
    q: String.raw`<p>Dany jest skończony ciąg arytmetyczny \((a_n)\), który ma więcej niż \(6\) wyrazów. Pierwszy wyraz tego ciągu jest równy \(1\), a ostatni jest równy \(-2025\). Drugi, trzeci i szósty wyraz tego ciągu tworzą – w podanej kolejności – ciąg geometryczny.</p>
    <p>Oblicz sumę wszystkich wyrazów ciągu \((a_n)\).</p>`,
    ans: String.raw`\(-1\,026\,168\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Znamy \(a_1=1\), więc jedyną niewiadomą (poza liczbą wyrazów) jest różnica \(r\). Warunek geometryczności wyrazów \(a_2,a_3,a_6\) wyznaczy \(r\); potem z ostatniego wyrazu policzymy liczbę wyrazów i sumę.</p>
<p class="step"><b>Krok 1: wyrazy.</b> \(a_2=1+r,\ a_3=1+2r,\ a_6=1+5r\). Trzy liczby w tej kolejności tworzą ciąg geometryczny, gdy środkowa do kwadratu równa się iloczynowi skrajnych:
    \[(1+2r)^2=(1+r)(1+5r)\ \Longrightarrow\ 1+4r+4r^2=1+6r+5r^2\ \Longrightarrow\ r^2+2r=0 .\]
    Stąd \(r=0\) lub \(r=-2\).</p>
<p class="step"><b>Krok 2: odrzucenie.</b> Dla \(r=0\) wszystkie wyrazy są równe \(1\), a ostatni ma być równy \(-2025\) – sprzeczność. Zostaje \(r=-2\), czyli \(a_n=1-2(n-1)=3-2n\).</p>
<p class="step"><b>Krok 3: liczba wyrazów.</b> Ostatni wyraz: \(3-2N=-2025\), skąd \(N=1014\) (\(&gt;6\), więc wyraz \(a_6\) istnieje).</p>
<p class="step"><b>Krok 4: suma.</b>
    \[S_{1014}=\frac{a_1+a_N}{2}\cdot N=\frac{1-2025}{2}\cdot1014=-1012\cdot1014=-1\,026\,168 .\]</p>
<p class="note"><b>Sprawdzenie:</b> \(a_2=-1,\ a_3=-3,\ a_6=-9\) – ciąg geometryczny o ilorazie \(3\). Rachunek pomocniczy: \(1012\cdot1014=1013^2-1=1\,026\,168\). &nbsp;<b>Uwaga:</b> założenie „więcej niż 6 wyrazów” sprawdzamy dopiero po policzeniu \(N\).</p>`
  },
  {
    id: 3,
    group: "Ciąg arytmetyczny i geometryczny",
    src: "maj 2024 · zad. 7",
    pts: 4,
    tags: ["ciąg arytmetyczny i geometryczny razem","własność średniej"],
    q: String.raw`<p>Trzywyrazowy ciąg \((x,y,z)\) jest geometryczny i rosnący, a suma jego wyrazów jest równa \(105\). Liczby \(x\), \(y\) oraz \(z\) są – odpowiednio – pierwszym, drugim oraz szóstym wyrazem pewnego ciągu arytmetycznego \((a_n)\), określonego dla każdej liczby naturalnej \(n\ge1\).</p>
    <p>Oblicz \(x\), \(y\) oraz \(z\).</p>`,
    ans: String.raw`\(x=5,\quad y=20,\quad z=80\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wszystko wyrazimy przez \(x\) i różnicę \(r\) ciągu arytmetycznego: \(y=x+r\), \(z=x+5r\). Warunek geometryczności \(y^2=xz\) da zależność między \(x\) i \(r\).</p>
<p class="step"><b>Krok 1: warunek geometryczny.</b>
    \[(x+r)^2=x(x+5r)\ \Longrightarrow\ x^2+2xr+r^2=x^2+5xr\ \Longrightarrow\ r\,(r-3x)=0 .\]</p>
<p class="step"><b>Krok 2: odrzucenie.</b> Dla \(r=0\) mielibyśmy \(x=y=z\) – ciąg stały, a ma być rosnący. Zostaje \(r=3x\), więc \(y=4x\) i \(z=16x\).</p>
<p class="step"><b>Krok 3: suma.</b> \(x+4x+16x=21x=105\), czyli \(x=5\).</p>
<p class="note"><b>Sprawdzenie:</b> \((5,20,80)\) to ciąg geometryczny o ilorazie \(4\), rosnący, suma \(105\). W ciągu arytmetycznym o \(r=15\): \(a_1=5,\ a_2=20,\ a_6=5+5\cdot15=80\). &nbsp;<b>Uwaga:</b> przy dzieleniu przez \(r\) łatwo „zgubić” przypadek \(r=0\); lepiej wyłączyć \(r\) przed nawias, jak wyżej.</p>`
  },
  {
    id: 4,
    group: "Ciąg arytmetyczny i geometryczny",
    src: "maj 2019 · zad. 12",
    pts: 6,
    tags: ["ciąg arytmetyczny","ciąg geometryczny","równanie kwadratowe"],
    q: String.raw`<p>Trzywyrazowy ciąg \((a,b,c)\) o wyrazach dodatnich jest arytmetyczny, a ciąg
    \[\left(\frac1a,\ \frac{2}{3b},\ \frac{1}{2a+2b+c}\right)\]
    jest geometryczny. Oblicz iloraz ciągu geometrycznego.</p>`,
    ans: String.raw`\(q=\dfrac13\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Z dwóch ciągów wyciągamy dwa warunki: \(2b=a+c\) (arytmetyczny) oraz \(\left(\tfrac{2}{3b}\right)^2=\tfrac1a\cdot\tfrac{1}{2a+2b+c}\) (geometryczny). Usuwamy \(c\) i dostajemy równanie jednorodne na \(a\) i \(b\).</p>
<p class="step"><b>Krok 1: usuń \(c\).</b> Z \(2b=a+c\) mamy \(c=2b-a\), więc \(2a+2b+c=a+4b\).</p>
<p class="step"><b>Krok 2: warunek geometryczny.</b>
    \[\frac{4}{9b^2}=\frac{1}{a\,(a+4b)}\ \Longrightarrow\ 4a(a+4b)=9b^2\ \Longrightarrow\ 4a^2+16ab-9b^2=0 .\]</p>
<p class="step"><b>Krok 3: stosunek \(a:b\).</b> Dzielimy przez \(b^2&gt;0\) i podstawiamy \(t=\tfrac ab&gt;0\): \(4t^2+16t-9=0\), \(\Delta=256+144=400\),
    \[t=\frac{-16\pm20}{8}\in\left\{\tfrac12,\ -\tfrac92\right\}.\]
    Wyrazy są dodatnie, więc \(t&gt;0\) i \(t=\tfrac12\), czyli \(b=2a\) oraz \(c=2b-a=3a\).</p>
<p class="step"><b>Krok 4: iloraz.</b> Ciąg geometryczny to \(\left(\dfrac1a,\ \dfrac{2}{6a},\ \dfrac{1}{2a+4a+3a}\right)=\left(\dfrac1a,\ \dfrac1{3a},\ \dfrac1{9a}\right)\), więc
    \[q=\frac{1/(3a)}{1/a}=\frac13 .\]</p>
<p class="note"><b>Sprawdzenie:</b> \(\dfrac{1/(9a)}{1/(3a)}=\dfrac13\) ✓. &nbsp;<b>Uwaga:</b> rozwiązanie \(t=-\tfrac92\) odrzucamy z uzasadnieniem „wyrazy dodatnie”. Przy zadaniu za 6 punktów warto zapisać każde takie uzasadnienie.</p>`
  },
  {
    id: 5,
    group: "Granica ciągu",
    src: "maj 2021 · zad. 5",
    pts: 2,
    tags: ["granica ciągu wymiernego"],
    q: String.raw`<p>Oblicz granicę
    \[\lim_{n\to\infty}\frac{(3n+2)^2-(1-2n)^2}{(2n-1)^2}.\]
    Wpisz – od lewej do prawej – cyfrę jedności i pierwsze dwie cyfry po przecinku skończonego rozwinięcia dziesiętnego otrzymanego wyniku.</p>`,
    ans: String.raw`\(\dfrac54\); &nbsp;w kratkach: <b>1 · 2 · 5</b>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Licznik i mianownik to wielomiany stopnia 2, więc granica jest ilorazem współczynników przy \(n^2\). Wystarczy rozwinąć kwadraty.</p>
<p class="step"><b>Licznik:</b> \((3n+2)^2-(1-2n)^2=(9n^2+12n+4)-(4n^2-4n+1)=5n^2+16n+3\).
    (Kontrola ze wzoru na różnicę kwadratów: \((5n+1)(n+3)=5n^2+16n+3\).) &nbsp;<b>Mianownik:</b> \((2n-1)^2=4n^2-4n+1\).</p>
<p class="step"><b>Granica</b> (dzielimy licznik i mianownik przez \(n^2\)):
    \[\lim\frac{5n^2+16n+3}{4n^2-4n+1}=\lim\frac{5+\frac{16}{n}+\frac{3}{n^2}}{4-\frac4n+\frac1{n^2}}=\frac54=1{,}25 .\]</p>`
  },
  {
    id: 6,
    group: "Granica ciągu",
    src: "maj 2019 · zad. 5",
    pts: 2,
    tags: ["granica różnicy ułamków"],
    q: String.raw`<p>Oblicz granicę
    \[\lim_{n\to\infty}\left(\frac{9n^3+11n^2}{7n^3+5n^2+3n+1}-\frac{n^2}{3n^2+1}\right).\]
    Wpisz – od lewej do prawej – trzy kolejne cyfry po przecinku rozwinięcia dziesiętnego otrzymanego wyniku.</p>`,
    ans: String.raw`\(\dfrac{20}{21}\); &nbsp;w kratkach: <b>9 · 5 · 2</b>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Obie części różnicy mają granice skończone, więc wolno policzyć je osobno i odjąć (twierdzenie o granicy różnicy).</p>
<p class="step"><b>Pierwszy ułamek</b> (dzielimy przez \(n^3\)): \(\dfrac{9n^3+11n^2}{7n^3+5n^2+3n+1}=\dfrac{9+\frac{11}{n}}{7+\frac5n+\frac3{n^2}+\frac1{n^3}}\longrightarrow\dfrac97\).</p>
<p class="step"><b>Drugi ułamek</b> (dzielimy przez \(n^2\)): \(\dfrac{n^2}{3n^2+1}=\dfrac{1}{3+\frac1{n^2}}\longrightarrow\dfrac13\).</p>
<p class="step"><b>Wynik:</b> \(\dfrac97-\dfrac13=\dfrac{27-7}{21}=\dfrac{20}{21}=0{,}95238\ldots\)</p>`
  },
  {
    id: 7,
    group: "Granica ciągu",
    src: "maj 2022 · zad. 5",
    pts: 2,
    tags: ["granica z parametrem"],
    q: String.raw`<p>Ciąg \((a_n)\) jest określony dla każdej liczby naturalnej \(n\ge1\) wzorem
    \[a_n=\frac{(7p-1)n^3+5pn-3}{(p+1)n^3+n^2+p},\]
    gdzie \(p\) jest liczbą rzeczywistą dodatnią. Oblicz wartość \(p\), dla której granica ciągu \((a_n)\) jest równa \(\dfrac43\).</p>
    <p>Wpisz – od lewej do prawej – pierwszą, drugą i trzecią cyfrę po przecinku nieskończonego rozwinięcia dziesiętnego otrzymanego wyniku.</p>`,
    ans: String.raw`\(p=\dfrac7{17}\); &nbsp;w kratkach: <b>4 · 1 · 1</b>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Licznik i mianownik mają stopień 3 (przy \(n^3\)). Granica to iloraz współczynników przy \(n^3\), zależny od \(p\); przyrównujemy go do \(\tfrac43\).</p>
<p class="step"><b>Granica.</b> Dzielimy przez \(n^3\):
    \[a_n=\frac{(7p-1)+\frac{5p}{n^2}-\frac{3}{n^3}}{(p+1)+\frac1n+\frac{p}{n^3}}\longrightarrow\frac{7p-1}{p+1}\]
    (mianownik graniczny \(p+1&gt;0\), więc dzielenie jest dozwolone).</p>
<p class="step"><b>Równanie:</b> \(\dfrac{7p-1}{p+1}=\dfrac43\ \Longrightarrow\ 3(7p-1)=4(p+1)\ \Longrightarrow\ 21p-3=4p+4\ \Longrightarrow\ p=\dfrac7{17}&gt;0\) ✓.</p>
<p class="step"><b>Rozwinięcie dziesiętne.</b> \(\dfrac{7}{17}=0{,}41176470\ldots\)</p>
<p class="note"><b>Uwaga:</b> założenie \(p&gt;0\) z treści pasuje do wyniku; na maturze warto napisać, że \(\tfrac7{17}\) je spełnia.</p>`
  },
  {
    id: 8,
    group: "Granica ciągu",
    src: "maj 2026 · zad. 1",
    pts: 2,
    tags: ["granica","symbol Newtona"],
    q: String.raw`<p>Oblicz granicę
    \[\lim_{n\to\infty}\frac{\dbinom{n+2}{n-1}}{\frac12\,n^3-4n+7}.\]
    </p>`,
    ans: String.raw`\(\dfrac13\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Zamieniamy symbol Newtona na wielomian względem \(n\), a potem liczymy granicę ilorazu wielomianów.</p>
<p class="step"><b>Symbol Newtona.</b> Z symetrii \(\binom{m}{k}=\binom{m}{m-k}\) i faktu, że \((n+2)-(n-1)=3\):
    \[\binom{n+2}{n-1}=\binom{n+2}{3}=\frac{(n+2)(n+1)n}{6}=\frac{n^3+3n^2+2n}{6}.\]</p>
<p class="step"><b>Granica</b> (dzielimy licznik i mianownik przez \(n^3\)):
    \[\lim\frac{\frac{1}{6}\left(1+\frac3n+\frac2{n^2}\right)}{\frac12-\frac4{n^2}+\frac7{n^3}}=\frac{1/6}{1/2}=\frac13 .\]</p>
<p class="note"><b>Uwaga:</b> to samo wynika z reguły „stopnie równe → iloraz współczynników przy najwyższej potędze”: \(\tfrac16\) przy \(n^3\) w liczniku i \(\tfrac12\) w mianowniku.</p>`
  },
  {
    id: 9,
    group: "Szereg geometryczny",
    src: "maj 2025 · zad. 6",
    pts: 4,
    tags: ["ciąg zbieżny","warunek zbieżności szeregu","wiele przypadków"],
    q: String.raw`<p>Ciąg \((a_n)\), określony dla każdej liczby naturalnej \(n\ge1\), jest geometryczny i zbieżny. W tym ciągu \(a_1+a_3=20\) oraz \(a_1^2+a_3^2=328\).</p>
    <p>Oblicz sumę wszystkich wyrazów tego ciągu. Rozważ wszystkie przypadki.</p>`,
    ans: String.raw`\(27\) (dla \(q=\tfrac13\)) lub \(\dfrac{27}{2}\) (dla \(q=-\tfrac13\))`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Oznaczmy \(x=a_1\) i \(y=a_3=a_1q^2\). Z dwóch równań wyznaczymy \(x\) i \(y\), potem \(q^2=\tfrac yx\). Warunek „ciąg zbieżny” (a w sumie – \(|q|&lt;1\)) wyeliminuje część przypadków.</p>
<p class="step"><b>Krok 1: \(x\) i \(y\).</b> Z \(x+y=20\) i \(x^2+y^2=328\): \(400=(x+y)^2=x^2+2xy+y^2=328+2xy\), więc \(xy=36\). Liczby \(x,y\) są pierwiastkami równania \(t^2-20t+36=0\), \(\Delta=256\), czyli \(t\in\{2,\,18\}\).</p>
<p class="step"><b>Krok 2: dwa przypadki.</b></p>
<ul>
      <li><b>\(a_1=2,\ a_3=18\):</b> \(q^2=9\), \(q=\pm3\). Wtedy \(|q|&gt;1\) i ciąg nie jest zbieżny – <b>odrzucamy</b>.</li>
      <li><b>\(a_1=18,\ a_3=2\):</b> \(q^2=\tfrac19\), czyli \(q=\tfrac13\) lub \(q=-\tfrac13\). Oba spełniają \(|q|&lt;1\), ciąg jest zbieżny (do \(0\)).</li>
    </ul>
<p class="step"><b>Krok 3: suma</b> \(S=\dfrac{a_1}{1-q}\):
    \[q=\tfrac13:\ S=\frac{18}{2/3}=27,\qquad q=-\tfrac13:\ S=\frac{18}{4/3}=\frac{27}{2}.\]</p>
<p class="note"><b>Uwaga:</b> polecenie „rozważ wszystkie przypadki” dotyczy tu dwóch znaków \(q\). Wartość \(q=1\) nie wchodzi w grę (dałaby \(a_1=a_3=10\) i \(a_1^2+a_3^2=200\ne328\)); warto o tym wspomnieć, bo ciąg stały jest zbieżny.</p>`
  },
  {
    id: 10,
    group: "Szereg geometryczny",
    src: "maj 2023 · zad. 10",
    pts: 4,
    tags: ["figury wpisywane","twierdzenie Pitagorasa","suma szeregu"],
    q: String.raw`<p>Określamy kwadraty \(K_1,K_2,K_3,\dots\) następująco: \(K_1\) jest kwadratem o boku długości \(a\), a dla każdego \(n\ge2\) kwadrat \(K_n\) ma każdy wierzchołek na innym boku kwadratu \(K_{n-1}\) i dzieli ten bok w stosunku \(1:3\). Obwody wszystkich tych kwadratów tworzą nieskończony ciąg geometryczny.</p>
    
    <p>Oblicz sumę wszystkich wyrazów tego nieskończonego ciągu.</p>`,
    fig: String.raw`<svg class="fig" viewBox="0 0 220 220" width="170" height="170" role="img" aria-label="Kwadraty K1, K2, K3, ... wpisane jeden w drugi"><polygon class="a" points="10,10 210,10 210,210 10,210"/><polygon class="a" points="60,10 210,60 160,210 10,160"/><polygon class="a" points="97.5,22.5 197.5,97.5 122.5,197.5 22.5,122.5"/><polygon class="a" points="122.5,41.3 178.8,122.5 97.5,178.8 41.3,97.5"/><polygon class="a" points="136.6,61.6 158.4,136.6 83.4,158.4 61.6,83.4"/><polygon class="a" points="142,80.3 139.7,142 78,139.7 80.3,78"/><polygon class="a" points="141.4,95.7 124.3,141.4 78.6,124.3 95.7,78.6"/><polygon class="a" points="137.1,107.2 112.8,137.1 82.9,112.8 107.2,82.9"/><polygon class="a" points="131.1,114.7 105.3,131.1 88.9,105.3 114.7,88.9"/></svg>`,
    ans: String.raw`\(S=\dfrac{8(4+\sqrt{10})}{3}\,a=\dfrac{32+8\sqrt{10}}{3}\,a\approx19{,}1\,a\)`,
    sol: String.raw`<svg class="fig" viewBox="-24 -4 254 238" width="190" height="178" role="img" aria-label="Trójkąt prostokątny o przyprostokątnych a/4 i 3a/4 w rogu kwadratu K1" style="float:right;margin:0 0 6px 14px"><polygon class="a" points="15,15 215,15 215,215 15,215"/><polygon class="a" points="65,15 215,65 165,215 15,165"/><polygon class="p f" points="15,15 65,15 15,165"/><text x="40" y="9" text-anchor="middle">a/4</text><text x="4" y="92" text-anchor="middle" transform="rotate(-90 4 92)">3a/4</text></svg><p class="step"><b>Pomysł.</b> Każdy kolejny kwadrat jest podobny do poprzedniego w tej samej skali \(k\). Obwód zmniejsza się wtedy \(k\) razy, więc ciąg obwodów jest geometryczny o ilorazie \(q=k\). Skalę \(k\) policzymy z twierdzenia Pitagorasa.</p>
<p class="step"><b>Krok 1: bok następnego kwadratu.</b> Wierzchołek \(K_2\) dzieli bok \(K_1\) na odcinki \(\tfrac a4\) i \(\tfrac{3a}4\). Bok \(K_2\) jest przeciwprostokątną trójkąta prostokątnego o takich przyprostokątnych:
    \[b=\sqrt{\left(\tfrac a4\right)^2+\left(\tfrac{3a}{4}\right)^2}=\sqrt{\tfrac{10a^2}{16}}=\frac{\sqrt{10}}4\,a .\]
    To samo zachodzi dla kolejnych kwadratów, więc \(q=\dfrac{\sqrt{10}}4\approx0{,}79\) (oraz \(q&lt;1\), bo \(\sqrt{10}&lt;4\)).</p>
<p class="step"><b>Krok 2: suma obwodów.</b> Pierwszy wyraz to \(L_1=4a\), więc
    \[S=\frac{4a}{1-\frac{\sqrt{10}}4}=\frac{16a}{4-\sqrt{10}}=\frac{16a\,(4+\sqrt{10})}{16-10}=\frac{8\,(4+\sqrt{10})}{3}\,a .\]</p>
<p class="note"><b>Uwaga:</b> zadanie mówi, że obwody tworzą ciąg geometryczny, ale to \(q\) trzeba policzyć. Warto zapisać warunek \(|q|&lt;1\) i usunąć niewymierność z mianownika.</p>`
  },
  {
    id: 11,
    group: "Szereg geometryczny",
    src: "maj 2022 · zad. 10",
    pts: 4,
    tags: ["szereg geometryczny","ciąg arytmetyczny","równanie kwadratowe"],
    q: String.raw`<p>Ciąg \((a_n)\), określony dla każdej liczby naturalnej \(n\ge1\), jest geometryczny i ma wszystkie wyrazy dodatnie. Ponadto \(a_1=675\) oraz
    \[a_{22}=\frac54\,a_{23}+\frac15\,a_{21}.\]
    Ciąg \((b_n)\), określony dla każdej liczby naturalnej \(n\ge1\), jest arytmetyczny. Suma wszystkich wyrazów ciągu \((a_n)\) jest równa sumie dwudziestu pięciu początkowych kolejnych wyrazów ciągu \((b_n)\). Ponadto \(a_3=b_4\).</p>
    <p>Oblicz \(b_1\).</p>`,
    ans: String.raw`\(b_1=129\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Z równania na wyrazy \(a_{21},a_{22},a_{23}\) wyznaczymy iloraz \(q\). Potem policzymy sumę nieskończoną \((a_n)\) i wyraz \(a_3\). Dla ciągu arytmetycznego \((b_n)\) wykorzystamy sumę 25 wyrazów i warunek \(b_4=a_3\).</p>
<p class="step"><b>Krok 1: iloraz.</b> Dzielimy równanie przez \(a_{21}&gt;0\), pamiętając, że \(a_{22}=qa_{21}\), \(a_{23}=q^2a_{21}\):
    \[q=\frac54\,q^2+\frac15\ \Longrightarrow\ 25q^2-20q+4=0\ \Longrightarrow\ (5q-2)^2=0\ \Longrightarrow\ q=\frac25 .\]</p>
<p class="step"><b>Krok 2: suma wszystkich wyrazów \((a_n)\).</b> Ponieważ \(|q|&lt;1\):
    \[S=\frac{a_1}{1-q}=\frac{675}{3/5}=1125 .\]
    Ponadto \(a_3=a_1q^2=675\cdot\dfrac4{25}=108\), więc \(b_4=108\).</p>
<p class="step"><b>Krok 3: ciąg \((b_n)\).</b> Suma 25 początkowych wyrazów to \(\dfrac{b_1+b_{25}}2\cdot25=25\,b_{13}\) (bo \(b_1+b_{25}=2b_{13}\)). Zatem \(25\,b_{13}=1125\), czyli \(b_{13}=45\).</p>
<p class="step"><b>Krok 4: różnica i \(b_1\).</b> \(b_{13}=b_4+9r\), więc \(45=108+9r\), skąd \(r=-7\). Wtedy \(b_1=b_4-3r=108+21=129\).</p>
<p class="note"><b>Sprawdzenie:</b> \(S_{25}=\dfrac{2\cdot129+24\cdot(-7)}{2}\cdot25=45\cdot25=1125\) ✓ oraz \(b_4=129-21=108\) ✓. &nbsp;<b>Uwaga:</b> „suma wszystkich wyrazów” ciągu geometrycznego oznacza szereg – trzeba sprawdzić \(|q|&lt;1\).</p>`
  }
];
