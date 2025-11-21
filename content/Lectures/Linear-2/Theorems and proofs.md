---
{"publish":true,"created":"03/07/25, 15:07","modified":"2025-11-21T21:10:14.573+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

 ## Eigenvalues of linear transformation and representation matrix #lemma 
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
\text{Let } B \text{ be a basis of } V \\ 
\text{Let } T: V \to V \text{ be a linear transformation} \\
\text{Then } \lambda \text{ is an eigenvalue of } T \iff \lambda \text{ is an eigenvalue of } [T]^{B}_{B} \\
\\
\text{Proof:} \\
\lambda \text{ is an eigenvalue of } T \iff \exists v \neq 0 \in V: T(v) = \lambda v \\
\iff \exists v \neq 0 \in V: [T]^{B}_{B}[v]_{B} = [\lambda v]_{B} = \lambda [v]_{B} \iff \lambda \text{ is an eigenvalue of } [T]^{B}_{B} \\
}
$$
## Cayley-Hamilton theorem #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Then } P_{A}(A) = 0 \\
\\
\text{Explanation, not proof:} \\
P_{A}(A) = \det(AI - A) = \det(0) = 0 \\
\\
\text{Proof:} \\
P_{A}(\lambda) = \lambda^{n} + \sum_{i=0}^{n-1} a_{i}\lambda^{i} \\
(\lambda I-A) \cdot \mathrm{adj}(\lambda I-A) = \det(\lambda I-A)I = P_{A}(\lambda)I \\
\mathrm{adj}(\lambda I-A) \in \mathbb{F}_{n-1}[\lambda]^{n \times n} \\
\implies \exists \Set{ B_{0}, \dots, B_{n-1} } \subseteq \mathbb{F}^{n \times n}: \mathrm{adj}(\lambda I-A) = \sum_{i=0}^{n-1} \lambda^{i}B_{i} \\
\implies (\lambda I-A) \cdot \sum_{i=0}^{n-1} \lambda^{i}B_{i} = P_{A}(\lambda)I \\
\implies (\lambda I-A) \cdot \sum_{i=0}^{n-1} \lambda^{i}B_{i} = \sum_{i=0}^{n} \lambda^{i}a_{i}I \\
\implies \begin{array}{c|c}
 & \lambda^{n} & \lambda^{n-1} & \lambda^{n-2} & \dots & \lambda & 1 \\
