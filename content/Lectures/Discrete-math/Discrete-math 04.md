---
{"publish":true,"created":"12/11/24, 14:11","modified":"2025-11-21T21:10:14.002+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 4
## Subset and intersection #lemma 
$$
\text{Prove: } A \subseteq B \leftrightarrow A \cap B = A
$$
$$
\displaylines{
\text{1. Prove: } A \subseteq B \to A \cap B = A \\
\text{1.a By properties of inclusion: } A \cap B \subseteq A \\
\text{1.b Prove: } A \subseteq A \cap B \\
\forall x \in A: x \in A \equiv x \in A \land x \in A \equiv x \in A \land x \in B \equiv x \in A \cap B \\
\implies \forall x \in A: x \in A \cap B \equiv A \subseteq A \cap B \\
\text{2. Prove: } A \cap B = A \to A \subseteq B \\
\forall x \in A: x \in A \equiv x \in A \land x \in B \equiv True \land x \in B \equiv x \in B \\
\implies A \subseteq B
}
$$
---
### Family of sets #definition 
$$
\displaylines{
\{ A_{i} \}_{i \in I} \text{ is a family (ccollection) of sets} \\
\text{For example: } \\
A_{1} = \{ 1, 2, 3 \}; A_{2} = \{ 3, 5 \}; A_{3} = \{ 3, 10 \} \\
\{ A_{i} \}_{i \in \{ 1, 2, 3 \}} = \{ A_{1}, A_{2}, A_{3} \}
}
$$
#### Intersection
$$
\bigcap_{i \in I} A_{i} = \{ x | \forall i \in I: x \in A_{i} \}
$$
#### Union
$$
\bigcup_{i \in I} A_{i} = \{ x | \exists i \in I: x \in A_{i} \}
$$
---
#### Exercise
$$
\displaylines{
\text{Let's define the family of sets } \{ A_{i} \}_{i \in \mathbb{N}} \text{ as following:} \\
\forall i \in \mathbb{N}: A_{i} = \{ i \in \mathbb{N} | i \leq x \}
}
$$
$$
\displaylines{
A_{1} = \mathbb{N} \\
A_{2} = \mathbb{N} \setminus \{ 1 \} \\
\dots
}
$$
$$
\text{Let's prove: } \bigcup_{i \in \mathbb{N}} A_{i} = \mathbb{N}
$$
$$
\displaylines{
\forall x \in \bigcup_{i \in N} A_{i} : \exists i \in \mathbb{N}: x \in A_{i} \to x \in \mathbb{N} \implies \bigcup_{i \in N} A_{i} \subseteq \mathbb{N} \\
\\
\forall x \in \mathbb{N} : \exists i = 1: A_{i} = \mathbb{N} \land x \in A_{i} \implies \mathbb{N} \subseteq \bigcup_{i \in N} A_{i}
}
$$
$$
\text{Let's prove: } \bigcap_{i \in \mathbb{N}} A_{i} = \emptyset
$$
$$
\displaylines{
\text{Suppose: } \exists x: x \in \bigcap_{i \in \mathbb{N}} A_{i} \\
\text{By definition of } \{ A_{i} \} \text{: } x \not\in A_{x+1} \implies x \not\in \bigcap_{i \in \mathbb{N}} A_{i}
}
$$
---
### Power Set #definition 
$$
P(A) = \{ X | X \subseteq A \}
$$
$$
\forall X: X \in P(A) \leftrightarrow X \subseteq A
$$
$$
P(\{ 1, 2 \}) = \{ \emptyset, \{ 1 \}, \{ 2 \}, \{ 1, 2 \} \}
$$
$$
P(\emptyset) = \{ \emptyset \}
$$
$$
P(\{ \emptyset \}) = \{ \emptyset, \{ \emptyset \} \}
$$
---
#### Exercise
$$
\text{Prove: } A \subseteq B \leftrightarrow P(A) \subseteq P(B)
$$
$$
\displaylines{
\text{Let } A \subseteq B \text{: } \\
\forall D \in P(A) : D \subseteq A \to D \subseteq B \equiv D \in P(B)
\implies P(A) \subseteq P(B) \\
\\
\text{Let } P(A) \subseteq P(B) \text{: } \\
\forall x \in A : \{ x \} \subseteq A \equiv \{ x \} \in P(A) \to \{ x \} \in P(B) \equiv \{ x \} \subseteq B \equiv x \in B
\implies A \subseteq B
}
$$
---
