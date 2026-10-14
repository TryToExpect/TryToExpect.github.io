(window.TASKS = window.TASKS || {})['matura-12'] = [
  {
    id: 1,
    group: "Funkcja wykładnicza w zastosowaniach",
    src: "maj 2025 · zad. 1",
    pts: 2,
    tags: ["funkcja wykładnicza", "procent", "wzrost"],
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
  }
];
