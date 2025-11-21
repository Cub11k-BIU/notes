---
{"publish":true,"created":"27/11/24, 10:11","modified":"2025-11-21T21:10:14.181+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 9
## Subsequence #definition 
$$
\displaylines{
\text{Let } a_{n} \\
\text{Let } a_{k_{n}} : \forall n \in \mathbb{N}: k_{n} < k_{n+1} \\
\text{For example:} \\
a_{n} = \left\{  \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \frac{1}{16}, \dots  \right\} \\
a_{2n} = \left\{  \frac{1}{4}, \frac{1}{16}, \frac{1}{64}, \dots  \right\}, k_{n} = 2n : 2 < 4 < 6 < \dots \\
a_{n+7} = \left\{  \frac{1}{256}, \frac{1}{512}, \dots  \right\} \\
k_{n} = n+7 : 8 < 9 < 10 < \dots \\
}
$$
---
## Monotonic subsequence #lemma 
$$
\displaylines{
\text{For any sequence there exists a monotonic subsequence} \\
\\
\text{Proof:} \\
\text{Let } x_{m} \text{ be a "peak" if } \forall n > m : x_{n} \leq x_{m} \\
1. \quad \text{There are infinitely many "peaks"} \\
\implies x_{m_{n}} = \{ x_{m_{1}}, x_{m_{2}}, x_{m_{3}}, \dots \}, m_{1} < m_{2} < \dots \\
\forall m_{a}, m_{b}: m_{a} < m_{b} \implies x_{m_{a}} \geq x_{m_{b}} \\
\implies \{ x_{m_{1}}, x_{m_{2}}, \dots \} - \text{ monotonically non-asscending} \\
2. \quad \text{There is a finite number of "peaks"} \\
\text{Let } x_{n_{1}} \text{ be past all of them} \\
x_{n_{1}} \text{ is not a peak, then } \exists n_{2} > n_{1} : x_{n_{2}} > x_{n_{1}} \\
\forall a > n_{2}: x_{n_{a}} \text{ is not a "peak"} \implies \exists n_{b} : x_{n_{a}} > x_{n_{b}} \\
\text{By induction, sequence } \{ x_{n_{1}}, x_{n_{2}}, \dots \} - \text{monotonically ascending} \\
}
$$
---
## Bolzano-Weierstrass theorem #theorem 
$$
\displaylines{
\text{Every bounded sequence has a convergent subsequence} \\
\\
\text{Proof:} \\
\exists a_{k_{n}} : a_{k_{n}} \text{ monotonic and bounded} \\
\implies a_{k_{n}} \text{ converges} \\
}
$$
---
## Limit of subsequence #lemma 
$$
\displaylines{
\text{Limit of any subsequence is equal to the limit of a sequence, if such exists} \\
\\
\text{Proof:} \\
\dots
}
$$
---
## Equal limits of odd/even subsequences #lemma 
$$
\displaylines{
\text{If } a_{2n}, a_{2n-1} \text{ converge to $L$, then } a_{n} \text{ converges to $L$} \\
\\
\text{Proof:} \\
\forall \varepsilon > 0: \exists N_{2n} : \forall 2n > N_{2n} : \lvert a_{2n} - L \rvert < \varepsilon \\
\forall \varepsilon > 0: \exists N_{2n-1} : \forall 2n-1 > N_{2n-1} : \lvert a_{2n-1} - L \rvert < \varepsilon \\
\implies \forall \varepsilon > 0: \exists N=max(N_{2n}, N_{2n-1}): \forall n > N: \lvert a_{n} - L \rvert < \varepsilon \\
\iff \lim_{ n \to \infty } a_{n} = L \\
}
$$
---
## Partial limits #definition
$$
\displaylines{
\text{Let } a_{n}, c \in \mathbb{R} \\
C \text{ is called a partial limit of $a_{n}$ if there exists a subsequence } a_{k_{n}} \text{ converging to } C \\
}
$$
---
## Example
$$
\displaylines{
a_{n} = (-1)^{n} \\
\text{Set of partial limits of this sequence is } \{ 1, -1 \} \\
}
$$
---
## Example
$$
\displaylines{
a_{n} = \left\{  1, \frac{1}{2}, 1, \frac{1}{2}, \frac{1}{3}, \dots \right\} \\
\text{Set of partial limits of this sequence is } \left\{  \frac{1}{n} \mid n \in \mathbb{N}  \right\} \cup \{ 0 \} \\
}
$$
---
## Limit superior #definition 
$$
\displaylines{
\text{Supremum of the set of partial limits of} a_{n} \text{ is called limit superior} - limsup(a_{n}) \text{ or } \overline{\lim } a_{n} \\
}
$$
---
## Limit inferior #definition 
$$
\displaylines{
\text{Infimum of the set of partial limits of} a_{n} \text{ is called limit superior} - liminf(a_{n}) \text{ or } \underline{\lim } a_{n} \\
}
$$
---
## Equal partial limits #lemma 
$$
\displaylines{
\overline{lim} a_{n} = \underline{lim} a_{n} = L \implies \lim_{ n \to \infty } a_{n} = L \\
\text{Note: also true for converging in the broadest sense} \\
\\
\text{Proof:} \\
\dots
}
$$
---
