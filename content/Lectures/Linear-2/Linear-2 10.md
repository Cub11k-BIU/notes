---
{"publish":true,"created":"07/06/25, 15:06","modified":"2025-11-21T21:10:14.524+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Gram-Schmidt matrix #definition 
$$
\displaylines{
B = \Set{ v_{1}, \dots, v_{n} } \text{ is a basis of } V \\
(G_{B})_{ij} = \langle v_{i}, v_{j} \rangle \\
B \text{ is orthonormal} \implies G_{B} = I \\
}
$$
## Inner product general form #lemma 
$$
\displaylines{
\forall v, u \in V: \langle v, u \rangle = [v]_{B}^{T}G_{B}\overline{[u]_{B}} \\
\\
\text{Proof:} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \\
\text{Let } v, u \in V \\
v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
u = \sum_{i=1}^{n} \beta_{i}v_{i} \\
\langle v, u \rangle = \left\langle  \sum_{i=1}^{n} \alpha_{i}v_{i}, u  \right\rangle = \sum_{i=1}^{n} \alpha_{i}\langle v_{i}, u \rangle = \\
= \sum_{i=1}^{n} \alpha_{i}\left\langle  v_{i}, \sum_{j=1}^{n} \beta_{j}v_{j} \right\rangle = \boxed{ \sum_{i=1}^{n} \sum_{j=1}^{n} \alpha_{i}\overline{\beta_{j}}\langle v_{i}, v_{j} \rangle } \\
\\
[v]_{B}^{T}G_{B}\overline{[u]_{B}} = \begin{pmatrix}
\alpha_{1} & \dots & \alpha_{n} \\
\end{pmatrix}G_{B}\begin{pmatrix}
\overline{\beta_{1}} \\
\vdots \\
\overline{\beta_{n}} \\
\end{pmatrix} = \\
= \begin{pmatrix}
\alpha_{1} & \dots & \alpha_{n} \\
\end{pmatrix} \begin{pmatrix}
\sum_{i=1}^{n} \overline{\beta_{i}}(G_{B})_{1i} \\
\vdots \\
\sum_{i=1}^{n} \overline{\beta_{i}}(G_{B})_{ni} \\
\end{pmatrix} = \sum_{i=1}^{n} \sum_{j=1}^{n} \alpha_{i}\overline{\beta_{j}}(G_{B})_{ij} = \\
= \boxed{ \sum_{i=1}^{n} \sum_{j=1}^{n} \alpha_{i}\overline{\beta_{j}}\langle v_{i}, v_{j} \rangle } \\
}
$$
## Riesz Representation theorem #theorem 
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } T: V \to \mathbb{F} \text{ be a linear transformation} \\
\text{Then } \exists! h \in V: \forall v \in V: T(v) = \langle v, h \rangle \\
\\
\text{Proof:} \\
\text{Let } B \text{ be an orthonormal basis of } V \\
\text{Let } C = \Set{ 1 } \text{ be a standard basis of } \mathbb{F} \\
T(v) = [T(v)]_{C} = [T]^{B}_{C} [v]_{B} \in \mathbb{F} \implies T(v) = ([T]^{B}_{C}[v]_{B})^{T} = [v]_{B}^{T}([T]^{B}_{C})^{T} \\
\langle v, h \rangle = [v]_{B}^{T}G_{B}\overline{[h]^{B}} = [v]_{B}^{T}\overline{[h]_{B}} \\
[\cdot]_{B} \text{ is surjective} \implies \boxed{ \exists h \in V: [h]_{B} = \overline{([T]^{B}_{C})^{T}} = (\overline{[T]^{B}_{C}})^{T} } \\
\text{Let } \forall v \in V: \langle v, h_{1} \rangle = T(v) = \langle v, h_{2} \rangle \\
\implies [v]^{T}_{B}\overline{[h_{1}]_{B}} = [v]_{B}^{T}\overline{[h_{2}]_{B}} \\
\implies [h_{1}]_{B} = [h_{2}]_{B} \implies \boxed{ h_{1} = h_{2} } \\
}
$$
## Adjoint linear transformation #definition 
$$
\displaylines{
\text{Let } V, U \text{ be inner product spaces over } \mathbb{F} \\
\text{Let } T: V \to U \text{ be a linear transformation} \\
\text{Let } S: U \to V \text{ be a linear transformation} \\
\text{such that } \forall v \in V, u \in U: \langle T(v), u \rangle = \langle v, S(u) \rangle \\
S \text{ is then called a conjugate or adjoint linear transformation of } T \\
S \text{ is then denoted as } T^{*} \\
}
$$
## Existence and uniqueness of adjoint linear transformation #theorem 
$$
\displaylines{
\text{Let } V, U \text{ be inner product spaces over } \mathbb{F} \\
\text{Let } T: V \to U \text{ be a linear transformation} \\
\text{Let } S: U \to V \text{ be a linear transformation} \\
\text{Then } \exists! S: S \text{ is a adjoint linear transformation of } T \\
\\
\text{Proof:} \\
\text{Let } u \in U \\
\text{Let } K_{u}: V \to \mathbb{F}, K_{u}(v) = \langle T(v), u \rangle \\
\implies \text{ By Riesz theorem } \exists h_{u} \in V: \forall v \in V: K_{u}(v) = \langle v, h_{u} \rangle \\
\text{Let } S: U \to V, S(u) = h_{u} \\
\implies \forall v \in V, u \in U: \langle T(v), u \rangle = \langle v, h_{u} \rangle = \langle v, S(u) \rangle \\
\\
\text{Let } v \in V, u_{1}, u_{2} \in U, \alpha \in \mathbb{F} \\
\langle v, S(u_{1}+\alpha u_{2})\rangle = \langle T(v), u_{1} + \alpha u_{2} \rangle = \langle T(v), u_{1} \rangle + \overline{\alpha}\langle T(v), u_{2} \rangle = K_{u_{1}}(v) + \overline{\alpha}K_{u_{2}}(v) = \\
= \langle v, h_{u_{1}} \rangle + \overline{\alpha}\langle v, h_{u_{2}} \rangle = \langle v, S(u_{1}) \rangle + \overline{\alpha}\langle v, S(u_{2}) \rangle = \langle v, S(u_{1}) + \alpha S(u_{2}) \rangle \\
\forall v \in V: \langle v, S(u_{1}+\alpha u_{2})\rangle = \langle v, S(u_{1}) + \alpha S(u_{2}) \rangle \\
\implies S(u_{1} + \alpha u_{2}) = S(u_{1}) + \alpha S(u_{2}) \implies \boxed{ S \text{ is a linear transformation} } \\
\text{Let } \hat{S}: U \to V, \forall v \in V, u \in U: \langle T(v), u \rangle = \langle v, S(u) \rangle \\
\implies \forall v \in V, u \in U: \langle v, S(u) \rangle = \langle v, \hat{S}(u) \rangle \implies \forall u \in U: S(u) = \hat{S}(u) \\
\implies \boxed{ S = \hat{S} } \\
}
$$

