---
{"publish":true,"created":"04/05/25, 11:05","modified":"2025-11-21T21:10:14.398+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Function sequences #definition 
$$
\displaylines{
\text{Function sequence is a sequence in which each element is a function} \\
\text{For example:} \\
f_{n}(x) = x^{n} \\
f_{1}(x) = x, f_{2}(x) = x^{2}, f_{3}(x) = x^{3}, \dots \\
}
$$
## Pointwise convergence #definition 
$$
\displaylines{
\Set{ f_{n}(x) } \text{ is called point-convergent on set} A \text{ if} \\
\forall x_{0} \in A: \forall \varepsilon > 0: \exists N_{\varepsilon}: \forall n > N_{\varepsilon}: \left\lvert f_{n}(x_{0}) - f(x_{0}) \right\rvert < \varepsilon \\
f(x) \text{ is then called a pointwise limit of } f_{n} \\
f_{n} \to f \\
\\
\text{Note: } N_{\varepsilon} \text{ depends both on } \varepsilon \text{ and } x_{0} \in A \\
\text{Hence pointwise convergence} \\
}
$$
---
$$
\displaylines{
f_{n}(x) = x^{n} \text{ on } [0, 1] \\
x < 1 \implies f_{n}(x) = x^{n} \to 0 \\
x = 1 \implies f_{n}(x) = 1^{n} = 1 \to 1 \\
f(x) = \left\{\begin{array}{}
0 & x \in [0, 1) \\
1 & x = 1 \\
\end{array}\right. \\
f_{n} \to f \\
}
$$
---
$$
\displaylines{
f_{n}(x) = x^{2} + \frac{x}{n} + \frac{7}{n^{2}} \\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } \left( x^{2} + \underbrace{ \frac{x}{n} }_{ \to 0 } + \underbrace{ \frac{7}{n^{2}} }_{ \to 0 } \right) = x^{2} \\
f(x) = x^{2} \\
f_{n} \to f \\
}
$$
---
$$
\displaylines{
\lim_{ n \to \infty } \frac{n^{2}x^{6}}{n^{2}+x^{6}} = \lim_{ n \to \infty } \frac{x^{6}}{1 + \underbrace{ \frac{x^{6}}{n^{2}} }_{ \to 0 }} = x^{6} \\
}
$$
---
$$
\displaylines{
\lim_{ n \to \infty } \sqrt{ n^{2}x^{2}+x^{4} }-nx = \lim_{ n \to \infty } \frac{x^{4}}{\sqrt{ n^{2}x^{2}+x^{4} }+nx} \\
x > 0 \implies f_{n} \to 0 \\
x = 0 \implies f_{n}(x) = 0 \\
x < 0 \implies f_{n}(x) = \underbrace{ \sqrt{ n^{2}x^{2} + x^{4} } }_{ \to \infty } - \underbrace{ nx }_{ \to -\infty } \to \infty \\
f(x) = 0 \text{ on } [0, \infty) \\
f_{n} \to f \\
}
$$
---
$$
\displaylines{
f_{n}(x) = n\arctan\left( \frac{x}{n} \right) \\
\lim_{ n \to \infty } \frac{\arctan\left( \frac{x}{n} \right)}{\frac{1}{n}} \overset{ t = \frac{1}{n} }{ = } \lim_{ t \to 0 } \frac{\arctan(tx)}{t} \overset{ L }{ = } \lim_{ t \to 0 } \frac{x}{1 + (tx)^{2}} = x \\
}
$$
---
$$
\displaylines{
f_{n}(x) = n^{2}\ln\left( 1+\sin\left( \frac{x^{9}}{n^{2}} \right) \right) \\
\lim_{ n \to \infty } n^{2}\ln\left( 1+\sin\left( \frac{x^{9}}{n^{2}} \right) \right) = \lim_{ n \to \infty } \frac{x^{9} \cdot \ln\left( 1 + \sin\left( \frac{x^{9}}{n^{2}} \right) \right)}{\frac{\frac{x^{9}}{n^{2}}}{\sin\left( \frac{x^{9}}{n^{2}} \right)} \cdot \sin\left( \frac{x^{9}}{n^{2}} \right)} = \\
= \lim_{ t \to 0 } x^{9} \cdot \frac{\ln(1 + \sin(t))}{\sin(t)} \cdot \frac{\sin(t)}{t} = x^{9} \\
x = 0 \implies f_{n}(x) = 0 = x^{9} \\
}
$$
---
$$
\displaylines{
f_{n}(x) = \sin^{4n}(x) \\
\lim_{ n \to \infty } \sin^{4n}(x) = \lim_{ n \to \infty } (\sin^{4}(x))^{n} = \left\{\begin{array}{}
1 & \sin^{4}(x) = 1 \\
0 & \sin^{4}(x) \neq 1 \\
\end{array}\right. = \left\{\begin{array}{}
1 & x = \frac{\pi}{2} + \pi k \\
0 & \text{otherwise} \\
\end{array}\right. \\
}
$$
---
$$
\displaylines{
f_{n}(x) = \left\{\begin{array}{}
1 & x \in \left[ 0, \frac{1}{n} \right] \\
0 & \text{otherwise} \\
\end{array}\right. \text{ on } [0, 1] \\
x = 0 \implies f_{n}(x) = 1 \to 1 \\
x > 0 \implies \forall n > \frac{1}{x}: f_{n}(x) = 0 \to 0 \\
\implies f = \left\{\begin{array}{}
1 & x = 0 \\
0 & \text{otherwise} \\
\end{array}\right. \text{ on } [0, 1] \\
}
$$
---
$$
\displaylines{
\text{Let } f_{n} \to f \\
\text{Let } f_{n} \text{ be continuous} \\
\text{Is } f \text{ necessarily continuous?} \\
\text{No: } f_{n}(x) = x^{n}, f(x) = \left\{\begin{array}{}
1 & x = 1 \\
0 & x \in [0, 1) \\
\end{array}\right. \\
\\
\text{Let } f_{n}, f \text{ be differentiable} \\
\text{Does necessarily } f_{n}' \to f' ? \\
\text{No: } f_{n}(x) = \frac{\sin(n^{8}x)}{n} \to 0 \\
f_{n}'(x) = n^{7}\cos(n^{8}x) \text{ doesn't converge} \\
\\
\text{Let } f_{n}, f \text{ be Riemann-integrable on } [a, b] \\
\text{Does necessarily } \int_{a}^{b} f_{n}(x) \, dx \to \int_{a}^{b} f(x) \, dx? \\
\text{No: } f_{n}(x) = \left\{\begin{array}{}
n & x \in \left[ 0, \frac{1}{n} \right] \\
0 & \text{otherwise} \\
\end{array}\right. \to 0 \\
\int_{0}^{1} f_{n}(t) \, dt = \int_{0}^{1/n} f_{n}(t) \, dt  + \int_{\frac{1}{n}}^{1} f_{n}(t) \, dt = nt\Bigg|^{t=1/n}_{t=0} + C\Bigg|^{t=1}_{t=\frac{1}{n}} = 1 \\
}
$$
