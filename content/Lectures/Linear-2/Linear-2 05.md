---
{"publish":true,"created":"28/04/25, 19:04","modified":"2025-11-21T21:10:14.505+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Reminder
$$
\displaylines{
\text{Let } A \text{ be diagonalizable} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \text{ a set of eigenvectors of } A \\
B \text{ is then a basis of } \mathbb{F}^{n} \\
P^{-1}AP = D \\
P = [I]^{B}_{S} \\
}
$$
## Triangularizable matrix #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } T \in \mathbb{F}^{n \times n} \text{ be a triangular matrix} \\
A \sim T \iff A \text{ is triangularizable} \\
}
$$
## Upper and lower triangularizable matrix #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } U \in \mathbb{F}^{n \times n} \text{ be an upper-triangular matrix} \\
\text{Let } L \in \mathbb{F}^{n \times n} \text{ be a lower-triangular matrix} \\
A \sim U \iff A \sim L \\
}
$$
## Triangularizable matrix #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \text{ is triangularizable } \iff P_{A}(\lambda) \text{ is factorizable into linear factors} \\
\text{Corollary: every matrix is triangularizable over } \mathbb{C} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } U \in \mathbb{F}^{n \times n} \text{ be a triangular matrix} \\
\text{Let } A \sim U \\
\text{Let } \forall i \in [1, n]: \alpha_{i} = U_{ii} \\
P_{A}(\lambda) = P_{U}(\lambda) = \prod_{i=1}^{n} (\lambda-\alpha_{i}) \\
\implies \boxed{ P_{A}(\lambda) \text{ is factorized into linear factors} } \\
\boxed{ \impliedby } \text{ Let } P_{A}(\lambda) \text{ be factorized into linear factors} \\
\text{Base case. Let } n = 1, P_{A}(\lambda) = \lambda - A_{11} \text{ and } A \text{ is upper-triangular, } A \sim A \\
\text{Induction step.} \\
\text{Let } \forall n' \leq n: A \in \mathbb{F}^{n' \times n'}: P_{A}(\lambda) \text{ is factorizable into linear factors} \implies A \sim U \\
\text{Let } A \in \mathbb{F}^{n+1 \times n+1}, P_{A}(\lambda) = \prod_{i=1}^{n+1} (\lambda-\alpha_{i}) \\
\implies A \text{ definitely has eigenvalues in } \mathbb{F} \\
\text{Let } \alpha \in \mathbb{F} \text{ be an eigenvalue of } A \\
\text{Let } E_{\alpha} = sp\Set{ v_{1}, \dots, v_{t} }, t \geq 1 \\
\text{Let } B = \Set{ v_{1}, \dots, v_{t} } \cup \Set{ u_{t+1}, \dots, u_{n+1} } \text{ be a basis of } \mathbb{F}^{n+1} \\
\text{Let } P = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ v_{t} } } & \overset{ | }{ \underset{ | }{ u_{t+1} } } & \dots & \overset{ | }{ \underset{ | }{ u_{n+1} } } \\
\end{pmatrix} \\
P^{-1}AP = P^{-1}\begin{pmatrix}
\overset{ | }{ \underset{ | }{ \alpha v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ \alpha v_{t} } } & \overset{ | }{ \underset{ | }{ Au_{t+1} } } & \dots & \overset{ | }{ \underset{ | }{ Au_{n+1} } } \\
\end{pmatrix} = \\
= \begin{pmatrix}
\alpha I_{t} & B \\
0 & C \\
\end{pmatrix} \\
P_{P^{-1}AP}(\lambda) = (\lambda-\alpha)^{t} \cdot P_{C}(\lambda) \\
\implies P_{A}(\lambda) = (\lambda-\alpha)^{t} \cdot P_{C}(\lambda) \\
\implies P_{C}(\lambda) \text{ is factorizable into linear factors} \\
n + 1 - t \leq n \\
\implies C \in \mathbb{F}^{n+1-t \times n+1-t} \text{ is triangularizable} \\
\implies \hat{P^{-1}}C\hat{P} = \hat{U}, \hat{P} \in \mathbb{F}^{n + 1 -t \times n + 1 - t} \\
\text{Let } Q = P\begin{pmatrix}
I & 0 \\
0 & \hat{P} \\
\end{pmatrix} \\
Q^{-1}AQ = \begin{pmatrix}
I & 0 \\
0 & \hat{P} \\
\end{pmatrix}^{-1}P^{-1}AP\begin{pmatrix}
I & 0 \\
0 & \hat{P} \\
\end{pmatrix} = \begin{pmatrix}
I & 0 \\
0 & \hat{P} \\
\end{pmatrix}^{-1}\begin{pmatrix}
\alpha I & B \\
0 & C \\
\end{pmatrix}\begin{pmatrix}
I & 0 \\
0 & \hat{P} \\
\end{pmatrix} = \\
= \begin{pmatrix}
I & 0 \\
0 & \hat{P^{-1}} \\
\end{pmatrix}\begin{pmatrix}
\alpha I & B\hat{P} \\
0 & C\hat{P} \\
\end{pmatrix} = \begin{pmatrix}
\alpha I & B\hat{P} \\
0 & \hat{U} \\
\end{pmatrix} = U \\
\implies \boxed{ A \sim U } \\
}
$$
## Properties of triangularizable matrix #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \text{ be triangularizable} \\
\implies P_{A}(\lambda) \text{ is factorizable into linear factors} \\
\text{Let } \Set{ \alpha_{1}, \dots, \alpha_{t} } \text{ be eigenvalues of } A \\
tr(A) = \sum_{i=1}^{t} \alpha_{i} \cdot \mu_{A}(\alpha_{i}) \\
\left\lvert A \right\rvert = \prod_{i=1}^{t} \alpha_{i}^{\mu_{A}(\alpha_{i})} \\
}
$$
## Matrix polynomial expression #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } P(x) \in \mathbb{F}_{t}[x] \\
P(A) = a_{t}A^{t} + \dots + a_{1}A + a_{0}I \text{ is then called a matrix polynomial expression} \\
}
$$
## Existence of polynomial with the given matrix as a root #lemma 
$$
\displaylines{
A \in \mathbb{F}^{n \times n} \\
\Set{ I, A, A^{2}, \dots, A^{n^{2}} } \subseteq \mathbb{F}^{n \times n} \text{ is a linear dependence} \\
\sum_{i=0}^{n^{2}} \alpha_{i}A^{i} = 0 \\
\implies P(A) = \sum_{i=0}^{n^{2}} \alpha_{i}A^{i} = 0 \\
\implies P(x) = \sum_{i=0}^{n^{2}} \alpha_{i}x^{i} \\
}
$$
## Adjoint matrix #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Adjoint matrix of } A \text{ is denoted as: } \mathrm{adj}A \in \mathbb{F}^{n \times n} \\
\forall i, j \in [1, n]: (\mathrm{adj}A)_{ij} = (-1)^{i+j}\left\lvert M_{ji} \right\rvert \\
}
$$
## Adjoint of a transpose #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Then } (\mathrm{adj}A)^{T} = \mathrm{adj}(A^{T}) \\
\\
\text{Proof:} \\
(\mathrm{adj}A)^{T}_{ij} = (\mathrm{adj}A)_{ji} = (-1)^{i+j}\left\lvert M_{ij}(A) \right\rvert = (-1)^{i+j}\left\lvert (M_{ij}(A))^{T} \right\rvert = \\
= (-1)^{i+j}\left\lvert M_{ji}(A^{T}) \right\rvert = \mathrm{adj}(A^{T})_{ij} \\
}
$$
## Product of matrix and its adjoint #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \cdot \mathrm{adj}A = \mathrm{adj}A \cdot A = \det(A)I \\
\\
\text{Proof:} \\
\text{Let } i \in [1, n] \\
(A \cdot \mathrm{adj}A)_{ii} = \sum_{k=1}^{n} A_{ik} \cdot (\mathrm{adj}A)_{ki} = \sum_{k=1}^{n} A_{ik} \cdot (-1)^{k+i}\left\lvert M_{ik} \right\rvert = \det(A) \\
\text{Let } j \neq i \in [1, n] \\
\text{Let } \hat{A}: R_{k}(\hat{A}) = \left\{\begin{array}{}
R_{k}(A) & k \neq j \\
R_{i}(A) & k = j \\
\end{array}\right. \implies \det(\hat{A}) = 0 \\
(A \cdot \mathrm{adj}A)_{ij} = \sum_{k=1}^{n} A_{ik} \cdot (\mathrm{adj}A)_{kj} = \sum_{k=1}^{n} A_{ik} \cdot (-1)^{k+j}\left\lvert M_{jk}(A) \right\rvert = \\
= \sum_{k=1}^{n} \hat{A}_{jk} \cdot (-1)^{k+j} \left\lvert M_{jk}(\hat{A}) \right\rvert = \det(\hat{A}) = 0 \\
\implies \boxed{ A \cdot \mathrm{adj}A = \det(A)I } \\
\\
(A^{T} \cdot \mathrm{adj}(A^{T}))^{T} = (\det(A^{T})I)^{T} \\
\implies (\mathrm{adj}(A^{T}))^{T} \cdot A = \det(A)I \implies \boxed{ \mathrm{adj}A \cdot A = \det(A)I } \\
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