\text{Left side} & B_{n-1} & B_{n-2} - AB_{n-1} & B_{n-3} - AB_{n-2} & \dots & B_{0}-AB_{1} & -AB_{0} \\
\text{Right side} & I & a_{n-1}I & a_{n-2}I & \dots & a_{1}I & a_{0}I \\
\end{array} \\
\implies A^{n}B_{n-1} + A^{n-1}(B_{n-2}-AB_{n-1}) + \dots + A(B_{0}-AB_{1}) - AB_{0} = \\
= A^{n} + a_{n-1}A^{n-1} + \dots + a_{0}I = P_{A}(A) \\
\implies \boxed{ 0 = P_{A}(A) } \\
}
$$
## Diagonalization and minimal polynomial #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \sim D \iff m_{A} \text{ is factorizable into distinct linear factors} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } A \sim D \\
\implies P_{A}(\lambda) = \prod_{i=1}^{k} (\lambda-\alpha_{i})^{\mu_{A}(\alpha_{i})} \\
\implies m_{A}(\lambda) = \prod_{i=1}^{k} (\lambda-\alpha_{i})^{t_{i}}, t_{i} \leq \mu_{A}(\alpha_{i}) \\
A_{J} = D \\
\implies \text{Largest Jordan block corresponding to any eigenvalue of $A$ is of size } 1 \\
\implies \forall i \in [1, k]: t_{i} = 1 \implies \boxed{ m_{A}(\lambda) = \prod_{i=1}^{k} (\lambda-\alpha_{i}) } \\
\\
\boxed{ \impliedby } \text{Let } m_{A} \text{ be factorizable into distinct linear factors} \\
\implies m_{A}(\lambda) = \prod_{i=1}^{k} (\lambda-\alpha_{i}) \\
\implies P_{A}(\lambda) = \prod_{i=1}^{k} (\lambda-\alpha_{i})^{\mu_{A}(\alpha_{i})} \implies A \sim A_{J} \\
\implies \text{Largest Jordan block corresponding to any eigenvalue of $A$ is of size } 1 \\
\implies A_{J} = D \implies \boxed{ A \sim D } \\
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
## Cauchy-Schwarz inequality #lemma 
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } v, u \in V \\
\lVert v \rVert \cdot \lVert u \rVert \geq \left\lvert \langle v, u \rangle \right\rvert \\
\lVert v \rVert \cdot \lVert u \rVert = \left\lvert \langle v, u \rangle \right\rvert \iff u = \alpha v \\
\\
\text{Proof:} \\
\text{Case 1. } u = v = 0 \\
\underbrace{ \lVert v \rVert }_{ 0 } \cdot \underbrace{ \lVert u \rVert }_{ 0 } \geq \underbrace{ \left\lvert \langle v, u \rangle  \right\rvert }_{ 0 } \\
\text{Case 2. } \left[\begin{array}{}
v \neq 0 \\
u \neq 0 \\
\end{array}\right. \quad \text{Let } v \neq 0 \\
\text{Let } A = \Set{ \frac{v}{\lVert v \rVert } } \\
A \text{ is an orthonormal set} \\
\text{By Bessel's inequality: } \lVert u \rVert^{2} \geq \left\lvert \left\langle  u, \frac{v}{\lVert v \rVert }  \right\rangle  \right\rvert^{2} = \frac{1}{\lVert v \rVert^{2} } \left\lvert \langle u, v \rangle  \right\rvert^{2} \underset{ \left\lvert z \right\rvert = \left\lvert \overline{z} \right\rvert  }{ = } \frac{1}{\lVert v \rVert^{2} } \left\lvert \langle v, u \rangle  \right\rvert^{2} \\
\implies \lVert u \rVert^{2} \cdot \lVert v \rVert^{2} \geq \left\lvert \langle v, u \rangle \right\rvert^{2} \\
\implies \boxed{ \lVert v \rVert \cdot \lVert u \rVert \geq \left\lvert \langle v, u \rangle  \right\rvert } \\
\\
\lVert v \rVert \cdot \lVert u \rVert = \left\lvert \langle v, u \rangle \right\rvert \iff \underbrace{ \lVert u \rVert^{2} = \frac{1}{\lVert v \rVert^{2} } \left\lvert \langle v, u \rangle  \right\rvert^{2} }_{ \text{Bessel's equality case} } \\
\iff u \in spA \iff \boxed{ u = \alpha v  }\\
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
\text{Let } \hat{S}: U \to V, \forall v \in V, u \in U: \langle T(v), u \rangle = \langle v, \hat{S}(u) \rangle \\
\implies \forall v \in V, u \in U: \langle v, S(u) \rangle = \langle v, \hat{S}(u) \rangle \implies \forall u \in U: S(u) = \hat{S}(u) \\
\implies \boxed{ S = \hat{S} } \\
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
\forall v \in V, u \in U: \langle T(v), u \rangle = \langle v, T^{*}(u) \rangle \\
\langle T(v), u \rangle = [T(v)]_{C}^{T}G_{C}\overline{[u]_{C}} = [T(v)]_{C}^{T}\overline{[u]_{C}} = [v]_{B}^{T}([T]^{B}_{C})^{T}\overline{[u]_{C}} \\
\langle v, T^{*}(u) \rangle = [v]_{B}^{T}G_{B}\overline{[T^{*}(u)]_{B}} = [v]_{B}^{T}\overline{[T^{*}]^{C}_{B}[u]_{C}} = [v]_{B}^{T}\overline{[T^{*}]^{C}_{B}}\overline{[u]_{C}} \\
\implies ([T]^{B}_{C})^{T} = \overline{[T^{*}]^{C}_{B}} \implies \boxed{ ([T]^{B}_{C})^{*} = [T^{*}]^{C}_{B} } \\
}
$$
## Gram-Schmidt matrix of two bases #lemma 
$$
\displaylines{
\text{Let } B, \hat{B} \text{ be bases of } V \\
\text{Let } C = [I]^{\hat{B}}_{B} \\
\text{Then } G_{\hat{B}} = C^{T}G_{B}\overline{C} \\
\\
\text{Proof:} \\
\langle v, u \rangle = [v]_{B}^{T}G_{B}\overline{[u]_{B}} = ([I]^{\hat{B}}_{B}[v]_{\hat{B}})^{T}G_{B}\overline{[I]^{\hat{B}}_{B}[u]_{\hat{B}}} = [v]_{\hat{B}}^{T} \cdot C^{T}G_{B}\overline{C} \cdot \overline{[u]_{\hat{B}}} \\
= \langle v, u \rangle = [v]_{\hat{B}}^{T}G_{\hat{B}}\overline{[u]_{\hat{B}}} \\
\implies [v]_{\hat{B}}^{T} \cdot C^{T}G_{B}\overline{C} \cdot \overline{[u]_{\hat{B}}} = [v]_{\hat{B}}^{T} \cdot G_{\hat{B}} \cdot \overline{[u]_{\hat{B}}} \\
\text{Let } \hat{B} = \Set{ v_{1}, \dots, v_{n} } \\
\forall i, j \in [1, n]: [v_{i}]_{\hat{B}}^{T} \cdot C^{T}G_{B}\overline{C} \cdot \overline{[v_{j}]_{\hat{B}}} = [v_{i}]_{\hat{B}}^{T} \cdot G_{\hat{B}} \cdot \overline{[v_{j}]_{\hat{B}}} \\
\implies \forall i, j \in [1, n]: e_{i}^{T} \cdot C^{T}G_{B}\overline{C} \cdot e_{j} = e_{i}^{T} \cdot G_{\hat{B}} \cdot e_{j} \\
\implies \forall i, j \in [1, n]: (C^{T}G_{B}\overline{C})_{ij} = (G_{\hat{B}})_{ij} \\
\implies \boxed{ C^{T}G_{B}\overline{C} = G_{\hat{B}} } \\
}
$$
## Polar norm equations #lemma 
$$
\displaylines{
\mathrm{Re}(\langle v, u \rangle) = \frac{1}{2}(\lVert v + u \rVert^{2} - \lVert v \rVert^{2} - \lVert u \rVert^{2}) \\
\mathrm{Im}(\langle v, u \rangle) = i\frac{1}{2}(\lVert v + iu \rVert^{2} - \lVert v \rVert^{2} - \lVert u \rVert^{2}) \\
}
$$
## Normal linear operator criterion #theorem 
$$
\displaylines{
\text{Let } V \text{ be a finitely generated inner product space over } \mathbb{F} \\
\text{Let } B \text{ be an orthonormal basis of } V \\
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Then } T \text{ is normal} \iff \forall v \in V: \lVert T(v) \rVert = \lVert T^{*}(v) \rVert \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } T \text{ be normal} \\
TT^{*} = T^{*}T \\
\text{Let } v \in V \\
\lVert T(v) \rVert = \sqrt{ \langle Tv, Tv \rangle } = \sqrt{ \langle v, T^{*}Tv \rangle } \\
\lVert T^{*}(v) \rVert = \sqrt{ \langle T^{*}v, T^{*}v \rangle } = \sqrt{ \langle v, TT^{*}v \rangle } = \sqrt{ \langle v, T^{*}Tv \rangle } = \lVert T(v) \rVert \\
\implies \boxed{ \forall v \in V: \lVert T^{*}(v) \rVert = \lVert T(v) \rVert } \\
\\
\boxed{ \impliedby } \text{ Let } \forall v \in V: \lVert T(v) \rVert = \lVert T^{*}(v) \rVert \\
\text{Let } v, u \in V \\
\langle u, TT^{*}v \rangle = \langle T^{*}u, T^{*}v \rangle = \\
= \frac{1}{2}(\lVert T^{*}u + T^{*}v \rVert^{2} - \lVert T^{*}u \rVert^{2} - \lVert T^{*}v \rVert^{2}) + i\frac{1}{2}(\lVert T^{*}u + iT^{*}v \rVert^{2} - \lVert T^{*}u \rVert^{2} - \lVert T^{*}v \rVert^{2}) \\
\langle u, T^{*}Tv \rangle = \langle Tu, Tv \rangle = \\
= \frac{1}{2}(\lVert Tu + Tv \rVert^{2} - \lVert Tu \rVert^{2} - \lVert Tv \rVert^{2}) + i\frac{1}{2}(\lVert Tu + iTv \rVert^{2} - \lVert Tu \rVert^{2} - \lVert Tv \rVert^{2}) \\
\implies \langle u, TT^{*}v \rangle - \langle u, T^{*}Tv \rangle = \\
= \frac{1}{2}(\lVert T^{*}u + T^{*}v \rVert^{2} - \lVert Tu + Tv \rVert^{2}) + i\frac{1}{2}(\lVert T^{*}u + iT^{*}v \rVert^{2} - \lVert Tu + iTv \rVert^{2}) = \\
= \frac{1}{2}(\lVert T^{*}(u + v) \rVert^{2} - \lVert T(u + v) \rVert^{2}) + i\frac{1}{2}(\lVert T^{*}(u + iv) \rVert^{2} - \lVert T(u + iv) \rVert^{2}) = 0 - 0i = 0 \\
\implies \forall v, u \in V: \langle u, TT^{*}v \rangle = \langle u, T^{*}Tv \rangle \implies \boxed{ TT^{*} = T^{*}T } \\
}
$$
