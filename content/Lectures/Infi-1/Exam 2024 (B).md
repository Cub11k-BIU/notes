---
{"publish":true,"created":"23/02/25, 12:02","modified":"2025-11-21T21:10:14.165+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# 1a
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
# 1b
$$
\displaylines{
\text{Let } f: \mathbb{R} \to \mathbb{R} \text{ be a function} \\
\text{Let } f \text{ be continuous on } \mathbb{R} \\
\text{Prove or disprove: } f(x) = x \text{ has a solution} \iff f(f(x)) = x \text{ has a solution} \\
\\
\text{Proof:} \\
\text{Let } \exists c \in \mathbb{R}: f(c) = c \\
\implies f(f(c)) = f(c) = c \\
\\
\text{Let } \exists c \in \mathbb{R}: f(f(c)) = c \\
\text{Let } g(x) = f(x) - x \\
g \text{ is continuous on } \mathbb{R} \\
g(c) = f(c) - c \\
g(f(c)) = f(f(c)) - f(c) = c - f(c) \\
\text{If } f(c) - c = 0 \text{ then } \boxed{ f(c) = c } \\
\text{If } f(c) - c \neq 0 \implies g(c) \cdot g(f(c)) < 0 \\
\implies \text{By the intermediate value theorem: } \exists d \in (c, f(c)): g(d) = 0 \\
\implies \boxed{ f(d) = d } \\
}
$$
# 2a
$$
\displaylines{
\text{Find: } \lim_{ n \to \infty } (e^{1/n} - e^{-1/n})^{\sin(1/n)} \\
\\
\text{Solution:} \\
\text{Let } t = \frac{1}{n} \\
(e^{t}-e^{-t})^{\sin t} = \left( \frac{e^{2t}-1}{e^{t}} \right)^{\sin t} = e^{\ln\left( \frac{e^{2t}-1}{e^{t}} \right)\sin t} = e^{\ln(e^{2t-1})\sin t-\ln(e^{t})\sin t} = \\
= e^{\ln(e^{2t}-1)\sin t - t\sin t} \\
\lim_{ t \to 0 } \frac{\ln(e^{2t}-1)}{\frac{1}{\sin t}} = \lim_{ t \to 0 } \frac{t\ln(e^{2t}-1)}{\frac{t}{\sin t}} = \lim_{ t \to 0 } \frac{\ln(e^{2t}-1)}{\frac{1}{t}} = \\
\overset{ L }{ = } \lim_{ t \to 0 } \frac{\frac{2e^{2t}}{e^{2t}-1}}{-\frac{1}{t^{2}}} = \lim_{ t \to 0 } \frac{2e^{2t}t^{2}}{1-e^{2t}} \overset{ L }{ = } \lim_{ t \to 0 } \frac{4e^{2t}t^{2} + 4e^{2t}t}{1-\underbrace{ 2e^{2t} }_{ \to 2 }} \to \frac{0+0}{-1} = 0 \\
}
$$
# 2b
$$
\displaylines{
\text{Find: } \lim_{ n \to \infty } \left( 1+\frac{1}{n} \right)^{(-1)^{n} \cdot n} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \left( 1+\frac{1}{n} \right)^{(-1)^{n} \cdot n} \\
a_{2n} = \left( 1+\frac{1}{2n} \right)^{2n} \to e \\
a_{2n-1} = \left( 1+\frac{1}{2n-1} \right)^{-(2n-1)} = \frac{1}{\left( 1+\frac{1}{2n-1} \right)^{2n-1}} \to \frac{1}{e} \\
\lim_{ n \to \infty } a_{2n} \neq \lim_{ n \to \infty } a_{2n-1} \implies \boxed{ \not\exists \lim_{ n \to \infty } a_{n} } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } a_{n} \text{ be monotonically non-increasing} \\
\text{Prove or disprove: } \sum_{n=1}^{\infty} a_{n} \text{ converges} \implies na_{n} \to 0 \\
\\
\text{Proof:} \\
\text{Let } \sum_{n=1}^{\infty} a_{n} \text{ converges} \\
\implies \sum_{n=1}^{\infty} 2^{n}a_{2^{n}} \text{ converges} \\
\implies a_{n} \to 0 \text{ and } 2^{n}a_{2^{n}} \to 0 \\
\forall n \in \mathbb{N}: \exists k \in \mathbb{N}: 2^{k} \leq n \leq 2^{k+1} \\
a_{n} \text{ is monotonically non-increasing} \implies a_{2^{k+1}} \leq a_{n} \leq a_{2^{k}} \\
\implies 2^{k}a_{2^{k+1}} \leq na_{n} \leq 2^{k+1}a_{2^{k}} \\
\implies \frac{1}{2}\underbrace{ 2^{k+1}a_{2^{k+1}} }_{ \to 0 } \leq na_{n} \leq 2 \cdot \underbrace{ 2^{k}a_{2^{k}} }_{ \to 0 } \\
\implies \boxed{ na_{n} \to 0 } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } a_{n} \text{ be monotonically non-increasing} \\
\text{Prove or disprove: } na_{n} \to 0 \implies \sum_{n=1}^{\infty} a_{n} \text{ converges} \\
\\
\text{Disproof:} \\
\text{Let } a_{n} = \frac{1}{n\ln n} \\
na_{n} = \frac{1}{\ln n} \to 0 \\
\sum_{n=1}^{\infty} 2^{n}a_{2^{n}} = \sum_{n=1}^{\infty} \frac{2^{n}}{2^{n}n\ln(2)} = \frac{1}{\ln(2)}\sum_{n=1}^{\infty} \frac{1}{n} \text{ diverges} \\
\implies \boxed{ \sum_{n=1}^{\infty} a_{n} \text{ diverges} } \\
}
$$
# 4a
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
# 4b
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
