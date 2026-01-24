---
{"publish":true,"created":"21/01/26, 13:01","modified":"2026-01-21T15:28:49.213+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## Conditional distributions
$$
\displaylines{
\text{Conditiona probability: } P(Y \mid X) = \frac{P(X, Y)}{P(X)} \\
\text{Conditional probability density function: } \boxed{ f_{Y \mid X}(y \mid x) = \frac{f_{X,Y}(x, y)}{f_{X}(x)} } \\
\\
\text{Proof:} \\
P(Y \in B \mid X = x) = \lim_{ dx \to 0 } \frac{P(Y \in B, X \in [x, x+dx])}{P(X \in [x, x+dx])} = \lim_{ dx \to 0 } \frac{\int_{B} \int_{x}^{x+dx} f_{X,Y}(t,y) \, dtdy }{\int_{x}^{x+dx} f_{X}(t) \, dt } \\
\int_{x}^{x+dx} f_{X}(t) \, dt \approx f_{X}(x)dx \\
\int_{B} \int_{x}^{x+dx} f_{X,Y}(t,y) \, dtdy \approx \left( \int_{B} f_{X,Y}(t, y) dy \right) \cdot dx \\
\implies \lim_{ dx \to 0 } \frac{\int_{B} \int_{x}^{x+dx} f_{X,Y}(t,y) \, dtdy }{\int_{x}^{x+dx} f_{X}(t) \, dt } = \frac{\int_{B} f_{X,Y}(t,y) \, dy}{f_{X}(x)} = \frac{f_{X,Y}(x, y)}{f_{X}(x)} \\
}
$$
### Bayes formula
$$
\displaylines{
f_{Y \mid X}(y \mid x) = \frac{f_{X,Y}(x, y)}{f_{X}(x)} \\
f_{X \mid Y}(x \mid y) = \frac{f_{X,Y}(x, y)}{f_{Y}(y)} \\
\\
\implies f_{Y \mid X}(y \mid x)f_{X}(x) = f_{X \mid Y}(x \mid y)f_{Y}(y) \\
\implies \boxed{ f_{Y \mid X}(y \mid x) = \frac{f_{X \mid Y}(x \mid y) \cdot f_{Y}(y)}{f_{X}(x)} } \\
}
$$
### Law of total probability
$$
\displaylines{
\text{Let } E \text{ be an event} \\
\text{Then } \boxed{ P(E) = \int_{-\infty}^{\infty} P(E \mid X = x)f_{X}(x) \, dx } \\
}
$$
### Conditional expectation #definition 
$$
\displaylines{
\boxed{ E[Y \mid X = x] = \int_{-\infty}^{\infty} y \cdot f_{Y \mid X}(y \mid x) \, dy = \frac{1}{f_{X}(x)}\int_{-\infty}^{\infty} y \cdot f_{X,Y}(x, y) \, dy } \\
\\
E[Y \mid X]: \mathrm{Im}X \to \mathbb{R} \text{ is then a function}, \text{and also a random variable} \\
\\
\\
E[Y] = \int_{-\infty}^{\infty} yf_{Y}(y) \, dy \\
f_{Y}(y) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) \, dx \\
\implies E[Y] = \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} y \cdot f_{X,Y}(x, y) \, dy \, dx = \int_{-\infty}^{\infty} E[Y \mid X = x]f_{X}(x) \, dx \\
\\
\text{Let } G(X) = E[Y \mid X] \\
E[G(X)] = \int_{-\infty}^{\infty} G(x)f_{X}(x) \, dx = \int_{-\infty}^{\infty} E[Y \mid X = x]f_{X}(x) \, dx \\
\implies \boxed{ E[Y] = \int_{-\infty}^{\infty} E[Y \mid X = x]f_{X}(x) \, dx = E[E[Y \mid X]] } \\
\text{This is also called a tower property} \\
}
$$
### Law of total variance #theorem  
$$
\displaylines{
\text{By definition, } \boxed{ Var(Y \mid X) = E[Y^{2} \mid X] - E[Y \mid X]^{2} } \\
\\
\text{Then } Var(Y) = E[Var(Y \mid X)] + Var(E[Y \mid X]) \\
\\
\text{Proof:} \\
Var(Y) = E[Y^{2}] - E[Y]^{2} = E[E[Y^{2} \mid X]] - E[E[Y \mid X]]^{2} = \\
= E[Var(Y \mid X) + E[Y \mid X]^{2}] - E[E[Y \mid X]]^{2} = \\
= E[Var(Y \mid X)] + E[E[Y \mid X]^{2}] - E[E[Y \mid X]]^{2} \\
\text{Let } Z = E[Y \mid X] \\
\implies Var(Y) = E[Var(Y \mid X)] + E[Z^{2}] - E[Z]^{2} = E[Var(Y \mid X)] + Var(Z) \\
\implies \boxed{ Var(Y) = E[Var(Y \mid X)] + Var(E[Y \mid X]) } \\
}
$$
### Example
$$
\displaylines{
\text{Let } (X, Y) \text{ be uniformly distributed on } D = \Set{ (x, y) \mid 0 < x < y < 1 } \\
\text{Find } f_{Y \mid X}(y \mid x) \\
\text{Find } E[Y] \\
\\
\text{Solution:} \\
f_{X, Y}(x, y) = \begin{cases}
2 & (x, y) \in D \\
0 & (x, y) \not\in D \\
\end{cases} \\
\int_{-\infty}^{\infty} f_{X,Y}(x, y) \, dy = \int_{x}^{1} 2 \, dy = 2(1-x) \\
\implies f_{X}(x) = \begin{cases}
2(1-x) & x \in (0, 1) \\
0 & \text{otherwise} \\
\end{cases} \\
\implies \boxed{ f_{Y \mid X}(y \mid x) = \begin{cases}
\frac{1}{1-x} & 0 < x < y < 1 \\
0 & \text{otherwise} \\
\end{cases} } \\
E[Y \mid X = x] = \frac{x+1}{2} \\
\implies E[Y] = E[E[Y \mid X]] = \int_{-\infty}^{\infty} E[Y \mid X = x]f_{X}(x) \, dx = \int_{0}^{1} \frac{x+1}{2} \cdot 2(1-x) \, dx = \\
= \int_{0}^{1} 1-x^{2} \, dx = 1 - \frac{1}{3} = \frac{2}{3} \\
\implies \boxed{ E[Y] = \frac{2}{3} } \\
}
$$
### Example
$$
\displaylines{
\text{Let } X \text{ be uniformly distributed on } (0, 1) \\
\text{Conditionally on } X = x \text{ let } (Y \mid X = x) \sim Bin(n, x) \\
\text{Find } E[Y], Var(Y) \\
\\
\text{Solution:} \\
E[Y \mid X = x] = nx \implies E[Y \mid X] = nX \\
\boxed{ E[Y] = E[E[Y \mid X]] = E[nX] = nE[X] = \frac{n}{2} } \\
Var(Y) = E[Var(Y \mid X)] + Var(E[Y \mid X]) \\
Var(Y \mid X = x) = nx(1-x) \implies Var(Y \mid X) = nX(1-X) \\
Var(E[Y \mid X]) = Var(nX) = n^{2}Var(X) = \frac{n^{2}}{12} \\
\implies Var(Y) = E[nX - nX^{2}] + \frac{n^{2}}{12} = \\
= nE[X] - nE[X^{2}] + \frac{n^{2}}{12} = \frac{n}{2} - \frac{n}{3} + \frac{n^{2}}{12} \\
\implies \boxed{ Var(Y) = \frac{n}{6} + \frac{n^{2}}{12} } \\
}
$$
### Example
$$
\displaylines{
\text{Let } X \sim \mathcal{N}(0, 1) \\
\text{Let } (Y \mid X = x) \sim \mathcal{N}(x, 1) \\
\text{Find } E[Y], Var(Y) \\
\\
\text{Solution:} \\
E[Y \mid X = x] = x \implies E[Y \mid X] = X \\
Var(Y \mid X = x) = 1 \implies Var(Y \mid X) = 1 \\
\implies E[Y] = E[E[Y \mid X]] = E[X] = 0 \\
Var(Y) = E[Var(Y \mid X)] + Var(E[Y \mid X]) = \\
= E[1] + Var(X) = 1 + 1 = 2 \\
\implies \boxed{ E[Y] = 0, Var(Y) = 2 } \\
}
$$
---
## Sums of independent random variables
$$
\displaylines{
\text{Let } X, Y \text{ be independent random variables} \\
F_{X+Y}(a) = P(X+Y \leq a) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} 1_{\Set{ X+Y \leq a }} f_{X}(x)f_{Y}(y) \, dx  \, dy = \\
= \int_{-\infty}^{\infty} \lrp{\int_{-\infty}^{a-y} f_{X}(x) \, dx} f_{Y}(y) \, dy = \int_{-\infty}^{\infty} F_{X}(a-y)f_{Y}(y) \, dy \\
F_{X+Y} \text{ is then called a convolution of } X \text{ and } Y \\
\boxed{ F_{X+Y}(a) = \int_{-\infty}^{\infty} F_{X}(a-y)f_{Y}(y) \, dy } \\
\\
f_{X+Y}(a) = \frac{dF_{X+Y}}{da}(a) = \frac{d}{da} \int_{-\infty}^{\infty} F_{X}(a-y)f_{Y}(y) \, dy = \\
= \int_{-\infty}^{\infty} \left( \frac{d}{da} F_{X}(a-y) \right)f_{Y}(y) \, dy = \int_{-\infty}^{\infty} f_{X}(a-y)f_{Y}(y) \, dy \\  
f_{X+Y} \text{ is then called a convolution of density} \\
\boxed{ f_{X+Y}(a) = \int_{-\infty}^{\infty} f_{X}(a-y)f_{Y}(y) \, dy } \\
}
$$
### Example
$$
\displaylines{
\text{Let } X, Y \text{ be independently uniformly distributed on } (0, 1) \\
\text{Find } f_{X+Y} \\
\\
\text{Solution:} \\
f_{X+Y}(a) = \int_{-\infty}^{\infty} f_{X}(a-y)f_{Y}(y) \, dy = \int_{0}^{1} f_{X}(a-y) \, dy \\
a < 0 \implies f_{X+Y}(a) = 0 \\
a \geq 2 \implies f_{X+Y}(a) = 0 \\
a \in [0, 1] \implies a-y \in [-y, 1-y] \implies \int_{0}^{1} f_{X}(a-y) \, dy = \int_{0}^{a} 1 \, dy = a \\
a \in (1, 2) \implies a-y \in (1-y, 2-y) \implies \int_{0}^{1} f_{X}(a-y) \, dy = \int_{a-1}^{1} 1 \, dy = 2 - a \\
\implies f_{X+Y}(a) = \begin{cases}
a & a \in [0, 1] \\
2-a & a \in (1, 2) \\
0 & \text{otherwise} \\
\end{cases} \\
}
$$
### Example
$$
\displaylines{
\text{Let } X \sim Pois(\lambda_{1}), Y \sim Pois(\lambda_{2}) \text{ be independent} \\
\text{Find PMF of } X+Y \\
\\
\text{Solution:} \\
P(X = k) = e^{-\lambda} \frac{\lambda_{1}^{k}}{k!} \\
P(Y = k) = e^{-\lambda} \frac{\lambda_{2}^{k}}{k!} \\
P(X+Y = n) = \sum_{k=0}^{n} P(X = k)P(Y = n-k) = \sum_{k=0}^{n} e^{-\lambda_{1}-\lambda_{2}} \frac{\lambda_{1}^{k}\lambda_{2}^{n-k}}{k!(n-k)!} = \\
= \frac{e^{-\lambda_{1}-\lambda_{2}}}{n!} \cdot \sum_{k=0}^{n} \binom{n}{k} \lambda_{1}^{k}\lambda_{2}^{n-k} = e^{-(\lambda_{1}+\lambda_{2})}\frac{(\lambda_{1}+\lambda_{2})^{n}}{n!} \\
\implies \boxed{ X+Y \sim Pois(\lambda_{1} + \lambda_{2}) } \\
}
$$
### Example
$$
\displaylines{
\text{Let } X \sim Bin(n, p), Y \sim Bin(m, p) \\
\text{Find PMF of } X+Y \\
\\
\text{Solution:} \\
X \text{ is the number of successes in } n \text{ trials} \\
Y \text{ is the number of successes in } m \text{ trials} \\
\implies X+Y \text{ is the number of successes in } n+m \text{ trials} \\
\boxed{ X+Y \sim Bin(n + m, p) } \\
\text{Note that this is only true for Binomial distributions with the same probability } p \\
}
$$
