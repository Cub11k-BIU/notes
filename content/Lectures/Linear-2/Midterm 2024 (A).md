---
{"publish":true,"created":"21/05/25, 13:05","modified":"2026-03-24T15:00:54.372+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{R} \\
\text{Let } \dim V = n \\
\text{Let } T: V \to V \text{ be a linear transformation} \\
\text{Prove: } \exists B, C \text{ bases of } V : [T]^{B}_{C} = 0 \implies T = 0 \\
\\
\text{Proof:} \\
\text{Let } B, C: [T]^{B}_{C} = 0 \\
\forall v \in V: [T(v)]_{C} = [T]^{B}_{C}[v]_{B} = 0 \cdot [v]_{B} = 0 \\
[T(v)]_{C} = 0 \iff T(v) = 0 \\
\implies \forall v \in V: T(v) = 0 \implies \boxed{ T = 0 } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{R} \\
\text{Let } \dim V = n \\
\text{Let } T: V \to V \text{ be a linear transformation} \\
\text{Prove: } \exists B, C \text{ bases of } V : [T]^{B}_{C} = D \text{ where } D \text{ is diagonal} \\
\\
\text{Proof:} \\
\text{Let } \ker T = sp\Set{ v_{1}, \dots, v_{k} } \\
\text{Let } B = \Set{ v_{1}, \dots, v_{k}, \dots, v_{n} } \\
\implies \mathrm{Im} T = sp\Set{ T(v_{k+1}), \dots, T(v_{n}) } \\
\text{Let } C = \Set{ u_{1}, \dots, u_{k}, T(v_{k+1}), \dots, T(v_{n}) } \\
\implies \left\{\begin{array}{}
\forall i \in [1, k]: [T(v_{i})]_{C} = [0]_{C} = 0 \\
\forall i \in [k+1, n]: [T(v_{i})]_{C} = e_{i} \\
\end{array}\right. \\
\implies \boxed{ [T]^{B}_{C} = \begin{pmatrix}
0 & 0 \\
0 & I_{n-k-1}
\end{pmatrix} = D } \\
}
$$
# 1c
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{R} \\
\text{Let } \dim V = n \\
\text{Let } T: V \to V \text{ be a linear transformation} \\
\text{Prove: } \forall B, C \text{ bases of } V : ([T]^{B}_{C})^{2} = 0 \implies T = 0 \\
\\
\text{Proof:} \\
\text{Let } \forall B, C \text{ bases of } V: ([T]^{B}_{C})^{2} = 0 \\
\text{As proved in 1b: } \exists B, C \text{ bases of } V: [T]^{B}_{C} = D \\
([T]^{B}_{C})^{2} = 0 \implies D^{2} = 0 \implies D = 0 \underset{ \text{1a} }{ \implies } \boxed{ T = 0 } \\
}
$$
# 2
$$
\displaylines{
\text{Let } T: \mathbb{R}^{2} \to \mathbb{R}^{2} \\
\text{Let } n \in \mathbb{N} \\
T\begin{pmatrix}
p \\
q \\
\end{pmatrix} = \begin{pmatrix}
p + nq \\
q + np \\
\end{pmatrix} \\
\text{Let } T^{17}\begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} = \begin{pmatrix}
-3^{17} \\
3^{17} \\
\end{pmatrix} \\
\text{Find } n \\
\\
\text{Solution:} \\
T^{N}\begin{pmatrix}
p \\
q \\
\end{pmatrix} = \begin{pmatrix}
1 & n \\
n & 1 \\
\end{pmatrix}^{N}\begin{pmatrix}
p \\
q \\
\end{pmatrix} \\
\text{Let } A = \begin{pmatrix}
1 & n \\
n & 1 \\
\end{pmatrix} \\
P_{A}(\lambda) = (\lambda-1)^{2} - n^{2} = (\lambda-(n+1))(\lambda-(1-n)) \\
\lambda = n + 1 \implies \begin{pmatrix}
n & -n \\
-n & n \\
\end{pmatrix} \implies E_{n+1} = sp\Set{ \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} } \\
\lambda = 1-n \implies \begin{pmatrix}
-n & -n \\
-n & -n \\
\end{pmatrix} \implies E_{1-n} = sp\Set{ \begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} } \\
\implies A = \begin{pmatrix}
1 & 1 \\
1 & -1 \\
\end{pmatrix}\begin{pmatrix}
n+1 & 0 \\
0 & 1-n \\
\end{pmatrix}\begin{pmatrix}
1 & 1 \\
1 & -1 \\
\end{pmatrix}^{-1} \\
\implies A^{N} = \begin{pmatrix}
1 & 1 \\
1 & -1 \\
\end{pmatrix}\begin{pmatrix}
(n+1)^{N} & 0 \\
0 & (1-n)^{N} \\
\end{pmatrix}\begin{pmatrix}
\frac{1}{2} & \frac{1}{2} \\
\frac{1}{2} & -\frac{1}{2} \\
\end{pmatrix} = \\
\frac{1}{2}\begin{pmatrix}
(n+1)^{N} + (1-n)^{N} & (n+1)^{N} - (1-n)^{N} \\
(n+1)^{N} - (1-n)^{N} & (n+1)^{N} + (1-n)^{N} \\
\end{pmatrix} \\
T^{N}\begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} = A^{N}\begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} = \frac{1}{2}\begin{pmatrix}
(n+1)^{N} + (1-n)^{N} & (n+1)^{N} - (1-n)^{N} \\
(n+1)^{N} - (1-n)^{N} & (n+1)^{N} + (1-n)^{N} \\
\end{pmatrix}\begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} = \\
= \frac{1}{2}\begin{pmatrix}
2(1-n)^{N} \\
-2(1-n)^{N} \\
\end{pmatrix} = \begin{pmatrix}
(1-n)^{N} \\
-(1-n)^{N} \\
\end{pmatrix} \\
\implies T^{17}\begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} = \begin{pmatrix}
(1-n)^{17} \\
-(1-n)^{17} \\
\end{pmatrix} = \begin{pmatrix}
-3^{17} \\
3^{17} \\
\end{pmatrix} \\
\implies 1 - n = -3 \implies \boxed{ n = 4 } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } T: \mathbb{R}^{n} \to \mathbb{R}^{n} \text{ be a linear transformation} \\
\text{Let } \forall \lambda \text{ eigenvalue of } T: g_{\lambda} = k_{\lambda} \\
\text{Prove or disprove: } T \text{ is diagonalizable} \\
\\
\text{Disproof:} \\
\text{Let } B \text{ be a basis of } V: P_{[T]^{B}_{B}}(\lambda) = \prod_{i=1}^{n-2} (\lambda-\lambda_{i})(\lambda^{2} + 1) \\
\implies \forall i \in [1, n-2]: \lambda_{i} \text{ is an eigenvalue of } T \text{ and } g_{\lambda_{i}} = k_{\lambda_{i}} \\
\text{However, } T \text{ is not diagonalizable, as } P_{T}(\lambda) \text{ is not factorizable into linear factors} \\
\text{An example would be } T\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
-y \\
x \\
\end{pmatrix} \\
}
$$
# 3b
$$
\displaylines{
\text{Prove or disprove: } \exists A \in \mathbb{C}^{n \times n}: \exists \alpha \in \mathbb{C}: \alpha \not\in \Set{ -1, 0, 1 } : \forall \lambda \text{ eigenvalue of } A : \\
\alpha\lambda \text{ is also an eigenvalue of } A \\
\\
\text{Proof:} \\
\text{Let } A = 0 \\
\implies P_{A}(\lambda) = \lambda^{n} \implies \text{Eigenvalues of } A \text{ are } \Set{ 0 } \\
\implies \forall \alpha \in \mathbb{C}: \alpha 0 = 0 \text{ is also an eigenvalue of } A \\
}
$$
# 3c
$$
\displaylines{
\text{Prove or disprove: } \exists A \text{ invertible } \in \mathbb{C}^{n \times n}: \exists \alpha \in C: \alpha \not\in \Set{ -1, 0, 1 } : \forall \lambda \text{ eigenvalue of } A : \\
\alpha\lambda \text{ is also an eigenvalue of } A \\
\\
\text{Disproof:} \\
A \text{ is invertible } \implies \forall \lambda \text{ eigenvalue of } A: \lambda \neq 0 \\
\text{Let } A, \alpha \text{ such that the statement holds} \\
\lambda \neq 0, \alpha \not\in \Set{ -1, 0, 1 } \implies \alpha\lambda \neq \Set{ \lambda, 0, -\lambda } \text{ and is an eigenvalue of } A \\
\implies \alpha^{2}\lambda \text{ is also an eigenvalue of } A \\
\alpha^{2}\lambda \not\in \Set{ \lambda, 0, -\lambda, \alpha\lambda, -\alpha\lambda } \\
\text{We can show by induction that } \forall n \neq m \in \mathbb{N}: \alpha^{n}\lambda \neq \alpha^{m}\lambda \\
\implies A \text{ has an infinite number of eigenvalues } \Set{ \alpha\lambda }_{n \in \mathbb{N}_{0}} - \text{ Contradiction!} \\
}
$$
