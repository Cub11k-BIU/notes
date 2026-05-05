---
{"publish":true,"created":"30/07/25, 16:07","modified":"2026-03-24T15:00:40.060+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\int \frac{dx}{x\ln(x)\ln(\ln(x))} \\
\\
\text{Solution:} \\
\int \frac{dx}{x\ln(x)\ln(\ln(x))} = \left\{\begin{array}{}
t = \ln(x) \\
dt = \frac{dx}{x} \\
\end{array}\right\} = \int \frac{dt}{t\ln(t)} = \left\{\begin{array}{}
u = \ln(t) \\
du = \frac{dt}{t} \\
\end{array}\right\} = \int \frac{du}{u} = \ln \left\lvert u \right\rvert = \ln \left\lvert \ln t \right\rvert = \\
= \ln \left\lvert \ln \ln x \right\rvert + C \\
}
$$
# 1b
$$
\displaylines{
\int \frac{dx}{x(\ln x - \ln^{2}(x))} \\
\\
\text{Solution:} \\
\int \frac{dx}{x(\ln x - \ln^{2}(x))} = \left\{\begin{array}{}
t = \ln(x) \\
dt = \frac{dx}{x} \\
\end{array}\right\} = \int \frac{dt}{t-t^{2}} = \int \frac{1}{t} + \frac{1}{1-t} \, dt = \\
= \ln \left\lvert t \right\rvert - \ln \left\lvert 1 - t \right\rvert = \ln \left\lvert \ln x \right\rvert - \ln \left\lvert 1 - \ln x \right\rvert + C \\
}
$$
# 2a
$$
\displaylines{
\text{Prove or disprove: } \forall x \in [0, \infty) : f(x) \geq 0 \text{ and } \int_{0}^{\infty} f(x) \, dx \text{ converges} \\
\implies f \text{ is bounded on } [1, \infty) \\
\\
\text{Disproof:} \\
\text{Let } f \text{ be a function of triangles of height } n \text{ and base } \frac{1}{n^{3}} \\
\implies \int_{0}^{\infty} f(x) \, dx = \sum_{n=1}^{\infty} \frac{1}{n^{2}} \text{ converges} \\
\forall x \in [0, \infty): f(x) \geq 0 \\
\text{But } f \text{ is not bounded} \\
}
$$
# 2b
$$
\displaylines{
\text{Prove or disprove: } \int_{1}^{\infty} f(x) \, dx \text{ converges and } f \text{ is bounded on } [1, \infty) \\
\implies \lim_{ x \to \infty } f(x) = 0 \\
\\
\text{Proof:} \\
\text{Let } \lim_{ x \to \infty } f(x) = L > 0 \\
\implies \forall \varepsilon > 0: \exists x_{0}: \forall x > x_{0}: \left\lvert f(x) - L \right\rvert < \varepsilon \\
\text{Let } \varepsilon = \frac{L}{2} \\
\implies \forall x > x_{0}: \frac{L}{2} \leq f(x) \leq \frac{3L}{2} \\
\implies \int_{1}^{\infty} f(x) \, dx = \int_{1}^{x_{0}+1} f(x) \, dx + \int_{x_{0}+1}^{\infty} f(x) \, dx \geq \int_{1}^{x_{0}+1} f(x) \, dx + \underbrace{ \int_{x_{0}+1}^{\infty} \frac{L}{2} \, dx }_{ = \infty } \\
f \text{ is bounded on } [1, \infty) \implies \exists M: \forall x \geq 1: \left\lvert f(x) \right\rvert \leq M \\
\implies \left\lvert \int_{1}^{x_{0}+1} f(x) \, dx \right\rvert \leq \int_{1}^{x_{0}+1} \left\lvert f(x) \right\rvert \, dx \leq Mx_{0} \in \mathbb{R} \\
\implies \int_{1}^{x_{0}+1} f(x) \, dx \text{ converges} \\
\implies \int_{1}^{\infty} f(x) \, dx \text{ diverges} - \text{Contradiction!} \\
\\
\text{Let } \lim_{ x \to \infty } f(x) = L < 0 \\
\implies \forall \varepsilon > 0: \exists x_{0}: \forall x > x_{0}: \left\lvert f(x) - L \right\rvert < \varepsilon \\
\text{Let } \varepsilon = -\frac{L}{2} \\
\implies \forall x > x_{0}: \frac{3L}{2} \leq f(x) \leq \frac{L}{2} \\
\implies \int_{1}^{\infty} f(x) \, dx = \int_{1}^{x_{0}+1} f(x) \, dx + \int_{x_{0}+1}^{\infty} f(x) \, dx \leq \int_{1}^{x_{0}+1} f(x) \, dx + \underbrace{ \int_{x_{0}+1}^{\infty} \frac{L}{2} \, dx }_{ = -\infty } \\
f \text{ is bounded on } [1, \infty) \implies \exists M: \forall x \geq 1: \left\lvert f(x) \right\rvert \leq M \\
\implies \left\lvert \int_{1}^{x_{0}+1} f(x) \, dx \right\rvert \leq \int_{1}^{x_{0}+1} \left\lvert f(x) \right\rvert \, dx \leq Mx_{0} \in \mathbb{R} \\
\implies \int_{1}^{x_{0}+1} f(x) \, dx \text{ converges} \\
\implies \int_{1}^{\infty} f(x) \, dx \text{ diverges} - \text{Contradiction!} \\
\implies \boxed{ \lim_{ x \to \infty } f(x) = 0 } \\
}
$$
# 3a
$$
\displaylines{
\lim_{ n \to \infty } \sum_{k=0}^{n} \frac{n}{n^{2}+k^{2}} \\
\\
\text{Solution:} \\
\text{Let } x_{k} = \frac{k}{n} \\
\implies \Delta x_{k} = \frac{1}{n} \\
\sum_{k=0}^{n} \frac{n}{n^{2}+k^{2}} = \sum_{k=0}^{n} \frac{1}{n} \frac{1}{1 + \frac{k^{2}}{n^{2}}} \\
\text{Let } f(x) = \frac{1}{1+x^{2}} \\
\implies \sum_{k=0}^{n} \frac{n}{n^{2}+k^{2}} = \sum_{k=0}^{n} f(x_{k}) \cdot \Delta x_{k} \\
f(x) = \frac{1}{1+x^{2}} \text{ is continuous and bounded on } [0, 1] \\
\implies f \text{ is integrable on } [0, 1] \\
\implies \int_{0}^{1} f(x) \, dx = \lim_{ n \to \infty } \sum_{k=0}^{n} \frac{n}{n^{2}+k^{2}} = \int_{0}^{1} \frac{1}{1+x^{2}} \, dx = \arctan(1) - \arctan(0) = \frac{\pi}{4} \\
}
$$
# 3b
$$
\displaylines{
\text{Find the length of graph of } f(x) = \ln(\sin x) \text{ on } \left[ \frac{\pi}{3}, \frac{\pi}{2} \right] \\
\text{You can use: } L(f) = \int_{a}^{b} \sqrt{ 1 + (f'(x))^{2} } \, dx \\
\\
\text{Solution:} \\
f'(x) = (\ln(\sin x))' = \frac{\cos x}{\sin x} \\
\implies L(f) = \int_{\frac{\pi}{3}}^{\frac{\pi}{2}} \sqrt{ 1 + \frac{\cos^{2}x}{\sin^{2}x} } \, dx \\
\sqrt{ 1 + \frac{\cos^{2}x}{\sin^{2}x} } = \sqrt{ \frac{\sin^{2}x+\cos^{2}x}{\sin^{2}x} } = \sqrt{ \frac{1}{\sin^{2}x} } = \frac{1}{\sin x} \\
\tan^{2}x = \frac{\sin^{2}x}{\cos^{2}x} = \frac{1}{\cos^{2}x} - 1 \implies \cos^{2}x = \frac{1}{1+\tan^{2}x} \\
\sin x = 2\sin\left( \frac{x}{2} \right)\cos\left( \frac{x}{2} \right) = 2\tan\left( \frac{x}{2} \right) \cdot \cos^{2}\left( \frac{x}{2} \right) = \frac{2t}{1+t^{2}} \\
\left( \tan\left( \frac{x}{2} \right) \right)' = \frac{1}{2} \frac{1}{\cos^{2}\left( \frac{x}{2} \right)} = \frac{1}{2}\left( 1 + \tan^{2}\left( \frac{x}{2} \right) \right) \\
\implies L(f) = \int_{\frac{\pi}{3}}^{\frac{\pi}{2}} \frac{1}{\sin x} \, dx = \left\{\begin{array}{}
t = \tan \frac{x}{2} \\
dt = \frac{1+t^{2}}{2}dx \\
\sin x = \frac{2t}{1+t^{2}} \\
\end{array}\right\} = \int_{\frac{\pi}{3}}^{\frac{\pi}{2}} \frac{1}{t} \, dt = \\
= \ln \left\lvert \tan \frac{x}{2} \right\rvert \Bigg|^{x=\frac{\pi}{2}}_{x=\frac{\pi}{3}} = \ln \left\lvert \tan\left( \frac{\pi}{4} \right) \right\rvert - \ln \left\lvert \tan\left( \frac{\pi}{6} \right) \right\rvert = -\ln \left\lvert \frac{1}{\sqrt{ 3 }} \right\rvert = \frac{\ln 3}{2} \\
}
$$
# 4
$$
\displaylines{
\sum_{n=0}^{\infty} \frac{1}{16^{n}(4n+1)} \\
\\
\text{Solution:} \\
x \in (-1, 1) \implies \frac{1}{1-x} = \sum_{n=0}^{\infty} x^{n} \\
\implies \frac{1}{1-x^{4}} = \sum_{n=0}^{\infty} x^{4n} \implies \sum_{n=0}^{\infty} \int_{0}^{x} t^{4n} \, dt = \sum_{n=0}^{\infty} \frac{x^{4n+1}}{4n+1} = \int_{0}^{x} \frac{1}{1-t^{4}} \, dt = \\
= \int_{0}^{x} \frac{1}{(1-t)(1+t)(1+t^{2})} \, dt \\
\frac{A}{1-x} + \frac{B}{1+x} + \frac{C}{1+x^{2}} \\
A(1+x)(1+x^{2}) + B(1-x)(1+x^{2}) + C(1-x)(1+x) = 1 \\
\implies \left\{\begin{array}{}
A + B + C = 1 \\
A - B = 0 \\
A + B - C = 0 \\
A - B = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = \frac{1}{4} \\
B = \frac{1}{4} \\
C = \frac{1}{2} \\
\end{array}\right. \\
\implies \sum_{n=0}^{\infty} \frac{x^{4n+1}}{4n+1} = \frac{1}{4}\int_{0}^{x} \frac{1}{1-t} + \frac{1}{1+t} + \frac{2}{(1+t^{2})} \, dt = \\
= \frac{1}{4}(-\ln \left\lvert 1-x \right\rvert + \ln \left\lvert 1+x \right\rvert + 2\arctan(x)) \\
\text{Let } x = \frac{1}{2} \\
\implies \sum_{n=0}^{\infty} \frac{1}{2 \cdot 16^{n}(4n+1)} = \frac{1}{4}\left( -\ln \frac{1}{2} + \ln \frac{3}{2} + 2\arctan\left( \frac{1}{2} \right) \right) \\
\implies \sum_{n=0}^{\infty} \frac{1}{16^{n}(4n+1)} = \frac{1}{2}\left( \ln 3 + 2\arctan \frac{1}{2} \right) \\
}
$$
# 5
$$
\displaylines{
\forall n \in \mathbb{N} \\
\text{Find global extremums of } f(x, y) = x^{n} + y^{n} \\
\text{Limited by } x^{2} + y^{2} \leq 1 \\
\\
\text{Solution:} \\
f_{x} = nx^{n-1} = 0 \iff n \neq 1, x = 0 \\
f_{y} = ny^{n-1} = 0 \iff n \neq 1, y = 0 \\
\implies \text{The only critical point inside the limits is } (0, 0) \\
\text{Now we will find critical points on the border:} \\
\text{Let } g(x, y) = x^{2} + y^{2} - 1 \\
\left\{\begin{array}{}
f_{x} = \lambda g_{x} \\
f_{y} = \lambda g_{y} \\
g(x, y) = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
nx^{n-1} = 2\lambda x \\
ny^{n-1} = 2\lambda y \\
x^{2} + y^{2} - 1 = 0 \\
\end{array}\right. \\
n = 1 \implies \left\{\begin{array}{}
2\lambda x = 1 \\
2\lambda y = 1 \\
x^{2} + y^{2} - 1 = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
x = \frac{1}{2\lambda} \\
y = \frac{1}{2\lambda} \\
\frac{1}{4\lambda^{2}} + \frac{1}{4\lambda^{2}} - 1 = 0 \\
\end{array}\right. \implies \frac{1}{2\lambda^{2}} = 1 \\
\implies \lambda = \pm \sqrt{ \frac{1}{2} } \\
\implies \left( \sqrt{ \frac{1}{2} }, \sqrt{ \frac{1}{2} } \right), \left( -\sqrt{ \frac{1}{2} }, -\sqrt{ \frac{1}{2} } \right) \text{ are critical points} \\
n = 1 \implies f(x, y) = x + y \\
\implies \left( \sqrt{ \frac{1}{2} }, \sqrt{ \frac{1}{2} } \right) \text{ is a global maximum and } \left( -\sqrt{ \frac{1}{2} }, -\sqrt{ \frac{1}{2} } \right) \text{ is a global minimum} \\
\\
\text{Let } n \neq 1 \\
\implies \left\{\begin{array}{}
nx^{n-1} = 2\lambda x \\
ny^{n-1} = 2\lambda y \\
x^{2} + y^{2} - 1 = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
x(nx^{n-2} - 2\lambda) = 0 \\
y(ny^{n-2} - 2\lambda) = 0 \\
x^{2} + y^{2} - 1 = 0 \\
\end{array}\right. \\
\implies \left\{\begin{array}{}
\left[\begin{array}{}
x = 0 \\
nx^{n-2} = 2\lambda \\
\end{array}\right. \\
\left[\begin{array}{}
y = 0 \\
ny^{n-2} = 2\lambda \\
\end{array}\right. \\
x^{2} + y^{2} - 1 = 0 \\
\end{array}\right. \implies 4 \text{ possibilities} \\
x = 0, y = 0 \text{ doesn't work} \\
x = 0, ny^{n-2} - 2\lambda = 0 \implies y^{2} - 1 = 0 \implies y = \pm 1 \implies (0, \pm 1) \\
y = 0, nx^{n-2} - 2\lambda = 0 \implies x^{2} - 1 = 0 \implies x = \pm 1 \implies (\pm 1, 0) \\
nx^{n-2} - 2\lambda = 0, ny^{n-2} - 2\lambda = 0 \implies x^{n-2}, y^{n-2} = \frac{2\lambda}{n} \\
n = 2 \implies \frac{2\lambda}{n} = 1 \implies \lambda = 1 \implies \text{All } x, y \text{ work} \\
n \neq 2 \implies x, y = \left( \frac{2\lambda}{n} \right)^{1/(n-2)} \text{ for odd } n \text{ and } \pm \left( \frac{2\lambda}{n} \right)^{1/(n-2)} \text{ for even } n \\
\implies 2\left( \frac{2\lambda}{n} \right)^{2/n-2} = 1 \implies x^{2}, y^{2} = \frac{1}{2} \\
\implies \text{Points } \left( \sqrt{ \frac{1}{2} }, -\sqrt{ \frac{1}{2} } \right), \left(  -\sqrt{ \frac{1}{2} }, \sqrt{ \frac{1}{2} } \right) \text{ are also critical for even } n \\
\\
\text{In total:} \\
n \text{ is odd: } \left\{\begin{array}{}
n = 1 \implies \underbrace{ \left( \sqrt{ \frac{1}{2} }, \sqrt{ \frac{1}{2} } \right) }_{ \text{global maximum} }, \underbrace{ \left( -\sqrt{ \frac{1}{2} }, -\sqrt{ \frac{1}{2} } \right) }_{ \text{global minimum} } \\
\\
n \neq 1 \implies \left( \sqrt{ \frac{1}{2} }, \sqrt{ \frac{1}{2} } \right), \left( -\sqrt{ \frac{1}{2} }, -\sqrt{ \frac{1}{2} } \right), (0, \pm 1), (\pm 1, 0), (0, 0) \\
f(x, y) = x^{n} + y^{n} \implies \begin{array}{}
(0, 1), (1, 0) \text{ are global maximums} \\
(0, -1), (-1, 0) \text{ are global minimums} \\
\end{array} \\
\end{array}\right. \\
n \text{ is even: } \left\{\begin{array}{}
n = 2 \implies \text{All points on the circle are critical and have the same value 1} \\
f(x, y) = x^{2} + y^{2} \implies \begin{array}{}
\text{All points on } x^{2}+y^{2} = 1 \text{ are global maximums} \\
(0, 0) \text{ is a global minimum} \\
\end{array} \\
\\
n \neq 2 \implies \left( \pm \sqrt{ \frac{1}{2} }, \pm \sqrt{ \frac{1}{2} } \right), (0, \pm 1), (\pm 1, 0), (0, 0) \\
f(x, y) = x^{n} + y^{n} \implies \begin{array}{}
(0, \pm 1), (\pm 1, 0) \text{ are global maximums} \\
(0, 0) \text{ is a global minimum} \\
\end{array} \\
\end{array}\right. \\
}
$$
