---
{"publish":true,"created":"09/01/25, 11:01","modified":"2025-11-21T21:10:14.315+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
A \in \mathbb{R}^{3 \times 3} \\
PLU \text{ decomposition of } A: \\
P = \begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 0 & 0 \\
\end{pmatrix}, L = \begin{pmatrix}
1 & 0 & 0 \\
3 & 1 & 0 \\
1 & 1 & 1 \\
\end{pmatrix}, U = \begin{pmatrix}
2 & -3 & 2 \\
0 & 3 & 1 \\
0 & 0 & 7 \\
\end{pmatrix} \\
\text{Solve } Ax = \begin{pmatrix}
2 \\
3 \\
1 \\
\end{pmatrix} \text{ without calculating } A \\
}
$$
# 2
$$
\displaylines{
A \in \mathbb{F}^{n \times n}, \lambda \in \mathbb{F} \\
\lambda \text{ is called an eigenvalue if} \\
\exists v \neq 0 \in \mathbb{F}^{n}: Av = \lambda v \\
1. \quad \text{Prove: } V_{\lambda} = \Set{ v \in \mathbb{F}^{n} | Av = \lambda v } \text{ is a vector subspace of } \mathbb{F}^{n} \\
2. \quad \text{Prove: } \exists v, w \in \mathbb{F}^{n}: Av = \lambda v, Aw = \mu w, \lambda \neq \mu \implies \Set{ v, w } \text{ is a linear independence} \\
3. \quad \text{Prove: If } A \text{ is nilpotent, then } 0 \text{ is it's eigenvalue} \\
4. \quad \text{Prove: If } A \text{ is nilpotent, then } 0 \text{ is it's only eigenvalue} \\
5. \quad \text{Prove: } 0 \text{ is an eigenvalue of } A \iff \text{ Set of columns of } A \text{ is a linear dependence} \\
}
$$
