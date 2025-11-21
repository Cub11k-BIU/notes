---
{"publish":true,"created":"08/01/25, 17:01","modified":"2025-11-21T21:10:25.021+02:00","tags":["Academia","Practice","Infi-1"],"cssclasses":""}
---


$$
\displaylines{
\begin{pmatrix}
{_{\displaystyle \sum a_{n}}}\Big\backslash{^{\displaystyle \sum \lvert a_{n} \rvert}} & \text{Converge} & \text{Diverge} \\
\text{Converge} & \text{Converge abs} & \text{Converge cond} \\
\text{Diverge} & X & Diverge \\
\end{pmatrix}
}
$$
---
$$
\displaylines{
\sum_{n=1}^{\infty} (-1)^{n} \cdot \frac{1}{\sqrt{ n }} \text{ converge or diverge?} \\
\sum_{n=1}^{\infty} \left\lvert  (-1)^{n} \cdot \frac{1}{\sqrt{ n }}  \right\rvert = \sum_{n=1}^{\infty} \frac{1}{\sqrt{ n }} \text{ diverge} \\
a_{n} = \frac{1}{\sqrt{ n }} \to 0 \text{ is monotonically decreasing} \\
\implies \text{By the alternating series test: } \\
\sum_{n=1}^{\infty} (-1)^{n} \cdot \frac{1}{\sqrt{ n }} \text{ converge conditionally} \\
}
$$
---
$$
\displaylines{
\sum_{n=2}^{\infty} \frac{(-1)^{n}}{n\ln^{3}n} \\
\sum_{n=2}^{\infty} \left\lvert \frac{(-1)^{n}}{n\ln^{3}n} \right\rvert = \sum_{n=2}^{\infty} \frac{1}{n\ln^{3}n} \\
a_{n} = \frac{1}{n\ln^{3}n} \implies a_{2^{n}} = \frac{1}{2^{n}\ln^{3}(2^{n})} = \frac{1}{2^{n}n^{3}\ln^{3}2} \\
\implies \sum_{n=2}^{\infty} \frac{2^{n}}{2^{n}n^{3}\ln^{3}2} = \frac{1}{\ln^{3}2} \sum_{n=2}^{\infty} \frac{1}{n^{3}} \text{ converge} \\
\implies \sum_{n=2}^{\infty} \frac{(-1)^{n}}{n\ln^{3}n} \text{ converge absolutely} \\
}
$$
---
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{\sin(2n)}{\sqrt{ n }} \\
\sum_{n=1}^{\infty} \sin(2n) \text{ is bounded} \\
a_{n} = \frac{1}{\sqrt{ n }} \to 0 \text{ is monotonically decreasing} \\
\implies \text{By Dirichlet's test: } \sum_{n=1}^{\infty} \frac{\sin(2n)}{\sqrt{ n }} \text{ converge} \\
}
$$
---
$$
\displaylines{
\frac{1}{1}+\frac{1}{3}-\frac{2}{5}+\frac{1}{7}+\frac{1}{9}-\frac{2}{11}+\dots \\
\sum_{n=1}^{\infty} \frac{b_{n}}{2n-1} \\
b_{n} = \begin{cases}
1 & n \mod 3 = 1 \\
1 & n \mod 3 = 2 \\
-2 & 3 \mid n \\
\end{cases} \\
\text{Partial sums of } b_{n}: S_{N} = 1, 2, 0, 1, 2, 0, \dots \\
\implies \lvert S_{N} \rvert \leq 2 \\
a_{n} = \frac{1}{2n-1} \to 0 \text{ is monotonically decreasing} \\
\implies \text{By Dirichlet's test: } \sum_{n=1}^{\infty} \frac{b_{n}}{2n-1} \\
}
$$
---
$$
\displaylines{
\lim_{ x \to 0 } \frac{1-\cos x}{x^{2}} = \frac{1}{2} \\
\text{Proof:} \\
\lim_{ x \to 0 } \frac{1-\cos x}{x^{2}} = \lim_{ x \to 0 } \frac{1-\cos^{2} x}{x (1+\cos x)} = \lim_{ x \to 0 } \left( \frac{\sin x}{x} \right)^{2} \frac{1}{1+\cos x} = 1^{2} \cdot \frac{1}{2} = \frac{1}{2} \\
}
$$
---
$$
\displaylines{
\lim_{ x \to 0 } \left( \frac{1}{\sin x} - \frac{1}{\tan x} \right) = \lim_{ x \to 0 } \left( \frac{1}{\sin x} - \frac{\cos x}{\sin x} \right) = \lim_{ x \to 0 } \frac{1-\cos x}{\sin x} = \\
= \lim_{ x \to 0 } \underbrace{ \frac{x}{\sin x} }_{ \to 1 } \underbrace{ \frac{1-\cos x}{x^{2}} }_{ \to \frac{1}{2} } \underbrace{ x }_{ \to 0 } = 1 \cdot \frac{1}{2} \cdot 0 = 0 \\
}
$$
---
$$
\displaylines{
\lim_{ x \to 2 } \frac{\sin(6x-12)}{\sqrt{ x }-\sqrt{ 2 }} = \frac{0}{2} = \lim_{ x \to 2 } \underbrace{ \frac{\sin(6x-12)}{6x-12} }_{ \to 1 } \cdot \frac{6x-12}{\sqrt{ x }-\sqrt{ 2 }} = \\
= \lim_{ x \to 2 } 6 \cdot \frac{x-2}{x-2} \cdot (\sqrt{ x }+\sqrt{ 2 }) = 12\sqrt{ 2 } \\
}
$$
---
$$
\displaylines{
\lim_{ x \to \infty } \frac{x \cdot 2^{-x} + \arctan x}{x} = \\
= \lim_{ x \to \infty } \underbrace{ 2^{-x} }_{ \to 0 } + \underbrace{ \frac{\overbrace{ \arctan x }^{ -\pi/2\leq \arctan x \leq \pi/2 }}{x} }_{ \to 0 } = 0 \\
}
$$
---
