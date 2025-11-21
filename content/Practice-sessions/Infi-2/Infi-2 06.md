---
{"publish":true,"created":"28/04/25, 13:04","modified":"2025-11-21T21:10:24.885+02:00","tags":["Academia","Practice","Infi-2"],"cssclasses":""}
---

## Dirichlet's convergence test for integrals
$$
\displaylines{
\text{Let } f \text{ be a continuously differentiable, monotonically decreasing function} \\
\lim_{ x \to \infty } f(x) = 0 \\
\text{Let } g \text{ be continuous} \\
\text{Let } G(x) = \int_{a}^{x} g(t) \, dt \text{ be bounded} \\
\text{Then } \int_{a}^{\infty} f(x)g(x) \, dx \text{ converges} \\
}
$$
---
$$
\displaylines{
\int_{a}^{\infty} \frac{\cos(x)}{x} \, dx \\
f(x) = \frac{1}{x} \\
g(x) = \cos x = G(x) = \sin(x) - \sin(a) \\
\implies \text{Integral converges} \\
}
$$
---
$$
\displaylines{
\int_{a}^{\infty} \sin(x^{2}) \, dx \\
t = x^{2} \implies dt = 2xdx \implies dx = \frac{dt}{2\sqrt{ t }} \\
\int_{a^{2}}^{\infty} \frac{\sin(t)}{2\sqrt{ t }} \, dt \text{ converges} \\
\text{But } \lim_{ x \to \infty } \sin(x^{2}) \neq 0 \\
}
$$
---
$$
\displaylines{
\int_{-\infty}^{\infty} \frac{1}{x^{2}+34} \, dx = \int_{-\infty}^{0} \frac{1}{x^{2}+34} \, dx + \int_{0}^{\infty} \frac{1}{x^{2}+34} \, dx \\
= \lim_{ b \to \infty } \frac{1}{\sqrt{ 34 }}\arctan\left( \frac{x}{\sqrt{ 34 }} \right)\Bigg|^{x=0}_{x=-b} + \lim_{ b \to \infty } \frac{1}{\sqrt{ 34 }}\arctan\left( \frac{x}{\sqrt{ 34 }} \right)\Bigg|^{x=b}_{x=0} = \frac{\pi}{\sqrt{ 34 }} \\
}
$$
---
$$
\displaylines{
\int_{0}^{1} \cot x \, dx = \lim_{ a \to 0^{+} } \int_{a}^{1} \cot x \, dx = \lim_{ a \to 0^{+} } \ln \left\lvert \sin x \right\rvert \Bigg|^{x=1}_{x=a} = \lim_{ n \to \infty } \ln(\sin(1)) - \ln(\sin(a))= \infty \\
}
$$
---
$$
\displaylines{
\forall n \geq 0: \int_{0}^{\infty} x^{n}e^{-x} \, dx = n! \\
\text{Proof (a little more complicated than the standard one) in Lecture 8} \\
}
$$
---
$$
\displaylines{
\int_{1}^{\infty} \sin\left( \frac{x+20}{x^{3}-2} \right) \, dx = \int_{1}^{3} \sin\left( \frac{x+20}{x^{3}-2} \right) \, dx + \int_{3}^{\infty} \sin\left( \frac{x+20}{x^{3}-2} \right) \, dx \\
\\
\int_{3}^{\infty} \sin\left( \frac{x+20}{x^{3}-2} \right) \, dx \text{ converges} \iff \int_{3}^{\infty} \frac{x+20}{x^{3}-2} \, dx \text{ converges} \\
\int_{3}^{\infty} \frac{x+20}{x^{3}-2} \, dx \text{ converges} \iff \int_{3}^{\infty} \frac{1}{x^{2}} \, dx \text{ converges} \\
}
$$
---
$$
\displaylines{
\int_{0}^{1} \frac{\sin\left( \frac{1}{x} \right)}{x} \, dx = \left\{\begin{array}{}
t = \frac{1}{x} \\
dt = -\frac{1}{x^{2}}dx \\
x = 0 \implies t = \infty \\
x = 1 \implies t = 1 \\
\end{array}\right\} = \int_{1}^{\infty} \frac{\sin(t)}{t} \, dt \\
\implies \text{Converges by the Dirichlet's test} \\
\left\lvert \frac{\sin t}{t} \right\rvert \geq \frac{\sin^{2}t}{t} = \frac{1-\cos(2t)}{2t} = \underbrace{ \frac{1}{2}\left( \frac{1}{t} - \frac{\cos(2t)}{t} \right) }_{ \text{Integral diverges} } \\
}
$$
---
$$
\displaylines{
\int_{0}^{\infty} (-1)^{\lfloor x^{2} \rfloor } \, dx = \sum_{n=0}^{\infty} \int_{\sqrt{ n }}^{\sqrt{ n+1 }} (-1)^{n} \, dx = \\
= \sum_{n=0}^{\infty} (-1)^{n} \frac{1}{\sqrt{ n+1 } + \sqrt{ n }} \text{ converges by the Leibniz test} \\
}
$$
---
$$
\displaylines{
\int_{0}^{\pi/2} \frac{1}{\sin^{a}(x^{2})\cos^{b}(x)} \, dx = \\
= \int_{0}^{1} \frac{1}{\sin^{a}(x^{2})\cos^{b}(x)} \, dx + \int_{1}^{\pi/2} \frac{1}{\sin^{a}(x^{2})\cos^{b}(x)} \, dx \\
\lim_{ x \to 0 } \frac{\frac{1}{\cos^{b}x} \cdot \frac{1}{\sin^{a}(x^{2})}}{\left( \frac{1}{x^{2}} \right)^{a}} = \lim_{ x \to 0 } \frac{1}{\cos^{b}x} \cdot \left( \frac{\frac{1}{\sin(x^{2})}}{\frac{1}{x^{2}}} \right)^{a} \underset{ x \to 0 }{ \to } 1^{a} = 1 \\
\implies \int_{0}^{1} f(x) \, dx \text{ converges} \iff 2a < 1 \iff a < \frac{1}{2} \\
\lim_{ x \to \frac{\pi}{2} } \frac{\frac{1}{(\pi-x)^{b}}}{\frac{1}{\sin^{a}(x^{2})\cos^{b}(x)}} = \frac{1}{\sin^{a}\left( \frac{\pi}{4} \right)} \\
\implies \int_{1}^{\pi/2} f(x) \, dx \text{ converges} \iff b < 1 \\
}
$$
---
