---
{"publish":true,"created":"09/12/24, 15:12","modified":"2025-11-21T21:10:02.073+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } A \text{ be a set. } B \subseteq A \\
R \subseteq P(A) \times P(A) \\
(C, D) \in R \iff C \cap B = D \cap B \\
}
$$
## 1a
$$
\displaylines{
\text{Prove: } R \text{ is an equivalence relation} \\
\\
\text{Proof:} \\
\forall C \in P(A): C \cap B = C \cap B \implies (C, C) \in R \implies \boxed{R \text{ is reflexive}} \\
\text{Let } (C, D) \in R \implies C \cap B = D \cap B \implies D \cap B = C \cap B \\
\implies (D, C) \in R \implies \boxed{R \text{ is symmetric}} \\
\text{Let } (C, D) \in R, (D, E) \in R \\
\implies C \cap B = D \cap B \land D \cap B = E \cap B \implies C \cap B = E \cap B \\
\implies (C, E) \in R \implies \boxed{R \text{ is transitive}} \\
R \text{ is reflexive, symmetric and transitive} \implies \boxed{R \text{ is an equivalence relation}} \\
}
$$
## 1b
$$
\displaylines{
\text{Prove: } \forall C, D \subseteq B: C \neq D \implies [C]_{R} \neq [D]_{R} \\
\\
\text{Proof:} \\
C \subseteq B \implies C \cap B = C \\
D \subseteq B \implies D \cap B = D \\
C \neq D \implies C \cap B \neq D \cap B \implies (C, D) \not\in R \\
\implies D \in [D]_{R} \land D \not\in [C]_{R} \implies \boxed{[D]_{R} \neq [C]_{R}} \\
}
$$
## 1c
$$
\displaylines{
\text{Prove: } \forall C \subseteq A : \exists D \subseteq B: [C]_{R} = [D]_{R} \\
\\
\text{Proof:} \\
[C]_{R} = \Set{ X | X \cap B = C \cap B } \\
[D]_{R} = \Set{ X | X \cap B = D \cap B = D } \\
\implies [C]_{R} = [D]_{R} \iff C \cap B = D \\
\text{By properties of inclusion: } C \cap B \subseteq B \\
\implies \boxed{\forall C \subseteq A: \exists D \subseteq B: D = C \cap B \iff [C]_{R} = [D]_{R}} \\
}
$$
## 1d
$$
\displaylines{
A = \Set{ 1, 2, 3, 4 }, B = \Set{ 1, 4 } \\
[\emptyset]_{R} = \Set{ X \in P(A) | X \cap B = \emptyset \cap B = \emptyset } \\
X \cap B = \emptyset \iff 1 \not\in X \land 4 \not\in X \\
\implies [\emptyset]_{R} = \boxed{\Set{ \emptyset, \Set{ 2 }, \Set{ 3 }, \Set{ 2, 3 } }} \\
\\
[X]_{R} = \Set{ Y \in P(A) | X \cap B = Y \cap B } \\
\text{What equivalence classes are there? } \\
\text{Let us take all possible values of } X \cap B, \text{ they are all possible subsets of } B: \\
\emptyset \subseteq \Set{ 1, 4 } \\
\Set{ 1 } \subseteq \Set{ 1, 4 } \\
\Set{ 4 } \subseteq \Set{ 1, 4 } \\
\Set{ 1, 4 } \subseteq \Set{ 1, 4 } \\
\implies {^{\displaystyle P(A)}}\Big/{_{\displaystyle R}} = \Set{ [X]_{R} | X \in P(A) } = \boxed{\Set{ [\emptyset]_{R}, [\Set{ 1 }]_{R}, [\Set{ 4 }]_{R}, [\Set{ 1, 4 }]_{R}}} \\
}
$$
---

