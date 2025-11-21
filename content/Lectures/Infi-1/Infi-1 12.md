---
{"publish":true,"created":"09/12/24, 12:12","modified":"2025-11-21T21:10:14.191+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 12
## Partial sum #definition 
$$
\displaylines{
S_{N} = \sum_{n=1}^{N} a_{n} \\
\sum_{n=1}^{\infty} = \lim_{ N \to \infty } S_{N} \\
}
$$
## Operations on series #lemma 
$$
\displaylines{
\sum_{n=1}^{N} Ca_{n} = C \sum_{n=1}^{N} a_{n} \\
}
$$
$$
\displaylines{
\sum_{n=1}^{N} a_{n} + \sum_{n=1}^{N} b_{n} = \sum_{n=1}^{N} (a_{n}+b_{n}) = C_{N} \\
A_{N} = \sum_{n=1}^{N} a_{n} \\
B_{N} = \sum_{n=1}^{N} b_{n} \\
A_{N} \to L, B_{N} \to M \\
C_{N} = \sum_{n=1}^{N} (a_{n}+b_{n}) = a_{1}+b_{1}+\dots+a_{N}+b_{N} = \\
= \underbrace{ a_{1}+a_{2}+\dots+a_{N} }_{ \sum_{n=1}^{N} a_{n} }+\underbrace{ b_{1}+b_{2}+\dots+b_{N} }_{ \sum_{n=1}^{N} b_{n} } = A_{N} + B_{N} \to L + M \\
}
$$
---
## Necessary convergence condition #lemma 
$$
\displaylines{
\sum_{n=1}^{\infty} a_{n} \to L \implies a_{n} \to 0 \\
\\
S_{N} = \sum_{n=1}^{N} a_{n}, S_{N} \to L \\
S_{N} - S_{N-1} = a_{N} \\
S_{N} - S_{N-1} \to L - L = 0 \implies a_{N} \to 0 \\
\\
a_{N} \not\to 0 \implies \sum_{n=1}^{\infty} a_{n} \not\to L \\
}
$$
---
## Number e #definition 
$$
\left( 1 + \frac{a}{n} \right)^{n} \to e^{a} \\
$$
---
## "Better" Harmonic series #theorem 
$$
\sum_{n=1}^{\infty} \frac{1}{n^{a}} \to L \iff a > 1 \\
$$
---
## Necessary and sufficient convergence condition #theorem 
$$
\displaylines{
\sum_{n=1}^{\infty} a_{n} \to L \iff S_{N} \text{ is a Cauchy's sequence} \\
(\forall \varepsilon > 0: \exists N_{\varepsilon} : \forall N, M > N_{\varepsilon} : \lvert S_{N} - S_{M} \rvert < \varepsilon) \\
\\
\text{If } M > N : \\
S_{M} = S_{N} + \sum_{n=N+1}^{M} a_{n} \\
\lvert S_{N} - S_{M} \rvert < \varepsilon \\
\left\lvert  \sum_{n=N+1}^{M} a_{n}  \right\rvert < \varepsilon \\
}
$$
---
## Convergence tests
### Direct comparison test #theorem 
$$
\displaylines{
\sum a_{n}, \sum b_{n} : \\
0 \leq a_{n} \leq b_{n} \\
\sum b_{n} \to L \implies \sum a_{n} \to M \\
\sum a_{n} \not\to M \implies \sum b_{n} \not\to L \\
\\
\text{Proof:} \\
0 \leq a_{n} \implies A_{N} - A_{N-1} = a_{N} \geq 0 \\
A_{N} > A_{N} \implies A_{N} \text{ is monotonically non-descending} \\
\sum_{n=1}^{N} b_{n} = B_{N} \\
\sum b_{n} \to L \implies \exists C : B_{N} \leq C \\
A_{N} \leq B_{N} \leq C \implies A_{N} < C \\
\implies A_{N} \text{ is monotonically non-descending and upper-boundeed} \implies A_{N} \to M \\
}
$$
### Limit comparison test #theorem 
$$
\displaylines{
\sum a_{n}, \sum b_{n} \\
0 \leq a_{n}, b_{n} \\
\exists \lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = L \\
L > 0 \implies \left( \sum a_{n} \to M_{1} \iff \sum b_{n} \to M_{2} \right) \\
L = 0 \implies \left( \sum a_{n} \to M_{1} \impliedby \sum b_{n} \to M_{2} \right) \\
L = \infty \implies \left( \sum a_{n} \to M_{1} \implies \sum b_{n} \to M_{2} \right) \\
}
$$
---
