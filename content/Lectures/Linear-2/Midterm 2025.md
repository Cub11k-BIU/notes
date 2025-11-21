---
{"publish":true,"created":"22/05/25, 10:05","modified":"2025-11-21T21:10:14.555+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } A = J_{4}(\lambda) = \begin{pmatrix}
\lambda & 1 & 0 & 0 \\
0 & \lambda & 1 & 0 \\
0 & 0 & \lambda & 1 \\
0 & 0 & 0 & \lambda \\
\end{pmatrix} \\
\text{Find all values of } \lambda \text{ such that Jordan form of } A^{2} \text{ and } A \text{ is the same} \\
\\
\text{Solution:} \\
\text{Let } J_{A^{2}} = J_{A} \\
P_{A}(x) = (x-\lambda)^{4} \\
x = \lambda \implies (xI - A) = \begin{pmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \implies rank(xI - A) = 3 \implies g_{\lambda} = 1 \\
\implies J_{A} \text{ has one Jordan block with eigenvalue } \lambda \implies J_{A} = J_{4}(\lambda) \\
\\
A^{2} = \begin{pmatrix}
\lambda & 1 & 0 & 0 \\
0 & \lambda & 1 & 0 \\
0 & 0 & \lambda & 1 \\
0 & 0 & 0 & \lambda \\
\end{pmatrix}^{2} = \begin{pmatrix}
\lambda^{2} & 2\lambda & 1 & 0 \\
0 & \lambda^{2} & 2\lambda & 1 \\
0 & 0 & \lambda^{2} & 2\lambda \\
0 & 0 & 0 & \lambda^{2} \\
\end{pmatrix} \\
\implies P_{A^{2}}(x) = (x - \lambda^{2})^{4} \\
A^{2} \sim J_{A^{2}} = J_{A} \sim A \implies A^{2} \sim A \implies P_{A^{2}}(x) = P_{A}(x) \implies \lambda^{2} = \lambda \\
\implies \left[\begin{array}{}
\lambda = 0 \\
\lambda = 1 \\
\end{array}\right. \\
\text{Let } \lambda = 0 \\
\implies A^{2} = \begin{pmatrix}
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \implies rank(\lambda I - A^{2}) = 2 \implies g_{\lambda} = 2 \\
\implies J_{A^{2}} \text{ has two Jordan blocks} \implies J_{A^{2}} \neq J_{4}(\lambda) = J_{A} \\
\implies \lambda = 1 \\
\lambda = 1 \implies (\lambda I-A^{2}) = \begin{pmatrix}
0 & 2 & 1 & 0 \\
0 & 0 & 2 & 1 \\
0 & 0 & 0 & 2 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \implies rank(\lambda I-A^{2}) = 3 \implies g_{\lambda} = 1 \\
\implies J_{A^{2}} \text{ has one block with eigenvalue } \lambda \implies \boxed{ J_{A^{2}} = J_{4}(\lambda) = J_{A} } \\
\implies \boxed{ \lambda = 1 \text{ is the only value such that } J_{A^{2}} = J_{A} } \\
}
$$
# 2a
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{n \times n} \\
\text{Let } (A+B)^{2} = A^{2} + B^{2} \\
\text{Let } n \text{ be odd} \\
\text{Prove: } A \text{ is not invertible or } B \text{ is not invertible} \\
\\
\text{Proof:} \\
(A+B)^{2} = A^{2} + AB + BA + B^{2} \\
(A+B)^{2} = A^{2} + B^{2} \implies AB + BA = 0 \implies AB = -BA \\
\implies \det(AB) = \det(-BA) \implies \det(A) \cdot \det(B) = (-1)^{n} \cdot \det(A) \cdot \det(B) \\
\text{Let } \det(A) \neq 0 \text{ and } \det(B) \neq 0 \\
\implies 1 = (-1)^{n} = -1 \text{ Contradiction!} \\
\implies \det(A) = 0 \text{ or } \det(B) = 0 \\
\implies \boxed{ A \text{ is not invertible or } B \text{ is not invertible} } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{n \times n} \\
\text{Let } (A+B)^{2} = A^{2} + B^{2} \\
\text{Find } A \neq 0, B \neq 0 \text{ such that } \left\lvert A+B \right\rvert \neq \left\lvert A-B \right\rvert \\
\\
\text{Solution:} \\
\text{Let } A = \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, B = \begin{pmatrix}
0 & 0 \\
0 & -1 \\
\end{pmatrix} \\
(A+B)^{2} = \begin{pmatrix}
1 & 0 \\
0 & -1 \\
\end{pmatrix}^{2} = I \\
A^{2} + B^{2} = \begin{pmatrix}
1 & 0 \\
0 & 0
\end{pmatrix}^{2} + \begin{pmatrix}
0 & 0 \\
0 & -1 \\
\end{pmatrix}^{2} = \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix} + \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} = I = (A+B)^{2} \\
\left\lvert A + B \right\rvert = \begin{vmatrix}
1 & 0 \\
0 & -1 \\
\end{vmatrix} = -1 \\
\left\lvert A - B \right\rvert = \begin{vmatrix}
1 & 0 \\
0 & 1 \\
\end{vmatrix} = 1 \\
\implies \boxed{ \left\lvert A + B \right\rvert \neq \left\lvert A - B \right\rvert } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } A = J_{n}(\lambda) \in \mathbb{C}^{n \times n} \\
\text{Prove: } A \sim A^{T} \\
\\
\text{Proof:} \\
A = J_{n}(\lambda) = \begin{pmatrix}
\lambda & 1 & \\
 & \ddots & \ddots \\
 &  & \lambda & 1 \\
 &  &  & \lambda \\
