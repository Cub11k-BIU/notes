---
{"publish":true,"created":"26/11/24, 14:11","modified":"2025-11-21T21:10:14.017+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 8
## Equivalence relations
## Quotient set is a partition #theorem 
$$
\displaylines{
& \text{Let } R \text{ be an equivalence relation on } A \\
& \text{Then } {^{\displaystyle A}}\Big/{_{\displaystyle R}} \text{ is a partition of } A \\
}
$$
$$
\displaylines{
& \text{Proof:} \\
1. & \forall X \in {^{\displaystyle A}}\Big/{_{\displaystyle R}} : A_{R} \neq \emptyset \\
& \text{Let } X \in {^{\displaystyle A}}\Big/{_{\displaystyle R}} \\
& \text{Then } \exists a \in A: X = [a]_{R} \\
& R \text{ is reflexive} \implies (a, a) \in R \implies a \in [a]_{R} \implies [a]_{R} \neq \emptyset \implies X \neq \emptyset \\
& \implies \boxed{\forall X \in {^{\displaystyle A}}\Big/{_{\displaystyle R}} : A_{R} \neq \emptyset} \\
2. & \forall X,Y \in {^{\displaystyle A}}\Big/{_{\displaystyle R}} : X \neq Y \to X \cap Y = \emptyset \\
& \text{Let } X, Y \in {^{\displaystyle A}}\Big/{_{\displaystyle R}} \\
& \text{Then } \exists x, y \in A: X = [x]_{R}, Y = [y]_{R} \\
& \text{Let also } X \neq Y, X \cap Y \neq \emptyset \\
& \text{Then } \exists z \in X \cap Y \iff z \in [x]_{R} \land z \in [y]_{R} \\
& z \in [x]_{R} \implies [z]_{R} = [x]_{R} \\
& z \in [y]_{R} \implies [z]_{R} = [y]_{R} \\
& z \in [x]_{R} \land z \in [y]_{R} \implies [x]_{R} = [y]_{R} \implies X = Y - \text{Contradiction!} \\
& \implies \boxed{\forall X, Y \in {^{\displaystyle A}}\Big/{_{\displaystyle R}} : X \neq Y \to X \cap Y = \emptyset} \\
3. & \bigcup {^{\displaystyle A}}\Big/{_{\displaystyle R}} = A \\
\quad\quad\quad 3.1 & \bigcup {^{\displaystyle A}}\Big/{_{\displaystyle R}} \subseteq A \\
& \text{Let } X \in \bigcup {^{\displaystyle A}}\Big/{_{\displaystyle R}} \\
& \text{Then } \exists a \in A: X = [a]_{R} \\
& \text{By definition: } [a]_{R} \subseteq A \implies X \subseteq A \\
& \implies \forall X \in \bigcup {^{\displaystyle A}}\Big/{_{\displaystyle R}} : X \subseteq A \implies \boxed{\bigcup {^{\displaystyle A}}\Big/{_{\displaystyle R}} \subseteq A} \\
\quad\quad\quad 3.2 & A \subseteq \bigcup {^{\displaystyle A}}\Big/{_{\displaystyle R}} \\
& \text{Let } x \in A \\
& R \text{ is reflexive} \implies (x, x) \in R \implies x \in [x]_{R} \\ & [x]_{R} \in \bigcup {^{\displaystyle A}}\Big/{_{\displaystyle R}} \implies x \in \bigcup {^{\displaystyle A}}\Big/{_{\displaystyle R}} \implies \boxed{A \subseteq \bigcup {^{\displaystyle A}}\Big/{_{\displaystyle R}}} \\
& 3.1 \text{ and } 3.2 \implies \boxed{\bigcup {^{\displaystyle A}}\Big/{_{\displaystyle R}} = A} \\
& 1., 2. \text{ and } 3. \implies \boxed{{^{\displaystyle A}}\Big/{_{\displaystyle R}} \text{ is a partition of } A} \\
}
$$
---
## Existence of equivalence relation based on partition #theorem 
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
\text{Let } x \in A \\
\text{By definition of partition: } x \in \bigcup_{i \in I} A_{i} \iff \exists i \in I: x \in A_{i} \\
\implies \exists i \in I: (x, x) \in (A_{i} \times A_{i}) \implies \forall x \in A: (x, x) \in R \iff \boxed{R \text{ is reflexive}} \\
\\
\text{Let } x, y \in A: (x, y) \in R \\
\text{Then } (x, y) \in R \implies \exists i \in I: (x, y) \in (A_{i} \times A_{i}) \implies \exists i \in I: x \in A_{i} \land y \in A_{i} \\
\implies \exists i \in I: y \in A_{i} \land x \in A_{i} \implies \exists i \in I: (y, x) \in (A_{i} \times A_{i}) \\
\implies (y, x) \in R \implies \boxed{R \text{ is symmetric}} \\
\\
\text{Let } x, y, z \in A: (x, y) \in R \land (y, z) \in R \\
\text{Then } \exists i \in I: (x, y) \in (A_{i} \times A_{i}) \iff \exists i \in I: x \in A_{i} \land y \in A_{i} \\
\text{And also } \exists j \in I: (y, z) \in (A_{j} \times A_{j}) \iff \exists j \in I: y \in A_{j} \land z \in A_{j} \\
\text{By definition of partition: } y \in A_{i} \land y \in A_{j} \implies A_{i} = A_{j} \\
\implies \exists i \in I: x \in A_{i} \land y \in A_{i} \land z \in A_{i} \implies \exists i \in I: x \in A_{i} \land z \in A_{i} \\
\iff \exists i \in I: (x, z) \in (A_{i} \times A_{i}) \implies (x, z) \in R \implies \boxed{R \text{ is transitive}} \\
\\
R \text{ is reflexive, symmetric and transitive} \iff \boxed{R \text{ is an equivalence relation}} \\
\\
}
$$
$$
\displaylines{
\text{Let us now prove that } {^{\displaystyle A}}\Big/{_{\displaystyle R}} = \Big\{ A_{i} \Big\}_{i \in I} \\
\text{Proof in lecture 9} \\
}
$$
---
