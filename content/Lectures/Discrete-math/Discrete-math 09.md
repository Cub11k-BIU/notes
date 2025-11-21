---
{"publish":true,"created":"02/12/24, 14:12","modified":"2025-11-21T21:10:14.020+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 9
## Existence of equivalence relation based on partition (continued) #theorem 
$$
\displaylines{
\text{Let } \Big\{ A_{i} \Big\}_{i \in I} \text{ be a partition of } A \\
\text{Then there is an equivalence relation } R : {^{\displaystyle A}}\Big/{_{\displaystyle R}} = \Big\{ A_{i} \Big\}_{i \in I} \\
\\
\text{Proof:} \\
\text{Let's define } R \text{ as following: } \\
R = \{ (a, b) \mid \exists i \in I: a \in A_{i} \land b \in A_{i} \} \\
\text{Let us rephrase: } R = \bigcup_{i \in I} (A_{i} \times A_{i}) \\
\text{Let us prove that } R \text{ is an equivalence relation: } \\
\text{Proof in lecture 8} \implies \boxed{R \text{ is an equivalence relation}} \\
\text{Let us prove the following:} \\
\forall A_{i} \in \Set{ A_{i} }_{i \in I} : \forall a \in A_{i} : [a]_{R} = A_{i} \\
\text{Let } y \in [a]_{R}, a \in A_{i} \\
\text{Then } (a, y) \in R \implies \exists j \in I: (a, y) \in A_{j} \times A_{j} \iff \exists j \in I: a \in A_{j} \land y \in A_{j} \\
a \in A_{i} \land a \in A_{j} \implies A_{i} \cap A_{j} \neq \emptyset \underset{ \text{By definition of partition} }{ \implies } A_{i} = A_{j} \\ \implies y \in A_{i} \implies \boxed{\forall A_{i} \in \Set{ A_{i} }_{i \in I} : \forall a \in A_{i} : [a]_{R} \subseteq A_{i}} \quad (1) \\
\text{Let } y \in A_{i} \\
a \in A_{i} \land y \in A_{i} \implies (a, y) \in A_{i} \times A_{i} \implies (a, y) \in \bigcup_{i \in I} A_{i} \times A_{i} = R \\
\implies y \in [a]_{R} \implies \boxed{\forall A_{i} \in \Set{ A_{i} }_{i \in I} : \forall a \in A_{i} : [a]_{R} \supseteq A_{i}} \quad (2) \\
(1) \text{ and } (2) \implies \boxed{\forall A_{i} \in \Set{ A_{i} }_{i \in I} : \forall a \in A_{i} : [a]_{R} = A_{i}} \quad (3) \\
}
$$
$$
\displaylines{
\text{Let us now prove that } {^{\displaystyle A}}\Big/{_{\displaystyle R}} = \Big\{ A_{i} \Big\}_{i \in I} \\
\text{Let } A_{r} \in \Set{ A_{i} }_{i \in I} \\
\text{By definition of partition: } A_{r} \neq \emptyset \implies \exists a \in A: a \in A_{r} \implies A_{r} = [a]_{R} \\
\underset{ \text{By definition of quotient set} }{ \implies } A_{r} \in {^{\displaystyle A}}\Big/{_{\displaystyle R}} \implies \boxed{\Set{ A_{i} }_{i \in I} \subseteq {^{\displaystyle A}}\Big/{_{\displaystyle R}}} \quad (4) \\
\text{Let } X \in {^{\displaystyle A}}\Big/{_{\displaystyle R}} \\
\text{By definition of quotient set: } \exists a \in A : X = [a]_{R} \\
\text{By definition of partition: } a \in A \implies \exists i \in I: a \in A_{i} \\
\underset{ (3) }{ \implies } A_{i} = [a]_{R} \implies X = A_{i} \implies X \in \Set{ A_{i} }_{i \in I} \\
\implies \boxed{\Set{ A_{i} }_{i \in I} \supseteq {^{\displaystyle A}}\Big/{_{\displaystyle R}}} \quad (5) \\
(4) \text{ and } (5) \implies \boxed{{^{\displaystyle A}}\Big/{_{\displaystyle R}} = \Set{ A_{i} }_{i \in I}} \\
}
$$
---
## Fact
$$
\displaylines{
\text{There is 1-to-1 correspondence from equivalence relations to partitions of some set } A \\
\implies \text{Number of equivalence relations on } A \text{ is equal to the number of partitions of } A \\
}
$$
---
## Example
$$
\displaylines{
\text{How many equivalence relations are there on set } A = \Set{ 1, 2, 3 } \\
\text{Partitions of } A \\
\begin{array}{}
1. &  \Set{ \Set{ 1, 2, 3 } } \\
2. &  \Set{ \Set{ 1 }, \Set{ 2, 3 } } \\
3. &  \Set{ \Set{ 2 }, \Set{ 1, 3 } } \\
4. &  \Set{ \Set{ 3 }, \Set{ 1, 2 } } \\
5. &  \Set{ \Set{ 1 }, \Set{ 2 }, \Set{ 3 } } \\
\end{array} \\
}
$$
---
## Ordering relations #definition 
$$
\displaylines{
\text{Relation } R \text{ on set } A \text{ is called anti-symmetric,} \\
\text{if } \forall a, b \in A: ((a, b) \in R \land (b, a) \in R) \to a = b \\
}
$$
$$
\displaylines{
\text{Relation } R \text{ on set } A \text{ is called ordering relation,} \\
\text{if it is reflexive, anti-symmetric and transitive} \\
}
$$
---
## Partial ordering relation #definition 
$$
\displaylines{
R \text{ is ordering relation} \implies (A, R) - \text{partially ordered set} \\
\text{And } R \text{ can also be called partial ordering relation} \\
}
$$
## Total ordering relation (linear) #definition
$$
\displaylines{
\text{In addition to partial ordering, } \forall a, b \in A: (a, b) \in R \lor (b, a) \in R \\
(A, R) - \text{totally ordered set} \\
}
$$
---
## Example - "Divides" relation
$$
\displaylines{
\forall a, b \in \mathbb{N}: a \mid b \iff \exists k \in \mathbb{N}: \frac{b}{a} = k \\
\text{Reflexive: } \forall n \in \mathbb{N}: n \mid n \\
\text{Anti-symmetric: } \forall a, b \in \mathbb{N}: (a \mid b \land b \mid a) \implies a = b \\
\text{Transitive: } \forall a, b, c \in \mathbb{N}: (a \mid b \land b \mid c) \implies a \mid c \\
\text{Partial: } 3 \not\mid 5 \land 5 \not\mid 3 \\
}
$$
---
## Example - "Lexicographic order" relation
$$
\displaylines{
\forall (a, b), (c, d) \in A: (a, b) \preccurlyeq_{lex} (c, d) \iff (a < c) \lor (a = c \land b \leq d) \\
\text{Lexicographic order is a total ordering relation} \\
}
$$
---
