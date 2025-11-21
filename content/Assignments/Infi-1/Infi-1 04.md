---
{"publish":true,"created":"02/12/24, 19:12","modified":"2025-11-21T21:10:02.270+02:00","tags":["Academia","Assignment","Infi-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Given: } a_{n} \to L \in \mathbb{R}, x \neq L \\
\text{Prove: } \exists N: \forall n > N: a_{n} \neq x \\
\\
\text{Proof:} \\
\lim_{ n \to \infty } a_{n} = L \iff \forall \varepsilon > 0: \exists N: \forall n > N: \lvert a_{n} - L \rvert < \varepsilon \\
x \neq L \implies \lvert x - L \rvert > 0 \\
\text{Let } \varepsilon = \lvert x - L \rvert  \\
\exists N: \forall n > N: \lvert a_{n} - L \rvert < \varepsilon \\
\text{Let } x > L:
\lvert a_{n}-L \rvert < x - L \iff 2L - x < a_{n} < x \implies a_{n} < x \implies a_{n} \neq x \\
\text{Let } x < L:
\lvert a_{n} - L \rvert < L - x \iff x < a_{n} < 2L - x \implies a_{n} > x \implies a_{n} \neq x \\
\implies \boxed{\exists N: \forall n > N: a_{n} \neq x} \\
}
$$
---

# 2a
$$
\displaylines{
\text{Prove: } \lim_{ n \to \infty } a_{n} = L > 0 \implies \lim_{ n \to \infty } \sqrt[n]{ a_{n} } = 1 \\
\\
\text{Proof:} \\
\text{Let } \varepsilon = \frac{L}{4} \\
\lvert a_{n} - L \rvert < \frac{L}{4} \iff \frac{3L}{4} < a_{n} < \frac{5L}{4} \\
\iff \underbrace{ \sqrt[n]{ \frac{3L}{4} } }_{ \to 1 } < \sqrt[n]{ a_{n} } < \underbrace{ \sqrt[n]{ \frac{5L}{4} } }_{ \to 1 } \\
\text{By the "Sandwich" theorem: } \boxed{\lim_{ n \to \infty } \sqrt[n]{ a_{n} } = 1} \\
}
$$
# 2b
$$
\displaylines{
\text{Prove or disprove: If } a_{n} \text{ does not converge to } L > 0, \sqrt[n]{ a_{n} } \text{ still converges to 1} \\
\\
\text{Disproof:} \\
a_{n} = (-1)^{n} \implies \not\exists \lim_{ n \to \infty } a_{n} \\
\sqrt[n]{ a_{n} } = \sqrt[n]{ (-1)^{n} } = -1 \implies \boxed{\lim_{ n \to \infty } \sqrt[n]{ a_{n} } = -1 \neq 1} \\
}
$$
---

# 3a
$$
\displaylines{
a_{n} = \frac{2n^{5} + 16n^{2} + 4}{8n^{5} - 24n^{4} - 3} \\
\lim_{ n \to \infty } a_{n} = \lim_{ n \to \infty } n^{5}\frac{2 + \frac{16}{n^{3}} + \frac{4}{n^{5}}}{8n^{5} - 24n^{4} - 3} = \lim_{ n \to \infty } \frac{2 + \overbrace{ \frac{16}{n^{3}} }^{ \to 0 } + \overbrace{ \frac{4}{n^{5}} }^{ \to 0 }}{8 - \underbrace{ \frac{24}{n} }_{ \to 0 } - \underbrace{ \frac{3}{n^{5}} }_{ \to 0 }} = \frac{2}{8} = \frac{1}{4} \\
\lim_{ n \to \infty } a_{n} = \frac{1}{4} \\
}
$$
# 3b
$$
\displaylines{
b_{n} = \frac{n^{3}-n^{2}+n-\sqrt{ n }+1}{2n^{3}+12\sqrt{ n }-5} \\
\lim_{ n \to \infty } b_{n} = \lim_{ n \to \infty } n^{3}\frac{1 - \frac{1}{n}+\frac{1}{n^{2}}-\sqrt{ \frac{1}{n^{5}} }+\frac{1}{n^{3}}}{2n^{3}+12\sqrt{ n }-5} = \lim_{ n \to \infty } \frac{1 - \overbrace{ \frac{1}{n} }^{ \to 0 }+\overbrace{ \frac{1}{n^{2}} }^{ \to 0 }-\overbrace{ \sqrt{ \frac{1}{n^{5}} } }^{ \to 0 }+\overbrace{ \frac{1}{n^{3}} }^{ \to 0 }}{2+\underbrace{ 12\sqrt{ \frac{1}{n^{5}} } }_{ \to 0 }-\underbrace{ \frac{5}{n^{3}} }_{ \to 0 }} = \frac{1}{2} \\
\lim_{ n \to \infty } b_{n} = \frac{1}{2} \\
}
$$
# 3c
$$
\displaylines{
c_{n} = \frac{\sqrt{ n+2 }-\sqrt{ n+1 }}{\sqrt{ n }} = \frac{(\sqrt{ n+2 }-\sqrt{ n+1 })(\sqrt{ n+2 }+\sqrt{ (n+1) })}{\sqrt{ n }(\sqrt{ n+2 }+\sqrt{ n+1 })} = \\
= \frac{n+2 - (n+1)}{\sqrt{ n }(\sqrt{ n+2 }+\sqrt{ n+1 })} = \frac{1}{\sqrt{ n }(\sqrt{ n+2 }+\sqrt{ n+1 })} = \\
= \frac{1}{\sqrt{ n^{2}+2n }+\sqrt{ n^{2}+n }} = \frac{1}{n\left( \sqrt{ 1+\frac{2}{n} } + \sqrt{ 1 + \frac{1}{n} }\right)} \\
\lim_{ n \to \infty } c_{n} = \lim_{ n \to \infty } \frac{1}{n\left( \sqrt{ 1+\frac{2}{n} } + \sqrt{ 1 + \frac{1}{n} }\right)} = \lim_{ n \to \infty } \underbrace{ \frac{1}{n} }_{ \to 0 } \cdot \underbrace{ \frac{1}{\underbrace{ \sqrt{ 1+\frac{2}{n} } }_{ \to 1 } + \underbrace{ \sqrt{ 1 + \frac{1}{n} } }_{ \to 1 }} }_{ \to \frac{1}{2} } = 0 \\
\lim_{ n \to \infty } c_{n} = 0 \\
}
$$
# 3d
$$
\displaylines{
d_{n} = \frac{\sqrt[3]{ n+2 }-\sqrt[3]{ n+1 }}{\sqrt[3]{ n }} = \\
= \frac{(\sqrt[3]{ n+2 }-\sqrt[3]{ n+1 })(\sqrt[3]{ (n+2)^{2} }+\sqrt[3]{ (n+2)(n+1) } + \sqrt[3]{ (n+1)^{2} })}{\sqrt[3]{ n }(\sqrt[3]{ (n+2)^{2} }+\sqrt[3]{ (n+2)(n+1) } + \sqrt[3]{ (n+1)^{2} })} = \\
= \frac{1}{\sqrt[3]{ n^{3}+4n^{2}+2n } + \sqrt[3]{ n^{3}+3n^{2}+2n } + \sqrt[3]{ n^{3}+2n^{2}+n }} = \\
= \frac{1}{n} \cdot \frac{1}{\sqrt[3]{ 1+\frac{4}{n}+\frac{2}{n^{2}} }+\sqrt[3]{ 1+\frac{3}{n}+\frac{2}{n^{2}} }+\sqrt[3]{ 1+\frac{2}{n}+\frac{1}{n^{2}} }} \\
\lim_{ n \to \infty } d_{n} = \lim_{ n \to \infty } \frac{1}{n} \cdot \lim_{ n \to \infty } \frac{1}{\underbrace{ \sqrt[3]{ 1+\underbrace{ \frac{4}{n} }_{ \to 0 }+\underbrace{ \frac{2}{n^{2}} }_{ \to 0 } } }_{ \to 1 }+\underbrace{ \sqrt[3]{ 1+\underbrace{ \frac{3}{n} }_{ \to 0 }+\underbrace{ \frac{2}{n^{2}} }_{ \to 0 } } }_{ \to 1 }+\underbrace{ \sqrt[3]{ 1+\underbrace{ \frac{2}{n} }_{ \to 0 }+\underbrace{ \frac{1}{n^{2}} }_{ \to 0 } } }_{ \to 1 }} = \\
= 0 \cdot \frac{1}{3} = 0 \\
\lim_{ n \to \infty } d_{n} = 0 \\
}
$$
# 3e
$$
\displaylines{
p_{n} = \sqrt[n]{ 2^{n}+3^{n}+\dots+10^{n} } \\
\text{Let } s_{n} = 2^{n} + 3^{n} + \dots + 10^{n} \\
\lim_{ n \to \infty } p_{n} = \lim_{ n \to \infty } \frac{s_{n+1}}{s_{n}} \\
\\
\frac{2^{n+1}}{s_{n}} = \frac{2}{1 + \underbrace{ \left( \frac{3}{2} \right)^{n} }_{ \to \infty } + \dots + \underbrace{ \left( \frac{10}{2} \right)^{n} }_{ \to \infty }} \to 0 \\
\dots \\
\frac{9^{n+1}}{s_{n}} = \frac{9}{\underbrace{ \left( \frac{2}{9} \right)^{n} }_{ \to 0 } + \dots + 1 + \underbrace{ \left( \frac{10}{9} \right)^{n} }_{ \to \infty }} \to 0 \\
\frac{10^{n+1}}{s_{n}} = \frac{10}{\underbrace{ \left( \frac{2}{10} \right)^{n} }_{ \to 0 } + \underbrace{ \left( \frac{3}{10} \right)^{n} }_{ \to 0 } \dots + 1} \to 10 \\
\implies \frac{s_{n+1}}{s_{n}} = \underbrace{ \frac{2^{n+1}}{s_{n}} }_{ \to 0 } + \underbrace{ \frac{3^{n+1}}{s_{n}} }_{ \to 0 } + \dots + \underbrace{ \frac{10^{n+1}}{s_{n}} }_{ \to 10 } \implies \lim_{ n \to \infty } \frac{s_{n+1}}{s_{n}} = 10 \\
\implies \lim_{ n \to \infty } p_{n} = 10 \\
}
$$
# 3f
$$
\displaylines{
q_{n} = \frac{\sin(\cos(2n^{2}+1))}{\sqrt{ 2n+1 }} \\
-\frac{1}{\sqrt{ 2n+1 }} \leq q_{n} \leq \frac{1}{\sqrt{ 2n+1 }} \\
\left\lvert  \frac{-1}{\sqrt{ 2n + 1 }}-0  \right\rvert = \left\lvert  \frac{1}{\sqrt{ 2n+1 }} - 0  \right\rvert = \frac{1}{\sqrt{ 2n+1 }} < \frac{1}{\sqrt{ 2n }} \underset{ n > N }{ < } \frac{1}{\sqrt{ 2N }} \\
\text{Let } N = \frac{1}{2\varepsilon^{2}}, \varepsilon > 0 \\
\left\lvert  \frac{-1}{\sqrt{ 2n + 1 }}-0  \right\rvert = \left\lvert  \frac{1}{\sqrt{ 2n+1 }} - 0  \right\rvert < \frac{1}{\sqrt{ \frac{2}{2\varepsilon^{2}} }} = \frac{1}{\frac{1}{\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0: \exists N: \forall n > N: \left\lvert  \frac{-1}{\sqrt{ 2n + 1 }}-0  \right\rvert = \left\lvert  \frac{1}{\sqrt{ 2n+1 }} - 0  \right\rvert < \varepsilon \\
\implies \underbrace{ -\frac{1}{\sqrt{ 2n+1 }} }_{ \to 0 } \leq q_{n} \leq \underbrace{ \frac{1}{\sqrt{ 2n+1 }} }_{ \to 0 } \\
\implies \lim_{ n \to \infty } q_{n} = 0 \\
}
$$
---

# 4a
$$
\displaylines{
\text{Prove by definition: } \lim_{ n \to \infty } \ln(n) = \infty \\
\\
\text{Proof:} \\
\text{Definition: } \forall M > 0 : \exists N : \forall n > N: a_{n} > M \\
\text{Let } N = e^{M}, M > 0 \\
\ln(n) \underset{ n > N }{ > } \ln(N) = \ln(e^{M}) = M \\
\implies \forall M > 0: \exists N : \forall n > N: \ln(n) > M \\
\iff \lim_{ n \to \infty } \ln(n) = \infty \\
}
$$
# 4b
$$
\displaylines{
\text{Given: } a_{n} \to \infty, m \in \mathbb{N} \\
\text{Prove by definition: } \lim_{ n \to \infty } \sqrt[m]{ a_{n} } = \infty \\
\\
\text{Proof:} \\
a_{n} \to \infty \iff \forall M > 0: \exists N: \forall n > N: a_{n} > M \\
\text{Let } M_{1} = M^{m} \\
a_{n} \underset{ n > N }{ > } M_{1} \implies \sqrt[m]{ a_{n} } \underset{ n > N }{ > } \sqrt[m]{ M_{1} } = \sqrt[m]{ M^{m} } = M \\
\implies \forall M > 0: \exists N: \forall n > N: \sqrt[m]{ a_{n} } > M \\
\iff \lim_{ n \to \infty } \sqrt[m]{ a_{n} } = \infty \\
}
$$
# 4c
$$
\displaylines{
\text{Given: } a_{n} \to \infty, b_{n} \to \infty \\
\text{Prove be definition: } \lim_{ n \to \infty } a_{n} + b_{n} = \infty \\
\\
\text{Proof:} \\
a_{n} \to \infty \iff \forall M > 0: \exists N_{1}: \forall n > N_{1}: a_{n} > \frac{M}{2} \\
b_{n} \to \infty \iff \forall M > 0: \exists N_{2}: \forall n > N_{2}: b_{n} > \frac{M}{2} \\
\implies \forall M > 0: \exists N = max(N_{1}, N_{2}): \forall n > N: a_{n}+b_{n} > M \\
\iff \lim_{ n \to \infty } a_{n} + b_{n} = \infty \\
}
$$
---
$$
a_{n} \to \infty, b_{n} \to -\infty
$$
# 5a
$$
\displaylines{
\text{Example of } a_{n}+b_{n} \to \infty : \\
a_{n} = 2n^{2} \to \infty \\
b_{n} = -n^{2} \to -\infty \\
a_{n} + b_{n} = n^{2} \to \infty \\
}
$$
# 5b
$$
\displaylines{
\text{Example of } a_{n}+b_{n} \to -\infty : \\
a_{n} = n^{2} \to \infty \\
b_{n} = -2n^{2} \to -\infty \\
a_{n} + b_{n} = -n^{2} \to -\infty \\
}
$$
# 5c
$$
\displaylines{
\text{Example of } a_{n} + b_{n} \to 0: \\
a_{n} = n^{2} \to \infty \\
b_{n} = -n^{2} \to -\infty \\
a_{n} + b_{n} = 0 \to 0 \\
}
$$
# 5d
$$
\displaylines{
\text{Example of } a_{n} + b_{n} \to 10: \\
a_{n} = n^{2} + 10 \to \infty \\
b_{n} = -n^{2} \to -\infty \\
a_{n} + b_{n} = 10 \to 10 \\
}
$$
# 5e
$$
\displaylines{
\text{Example of } \not\exists \lim_{ n \to \infty } a_{n} + b_{n} \\
a_{n} = \begin{cases}
n & n \text{ is odd} \\
n^{2} & n \text{ is even} \\
\end{cases} \to \infty \\
b_{n} = \begin{cases}
-n^{2} & n \text{ is odd} \\
-n & n \text{ is even} \\
\end{cases} \to -\infty \\
a_{n} + b_{n} = \begin{cases}
\overbrace{ n - n^{2} }^{ \to -\infty } & n \text{ is odd} \\
\underbrace{ n^{2} - n }_{ \to \infty } & n \text{ is even} \\
\end{cases} \implies \not\exists \lim_{ n \to \infty } a_{n}+b_{n} \\
}
$$
---
