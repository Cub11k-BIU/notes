---
{"publish":true,"created":"25/02/25, 13:02","modified":"2025-11-21T21:10:14.142+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } 0 < x < 1 \\
\text{Prove: } \frac{\ln(x^{2}+1)}{\tan x} < \frac{2x}{x^{2}+1} \\
\\
\text{Proof:} \\
\text{Let } f(x) = \ln(x^{2}+1), f(0) = 0 \\
f \text{ is continuous and differentiable on } (0, \infty) \\
f'(x) = \frac{2x}{x^{2}+1} \\
\text{Let } g(x) = \tan x, g(0) = 0 \\
g \text{ is continuous and differentiable on } \left( 0, \frac{\pi}{2} \right) \\
g'(x) = \frac{\cos^{2}x+\sin^{2}x}{\cos^{2}x} = \frac{1}{\cos^{2}x} = 1 + \tan^{2}x \\
\text{By Cauchy's theorem: } \exists c \in (0, x): \frac{f(x)-f(0)}{g(x)-g(0)} = \frac{f'(c)}{g'(c)} \\
\frac{f'(c)}{g'(c)} = \frac{2c\cos^{2}c}{c^{2}+1} \leq \frac{2c}{c^{2}+1} \\
\text{Let } h(x) = \frac{2x}{x^{2}+1} \\
h \text{ is continuous and differentiable on } \mathbb{R} \\
h'(x) = \frac{2(x^{2}+1)-4x^{2}}{(x^{2}+1)^{2}} = \frac{2(1-x^{2})}{(x^{2}+1)^{2}} \\
0 < x < 1 \implies (1-x^{2}) > 0 \implies h'(x) > 0 \\
\implies [c < x \implies h(c) < h(x)] \\
\implies \boxed{ \frac{\ln(x^{2}+1)}{\tan x} = \frac{f(x)}{g(x)} = \frac{f'(c)}{g'(c)} \leq h(c) < h(x) = \frac{2x}{x^{2}+1} } \\
}
$$
# 2a
$$
\displaylines{
\text{Let } a_{n} \text{ be monotonically non-increasing} \\
\text{Prove or disprove: } \sum_{n=1}^{\infty} a_{n} \text{ converges} \implies na_{n} \to 0 \\
\\
\text{Proof:} \\
\text{Let } \sum_{n=1}^{\infty} a_{n} \text{ converges} \\
\implies \sum_{n=1}^{\infty} 2^{n}a_{2^{n}} \text{ converges} \\
\implies a_{n} \to 0 \text{ and } 2^{n}a_{2^{n}} \to 0 \\
\forall n \in \mathbb{N}: \exists k \in \mathbb{N}: 2^{k} \leq n \leq 2^{k+1} \\
a_{n} \text{ is monotonically non-increasing} \implies a_{2^{k+1}} \leq a_{n} \leq a_{2^{k}} \\
\implies 2^{k}a_{2^{k+1}} \leq na_{n} \leq 2^{k+1}a_{2^{k}} \\
\implies \frac{1}{2}\underbrace{ 2^{k+1}a_{2^{k+1}} }_{ \to 0 } \leq na_{n} \leq 2 \cdot \underbrace{ 2^{k}a_{2^{k}} }_{ \to 0 } \\
\implies \boxed{ na_{n} \to 0 } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } a_{n} \text{ be monotonically non-increasing} \\
\text{Prove or disprove: } na_{n} \to 0 \implies \sum_{n=1}^{\infty} a_{n} \text{ converges} \\
\\
\text{Disproof:} \\
\text{Let } a_{n} = \frac{1}{n\ln n} \\
na_{n} = \frac{1}{\ln n} \to 0 \\
\sum_{n=1}^{\infty} 2^{n}a_{2^{n}} = \sum_{n=1}^{\infty} \frac{2^{n}}{2^{n}n\ln(2)} = \frac{1}{\ln(2)}\sum_{n=1}^{\infty} \frac{1}{n} \text{ diverges} \\
\implies \boxed{ \sum_{n=1}^{\infty} a_{n} \text{ diverges} } \\
}
$$
# 3a
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{\sqrt[n]{ 7^{n}+19^{n} }}{n^{3}\sin\left( \frac{1}{n} \right)} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{\sqrt[n]{ 7^{n}+19^{n} }}{n^{3}\sin\left( \frac{1}{n} \right)} \\
\forall n \in \mathbb{N}: 0 < \frac{1}{n} \leq 1 \\
\forall x \in (0, 1]: \sin(x) > 0 \implies \sin\left( \frac{1}{n} \right) > 0 \implies \left\lvert  \sin\left( \frac{1}{n} \right)  \right\rvert = \sin\left( \frac{1}{n} \right) \\
\text{Let } b_{n} = \frac{1}{n^{2}} \\
\lim_{ n \to \infty } \left\lvert  \frac{a_{n}}{b_{n}}  \right\rvert  = \frac{\sqrt[n]{ 7^{n}+19^{n} }}{n\sin\left( \frac{1}{n} \right)} = \lim_{ n \to \infty } \frac{\sqrt[n]{ 7^{n}+19^{n} }}{\underbrace{ \frac{\sin\left( \frac{1}{n} \right)}{\frac{1}{n}} }_{ \to 1 }} = \lim_{ n \to \infty } \sqrt[n]{ 7^{n}+19^{n} } \\
\text{Let } c_{n} = 7^{n} + 19^{n} \\
\lim_{ n \to \infty } \frac{c_{n+1}}{c_{n}} = \lim_{ n \to \infty } \frac{7^{n+1}+19^{n+1}}{7^{n}+19^{n}} = \lim_{ n \to \infty } \frac{7 \cdot \overbrace{ \left( \frac{7}{19} \right)^{n} }^{ \to 0 } + 19}{\underbrace{ \left( \frac{7}{19} \right)^{n} }_{ \to 0 } + 1} = \frac{19}{1} = 19 \\
\implies \lim_{ n \to \infty } \sqrt[n]{ 7^{n}+19^{n} } = 19 \\
\implies \lim_{ n \to \infty } \left\lvert  \frac{a_{n}}{b_{n}}  \right\rvert = 19 \\
\implies \text{By the limit comparison test: } \left[ \sum_{n=1}^{\infty} b_{n} \text{ converges} \iff \sum_{n=1}^{\infty} a_{n} \text{ converges} \right] \\
\sum_{n=1}^{\infty} b_{n} \text{ converges} \implies \sum_{n=1}^{\infty} a_{n} \text{ also converges} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{\sqrt[n]{ 7^{n}+19^{n} }}{n^{3}\sin\left( \frac{1}{n} \right)} \text{ converges absolutely} } \\
}
$$
# 3b
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{n+n^{2}+n^{3}+\dots+n^{n}}{n^{n+1}} \\
\\
\text{Solution:} \\
\frac{n+n^{2}+\dots+n^{n}}{n^{n+1}} = \frac{1}{n^{n}} + \frac{1}{n^{n-1}} + \dots + \frac{1}{n} \geq \frac{1}{n} \\
\sum_{n=1}^{\infty} \frac{1}{n} \text{ diverges} \\
\implies \text{By the direct comparison test: } \boxed{ \sum_{n=1}^{\infty} \frac{n+n^{2}+n^{3}+\dots+n^{n}}{n^{n+1}} \text{ diverges} } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{Let } f \text{ be continuous on } [a, b] \\
\text{Let } f \text{ be differentiable on } (a, b) \\
\text{Prove or disprove: } f' \text{ is bounded on } (a, b) \\
\\
\text{Disproof:} \\
f' \text{ doesn't have to be continuous} \\
\text{Let } f(x) = \begin{cases}
x^{5}\sin\left( \frac{1}{x^{7}} \right) & x \neq 0 \\
0 & x = 0 \\
\end{cases} \\
f \text{ is continuous on } [-1, 1] \\
f'(0) = \lim_{ x \to 0 } \frac{f(x)-f(0)}{x} = \lim_{ x \to 0 } x^{4}\sin\left( \frac{1}{x^{7}} \right) = 0 \\
\implies f'(x) = \begin{cases}
5x^{4}\sin\left( \frac{1}{x^{7}} \right) - \frac{3}{x^{3}}\cos\left( \frac{1}{x^{7}} \right) & x \neq 0 \\
0 & x = 0 \\
\end{cases} \\
x \to 0 \implies \cos\left( \frac{1}{x^{7}} \right) \not\to 0 \implies \frac{3}{x^{3}}\cos\left( \frac{1}{x^{7}} \right) \to \infty \\
\implies f'(x) \text{ is not bounded on } [-1, 1] \\
}
$$
# 4b
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{Let } f \text{ be continuous on } [0, 1] \\
\text{Let } f(0) = f(1) \\
\text{Let } n \in \mathbb{N} \\
\text{Prove or disprove: } \exists c \in [0, 1]: f(c) = f\left( c+\frac{1}{n} \right) \\
\\
\text{Proof:} \\
\text{Let } g(x) = f(x) - f\left( x+\frac{1}{n} \right) \\
g(0) + g\left( \frac{1}{n} \right) + g\left( \frac{2}{n} \right) + \dots + g\left( \frac{n-1}{n} \right) = \\
= f(0) - f\left( \frac{1}{n} \right) + f\left( \frac{1}{n} \right) - f\left( \frac{2}{n} \right) + \dots + f\left( \frac{n-1}{n} \right) - f(1) = f(0) - f(1) = 0 \\
\text{If any of additives is 0 } \exists c \in [0, 1]: g(c) = 0 \text{ and we are done} \\
\text{If all additives are not 0, then there must be at least one negative and one positive} \\
\implies \text{By the intermediate value theorem exists } c \in [a, b]: g(c) = 0 \text{ and we are done} \\
}
$$
# 5b
$$
\displaylines{
\text{Let } a_{n} = \begin{cases}
7 & n = 1 \\
\sin(a_{n-1}) & n > 1 \\
\end{cases} \\
\text{Find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Solution:} \\
a_{2} = \sin(a_{1}) = \sin(7) \\
0 < \sin(7) \leq 1 \\
a_{3} = \sin(\sin(a_{2})) \\
0 < x \leq 1 \implies \sin(x) > 0 \\
\sin(x) < x \text{ (Geometrical proof from lectures)} \\
\implies a_{n+1} < a_{n} \implies a_{n} \text{ is monotonically decreasing and bounded from below by } 0 \\
\implies a_{n} \text{ converges} \\
\text{Let } \lim_{ n \to \infty } a_{n} = L \\
\lim_{ n \to \infty } a_{n+1} = \lim_{ n \to \infty } \sin(a_{n}) = \lim_{ n \to \infty } \sin(L) = \sin(L) \\
\implies L = \sin(L) \\
\forall n > 1: 0 < a_{n} \leq 1 \implies 0 \leq L \leq 1 \\
L > 0 \implies \sin(L) < L \implies L = 0 \implies \boxed{ a_{n} \to 0 } \\
}
$$
