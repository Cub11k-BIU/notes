---
{"publish":true,"created":"13/05/25, 10:05","modified":"2025-11-21T21:10:14.518+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Linear independence of orthogonal sets #lemma 
$$
\displaylines{
S \subseteq V \text{ is orthogonal} \text{ and } 0 \not\in S \implies S \text{ is a linear independence} \\
}
$$
## Coordinates in orthogonal basis #definition 
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } B \text{ be an orthogonal basis of } V \\
\text{Let } v \in V \\
\exists \Set{ \alpha_{i} }_{i \in [1, n]}: v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\implies \forall i \in [1, n]: \alpha_{i} = \frac{\langle v, v_{i} \rangle}{\lVert v \rVert^{2} } \\
\text{Or in other words: } [v]_{B} = \frac{1}{\lVert v \rVert^{2} }\begin{pmatrix}
\langle v, v_{1} \rangle \\
\vdots \\
\langle v, v_{n} \rangle \\
\end{pmatrix} \\
\\
\text{Proof:} \\
\text{Let } \Set{ \alpha_{i} }_{i \in [1, n]}: v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\forall i \in [1, n]: \langle v, v_{i} \rangle = \left\langle  \sum_{k=1}^{n} \alpha_{k}v_{k}, v_{i}  \right\rangle = \sum_{k=1}^{n} \alpha_{k}\langle v_{k}, v_{i} \rangle = \alpha_{i}\langle v_{i}, v_{i} \rangle = \alpha_{i}\lVert v_{i} \rVert^{2} \\
\forall i \in [1, n]: v_{i} \neq 0 \implies \lVert v_{i} \rVert > 0 \\
\implies \boxed{ \forall i \in [1, n]: \alpha_{i} = \frac{\langle v, v_{i} \rangle }{\lVert v_{i} \rVert^{2} } } \\
}
$$
## Pythagorean theorem #theorem 
$$
\displaylines{
\text{Let } B \text{ be an orthogonal basis of } V \\
\text{Let } v \in V \\
v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\implies \left\lVert  \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rVert^{2} = \sum_{i=1}^{n} \lVert \alpha_{i}v_{i} \rVert^{2} = \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2}\lVert v_{i} \rVert^{2} \\
\\
\text{Proof:} \\
\left\lVert  \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rVert^{2} = \left\langle  \sum_{i=1}^{n} \alpha_{i}v_{i}, \sum_{i=1}^{n} \alpha_{i}v_{i} \right\rangle = \sum_{i=1}^{n} \sum_{j=1}^{n} \langle \alpha_{i}v_{i}, \alpha_{j}v_{j} \rangle = \\
= \sum_{i=1}^{n} \sum_{j=1}^{n} \alpha_{i}\overline{\alpha_{j}}\langle v_{i}, v_{j} \rangle = \sum_{i=1}^{n} \alpha_{i}\overline{\alpha_{i}}\langle v_{i}, v_{i} \rangle = \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} \lVert v_{i} \rVert^{2} \\
}
$$
## Orthogonal complement #definition 
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } S \subseteq V \\
\text{Set of vectors that are orthogonal to all vectors in } S \text{ is then called an} \\
\text{orthogonal complement and denoted} \\
S^{\perp} = \Set{ v \in V | \forall s \in S: \langle v, s \rangle = 0 } \\
}
$$
## Properties of orthogonal complements #lemma 
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
S \subseteq V \implies S^{\perp} \text{ is a subpspace of } V \\
\\
\text{Proof:} \\
\forall s \in S: \langle 0, s \rangle = 0 \implies 0 \in S^{\perp} \\
\text{Let } v, u \in S^{\perp}, \alpha \in \mathbb{F} \\
\forall s \in S: \langle v + \alpha u, s \rangle = \langle v, s \rangle + \alpha \langle u, s \rangle = 0 + \alpha \cdot 0 = 0 \\
\implies v + \alpha u \in S^{\perp} \implies \boxed{ S^{\perp} \text{ is a subspce of } V } \\
}
$$
---
$$
\displaylines{
S \subseteq (S^{\perp})^{\perp} \\
\\
\text{Proof:} \\
(S^{\perp})^{\perp} = \Set{ v \in V | \forall s' \in S^{\perp}: \langle v, s' \rangle = 0 } \\
\text{Let } s \in S \\
\forall s' \in S^{\perp}: \langle s', s \rangle = 0 \implies \langle s, s' \rangle = 0 \implies s \in (S^{\perp})^{\perp} \implies \boxed{ S \subseteq (S^{\perp})^{\perp} } \\
}
$$
---
$$
\displaylines{
A \subseteq B \implies A^{\perp} \supseteq B^{\perp} \\
\\
\text{Proof:} \\
\text{Let } v \in B^{\perp} \\
\forall b \in B: \langle v, b \rangle = 0 \underset{ A \subseteq B }{ \implies } \forall a \in A: \langle v, a \rangle = 0 \implies v \in A^{\perp} \\
\implies \boxed{ B^{\perp} \subseteq A^{\perp} } \\
}
$$
---
$$
\displaylines{
S^{\perp} = (sp(S))^{\perp} \\
\\
\text{Proof:} \\
S \subseteq sp(S) \implies (sp(S))^{\perp} \subseteq S^{\perp} \\
\text{Let } v \in S^{\perp} \\
\text{Let } u \in sp(S) \\
u = \sum_{i=1}^{k} \alpha_{i}s_{i} \\
\langle v, u \rangle = \left\langle  v, \sum_{i=1}^{k} \alpha_{i}s_{i}  \right\rangle = \sum_{i=1}^{k} \overline{\alpha_{i}}\langle v, s_{i} \rangle = 0 \\
\implies v \in (sp(S))^{\perp} \implies S^{\perp} \subseteq (sp(S))^{\perp} \\
\implies \boxed{ S^{\perp} = (sp(S))^{\perp} } \\
}
$$
## Orthogonal projection #definition 
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } W \text{ be a subspace of } V \\
\text{Let } B = \Set{ w_{1}, \dots, w_{k} } \text{ be an orthogonal basis of } W \\
\text{Let } v \in V \\
\text{Then orthogonal projection } P_{W}(v) = \sum_{i=1}^{k} \frac{\langle v, w_{i} \rangle }{\lVert w_{i} \rVert^{2} }w_{i} \\
\text{Equivalent: Orthogonal projection is a vector such that } \forall w \in W: \lVert v - w \rVert \geq \lVert v - P_{W}(v) \rVert \\
}
$$
## Properties of orthogonal projection #lemma 
$$
\displaylines{
\forall v \in V: P_{W}(v) \in W \\
}
$$
---
$$
\displaylines{
v \in W \iff P_{W}(v) = v \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } v \in W \\
B \text{ is an orthogonal basis } \implies v = \sum_{i=1}^{k} \frac{\langle v, w_{i} \rangle }{\lVert w_{i} \rVert^{2} }w_{i} \\
\implies \boxed{ v = P_{W}(v) } \\
\\
\boxed{ \impliedby } \text{ Let } P_{W}(v) = v \\
P_{W}(v) \in W \implies \boxed{ v \in W } \\
}
$$
---
$$
\displaylines{
P_{W}(v) = 0 \iff v \in W^{\perp} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } P_{W}(v) = 0 \\
B \text{ is a linear independence} \implies \forall w_{i} \in W: \frac{\langle v, w_{i} \rangle }{\lVert w_{i} \rVert^{2} } = 0 \\
\implies \forall w_{i} \in B: \langle v, w_{i} \rangle = 0 \implies \boxed{ v \in B^{\perp} = (sp(B))^{\perp} = W^{\perp} } \\
\\
\boxed{ \impliedby } \text{ Let } v \in W^{\perp} \\
\implies \forall w_{i} \in B: \langle v, w_{i} \rangle = 0 \implies \boxed{ P_{W}(v) = 0 } \\
}
$$
---
$$
\displaylines{
w \in W \iff \forall v \in V: \langle v - P_{W}(v), w \rangle = 0 \\
\text{Or in other words: } v - P_{W}(v) \in W^{\perp} \\
\\
\text{Proof:} \\
w \in W \implies w = \sum_{i=1}^{k} \alpha_{i}w_{i} \\
\langle v - P_{W}(v), w \rangle = 0 \iff \langle v, w \rangle = \langle P_{W}(v), w \rangle \\
\langle v, w \rangle = \left\langle  v, \sum_{i=1}^{k} \alpha_{i}w_{i}  \right\rangle = \boxed{ \sum_{i=1}^{k} \overline{\alpha_{i}}\langle v, w_{i} \rangle } \\
\langle P_{W}(v), w \rangle = \left\langle  P_{W}(v), \sum_{i=1}^{k} \alpha_{i}w_{i}  \right\rangle = \sum_{i=1}^{k} \beta_{i}\langle w_{i}, w \rangle = \\
= \sum_{i=1}^{k} \sum_{j=1}^{k} \beta_{i}\overline{\alpha_{j}} \langle w_{i}, w_{j} \rangle = \sum_{i=1}^{k} \frac{\langle v, w_{i} \rangle }{\lVert w_{i} \rVert^{2} }\overline{\alpha_{i}} \langle w_{i}, w_{i} \rangle = \boxed{ \sum_{i=1}^{k} \overline{\alpha_{i}}\langle v, w_{i} \rangle } \\
\implies \boxed{ \langle v, w \rangle = \langle P_{W}(v), w \rangle } \\
}
$$
