---
{"publish":true,"created":"27/11/24, 12:11","modified":"2025-11-21T21:10:02.062+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Given: } a_{1} \in \mathbb{R}, d \in \mathbb{N}, \forall n \geq 2: a_{n} = a_{n-1} + d \\
\text{Prove: } \sum_{k=1}^{n} a_{k} = \frac{n(a_{1}+a_{n})}{2} \\
\\
\text{Proof:} \\
\text{Base case. Let } n = 1 \\
\sum_{k=1}^{n} a_{k} = a_{1} = \frac{1(a_{1}+a_{n})}{2} \\
\text{Induction step. Let } \sum_{k=1}^{n} a_{k} = \frac{n(a_{1}+a_{n})}{2} \\
a_{n} = a_{1}+(n-1) \cdot d \\
a_{n+1} = a_{1} + n \cdot d \\
\sum_{k=1}^{n+1} a_{k} = \sum_{k=1}^{n} a_{k} + a_{n+1} = \frac{n(a_{1}+a_{n})}{2} + a_{n+1} = \\
= \frac{n(a_{1}+a_{n}) + 2a_{n+1}}{2} = \frac{na_{1} + na_{n+1} - n \cdot d + a_{n+1} + a_{1} + n \cdot d}{2} = \frac{(n+1)(a_{1} + a_{n+1})}{2} \\
\implies \boxed{\forall n \in \mathbb{N}: \sum_{k=1}^{n} a_{k} = \frac{n(a_{1}+a_{n})}{2} \implies \sum_{k=1}^{n+1} a_{k} = \frac{(n+1)(a_{}+a_{n+1})}{2}} \\
\text{Base case + induction step} \implies \text{Proved by induction} \\
}
$$
---
$$
\displaylines{
\text{Given: } P_{0} = A \\
\forall n \in \mathbb{N}: P_{n} = \lnot P_{n-1} \lor A \\
}
$$
# 2a
$$
\displaylines{
\text{Prove: } \text{For all odd } n, P_{n} \text{ is a tautology} \\
\\
\text{Proof:} \\
\text{Base case. Let } n = 1 \\
P_{1} = \lnot P_{0} \lor A = \lnot A \lor A \equiv T \\
\text{Induction step. Let } P_{n} \text{ be a tautology} \\
P_{n+2} = \lnot P_{n+1} \lor A = \lnot(\lnot P_{n} \lor A) \lor A = (\underbrace{ P_{n} }_{ \equiv T } \land \lnot A) \lor A = \lnot A \lor A \equiv T \\
\implies \boxed{P_{n} \text{ is a tautology} \implies P_{n+2} \text{ is a tautology}} \\
\underset{ \text{By Induction} }{ \implies } \forall \text{ odd } n: P_{n} \equiv T \\
}
$$
# 2b
$$
\displaylines{
\text{Prove: } \text{For all even } n, P_{n} = A \\
\\
\text{Proof:} \\
\text{Base case. Let } n = 0 \\
P_{0} = A \\
\text{Induction step. Let } P_{n} = A \\
P_{n+2} = \lnot P_{n+1} \lor A = \lnot(\lnot P_{n} \lor A) \lor A = (P_{n} \land \lnot A) \lor A = (A \land \lnot A) \lor A \equiv A \\
\implies \boxed{P_{n} = A \implies P_{n+2} = A} \\
\underset{ \text{By Induction} }{ \implies } \forall \text{ even } n: P_{n} = A \\
}
$$
---

