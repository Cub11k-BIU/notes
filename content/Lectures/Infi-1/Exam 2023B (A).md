---
{"publish":true,"created":"24/02/25, 13:02","modified":"2025-11-21T21:10:14.149+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } x > 3 \\
\text{Prove: } \frac{2\ln(x-2)}{\sqrt{ x+1 }-2} > \frac{4\sqrt{ x+1 }}{x-2} \\
\\
\text{Proof:} \\
\text{Let } f(x) = 2\ln(x-2) \\
f(3) = 0 \\
f'(x) = \frac{2}{x-2} \\
\text{Let } g(x) = \sqrt{ x+1 }-2 \\
g'(x) = \frac{1}{2\sqrt{ x+1 }} \\
g(3) = 0 \\
\text{By the Lagrange theorem: } \exists c \in (3, x): \frac{f(x)}{g(x)} = \frac{f(x)-f(3)}{g(x)-g(3)} = \frac{f'(c)}{g'(c)} \\
\text{Let } h(x) = \frac{f'(x)}{g'(x)} = \frac{4\sqrt{ x+1 }}{x-2} \\
h'(x) = \frac{\frac{2x-4}{\sqrt{ x+1 }} - 4\sqrt{ x+1 }}{(x-2)^{2}} = \frac{2x-4-4x-4}{\sqrt{ x+1 }(x-2)^{2}} = \frac{-2x-8}{\sqrt{ x+1 }(x-2)^{2}} \\
\forall x > 3: h'(x) < 0 \implies \forall 3 < c < x: h(c) > h(x) \\
\implies \frac{f(x)}{g(x)} > h(x) \implies \boxed{ \frac{2\ln(x-2)}{\sqrt{ x+1 }-2} > \frac{4\sqrt{ x+1 }}{x-2} } \\
}
$$
# 2
$$
\displaylines{
\text{Let } f \text{ be a function on } I \\
f \text{ is called continuous in equal measure on } I \text{ if} \\
\forall \Set{ a_{n} }, \Set{ b_{n} } \subseteq I: a_{n} - b_{n} \to 0 \implies f(a_{n}) - f(b_{n}) \to 0 \\
}
$$
## 2a
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{Let } f \text{ be continuous on } [a, b] \\
\text{Prove: } f \text{ is continuous in equal measure on } [a, b] \\
\\
\text{Proof:} \\
\text{Let } \Set{ a_{n} }, \Set{ b_{n} } \subseteq [a, b]: a_{n} - b_{n} \to 0 \\
\\
\text{Let } f(a_{n}) - f(b_{n}) \not\to 0 \\
\implies \exists \varepsilon > 0: \exists n_{k}: \forall k: \lvert f(a_{n_{k}}) - f(b_{n_{k}}) \rvert > \varepsilon \\
\Set{ a_{n_{k}} - b_{n_{k}} } \subseteq \Set{ a_{n} - b_{n} } \implies a_{n_{k}} - b_{n_{k}} \to 0 \\
\Set{ a_{n_{k}} } \subseteq \Set{ a_{n} } \subseteq [a, b] \implies \exists \Set{ a_{n_{k_{j}}} } \to L \in [a, b] \\
\Set{ b_{n_{k_{j}}} } \subseteq \Set{ b_{n} } \subseteq [a, b] \\
a_{n_{k_{j}}} - b_{n_{k_{j}}} \to 0 \implies b_{n_{k_{j}}} \to L \\
\implies f(a_{n_{k_{j}}}) \to f(L), f(b_{n_{k_{j}}}) \to f(L) \\
\implies f(a_{n_{k_{j}}}) - f(b_{n_{k_{j}}}) \to 0 \\
\Set{ f(a_{n_{k_{j}}}) - f(b_{n_{k_{j}}}) } \subseteq \Set{ f(a_{n_{k}}) - f(b_{n_{k}}) } \\
\implies \forall j \in \mathbb{N}: \lvert f(a_{n_{k_{j}}}) - f(b_{n_{k_{j}}}) \rvert \geq \varepsilon - \text{Contradiction!} \\
\implies \boxed{ f(a_{n}) - f(b_{n}) \to 0 } \\
}
$$
## 2b
$$
\displaylines{
\text{Show: } f(x) = x^{2} \text{ is not continuous in equal measure on } [1, \infty) \\
\\
\text{Solution:} \\
\text{Let } a_{n} = n+\frac{1}{n} \\
\text{Let } b_{n} = n \\
a_{n} - b_{n} = \frac{1}{n} \to 0 \\
f(a_{n}) - f(b_{n}) = \left( n+\frac{1}{n} \right)^{2} - n^{2} = n^{2} + 2 + \frac{1}{n^{2}} - n^{2} = 2 + \frac{1}{n^{2}} \to 2 \\
\implies \boxed{ f(a_{n}) - f(b_{n}) \not\to 0 } \\
}
$$
# 3
$$
\displaylines{
\text{Let } a_{n} = \sum_{k=n}^{3n} \frac{1}{k} \\
}
$$
## 3a
$$
\displaylines{
\text{Prove: } a_{n} \text{ converges} \\
\\
\text{Proof:} \\
a_{n+1} - a_{n} = \sum_{k=n+1}^{3n+3} \frac{1}{k} - \sum_{k=n}^{3n} \frac{1}{k} = \frac{1}{3n+1} + \frac{1}{3n+2} + \frac{1}{3n+3} - \frac{1}{n} < \frac{3}{3n} - \frac{1}{n} = 0 \\
\implies a_{n+1} < a_{n} \implies a_{n} \text{ is monotonically descending} \\
a_{n} \geq \sum_{k=n}^{3n} \frac{1}{3n} = \frac{2n}{3n} = \frac{2}{3} \\
\implies a_{n} \text{ is lower-bounded} \implies \boxed{ a_{n} \text{ converges} } \\
}
$$
## 3b
$$
\displaylines{
\text{Prove: } a_{n} \to L \geq \frac{2}{3} \\
\\
\text{Proof:} \\
a_{n} \geq \frac{2}{3} \implies L \geq \frac{2}{3} \\
}
$$
# 4
$$
\displaylines{
\text{Copy of 2024(A)} \\
}
$$
# 5a
$$
\displaylines{
\text{Prove: } (arccot x)' = -\frac{1}{1+x^{2}} \\
\\
\text{Proof:} \\
(f^{-1})' = \frac{1}{f'(f^{-1}(x))} \\
\text{Let } f(x) = \cot x \\
f'(x) = \left( \frac{\cos x}{\sin x} \right)' = \frac{-\sin^{2}x-\cos^{2}x}{\sin^{2}x} = -1 - \cot^{2}x \\
\implies f'(f^{-1}(x)) = -1-\cot^{2}(arccot x) = -1 - x^{2} \\
\boxed{ (f^{-1}(x))' = \frac{1}{-1-x^{2}} = -\frac{1}{1+x^{2}} } \\
}
$$
# 5b
$$
\displaylines{
\text{Find: } \lim_{ x \to 0^{+} } \frac{1}{x}\left( \frac{1}{x^{x}} - 1 \right) \\
\\
\text{Solution:} \\
\frac{1}{x}\left( \frac{1}{x^{x}}-1 \right) = \frac{x^{-x}-1}{x} = \frac{e^{-x\ln x}-1}{x} \\
\lim_{ x \to 0^{+} } x\ln x = \dots = 0 \implies e^{-x\ln x} \to 1 \\
\implies \lim_{ x \to 0^{+} } \frac{e^{-x\ln x}-1}{x} \overset{ L }{ = } \lim_{ x \to 0^{+} } -(x\ln x)'e^{-x\ln x} = -\lim_{ x \to 0^{+} } (\ln x+1) \cdot \lim_{ x \to 0^{+} } e^{-x\ln x} = \\
= -(-\infty) \cdot 1 = \infty \\
\implies \boxed{ \lim_{ x \to 0^{+} } \frac{1}{x}\left( \frac{1}{x^{x}} - 1 \right) = \infty } \\
}
$$
