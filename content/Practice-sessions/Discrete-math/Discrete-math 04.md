---
{"publish":true,"created":"26/11/24, 16:11","modified":"2026-03-24T14:58:58.032+02:00","tags":["Academia","Practice","Discrete-math"],"cssclasses":""}
---

# Discrete-math 4
## Cartesian product
$$
\displaylines{
A \times B = \{ (a, b) \mid a \in A, b \in B \} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove: } A \times (B \cap C) = (A \times B) \cap (A \times C) \\
\\
\text{Proof:} \\
(a, b) \in A \times (B \cap C) \iff a \in A, b \in B \cap C \iff a \in A \land b \in B \land b \in C \\
\iff a \in A \land b \in B \land a \in A \land b \in C \iff (a \in A \land b \in B) \land (a \in A \land b \in C) \\
\iff (a, b) \in (A \times B) \land (a, b) \in (A \times C) \iff \boxed{(a, b) \in (A \times B) \cap (A \times C)} \\
}
$$
---
## Relation
$$
R \text{ over } A, B : R \subseteq (A \times B) \\
$$
---
## Properties of relation
### Reflexive
$$
\forall a \in A : (a, a) \in R
$$
### Symmetric
$$
\forall a, b \in A : (a, b) \in R \implies (b, a) \in R
$$
### Transitive
$$
\forall a, b, c \in A : ((a,b) \in R \land (b, c) \in R) \implies (a, c) \in R
$$
---
