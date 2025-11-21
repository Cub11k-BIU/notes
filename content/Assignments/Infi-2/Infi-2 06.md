---
{"publish":true,"created":"06/05/25, 16:05","modified":"2025-11-21T21:10:02.448+02:00","tags":["Academia","Assignment","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\int_{0}^{1} \ln(x) \, dx \\
\\
\int_{0}^{1} \ln(x) \, dx = \lim_{ a \to 0^{+} } \int_{a}^{1} \ln(x) \, dx \\
\int_{a}^{1} \ln(x) \, dx = x(\ln(x) - 1)\Bigg|^{x=1}_{x=a} = -1 - a(\ln(a)-1) \\
\implies \int_{0}^{1} \ln(x) \, dx = \lim_{ a \to \infty } \int_{a}^{1} \ln(x) \, dx = \lim_{ a \to 0^{+} } (-1-a(\ln(a)-1)) = \\
= -1 - \lim_{ a \to 0^{+} } a(\ln(a)-1) \\
\text{Let } f(x) = x(\ln(x)-1) \\
f'(x) = \ln(x) \\
0 < x < e^{-1} \implies \ln(x) < 0 \implies \forall x \in (0, e^{-1}): f'(x) < 0 \\
\implies f \text{ is monotonically decreasing on } (0, e^{-1}) \\
\implies \forall 0 < x < e^{-1}: 0 > f(x) > f(e^{-1}) = -\frac{2}{e} \\
\implies f(x) \text{ is bounded as } x \to 0^{+} \\
\implies \lim_{ a \to \infty } a(\ln(a) - 1) \text{ exists and is finite} \\
\implies \boxed{ \int_{0}^{1} \ln(x) \, dx \text{ converges} } \\
}
$$
# 1b
$$
\displaylines{
\int_{0}^{\infty} \frac{\sqrt{ x }}{e^{x}-1} \, dx \\
\\
\int_{0}^{\infty} \frac{\sqrt{ x }}{e^{x}-1} \, dx = \int_{0}^{1} \frac{\sqrt{ x }}{e^{x}-1} \, dx + \int_{1}^{\infty} \frac{\sqrt{ x }}{e^{x}-1} \, dx \\
\lim_{ x \to 0^{+} } \frac{\frac{\sqrt{ x }}{e^{x}-1}}{\frac{1}{\sqrt{ x }}} = \lim_{ x \to 0^{+} } \frac{x}{e^{x}-1} \overset{ L }{ = } \lim_{ x \to 0^{+} } \frac{1}{e^{x}} = 1 \\
\implies \text{By the limit comparison test } \int_{0}^{1} \frac{\sqrt{ x }}{e^{x}-1} \, dx \text{ converges} \iff \int_{0}^{1} \frac{1}{\sqrt{ x }} \, dx \text{ converges} \\
\implies \int_{0}^{1} \frac{\sqrt{ x }}{e^{x}-1} \, dx \text{ converges} \\
\\
\lim_{ x \to \infty } \frac{\frac{\sqrt{ x }}{e^{x}-1}}{\frac{1}{x^{3/2}}} = \lim_{ x \to \infty } \frac{x^{2}}{e^{x}-1} = 0 \\
\implies \text{By the limit comparison test } \int_{1}^{\infty} \frac{\sqrt{ x }}{e^{x}-1} \, dx \text{ converges} \impliedby \int_{1}^{\infty} \frac{1}{x^{3/2}} \, dx \text{ converges} \\
\implies \int_{1}^{\infty} \frac{\sqrt{ x }}{e^{x}-1} \, dx \text{ converges} \\
\implies \boxed{ \int_{0}^{\infty} \frac{\sqrt{ x }}{e^{x}-1} \, dx \text{ converges} } \\
}
$$
# 1c
$$
\displaylines{
\int_{2}^{5} \frac{x+4}{(x-3)^{3}\sqrt{ x-1 }} \, dx \\
\\
\int_{2}^{5} \frac{x+4}{(x-3)^{3}\sqrt{ x-1 }} \, dx = \int_{2}^{3} \frac{x+4}{(x-3)^{3}\sqrt{ x-1 }} \, dx + \int_{3}^{5} \frac{x+4}{(x-3)^{3}\sqrt{ x-1 }} \, dx \\
x > 3 \implies \frac{x + 4}{(x-3)^{3}\sqrt{ x-1 }} > 0 \\
\lim_{ x \to 3^{+} } \frac{\frac{x+4}{(x-3)^{3}\sqrt{ x-1 }}}{\frac{1}{(x-3)^{3}}} = \frac{7}{\sqrt{ 2 }} \\
\implies \text{By the limit comparison test:} \\
\int_{3}^{5} \frac{x+4}{(x-2)^{3}\sqrt{ x-1 }} \, dx \text{ converges} \iff \int_{3}^{5} \frac{1}{(x-2)^{3}} \, dx \text{ converges} \\
p = 3 \implies \int_{3}^{5} \frac{1}{(x-2)^{3}} \, dx \text{ diverges} \\
\implies \int_{3}^{5} \frac{x+4}{(x-2)^{3}\sqrt{ x-1 }} \, dx \text{ diverges} \\
\\
\implies \boxed{ \int_{2}^{5} \frac{x+4}{(x-3)^{3}\sqrt{ x-1 }} \, dx \text{ diverges} } \\
}
$$
# 1d
$$
\displaylines{
\int_{0}^{1} \frac{1}{e^{x}\ln(x)} \, dx \\
\\
0 < x < 1 \implies \frac{1}{e^{x}\ln(x)} < 0 \\
\lim_{ x \to 1^{-} } \frac{\frac{-1}{e^{x}\ln(x)}}{\frac{1}{1-x}} = \frac{1}{e} \cdot \lim_{ x \to 1^{-} } \frac{x-1}{\ln(x)} \overset{ L }{ = } \frac{1}{e} \cdot \lim_{ x \to 1^{-} } x = \frac{1}{e} \\
\implies \text{By the limit comparison test:} \\
\int_{0}^{1} \frac{1}{e^{x}\ln(x)} \, dx \text{ converges} \iff \int_{0}^{1} \frac{1}{x-1} \, dx \text{ converges} \\
p = 1 \implies \int_{0}^{1} \frac{1}{x-1} \, dx \text{ diverges} \\
\implies 
\boxed{ \int_{0}^{1} \frac{1}{e^{x}\ln(x)} \, dx \text{ diverges} } \\
}
$$
# 1e
$$
\displaylines{
\int_{0}^{\infty} \frac{(x+1)\cos(x)}{x\sqrt{ x }} \, dx \\
\\
\int_{0}^{\infty} \frac{(x+1)\cos(x)}{x\sqrt{ x }} \, dx = \int_{0}^{1} \frac{(x+1)\cos(x)}{x\sqrt{ x }} \, dx + \int_{1}^{\infty} \frac{(x+1)\cos(x)}{x\sqrt{ x }} \, dx \\
x < 1 \implies \frac{(x+1)\cos(x)}{x\sqrt{ x }} > 0 \\
\lim_{ x \to 0^{+} } \frac{\frac{(x+1)\cos(x)}{x\sqrt{ x }}}{\frac{1}{x\sqrt{ x }}} = \lim_{ x \to 0^{+} } (x+1)\cos(x) = 1 \\
\implies \int_{0}^{1} \frac{(x+1)\cos(x)}{x\sqrt{ x }} \, dx \text{ converges} \iff \int_{0}^{1} \frac{1}{x\sqrt{ x }} \, dx \text{ converges} \\
p = \frac{3}{2} \implies \int_{0}^{1} \frac{1}{x\sqrt{ x }} \, dx \text{ diverges} \implies \int_{0}^{1} \frac{(x+1)\cos(x)}{x\sqrt{ x }} \, dx \text{ diverges} \\
\implies \boxed{ \int_{0}^{\infty} \frac{(x+1)\cos(x)}{x\sqrt{ x }} \, dx \text{ diverges} } \\
}
$$
# 1f
$$
\displaylines{
\int_{0}^{1} \frac{\sin(x)}{x^{2}} \, dx \\
\\
0 < x < 1 \implies \sin(x) > 0 \\
\lim_{ x \to 0^{+} } \frac{\frac{\sin(x)}{x^{2}}}{\frac{1}{x}} = \lim_{ x \to 0^{+} } \frac{\sin(x)}{x} = 1 \\
\implies \int_{0}^{1} \frac{\sin(x)}{x^{2}} \, dx \text{ converges} \iff \int_{0}^{1} \frac{1}{x} \, dx \text{ converges} \\
p = 1 \implies \int_{0}^{1} \frac{1}{x} \, dx \text{ diverges} \implies \boxed{ \int_{0}^{1} \frac{\sin(x)}{x^{2}} \, dx \text{ diverges} } \\
}
$$
# 2a
$$
\displaylines{
\int_{0}^{2} \frac{\sin\left( \frac{1}{x} \right)}{x} \, dx \\
\\
\int_{0}^{2} \frac{\sin\left( \frac{1}{x} \right)}{x} \, dx = \left\{\begin{array}{}
t = \frac{1}{x} \\
dt = -\frac{1}{x^{2}}dx \\
\frac{dx}{x} = -\frac{dt}{t} \\
x = 2 \implies t = \frac{1}{2} \\
x = 0 \implies t = \infty \\
\end{array}\right\} = -\int_{\infty}^{1/2} \frac{\sin(t)}{t} \, dt = \\
= \int_{\frac{1}{2}}^{\infty} \frac{\sin(t)}{t} \, dt \\
\\
\left\{\begin{array}{}
f(x) = \frac{1}{x} \to 0 \\
G(x) = \int_{\frac{1}{2}}^{x} \sin(t) \, dt = \cos\left( \frac{1}{2} \right) - \cos(x) \\
\end{array}\right\} \\
\implies \int_{\frac{1}{2}}^{\infty} \frac{\sin(t)}{t} \, dt \text{ converges by the Dirichlet's test} \\
\left\lvert \frac{\sin(t)}{t} \right\rvert \geq \frac{\sin^{2}(t)}{t} = \frac{\cos(2t)}{2t} - \frac{1}{2t} \\
\int_{\frac{1}{2}}^{\infty} \frac{\cos(2t)}{2t} \, dt \text{ converges by Dirichlet's test} \\
\int_{\frac{1}{2}}^{\infty} \frac{1}{2t} \, dt \text{ diverges} \\
\implies \int_{\frac{1}{2}}^{\infty} \left\lvert \frac{\sin(t)}{t} \right\rvert  \, dt \text{ diverges} \\
\implies \boxed{ \int_{0}^{2} \frac{\sin\left( \frac{1}{x} \right)}{x} \, dx \text{ converges conditionally} } \\
}
$$
# 2b
$$
\displaylines{
\int_{0}^{\infty} \frac{\ln(x)}{\sqrt{ x }} \, dx \\
\\
\int_{0}^{\infty} \frac{\ln(x)}{\sqrt{ x }} \, dx = \int_{0}^{1} \frac{\ln(x)}{\sqrt{ x }} \, dx + \int_{1}^{\infty} \frac{\ln(x)}{\sqrt{ x }} \, dx \\
x \geq 1 \implies \frac{\ln(x)}{\sqrt{ x }} \geq 0 \\
\lim_{ x \to \infty } \frac{\frac{\ln(x)}{\sqrt{ x }}}{\frac{1}{x}} = \lim_{ x \to \infty } \ln(x)\sqrt{ x } = \infty \\
\int_{1}^{\infty} \frac{1}{x} \, dx \text{ diverges} \implies \text{By the limit comparison test } \int_{1}^{\infty} \frac{\ln(x)}{\sqrt{ x }} \, dx \text{ also diverges} \\
\implies \boxed{ \int_{0}^{\infty} \frac{\ln(x)}{\sqrt{ x }} \, dx \text{ diverges} } \\
}
$$
# 2c
$$
\displaylines{
\int_{0}^{1} \frac{\ln(\sin(x))}{\sqrt{ x }} \, dx \\
\\
0 < x \leq 1 \implies \frac{\ln(\sin(x))}{\sqrt{ x }} \leq 0 \\
\implies \left\lvert \frac{\ln(\sin(x))}{\sqrt{ x }} \right\rvert = -\frac{\ln(\sin(x))}{\sqrt{ x }} \\
\lim_{ x \to 0^{+} } \frac{\frac{-\ln(\sin(x))}{\sqrt{ x }}}{\frac{1}{x^{3/4}}} = - \lim_{ x \to 0^{+} } x^{1/4} \cdot \ln(\sin(x)) = - \lim_{ x \to 0^{+} } \frac{\ln(\sin(x))}{x^{-1/4}} \overset{ L }{ = } - \lim_{ x \to 0^{+} } \frac{\frac{\cos(x)}{\sin(x)}}{-\frac{1}{4}x^{-5/4}} = \\
= \lim_{ x \to 0^{+} } 4x^{1/4}\cos(x) \cdot \frac{x}{\sin(x)} = 0 \\
\int_{0}^{1} \frac{1}{x^{3/4}} \, dx \text{ converges} \implies \text{By the limit comparison test } \int_{0}^{1} \left\lvert \frac{\ln(\sin(x))}{\sqrt{ x }} \right\rvert  \, dx \text{ converges} \\
\implies \boxed{ \int_{0}^{1} \frac{\ln(\sin(x))}{\sqrt{ x }} \, dx \text{ converges absolutely} } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } f \text{ be continuous and bounded on } [2, \infty) \\
\text{Let } \int_{2}^{\infty} f(x) \, dx \text{ converge absolutely} \\
\text{Prove or disprove: } \int_{2}^{\infty} (f(x))^{2} \, dx \text{ converges} \\
\\
\text{Proof:} \\
\text{Let } \forall x \in [2, \infty): \left\lvert f(x) \right\rvert  \leq M \\
\\
\implies 0 \leq (f(x))^{2} = \left\lvert f(x) \right\rvert ^{2} = \left\lvert f(x) \right\rvert \cdot \left\lvert f(x) \right\rvert \leq M \cdot \left\lvert f(x) \right\rvert \\
\int_{2}^{\infty} \left\lvert f(x) \right\rvert \, dx \text{ converges} \implies \boxed{ \int_{2}^{\infty} (f(x))^{2} \, dx = \int_{2}^{\infty} M \cdot \left\lvert f(x) \right\rvert \, dx \text{ converges} } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } f \text{ be continuous and bounded on } [2, \infty) \\
\text{Let } \int_{2}^{\infty} f(x) \, dx \text{ converge conditionally} \\
\text{Prove or disprove: } \int_{2}^{\infty} (f(x))^{2} \, dx \text{ converges} \\
\\
\text{Disproof:} \\
\text{Let } f(x) = \frac{\sin(x)}{\sqrt{ x }} \\
\int_{2}^{\infty} \frac{\sin(x)}{\sqrt{ x }} \, dx \text{ converges by the Dirichlet's test} \\
\left\lvert \frac{\sin(x)}{\sqrt{ x }} \right\rvert \geq \frac{\sin^{2}(x)}{\sqrt{ x }} = \frac{1}{2\sqrt{ x }} - \frac{\cos(2x)}{2\sqrt{ x }} \\
\int_{2}^{\infty} \, dx \frac{1}{2\sqrt{ x }} \, dx \text{ diverges by the p-test} \implies \int_{2}^{\infty} \frac{\sin(x)}{\sqrt{ x }} \, dx \text{ converges conditionally} \\
(f(x))^{2} = \frac{\sin^{2}(x)}{x} = \frac{1}{2x} - \frac{\cos(2x)}{2x} \\
\int_{2}^{\infty} \frac{1}{2x} \, dx \text{ diverges by the p-test} \implies \boxed{ \int_{2}^{\infty} (f(x))^{2} \, dx \text{ diverges} } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } \int_{1}^{\infty} f(x) \, dx \text{ converges} \\
\text{Let } \exists \lim_{ x \to \infty } f(x) \\
\text{Prove: } \lim_{ x \to \infty } f(x) = 0 \\
\\
\text{Proof:} \\
\text{Let } \lim_{ x \to \infty } f(x) = L \neq 0 \\
\implies \left\lvert L \right\rvert > 0 \\
\text{Let } \varepsilon = \frac{\left\lvert L \right\rvert }{2} \\
\implies \exists X_{\varepsilon}: \forall x > X_{\varepsilon}: \left\lvert f(x) - L \right\rvert < \frac{\left\lvert L \right\rvert}{2} \\
\left\lvert L \right\rvert = \left\lvert L - f(x) + f(x) \right\rvert \leq \left\lvert L - f(x) \right\rvert + \left\lvert f(x) \right\rvert \\
\implies \left\lvert f(x) \right\rvert \geq \left\lvert L \right\rvert - \left\lvert L - f(x) \right\rvert > \left\lvert L \right\rvert - \frac{\left\lvert L \right\rvert}{2} = \frac{\left\lvert L \right\rvert}{2} \\
\int_{1}^{\infty} \frac{\left\lvert L \right\rvert}{2} \, dx \text{ diverges} \\
\implies \text{By the direct comparison test } \int_{1}^{\infty} f(x) \, dx \text{ diverges} - \text{Contradiction!} \\
\implies \boxed{ \lim_{ x \to \infty } f(x) = 0 } \\
}
$$
# 4b
$$
\displaylines{
\text{Give an example of a non-negative function } f(x) \text{ such that } \int_{1}^{\infty} f(x) \, dx \text{ converges,} \\
\text{but } \not\exists \lim_{ x \to \infty } f(x) \\
\\
\text{Solution:} \\
\text{Let } f(x) = \left\{\begin{array}{}
4n^{2}(x-n) + 2 & n-\frac{1}{2n^{2}} \leq x < n \\
2 & x = n \\
-4n^{2}(x-n) + 2 & n < x \leq n + \frac{1}{2n^{2}} \\
\end{array}\right. \\
\text{Graph of } f(x) \text{ is composed of isosceles triangles of height } 2 \text{ and with base } \frac{1}{n^{2}} \\
\text{Area of each triangle is } A_{n} = \frac{h \cdot b}{2} = \frac{2}{2n^{2}} = \frac{1}{n^{2}} \\
\implies \int_{0}^{\infty} f(x) \, dx = \sum_{n=1}^{\infty} A_{n} = \sum_{n=1}^{\infty} \frac{1}{n^{2}} \\
\text{Integral starting from 1 instead of 0 will cut the first triangle in half} \\
\implies \int_{1}^{\infty} f(x) \, dx = \frac{1}{2} + \sum_{n=2}^{\infty} \frac{1}{n^{2}} = \sum_{n=1}^{\infty} \frac{1}{n^{2}} - \frac{1}{2} = \frac{\pi}{6} - \frac{1}{2} = \frac{\pi-3}{6} \\
\forall M \in \mathbb{R}: \exists n \in \mathbb{N}: n > M : f(n) = 2, f\left( n + \frac{1}{2n^{2}} \right) = 0 \\
\implies \boxed{ \not\exists \lim_{ x \to \infty } f(x) } \\
}
$$
