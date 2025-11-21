---
{"publish":true,"created":"27/11/24, 15:11","modified":"2025-11-21T21:10:25.093+02:00","tags":["Academia","Practice","Linear-1"],"cssclasses":""}
---

# Linear-1 5
$$
\displaylines{
A, B \in \mathbb{R}^{n\times n} \\
A - A^{2}B - 2I = 0 \\
3BA^{2}+A^{2}-3A = 0 \\
\text{Prove: } \exists A^{-1}, B^{-1} \\
\\
\text{Proof:} \\
A - A^{2}B = 2I \\
A(I - AB) = 2I \mid : 2 \\
A\underbrace{ \left( \frac{1}{2}I - \frac{1}{2}AB \right) }_{ A^{-1} } = I \\
\\
3BA^{2}+A^{2}-3A=0 \mid \cdot [\dots]A^{-1} \\
3BA+A-3I=0 \\
(3B+I)A = 3I \mid : 3 \\
\underbrace{ \left( B + \frac{1}{3}I \right) }_{ A^{-1} }A = I \\
B + \frac{1}{3}I = \frac{1}{2}I - \frac{1}{2}AB \\
B + \frac{1}{2}AB = \frac{1}{6}I \\
\left( I + \frac{1}{2}A \right)B = \frac{1}{6}I \mid \cdot 6 \\
\underbrace{ (6I + 3A) }_{ B^{-1} }B = I \\
}
$$
---
## PLU decomposition
$$
\displaylines{
A \in \mathbb{R}^{n\times n} \\
\exists P - \text{ permutation matrix (row-switching)} \\
\exists L - \text{ lower-triangle matrix} \\
\exists U - \text{upper-triangle matrix} \\
\text{Such that } PA = LU \\
}
$$
---
$$
\left(\begin{array}{c|c|c}
A & I & I
\end{array}\right) \to \left(\begin{array}{c|c|c}
U & L & P
\end{array}\right) \\
$$
$$
\displaylines{
1. \quad \text{Biggest element in the column must be on the main diagonal} \\
2. \quad \text{Elementary transformations} \\
2.1 \quad \alpha R_{i} - \text{forbidden} \\
2.2 \quad R_{i} \leftrightarrow R_{j}, U \text{ and } P \text{ are affected as usual}, L \text{ is only affected at the main diagonal} \\
2.3 \quad \alpha R_{i} = R_{i} + \alpha R_{j} - U \text{ is affected as usual}, P \text{ is not affected}, L_{ij} = -\alpha \\
}
$$
---
## Example
$$
\displaylines{
\left(\begin{array}{ccc|ccc|ccc}
6 & -2 & 0  & 1 & 0 & 0 & 1 & 0 & 0 \\
9 & -1 & 1 & 0 & 1 & 0 & 0 & 1 & 0 \\
3 & 7 & 5 & 0 & 0 & 1 & 0 & 0 & 1 \\
\end{array}\right) \overset{ R_{1} \leftrightarrow R_{2} }{ \to } \left(\begin{array}{ccc|ccc|ccc}
9 & -1 & 1  & 1 & 0 & 0 & 0 & 1 & 0 \\
6 & -2 & 0 & 0 & 1 & 0 & 1 & 0 & 0 \\
3 & 7 & 5 & 0 & 0 & 1 & 0 & 0 & 1 \\
\end{array}\right) \\
\overset{ R_{2} - \frac{2}{3}R_{1} }{ \underset{ R_{3} - \frac{1}{3}R_{1} }{ \to } } \left(\begin{array}{ccc|ccc|ccc}
9 & -1 & 1  & 1 & 0 & 0 & 0 & 1 & 0 \\
0 & -\frac{4}{3} & -\frac{2}{3} & \frac{2}{3} & 1 & 0 & 1 & 0 & 0 \\
0 & \frac{22}{3} & \frac{14}{3} & \frac{1}{3} & 0 & 1 & 0 & 0 & 1 \\
\end{array}\right) \\
\overset{ R_{2} \leftrightarrow R_{3} }{ \to }
\left(\begin{array}{ccc|ccc|ccc}
9 & -1 & 1  & 1 & 0 & 0 & 0 & 1 & 0 \\
0 & \frac{22}{3} & \frac{14}{3} & \frac{1}{3} & 1 & 0 & 0 & 0 & 1 \\
0 & -\frac{4}{3} & -\frac{2}{3} & \frac{2}{3} & 0 & 1 & 1 & 0 & 0 \\
\end{array}\right) \\
\overset{ R_{3} + \frac{2}{11}R_{2} }{ \to }
\left(\begin{array}{ccc|ccc|ccc}
9 & -1 & 1  & 1 & 0 & 0 & 0 & 1 & 0 \\
0 & \frac{22}{3} & \frac{14}{3} & \frac{1}{3} & 1 & 0 & 0 & 0 & 1 \\
0 & 0 & \frac{2}{11} & \frac{2}{3} & -\frac{2}{11} & 1 & 1 & 0 & 0 \\
\end{array}\right) \\
}
$$
---
## Exercise
$$
\displaylines{
P = \begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 0 & 0 \\
\end{pmatrix}, L = \begin{pmatrix}
1 & 0 & 0 \\
2 & 1 & 0 \\
-1 & 3 & 1 \\
\end{pmatrix}, U = \begin{pmatrix}
3 & 1 & -1 \\
0 & 2 & \frac{1}{2} \\
0 & 0 & 1 \\
\end{pmatrix} \\
\text{Find solution(s) to the system: } Ax = \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} \\
Ax = \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} \\
PAx = P\cdot \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} = \begin{pmatrix}
2 \\
3 \\
1 \\
\end{pmatrix} \\
LUx = \begin{pmatrix}
2 \\
3 \\
1 \\
\end{pmatrix} \quad Ux = U \cdot \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} = \begin{pmatrix}
\hat{x} \\
\hat{y} \\
\hat{z} \\
\end{pmatrix} \\
L \cdot \begin{pmatrix}
\hat{x} \\
\hat{y} \\
\hat{z} \\
\end{pmatrix} = \begin{pmatrix}
2 \\
3 \\
1 \\
\end{pmatrix} \\
\hat{x} = 2, \hat{y} = -1, \hat{z} = 6 \\
U \cdot \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} = \begin{pmatrix}
2 \\
-1 \\
6 \\
\end{pmatrix} \\
\boxed{z = 6, y = -2, x = \frac{10}{3}} \\
}
$$
---
$$
\displaylines{
A \in \mathbb{R}^{n\times n} \\
\text{Calculate } PLU \text{ decomposition of } A \\
\text{If } P = I, \text{ then } A = LU \\
}
$$
---
## Vector spaces
$$
\displaylines{
V \text{ is called vector space over field } \mathbb{F} \text{ if ...(was in lecture)} \\
}
$$
---
## Examples
$$
\displaylines{
1. \quad V = \mathbb{F}^{n} = \Set{ \begin{pmatrix}
a_{1} & a_{2} & \dots & a_{n} \\
\end{pmatrix}^{T} | \forall i \in [1, n]: a_{i} \in \mathbb{F} } \\
\\
2. \quad V = \mathbb{F}^{m\times n} = \Set{ A | \forall i \in [1, m], j \in [1, n]: A_{ij} \in \mathbb{F} } \\
3. \quad V = \mathbb{F}_{n}[x] = \Set{ \sum_{i=0}^{n} a_{i}\cdot x^{i} | \forall i \in [0, n]: a_{i} \in \mathbb{F}} \\
4. \quad V = \mathbb{F}[x] = \Set{ \sum_{i=0}^{\infty} a_{i}\cdot x^{i} | \forall i \in \Set{ 0 } \cup \mathbb{N}: a_{i} \in \mathbb{F} } \\
5. \quad V = \Set{ f | f - \text{function} } \\
\dots
}
$$
---
## Vector subspaces
$$
\displaylines{
\text{Given: } V - \text{ vector space over } \mathbb{F} \\
W \text{ is called vector subspace of $V$ if } W \text{ is a vector space and } W \subseteq V \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{R}^{2} \\
W = \Set{ \begin{pmatrix}
x \\
y \\
\end{pmatrix} | x \geq 0} \\
\text{Not a subspace of } V \\
\dots \text{I'm lazy bro} \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{F}^{n\times n} \\
W_{1} = \Set{ A | A = A^{T} } - \text{subspace of } V \\
W_{2} = \Set{ A | A = -A^{T} } - \text{subspace of } V \\
W_{3} = \Set{ A | A = \pm A^{T} } - \text{not a subspace of } V \\
\dots \text{I'm lazy bro} \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{R}_{3}[x] \\
W = \Set{ P(x) | P(1) = 0 \land P(2) = P(0) } - \text{subspace of } V \\
\dots \text{I'm lazy bro} \\
}
$$
---
