---
{"publish":true,"created":"20/03/25, 11:03","modified":"2025-11-21T21:10:24.528+02:00","tags":["Academia","Practice","Data-structures"],"cssclasses":""}
---

$$
\displaylines{
\text{Prove: } O(n^{2}) \subseteq O(n^{3}) \\
\\
\text{Proof:} \\
\text{Let } f(n) \in O(n^{2}) \\
f(n) \leq c \cdot n^{2} \\
\text{Let } n_{0}' = max(n_{0}, 1) \\
f(n) \leq c \cdot n^{2} \leq c \cdot n^{3} \\
\implies f(n) \in O(n^{3}) \implies O(n^{2}) \subseteq O(n^{3}) \\
}
$$
---
$$
\displaylines{
\text{Prove: } n^{2}\log(n) + 10n \in \Omega(5n^{2}) \\
\text{Let } n \geq 32 \\
\implies \log(n) \geq \log(32) = 5 \\
\implies n^{2}\log(n) + 10n \geq n^{2}\log(n) \geq 5n^{2} \\
\\
\text{Alternative} \\
n \geq 2 \implies \log(n) \geq 1 \\
\implies n^{2}\log(n) + 10n \geq \frac{1}{5}5n^{2} = n^{2} \\
}
$$
---
$$
\displaylines{
\text{Prove: } f(n) \in \Omega(g(n)) \implies \Omega(f(n)) \subseteq \Omega(g(n)) \\
\\
\text{Proof:} \\
\text{Let } f(n) \in \Omega(g(n)) \\
\implies \forall n \geq n_{f}: f(n) \geq c_{f}g(n) \\
\text{Let } h(n) \in \Omega(f(n)) \\
\implies \forall n \geq n_{h}: h(n) \geq c_{h}f(n) \\
\implies \forall n \geq max(n_{h}, n_{f}): h(n) \geq c_{h}f(n) \geq c_{h}c_{f}g(n) \\
\implies h(n) \in \Omega(g(n)) \implies \Omega(f(n)) \subseteq \Omega(g(n)) \\
}
$$
---
$$
\displaylines{
\text{Prove: } 2n + 15 \in o(n^{2}) \\
\\
\text{Proof:} \\
\text{Let } c > 0 \\
\text{Let } n_{0} = max\left( 1, \frac{17}{c} \right) \\
\forall n \geq n_{0}: 2n + 15 \leq 17n \leq c\frac{17}{c}n \leq cn_{0}n \leq cn^{2} \\
\implies 2n + 15 \in o(n^{2}) \\
}
$$
---
$$
\displaylines{
\text{Prove: } 5n\log(n) \in \omega(n) \\
\\
\text{Proof:} \\
\text{Let } c > 0 \\
\text{Let } n_{0} = 2^{c/5} \\
\forall n \geq n_{0}: 5n\log(n) \geq 5n\log(2^{c/5}) = cn \\
\implies 5n\log(n) \in \omega(n) \\
}
$$
---
$$
\displaylines{
\exists \lim_{ n \to \infty } \frac{f(n)}{g(n)} = L \\
L = 0 \iff f(n) \in o(g(n)) \\
L \neq 0 \in \mathbb{R} \iff f(n) \in \Theta(g(n)) \\
L = \infty \implies f(n) \in \omega(g(n)) \\
\\
\text{Proof for } L = 0: \\
\boxed{ \implies } \quad \forall \varepsilon > 0: \exists n_{0} \in \mathbb{N}_{0}: \forall n \geq n_{0}: \frac{f(n)}{g(n)} < \varepsilon \\
g(n) > 0 \implies f(n) < \varepsilon g(n) \implies f(n) \leq \varepsilon g(n) \\
}
$$
---
$$
\displaylines{
\text{Prove: } \log(n!) \in \Theta(n\log(n)) \\
\\
\text{Proof:} \\
\log(n!) \leq \log(n^{n}) = n\log(n) \\
\frac{n}{2}\log\left( \frac{n}{2} \right) = \frac{1}{2}n(\log(n)-\log(2)) = \frac{1}{2}n\log(n) - \frac{1}{2}n \\
n \geq 4 \implies \log(n) \geq 2 \implies \frac{\log(n)}{2} \geq 1 \\
\implies \log\left( \frac{n}{2}^{n/2} \right) = \frac{1}{2}n\log(n) - \frac{1}{2}n \geq \frac{1}{2}n\log(n) - \frac{1}{4}n\log(n) = \frac{1}{2}n\log(n) \\
\implies \frac{1}{2}n\log(n) \leq \log\left( \left( \frac{n}{2} \right)^{n/2} \right) \leq \log(n!) \leq n\log(n) \\
\implies \log(n!) \in \Theta(n\log(n)) \\
}
$$
