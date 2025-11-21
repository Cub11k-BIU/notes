---
{"publish":true,"created":"27/01/25, 14:01","modified":"2025-11-21T21:10:14.068+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 24
## Cardinality #definition
$$
\displaylines{
\text{Sets } A, B \text{ are said to have the same cardinality (size, to some extent) iff there exists} \\
\text{a bijective function } f: A \to B \\
\text{Denoted as } A \sim B \text{ or } \lvert A \rvert = \lvert B \rvert \\
}
$$
## Finite sets #definition 
$$
\displaylines{
\text{For each } n \in \mathbb{N} \\
\text{Define } I_{n} = \Set{ 1, 2, \dots, n } \\
I_{0} = \Set{  } = \emptyset \\
\text{Set } A \text{ is called finite iff there exists } n \in \mathbb{N} \cup \Set{ 0 } \\
\text{such that } A \sim I_{n} \\
\text{In this case, we denote it as } \lvert A \rvert = n \\
\text{If there is no such } n, \text{ then } A \text{ is called an infinite set} \\
}
$$
## Relation "have the same cardinality" #definition 
$$
\displaylines{
\text{Let } \sim \text{be a relation on some set of sets} \\
\sim \text{ is reflexive, } \forall A \in X: A \sim A, \text{ we use } I_{A}: A \to A \text{ to show it} \\
\sim \text{ is symmetric, } A \sim B \implies B \sim A, \text{we use } f^{-1}: B \to A \text{ to show this} \\
\sim \text{ is transitive, } A \sim B \land B \sim C \implies A \sim C, \text{ we use } (g \circ f): A \to C \text{ to show this} \\
\implies \sim \text{ is an equivalence relation} \\
}
$$
---
## Naturals and Integers #lemma 
$$
\displaylines{
\mathbb{Z} \sim \mathbb{N} \\
\\
\text{Proof:} \\
\text{Let } f: \mathbb{Z} \to \mathbb{N}, f(z) = \begin{cases}
2z + 1 & z \geq 0 \\
-2z & z < 0 \\
\end{cases} \\
\text{Let } g: \mathbb{N} \to \mathbb{Z}, g(n) = \begin{cases}
-k & n = 2k, k \in \mathbb{N} \\
k & n = 2k + 1, k \in \mathbb{N} \cup \Set{ 0 } \\
\end{cases} \\
(g \circ f)(z) = g(f(z)) = z \implies (g \circ f) = I_{\mathbb{Z}} \\
(f \circ g)(n) = f(g(n)) = n \implies (f \circ g) = I_{\mathbb{N}} \\
}
$$
---
## Naturals and Natural pairs #lemma 
$$
\displaylines{
\mathbb{N} \times \mathbb{N} \sim \mathbb{N} \\
\\
\text{Proof:} \\
\text{Let } \mathbb{N} \times \mathbb{N} \text{ be an infinite chess-board:} \\
\left(\begin{array}{c|c}
 & 1 & 2 & 3 & 4 & \dots \\
1 & \cancel{ (1,1) } & \cancel{ (1, 2) } & \cancel{ (1, 3) } & \cancel{ (1, 4) } & \dots \\
2 & \cancel{ (2,1) } & \cancel{ (2, 2) } & \cancel{ (2, 3) } & \dots & \dots \\
3 & \cancel{ (3,1) } & \cancel{ (3, 2) } & \dots & \dots & \dots \\
4 & \cancel{ (4, 1) } & \dots & \dots & \dots & \dots \\
\end{array}\right) \\
\text{Let us count pairs by diagonals:} \\
(1, 1) = 1 \\
(2, 1) = 2, (1, 2) = 3 \\
(1, 3) = 4, (2, 2) = 5, (3, 1) = 6 \\
(4, 1) = 7, (3, 2) = 8, (2, 3) = 9, (1, 4) = 10 \\
\dots \\
\text{We can get to each pair in a finite number of steps} \\
\implies \mathbb{N} \times \mathbb{N} \sim \mathbb{N} \\
\\
\text{Formal function:} \\
f((n, m)) = \frac{1}{2}(n+m-1)(n+m) \\
}
$$
---
## Countable set #definition 
$$
\displaylines{
\text{Set } A \text{ is called countable if it is finite or } A \sim \mathbb{N} \\
\text{Otherwise } A \text{ is not countable} \\
\text{Cardinality of } \mathbb{N} \text{ is denoted as } \lvert \mathbb{N} \rvert = \aleph_{0} \\
}
$$
---
## Dominant set #definition 
$$
\displaylines{
\text{Let } A, B \text{ be sets} \\
\lvert A \rvert \leq \lvert B \rvert \text{ iff exists } f: A \to B \text{ which is injective} \\
\\
\text{This is equivalent (without proof) to:} \\
\lvert A \rvert \leq \lvert B \rvert \text{ iff exists } g: B \to A \text{ which is surjective} \\
}
$$
---
$$
\displaylines{
\lvert \mathbb{N} \rvert < \lvert \mathbb{R} \rvert \\
\text{And is denoted as: } \lvert \mathbb{R} \rvert = \aleph_{1} \\
\lvert \mathbb{R} \rvert < \lvert P(\mathbb{R}) \rvert = \aleph_{2} \\
\lvert P(\mathbb{R}) \rvert < \lvert P(P(\mathbb{R})) \rvert = \aleph_{3} \\
\text{And so on} \\
}
$$
---
## Cantor's theorem #theorem 
$$
\displaylines{
\text{Let } A \text{ be a set} \\
\text{Then } \lvert A \rvert < \lvert P(A) \rvert \\
\\
\text{Proof:} \\
\text{Let } g: A \to P(A), g(a) = \Set{ a } \\
g \text{ is injective} \implies \lvert A \rvert \leq \lvert P(A) \rvert \\
\\
\text{Now, let } f: A \to P(A) \text{ be a bijection} \\
\text{Let } B = \Set{ a \in A | a \not\in f(a) } \\
B \subseteq A \implies B \in P(A) \\
\implies \exists x \in A: f(x) = B \\
\text{Case 1. } x \in B \\
x \in B \implies x \not\in f(x) = B \implies x \not\in B - \text{ Contradiction!} \\
\text{Case 2. } x \not\in B \\
x \not\in B \implies x \not\in f(x) \implies x \in B - \text{ Contradiction!} \\
\implies \not\exists x \in A: f(x) = B \implies f \text{ is not surjective} \implies \not\exists f: A \to P(A) \text{ that is a bijection} \\
\implies \lvert A \rvert \neq \lvert P(A) \rvert \implies \boxed{ \lvert A \rvert < \lvert P(A) \rvert } \\
}
$$
---
