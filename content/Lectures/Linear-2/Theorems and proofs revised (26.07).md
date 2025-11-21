---
{"publish":true,"created":"26/07/25, 20:07","modified":"2025-11-21T21:10:14.560+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Let } B \text{ be a basis of } V \\
\lambda \text{ is an eigenvalue of } T \iff \lambda \text{ is an eigenvalue of } [T]^{B}_{B} \\
\\
\text{Proof:} \\
\lambda \text{ is an eigenvalue of } T \iff \exists v \neq 0: Tv = \lambda v \iff \\
\iff [Tv]_{B} = [\lambda v]_{B} \iff [T]^{B}_{B}[v]_{B} = \lambda[v]_{B} \iff \lambda \text{ is an eigenvalue of } [T]^{B}_{B} \\
}
$$
# 2
$$
\displaylines{
\text{Formulate and prove Cayley-Hamilton theorem} \\
\\
\text{Theorem states: } \forall A \in \mathbb{F}^{n \times n}: P_{A}(A) = 0 \\
\\
\text{Explanation:} \\
P_{A}(x) = \det(xI - A) \implies P_{A}(A) = \det(AI - A) = \det(0) = 0 \\
\\
\text{Proof:} \\
P_{A}(x) = x^{n} + \sum_{i=0}^{n-1} \alpha_{i}x^{i} \\
\implies P_{A}(A) = A^{n} + \sum_{i=0}^{n-1} \alpha_{i}A^{n-1} \\
(xI - A) \cdot \mathrm{adj}(xI-A) = \det(xI-A)I = P_{A}(x)I \\
\mathrm{adj}(xI - A) \in \mathbb{F}_{n-1}[x]^{n \times n} - \text{ meaning it is a matrix where each entry is a polynomial} \\
\implies \exists \Set{ B_{0}, \dots, B_{n-1} } : \mathrm{adj}(xI - A) = \sum_{i=0}^{n-1} x^{i}B_{i} \\
\implies (xI - A) \cdot \sum_{i=0}^{n-1} x^{i}B_{i} = \sum_{i=0}^{n} \alpha_{i}x^{i}I \\
\left.\begin{array}{c|c}
 & x^{n} & \dots & x & 1 \\
\text{Left side} & B_{n-1} & \dots & B_{0} - AB_{1} & -AB_{0} \\
\text{Right side} & I & \dots & \alpha_{1}I & \alpha_{0}I
\end{array}\right. \\
\text{Let us substitute } x = A \\
\implies A^{n}B_{n-1} + A^{n-1}(B_{n-2}-AB_{n-1}) + \dots + A(B_{0} - AB_{1}) - AB_{0} = \\
= A^{n}I + \alpha_{n-1}IA^{n-1} + \dots + \alpha_{1}IA + \alpha_{0}I = P_{A}(A) \\
\implies P_{A}(A) = (A^{n}B_{n-1} - A^{n}B_{n-1}) + \dots + (A^{2}B_{1} - A^{2}B_{1}) + (AB_{0} - AB_{0}) = 0 \\
}
$$
# 3
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \text{ is diagonalizable} \iff m_{A}(x) \text{ is factorizable into distinct linear factors} \\
\\
\text{Proof:} \\
\boxed{ \impliedby } \text{ Let } m_{A}(x) \text{ be factorizable into distinct linear factors} \\
\implies P_{A}(x) \mid m_{A}^{n}(x) = \prod_{i=1}^{k} (x-\lambda_{i})^{n} \\
\implies P_{A}(x) = \prod_{i=1}^{k} (x-\lambda_{i})^{k_{\lambda_{i}}} \implies \text{There exists a normal Jordan form of } A \\
\text{For each eigenvalue of } A \text{ there is a Jordan block of size } 1 \\
\implies \text{There are } n \text{ Jordan blocks of size } 1 \\
\implies J_{A} \text{ is diagonal} \implies \boxed{ A \text{ is diagonalizable} } \\
\\
\boxed{ \implies } \text{ Let } A \text{ be diagonalizable} \\
A \sim D \\
D \text{ is diagonal } \implies D \text{ is a normal Jordan form} \\
\text{Jordan form of } A \text{ is unique of to the order of Jordan blocks} \\
\implies J_{A} = D \implies \text{Largest Jordan block for each eigenvalue is of size } 1 \\
\implies \forall i \in [1, k]: k_{\lambda_{i}} \text{ in } m_{A}(x) \text{ is exactly 1} \\
\implies \boxed{ m_{A}(x) = \prod_{i=1}^{k} (x-\lambda_{i}) } \\
}
$$
# 4
$$
\displaylines{
\text{Formulate and prove Pythagorean theorem} \\
\\
\text{The theorem states:} \\
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \text{ be an orthogonal basis of } V \\
\text{Let } v \in V: v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\text{Then } \lVert v \rVert^{2} = \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} \cdot \lVert v_{i} \rVert^{2} \\
\\
\text{Proof:} \\
\text{Let } v \in V: v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\lVert v \rVert^{2} = \left\lVert  \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rVert^{2} = \left\langle  \sum_{i=1}^{n} \alpha_{i}v_{i}, \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rangle = \sum_{i=1}^{n} \sum_{j=1}^{n} \alpha_{i}\overline{\alpha_{j}}\langle v_{i}, v_{j} \rangle = \\
\underbrace{ = }_{ \forall i \neq j \in [1, n]: \langle v_{i}, v_{j} \rangle = 0 } \sum_{i=1}^{n} \alpha_{i}\overline{\alpha_{i}}\langle v_{i}, v_{i} \rangle = \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} \cdot \lVert v_{i} \rVert^{2} \\
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
\text{And } \lVert v \rVert \cdot \lVert u \rVert = \left\lvert \langle v, u \rangle \right\rvert \iff \exists \alpha \in \mathbb{F}: v = \alpha u \\
\\
\text{Proof:} \\
\text{Case 1. } v = u = 0 \\
\lVert v \rVert \cdot \lVert u \rVert = 0 = \left\lvert \langle v, u \rangle \right\rvert \\
\text{Case 2. } \left[\begin{array}{}
v \neq 0 \\
u \neq 0 \\
\end{array}\right. \text{ Let } v \neq 0 \\
\text{Let } A = \Set{ \frac{v}{\lVert v \rVert} } \text{ be an orthonormal set} \\
\text{By Bessel's inequality: } \lVert u \rVert^{2} \geq \left\lvert \left\langle  u, \frac{v}{\lVert v \rVert}  \right\rangle \right\rvert^{2} = \frac{1}{\lVert v \rVert^{2}} \left\lvert \langle u, v \rangle \right\rvert^{2} = \frac{1}{\lVert v \rVert^{2}}\left\lvert \langle v, u \rangle \right\rvert^{2} \\
\implies \lVert u \rVert^{2} \cdot \lVert v \rVert^{2} \geq \left\lvert \langle v, u \rangle \right\rvert^{2} \implies \lVert u \rVert \cdot \lVert v \rVert \geq \left\lvert \langle v, u \rangle \right\rvert \\
\text{By Bessel's equality case: } \lVert v \rVert \cdot \lVert u \rVert = \left\lvert \langle v, u \rangle \right\rvert \iff \\
\iff \lVert u \rVert^{2} = \frac{1}{\lVert v \rVert^{2}}\left\lvert \langle v, u \rangle \right\rvert^{2} \iff u \in spA \iff u = \frac{\alpha}{\lVert v \rVert}v \\
}
$$
# 6
$$
\displaylines{
\text{Formulate and prove Riesz theorem} \\
\\
\text{The theorem states:} \\
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } T: V \to \mathbb{F} \text{ be a linear operator} \\
\text{Then } \exists! w \in V: \forall v \in V: T(v) = \langle v, w \rangle \\
\\
\text{Proof:} \\
\text{Let } B \text{ be an orthonormal basis of } V \\
\text{Let } S = \Set{ 1 } \text{ be an orthonormal basis of } \mathbb{F} \\
\text{Let } w \in V \\
\forall v \in V: \langle v, w \rangle = [v]_{B}^{T}G_{B}\overline{[w]_{B}} = [v]_{B}^{T}\overline{[w]_{B}} \\
\langle v, w \rangle \in \mathbb{F} \implies \langle v, w \rangle = \langle v, w \rangle^{T} \implies [v]_{B}^{T}\overline{[w]_{B}} = \overline{[w]_{B}^{T}}[v]_{B} \\
\forall v \in V: T(v) = [T(v)]_{S} = [T]^{B}_{S}[v]_{B} \\
[ \ ]_{B} \text{ is an isomorphism, it is surjective} \implies \forall u \in \mathbb{F}^{n}: \exists w \in W: [w]_{B} = u \\
\text{Let } w \in V: [w]_{B} = \overline{([T]^{B}_{S})^{T}} \\
\implies \overline{[w]_{B}^{T}} = [T]^{B}_{S} \\
\implies \forall v \in V: \boxed{ T(v) = [T]^{B}_{S}[v]_{B} = \overline{[w]_{B}^{T}}[v]_{B} = \langle v, w \rangle } \\
\\
\text{Let us prove that } w \text{ is unique} \\
\text{Let } w_{1}, w_{2} \in V: \forall v \in V: \langle v, w_{1} \rangle = T(v) = \langle v, w_{2} \rangle \\
\forall v \in V: \langle v, w_{1} \rangle = \langle v, w_{2} \rangle \implies \langle v, w_{1} - w_{2} \rangle = 0 \implies w_{1} - w_{2} = 0 \\
\implies \boxed{ w_{1} = w_{2} } \\
}
$$
# 7
$$
\displaylines{
\text{Let } V, W \text{ be inner product spaces over } \mathbb{F} \\
\text{Let } T: V \to W \text{ be a linear opearator} \\
\text{Then } \exists! \ T^{*}: W \to V \text{ linear operator:} \\
\forall v \in V, \forall w \in W: \langle Tv, w \rangle = \langle v, T^{*}w \rangle \\
\\
\text{Proof:} \\
\text{Let } \forall w \in W: K_{w}: V \to \mathbb{F}: \forall v \in V: K_{w}(v) = \langle T(v), w \rangle \\
\text{By Riesz theorem: } \exists! h_{w} \in V: \forall v \in V: K_{w}(v) = \langle v, h_{w} \rangle \\
\text{Let } S: W \to V: \forall w \in W: S(w) = h_{w} \\
\implies \forall v \in V, \forall w \in W: \boxed{ \langle T(v), w \rangle = K_{w}(v) = \langle v, h_{w} \rangle = \langle v, S(w) \rangle } \\
\\
\text{Let us prove that } S \text{ is a linear operator} \\
\text{Let } v \in V, w_{1},w_{2} \in W, \alpha \in \mathbb{F} \\
\langle v, S(w_{1} + \alpha w_{2}) \rangle = \langle T(v), w_{1} + \alpha w_{2} \rangle = \langle T(v), w_{1} \rangle + \overline{\alpha}\langle T(v), w_{2} \rangle = \\
= \langle v, S(w_{1}) \rangle + \overline{\alpha}\langle v, S(w_{2}) \rangle = \langle v, S(w_{1}) \rangle + \langle v, \alpha S(w_{2}) \rangle = \langle v, S(w_{1}) + \alpha S(w_{2}) \rangle \\
\text{This is correct } \forall v \in V \implies S(w_{1} + \alpha w_{2}) = S(w_{1}) + \alpha S(w_{2}) \implies \boxed{ S \text{ is a linear operator} } \\
\\
\text{Let us prove that } S \text{ is unique} \\
\text{Let } S_{1}, S_{2}: W \to V: \forall v \in V, \forall w \in W: \langle T(v), w \rangle = \langle v, S_{1}(w) \rangle = \langle v, S_{2}(w) \rangle \\
\forall v \in V: \langle v, S_{1}(w) \rangle = \langle v, S_{2}(w) \rangle \implies \forall w \in W: S_{1}(w) = S_{2}(w) \implies \boxed{ S_{1} = S_{2} } \\
}
$$
# 8
$$
\displaylines{
\text{Let } V, W \text{ be inner product spaces over } \mathbb{F} \\
\text{Let } B, B' \text{ be orthonormal bases of } V, W \\
\text{Let } T: V \to W \text{ be a linear operator} \\
\text{Then } [T^{*}]^{B'}_{B} = ([T]^{B}_{B'})^{*} \\
\\
\text{Proof:} \\
\forall v \in V, w \in W: \langle T(v), w \rangle = \langle v, T^{*}(w) \rangle \\
\langle T(v), w \rangle = [T(v)]_{B'}^{T}G_{B'}\overline{[w]_{B'}} = ([T]^{B}_{B'}[v]_{B})^{T}\overline{[w]_{B'}} = [v]_{B}^{T}([T]^{B}_{B'})^{T}\overline{[w]_{B'}} \\
\langle v, T^{*}(w) \rangle = [v]_{B}^{T}G_{B}\overline{[T^{*}(w)]_{B}} = [v]_{B}^{T}\overline{[T^{*}]^{B'}_{B}[w]_{B'}} \\
\implies ([T]^{B}_{B'})^{T}\overline{[w]_{B'}} = \overline{[T^{*}]^{B'}_{B}[w]_{B'}} \\
\implies \overline{[w]_{B'}^{T}}[T]^{B}_{B'} = \overline{[w]_{B'}^{T}} \cdot \overline{([T^{*}]^{B'}_{B})^{T}} \\
\implies [T]^{B}_{B'} = \overline{([T^{*}]^{B'}_{B})^{T}} = ([T^{*}]^{B'}_{B})^{*} \implies \boxed{ ([T]^{B}_{B'})^{*} = [T^{*}]^{B'}_{B} } \\
}
$$
# 9
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } B, B' \text{ be bases of } V \\
\text{Let } C = [I]^{B'}_{B} \\
\text{Then } G_{B'} = C^{T}G_{B}\overline{C} \\
\\
\text{Proof:} \\
\text{Let } v, u \in V \\
\langle v, u \rangle = [v]_{B}^{T}G_{B}\overline{[u]_{B}} = ([I]^{B'}_{B}[v]_{B'})^{T}G_{B}\overline{[I]^{B'}_{B}[u]_{B'}} = \\
= [v]_{B'}^{T}C^{T}G_{B}\overline{C}\overline{[u]_{B'}} = [v]_{B'}^{T}G_{B'}\overline{[u]_{B'}} \\
\implies C^{T}G_{B}\overline{C}\overline{[u]_{B'}} = G_{B'}\overline{[u]_{B'}} \\
\implies \overline{[u]_{B'}^{T}}(C^{T}G_{B}\overline{C})^{T} = \overline{[u]_{B'}^{T}}G_{B'}^{T} \\
\implies (C^{T}G_{B}\overline{C})^{T} = G_{B'}^{T} \implies \boxed{ G_{B'} = C^{T}G_{B}\overline{C} } \\
}
$$
# 10
$$
\displaylines{
\text{Formulate and prove normality criterion} \\
\\
\text{The theorem states:} \\
\text{Let } V \text{ be a finite-dimensiopnal inner product space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Then } T \text{ is normal } \iff \forall v \in V: \lVert T(v) \rVert = \lVert T^{*}(v) \rVert \\
\\
\text{Proof:} \\
\implies \text{ Let } T \text{ be normal} \\
\implies TT^{*} = T^{*}T \\
\implies \forall v \in V: \lVert Tv \rVert^{2} = \langle Tv, Tv \rangle = \langle v, T^{*}Tv \rangle = \langle v, TT^{*}v \rangle = \langle T^{*}v, T^{*}v \rangle = \lVert T^{*}v \rVert^{2} \\
\implies \boxed{ \forall v \in V: \lVert T(v) \rVert = \lVert T^{*}(v) \rVert } \\
\\
\boxed{ \impliedby } \text{ Let } \forall v \in V: \lVert T(v) \rVert = \lVert T^{*}(v) \rVert \\
\text{Let us recall polar norm equations:} \\
\mathrm{Re}(\langle v, u \rangle) = \frac{1}{2}(\lVert v + u \rVert^{2} - \lVert v \rVert^{2} - \lVert u \rVert^{2}) \\
\mathrm{Im}(\langle v, u \rangle) = i\frac{1}{2}(\lVert v + iu \rVert^{2} - \lVert v \rVert^{2} - \lVert u \rVert^{2}) \\
\\
\text{Let } u, v \in V \\
\langle v, TT^{*}u \rangle = \langle T^{*}v, T^{*}u \rangle = \\
= \frac{1}{2}(\lVert T^{*}v + T^{*}u \rVert^{2} - \lVert T^{*}v \rVert^{2} - \lVert T^{*}u \rVert^{2}) + i\frac{1}{2}(\lVert T^{*}v + iT^{*}u \rVert^{2} - \lVert T^{*}v \rVert^{2} - \lVert T^{*}u \rVert^{2}) = \\
= \frac{1}{2}(\underbrace{ \lVert T^{*}(v+u) \rVert^{2} }_{ = \lVert T(v+u) \rVert^{2} } - \lVert Tv \rVert^{2} - \lVert Tu \rVert^{2}) + i \frac{1}{2}(\underbrace{ \lVert T^{*}(v + iu) \rVert^{2} }_{ = \lVert T(v+iu) \rVert^{2} } - \lVert Tv \rVert^{2} - \lVert Tu \rVert^{2}) = \\
= \frac{1}{2}(\lVert Tv + Tu \rVert^{2} - \lVert Tv \rVert^{2} - \lVert Tu \rVert^{2}) + i \frac{1}{2}(\lVert Tv + iTu \rVert^{2} - \lVert Tv \rVert^{2} - \lVert Tu \rVert^{2}) = \langle Tv, Tu \rangle = \\
= \langle v, T^{*}Tu \rangle \implies \forall u \in V: TT^{*}u = T^{*}Tu \implies TT^{*} = T^{*}T \implies \boxed{ T \text{ is normal} } \\
} 
$$
