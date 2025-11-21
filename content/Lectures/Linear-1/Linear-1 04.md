---
{"publish":true,"created":"20/11/24, 11:11","modified":"2025-11-21T21:10:14.282+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# Linear-1 4
## LU decomposition #definition
$$
\displaylines{
Ax = b \\
LUx = b \\
Ux = \tilde{x} \\
L\tilde{x} = b \\
}
$$
## PLU factorization #definition
$$
\displaylines{
P \text{ - permutation matrix} \\
P^{-1} = P^{T} \\
PA = LU \\
}
$$
---
## Vector space #definition
$$
\displaylines{
\mathbb{V} \text{ is called vector space if:} \\
v \in \mathbb{V}, \alpha \in \mathbb{F} \\
v_{1}+v_{2} \in \mathbb{V} \\
\alpha v_{1} \in \mathbb{V} \\
v_{1}+v_{2} = v_{2}+v_{1} \\
\alpha v_{1} = v_{1} \alpha \\
(v_{1}+v_{2})+v_{3}=v_{1}+(v_{2}+v_{3}) \\
\alpha(\beta v) = (\alpha\beta) v \\
\exists 0_{\mathbb{V}} : \\
v + 0_{\mathbb{V}} = v \\
v + (-v) = 0_{\mathbb{V}} \\
\exists 1_{\mathbb{F}} : \\
1_{\mathbb{F}} \cdot v = v \\
\alpha(v_{1}+v_{2}) = \alpha v_{1} + \alpha v_{2} \\
(\alpha+\beta)v = \alpha v + \beta v \\
}
$$
---
## Checking if set of vectors is a field #lemma
$$
\displaylines{
\begin{array}{}
 & u_{1}, u_{2} \in \mathbb{U}, \alpha \in \mathbb{F} \\
1. & v_{1} + v_{2} \in \mathbb{U} \\
2. & \alpha v_{1} \in \mathbb{U} \\
\end{array} \implies \mathbb{U} \text{ is a field}
}
$$
---
