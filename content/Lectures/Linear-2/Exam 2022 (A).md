---
{"publish":true,"created":"26/07/25, 17:07","modified":"2026-03-24T15:00:54.098+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 2a
$$
\displaylines{
\text{Determine whether } A = \begin{pmatrix}
0 & i & 0 \\
i & 0 & 0 \\
0 & 0 & i \\
\end{pmatrix} \text{ is unitary diagonalizable} \\
\\
\text{Solution:} \\
P_{A}(x) = \begin{vmatrix}
x & -i & 0 \\
-i & x & 0 \\
0 & 0 & x-i \\
\end{vmatrix} = (x^{2}-i^{2})(x-i) = (x-i)^{2}(x+i) \\
\implies \text{Characteristic polynomial is factorizable into linear factors} \\
A^{*} = \begin{pmatrix}
0 & -i & 0 \\
-i & 0 & 0 \\
0 & 0 & -i \\
\end{pmatrix} = -A \\
\implies A \text{ is anti-Hermitian} \implies A \text{ is normal} \implies A \text{ is unitary diagonalizale} \\
x = i \implies \begin{pmatrix}
i & -i & 0 \\
-i & i & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \to \begin{pmatrix}
i & -i & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\implies E_{i} = sp\Set{ \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} \\
0 \\
\end{pmatrix} } \\
x = -i \implies \begin{pmatrix}
-i & -i & 0 \\
-i & -i & 0 \\
0 & 0 & -2i \\
\end{pmatrix} \to \begin{pmatrix}
i & i & 0 \\
0 & 0 & 0 \\
0 & 0 & 2i \\
\end{pmatrix} \implies E_{-i} = sp\Set{ \begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
-\frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} \\
0 \\
\end{pmatrix} } \\
\implies A = \begin{pmatrix}
0 & \frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 2 }} \\
0 & \frac{1}{\sqrt{ 2 }} & \frac{1}{\sqrt{ 2 }} \\
1 & 0 & 0 \\
\end{pmatrix}\begin{pmatrix}
i \\
 & i \\
 &  & -i \\
\end{pmatrix}\begin{pmatrix}
0 & \frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 2 }} \\
0 & \frac{1}{\sqrt{ 2 }} & \frac{1}{\sqrt{ 2 }} \\
1 & 0 & 0 \\
\end{pmatrix}^{*} \\
}
$$
# 2b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Let } \exists k \in \mathbb{N}: A^{k} = I \\
\text{Prove: } A \text{ is orthogonal} \\
\\
\text{Proof:} \\
A = A^{T} \underbrace{ \implies }_{ A \in \mathbb{R}^{n \times n } } A = A^{*} \implies \text{Eigenvalues of } A \text{ are all real} \\
A \text{ is symmetric} \implies A \text{ is orthogonal diagonalizable} \\
\implies \exists P: A = PDP^{T} \\
\implies A^{k} = PD^{k}P^{T} = I \\
\implies D^{k} = P^{T}P = I \implies \forall i \in [1, n]: D_{ii} = \sqrt[k]{ 1 } \in \mathbb{R} = \pm 1 \\
A = A^{T} \implies AA^{T} = A^{2} = PD^{2}P^{T} = P\begin{pmatrix}
\lambda_{1}^{2} \\
 & \ddots \\
 &  & \lambda_{n}^{2} \\
