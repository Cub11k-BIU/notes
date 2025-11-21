---
{"publish":true,"created":"24/02/25, 17:02","modified":"2025-11-21T21:10:14.139+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } 0 < x < \sqrt{ 3 } \\
\text{Prove: } \frac{\sqrt{ x }}{\ln(x^{2}+1)} > \frac{x^{2}+1}{4x\sqrt{ x }} \\
\\
\text{Proof:} \\
\text{Let } f(x) = \sqrt{ x } \\
f \text{ is continuous and differentiable on } (0, \infty) \\
f'(x) = \frac{1}{2\sqrt{ x }} \\
\text{Let } g(x) = \ln(x^{2} + 1) \\
g \text{ is continuous and differentiable on } (0, \infty) \\
g'(x) = \frac{2x}{x^{2}+1} \\
\frac{f(x)}{g(x)} = \frac{f(x)-0}{g(x)-0} = \frac{f(x)-f(0)}{g(x)-g(0)} \\
\text{By the Langange's theorem: } \exists c \in (0, x): \frac{f(x)-f(0)}{g(x)-g(0)} = \frac{f'(c)}{g'(c)} \\
\text{Let } h(x) = \frac{f'(x)}{g'(x)} = \frac{x^{2}+1}{4x\sqrt{ x }} \\
h \text{ is continuous and differentiable on } (0, \infty) \\
h'(x) = \frac{8x^{2}\sqrt{ x } - (x^{2}+1)6\sqrt{ x }}{16x^{3}} = \frac{8x^{2}\sqrt{ x } - 6x^{2}\sqrt{ x }-6\sqrt{ x }}{16x^{3}} = \frac{x^{2}\sqrt{ x }-3\sqrt{ x }}{8x^{3}} = \\
= \frac{x^{2}-3}{8\sqrt{ x^{5} }} \\
0 < x < \sqrt{ 3 } \implies h(x) < 0 \implies [c < x \implies h(c) > h(x)] \\
\implies \frac{f(x)}{g(x)} = \frac{f'(c)}{g'(c)} = h(c) > h(x) = \frac{f'(x)}{g'(x)} \\
\implies \boxed{ \frac{\sqrt{ x }}{\ln(x^{2}+1)} > \frac{x^{2}+1}{4x\sqrt{ x }} } \\
}
$$
# 2a
$$
\displaylines{
\text{Prove or disprove: } a_{n} = \sum_{k=n}^{2n} \frac{1}{k} \text{ converges} \\
\\
\text{Proof:} \\
a_{n+1} - a_{n} = \sum_{k=n}^{2n} \frac{1}{k} - \sum_{k=n+1}^{2n+2} \frac{1}{k} = \frac{1}{2n+1} + \frac{1}{2n+2} - \frac{1}{n} \leq \frac{2}{2n} - \frac{1}{n} = 0 \\
\implies a_{n+1} \leq a_{n} \implies a_{n} \text{ is monotonically decreasing} \\
a_{n} \geq \sum_{k=n}^{2n} \frac{1}{n} = 1 \implies a_{n} \text{ is lower bounded} \\
\implies \boxed{ a_{n} \text{ converges} } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } a_{n} > 0 \\
\text{Let } \lim_{ n \to \infty } \sqrt[n]{ a_{n} } = L > 0 \\
\text{Prove or disprove: } \lim_{ n \to \infty } \frac{a_{n}}{a_{n+1}} = \frac{1}{L} \\
\\
\text{Disproof:} \\
\text{Let } a_{n} = 1, 5, 1, 5, \dots \\
\lim_{ n \to \infty } \sqrt[2n]{ a_{2n} } = \lim_{ n \to \infty } \sqrt[2n]{ 5 } = 1 \\
\lim_{ n \to \infty } \sqrt[2n-1]{ a_{2n-1} } = \lim_{ n \to \infty } \sqrt[2n-1]{ 1 } = 1 \\
\implies \sqrt[n]{ a_{n} } \to 1 \\
\frac{a_{n}}{a_{n+1}} = \frac{1}{5}, 5, \frac{1}{5}, 5, \dots \implies f \\
}
$$
# 3a
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{(-1)^{n}n}{n^{\sqrt{ n }}} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{(-1)^{n}n}{n^{\sqrt{ n }}} \\
\\
\sum_{n=1}^{\infty} \lvert a_{n} \rvert = \sum_{n=1}^{\infty} \frac{n}{n^{\sqrt{ n }}} = \sum_{n=1}^{\infty} \frac{1}{n^{\sqrt{ n }-1}} \\
\forall n > 9: \sqrt{ n }-1 > 2 \implies \sum_{n=1}^{\infty} = \sum_{n=1}^{9} \frac{1}{n^{\sqrt{ n }-1}} + \sum_{n=10}^{\infty} \frac{1}{n^{\sqrt{ n }-1}} \\
\sum_{n=10}^{\infty} \frac{1}{n^{\sqrt{ n }-1}} \leq \sum_{n=10}^{\infty} \frac{1}{n^{2}} \text{ which converges} \implies \sum_{n=10}^{\infty} \frac{1}{n^{\sqrt{ n }-1}} \text{ also converges} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{(-1)^{n}n}{n^{\sqrt{ n }}} \text{ converges absolutely} } \\
}
$$
# 3b
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{\cos\left( \frac{\pi n}{2} \right)}{19n+7\sqrt{ n }} \\
\\
\text{Solution:} \\
\cos\left( \frac{\pi n}{2} \right) = 0, -1, 0, 1, 0, -1, 0, 1, \dots \\
\implies S_{N} = 0, -1, 0, 0, 0, -1, 0, 0, 0, \dots \\
\implies \lvert S_{N} \rvert \leq 1 \\
\implies \sum_{n=1}^{\infty} \cos\left( \frac{\pi n}{2} \right) \text{ is bounded} \\
\frac{1}{19n+7\sqrt{ n }} \text{ is monotonically decreasing towards } 0 \\
\implies \text{By Dirichlet's test: } \sum_{n=1}^{\infty} \frac{\cos\left( \frac{\pi n}{2} \right)}{19n+7\sqrt{ n }} \text{ converges at least conditionally} \\
\sum_{n=1}^{\infty} \left\lvert  \frac{\cos\left( \frac{\pi n}{2} \right)}{19n+7\sqrt{ n }}  \right\rvert = \sum_{n=1}^{\infty} \frac{\left\lvert  \cos\left( \frac{\pi n}{2} \right)  \right\rvert}{19n+7\sqrt{ n }} \\
\text{Let } a_{n} = \left\lvert  \cos\left( \frac{\pi n}{2} \right)  \right\rvert \\
a_{2n} = \lvert \cos(\pi n) \rvert = 1 \\
a_{2n-1} = \left\lvert  \cos\left( \pi n-\frac{\pi}{2} \right)  \right\rvert = 0 \\
0 + 1 + 0 + 1 + \dots > \frac{1}{3} + \frac{1}{3} + \frac{1}{3} + \frac{1}{3} + \dots \implies \sum a_{n} > \sum \frac{1}{3} \\
\implies \sum_{n=1}^{\infty} \frac{\left\lvert  \cos\left( \frac{\pi n}{2} \right)  \right\rvert}{19n+7\sqrt{ n }} > \sum_{n=1}^{\infty} \frac{1}{57n+21\sqrt{ n }} \underbrace{ > }_{ n > \sqrt{ n } } \sum_{n=1}^{\infty} \frac{1}{78n} \text{ which diverges} \\
\implies \sum_{n=1}^{\infty} \frac{\left\lvert  \cos\left( \frac{\pi n}{2} \right)  \right\rvert}{19n+7\sqrt{ n }} \text{ also diverges} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{\cos\left( \frac{\pi n}{2} \right)}{19n+7\sqrt{ n }} \text{ converges conditionally} } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{Let } f \text{ be differentiable on } \mathbb{R} \\
\text{Let } \Set{ a_{n} }, \Set{ b_{n} } \subseteq \mathbb{R}: a_{n} - b_{n} \to 0 \\
\text{Prove or disprove: } f(a_{n}) - f(b_{n}) \to 0 \\
\\
\text{Disproof:} \\
\text{Let } f(x) = x^{2} \\
\text{Let } a_{n} = n + \frac{1}{n} \\
\text{Let } b_{n} = n \\
a_{n} - b_{n} = \frac{1}{n} \to 0 \\
f(a_{n}) - f(b_{n}) = \left( n+\frac{1}{n} \right)^{2} - n^{2} = 2 + \frac{1}{n} \to 2 \\
\implies f(a_{n}) - f(b_{n}) \not\to 0 \\
}
$$
# 4b
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{Let } f \text{ be continuous on } \mathbb{R} \\
\text{Let } f \text{ has no local extremums} \\
\text{Prove or disprove: } f \text{ is monotonic} \\
\\
\text{Proof:} \\
\text{Let } f \text{ be non-monotonic} \\
\implies \exists a < b: f(a) > f(b), \exists c < d: f(c) < f(d) \\
\text{Let } a, b, c, d \in [\alpha, \beta] \\
f \text{ is continuous} \implies \exists x_{m}, x_{M} \in [\alpha, \beta]: \forall x \in [\alpha, \beta]: f(x_{m}) \leq f(x) \leq f(x_{M}) \\
f \text{ has no local extremums} \implies \Set{ \alpha, \beta } = \Set{ x_{m}, x_{M} } \\
\text{Case 1. Let } \alpha = x_{m}, \beta = x_{M} \\
f(\alpha) \leq f(b) < f(a) \leq f(\beta) \implies f(\alpha) < f(\beta) \\
b \in [a, \beta], f(a) > f(b) \implies a \text{ is not a minimum of } [a, \beta] \\
f(\beta) \geq f(a) > f(b) \implies \beta \text{ is not a minimum of } [a, \beta] \\
\implies \exists x_{m} \in (a, \beta): \forall x \in [a, \beta]: f(x) \geq f(x_{m}) \\
\implies x_{m} \text{ is a local minimum of } f - \text{Contradiction!} \\
\text{Case 2. Let } \beta = x_{m}, \alpha = x_{M} \\
f(\beta) \leq f(c) < f(d) \leq f(\alpha) \implies f(\beta) < f(\alpha) \\
c \in [\alpha, d], f(c) < f(d) \implies d \text{ is not a minimum of } [\alpha, d] \\
f(\alpha) \geq f(d) > f(c) \implies \alpha \text{ is not a minimum of } [\alpha, d] \\
\implies \exists x_{m} \in (\alpha, d): \forall x \in [\alpha, d]: f(x) \geq f(x_{m}) \\
\implies x_{m} \text{ is a local minimum of } f - \text{Contradiction!} \\
\implies f \text{ is monotonic} \\
\\
\\
\text{Alternative proof:} \\
\text{Let } f \text{ be non-monotonic} \\
\implies \exists a < b: f(a) < f(b), \exists c < d: f(c) > f(d) \\
\text{Let } b \leq c \text{ (meaning that the non-monotonic part is a "hill")} \\
\text{Let } f(b) \geq f(c) \\
\implies f(a) < f(b) > f(d) \\
a < b < c < d \implies b \in [a, d] \\
f \text{ is continuous} \implies \exists x_{M} \in [a, d]: \forall x \in [a, d]: f(x) \leq f(x_{M}) \\
f(a) < f(b) \implies a \neq x_{M} \\
f(d) < f(b) \implies d \neq x_{M} \\
\implies x_{M} \in (a, d) \implies x_{M} \text{ is a local maximum of } f - \text{Contradiction!} \implies  f(b) \leq f(c) \\
\implies f(a) < f(c) > f(d) \\
a < b \leq c < d \implies c \in [a, d] \\
f \text{ is continuous} \implies \exists x_{M} \in [a, d]: \forall x \in [a, d]: f(x) \leq f(x_{M}) \\
f(a) < f(c) \implies a \neq x_{M} \\
f(d) < f(c) \implies d \neq x_{M} \\
\implies x_{M} \in (a, d) \implies x_{M} \text{ is a local maximum of } f - \text{Contradiction!} \\
\text{Proof for non-monotonic part being a "pit" is similar} \\
\implies \boxed{ f \text{ is monotonic} } \\
}
$$
# 5
$$
\displaylines{
\text{Find for all } a \in \mathbb{R}: \lim_{ n \to \infty } (\sin(\sqrt{ x-a })-\sin \sqrt{ x }) \\
\\
\text{Solution:} \\
a = 0 \implies \boxed{ \lim_{ n \to \infty } (\sin(\sqrt{ x })-\sin(\sqrt{ x })) = 0 } \\
\text{Let } f(x) = \sin x \\
f \text{ is continuous and differentiable on } \mathbb{R} \\
\text{By the Lagrange theorem: } \exists c \in (\sqrt{ x-a }, \sqrt{ x }): \frac{\sin(\sqrt{ x })-\sin(\sqrt{ x-a })}{\sqrt{ x }-\sqrt{ x-a }} = f'(c) = \cos(c) \\
\implies -1 \leq \frac{\sin(\sqrt{ x })-\sin(\sqrt{ x-a })}{\sqrt{ x }-\sqrt{ x-a }} \leq 1 \\
\implies \sqrt{ x-a }-\sqrt{ x } \leq \sin(\sqrt{ x })-\sin(\sqrt{ x-a }) \leq \sqrt{ x }-\sqrt{ x-a } \\
\lim_{ x \to \infty } \sqrt{ x }-\sqrt{ x-a } = \lim_{ x \to \infty } \frac{a}{\underbrace{ \sqrt{ x } }_{ \to \infty }+\underbrace{ \sqrt{ x-a } }_{ \to \infty }} = 0 \\
\implies \lim_{ x \to \infty } \sqrt{ x-a }-\sqrt{ x } = -0 = 0 \\
\implies -\lim_{ x \to \infty } \sin(\sqrt{ x }) - \sin(\sqrt{ x-a }) = \boxed{ \lim_{ n \to \infty } (\sin(\sqrt{ x-a })-\sin \sqrt{ x }) = 0 } \\
}
$$
