---
{"publish":true,"created":"16/12/24, 12:12","modified":"2025-11-21T21:10:14.200+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 14
## Cauchy's condensation test #theorem 
$$
\displaylines{
\text{Let } a_{n} \geq 0, a_{n} \text{ is monotonically non-increasing} \\
\sum a_{n} \to M_{1} \iff \sum_{n=0}^{\infty} 2^{n}a_{2^{n}} \to M_{2} 
}
$$
---
$$
\displaylines{
\sum \frac{1}{n^{p}} \to M_{1} \iff p > 1 \\
\sum \frac{1}{n^{p}} \to M_{1} \iff \sum 2^{n} \frac{1}{(2^{n})^{p}} \to M_{2} \\
\sum 2^{n} \frac{1}{(2^{n})^{p}} = \sum 2^{n-np} = \sum (2^{1-p})^{n} \\
\implies \sum \frac{1}{n^{p}} \to M_{1} \iff 2^{1-p} < 1 \iff 1-p < 0 \iff p > 1 \\
}
$$
---
$$
\displaylines{
\sum \lvert a_{n} \rvert \to M_{1} \implies \sum a_{n} \to M_{2} \\
}
$$
---
## Dirichlet's test
$$
\displaylines{
\text{Let } a_{n} \text{ be monotonically non-increasing}, \lim_{ n \to \infty } a_{n} = 0 \\
\text{Let } \exists M : \forall N \in \mathbb{N}: \left\lvert  \sum_{n=1}^{N} b_{n} \right\rvert \leq M \\
\text{Then } \sum a_{n}b_{n} \to M_{1} \\
}
$$
---
