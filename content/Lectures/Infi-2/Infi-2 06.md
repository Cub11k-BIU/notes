---
{"publish":true,"created":"31/03/25, 12:03","modified":"2025-11-21T21:10:14.376+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Mean value theorem for definite integrals #theorem 
$$
\displaylines{
\text{Let } f \text{ be continuous on } [a, b] \\
\text{Then } \exists c \in [a, b]: \int_{a}^{b} f(x)dx = f(c)(b - a) \\
}
$$
## Definite Integral in the point #definition 
$$
\displaylines{
\int_{a}^{a} f(x)dx = 0
}
$$
## Definite integral on inverse interval #theorem 
$$
\displaylines{
\int_{a}^{b} f(x)dx = -\int_{b}^{a} f(x)dx \\
}
$$
## Area function #definition 
$$
\displaylines{
\text{Let } f \text{ be Riemann-integrable on } [a, b] \\
S \text{ is called an area function of } f \text{ and defined as} \\
S(x) = \int_{a}^{x} f(t)dt \\
}
$$
$$
\displaylines{
\\
\text{Let } f(x) = x \text{ on } [0, 1] \\
\implies S(x) = \frac{x^{2}}{2} \\
S'(x) = f(x) \\
}
$$
## Continuity of area function #theorem 
$$
\displaylines{
\text{Let } f \text{ be a Riemann-integrable function on } [a, b] \\
\text{Let } S \text{ be an area function of } f \\
\text{Then } S \text{ is continuous} \\
\\
\text{Proof:} \\
\text{Let } c \in [a, b] \\
\text{Let } x \to c \\
0 \leq \left\lvert S(x) - S(c) \right\rvert = \left\lvert \int_{a}^{x} f(t)dt - \int_{a}^{c} f(t)dt \right\rvert \\
\int_{a}^{x} f(t)dt = \int_{a}^{c} f(t)d(t) + \int_{c}^{x} f(t)dt \\
\implies \left\lvert \int_{a}^{x} f(t)dt - \int_{a}^{c} f(t)dt \right\rvert = \left\lvert \int_{c}^{x} f(t)dt \right\rvert \leq \int_{c}^{x} \left\lvert f(t) \right\rvert dt \\
f \text{ is Riemann-integrable} \implies \left\lvert f \right\rvert \text{ is Riemann-integrable} \\
\implies \left\lvert f \right\rvert \text{ is bounded} \implies \exists M: \left\lvert f \right\rvert \leq M \\
\implies \int_{c}^{x} \left\lvert f(t) \right\rvert dt \leq \int_{c}^{x} Mdt = M(x - c) \\
x \to c \implies x-c \to 0 \\
0 \leq \left\lvert S(x) - S(c) \right\rvert \leq M(x - c) \to 0 \\
\implies S(x) - S(c) \to 0 \implies \lim_{ x \to c } S(x) = S(c) \implies \boxed{ S \text{ is continuous on } [a, b] } \\
}
$$
## Fundamental theorem of Calculus (Part 1) #theorem 
$$
\displaylines{
\text{Let } f \text{ be continuous on } [a, b] \\
\text{Then } S(x) = \int_{a}^{x} f(t)dt \text{ is differentiable and } S'(x) = f(x) \\
\\
\text{Proof:} \\
\text{Let } c \in [a, b] \\
S'(c) =\lim_{ h \to 0 } \frac{S(c+h)-S(c)}{h} = \lim_{ h \to 0 } \frac{\left( \int_{a}^{c+h} f(t)dt - \int_{a}^{c} f(t)dt \right)}{h} = \\
= \lim_{ h \to 0 } \frac{\int_{c}^{c+h} f(t)dt}{h} \\
f \text{ is continuous } \implies \exists d \in [c, c+h]: \int_{c}^{c+h} f(t)dt = f(d)(c+h - c) = f(d)h \\
\implies \lim_{ h \to 0 } \frac{\int_{c}^{c+h} f(t)dt}{h} = \lim_{ h \to 0 } \frac{f(d)h}{h} = \lim_{ h \to 0 } f(d) \\
c \leq d \leq \underbrace{ c+h }_{ \to c + 0 = c } \implies d \to c \\
f \text{ is continuous } \implies f(d) \to f(c) \\
\implies S'(c) = \lim_{ h \to 0 } f(d) = f(c) \\
}
$$
## Fundamental theorem of Calculus (Part 2) aka Newton-Leibniz theorem #theorem 
$$
\displaylines{
\text{Let } f \text{ be Riemann-integrable on } [a, b] \\
\text{Let } F \text{ be continuous and a primitive of } f \\
\text{Then } \int_{a}^{b} f(x)dx = F(b) - F(a) \\
\\
\text{Proof:} \\
\text{Let } f \text{ be continuous} \\
F' - S' = f - f = 0 \implies \exists C: \forall x \in [a, b]: F(x) = S(x) + C \\
\int_{a}^{b} f(t)dt = \int_{a}^{b} f(t)dt - 0 = \int_{a}^{b} f(t)dt - \int_{a}^{a} f(t)dt = \\
= S(b) - S(a) = F(b) + C - F(a) - C = F(b) - F(a) \\
\\
\text{Let f be non-continuous} \\
F \text{ is continuous on } [a, b] \text{ and differentiable on } (a, b) \\
\implies \exists c \in (a, b): F'(c)(b-a) = F(b) - F(a) \\
\text{Let } a = x_{0} < x_{1} < \dots < x_{n} = b \\
F(b) - F(a) = F(x_{n}) - F(x_{0}) = \\
= F(x_{n}) + (-F(x_{n-1}) + F(x_{n-1})) + \dots + (-F(x_{1}) + F(x_{1})) - F(x_{0}) = \\
= (F(x_{n}) - F(x_{n-1})) + (F(x_{n-1}) - F(x_{n-2})) + \dots + (F(x_{2}) - F(x_{1})) + (F(x_{1}) - F(x_{0})) \\
F(b) - F(a) = \sum_{i=1}^{n} (F(x_{i}) - F(x_{i-1})) \\
\forall i \in [1, n]: \exists c_{i} \in [x_{i-1}, x_{i}]: F(x_{i}) - F(x_{i-1}) = F'(c_{i})(x_{i} - x_{i-1}) \\
\implies \sum_{i=1}^{n} (F(x_{i}) - F(x_{i-1})) = \sum_{i=1}^{n} f(c_{i})\Delta x_{i} = S(f, P, C) \\
\text{Where } \begin{array}{}
P = \Set{ x_{0}, x_{1}, \dots, x_{n} } \\
C = \Set{ c_{1}, c_{2}, \dots, c_{n} } \\
\end{array} \\
\implies \lim_{ \lambda(P) \to 0 } F(b) - F(a) = \lim_{ \lambda(P) \to 0 } S(f, P, C) \\
\implies F(b) - F(a) = \int_{a}^{b} f(x)dx \\
}
$$
---
$$
\displaylines{
\text{The following notation can be used: } \\
F(b) - F(a) = F(x) \Big|_{x = a}^{x = b}
}
$$
---
$$
\displaylines{
\text{Let } f(x) = \left\{\begin{array}{}
1 & 0 \leq x \leq 1 \\
0 & 1 < x \leq 2 \\
\end{array}\right. \text{ on } [0, 2] \\
f \text{ is Riemann-integrable by Lebesgue criterion, it is bounded and has one discontinuity} \\
\text{But, by Darboux theorem, there is no primitive of } f \text{ because it has a jump discontinuity} \\
\\
\text{Even more than that, if } f \text{ has a primitive, it does not imply that } f \text{ is Riemann-integrable} \\
F(x) = \left\{\begin{array}{}
x^{2}\sin\left( \frac{1}{x^{3}} \right) & x \neq 0 \\
0 & x = 0 \\
\end{array}\right. \\
F'(0) = \lim_{ h \to 0 } \frac{F(h) - F(0)}{h} = \lim_{ h \to 0 } \frac{F(h)}{h} = \lim_{ h \to 0 } h\sin\left( \frac{1}{h^{3}} \right) = 0 \\
x \neq 0 \implies F'(x) = 2x\sin\left( \frac{1}{x^{3}} \right)  + \left( -\frac{3}{x^{2}} \right)\cos\left( \frac{1}{x^{3}} \right) \\
\implies F'(x) = f(x) = \left\{\begin{array}{}
2x\sin\left( \frac{1}{x^{3}} \right) - \frac{3}{x^{2}}\cos\left( \frac{1}{x^{3}} \right) & x \neq 0 \\
0 & x = 0 \\
\end{array}\right. \\
f \text{ is not bounded because of } \frac{3}{x^{2}}, \text{ when } x \to 0 \\
\implies f \text{ is not Riemann-integrable, but it does have a primitive} - F(x) \\
}
$$
---
$$
\displaylines{
\lim_{ x \to 0 } \frac{\int_{0}^{x} \sin(t^{2})dt}{x^{3}} = ??? \\
}
$$
---