# 2
$$
\displaylines{
A = \Set{ 1, 2, 3, 4 } \\
R_{1} = I_{A} \implies \boxed{{^{\displaystyle A}}\Big/{_{\displaystyle R_{1}}} = \Set{ \Set{ 1 }, \Set{ 2 }, \Set{ 3 }, \Set{ 4 } }} \\
R_{2} = I_{A} \cup \Set{ (1, 2), (2, 1) } \implies \boxed{{^{\displaystyle A}}\Big/{_{\displaystyle R_{2}}} = \Set{ \Set{ 1, 2 }, \Set{ 3 }, \Set{ 4 } }} \\
R_{3} = I_{A} \cup \Set{ (1, 2), (2, 1), (2, 3), (3, 2), (1, 3), (3, 1) } \\
\implies \boxed{{^{\displaystyle A}}\Big/{_{\displaystyle R_{3}}} = \Set{ \Set{ 1, 2, 3 }, \Set{ 4 } }} \\
}
$$
---

# 3a
$$
\displaylines{
R \text{ on } \mathbb{R} \times \mathbb{R} \\
(x_{1}, y_{1}) R (x_{2}, y_{2}) \iff x_{1}^{2} + y_{1}^{2} = x_{2}^{2} + y_{2}^{2} \\
[(1, 1)]_{R} = \Set{ (x, y) | x^{2}+y^{2} = 2 } \\
\left( \frac{1}{2}, \frac{\sqrt{ 7 }}{2} \right) R (1, 1) \iff \frac{1}{4} + \frac{7}{4} = 1 + 1 \implies \boxed{\left( \frac{1}{2}, \frac{\sqrt{ 7 }}{2} \right) \in [(1, 1)]_{R}} \\
\text{Equation of a circle: } (x - a)^{2} + (y - b)^{2} = r^{2} \\
\implies \text{The geometric interpretation of the partition would be} \\
\text{all different circles with the center at } (0, 0) \\
}
$$
# 3b
$$
\displaylines{
S \text{ on } \mathbb{R} \times \mathbb{R} \\
(x_{1}, y_{1}) S (x_{2}, y_{2}) \iff x_{1} = x_{2} \\
[(1, 1)]_{S} = \Set{ (x, y) | x = 1 } \\
(1, -1) S (1, 1) \iff 1 = 1 \implies \boxed{(1, -1) \in [(1, 1)]_{S}} \\
\text{Equation of a vertical line: } x = a \\
\implies \text{The geometric interpretation of the partition would be} \\
\text{all different vertical lines} \\
}
$$
# 3c
$$
\displaylines{
[(x, y)]_{R \cap S} = \Set{ (a, b) | a^{2}+b^{2} = x^{2}+y^{2} \land a = x } = \Set{ (a, b) | b^{2} = y^{2} \land a = x } = \\
= \Set{ (a, b) | b = \pm y \land a = x } \\
\implies [(x, y)]_{R \cap S} = \begin{cases}
\Set{ (x, y) } & y = 0 \\
\Set{ (x, y), (x, -y) } & y \neq 0 \\
\end{cases} \\
\implies \boxed{\lvert [(x, y)]_{R \cap S} \rvert = \begin{cases}
1 & y = 0 \\
2 & y \neq 0 \\
\end{cases}} \\
\text{Geometrically this can be explained as:} \\
\text{A vertical line can either touch the circle in one point or cross it in two points} \\
}
$$
---

# 4
$$
\displaylines{
S \text{ on } A = (\mathbb{R} \setminus \Set{ 0 }) \times (\mathbb{R} \setminus \Set{ 0 }) \\
(x_{1}, y_{1})S(x_{2}, y_{2}) \iff x_{1} \cdot x_{2} > 0 \land y_{1} \cdot y_{2} > 0 \\
x_{1} \cdot x_{2} > 0 \iff \begin{cases}
x_{1} < 0 \land x_{2} < 0 \\
x_{1} > 0 \land x_{2} > 0 \\
\end{cases} \\
y_{1} \cdot y_{2} > 0 \iff \begin{cases}
y_{1} < 0 \land y_{2} < 0 \\
y_{1} > 0 \land y_{2} > 0 \\
\end{cases} \\
\implies (x_{1}, y_{1}) S (x_{2}, y_{2}) \iff \begin{cases}
x_{1}, x_{2}, y_{1}, y_{2} < 0 \\
x_{1}, x_{2} < 0 \land y_{1}, y_{2} > 0 \\
x_{1}, x_{2}, y_{1}, y_{2} > 0 \\
x_{1}, x_{2} > 0 \land y_{1}, y_{2} < 0 \\
\end{cases} \\
\implies {^{\displaystyle A}}\Big/{_{\displaystyle S}} = \Set{ [(1, 1)]_{S}, [(1, -1)]_{S}, [(-1, 1)]_{S}, [(-1, -1)]_{S} } \\
\implies \boxed{\left\lvert {^{\displaystyle A}}\Big/{_{\displaystyle S}} \right\rvert = 4} \\
\text{Geometrical interpretation of } S \text{ are quadrants, not including the axes} \\
}
$$
---
$$
\text{Let } A = \Set{ 1, 2, 3 }
$$
# 5a
$$
\displaylines{
\text{Nor symmetric, nor anti-symmetric} \\
R = \Set{ (1, 2), (2, 1), (3, 1) } \\
}
$$
# 5b
$$
\displaylines{
\text{Anti-symmetric, but not symmetric} \\
R = \Set{ (1, 2) } \\
}
$$
# 5c
$$
\displaylines{
\text{Symmetric, but not anti-symmetric} \\
R = \Set{ (1, 2), (2, 1) } \\
}
$$
# 5d
$$
\displaylines{
\text{Symmetric and anti-symmetric} \\
R = I_{A} \\
}
$$
---

