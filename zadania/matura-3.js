(window.TASKS = window.TASKS || {})['matura-3'] = [
  {
    id: 4,
    group: "Funkcja kwadratowa – zadania z parametrem",
    src: "maj 2026 · zad. 10",
    pts: 5,
    tags: ["funkcja kwadratowa", "parametr", "położenie pierwiastków"],
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
  }
];