# 3
$$
\displaylines{
\text{Prove: It is possible to cover a } 2^{n} \times 2^{n} \text{ grid with one cell missing,} \\
\text{with L-shaped tiles consisting of three connected cells for all natural } n \\
\\
\text{Proof:} \\
\text{Base case. Let } n = 1 \\
2 \times 2 \text{ grid can be filled like this:} \begin{pmatrix}
1 & 0 \\
1 & 1 \\
\end{pmatrix} \\
0 \text{ represents the missing cell, other numbers represent the index of a tile used} \\
\text{Let us define four ways to fill this grid:} \\
A^{RU}_{1} = \begin{pmatrix}
1 & 0 \\
1 & 1 \\
\end{pmatrix}, A^{LU}_{1} = \begin{pmatrix}
0 & 1 \\
1 & 1 \\
\end{pmatrix}, A^{LL}_{1} = \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix}, A^{RL}_{1} = \begin{pmatrix}
1 & 1 \\
1 & 0 \\
\end{pmatrix} \\
\text{Where first R/L is right or left, second U/L is upper or lower and index is the value of } n \\
\\
\text{Induction step.} \\
\text{Now let us see if we can fill the grid for } n + 1 \text{, given that we can do it for } n \\
A_{n+1} = 2^{n+1} \times 2^{n+1} \text{ can be represented as } 2 \cdot 2^{n} \times 2^{n} \cdot 2 = 4 \cdot 2^{n} \times 2^{n} - \text{ four $A_{n}$ grids} \\
\text{Let us compose } A_{n+1} \text{ the following way}: \\
A_{n+1} = \begin{pmatrix}
A^{RL}_{n} & A^{LL}_{n} \\
A^{RU}_{n} & A^{LU}_{n} \\
\end{pmatrix} = \begin{pmatrix}
\cdots & \cdots & \cdots & \cdots \\
\cdots & 0 & 0 & \cdots \\
\cdots & 0 & 0 & \cdots \\
\cdots & \cdots & \cdots & \cdots \\
\end{pmatrix} \\
\text{We can see that the center has four empty cells,} \\
\text{which is logical as each } A_{n} \text{ grid has one empty cell and there are four such grids} \\
\text{This empty center can be filled with one L-shaped tile:} \\
\begin{pmatrix}
\cdots & \cdots & \cdots & \cdots \\
\cdots & x & x & \cdots \\
\cdots & x & 0 & \cdots \\
\cdots & \cdots & \cdots & \cdots \\
\end{pmatrix} \\
}
$$
$$
\displaylines{
\text{Now let us prove that for any } n \text{ it is possible to fill the grid as } A_{n}^{LU}, A_{n}^{LL}, A_{n}^{RU}, A_{n}^{RL} \\
A_{n} = \begin{pmatrix}
\cdots & \cdots & \cdots & \cdots \\
\cdots & 0 & x & \cdots \\
\cdots & x & x & \cdots \\
\cdots & \cdots & \cdots & \cdots \\
\end{pmatrix} = \begin{pmatrix}
A_{n-1}^{RL} & \cdots \\
\cdots & \cdots \\
\end{pmatrix} \underset{ \text{Turn } A_{n-1}^{RL} \text{ by 180 degress} }{ \to } \begin{pmatrix}
A_{n-1}^{LU} & \cdots \\
\cdots & \cdots \\
\end{pmatrix} = A_{n}^{LU} \\
A_{n} = \begin{pmatrix}
\cdots & \cdots & \cdots & \cdots \\
\cdots & x & x & \cdots \\
\cdots & x & 0 & \cdots \\
\cdots & \cdots & \cdots & \cdots \\
\end{pmatrix} = \begin{pmatrix}
\cdots & \cdots \\
\cdots & A_{n-1}^{LU} \\
\end{pmatrix} \underset{ \text{Turn } A_{n-1}^{LU} \text{ by 180 degrees} }{ \to } \begin{pmatrix}
\cdots & \cdots \\
\cdots & A_{n-1}^{RL} \\
\end{pmatrix} = A_{n}^{RL} \\
A_{n} = \begin{pmatrix}
\cdots & \cdots & \cdots & \cdots \\
\cdots & x & x & \cdots \\
\cdots & 0 & x & \cdots \\
\cdots & \cdots & \cdots & \cdots \\
\end{pmatrix} = \begin{pmatrix}
\cdots & \cdots \\
A_{n-1}^{RU} & \cdots \\
\end{pmatrix} \underset{ \text{Transpose } A_{n-1}^{RU} }{ \to } \begin{pmatrix}
\cdots & \cdots \\
A_{n-1}^{LL} & \cdots \\
\end{pmatrix} = A_{n}^{LL} \\
A_{n} = \begin{pmatrix}
\cdots & \cdots & \cdots & \cdots \\
\cdots & x & 0 & \cdots \\
\cdots & x & x & \cdots \\
\cdots & \cdots & \cdots & \cdots \\
\end{pmatrix} = \begin{pmatrix}
\cdots & A_{n-1}^{LL} \\
\cdots & \cdots \\
\end{pmatrix} \underset{ \text{Transpose } A_{n-1}^{LL} }{ \to } \begin{pmatrix}
\cdots & A_{n-1}^{RU} \\
\cdots & \cdots \\
\end{pmatrix} = A_{n}^{RU} \\
\text{Base case + Induction step} \implies \text{Proved for all } n \text{ by induction} \\
}
$$
---

