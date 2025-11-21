---
{"publish":true,"created":"09/06/25, 14:06","modified":"2025-11-21T21:10:24.929+02:00","tags":["Academia","Practice","Infi-2"],"cssclasses":""}
---

$$
\displaylines{
\text{Find } \sqrt{ 10 } \text{ with some accuracy} \\
\\
\text{Let } f(x) = \sqrt{ x } \\
\text{Let } a = 9 \\
\text{Let } k = 3 \\
f(a) = a^{1/2} = 3 \\
f'(a) = \frac{1}{2}a^{-1/2} = \frac{1}{6} \\
f''(a) = -\frac{1}{4}a^{-3/2} = -\frac{1}{108} \\
f'''(a) = \frac{3}{8}a^{-5/2} = \frac{1}{648} \\
f^{(4)}(a) = -\frac{15}{16}a^{-7/2} \\
\sqrt{ 10 } \approx \sum_{n=0}^{3} \frac{f^{(n)}(a)}{n!}(x-a)^{n} = f(a) + f'(a) + \frac{f''(a)}{2} + \frac{f'''(a)}{6} = \\
= 3 + \frac{1}{6} - \frac{1}{216} + \frac{1}{3888} \approx 3.162294 \\
\left\lvert R_{3}(x) \right\rvert = \frac{f^{(4)}(c)}{4!}(x-9)^{4} \\
\implies c \in (9, 10): \left\lvert R_{3}(10) \right\rvert = \left\lvert \frac{f^{(4)}(c)}{24} \right\rvert = \left\lvert -\frac{\frac{15}{16}c^{(-7/2)}}{24} \right\rvert \leq \frac{15}{128 \cdot 3^{7} } \approx 0.00001786 < 10^{-4} \\
\implies \sqrt{ 10 } \approx 3 + \frac{1}{6} - \frac{1}{216} + \frac{1}{3888} \pm \frac{15}{128 \cdot 3^{7} } \\
}
$$
---
$$
\displaylines{
\text{Find } \int_{0}^{1} e^{-t^{2}} \, dt \text{ with accuracy } 10^{-4} \\
\\
e^{x} = \sum_{n=0}^{\infty} \frac{x^{n}}{n!} \\
e^{-t^{2}} = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{n!}t^{2n} \\
\int_{0}^{1} e^{-t^{2}} \, dt = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{n!}\int_{0}^{1} t^{2n} \, dt = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{n!(2n+1)} \\
\left\lvert R_{k} \right\rvert \leq \left\lvert a_{k+1} \right\rvert = \frac{1}{(k+1)!(2k+3)} < 10^{-4} \\
\implies (k+1)!(2k+3) > 10000 \\
\implies k \geq 6 \\
\implies \int_{0}^{1} e^{-t^{2}} \, dt \approx \sum_{n=0}^{6} \frac{(-1)^{n}}{n!(2n+1)}
}
$$
---
$$
\displaylines{
\sin^{2}\left( \frac{1}{10} \right), 10^{-5} \\
\\
\sin^{2}(x) = \frac{1-\cos(2x)}{2} = \frac{1}{2} - \frac{1}{2}\sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}(2x)^{2n} = \\
= \frac{1}{2}\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{(2n)!}(2x)^{2n} = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}2^{2n-1}}{(2n)!}x^{2n} = \\
= \left\{\begin{array}{}
k = n - 1 \\
\end{array}\right\} = \sum_{k=0}^{\infty} \frac{(-1)^{k+2}2^{2k+1}}{(2k+2)!}x^{2k+2} \\
x = \frac{1}{10} \\
a = 0 \\
\implies \left\lvert R_{k}\left( \frac{1}{10} \right) \right\rvert \leq \left\lvert a_{k+1} \right\rvert = \left\lvert \frac{2^{2k+3}}{(2k+4)!} \cdot \frac{1}{10^{2k+4}} \right\rvert < 10^{-5} \\
}
$$
---
