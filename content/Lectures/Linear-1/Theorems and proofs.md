---
{"publish":true,"created":"16/02/25, 13:02","modified":"2025-11-21T21:10:14.323+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

#  (1) Short criterion for a vector subspace
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\text{Let } W \subseteq V \\
1. \quad 0_{V} \in W \\
2. \forall \alpha \in \mathbb{F}, \forall u, v \in W: u + \alpha v \in W \\
1 \text{ and } 2 \iff W \text{ is a vector subspace of } V \\
\text{Note: } 2 \text{ can be separated into two properties:} \\
2.1 \quad \forall u, v \in W: u + v \in W \\
2.2 \quad \forall \alpha \in \mathbb{F}, \forall v \in W: \alpha v \in W \\
\\
\text{Proof:} \\
\text{Let } W \text{ be a vector subspace of } V \\
\implies W \text{ is a vector space} \implies 0_{W} \in W \\
0_{W} \text{ is neutral to addition in } W: 0_{W} = 0_{W} + 0_{W} \\
\implies \underbrace{ 0_{W} + (-0_{W}) }_{ 0_{V} } = 0_{W} + (\underbrace{ 0_{W} + (-0_{W}) }_{ 0_{V} }) \implies 0_{V} = 0_{W} + 0_{V} \\
0_{V} \text{ is neutral to addition in } V \implies 0_{W} = 0_{V} \implies \boxed{ 0_{V} \in W } \\
W \text{ is a vector space} \implies W \text{ is closed for addition and multiplication by scalar} \\
\implies \boxed{ \forall \alpha \in \mathbb{F}, \forall u, v \in W: u + \alpha v \in W } \\
}
$$
$$
\displaylines{
\text{Let } 1 \text{ and } 2 \\
\text{Let us prove that } W \text{ is a vector space over $\mathbb{F}$ by checking 7 vector space axioms:} \\
\begin{array}{}
a. & \quad \text{Closure on addition and multiplication by scalar} \\
b. & \quad \text{Commutativity} \\
c. & \quad \text{Associativity} \\
d. & \quad \text{Distributivity} \\
e. & \quad \text{Neutral element for addition} \\
f. & \quad \text{Inverse on addition} \\
g. & \quad \text{Neutral element for multiplication by scalar} \\
\end{array} \\
1 \text{ and } 2 \implies W \text{ is closed on addition and multiplication by scalar} \implies \boxed{ a } \\
\forall \alpha \in \mathbb{F}, \forall v_{1}, v_{2} \in W: v_{1}, v_{2} \in V \implies \left\{\begin{array}{}
v_{1} + v_{2} = v_{2} + v_{1}  \\
\alpha v_{1} = v_{1} \alpha \\
\end{array}\right. \implies \boxed{ b } \\
\forall \alpha, \beta \in \mathbb{F}, \forall v_{1}, v_{2}, v_{3} \in W: v_{1}, v_{2}, v_{3} \in V \implies \left\{\begin{array}{}
(v_{1} + v_{2}) + v_{3} = v_{1} + (v_{2} + v_{3}) \\
\alpha(\beta v) = (\alpha\beta)v \\
\end{array}\right. \implies \boxed{ c } \\
\forall \alpha, \beta \in \mathbb{F}, \forall v_{1}, v_{2} \in W: v_{1}, v_{2} \in V \implies \left\{\begin{array}{}
\alpha(v_{1} + v_{2}) = \alpha v_{1} + \alpha v_{2} \\
(\alpha + \beta)v = \alpha v + \beta v \\
\end{array}\right. \implies \boxed{ d } \\
1 \implies \forall v \in W: 0_{v} + v = v \in W \implies \boxed{ e } \\
\forall v \in W: v \in V \implies 1_{\mathbb{F}} \cdot v = v \in W \implies \boxed{ g } \\
\forall v \in W: v \in V \implies \exists -v \in V: v + (-v) = 0_{V} \\
1_{\mathbb{F}}v + (-1_{\mathbb{F}})v = (1_{\mathbb{F}}+(-1_{\mathbb{F}}))v = 0_{V} \implies -v = -1_{\mathbb{F}}v \implies -v \in W \implies \boxed{ f } \\
\implies W \text{ is a vector space} \implies \boxed{ W \text{ is a vector subspace of } V } \\
}
$$
# (2) Elementary row operations
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n} \\
\text{Let } p \text{ be an elementary row operation} \\
\text{Then } p(A) = p(I)A \\
\\
\text{Proof:} \\
\text{Let p be scalar row multiplication} \\
\alpha \in \mathbb{F}, i \in [1, m]: \forall X \in \mathbb{F}^{m \times n}: R_{i}(p(X)) = \alpha R_{i}(X) \\
\text{Let } k \neq i \\
R_{k}(p(I)A) = R_{k}(p(I))A = R_{k}(I)A = e_{k}A = R_{k}(A) = R_{k}(p(A)) \\
R_{i}(p(I)A) = R_{i}(p(I))A = \alpha R_{i}(I)A = \alpha e_{i}A = \alpha R_{i}(A) = R_{i}(p(A)) \\
\implies \boxed{ p(A) = p(I)A } \\
\text{Let } p \text{ be row addition} \\
\alpha \in \mathbb{F}, i \neq j \in [1, m]: \forall X \in \mathbb{F}^{m \times n}: R_{i}(p(X)) = R_{i}(X) + \alpha R_{j}(X) \\
\text{Let } k \neq i \\
R_{k}(p(I)A) = R_{k}(p(I))A = R_{k}(I)A = e_{k}A = R_{k}(A) = R_{k}(p(A)) \\
R_{i}(p(I)A) = R_{i}(p(I))A = (R_{i}(I) + \alpha R_{j}(I))A = e_{i}A + \alpha e_{j}A = \\
= R_{i}(A) + \alpha R_{j}(A) = R_{i}(p(A)) \\
\implies \boxed{ p(A) = p(I)A } \\
\text{Let } p \text{ be row switching} \\
i \neq j \in [1,m]: \forall X \in \mathbb{F}^{m \times n}: R_{i}(p(X)) = R_{j}(X), R_{j}(p(X)) = R_{i}(X) \\
\text{Let } i \neq k \neq j \\
R_{k}(p(I)A) = R_{k}(p(I))A = e_{k}A = R_{k}(A) = R_{k}(p(A)) \\
R_{i}(p(I)A) = R_{i}(p(I))A = R_{j}(I)A = e_{j}A = R_{j}(A) = R_{i}(p(A)) \\
R_{j}(p(I)A) = R_{j}(p(I))A = R_{i}(I)A = e_{i}A = R_{i}(A) = R_{j}(p(A)) \\
\implies \boxed{ p(A) = p(I)A } \\
}
$$
# (3) Linear dependence properties
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\text{Let } S \subseteq V \\
1. \quad S \text{ is a linear dependence} \\
2. \quad \exists v \in S: v \in sp(S \setminus \Set{ v }) \\
3. \quad \exists v \in S: sp(S) = sp(S \setminus \Set{ v }) \\
1 \iff 2 \iff 3 \\
\\
\text{Proof:} \\
\text{Let } S = \Set{ v_{1}, v_{2}, \dots, v_{n} } \\
\text{Let } 1 \\
\implies \exists \alpha_{i} \neq 0: \sum_{i=1}^{n} \alpha_{i}v_{i} = 0 \\
\text{Let } \alpha_{1} \neq 0 \text{ (WLOG)} \implies v_{1} = \sum_{i=2}^{n} \left( \frac{-\alpha_{i}}{\alpha_{i-1}} \right)v_{i} \\
\forall i \in [2, n]: v_{i} \neq v_{1} \implies v_{1} \in sp(S \setminus \Set{ v_{1} }) \implies \boxed{ 1 \implies 2 } \\
\text{Let } 2 \\
\text{Let } v_{1} \in sp(S \setminus \Set{ v_{1} }) \text{ (WLOG)} \\
S \setminus \Set{ v_{1} } \subseteq S \implies sp(S \setminus \Set{ v_{1} }) \subseteq sp(S) \\
\text{Let } u \in sp(S) \\
u = \sum_{i=1}^{n} \alpha_{i}v_{i} = \alpha_{1}v_{1} + \sum_{i=2}^{n} \alpha_{i}v_{i} \\
v_{1} \in sp(S \setminus \Set{ v_{1} }) \implies v_{1} = \sum_{j=2}^{n} \beta_{j}v_{j} \\
\implies u = \alpha_{1}\sum_{j=2}^{n} \beta_{j}v_{j} + \sum_{i=2}^{n} \alpha_{i}v_{i} = \sum_{i=2}^{n} (\alpha_{1}\beta_{i}+\alpha_{i})v_{i} \implies u \in sp(S \setminus \Set{ v_{1} }) \\
\implies sp(S) \subseteq sp(S \setminus \Set{ v_{1} }) \implies sp(S) = sp(S \setminus \Set{ v_{1} }) \implies \boxed{ 2 \implies 3 } \\
\text{Let } 3 \\
\text{Let } sp(S \setminus \Set{ v_{1} }) = sp(S) \text{ (WLOG)} \\
v_{1} \in S \implies v_{1} \in sp(S) \implies v_{1} \in sp(S \setminus \Set{ v_{1} }) \\
\implies v_{1} = \sum_{i=2}^{n} \alpha_{i}v_{i} \implies v_{1} - \sum_{i=2}^{n} \alpha_{i}v_{i} = 0 \\
\implies \Set{ 1, -\alpha_{2}, -\alpha_{3}, \dots, -\alpha_{n} } \text{ is a non-trivial linear combination of } S \\
\implies S \text{ is a linear dependence} \implies \boxed{ 3 \implies 1 } \\
\implies [1 \implies 2 \implies 3 \implies 1] \implies \boxed{ 1 \iff 2 \iff 3 } \\
}
$$
# (4) Linear independence properties
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space} \\
\text{Let } B \subseteq V \\
1. \quad sp(B) = V \\
2. \quad B \text{ is a linear independence} \\
3. \quad \lvert B \rvert = dim(V) \\
\text{If any two properties are true, then the third one is also true} \\
\\
\text{Proof:} \\
\boxed{ 1 \text{ and } 2 \implies 3 } \text{ by definition of basis} \\
\text{Let } 2 \text{ and } 3 \\
\text{Let } sp(B) \neq V \implies \exists v \in V: v \not\in sp(B) \\
\implies B \cup \Set{ v } \text{ is a linear independence} \\
\text{Let } C \text{ be a basis of } V \\
dim(V) = \lvert C \rvert < \lvert B \cup \Set{ v } \rvert \\
\text{But } C \text{ is a maximal linear independence of } V - \text{Contradiction!} \\
\implies sp(B) = V \implies \boxed{ 2 \text{ and } 3 \implies 1 } \\
\text{Let } 1 \text{ and } 3 \\
\text{Let } C \text{ be a basis of } V \\
\text{Let } B \text{ be a linear dependence} \\
\implies \exists v \in B: sp(B \setminus \Set{ v }) = sp(B) = V \\
\implies dim(V) = \lvert C \rvert \leq \lvert B \setminus \Set{ v } \rvert = dim(V) - 1 - \text{Contradiction!} \\
\implies B \text{ is a linear independence} \implies \boxed{ 1 \text{ and } 3 \implies 2 } \\
}
$$
# (5) Dimension theorem
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space} \\
\text{Let } U, W \subseteq V \text{ be vector subspaces of } V \\
\text{Then } dim(U + W) = dim(U) + dim(W) - dim(U \cap W) \\
\\
\text{Proof:} \\
\text{Let } B \text{ be a basis of } U \cap W, B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \\
U \cap W \subseteq U, W \\
\implies B \subseteq B_{U} = B \cup \Set{ u_{1}, u_{2}, \dots, u_{k} } \\
\implies B \subseteq B_{W} = B \cup \Set{ w_{1}, w_{2}, \dots, w_{t} } \\
dim(U \cap W) = n \\
dim(U) = n + k, dim(W) = n + t \\
\text{Let } \hat{B} = B_{U} \cup B_{W} \\
U + W = sp(B_{U}) + sp(B_{W}) = sp(B_{U} \cup B_{W}) = sp(\hat{B}) \\
\text{Let } \sum_{i=1}^{n} \alpha_{i}v_{i} + \sum_{j=1}^{k} \beta_{j}u_{j} + \sum_{r=1}^{t}\gamma_{r}w_{r} = 0 \\
\implies \underbrace{ \sum_{i=1}^{n} \alpha_{i}v_{i} + \sum_{j=1}^{k} \beta_{j}u_{j} }_{ \in sp(B_{U}) = U } = \underbrace{ -\sum_{r=1}^{t}\gamma_{r}w_{r} }_{ \in sp(B_{W}) = W } \\
\implies -\sum_{r=1}^{t}\gamma_{r}w_{r} \in U \cap W \\
\implies -\sum_{r=1}^{t}\gamma_{r}w_{r} = \sum_{i=1}^{n} \delta_{i}v_{i} \\
\implies \underbrace{ \sum_{i=1}^{n} \delta_{i}v_{i} + \sum_{r=1}^{t}\gamma_{r}w_{r} }_{ \in sp(B_{W}) } = 0 \implies \delta_{1} = \delta_{2} = \dots = \delta_{n} = \boxed{ \gamma_{1} = \gamma_{2} = \dots = \gamma_{t} = 0 } \\
\implies \sum_{r=1}^{t}\gamma_{r}w_{r} = 0 \implies \underbrace{ \sum_{i=1}^{n} \alpha_{i}v_{i} + \sum_{j=1}^{k} \beta_{j}u_{j} }_{ \in sp(B_{U}) } = 0 \\
\implies \boxed{ \alpha_{1} = \alpha_{2} = \dots = \alpha_{n} = \beta_{1} = \beta_{2} = \dots = \beta_{k} = 0 } \\
\implies \hat{B} \text{ is a linear independence} \implies \hat{B} \text{ is a basis of } U + W \\
\implies dim(U + W) = \lvert \hat{B} \rvert = \lvert B_{U} \cup B_{W} \rvert = \lvert B_{U} \rvert + \lvert B_{W} \rvert - \lvert B_{U} \cap B_{W} \rvert \\
\implies \boxed{ dim(U + W) = dim(U) + dim(W) - dim(U \cap W) } \\
}
$$
# (-) Defining theorem for linear transformation
$$
\displaylines{
\text{Let } V, U \text{ be finitely generated vector spaces over } \mathbb{F} \\
\text{Let } B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ be a basis of } V \\
\text{Let } u_{1}, u_{2}, \dots, u_{n} \in U \\
\text{Then } \exists! \text{ linear transformation } T: V \to U: \forall i \in [1, n]: T(v_{i}) = u_{i} \\
\\
\text{Proof:} \\
B \text{ is a basis of } V \implies \forall v \in V: \exists \Set{ \alpha_{i} }_{i \in [1, n]} \subseteq \mathbb{F}: v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\text{Let } \forall v \in V: T(v) = \sum_{i=1}^{n} \alpha_{i}u_{i}, \text{ where } \alpha_{i} \text{ are the linear combination of } B \text{ for } v \\
\implies \forall i \in [1, n]: T(v_{i}) = T(1v_{i}) = 1u_{i} = u_{i} \\
\text{Let } u, v \in V, \alpha \in \mathbb{F} \\
u = \sum_{i=1}^{n} \beta_{i}v_{i} \implies T(u) = \sum_{i=1}^{n} \beta_{i}u_{i} \\
v = \sum_{i=1}^{n} \gamma_{i}v_{i} \implies T(v) = \sum_{i=1}^{n} \gamma_{i}u_{i} \\
\implies u + \alpha v = \sum_{i=1}^{n} \beta_{i}v_{i} + \alpha\sum_{i=1}^{n} \gamma_{i}v_{i} = \sum_{i=1}^{n} (\beta_{i} + \alpha\gamma_{i})v_{i} \\
\implies T(u + \alpha v) = \sum_{i=1}^{n} (\beta_{i} + \alpha\gamma_{i})u_{i} = \sum_{i=1}^{n} \beta_{i}u_{i} + \alpha\sum_{i=1}^{n} \gamma_{i}u_{i} = T(u) + \alpha T(v) \\
\implies T \text{ is a linear transformation} \implies \boxed{ \text{Such linear transformation exists} } \\
\text{Let } T_{2} \text{ be another linear transformation such that } \forall i \in [1, n]: T_{2}(v_{i}) = u_{i} \\
T(u) = T\left( \sum_{i=1}^{n} \beta_{i}v_{i} \right) = \sum_{i=1}^{n} \beta_{i}u_{i} \\
T_{2}(u) = T_{2}\left( \sum_{i=1}^{n} \beta_{i}v_{i} \right) = \sum_{i=1}^{n} \beta_{i}T_{2}(v_{i}) = \sum_{i=1}^{n} \beta_{i}u_{i} = T(u) \\
\implies T_{2} = T \implies \boxed{ \text{Such linear transformation is unique} } \\
}
$$
# (6) Rank-nullity theorem for linear transformation
$$
\displaylines{
\text{Let } V, U \text{ be finitely generated vector spaces} \\
\text{Let } T: V \to U \text{ be a linear transformation} \\
\text{Then } dim(V) = dim(ker(T)) + dim(Im(T)) \\
\\
\text{Proof:} \\
\text{Let } dim(V) = n \\
ker(T) = \Set{ v \in V | T(v) = 0 } \\
Im(T) = \Set{ u \in U: \exists v \in V: T(v) = u } \\
ker(T) \subseteq V \implies \exists B_{k} = \Set{ u_{1}, u_{2}, \dots, u_{k} } \text{ a basis of } ker(T) \implies dim(ker(T)) = k \\
\text{Let } S = \Set{ v_{1}, v_{2}, \dots, v_{n-k} } \text{ such that } B = B_{k} \cup S \text{ is a basis of } V \\
T(v) = T\left( \sum_{i=1}^{k} \alpha_{i}u_{i} + \sum_{i=1}^{n-k} \beta_{i}v_{i} \right) = \sum_{i=1}^{k} \alpha_{i}T(u_{i}) + \sum_{i=1}^{n-k} \beta_{i}T(v_{i}) = \sum_{i=1}^{n-k} \beta_{i}T(v_{i}) \in sp(T[S]) \\
\implies Im(T) = sp(\Set{ \underbrace{ T(u_{1}) }_{ 0 }, \underbrace{ T(u_{2}) }_{ 0 }, \dots, \underbrace{ T(u_{n}) }_{ 0 }, T(v_{1}), T(v_{2}), \dots, T(v_{n-k}) }) = \\
= sp(\Set{ T(v_{1}), T(v_{2}), \dots, T(v_{n-k}) }) \\
\text{Let } \sum_{i=1}^{n-k} \alpha_{i}T(v_{i}) = 0 \\
\implies T\left( \sum_{i=1}^{n-k} \alpha_{i}v_{i} \right) = 0 \implies \sum_{i=1}^{n-k} \alpha_{i}v_{i} \in ker(T) \\
\implies \sum_{i=1}^{n-k} \alpha_{i}v_{i} = \sum_{i=1}^{k} \beta_{i}u_{i} \implies \sum_{i=1}^{n-k} \alpha_{i}v_{i} - \sum_{i=1}^{k} \beta_{i}u_{i} = 0 \\
B \text{ is a linear indepedendence} \implies \alpha_{1} = \alpha_{2} = \dots = \alpha_{n-k} = -\beta_{1} = -\beta_{2} = \dots = -\beta_{k} = 0 \\
\implies \Set{ T(v_{1}), T(v_{2}), \dots, T(v_{n-k}) } \text{ is a linear independence} \\
\implies \Set{ T(v_{1}), T(v_{2}), \dots, T(v_{n-k}) } \text{ is a basis of } Im(T) \implies dim(Im(T)) = n - k \\
\implies n = \boxed{ dim(ker(T)) + dim(Im(T)) = dim(V) } \\
}
$$
# (7) Invertibility of linear transformation
$$
\displaylines{
\text{Let } T: V \to U \text{ be a linear transformation} \\
\text{Then } T \text{ is invertible} \iff T \text{ is bijective} \\
\\
\text{Proof:} \\
\text{Let } T \text{ be invertible} \\
\implies \exists \text{ linear transformation } T^{-1}: TT^{-1} = T^{-1}T = I \\
TT^{-1} = I \implies TT^{-1} \text{ is surjective} \implies T \text{ is surjective} \\
T^{-1}T = I \implies T^{-1}T \text{ is injective} \implies T \text{ is injective} \\
\implies \boxed{ T \text{ is bijective} } \\
\text{Let } T \text{ be bijective} \\
T \text{ is a function} \implies \exists \text{ inverse function } T^{-1} \\
\text{Let } u_{1}, u_{2} \in U, \alpha \in \mathbb{F} \\
T^{-1}(u_{1} + \alpha u_{2}) = T^{-1}(TT^{-1}(u_{1} + \alpha u_{2})) = T^{-1}(TT^{-1}(u_{1}) + \alpha TT^{-1}(u_{2})) = \\
= T^{-1}(T(T^{-1}(u_{1}) + \alpha T^{-1}(u_{2}))) = T^{-1}T(T^{-1}(u_{1}) + \alpha T^{-1}(u_{2})) = T^{-1}(u_{1}) + \alpha T^{-1}(u_{2}) \\
\implies \boxed{ T^{-1} \text{ is a linear transformation} } \\
}
$$
# (8) Isomorphic vector spaces
$$
\displaylines{
\text{Let } V, U \text{ be finitely generated vector spaces over } \mathbb{F} \\
V \text{ and } U \text{ are isomorphic} \iff dim(V) = dim(U) \\
\\
\text{Proof:} \\
\text{Let } dim(V) = dim(U) \\
\text{Let } B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ be a basis of } V \\
\text{Let } C = \Set{ u_{1}, u_{2}, \dots, u_{n} } \text{ be a basis of } W \\
\text{Let } T: V \to U, \forall i \in [1, n]: T(v_{i}) = u_{i} \\
\Set{ T(v_{1}), T(v_{2}), \dots, T(v_{n}) } = C \subseteq Im(T) \\
dim(sp(C)) = dim(U) \implies dim(Im(T)) \geq dim(U) \\
\implies dim(Im(T)) = dim(U) \implies Im(T) = U \implies \boxed{ T \text{ is surjective} } \\
\text{Let } v \neq \hat{v} \in V \\
\exists \Set{ \alpha_{i} }_{i \in [1, n]} \subseteq \mathbb{F}: v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\exists \Set{ \beta_{i} }_{i \in [1, n]} \subseteq \mathbb{F}: \hat{v} = \sum_{i=1}^{n} \beta_{i}\hat{v}_{i} \\
v \neq \hat{v} \implies \exists j \in [1, n]: \alpha_{j} \neq \beta_{j} \\
T(v) = T\left( \sum_{i=1}^{n} \alpha_{i}v_{i} \right) = \sum_{m=1}^{n} \alpha_{i}u_{i} \\
T(\hat{v}) = T\left( \sum_{i=1}^{n} \beta_{i}v_{i} \right) = \sum_{m=1}^{n} \beta_{i}u_{i} \\
C \text{ is a linear independence} \land a_{j} \neq \beta_{j} \implies \sum_{m=1}^{n} \alpha_{i}u_{i} \neq \sum_{m=1}^{n} \beta_{i}u_{i} \\
\implies T(v) \neq T(\hat{v}) \implies \boxed{ T \text{ is injective} } \\
\implies T \text{ is bijective} \implies T \text{ is an isomorphism} \implies \boxed{ V \cong U } \\
\text{Let } V \cong U \\
\implies \exists T: V \to U \text{ invertible linear transformation} \\
T \text{ is invertible} \implies \left\{\begin{array}{}
T \text{ is surjective} \implies Im(T) = U \\
T \text{ is injective} \implies ker(T) = \Set{ 0 } \\
\end{array}\right. \\
dim(V) = dim(ker(T)) + dim(Im(T)) = 0 + dim(U) \implies \boxed{ dim(V) = dim(U) } \\
}
$$
# (9) Representation matrix for linear transformation
$$
\displaylines{
\text{Let } V, U \text{ be finitely generated vector spaces over } \mathbb{F} \\
\text{Let } T: V \to U \text{ be a linear transformation} \\
\text{Let } B, C \text{ be bases of } V, U \\
\text{Then exists matrix } A: \forall v \in V: A[v]_{B} = [T(v)]_{C} \\
A \text{ is denoted as } [T]^{B}_{C} \\
\\
\text{Proof:} \\
\text{Let } dim(V) = n \\
\text{Let } dim(U) = m \\
B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \\
C = \Set{ u_{1}, u_{2}, \dots, u_{m} } \\
\forall j \in [1, n]: \exists \Set{ \alpha_{ij} }_{i \in [1, m]}: T(v_{j}) = u = \sum_{i=1}^{m} \alpha_{ij}u_{i} \\
\text{Let } A \in \mathbb{F}^{m \times n}: A_{ij} = \alpha_{ij} \\
\text{Let } T_{A}: \mathbb{R}^{n} \to \mathbb{R}^{m}, T(v) = Av \\
\forall j \in [1, n]: T_{A}([v_{j}]_{B}) = A[v_{j}]_{B} = Ae_{j} = \underbrace{ C_{j}(A) }_{ \in \mathbb{F}^{m} } = \sum_{i=1}^{m} \alpha_{ij}e_{i} = \sum_{i=1}^{m} \alpha_{ij}[u_{i}]_{C} = \\
= \left[ \sum_{i=1}^{m} \alpha_{ij}u_{i} \right]_{C} = [T(v_{j})]_{C} \\
\text{Let } v \in V \\
\exists \Set{ \beta_{k} }_{k \in [1, n]} \subseteq \mathbb{F}: v = \sum_{k=1}^{n} \beta_{k}v_{k} \\
\implies [T(v)]_{C} = \left[ T\left( \sum_{k=1}^{n} \beta_{k}v_{k} \right) \right]_{C} = \left[ \sum_{k=1}^{n} \beta_{k}T(v_{k}) \right]_{C} = \sum_{k=1}^{n} \beta_{k}[T(v_{k})]_{C} = \sum_{k=1}^{n} \beta_{k}A[v_{k}]_{B} = \\
= \sum_{k=1}^{n} A\beta_{k}[v_{k}]_{B} = A\sum_{k=1}^{n} [\beta_{k}v_{k}]_{B} = A\left[ \sum_{k=1}^{n} \beta_{k}v_{k} \right]_{B} = A[v]_{B} \\
\implies \boxed{ \forall v \in V: A[v]_{B} = [T(v)]_{C} } \\
}
$$
# (10) Kernel and Image in relation to representation matrix
$$
\displaylines{
\text{Let } V, U \text{ be finitely generated vector spaces} \\
\text{Let } T: V \to U \text{ be a linear transformation} \\
\text{Let } [T]^{B}_{D} \text{ be a representation matrix of } T \\
\text{Prove: } \begin{array}{}
[ker(T)]_{B} = N([T]^{B}_{D}) \\
[Im(T)]_{D} = C([T]^{B}_{D}) \\
\end{array} \\
\\
\text{Proof:} \\
[v]_{B} \in [ker(T)]_{B} \iff v \in ker(T) \iff T(v) = 0 \iff [T]^{B}_{D}[v]_{B} = [T(v)]_{D} = [0]_{D} = 0 \\
\iff [v]_{B} \in N([T]^{B}_{D}) \implies \boxed{ [ker(T)]_{B} = N([T]^{B}_{D}) } \\
\\
\forall v \in V: [T]^{B}_{D}[v]_{B} \in C([T]^{B}_{D}) \\
[u]_{D} \in [Im(T)]_{D} \iff u \in Im(T) \iff \exists v \in V: T(v) = u \iff [T]^{B}_{D}[v]_{B} = [u]_{D} \\
\iff [u]_{D} \in C([T]^{B}_{D}) \implies \boxed{ [Im(T)]_{D} = C([T]^{B}_{D}) } \\
}
$$
