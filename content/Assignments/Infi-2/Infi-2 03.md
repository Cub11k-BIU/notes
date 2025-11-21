---
{"publish":true,"created":"02/04/25, 13:04","modified":"2025-11-21T21:10:02.401+02:00","tags":["Academia","Assignment","Infi-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\int \frac{\sin x}{\cos^{3}(x)} \, dx \\
\\
t = \cos(x) \implies \int \frac{\sin x}{\cos^{3}(x)} \, dx = \int -\frac{1}{t^{3}} \, dt = \frac{1}{2t^{2}} + C = \frac{1}{2\cos^{2}(x)} + C \\
t = \frac{\sin(x)}{\cos(x)} \implies \int \frac{\sin x}{\cos^{3}(x)} \, dx = \int t \, dt = \frac{t^{2}}{2} + C = \frac{\sin^{2}(x)}{2\cos^{2}(x)} + C \\
\text{Both substitutions are valid because:} \\
\frac{1}{2\cos^{2}(x)} + C = \frac{\sin^{2}(x) + \cos^{2}(x)}{2\cos^{2}(x)} + C = \frac{\sin^{2}(x)}{2\cos^{2}(x)} + \underbrace{ \left( \frac{1}{2} + C \right) }_{ C_{1} } \\
\implies \boxed{ \text{Both results are correct and equivalent} } \\
}
$$
# 2a
$$
\displaylines{
\int_{0}^{1} 5 \, dx \\
\\
\text{Solution:} \\
\int_{0}^{1} 5 \, dx = \left\{\begin{array}{}
\Delta x_{i} = \frac{1}{n} \\
x_{i} = \frac{i}{n} \\
\end{array}\right\} = \lim_{ n \to \infty } \sum_{i=1}^{n} 5 \cdot \frac{1}{n} = \lim_{ n \to \infty } 5 = 5 \\
\implies \boxed{ \int_{0}^{1} 5 \, dx = 5 } \\
}
$$
# 2b
$$
\displaylines{
\int_{1}^{3} 4x+8 \, dx \\
\\
\text{Solution:} \\
\int_{1}^{3} 4x+8 \, dx = \left\{\begin{array}{}
\Delta x_{i} = \frac{2}{n} \\
x_{i} = 1 + \frac{2i}{n} \\
\end{array}\right\} = \lim_{ n \to \infty } \sum_{i=1}^{n} \left( 4 + \frac{8i}{n} + 8 \right) \cdot \frac{2}{n} = \\
\lim_{ n \to \infty }  \frac{16}{n^{2}} \sum_{i=1}^{n} i + 24 = \lim_{ n \to \infty } \frac{16(n^{2}+n)}{2n^{2}} + 24 = 32 \\
\implies \boxed{ \int_{1}^{3} 4x+8 \, dx = 32 } \\
}
$$
# 2c
$$
\displaylines{
\int_{0}^{2} x^{2}+x-1 \, dx = \left\{\begin{array}{}
\Delta x_{i} = \frac{2}{n} \\
x_{i} = \frac{2i}{n} \\
\end{array}\right\} = \lim_{ n \to \infty } \sum_{i=1}^{n} \left( \frac{4i^{2}}{n^{2}} + \frac{2i}{n} - 1 \right) \cdot \frac{2}{n} = \\
= \lim_{ n \to \infty } \frac{8}{n^{3}} \sum_{i=1}^{n} i^{2} + \frac{4}{n^{2}} \sum_{i=1}^{n} i - 2 = \lim_{ n \to \infty } \frac{8(2n^{3}+3n^{2}+n)}{6n^{3}} + \frac{4(n^{2}+n)}{2n^{2}} + - 2 = \frac{16}{6} \\
\implies \boxed{ \int_{0}^{2} x^{2}+x-1 \, dx = \frac{16}{6} = \frac{8}{3} } \\
}
$$
# 2d
$$
\displaylines{
\int_{0}^{1} x^{3} \, dx \\
\\
\text{Solution:} \\
\int_{0}^{1} x^{3} \, dx = \left\{\begin{array}{}
\Delta x_{i} = \frac{1}{n} \\
x_{i} = \frac{i}{n} \\
\end{array}\right\} = \lim_{ n \to \infty } \sum_{i=1}^{n} \frac{i^{3}}{n^{3}} \cdot \frac{1}{n} = \lim_{ n \to \infty } \frac{1}{n^{4}} \sum_{i=1}^{n} i^{3} = \\
= \lim_{ n \to \infty } \frac{n^{2}(n+1)^{2}}{4n^{4}} = \frac{1}{4} \\
\implies \boxed{ \int_{0}^{1} x^{3} \, dx = \frac{1}{4} } \\
}
$$
# 2e
$$
\displaylines{
\int_{1}^{2} \frac{1}{x^{2}} \, dx \\
\\
\text{Solution:} \\
\int_{1}^{2} \frac{1}{x^{2}} \, dx = \left\{\begin{array}{}
\Delta x_{i} = 2^{i/n}\left( 1 - \frac{1}{2^{1/n}} \right) \\
x_{i} = 2^{i/n} \\
\end{array}\right\} = \lim_{ n \to \infty } \sum_{i=1}^{n} \frac{1}{2^{2i/n}} \cdot 2^{i/n}\left( 1 - \frac{1}{2^{1/n}} \right) = \\
= \lim_{ n \to \infty } \left( 1 - \frac{1}{2^{1/n}} \right) \sum_{i=1}^{n} \frac{1}{2^{i/n}} = \lim_{ n \to \infty } \left( 1 - \frac{1}{2^{1/n}} \right) \cdot \frac{1}{2^{1/n}} \frac{\left( \frac{1}{2} - 1 \right)}{\left( \frac{1}{2^{1/n}} - 1 \right)} = \\
= \lim_{ n \to \infty } \frac{1}{2^{1 + 1/n}} = \frac{1}{2} \\
\implies \boxed{ \int_{1}^{2} \frac{1}{x^{2}} \, dx = \frac{1}{2} } \\
}
$$
# 3
$$
\displaylines{
\text{Let } f \text{ be Riemann-integrable on } [a, b] \\
\text{Let } k \in \mathbb{R} \\
\text{Prove by definition: } kf \text{ is Riemann-integrable on } [a, b] \\
\text{and } \int_{a}^{b} kf(x) \, dx = k \int_{a}^{b} f(x) \, dx \\
\\
\text{Proof:} \\
f \text{ is Riemann-integrable on } [a, b] \implies \forall P, C: \lambda(P) \to 0: S(f, P, C) \to L = \int_{a}^{b} f(x) \, dx \\
\text{Let } P = \Set{ x_{0}, \dots, x_{n} } \subseteq [a, b]: \lambda(P) \to 0 \\
\text{Let } C = \Set{ c_{1}, \dots, c_{n} } \subseteq [a, b] \\
\sum_{i=1}^{n} kf(c_{i})\Delta x_{i} = k \sum_{i=1}^{n} f(c_{i})\Delta x_{i} = kS(f, P, C) \\
k \in \mathbb{R}, S(f, P, C) \to L \in \mathbb{R} \implies kS(f, P, C) \to kL = k \int_{a}^{b} f(x) \, dx \\
\implies \forall P, C: \lambda(P) \to 0: S(kf, P, C) \to \int_{a}^{b} kf(x) \, dx = kL = k \int_{a}^{b} f(x) \, dx \\
\implies \boxed{ kf \text{ is Riemann-integrable on } [a, b] \text{ and } \int_{a}^{b} kf(x) \, dx = k \int_{a}^{b} f(x) \, dx } \\
}
$$
# 4
$$
\displaylines{
\text{Let } a > 0 \in \mathbb{R} \\
\text{Let } f \text{ be Riemann-integrable on } [-a, a] \\
\text{Let } \forall x: f(-x) = -f(x) \\
\text{Prove by definition: } \int_{-a}^{a} f(x) \, dx = 0 \\
\\
\text{Proof:} \\
f \text{ is Riemann-integrable on } [-a, a] \implies \forall P, C: \lambda(P) \to 0: S(f, P, C) \to L \\
\text{Let } P_{n} = \Set{ x_{0}, \dots, x_{n} } :\forall i \in [0, n]: x_{i} = a\frac{2i-n}{n} \\
\forall i \in [1, n]: \Delta x_{i} = x_{i} - x_{i-1} = a \frac{2i-n}{n} - a \frac{2(i-1)-n}{n} = \frac{2a}{n} \\
\implies \lambda(P_{n}) = \frac{2a}{n} \\
\implies \lim_{ n \to \infty } \lambda(P_{n}) = 0 \\
\text{Let } C = \Set{ c_{1}, \dots, c_{n} }: \forall i \in [1, n]: c_{i} = \frac{x_{i} + x_{i-1}}{2} = \frac{2i+2i-2-2n}{2n} = \frac{2i-1-n}{n} \\
S(f, P, C) = \sum_{i=1}^{n} f(c_{i})\Delta x_{i} = \frac{2a}{n} \sum_{i=1}^{n} f(c_{i}) \\
\text{Let } n \text{ be odd, } n = 2k + 1 \\
S(f, P, C) = \frac{2a}{n} \left( \sum_{i=1}^{k} f(c_{i}) + f(c_{k+1}) + \sum_{i=k+2}^{n} f(c_{i}) \right) \\
\sum_{i=k+2}^{n} f(c_{i}) = f\left( \frac{2a}{n} \right) + \dots + f\left( \frac{a(n-2)}{n} \right) + f\left( a \right) \\
\sum_{i=1}^{k} f(c_{i}) = f(-a) + f\left( -\frac{a(n-2)}{n} \right) + \dots + f\left( -\frac{2a}{n} \right) = - \sum_{i=k+2}^{n} f(c_{i}) \\
f(c_{k+1}) = 0 \\
\implies S(f, P, C) = \frac{2a}{n} \cdot 0 \\
\boxed{ \int_{-a}^{a} f(x) \, dx =  \lim_{ n \to \infty } S(f, P, C) = \lim_{ n \to \infty } \frac{2a}{n} \cdot 0 = 0 } \\
}
$$
# 5
$$
\displaylines{
\text{Let } f \text{ be Riemann-integrable on } [a, b] \\
\text{Let } \int_{a}^{b} f(x) \, dx > 1 \\
\text{Prove: } \exists x_{0} \in [a, b]: f(x_{0}) > \frac{1}{b-a} \\
\\
\text{Proof:} \\
\text{Let } \forall x \in [a, b]: f(x) \leq \frac{1}{b-a} \\
\implies \int_{a}^{b} f(x) \, dx \leq \int_{a}^{b} \frac{1}{b-a} \, dx = \frac{1}{b-a}(b-a) = 1 - \text{Contradiction!} \\
\implies \exists x_{0} \in [a, b]: f(x_{0}) > \frac{1}{b-a} \\
}
$$
# 6a
$$
\displaylines{
\text{Give an example of a function, that is Riemann-integrable on } [a, b] \\
\text{but doesn't have a primitive on } [a, b] \\
\\
\text{Solution:} \\
\text{Let } f(x) = \left\{\begin{array}{}
1 & a \leq x \leq \frac{a+b}{2} \\
0 & \frac{a+b}{2} < x \leq b \\
\end{array}\right. \\
f \text{ is bounded and has one discontinuity} \\
\implies \text{By the Lebesgue criterion } f \text{ is Riemann-integrable} \\
f \text{ has a jump discontinuity} \implies \text{By the Darboux theorem } f \text{ has no primitive} \\
}
$$
# 6b
$$
\displaylines{
\text{Give an example of a function, that has a primitive on } [a, b] \\
\text{but is not Riemann-integrable on } [a, b] \\
\\
\text{Solution:} \\
\text{Let } [a, b] = [-1, 1] \\
\text{Let } F(x) = \left\{\begin{array}{}
x^{2}\sin\left( \frac{1}{x^{3}} \right) & x \neq 0 \\
0 & x = 0 \\
\end{array}\right. \\
F'(0) = \lim_{ h \to 0 } \frac{F(h)}{h} = \lim_{ h \to 0 } \frac{h^{2}\sin\left( \frac{1}{h^{3}} \right)}{h} = 0 \\
\implies F'(x) = f(x) = \left\{\begin{array}{}
2x\sin\left( \frac{1}{x^{3}} \right) - \frac{3}{x^{2}}\cos\left( \frac{1}{x^{3}} \right) & x \neq 0 \\
0 & x = 0 \\
\end{array}\right. \\
f \text{ has a primitive } F \text{ on } [-1, 1] \\
f \text{ is not bounded at } 0 \implies f \text{ is not Riemann-integrable on } [-1, 1] \\
}
$$
# 7
$$
\displaylines{
\text{Let } f \text{ be Riemann-integrable on } [a, c] \text{ and } [c, b] \\
\text{Prove: } f \text{ is Riemann-integrable on } [a, b] \text{ and } \int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx \\
\\
\text{Proof:} \\
}
$$
