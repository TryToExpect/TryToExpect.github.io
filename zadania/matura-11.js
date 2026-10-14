(window.TASKS = window.TASKS || {})['matura-11'] = [
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
  }
];
