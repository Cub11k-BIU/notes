---
{"publish":true,"created":"06/05/25, 10:05","modified":"2025-11-21T21:10:14.514+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Inner product #definition 
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} (\mathbb{F} \in \Set{ \mathbb{R}, \mathbb{C} }) \\
\langle \,, \rangle : V \times V \to \mathbb{F} \text{ is called inner product if} \\
1. \quad \text{Linearity in the first argument: } \langle v + \alpha u, w \rangle = \langle v, w \rangle + \alpha \langle u, w \rangle \\
2. \quad \text{ Conjugate symmetry (Hermitian): } \langle v, u \rangle = \overline{\langle u, v \rangle} \\
3. \quad \text{Positive-definiteness: } \forall v \neq 0: \langle v, v \rangle > 0 \\
3.1 \quad v = 0 \iff \langle v, v \rangle = 0 \\
V \text{ is then called an inner product space} \\
}
$$
## Standard inner product
$$
\displaylines{
\text{Let } V = \mathbb{R}^{n} \\
\text{Standard inner product is } \langle v, u \rangle = v^{T}u = \sum_{i=1}^{n} v_{i}u_{i} \\
\\
\langle v+\alpha u, w \rangle = (v+\alpha u)^{T}w = v^{T}w + \alpha u^{T}w = \langle v, w \rangle + \alpha \langle u, w \rangle \\
\langle v, w \rangle = v^{T}w = (v^{T}w)^{T} = w^{T}v = \overline{w^{T}v} = \overline{\langle w, v \rangle} \\
v \neq 0 \implies \langle v, v \rangle = v^{T}v = \sum_{i=1}^{n} v_{i}^{2} > 0 \\
v = 0 \iff \sum_{i=1}^{n} v_{i}^{2} = 0 \iff v^{T}v = 0 \iff \langle v, v \rangle = 0 \\
\\
\text{Let } V = \mathbb{C}^{n} \\
\text{Standard inner product is} \langle v, u \rangle = v^{T}\overline{u} = \sum_{i=1}^{n} v_{i}\overline{u_{i}} \\
\\
\text{Let } V \in \mathbb{F}^{n \times n} \\
\text{Standard inner product is } \langle A, B \rangle = tr(AB^{*}) = tr(A\overline{B}^{T}) \\
}
$$
## Properties of inner product #lemma 
$$
\displaylines{
\forall v \in V: \langle 0_{V}, v \rangle = \langle 0_{\mathbb{F}} \cdot 0_{V}, v \rangle = 0_{\mathbb{F} \cdot \langle 0_{V}, v \rangle } = 0_{\mathbb{F}} \\
\forall v \in V: \langle v, 0_{V} \rangle = \overline{\langle 0_{V}, v \rangle } = \langle 0_{V}, v \rangle = 0_{\mathbb{F}} \\
\langle v, w+\alpha u \rangle = \overline{\langle w+\alpha u, v \rangle } = \overline{\langle w, v \rangle } + \overline{\alpha} \cdot \overline{\langle u, v \rangle } = \overline{\overline{\langle v, w \rangle }} + \overline{\alpha} \cdot \overline{\overline{\langle v, u \rangle }} = \\
= \langle v, w \rangle + \overline{\alpha} \cdot \langle v, u \rangle \\
}
$$
## Zero inner product #lemma 
$$
\displaylines{
\text{Let } v \in V: \forall u \in V: \langle v, u \rangle = 0 \\
\text{Then } v = 0 \\
\\
\text{Proof:} \\
\forall u \in V: \langle v, u \rangle = 0 \implies \langle v, v \rangle = 0 \implies v = 0 \\
}
$$
## Norm #definition 
$$
\displaylines{
\text{Let } V \text{ over } \mathbb{F} \\
\lVert \, \rVert : V \times V \to \mathbb{F} \text{ is called a norm if } \\
1. \quad v \neq 0 \implies \lVert v \rVert > 0 \\
2. \quad v = 0 \iff \lVert v \rVert = 0 \\
3. \quad \lVert \alpha v \rVert = \left\lvert \alpha \right\rvert \cdot \lVert v \rVert \\
4. \quad \lVert v + u \rVert \leq \lVert v \rVert + \lVert u \rVert \\
}
$$
## "Root" norm #definition 
$$
\displaylines{
\forall v \in V: \lVert v \rVert = \sqrt{ \langle v, v \rangle } \\
\text{This norm will be used throughout the course} \\
}
$$
## Metric #definition 
$$
\displaylines{
p: V \times V \to \mathbb{R} \text{ is called a metric if} \\
1. \quad p(v, u) \geq 0 \\
2. \quad v = u \iff p(v, u) = 0 \\
3. \quad p(v, u) = p(u, v) \\
4. \quad p(v, u) \leq (p, w) + p(w, u) \\
}
$$
## Standard metric
$$
\displaylines{
\forall v, u \in V : p(v, u) = \lVert v - u \rVert \\
}
$$
## Orthogonal vectors #definition 
$$
\displaylines{
v, u \text{ are called orthogonal iff } \langle v, u \rangle = 0 \\
}
$$
## Orthogonal set #definition 
$$
\displaylines{
\text{Let } S \subseteq V \\
S \text{ is called orthogonal set iff } \forall v, u \in S: \langle v, u \rangle = 0 \\
}
$$
## Normal vector #definition 
$$
\displaylines{
v \text{ is called normal iff } \lVert v \rVert = 1 \\
}
$$
## Orthonormal set #definition 
$$
\displaylines{
\text{Let } S \subseteq V \text{ be a orthogonal set} \\
S \text{ is then called orthonormal iff } \forall v \in S: \lVert v \rVert = 1 \\
}
$$