\end{pmatrix}P^{T} \\
\forall i \in [1, n]: \lambda_{i} = \pm 1 \implies \lambda_{i}^{2} = 1 \implies D = I \\
\implies AA^{T} = PD^{2}P^{T} = PP^{T} = I \implies \boxed{ A \text{ is orthogonal} } \\
}
$$
# 3
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional inner product space} \\
\text{Let } T: V \to V \text{ be a linear operator: } T = T^{2} \\
}
$$
## 3a
$$
\displaylines{
\text{Determine whether } T \text{ is necessrily diagonalizable} \\
\\
\text{Solution:} \\
T = T^{2} \implies T(T-I) = 0 \implies m_{T}(x) \mid x(x-1) \\
\implies m_{T}(x) = \left[\begin{array}{}
x \\
(x-1) \\
x(x-1) \\
\end{array}\right. \implies m_{T}(x) \text{ is factorizable into distinct linear factors} \\
\implies \boxed{ T \text{ is diagonalizable} } \\
}
$$
## 3b
$$
\displaylines{
\text{Prove: } \mathrm{Im}T = \ker (I-T) \\
\\
\text{Proof:} \\
\text{Let } v \in \mathrm{Im}T \\
\implies \exists u \in V: T(u) = v \implies T(T(u)) = v \implies T(v) = v \\
\implies v - T(v) = 0 \implies I(v) - T(v) = 0 \implies (I-T)(v) = 0 \implies v \in \ker (I-T) \\
\implies \mathrm{Im}T \subseteq \ker (I-T) \\
\text{Let } v \in \ker (I - T) \\
\implies (I-T)(v) = 0 \implies v - T(v) = 0 \implies T(v) = v \implies v \in \mathrm{Im} T \\
\implies \ker (I - T) \subseteq \mathrm{Im} T \implies \boxed{ \mathrm{Im} T = \ker (I - T) } \\
}
$$
## 3c
$$
\displaylines{
\text{Let } T \text{ be normal} \\
}
$$
#### 1
$$
\displaylines{
\text{Prove: } T \text{ is Hermitian} \\
\\
\text{Proof:} \\
T \text{ is diagonalizable} \implies \text{Its characteristic polynomial is factorizable into linear factors} \\
T \text{ is also normal } \implies T \text{ is unitary diagonalizable} \\
\implies \exists B \text{ orthonormal: } [T]^{B}_{B} \text{ is diagonal} \\
T = T^{2} \implies T(T-I) = 0 \implies m_{T}(x) \mid x(x-1) \text{ and } P_{T}(x) \mid x^{n}(x-1)^{n} \\
\implies \text{The only eigenvalues are } \Set{ 0, 1 } \\
\implies [T]^{B}_{B} = \begin{pmatrix}
I_{k} \\
 & 0_{n-k} \\
\end{pmatrix} \\
\implies ([T]^{B}_{B})^{*} = [T]^{B}_{B} \implies [T]^{B}_{B} \text{ is Hermitian} \\
\implies \boxed{ T \text{ is Hermitian} } \\
}
$$
#### 2
$$
\displaylines{
\text{Prove: } \exists W \text{ subspace of } V: \forall w \in W: T(w) = w \text{ and } \forall u \in W^{\perp}: T(u) = 0 \\
\\
\text{Proof:} \\
\mathrm{Im}T = \ker (I - T) \implies \boxed{ \forall v \in \mathrm{Im}T: v - T(v) = 0 \implies T(v) = v } \\
\text{Let } W = \mathrm{Im}T \\
\text{Let } u \in W^{\perp} \\
\implies \forall w \in W: \langle w, u \rangle = 0 \\
\forall v \in V: \langle \underbrace{ T(v) }_{ \in W }, u \rangle = \langle v, T^{*}(u) \rangle = 0 \\
T \text{ is Hermitian} \implies \forall v \in V: \langle v, T^{*}(u) \rangle = \langle v, T(u) \rangle = 0 \\
\implies T(u) = 0 \\
\implies \boxed{ \forall u \in W^{\perp} : T(u) = 0 } \implies W^{\perp} \subseteq \ker T \\
\text{It is also possible to prove } W^{\perp} = \ker T \text{ if necessary} \\
}
$$
# 4
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{5 \times 5} \\
\text{Let } rank(A - 2I) = 3, rank(A) = 4 \\
\text{Let } A(A-2I)(A-5I)^{2} = 0 \\
\text{Find all possible Jordan forms of } A \\
\\
\text{Solution:} \\
rank(A-2I) = 3 \implies 2 \text{ is an eigenvalue of } A \text{ with } g_{2} = 5 - 3 = 2 \\
rank(A) = 4 \implies 0 \text{ is an eigenvalue of } A \text{ with } g_{0} = 5 - 4 = 1 \\
m_{A}(x) \text{ contains all eigenvalue-factors of } A \text{ at least once} \\
\implies m_{A}(x) = x(x-2) \cdot f(x) \\
A(A-2I)(A-5)^{2} = 0 \implies m_{A}(x) \mid x(x-2)(x-5)^{2} \\
\implies m_{A}(x) = \left[\begin{array}{}
x(x-2) \\
x(x-2)(x-5) \\
x(x-2)(x-5)^{2} \\
\end{array}\right. \\
g_{2} = 2 \implies \text{Jordan form of } A \text{ has two blocks of eigenvalue } 2 \text{ of size } 1 \\
g_{0} = 1 \implies \text{Jordan form of } A \text{ has one block of eigenvalue } 0 \text{ of size } 1 \\
\text{The only other eigenvalue of } A \text{ can be } 5 \\
\implies \text{Jordan form of } A \text{ has one block of eigenvalue } 5 \text{ of size } 2 \text{ or two blocks of size } 1 \\
\implies J_{A} = J_{1}(2) \oplus J_{1}(2) \oplus J_{1}(0) \oplus \left[\begin{array}{}
J_{2}(5) \\
J_{1}(5) \oplus J_{1}(5) \\
\end{array}\right. \\
}
$$
# 5a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{2 \times 2} \\
\text{Let } \left\lvert A \right\rvert = 0, A^{2} \neq 0 \\
\text{Prove or disprove: } A \text{ is diagonalizable} \\
\\
\text{Proof:} \\
\left\lvert A \right\rvert = 0 \implies 0 \text{ is an eigenvalue of } A \\
\implies P_{A}(x) = x(x-\lambda) \implies A \text{ is at least triangularizable} \\
\text{Let } A \text{ be nilpotent} \implies A^{2} = 0 - \text{ Contradiction!} \\
\implies A \text{ is not nilpotent} \implies \lambda \neq 0 \implies m_{A}(x) = x(x-\lambda) \implies A \text{ is diagonalizable} \\ 
}
$$
# 5b
$$
\displaylines{
\text{Let } V \text{ be a vector space} \\
\text{Let } \langle ,  \rangle_{1} ; \langle ,  \rangle_{2} \text{ be two different inner products on } V \\
\text{Prove or disprove: } \exists B \text{ basis of } V : B \text{ is orthonormal in relation to both inner products} \\
\\
\text{Disproof:} \\
\text{Let } B \text{ be an orthonormal basis in relation to both inner products} \\
\implies G_{1_{B}} = I = G_{2_{B}} \\
\forall v, u \in V: \left\{\begin{array}{}
\langle v, u \rangle_{1} = [v]_{B}^{T}G_{1_{B}}\overline{[u]_{B}} = [v]_{B}^{T}\overline{[u]_{B}} \\
\langle v, u \rangle_{2} = [v]_{B}^{T}G_{2_{B}}\overline{[u]_{B}} = [v]_{B}^{T}\overline{[u]_{B}} \\
\end{array}\right. \\
\implies \forall v, u \in V: \langle v, u \rangle_{1} = \langle v, u \rangle_{2} \implies \langle ,  \rangle_{1} = \langle ,  \rangle_{2} - \text{Contradiction!} \\
\implies B \text{ cannot be orthonormal in relation to both inner products} \\
}
$$
# 5c
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \text{ be Hermitian} \\
\text{Prove or disprove: } A - (i+1)I \text{ is invertible} \\
\\
\text{Proof:} \\
A \text{ is Hermitian} \implies \text{All its eigenvalues are real} \\
(i+1) \not\in \mathbb{R} \implies (i+1) \text{ is not an eigenvalue of } A \\
\implies A - (i+1)I \text{ is invertible} \\
}
$$
# 5d
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{R} \\
\text{Let } U \text{ be a subspace of } V \\
\text{Let } v \in V \text{ and } p = P_{U}(v) \\
\text{Prove or disprove: } \lVert v + p \rVert = \lVert v - p \rVert \implies v \in U^{\perp} \\
\\
\text{Proof:} \\
\lVert v+p \rVert^{2} = \langle v+p, v+p \rangle = \lVert v \rVert^{2} + \lVert p \rVert^{2} + 2\langle v, p \rangle \\
\lVert v - p \rVert^{2} = \langle v-p, v-p \rangle = \lVert v \rVert^{2} + \lVert p \rVert^{2} - 2\langle v, p \rangle \\
\implies 2\langle v, p \rangle = -2\langle v, p \rangle \implies \langle v, p \rangle = 0 \\
v = \underbrace{ v - p }_{ \in U^{\perp} } + \underbrace{ p }_{ \in U } \\
\implies \langle v, p \rangle = \langle v - p + p, p \rangle = \underbrace{ \langle v - p, p \rangle }_{ = 0 } + \lVert p \rVert^{2} \\
\implies \lVert p \rVert^{2} = 0 \implies p = 0 \implies \boxed{ v \in U^{\perp} } \\
}
$$
