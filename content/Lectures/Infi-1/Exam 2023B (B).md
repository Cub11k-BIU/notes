---
{"publish":true,"created":"24/02/25, 15:02","modified":"2025-11-21T21:10:14.153+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } x > 0 \\
\text{Prove: } \frac{\arctan\left( \frac{x}{x+1} \right)}{\ln(x+1)} > \frac{x+1}{2x^{2}+2x+1} \\
\\
\text{Proof:} \\
\text{Let } f(x) = \arctan\left( \frac{x}{x+1} \right) \\
f'(x) = \left( \frac{x}{x+1} \right)' \cdot \frac{1}{\left( \frac{x}{x+1} \right)^{2} + 1} = \frac{x+1-x}{(x+1)^{2}} \cdot \frac{1}{\frac{2x^{2}+2x+1}{x^{2}+2x+1}} = \frac{1}{2x^{2}+2x+1} \\
\text{Let } g(x) = \ln(x+1) \\
g'(x) = \frac{1}{x+1} \\
\frac{f'(x)}{g'(x)} = \frac{x+1}{2x^{2}+2x+1} \\
\frac{f(x)}{g(x)} = \frac{f(x)-0}{g(x)-0} = \frac{f(x)-f(0)}{g(x)-g(0)} \\
\text{By Langranges theorem: } \exists c \in (0, x): \frac{f(x)-f(0)}{g(x)-g(0)} = \frac{f'(c)}{g'(c)} \\
\text{Let } h(x) = \frac{f'(x)}{g'(x)} \\
h'(x) = \frac{2x^{2}+2x+1-(x+1)(4x+2)}{(2x^{2}+2x+1)^{2}} = \frac{-2x^{2}-4x-1}{(2x^{2}+2x+1)^{2}} < 0 \\
\implies [c < x \implies h(c) > h(x)] \\
\implies \frac{f(x)}{g(x)} > h(x) \implies \boxed{ \frac{\arctan\left( \frac{x}{x+1} \right)}{\ln(x+1)} > \frac{x+1}{2x^{2}+2x+1} } \\
}
$$
# 2a
$$
\displaylines{
\text{Let } f \text{ be a function defined on } (a, b) \\
\text{Let } f \text{ be differentiable three times on } (a, b) \\
\text{Let } \exists c \in (a, b): f'(c) = 0 \\
\text{Prove or disprove: } f''(c) > 0 \implies c \text{ is a local minimum} \\
\\
\text{Proof:} \\
f''(c) = \lim_{ h \to 0 } \frac{f'(c+h)-f'(c)}{h} = \lim_{ h \to 0 } \frac{f'(c+h)}{h} > 0 \\
h \to 0^{+} \implies f'(c+h) > 0 \implies \exists \varepsilon_{R} > 0: f \text{ is monotonically increasing on } [c, c+\varepsilon_{E}] \\
h \to 0^{-} \implies f'(c+h) < 0 \implies \exists \varepsilon_{L} > 0: f \text{ is monotonically decreasing on } [c-\varepsilon_{L}, c] \\
\implies \exists \varepsilon = min(\varepsilon_{L}, \varepsilon_{R}) > 0: \forall x \in [c-\varepsilon, c+\varepsilon]: f(c) \leq f(x) \\
\implies \boxed{ c \text{ is a local minimum of } f } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } f \text{ be a function defined on } (a, b) \\
\text{Let } f \text{ be differentiable three times on } (a, b) \\
\text{Let } \exists c \in (a, b): f'(c) = 0 \\
\text{Prove or disprove: } c \text{ is a local maximum} \implies f''(c) < 0 \\
\\
\text{Disproof:} \\
f(x) = -x^{4} \\
f'(x) = -4x^{3} \\
f''(x) = -12x^{2} \\
0 \text{ is a local maximum of } f \\
\boxed{ f''(0) = 0 } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } a_{n} = \begin{cases}
3 & n = 1 \\
\frac{1}{2}\left( a_{n-1} + \frac{7}{a_{n-1}} \right) & n > 1 \\
\end{cases} \\
\text{Prove that } a_{n} \text{ converges and find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Solution:} \\
\forall n \in \mathbb{N}: a_{n} > 0 \\
a_{n+1} - a_{n} = \frac{7-a_{n}^{2}}{2a_{n}} \\
\text{Base case. } \sqrt{ 7 } < a_{1} \leq 3 \\
\text{Induction step. Let } \sqrt{ 7 } < a_{n} \leq 3 \\
\implies a_{n+1} - a_{n} < 0 \implies a_{n+1} < a_{n} \\
a_{n+1} = \frac{a_{n}^{2}+7}{2a_{n}} \\
\text{Let } f(x) = \frac{x^{2}+7}{2x} \\
f \text{ is continuous and differentiable on } (0, \infty) \\
f'(x) = \frac{1}{2} - \frac{7}{2x^{2}} \\
x > \sqrt{ 7 } \implies f'(x) > 0 \implies f(x) > f(\sqrt{ 7 }) = \sqrt{ 7 } \\
a_{n} > \sqrt{ 7 } \implies a_{n+1} = f(a_{n}) > \sqrt{ 7 } \\
\implies \forall n \in \mathbb{N}: a_{n} > \sqrt{ 7 } \land a_{n+1} < a_{n} \\
\implies a_{n} \text{ is bounded and monotonically decreasing} \\
\implies \lim_{ n \to \infty } a_{n} = L \in \mathbb{R} \\
\implies \lim_{ n \to \infty } a_{n+1} = \lim_{ n \to \infty } \frac{a_{n}}{2} + \frac{7}{2a_{n}} = \frac{L}{2} + \frac{7}{2L} = L \\
\implies L^{2} = 7 \implies L = \pm \sqrt{ 7 } \\
a_{n} > \sqrt{ 7 } \implies L \geq \sqrt{ 7 } \implies \boxed{ L = \sqrt{ 7 } } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } a_{1}, b_{1} > 0 \in \mathbb{R} \\
\text{Let } a_{n+1} = \frac{a_{n}+b_{n}}{2} \\
\text{Let } b_{n+1} = \sqrt{ a_{n}b_{n} } \\
\text{Prove: } \lim_{ n \to \infty } a_{n} = \lim_{ n \to \infty } b_{n} = L \in \mathbb{R} \\
\\
\text{Proof:} \\
\text{Base case. } a_{1} > 0, b_{1} > 0 \\
\text{Induction step. Let } a_{n} > 0, b_{n} > 0 \\
a_{n+1} = \frac{a_{n}+b_{n}}{2} > 0 \\
b_{n+1} = \sqrt{ a_{n}b_{n} } > 0 \\
\implies \forall n \in \mathbb{N}: a_{n} > 0, b_{n} > 0 \\
\\
\frac{a_{n}+b_{n}}{2} - \sqrt{ a_{n}b_{n} } = \frac{a_{n}-2\sqrt{ a_{n}b_{n} }+b_{n}}{2} = \frac{(\sqrt{ a_{n} }-\sqrt{ b_{n} })^{2}}{2} > 0 \\
\implies a_{n+1} > b_{n+1} \\
\implies \forall n > 1 \in \mathbb{N}: b_{n} < a_{n} \\
\implies \forall n > 1 \in \mathbb{N}: a_{n+1} < \frac{2a_{n}}{2} = a_{n} \\
\implies a_{n} \text{ is monotonically decreasing and bounded from below by } 0 \\
\implies \exists \lim_{ n \to \infty } a_{n} = L \in \mathbb{R} \\
b_{n} = 2a_{n+1} - a_{n} \implies \lim_{ n \to \infty } b_{n} = \lim_{ n \to \infty } 2a_{n+1}-a_{n} = 2L-L = L \\
\implies \boxed{ \lim_{ n \to \infty } a_{n} = \lim_{ n \to \infty } b_{n} = L \in \mathbb{R} } \\
}
$$
# 4a
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{\sin n}{n} \\
\\
\text{Solution:} \\
\text{Let } S_{N} = \sum_{n=1}^{N} \sin n \\
2\sin\left( \frac{1}{2} \right)S_{N} = \sum_{n=1}^{N} 2\sin\left( \frac{1}{2} \right)\sin n = \sum_{n=1}^{N} \left( \cos\left( n-\frac{1}{2} \right) - \cos\left( n+\frac{1}{2} \right) \right) = \\
= \cos\left( \frac{1}{2} \right) - \cos\left( N+\frac{1}{2} \right) \\
\implies S_{N} = \frac{\cos\left( \frac{1}{2} \right) - \cos\left( N+\frac{1}{2} \right)}{2\sin\left( \frac{1}{2} \right)} \\
\implies \frac{\cos\left( \frac{1}{2} \right)-1}{2\sin\left( \frac{1}{2} \right)}\leq S_{N} \leq \frac{\cos\left( \frac{1}{2} \right)}{2\sin\left( \frac{1}{2} \right)} \\
\implies \sum_{n=1}^{\infty} \sin(n) \text{ is bounded} \\
\frac{1}{n} \text{ is monotonically decreasing and } \frac{1}{n} \to 0 \\
\implies \text{By Dirichlet's test: } \sum_{n=1}^{\infty} \frac{\sin n}{n} \text{ converges} \\
\sum_{n=1}^{\infty} \left\lvert  \frac{\sin n}{n}  \right\rvert = \sum_{n=1}^{\infty} \frac{\lvert \sin n \rvert}{n} \geq \sum_{n=1}^{\infty} \frac{1}{2n} + X \\
\frac{1}{2} \sum_{n=1}^{\infty} \frac{1}{n} \text{ diverges} \\
\implies \sum_{n=1}^{\infty} \frac{\lvert \sin n \rvert}{n} \text{ also diverges} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{\sin n}{n} \text{ converges conditionally} } \\
}
$$
# 4b
$$
\displaylines{
\sum_{n=2}^{\infty} \frac{(-1)^{n}}{\ln(n!)} \\
\\
\text{Solution:} \\
\frac{1}{\ln(n!)} \text{ is monotonically decreasing and } \frac{1}{\ln(n!)} \to 0 \\
\implies \sum_{n=2}^{\infty} \frac{(-1)^{n}}{\ln(n!)} \text{ converges at least conditionally by the alternating series test} \\
\sum_{n=2}^{\infty} \left\lvert  \frac{(-1)^{n}}{\ln(n!)}  \right\rvert = \sum_{n=2}^{\infty} \frac{1}{\ln(n!)} \\
k < n \implies \ln(k) < \ln(n) \implies \ln(n!) = \ln(1) + \ln(2) + \dots + \ln(n) \leq n\ln n \\
\implies \frac{1}{\ln(n!)} \geq \frac{1}{n\ln n} \\
\sum_{n=2}^{\infty} \frac{1}{n\ln n} \text{ diverges} \implies \sum_{n=2}^{\infty} \frac{1}{\ln(n!)} \text{ also diverges} \\
\implies \boxed{ \sum_{n=2}^{\infty} \frac{(-1)^{n}}{\ln(n!)} \text{ coverges conditionally} }
}
$$
# 5a
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{1}{(n+2)(n+4)} \\
\\
\text{Solution:} \\
\frac{1}{(n+2)(n+4)} = \frac{1}{2}\left( \frac{n+4}{(n+2)(n+4)} - \frac{n+2}{(n+2)(n+4)} \right) = \frac{1}{2}\left( \frac{1}{n+2} - \frac{1}{n+4} \right) \\
\implies \sum_{n=1}^{\infty} \frac{1}{(n+2)(n+4)} = \frac{1}{2} \sum_{n=1}^{\infty} \left( \frac{1}{n+2}-\frac{1}{n+4} \right) \\
\implies 2S_{N} = \frac{1}{3} - \frac{1}{5} + \frac{1}{4} - \frac{1}{6} + \frac{1}{5} - \frac{1}{7} + \dots + \frac{1}{N+1} - \frac{1}{N+3} + \frac{1}{N+2} - \frac{1}{N+4} = \\
= \frac{1}{3} + \frac{1}{4} - \frac{1}{N+3} - \frac{1}{N+4} \\
\implies S_{N} = \frac{1}{6} + \frac{1}{8} - \frac{1}{2N+6} - \frac{1}{2N+8} \to \frac{1}{6} + \frac{1}{8} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{1}{(n+2)(n+4)} = \frac{1}{6} + \frac{1}{8} = \frac{14}{48} } \\
}
$$
# 5b
$$
\displaylines{
\lim_{ n \to \infty } (e^{1/n} - e^{-1/n})^{\sin(1/n)} \\
\\
\text{Solution:} \\
\text{Let } t = \frac{1}{n} \\
\lim_{ t \to 0 } (e^{t}-e^{-t})^{\sin t} = \lim_{ t \to 0 } \frac{(e^{2t}-1)^{\sin t}}{e^{t\sin t}} = \lim_{ t \to 0 } (e^{2t}-1)^{\sin t} = \lim_{ t \to 0 } e^{\sin t\ln(e^{2t}-1)} \\
\lim_{ t \to 0 } \sin t \ln(e^{2t}-1) = \lim_{ t \to 0 } t\ln(e^{2t}-1) \cdot \frac{\sin t}{t} = \lim_{ t \to 0 } \frac{\ln(e^{2t}-1)}{\frac{1}{t}} \overset{ L }{ = } \lim_{ t \to 0 } \frac{\frac{2e^{2t}}{e^{2t}-1}}{-\frac{1}{t^{2}}} = \\
= -\lim_{ t \to 0 } \frac{2e^{2t}t^{2}}{e^{2t}-1} \overset{ L }{ = } -2 \lim_{ t \to 0 } \frac{\overbrace{ 2e^{2t}t^{2} }^{ \to 0 } + \overbrace{ 2e^{2t}t }^{ \to 0 }}{\underbrace{ 2e^{2t} }_{ \to 1 }} = -2 \cdot 0 = 0 \\
\implies \boxed{ \lim_{ n \to \infty } (e^{1/n} - e^{-1/n})^{\sin(1/n)} = 0 } \\
}
$$
