---
{"publish":true,"created":"16/11/24, 23:11","modified":"2025-11-21T21:10:02.050+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

$$
\text{Let $A, B, C$ be sets. Prove or disprove the following statements:}
$$
# 1a
$$
\displaylines{
A \triangle (B \cap C) = (A \triangle B) \cap (A \triangle C) \\
\\
\text{Disproof: } \\
\text{Let } A = C \neq \emptyset, B \cap C \neq C \\
\text{Then:} \\
A \triangle (B \cap C) \neq \emptyset \\
(A \triangle B) \cap (A \triangle C) = (A \triangle B) \cap \emptyset = \emptyset \\
\implies \boxed{A \triangle (B \cap C) \neq (A \triangle B) \cap (A \triangle C)} \\
\text{An example of such sets: } A = \{ 1,2 \}, B = \{ 1 \}, C = \{ 1,2 \} \\
}
$$
# 1b
$$
\displaylines{
A \triangle B = A^{c} \triangle B^{c} \\
\\
\text{Proof: } \\
A^{c} \triangle B^{c} = \{ x \mid x \in (A^{c} \setminus B^{c}) \lor x \in (B^{c} \setminus A^{c}) \} = \\
= \{ x \mid (x \in A^{c} \land x \not\in B^{c}) \lor (x \in B^{c} \land x \not\in A^{c}) \} = \\
= \{ x \in \mathbb{U} \mid (x \not\in A \land x \in B) \lor (x \not\in B \land x \in A) \} = \\
= \{ x \in \mathbb{U} \mid x \in (B \setminus A) \lor x \in (A \setminus B) \} = \{ x \mid x \in (B \setminus A) \lor x \in (A \setminus B) \} = A \triangle B \\
\implies \boxed{A \triangle B = A^{c} \triangle B^{c}} \\
}
$$
# 1c
$$
\displaylines{
A \cap ((B \cup A^{c}) \cap B^{c}) = \emptyset \\
\\
\text{Proof:} \\
A \cap ((B \cup A^{c}) \cap B^{c}) = A \cap ((B \cap B^{c}) \cup (A^{c} \cap B^{c})) = A \cap (\emptyset \cup (A^{c} \cap B^{c})) = \\
= A \cap (A^{c} \cap B^{c}) = (A \cap A^{c}) \cap B^{c} = \emptyset \cap B^{c} = \emptyset \\
\implies \boxed{A \cap ((B \cup A^{c}) \cap B^{c}) = \emptyset} \\
}
$$
# 1d
$$
\displaylines{
B \subseteq A \implies A \triangle B = A \setminus B \\
\\
\text{Proof:} \\
B \subseteq A \implies \forall x: x \in B \to x \in A \\
B \setminus A = \Set{ x | x \in B \land x \not\in A } \underset{ B \subseteq A }{ \subseteq } \set{ x | \underbrace{ x \in A \land x \not\in A }_{ F } } = \emptyset \\
B \setminus A \subseteq \emptyset \implies B \setminus A = \emptyset \\
\implies A \triangle B = (A \setminus B) \cup (B \setminus A) = (A \setminus B) \cup \emptyset = A \setminus B \\
\implies \boxed{A \triangle B = A \setminus B} \\
}
$$
# 1e
$$
\displaylines{
A \setminus (B \setminus C) = (A \setminus B) \setminus C \\
\\
\text{Disproof:} \\
\text{Let } A \neq \emptyset, A \neq B, B = C \neq \emptyset \\
\text{For example: } A = \{ 1, 2 \}, B = \{ 1 \}, C = \{ 1 \} \\
A \setminus (B \setminus C) = A \setminus \emptyset = A \\
(A \setminus B) \setminus C = \{ 2 \} \setminus \{ 1 \} = \{ 2 \} \\
\implies \boxed{A \setminus (B \setminus C) \neq (A \setminus B) \setminus C} \\
}
$$
---

# 2a
$$
\displaylines{
\text{Prove: For any sets } X, Y: \text{if } X \cap Y = \emptyset, \text{ then } X \triangle Y = X \cup Y \\
\\
\text{Proof:} \\
X \triangle Y = (X \cup Y) \setminus (X \cap Y) = (X \cup Y) \setminus \emptyset = X \cup Y \\
\implies \boxed{X \triangle Y = X \cup Y}
}
$$
# 2b
$$
\displaylines{
\text{Prove: For any sets } X, Y : \text{if } X \subseteq Y, \text{ then } X \cup (Y \setminus X) = Y \\
\\
\text{Proof:} \\
X \cup (Y \setminus X) = \{ a \mid a \in X \lor (a \in Y \land a \not\in X) \} = \\
= \{ a \mid (a \in X \lor a \in Y) \land \underbrace{ (a \in X \lor a \not\in X) }_{ T } \} = \{ a \mid a \in X \lor a \in Y \} \\
X \subseteq Y \iff \forall a : (a \in X \implies a \in Y) \\
\implies \{ a \mid (a \in X \lor a \in Y) \} = \{ a \mid a \in Y \cup a \in Y \} = Y \cup Y = Y \\
\implies \boxed{X \cup (Y \setminus X) = Y} \\
}
$$
# 2c
$$
\displaylines{
\text{Prove: For any sets } A, B : (A \triangle B) \cap (A \cap B) = \emptyset \\
\\
\text{Proof:} \\
(A \triangle B) \cap (A \cap B) = ((A \cup B) \setminus (A \cap B)) \cap (A \cap B) = \\
= \{ x \mid (x \in (A \cup B) \land x \not\in (A \cap B)) \land x \in (A \cap B) \} = \\
= \{ x \mid x \in (A \cup B) \land (x \not\in (A \cap B) \land x \in (A \cap B)) \} = \\
= \{ x \mid x \in (A \cup B) \land F \} = \{ x \mid F \} = \emptyset \\
\implies \boxed{(A \triangle B) \cap (A \cap B) = \emptyset} \\
}
$$
# 2d
$$
\displaylines{
\text{Prove: For any sets } A, B : (A \triangle B) \triangle (A \cap B) = A \cup B \\
\\
\text{Proof:} \\
(A \triangle B) \triangle (A \cap B) = ((A \triangle B) \cup (A \cap B)) \setminus \underbrace{ ((A \triangle B) \cap (A \cap B)) }_{ \emptyset, \text{ proved in 2c} } = \\
= (A \triangle B) \cup (A \cap B) = ((A \cup B) \setminus (A \cap B)) \cup (A \cap B) \\
\text{Let } X = A \cap B, Y = A \cup B \\
((A \cup B) \setminus (A \cap B)) \cup (A \cap B) = (Y \setminus X) \cup X \\
\text{By properties of inclusion: } \\
X = A \cap B \subseteq A \cup B = Y \implies X \subseteq Y \\
\implies (Y \setminus X) \cup X \underset{ \text{Proved in 2b} }{ = } Y \\
\implies ((A \cup B) \setminus (A \cap B)) \cup (A \cap B) = A \cup B \\
\implies \boxed{(A \triangle B) \triangle (A \cap B) = A \cup B} \\
}
$$
---

# 3a
$$
\displaylines{
\text{Prove: } \left( \bigcap_{i \in I} A_{i} \right)^{c} = \bigcup_{i \in I} A_{i}^{c} \\
\\
\text{Proof:} \\
\left( \bigcap_{i \in I} A_{i} \right)^{c} = \{ x \in \mathbb{U} \mid x \not\in \bigcap_{i \in I} A_{i} \} = \{ x \in \mathbb{U} \mid \lnot(\forall i \in I : x \in A_{i})\} = \\
= \{ x \in \mathbb{U} \mid \exists i \in I: x \not\in A_{i} \} = \{ x \mid \exists i \in I: x \in A_{i}^{c} \} = \bigcup_{i \in I} A_{i}^{c} \\
\implies \boxed{\left( \bigcap_{i \in I} A_{i} \right)^{c} = \bigcup_{i \in I} A_{i}^{c}} \\
}
$$
# 3b
$$
\displaylines{
\text{Prove: } \left( \bigcup_{i \in I} A_{i} \right)^{c} = \bigcap_{i \in I} A_{i}^{c} \\
\\
\text{Proof:} \\
\left( \bigcup_{i \in I} A_{i} \right)^{c} = \{ x \in \mathbb{U} \mid x \not\in \bigcup_{i \in I} A_{i} \} = \{ x \in \mathbb{U} \mid \lnot(\exists i \in I: x \in A_{i}) \} = \\
= \{ x \in \mathbb{U} \mid \forall i \in I: x \not\in A_{i} \} = \{ x \mid \forall i \in I: x \in A_{i}^{c} \} = \bigcap_{i \in I} A_{i}^{c} \\
\implies \boxed{\left( \bigcup_{i \in I} A_{i} \right)^{c} = \bigcap_{i \in I} A_{i}^{c}} \\
}
$$
---

$$
\displaylines{
\text{For all } n \in \mathbb{N} \text{, define:} \\
A_{n} = \{ n-1,n,n+1 \} \\
}
$$
# 4a
$$
\displaylines{
\mathbb{N}_{0} \text{ - according to Wikipedia, this denotion is a set of natural numbers and 0} \\
\bigcup_{n \in \mathbb{N}} A_{n} = \mathbb{N}_{0} \\
\text{Proof:} \\
1. \quad \bigcup_{n \in \mathbb{N}} A_{n} \subseteq \mathbb{N}_{0} \\
 \text{Let } x \in \bigcup_{n \in \mathbb{N}} A_{n} \\
 \text{Then, } \exists n \in \mathbb{N}: x \in A_{n} \iff \exists n \in \mathbb{N}: (x = n-1) \lor (x = n) \lor (x = n + 1) \\
 \\
1.1 \quad x = n - 1, x \text{ is a difference between a natural number and 1,} \space \\
\text{therefore it is either a natural number, or 0} \\
1.2 \quad x = n, x \text{ is a natural number} \quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad \\
1.3 \quad x = n + 1, x \text{ is a sum of two natural numbers,} \quad\quad\quad\quad\quad\quad\space\space \\
\text{therefore it is a natural number} \\
\\
 1.1, 1.2 \text{ and } 1.3 \implies x \in \mathbb{N}_{0} \implies \boxed{\bigcup_{n \in \mathbb{N}} A_{n} \subseteq \mathbb{N}_{0}} \\
 \\
2. \quad \mathbb{N}_{0} \subseteq \bigcup_{n \in \mathbb{N}} A_{n} \\
 \text{Let } x \in \mathbb{N}_{0} \\
 2.1 \quad x = 0, \text{ then } \exists n = 1: x \in A_{1} \implies x \in \bigcup_{n \in \mathbb{N}} A_{n} \space \\
 2.2 \quad x \in \mathbb{N}, \text{ then } \exists n = x: x \in A_{n} \implies x \in \bigcup_{n \in \mathbb{N}} A_{n} \\
 \\
 2.1 \text{ and } 2.2 \implies x \in \bigcup_{n \in \mathbb{N}} A_{n} \implies \boxed{\mathbb{N}_{0} \subseteq \bigcup_{n \in \mathbb{N}} A_{n}} \\
\\
1. \text{ and } 2. \implies \boxed{\bigcup_{n \in \mathbb{N}} A_{n} = \mathbb{N}_{0}} \\
}
$$
# 4b
$$
\displaylines{
\bigcap_{n \in \mathbb{N}} A_{n} = \emptyset \\
\text{Proof:} \\
\emptyset \text{ is a subset of any set} \implies \boxed{\emptyset \subseteq \bigcap_{n \in \mathbb{N}} A_{n}} \\
\\
\bigcap_{n \in \mathbb{N}} A_{n} \subseteq \emptyset \\
\text{Let } x \in \bigcap_{n \in \mathbb{N}} A_{n} \\
\text{Then } \forall n \in \mathbb{N}: x \in A_{n} \\
\text{Let } n = 1, \text{ then } x \in A_{1} = \{ 0,1,2 \} \\
\text{Now let } n = 4, \text{ then } x \in A_{4} = \{ 3,4,5 \} \\
\implies x \in A_{1} \land x \in A_{4} \implies x \in (A_{1} \cap A_{4}) \implies x \in \emptyset \\
\implies \boxed{\bigcap_{n \in \mathbb{N}} A_{n} \subseteq \emptyset} \\
\left( \emptyset \subseteq \bigcap_{n \in \mathbb{N}} A_{n} \right) \land \left( \bigcap_{n \in \mathbb{N}} A_{n} \subseteq \emptyset \right) \iff \boxed{\bigcap_{n \in \mathbb{N}} A_{n} = \emptyset} \\
}
$$
---

# 5a
$$
\displaylines{
\text{Prove or disprove: } P(A) \setminus P(B) \neq P(A \setminus B) \\
\\
\text{Proof:} \\
\forall C : \emptyset \in P(C) \implies \emptyset \not\in (P(A) \setminus P(B)) \\
\forall C : \emptyset \in P(C) \implies \emptyset \in P(A \setminus B) \\
\implies \boxed{P(A) \setminus P(B) \neq P(A \setminus B)} \\
}
$$
# 5b
$$
\displaylines{
\text{Prove or disprove: } P(A) \triangle P(B) = P(A \triangle B) \\
\\
\text{Disproof:} \\
\emptyset \not\in (P(A) \triangle P(B)) \\
\emptyset \in P(A \triangle B) \\
\text{Example: } \\
A = \emptyset, B = \emptyset \\
P(A) = P(B) = \{ \emptyset \} \\
P(A) \triangle P(B) = \emptyset \\
P(A \triangle B) = P(\triangle) = \{ \emptyset \} \\
\implies \boxed{P(A) \triangle P(B) \neq P(A \triangle B)} \\
}
$$
# 5c
$$
\displaylines{
\text{Prove or disprove: } A \cap P(A) = \emptyset \\
\\
\text{Disproof:} \\
\text{Example:} \\
A = \{ \emptyset \} \\
P(A) = \{ \emptyset, \{ \emptyset \} \} \\
A \cap P(A) = \{ \emptyset \} \neq \emptyset \\
\implies \boxed{A \cap P(A) \neq \emptyset} \\
}
$$
# 5d
$$
\displaylines{
\text{Prove or disprove: } P(A) \cap P(P(A)) \neq \emptyset \\
\\
\text{Proof:} \\
\forall C: \emptyset \in P(C) \implies \emptyset \in P(A) \land \emptyset \in P(P(A)) \\
\implies \emptyset \in P(A) \cap P(P(A)) \implies \boxed{P(A) \cap P(P(A)) \neq \emptyset} \\
}
$$
# 5e
$$
\displaylines{
\text{Prove or disprove: } A \subseteq B \iff P(A) \subseteq P(B) \\
\\
\text{Proof:} \\
1. \quad \text{Let } A \subseteq B \text{: } \\
D \in P(A) \iff D \subseteq A \implies D \subseteq B \iff D \in P(B) \\
(D \in P(A) \implies D \in P(B)) \implies \boxed{P(A) \subseteq P(B)} \\
\\
2. \quad \text{Let } P(A) \subseteq P(B) \text{: } \\
x \in A \iff \{ x \} \subseteq A \iff \{ x \} \in P(A) \implies \{ x \} \in P(B) \iff \{ x \} \subseteq B \iff x \in B \\
(x \in A \implies x \in B) \implies \boxed{A \subseteq B} \\
\\
1. \text{ and } 2. \implies \boxed{A \subseteq B \iff P(A) \subseteq P(B)} \\
}
$$
# 5f
$$
\displaylines{
\text{Prove or disprove: } P(A) \cap P(B) = \{ \emptyset \} \iff A \triangle B = A \cup B \\
\\
\text{Proof:} \\
1. \quad \text{Let } A \triangle B = A \cup B \\
P(A) \cap P(B) = \{ X \mid X \subseteq A \land X \subseteq B \} \\
A \triangle B = (A \cup B) \setminus (A \cap B) = A \cup B \\
\implies A \cap B = \emptyset \\
\text{Let } X \subseteq A, X \subseteq B \\
\forall x \in X: (x \in A \land x \in B) \\
\forall x \in X: x \in A \cap B \\
\forall x \in X: x \in \emptyset \implies X = \emptyset \implies \boxed{P(A) \cap P(B) = \{ \emptyset \}} \\
\\
2. \quad \text{Let } P(A) \cap P(B) = \{ \emptyset \} \\
\text{Let } X = A \cap B \\
X \subseteq A \land X \subseteq B \implies X \in P(A) \land X \in P(B) \\
\implies X \in (P(A) \cap P(B)) \implies X = \emptyset \\
A \triangle B = (A \cup B) \setminus (A \cap B) = (A \cup B) \setminus X = (A \cup B) \setminus \emptyset = A \cup B \\
\implies \boxed{A \triangle B = A \cup B} \\
\\
1. \text{ and } 2. \implies \boxed{P(A) \cap P(B) = \{ \emptyset \} \iff A \triangle B = A \cup B} \\
}
$$
---

$$
\displaylines{
\{ A_{n} \}_{n \in \mathbb{N}} \\
A_{n} = \{ k \in \mathbb{N} \mid 2 \leq k \leq 3n-2 \} \\
B_{n} = A_{n+1} \setminus A_{n} \\

}
$$
# 6a
$$
\displaylines{
A_{n+1} = \{ k \in \mathbb{N} \mid 2 \leq k \leq 3n + 1 \} = A_{n} \cup \{ 3n-1, 3n, 3n+1 \mid n \in \mathbb{N} \} \\
\implies B_{n} = \{ 3n-1, 3n, 3n+1 \mid n \in \mathbb{N} \} \\
\bigcup_{n \in \mathbb{N}} B_{n} = \mathbb{N} \setminus \{ 1 \} \\
\text{Proof:} \\
1. \quad \bigcup_{n \in \mathbb{N}} B_{n} \subseteq (\mathbb{N} \setminus \{ 1 \}) \\
 \text{Let } x \in \bigcup_{n \in \mathbb{N}} B_{n} \\
 \text{Then, } \exists n \in \mathbb{N}: x \in B_{n} \iff \exists n \in \mathbb{N}: (x = 3n-1) \lor (x = 3n) \lor (x = 3n+1) \\
1.1 \quad x = 3n - 1, x \text{ is a difference between a natural number} \quad\quad\quad \\
\text{bigger than 2, and 1, therefore it is a natural number bigger than 1} \\
1.2 \quad x = 3n, x \text{ is a natural number bigger than 1} \quad\quad\quad\quad\quad\quad\quad\quad \\
1.3 \quad x = 3n + 1, x \text{ is a sum of two natural numbers,} \quad\quad\quad\quad\quad\quad\space\space \\
\text{therefore it is a natural number bigger than 1} \\
 1.1, 1.2 \text{ and } 1.3 \implies x \in (\mathbb{N} \setminus \{ 1 \}) \implies \boxed{\bigcup_{n \in \mathbb{N}} B_{n} \subseteq (\mathbb{N} \setminus \{ 1 \})} \\
2. \quad (\mathbb{N} \setminus \{ 1 \}) \subseteq \bigcup_{n \in \mathbb{N}} B_{n} \\
 \text{Let } x \in \mathbb{N} \setminus \{ 1 \} \\
 2.1 \quad \text{If } x \equiv 0 \mod{3}, \text{ then } \exists n \in \mathbb{N}: x = 3n \quad\quad\quad\quad\quad\quad\quad\quad\space \\
 \implies x \in B_{n} \implies x \in \bigcup_{n \in \mathbb{N}} B_{n} \\
 2.2 \quad \text{If } x \equiv 1 \mod{3}, \text{ then } \exists n \in \mathbb{N}: x = 3n + 1 \quad\quad\quad\quad\quad\quad\space\space \\
 \implies x \in B_{n} \implies x \in \bigcup_{n \in \mathbb{N}} B_{n} \\
 2.3 \quad \text{If } x \equiv 2 \mod{3}, \text{ then } \exists n \in \mathbb{N}: x = 3n + 2 = 3(n+1) - 1 \\
 \implies x \in B_{n+1} \implies x \in \bigcup_{n \in \mathbb{N}} B_{n} \\
 2.1, 2.2 \text{ and } 2.3 \implies x \in \bigcup_{n \in \mathbb{N}} B_{n} \implies \boxed{(\mathbb{N} \setminus \{ 1 \}) \subseteq \bigcup_{n \in \mathbb{N}} B_{n}} \\
1. \text{ and } 2. \implies \boxed{\bigcup_{n \in \mathbb{N}} B_{n} = \mathbb{N} \setminus \{ 1 \}} \\
}
$$
# 6b
$$
\displaylines{
\text{Let } D_{n} = \mathbb{N} \setminus B_{n} \\
\bigcap_{n \in \mathbb{N}} D_{n} = \{ 1 \} \\
\\
\text{Proof:} \\
\text{Let domain of the complement be } \mathbb{N} \\
\text{Then } D_{n}^{c} = (\mathbb{N} \setminus B_{n})^{c} = B_{n} \\
\text{Given that } \bigcup_{n \in \mathbb{N}} B_{n} = \mathbb{N} \setminus \{ 1 \} \\
\text{As proved in 3a:}
\bigcup_{n \in \mathbb{N}} B_{n} = \bigcup_{n \in \mathbb{N}} D_{n}^{c} = \left( \bigcap_{n \in \mathbb{N}} D_{n} \right)^{c} \\
\implies \left( \bigcap_{n \in \mathbb{N}} D_{n} \right)^{c} = \mathbb{N} \setminus \{ 1 \} \implies \left( \left( \bigcap_{n \in \mathbb{N}} D_{n} \right)^{c} \right)^{c} = (\mathbb{N} \setminus \{ 1 \})^{c} = \{ 1 \} \\
\implies \boxed{\bigcap_{n \in \mathbb{N}} D_{n} = \{ 1 \}} \\
}
$$
---