# 4
$$
\displaylines{
\text{Let } a \neq 0 \in \mathbb{R} : a + \frac{1}{a} \in \mathbb{Z} \\
\text{Prove: } \forall n \in \mathbb{N}: a^{n} + \frac{1}{a^{n}} \in \mathbb{Z} \\
\\
\text{Proof:} \\
b_{1} = a + \frac{1}{a} = \frac{a^{2}+1}{a} \in \mathbb{Z} \\
\text{Let } b_{n} = a^{n} + \frac{1}{a^{n}} = \frac{a^{2n} + 1}{a^{n}} \\
\implies b_{n+1} = \frac{a^{2n+2} + 1}{a^{n+1}} \\
\\
\text{Base case. Let } n = 1 \\
b_{1} = a + \frac{1}{a} \implies b_{1} \in \mathbb{Z} \\
\text{Let } n = 2 \\
b_{2} = a^{2} + \frac{1}{a^{2}} = \frac{a^{4} + 1}{a^{2}} = \frac{(a^{2}+1)^{2} - 2a^{2}}{a^{2}} = \left( \frac{a^{2}+1}{a} \right)^{2} - 2 \\
\frac{a^{2}+1}{a} \in \mathbb{Z} \implies \left( \frac{a^{2}+1}{a} \right)^{2} \in \mathbb{Z} \implies \left( \frac{a^{2}+1}{a} \right)^{2} - 2 = b_{2} \in \mathbb{Z} \\
\\
\text{Strong induction step. Let } \forall k \in [1, n] : b_{k} \in \mathbb{Z} \\
b_{1} \cdot b_{n} = \frac{(a^{2}+1)(a^{2n}+1)}{a \cdot a^{n}} = \frac{a^{2(n+1)} + 1 + a^{2n} + a^{2}}{a^{n+1}} = \\
= \underbrace{ \frac{a^{2(n+1)} + 1}{a^{n+1}} }_{ b_{n+1} } + \underbrace{ \frac{a^{2(n-1)} + 1}{a^{n-1}} }_{ b_{n-1} } = b_{n+1} + b_{n-1} \implies b_{n+1} = b_{1}\cdot b_{n} - b_{n-1} \\
b_{1}, b_{n-1}, b_{n} \in \mathbb{Z} \implies b_{1} \cdot b_{n} \in \mathbb{Z} \implies b_{1}\cdot b_{n} - b_{n-1} = b_{n+1} \in \mathbb{Z} \\
\text{Base step + Strong induction step} \implies \text{Proved by strong induction for all } n \in \mathbb{N} \\ 
}
$$
---

