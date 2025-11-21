---
{"publish":true,"created":"25/12/24, 12:12","modified":"2025-11-21T21:10:14.300+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# Linear-1 9
## Summary of previous topics
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\exists A^{-1} \\
\iff CF(A) = I \\
\iff rank(A) = n \\
\iff \text{Columns of } A \text{ are a linear independence} \\
\iff \text{Rows of } A \text{ are a linear independence} \\
\iff N(A) = \Set{ 0 } \\
\iff \exists! x: Ax = 0 \\
\iff \exists b: \exists! x: Ax = b \\
\iff \forall b: \exists! x: Ax = b \\
}
$$
---
## Linear transformation (linear map, linear mapping) #definition 
$$
\displaylines{
V, U - \text{ vector spaces over } \mathbb{F} \\
\text{Function } T: V \to U \text{ is called a linear transformation} \\
\text{If } \forall v_{1}, v_{2} \in V, \alpha \in \mathbb{F}: T(v_{1} + \alpha v_{2}) = T(v_{1}) + \alpha T(v_{2}) \\
}
$$
## Example
$$
\displaylines{
T: \mathbb{R} \to \mathbb{R} \\
T(x) = x^{2} \\
T(2 + 2) = T(4) = 16 \\
T(2) + T(2) = 4 + 4 = 8 \\
\implies T \text{ is not a linear transformation} \\
}
$$
---
## Zero of linear transformation #lemma 
$$
\displaylines{
\text{Let } T: V \to U \text{ be a linear transformation} \\
\implies T(0_{V}) = 0_{U} \\
\\
\text{Proof:} \\
T(0_{V}) = T(0_{\mathbb{F}} \cdot 0_{V}) = 0_{\mathbb{F}} \cdot \underbrace{ T(0_{V}) }_{ \in U } = 0_{U} \\
}
$$
---
## Defining theorem for linear transformations #theorem 
$$
\displaylines{
V, U - \text{ vector spaces over } \mathbb{F} \\
B = \Set{ v_{1}, \dots, v_{n} } -  \text{ basis of } V \\
\text{Let } u_{1}, \dots, u_{n} \in U \\
\implies \text{Exists a unique linear transformation } T: V \to U \\
\text{such that: } \forall i \in [1, n]: T(v_{i}) = u_{i} \\
\\
\text{Proof:} \\
B \text{ is a basis of } V \implies \forall v \in V: v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\text{Let } T(v) = \sum_{i=1}^{n} \underbrace{ \alpha_{i} }_{ \text{Coefficients from the linear combination of } v }u_{i} \\
\text{Here should be some long proof that } T \text{ is a linear transformation...} \\
\implies T(\sum_{i=1}^{n} \alpha_{i}v_{i}) = \sum_{i=1}^{n} \alpha_{i}u_{i} \\
\implies T(v_{i}) = T(1v_{i}) = 1u_{i} = u_{i} \\
}
$$
---
## Example
$$
\displaylines{
T: \mathbb{R}^{2} \to \mathbb{R}^{3} \\
v_{1} = \begin{pmatrix}
2 \\
3 \\
\end{pmatrix}, v_{2} = \begin{pmatrix}
1 \\
2 \\
\end{pmatrix} \\
T(v_{1}) = \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, T(v_{2}) = \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} \\
\Set{ v_{1}, v_{2} } \text{ is a basis of } \mathbb{R}^{2} \\
\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \alpha v_{1} + \beta v_{2} \\
\left(\begin{array}{cc|c}
2 & 1 & x \\
3 & 2 & y \\
\end{array}\right) \to \left\{\begin{array}{}
\alpha = 2x - y \\
\beta = 2y - 3x \\
\end{array}\right. \\
T(v) = T\begin{pmatrix}
x \\
y \\
\end{pmatrix} = (2x-y)T(v_{1}) + (2y-3x)T(v_{2}) = \\
= (2x-y)\begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} + (2y-3x)\begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
y - x \\
2y - 3x \\
y - x \\
\end{pmatrix} \\
}
$$
---
$$
\displaylines{
T: V \to U \\
S: U \to W \\
T, S \text{ are linear transformations} \\
\implies (S \circ T): V \to W \text{ is a linear transformation} \\
\\
\text{Proof:} \\
\text{TODO by yourself} \\
}
$$
---
## Identity transformation #definition 
$$
\displaylines{
Id: V \to V \\
\forall v \in V: Id(v) = v \\
}
$$
---
## Inverse transformation #definition 
$$
\displaylines{
T: V \to U \text{ is a linear transformation} \\
T \text{ is called invertible if exists linear transformation } S: U \to V \\
\text{such that } \\
(S \circ T) = Id_{V} \\
(T \circ S) = Id_{U} \\
S \text{ is then called an inverse of } T \\
}
$$
---
## Invertibility of linear transformation #lemma 
$$
\displaylines{
T \text{ is a linear transformation} \\
T \text{ is invertible} \iff T \text{ is bijective} \\
}
$$
---
## Homomorphism #definition 
$$
\displaylines{
\text{Linear transformation is also called homomorphism} \\
}
$$
## Isomorphism #definition 
$$
\displaylines{
\text{Invertible linear transformation} \\
}
$$
### Endomorphism #definition 
$$
\displaylines{
\text{Linear transformation from } V \text{ to } V \\
}
$$
### Automorphism #definition 
$$
\displaylines{
\text{Invertible endomorphism} \\
}
$$
### Monomorphism #definition 
$$
\displaylines{
\text{Injective linear transformation} \\
}
$$
### Epimorphism #definition 
$$
\text{Surjective linear transformation} \\
$$
---
