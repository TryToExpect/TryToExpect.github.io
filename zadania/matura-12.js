(window.TASKS = window.TASKS || {})['matura-12'] = [
  {
    id: 1,
    group: "Funkcja wykładnicza w zastosowaniach",
    src: "maj 2025 · zad. 1",
    pts: 2,
    tags: ["funkcja wykładnicza", "procent", "wzrost"],
    req: ["ZP V.14"],
    q: String.raw`<p>Liczebność \(N\) populacji bakterii zmienia się w czasie zgodnie z zależnością wykładniczą
\[N(t)=N_0\cdot k^t\qquad\text{dla }t\ge0,\]
gdzie \(N_0\) jest liczebnością populacji w chwili \(t=0\), \(k\) – stałą dodatnią, a \(t\) – czasem w godzinach od początku obserwacji. W chwili rozpoczęcia obserwacji liczebność populacji wynosiła \(10\,000\), a po dwóch godzinach \(15\,625\).</p>
<p>Oblicz, o ile procent wzrastała liczebność populacji w ciągu każdej godziny.</p>`,
    ans: String.raw`o \(25\%\)`,
    sol: String.raw`<p class="step"><b>Krok 1.</b> \(N(0)=N_0=10\,000\). Po dwóch godzinach \(N(2)=10\,000\cdot k^2=15\,625\), więc \(k^2=\dfrac{15\,625}{10\,000}=1{,}5625\).</p>
<p class="step"><b>Krok 2.</b> Ponieważ \(k>0\), \(k=\sqrt{1{,}5625}=1{,}25\).</p>
<p class="step"><b>Krok 3.</b> Co godzinę liczebność mnoży się przez \(k=1{,}25\), czyli rośnie o \(25\%\).</p>
<p class="note"><b>Uwaga:</b> wzrost o \(p\%\) w jednostce czasu odpowiada wzrostowi \(k=1+\tfrac p{100}\) razy. Ogólnie: \(k=1{,}25\Rightarrow p=25\).</p>`
  },
  {
    id: 2,
    group: "Funkcja wykładnicza w zastosowaniach",
    src: "maj 2023 · zad. 1",
    pts: 2,
    tags: ["funkcja wykładnicza", "rozpad", "nierówność wykładnicza"],
    req: ["ZP V.14"],
    q: String.raw`<p>W chwili początkowej (\(t=0\)) masa substancji jest równa \(4\) gramom. Wskutek rozpadu cząsteczek jej masa się zmniejsza: po każdej kolejnej dobie ubywa \(19\%\) masy, jaka była na koniec doby poprzedniej. Dla każdej liczby całkowitej \(t\ge0\) funkcja \(m(t)\) określa masę substancji w gramach po \(t\) pełnych dobach.</p>
<p>Wyznacz wzór funkcji \(m(t)\). Oblicz, po ilu pełnych dobach masa tej substancji będzie po raz pierwszy mniejsza od \(1{,}5\) grama.</p>`,
    ans: String.raw`\(m(t)=4\cdot0{,}81^{t}\); po \(5\) pełnych dobach`,
    sol: String.raw`<p class="step"><b>Wzór.</b> Po każdej dobie zostaje \(100\%-19\%=81\%\) masy z poprzedniej doby, więc masa tworzy ciąg geometryczny o ilorazie \(0{,}81\): \(m(t)=4\cdot0{,}81^{\,t}\).</p>
<p class="step"><b>Nierówność.</b> \(4\cdot0{,}81^t&lt;1{,}5\), czyli \(0{,}81^t&lt;0{,}375\). Funkcja \(0{,}81^t\) jest malejąca, więc szukamy pierwszego \(t\), dla którego warunek jest spełniony. Sprawdzamy kolejne potęgi:
\[0{,}81^3=0{,}531441,\quad0{,}81^4=0{,}43046721,\quad0{,}81^5=0{,}3486784401.\]
Dla \(t=4\): \(4\cdot0{,}81^4\approx1{,}72>1{,}5\). Dla \(t=5\): \(4\cdot0{,}81^5\approx1{,}39&lt;1{,}5\).</p>
<p class="step"><b>Wniosek.</b> Masa spadnie poniżej \(1{,}5\) grama po raz pierwszy po \(5\) pełnych dobach.</p>
<p class="note">Można też rozwiązać nierówność logarytmem: \(t>\dfrac{\log0{,}375}{\log0{,}81}\approx4{,}65\), a najmniejsza całkowita liczba większa od \(4{,}65\) to \(5\).</p>`
  },
  {
    id: 3,
    group: "Funkcja wykładnicza w zastosowaniach",
    src: "maj 2024 · zad. 1",
    pts: 2,
    tags: ["funkcja wykładnicza", "stygnięcie", "potęga o wykładniku ułamkowym"],
    req: ["ZP V.14"],
    q: String.raw`<p>Temperatura \(T\) kawy w filiżance zmienia się w czasie zgodnie z zależnością
\[T(t)=(T_p-T_z)\cdot k^{-t}+T_z\qquad\text{dla }t\ge0,\]
gdzie \(t\) – czas w minutach od chwili początkowej, \(T_p\) – temperatura początkowa kawy, \(T_z\) – temperatura otoczenia (obie w stopniach Celsjusza), \(k\) – stała charakterystyczna dla danej cieczy. W chwili początkowej kawa ma temperaturę \(80^\circ\text{C}\), a temperatura w pokoju jest stała i wynosi \(20^\circ\text{C}\). Po \(10\) minutach kawa ostygła do \(65^\circ\text{C}\).</p>
<p>Oblicz temperaturę tej kawy po następnych pięciu minutach. Wynik podaj w stopniach Celsjusza, w zaokrągleniu do jedności.</p>`,
    ans: String.raw`ok. \(59^\circ\text{C}\)`,
    sol: String.raw`<p class="step"><b>Wzór.</b> Dla \(T_p=80\), \(T_z=20\): \(T(t)=60\cdot k^{-t}+20\).</p>
<p class="step"><b>Krok 1: wyznaczenie \(k^{-10}\).</b> \(T(10)=65\), więc \(60\cdot k^{-10}+20=65\), skąd \(k^{-10}=\dfrac{45}{60}=\dfrac34\). (Nie musimy liczyć samego \(k\).)</p>
<p class="step"><b>Krok 2: po następnych pięciu minutach</b> czyli dla \(t=15\):
\[k^{-15}=\bigl(k^{-10}\bigr)^{3/2}=\left(\tfrac34\right)^{3/2}=\tfrac34\cdot\tfrac{\sqrt3}2=\tfrac{3\sqrt3}8.\]
Zatem \(T(15)=60\cdot\dfrac{3\sqrt3}8+20=\dfrac{45\sqrt3}2+20\approx38{,}97+20=58{,}97\).</p>
<p class="step"><b>Krok 3.</b> Po zaokrągleniu do jedności: \(59^\circ\text{C}\).</p>`
  },
  {
    id: 4,
    group: "Równania i nierówności wykładnicze",
    label: "autorskie",
    pts: 3,
    tags: ["równanie wykładnicze", "podstawienie t=2^x"],
    req: ["ZP I.9", "ZP V.14"],
    q: String.raw`<p>Rozwiąż równanie \(4^x-3\cdot2^x-4=0\).</p>`,
    ans: String.raw`\(x=2\)`,
    sol: String.raw`<p class="step"><b>Podstawienie.</b> \(4^x=(2^x)^2\). Niech \(t=2^x\); pamiętamy, że \(t>0\). Równanie przyjmuje postać \(t^2-3t-4=0\).</p>
<p class="step"><b>Rozwiązanie.</b> \((t-4)(t+1)=0\), więc \(t=4\) lub \(t=-1\). Wartość \(t=-1\) odrzucamy, bo \(2^x>0\).</p>
<p class="step"><b>Wynik.</b> \(2^x=4\iff x=2\).</p>`
  },
  {
    id: 5,
    group: "Równania i nierówności wykładnicze",
    label: "autorskie",
    pts: 3,
    tags: ["nierówność wykładnicza", "ta sama podstawa", "monotoniczność"],
    req: ["ZP I.9", "ZP V.14"],
    q: String.raw`<p>Rozwiąż nierówność \(\left(\dfrac13\right)^{x^2-4}\ge3^{x+2}\).</p>`,
    ans: String.raw`\(x\in[-2,1]\)`,
    sol: String.raw`<p class="step"><b>Ta sama podstawa.</b> \(\left(\tfrac13\right)^{x^2-4}=3^{-(x^2-4)}=3^{4-x^2}\). Nierówność ma postać \(3^{4-x^2}\ge3^{x+2}\).</p>
<p class="step"><b>Monotoniczność.</b> Funkcja \(t\mapsto3^t\) jest rosnąca, więc nierówność jest równoważna \(4-x^2\ge x+2\), czyli \(x^2+x-2\le0\).</p>
<p class="step"><b>Rozwiązanie.</b> \((x+2)(x-1)\le0\iff x\in[-2,1]\).</p>`
  },
  {
    id: 6,
    group: "Równania i nierówności logarytmiczne",
    label: "autorskie",
    pts: 3,
    tags: ["równanie logarytmiczne", "dziedzina", "suma logarytmów"],
    req: ["ZP I.9", "ZP V.14"],
    q: String.raw`<p>Rozwiąż równanie \(\log_3(x+2)+\log_3(x-4)=3\).</p>`,
    ans: String.raw`\(x=7\)`,
    sol: String.raw`<p class="step"><b>Dziedzina.</b> \(x+2>0\) i \(x-4>0\), czyli \(x>4\).</p>
<p class="step"><b>Przekształcenie.</b> \(\log_3\bigl[(x+2)(x-4)\bigr]=3\iff(x+2)(x-4)=3^3=27\), czyli \(x^2-2x-35=0\).</p>
<p class="step"><b>Rozwiązanie.</b> \((x-7)(x+5)=0\), więc \(x=7\) lub \(x=-5\). Liczba \(-5\) nie należy do dziedziny, więc \(x=7\).</p>
<p class="note"><b>Sprawdzenie:</b> \(\log_39+\log_33=2+1=3\) ✓.</p>`
  },
  {
    id: 7,
    group: "Równania i nierówności logarytmiczne",
    label: "autorskie",
    pts: 4,
    tags: ["nierówność logarytmiczna", "podstawa mniejsza od 1", "dziedzina"],
    req: ["ZP I.9", "ZP V.14"],
    q: String.raw`<p>Rozwiąż nierówność \(\log_{\frac12}\left(x^2-3x\right)\ge-2\).</p>`,
    ans: String.raw`\(x\in[-1,0)\cup(3,4]\)`,
    sol: String.raw`<p class="step"><b>Dziedzina.</b> \(x^2-3x>0\iff x(x-3)>0\iff x\in(-\infty,0)\cup(3,\infty)\).</p>
<p class="step"><b>Zapis po obu stronach.</b> \(-2=\log_{\frac12}4\), bo \(\left(\tfrac12\right)^{-2}=4\). Podstawa \(\tfrac12\) jest mniejsza od \(1\), więc funkcja \(\log_{\frac12}\) jest <b>malejąca</b> i nierówność zmienia zwrot: \(x^2-3x\le4\).</p>
<p class="step"><b>Rozwiązanie.</b> \(x^2-3x-4\le0\iff(x-4)(x+1)\le0\iff x\in[-1,4]\).</p>
<p class="step"><b>Część wspólna z dziedziną:</b> \([-1,0)\cup(3,4]\).</p>`
  },
  {
    id: 8,
    group: "Równania i nierówności logarytmiczne",
    label: "autorskie",
    pts: 3,
    tags: ["równanie logarytmiczne", "podstawienie", "kwadrat logarytmu"],
    req: ["ZP I.9", "ZP V.14"],
    q: String.raw`<p>Rozwiąż równanie \((\log_2x)^2-3\log_2x+2=0\).</p>`,
    ans: String.raw`\(x\in\{2,4\}\)`,
    sol: String.raw`<p class="step"><b>Dziedzina.</b> \(x>0\).</p>
<p class="step"><b>Podstawienie.</b> \(t=\log_2x\). Równanie: \(t^2-3t+2=0\iff(t-1)(t-2)=0\), czyli \(t=1\) lub \(t=2\).</p>
<p class="step"><b>Powrót.</b> \(\log_2x=1\iff x=2\); \(\log_2x=2\iff x=4\). Oba należą do dziedziny.</p>`
  },
  {
    id: 9,
    group: "Wykres funkcji logarytmicznej",
    label: "autorskie",
    pts: 3,
    tags: ["funkcja logarytmiczna", "przesunięcie wykresu", "dziedzina", "nierówność"],
    req: ["ZP I.9", "ZP V.14", "ZP V.12"],
    q: String.raw`<p>Dana jest funkcja \(f(x)=\log_2(x+3)-1\).</p>
<p>a) Podaj dziedzinę funkcji \(f\) i równanie asymptoty pionowej jej wykresu. Opisz, jak z wykresu funkcji \(y=\log_2x\) otrzymać wykres \(f\).<br>
b) Oblicz miejsce zerowe funkcji \(f\).<br>
c) Rozwiąż nierówność \(f(x)>2\).</p>`,
    ans: String.raw`a) \(D_f=(-3,\infty)\), asymptota \(x=-3\); b) \(x=-1\); c) \(x>5\)`,
    sol: String.raw`<p class="step"><b>a)</b> Argument logarytmu musi być dodatni: \(x+3>0\), więc \(D_f=(-3,\infty)\), a asymptota pionowa to prosta \(x=-3\). Wykres \(y=\log_2(x+3)-1\) powstaje z wykresu \(y=\log_2x\) przez przesunięcie o wektor \([-3,-1]\) (o \(3\) w lewo i o \(1\) w dół).</p>
<p class="step"><b>b)</b> \(\log_2(x+3)=1\iff x+3=2\iff x=-1\).</p>
<p class="step"><b>c)</b> \(\log_2(x+3)-1>2\iff\log_2(x+3)>3\iff x+3>2^3=8\iff x>5\) (funkcja \(\log_2\) jest rosnąca, a warunek \(x>-3\) jest wtedy spełniony).</p>`
  }
];
