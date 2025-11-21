---
{"publish":true,"created":"18/12/24, 10:12","modified":"2025-11-21T21:10:14.204+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 15
## Bounded series #definition 
$$
\displaylines{
\text{Series are called bounded if the sequence of it's partial sums is bounded} \\
\exists M: \forall N \in \mathbb{N}: \left\lvert  \sum_{n=1}^{N}   \right\rvert \leq M \\
}
$$
---
## Dirichlet's test #theorem 
$$
\displaylines{
\sum b_{n} \text{ is bounded} \\
a_{n} \text{ monotonically non-increasing}, a_{n} \to 0 \\
\text{Then} \sum b_{n}a_{n} \to M_{1} \\
}
$$
$$
\displaylines{
\text{Example:} \\
\sum \frac{(-1)^{n}}{n} = \sum (-1)^{n} \cdot \frac{1}{n} \\
\left\lvert  \sum (-1)^{n}  \right\rvert \leq 1 \\
\frac{1}{n} \to 0 \\
\implies \sum \frac{(-1)^{n}}{n} \to M_{1} \\
}
$$
$$
\displaylines{
\text{Proof:} \\
a_{n} \to 0 \text{ and } a_{n} \text{ is monotonically non-increasing} \\
\implies \forall n \in \mathbb{N}: a_{n} \geq 0 \\
\sum b_{n} \text{ is bounded} \implies S_{N} = \sum_{n=1}^{N} b_{n} \text{ is bounded} \\
\sum a_{n}b_{n} \to L \iff \forall \varepsilon > 0: \exists N_{\varepsilon}: \forall N, M > N_{\varepsilon} \in \mathbb{N}: \left\lvert  \sum_{n=M+1}^{N} a_{n}b_{n}  \right\rvert < \varepsilon \\
\left\lvert  \sum_{n=M+1}^{N} a_{n}b_{n}  \right\rvert = \left\lvert  \sum_{n=M+1}^{N} a_{n}(S_{n}-S_{n-1})  \right\rvert = \left\lvert  \sum_{n=M+1}^{N} a_{n}S_{n} - \sum_{n=M+1}^{N} a_{n}S_{n-1}  \right\rvert = \\
= \left\lvert -S_{M}a_{M+1} + \sum_{n=M+1}^{N-1} S_{n}(a_{n}-a_{n+1}) + S_{N}a_{N} \right\rvert \leq \\
\leq \lvert -S_{M}a_{M+1} \rvert + \sum_{n=M+1}^{N-1} \lvert S_{n}(a_{n}-a_{n+1}) \rvert + \lvert S_{N}a_{N} \rvert = \\
= \lvert S_{M} \rvert \cdot \lvert a_{M+1} \rvert + \sum_{n=M+1}^{N-1} \lvert S_{n} \rvert \cdot \lvert (a_{n}-a_{n+1}) \rvert + \lvert S_{N} \rvert \cdot \lvert a_{N} \rvert \\
\\
\lvert S_{n} \rvert \leq K \\
a_{N}, a_{M+1} \geq 0 \\
a_{M+1} \geq a_{M+2} \geq \dots \\
\implies a_{M+1} - a_{M+2} \geq 0 \\
\implies \lvert S_{M} \rvert \cdot \lvert a_{M+1} \rvert + \sum_{n=M+1}^{N-1} \lvert S_{n} \rvert \cdot \lvert (a_{n}-a_{n+1}) \rvert + \lvert S_{N} \rvert \cdot \lvert a_{N} \rvert \leq \\
K \cdot \left( a_{M+1} + \sum_{n=M+1}^{N} (a_{n}-a_{n+1}) + a_{N} \right) \\
\implies \left\lvert  \sum_{n=M+1}^{N} a_{n}b_{n}  \right\rvert \leq K \cdot (a_{M+1} + a_{M+1} - a_{M+2} + \dots + a_{N-1} - a_{N} + a_{N}) = \\
= K \cdot 2a_{M+1} \\
\left\lvert  \sum_{n=M+1}^{N} a_{n}b_{n}  \right\rvert \leq 2K \cdot a_{M+1} \\
\forall \varepsilon > 0: \exists N_{\varepsilon}: \forall M > N_{\varepsilon}: \lvert a_{M+1} \rvert < \frac{\varepsilon}{2K} \\
\implies \forall \varepsilon > 0: \exists N_{\varepsilon}: \forall M > N_{\varepsilon}: \left\lvert  \sum_{n=M+1}^{N} a_{n}b_{n} \right\rvert \leq 2K \cdot a_{m+1} < 2K \cdot \frac{\varepsilon}{2K} = \varepsilon \\
}
$$
---
$$
\displaylines{
\sum (-1)^{n}, \sum \sin(n), \sum \cos(n) \text{ are bounded series} \\
}
$$
$$
\displaylines{
\sum \sin(n) \text{ is bounded} \implies \sum \frac{\sin(n)}{n} = \sum \left( \sin(n) \cdot \underbrace{ \frac{1}{n} }_{ \to 0 } \right) \to M_{1} \\
}
$$
---
