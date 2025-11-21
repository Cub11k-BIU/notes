---
{"publish":true,"created":"14/06/25, 23:06","modified":"2025-11-21T21:10:02.494+02:00","tags":["Academia","Assignment","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Find Taylor series with center 0 of } f(x) = \cos(x) \text{ by definition} \\
\\
\text{Solution:} \\
f^{(0)}(0) = \cos(0) = 1 \\
f'(0) = -\sin(0) = 0 \\
f''(0) = -\cos(0) = -1 \\
f^{(3)}(0) = \sin(0) = 0 \\
f^{(4)}(0) = -\cos(0) = 1 \\
f^{(5)}(0) = \sin(0) = 0 \\
\dots \\
\forall n \in \mathbb{N}_{0}: \left\{\begin{array}{}
f^{(2n+1)}(0) = \sin(0) = 0 \\
f^{(2n)}(0) = \cos(0) = (-1)^{n} \\
\end{array}\right. \\
\implies \cos(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^{n} = \boxed{ \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}x^{2n} } \\
}
$$
## 1b
$$
\displaylines{
\text{Find Taylor series with center 0 of } f(x) = \cos(x) \text{ by term-by-term differentiation of} \\
\text{Maclaurin series for } \sin(x) \\
\\
\text{Solution:} \\
\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}x^{2n+1} \\
\cos(x) = (\sin x)' = \sum_{n=0}^{\infty} \left( \frac{(-1)^{n}}{(2n+1)!}x^{2n+1} \right)' = \sum_{n=0}^{\infty} \frac{(2n+1)(-1)^{n}}{(2n+1)!}x^{2n} = \boxed{ \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}x^{2n} } \\
}
$$
## 1c
$$
\displaylines{
\text{Find Taylor series with center 0 of } f(x) = \cos(x) \text{ by term-by-term integration of} \\
\text{Maclaurin series for } \sin(x) \\
\\
\text{Solution:} \\
\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}x^{2n+1} \\
\cos(x) - 1 = \int_{0}^{x} -\sin(t) \, dt = -\int_{0}^{x} \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}t^{2n+1} \, dt = \sum_{n=0}^{\infty} \frac{(-1)^{n+1}}{(2n+1)!} \int_{0}^{x} t^{2n+1} \, dt = \\
= \sum_{n=0}^{\infty} \frac{(-1)^{n+1}}{(2n+1)!} \frac{x^{2n+2}}{(2n+2)} = \sum_{n=0}^{\infty} \frac{(-1)^{n+1}}{(2n+2)!}x^{2+2} \\
\implies \cos(x) = 1 + \sum_{n=0}^{\infty} \frac{(-1)^{n+1}}{(2n+2)!}x^{2n+2} = 1 + \sum_{n=1}^{\infty} \frac{(-1)^{n}}{(2n)!}x^{2n} = \boxed{ \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}x^{2n} } \\
}
$$
# 2a
$$
\displaylines{
\sin(8x) \\
\\
f^{(0)}(0) = \sin(0) = 0 \\
f'(0) = 8\cos(0) = 8 \\
f''(0) = -8^{2}\sin(0) = 0 \\
f^{(3)}(0) = -8^{3}\cos(0) = -8^{3} \\
f^{(4)}(0) = 8^{4}\sin(0) = 0 \\
f^{(5)}(0) = 8^{5}\cos(0) = 8^{5} \\
f^{(6)}(0) = -8^{6}\sin(0) = 0 \\
\forall n \in \mathbb{N}_{0}: \left\{\begin{array}{}
f^{(2n)}(0) = 0 \\
f^{(2n+1)}(0) = (-1)^{n} \cdot 8^{2n+1} \\
\end{array}\right. \\
\implies \boxed{ \sin(8x) = \sum_{n=0}^{\infty} \frac{(-1)^{n}8^{2n+1}}{(2n+1)!}x^{2n+1} } \\
\lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert = \lim_{ n \to \infty } \frac{8^{2n+3}(2n+1)!}{(2n+3)!8^{2n+1}} = \lim_{ n \to \infty } \frac{64}{(2n+2)(2n+3)} = 0 \\
\implies \boxed{ \text{Convergence radius is } \infty } \\
}
$$
# 2b
$$
\displaylines{
e^{-x^{2}} \\
\\
e^{t} = \sum_{n=0}^{\infty} \frac{1}{n!}t^{n} \\
\implies \boxed{ e^{-x^{2}} = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{n!}x^{2n} } \\
\lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert = \lim_{ n \to \infty } \frac{1}{n+1} = 0 \\
\implies \boxed{ \text{Convergence radius is } \infty } \\
}
$$
# 2c
$$
\displaylines{
\sin^{2}(x) \\
\\
\sin^{2}(x) = \frac{1-\cos(2x)}{2} = \frac{1}{2}\left( 1 - \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}(2x)^{2n} \right) = \frac{1}{2} - \frac{1}{2} - \frac{1}{2}\sum_{n=1}^{\infty} \frac{(-1)^{n}2^{2n}}{(2n)!}x^{2n} = \\
= \sum_{n=1}^{\infty} \frac{(-1)^{n+1}2^{2n-1}}{(2n)!}x^{2n} = \sum_{n=0}^{\infty} \frac{(-1)^{n+2}2^{2n+1}}{(2n+2)!}x^{2n+2} = \boxed{ \sum_{n=0}^{\infty} \frac{(-1)^{n}2^{2n+1}}{(2n+2)!}x^{2n+2} } \\
\lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert = \lim_{ n \to \infty } \frac{2^{2n+3}(2n+2)!}{(2n+4)!2^{2n+1}} = \lim_{ n \to \infty } \frac{4}{(2n+3)(2n+4)} = 0 \\
\implies \boxed{ \text{Convergence radius is } \infty } \\
}
$$
# 2d
$$
\displaylines{
\frac{15}{16 + x^{2}} \\
\\
\frac{15}{16 + x^{2}} = \frac{15}{16\left( 1 + \frac{x^{2}}{16} \right)} = \frac{15}{16} \cdot \frac{1}{1 + \frac{x^{2}}{16}} \\
\frac{1}{1-t} = \sum_{n=0}^{\infty} t^{n} \\
t = -\frac{x^{2}}{16} \implies \frac{1}{1 + \frac{x^{2}}{16}} = \sum_{n=0}^{\infty} \left( -\frac{x^{2}}{16} \right)^{n} = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{16^{n}}x^{2n} \\
\implies \frac{15}{16 + x^{2}} = \frac{15}{16} \cdot \frac{1}{1+\frac{x^{2}}{16}} = \boxed{ \sum_{n=0}^{\infty} \frac{15(-1)^{n}}{16^{n+1}}x^{2n} } \\
\sum_{n=0}^{\infty} t^{n} \text{ converges on } (-1, 1) \implies -1 < -\frac{x^{2}}{16} < 1 \implies x \in (-4, 4) \\
x = \pm 4 \implies \sum_{n=0}^{\infty} \frac{15(-1)^{n}}{16^{n+1}}x^{2n} = \sum_{n=0}^{\infty} \frac{15(-1)^{n}}{16} \text{ which diverges} \\
\implies \boxed{ \text{Convergence interval is } (-4, 4) \text{ with center } 0 \text{ and radius } 4 } \\
}
$$
# 2e
$$
\displaylines{
\frac{1}{(1-x)^{3}} \\
\\
\frac{1}{1-x} = \sum_{n=0}^{\infty} x^{n} \\
\frac{1}{(1-x)^{2}} = \left( \frac{1}{1-x} \right)' = \sum_{n=0}^{\infty} nx^{n-1} \\
\frac{2}{(1-x)^{3}} = \left( \frac{1}{(1-x)^{2}} \right)' = \sum_{n=0}^{\infty} (n-1)nx^{n-2} \\
\implies \frac{1}{(1-x)^{3}} = \sum_{n=0}^{\infty} \frac{(n-1)n}{2}x^{n-2} = 0 + 0 + \sum_{n=2}^{\infty} \frac{(n-1)n}{2}x^{n-2} = \\
= \boxed{ \sum_{n=0}^{\infty} \frac{(n+1)(n+2)}{2}x^{n} } \\
\text{Convergence radius doesn't change after term-by-term differentiation} \\
\implies \text{Convergence radius is 1} \\
x = \pm 1 \implies \frac{(n+1)(n+2)}{2}x^{n} \not\to 0 \implies \sum_{n=0}^{\infty} \frac{(n+1)(n+2)}{2}x^{n} \text{ diverges} \\
\implies \boxed{ \text{Convergence interval is } (-1, 1) \text{ with center at } 0 \text{ and radius } 1 } \\
}
$$
# 2f
$$
\displaylines{
\frac{1}{(1+x)^{3}} \\
\\
\frac{1}{(1-t)^{3}} = \sum_{n=0}^{\infty} \frac{(n+1)(n+2)}{2}t^{n} \\
t = -x \implies \frac{1}{(1+x)^{3}} = \boxed{ \sum_{n=0}^{\infty} \frac{(-1)^{n}(n+1)(n+2)}{2}x^{n} } \\
\sum_{n=0}^{\infty} \frac{(n+1)(n+2)}{2}t^{n} \text{ converges on } (-1, 1) \\
\implies \sum_{n=0}^{\infty} \frac{(-1)^{n}(n+1)(n+2)}{2}x^{n} \text{ converges on } (-1, 1) \\
x = \pm 1 \implies \frac{(-1)^{n}(n+1)(n+2)}{2}x^{n} \not\to 0 \implies \sum_{n=0}^{\infty} \frac{(-1)^{n}(n+1)(n+2)}{2}x^{n} \text{ diverges} \\
\implies \boxed{ \text{Convergence interval is } (-1, 1) \text{ with center at 0 and radius 1} } \\
}
$$
# 3
$$
\displaylines{
f(x) = \frac{x}{(1+x)^{3}} \\
\text{Find } f^{(17)}(0) \\
\\
\text{Solution:} \\
\frac{1}{(1+x)^{3}} = \sum_{n=0}^{\infty} \frac{(-1)^{n}(n+1)(n+2)}{2}x^{n} \\
\implies f(x) = \frac{x}{(1+x)^{3}} = \sum_{n=0}^{\infty} \frac{(-1)^{n}(n+1)(n+2)}{2}x^{n+1} = 0 + \sum_{n=1}^{\infty} \frac{(-1)^{n-1}n(n+1)}{2}x^{n} = \\
= \sum_{n=0}^{\infty} \frac{(-1)^{n-1}n(n+1)}{2}x^{n} \\
\implies \frac{f^{(n)}(0)}{n!} = \frac{(-1)^{n-1}n(n+1)}{2} \\
\implies \boxed{ f^{(17)}(0) = 9 \cdot 17 \cdot 17! } \\
}
$$
# 4
$$
\displaylines{
\text{Calculate } \int_{0}^{1} x^{3}\sin(x^{3}) \, dx \text{ with accuracy of } \frac{1}{1000} \\
\\
\text{Solution:} \\
x^{3}\sin(x^{3}) = x^{3} \cdot \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}(x^{3})^{2n+1} = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}x^{6n+6} \\
\implies \int_{0}^{1} x^{3}\sin(x^{3}) \, dx = \int_{0}^{1} \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}x^{6n+6} \, dx = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!} \int_{0}^{1} x^{6n+6} \, dx = \\
= \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!} \cdot \frac{1}{6n+7} = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(6n+7) \cdot (2n+1)!} \\
\frac{1}{3 \cdot (2n+2)!} \text{ is monotonically decreasing to 0 } \implies \text{Series converges by Leibniz test} \\
\text{For alternating series, } \left\lvert R_{k} \right\rvert \leq \left\lvert a_{k+1} \right\rvert \\
\implies \text{We need to find such } k \text{ that } \left\lvert R_{k} \right\rvert \leq \left\lvert a_{k+1} \right\rvert = \frac{1}{(6k+13) \cdot (2k+3)!} < \frac{1}{1000} \\
\implies (6k + 13) \cdot (2k+3)! > 1000 \\
k = 1 \implies 19 \cdot 5! = 19 \cdot 120 > 1000 \\
k = 2 \implies 25 \cdot 7! = 25 \cdot 5040 \gg 1000 \\
\implies \boxed{ k \geq 1 } \\
\implies \int_{0}^{1} x^{3}\sin(x^{3}) \, dx = \boxed{ \sum_{n=0}^{1} \frac{(-1)^{n}}{(6n+7) \cdot (2n+1)!} \pm \frac{1}{1000} } \\
}
$$
# 5
$$
\displaylines{
\text{Calculate } \sqrt{ 80 } \text{ with accuracy of } 10^{-5} \\
\\
\text{Solution:} \\
f(x) = \sqrt{ x } \\
\text{Let } x = 80 \\
\text{Let } a = 81 \\
f^{(0)}(a) = a^{1/2} \\
f'(a) = \frac{1}{2}a^{-1/2} \\
f''(a) = -\frac{1}{4}a^{-3/2} \\
f^{(3)}(a) = \frac{3}{8}a^{-5/2} \\
\dots \\
f^{(n)}(a) = \frac{1}{2} \cdot \frac{-1}{2} \cdot \frac{-3}{2} \cdot \ldots \cdot \frac{1 - 2(n-1)}{2} a^{(1-2n)/2} = \frac{(-1)^{n-1}(2n-3)!!}{2^{n}}a^{(1-2n)/2} \\
\implies \boxed{ \sqrt{ 80 } = \sum_{n=0}^{\infty} \frac{(-1)^{n-1} \cdot (2n-3)!!}{9^{2n-1} \cdot 2^{n}n!}(80-81)^{n} } = \\
= -\sum_{n=0}^{\infty} \frac{(2n-3)!!}{9^{2n-1}2^{n}n!} \\
\\
\text{Note: } \text{For negative arguments of double factorial I'm using} \\
(n+2)!! = (n+2) \times n!! \implies n!! = \frac{(n+2)!!}{(n+2)} \\
\left\{\begin{array}{}
n = 0 \implies & (2n-3)!! = (-3)!! = \frac{(-1)!!}{-1} = \frac{1!!}{(-1) \cdot 1} = -1 \\
n = 1 \implies & (2n-3)!! = (-1)!! = \frac{1!!}{1} = 1 \\
\end{array}\right. \\
\\
\text{By Lagrange's theorem: } \exists c \in (x, a) : \left\lvert R_{k}(80) \right\rvert = \left\lvert \frac{f^{(k+1)}(c)}{(k+1)!}(x-a)^{k+1} \right\rvert = \\
\implies \left\lvert R_{k}(80) \right\rvert = \left\lvert \frac{(2k-1)!!}{c^{(2k+1)/2}2^{k+1}} \right\rvert \\
c \in (80, 81) \\
\left\lvert R_{k}(80) \right\rvert \text{ is monotonically decreasing} \implies \left\lvert R_{k}(80) \right\rvert \leq \frac{(2k-1)!!}{80^{(2k+1)/2}2^{k+1}} \leq \\
\leq \frac{(2k-1)!!}{64^{(2k+1)/2}2^{k+1}} = \frac{(2k-1)!!}{8^{2k+1}2^{k+1}} = \frac{(2k-1)!!}{2^{7k+4}} \\
k = 1 \implies \left\lvert R_{k}(80) \right\rvert \leq \frac{1}{2^{11}} = \frac{1}{2048} > 10^{-5} \\
k = 2 \implies \left\lvert R_{k}(80) \right\rvert \leq \frac{3}{2^{18}} \leq \frac{2^{2}}{2^{18}} = \frac{1}{2^{16}} < 10^{-5} \\
\implies \boxed{ \sqrt{ 80 } = -\sum_{n=0}^{2} \frac{(2n-3)!!}{9^{2n-1}2^{n}n!} \pm 10^{-5} } \\
}
$$
# 6
$$
\displaylines{
\text{Calculate } \cos\left( \frac{1}{\sqrt{ 2 }} \right) \text{ with accuracy of } \frac{1}{100} \\
\\
\text{Solution:} \\
\cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}x^{2n} \\
\implies \cos\left( \frac{1}{\sqrt{ 2 }} \right) = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}\left( \frac{1}{2} \right)^{n} \\
\implies \left\lvert R_{k} \right\rvert \leq \left\lvert a_{k+1} \right\rvert = \frac{1}{2^{k+1}(2k+2)!} \\
k = 1 \implies \left\lvert R_{k} \right\rvert \leq \frac{1}{4 \cdot 4!} = \frac{1}{96} > \frac{1}{100} \\
k = 2 \implies \left\lvert R_{k} \right\rvert \leq \frac{1}{8 \cdot 6!} = \frac{1}{5760} < \frac{1}{100} \\
\implies \boxed{ \cos\left( \frac{1}{\sqrt{ 2 }} \right) = \sum_{n=0}^{2} \frac{(-1)^{n}}{(2n)!}\left( \frac{1}{2} \right)^{n} \pm \frac{1}{100} } \\
}
$$
# 7a
$$
\displaylines{
\text{Calculate } \frac{1}{e} \text{ with accuracy of } \frac{1}{100} \\
\\
\text{Solution:} \\
e^{x} = \sum_{n=0}^{\infty} \frac{1}{n!}x^{n} \\
\implies \frac{1}{e} = e^{-1} = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{n!} \\
\implies \left\lvert R_{k} \right\rvert \leq \left\lvert a_{k+1} \right\rvert = \frac{1}{(k+1)!} \\
\left\lvert R_{k} \right\rvert < \frac{1}{100} \iff (k+1)! > 100 \iff k + 1 \geq 5 \iff \boxed{ k \geq 4 } \\
\implies \boxed{ \frac{1}{e} = \sum_{n=0}^{4} \frac{(-1)^{n}}{n!} \pm \frac{1}{100} } \\
}
$$
# 7b
$$
\displaylines{
\text{Calculate } 1 + \frac{1}{2!} + \frac{1}{4!} + \frac{1}{6!} + \dots \\
\\
\text{Solution:} \\
\text{Let } S = 1 + \frac{1}{2!} + \frac{1}{4!} + \frac{1}{6!} + \dots = \sum_{n=0}^{\infty} \frac{1}{(2n)!} = \frac{1}{2} \sum_{n=0}^{\infty} \frac{1 + (-1)^{n}}{n!} = \\
= \frac{1}{2}\left( \sum_{n=0}^{\infty} \frac{1}{n!} + \sum_{n=0}^{\infty} \frac{(-1)^{n}}{n!} \right) = \boxed{ \frac{e + e^{-1}}{2} = \cosh(1) } \\
}
$$
