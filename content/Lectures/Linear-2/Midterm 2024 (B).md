---
{"publish":true,"created":"21/05/25, 14:05","modified":"2025-11-21T21:10:14.552+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } A = \begin{pmatrix}
1 & 1 & 1 \\
-2 & -1 & 0 \\
2 & 1 & 0 \\
\end{pmatrix} \\
\text{Prove: } A^{2} = A^{2024} \\
\\
\text{Proof:} \\
A^{2} = \begin{pmatrix}
1 & 1 & 1 \\
-2 & -1 & 0 \\
2 & 1 & 0 \\
\end{pmatrix}^{2} = \begin{pmatrix}
1 & 1 & 1 \\
0 & -1 & -2 \\
0 & 1 & 2 \\
\end{pmatrix} \\
A^{3} = \begin{pmatrix}
1 & 1 & 1 \\
-2 & -1 & 0 \\
2 & 1 & 0 \\
\end{pmatrix} = A \\
\implies A^{4} = A^{2} \\
\implies A^{5} = A^{3} = A \\
\implies \dots \implies A^{2k} = A^{2} \implies A^{2024} = A^{2} \\
}
$$
$$
\displaylines{
P_{A}(\lambda) = \begin{vmatrix}
\lambda-1 & -1 & -1 \\
2 & \lambda+1 & 0 \\
-2 & -1 & \lambda \\
\end{vmatrix} = \begin{vmatrix}
\lambda-1 & \lambda-1 & \lambda-1 \\
2 & \lambda+1 & 0 \\
-2 & -1 & \lambda \\
\end{vmatrix} = (\lambda-1)\begin{vmatrix}
1 & 1 & 1 \\
0 & \lambda-1 & -2 \\
0 & 1 & \lambda+2 \\
\end{vmatrix} = \\
(\lambda-1)(\lambda^{2}+\lambda-2+2) = (\lambda-1)(\lambda+1)\lambda \\
\implies A = P\begin{pmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 0 \\
\end{pmatrix}P^{-1} \\
\implies A^{2024} = P\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0 \\
\end{pmatrix}P^{-1} = A^{2} \\
}
$$
# 1b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ nilpotent and diagonalizable} \\
\text{Prove: } N(A) = \mathbb{R}^{n} \\
\\
\text{Proof:} \\
P_{A}(\lambda) = \lambda^{n} \\
\implies g_{0} = n \implies N(0I - A) = N(-A) = N(A) = sp\Set{ v_{1}, \dots, v_{n} } \\
\dim sp\Set{ v_{1}, \dots, v_{n} } = n \text{ and } sp\Set{ v_{1}, \dots, v_{n} } \subseteq \mathbb{R}^{n} \\
\implies \boxed{ N(A) = sp\Set{ v_{1}, \dots, v_{n} } = \mathbb{R}^{n} } \\
}
$$
# 2a
$$
\displaylines{
\text{Let } T: V \to V \text{ be an invertible linear transformation} \\
\text{Prove or disprove: } \exists B: [T]^{B}_{B} = [T^{-1}]^{B}_{B} \\
\\
\text{Disproof:} \\
\text{Let } T = 2I \\
\implies T^{-1} = \frac{1}{2}I \\
\forall B: \forall v_{i} \in B: [T(v)]_{B} = [2v]_{B} = 2e_{i} \implies [T]^{B}_{B} = 2I \\
\forall B: \forall v_{i} \in B: [T^{-1}(v)]_{B} = \left[ \frac{1}{2}v \right]_{B} = \frac{1}{2}e_{i} \implies [T]^{B}_{B} = \frac{1}{2}I \\
}
$$
# 2b
$$
\displaylines{
\text{Let } T: V \to V \text{ be an invertible linear transformation} \\
\text{Prove or disprove: } \exists B, C: [T]^{B}_{C} = [T^{-1}]^{C}_{B} \\
\\
\text{Proof:} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \\
T \text{ is invertible } \implies \mathrm{Im}T = sp\Set{ T(v_{1}), \dots, T(v_{n}) } \\
\text{Let } C = \Set{ T(v_{1}), \dots, T(v_{n}) } \\
\forall v_{i} \in B: [T(v_{i})]_{C} = e_{i} \implies [T]^{B}_{C} = I \\
\forall v_{i} \in B: [T^{-1}(T(v_{i}))]_{B} = [v_{i}]_{B} = e_{i} \implies [T^{-1}]^{C}_{B} = I \\
\implies \boxed{ [T]^{B}_{C} = [T^{-1}]^{C}_{B} } \\
}
$$
# 3
$$
\displaylines{
\text{Let } V = \mathbb{R}_{n}[x] \\
\text{Let } T: V \to V \\
\text{Let } T(p(x)) = p'(x) + p(0) \cdot x^{n} \\
\text{Prove: } T \text{ is a linear transformation} \\
\\
\text{Proof:} \\
\text{Let } p(x), q(x) \in V \\
\text{Let } \alpha \in \mathbb{R} \\
T((p+\alpha q)(x)) = (p+\alpha q)'(x) + (p+\alpha q)(0) \cdot x^{n} = \\
= p'(x) + p(0) \cdot x^{n} + \alpha(q'(x) + q(0) \cdot x^{n}) = T(p(x)) + \alpha T(q(x)) \\
}
$$
## 3a
$$
\displaylines{
\text{Let } S = \Set{ 1, x, \dots, x^{n} } \\
\text{Find: } [T]^{S}_{S} \\
\\
\text{Solution:} \\
\text{Let } p(x) = a_{n}x^{n} +a_{n-1}x^{n-1} + \dots + a_{0} \\
p'(x) = na_{n}x^{n-1} + (n-1)a_{n-1}x^{n-2} + \dots + a_{1} \\
p(0) = a_{0} \\
\implies T(p(x)) = a_{0}x^{n} + na_{n}x^{n-1} + (n-1)a_{n-1}x^{n-2} + \dots + a_{1} \\
\implies [T(p(x))]_{S} = \begin{pmatrix}
a_{1} \\
2a_{2} \\
\vdots \\
(n-1)a_{n-1} \\
na_{n} \\
a_{0} \\
\end{pmatrix} \\
\implies [T(x^{i})]_{S} = \left\{\begin{array}{}
e_{n} & i = 0 \\
i \cdot e^{i-1} & i \in [1, n] \\
\end{array}\right. \\
\implies [T]^{S}_{S} = \begin{pmatrix}
0 & 1 & 0 & \dots & 0 \\
\vdots & \ddots & 2 & \ddots & \vdots \\
\vdots &  & \ddots & \ddots & 0 \\
0 &  &  & \ddots & n \\
1 & 0 & \dots & \dots & 0
\end{pmatrix} \\
}
$$
# 3b
$$
\displaylines{
\text{Let } A = [T]^{S}_{S} \\
\text{Find: } P_{A}(\lambda) \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I - A) = \begin{vmatrix}
\lambda & -1 \\
 & \lambda & -2 \\
 &  & \ddots & -n \\
-1 &  &  & \lambda \\
\end{vmatrix} = \\
= \lambda \begin{vmatrix}
\lambda & -1 \\
 & \lambda & -2 \\
 &  & \ddots & -n \\
 &  &  & \lambda \\
\end{vmatrix} - (-1)^{n+2}\begin{vmatrix}
-1 \\
\lambda & -2 \\
 & \ddots & \ddots \\
 &  & \lambda & -n \\
\end{vmatrix} = \\
= \lambda^{n+1} - (-1)^{n+2} \cdot (-1)^{n} n!) = \\
= \lambda^{n+1} - n! \\
}
$$
# 3c
$$
\displaylines{
\text{Find: } m_{A}(\lambda) \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \lambda^{n+1} - n! \\
P_{A}(\lambda)= 0 \iff \lambda^{n+1} = n! \iff \lambda = \sqrt[n+1]{ n } \cdot e^{(2\pi k)i/n+1}, k \in [0, n] \\
P_{A}(\lambda) \text{ has } n+1 \text{ roots} \\
\implies m_{A}(\lambda) = P_{A}(\lambda) = \lambda^{n+1} - n! \\
}
$$
