(window.TASKS = window.TASKS || {})['matura-11'] = [
  {
    id: 2,
    group: "Logarytmy i potęgi",
    src: "maj 2024 · zad. 5",
    pts: 3,
    tags: ["logarytmy", "dowód"],
    req: ["ZR I.1", "ZP I.9"],
    q: String.raw`<p>Wykaż, że jeżeli \(\log_5 4=a\) oraz \(\log_4 3=b\), to
\[\log_{12}80=\frac{2a+1}{a\cdot(1+b)}.\]</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wszystkie logarytmy zapisujemy przez logarytmy naturalne, a liczby \(a\) i \(b\) wyrażamy przez \(\ln2\), \(\ln3\), \(\ln5\).</p>
<p class="step"><b>Dane.</b> \(a=\log_5 4=\dfrac{2\ln2}{\ln5}\), czyli \(\ln5=\dfrac{2\ln2}{a}\). Podobnie \(b=\log_4 3=\dfrac{\ln3}{2\ln2}\), czyli \(\ln3=2b\ln2\).</p>
<p class="step"><b>Teza.</b> Ponieważ \(80=2^4\cdot5\) i \(12=2^2\cdot3\),
\[\log_{12}80=\frac{\ln80}{\ln12}=\frac{4\ln2+\ln5}{2\ln2+\ln3}=\frac{4\ln2+\frac{2\ln2}{a}}{2\ln2+2b\ln2}=\frac{2\ln2\,\bigl(2+\frac1a\bigr)}{2\ln2\,(1+b)}=\frac{\frac{2a+1}{a}}{1+b}=\frac{2a+1}{a\,(1+b)}.\ \blacksquare\]</p>`
  },
  {
    id: 3,
    group: "Logarytmy i potęgi",
    label: "autorskie",
    pts: 2,
    tags: ["logarytmy", "własności logarytmów"],
    req: ["ZP I.9"],
    q: String.raw`<p>Oblicz wartość wyrażenia \(\log_2 24-\log_2 3+\log_3\sqrt[3]{9}\).</p>`,
    ans: String.raw`\(\dfrac{11}{3}\)`,
    sol: String.raw`<p class="step"><b>Krok 1.</b> \(\log_2 24-\log_2 3=\log_2\dfrac{24}{3}=\log_2 8=3\).</p>
<p class="step"><b>Krok 2.</b> \(\sqrt[3]{9}=3^{2/3}\), więc \(\log_3\sqrt[3]{9}=\dfrac23\).</p>
<p class="step"><b>Wynik.</b> \(3+\dfrac23=\dfrac{11}3\).</p>`
  },
  {
    id: 4,
    group: "Logarytmy i potęgi",
    label: "autorskie",
    pts: 3,
    tags: ["logarytmy", "zamiana podstawy", "dowód"],
    req: ["ZR I.1", "ZP I.9"],
    q: String.raw`<p>Wykaż, że \(\log_2 3\cdot\log_3 5\cdot\log_5 8=3\).</p>`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Wszystkie logarytmy zapisujemy przy podstawie \(2\) wzorem na zamianę podstawy \(\log_ab=\dfrac{\log_2b}{\log_2a}\).</p>
<p class="step"><b>Przekształcenie.</b> \(\log_35=\dfrac{\log_25}{\log_23}\) oraz \(\log_58=\dfrac{\log_28}{\log_25}=\dfrac3{\log_25}\). Zatem
\[\log_23\cdot\log_35\cdot\log_58=\log_23\cdot\frac{\log_25}{\log_23}\cdot\frac3{\log_25}=3.\ \blacksquare\]</p>`
  },
  {
    id: 5,
    group: "Logarytmy i potęgi",
    label: "autorskie",
    pts: 4,
    tags: ["logarytmy", "zamiana podstawy", "wyrażanie przez parametr"],
    req: ["ZR I.1", "ZP I.9"],
    q: String.raw`<p>Wiadomo, że \(\log_6 2=a\). Wyraź \(\log_{12}18\) za pomocą liczby \(a\).</p>`,
    ans: String.raw`\(\log_{12}18=\dfrac{2-a}{1+a}\)`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> Zamieniamy podstawę na \(6\): \(\log_{12}18=\dfrac{\log_618}{\log_612}\), a liczby \(18\) i \(12\) rozkładamy na czynniki \(2\), \(3\).</p>
<p class="step"><b>Krok 1.</b> \(\log_63=\log_6\dfrac62=1-a\).</p>
<p class="step"><b>Krok 2.</b> \(\log_618=\log_6(2\cdot3^2)=a+2(1-a)=2-a\) oraz \(\log_612=\log_6(2^2\cdot3)=2a+(1-a)=1+a\).</p>
<p class="step"><b>Wynik.</b> \(\log_{12}18=\dfrac{2-a}{1+a}\).</p>
<p class="note"><b>Sprawdzenie:</b> \(a\approx0{,}3869\), a \(\dfrac{2-a}{1+a}\approx1{,}1632\approx\dfrac{\ln18}{\ln12}\).</p>`
  },
  {
    id: 6,
    group: "Procenty i procent składany",
    label: "autorskie",
    pts: 2,
    tags: ["procenty", "wzrost i spadek procentowy"],
    req: ["ZP I.8"],
    q: String.raw`<p>Cenę towaru podniesiono o \(25\%\), a następnie obniżono o \(x\%\) i dzięki temu cena wróciła do pierwotnej wartości. Oblicz \(x\).</p>`,
    ans: String.raw`\(x=20\)`,
    sol: String.raw`<p class="step"><b>Równanie.</b> Dla ceny początkowej \(c\): \(c\cdot1{,}25\cdot\left(1-\dfrac x{100}\right)=c\), więc \(1-\dfrac x{100}=\dfrac1{1{,}25}=0{,}8\).</p>
<p class="step"><b>Wynik.</b> \(\dfrac x{100}=0{,}2\), czyli \(x=20\). Obniżka musi być mniejsza niż podwyżka, bo jest liczona od większej ceny.</p>`
  },
  {
    id: 7,
    group: "Procenty i procent składany",
    label: "autorskie",
    pts: 3,
    tags: ["procent składany", "lokata", "kapitalizacja"],
    req: ["ZP I.8"],
    q: String.raw`<p>Pani Anna wpłaciła \(5000\) zł na lokatę oprocentowaną \(6\%\) w skali roku, z kapitalizacją co pół roku (odsetki za każde pół roku wynoszą \(3\%\) kapitału). Oblicz, ile złotych będzie na lokacie po \(2\) latach. Wynik zaokrąglij do \(1\) zł.</p>`,
    ans: String.raw`\(\approx5628\) zł`,
    sol: String.raw`<p class="step"><b>Pomysł.</b> W ciągu \(2\) lat jest \(4\) okresy kapitalizacji, a w każdym kapitał mnożymy przez \(1+\dfrac3{100}=1{,}03\).</p>
<p class="step"><b>Obliczenie.</b> \(K=5000\cdot1{,}03^4\). Mamy \(1{,}03^2=1{,}0609\) i \(1{,}0609^2=1{,}12550881\), więc \(K=5627{,}544\ldots\approx5628\) zł.</p>
<p class="note">Zwróć uwagę: gdyby odsetki \(6\%\) doliczano raz w roku, po \(2\) latach byłoby \(5000\cdot1{,}06^2=5618\) zł, czyli mniej.</p>`
  },
  {
    id: 8,
    group: "Wartość bezwzględna i przedziały",
    label: "autorskie",
    pts: 2,
    tags: ["wartość bezwzględna", "przedziały", "część wspólna"],
    req: ["ZP I.7"],
    q: String.raw`<p>Zbiór \(A\) to zbiór rozwiązań nierówności \(|x-3|\le4\), a zbiór \(B\) – nierówności \(|x+1|>2\). Wyznacz \(A\cap B\) i podaj, ile liczb całkowitych należy do tego zbioru.</p>`,
    ans: String.raw`\(A\cap B=(1,7]\); \(6\) liczb całkowitych`,
    sol: String.raw`<div class="fig-wrap" data-sf="1"><svg class="fig" viewBox="0 0 330 160" width="330" height="160" role="img" aria-label="A=[−1,7], B=(−∞,−3)∪(1,∞), część wspólna A∩B=(1,7]"><line class="gr d" x1="109.6" y1="10" x2="109.6" y2="124"/><line class="gr d" x1="141.4" y1="10" x2="141.4" y2="124"/><line class="gr d" x1="173.1" y1="10" x2="173.1" y2="124"/><line class="gr d" x1="268.4" y1="10" x2="268.4" y2="124"/><line class="ax w" x1="56" y1="28" x2="320" y2="28"/><line class="th" x1="141.4" y1="28" x2="268.4" y2="28"/><circle class="dot" cx="141.4" cy="28" r="3.2"/><circle class="dot" cx="268.4" cy="28" r="3.2"/><text class="b" x="6" y="33" text-anchor="start">A</text><line class="ax w" x1="56" y1="62" x2="320" y2="62"/><line class="thp" x1="56" y1="62" x2="109.6" y2="62"/><circle class="holep" cx="109.6" cy="62" r="3.4"/><line class="thp" x1="173.1" y1="62" x2="320" y2="62"/><circle class="holep" cx="173.1" cy="62" r="3.4"/><text class="b" x="6" y="67" text-anchor="start">B</text><line class="ax w" x1="56" y1="96" x2="320" y2="96"/><line class="tha" x1="173.1" y1="96" x2="268.4" y2="96"/><circle class="holea" cx="173.1" cy="96" r="3.4"/><circle class="dota" cx="268.4" cy="96" r="3.2"/><text class="b" x="6" y="101" text-anchor="start">A∩B</text><line class="ax" x1="56" y1="138" x2="317" y2="138"/><polygon class="ah" points="322,138 315,140.9 315,135.1"/><line class="ax" x1="109.6" y1="134" x2="109.6" y2="142"/><text class="m" x="109.6" y="155" text-anchor="middle">−3</text><line class="ax" x1="141.4" y1="134" x2="141.4" y2="142"/><text class="m" x="141.4" y="155" text-anchor="middle">−1</text><line class="ax" x1="173.1" y1="134" x2="173.1" y2="142"/><text class="m" x="173.1" y="155" text-anchor="middle">1</text><line class="ax" x1="268.4" y1="134" x2="268.4" y2="142"/><text class="m" x="268.4" y="155" text-anchor="middle">7</text></svg></div>
<p class="step"><b>Zbiór \(A\).</b> \(|x-3|\le4\iff-4\le x-3\le4\iff-1\le x\le7\), czyli \(A=[-1,7]\).</p>
<p class="step"><b>Zbiór \(B\).</b> \(|x+1|>2\iff x+1>2\) lub \(x+1&lt;-2\iff x>1\) lub \(x&lt;-3\), czyli \(B=(-\infty,-3)\cup(1,\infty)\).</p>
<p class="step"><b>Część wspólna.</b> \(A\cap B=(1,7]\). Liczby całkowite: \(2,3,4,5,6,7\) – jest ich \(6\).</p>`
  },
  {
    id: 9,
    group: "Potęgi i pierwiastki",
    label: "autorskie",
    pts: 3,
    tags: ["potęgi", "podzielność", "porównywanie potęg"],
    req: ["ZP I.2", "ZP I.5"],
    q: String.raw`<p>a) Wykaż, że liczba \(2^{100}+2^{99}+2^{98}\) jest podzielna przez \(7\).</p>
<p>b) Która z liczb jest większa: \(3^{200}\) czy \(2^{300}\)?</p>`,
    ans: String.raw`b) większa jest \(3^{200}\)`,
    sol: String.raw`<p class="step"><b>a)</b> Wyłączamy najmniejszą potęgę: \(2^{100}+2^{99}+2^{98}=2^{98}(4+2+1)=7\cdot2^{98}\), więc liczba jest podzielna przez \(7\). \(\blacksquare\)</p>
<p class="step"><b>b)</b> Sprowadzamy do wspólnego wykładnika: \(3^{200}=(3^2)^{100}=9^{100}\), \(2^{300}=(2^3)^{100}=8^{100}\). Ponieważ \(9>8\), mamy \(9^{100}>8^{100}\), czyli \(3^{200}>2^{300}\).</p>`
  },
  {
    id: 10,
    group: "Potęgi i pierwiastki",
    label: "autorskie",
    pts: 2,
    tags: ["pierwiastki", "prawa działań"],
    req: ["ZP I.4"],
    q: String.raw`<p>Oblicz wartość wyrażenia \(\dfrac{\sqrt[3]{54}\cdot\sqrt[3]{4}}{\sqrt{18}\cdot\sqrt2}\).</p>`,
    ans: String.raw`\(1\)`,
    sol: String.raw`<p class="step"><b>Licznik.</b> \(\sqrt[3]{54}\cdot\sqrt[3]{4}=\sqrt[3]{216}=6\).</p>
<p class="step"><b>Mianownik.</b> \(\sqrt{18}\cdot\sqrt2=\sqrt{36}=6\).</p>
<p class="step"><b>Wynik.</b> \(\dfrac66=1\).</p>`
  }
];
