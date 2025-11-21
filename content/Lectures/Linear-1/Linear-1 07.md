---
{"publish":true,"created":"11/12/24, 12:12","modified":"2025-11-21T21:10:14.293+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# Linear-1 7
## Interchangeability of LID #lemma
$$
\displaylines{
\text{Let vector space } V \text{ over } \mathbb{F} \\
\text{Let } A \subseteq V - \text{ linear independence }, B \subseteq V, sp(B) = V \\
\text{Then} \\
\forall \vec{a} \in A \exists \vec{b} \in B: \vec{b} \not\in A \setminus \Set{ \vec{a} } \land (A \setminus \Set{ \vec{a} }) \cup \Set{ \vec{b} } \text{ is a linear independence} \\
\\
\text{Proof:} \\
\text{Let } \exists \vec{a} \in A: \forall \vec{b} \in B: \vec{b} \in A \setminus \Set{ \vec{a} } \lor ( A \setminus \Set{ \vec{a} }) \cup \Set{ \vec{b} } \text{ is a linear dependence} \\
\text{If } \vec{b} \in A \setminus \Set{ \vec{a} } \implies \vec{b} \in sp(\Set{ \vec{a} })) \\
A \text{ is a linear independence} \implies A \setminus \Set{ \vec{a} } \text{ is a linear independence} \\
\text{If } \vec{b} \not\in A \setminus \Set{ \vec{a} } \implies [\vec{b} \not\in sp(A \setminus \Set{ \vec{a} }) \iff (A \setminus \Set{ \vec{a} }) \cup \Set{ \vec{b} } \text{ is a linear independence} ] \\
\implies \vec{b} \in sp(A \setminus \Set{ \vec{a} }) \\
\forall \vec{b} \in B: \vec{b} \in sp(A \setminus \Set{ \vec{a} }) \implies B \subseteq sp(A \setminus \Set{ \vec{a} }) \implies sp(B) \subseteq sp(A \setminus \Set{ \vec{a} }) \\
\implies V \subseteq sp(A \setminus \Set{ \vec{a} }) \land A \subseteq V \implies V = sp(A \setminus \Set{ \vec{a} }) \\
A \text{ is a linear independence} \iff sp(A \setminus \Set{ \vec{a} }) \subset sp(A) \subseteq V \\
\implies sp(A \setminus \Set{ \vec{a} }) \subset V - \text{Contradiction!} \\
}
$$
---
## LID is not larger than the spanning set #lemma
$$
\displaylines{
\text{Let vector space } V \text{ over } \mathbb{F} \\
V \text{ is finitely generated: } \exists X: \lvert X \rvert = n \land sp(X) = V \\
\text{Let } A \subseteq V - \text{ linear independence }, B \subseteq V, sp(B) = V \\
\text{Then } \lvert A \rvert \leq \lvert B \rvert \\
\\
\text{Proof:} \\
\text{Let } \lvert B \rvert = n \\
B = \Set{ b_{1},b_{2},\dots b_{n} } \\
\text{Let } \lvert A \rvert > \lvert B \rvert \\
A = \Set{ a_{1}, a_{2},\dots,a_{n+1},\dots } \\
\text{By the lemma above:} \\
\exists b_{1} \in B: b \not\in A \setminus \Set{ a_{1} } \land (A \setminus \Set{ a_{1} }) \cup \Set{ b_{1} } \text{ is a linear independence} \\
\text{By induction: } (A \setminus \Set{ a_{1}, a_{2}, \dots, a_{n} }) \cup B \text{ is a linear independence} \\
\text{Let } C = (A \setminus \Set{ a_{1}, a_{2}, \dots, a_{n} }) \cup B, B \subseteq C \\
\text{By the lemma above: } \exists b_{x} \in B: b_{x} \not\in C \setminus \Set{ a_{n+1} } - \text{Contradiction!} \\
\implies \lvert A \rvert \leq \lvert B \rvert \\
\\
\text{Let } B \text{ be an infinite set} \\
\exists C \subseteq V: \lvert C \rvert = n \land sp(C) = V \\
\implies \lvert A \rvert \leq \lvert C \rvert \leq \lvert B \rvert \implies \lvert A \rvert \leq \lvert B \rvert \\ 
}
$$
---
## Basis of the vector space #definition
$$
\displaylines{
\text{Let } B \subseteq V \text{ over } \mathbb{F} \\
sp(B) = V \land B \text{ is a linear independence} \\
}
$$
## Dimension of the vector space #definition
$$
\displaylines{
B \text{ is the basis of } V \text{ over } \mathbb{F} \\
\text{Dimension of } V \text{ over } \mathbb{F} \text{ is} \\
dim_{\mathbb{F}}V = \lvert B \rvert \\
}
$$
---
## Dimensions of bases #lemma
$$
\displaylines{
\text{Let } B, C \text{ be two bases of } V \\
\text{Then } \lvert B \rvert = \lvert C \rvert \\
\\
\text{Proof:} \\
C \text{ is a linear independence and } sp(B) = V \\
\implies \lvert C \rvert \leq \lvert B \rvert \\
B \text{ is a linear independence and } sp(C) = V \\
\implies \lvert B \rvert \leq \lvert C \rvert \\
\implies \lvert B \rvert = \lvert C \rvert \\
}
$$
---
## Example
$$
\displaylines{
V = \mathbb{R}^{2} \text{ over } \mathbb{R} \\
A = \Set{ \begin{pmatrix}
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} } \text{ is a basis of } V \\
\text{More than that, it is called the standard basis of } V \\
dim_{\mathbb{R}} \mathbb{R}^{2} = 2 \\
}
$$
---
## Standard basis #definition
$$
\displaylines{
\text{Let } V = \mathbb{F}^{n} \text{ over } \mathbb{F} \\
\Set{ e_{1}, \dots, e_{n} } \text{ is called standard basis of } V \\
\text{Where } \forall k \in [1, n]: (e_{i})_{k} = \begin{cases}
1 & k = i \\
0 & \text{otherwise} \\
\end{cases} \\
}
$$
---
## Basis properties #lemma
$$
\displaylines{
& \text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
& \text{Then } \\
1. & \exists A: A \text{ is basis of } V \\
2. & B \text{ is a basis of } V \iff B \text{ is a maximal linear independence in } V \\
3. & B \text{ is a basis of } V \iff B \text{ is a minimal set generating } V \\
}
$$
---
## "Of the three" #lemma
$$
\displaylines{
B \subseteq V \\
1. \quad sp(B) = V \\
2. \quad B \text{ is a linear independence} \\
3. \quad \lvert B \rvert = dim V \\
\text{If two out of three are true, then all are true} \\
\\
\text{Proof:} \\
\underline{(1) \text{ and } (2)} \implies (3) \text{ by definition of basis} \\
\underline{\text{Let } (2) \text{ and } (3)} \\
B \text{ is a linear independence}, \lvert B \rvert = dim V \\
B \subseteq V \land B \text{ is a linear independence} \implies \lvert B \rvert = n \\
B = \Set{ b_{1}, b_{2}, \dots, b_{n} } \\
\text{Let } sp(B) \neq V \iff \exists v \in V: v \not\in sp(B) \\
\implies B \cup \Set{ v } \text{ is a linear independence} \\
\text{Let } C \text{ be a basis of } V \\
\implies \lvert B \rvert = dim V = \lvert C \rvert \\
sp(C) = V \text{ and } \lvert C \rvert < \lvert B \cup \Set{ v } \rvert - \text{Contradiction!} \\
\implies sp(B) = V \\
\underline{\text{Let } (1) \text{ and } (3)} \\
sp(B) = V \text{ and } \lvert B \rvert = dim V \\
\text{Let } C \text{ be a basis of } V \\
\lvert C \rvert = dim V = \lvert B \rvert \\
\text{Let } B \text{ be a linear dependence} \\
\iff \exists v \in V: sp(B \setminus \Set{ v }) = sp(B) = V \\
\implies sp(B \setminus \Set{ v }) = V \implies \lvert C \rvert > \lvert B \setminus \Set{ v } \rvert - \text{Contradiction!} \\
\implies B \text{ is a linear independence} \\
}
$$
---
$$
\displaylines{
dim V = n \implies \begin{cases}
A \text{ is a linear independence} \implies \lvert A \rvert \leq n \\
sp(A) = V \implies \lvert A \rvert \geq n \\
\end{cases} \\
}
$$
---
## "Useful" #lemma
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
U, W \subseteq V - \text{ vector subspaces of } V \\
\text{Then } \\
U \subseteq W \implies dim U \leq dim W \\
U = W \iff (U \subseteq W \land dim U = dim W) \\
\\
\text{Proof:} \\
\text{It is obvious that } U = W \implies (U \subseteq W \land dim U = dim W) \\
\text{Now let } U \subseteq W \land dim U = dim W = n \\
\exists B = \Set{ u_{1}, u_{2}, \dots, u_{n} } \text{ which is a basis of } U \\
B \subseteq U \subseteq W \\
B \text{ is a linear independence} \land dim W = \lvert B \rvert \implies U = sp(B) = W \implies U = W \\
}
$$
---
## Dimension theorem
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
U, W \subseteq V - \text{vector subspaces of } V \\
\text{Then } dim(U + W) = dim(U) + dim(W) - dim(U \cap W) \\
}
$$
---
