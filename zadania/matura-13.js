(window.TASKS = window.TASKS || {})['matura-13'] = [
  {
    id: 8,
    group: "Wzór funkcji kwadratowej",
    label: "autorskie",
    pts: 3,
    tags: ["wzór funkcji kwadratowej", "postać kanoniczna", "miejsca zerowe"],
    req: ["ZP V.9"],
    q: String.raw`<p>Funkcja kwadratowa \(f\) ma miejsca zerowe \(-2\) i \(6\), a jej największa wartość jest równa \(16\). Wyznacz wzór funkcji \(f\) w postaci ogólnej.</p>`,
    ans: String.raw`\(f(x)=-x^2+4x+12\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wierzchołek leży na osi symetrii, w połowie drogi między miejscami zerowymi: \(p=\dfrac{-2+6}2=2\), a \(q=16\) (wartość największa, więc ramiona w dół).</p>
<p class="step"><b>Postać kanoniczna.</b> \(f(x)=a(x-2)^2+16\). Z \(f(-2)=0\): \(16a+16=0\), czyli \(a=-1\).</p>
<p class="step"><b>Postać ogólna.</b> \(f(x)=-(x-2)^2+16=-x^2+4x+12\).</p>
<p class="note"><b>Sprawdzenie:</b> \(-x^2+4x+12=0\iff x^2-4x-12=0\iff(x-6)(x+2)=0\) ✓.</p>`
  },
  {
    id: 9,
    group: "Największa i najmniejsza wartość",
    label: "autorskie",
    pts: 3,
    tags: ["największa i najmniejsza wartość", "przedział domknięty", "wierzchołek"],
    req: ["ZP V.10"],
    q: String.raw`<p>Dana jest funkcja \(f(x)=-2x^2+8x+1\). Wyznacz najmniejszą i największą wartość funkcji \(f\) w przedziale: a) \([0,3]\); b) \([3,6]\).</p>`,
    ans: String.raw`a) najmniejsza \(1\), największa \(9\); b) najmniejsza \(-23\), największa \(7\)`,
    sol: String.raw`<p class="step"><b>Wierzchołek.</b> \(p=-\dfrac{8}{2\cdot(-2)}=2\), \(f(2)=-8+16+1=9\). Ramiona są skierowane w dół, więc \(f\) rośnie w \((-\infty,2]\) i maleje w \([2,\infty)\).</p>
<p class="step"><b>a)</b> \(2\in[0,3]\), więc największa wartość to \(f(2)=9\). Na końcach: \(f(0)=1\), \(f(3)=-18+24+1=7\), zatem najmniejsza jest \(1\).</p>
<p class="step"><b>b)</b> \(2\notin[3,6]\) i w tym przedziale funkcja maleje, więc największa wartość to \(f(3)=7\), a najmniejsza \(f(6)=-72+48+1=-23\).</p>`
  },
  {
    id: 10,
    group: "Największa i najmniejsza wartość",
    label: "autorskie",
    pts: 4,
    tags: ["optymalizacja", "funkcja kwadratowa", "pole czworokąta", "zadanie z kontekstem"],
    req: ["ZP XIII.1", "ZP V.11"],
    q: String.raw`<p>Dany jest prostokąt \(ABCD\), w którym \(|AB|=10\) i \(|BC|=6\). Na bokach \(AB\), \(BC\), \(CD\), \(DA\) wybrano odpowiednio punkty \(P\), \(Q\), \(R\), \(S\) tak, że \(|AP|=|BQ|=|CR|=|DS|=x\). Dla jakiego \(x\) pole czworokąta \(PQRS\) jest najmniejsze? Oblicz to pole.</p>`,
    ans: String.raw`\(x=4\); najmniejsze pole jest równe \(28\)`,
    sol: String.raw`<p class="step"><b>Dziedzina.</b> Punkt \(S\) leży na boku \(DA\) długości \(6\), więc \(0&lt;x\le6\).</p>
<p class="step"><b>Pole przez odejmowanie.</b> Z prostokąta o polu \(60\) odejmujemy cztery trójkąty prostokątne w rogach: przy \(A\) i \(C\) o przyprostokątnych \(x\) i \(6-x\) (pole \(\tfrac12x(6-x)\) każdy), przy \(B\) i \(D\) o przyprostokątnych \(x\) i \(10-x\) (pole \(\tfrac12x(10-x)\) każdy). Zatem
\[P(x)=60-x(6-x)-x(10-x)=2x^2-16x+60.\]</p>
<p class="step"><b>Minimum.</b> Ramiona paraboli są w górę, wierzchołek \(p=\dfrac{16}{4}=4\in(0,6]\), a \(P(4)=32-64+60=28\).</p>
<p class="step"><b>Odpowiedź.</b> Pole czworokąta \(PQRS\) jest najmniejsze dla \(x=4\) i wynosi \(28\).</p>`
  },
  {
    id: 15,
    group: "Wzory Viète’a",
    label: "autorskie",
    pts: 3,
    tags: ["wzory Viète’a", "wyrażenia symetryczne"],
    req: ["ZR III.3"],
    q: String.raw`<p>Liczby \(x_1\) i \(x_2\) są pierwiastkami równania \(x^2-5x+3=0\). Bez obliczania pierwiastków oblicz: a) \(x_1^3+x_2^3\); b) \(\dfrac1{x_1}+\dfrac1{x_2}\); c) \((x_1-x_2)^2\).</p>`,
    ans: String.raw`a) \(80\); b) \(\dfrac53\); c) \(13\)`,
    sol: String.raw`<p class="step"><b>Dane.</b> \(\Delta=25-12=13>0\), więc pierwiastki istnieją. Ze wzorów Viète’a \(s=x_1+x_2=5\), \(P=x_1x_2=3\).</p>
<p class="step"><b>a)</b> \(x_1^3+x_2^3=s^3-3Ps=125-45=80\).</p>
<p class="step"><b>b)</b> \(\dfrac1{x_1}+\dfrac1{x_2}=\dfrac{x_1+x_2}{x_1x_2}=\dfrac53\).</p>
<p class="step"><b>c)</b> \((x_1-x_2)^2=s^2-4P=25-12=13\).</p>`
  },
  {
    id: 16,
    group: "Wzory Viète’a",
    label: "autorskie",
    pts: 3,
    tags: ["wzory Viète’a", "dowód", "najmniejsza wartość"],
    req: ["ZR III.3", "ZR III.5"],
    q: String.raw`<p>Wykaż, że dla każdej liczby rzeczywistej \(m\) równanie \(x^2-mx-1=0\) ma dwa różne pierwiastki o przeciwnych znakach. Dla jakiej wartości \(m\) suma kwadratów tych pierwiastków jest najmniejsza i ile wynosi?</p>`,
    ans: String.raw`\(m=0\); najmniejsza suma kwadratów jest równa \(2\)`,
    sol: String.raw`<p class="step"><b>Dowód.</b> \(\Delta=m^2+4>0\) dla każdego \(m\), więc są dwa różne pierwiastki. Ze wzorów Viète’a \(x_1x_2=-1&lt;0\), więc pierwiastki mają przeciwne znaki. \(\blacksquare\)</p>
<p class="step"><b>Suma kwadratów.</b> \(x_1+x_2=m\), więc \(x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=m^2+2\).</p>
<p class="step"><b>Minimum.</b> \(m^2+2\ge2\), a równość zachodzi dla \(m=0\) (pierwiastki \(\pm1\)). Najmniejsza suma kwadratów wynosi \(2\).</p>`
  },
  {
    id: 4,
    group: "Funkcja kwadratowa – zadania z parametrem",
    src: "maj 2026 · zad. 10",
    pts: 5,
    tags: ["funkcja kwadratowa", "parametr", "położenie pierwiastków"],
    req: ["ZR III.5"],
    q: String.raw`<p>Wyznacz wszystkie rzeczywiste wartości parametru \(m\), gdzie \(m\ne0\), dla których funkcja kwadratowa \(f\) określona wzorem
\[f(x)=m^2x^2-2mx-m+1\]
ma dwa różne miejsca zerowe \(x_1\) oraz \(x_2\) należące do przedziału \((-2,2)\).</p>`,
    ans: String.raw`\(m\in(1,\infty)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Parabola ma ramiona skierowane w górę (\(m^2>0\)). Oba miejsca zerowe leżą w \((-2,2)\) wtedy i tylko wtedy, gdy: \(\Delta>0\), \(f(-2)>0\), \(f(2)>0\) oraz oś symetrii leży w tym przedziale.</p>
<p class="step"><b>1) \(\Delta>0\).</b> \(\Delta=(2m)^2-4m^2(1-m)=4m^3>0\iff m>0\).</p>
<p class="step"><b>2) \(f(2)>0\).</b> \(f(2)=4m^2-5m+1=(4m-1)(m-1)>0\iff m&lt;\tfrac14\) lub \(m>1\).</p>
<p class="step"><b>3) \(f(-2)>0\).</b> \(f(-2)=4m^2+3m+1\) ma ujemny wyróżnik (\(9-16&lt;0\)), więc jest zawsze dodatnie.</p>
<p class="step"><b>4) Oś symetrii.</b> \(x_w=\dfrac{2m}{2m^2}=\dfrac1m\in(-2,2)\). Przy \(m>0\) wystarczy \(\dfrac1m&lt;2\), czyli \(m>\tfrac12\).</p>
<p class="step"><b>5) Część wspólna:</b> \(m>0\), (\(m&lt;\tfrac14\) lub \(m>1\)), \(m>\tfrac12\). Zostaje \(m>1\).</p>
<p class="note"><b>Sprawdzenie:</b> pierwiastki to \(x=\dfrac{1\pm\sqrt m}{m}\). Dla \(m=4\): \(\tfrac34\) i \(-\tfrac14\), oba w \((-2,2)\). Dla \(m=1\) mamy \(0\) i \(2\) – prawy pierwiastek leży na końcu przedziału, więc \(m=1\) odpada.</p>`
  },
  {
    id: 5,
    group: "Funkcja kwadratowa – zadania z parametrem",
    src: "maj 2025 · zad. 11",
    pts: 6,
    tags: ["funkcja kwadratowa", "parametr", "wzory Viète'a", "ten sam znak pierwiastków"],
    req: ["ZR III.5", "ZR III.3"],
    q: String.raw`<p>Funkcja \(f\) jest określona wzorem
\[f(x)=(2-m)x^2-2(2m+1)x+m+8\]
dla każdej liczby rzeczywistej \(x\), gdzie \(m\) jest liczbą rzeczywistą różną od \(2\).</p>
<p>Wyznacz wszystkie wartości parametru \(m\), dla których funkcja \(f\) ma dokładnie dwa miejsca zerowe \(x_1\) oraz \(x_2\) tego samego znaku, które spełniają warunek \((x_1-x_2)^2\le180\).</p>`,
    ans: String.raw`\(m\in(-8,-3)\cup\left(1,\tfrac32\right]\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Dwa miejsca zerowe tego samego znaku: \(\Delta>0\) i \(x_1x_2>0\). Dodatkowy warunek zapisujemy wzorami Viète'a: \((x_1-x_2)^2=(x_1+x_2)^2-4x_1x_2=\dfrac{\Delta}{a^2}\).</p>
<p class="step"><b>1) \(\Delta>0\).</b> \(\Delta=4(2m+1)^2-4(2-m)(m+8)=4\,(5m^2+10m-15)=20\,(m+3)(m-1)>0\), czyli \(m&lt;-3\) lub \(m>1\).</p>
<p class="step"><b>2) Ten sam znak.</b> \(x_1x_2=\dfrac{m+8}{2-m}>0\iff(m+8)(2-m)>0\iff-8&lt;m&lt;2\).</p>
<p class="step"><b>3) Część wspólna warunków 1 i 2:</b> \(m\in(-8,-3)\cup(1,2)\).</p>
<p class="step"><b>4) Warunek \((x_1-x_2)^2\le180\).</b> \((x_1-x_2)^2=\dfrac{\Delta}{(2-m)^2}=\dfrac{20(m+3)(m-1)}{(2-m)^2}\le180\). Mianownik jest dodatni, więc \((m+3)(m-1)\le9(2-m)^2\), czyli \(m^2+2m-3\le9m^2-36m+36\), skąd
\[8m^2-38m+39\ge0.\]
Wyróżnik \(\Delta'=196\), pierwiastki \(m=\dfrac{38\pm14}{16}\in\left\{\tfrac32,\ \tfrac{13}4\right\}\). Zatem \(m\le\tfrac32\) lub \(m\ge\tfrac{13}4\).</p>
<p class="step"><b>5) Odpowiedź.</b> Z części wspólnej \((-8,-3)\cup(1,2)\) zostają: cały przedział \((-8,-3)\) oraz \(\left(1,\tfrac32\right]\).</p>`
  },
  {
    id: 6,
    group: "Funkcja kwadratowa – zadania z parametrem",
    src: "maj 2024 · zad. 12",
    pts: 6,
    tags: ["funkcja kwadratowa", "parametr", "wzory Viète'a", "suma sześcianów"],
    req: ["ZR III.5", "ZR III.3"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(m\), dla których równanie
\[x^2-(3m+1)\cdot x+2m^2+m+1=0\]
ma dwa różne rozwiązania rzeczywiste \(x_1\), \(x_2\) spełniające warunek
\[x_1^3+x_2^3+3\cdot x_1\cdot x_2\cdot(x_1+x_2-3)\le3m-7.\]</p>`,
    ans: String.raw`\(m\in(-\infty,-3)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Najpierw \(\Delta>0\). Potem warunek zapisujemy przez sumę \(s=x_1+x_2\) i iloczyn \(p=x_1x_2\): wyrażenie \(x_1^3+x_2^3+3x_1x_2(x_1+x_2-3)\) bardzo się upraszcza.</p>
<p class="step"><b>1) Dwa różne pierwiastki.</b> \(\Delta=(3m+1)^2-4(2m^2+m+1)=m^2+2m-3=(m+3)(m-1)>0\), czyli \(m&lt;-3\) lub \(m>1\).</p>
<p class="step"><b>2) Uproszczenie wyrażenia.</b> \(x_1^3+x_2^3=s^3-3ps\), więc \(x_1^3+x_2^3+3p(s-3)=s^3-3ps+3ps-9p=s^3-9p\). Ze wzorów Viète'a \(s=3m+1\), \(p=2m^2+m+1\).</p>
<p class="step"><b>3) Nierówność.</b> \((3m+1)^3-9(2m^2+m+1)\le3m-7\), czyli \(27m^3+27m^2+9m+1-18m^2-9m-9\le3m-7\), co daje
\[27m^3+9m^2-3m-1\le0.\]
Rozkład: \(9m^2(3m+1)-(3m+1)=(3m+1)(9m^2-1)=(3m+1)^2(3m-1)\). Zatem \((3m+1)^2(3m-1)\le0\), czyli \(m\le\tfrac13\) (dla \(m=-\tfrac13\) mamy równość, ten przypadek też należy do \(m\le\tfrac13\)).</p>
<p class="step"><b>4) Część wspólna</b> z warunkiem \(m&lt;-3\) lub \(m>1\): \(m&lt;-3\).</p>`
  },
  {
    id: 7,
    group: "Funkcja kwadratowa – zadania z parametrem",
    src: "maj 2023 · zad. 11",
    pts: 5,
    tags: ["parametr", "wzory Viète'a", "równanie wymierne"],
    req: ["ZR III.5", "ZR III.3"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(m\ne2\), dla których równanie
\[x^2+4x-\frac{m-3}{m-2}=0\]
ma dwa różne rozwiązania rzeczywiste \(x_1\), \(x_2\) spełniające warunek \(x_1^3+x_2^3>-28\).</p>`,
    ans: String.raw`\(m\in\left(\tfrac{11}{5},\ \tfrac94\right)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Równanie jest kwadratowe względem \(x\) (współczynniki zależą od \(m\)). Najpierw warunek na dwa różne pierwiastki (\(\Delta>0\)), potem wzory Viète'a, które pozwalają zapisać \(x_1^3+x_2^3\) bez liczenia pierwiastków.</p>
<p class="step"><b>1) Dwa różne pierwiastki.</b> \(\Delta=16+4\cdot\dfrac{m-3}{m-2}=\dfrac{4\,(5m-11)}{m-2}>0\). Iloraz jest dodatni, gdy \(m&lt;2\) lub \(m>\tfrac{11}5\).</p>
<p class="step"><b>2) Wzory Viète'a.</b> \(x_1+x_2=-4\), \(x_1x_2=-\dfrac{m-3}{m-2}\). Stąd
\[x_1^3+x_2^3=(x_1+x_2)^3-3x_1x_2(x_1+x_2)=-64+12\,x_1x_2=-64-12\cdot\frac{m-3}{m-2}.\]</p>
<p class="step"><b>3) Nierówność.</b>
\[-64-12\cdot\frac{m-3}{m-2}>-28\iff\frac{m-3}{m-2}&lt;-3\iff\frac{m-3}{m-2}+3&lt;0\iff\frac{4m-9}{m-2}&lt;0.\]
Iloraz jest ujemny dla \(2&lt;m&lt;\tfrac94\).</p>
<p class="step"><b>4) Część wspólna:</b> \(\left(2,\tfrac94\right)\cap\Bigl(\left(-\infty,2\right)\cup\left(\tfrac{11}5,\infty\right)\Bigr)=\left(\tfrac{11}5,\tfrac94\right)\).</p>`
  },
  {
    id: 11,
    group: "Funkcja kwadratowa – zadania z parametrem",
    label: "autorskie",
    pts: 4,
    tags: ["parametr", "dwa pierwiastki ujemne", "wzory Viète’a"],
    req: ["ZR III.5", "ZR III.3"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(m\), dla których równanie \(x^2+(m+1)x+m+4=0\) ma dwa różne pierwiastki ujemne.</p>`,
    ans: String.raw`\(m\in(5,\infty)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Dwa różne pierwiastki ujemne: \(\Delta>0\), \(x_1x_2>0\) i \(x_1+x_2&lt;0\).</p>
<p class="step"><b>1) \(\Delta>0\).</b> \(\Delta=(m+1)^2-4(m+4)=m^2-2m-15=(m-5)(m+3)>0\iff m&lt;-3\) lub \(m>5\).</p>
<p class="step"><b>2) Iloczyn.</b> \(x_1x_2=m+4>0\iff m>-4\).</p>
<p class="step"><b>3) Suma.</b> \(x_1+x_2=-(m+1)&lt;0\iff m>-1\).</p>
<p class="step"><b>Część wspólna:</b> z warunku 3 mamy \(m>-1\), więc z warunku 1 zostaje \(m>5\) (które spełnia też warunek 2). Odpowiedź: \(m\in(5,\infty)\).</p>
<p class="note"><b>Sprawdzenie:</b> dla \(m=6\) równanie \(x^2+7x+10=0\) ma pierwiastki \(-2\) i \(-5\).</p>`
  },
  {
    id: 12,
    group: "Funkcja kwadratowa – zadania z parametrem",
    label: "autorskie",
    pts: 5,
    tags: ["parametr", "suma kwadratów pierwiastków", "współczynnik zależny od parametru"],
    req: ["ZR III.5", "ZR III.3"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(m\), dla których równanie \((m-1)x^2-2mx+m+2=0\) ma dwa różne pierwiastki rzeczywiste \(x_1\), \(x_2\) spełniające warunek \(x_1^2+x_2^2>6\).</p>`,
    ans: String.raw`\(m\in\left(\dfrac{5-\sqrt{17}}4,\ 1\right)\cup(1,\ 2)\)`,
    sol: String.raw`<p class="step"><b>0) Równanie kwadratowe.</b> Musi być \(m\ne1\) (dla \(m=1\) równanie jest liniowe i ma jedno rozwiązanie).</p>
<p class="step"><b>1) Dwa różne pierwiastki.</b> \(\Delta=4m^2-4(m-1)(m+2)=-4m+8>0\iff m&lt;2\).</p>
<p class="step"><b>2) Wzory Viète’a.</b> \(x_1+x_2=\dfrac{2m}{m-1}\), \(x_1x_2=\dfrac{m+2}{m-1}\), więc
\[x_1^2+x_2^2=\frac{4m^2}{(m-1)^2}-\frac{2(m+2)}{m-1}=\frac{4m^2-2(m+2)(m-1)}{(m-1)^2}=\frac{2m^2-2m+4}{(m-1)^2}.\]</p>
<p class="step"><b>3) Warunek.</b> Mianownik jest dodatni, więc \(2m^2-2m+4>6(m-1)^2\), czyli \(4m^2-10m+2&lt;0\), tzn. \(2m^2-5m+1&lt;0\). Pierwiastki: \(m=\dfrac{5\pm\sqrt{17}}4\), więc \(m\in\left(\dfrac{5-\sqrt{17}}4,\dfrac{5+\sqrt{17}}4\right)\).</p>
<p class="step"><b>4) Część wspólna</b> z \(m&lt;2\) i \(m\ne1\): ponieważ \(\dfrac{5+\sqrt{17}}4\approx2{,}28>2\), zostaje \(m\in\left(\dfrac{5-\sqrt{17}}4,2\right)\setminus\{1\}\).</p>
<p class="note"><b>Sprawdzenie:</b> dla \(m=\tfrac12\) równanie to \(x^2+2x-5=0\) i \(x_1^2+x_2^2=4+10=14>6\) ✓; dla \(m=0{,}1\) (poza zbiorem) suma kwadratów \(\approx4{,}7&lt;6\).</p>`
  },
  {
    id: 13,
    group: "Funkcja kwadratowa – zadania z parametrem",
    label: "autorskie",
    pts: 4,
    tags: ["parametr", "nierówność zawsze prawdziwa", "przypadek a=0"],
    req: ["ZR III.5"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(m\), dla których nierówność \((m-2)x^2+2(m-2)x+3>0\) jest spełniona przez każdą liczbę rzeczywistą \(x\).</p>`,
    ans: String.raw`\(m\in[2,5)\)`,
    sol: String.raw`<p class="step"><b>Przypadek \(m=2\).</b> Nierówność przyjmuje postać \(3>0\), czyli jest prawdziwa dla każdego \(x\). Ten przypadek spełnia warunki zadania.</p>
<p class="step"><b>Przypadek \(m\ne2\).</b> Trójmian jest dodatni dla każdego \(x\), gdy ramiona są w górę i brak miejsc zerowych: \(m-2>0\) oraz \(\Delta&lt;0\).</p>
<p class="step">\(\Delta=4(m-2)^2-12(m-2)=4(m-2)(m-2-3)=4(m-2)(m-5)&lt;0\iff2&lt;m&lt;5\).</p>
<p class="step"><b>Odpowiedź.</b> Łącznie: \(m=2\) lub \(2&lt;m&lt;5\), czyli \(m\in[2,5)\).</p>
<p class="note"><b>Sprawdzenie granicy:</b> dla \(m=5\) mamy \(3x^2+6x+3=3(x+1)^2\), co dla \(x=-1\) daje \(0\) – nierówność nie jest ostra, więc \(m=5\) odpada.</p>`
  },
  {
    id: 14,
    group: "Funkcja kwadratowa – zadania z parametrem",
    label: "autorskie",
    pts: 5,
    tags: ["parametr", "położenie pierwiastków", "dokładnie jedno rozwiązanie w przedziale", "końce przedziału"],
    req: ["ZR III.5"],
    q: String.raw`<p>Wyznacz wszystkie wartości parametru \(m\), dla których równanie \(x^2-mx+m-1=0\) ma dokładnie jedno rozwiązanie należące do przedziału \((0,2)\).</p>`,
    ans: String.raw`\(m\in(-\infty,1]\cup\{2\}\cup[3,\infty)\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Lewą stronę łatwo rozłożyć: \(x^2-mx+m-1=(x-1)\bigl(x-(m-1)\bigr)\). Pierwiastki to \(x_1=1\) oraz \(x_2=m-1\).</p>
<p class="step"><b>Analiza.</b> Pierwiastek \(x_1=1\) zawsze leży w przedziale \((0,2)\). Dokładnie jedno rozwiązanie w tym przedziale jest więc wtedy, gdy drugi pierwiastek \(x_2=m-1\) <b>nie leży</b> w \((0,2)\) albo jest równy \(1\) (wtedy to to samo rozwiązanie).</p>
<ul>
<li>\(m-1\le0\iff m\le1\) (dla \(m=1\) pierwiastki to \(0\) i \(1\); \(0\) nie należy do przedziału otwartego);</li>
<li>\(m-1\ge2\iff m\ge3\) (dla \(m=3\) pierwiastki to \(1\) i \(2\); \(2\) nie należy do przedziału);</li>
<li>\(m-1=1\iff m=2\) (pierwiastek podwójny \(x=1\), jedno rozwiązanie).</li>
</ul>
<p class="step"><b>Odpowiedź.</b> \(m\in(-\infty,1]\cup\{2\}\cup[3,\infty)\).</p>
<p class="note">Warunek \(f(0)\cdot f(2)&lt;0\) dałby tylko \(m&lt;1\) lub \(m>3\) i pominąłby przypadki, w których pierwiastek leży dokładnie na końcu przedziału lub jest podwójny.</p>`
  }
];
