---
{"publish":true,"created":"25/11/24, 14:11","modified":"2025-11-21T21:10:14.014+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 7
## Equivalence relation #definition 
$$
\text{Relation } R \text{ is called equivalence relation if it is Reflexive, Symmetric and Transitive}
$$
## Modular relation
$$
\displaylines{
\forall a,b,c \in \mathbb{Z} : a \equiv_{c} b \iff c \mid (b - a) \iff k = \frac{b-a}{c} \in \mathbb{Z} \\
\\
\text{Reflexive?} \\
a \equiv_{c} a \iff c \mid (a-a) \iff c \mid 0 \iff T \\
\text{Symmetric?} \\
a \equiv_{c} b \iff c \mid (b - a) \iff k_{1} = \frac{b-a}{c} \in \mathbb{Z} \iff k_{2} = -k_{1} = \frac{a-b}{c} \in \mathbb{Z} \iff b \equiv_{c} a \\
\text{Transitive?} \\
a \equiv_{c} b \land b \equiv_{c} d \iff c \mid (b - a) \land c \mid (d -b) \iff k_{1} = \frac{b-a}{c} \in \mathbb{Z}, k_{2} = \frac{d-b}{c} \in \mathbb{Z} \\
\iff k = k_{1}+k_{2} = \frac{d-a}{c} \in \mathbb{Z} \iff a \equiv_{c} d \\
}
$$
---
## Equivalence classes #definition 
$$
\displaylines{
\text{Let } R \text{ be an equivalence relation on set } A, \text{ and } a \in A \\
[a]_{R} = \{ b \in A \mid (a, b) \in R \} \\
}
$$
## Quotient set #definition 
$$
\displaylines{
{^{\displaystyle A}}\Big/{_{\displaystyle R}}  = \{ [a]_{R} \mid a \in A \} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Define } {^{\displaystyle \mathbb{Z}}}\Big/{_{\displaystyle \equiv_{3}}}  \\
\\
[0]_{\equiv_{3}} = \{ b \in \mathbb{Z} \mid 0\equiv_{3}b \} = \left\{  b \in \mathbb{Z} \mid \frac{b-0}{3}=k \in \mathbb{Z} \right\} = \{ 3k \mid k \in \mathbb{Z} \} \\
[1]_{\equiv_{3}} = \{ 3k+1 \mid k \in \mathbb{Z} \} \\
[2]_{\equiv_{3}} = \{ 3k+2 \mid k \in \mathbb{Z} \} \\
\implies {^{\displaystyle \mathbb{Z}}}\Big/{_{\displaystyle \equiv_{3}}}  = \{ [0]_{\equiv_{3}}, [1]_{\equiv_{3}}, [2]_{\equiv_{3}} \} \\
}
$$
---
## Properties of equivalence classes #lemma 
$$
\displaylines{
x \in [y]_{R} \iff [x]_{R} = [y]_{R} \\
\\
\text{Proof:} \\
1. \quad x \in [y]_{R} \quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad \\
1.1 \quad \text{Let } z \in [x]_{R} \quad\quad\quad\quad\quad \\
\text{Then } (x, z) \in R \\
x \in [y]_{R} \implies (y, x) \in R \\
(y, x) \in R \land (x, z) \in R \underset{ \text{Transitive} }{ \implies } (y, z) \in R \iff z \in [y]_{R} \\
1.2 \quad \text{Let } z \in [y]_{R} \quad\quad\quad\quad\quad \\
\text{Then } (y, z) \in R \\
x \in [y]_{R} \implies (y, x) \in R \underset{ \text{Symmetric} }{ \implies } (x, y) \in R \\
(x, y) \in R \land (y, z) \in R \underset{ \text{Transitive} }{ \implies } (x, z) \in R \iff z \in [x]_{R} \\
2. \quad [x]_{R} = [y]_{R} \quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad \\
[x]_{R} = [y]_{R} \underset{ \text{Reflexive} }{ \implies } x \in [x]_{R} = [y]_{R} \implies x \in [y]_{R} \\
\\
1. \text{ and } 2. \implies \boxed{x \in [y]_{R} \iff [x]_{R} = [y]_{R}} \\
}
$$
---
## Partition of a set #definition 
$$
\displaylines{
& \text{Family } \Big\{ A_{i} \Big\}_{i \in I} \text{ is a partition of a set } A \text{ if:} \\
1. & \forall i \in I: A_{i} \neq \emptyset \\
2. & \forall i, j \in I: A_{i} \neq A_{j} \to A_{i} \cap A_{j} = \emptyset \\
3. & \bigcup_{i \in I} A_{i} = A \\
}
$$
---
## Example
$$
\displaylines{
{^{\displaystyle \mathbb{Z}}}\Big/{_{\displaystyle \equiv_{3}}} = \{ [0]_{\equiv_{3}}, [1]_{\equiv_{3}}, [2]_{\equiv_{3}} \} \\
\\
{^{\displaystyle \mathbb{Z} }}\Big/{_{\displaystyle \equiv_{3}}} \text{ is a partition of } \mathbb{Z} \\
}
$$
---
