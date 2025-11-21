---
{"publish":true,"created":"11/12/24, 10:12","modified":"2025-11-21T21:10:14.197+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 13
$$
\displaylines{
\lim_{ n \to \infty } a_{n} = L \iff \forall K < L, W > L: \exists N_{\varepsilon} : \forall n > N_{\varepsilon} : K < a_{n} < W \\
\\
\text{Let } \varepsilon = min\left( \frac{L-K}{2}, \frac{W-L}{2} \right) \\
\exists N_{\varepsilon} : \forall n > N_{\varepsilon} : K < L-\varepsilon < a_{n} < L+\varepsilon < W \\
}
$$
---
## Proof for limit comparison test
$$
\displaylines{
0 \leq a_{n}, b_{n} \\
\lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = L
}
$$
$$
\displaylines{
\text{Proof for 1.} \\
L > 0 \\
\implies \frac{1}{e}L < \frac{a_{n}}{b_{n}} < eL \\
\frac{1}{e}Lb_{n} \leq a_{n} \leq eLb_{n} \\
1. \sum a_{n} \to M_{1} \implies \sum \frac{1}{e}b_{n} \to M' \implies \sum b_{n} \to M_{2} \\
2. \sum b_{n} \to M_{2} \implies \sum eLb_{n} \to M' \implies \sum a_{n} \to M_{1} \\
1. \text{ and } 2. \implies \sum a_{n} \to M_{1} \iff \sum b_{n} \to M_{2} \\
}
$$
$$
\displaylines{
\text{Proof for 2.} \\
L = 0, \sum b_{n} \to M_{2} \\
\frac{a_{n}}{b_{n}} \to 0 \implies \frac{a_{n}}{b_{n}} < 7 \implies a_{n} < 7b_{n} \\
\sum b_{n} \to M_{2} \implies \sum 7b_{n} \to 7M_{2} \implies \sum a_{n} \to M_{1} \\
}
$$
$$
\displaylines{
\text{Proof for 3.} \\
L = \infty, \sum a_{n} \to M_{1} \\
\frac{a_{n}}{b_{n}} \to \infty \implies \frac{a_{n}}{b_{n}} > 420 \implies a_{n} > 420b_{n} \\
\sum a_{n} \to M_{1} \implies \sum 420b_{n} \to M' \implies \sum b_{n} \to M_{2} \\
}
$$
---
## Convergence tests
### Root test (nth root test, Cauchy's criterion) #theorem 
$$
\displaylines{
\text{Let } L = \lim_{ n \to \infty } \sqrt[n]{ \lvert a_{n} \rvert  } \\
L > 1 \implies \sum a_{n} \not\to M \\
L < 1 \implies \sum \lvert a_{n} \rvert \to M \\
L = 1 \implies \text{Test is inconclusive} \\
\\
\text{Proof:} \\
\text{Let } \overline{\lim_{ n \to \infty }} \sqrt[n]{ \lvert a_{n} \rvert  } \\
\implies \exists a_{k_{n}}: \sqrt[k_{n}]{ \lvert a_{k_{n}} \rvert  } \to L \\
\text{If } L > 1 \implies L > \frac{L+1}{2} > 1 \\
\implies \sqrt[k_{n}]{ \lvert a_{k_{n}} \rvert  } \geq \frac{L+1}{2} \iff \lvert a_{k_{n}} \rvert \geq \left( \frac{L+1}{2} \right)^{k_{n}} \\
\frac{L+1}{2} > 1 \implies \left( \frac{L+1}{2} \right)^{k_{n}} \to \infty \implies \lvert a_{k_{n}} \rvert \to \infty \\
\implies a_{k_{n}} \not\to 0 \implies a_{n} \not\to 0 \implies \sum a_{n} \not\to M \\
\\
\text{If } L < 1 \implies L < \frac{L+1}{2} \\
\sqrt[k_{n}]{ \lvert a_{k_{n}} \rvert  } \to L \implies \sqrt[n]{ \lvert a_{n} \rvert  } \leq \frac{L+1}{2} \implies \lvert a_{n} \rvert \leq \left( \frac{L+1}{2} \right)^{n} \\
\sum \left( \frac{L+1}{2} \right)^{n} \to M' \implies \sum \lvert a_{n} \rvert \to M \\
}
$$
### Ratio test (d'Alembert's criterion) #theorem 
$$
\displaylines{
\text{Let } L = \lim_{ n \to \infty } \left\lvert  \frac{a_{n+1}}{a_{n}}  \right\rvert \\
L > 1 \implies \sum a_{n} \not\to M \\
L < 1 \implies \sum \lvert a_{n} \rvert  \to M \\
}
$$
---
