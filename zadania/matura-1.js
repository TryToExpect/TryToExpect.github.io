(window.TASKS = window.TASKS || {})['matura-1'] = [
  {
    group: "Logarytmy i potęgi",
    src: "maj 2023 · zad. 12.1",
    pts: 2,
    tags: ["logarytmy", "zmiana podstawy", "potęgi"],
    q: String.raw`<p>Wykaż, że dla każdej liczby dodatniej \(x\) wyrażenie
\[81^{\log_3 x}+\frac{2\cdot\log_2\sqrt{27}\cdot\log_3 2}{3}\cdot x^2-6x\]
można równoważnie przekształcić do postaci \(x^4+x^2-6x\).</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Każdy składnik sprowadzamy do prostej postaci: potęgę o podstawie \(81\) do podstawy \(3\), a iloczyn logarytmów upraszczamy wzorem na zamianę podstawy.</p>
<p class="step"><b>Pierwszy składnik.</b> \(81=3^4\), więc \(81^{\log_3 x}=\bigl(3^{\log_3 x}\bigr)^4=x^4\) (dla \(x>0\)).</p>
<p class="step"><b>Drugi składnik.</b> \(\log_2\sqrt{27}=\log_2 3^{3/2}=\tfrac32\log_2 3\), a \(\log_2 3\cdot\log_3 2=1\). Zatem
\[\frac{2\cdot\log_2\sqrt{27}\cdot\log_3 2}{3}=\frac{2\cdot\frac32\cdot1}{3}=1,\]
więc drugi składnik jest równy \(1\cdot x^2=x^2\).</p>
<p class="step"><b>Wniosek.</b> Całe wyrażenie jest równe \(x^4+x^2-6x\). \(\blacksquare\)</p>`
  },
  {
    group: "Logarytmy i potęgi",
    src: "maj 2024 · zad. 5",
    pts: 3,
    tags: ["logarytmy", "dowód"],
    q: String.raw`<p>Wykaż, że jeżeli \(\log_5 4=a\) oraz \(\log_4 3=b\), to
\[\log_{12}80=\frac{2a+1}{a\cdot(1+b)}.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wszystkie logarytmy zapisujemy przez logarytmy naturalne, a liczby \(a\) i \(b\) wyrażamy przez \(\ln2\), \(\ln3\), \(\ln5\).</p>
<p class="step"><b>Dane.</b> \(a=\log_5 4=\dfrac{2\ln2}{\ln5}\), czyli \(\ln5=\dfrac{2\ln2}{a}\). Podobnie \(b=\log_4 3=\dfrac{\ln3}{2\ln2}\), czyli \(\ln3=2b\ln2\).</p>
<p class="step"><b>Teza.</b> Ponieważ \(80=2^4\cdot5\) i \(12=2^2\cdot3\),
\[\log_{12}80=\frac{\ln80}{\ln12}=\frac{4\ln2+\ln5}{2\ln2+\ln3}=\frac{4\ln2+\frac{2\ln2}{a}}{2\ln2+2b\ln2}=\frac{2\ln2\,\bigl(2+\frac1a\bigr)}{2\ln2\,(1+b)}=\frac{\frac{2a+1}{a}}{1+b}=\frac{2a+1}{a\,(1+b)}.\ \blacksquare\]</p>`
  },
  {
    group: "Dowody algebraiczne",
    src: "maj 2023 · zad. 4",
    pts: 3,
    tags: ["dowód", "równanie i nierówność", "wzory skróconego mnożenia"],
    q: String.raw`<p>Liczby rzeczywiste \(x\) oraz \(y\) spełniają jednocześnie równanie \(x+y=4\) i nierówność
\[x^3-x^2y\le xy^2-y^3.\]
Wykaż, że \(x=2\) oraz \(y=2\).</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Przenosimy wszystko na jedną stronę nierówności i rozkładamy na czynniki. Wyjdzie kwadrat razy liczba dodatnia.</p>
<p class="step"><b>Rozkład.</b>
\[x^3-x^2y\le xy^2-y^3\iff x^3-x^2y-xy^2+y^3\le0\iff x^2(x-y)-y^2(x-y)\le0\iff (x-y)^2(x+y)\le0.\]</p>
<p class="step"><b>Wniosek.</b> Z równania \(x+y=4>0\), więc \((x-y)^2\le0\). Kwadrat liczby rzeczywistej nie jest ujemny, zatem \((x-y)^2=0\), czyli \(x=y\). Z \(x+y=4\) otrzymujemy \(x=y=2\). \(\blacksquare\)</p>`
  },
  {
    group: "Dowody algebraiczne",
    src: "maj 2025 · zad. 2",
    pts: 3,
    tags: ["dowód", "nierówność", "wzory skróconego mnożenia"],
    q: String.raw`<p>Wykaż, że dla każdej dodatniej liczby rzeczywistej \(a\) i dla każdej dodatniej liczby rzeczywistej \(b\) takich, że \(b\ne\tfrac12a\), prawdziwa jest nierówność
\[(a+2b)^3>8a^2b+16ab^2.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wystarczy pokazać, że różnica stron jest dodatnia. Rozkładamy ją na czynniki.</p>
<p class="step"><b>Rachunek.</b> \((a+2b)^3=a^3+6a^2b+12ab^2+8b^3\), więc
\[(a+2b)^3-8a^2b-16ab^2=a^3-2a^2b-4ab^2+8b^3=a^2(a-2b)-4b^2(a-2b)=(a-2b)(a^2-4b^2)=(a-2b)^2(a+2b).\]</p>
<p class="step"><b>Wniosek.</b> Warunek \(b\ne\tfrac12a\) oznacza \(a\ne2b\), czyli \((a-2b)^2>0\). Ponadto \(a+2b>0\), bo \(a,b>0\). Iloczyn jest dodatni, więc nierówność jest prawdziwa. \(\blacksquare\)</p>
<p class="note">Założenie \(b\ne\tfrac12a\) jest potrzebne: dla \(a=2b\) obie strony są równe.</p>`
  },
  {
    group: "Dowody algebraiczne",
    src: "maj 2026 · zad. 3",
    pts: 3,
    tags: ["dowód", "nierówność", "ułamki algebraiczne"],
    q: String.raw`<p>Wykaż, że dla każdej dodatniej liczby rzeczywistej \(x\) i dla każdej dodatniej liczby rzeczywistej \(y\) prawdziwa jest nierówność
\[\frac1x+\frac1y\le\frac{x}{y^2}+\frac{y}{x^2}.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Mnożymy obie strony przez dodatnią liczbę \(x^2y^2\). Pozbywamy się ułamków, a kierunek nierówności się nie zmienia.</p>
<p class="step"><b>Rachunek.</b>
\[\frac1x+\frac1y\le\frac x{y^2}+\frac y{x^2}\iff xy^2+x^2y\le x^3+y^3\iff x^3+y^3-x^2y-xy^2\ge0.\]
Lewą stronę rozkładamy: \(x^3+y^3-x^2y-xy^2=x^2(x-y)-y^2(x-y)=(x-y)(x^2-y^2)=(x-y)^2(x+y)\).</p>
<p class="step"><b>Wniosek.</b> \((x-y)^2\ge0\) oraz \(x+y>0\), więc iloczyn jest nieujemny. \(\blacksquare\)</p>
<p class="note">Równość zachodzi tylko dla \(x=y\).</p>`
  }
];