# 6a
$$
\displaylines{
R \subseteq \mathbb{R} \times \mathbb{R} \\
R = \Set{ (a, b) | a^{2} \leq b^{2} } \\
\\
R \text{ is reflexive: } a^{2} \leq a^{2} \implies (a, a) \in R \\
R \text{ is not anti-symmetric: } a^{2} \leq b^{2} \land b^{2} \leq a^{2} \implies a^{2} = b^{2} \centernot\implies a = b \\
\text{Example: } (a, -a) \in R, (-a, a) \in R, a \neq -a \\
\implies \boxed{R \text{ is not a partially ordering relation}} \\
}
$$
# 6b
$$
\displaylines{
(A, R) \text{ is a partially ordered set (poset)} \\
\text{Let } B \subseteq A, S = R \cap (B \times B) \\
\\
\text{Let } a \in B \implies (a, a) \in B \times B \\
(a, a) \in R \implies (a, a) \in S \implies S \text{ is reflexive on } B \\
\text{Let } a, b \in B \implies (a, b), (b, a) \in B \times B \\
(a, b) \in S \implies (a, b) \in R \implies [(b, a) \in R \to b = a] \implies [(b, a) \in S \to b = a] \\
\implies S \text{ is anti-symmetric on } B \\
\text{Let } a, b, c \in B \implies (a, b), (b, c), (a, c) \in B \times B \\
(a, b), (b, c) \in S \implies (a, b), (b, c) \in R \implies (a, c) \in R \implies (a, c) \in S \\
\implies S \text{ is transitive on } B \\
\implies \boxed{S \text{ is a partially ordering relation on } B} \\
}
$$
# 6c
$$
\displaylines{
A = \Set{ (a_{1},a_{2},\dots,a_{n}) | \forall k \in [1, n] : a_{k} \in \Set{ 0, 1 } } \\
R = \Set{ ((a_{1},a_{2},\dots,a_{n}),(b_{1},b_{2},\dots,b_{n})) | \sum_{k=1}^{n} a_{k} < \sum_{k=1}^{n} b_{k} } \\
\text{Note: I will use notation } 00, 010, 1011, etc. \\
\text{to denote sequences } (0, 0), (0, 1, 0), (1, 0, 1, 1), etc. \\
\text{so that the solution is not too flooded with extra characters} \\
e.g. \text{ 10 in this case is not a number, but a sequence of length 2} \\
\\
\text{Let } n = 1 \\
A = \Set{ (0), (1) }, R = \Set{ ((0), (1)) } \\
\text{Let } n = 2 \\
A = \Set{ 00, 01, 10, 11 } \\
R = \Set{ (00, 01), (00, 10), (00, 11), (01, 11), (10, 11) } \\
R \text{ is a relation comparing the number of 1s in two sequences} \\
R \text{ is not a partial ordering relation, because any sequence is not in relation $R$ with itself} \\
\\
\text{Let } S = R \cup I_{A} \\
I_{A} \subseteq S \implies S \text{ is reflexive} \\
(a, b) \in S \land (b, a) \in S \text{ is always false} \implies S \text{ is anti-symmetric} \\
a S b, b S c \iff \sum a < \sum b < \sum c \implies \sum a < \sum c \implies a S c \implies S \text{ is transitive} \\
\implies \boxed{S \text{ is a partially ordering relation}} \\
\\
\boxed{\text{Sequence } 0_{A} = (0, 0, \dots, 0)_{n} \text{ is a minimum of set } A} : \\
\forall x \in A: (0_{A}, x) \in S \text{ as all } x \text{ will have at least one 1 or be equal to } 0_{A} \\
\text{Set } A \text{ has a minimum} \implies \boxed{\text{the only minimal element is } 0_{A}} \\
\\
\boxed{\text{Sequence } 1_{A} = (1, 1, \dots, 1)_{n} \text{ is a maximum of set } A} : \\
\forall x \in A: (x, 1_{A}) \in S \text{ as all } x \text{ will have at least one 0 or be equal to } 1_{A} \\
\text{Set } A \text{ has a maximum} \implies \boxed{\text{the only maximal element is } 1_{A}} \\
}
$$
---

