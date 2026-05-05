---
{"publish":true,"created":"07/01/26, 13:10","modified":"2026-03-24T14:59:39.166+02:00","tags":["Academia","#Practice","Probability"],"cssclasses":""}
---

## Integration (and Expectation)
$$
\displaylines{
\text{Let } \Omega \text{ be a measure space} \\
\text{Let } f: \Omega \to \mathbb{R} \\
\text{How should we define } \int f \, dx \ \ ? \\
\text{We will define it as a signed area under the graph of } f \\
\text{If } \Omega \text{ is the probability space} \\
f \text{ is then a random variable and } E[f] = \int f \\
}
$$
## Fubini theorem (counting in two ways)
$$
\displaylines{
\sum_{i=1}^{n} \sum_{j=1}^{m} a_{ij} = \sum_{j=1}^{m} \sum_{i=1}^{n} a_{ij} \\
\\
\text{As integrals are limits of sums, we can do the same for integrals} \\
\text{i.e. changing order of integration in a double integral} \\
}
$$
---
$$
\displaylines{
\text{Let } X \text{ be a random variable} \\
X: \Omega \to \mathbb{R}, X \geq 0 \\
E[X] = \int_{0}^{\infty} P(X \geq t) \, dt \\
}
$$
## Change of variables
$$
\displaylines{
\text{Let } g: \mathrm{Im}X \to \mathrm{Im}Y \text{ bijective} \\
\text{Let } Y = g(X) \\
E[Y] = \sum_{y \in \mathrm{Im}Y} y \cdot p(Y = y) = \sbs{
Y = g(X) \\
y = g(x) \\
} = \sum_{x \in \mathrm{Im}X} g(x) \cdot P(g(X) = g(x)) = \\
= \sum_{x \in \mathrm{Im}X} g(x) \cdot P(X = x) = E[g(X)] \\
\text{Which is the intuition behind the LOTUS} \\
}
$$
---
$$
\displaylines{
\text{Let there be a Poisson process with rate } \lambda \\
\text{Let } Y = \text{amount of successes in } [0, 1] \implies Y \sim Pois(\lambda) \\
\text{Let } Y_{L} = \text{amount of successes in } [0, L] \implies Y_{L} \sim Pois(\lambda L) \\
\text{Let } X = \text{time of the first success} \\
P(X > t) = P(0 \text{ successes in } [0, t]) = P(Y_{t} = 0) = e^{-\lambda t} \\
\implies P(X \leq t) = 1 - e^{-\lambda t} \implies X \sim Exp(\lambda) \\
\\
\text{This is the intuition behind the proof that Exponential distribution is the limit} \\
\text{of the geometric distribution} \\
}
$$
---
$$
\displaylines{
\text{Let } x, y \in (0, 1) \text{ be chosen uniformly and independently} \\
\text{Let } Z = round\left( \frac{y}{x} \right) = \text{the closest integer to } \frac{y}{x} \\
\text{Calculate } P(Z \text{ is even}) \\
\\
\text{Solution:} \\
\text{We can think of } (x, y) \text{ as a point in } (0, 1)^{2} \\
(x, y) \text{ is distributed uniformly over } (0, 1)^{2} \\
Z = 0 \iff \frac{y}{x} \leq \frac{1}{2} \iff y \leq \frac{x}{2} \\
P(Z = 0) = \frac{1}{4} \text{ (area of the triangle formed by that constraint)} \\
Z = 2 \iff 1.5 < \frac{y}{x} \leq 2.5 \iff 1.5x < y \leq 2.5x \\
P(Z = 2) = \frac{1}{2}\left( \frac{2}{3} - \frac{2}{5} \right) \\
P(Z = 4) = \frac{1}{2}\left( \frac{2}{7} - \frac{2}{9} \right) \\
\dots \\
\implies P(Z \text{ is even}) = \frac{1}{4} + \sum_{n=1}^{\infty} P(Z = 2n) = \frac{1}{4} + \sum_{n=1}^{\infty} \frac{1}{2}(-1)^{n} \frac{2}{2n+1} = \\
= \frac{1}{4} + \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{2n+1} = \frac{1}{4} + 1 - \frac{\pi}{4} = \frac{5-\pi}{4} \approx 0.46 \\
}
$$
