---
{"publish":true,"created":"18/12/24, 12:12","modified":"2025-11-21T21:10:14.298+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# Linear-1 8
## Dimension theorem #theorem
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space} \\
U, W \subseteq V \text{ - vector subspaces of } V \\
\text{Then } dim(U + W) = dim(U) + dim(W) - dim(U \cap W) \\
\\
\text{Proof:} \\
\text{Let } B \text{ be a basis of } U \cap W, B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \\
U \cap W \subseteq U, W \\
\implies \text{It is possible to increase } B \text{ to the basis of } U \text{ and } W \\
\text{Basis of } U: B_{U} = \Set{ v_{1}, v_{2}, \dots, v_{n}, u_{n+1}, \dots, u_{n+k} } \\
\text{Basis of } W: B_{W} = \Set{ v_{1}, v_{2}, \dots, v_{n}, w_{n+1}, \dots, w_{n+t} } \\
dim(U \cap W) = n \\
dim(U) = n + k \\
dim(W) = n + t \\
\tilde{B} = \Set{ v_{1}, \dots, v_{n}, u_{n+1}, \dots, u_{n+k}, w_{n+1}, \dots, w_{n+t} } \\
U + W = sp(B_{U}) + sp(B_{W}) = sp(B_{U} \cup B_{W}) = sp(\tilde{B}) \\
\implies \boxed{sp(\tilde{B}) = U + W} \\
(\alpha_{1}, \dots, \alpha_{n}, \beta_{1}, \dots, \beta_{k}, \gamma_{1}, \dots, \gamma_{t}) \cdot (v_{1}, \dots, v_{n}, u_{n+1}, \dots , u_{n+k}, w_{n+1}, \dots, w_{n+t})^{T} = 0 \\
\underbrace{ (\alpha_{1}, \dots, \alpha_{n}, \beta_{1}, \dots, \beta_{k}) \cdot (v_{1}, \dots, v_{n}, u_{n+1}, \dots , u_{n+k})^{T} }_{ \text{Linear combination of } B_{U} } = -(\gamma_{1}, \dots, \gamma_{t}) \cdot (w_{n+1}, \dots, w_{n+t})^{T} \\
-(\gamma_{1}, \dots, \gamma_{t}) \cdot (w_{n+1}, \dots, w_{n+t})^{T} \in sp(B_{U}) = U \\
\implies -(\gamma_{1}, \dots, \gamma_{t}) \cdot (w_{n+1}, \dots, w_{n+t})^{T} \in U \cap W \\
\implies -(\gamma_{1}, \dots, \gamma_{t}) \cdot (w_{n+1}, \dots, w_{n+t})^{T} = (\delta_{1}, \dots, \delta_{n}) \cdot (v_{1}, \dots, v_{n})^{T} \\
\implies (\alpha_{1}, \dots, \alpha_{n}, \beta_{1}, \dots, \beta_{k}) \cdot (v_{1}, \dots, v_{n}, u_{n+1}, \dots , u_{n+k})^{T} = (\delta_{1}, \dots, \delta_{n}) \cdot (v_{1}, \dots, v_{n})^{T} \\
\implies \underbrace{ (\alpha_{1} - d_{1}, \dots, \alpha_{n}-\delta_{n}, \beta_{1}, \dots, \beta_{k}) \cdot (v_{1}, \dots, v_{n}, u_{n+1}, \dots , u_{n+k})^{T} }_{ \text{Linear combination of } B_{U} } = 0 \\
??? \\
}
$$
---
## Uniqueness of linear combination #lemma
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
B = \Set{ v_{1}, \dots, v_{n} } - \text{ basis of } V \\
\implies \forall v \in V: \exists! (\alpha_{1}, \dots, \alpha_{n}) \in \mathbb{F}, (v_{1}, \dots, v_{n}) \in B: \sum_{i=1}^{n} \alpha_{i}v_{i} = v \\
\\
\text{Proof:} \\
sp(B) = V \\
\text{Let } v \in sp(B) \\
\text{Let } v = \alpha_{1}v_{1} + \dots + \alpha_{n}v_{n} \\
\text{Let } v = \beta_{1}v_{1} + \dots + \beta_{n}v_{n} \\
\sum_{i=1}^{n} \alpha_{i}v_{i} = \sum_{i=1}^{n} \beta_{i}v_{i} \\
\sum_{i=1}^{n} (\alpha_{i}-\beta_{i})v_{i} = 0 \\
B \text{ is a linear independence} \implies \forall i \in [1, n]: \alpha_{i} - \beta_{i} = 0 \implies \alpha_{i} = \beta_{i} \\
\implies \boxed{\exists! (\alpha_{1}, \dots, \alpha_{n}) \in \mathbb{F}, (v_{1}, \dots, v_{n}) \in B: \sum_{i=1}^{n} \alpha_{i}v_{i} = v} \\
}
$$
---
## Matrix spaces #definition
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n} \\
\text{Matrix columns space } C(A) = sp(\Set{ C_{1}(A), \dots, C_{n}(A) }) \\
\text{Matrix rows space } R(A) = sp(\Set{ R_{1}(A), \dots, R_{m}(A) }) \\
\text{Matrix zero space } N(A) = \Set{ v \in \mathbb{F}^{n} | Av = 0 } \\
}
$$
### Example
$$
\displaylines{
A = \begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{pmatrix} \\
C(A) = sp(\Set{ \begin{pmatrix}
1 \\
4 \\
\end{pmatrix}, \begin{pmatrix}
2 \\
5 \\
\end{pmatrix}, \begin{pmatrix}
3 \\
6 \\
\end{pmatrix} }) \\
\left(\begin{array}{ccc|c}
1 & 2 & 3 & 0 \\
4 & 5 & 6 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 2 & 3 & 0 \\
0 & 3 & 6 & 0 \\
\end{array}\right) \implies \Set{ \begin{pmatrix}
1 \\
4 \\
\end{pmatrix}, \begin{pmatrix}
2 \\
5 \\
\end{pmatrix} } \text{ is a basis of } C(A) \\
R(A) = sp(\Set{ \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix}, \begin{pmatrix}
4 \\
5 \\
6 \\
\end{pmatrix} }) \\
\left(\begin{array}{cc|c}
1 & 4 & 0 \\
2 & 5 & 0 \\
3 & 6 & 0 \\
\end{array}\right) \to 
\left(\begin{array}{cc|c}
1 & 4 & 0 \\
0 & 3 & 0 \\
0 & 0 & 0 \\
\end{array}\right) \implies dim(R(A)) = 2 \\
\left(\begin{array}{ccc|c}
1 & 2 & 3 & 0 \\
4 & 5 & 6 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 2 & 3 & 0 \\
0 & 1 & 2 & 0 \\
\end{array}\right) \implies Av = 0 \iff v = \begin{pmatrix}
t \\
-2t \\
t \\
\end{pmatrix} \\
\implies N(A) = \Set{ \begin{pmatrix}
t \\
-2t \\
t \\
\end{pmatrix} | t \in \mathbb{R} } = sp(\Set{ \begin{pmatrix}
1 \\
-2 \\
1 \\
\end{pmatrix} }) \\
}
$$
---
## Matrix multiplication narrows its spaces #lemma
$$
\displaylines{
A \in \mathbb{F}^{m \times n}, B \in \mathbb{F}^{n \times m} \\
C(AB) \subseteq C(A) \\
R(AB) \subseteq R(B) \\
\\
\text{Proof:} \\
C_{i}(AB) = \sum_{i=1}^{k} \alpha_{i}C_{i}(A) \implies C_{i}(AB) \in C(A) \\
\forall i \in [1, n]: C_{i}(AB) \in C(A) \implies C(AB) = sp(\Set{ C_{i}(AB) }) \subseteq C(A) \\
\text{Proof for R(AB) is TODO by yourself} \\
}
$$
---
## Column space and equations system #lemma
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times m}, b \in \mathbb{F}^{n} \\
\text{Then } \exists x \in \mathbb{F}^{m}: Ax = b \iff b \in C(A) \\
\\
\text{Proof:} \\
\exists x \in \mathbb{F}^{m}: Ax = b \iff \exists x \in \mathbb{F}^{m}: \sum_{i=1}^{m} \alpha_{i}C_{i}(A) = b \iff b \in C(A) \\
}
$$
---
## Column space and row space dimensions #lemma
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n} \\
\text{Then } dim(C(A)) = dim(R(A)) \\
\\
\text{Proof:} \\
\dots
}
$$
---
## Matrix rank #definition 
$$
\displaylines{
r(A) = rank(A) = dim(C(A)) = dim(R(A)) \\
}
$$
---
## Matrix multiplication reduces rank #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n}, B \in \mathbb{F}^{n \times k} \\
rank(AB) \leq rank(A), rank(AB) \leq rank(B) \\
\\
\text{Proof:} \\
C(AB) \subseteq C(A) \implies sp(C(AB)) \subseteq sp(C(A)) \implies dim(C(AB)) \leq dim(C(A)) \\
R(AB) \subseteq R(B) \implies sp(R(AB)) \subseteq sp(R(A)) \implies dim(R(AB)) \leq dim(R(A)) \\
}
$$
---
## Invertible matrix multiplication does not reduce rank #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n} \\
B \in \mathbb{F}^{n \times n}, \exists B^{-1} \implies rank(AB) = rank(A) \\
B \in \mathbb{F}^{m \times m}, \exists B^{-1} \implies rank(BA) = rank(B) \\
\\
\text{Proof:} \\
rank(A) = rank(ABB^{-1}) \leq rank(AB) \implies rank(AB) = rank(A) \\
rank(B) = rank(B^{-1}BA) \leq rank(BA) \implies rank(BA) = rank(B) \\
}
$$
---
## Row-equality is equivalent to rank equality #lemma
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n} \\
\text{Let } B \text{ row-equal to } A \\
\text{Then } rank(A) = rank(B) \\
\\
\text{Proof:} \\
B = \prod_{i=1}^{k} E_{i} A \\
\forall i \in [1, k]: \exists E_{i}^{-1} \implies rank(A) = rank(\prod_{i=1}^{k} E_{i} A) = rank(B) \\
\implies rank(A) = rank(CF(A)) \\
}
$$
---
## Invertible matrix is full-ranked #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\exists A^{-1} \iff rank(A) = n \\
\\
\text{Proof:} \\
\exists A^{-1} \implies CF(A) = I \\
rank(A) = rank(CF(A)) \implies rank(A) = rank(CF(A)) = rank(I) = n \\
\implies rank(A) = n \\
rank(A) = n \implies rank(CF(A)) = n \implies CF(A) = I \\
\implies \exists A^{-1} \\
}
$$
---
## Dimension theorem for matrices #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n} \\
rank(A) + dim(N(A)) = n \\
}
$$
---
