---
{"publish":true,"created":"19/11/24, 14:11","modified":"2025-11-21T21:10:14.009+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 6
### Ordered pair #definition 
$$
\displaylines{
\text{Denotion: } (a, b) \\
(a, b) \neq (b, a) \\
(a, b) = \{ \{ a, b \text{ (elements of the pair)} \}, a \text{ (first item in the pair)}\} \\
(a, b) = (c, d) \iff (a=c \land b=d) \\
}
$$
---
### Cartesian product #definition 
$$
\displaylines{
A \times B = \{ (a, b) \mid a \in A, b \in B \} \\
}
$$
#### Note
$$
\text{In general } A \times B \neq B \times A
$$
##### Example
$$
\displaylines{
A = \{ a, b \}, B =  \{ 1, 2 \} \\
A \times B = \{ (a,1), (a,2), (b,1), (b,2) \} \\
B \times A = \{ (1,a), (1,b), (2,a), (2,b) \} \\
}
$$
#### Properties
$$
A \times \emptyset = \emptyset \times A = \emptyset
$$
$$
A \times (B \cup C) = (A \times B) \cup (A \times C)
$$
$$
(A \times B) \cup (C \times D) \subseteq (A \cup C) \times (B \cup D)
$$
$$
A \times B = B \times A \iff A = B
$$

---
### Exercise
$$
\displaylines{
\text{Prove or disprove: } A \times (B \cup C) = (A \times B) \cup (A \times C) \\
\\
(a, b) \in (A \times (B \cup C)) \iff a \in A \land (b \in B \lor b \in C) \iff \\
\iff (a \in A \land b \in B) \lor (a \in A \lor b \in C) \iff (a, b) \in ((A \times B) \cup (A \times C)) \\
\boxed{(a, b) \in (A \times (B \cup C)) \iff (a, b) \in ((A \times B) \cup (A \times C))} \\
}
$$
---
### Exercise
$$
\displaylines{
\text{Prove or disprove: } (A \times B) \cup (C \times D) \subseteq (A \cup C) \times (B \cup D) \\
\\
(a, b) \in ((A \times B) \cup (C \times D)) \iff (a \in A \land b \in B) \lor (a \in C \land b \in D) \iff \\
(a \in A \lor (a \in C \land b \in D)) \land (b \in B \lor (a \in C \land b \in D)) \iff \\
\iff (a \in (A \cup C) \land (a, b) \in (A \times D)) \land ((a, b) \in (C \times B) \land b \in (B \cup D)) \iff \\
\iff (a, b) \in ((A \cup C) \times (B \cup D)) \land (a, b) \in (A \times D) \land (a, b) \in (C \times B) \\
\implies (a, b) \in ((A \cup C) \times (B \cup D)) \\
(a, b) \in ((A \times B) \cup (C \times D)) \implies (a, b) \in ((A \cup C) \times (B \cup D)) \iff \\
\iff ((A \times B) \cup (C \times D)) \subseteq ((A \cup C) \times (B \cup D)) \\
}
$$
---
### Relation #definition 
$$
R \text{ is a relation from } A \text{ to } B \text{ iff } R \subseteq A \times B
$$
#### Note
$$
\text{Empty relation } R_{\emptyset} = \emptyset \text{ is also a relation, between any sets!}
$$
---
### Relation on set #definition 
$$
\text{Relation from } A \text{ to } A \text{ is called "Relation on $A$"}
$$
---
### Reflexive relation #definition 
$$
\forall a \in A : (a, a) \in R
$$
### Symmetric relation #definition 
$$
\forall a, b \in A : (a, b) \in R \implies (b, a) \in R
$$
### Transitive relation #definition 
$$
\forall a, b, c \in A : ((a,b) \in R \land (b, c) \in R) \implies (a, c) \in R
$$
---
### Exercise
$$
\displaylines{
R = \{ (a, b) \mid a, b \in \mathbb{Z} : a \leq b \} \\
\text{Reflexive? Yes}: a \leq a \\
\text{Symmetric? No}: 3 \leq 5 \land 5 \not\leq 3 \\
\text{Transitive? Yes}: a \leq b \land b \leq c \implies a \leq c \\
}
$$
---
### Exercise
$$
\displaylines{
R = \{ (a, b) \mid a, b \in \mathbb{Z} : a \mid b \} \\
\text{Reflexive?} \\
0 \nmid 0 \implies \text{Not reflexive} \\
\text{Symmetric?} \\
3 \mid 9, 9 \nmid 3 \implies \text{Not symmetric} \\
\text{Transitive?} \\
a \mid b, b \mid c \implies \frac{b}{a} \in \mathbb{Z}, \frac{c}{b} \in \mathbb{Z} \\
\frac{b}{a} \cdot \frac{c}{b} = \frac{c}{a} \in \mathbb{Z} \implies a \mid c \implies \text{Transitive} \\
}
$$
---
