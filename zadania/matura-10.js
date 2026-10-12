(window.TASKS = window.TASKS || {})['matura-10'] = [
  {
    group: "Granica funkcji",
    src: "maj 2024 · zad. 2",
    pts: 2,
    tags: ["granica funkcji", "granica jednostronna", "rozkład na czynniki"],
    q: String.raw`<p>Oblicz granicę
\[\lim_{x\to2^-}\frac{x^3-8}{(x-2)^2}.\]</p>`,
    ans: String.raw`\(-\infty\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Rozkładamy licznik: \(x^3-8=(x-2)(x^2+2x+4)\) i skracamy jeden czynnik \(x-2\).</p>
<p class="step"><b>Krok 1.</b> Dla \(x\ne2\): \(\dfrac{x^3-8}{(x-2)^2}=\dfrac{x^2+2x+4}{x-2}\).</p>
<p class="step"><b>Krok 2.</b> Gdy \(x\to2^-\), licznik dąży do \(2^2+2\cdot2+4=12>0\), a mianownik \(x-2\) dąży do \(0\) przez wartości ujemne (\(x&lt;2\)). Iloraz liczby dodatniej i małej liczby ujemnej jest duży i ujemny, więc granica jest równa \(-\infty\).</p>`
  },
  {
    group: "Styczna do wykresu funkcji",
    src: "maj 2023 · zad. 3",
    pts: 3,
    tags: ["styczna", "pochodna ilorazu", "równanie stycznej"],
    q: String.raw`<p>Funkcja \(f\) jest określona wzorem \(f(x)=\dfrac{3x^2-2x}{x^2+2x+8}\) dla każdej liczby rzeczywistej \(x\). Punkt \(P=(x_0,\,3)\) należy do wykresu funkcji \(f\).</p>
<p>Oblicz \(x_0\) oraz wyznacz równanie stycznej do wykresu funkcji \(f\) w punkcie \(P\).</p>`,
    ans: String.raw`\(x_0=-3\); styczna: \(y=-\tfrac{8}{11}x+\tfrac{9}{11}\)`,
    sol: String.raw`<p class="step"><b>Krok 1: \(x_0\).</b> \(f(x_0)=3\): \(3x_0^2-2x_0=3(x_0^2+2x_0+8)\Rightarrow-2x_0=6x_0+24\Rightarrow x_0=-3\). (Mianownik \(x^2+2x+8\) jest zawsze dodatni.)</p>
<p class="step"><b>Krok 2: pochodna.</b> \(f'(x)=\dfrac{(6x-2)(x^2+2x+8)-(3x^2-2x)(2x+2)}{(x^2+2x+8)^2}\). Dla \(x=-3\): \(x^2+2x+8=11\), \(6x-2=-20\), \(3x^2-2x=33\), \(2x+2=-4\), więc
\[f'(-3)=\frac{-20\cdot11-33\cdot(-4)}{11^2}=\frac{-220+132}{121}=-\frac{88}{121}=-\frac8{11}.\]</p>
<p class="step"><b>Krok 3: styczna.</b> \(y-3=-\tfrac8{11}(x+3)\), czyli \(y=-\tfrac8{11}x+\tfrac9{11}\).</p>`
  },
  {
    group: "Styczna do wykresu funkcji",
    src: "maj 2024 · zad. 4",
    pts: 3,
    tags: ["styczna", "pochodna", "współczynniki prostej"],
    q: String.raw`<p>Funkcja \(f\) jest określona wzorem \(f(x)=\dfrac{x^3-3x+2}{x}\) dla każdej liczby rzeczywistej \(x\) różnej od zera. W kartezjańskim układzie współrzędnych \((x,y)\) punkt \(P\), o pierwszej współrzędnej równej \(2\), należy do wykresu funkcji \(f\). Prosta o równaniu \(y=ax+b\) jest styczna do wykresu funkcji \(f\) w punkcie \(P\).</p>
<p>Oblicz współczynniki \(a\) oraz \(b\) w równaniu tej stycznej.</p>`,
    ans: String.raw`\(a=\tfrac72\), \(b=-5\) (czyli \(y=\tfrac72x-5\))`,
    sol: String.raw`<p class="step"><b>Krok 1: punkt \(P\).</b> \(f(2)=\dfrac{8-6+2}2=2\), więc \(P=(2,2)\).</p>
<p class="step"><b>Krok 2: pochodna.</b> \(f(x)=x^2-3+\dfrac2x\), więc \(f'(x)=2x-\dfrac2{x^2}\) i \(a=f'(2)=4-\dfrac12=\dfrac72\).</p>
<p class="step"><b>Krok 3: wyraz wolny.</b> Styczna przechodzi przez \(P\): \(2=\tfrac72\cdot2+b\Rightarrow b=-5\).</p>`
  },
  {
    group: "Ekstrema i zadania optymalizacyjne",
    src: "maj 2023 · zad. 12.2",
    pts: 4,
    tags: ["najmniejsza wartość funkcji", "pochodna", "monotoniczność"],
    q: String.raw`<p>Funkcja \(f\) jest określona wzorem \(f(x)=x^4+x^2-6x\) dla każdej liczby dodatniej \(x\).</p>
<p>Oblicz najmniejszą wartość tej funkcji.</p>`,
    ans: String.raw`\(-4\)`,
    sol: String.raw`<p class="step"><b>Krok 1: pochodna.</b> \(f'(x)=4x^3+2x-6=2\,(2x^3+x-3)\). Wielomian \(2x^3+x-3\) ma pierwiastek \(x=1\) (\(2+1-3=0\)), więc \(2x^3+x-3=(x-1)(2x^2+2x+3)\).</p>
<p class="step"><b>Krok 2: znak pochodnej.</b> Trójmian \(2x^2+2x+3\) ma \(\Delta=4-24&lt;0\), więc jest dodatni. Zatem znak \(f'\) to znak \(x-1\): \(f'&lt;0\) dla \(0&lt;x&lt;1\), \(f'>0\) dla \(x>1\).</p>
<p class="step"><b>Krok 3: minimum.</b> Funkcja maleje na \((0,1]\) i rośnie na \([1,\infty)\), więc najmniejszą wartość przyjmuje dla \(x=1\): \(f(1)=1+1-6=-4\).</p>`
  },
  {
    group: "Ekstrema i zadania optymalizacyjne",
    src: "maj 2025 · zad. 12.2",
    pts: 4,
    tags: ["optymalizacja", "objętość stożka", "pochodna ilorazu"],
    q: String.raw`<p>Objętość \(V\) stożka, jako funkcja wysokości \(h\) stożka, wyraża się wzorem
\[V(h)=\frac\pi3\cdot\frac{25h^3}{h^2-25}\qquad\text{dla }h\in(5,+\infty).\]</p>
<p>Wyznacz wysokość tego z rozważanych stożków, którego objętość jest najmniejsza. Oblicz tę najmniejszą objętość.</p>`,
    ans: String.raw`\(h=5\sqrt3\), \(V_{\min}=\dfrac{125\sqrt3}{2}\,\pi\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Stała \(\tfrac{25\pi}3\) nie wpływa na położenie minimum, więc wystarczy zbadać \(g(h)=\dfrac{h^3}{h^2-25}\) dla \(h>5\).</p>
<p class="step"><b>Krok 1: pochodna.</b> \(g'(h)=\dfrac{3h^2(h^2-25)-h^3\cdot2h}{(h^2-25)^2}=\dfrac{h^4-75h^2}{(h^2-25)^2}=\dfrac{h^2\,(h^2-75)}{(h^2-25)^2}\).</p>
<p class="step"><b>Krok 2: znak.</b> Dla \(h>5\) mianownik i \(h^2\) są dodatnie, więc znak \(g'\) to znak \(h^2-75\): \(g'&lt;0\) dla \(5&lt;h&lt;5\sqrt3\), \(g'>0\) dla \(h>5\sqrt3\). Funkcja maleje, a potem rośnie, więc minimum jest dla \(h=5\sqrt3\).</p>
<p class="step"><b>Krok 3: wartość.</b> \(V(5\sqrt3)=\dfrac\pi3\cdot\dfrac{25\cdot(5\sqrt3)^3}{75-25}=\dfrac\pi3\cdot\dfrac{25\cdot375\sqrt3}{50}=\dfrac{125\sqrt3}{2}\,\pi\).</p>`
  },
  {
    group: "Ekstrema i zadania optymalizacyjne",
    src: "maj 2024 · zad. 13.2",
    pts: 4,
    tags: ["optymalizacja", "pole powierzchni", "dziedzina funkcji"],
    q: String.raw`<p>Pole \(P\) powierzchni całkowitej graniastosłupa w zależności od długości \(a\) krawędzi podstawy graniastosłupa jest określone wzorem
\[P(a)=\frac{a^2\cdot\sqrt3}{2}+\frac{13824\sqrt3}{a}\qquad\text{dla }a\in\bigl(0,\,8\sqrt3\bigr].\]</p>
<p>Wyznacz długość krawędzi podstawy tego z rozważanych graniastosłupów, którego pole powierzchni całkowitej jest najmniejsze. Oblicz to najmniejsze pole.</p>`,
    ans: String.raw`\(a=8\sqrt3\), \(P_{\min}=1728+96\sqrt3\)`,
    sol: String.raw`<p class="step"><b>Krok 1: pochodna.</b> \(P'(a)=a\sqrt3-\dfrac{13824\sqrt3}{a^2}=\dfrac{\sqrt3\,(a^3-13824)}{a^2}\). Miejsce zerowe: \(a^3=13824=24^3\), czyli \(a=24\).</p>
<p class="step"><b>Krok 2: znak na dziedzinie.</b> Dziedzina to \((0,8\sqrt3]\), a \(8\sqrt3\approx13{,}86&lt;24\). Dla każdego \(a\) z dziedziny \(a^3&lt;13824\), więc \(P'(a)&lt;0\): funkcja jest malejąca. Najmniejsza wartość jest więc na prawym końcu przedziału, dla \(a=8\sqrt3\).</p>
<p class="step"><b>Krok 3: wartość.</b> \(a^2=192\), więc \(P(8\sqrt3)=\dfrac{192\sqrt3}2+\dfrac{13824\sqrt3}{8\sqrt3}=96\sqrt3+1728\).</p>
<p class="note"><b>Uwaga:</b> punkt \(a=24\), w którym pochodna się zeruje, leży poza dziedziną, więc minimum przypada na jej końcu – to częsta pułapka w zadaniach optymalizacyjnych.</p>`
  }
];
