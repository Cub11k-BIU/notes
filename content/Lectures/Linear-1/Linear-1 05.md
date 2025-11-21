---
{"publish":true,"created":"27/11/24, 12:11","modified":"2025-11-21T21:10:14.286+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# Linear 1 5
$$
\displaylines{
A, B \in \mathbb{F}^{n\times n} \\
AB = I \iff BA = I \\
\exists A^{-1}, B^{-1} \iff \exists (AB)^{-1} \\
}
$$
---
$$
\displaylines{
U + W = \{ u+w \mid u \in U, w \in W \} \\
U, W \subseteq V \\
U \subseteq U+W (\forall u : u = u + 0_{W}) \\
W \subseteq U+W (\forall w: w = 0_{U} + w) \\
U+W \subseteq V (\forall u, w: u + w = v_{1} + v_{2} \in V) \\
\\
1. \quad 0_{V} \in U+W \\
0_{V} = 0_{U} + 0_{W} \in U+W \\
2. \quad v, \tilde{v} \in U+W \\
v \in U+W \implies v = u+w \\
\tilde{v} \in \tilde{U}+\tilde{W} \implies \tilde{v} = \tilde{u} + \tilde{w} \\
v + \alpha \tilde{v} = u+w + \alpha(\tilde{u}+\tilde{w}) = \\
= u + \alpha \tilde{u} + w + \alpha \tilde{w} = u + \tilde{u} + w + \tilde{w} \\
}
$$
---
$$
\displaylines{
U = \left\{ \begin{pmatrix}
x \\
0 \\
\end{pmatrix} \mid x \in \mathbb{R} \right\} \\
W = \left\{ \begin{pmatrix}
0 \\
x \\
\end{pmatrix} \mid x \in \mathbb{R} \right\} \\
U + W = \left\{ \begin{pmatrix}
x \\
x \\
\end{pmatrix} \mid x \in \mathbb{R} \right\} = \mathbb{R}^{2} \\
\left\{ \begin{pmatrix}
x \\
y \\
0 \\
\end{pmatrix} \right\} + \left\{ \begin{pmatrix}
0 \\
x \\
y \\
\end{pmatrix} \right\} = \mathbb{R}^{3} \\
}
$$
---
## Direct sum #definition
$$
\displaylines{
U, W \subseteq V \text{ over } \mathbb{F} \\
U \oplus W - \text{direct sum of } U \text{ and } W \\
\\
(\forall v: \exists u \in U, w \in W: v = u + w) \land U \cap W = \{ 0 \} \iff U \oplus W = V \\
}
$$
---
## Uniqueness of vector spaces sum #lemma
$$
\displaylines{
U, W \subseteq V \text{ over } \mathbb{F} \\
U \oplus W = V \iff \forall v \in V: \exists! u \in U, w \in W: v = u+w \\
\text{Proof:} \\
1. \quad \text{Let } U \oplus W = V \\
\exists u \in U, w \in W: v = u+w \\
\text{Let } \tilde{u} \in U, \tilde{w} \in W : v = \tilde{u} + \tilde{w} \\
\implies u + w = \tilde{u} + \tilde{w} \implies \tilde{u} - u = w-\tilde{w} \\
\implies \tilde{u} - u \in U \land \tilde{u} - u \in W \implies \tilde{u} - u \in U \cap W \\
\implies \tilde{u} - u \in \{ 0 \} \implies \tilde{u} - u = 0 \implies u = \tilde{u} \\
\implies \exists! u \in U, w \in W: v = u + w \\
2. \quad Let \exists! u \in U, w \in W: v = u + w \\
\exists! u \in U, w \in W: v = u + w \\
\implies \exists u \in U, w \in W: v = u + w \iff U + W = V \\
\{ 0 \} \subseteq U \cap W \\
\text{Let } v \in U \cap W \\
v = v + 0, v = 0 + v \\
\exists! u \in U, w \in W: v = u+w \implies 0 + v = v + 0 \implies v = 0 \\
\implies U \cap W \subseteq \{ 0 \} \implies U \cap W = \{ 0 \} \\
}
$$
---
$$
\displaylines{
S = \left\{ \begin{pmatrix}
0 \\
1
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} \right\} \\
\begin{pmatrix}
3 \\
5 \\
\end{pmatrix} = -2\begin{pmatrix}
0 \\
1 \\
\end{pmatrix} + 5\begin{pmatrix}
1 \\
1 \\
\end{pmatrix} \\
\\
\exists S_{1}, S_{2}, S_{3}, \dots, S_{n} \in S \\
\exists \alpha_{1}, \alpha_{2}, \alpha_{3}, \dots, \alpha_{n} \in \mathbb{F} \\
v = \alpha_{1}S_{1} + \alpha_{2}S_{2} + \dots + \alpha_{n}S_{n} \\
}
$$
$$
\displaylines{
S = \{ 1, 2+x, 1+x^{2} \} \\
2+x-x^{2} = \alpha(1) + \beta(2+x) + \gamma(1+x^{2}) \\
\alpha + 2\beta + \beta x + \gamma + \gamma x^{2} \\
= (\alpha+2\beta+\gamma)1 + (\beta)x + (\gamma)x^{2} \\
\left\{\begin{array}{}
\alpha + 2\beta + \gamma = 2 \\
\beta = 1 \\
\gamma = -1 \\
\end{array}\right. \\
\alpha = 1, \beta = 1, \gamma = -1 \\
}
$$
---
## Span #definition
$$
\displaylines{
V \text{ over } \mathbb{F}, S \subseteq V \\
sp(S) \text{ (span S)} \\
sp(S) = \Set{ \alpha_{1}s_{1}+\alpha_{2}s_{2}+\dots+\alpha_{n}s_{n} | \begin{array}{}
n \in \mathbb{N} \\
\alpha_{1}, \alpha_{2}, \dots, \alpha_{n} \in \mathbb{F} \\
s_{1},s_{2},\dots,s_{n} \in S \\
\end{array}} \\
}
$$
---
## Span cannot exceed vector space #lemma
$$
\displaylines{
S \subseteq V \implies sp(S) \text{ is a subspace of } V \\
\\
\text{Proof:} \\
1. \quad S = \emptyset \\
S = \emptyset \implies sp(S) = \Set{ 0 } \\
\implies sp(S) \text{ is a subspace of } V \\
2. \quad S \neq \emptyset \\
2.1 \quad \vec{0} \in sp(S) \\
S \neq \emptyset \implies \exists s \in S: 0\cdot s \in sp(S) \iff \vec{0} \in sp(S) \\
2.2 \quad \text{Let } u, v \in sp(S) \\
\implies u = \alpha_{1}S_{1}+\dots\alpha_{n}S_{n} \\
\implies v = \beta_{1}S_{1}+\dots+\beta_{n}S_{n} + 0(\tilde{S}_{1}+ \tilde{S}_{2}+\dots) \\
\implies u + \alpha v = (\alpha_{1}+\alpha\beta_{1})S_{1}+\dots(\alpha_{n}+\alpha\beta_{n})S_{n} \in sp(S) \\
}
$$