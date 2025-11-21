---
{"publish":true,"created":"11/11/24, 14:11","modified":"2025-11-21T21:10:13.999+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 3
## Empty set is a subset of any set #lemma 
$$
\text{Prove: } \emptyset \subseteq A
$$
$$
\text{Formalized statement: } \forall x: x \in \emptyset \to x \in A
$$
$$
x \in \emptyset \equiv False
$$
$$
\forall x: False \to x \in A
$$
$$
\forall x: True \implies \emptyset \subseteq A
$$
---
## Transitivity of subsets #lemma 
$$
\text{Prove: } A \subseteq B \text{ and } B \subseteq C \implies A \subseteq C
$$
$$
\text{Formalized statement: } \forall x: x \in A \to x \in C
$$
- $x \not\in A \implies \forall x: x \in A \to x \in C \equiv \forall x: False \to x \in C \equiv True$
- $x \in A \implies x \in B \implies x \in C \implies \forall x: x \in A \to x \in C \equiv True \to True \equiv True$
$$
\implies A \subseteq C
$$
---
### Equality of sets #definition
$$
A = B \leftrightarrow ((A \subseteq B) \land (B \subseteq A))
$$
---
### Exercise
$$
\displaylines{
\text{Let } A = \{ 2k - 1 | k \in \mathbb{Z} \} \\
\text{Let } B = \{ 2k + 1 | k \in \mathbb{Z} \} \\
\text{Prove: } A = B
}
$$
$$
\displaylines{
\text{Let } x \in A
\implies \exists k \in \mathbb{Z}: x = 2k - 1 = 2(k - 1) + 1 \\
k \in \mathbb{Z}
\implies k - 1 \in \mathbb{Z}
\implies \exists k' = k - 1 \in \mathbb{Z} : x = 2k' + 1
\implies \exists k' \in \mathbb{Z} : x \in B
\implies A \subseteq B
}
$$
$$
\displaylines{
\text{Let } x \in B
\implies \exists k \in \mathbb{Z}: x = 2k + 1 = 2(k + 1) - 1 \\
k \in \mathbb{Z}
\implies k + 1 \in \mathbb{Z}
\implies \exists k' = k + 1 \in \mathbb{Z} : x = 2k' - 1
\implies \exists k' \in \mathbb{Z} : x \in A
\implies B \subseteq A
}
$$
$$
(A \subseteq B) \land (B \subseteq A) \implies A = B 
$$
---
## Set operations #definition 
#### Intersection
$$
A \cap B = \forall x: x \in A \land x \in B
$$
#### Union
$$
A \cup B = \forall x: x \in A \lor x \in B
$$
#### Difference
$$
A \setminus B = \forall x: x \in A \land x \not\in B
$$
#### Symmetrical difference
$$
A \triangle B = \forall x: x \in (A \setminus B) \lor x \in (B \setminus A)
$$
#### Complement
$$
\displaylines{
\text{Domain: } \mathbb{U} \text{ (universal set)} \\
A^{c} = \{ x \in \mathbb{U} | x \not\in A \}
}
$$
---
### Properties of set operations #definition 
#### Idempotent law
$$
A \cup A = A = A \cap A
$$
$$
\displaylines{
A \cup A = \{ x | x \in A \lor x \in A \} = \{ x | x \in A \}
\implies A \cup A = A \\
A \cap A = \{ x | x \in A \land x \in A \} = \{ x | x \in A \}
\implies A \cap A = A
}
$$
#### Domination law
$$
A \cap \emptyset = \emptyset
$$
$$
A \cap \emptyset = \{ x | x \in A \land x \in \emptyset \} = \{ x | x \in A \land False \} = \{ x | False \} = \emptyset
$$
#### Identity law
$$
A \cup \emptyset = A
$$
$$
A \cup \emptyset = \{ x | x \in A \lor x \in \emptyset \} = \{ x | x \in A \lor False \} = \{ x | x \in A \} = A
$$
#### Commutative laws
$$
\displaylines{
A \cup B = B \cup A \\
A \cap B = B \cap A \\
A \triangle B = B \triangle A
}
$$
#### Associative laws
$$
\displaylines{
A \cup (B \cup C) = (A \cup B) \cup C \\
A \cap (B \cap C) = (A \cap B) \cap C \\
A \triangle (B \triangle C) = (A \triangle B) \triangle C
}
$$
#### Distributive laws
$$
\displaylines{
A \cap (B \cup C) = (A \cap B) \cup (A \cap C) \\
A \cup (B \cap C) = (A \cup B) \cap (A \cup C)
}
$$
#### Properties of inclusion
$$
\displaylines{
A \cap B \subseteq A \subseteq A \cup B \\
\emptyset \subseteq A \\
A \subseteq A \\
(A \subseteq C \land B \subseteq C) \to A \cup B \subseteq C
}
$$
#### Transitivity of inclusion
$$
(A \subseteq B \land B \subseteq C) \to A \subseteq C
$$
#### Property of symmetric difference
$$
A \triangle B = (A \cup B) \setminus (A \cap B)
$$
---
