---
{"publish":true,"created":"28/07/25, 12:07","modified":"2026-03-24T15:00:54.425+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Let } B \text{ be an ordered basis of } V \\
\text{Then } \lambda \text{ is an eigenvalue of } T \iff \lambda \text{ is an eigenvalue of } [T]^{B}_{B} \\
\\
\text{Proof:} \\
\lambda \text{ is an eigenvalue of } T \iff \exists v \neq 0 \in V: Tv = \lambda \iff \\
\iff [Tv]_{B} = [\lambda v]_{B} \iff [T]^{B}_{B}[v]_{B} = \lambda[v]_{B} \underbrace{ \iff }_{ v \neq 0 \iff [v]_{B} \neq 0 } \lambda \text{ is an eigenvalue of } [T]^{B}_{B} \\
}
$$
# 2
$$
\displaylines{
\text{Formulate and prove Cayley-Hamilton theorem} \\
\\
\text{The theorem states: } \forall A \in \mathbb{F}^{n \times n}: P_{A}(A) = 0 \\
\\
\text{Proof:} \\
P_{A}(x) = \det(xI-A) = x^{n} + \sum_{i=0}^{n-1} \alpha_{i}x^{i} \\
\text{Let } \alpha_{n} = 1 \\
\implies P_{A}(x) = \sum_{i=0}^{n} \alpha_{i}x^{i} \\
(xI-A) \in \mathbb{F}^{n \times n} \implies (xI-A) \cdot \mathrm{adj}(xI-A) = \det(xI-A)I = P_{A}(x)I \\
\text{By definition of adjugate matrix: } \mathrm{adj}(xI - A) \in \mathbb{F}_{n-1}[x]^{n \times n} \\
\text{Meaning } \mathrm{adj}(xI-A) \text{ is a matrix where each entry is a polynomial of degree } n-1 \\
\implies \exists \Set{ B_{0}, \dots, B_{n-1} } \subseteq \mathbb{F}^{n \times n} : \mathrm{adj}(xI-A) = \sum_{i=0}^{n-1} x^{i}B_{i} \\
\text{Where } \forall i \in [0, n-1]: \forall j,k \in [1, n]: (B_{i})_{jk} = \text{Coefficient of } x^{i} \text{ in } \mathrm{adj}(xI-A)_{jk} \\
\implies (xI-A) \cdot \sum_{i=0}^{n-1} x^{i}B_{i} = P_{A}(x)I = \sum_{i=0}^{n} \alpha_{i}x^{i}I \\
\text{Let us compare these polynomials term-by-term:} \\
\begin{array}{c|c}
 & x^{n} & x^{n-1} & \dots & x & 1 \\
\text{Left side} & B_{n-1} & B_{n-2}-AB_{n-1} & \dots & B_{0} - AB_{1} & -AB_{0} \\
\text{Right side} & I & \alpha_{n-1}I & \dots & \alpha_{1}I & \alpha_{0}I \\
\end{array} \\
\text{Let us multiply each term } x^{i} \text{ by } A^{i} \text{ on both sides:} \\
\begin{array}{c|c}
 & x^{n} & x^{n-1} & \dots & x & 1 \\
\text{Left side} & A^{n}B_{n-1} & A^{n-1}B_{n-2}-A^{n}B_{n-1} & \dots & AB_{0} - A^{2}B_{1} & -AB_{0} \\
\text{Right side} & A^{n} & \alpha_{n-1}A^{n-1} & \dots & \alpha_{1}A & \alpha_{0}I \\
\end{array} \\
\text{Each term is equal to its counter part} \implies \text{Sums of both sides are also equal} \\
A^{n}B_{n-1} + A^{n-1}B_{n-2} - A^{n}B_{n-1} + \dots + AB_{0} - A^{2}B_{1} - AB_{0} = \\
= A^{n} + \alpha_{n-1}A^{n-1} + \dots + \alpha_{1}A + \alpha_{0}I = P_{A}(A) \\
\text{Let us reorder the left side:} \\
A^{n}B_{n-1} + A^{n-1}B_{n-2} - A^{n}B_{n-1} + \dots + AB_{0} - A^{2}B_{1} - AB_{0} = \\
= (A^{n}B_{n-1} - A^{n}B_{n-1}) + (A^{n-1}B_{n-2} - A^{n-1}B_{n-2}) + \dots + (A^{2}B_{1} - A^{2}B_{1}) + (AB_{0} - AB_{0}) = \\
= 0 + 0 + \dots + 0 + 0 = 0 \\
\implies \boxed{ P_{A}(A) = 0 } \\
}
$$
# 3
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Then } A \text{ is diagonalizable} \iff m_{A}(x) \text{ is factorizable into distinct linear factors} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } A \text{ be diagonalizable} \\
\implies P_{A}(x) \text{ is factorizable into linear factors} \implies \text{There exists a normal Jordan form of } A \\
A \sim D \text{ and } D \text{ is diagonal} \implies D \text{ is also a normal Jordan form} \\
J_{A} \text{ is unique up to the order of blocks} \implies J_{A} = D \\
\implies \text{For all eigenvalues, the largest Jordan block is of size } 1 \\
\implies \text{For each eigenvalue $\lambda_{i}$, its factor in } m_{A}(x) \text{ has degree one} \\
\implies \boxed{ m_{A}(x) = \prod_{i=1}^{k} (x-\lambda_{i}) \text{ is factorizable into distinct linear factors} } \\
\\
\boxed{ \impliedby } \text{ Let } m_{A}(x) \text{ be factorizable into distinct linear factors} \\
\implies m_{A}(x) = \prod_{i=1}^{k} (x-\lambda_{i}) \\
P_{A}(x) \mid m_{A}^{n}(x) = \prod_{i=1}^{k} (x-\lambda_{i})^{n} \implies P_{A}(x) \text{ is factorizable into linear factors} \\
\implies \text{There exists a normal Jordan form of } A \\
A \sim J_{A} \\
\text{For each eigenvalue $\lambda_{i}$, its degree in } m_{A}(x) \text{ is one} \\
\implies \text{Largest Jordan block for all eigenvalues is of size } 1 \\
\implies J_{A} \text{ is diagonal} \implies \boxed{ A \text{ is diagonalizable} } \\
}
$$
# 4
$$
\displaylines{
\text{Formulate and prove Pythageorean theorem} \\
\\
\text{The theorem states:} \\
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } B \text{ be an orthogonal basis of } V \\
\text{Let } v \in V \\
\text{Then } \lVert v \rVert^{2} = \left\lVert  \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rVert^{2} = \sum_{i=1}^{n} \lVert \alpha_{i}v_{i} \rVert^{2} = \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} \cdot \lVert v_{i} \rVert^{2} \\
\\
\text{Proof:} \\
\lVert v \rVert^{2} = \left\lVert  \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rVert^{2} = \left\langle  \sum_{i=1}^{n} \alpha_{i}v_{i}, \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rangle = \sum_{i=1}^{n} \alpha_{i}\left\langle  v_{i}, \sum_{j=1}^{n} \alpha_{j}v_{j}  \right\rangle = \\
= \sum_{i=1}^{n}\sum_{j=1}^{n}  \alpha_{i}\overline{\alpha_{j}}\langle v_{i}, v_{j} \rangle \underbrace{ = }_{ i \neq j \implies \langle v_{i}, v_{j} \rangle = 0 } \sum_{i=1}^{n} \alpha_{i}\overline{\alpha_{i}}\langle v_{i}, v_{i} \rangle = \\
= \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} \cdot \lVert v_{i} \rVert^{2} = \sum_{i=1}^{n} \lVert \alpha_{i}v_{i} \rVert^{2} \\
}
$$
# 5
$$
\displaylines{
\text{Formulate and prove Cauchy-Schwartz inequality} \\
\\
\text{The theorem states:} \\
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } v, u \in V \\
\text{Then } \lVert v \rVert \cdot \lVert u \rVert \geq \left\lvert \langle v, u \rangle \right\rvert \\
\text{And } \lVert v \rVert \cdot \lVert u \rVert = \left\lvert \langle v, u \rangle \right\rvert \iff \underbrace{ \exists \alpha \in \mathbb{F}: v = \alpha u }_{ \text{ I can write just linearly dependant} } \\
\\
\text{Proof:} \\
\text{Case 1. } v = u = 0 \\
\implies \underbrace{ \lVert v \rVert }_{ 0 } \cdot \underbrace{ \lVert u \rVert }_{ 0 } = \left\lvert \underbrace{ \langle v, u \rangle }_{ 0 } \right\rvert = 0 \\
\text{Case 2. } v \neq 0 \text{ or } u \neq 0, \text{ Let } v \neq 0 \\
\text{Let } A = \Set{ \frac{v}{\lVert v \rVert} } \text{ be an orthonormal set} \\
\implies \text{By Bessel's inequality: } \lVert u \rVert \geq \left\lvert \left\langle  u, \frac{v}{\lVert v \rVert}  \right\rangle \right\rvert^{2} = \frac{1}{\lVert v \rVert^{2}}\left\lvert \langle u, v \rangle \right\rvert^{2} = \frac{1}{\lVert v \rVert^{2}}\left\lvert \langle v, u \rangle \right\rvert^{2} \\
\text{All terms are non-negative, so we can remove the squares} \implies \boxed{ \lVert v \rVert \cdot \lVert u \rVert \geq \left\lvert \langle v, u \rangle \right\rvert } \\
\lVert v \rVert \cdot \lVert u \rVert = \left\lvert \langle v, u \rangle \right\rvert \iff \lVert u \rVert^{2} = \frac{1}{\lVert v \rVert^{2}}\left\lvert \langle v, u \rangle \right\rvert^{2} \underbrace{ \iff }_{ \text{Bessel's equality case} } u \in spA \iff \\
\iff \exists \beta \in \mathbb{F}: u = \underbrace{ \frac{\beta}{\lVert v \rVert} }_{ \alpha }v \text{ P.S. I can write just linearly dependant} \\
}
$$
# 6
$$
\displaylines{
\text{Formulate and prove Riesz representation theorem} \\
\\
\text{The theorem states:} \\
\text{Let } V \text{ be a finite-dimensional inner product space over } \mathbb{F} \\
\text{Let } T: V \to \mathbb{F} \text{ be a linear operator} \\
\text{Then } \exists! \ h \in V: \forall v \in V: T(v) = \langle v, h \rangle \\
\\
\text{Proof:} \\
\text{Let } B \text{ be an orthonormal basis of } V \\
\text{Let } C = \Set{ 1 } \text{ be an orthonormal basis of } \mathbb{F} \\
\forall v \in V: T(v) = [T(v)]_{C} = [T]^{B}_{C}[v]_{B} \\
\forall v, u \in V: \langle v, u \rangle = [v]_{B}^{T}G_{B}\overline{[u]_{B}} = [v]_{B}^{T}\overline{[u]_{B}} \\
\langle v, u \rangle \in \mathbb{F} \implies \langle v, u \rangle = \langle v, u \rangle^{T} \\
\implies \langle v, u \rangle = \overline{[u]_{B}^{T}}[v]_{B} \\
[ \ ]_{B} \text{ is an isomorphism, is it surjective} \implies \forall w \in \mathbb{F}^{n}: \exists h \in V: [h]_{B} = w \\
[T]^{B}_{C} \in \mathbb{F}^{1 \times n} \implies ([T]^{B}_{C})^{T} \in \mathbb{F}^{n} \implies \overline{([T]^{B}_{C})^{T}} \in \mathbb{F}^{n} \\
\text{Let } h \in V: [h]_{B} = \overline{([T]^{B}_{C})^{T}} \\
\implies \overline{[h]_{B}^{T}} = [T]^{B}_{C} \\
\implies \boxed{ \forall v \in V: \langle v, h \rangle = \overline{[h]_{B}^{T}}[v]_{B} = [T]^{B}_{C}[v]_{B} = [T(v)]_{C} = T(v) } \\
\\
\text{Let us prove that such } h \text{ is unique} \\
\text{Let } h_{1}, h_{2} \in V: \forall v \in V: \langle v, h_{1} \rangle = T(v) = \langle v, h_{2} \rangle \\
\implies \forall v \in V: \langle v, h_{1} \rangle = \langle v, h_{2} \rangle \implies \boxed{ h_{1} = h_{2} } \\
}
$$
# 7
$$
\displaylines{
\text{Let } V, U \text{ be finite-dimensional inner product spaces over } \mathbb{F} \\
\text{Let } T: V \to U \text{ be a linear operator} \\
\text{Then } \exists! \ S: U \to V \text{ linear operator}: \forall v \in V, \forall u \in U: \langle Tv, u \rangle = \langle v, Su \rangle \\
\\
\text{Proof:} \\
\text{Let } \forall u \in U: K_{u}: V \to \mathbb{F}: \langle Tv, u \rangle \\
\text{By Riesz representation theorem, } \exists ! h_{u} \in V: \forall v \in V: K_{u}(v) = \langle v, h_{u} \rangle \\
\text{Let } S: U \to V: \forall u \in U: S(u) = h_{u} \\
\implies \boxed{ \forall v \in V, \forall u \in U: \langle T(v), u \rangle = K_{u} = \langle v, h_{u} \rangle = \langle v, S(u) \rangle } \\
\\
\text{Let us prove that } S \text{ is a linear operator} \\
\text{Let } u_{1}, u_{2} \in U, \alpha \in \mathbb{F} \\
\forall v \in V: \langle v, S(u_{1} + \alpha u_{2}) \rangle = \langle T(v), u_{1} + \alpha u_{2} \rangle = \langle T(v), u_{1} \rangle + \overline{\alpha}\langle T(v), u_{2} \rangle = \\
= \langle v, S(u_{1}) \rangle + \overline{\alpha}\langle v, S(u_{2}) \rangle = \langle v, S(u_{1}) + \alpha S(u_{2}) \rangle \\
\implies S(u_{1} + \alpha u_{2}) = S(u_{1}) + \alpha S(u_{2}) \implies \boxed{ S \text{ is a linear operator} } \\
\\
\text{Let us prove that such } S \text{ is unique} \\
\text{Let } S_{1}, S_{2}: U \to V: \forall v \in V, \forall u \in U: \langle v, S_{1}(u) \rangle = \langle T(v), u \rangle = \langle v, S_{2}(u) \rangle \\
\forall v \in V, \forall u \in U: \langle v, S_{1}(u) \rangle = \langle v, S_{2}(u) \rangle \implies \forall u \in U: S_{1}(u) = S_{2}(u) \\
\implies \boxed{ S_{1} = S_{2} } \\
}
$$
# 8
$$
\displaylines{
\text{Let } V, W \text{ be finite-dimensional inner product spaces over } \mathbb{F} \\
\text{Let } B, C \text{ be ordered orthonormal bases of } V, W \text{ accordingly} \\
\text{Let } T: V \to W \text{ be a linear operator} \\
\text{Then } [T^{*}]^{C}_{B} = ([T]^{B}_{C})^{*} \\
\\
\text{Proof:} \\
\dim V = n \\
\dim W = m \\
\implies ([T]^{B}_{C})^{*} \in \mathbb{F}^{n \times m}, [T^{*}]^{C}_{B} \in \mathbb{F}^{n \times m} \\
\\
\forall v \in V, w \in W: \langle Tv, w \rangle = \langle v, T^{*}w \rangle \\
\langle Tv, w \rangle = [Tv]_{C}^{T}G_{C}\overline{[w]_{C}} = ([T]^{B}_{C}[v]_{B})^{T}\overline{[w]_{C}} = [v]_{B}^{T}([T]^{B}_{C})^{T}\overline{[w]_{C}} \\
\langle v, T^{*}w \rangle = [v]_{B}^{T}G_{B}\overline{[T^{*}w]_{B}} = [v]_{B}^{T}\overline{[T^{*}]^{C}_{B}}\overline{[w]_{C}} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \\
\text{Let } C = \Set{ w_{1}, \dots, w_{m} } \\
\forall i \in [1, n]: \forall j \in [1, m]: \langle Tv_{i}, w_{j} \rangle = \langle v_{i}, T^{*}w_{j} \rangle \\
\implies [v_{i}]_{B}^{T}([T]^{B}_{C})^{T}\overline{[w_{j}]_{C}} = [v_{i}]_{B}^{T}\overline{[T^{*}]^{C}_{B}}\overline{[w_{j}]_{C}} \\
\implies e_{i}^{T}([T]^{B}_{C})^{T}\underbrace{ e_{j} }_{ = \overline{e_{j}} } = e_{i}^{T}\overline{[T^{*}]^{C}_{B}}\underbrace{ e_{j} }_{ = \overline{e_{j}} } \\
\implies \forall i \in [1, n]: \forall j \in [1, m]: ([T]^{B}_{C})^{T}_{ij} = (\overline{[T^{*}]^{C}_{B}})_{ij} \\
\implies ([T]^{B}_{C})^{T} = \overline{[T^{*}]^{C}_{B}} \implies \boxed{ ([T]^{B}_{C})^{*} = [T^{*}]^{C}_{B} } \\
}
$$
# 9
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } B, B' \text{ be ordered bases of } V \\
\text{Let } C = [I]^{B'}_{B} \\
\text{Then } G_{B'} = C^{T}G_{B}\overline{C} \\
\\
\text{Proof:} \\
\forall v, u \in V: \langle v, u \rangle = [v]_{B}^{T}G_{B}\overline{[u]_{B}} = \\
= ([I]^{B'}_{B}[v]_{B'})^{T}G_{B}\overline{[I]^{B'}_{B}[u]_{B'}} = \\
= [v]_{B'}^{T}C^{T}G_{B}\overline{C}\overline{[u]_{B'}} \\
foral v, u \in V: \langle v, u \rangle = [v]_{B'}^{T}G_{B'}\overline{[u]_{B'}} \\
\text{Let } B' = \Set{ v_{1}, \dots, v_{n} } \\
\forall i \in [1, n]: \langle v_{i}, v_{j} \rangle = [v_{i}]_{B'}^{T}C^{T}G_{B}\overline{C}\overline{[v_{j}]_{B'}} = [v_{i}]_{B'}^{T}G_{B'}\overline{[v_{j}]_{B'}} \\
\implies e_{i}^{T}C^{T}G_{B}\overline{C}\overline{e_{j}} = e_{i}^{T}G_{B'}\overline{e_{j}} \\
\implies \forall i, j \in [1, n]: (C^{T}G_{B}\overline{C})_{ij} = (G_{B'})_{ij} \implies \boxed{ C^{T}G_{B}\overline{C} = G_{B'} } \\
}
$$
# 10
$$
\displaylines{
\text{Formulate and prove normality criterion} \\
\\
\text{The theorem states:} \\
\text{Let } V \text{ be a finite-dimensional inner product space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Then } T \text{ is normal} \iff \forall v \in V: \lVert Tv \rVert = \lVert T^{*}v \rVert \\
\\
\text{Proof:} 
\boxed{ \implies } \text{ Let } T \text{ be normal} \\
\implies \forall v \in V: \lVert Tv \rVert^{2} = \langle Tv, Tv \rangle = \langle v, T^{*}Tv \rangle = \langle v, TT^{*}v \rangle = \langle T^{*}v, T^{*}v \rangle = \lVert T^{*}v \rVert^{2} \\
\implies \boxed{ \forall v \in V: \lVert Tv \rVert = \lVert T^{*}v \rVert } \\
\\
\boxed{ \impliedby } \text{ Let } \forall v \in V: \lVert Tv \rVert = \lVert T^{*}v \rVert \\
\text{Let us recall polar norm equations:} \\
\mathrm{Re}(\langle v, u \rangle) = \frac{1}{2}(\lVert v + u \rVert - \lVert v \rVert - \lVert u \rVert) \\
\mathrm{Im}(\langle v, u \rangle) = i \frac{1}{2}(\lVert v + iu \rVert - \lVert v \rVert - \lVert u \rVert) \\
\implies \forall v, u \in V: \langle v, TT^{*}u \rangle = \langle T^{*}v, T^{*}u \rangle = \\
= \frac{1}{2}(\lVert T^{*}v+T^{*}u \rVert - \lVert T^{*}v \rVert - \lVert T^{*}u \rVert) + i \frac{1}{2}(
\lVert T^{*}v + iT^{*}u \rVert - \lVert T^{*}v \rVert - \lVert T^{*}u \rVert) \\
\lVert T^{*}v + T^{*}u \rVert = \lVert T^{*}(v+u) \rVert = \lVert T(v+u) \rVert = \lVert Tv + Tu \rVert \\
\lVert T^{*}v + iT^{*}u \rVert = \lVert T^{*}(v+iu) \rVert = \lVert T(v+iu) \rVert = \lVert Tv + iTu \rVert \\
\implies \langle T^{*}v, T^{*}u \rangle = \\
= \frac{1}{2}(\lVert Tv+Tu \rVert - \lVert Tv \rVert - \lVert Tu \rVert) + i \frac{1}{2}(
\lVert Tv + iTu \rVert - \lVert Tv \rVert - \lVert Tu \rVert) = \\
= \langle Tv, Tu \rangle = \langle v, T^{*}Tu \rangle \\
\forall v \in V, \forall u \in U: \langle v, TT^{*}u \rangle = \langle v, T^{*}Tu \rangle \implies \forall u \in U: TT^{*}u = T^{*}Tu \\
\implies TT^{*} = T^{*}T \implies \boxed{ T \text{ is normal} } \\
}
$$
