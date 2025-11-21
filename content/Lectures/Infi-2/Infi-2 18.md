---
{"publish":true,"created":"07/06/25, 16:06","modified":"2025-11-21T21:10:14.419+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Taylor series #definition 
$$
\displaylines{
f(x) \text{ is infinitely differentiable} \implies f(x) = \sum_{n=0}^{\infty} a_{n}(x-a)^{n} \\
f(a) = a_{0} \\
f'(a) = a_{1} \\
f''(a) = 2a_{2} \implies a_{2} = \frac{f''(a)}{2} \\
f^{(3)}(a) = 6a^{3} \implies a_{3} = \frac{f^{(3)}(a)}{6} = \frac{f^{(3)}(a)}{3!} \\
\dots \\
\implies a_{n} = \frac{f^{(n)}(a)}{n!} \\
\implies f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^{n} \\
}
$$
## Maclaurin series #definition 
$$
\displaylines{
\text{Taylor series with } a = 0 \\
}
$$
## Examples
$$
\displaylines{
\frac{1}{1-x} = \sum_{n=0}^{\infty} x^{n} \\
e^{x} = \sum_{n=0}^{\infty} \frac{1}{n!}x^{n} \\
\cos x = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}x^{2n} \\
\sin x = \int_{0}^{x} \cos t \, dt = \int_{0}^{x} \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}t^{2n} \, dt = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!} \int_{0}^{x} t^{2n} \, dt = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}x^{2n+1} \\
}
$$
## Applications
$$
\displaylines{
\text{Let } g(x) = \frac{1}{1+x^{2}} \\
\text{Find } g^{(69420)}(0) \\
\\
\text{Solution:} \\
\frac{1}{1-t} = \sum_{n=0}^{\infty} t^{n} \\
\text{Let } t = -x^{2} \\
\implies g(x) = \frac{1}{1-t} = \sum_{n=0}^{\infty} t^{n} = \sum_{n=0}^{\infty} (-1)^{n}x^{2n} \implies a_{n} = \left\{\begin{array}{}
(-1)^{k} & n = 2k \\
0 & n = 2k-1 \\
\end{array}\right. \\
g^{(n)}(0) = n! \cdot a_{n} \implies g^{(69420)}(0) = 69420! \cdot (-1)^{69420/2} = 69420! \\
}
$$
## Approximations
$$
\displaylines{
\text{Let } \varepsilon > 0 \\
\text{Find value of } \frac{1}{e} \text{ with accuracy } \varepsilon  \\
\\
\text{Solution:} \\
f(x) \approx P_{k}(x) = \sum_{n=0}^{k} \frac{f^{(n)}(a)}{n!}(x-a)^{n} \\
\text{Let for example } \varepsilon = \frac{1}{1000} \\
\text{And } f(x) = e^{x} = \sum_{n=0}^{\infty} \frac{1}{n!}x^{n} \\
x = -1 \implies \frac{1}{e} = f(-1) = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{n!} \\
\text{For alternating series } \left\lvert R_{k}(x) \right\rvert \leq \left\lvert a_{k+1} \right\rvert \\
\left\lvert f(x) - \sum_{n=0}^{k} \frac{(-1)^{n}}{n!} \right\rvert = \left\lvert R_{k}(x) \right\rvert \\
\implies \text{We need to find minimal } k \text{ such that} \left\lvert \frac{(-1)^{k+1}}{(k+1)!} \right\rvert < \varepsilon \\
\implies \text{We need to find first } k \text{ such that } (k+1)! > 1000 \\
\implies k = 6 \implies \frac{1}{e} = f(-1) \approx \sum_{n=0}^{6} \frac{(-1)^{n}}{n!} = 1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24} - \frac{1}{120} + \frac{1}{720} \\
}
$$