# 5
$$
\displaylines{
R = \Set{ (1,1),(1,2),(1,3),(2,1),(3,1),(2,2) } \\
A = \Set{ 1, 2 }, B = \Set{ 1, 2, 3 } \\
\text{Show: } R = A \times B \text{ or } R \neq A \times B \\
\\
\text{Solution:} \\
(2, 3) \in A \times B, \quad (2, 3) \not\in R \\
\implies \boxed{R \neq A \times B} \\
\text{Another reason being:} \\
(3, 1) \not\in A \times B, \quad (3, 1) \in R \\
}
$$
---
$$
\displaylines{
A \text{ is a set} \\
A_{1}, A_{2}, \dots, A_{n} : \forall i \in [1, n]: A_{i} \subseteq A \\
R \subseteq A \times A, R = \Set{ (x, y) \in A \times A | \exists i: x \in A_{i} \land y \in A_{i} } \\
}
$$
# 6a
$$
\displaylines{
\text{Prove or disprove: } \bigcup_{i \in [1, n]} A_{i} = A \implies R \text{ is reflexive} \\
\\
\text{Proof:} \\
\text{Let } x \in A \\
x \in A \implies x \in \bigcup_{i \in [1, n]} A_{i} \implies \exists i \in [1, n]: x \in A_{i} \\
\implies \exists i \in [1, n]: x \in A_{i} \land x \in A_{i} \iff (x, x) \in R \iff \boxed{R \text{ is reflexive}} \\
}
$$
# 6b
$$
\displaylines{
\text{Prove or disprove: } R \text{ is reflexive} \implies \bigcup_{i \in [1, n]} A_{i} = A \\
\\
\text{Proof:} \\
R \text{ is reflexive} \iff \forall x \in A: (x, x) \in R \iff \forall x \in A: \exists i \in [1, n]: x \in A_{i} \\
\text{Let } x \in A \\
x \in A \underset{ R \text{ is reflexive} }{ \implies } \exists i \in [1, n]: x \in A_{i} \implies x \in \bigcup_{i \in [1, n]} A_{i} \implies 1. \quad \boxed{A \subseteq \bigcup_{i \in [1, n]} A_{i}} \\
\text{Let } x \in \bigcup_{i \in [1, n]} A_{i} \\
x \in \bigcup_{i \in [1, n]} A_{i} \implies \exists i \in [1, n]: x \in A_{i} \\
A_{i} \subseteq A \implies \exists i \in [1, n]: x \in A \implies 2. \quad \boxed{\bigcup_{i \in [1, n]} A_{i} \subseteq A} \\
1. \text{ and } 2. \implies \boxed{A = \bigcup_{i \in [1, n]} A_{i}} \\
}
$$
# 6c
$$
\displaylines{
\text{Prove or disprove: } (\forall i \neq j: A_{i} \cap A_{j} = \emptyset) \implies R \text{ is transitive} \\
\\
\text{Proof:} \\
\text{Let } a,b,c \in A, (a,b) \in R, (b,c) \in R \\
(a, b) \in R \iff \exists i \in [1,n]: a \in A_{i} \land b \in A_{i} \\
(b, c) \in R \iff \exists j \in [1,n]: b \in A_{j} \land c \in A_{j} \\
\text{Let } i \neq j \\
\text{Then } b \in A_{i} \land b \in A_{j} \implies A_{i} \cap A_{j} \neq \emptyset - \text{Contradiction!} \\
\implies i = j \\
\implies \exists i \in [1, n]: a \in A_{i} \land b \in A_{i} \land c \in A_{i} \\
\iff (a, c) \in R \implies \boxed{R \text{ is transitive}} \\
}
$$
# 6d
$$
\displaylines{
\text{Prove or disprove: } R \text{ is transitive} \implies \forall i \neq j: A_{i} \cap A_{j} = \emptyset \\
\\
\text{Disproof:} \\
\text{Counter-example:} \\
A = \Set{ 1, 2, 3, 4 } \\
A_{1} = A, A_{2} = A \\
R \text{ is transitive on } A \\
\text{But } A_{1} \cap A_{2} \neq \emptyset \\
\boxed{\text{Disproved}} \\
}
$$
---

