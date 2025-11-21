---
{"publish":true,"created":"03/06/25, 15:06","modified":"2025-11-21T21:10:02.483+02:00","tags":["Academia","Assignment","Infi-2"],"cssclasses":""}
---

# 2a
$$
\displaylines{
\sum_{n=0}^{\infty} (n+1)!x^{n} \\
\\
\lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = \lim_{ n \to \infty } \frac{(n+2)!}{(n+1)!} = \lim_{ n \to \infty } n + 2 = \infty \\
\implies R = 0 \implies \boxed{ \text{Convergence interval is } \Set{ 0 } } \\
}
$$
# 2b
$$
\displaylines{
\sum_{n=0}^{\infty} n\sqrt{ n }x^{n} \\
\\
\lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = \lim_{ n \to \infty } \frac{(n+1)\sqrt{ n+1 }}{n\sqrt{ n }} =\lim_{ n \to \infty } \frac{n+1}{n} \cdot \sqrt{ \frac{n+1}{n} } = \\
= \lim_{ n \to \infty } \left( \frac{n+1}{n} \right)^{3/2} = 1^{3/2} = 1 \\
x = \pm 1 \implies \left\{\begin{array}{}
n\sqrt{ n } \not\to 0 \\
(-1)^{n}n\sqrt{ n } \not\to 0
\end{array}\right. \implies \sum_{n=0}^{\infty} n\sqrt{ n }x^{n} \text{ diverges} \\
\implies \boxed{ \text{Convergence interval is } (-1, 1) } \\
}
$$
# 2c
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{x^{n}}{n^{\ln n}} \\
\\
\lim_{ n \to \infty } \sqrt[n]{ n^{\ln n} } = \lim_{ n \to \infty } n^{(\ln n)/n} = \lim_{ n \to \infty } e^{\ln ^{2}(n)/n} = e^{0} = 1 \\
x = -1 \implies \sum_{n=1}^{\infty} \frac{x^{n}}{n^{\ln n}} = \sum_{n=1}^{\infty} \frac{(-1)^{n}}{n^{\ln n}} \text{ converges by Leibniz test} \\
x = 1 \implies \sum_{n=1}^{\infty} \frac{x^{n}}{n^{\ln n}} = \sum_{n=1}^{\infty} \frac{1}{n^{\ln n}} = \sum_{n=1}^{4} \frac{1}{n^{\ln n}} + \underbrace{ \sum_{n=4}^{\infty} \frac{1}{n^{\ln n}} }_{ n \geq 4 \implies \ln n \geq \ln(4) } \\
\implies \text{Converges by direct comparison test with } \frac{1}{n^{\ln(4)}} \\
\implies \boxed{ \text{Convergence interval is } [-1, 1] } \\
}
$$
# 2d
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{(\ln n)^{n}}{n^{\ln n}}x^{n} \\
\\
\lim_{ n \to \infty } \sqrt[n]{ \frac{(\ln n)^{n}}{n^{\ln n}} } = \lim_{ n \to \infty } \frac{\ln n}{\underbrace{ n^{(\ln n)/n} }_{ \to 1 }} = \infty \\
\implies \boxed{ \text{Convergence interval is } \Set{ 0 } } \\
}
$$
# 2e
$$
\displaylines{
\sum_{n=0}^{\infty} \frac{(n!)^{2}}{(2n)!}x^{n} \\
\\
\lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = \lim_{ n \to \infty } \frac{((n+1)!)^{2}(2n)!}{(2n+2)!(n!)^{2}} = \lim_{ n \to \infty } \frac{(n+1)^{2}}{(2n+1)(2n+2)} = \frac{1}{4} \\
x = 4 \implies \sum_{n=0}^{\infty} \frac{(n!)^{2}}{(2n)!}x^{n} = \sum_{n=0}^{\infty} \frac{(n!)^{2}4^{n}}{(2n)!} \\
\frac{b_{n+1}}{b_{n}} = \frac{4(n+1)^{2}}{(2n+1)(2n+2)} = \frac{4n^{2}+8n+4}{4n^{2}+6n+4} > 1 \\
\implies b_{n} \text{ is monotonically increasing} \implies b_{n} \not\to 0 \\
\implies \sum_{n=0}^{\infty} \frac{(n!)^{2}}{4^{n}(2n)!} \text{ diverges} \\
x = -4 \implies \sum_{n=0}^{\infty} \frac{(n!)^{2}}{(2n)!}x^{n} = \sum_{n=0}^{\infty} (-1)^{n}\frac{(n!)^{2}4^{n}}{(2n)!} \\
\left\lvert (-1)^{n}\frac{(n!)^{2}4^{n}}{(2n)!} \right\rvert = \frac{(n!)^{2}4^{n}}{(2n)!} \not\to 0 \implies \sum_{n=0}^{\infty} (-1)^{n}\frac{(n!)^{2}4^{n}}{(2n)!} \text{ diverges} \\
\implies \boxed{ \text{Convergence interval is } (-4, 4) } \\
}
$$
# 2f
$$
\displaylines{
\sum_{n=0}^{\infty} \frac{x^{n}}{n^{p}} \\
\\
\lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = \lim_{ n \to \infty } \left( \frac{n+1}{n} \right)^{p} = \lim_{ n \to \infty } 1^{p} = 1 \\
x = 1 \implies \sum_{n=0}^{\infty} \frac{x^{n}}{n^{p}} = \sum_{n=0}^{\infty} \frac{1}{n^{p}} \text{ which converges iff } p > 1 \\
x = -1 \implies \sum_{n=0}^{\infty} \frac{x^{n}}{n^{p}} = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{n^{p}} \text{ which converges iff } p > 0 \\
\implies \boxed{ \text{Converges interval is } \left\{\begin{array}{}
(-1, 1) & p \leq 0 \\
[-1, 1) & 0 < p \leq 1 \\
[-1, 1] & p > 1 \\
\end{array}\right. } \\
}
$$
# 2g
$$
\displaylines{
\sum_{n=1}^{\infty} ne^{-nx} \\
\\
\text{Let } t = e^{-x} \\
\implies \sum_{n=1}^{\infty} ne^{-nx} = \sum_{n=1}^{\infty} nt^{n} \\
\text{Which converges iff } t \in (-1, 1) \\
\implies \boxed{ \text{Convergence interval is } x \in (0, \infty) } \\
}
$$
# 2h
$$
\displaylines{
\sum_{n=0}^{\infty} \frac{(-1)^{n-1}x^{2n}}{(2n)!} \\
\\
\text{Let } t = x^{2} \implies t \geq 0 \\
\implies \sum_{n=0}^{\infty} \frac{(-1)^{n-1}x^{2n}}{(2n)!} = \sum_{n=0}^{\infty} \frac{(-1)^{n-1}t^{n}}{(2n)!} \\
\left\lvert \frac{(-1)^{n-1}t^{n}}{(2n)!} \right\rvert = \frac{t^{n}}{(2n)!} \\
\lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert = \lim_{ n \to \infty } \frac{(2n)!}{(2n+2)!} = \lim_{ n \to \infty } \frac{1}{(2n+1)(2n+2)} = 0 \\
\sum_{n=0}^{\infty} \frac{t^{n}}{(2n)!} \text{ converges on } \mathbb{R} \\
\implies \sum_{n=0}^{\infty} \frac{(-1)^{n-1}t^{n}}{(2n)!} \text{ converges on } \mathbb{R} \\
\implies \sum_{n=0}^{\infty} \frac{(-1)^{n-1}x^{2n}}{(2n)!} \text{ converges on } \mathbb{R} \\
\implies \boxed{ \text{Convergence interval is } \mathbb{R} } \\
}
$$
# 3a
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{n(n+2)}{2^{n}} \\
\\
\text{Let } x = \frac{1}{2} \\
\sum_{n=1}^{\infty} x^{n} \text{ converges uniformly on } (-1, 1) \\
\sum_{n=1}^{\infty} x^{n} = \frac{x}{1-x} \implies \sum_{n=1}^{\infty} nx^{n-1} = \left( \frac{1}{1-x} \right)' = \frac{1}{(1-x)^{2}} \\
\implies \sum_{n=1}^{\infty} nx^{n+2} = \frac{x^{3}}{(1-x)^{2}} \\
\implies \sum_{n=1}^{\infty} n(n+2)x^{n+1} = \left( \frac{x^{3}}{(1-x)^{2}} \right)' = -\frac{(x-3)x^{2}}{(1-x)^{3}} \\
\implies \sum_{n=1}^{\infty} n(n+2)x^{n} = -\frac{(x-3)x}{(1-x)^{3}} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{n(n+2)}{2^{n}} = -\frac{\left( \frac{1}{2}-3 \right)}{2 \cdot \frac{1}{2}^{3}} = \frac{20}{2} = 10 } \\
}
$$
# 3b
$$
\displaylines{
\sum_{n=0}^{\infty} \frac{n}{3^{n}(n+1)} \\
\\
\text{Let } x = \frac{1}{3} \\
\sum_{n=0}^{\infty} x^{n} \text{ converges uniformly on } (-1, 1) \\
\sum_{n=0}^{\infty} x^{n} = \frac{1}{1-x} \\
\implies \sum_{n=0}^{\infty} nx^{n} = \frac{x}{(1-x)^{2}} \\
\int \frac{x}{(1-x)^{2}} \, dx = \int \frac{x-1}{(x-1)^{2}} + \frac{1}{(x-1)^{2}} \, dx = \ln \left\lvert x-1 \right\rvert - \frac{1}{x-1} + C \\
\implies \sum_{n=0}^{\infty} \int_{0}^{x} nt^{n} \, dt = \sum_{n=0}^{\infty} \frac{n}{n+1}x^{n+1} = \int_{0}^{x} \frac{t}{(1-t)^{2}} \, dt = \ln \left\lvert x-1 \right\rvert - \frac{1}{x-1} - 1 \\
\implies \sum_{n=0}^{\infty} \frac{n}{n+1}x^{n} = \frac{1}{x}\left( \ln \left\lvert x-1 \right\rvert - \frac{1}{x-1} - 1 \right) \\
\implies \boxed{ \sum_{n=0}^{\infty} \frac{n}{3^{n}(n+1)} = 3\left( \ln\left( \frac{2}{3} \right) + \frac{3}{2} - 1 \right) = 3\ln\left( \frac{2}{3} \right) + \frac{3}{2} } \\
}
$$
# 4
$$
\displaylines{
[0, \infty) \text{ cannot be convergence interval of power series, as it is not symmetric} \\
\\
(-5, \infty) \text{ cannot be convergence interval of power series, as it is not symmetric} \\
\\
(-3, 5) \text{ can be a convergence interval of power series with center } 1 \text{ and radius } 4 \\
\text{For example } \sum_{n=0}^{\infty} \frac{(n!)^{2}}{(2n)!}(x-1)^{n} \\
\\
[-3, 3) \text{ can be a convergence interval of power series with center } 0 \text{ and radius } 3 \\
\text{For example } \sum_{n=1}^{\infty} \frac{1}{3^{n}n}x^{n} \\
\\
[-3, 3] \text{ can be a convergence interval of power series with center } 0 \text{ and radius } 3 \\
\text{For example } \sum_{n=1}^{\infty} \frac{1}{3^{n}n^{2}}x^{n} \\
\\
\mathbb{R} \text{ can be a convergence interval of power series with any center and radius } \infty \\
\text{For example } \sum_{n=0}^{\infty} \frac{(x-a)^{n}}{n!} \\
\\
\Set{ 2 } \text{ can be a convergence interval of power series with center } 2 \text{ and radius } 0 \\
\text{For example } \sum_{n=0}^{\infty} n!(x-2)^{n} \\
}
$$
# 5
$$
\displaylines{
\text{Let } f(x) = \sum_{n=0}^{\infty} a_{n}x^{n} \text{ with convergence radius } R > 0 \\
\text{Let } \forall x \in (-R, R) : f(x) \geq 0 \\
\text{Let } f(0) = 0 \\
\text{Prove: } a_{1} = 0 \\
\\
\text{Proof:} \\
f(x) = a_{0} + a_{1}x + a_{2}x^{2} + \dots \\
f(0) = a_{0} \implies a_{0} = 0 \\
\implies f(x) = a_{1}x + a_{2}x^{2} + \dots \\
\text{Let } a_{1} \neq 0 \\
\implies f(x) = a_{1}x\left( 1 + \frac{a_{2}}{a_{1}}x + \frac{a_{3}}{a_{1}}x^{2} + \dots \right) \\
\text{Let } g(x) = 1 + \frac{a_{2}}{a_{1}}x + \frac{a_{3}}{a_{1}}x^{2} + \dots \\
\implies f(x) = a_{1}x \cdot g(x) \\
g(x) \text{ is a power series with the same convergence radius as } f(x) \\
\implies g(x) \text{ is continuous at } 0 \implies \lim_{ x \to 0 } g(x) = g(0) = 1 \\
\implies \forall \varepsilon > 0: \exists \delta > 0 : x \in (-\delta, \delta) \implies \left\lvert g(x) - 1 \right\rvert < \varepsilon \\
\text{Let } \varepsilon = \frac{1}{2} \\
\text{Let } x \in (-\delta, \delta), \delta < R \\
\implies g(x) > 1 - \varepsilon = \frac{1}{2} \\
\text{Let } a_{1} > 0 \\
x < 0 \implies f(x) = \underbrace{ a_{1} }_{ > 0 }\underbrace{ x }_{ < 0 }\underbrace{ g(x) }_{ > \frac{1}{2} > 0 } < 0 \text{ Contradiction!} \\
\text{Let } a_{1} < 0 \\
x > 0 \implies f(x) = \underbrace{ a_{1} }_{ < 0 }\underbrace{ x }_{ > 0 }\underbrace{ g(x) }_{ > \frac{1}{2} > 0 } < 0 \text{ Contradiction!} \\
\implies \boxed{ a_{1} = 0 } \\
}
$$
