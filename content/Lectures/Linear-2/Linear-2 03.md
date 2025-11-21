---
{"publish":true,"created":"01/04/25, 10:04","modified":"2025-11-21T21:10:14.500+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Diagonalizable matrix and eigenvectors #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \text{ is diagonalizable} \iff \exists B \text{ basis of } \mathbb{F}^{n}: \forall i \in [1, n]: Av_{i} = \lambda_{i}v_{i} \\
\\
\text{Proof:} \\
\boxed{ \impliedby } \text{ Let } \exists B \text{ basis of } \mathbb{F}^{n}: \forall i \in [1, n]: Av_{i} = \lambda_{i}v_{i} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \\
\text{Let } \Set{ \lambda_{i} }_{i \in [1, n]}: \forall i \in [1, n]: Av_{i} = \lambda_{i}v_{i} \\
\text{Let } P = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ v_{n} } } \\
\end{pmatrix} \in \mathbb{F}^{n \times n} \\
B \text{ is a linear independence} \implies rank(P) = n \implies P \text{ is invertible} \\
P^{-1}AP = P^{-1}\begin{pmatrix}
\overset{ | }{ \underset{ | }{ Av_{1} } } & \dots & \overset{ | }{ \underset{ | }{ Av_{n} } } \\
\end{pmatrix} = P^{-1}\begin{pmatrix}
\overset{ | }{ \underset{ | }{ \lambda_{1}v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ \lambda_{n}v_{n} } } \\
\end{pmatrix} = \\
= \begin{pmatrix}
\overset{ | }{ \underset{ | }{ \lambda_{1}P^{-1}v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ \lambda_{n}P^{-1}v_{n} } } \\
\end{pmatrix} \\
\lambda_{i}P^{-1}v_{i} = \lambda_{i}P^{-1}C_{i}(P) = \lambda_{i}P^{-1}Pe_{i} = \lambda_{i}e_{i} \\
\implies P^{-1}AP = \begin{pmatrix}
\lambda_{1} & 0 & \dots & 0 \\
0 & \lambda_{2} & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \dots & 0 & \lambda_{n} \\
\end{pmatrix} = D \\
\\
\boxed{ \implies } \text{ Let } A \text{ be diagonalizable} \\
\text{Let } D = \begin{pmatrix}
\alpha_{1} & 0 & \dots & 0 \\
0 & \alpha_{2} & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \dots & 0 & \alpha_{n} \\
\end{pmatrix} \\
\text{Let } P = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ p_{1} } } & \dots & \overset{ | }{ \underset{ | }{ p_{n} } } \\
\end{pmatrix} \in \mathbb{F}^{n \times n} \text{ be invertible} \\
D = P^{-1}AP = P^{-1}\begin{pmatrix}
\overset{ | }{ \underset{ | }{ Ap_{1} } } & \dots & \overset{ | }{ \underset{ | }{ Ap_{n} } } \\
\end{pmatrix} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ P^{-1}Ap_{1} } } & \dots & \overset{ | }{ \underset{ | }{ P^{-1}Ap_{n} } } \\
\end{pmatrix} \\
\implies \forall i \in [1, n]: C_{i}(D) = P^{-1}Ap_{i} \implies \alpha_{i}e_{i} = P^{-1}Ap_{i} \\
\implies \alpha_{i}Pe_{i} = Ap_{i} \implies \alpha_{i}p_{i} = Ap_{i} \\
\implies \forall i \in [1, n]: Ap_{i} = \alpha_{i}p_{i} \\
rank(P) = n \implies \Set{ p_{1}, \dots, p_{n} } \text{ is a linear independence of size } n \\
\implies \Set{ p_{1}, \dots, p_{n} } \text{ is a basis of } \mathbb{F}^{n} \\
}
$$
## Eigenvalues and eigenvectors of a linear transformation #definition 
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear transformation} \\
\lambda \in \mathbb{F} \text{ is called an Eigenvalue of } T \text{ if} \\
\exists v \neq 0 \in \mathbb{F}^{n}: T(v) = \lambda v \\
v \text{ is then called an Eigenvector of } T \text{ in respect to Eigenvalue } \lambda \\
}
$$
## Eigenvalues of linear transformation and representation matrix #lemma 
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
\text{Let } B \text{ be a basis of } V \\ 
\text{Let } T: V \to V \text{ be a linear transformation} \\
\text{Then } \lambda \text{ is an eigenvalue of } T \iff \lambda \text{ is an eigenvalue of } [T]^{B}_{B} \\
\\
\text{Proof:} \\
\lambda \text{ is an eigenvalue of } T \iff \exists v \neq 0 \in V: T(v) = \lambda v \\
\iff \exists v \neq 0 \in V: [T]^{B}_{B}[v]_{B} = [\lambda v]_{B} = \lambda [v]_{B} \iff \lambda \text{ is an eigenvalue of } [T]^{B}_{B} \\
}
$$
### Corollary
$$
\displaylines{
v \text{ is an eigenvector of } T \iff [v]_{B} \text{ is an eigenvector of } [T]^{B}_{B} \\
}
$$
## Diagonalizable linear operator #definition 
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear operator} \\
T \text{ is then called diagonalizable iff } \exists B \text{ basis of } V: [T]^{B}_{B} \text{ is diagonalizable} \\
}
$$
## Diagonalizable linear operator and representation matrix #lemma 
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Let } C \text{ be a basis of } V \\
\text{Then } T \text{ is diagonalizable} \iff [T]^{C}_{C} \text{ is diagonalizable} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } T \text{ be diagonalizable} \\
\implies \exists B: [T]^{B}_{B} \text{ is diagonal} \\
\implies ([I]^{B}_{C})^{-1}[T]^{C}_{C}[I]^{B}_{C} = [T]^{B}_{B} \\
\implies [T]^{C}_{C} \text{ is diagonalizable} \\
\\
\boxed{ \impliedby } \text{ Let } [T]^{C}_{C} \text{ be diagonalizable} \\
\text{Let } P \in \mathbb{F}^{n \times n} \text{ be invertible} \\
\implies \exists B: P = [I]^{B}_{C} \\
\implies P^{-1}[T]^{C}_{C}P = [I]^{C}_{B}[T]^{C}_{C}[I]^{B}_{C} = [T]^{B}_{B} = D \\
\implies T \text{ is diagonalizable} \\
}
$$
## Properties of characteristic polynomial #lemma 
$$
\displaylines{
1. \quad \text{Eigenvalues of } A \text{ are roots of its characteristic polynomial} \\
2. \quad \text{Characteristic polynomial is a monic polynomial of degree } n \\
\text{That is, its leading coefficient is } 1 \\
3. \quad P_{A}(\lambda) = \lambda^{n} + a_{n-1}\lambda^{n-1} + \dots + a_{0} \cdot 1 \implies \left\{\begin{array}{}
a_{n-1} = -tr(A) \\
a_{0} = (-1)^{n} \left\lvert A \right\rvert \\
\end{array}\right. \\
\\
\text{Proof for 2.} \\
P_{A}(\lambda) = \left\lvert \lambda I-A \right\rvert = \prod_{i=1}^{n} (\lambda-a_{ii}) + \underbrace{ p(\lambda) }_{ \text{of degree} \leq n - 2 } = \\
= \lambda^{n} - a_{11}\lambda^{n-1} - \dots - a_{nn}\lambda^{n-1} + \underbrace{ p_{1}(\lambda) }_{ \text{of degree} \leq n - 2 } = \\
= \lambda^{n} + (-tr(A))\lambda^{n-1} + p_{1}(\lambda) \\
\\
\text{Proof for 3.} \\
a_{0} = P_{A}(0) = \left\lvert 0I - A \right\rvert = \left\lvert -A \right\rvert = (-1)^{n}\left\lvert A \right\rvert \\
}
$$
## Characteristic polynomial of linear operator #definition
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
\text{Let } B \text{ be a basis of } V \\
\text{Let } T: V \to V \text{ be a linear operator} \\
P_{T}(\lambda) \text{ is called a characteristic polynomial of } T \\
\text{And is equal to } P_{T}(\lambda) = P_{[T]^{B}_{B}}(\lambda) \\
\\
\text{Note:} \\
\text{Choice of basis does not mattter} \\
\forall B, C: [T]^{B}_{B} \sim [T]^{C}_{C} \implies P_{[T]^{B}_{B}}(\lambda) = P_{[T]^{C}_{C}}(\lambda) \\
}
$$
## Algebraic multiplicity #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \lambda_{i} \text{ be an eigenvalue of } A \\
\text{Maximal degree } k \text{ such that } (\lambda-\lambda_{i})^{k} \mid P_{A}(\lambda) \text{ is then called} \\
\text{an algebraic multiplicity of } \lambda_{i} \text{ and denoted } g_{A} = \mu_{A}(\lambda_{i}) = k \\
}
$$
## Geometric multiplicity #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \lambda_{i} \text{ be an eigenvalue of } A \\
\dim(N(\lambda_{i} I-A)) \text{ is then called a geometric multiplicity of } \lambda_{i} \\
\text{And is denoted } k_{\lambda} = \gamma_{A}(\lambda_{i}) = \dim(N(\lambda_{i}I - A)) \\
}
$$
