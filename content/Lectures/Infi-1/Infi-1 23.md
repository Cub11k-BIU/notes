---
{"publish":true,"created":"20/01/25, 12:01","modified":"2025-11-21T21:10:14.230+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 23
## Intermediate value theorem #theorem 
$$
\displaylines{
\text{Let } f \text{ be a continuous function on } [a, b] \\
\text{Then } f(a) \cdot f(b) < 0 \implies \exists x \in [a, b]: f(x) = 0 \\
}
$$
---
## Weierstrass boundedness theorem #theorem 
$$
\displaylines{
\text{Let } f \text{ be a continuous function on } [a, b] \\
\text{Then } \exists m, M: \forall x \in [a, b]: m \leq f(x) \leq M \\
\\
\text{Proof:} \\
\text{Let } f \text{ be unbounded from above on } [a, b] \\
\forall n \in \mathbb{N}: \exists x_{n}: f(x_{n}) > n \\
[a, b] \text{ is bounded} \implies \text{By Bolzano-Weierstrass theorem } \exists x_{n_{k}} \to x: x \in [a, b] \\
f \text{ is continuous on } [a, b] \implies f(x_{n_{k}}) \to f(x) \in \mathbb{R} \\
f(x_{n}) \to \infty \implies f(x_{n_{k}}) \to \infty - \text{Contradiction!} \\
\text{Similar proof for bounded from below} \\
\implies f \text{ is bounded on } [a, b] \\
}
$$
---
## Weierstrass extreme value theorem #theorem 
$$
\displaylines{
\text{Let } f \text{ be a continuous function on } [a, b] \\
\text{Then } \exists c, d \in [a, b]: \forall x \in [a, b]: f(c) \leq f(x) \leq f(d) \\
\\
\text{Proof:} \\
f \text{ is bounded from above} \implies \exists M = sup(f(x)) \text{ on } [a, b] \\
\text{Let } n \in \mathbb{N} \\
M - \frac{1}{n} \text{ is not an upper bound of } f \text{ on } [a, b] \\
\implies \exists d_{n} \in [a, b]: M - \frac{1}{n} < f(d_{n}) \\
\forall n \in \mathbb{N}: M - \frac{1}{n} < f(d_{n}) \leq M \\
\implies f(d_{n}) \to M \\
\text{By Bolzano-Weierstrass theorem: } \exists d_{n_{k}} \to d \in [a, b] \\
f \text{ is continuous} \implies f(d_{n_{k}}) \to f(d) \\
\implies f(d_{n}) \to f(d) \implies M = f(d) \\
\text{Similar proof for minimum} \\
}
$$
---
## Fermat's theorem (stationary points) #theorem 
$$
\displaylines{
\text{Let } f \text{ be defined on } (a, b) \\
\text{Let } x_{0} \in (a, b) \\
\text{If } f \text{ has a local extremum at } x_{0} \text{ and } f \text{ is differentiable at } x_{0} \\
\text{Then } f'(x_{0}) = 0 \\
\\
\text{Proof:} \\
\text{Let } x \text{ be a local minimum} \\
f'(x_{0}) = \lim_{ x \to x_{0} } \frac{f(x)-f(x_{0})}{x-x_{0}} \\
\lim_{ x \to x_{0}^{+} } \frac{f(x)-f(x_{0})}{x-x_{0}} \geq 0 \\
\lim_{ x \to x_{0}^{-} } \frac{f(x)-f(x_{0})}{x-x_{0}} \leq 0 \\
\lim_{ x \to x_{0}^{+} } \frac{f(x)-f(x_{0})}{x-x_{0}} = \lim_{ x \to x_{0}^{-} } \frac{f(x)-f(x_{0})}{x-x_{0}} \\
\implies f'(x_{0}) = 0 \\
\text{Similar proof for local maximum} \\
}
$$
---
## Rolle's theorem #theorem 
$$
\displaylines{
\text{Let } f \text{ be continuous on } [a, b] \text{ and differentiable on } (a, b) \\
\text{Let } f(a) = f(b) \\
\text{Then } \exists c \in (a, b): f'(c) = 0 \\
\\
\text{Proof:} \\
f \text{ is continuous at } [a, b] \implies \exists c, d \in [a, b]: \forall x \in [a, b]: f(c) \leq f(x) \leq f(d) \\
\dots \\
}
$$
---
