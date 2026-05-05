---
{"publish":true,"created":"30/07/25, 13:07","modified":"2026-03-24T15:00:40.132+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

$$
\displaylines{
\text{Prove or disprove: } \int_{0}^{\infty} f(x) \, dx \text{ converges} \implies \left[\begin{array}{}
\lim_{ x \to \infty } f(x) = 0 \\
f \text{ is bounded} \\
f \text{ is continuous} \implies f \text{ is bounded} \\
\end{array}\right. \\
\\
\text{Disproof:} \\
\text{Rectangles with area } \frac{1}{n^{2}} \text{ of height } 1 \\
\text{Rectangles with area } \frac{1}{n^{2}} \text{ of height } n \\
\text{Triangles with area } \frac{1}{n^{2}} \text{ of height } n \\
}
$$
---
$$
\displaylines{
\lim_{ n \to \infty } \sum_{k=0}^{n} \frac{k}{n^{2}+nk} \\
\\
\text{Solution:} \\
x_{k} = \frac{k}{n} \\
\Delta x_{k} = \frac{1}{n} \\
\lim_{ n \to \infty } \sum_{k=0}^{n} f\left( \frac{k}{n} \right) \cdot \frac{1}{n} \\
\implies f\left( \frac{k}{n} \right) = \frac{k}{n+\underbrace{ k }_{ = \frac{nk}{n} }} = \frac{k}{n\left( 1 + \frac{k}{n} \right)} \implies f(x) = \frac{x}{1+x} \\
f \text{ is continuous and bounded on } [0, 1] \implies f \text{ is integrable on } [0, 1] \\
\implies \lim_{ n \to \infty } \sum_{k=0}^{n} \frac{k}{n^{2}+nk} = \int_{0}^{1} f(x) \, dx = \int_{0}^{1} \frac{x}{1+x} \, dx = \\
= \int_{0}^{1} 1 - \frac{1}{1+x} \, dx = 1 - \int_{0}^{1} \frac{1}{1+x} \, dx = \boxed{ 1 - \ln 2 } \\
}
$$
---
$$
\displaylines{
\text{Calculate } \sqrt[3]{ 9 } \pm 10^{-2} \\
\\
\text{Solution:} \\
\text{Let } f(x) = \sqrt[3]{ x } \\
\\
\text{Let } c = 8 \\
f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(8)}{k!}(x-8)^{k} \\
f(8) = 2 \\
f'(8) = \frac{1}{3}8^{-2/3} = \frac{1}{12} \\
f''(8) = -\frac{2}{9}8^{-5/3} = -\frac{1}{144} \\
\\
\left\lvert R_{k}(9) \right\rvert \leq \left\lvert a_{k+1} \right\rvert \\
\text{Lagrange's remainder: } \exists c \in (8, 9): \left\lvert R_{0}(9) \right\rvert = \frac{f'(c)}{2!} (x-8) = \frac{1}{3}c^{-2/3} \leq \frac{1}{12} \\
\text{Lagrange's remainder: } \exists c \in (8, 9): \left\lvert R_{1}(9) \right\rvert = \frac{f''(c)}{2!} (x-8)^{2} = \frac{1}{9}c^{-5/3} \\
c \in (8, 9) \implies \left\lvert R_{1}(9) \right\rvert \leq \frac{1}{288} < \frac{1}{100} \\
\implies \sqrt[3]{ 9 } \approx 2 + \frac{1}{12} \pm \frac{1}{100} \\
}
$$
---
$$
\displaylines{
(x^{2}\arctan(x^{6}))' = 2x\arctan(x^{6}) + \frac{6x^{7}}{1+x^{12}} \\
\\
\\
\frac{1}{1-x} = \sum_{n=0}^{\infty} x^{n} \\
\text{Let } t = x^{6} \\
\frac{1}{1+t^{2}} = \frac{1}{1-(-t^{2})} = \sum_{n=0}^{\infty} (-t^{2})^{n} = \sum_{n=0}^{\infty} (-1)^{n}t^{2n} \\
\arctan(t) = \int_{0}^{t} \frac{1}{1+u^{2}} \, du = \sum_{n=0}^{\infty} (-1)^{n}\int_{0}^{t} u^{2n} \, du = \sum_{n=0}^{\infty} \frac{(-1)^{n}t^{2n+1}}{2n+1} = \sum_{n=0}^{\infty} \frac{(-1)^{n}x^{12n+6}}{2n+1} \\
\implies x^{2}\arctan(x^{6}) = \sum_{n=0}^{\infty} \frac{(-1)^{n}x^{12n+8}}{2n+1} \\
}
$$
---
$$
\displaylines{
\int \frac{2x-\arctan(x)}{x(1+x^{2})\arctan(x)} \, dx \\
\\
\text{Solution:} \\
\int \frac{2x-\arctan(x)}{x(1+x^{2})\arctan(x)} \, dx = \left\{\begin{array}{}
t = \arctan(x) \\
dt = \frac{1}{1+x^{2}} dx \\
\end{array}\right\} = \int \frac{2\tan(t)-t}{\tan(t)t} \, dt = \\
= \int \frac{2}{t} \, dt - \int \frac{1}{\tan t} \, dt \\
\int \frac{1}{\tan t} \, dt = \left\{\begin{array}{}
u = \sin t \\
du = \cos tdt \\
\end{array}\right\} = \int \frac{1}{u} du = \ln \left\lvert u \right\rvert = \ln \left\lvert \sin t \right\rvert + C \\
\implies \int \frac{2x-\arctan(x)}{x(1+x^{2})\arctan(x)} \, dx = 2\ln \left\lvert t \right\rvert - \ln \left\lvert \sin t \right\rvert = \\
= 2\ln \left\lvert \arctan x \right\rvert - \ln \left\lvert \sin(\arctan x) \right\rvert + C \\
\\
\implies \int_{0}^{\infty} \frac{2x-\arctan(x)}{x(1+x^{2})\arctan(x)} \, dx = \\
= \lim_{ a \to 0^{+} } \int_{a}^{\tan 1} \frac{2x-\arctan(x)}{x(1+x^{2})\arctan(x)} \, dx + \lim_{ b \to \infty } \int_{\tan 1}^{b} \frac{2x-\arctan(x)}{x(1+x^{2})\arctan(x)} \, dx \\
\lim_{ a \to 0^{+} } \int_{a}^{\tan 1} \frac{2x-\arctan(x)}{x(1+x^{2})\arctan(x)} \, dx = \lim_{ a \to 0^{+} } (2\ln \left\lvert \arctan x \right\rvert - \ln \left\lvert \sin(\arctan x) \right\rvert)^{x=\tan 1}_{x=a} = \\
= \lim_{ a \to 0^{+} } -\ln \left\lvert \sin(1) \right\rvert - 2\ln \left\lvert \arctan a \right\rvert + \ln \left\lvert \sin(\arctan a) \right\rvert = \\
= -\ln \left\lvert \sin 1 \right\rvert - \lim_{ a \to 0^{+} } 2\ln \left\lvert \arctan a \right\rvert - \ln \left\lvert \frac{\sin(\arctan a)}{\arctan a}\arctan a \right\rvert = \\
= -\ln (\sin 1) - \lim_{ a \to 0^{+} } \ln \left\lvert \underbrace{ \arctan a }_{ \to 0 } \right\rvert = -\ln(\sin 1) + \infty = \infty \\
\lim_{ b \to \infty } \int_{\tan 1}^{b} \frac{2x-\arctan(x)}{x(1+x^{2})\arctan(x)} \, dx = \lim_{ b \to \infty } (2\ln \left\lvert \arctan x \right\rvert - \ln \left\lvert \sin(\arctan x) \right\rvert)^{x=b}_{x=\tan 1} = \\
= \lim_{ b \to \infty } 2\ln \left\lvert \arctan b \right\rvert - \ln \left\lvert \sin(\arctan b) \right\rvert + \ln \left\lvert \sin 1 \right\rvert = 2\ln \frac{\pi}{2} + \ln \sin(1) \\
\implies \text{Original integral diverges as } \infty + C \\
}
$$
---
$$
\displaylines{
\text{Find critical point of } f(x, y) = \ln(-x-2y) - 2x^{2} + 13x + 2y - 3 \\
\\
\text{Solution:} \\
f_{x} = \frac{1}{x+2y} - 4x + 13 = 0 \implies 0 = 4x - 12 \implies x = 3 \\
f_{y} = \frac{2}{x+2y} + 2 = 0 \implies x + 2y = -1 \implies y = -2 \\
\implies \text{The only critical point is } (3, -2) \\
\\
f_{xx} = -\frac{1}{(x+2y)^{2}} - 4 \implies f_{xx}(3, -2) = -5 \\
f_{xy} = f_{yx} = \frac{-2}{(x+2y)^{2}} \implies f_{xy}(3, -2) = f_{yx}(3, -2) = -2 \\
f_{yy} = -\frac{4}{(x+2y)^{2}} \implies f_{yy}(3, -2) = -4 \\
\implies M_{1} = -5, M_{2} = 20 - 4 = 16 \\
M_{1} < 0, M_{2} > 0 \implies \text{Local maximum} \\
}
$$
---
$$
\displaylines{
\int \frac{1}{1+\sin^{2}x} \, dx \\
\\
1 + \sin^{2}x = 2\sin^{2}x + \cos^{2}x \\
\implies \frac{1 + \sin^{2}x}{\cos^{2}x} = 2\tan^{2}x + 1 \implies 1 + \sin^{2}x = (2\tan^{2}x + 1)\cos^{2}x \\
\implies \int \frac{1}{1+\sin^{2}x} \, dx = \int \frac{1}{\cos^{2}x} \frac{1}{2\tan^{2}x + 1} \, dx = \left\{\begin{array}{}
t = \tan x \\
dt = \frac{1}{\cos^{2}x}dx \\
\end{array}\right\} = \\
= \int \frac{1}{2t^{2}+1} \, dt = \left\{\begin{array}{}
u = \sqrt{ 2 }t \\
du = \sqrt{ 2 }dt \\
\end{array}\right\} = \frac{1}{\sqrt{ 2 }} \int \frac{1}{u^{2}+1} \, du = \frac{1}{\sqrt{ 2 }}\arctan(u) + C = \\
= \frac{1}{\sqrt{ 2 }}\arctan(\sqrt{ 2 }t) + C = \frac{1}{\sqrt{ 2 }}\arctan(\sqrt{ 2 }\tan x) + C \\
}
$$
---
$$
\displaylines{
\int \frac{1}{1+\sin^{2}x} \, dx \\
\\
t = \tan \frac{x}{2} \implies dt = \frac{2}{1+t^{2}} dx \\
\sin x = \frac{2t}{1+t^{2}} \\
\int \frac{1}{1+\sin^{2}x} \, dx = 2 \int \frac{1}{1 + \frac{4t^{2}}{(1+t^{2})^{2}}} \frac{1}{1+t^{2}} \, dt = \\
= 2 \int \frac{(1+t^{2})^{2}}{(1+t^{2})(4t^{2} + (1+t^{2})^{2})} \, dt = \\
= 2 \int \frac{1+t^{2}}{1+6t^{2}+t^{4}} \, dt = 2 \int \frac{1+t^{2}}{(t^{2}+3)^{2}-8} \, dt \\
= \left\{\begin{array}{}
u = t^{2} + 3 \\
du = 2tdt \\
\end{array}\right\} = \int \frac{u - 2}{(u^{2} - 8)\sqrt{ u }} \, du = \dots \\
}
$$
---
