---
{"publish":true,"created":"10/06/25, 10:06","modified":"2025-11-21T21:10:14.530+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Normal/unitary/Hermitian linear operator and its representation matrix #lemma 
$$
\displaylines{
\text{Let } V \text{ be an inner space over } \mathbb{F} \\
\text{Let } B \text{ be an orthonormal basis of } V \\
\text{Then } \begin{array}{}
1. & T \text{ is normal} \iff [T]^{B}_{B} \text{ is normal} \\
2 & T \text{ is unitary} \iff [T]^{B}_{B} \text{ is unitary} \\
3. & \text{T is hermitian} \iff [T]^{B}_{B} \text{ is hermitian} \\
\end{array} \\
\\
\text{Proof for 1:} \\
T \text{ is normal } \iff TT^{*} = T^{*}T \iff [T]^{B}_{B}[T^{*}]^{B}_{B} = [T^{*}]^{B}_{B}[T]^{B}_{B} \\
\iff [T]^{B}_{B}([T]^{B}_{B})^{*} = ([T]^{B}_{B})^{*}[T]^{B}_{B} \iff [T]^{B}_{B} \text{ is normal} \\
\\
\text{Proof for 2:} \\
T \text{ is unitary} \iff TT^{*} = I = T^{*}T \iff [T]^{B}_{B}[T^{*}]^{B}_{B} = [I]^{B}_{B} = [T^{*}]^{B}_{B}[T]^{B}_{B} \\
\iff [T]^{B}_{B}([T]^{B}_{B})^{*} = I = ([T]^{B}_{B})^{*}[T]^{B}_{B} \iff [T]^{B}_{B} \text{ is unitary} \\
\\
\text{Proof for 3:} \\
T \text{ is Hermitian} \iff T = T^{*} \iff [T]^{B}_{B} = [T^{*}]^{B}_{B} \\ \iff [T]^{B}_{B} = ([T]^{B}_{B})^{*} \iff [T]^{B}_{B} \text{ is Hermitian} \\
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
## Unitary linear operator criterion #theorem 
$$
\displaylines{
\text{Let } V \text{ be a finitely generated inner product space over } \mathbb{F} \\
\text{Let } B \text{ be an orthonormal basis of } V \\
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Then the following are equivalent:} \\
\\
\begin{array}{}
1. & TT* = I = T^{*}T & (T \text{ is unitary}) \\
2. & \forall v, u \in V: \langle v, u \rangle = \langle Tv, Tu \rangle & \text{(preserves inner product)} \\
3. & \forall v \in V: \lVert v \rVert = \lVert Tv \rVert & \text{(preserves norm)} \\
4. & \forall v, u \in V: p(v, u) = p(Tv, Tu) & \text{(preserves metric)} \\
\end{array} \\
}
$$
$$
\displaylines{
\\
\text{Proof for } 1 \implies 2: \\
\text{Let } T \text{ be unitary} \\
\text{Let } v, u \in V \\
\langle Tv, Tu \rangle = \langle v, T^{*}Tu \rangle = \langle v, Iu \rangle = \langle v, u \rangle \\
\implies \boxed{ \forall v, u \in V: \langle v, u \rangle = \langle Tv, Tu \rangle } \\
\\
\text{Proof for } 2 \implies 1: \\
\text{Let } \forall v, u \in V: \langle v, u \rangle = \langle Tv, Tu \rangle \\
\forall u, v \in V: \langle u, T^{*}Tv \rangle = \langle Tu, Tv \rangle = \langle u, v \rangle = \langle u, Iv \rangle \\
\implies T^{*}T = I \implies \boxed{ T \text{ is unitary} } \\
\\
\text{Proof for } 2 \implies 3: \\
\text{Let } \forall v, u \in V: \langle v, u \rangle = \langle Tv, Tu \rangle \\
\text{Let } v \in V \\
\implies \lVert v \rVert = \sqrt{ \langle v, v \rangle } = \sqrt{ \langle Tv, Tv \rangle } = \lVert Tv \rVert \\
\implies \boxed{ \forall v \in V: \lVert v \rVert = \lVert Tv \rVert } \\
\\
\text{Proof for } 3 \implies 2: \\
\text{Let } \forall v \in V: \lVert v \rVert = \lVert Tv \rVert \\
\text{Let } v, u \in V \\
\langle v, u \rangle = \\
\langle Tv, Tu \rangle = \frac{1}{2}(\lVert Tv + Tu \rVert^{2} - \lVert Tv \rVert^{2} - \lVert Tu \rVert^{2}) + i \frac{1}{2}(\lVert Tv + iTu \rVert^{2} - \lVert Tv \rVert^{2} - \lVert Tu \rVert^{2}) = \\
= \frac{1}{2}(\lVert T(v+u) \rVert^{2} - \lVert v \rVert^{2} - \lVert u \rVert^{2}) + i \frac{1}{2}(\lVert T(v+iu) \rVert^{2} - \lVert v \rVert^{2} - \lVert u \rVert^{2}) = \\
= \frac{1}{2}(\lVert v+u \rVert^{2} - \lVert v \rVert^{2} - \lVert u \rVert^{2}) + i \frac{1}{2}(\lVert v+iu \rVert^{2} - \lVert v \rVert^{2} - \lVert u \rVert^{2}) = \langle v, u \rangle \\
\implies \boxed{ \forall v, u \in V: \langle v, u \rangle = \langle Tv, Tu \rangle } \\
\\
\text{Proof for } 3 \implies 4: \\
\text{Let } \forall v \in V: \lVert v \rVert = \lVert Tv \rVert \\
\text{Let } v, u \in V \\
p(v, u) = \lVert v - u \rVert = \lVert T(v-u) \rVert = \lVert Tv - Tu \rVert = p(Tv, Tu) \\
\implies \boxed{ \forall v, u \in V: p(v, u) = p(Tv, Tu) } \\
\\
\text{Proof for } 4 \implies 3: \\
\text{Let } \forall v, u \in V: p(v, u) = p(Tv, Tu) \\
\lVert Tv \rVert = \lVert Tv - 0 \rVert = \lVert Tv - T(0) \rVert = p(Tv, T(0)) = p(v, 0) = \lVert v - 0 \rVert = \lVert v \rVert \\
\implies \boxed{ \forall v \in V: \lVert v \rVert = \lVert Tv \rVert } \\
}
$$
## Unitary linear operator and angles #lemma 
$$
\displaylines{
T: V \to V \\
T \text{ is unitary} \implies T \text{ preserves angles} \\
\\
\text{Proof:} \\
\text{Let } \alpha \text{ be an angle between } v, u \\
\cos\alpha = \frac{\langle v, u \rangle}{\lVert v \rVert \cdot \lVert u \rVert} = \frac{\langle Tv, Tu \rangle}{\lVert Tv \rVert \cdot \lVert Tu \rVert} = \cos\beta \\
\implies \text{Angle between } Tv, Tu \text{ is } \beta = \alpha \\
}
$$
### Examples of unitary operators
$$
\displaylines{
I, -I, iI, -iI \\
}
$$
## Operations preserving matrix unitarity #lemma 
$$
\displaylines{
A \text{ is unitary} \iff A^{*} \text{ is unitary} \\
\boxed{ \implies } AA^{*} = I = A^{*}A \\
\boxed{ \impliedby } (A^{*})^{*} = A \\
\\
A \text{ is unitary} \iff A^{T} \text{ is unitary} \\
\boxed{ \implies } A^{*}A = I \implies \overline{A^{*}A} = A^{T}\overline{A} = \overline{I} = I \\
A^{T}(A^{T})^{*} = A^{T}\overline{A} = I \\
\boxed{ \impliedby } (A^{T})^{T} = A \\
\\
A, B \text{ are unitary} \implies AB \text{ are unitary} \\
AB(AB)^{*} = ABB^{*}A^{*} = AIA^{*} = AA^{*} = I \\
}
$$
## Unitary matrix and its row/column spaces #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{The following are equivalent:} \\
\\
\begin{array}{}
1. & A \text{ is unitary} \\
2. & \Set{ R_{1}(A)^{T}, \dots, R_{n}(A)^{T} } \text{ is an orthonormal basis of } \mathbb{F}^{n} \text{ by standard inner product} \\
3. & \Set{ C_{1}(A), \dots, C_{n}(A) } \text{ is an orthonormal basis of } \mathbb{F}^{n} \text{ by standard inner product} \\
\end{array} \\
\\
\text{Proof:} \\
1 \implies 2 \text{ and } 1 \implies 3 \\
\text{Let } A \text{ be unitary} \\
\forall i, j \in [1, n]: R_{i}(A)C_{j}(A^{*}) = R_{i}(A) \cdot \overline{R_{j}(A)}^{T} = \langle R_{i}(A)^{T}, R_{j}(A)^{T} \rangle = I_{ij} = \left\{\begin{array}{}
1 & i = j \\
0 & i \neq j \\
\end{array}\right. \\
\implies \boxed{ \Set{ R_{1}(A)^{T}, \dots, R_{n}(A)^{T} } \text{ is an orthonormal set} \implies \text{it is an orthonormal basis of } \mathbb{F}^{n} } \\
\forall i, j \in [1, n]: R_{i}(A^{*})C_{j}(A) = \overline{C_{i}(A)}^{T} \cdot C_{j}(A) \underbrace{ = }_{ = I_{ij} \in \Set{ 0, 1 } } \overline{\overline{C_{i}(A)^{T}} \cdot C_{j}(A)} = \\
= C_{i}(A)^{T} \cdot \overline{C_{j}(A)} = \langle C_{i}(A), C_{j}(A) \rangle = I_{ij} = \left\{\begin{array}{}
1 & i = j \\
0 & i \neq j \\
\end{array}\right. \\
\implies \boxed{ \Set{ C_{1}(A), \dots, C_{n}(A) } \text{ is an orthonormal set} \implies \text{it is an orthonormal basis of } \mathbb{F}^{n} } \\
\\
2 \implies 1 \text{ and } 3 \implies 1 \\
\text{Let } \Set{ R_{1}(A)^{T}, \dots, R_{n}(A)^{T} } \text{ be an orthonormal basis of } \mathbb{F}^{n} \\
\implies \forall i, j \in [1, n]: R_{i}(A) \cdot C_{j}(A^{*}) = R_{i}(A) \cdot \overline{R_{j}(A)}^{T} = \langle R_{i}(A)^{T}, R_{j}(A)^{T} \rangle = \left\{\begin{array}{}
1 & i = j \\
0 & i \neq j \\
\end{array}\right. \\
\implies AA^{*} = I \implies \boxed{ A \text{ is unitary} } \\
\text{Let } \Set{ C_{1}(A), \dots, C_{n}(A) } \text{ be an orthonormal basis of } \mathbb{F}^{n} \\
\implies \forall i, j \in [1, n]: R_{i}(A^{*}) \cdot C_{j}(A) = \overline{C_{i}(A)}^{T}C_{j}(A) = \overline{C_{i}(A)^{T} \cdot \overline{C_{j}(A)}} = \\
= \overline{\langle C_{i}(A), C_{j}(A) \rangle} = \left\{\begin{array}{}
1 & i = j \\
0 & i \neq j \\
\end{array}\right. \\
\implies A^{*}A = I \implies \boxed{ A \text{ is unitary} } \\
}
$$
## Orthogonal matrix #definition 
$$
\displaylines{
A \text{ is called orthogonal iff } A \text{ is real and unitary} \\
}
$$
# Following lemmas are also correct for matrices under standard inner product
## Normality after addition with scalar linear operator #lemma 
$$
\displaylines{
T \text{ is normal} \iff T - \lambda I \text{ is normal} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } \lambda \in \mathbb{F} \\
T \text{ is normal } \implies \left\{\begin{array}{}
(T - \lambda I)(T - \lambda I)^{*} = TT^{*} - \lambda T^{*} - \overline{\lambda}T + \lambda^{2} \\
(T - \lambda I)^{*}(T - \lambda I) = T^{*}T - \overline{\lambda} T - \lambda T^{*} + \lambda^{2} \\
\end{array}\right. \implies (T - \lambda I) \text{ is normal} \\
\\
\boxed{ \impliedby } (T - \lambda I) \text{ is normal} \implies (T - \lambda I) - (-\lambda) I = T \text{ is normal} \\
}
$$

## Eigenvalues of adjoint linear operator #lemma 
$$
\displaylines{
\text{Let } T: V \to V \text{ be a normal linear operator} \\
\text{Let } v \text{ be an eigenvector of } T \text{ with eigenvalue } \lambda \\
\text{Then } \lambda \text{ be an eigenvalue of } T \iff \overline{\lambda} \text{ is an eigenvalue of } T^{*} \text{ with the same eigenvector} \\
\\
\text{Proof:} \\
\exists v \neq 0 \in V: Tv = \lambda v \\
\iff Tv - \lambda v = 0 \iff (T - \lambda I)v = 0 \\
\iff \lVert (T - \lambda I)v \rVert = 0 \iff \lVert (T - \lambda I)^{*}v \rVert = 0 \\
\iff (T - \lambda I)^{*}v = 0 \iff T^{*}v = (\lambda I)^{*}v = \overline{\lambda}v \\
}
$$
## Orthogonality of eigenvectors of normal linear operator #lemma 
$$
\displaylines{
\text{Let } T: V \to V \text{ be a normal linear operator} \\
\text{Let } \lambda \text{ be an eigenvalue of } T \text{ with eigenvector } v \\
\text{Let } \alpha \neq \lambda \text{ be an eigenvalue of } T \text{ with eigenvector } u \\
\text{Then } v, u \text{ are orthogonal}, \langle v, u \rangle = 0 \\
\\
\text{Proof:} \\
\alpha \neq \lambda \\
\exists v \neq 0 \in V: Tv = \lambda v \\
\exists u \neq 0 \in V: Tu = \alpha u \implies T^{*}u = \overline{\alpha}u \\
\lambda \langle v, u \rangle = \langle \lambda v, u \rangle = \langle Tv, u \rangle = \langle v, T^{*}u \rangle = \langle v, \overline{\alpha}u \rangle = \alpha \langle v, u \rangle \\
\implies (\lambda - \alpha)\langle v, u \rangle = 0 \underset{ \lambda \neq \alpha }{ \implies } \boxed{ \langle v, u \rangle = 0 } \\
}
$$
## Unitary linear operator eigenvalues #lemma 
$$
\displaylines{
\text{Let } T: V \to V \text{ be a unitary linear operator} \\
\text{Let } \lambda \text{ be an eigenvalue of } T \\
\text{Then } \left\lvert \lambda \right\rvert = 1 \\
\\
\text{Proof:} \\
\lVert v \rVert = \lVert Tv \rVert = \lVert \lambda v \rVert = \left\lvert \lambda \right\rvert \cdot \lVert v \rVert \\
\implies \boxed{ \left\lvert \lambda \right\rvert = 1 } \\
}
$$