# 7
$$
\displaylines{
A = \Set{ 2, 3, \dots, 99, 100 } \\
R = \Set{ (a, b) | \exists k \in \mathbb{N}: b = ak } \\

}
$$
# 7a
$$
\displaylines{
\text{How many maximal elements are there in this set?} \\
\text{Element is going to be maximal if it doesn't divide any member of set } A \text{ except for itself} \\
\forall x \in A: x \leq 50 \implies 4 \leq 2x \leq 100 \implies 2x \in A \implies x \mid 2x \\
\implies \text{Any element less or equal to } 50 \text{ is not maximal} \\
\forall x \in A: x > 50, k \geq 2 \implies xk > 100 \implies \begin{cases}
xk = x & k = 1 \\
xk \not\in A & k \geq 2 \\
\end{cases} \\
\implies \forall x > 50 \in A: \lnot (\exists b \in A: b \neq x \land x \mid b) \\
\implies \boxed{\text{All elements of $A$ greater than } 50 \text{ are maximal, there are } 50 \text{ of them}} \\
}
$$
# 7b
$$
\displaylines{
\text{Is there a smallest element?} \\
2 \not\mid 3 \implies 2 \text{ is not the smallest} \\
\forall x \in [3, 100]: x \not\mid 2 \\
\implies \forall a \in A \exists x \in A: a \not\mid x \\
\implies \boxed{\text{There is no smallest element}} \\
}
$$
# 7c
$$
\displaylines{
\text{Add two elements to the set such that it has a smallest and a largest elements} \\
\text{First element to add would be } 1, \text{ as it divides all elements of set A} \implies \boxed{1 \text{ is a minimum}} \\
\text{Second element to add would be } \prod_{k=2}^{100} k, \text{ as it is divided by all elements of set A} \\
\implies \boxed{\prod_{k=2}^{100} k \text{ is a maximum}} \\
}
$$
---

# 8
$$
\displaylines{
A \text{ is a finite set}, (A, R) \text{ is a partially ordered set} \\
\text{Prove: If there is exactly one minimal element, then it is also a minimum} \\
\\
\text{Proof: } \\
\text{Let } m \text{ be a unique minimal element, but not a minimum of set } A \\
\implies \exists x \in A: m \not S x \\
m S m \implies x \neq m \implies x \not S m \\
\text{Let } B = \Set{ b \in A | b S x } \\
x \in B \implies B \neq \emptyset \\
B \subseteq A \implies B \text{ is finite} \\
\implies \exists z \in B: z \text{ is a minimal element of } B \\
[m S b \land b S x \to m S x] \implies \forall b \in B: m \not S b \implies m \not S z \implies m \neq z \\
m \text{ is a unique minimal of } A \implies z \text{ is not minimal in } A \implies \exists a \in A: a \neq z \land a S z \\
a S z \land z S x \underset{ \text{By transitivity} }{ \implies } a S x \implies a \in B \\
a \in B \land a S z \implies a = z - \text{Contradiction!} \\
\implies \boxed{m \text{ is a minimum of A}} \\
}
$$
---
