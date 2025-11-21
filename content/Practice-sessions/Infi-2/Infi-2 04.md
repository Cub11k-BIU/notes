---
{"publish":true,"created":"07/04/25, 14:04","modified":"2025-11-21T21:10:24.874+02:00","tags":["Academia","Practice","Infi-2"],"cssclasses":""}
---

$$
\displaylines{
\text{Let } f(x) = \cosh x \\
\text{Calculate revolution surface area on } [0, 1] \\
A(f) = 2\pi \int_{0}^{1} f(x)\sqrt{ 1 + (f'(x))^{2} } \, dx = 2\pi \int_{0}^{1} f^{2}(x) \, dx = 2\pi \int_{0}^{1} \frac{e^{2x}+2+e^{-2x}}{4} \, dx = \\
= \frac{\pi}{2} \left( \frac{e^{2x}}{2} + 2x - \frac{e^{-2x}}{2} \right)\bigg|^{1}_{0} = \frac{\pi}{2}\left( \frac{e^{2}}{2} + 2 - \frac{e^{-2}}{2} \right) \\ 
}
$$
---
$$
\displaylines{
\lim_{ n \to \infty } \sum_{k=1}^{n} \frac{n}{n^{2}+k^{2}} = \lim_{ n \to \infty } \frac{1}{n} \cdot \frac{n^{2}}{n^{2}+k^{2}} = \lim_{ \lambda(P) \to 0 } S(f, P, C) \\
f(c_{k}) = f\left( \frac{k}{n} \right) = \frac{n^{2}}{n^{2}+k^{2}} = \frac{1}{1+\frac{k^{2}}{n^{2}}} = \frac{1}{1+\left( \frac{k}{n} \right)^{2}} \\
\implies f(x) = \frac{1}{1+x^{2}} \\
\implies \lim_{ n \to \infty } \sum_{k=1}^{n} \frac{n}{n^{2}+k^{2}} = \int_{0}^{1} f(x) \, dx = \arctan(x)\bigg|^{1}_{0} = \frac{\pi}{4} \\
}
$$
---
$$
\displaylines{
\sum_{k=1}^{n} \frac{k}{n^{2}} \sin\left( \frac{k}{n} \right) = \sum_{i=1}^{n} \frac{1}{n} \cdot \frac{k}{n}\sin\left( \frac{n}{k} \right) = \int_{0}^{1} x\sin x \, dx = -x\cos x \bigg|^{1}_{0} + \int_{0}^{1} \cos x \, dx = \\
= -\cos 1 + \sin 1 \\
}
$$
---
$$
\displaylines{
\sum_{k=1}^{n} \frac{k}{n^{2}} \sqrt[n]{ e^{k} } = \int_{0}^{1} xe^{x} \, dx = (x-1)e^{x} \bigg|^{1}_{0} = 1 \\
}
$$
---
$$
\displaylines{
\left( \int_{\alpha(x)}^{\beta(x)} f(t) \, dt \right)' = f(\beta(x))\beta'(x) - f(\alpha(x))\alpha'(x) \\
}
$$
---
$$
\displaylines{
\int_{x}^{x^{3}} \sin(t) \cos(t^{2}) e^{t} \, dt = \sin(x^{3})\cos(x^{6})e^{x^{3}}3x^{2} - \sin(x)\cos(x^{2})e^{x} \\
}
$$
---
$$
\displaylines{
\lim_{ x \to 0 } \frac{\left( \int_{0}^{x^{2}} \sin(t^{2}) \, dt  \right)}{x^{6}} \overset{ L }{ = } \lim_{ x \to 0 } \frac{2x\sin(x^{4})}{6x^{5}} = \frac{1}{3} \lim_{ x \to 0 } \frac{\sin(x^{4})}{x^{4}} = \frac{1}{3} \\
}
$$
---
$$
\displaylines{
\int_{e^{-1}}^{e} \frac{\ln(x)\sin(\ln(x) + 1)}{x} \, dx = \left\{\begin{array}{}
t = \ln x + 1 \implies dt = \frac{dx}{x} \\
t(e) = 2 \\
t(e^{-1}) = 0 \\
\end{array}\right\} = \\
= \int_{0}^{2} (t-1)\sin t dt \, dx = \left\{\begin{array}{}
f(t) = t-1 \implies f'(t) = 1 \\
g'(t) = \sin t \implies g(t) = -\cos t \\
\end{array}\right\} = \\
= (1-t)\cos t \bigg|^{2}_{0} + \sin t \bigg|^{2}_{0} = -\cos(2) - 1 + \sin(2) \\
}
$$
---
$$
\displaylines{
m \leq f(x) \leq M \\
m(b-a) \leq \int_{a}^{b} f(x) \, dx \leq M(b-a) \\
f(c) = \frac{\left( \int_{a}^{b} f(x) \, dx  \right)}{b-a} \\
}
$$
---
$$
\displaylines{
\text{Prove that the following equation has a unique solution on } [-1, 1] \\
x = \int_{0}^{x} \sin^{100}t \, dt \\
g(x) = x - \int_{0}^{x} \sin^{100}t \, dt \\
g(-1) = -1 + \underbrace{ \int_{-1}^{0} \sin^{100}t \, dt }_{ \leq 1 } \leq 0 \\
g(1) = 1 - \underbrace{ \int_{0}^{1} \sin^{100}t \, dt }_{ \geq -1 } \geq 0 \\
\implies \exists c \in [-1, 1]: g(c) = 0 \\
g'(x) = 1 - \sin^{100}x > 0 \implies \exists! c \in [-1, 1]: g(c) = 0 \\
}
$$
---
