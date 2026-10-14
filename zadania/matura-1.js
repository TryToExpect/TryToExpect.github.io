(window.TASKS = window.TASKS || {})['matura-1'] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    group: "Dowody algebraiczne",
    src: "maj 2012 · zad. 7",
    pts: 3,
    tags: ["dowód", "nierówność", "rozkład na czynniki"],
    q: String.raw`<p>Udowodnij, że jeżeli \(a+b\ge0\), to prawdziwa jest nierówność
\[a^3+b^3\ge a^2b+ab^2.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Przenosimy wszystko na jedną stronę i rozkładamy na czynniki. Zostanie iloczyn dwóch liczb nieujemnych.</p>
<p class="step"><b>Rachunek.</b>
\[a^3+b^3-a^2b-ab^2=a^2(a-b)-b^2(a-b)=(a-b)(a^2-b^2)=(a-b)^2(a+b).\]</p>
<p class="step"><b>Wniosek.</b> Kwadrat \((a-b)^2\) jest nieujemny dla każdych liczb rzeczywistych, a z założenia \(a+b\ge0\). Iloczyn dwóch liczb nieujemnych jest nieujemny, więc \(a^3+b^3\ge a^2b+ab^2\). \(\blacksquare\)</p>
<p class="note">Założenie \(a+b\ge0\) jest potrzebne: dla \(a=-2\), \(b=1\) lewa strona wynosi \(-7\), a prawa \(2\). Równość zachodzi, gdy \(a=b\) albo \(a=-b\).</p>`
  },
  {
    id: 4,
    group: "Dowody algebraiczne",
    src: "maj 2014 · zad. 4",
    pts: 3,
    tags: ["dowód", "nierówność", "ułamki algebraiczne"],
    q: String.raw`<p>Udowodnij, że dla każdych dwóch dodatnich liczb rzeczywistych \(x\) i \(y\) prawdziwa jest nierówność
\[(x+1)\cdot\frac xy+(y+1)\cdot\frac yx>2.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Po wymnożeniu nawiasów pojawia się suma \(\tfrac xy+\tfrac yx\), która jest co najmniej \(2\). Pozostałe składniki są dodatnie.</p>
<p class="step"><b>Rachunek.</b> Po wymnożeniu nawiasów
\[(x+1)\frac xy+(y+1)\frac yx=\frac xy+\frac yx+\frac{x^2}y+\frac{y^2}x.\]
Ponadto
\[\frac xy+\frac yx-2=\frac{x^2-2xy+y^2}{xy}=\frac{(x-y)^2}{xy}.\]
Stąd
\[(x+1)\frac xy+(y+1)\frac yx-2=\frac{(x-y)^2}{xy}+\frac{x^2}y+\frac{y^2}x.\]</p>
<p class="step"><b>Wniosek.</b> Dla \(x,y>0\) pierwszy składnik po prawej stronie jest nieujemny, a dwa pozostałe dodatnie. Cała różnica jest więc dodatnia, czyli lewa strona jest większa od \(2\). \(\blacksquare\)</p>
<p class="note">Skrótem: \(\tfrac xy+\tfrac yx\ge2\) (nierówność między średnimi), a \(\tfrac{x^2}y+\tfrac{y^2}x>0\).</p>`
  },
  {
    id: 5,
    group: "Dowody algebraiczne",
    src: "maj 2016 · zad. 8",
    pts: 3,
    tags: ["dowód", "nierówność", "warunek dodatkowy"],
    q: String.raw`<p>Wykaż, że dla dowolnych dodatnich liczb rzeczywistych \(x\) i \(y\) takich, że \(x^2+y^2=2\), prawdziwa jest nierówność \(x+y\le2\).</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> W tezie występuje \(x+y\), a w założeniu \(x^2+y^2\). Podnosimy \(x+y\) do kwadratu i używamy nierówności \(2xy\le x^2+y^2\), czyli \((x-y)^2\ge0\).</p>
<p class="step"><b>Rachunek.</b> Dla dowolnych liczb rzeczywistych \((x-y)^2\ge0\), czyli \(2xy\le x^2+y^2\). Stąd
\[(x+y)^2=x^2+y^2+2xy\le2\,(x^2+y^2)=2\cdot2=4.\]</p>
<p class="step"><b>Wniosek.</b> Z \((x+y)^2\le4\) wynika \(|x+y|\le2\), a więc \(x+y\le2\). \(\blacksquare\)</p>
<p class="note">Równość zachodzi tylko dla \(x=y=1\). Geometrycznie: prosta \(x+y=2\) jest styczna do okręgu \(x^2+y^2=2\) w punkcie \((1,1)\), więc cały okrąg leży po jednej jej stronie. Założenie, że liczby są dodatnie, nie było tu potrzebne.</p>`
  },
  {
    id: 6,
    group: "Dowody algebraiczne",
    src: "maj 2017 · zad. 7",
    pts: 3,
    tags: ["dowód", "nierówność", "suma kwadratów"],
    q: String.raw`<p>Udowodnij, że dla dowolnych różnych liczb rzeczywistych \(x\) i \(y\) prawdziwa jest nierówność
\[x^2y^2+2x^2+2y^2-8xy+4>0.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Zapisujemy lewą stronę jako sumę kwadratów. Składnik \(x^2y^2\) i stała \(4\) podpowiadają kwadrat \((xy-2)^2=x^2y^2-4xy+4\). Reszta to \(2x^2+2y^2-4xy=2(x-y)^2\).</p>
<p class="step"><b>Rachunek.</b>
\[x^2y^2+2x^2+2y^2-8xy+4=(x^2y^2-4xy+4)+(2x^2-4xy+2y^2)=(xy-2)^2+2(x-y)^2.\]</p>
<p class="step"><b>Wniosek.</b> Składnik \((xy-2)^2\) jest nieujemny. Ponieważ \(x\ne y\), więc \((x-y)^2>0\), a stąd \(2(x-y)^2>0\). Suma liczby nieujemnej i dodatniej jest dodatnia. \(\blacksquare\)</p>
<p class="note">Założenie \(x\ne y\) jest istotne: dla \(x=y=\sqrt2\) lewa strona jest równa \(0\), bo wtedy \(xy=2\) i \(x-y=0\).</p>`
  },
  {
    id: 7,
    group: "Dowody algebraiczne",
    src: "czerwiec 2017 · zad. 7",
    pts: 3,
    tags: ["dowód", "nierówność", "suma kwadratów", "wyróżnik"],
    q: String.raw`<p>Udowodnij, że dla każdej liczby rzeczywistej \(x\) i dla każdej liczby rzeczywistej \(y\) prawdziwa jest nierówność
\[5x^2+y^2-4xy+6x+9\ge0.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Rozbijamy lewą stronę na sumę kwadratów. Wyrazy \(y^2-4xy\) dopełniamy do kwadratu \((2x-y)^2=4x^2-4xy+y^2\). Z pozostałych wyrazów \(x^2+6x+9\) powstaje \((x+3)^2\).</p>
<p class="step"><b>Rachunek.</b>
\[5x^2+y^2-4xy+6x+9=(4x^2-4xy+y^2)+(x^2+6x+9)=(2x-y)^2+(x+3)^2.\]</p>
<p class="step"><b>Wniosek.</b> Suma dwóch kwadratów liczb rzeczywistych jest nieujemna dla każdych \(x\) i \(y\). \(\blacksquare\)</p>
<p class="note"><b>Drugi sposób (wyróżnik).</b> Traktujemy lewą stronę jako trójmian zmiennej \(x\) z parametrem \(y\): \(f(x)=5x^2+(6-4y)x+y^2+9\). Współczynnik przy \(x^2\) jest dodatni, więc wystarczy pokazać, że \(\Delta\le0\). Mamy \(\Delta=(6-4y)^2-20(y^2+9)=-4y^2-48y-144=-4(y+6)^2\le0\). Zatem \(f(x)\ge0\) dla każdego \(x\), niezależnie od \(y\). Równość zachodzi dla \(y=-6\) i \(x=-3\).</p>`
  },
  {
    id: 8,
    group: "Dowody algebraiczne",
    src: "maj 2019 · zad. 8",
    pts: 3,
    tags: ["dowód", "nierówność", "ułamki algebraiczne", "parametr"],
    q: String.raw`<p>Udowodnij, że dla dowolnych dodatnich liczb rzeczywistych \(x\) i \(y\), takich że \(x&lt;y\), i dowolnej dodatniej liczby rzeczywistej \(a\), prawdziwa jest nierówność
\[\frac{x+a}{y+a}+\frac yx>2.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Odejmujemy \(2\) i sprowadzamy wszystko do wspólnego mianownika \(x(y+a)\), który jest dodatni. Licznik rozkładamy na czynniki.</p>
<p class="step"><b>Rachunek.</b>
\[\frac{x+a}{y+a}+\frac yx-2=\frac{x(x+a)+y(y+a)-2x(y+a)}{x(y+a)}=\frac{x^2-2xy+y^2+ay-ax}{x(y+a)}=\frac{(y-x)^2+a(y-x)}{x(y+a)}=\frac{(y-x)(y-x+a)}{x(y+a)}.\]</p>
<p class="step"><b>Wniosek.</b> Z \(x&lt;y\) mamy \(y-x>0\), a z \(a>0\) także \(y-x+a>0\). Mianownik \(x(y+a)\) jest dodatni, więc ułamek jest dodatni, czyli \(\dfrac{x+a}{y+a}+\dfrac yx>2\). \(\blacksquare\)</p>
<p class="note"><b>Drugi sposób.</b> Dla \(x&lt;y\) i \(a>0\) mamy \(\tfrac{x+a}{y+a}>\tfrac xy\), bo \((x+a)y-x(y+a)=a(y-x)>0\). Stąd \(\tfrac{x+a}{y+a}+\tfrac yx>\tfrac xy+\tfrac yx\ge2\).</p>`
  },
  {
    id: 9,
    group: "Dowody algebraiczne",
    src: "maj 2022 · zad. 6",
    pts: 3,
    tags: ["dowód", "nierówność", "rozkład na czynniki", "warunek dodatkowy"],
    q: String.raw`<p>Wykaż, że dla każdej liczby rzeczywistej \(x\) i dla każdej liczby rzeczywistej \(y\) takich, że \(2x>y\), spełniona jest nierówność
\[7x^3+4x^2y\ge y^3+2xy^2-x^3.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Przenosimy wszystko na lewą stronę i rozkładamy na czynniki przez grupowanie. Założenie \(2x>y\) mówi nam, że jeden z czynników jest dodatni.</p>
<p class="step"><b>Rachunek.</b>
\[7x^3+4x^2y-y^3-2xy^2+x^3=8x^3+4x^2y-2xy^2-y^3=4x^2(2x+y)-y^2(2x+y)=(2x+y)(4x^2-y^2)=(2x-y)(2x+y)^2.\]</p>
<p class="step"><b>Wniosek.</b> Z założenia \(2x-y>0\), a \((2x+y)^2\ge0\) dla każdych \(x\) i \(y\). Iloczyn jest nieujemny, więc \(7x^3+4x^2y\ge y^3+2xy^2-x^3\). \(\blacksquare\)</p>
<p class="note">Równość zachodzi dla \(y=-2x\), czyli gdy \(2x+y=0\) (np. \(x=1\), \(y=-2\)). Dlatego w tezie jest znak \(\ge\), a nie \(>\).</p>`
  },
  {
    id: 10,
    group: "Dowody algebraiczne",
    src: "czerwiec 2022 · zad. 6",
    pts: 3,
    tags: ["dowód", "nierówność", "rozkład na czynniki"],
    q: String.raw`<p>Wykaż, że dla każdej liczby rzeczywistej \(x\) i dla każdej liczby rzeczywistej \(y\) takich, że \(x\ne y\), spełniona jest nierówność
\[x^4+y^4>xy\,(x^2+y^2).\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Przenosimy wszystko na jedną stronę i rozkładamy na czynniki przez grupowanie. Różnica sześcianów \(x^3-y^3\) ma czynnik \(x-y\).</p>
<p class="step"><b>Rachunek.</b>
\[x^4+y^4-x^3y-xy^3=x^3(x-y)-y^3(x-y)=(x-y)(x^3-y^3)=(x-y)^2(x^2+xy+y^2).\]</p>
<p class="step"><b>Wniosek.</b> Ponieważ \(x\ne y\), więc \((x-y)^2>0\). Dalej
\[x^2+xy+y^2=\tfrac12\bigl(x^2+y^2+(x+y)^2\bigr).\]
Gdyby \(x^2+y^2=0\), to \(x=y=0\), a to przeczy założeniu \(x\ne y\). Zatem \(x^2+y^2>0\), więc \(x^2+xy+y^2>0\). Iloczyn dwóch liczb dodatnich jest dodatni. \(\blacksquare\)</p>
<p class="note">Bez założenia \(x\ne y\) zostaje nierówność nieostra, a równość zachodzi dla \(x=y\).</p>`
  },
  {
    id: 11,
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
    id: 12,
    group: "Dowody algebraiczne",
    src: "czerwiec 2024 · zad. 5",
    pts: 3,
    tags: ["dowód", "nierówność", "warunek dodatkowy", "nierówność między średnimi"],
    q: String.raw`<p>Wykaż, że dla każdej dodatniej liczby \(a\) i każdej dodatniej liczby \(b\) takich, że \(a+b=1\), prawdziwa jest nierówność
\[\frac1{2a+b}+\frac1{a+2b}\ge\frac43.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Warunek \(a+b=1\) upraszcza mianowniki: \(2a+b=a+(a+b)=a+1\) oraz \(a+2b=b+1\). Potem sprowadzamy do wspólnego mianownika i szacujemy iloczyn \(ab\).</p>
<p class="step"><b>Rachunek.</b>
\[\frac1{2a+b}+\frac1{a+2b}=\frac1{a+1}+\frac1{b+1}=\frac{a+b+2}{(a+1)(b+1)}=\frac3{ab+a+b+1}=\frac3{ab+2}.\]
Z nierówności \((a-b)^2\ge0\) mamy \(4ab\le(a+b)^2=1\), czyli \(ab\le\tfrac14\).</p>
<p class="step"><b>Wniosek.</b> Zatem \(ab+2\le\tfrac94\), a ponieważ \(ab+2>0\), dostajemy
\[\frac3{ab+2}\ge\frac3{9/4}=\frac43.\ \blacksquare\]</p>
<p class="note"><b>Drugi sposób.</b> Dla \(u=2a+b>0\) i \(v=a+2b>0\) zachodzi \((u+v)\left(\tfrac1u+\tfrac1v\right)\ge4\) (po wymnożeniu: \(2+\tfrac uv+\tfrac vu\ge4\)), a \(u+v=3(a+b)=3\). Stąd \(\tfrac1u+\tfrac1v\ge\tfrac43\). Równość zachodzi dla \(a=b=\tfrac12\).</p>`
  },
  {
    id: 13,
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
    id: 14,
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
