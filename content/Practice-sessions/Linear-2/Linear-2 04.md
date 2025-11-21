---
{"publish":true,"created":"22/04/25, 13:04","modified":"2025-11-21T21:10:25.235+02:00","tags":["Academia","Practice","Linear-2"],"cssclasses":""}
---

$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
\text{Let } T, S: V \to V \text{ be linear transformations} \\
\text{Prove: } \text{Eigenvalues of } ST \text{ are equal to eigenvalues of } TS \\
\\
\text{Proof:} \\
\text{Let } \lambda \neq 0 \text{ be an eigenvalue of } TS \\
\exists v \neq 0: TSv = \lambda v \\
\implies ST(Sv) = S(TSv) = S(\lambda v) = \lambda Sv \\
\implies \lambda \text{ is an eigenvalue of } ST \\
\text{Let } \lambda \text{ be an eigenvalue of } ST \\
\\
\text{Let } \lambda = 0 \text{ be an eigenvalue of } TS \\
\implies TSv = 0v = 0 \\
\implies TS \text{ is not invertible} \implies \left[\begin{array}{}
T \text{ is not invertible} \\
S \text{ is not invertible} \\
\end{array}\right. \implies ST \text{ is not invertible} \\
\implies ker(ST) \neq \Set{ 0 } \implies \lambda \text{ is an eigenvalue of } ST \\
}
$$
---
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ of rank } 1 \\
\text{Prove: } \forall x \neq y \in \mathbb{R} \setminus \Set{ 0 }: \left[\begin{array}{}
xI - A \text{ is invertible} \\
yI - A \text{ is invertible} \\
\end{array}\right. \\
\text{Determine whether there is always } x \neq 0 \in \mathbb{R}: xI - A \text{ is not invertible} \\
\\
\text{Proof:} \\
\text{Let } xI - A \text{ be non-invertible and } yI - A \text{ be non-invertible} \\
\implies \left\{\begin{array}{}
E_{x} = N(xI-A) \neq \Set{ 0 } \\
E_{y} = N(yI-A) \neq \Set{ 0 } \\
\end{array}\right. \\
rank(A) = 1 \implies \gamma_{A}(0) = n - 1 \implies \mu_{A}(0) \geq n - 1 \\
\implies \left\{\begin{array}{}
\mu_{A}(x) + \mu_{A}(y) = 1 \\
\mu_{A}(x) \geq 1 \\
\mu_{A}(y) \geq 1 \\
\end{array}\right. - \text{Contradiction!} \\
\\
\text{Solution:} \\
\text{No} \\
A = \begin{pmatrix}
0 & 1 \\
0 & 0 \\
\end{pmatrix} \implies P_{A}(\lambda) = \lambda^{2} \implies \forall \lambda \neq 0 \in \mathbb{R}: \det(\lambda I-A) \neq 0 \\
}
$$
---
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be an idempotentic linear transformation} \\
\text{Find eigenvalues of } T \\
\text{Determine whether } T \text{ is diagonalizable} \\
\\
\text{Solution:} \\
E_{0} = ker(T) \\
E_{1} = Im(T)? \\
\text{Let } Tv = v \implies v \in Im(T) \\
\text{Let } v \in Im(T) \\
\exists u \in V: Tu = v \implies T(Tu) = Tv = v \implies v \in E_{1} \\
\implies E_{1} = Im(T) \\
\dim(E_{0}) + \dim(E_{1}) = n \implies \text{There are no other eigenvalues and } T \text{ is diagonalizable} \\
\left\{\begin{array}{}
1 \text{ is the only eigenvalue} & T \text{ is invertible} (T = I) \\
0 \text{ is the only eigenvalue} & T = 0 \\
0, 1 \text{ are the only eigenvalues} & \text{otherwise} \\
\end{array}\right. \\
}
$$
---
$$
\displaylines{
a_{n} = \left\{\begin{array}{}
1 & n = 1, 2 \\
a_{n-1} + 2a_{n-2} & n > 2 \\
\end{array}\right. \\
1, 1, 3, 5, 11, 21, \dots \\
\text{Let } A = \begin{pmatrix}
1 & 2 \\
1 & 0 \\
\end{pmatrix} \\
\forall n > 2: A \cdot \begin{pmatrix}
a_{n-1} \\
a_{n-2} \\
\end{pmatrix} = \begin{pmatrix}
a_{n} \\
a_{n-1} \\
\end{pmatrix} \\
\implies A^{n-2} \cdot \begin{pmatrix}
a_{2} \\
a_{1} \\
\end{pmatrix} = \begin{pmatrix}
a_{n} \\
a_{n-1} \\
\end{pmatrix} \\
P_{A}(\lambda) = \lambda^{2} - \lambda - 2 = (\lambda-2)(\lambda+1) \\
E_{2} = sp\Set{ \begin{pmatrix}
2 \\
1 \\
\end{pmatrix} } \\
E_{-1} = sp\Set{ \begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} } \\
\text{Let } P = \begin{pmatrix}
2 & 1 \\
1 & -1 \\
\end{pmatrix}, D = \begin{pmatrix}
2 & 0 \\
0 & -1 \\
\end{pmatrix} \\
A = PDP^{-1} \implies A^{n} = PD^{n}P^{-1} \\
\implies \begin{pmatrix}
a_{n} \\
a_{n-1} \\
\end{pmatrix} = P \begin{pmatrix}
2^{n-2} & 0 \\
0 & (-1)^{n-2} \\
\end{pmatrix}P^{-1}\begin{pmatrix}
a_{2} \\
a_{1} \\
\end{pmatrix} \\
P^{-1} = \frac{1}{3}\begin{pmatrix}
1 & 1 \\
1 & -2 \\
\end{pmatrix} \\
A^{n-2} = \frac{1}{3}\begin{pmatrix}
2 & 1 \\
1 & -1 \\
\end{pmatrix}\begin{pmatrix}
2^{n-2} & 0 \\
0 & (-1)^{n-2} \\
\end{pmatrix}\begin{pmatrix}
1 & 1 \\
1 & -2 \\
\end{pmatrix} = \\
= \frac{1}{3}\begin{pmatrix}
2 & 1 \\
1 & -1 \\
\end{pmatrix}\begin{pmatrix}
2^{n-2} & 2^{n-2} \\
(-1)^{n-2} & -2 \cdot (-1)^{n-2} \\
\end{pmatrix} = \frac{1}{3}\begin{pmatrix}
2^{n-1}+(-1)^{n-2} & 2^{n-1}-2 \cdot (-1)^{n-2} \\
* & * \\
\end{pmatrix} \\
\implies a_{n} = \frac{1}{3}(2^{n}-(-1)^{n-2}) \\
\implies a_{n} = \frac{4}{3}2^{n-2} - \frac{1}{3}(-1)^{n-2} \\
a_{n} = \alpha \lambda_{1}^{n-2} + \beta \lambda_{2}^{n-2} \\
a_{n} = \sum_{i=1}^{k} \alpha_{i}\lambda_{i}^{n-k} \\
}
$$
---
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
P_{A}(\lambda) = \lambda^{3}(\lambda^{2}+4) \\
\text{Not diagonalizable over } \mathbb{R} \\
\text{Over } \mathbb{C}? \\
P_{A}(\lambda) = \lambda^{3}(\lambda-2i)(\lambda+2i) \\
A \text{ is diagonalizable} \iff rank(A) = 2 \\
A = \begin{pmatrix}
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 2i & 0 \\
0 & 0 & 0 & 0 & -2i \\
\end{pmatrix} \text{ Incorrect :(, } A \text{ must only have real values} \\
A = \begin{pmatrix}
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 2 \\
0 & 0 & 0 & -2 & 0 \\
\end{pmatrix} \text{ Correct! :)} \\
A = \begin{pmatrix}
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 2 \\
0 & 0 & 0 & -2 & 0 \\
\end{pmatrix} \text{ Correct! :) And a Jordan 3x3 block!!} \\
}
$$
---
