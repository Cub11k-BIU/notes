---
{"publish":true,"created":"01/04/25, 14:04","modified":"2025-11-21T21:10:25.212+02:00","tags":["Academia","Practice","Linear-2"],"cssclasses":""}
---

$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Prove or disprove: } A \text{ invertible} \iff AA^{T} \text{ invertible} \\
\\
\text{Proof:} \\
\det(A) \neq 0 \iff \det(A^{T}) \neq 0 \iff \det(AA^{T}) \neq 0 \\
}
$$
---
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Prove or disprove: } A \text{ invertible} \iff A+A^{T} \text{ invertible} \\
\\
\text{Proof:} \\
A+A^{T} = 2A \\
\det(A) \neq 0 \iff \det(2A) = 2^{n}\det(A) \neq 0 \iff \det(A+A^{T}) \neq 0 \\
}
$$
---
$$
\displaylines{
\text{Let } \alpha \in \mathbb{R} \\
\text{Let } A \in \mathbb{R}^{n \times n} \\
A_{ij} = \left\{\begin{array}{}
\alpha & i = j \\
1 & i \neq j \\
\end{array}\right. \\
\begin{vmatrix}
\alpha & 1 & \dots & 1 \\
1 & \alpha & \dots & 1 \\
\vdots & \vdots & \ddots & \vdots \\
1 & \dots & 1 & \alpha \\
\end{vmatrix} \overset{ \forall i \in [2, n]: R_{1} + R_{i} }{ \to } \begin{vmatrix}
\alpha+n-1 & \alpha+n-1 & \dots & \alpha+n-1 \\
1 & \alpha & \dots & 1 \\
\vdots & \vdots & \ddots & \vdots \\
1 & \dots & 1 & \alpha \\
\end{vmatrix} \\
\overset{ \frac{1}{\alpha+n-1}R_{1} }{ \to } (\alpha+n-1)\begin{vmatrix}
1 & 1 & \dots & 1 \\
1 & \alpha & \dots & 1 \\
\vdots & \vdots & \ddots & \vdots \\
1 & \dots & 1 & \alpha \\
\end{vmatrix} \overset{ \forall i \in [2, n]: R_{i} - R_{1} }{ \to } (\alpha+n-1)\begin{vmatrix}
1 & 1 & \dots & 1 \\
0 & \alpha-1 & \dots & 0 \\
\vdots & \ddots & \ddots & \vdots \\
0 & \dots & 0 & \alpha-1 \\
\end{vmatrix} \\
\implies \det(A) = (\alpha+n-1)(\alpha-1)^{n-1} \\
}
$$
---
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \lambda \in \mathbb{F} \\
\lambda \text{ is called an eigenvalue of } A \iff \exists v \in \mathbb{F}^{n} \neq 0: Av = \lambda A \\
v \text{ is then called an eigenvector of } A \text{ in respect to eigenvalue } \lambda \\
\\
\lambda \neq 0 \implies A\left( \frac{1}{\lambda}v \right) = v \implies v \in C(A) \\
\lambda = 0 \implies Av = 0 \implies v \in N(A) \\
}
$$
---
## Characteristic polynomial
$$
\displaylines{
\text{Characteristic polynomial } P_{A}(\lambda) = \left\lvert \lambda I - A \right\rvert \\
\\
\begin{vmatrix}
\lambda-5 & 6 \\
-3 & \lambda+4 \\
\end{vmatrix} = (\lambda-5)(\lambda+4) + 18 = (\lambda+1)(\lambda-2) \\
\\
\\
P_{A}(\lambda) = 0 \iff \lambda \text{ is an eigenvalue of } A \\
\text{Proof:} \\
\exists v \neq 0: Av = \lambda v \iff (\lambda I - A)v = 0 \iff v \in N(\lambda I - A) \iff \det(\lambda I - A) = 0 \\
\iff P_{A}(\lambda) = 0 \\
}
$$
---
$$
\displaylines{
A = \begin{pmatrix}
0 & 1 \\
-1 & 0 \\
\end{pmatrix} \\
P_{A}(\lambda) = \begin{vmatrix}
\lambda & -1 \\
1 & \lambda \\
\end{vmatrix} = \lambda^{2} + 1 \\
A \in \mathbb{R}^{n \times n} \implies \text{No eigenvalues} \\
A \in \mathbb{C}^{n \times n} \implies \pm i \text{ is an eigenvalue} \\
A \in \mathbb{Z}_{2}^{n \times n} \implies 1 \text{ is an eigenvalue} \\
}
$$
---
$$
\displaylines{
A = \begin{pmatrix}
3 & 1 & 1 \\
2 & 4 & 2 \\
1 & 1 & 3 \\
\end{pmatrix} \\
\begin{vmatrix}
\lambda-3 & -1 & -1 \\
-2 & \lambda-4 & -2 \\
-1 & -1 & \lambda-3 \\
\end{vmatrix} \overset{ R_{1} + R_{2} + R_{3} }{ \to } \begin{vmatrix}
\lambda-6 & \lambda-6 & \lambda-6 \\
-2 & \lambda-4 & -2 \\
-1 & -1 & \lambda-3 \\
\end{vmatrix} = (\lambda-6)\begin{vmatrix}
1 & 1 & 1 \\
-2 & \lambda-4 & -2 \\
-1 & -1 & \lambda-3 \\
\end{vmatrix} \\
\to (\lambda-6)\begin{vmatrix}
1 & 1 & 1 \\
0 & \lambda-2 & -2 \\
0 & 0 & \lambda-2 \\
\end{vmatrix} = (\lambda-6)(\lambda-2)^{2} \\
P_{A}(\lambda) = 0 \iff \left[\begin{array}{}
\lambda = 6 \\
\lambda = 2 \\
\end{array}\right. \\
\lambda = 6 \implies v_{\lambda} = N\begin{pmatrix}
0 & 0 & 0 \\
-2 & 2 & -2 \\
-1 & -1 & 3 \\
\end{pmatrix} = N\begin{pmatrix}
0 & 0 & 0 \\
-1 & 1 & -1 \\
0 & -1 & 2 \\
\end{pmatrix} = N\begin{pmatrix}
0 & 0 & 0 \\
-1 & 0 & 1 \\
0 & -1 & 2 \\
\end{pmatrix} = \\
= sp\Set{ \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} } \\
\lambda = 2 \implies v_{\lambda} = N\begin{pmatrix}
-1 & -1 & -1 \\
-2 & -2 & -2 \\
-1 & -1 & -1 \\
\end{pmatrix} = N\begin{pmatrix}
1 & 1 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} = sp\Set{ \begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} } \\
}
$$
---
$$
\displaylines{
\text{Let } A \sim B \\
P_{A}(\lambda) = P_{B}(\lambda) \\
\\
\text{Proof:} \\
\left\lvert \lambda I - B \right\rvert = \left\lvert \lambda I - P^{-1}AP \right\rvert = \left\lvert P^{-1}(\lambda I - A)P \right\rvert = \\
= \left\lvert P^{-1} \right\rvert \cdot \left\lvert \lambda I - A \right\rvert \cdot \left\lvert P \right\rvert = \left\lvert \lambda I - A \right\rvert \\
}
$$
---
$$
\displaylines{
\text{Let } T: V \to V \text{ be a linear transformation} \\
\forall B \text{ basis of } V: \lambda \text{ is an eigenvalue of } T \iff \lambda \text{ is an eigenvalue of } [T]_{B} \\
\\
\text{Proof:} \\
\text{Let } v \neq 0 \in V \\
Tv = \lambda v \iff [Tv]_{B} = [\lambda v]_{B} \iff [T]_{B}[v]_{B} = \lambda[v]_{B} \\
}
$$
---
