---
{"publish":true,"created":"09/02/25, 17:02","modified":"2025-11-21T21:10:14.104+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# 1b
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a tree with } \lvert V \rvert \geq 2 \\
\text{Prove: } \exists v \in V \text{ such that removing vertex } v \text{ and all its edges will result in a graph} \\
G' = (V \setminus \Set{ v }, E') \\
\text{such that in all connected components of } G' \text{ there is at most } \frac{\lvert V \rvert}{2} \text{ vertices} \\
\\
\text{Proof:} \\
\text{Let } \exists \text{ tree } G = (V, E) : \forall v \in V: \\
\exists \text{ connected component of } G' = (V \setminus \Set{ v }, E'): \lvert [u]_{\sim} \rvert > \frac{n}{2} \\
}
$$
---
# 2a
$$
\displaylines{
\text{Let } A \\
\text{Let } f: A \to A \\
\text{Let } g: P(A) \to P(A), g(B) = f^{-1}[B] \\
\text{Prove or disprove: } g \text{ is surjective} \implies f \text{ is surjective} \\
\\
\text{Disproof:} \\
\text{Let } f: \mathbb{N} \to \mathbb{N}, f(n) = n + 1 \\
f \text{ is not surjective} \\
\text{Let } C \in P(\mathbb{N}) \\
\text{Let } B = \Set{ n + 1 | n \in C } \subseteq \mathbb{N} \\
g(B) = f^{-1}[B] = C \\
}
$$
# 2b
$$
\displaylines{
\text{Let } A \\
\text{Let } f: A \to A \\
\text{Let } g: P(A) \to P(A), g(B) = f^{-1}[B] \\
\text{Prove or disprove: } g \text{ is surjective} \implies f \text{ is injective} \\
\\
\text{Proof:} \\
\text{Let } g \text{ be surjective} \\

}
$$
---
# 3
$$
\displaylines{
\text{Let } f: \mathbb{N} \to \mathbb{N}, \begin{cases}
f(n) < n & n \neq 1 \\
f(n) \leq n & n = 1 \\
\end{cases} \\
}
$$
## 3a
$$
\displaylines{
\text{Prove: } \forall n \in \mathbb{N}: \exists k \in \mathbb{N}: \forall m \leq n: f^{k}(m) = 1 \\
\\
\text{Proof:} \\
\begin{cases}
f(n) < n & n \neq 1 \\
f(n) \leq n & n = 1 \\
\end{cases} \implies [f(n) = n \implies f(n) = n = 1] \\
\text{Let } n \in \mathbb{N} \\
\text{Let } k = n \\
\text{Let } m \leq n \\
f^{n}(m) \leq f^{n-1}(m) \leq \dots \leq f(m) \leq m \\
\text{Let } \forall i \in [1, n]: f^{i}(m) < f^{i-1}(m) \\
\implies \lvert \Set{ f^{n}(m), f^{n-1}(m), \dots, f(m), m } \rvert = n+1 > \lvert [m] \rvert = m \\
\Set{ f^{n}(m), f^{n-1}(m), \dots, f(m), m } \subseteq [m] - \text{Contradiction!} \\
\implies \exists i \in [1, n + 1]: f^{i}(m) = f^{i-1}(m) \text{ then } f(f^{i-1}(m)) = f^{i-1}(m) = 1 \\
\implies f^{n+1}(m) = f^{n}(m) = \dots = f^{i-1}(m) = 1 \\
\implies \boxed{ f^{k}(m) = 1 } \\
}
$$
## 3b
$$
\displaylines{
\text{Is there } k \in \mathbb{N}: \forall n \in \mathbb{N}: f^{k}(n) = 1? \\
\\
\text{Solution:} \\
\text{Let } f(n) = \begin{cases}
n - 1 & n > 1 \\
1 & n = 1 \\
\end{cases} \\
\text{Let } k \in \mathbb{N} \\
\text{Let } n = k + 2 \\
\implies f(n) = k + 1, f^{2}(n) = k, \dots, f^{k}(n) = 2 \neq 1 \\
\implies \forall k \in \mathbb{N}: \exists n \in \mathbb{N}: f^{k}(n) \neq 1 \\
\implies \boxed{ \text{The answer is no, such } k \text{ does not exist} } \\
}
$$
---
# 4a
$$
\displaylines{
\text{How many ways there are to sit 30 students in two circles, such that in one circle there are} \\
\text{exactly 20 students and in the other there are exactly 10 students?} \\
\\
\text{Solution:} \\
\text{Let us first choose 10 students to sit in the second circle} \\
\binom{30}{10} \\
\text{Let us then arrange students in the first circle:} \\
19! \\
\text{Let us then arrange students in the second circle:} \\
9! \\
\implies \text{The answer is: } \binom{30}{10}19!9! = \frac{30!}{20 \cdot 10} = \frac{30!}{200} \\
}
$$
# 4b
$$
\displaylines{
\text{How many ways there are to sit 30 students in two circles?} \\
\\
\text{Solution:} \\
\text{Let one of the circle have 0 people} \\
\text{Then there are } 29! \text{ ways to arrange 30 students in a circle} \\
\text{Let us choose } 1 \leq i \leq 29 \text{ people to go to the first circle} \\
29! + 29! + \sum_{i=1}^{29} \binom{30}{i}(30-i-1)!(i-1)! = \boxed{ \sum_{i=1}^{29} \frac{30!}{(30-i)i} + 2 \cdot 29! } \\
}
$$
# 4c
$$
\displaylines{
\text{How many ways there are to rearrange 30 students in a circle such that} \\
\text{for each student the left neighbor is new?} \\
\\
\text{Solution:} \\
\text{Let us enumerate students in the circle from 1 to 30} \\
\text{Let us choose number } 1 \leq i \leq 30 \\
\text{Let us count the number of ways to sit 30 students in a way that} \\
\text{neighbors } (i, (i+1) \mod 30) \text{ sit as they were} \\
\text{Let } A_{i} = \Set{ \text{ ways to arrange students such that } (i, (i+1) \mod 30) \text{ sit as they were } } \\
\lvert A_{i} \rvert = (30-1-1)! \\
\text{Let us now choose } k \text{ such numbers} \\
1 \leq i_{1} \leq i_{2} \leq \dots < i_{k} \leq 30 \\
\lvert A_{i_{1}} \cap A_{i_{2}} \cap \dots \cap A_{i_{k}} \rvert = (30-1-k)! \\
\implies \text{By the Inclusion-Exclusion principle: } \left\lvert  \bigcup_{i=1}^{30} A_{i}  \right\rvert = \sum_{k=1}^{30} (-1)^{k-1} \binom{30}{k}(30-1-k)! \\
\text{Total number of ways to sit 30 students in a circle is 29!} \\
\implies \text{The answer is: } 29! - \sum_{k=1}^{30} (-1)^{k-1} \binom{30}{k}(30-1-k)! = \boxed{ \sum_{k=0}^{30} (-1)^{k} \binom{30}{k}(29-k)! } \\
}
$$
# 4d
$$
\displaylines{
\text{How many ways there are to arrange 30 students in a circle such that} \\
\text{Each student has a number and only one student has a number bigger than his neighbors} \\
\\
\text{Solution:} \\
\text{Note that this special student can only have number 30} \\
\text{29 can only be near 30} \implies \text{There are } 2 \text{ ways} \\
\text{28 can only be near 29 or 30} \implies \text{There are also } 2 \text{ ways} \\
\text{27 can only be near 28 or one of (29,30)} \implies \text{There are also } 2 \text{ ways} \\
\text{And so on until we get to 1 which can only be placed between 2 and the other number} \\
\implies \boxed{ \text{The answer is } 2^{28} } \\
}
$$
---
# 5
$$
\displaylines{
\text{Let } X \text{ be a set} \\
R \neq \emptyset \subseteq P(X) \text{ is called a ring if } \forall A, B \in R: [A \cap B \in R] \land [A \triangle B \in R] \\
}
$$
## 5a
$$
\displaylines{
\text{Let } R \subseteq P(X) \text{ be a ring} \\
\text{Prove: } \exists K \in R: \forall A \in R: A \triangle K = A \\
\\
\text{Proof:} \\
\forall A, B \in R: [A \cap B \in R] \land [A \triangle B \in R] \\
R \neq \emptyset \implies \exists C \in R \\
\implies (C \cap C \in R) \land (C \triangle C \in R) \implies C \in R \land \emptyset \in R \\
\forall D: D \triangle \emptyset = D \\
\implies \boxed{ \exists K = \emptyset \in R: \forall A \in R: A \triangle K = A \triangle \emptyset = A } \\
}
$$
## 5b
$$
\displaylines{
\text{Let } X \text{ be a set} \\
\text{Let } \Set{ R_{i} }_{i \in I} \text{ be a family of rings} \\
\text{Prove: } \bigcap_{i \in I} R_{i} \text{ is a ring} \\
\\
\text{Proof:} \\
\text{Let } A, B \in \bigcap_{i \in I} R_{i} \\
\implies \forall i \in I: A, B \in R_{i} \implies \forall i \in I: (A \cap B \in R_{i}) \land (A \triangle B \in R_{i}) \\
\implies \left( A \cap B \in \bigcap_{i \in I} R_{i} \right) \land \left( A \triangle B \in \bigcap_{i \in I} R_{i} \right) \\
\implies \boxed{ \bigcap_{i \in I} R_{i} \text{ is a ring} } \\
}
$$
## 5c
$$
\displaylines{
\text{Let } R \subseteq P(X) \text{ be a ring} \\
\text{Prove: } \forall A, B \in R: (A \setminus B \in R) \land (A \cup B \in R) \\
\\
\text{Proof:} \\
\forall A, B \in R: [A \cap B \in R] \land [A \triangle B \in R] \\
\text{Let } A, B \in R \\
A \cap B \in R, A \triangle B = (A \cup B) \setminus (A \cap B) \in R \\
(A \triangle B) \triangle (A \cap B) = A \cup B \\
\implies \boxed{ A \cup B \in R } \\
(A \cap B) \triangle A = ((A \cap B) \cup A) \setminus (A \cap B \cap A) = A \setminus (A \cap B) \\
A \setminus (A \cap B) = \Set{ x | x \in A \land x \not\in A \cap B } = \Set{ x | x \in A \land (x \not\in A \lor x \not\in B) } = \\
= \Set{ x | (x \in A \land x \not\in A) \lor (x \in A \land x \not\in B) } = A \setminus B \\
\implies \boxed{ A \setminus B \in R } \\
}
$$
## 5d
$$
\displaylines{
\text{Let } R \subseteq P(X) \\
R \text{ is called an algebra if } \exists E \in R: \forall A \in R: A \cap E = A \\
\text{Let } R = \Set{ A \in P(X) | A \text{ is finite} } \\
\text{Prove: } R \text{ is algebra} \iff X \text{ is finite} \\
\\
\text{Proof:} \\
\text{Let } X \text{ be finite} \\
\implies R = P(X) \text{ is finite} \\
\implies X \in R \\
\forall A \in P(X): X \cap A = A \implies \boxed{ R \text{ is an algebra} } \\
\text{Let } R \text{ be an algebra} \\
\implies \exists E \in R: \forall A \in R: A \cap E = A \\
E \in R \implies E \text{ is finite} \\
\text{Let } T = \Set{ \Set{ x } | x \in X } \\
T \subseteq R \\
\implies \forall \Set{ x } \in T: E \cap \Set{ x } = \Set{ x } \\
\implies \forall x \in X: \Set{ x } \subseteq E \implies x \in E \\
\implies X \subseteq E \implies \boxed{ X \text{ is finite} } \\
}
$$
---