$$
\displaylines{
\text{Special note:} \\
A \in \mathbb{F}^{n \times m}, v \in \mathbb{F}^{m}, u \in \mathbb{F}^{n} \\
\langle Av, u \rangle = (Av)^{T}\overline{u} = v^{T}A^{T}\overline{u} \\
\langle v, A^{*}u \rangle = v^{T}\overline{A^{*}u} = v^{T}A^{T}\overline{u} \\
\implies \boxed{ \langle Av, u \rangle = \langle v, A^{*}u \rangle } \\
}
$$
## Representation matrix of adjoint linear transformation #lemma 
$$
\displaylines{
B \text{ orthonormal basis of } V \\
C \text{ orthonormal basis of } U \\
T: V \to U \text{ is a linear transformation} \\
[T^{*}]^{C}_{B} = ([T]^{B}_{C})^{*} \\
\\
\text{Proof:} \\
\dim V = n \\
\dim U = m \\
[T]^{B}_{C} \in \mathbb{F}^{m \times n} \\
[T^{*}]^{C}_{B} \in \mathbb{F}^{n \times m} \\
\forall v \in V, u \in U: \langle T(v), u \rangle = \langle v, T*(u) \rangle \\
\langle T(v), u \rangle = [T(v)]_{C}^{T}G_{C}\overline{[u]_{C}} = [T(v)]_{C}^{T}\overline{[u]_{C}} = [v]_{B}^{T}([T]^{B}_{C})^{T}\overline{[u]_{C}} \\
\langle v, T^{*}(u) \rangle = [v]_{B}^{T}G_{B}\overline{[T^{*}(u)]_{B}} = [v]_{B}^{T}\overline{[T^{*}]^{C}_{B}[u]_{C}} = [v]_{B}^{T}\overline{[T^{*}]^{C}_{B}}\overline{[u]_{C}} \\
\implies ([T]^{B}_{C})^{T} = \overline{[T^{*}]^{C}_{B}} \implies \boxed{ ([T]^{B}_{C})^{*} = [T^{*}]^{C}_{B} } \\
}
$$
## Properties of adjoint linear transformation #lemma 
$$
\displaylines{
1. & (T^{*})^{*} = T \\
2. & (T+S)^{*} = T^{*}+S^{*} \\
3. & (\alpha T)^{*} = \overline{\alpha}T^{*} \\
4. & (S \circ T)^{*} = T^{*} \circ S^{*} \\
}
$$
$$
\displaylines{
\text{Proof for 4:} \\
[(S \circ T)^{*}]^{D}_{B} = ([S \circ T]^{B}_{D})^{*} = ([S]^{C}_{D} [T]^{B}_{C})^{*} = ([T]^{B}_{C})^{*} ([S]^{C}_{D})^{*} = [T^{*}]^{C}_{B} [S^{*}]^{D}_{C} = [T^{*} \circ S^{*}]^{D}_{B} \\
}
$$
# Special linear operators #definition 
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear operator} \\
}
$$
## Normal operator
$$
\displaylines{
TT^{*} = T^{*}T \\
}
$$
## Unitary operator
$$
\displaylines{
TT^{*} = I = T^{*}T \\
\text{or } T^{-1} = T^{*} \\
}
$$
## Hermitian (self-adjoint) operator
$$
\displaylines{
T^{*} = T \\
}
$$
# Special matrices #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n} \\
}
$$
## Normal matrix
$$
\displaylines{
AA^{*} = A^{*}A \\
}
$$
## Unitary matrix
$$
\displaylines{
AA^{*} = I = A^{*}A \\
\text{or } A^{-1} = A^{*} \\
}
$$
## Hermitian (self-adjoint) matrix
$$
\displaylines{
A = A^{*} \\
}
$$
