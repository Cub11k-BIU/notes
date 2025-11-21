---
{"publish":true,"created":"21/02/25, 13:02","modified":"2025-11-21T21:10:14.156+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Prove: } x > 3 \implies \frac{2\ln(x-2)}{\sqrt{ x+1 }-2} > \frac{4\sqrt{ x+1 }}{x-2} \\
\\
\text{Proof:} \\
\text{Let } f(t) = 2\ln(t-2) \\
f'(t) = \frac{2}{t-2} \\
\text{Let } g(t) = \sqrt{ t+1 }-2 \\
g'(t) = \frac{1}{2\sqrt{ t+1 }} \\
f(t) \text{ is continuous on } [3, \infty) \text{ and differentiable on } (3, \infty) \\
g(t) \text{ is continuous on } [3, \infty] \text{ and differentiable on } (3, \infty) \\
\implies \text{By Lagrange's theorem: } \exists c \in (3, x): \frac{f(x)-f(3)}{g(x)-g(3)} = \frac{f'(c)}{g'(c)} \\
\implies \frac{2\ln(x-2)-2\ln(1)}{\sqrt{ x+1 }-2+\sqrt{ 4 }-2} = \frac{2\ln(x-2)}{\sqrt{ x+1 }-2} = \frac{4\sqrt{ c+1 }}{c-2} \\
\text{Let } h(t) = \frac{4\sqrt{ t+1 }}{t-2} \\
h'(t) = \frac{\left( \frac{2}{\sqrt{ t+1 }}(t-2) - 4\sqrt{ t+1 } \right)}{(t-2)^{2}} = \frac{2t-4-4t-4}{\sqrt{ t+1 }(t-2)^{2}} = \frac{\overbrace{ -2t-8 }^{ < 0 }}{\underbrace{ \sqrt{ t+1 } }_{ >0 }\underbrace{ (t-2)^{2} }_{ > 0 }} < 0 \\
\implies h(t) \text{ is monotonically decreasing for } t > 3 \\
c < x \implies h(c) > h(x) \implies \boxed{ \frac{2\ln(x-2)}{\sqrt{ x+1 }-2} > \frac{4\sqrt{ x+1 }}{x-2} } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{Let } f \text{ be continuous on } [a, b] \text{ and differentiable on } (a, b) \\
\text{Prove or disprove: } f \text{ is bounded on } (a, b) \\
\\
\text{Proof:} \\
\text{Let } f \text{ be unbounded on } (a, b) \\
\implies \forall n \in \mathbb{N}: \exists x_{n} \in (a, b): f(x_{n}) > n \\
(a, b) \text{ is bounded} \implies \text{By Bolzano-Weierstrasse theorem } \exists x_{n_{k}} \to x \in (a, b) \\
f \text{ is continuous on } [a, b] \implies f(x_{n_{k}}) \to f(x) \in \mathbb{R} \\
f(x_{n}) \to \infty \implies f(x_{n_{k}}) \to \infty \implies f(x) = \infty - \text{Contradiction!} \\
\implies \boxed{ f \text{ is bounded on } (a, b) } \\
\\
\text{Note: This is Weierstrasse boundness theorem (lecture 23)} \\
}
$$
# 2a
$$
\displaylines{
\text{Find: } \lim_{ n \to \infty } \left( 1+\cos\left( \frac{1}{n}\right)\sin\left( \frac{1}{n} \right) \right)^{n^{2}\sin(1/n)} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \cos\left( \frac{1}{n} \right)\sin\left( \frac{1}{n} \right) \\
\text{Let } b_{n} = n^{2}\sin\left( \frac{1}{n} \right) \\
\sin\left( \frac{1}{n} \right) \to \sin 0 = 0 \\
-1 < \cos\left( \frac{1}{n} \right) < 1 \\
\implies \cos\left( \frac{1}{n} \right)\sin\left( \frac{1}{n} \right) \to 0 \\
\implies a_{n} \to 1 \\
b_{n} \to \infty \\
\implies \lim_{ n \to \infty } a_{n}^{b_{n}} = e^{\lim_{ n \to \infty }(a_{n}-1)b_{n} } \\
\lim_{ n \to \infty } (a_{n}-1)b_{n} = \lim_{ n \to \infty } \cos\left( \frac{1}{n} \right)\sin\left( \frac{1}{n} \right)n^{2}\sin\left( \frac{1}{n} \right) = \\
= \lim_{ n \to \infty } \frac{\sin\left( \frac{1}{n} \right)}{\frac{1}{n}} \frac{\sin\left( \frac{1}{n} \right)}{\frac{1}{n}}\cos\left( \frac{1}{n} \right) \underbrace{ = }_{ \frac{1}{n} \to 0^{+} } 1  \\
\implies \boxed{ \lim_{ n \to \infty } a_{n}^{b_{n}} = e^{1} = e } \\
}
$$
# 2b
$$
\displaylines{
\text{Find: } \lim_{ n \to \infty } \left( 1+\frac{1}{n} \right)^{(-1)^{n}} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \left( 1 + \frac{1}{n} \right)^{(-1)^{n}} \\
a_{2n} = \left( 1+\frac{1}{2n} \right) \to 1 \\
a_{2n-1} = \left( 1+\frac{1}{2n-1} \right)^{-1} = \frac{2n-1}{2n} = 1 - \frac{1}{2n} \to 1 \\
\left\{\begin{array}{}
a_{2n} \to 1 \\
a_{2n-1} \to 1 \\
\end{array}\right. \implies \boxed{ a_{n} \to 1 } \\
}
$$
# 3a
$$
\displaylines{
\text{Determine whether series diverges or converges} \\
\text{and if converges, whether absolutely or conditionally} \\
\sum_{n=1}^{\infty} \frac{17}{(\sqrt[n]{ n! })^{17}} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{17}{(\sqrt[n]{ n! })^{17}} \\
\lvert a_{n} \rvert = a_{n} \\
n! = \prod_{i=1}^{n} i \geq \prod_{i=\frac{n}{2}}^{n} i \geq \prod_{i=\frac{n}{2}}^{n} \frac{n}{2} = \left( \frac{n}{2} \right)^{n/2} \\
\implies \sqrt[n]{ n! } \geq \sqrt[n]{ \left( \frac{n}{2} \right)^{n/2} } = \sqrt{ \left( \frac{n}{2} \right) } \\
\implies a_{n} \leq \frac{17 \cdot 2^{17/2}}{n^{17/2}} \\
\sum_{n=1}^{\infty} \frac{17 \cdot 2^{17/2}}{n^{17/2}} = 17 \cdot 2^{17/2} \cdot \sum_{n=1}^{\infty} \frac{1}{n^{17/2}} \text{ converges} \\
\implies \sum_{n=1}^{\infty} \lvert a_{n} \rvert \text{ converges} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{17}{(\sqrt[n]{ n! })^{17}} \text{ converges absolutely} } \\
}
$$
# 3b
$$
\displaylines{
\text{Determine whether series diverges or converges} \\
\text{and if converges, whether absolutely or conditionally} \\
\sum_{n=2}^{\infty} \frac{(-1)^{n}}{\ln(n^{\sqrt{ n }})} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{(-1)^{n}}{\ln(n^{\sqrt{ n }})} \\
\lvert a_{n} \rvert = \frac{1}{\ln(n^{\sqrt{ n }})} = \frac{1}{\sqrt{ n }\ln n} \\
\sum_{n=2}^{\infty} \frac{2^{n}}{\sqrt{ 2^{n} }\ln(2^{n})} = \sum_{n=2}^{\infty} \frac{\sqrt{ 2^{n} }}{n\ln(2)} \\
\frac{\sqrt{ 2^{n} }}{n} \not\to 0 \implies \sum_{n=2}^{\infty} 2^{n}\lvert a_{2^{n}} \rvert \text{ diverges} \implies \sum_{n=2}^{\infty} \lvert a_{n} \rvert \text{ diverges} \\
\frac{1}{\ln(n^{\sqrt{ n }})} = \frac{1}{\sqrt{ n }\ln(n)} \text{ which is monotonically decreasing and } \to 0 \\
\implies \text{By the Leibniz criterion: } \boxed{ \sum_{n=2}^{\infty} \frac{(-1)^{n}}{\ln(n^{\sqrt{ n }})} \text{ converges conditionally} } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } a_{n} = \begin{cases}
3 & n = 1 \\
\frac{1}{2}\left( a_{n-1} + \frac{7}{a_{n-1}} \right) & n > 1 \\
\end{cases} \\
\text{Prove that } a_{n} \text{ converges and find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Solution:} \\
\forall n \in \mathbb{N}: a_{n} > 0 \\
a_{n+1} - a_{n} = \frac{7-a_{n}^{2}}{2a_{n}} \\
\text{Base case. } \sqrt{ 7 } < a_{1} \leq 3 \\
\text{Induction step. Let } \sqrt{ 7 } < a_{n} \leq 3 \\
\implies a_{n+1} - a_{n} < 0 \implies a_{n+1} < a_{n} \\
a_{n+1} = \frac{a_{n}^{2}+7}{2a_{n}} \\
\text{Let } f(x) = \frac{x^{2}+7}{2x} \\
f \text{ is continuous and differentiable on } (0, \infty) \\
f'(x) = \frac{1}{2} - \frac{7}{2x^{2}} \\
x > \sqrt{ 7 } \implies f'(x) > 0 \implies f(x) > f(\sqrt{ 7 }) = \sqrt{ 7 } \\
a_{n} > \sqrt{ 7 } \implies a_{n+1} = f(a_{n}) > \sqrt{ 7 } \\
\implies \forall n \in \mathbb{N}: a_{n} > \sqrt{ 7 } \land a_{n+1} < a_{n} \\
\implies a_{n} \text{ is bounded and monotonically decreasing} \\
\implies \lim_{ n \to \infty } a_{n} = L \in \mathbb{R} \\
\implies \lim_{ n \to \infty } a_{n+1} = \lim_{ n \to \infty } \frac{a_{n}}{2} + \frac{7}{2a_{n}} = \frac{L}{2} + \frac{7}{2L} = L \\
\implies L^{2} = 7 \implies L = \pm \sqrt{ 7 } \\
a_{n} > \sqrt{ 7 } \implies L \geq \sqrt{ 7 } \implies \boxed{ L = \sqrt{ 7 } } \\
}
$$
# 4b
$$
\displaylines{
\text{Let } S, T \subseteq \mathbb{R}, S \subseteq T \\
\text{Prove or disprove: } sup(S) \leq sup(T) \\
\\
\text{Disproof:} \\
\text{Let } S = T = \mathbb{R} \\
\boxed{ \not\exists sup(S), sup(T) } \\
}
$$
