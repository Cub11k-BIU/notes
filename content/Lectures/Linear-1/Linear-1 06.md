---
{"publish":true,"created":"04/12/24, 12:12","modified":"2025-11-21T21:10:14.290+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# Linear-1 6
$$
\displaylines{
sp(A) \subseteq sp(B) \overset{ ? }{ \implies } A \subseteq B \\
\text{No:} \\
A = \Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} }, B = \Set{ \begin{pmatrix}
2 \\
0 \\
\end{pmatrix} } \\
\\
A \subseteq B \overset{ ? }{ \implies } sp(A) \subseteq sp(B) \\
\text{Yes:} \\
\dots \\
}
$$
$$
\displaylines{
S = sp(S) \iff S \text{ is a vector subspace of } V \\
}
$$
$$
\displaylines{
sp(\Set{ \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} }) + sp(\Set{ \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} }) = sp(\Set{ \begin{pmatrix}
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} }) \\
}
$$
---
## Sum of spans is a span of union #lemma
$$
\displaylines{
\text{Prove: } sp(A) + sp(B) = sp(A \cup B) \\
\\
\text{Proof:} \\
\text{Let } v \in sp(A) + sp(B) \\
v = \underbrace{ \sum_{i=1}^{n} \alpha_{i}u_{i} }_{  \in A \subseteq (A \cup B) } + \underbrace{ \sum_{i=1}^{k} \beta_{i}w_{i} }_{  \in B \subseteq (A \cup B)  } \implies v \in (A \cup B) \\
\implies sp(A) + sp(B) \subseteq sp(A \cup B) \\
\text{Let } v \in sp(A \cup B) \\
v = \sum_{i=1}^{n} \alpha_{i} v_{i} \\
\forall i \in [1, n]: v_{i} \in A \lor v_{i} \in B \\
\text{Let's reorder sum the following way:} \\
v = \underbrace{ \sum_{i=1}^{k} \alpha_{i}v_{i} }_{ v_{i} \in A } + \underbrace{ \sum_{i=k+1}^{n} \alpha_{i}v_{i} }_{ v_{i} \in B } \\
\implies v = \underbrace{ u }_{ \in sp(A) } + \underbrace{ w }_{ \in sp(B) } \\
\implies v \in sp(A) + sp(B) \implies sp(A \cup B) \subseteq sp(A) + sp(B) \\
}
$$
---
## Linear dependence/independence #definition
$$
\displaylines{
V \text{ is a vector space over } \mathbb{F}, S \subseteq V \\
S \text{ is called linear dependence if exist} \\
s_{1},s_{2},\dots,s_{n} \in S \\
\alpha_{1},\alpha_{2},\dots,\alpha_{n} \in \mathbb{F} \\
\text{such that } \alpha_{1}s_{1} + \dots \alpha_{n}s_{n} = 0 \\
\\
S \text{ is called linear independence if for all} \\
s_{1},s_{2},\dots,s_{n} \in S \\
\alpha_{1},\alpha_{2},\dots,\alpha_{n} \in \mathbb{F} \\
\text{such that } \alpha_{1}s_{1} + \dots \alpha_{n}s_{n} = 0 \\
\text{implies } \alpha_{1} = \alpha_{2} = \dots = \alpha_{n} = 0 \\
}
$$
---
## Note
$$
0 \in S \implies S \text{ is a linear dependence} \\
$$
---
## Linear dependence properties #theorem
$$
\displaylines{
V \text{ is a vector space over } \mathbb{F}, A \subseteq V \\
1. \quad A \text{ is a linear dependence} \\
2. \quad \exists v \in A: v \in sp(A \setminus \Set{ v }) \\
3. \quad \exists v \in A: sp(A) = sp(A \setminus \Set{ v }) \\
(1) \iff (2) \iff (3) \\
\\
\text{Proof:} \\
1. \quad \text{Let } (1) \\
\text{Let } \alpha_{1} \neq 0 \text{ by linear dependence} \\
\alpha_{1}v_{1} + \dots + \alpha_{n}v_{n} = 0 \\
v_{1} = \left( -\frac{\alpha_{2}}{\alpha_{1}} \right)v_{2} + \dots + \left(- \frac{a_{n}}{a_{1}} \right)v_{n} \\
\forall i \in [2, n]: v_{i} \in A \land v_{i} \neq v_{1} \implies \boxed{v_{1} \in sp(A \setminus \Set{ v_{1} })} \quad (2) \\
\implies \boxed{(1) \implies (2)} \\
2. \quad \text{Let } (2) \\
A \setminus \Set{ v } \subseteq A \implies \boxed{sp(A \setminus \Set{ v }) \subseteq sp(A)} \\
\text{Let } u \in sp(A) \\
u = \sum_{i=1}^{n} \alpha_{i}\vec{a}_{i} \\
\text{If } \forall i \in [1, n]: v \neq a_{i} \implies u \in sp(A \setminus \Set{ v }) \\
\text{If } \exists i \in [1,n]: v = a_{i} \\
\text{Let } i = 1 \text{ by commutativity of addition}, v = \vec{a}_{1} \\
v \in sp(A \setminus \Set{ v }) \implies v = \sum_{j=2}^{n} \beta_{j}\tilde{a}_{j} \\
\implies u = \alpha_{1}\sum_{j=1}^{n} \beta_{j}\tilde{a}_{j} + \sum_{j=2}^{n} \alpha_{j}\vec{a}_{j} \\
\forall i \in [1, n], j \in [2, n]: (\tilde{a}_{i} \in A \setminus \Set{ v } \land \vec{a}_{j} \in A \setminus \Set{ v }) \implies u \in sp(A \setminus \Set{ v }) \\
\implies \boxed{sp(A) \subseteq sp(A \setminus \Set{ v })} \implies \boxed{sp(A) = sp(A \setminus \Set{ v })} \\
3. \quad \text{Let } (3) \\
v \in A \underset{ A \subseteq sp(A) }{ \implies } v \in sp(A) \implies v \in sp(A) \setminus \Set{ v } \\
\implies v = \alpha_{1}\vec{a}_{1} + \dots \alpha_{n}\vec{a}_{n} \\
v + (-\alpha_{1})\vec{a}_{1} + \dots (-\alpha_{n})\vec{a}_{n} = 0 \\
v = 1 \cdot v \implies \Set{ 1, -\alpha_{1}, \dots, -\alpha_{n} } \text{ is a non-trivial linear combination} \\
\implies \boxed{A \text{ is a linear dependence}} \implies \boxed{(2) \implies (3)} \\
\boxed{(1) \implies (2) \implies (3) \implies (1)} \implies \boxed{(1) \iff (2) \iff (3)} \\
}
$$
---
## Linear independence properties #theorem
$$
\displaylines{
V \text{ is a vector space over } \mathbb{F} \\
1. \quad A \subseteq V \text{ is a linear independence}, v \in V, v \not\in A \\
v \not\in sp(A) \iff A \cup \Set{ v } \text{ is a linear independence} \\
2. \quad A \subseteq V \text{ is a linear independence}, v \in A \\
sp(A \setminus \Set{ v }) \neq sp(A) \\
\\
\text{Proof:} \\
1. \\
\text{Let } v \not\in sp(A) \\
v_{1}, \dots, v_{n} \in A \cup \Set{ v } \\
\alpha_{1}, \dots, \alpha_{n} \in \mathbb{F} \\
\alpha_{1}v_{1} + \dots + \alpha_{n}v_{n} = 0 \\
\text{If } \forall i \in [1, n]: v \neq v_{i} \implies \alpha_{1} = \dots = \alpha_{n} = 0 \\
\text{If } \exists i \in [1, n]: v = v_{i} \\
\text{Let } i = 1 \text{ by commutativity of addition}, v = v_{1} \\
\alpha_{1}v + \alpha_{2}v_{2} + \dots + \alpha_{n}v_{n} = 0 \\
\alpha_{1}v = -\alpha_{2}v_{2} - \dots - \alpha_{n}v_{n} \\
\implies \alpha_{1}v \in sp(A) \\
\left\{\begin{array}{}
\alpha_{1}v \in sp(A) \\
v \not\in sp(A) \\
\end{array}\right. \implies \alpha_{1} = 0 \implies \alpha_{1} = \dots = \alpha_{n} = 0 \\
\implies \boxed{A \cup \Set{ v } \text{ is a linear independence}} \\
\\
2. \\
v \in A \implies v \in sp(A) \\
v \in A \implies (A \setminus \Set{ v }) \cup \Set{ v } = A \\
A \text{ is a linear independence} \implies A \setminus \Set{ v } \text{ is a linear independence} \\
(1) \implies v \not\in sp(A \setminus \Set{ v }) \\
\left\{\begin{array}{}
v \in sp(A) \\
v \not\in sp(A \setminus \Set{ v }) \\
\end{array}\right. \implies \boxed{sp(A) \neq sp(A \setminus \Set{ v })} \\
}
$$
---
