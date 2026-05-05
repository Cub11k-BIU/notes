---
{"publish":true,"created":"11/01/26, 18:06","modified":"2026-03-24T14:59:39.176+02:00","tags":["Academia","#Practice","Probability"],"cssclasses":""}
---

## Convergence of Geometric distribution to the Exponential one
$$
\displaylines{
\text{Let there be a Poisson process with rate } \lambda \\
\text{Let } t = \frac{k}{n} \\
\text{Let there be } k \text{ subintervals of length } \frac{1}{n} \\
[0, t) = \left[ 0, \frac{1}{n} \right) \cup \left[ \frac{1}{n}, \frac{2}{n} \right) \cup \dots \cup \left[ \frac{k-1}{n}, t \right) \\
\text{Let } \forall i \in [1, k]: X_{i} = \text{there is an occurence in the } i\text{-th subinterval} \\
X_{i} \sim Ber(p), E[X_{i}] = p = \lambda \cdot \frac{1}{n} \\
\text{Let } X \sim Geom\left( \lambda \cdot \frac{1}{n} \right) \\
P(X > k) = (1-p)^{k} = \left( 1-\lambda \cdot \frac{1}{n} \right)^{nt} = \lrs{\lrp{1 + \frac{1}{\left( -\frac{n}{\lambda} \right)}}^{\frac{-n}{\lambda}}}^{-\lambda t} \underset{ n \to \infty }{ \to } e^{-\lambda t} \\
\implies P(X \leq k) \underset{ n \to \infty }{ \to } 1 - e^{-\lambda t} \\
\\
P(X \leq k) = P(X \leq nt) = P\left( \frac{1}{n}X \leq t \right) \\
\text{Let } Y \sim Exp(\lambda) \\
P\left( \frac{1}{n}X \leq t \right) \underset{ n \to \infty }{ \to } P(Y \leq t) = 1 - e^{-\lambda t} \\
}
$$
---
$$
\displaylines{
\text{The PDF of } X \text{ is given by } f(x) = \begin{eqsys}
\frac{10}{x^{2}} & x > 10 \\
0 & x \leq 10 \\
\end{eqsys} \\
\text{Where } X = \text{lifetime of a device in hours} \\
\text{Find } P(X > 20) \\
\text{Find CDF of} X \\
\text{Find the probability that among 6 devices at least 3 will live at least 15 hours} \\
\\
\text{Solution:} \\
P(X > 20) = P(X \in (20, \infty)) = \int_{20}^{\infty} f(x) \, dx = \int_{20}^{\infty} \frac{10}{x^{2}} \, dx = \lim_{ b \to \infty } -\frac{10}{b} + \frac{1}{2} = \frac{1}{2} \\
\\
\forall k \in (-\infty, 10]: F(k) = 0 \\
\forall k > 10: F(k) = P(X \leq k) = P(X \in (-\infty, k)) = \int_{-\infty}^{k} f(x) \, dx = \\
= \int_{10}^{k} \frac{10}{x^{2}} \, dx = -\frac{10}{k} + \frac{10}{10} = \frac{k-10}{k} \\
\implies F(x) = \begin{cases}
\frac{x-10}{x} & x > 10 \\
0 & x \leq 10 \\
\end{cases} \\
\\
\text{Assume 6 devices have independent lifetimes with identical PDFs} \\
\text{Let } \forall i \in [1, 6]: Y_{i} = \begin{cases}
1 & i\text{-th devices lives at least 15 hours} \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Let } Y = \sum_{i=1}^{6} Y_{i} \\
Y_{i} \sim Ber(p) \text{ where } p = P(X \geq 15) = 1 - P(X \leq 15) = 1 - F(15) \\
Y \sim Bin(6, p) \\
\implies P(Y \geq 3) = 1 - P(Y \leq 2) = \dots \\
}
$$
---
$$
\displaylines{
\text{Let } X \text{ be a continuous random variable with CDF } F_{X} \text{ and PDF } f_{X} \\
\text{Find } f_{Y} \text{ where } Y = 2X \\
\\
\text{Solution:} \\
F_{Y}(y) = P(Y \leq y) = P(2X \leq y) = P\left( X \leq \frac{y}{2} \right) = F_{X}\left( \frac{y}{2} \right) \\
f_{Y} = \frac{dF_{Y}}{dy} \implies f_{Y}(y) = \frac{1}{2} f_{X}\left( \frac{y}{2} \right) \\
}
$$
---
$$
\displaylines{
\text{Let } \theta \in \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right] \text{ be chosen randomly and uniformly} \\
\text{Let } Y = \sin(\theta) \\
\text{Find PDF, CDF of } Y \\
\text{Find } E[Y], Var(Y) \\
\\
\text{Solution:} \\
F_{Y}(y) = P(Y \leq y) = P(\sin(\theta) \leq y) = P(\theta \leq \arcsin(y)) = P\left( \theta \in \left[ -\frac{\pi}{2}, \arcsin(y) \right] \right) = \\
= \frac{\left( \arcsin(y)-\frac{-\pi}{2} \right)}{\frac{\pi}{2} - \frac{-\pi}{2}} = \frac{\arcsin(y)}{\pi} + \frac{1}{2} \\
\implies \boxed{ F_{Y}(y) = \begin{cases}
0 & y < -1 \\
\frac{\arcsin(y)}{\pi} + \frac{1}{2} & y \in [-1, 1] \\
1 & y > 1 \\
\end{cases} } \\
\implies \boxed{ f_{Y}(y) = F_{Y}'(y) = \begin{cases}
\frac{1}{\pi \sqrt{ 1-y^{2} }} & y \in [-1, 1] \\
0 & \text{otherwise} \\
\end{cases} } \\
\\
E[Y] = \int_{-\infty}^{\infty} yf_{Y}(y) \, dy = \int_{-1}^{1} \frac{y}{\pi \sqrt{ 1-y^{2} }} \, dy = \dots \\
\text{An alternative way to solve it is:} \\
E[Y] = E[\sin(\theta)] = \int_{-\infty}^{\infty} \sin(\theta)f_{\theta}(\theta) \, d\theta = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{\sin(\theta)}{\pi} \, d\theta = \frac{1}{\pi} \cdot 0 = 0 \\
\implies \boxed{ E[Y] = 0 } \\
Var(Y) = E[Y^{2}] - E[Y]^{2} = E[Y^{2}] \\
E[Y^{2}] = E[\sin^{2}(\theta)] = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{\sin^{2}(\theta)}{\pi} \, d\theta = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{1-\cos(2\theta)}{2\pi} \, d\theta = \\
= \frac{1}{2\pi}(\pi - 0) = \frac{1}{2} \\
\implies \boxed{ Var(Y) = \frac{1}{2} } \\
}
$$
---