# 7a
$$
\displaylines{
\text{Given: } R, S - \text{ equivalence relations on } A \\
\text{Prove or disprove: } R \cap S \text{ is an equivalence relation on } A \\
\\
\text{Proof:} \\
R \text{ is an equivalence relation on } A \iff R \text{ is reflexive, symmetric and transitive} \\
S \text{ is an equivalence relation on } A \iff S \text{ is reflexive, symmetric and transitive} \\
\forall a \in A: (a, a) \in R \land (a, a) \in S \iff \forall a \in A: \boxed{(a, a) \in (R \cap S)} \\
\forall a, b \in A: ((a, b) \in R \to (b, a) \in R) \land ((a, b) \in S \to (b, a) \in S) \quad (1) \\
(a, b) \in (R \cap S) \equiv (a, b) \in R \land (a, b) \in S \\
\underset{ (1) }{ \implies } (b, a) \in R \land (b, a) \in S \iff \boxed{(b, a) \in (R \cap S)} \\
\forall a, b, c \in A: ((a, b) \in R \land (b, c) \in R) \to (a, c) \in R \quad (2) \\
\forall a, b, c \in A: ((a, b) \in S \land (b, c) \in S) \to (a, c) \in S \quad (3) \\
(a, b), (b, c) \in (R \cap S) \iff (a, b), (b, c) \in R \land (a, b), (b, c) \in S \\
\underset{ (2), (3) }{ \implies } (a, c) \in R \land (a, c) \in S \iff \boxed{(a, c) \in (R \cap S)} \\
\implies (R \cap S) \text{ is reflexive, symmetric and transitive} \\
\iff \boxed{(R \cap S) \text{ is an equivalence relation}} \\
}
$$
# 7b
$$
\displaylines{
\text{Given: } R, S - \text{ equivalence relations on } A \\
\text{Prove or disprove:} R \cup S \text{ is an equivalence relation on } A \\
\\
\text{Disproof:} \\
\text{Let } (a, b) \in (R \cup S), (b, c) \in (R \cup S) \\
\text{Then this is possible: } (a, b) \in R, (b, c) \not\in R, (b, c) \in S \\
\text{For example:} \\
A = \Set{ 1, 2, 3, 4 } \\
R = \Set{ (1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 1) } \\
S = \Set{ (1, 1), (2, 2), (3, 3), (4, 4), (2, 3), (3, 2) } \\
R \cup S = \Set{ (1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 1), (2, 3), (3, 2) } \\
(1, 2) \in R \cup S, (2, 3) \in R \cup S \\
\text{But } (1, 3) \not\in R \cup S \implies \boxed{(R \cup S) \text{ is not transitive}} \\
\iff (R \cup S) \text{ is not an equivalence relation} \\
}
$$
---

# 8
$$
\displaylines{
S \text{ is a relation on } (\mathbb{R} \setminus \Set{ 0 }) \times (\mathbb{R} \setminus \Set{ 0 }) \\
S = \Set{ ((x_{1}, y_{1}), (x_{2}, y_{2})) | x_{1} \cdot x_{2} > 0 \land y_{1} \cdot y_{2} > 0 } \\
\text{Prove that } S \text{ is an equivalence relation on } (\mathbb{R} \setminus \Set{ 0 }) \times (\mathbb{R} \setminus \Set{ 0 }) \\
\\
\text{Proof:} \\
\text{Let } (a, b) \in (\mathbb{R} \setminus \Set{ 0 }) \\
a \cdot a > 0 \land b \cdot b > 0 \implies ((a, b), (a, b)) \in S \implies \boxed{S \text{ is reflexive}} \\
\text{Let } ((a, b), (c, d)) \in S \\
\text{Then } a \cdot c > 0 \land b \cdot d > 0 \\
((c, d), (a, b)) \in S \iff \underbrace{ c \cdot a > 0 }_{ \equiv a \cdot c > 0 } \land \underbrace{ d \cdot b > 0 }_{ \equiv b \cdot d > 0 } \\
\implies \boxed{S \text{ is symmetric}} \\
\text{Let } ((a, b), (c, d)), ((c, d), (e, f)) \in S \\
\text{Then } a \cdot c > 0, b \cdot d > 0, c \cdot e > 0, d \cdot f > 0 \\
a \cdot c \cdot c \cdot e > 0 \implies a \cdot e \cdot c^{2} > 0 \implies a \cdot e > 0 \\
b \cdot d \cdot d \cdot f > 0 \implies b \cdot f \cdot d^{2} > 0 \implies b \cdot f > 0 \\
a \cdot e > 0 \land b \cdot f > 0 \iff ((a, b), (e, f)) \in S \implies \boxed{S \text{ is transitive}} \\
S \text{ is reflexive, symmetric and transitive} \iff \boxed{S \text{ is an equivalence relation}} \\
}
$$
---
