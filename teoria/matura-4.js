(window.THEORY = window.THEORY || {})['matura-4'] = String.raw`
<h3>Funkcje trygonometryczne kąta, miara łukowa, okrąg jednostkowy</h3>
<div class="bx def"><span class="t">Kąt ostry w trójkącie prostokątnym</span>
<p>\(\sin\alpha=\dfrac{\text{przyprostokątna naprzeciw}}{\text{przeciwprostokątna}}\), \(\ \cos\alpha=\dfrac{\text{przyprostokątna przyległa}}{\text{przeciwprostokątna}}\), \(\ \operatorname{tg}\alpha=\dfrac{\text{naprzeciw}}{\text{przyległa}}=\dfrac{\sin\alpha}{\cos\alpha}\), \(\ \operatorname{ctg}\alpha=\dfrac1{\operatorname{tg}\alpha}\).</p>
</div>
<div class="tw"><table>
<thead><tr><th>\(\alpha\)</th><th class="c">\(0^\circ\)</th><th class="c">\(30^\circ\)</th><th class="c">\(45^\circ\)</th><th class="c">\(60^\circ\)</th><th class="c">\(90^\circ\)</th></tr></thead>
<tbody>
<tr><td>\(\sin\alpha\)</td><td class="c">\(0\)</td><td class="c">\(\tfrac12\)</td><td class="c">\(\tfrac{\sqrt2}2\)</td><td class="c">\(\tfrac{\sqrt3}2\)</td><td class="c">\(1\)</td></tr>
<tr><td>\(\cos\alpha\)</td><td class="c">\(1\)</td><td class="c">\(\tfrac{\sqrt3}2\)</td><td class="c">\(\tfrac{\sqrt2}2\)</td><td class="c">\(\tfrac12\)</td><td class="c">\(0\)</td></tr>
<tr><td>\(\operatorname{tg}\alpha\)</td><td class="c">\(0\)</td><td class="c">\(\tfrac{\sqrt3}3\)</td><td class="c">\(1\)</td><td class="c">\(\sqrt3\)</td><td class="c">–</td></tr>
</tbody></table></div>
<div class="bx def"><span class="t">Miara łukowa i okrąg jednostkowy</span>
<ul>
<li>\(\pi\ \text{rad}=180^\circ\); \(\ 1\,\text{rad}=\tfrac{180^\circ}\pi\). Długość łuku okręgu o promieniu \(r\) i kącie środkowym \(\alpha\) (w radianach): \(l=\alpha r\).</li>
<li>Dla kąta \(\alpha\) o wierzchołku w początku układu i ramieniu przecinającym okrąg jednostkowy w punkcie \((x,y)\): \(\cos\alpha=x\), \(\sin\alpha=y\), \(\operatorname{tg}\alpha=\tfrac yx\) (\(x\ne0\)).</li>
<li><b>Znaki w ćwiartkach:</b> I: wszystkie dodatnie; II: tylko \(\sin\); III: tylko \(\operatorname{tg}\) i \(\operatorname{ctg}\); IV: tylko \(\cos\).</li>
</ul>
</div>

<h3>Wzory redukcyjne i tożsamości trygonometryczne</h3>
<div class="bx thm"><span class="t">Jedynka trygonometryczna i zależności</span>
\[\sin^2\alpha+\cos^2\alpha=1,\qquad\operatorname{tg}\alpha=\frac{\sin\alpha}{\cos\alpha},\qquad\operatorname{ctg}\alpha=\frac{\cos\alpha}{\sin\alpha},\qquad\operatorname{tg}\alpha\cdot\operatorname{ctg}\alpha=1,\]
\[1+\operatorname{tg}^2\alpha=\frac1{\cos^2\alpha},\qquad1+\operatorname{ctg}^2\alpha=\frac1{\sin^2\alpha}\]
<p>(dla kątów, dla których występujące wyrażenia mają sens: \(\cos\alpha\ne0\) dla tangensa, \(\sin\alpha\ne0\) dla cotangensa).</p>
</div>
<div class="bx met"><span class="t">Obliczanie pozostałych funkcji kąta</span>
<p>Gdy znamy jedną funkcję trygonometryczną kąta \(x\) i ćwiartkę, w której leży \(x\):</p>
<ol>
<li>z jedynki trygonometrycznej policz kwadrat drugiej funkcji (np. \(\cos^2x=1-\sin^2x\));</li>
<li>pierwiastek wybierz ze <b>znakiem wynikającym z ćwiartki</b> (patrz znaki w ćwiartkach powyżej);</li>
<li>\(\operatorname{tg}x=\dfrac{\sin x}{\cos x}\), \(\ \operatorname{ctg}x=\dfrac1{\operatorname{tg}x}\).</li>
</ol>
<p>Przykład: \(\cos x=-\tfrac14\). Wtedy \(\sin^2x=1-\tfrac1{16}=\tfrac{15}{16}\). Jeśli \(x\in\left(\tfrac\pi2,\pi\right)\) (II ćwiartka), to \(\sin x=\tfrac{\sqrt{15}}4\), \(\operatorname{tg}x=-\sqrt{15}\), \(\operatorname{ctg}x=-\tfrac{\sqrt{15}}{15}\). Jeśli \(x\in\left(\pi,\tfrac{3\pi}2\right)\) (III ćwiartka), to \(\sin x=-\tfrac{\sqrt{15}}4\), \(\operatorname{tg}x=\sqrt{15}\), \(\operatorname{ctg}x=\tfrac{\sqrt{15}}{15}\).</p>
</div>
<div class="bx thm"><span class="t">Wzory redukcyjne</span>
<div class="two">
<div>
\[\sin(-\alpha)=-\sin\alpha,\quad\cos(-\alpha)=\cos\alpha\]
\[\sin(\pi-\alpha)=\sin\alpha,\quad\cos(\pi-\alpha)=-\cos\alpha\]
\[\sin(\pi+\alpha)=-\sin\alpha,\quad\cos(\pi+\alpha)=-\cos\alpha\]
</div>
<div>
\[\sin\left(\tfrac\pi2-\alpha\right)=\cos\alpha,\quad\cos\left(\tfrac\pi2-\alpha\right)=\sin\alpha\]
\[\sin\left(\tfrac\pi2+\alpha\right)=\cos\alpha,\quad\cos\left(\tfrac\pi2+\alpha\right)=-\sin\alpha\]
\[\operatorname{tg}(\pi+\alpha)=\operatorname{tg}\alpha,\quad\operatorname{tg}(-\alpha)=-\operatorname{tg}\alpha\]
</div>
</div>
<p><b>Reguła:</b> przy \(\pi\pm\alpha\), \(2\pi-\alpha\) nazwa funkcji się nie zmienia, przy \(\tfrac\pi2\pm\alpha\), \(\tfrac{3\pi}2\pm\alpha\) zmienia się na „co-” (sinus na cosinus, tangens na cotangens i odwrotnie); znak bierzemy z ćwiartki, w której leży kąt (dla \(\alpha\) ostrego).</p>
<p><b>Okresowość:</b> \(\sin(\alpha+2k\pi)=\sin\alpha\), \(\ \cos(\alpha+2k\pi)=\cos\alpha\), \(\ \operatorname{tg}(\alpha+k\pi)=\operatorname{tg}\alpha\), \(\ k\in\mathbb Z\).</p>
<p><b>Kąty trójkąta:</b> \(\alpha+\beta+\gamma=180^\circ\), więc \(\sin\gamma=\sin(\alpha+\beta)\) i \(\cos\gamma=-\cos(\alpha+\beta)\). Twierdzenia sinusów i cosinusów są w dziale „Planimetria”.</p>
</div>

<h3>Wzory na sumę i różnicę kątów, kąt podwojony, sumy funkcji trygonometrycznych</h3>
<div class="bx thm"><span class="t">Suma i różnica kątów</span>
\[\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta,\qquad\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta,\]
\[\operatorname{tg}(\alpha\pm\beta)=\frac{\operatorname{tg}\alpha\pm\operatorname{tg}\beta}{1\mp\operatorname{tg}\alpha\operatorname{tg}\beta}.\]
</div>
<div class="bx thm"><span class="t">Kąt podwojony, potrojony i połowiony</span>
<div class="two">
<div>
\[\sin2\alpha=2\sin\alpha\cos\alpha\]
\[\cos2\alpha=\cos^2\alpha-\sin^2\alpha=1-2\sin^2\alpha=2\cos^2\alpha-1\]
\[\operatorname{tg}2\alpha=\frac{2\operatorname{tg}\alpha}{1-\operatorname{tg}^2\alpha}\]
</div>
<div>
\[\sin3\alpha=3\sin\alpha-4\sin^3\alpha\]
\[\cos3\alpha=4\cos^3\alpha-3\cos\alpha\]
\[\sin^2\alpha=\frac{1-\cos2\alpha}2,\quad\cos^2\alpha=\frac{1+\cos2\alpha}2\]
</div>
</div>
</div>
<div class="bx thm"><span class="t">Zamiana sum na iloczyny i odwrotnie</span>
<div class="two">
<div>
\[\sin\alpha+\sin\beta=2\sin\tfrac{\alpha+\beta}2\cos\tfrac{\alpha-\beta}2\]
\[\sin\alpha-\sin\beta=2\cos\tfrac{\alpha+\beta}2\sin\tfrac{\alpha-\beta}2\]
\[\cos\alpha+\cos\beta=2\cos\tfrac{\alpha+\beta}2\cos\tfrac{\alpha-\beta}2\]
\[\cos\alpha-\cos\beta=-2\sin\tfrac{\alpha+\beta}2\sin\tfrac{\alpha-\beta}2\]
</div>
<div>
\[2\sin\alpha\cos\beta=\sin(\alpha+\beta)+\sin(\alpha-\beta)\]
\[2\cos\alpha\cos\beta=\cos(\alpha-\beta)+\cos(\alpha+\beta)\]
\[2\sin\alpha\sin\beta=\cos(\alpha-\beta)-\cos(\alpha+\beta)\]
</div>
</div>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(\sin15^\circ=\sin(45^\circ-30^\circ)=\tfrac{\sqrt2}2\cdot\tfrac{\sqrt3}2-\tfrac{\sqrt2}2\cdot\tfrac12=\dfrac{\sqrt6-\sqrt2}4\). Podobnie \(\cos75^\circ=\sin15^\circ\).</p>
</div>

<h3>Wykresy i własności funkcji trygonometrycznych</h3>
<div class="tw"><table>
<thead><tr><th></th><th>\(\sin x\)</th><th>\(\cos x\)</th><th>\(\operatorname{tg}x\)</th><th>\(\operatorname{ctg}x\)</th></tr></thead>
<tbody>
<tr><td>Dziedzina</td><td>\(\mathbb R\)</td><td>\(\mathbb R\)</td><td>\(\mathbb R\setminus\{\tfrac\pi2+k\pi\}\)</td><td>\(\mathbb R\setminus\{k\pi\}\)</td></tr>
<tr><td>Zbiór wartości</td><td>\([-1,1]\)</td><td>\([-1,1]\)</td><td>\(\mathbb R\)</td><td>\(\mathbb R\)</td></tr>
<tr><td>Okres podstawowy</td><td>\(2\pi\)</td><td>\(2\pi\)</td><td>\(\pi\)</td><td>\(\pi\)</td></tr>
<tr><td>Parzystość</td><td>nieparzysta</td><td>parzysta</td><td>nieparzysta</td><td>nieparzysta</td></tr>
<tr><td>Miejsca zerowe</td><td>\(k\pi\)</td><td>\(\tfrac\pi2+k\pi\)</td><td>\(k\pi\)</td><td>\(\tfrac\pi2+k\pi\)</td></tr>
<tr><td>Monotoniczność</td><td>rośnie na \(\left[-\tfrac\pi2+2k\pi,\tfrac\pi2+2k\pi\right]\), maleje na \(\left[\tfrac\pi2+2k\pi,\tfrac{3\pi}2+2k\pi\right]\)</td><td>rośnie na \([-\pi+2k\pi,2k\pi]\), maleje na \([2k\pi,\pi+2k\pi]\)</td><td>rośnie w każdym przedziale dziedziny</td><td>maleje w każdym przedziale dziedziny</td></tr>
</tbody></table></div>
<p>Wykres \(y=A\sin(\omega x+\varphi)+B\): amplituda \(|A|\), okres \(T=\dfrac{2\pi}{|\omega|}\), przesunięcie poziome \(-\dfrac\varphi\omega\), przesunięcie pionowe \(B\); zbiór wartości \([B-|A|,B+|A|]\).</p>

<h3>Równania i nierówności trygonometryczne</h3>
<div class="bx thm"><span class="t">Równania podstawowe (\(k\in\mathbb Z\))</span>
<ul>
<li>\(\sin x=a\) (\(|a|\le1\)): \(x=\alpha+2k\pi\) lub \(x=\pi-\alpha+2k\pi\), gdzie \(\alpha=\arcsin a\).</li>
<li>\(\cos x=a\) (\(|a|\le1\)): \(x=\pm\alpha+2k\pi\), gdzie \(\alpha=\arccos a\).</li>
<li>\(\operatorname{tg}x=a\): \(x=\alpha+k\pi\), gdzie \(\alpha=\operatorname{arctg}a\). \(\ \)Dla \(|a|>1\) równania \(\sin x=a\), \(\cos x=a\) nie mają rozwiązań.</li>
<li>\(\sin f=\sin g\iff f=g+2k\pi\) lub \(f=\pi-g+2k\pi\); \(\ \cos f=\cos g\iff f=\pm g+2k\pi\); \(\ \operatorname{tg}f=\operatorname{tg}g\iff f=g+k\pi\) (z dziedziną).</li>
</ul>
</div>
<div class="bx met"><span class="t">Metody rozwiązywania</span>
<ol>
<li><b>Sprowadzenie do jednej funkcji i jednego kąta</b> (jedynka trygonometryczna, wzory na kąt podwojony), potem podstawienie \(t=\sin x\) (zakres \(|t|\le1\)).</li>
<li><b>Rozkład na czynniki</b> (wyłączenie wspólnego czynnika, zamiana sum na iloczyny): \(AB=0\iff A=0\) lub \(B=0\). <i>Nie dziel</i> przez wyrażenie trygonometryczne, bo zgubisz rozwiązania.</li>
<li><b>Równania jednorodne</b> \(a\sin^2x+b\sin x\cos x+c\cos^2x=0\): sprawdź \(\cos x=0\), potem dziel przez \(\cos^2x\) i podstaw \(t=\operatorname{tg}x\).</li>
<li><b>Równanie \(a\sin x+b\cos x=c\)</b>: zapisz \(\sqrt{a^2+b^2}\,\sin(x+\varphi)=c\) (kąt pomocniczy), gdzie \(\cos\varphi=\tfrac a{\sqrt{a^2+b^2}}\), \(\sin\varphi=\tfrac b{\sqrt{a^2+b^2}}\); rozwiązanie istnieje, gdy \(|c|\le\sqrt{a^2+b^2}\).</li>
<li><b>Zadanie w przedziale</b> \([m,n]\): z rodziny rozwiązań wybierz te \(k\), dla których \(x\in[m,n]\).</li>
</ol>
</div>
<div class="bx ex"><span class="t">Przykład</span>
<p>\(2\sin^2x-\sin x-1=0\): \(t=\sin x\), \(2t^2-t-1=0\), \(t=1\) lub \(t=-\tfrac12\). Zatem \(x=\tfrac\pi2+2k\pi\) lub \(x=-\tfrac\pi6+2k\pi\) lub \(x=\tfrac{7\pi}6+2k\pi\).</p>
</div>
<p><b>Nierówności trygonometryczne:</b> rozwiąż odpowiednie równanie, a potem odczytaj zbiór z wykresu lub z okręgu jednostkowego, np. \(\sin x>\tfrac12\iff x\in\left(\tfrac\pi6+2k\pi,\tfrac{5\pi}6+2k\pi\right)\).</p>
`;
