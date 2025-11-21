---
{"publish":true,"created":"11/02/25, 19:02","modified":"2025-11-21T21:10:14.088+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# 5
$$
\displaylines{
\text{Let } A \text{ be a set} \\
\text{Let } R \text{ be a relation on } A \\
\text{Let } \alpha \text{ be some property of relations on } A \\
S \text{ is called } \alpha \text{-closure} \text{ of } R \text{ if:} \\
1. \quad S \text{ satisfies property } \alpha \\
2. \quad R \subseteq S \\
3. \quad \forall \text{ relations } K \text{ on } A \text{ that satisfy } \alpha: R \subseteq K \implies S \subseteq K \\
\\
\alpha \text{ is called saved under intersecion in} A \text{ if} \\
\forall K \subseteq \Set{ R | R \text{ satisfies } \alpha \text{ on } A } \neq \emptyset: \bigcap_{R \in K} R \text{ satisfies } \alpha \\
}
$$
## 5a
$$
\displaylines{
\text{Let } A = \Set{ 1, 2, 3, 4 } \\
\text{Let } R = \Set{ (1, 2), (2, 3), (3, 4) } \\
\text{Find transitivity-closure of } R \\
\\
\text{Solution: } \\
S = \Set{ (1, 2), (2, 3), (1, 3), (3, 4), (1, 4), (2, 4) } \\
}
$$
## 5b
$$
\displaylines{
\text{Let } A \text{ be a set} \\
\text{Let } \alpha \text{ be a property of relations on } A \\
\text{Let } R \text{ be a relation satisfying } \alpha \\
\text{Prove: } \alpha\text{-closure of } R \text{ is } R \text{ itself} \\
\\
\text{Proof:} \\
\text{Let } S \neq R \text{ be an } \alpha \text{-closure of } R \\
\implies R \subseteq S \implies R \subset S \\
R \text{ satisfies } \alpha \text{ and } R \subseteq R \implies S \subseteq R - \text{Contradiction!} \\
\implies \boxed{ R \text{ is an } \alpha\text{-closure of } R } \\
}
$$
## 5c
$$
\displaylines{
\text{Let } A \text{ be a set} \\
\text{Let } \alpha \text{ be a property of relations on } A \\
\text{Let } R \text{ be a relation on } A \\
\text{Let } T = \Set{ S | R \subseteq S : S \text{ satisfies } \alpha }, T \neq \emptyset \\
\text{Prove: } \alpha \text{ is saved under intersection in } A \implies \bigcap_{S \in T} S \text{ is an } \alpha\text{-closure of } R \\
\\
\text{Proof:} \\
\alpha \text{ is saved under intersection in } A \\
\implies \forall K \subseteq \Set{ R | R \text{ satisfies } \alpha } \neq \emptyset: \bigcap_{R \in K} R \text{ satisfies } \alpha \\
T \subseteq \Set{ R | R \text{ satisfies } \alpha } \implies \boxed{ \bigcap_{S \in T} S \text{ satisfies } \alpha } \\
\text{Let } x \in R \\
\forall S \in T: R \subseteq S \implies x \in S \implies x \in \bigcap_{S \in T} S \implies \boxed{ R \subseteq \bigcap_{S \in T} S } \\
\text{Let } X: R \subseteq X \text{ and } X \text{ satisfies } \alpha \\
\implies X \in T \implies \boxed{ \bigcap_{S \in T} S \subseteq X } \\
\implies \boxed{ \bigcap_{S \in T} S \text{ is an } \alpha\text{-closure of } R } \\
}
$$
$$
\displaylines{
f, g: \mathbb{N} \to \mathbb{N} \\
f(n) = n + 1 \implies f \text{ is injective} \\
g(n) = \begin{cases}
n - 1 & n > 1 \\
1 & n = 1 \\
\end{cases} \\
g(1) = g(2) = 1 \implies g \text{ is not injective} \\
g(f(n)) = g(n+1) = n + 1 - 1 = n \implies (g \circ f) \text{ is injective} \\
}
$$