\end{pmatrix} \\
\implies A^{T} = \begin{pmatrix}
\lambda \\
1 & \ddots \\
 & \ddots & \lambda \\
 &  & 1 & \lambda \\
\end{pmatrix}  \implies P_{A^{T}}(x) = (x-\lambda)^{n} \\
x = \lambda \implies (xI - A^{T}) = \begin{pmatrix}
0 \\
-1 & \ddots \\
 & \ddots & 0 \\
 &  & -1 & 0 \\
\end{pmatrix} \implies rank(xI-A^{T}) = n - 1 \implies g_{\lambda} = 1 \\
\implies A^{T} \sim J_{A^{T}} = J_{n}(\lambda) = A \\
\implies \boxed{ A^{T} \sim A } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \text{ be a Jordan matrix} \\
\text{Prove: } A \sim A^{T} \\
\\
\text{Proof:} \\
A \text{ is a Jordan matrix} \implies A = \begin{pmatrix}
J_{1} \\
 & J_{2} \\
 &  & \ddots \\
 &  &  & J_{k} \\
\end{pmatrix} \implies A^{T} = \begin{pmatrix}
J_{1}^{T} \\
 & J_{2}^{T} \\
 &  & \ddots \\
 &  &  & J_{k}^{T} \\
\end{pmatrix} \\
\text{As proved in 3a, } \forall i \in [1, k]: J_{i} \sim J_{i}^{T} \implies \exists P_{i}: J_{i} = P^{i}J_{i}^{T}P^{-1} \\
\text{Let } P = \begin{pmatrix}
P_{1} \\
 & P_{2} \\
 &  & \ddots \\
 &  &  & P_{k} \\
\end{pmatrix} \implies P^{-1} = \begin{pmatrix}
P_{1}^{-1} \\
 & P_{2}^{-1} \\
 &  & \ddots \\
 &  &  & P_{k}^{-1} \\
\end{pmatrix} \\
\implies PA^{T}P = \begin{pmatrix}
P_{1} \\
 & P_{2} \\
 &  & \ddots \\
 &  &  & P_{k} \\
\end{pmatrix}\begin{pmatrix}
J_{1}^{T} \\
 & J_{2}^{T} \\
 &  & \ddots \\
 &  &  & J_{k}^{T} \\
\end{pmatrix}\begin{pmatrix}
P_{1}^{-1} \\
 & P_{2}^{-1} \\
 &  & \ddots \\
 &  &  & P_{k}^{-1} \\
\end{pmatrix} = \\
= \begin{pmatrix}
P_{1}J_{1}^{T}P_{1}^{-1} \\
 & P_{2}J_{2}P_{2}^{-1} \\
 &  & \ddots \\
 &  &  & P_{k}J_{k}P_{k}^{-1} \\
\end{pmatrix} = \begin{pmatrix}
J_{1} \\
 & J_{2} \\
 &  & \ddots \\
 &  &  & J_{k} \\
\end{pmatrix} = A \\
\implies \boxed{ A^{T} \sim A } \\
}
$$
# 3c
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \\
\text{Prove: } A \sim A^{T} \\
\\
\text{Proof:} \\
A \in \mathbb{C}^{n \times n} \implies P_{A}(x) \text{ is factorizable into linear factors} \implies \exists J_{A}: A \sim J_{A} \\
\implies \exists P: A = PJ_{A}P^{-1} \\
\text{As proved in 3b, } J_{A} = \begin{pmatrix}
P_{1} \\
 & P_{2} \\
 &  & \ddots \\
 &  &  & P_{k} \\
\end{pmatrix}J_{A}^{T}\begin{pmatrix}
P_{1}^{-1} \\
 & P_{2}^{-1} \\
 &  & \ddots \\
 &  &  & P_{k}^{-1} \\
\end{pmatrix} \\
\text{Let } \hat{P} = \begin{pmatrix}
P_{1} \\
 & P_{2} \\
 &  & \ddots \\
 &  &  & P_{k} \\
\end{pmatrix} \\
\implies A = P\hat{P}J_{A}^{T}\hat{P}^{-1}P^{-1} \\
\implies A^{T} = (P^{-1})^{T}(\hat{P}^{-1})^{T}J_{A}\hat{P}^{T}P^{T} = (\hat{P}^{-1}P^{-1})^{T} J_{A} (P\hat{P})^{T} \\
\text{Let } Q = (P\hat{P})^{T} \\
(P\hat{P})^{T} \cdot (\hat{P}^{-1}P^{-1})^{T} = (\hat{P}^{-1}\underbrace{ P^{-1}P }_{ I }\hat{P})^{T} = (\hat{P}^{-1}\hat{P})^{T} = I^{T} = I \\
(\hat{P}^{-1}P^{-1})^{T} \cdot (P\hat{P})^{T}  = (P\underbrace{ \hat{P}\hat{P}^{-1} }_{ I }P^{-1})^{T} = (PP^{-1})^{T} = I^{T} = I \\
\implies (\hat{P}^{-1}P^{-1})^{T} = Q^{-1} \\
\implies A^{T} = Q^{-1}J_{A}Q \implies A^{T} \sim J_{A} \\
\implies A^{T} \sim J_{A} \sim A \implies \boxed{ A^{T} \sim A } \\
}
$$
