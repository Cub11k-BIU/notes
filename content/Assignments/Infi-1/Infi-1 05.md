---
{"publish":true,"created":"17/12/24, 22:12","modified":"2025-11-21T21:10:02.300+02:00","tags":["Academia","Assignment","Infi-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
a > 0, b > 1 \\
\text{Prove: } \frac{b^{n}}{n^{a}} \to \infty \\
\\
\text{Proof:} \\
\text{Let } x_{n} = \frac{b^{n}}{n^{a}} \\
\left\lvert  \frac{x_{n+1}}{x_{n}}  \right\rvert = \frac{b^{n+1} \cdot n^{a}}{b^{n} \cdot (n+1)^{a}} = b \cdot \left( \frac{n}{n+1} \right)^{a} = b \cdot \underbrace{ \left( \frac{1}{1 + \underbrace{ \frac{1}{n} }_{ \to 0 }} \right)^{a} }_{ \to 1 } \\
\implies \lim_{ n \to \infty } \left\lvert  \frac{x_{n+1}}{x_{n}}  \right\rvert = b > 1 \implies \boxed{\lim_{ n \to \infty } x_{n} = \infty} \\
}
$$
# 1b
$$
\displaylines{
\text{Prove: } \frac{n}{\ln n} \to \infty \\
\\
\text{Proof:} \\
\frac{n}{\ln n} = \frac{n}{2\ln(\sqrt{ n })} \\
\sqrt{ n } \in \mathbb{R} \implies \sqrt{ n } \geq \ln(\sqrt{ n }) \\
\implies \frac{n}{2\ln(\sqrt{ n })} = \frac{\sqrt{ n }}{2} \cdot \frac{\sqrt{ n }}{\ln(\sqrt{ n })} \geq \frac{\sqrt{ n }}{2} \to \infty \\
\implies \boxed{\lim_{ n \to \infty } \frac{n}{\ln n} = \infty} \\
}
$$
# 1c
$$
\displaylines{
a > 0 \\
\text{Prove: } \frac{n^{a}}{\ln n} \to \infty \\
\\
\text{Proof:} \\
\ln n = \ln (n^{2a/2a}) = \frac{2}{a} \ln(\sqrt{ n^{a} }) \\
\frac{n^{a}}{\ln n} = \frac{\sqrt{ n^{a} }}{\frac{2}{a}} \cdot \frac{\sqrt{ n^{a} }}{\ln(\sqrt{ n^{a} })} \\
\sqrt{ n^{a} } \in \mathbb{R} \implies \sqrt{ n^{a} } \geq \ln(\sqrt{ n^{a} }) \\
\implies \frac{\sqrt{ n^{a} }}{\frac{2}{a}} \cdot \frac{\sqrt{ n^{a} }}{\ln(\sqrt{ n^{a} })} \geq \frac{a\sqrt{ n^{a} }}{2} \to \infty \\
\implies \boxed{\lim_{ n \to \infty } \frac{n^{a}}{\ln n} = \infty} \\
}
$$
---

# 2a
$$
\displaylines{
a_{n} > 0 \\
\exists N: \forall n \geq N: a_{n+1} > 2a_{n} \\
\text{Prove by definition: } a_{n} \to \infty \\
\\
\text{Proof:} \\
\text{Let } N_{1} > N \\
\forall n > N_{1}: a_{n} \geq 2a_{N_{1}} > 4a_{N_{1} - 1} > 8a_{N_{1} - 2} > \dots > 2^{N_{1}-N+1}a_{N} \\
\text{Let } M = 2^{N_{1} - N + 1}a_{N} \\
a_{N} > 0 \implies M > 0 \\
2^{N_{1}} = \frac{M \cdot 2^{N-1}}{a_{N}} \implies N_{1} = \log_{2}\left( M \cdot \frac{2^{N-1}}{a_{N}} \right) \\
\text{Let } N_{1} = max(\log_{2}\left( M \cdot \frac{2^{N-1}}{a_{N}} \right), N + 1) \\
\implies \forall M > 0: \exists N_{1} > N: \forall n > N_{1}: a_{n} > M \\
\implies \boxed{\lim_{ n \to \infty } a_{n} = \infty} \\
}
$$
# 2b
$$
\displaylines{
a_{n} > 0 \\
\text{Prove by definition: } \frac{a_{n+1}}{a_{n}} \to \infty \implies a_{n} \to \infty \\
\\
\text{Proof:} \\
\frac{a_{n+1}}{a_{n}} \to \infty \implies \forall M > 0: \exists N_{1}: \forall n > N_{1}: \frac{a_{n+1}}{a_{n}} > M \implies a_{n+1} > M a_{n} \\
\text{Let } M = 2 \\
\text{Let } N = N_{1} + 1 \\
\text{As proved in 2a, } \exists N: \forall n \geq N: a_{n+1} > 2a_{n} \implies a_{n} \to \infty \\
\implies \boxed{\lim_{ n \to \infty } a_{n} = \infty} \\
}
$$
# 2c
$$
\displaylines{
a_{n} > 0 \\
\text{Prove: } \sqrt[n]{ a_{n} } \to \infty \implies a_{n} \to \infty \\
\\
\text{Proof:} \\
\sqrt[n]{ a_{n} } \to \infty \implies \forall M > 0: \exists N: \forall n > N: \sqrt[n]{ a_{n} } > M \implies a_{n} > M^{n} \\
\text{Let } M > 1 \implies M^{n} \to \infty \\
\implies \boxed{a_{n} \to \infty} \\
}
$$
---

# 3a
$$
\displaylines{
a_{n} = n^{5} - n^{3} + n - 1 \\
\text{Find: } \lim_{ n \to \infty } a_{n} \\
\\
\text{Solution:} \\
\lim_{ n \to \infty } (n^{5} - n^{3} + n - 1) = \underbrace{ n^{5} }_{ \to \infty } \cdot \underbrace{ \left( 1 - \underbrace{ \frac{1}{n^{2}} }_{ \to 0 } + \underbrace{ \frac{1}{n^{4}} }_{ \to 0 } - \underbrace{ \frac{1}{n^{5}} }_{ \to 0 } \right) }_{ \to 1 } = \infty \\
\boxed{\lim_{ n \to \infty } a_{n} = \infty} \\
}
$$
# 3b
$$
\displaylines{
b_{n} = n\log(n) - 2^{n}\sqrt{ n } \\
\text{Find: } \lim_{ n \to \infty } b_{n} \\
\\
\text{Solution:} \\
-b_{n} = 2^{n}\sqrt{ n } - n\log(n) \geq 2^{n}\sqrt{ n } - \sqrt{ n }\log(n) = \underbrace{ \sqrt{ n } }_{ \to \infty }\underbrace{ (2^{n} - \log(n)) }_{ > 0 } \to \infty \\
\implies \boxed{b_{n} \to -\infty} \\
}
$$
# 3c
$$
\displaylines{
c_{n} = \sqrt{ n+16 } - \sqrt{ n+9 } \\
\text{Find: } \lim_{ n \to \infty } c_{n} \\
\\
\text{Solution:} \\
c_{n} = \frac{(\sqrt{ n+16 }-\sqrt{ n+9 })(\sqrt{ n+16 }+\sqrt{ n_{9} })}{\sqrt{ n+16 }+\sqrt{ n+9 }} = \frac{7}{\sqrt{ n + 16 } + \sqrt{ n+9 }} \\
\underbrace{ \frac{7}{2\sqrt{ 2n }} }_{ \to 0 } \underset{ n > 16 }{ \leq } c_{n} \leq \underbrace{ \frac{7}{2\sqrt{ n }} }_{ \to 0 } \\
\implies \boxed{c_{n} \to 0} \\
}
$$
# 3d
$$
\displaylines{
d_{n} = \frac{\log(n^{2}+25)}{\sqrt{ n-4 }} \\
\text{Find: } \lim_{ n \to \infty } d_{n} \\
\\
\text{Solution:} \\
0 \leq d_{n} \underset{ n > 5 }{ \leq } \frac{\log(2n^{2})}{\sqrt{ n-4 }} = \frac{\log(2n^{2})}{\sqrt{ n }} = \frac{\log(2) + 2\log(n)}{\sqrt{ n }} = \underbrace{ \frac{\log(2)}{\sqrt{ n }} }_{ \to 0 } + \underbrace{ \frac{2}{\ln(10)} \cdot \underbrace{ \frac{\ln n}{\sqrt{ n }} }_{ \to 0 } }_{ \to 0 } \\
\implies \boxed{d_{n} \to 0} \\
}
$$
# 3e
$$
\displaylines{
p_{n} = \frac{(\log(n+4))^{81}}{n^{16}+n-1} \\
\text{Find: } \lim_{ n \to \infty } p_{n} \\
\\
\text{Solution:} \\
0 \leq p_{n} \underset{ n - 1 \geq 0 }{ \leq } \frac{(\log(n+4))^{81}}{n^{16}} \underset{ n > 3 }{ \leq } \frac{(\log(n^{2}))^{81}}{n^{16}} = \left( \frac{2}{\ln(10)} \right)^{81} \cdot \frac{(\ln n)^{81}}{n^{16}} = \\
= \underbrace{ \left( \frac{2}{\ln(10)} \right)^{81} \cdot \underbrace{ \left( \underbrace{ \frac{\ln n}{n^{16/81}} }_{ \to 0 } \right)^{81} }_{ \to 0 } }_{  \to 0 } \\
\implies \boxed{p_{n} \to 0} \\
}
$$
---

# 4
$$
\displaylines{
a_{n} \to 0, b_{n} \to 0 \\
}
$$
## 4a
$$
\displaylines{
\text{Find } a_{n}, b_{n}: \frac{a_{n}}{b_{n}} \to \infty \\
\\
\text{Solution:} \\
a_{n} = \frac{1}{n} \\
b_{n} = \frac{1}{n^{2}} \\
\frac{a_{n}}{b_{n}} = \frac{n^{2}}{n} = n \to \infty \\
}
$$
## 4b
$$
\displaylines{
\text{Find } a_{n}, b_{n}: \frac{a_{n}}{b_{n}} \to 15 \\
\\
\text{Solution:} \\
a_{n} = \frac{15}{n} \\
b_{n} = \frac{1}{n} \\
\frac{a_{n}}{b_{n}} = \frac{15n}{n} = 15 \to 15 \\
}
$$
## 4c
$$
\displaylines{
\text{Find } a_{n}, b_{n}: \frac{a_{n}}{b_{n}} \to 0 \\
\\
\text{Solution:} \\
a_{n} = \frac{1}{n^{2}} \\
b_{n} = \frac{1}{n} \\
\frac{a_{n}}{b_{n}} = \frac{n}{n^{2}} = \frac{1}{n} \to 0 \\
}
$$
## 4d
$$
\displaylines{
\text{Find } a_{n}, b_{n}: \frac{a_{n}}{b_{n}} \to -\infty \\
\\
\text{Solution:} \\
a_{n} = -\frac{1}{n} \\
b_{n} = \frac{1}{n^{2}} \\
\frac{a_{n}}{b_{n}} = -\frac{n^{2}}{n} = -n \to -\infty \\
}
$$
## 4e
$$
\displaylines{
\text{Find } a_{n}, b_{n}: \not\exists \lim_{ n \to \infty } \frac{a_{n}}{b_{n}} \\
\\
\text{Solution:} \\
a_{n} = \frac{(-1)^{n}}{n} \\
b_{n} = \frac{1}{n} \\
\frac{a_{n}}{b_{n}} = (-1)^{n} \implies \not\exists \lim_{ n \to \infty } \frac{a_{n}}{b_{n}} \\
}
$$
---

# 5a
$$
\displaylines{
C > 0 \\
\text{Prove by definition: } a_{n} \to \infty \implies a_{n}^{C} \to \infty \\
\\
\text{Proof:} \\
a_{n} \to \infty \implies \forall M > 0: \exists N: \forall n > N: a_{n} > M \implies a_{n}^{C} > M^{C} \\
\text{Let } M_{1} = M^{C} \\
\implies \forall M_{1} > 0: \exists N: \forall n > N: a_{n}^{C} > M_{1} \\
\implies \lim_{ n \to \infty } a_{n}^{C} = \infty \\
}
$$
# 5b
$$
\displaylines{
\text{Give an example: } a_{n} \to \infty, c_{n} > 0, a_{n}^{c_{n}} \not\to \infty \\
\\
\text{Solution:} \\
a_{n} = e^{n} \\
c_{n} = \frac{1}{n} \\
a_{n}^{c_{n}} = (e^{n})^{1/n} = e^{n/n} = e^{1} = e \to e \\
\implies a_{n}^{c_{n}} \not\to \infty \\
}
$$
---

# 6a
$$
\displaylines{
a_{n} \to 0, b_{n} \to \infty \\
\text{Prove: } \frac{a_{n}}{b_{n}} \to 0 \\
\\
\text{Proof:} \\
b_{n} \to \infty \implies \forall M > 0: \exists N: \forall n > N: b_{n} > M \implies 0 < \frac{1}{b_{n}} < \frac{1}{M} \\
\text{Let } \varepsilon = \frac{1}{M} \\
\forall \varepsilon > 0: \exists N: \forall n > N: 0 < \frac{1}{b_{n}} < \varepsilon = \frac{1}{M} \implies \frac{1}{b_{n}} \to 0 \\
\lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = \lim_{ n \to \infty } \underbrace{ a_{n} }_{ \to 0 } \cdot \underbrace{ \frac{1}{b_{n}} }_{ \to 0 } = 0 \\
}
$$
# 6b
$$
\displaylines{
a_{n} \to \infty, b_{n} > 0, b_{n} \to 0 \\
\text{Prove: } \frac{a_{n}}{b_{n}} \to \infty \\
\\
\text{Proof:} \\
b_{n} > 0, b_{n} \to 0 \implies \forall \varepsilon > 0: \exists N: \forall n > N: b_{n} < \varepsilon \implies \frac{1}{b_{n}} > \frac{1}{\varepsilon} \\
\text{Let } M = \frac{1}{\varepsilon} \\
\forall M > 0: \exists N: \forall n > N: \frac{1}{b_{n}} > \frac{1}{\varepsilon} = M \implies \frac{1}{b_{n}} \to \infty \\
\lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = \lim_{ n \to \infty } \underbrace{ a_{n} }_{ \to \infty } \cdot \underbrace{ \frac{1}{b_{n}} }_{ \to \infty } = \infty \\
}
$$
# 6c
$$
\displaylines{
a_{n} \to 0, b_{n} \to \infty \\
\text{Prove: } a_{n}^{b_{n}} \to 0 \\
\\
\text{Proof:} \\
a_{n} \to 0 \implies \forall \varepsilon > 0: \exists N_{1}: \forall n > N_{1}: \lvert a_{n} \rvert < \varepsilon \\
\text{Let } \varepsilon = 1 \\
b_{n} \to \infty \implies \forall M > 0: \exists N_{2}: \forall n > N_{2}: b_{n} > M \\
\text{Let } M = 1 \\
\text{Let } N = max(N_{1}, N_{2}) \\
\forall n > N: a_{n} < 1, b_{n} > 1 \implies \lvert a_{n} \rvert ^{b_{n}} \leq \lvert a_{n} \rvert \\
\implies 0 \leq \lvert a_{n}^{b_{n}} \rvert = \lvert a_{n} \rvert ^{b_{n}} \leq \underbrace{ \lvert a_{n} \rvert }_{ \to 0 } \\
\implies \lvert a_{n}^{b_{n}} \rvert \to 0 \implies a_{n}^{b_{n}} \to 0 \\
}
$$
---
