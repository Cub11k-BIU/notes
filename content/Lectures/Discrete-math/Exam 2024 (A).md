---
{"publish":true,"created":"09/02/25, 13:02","modified":"2025-11-21T21:10:14.097+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph} \\
1. \quad \text{Define tree} \\
2. \quad \text{Define distance between } u, v \in V \\
3. \quad \text{Define path} \\
4. \quad \text{Define cycle} \\
5. \quad \text{Define connected component} \\
\\
\text{Solution:} \\
3. \quad \boxed{ \text{Path is a sequence of vertices: } (v_{1}, v_{1}, \dots, v_{k+1}) \text{ such that:} } \\
\forall i \in [1, k]: \Set{ v_{i}, v_{i+1} } \in E, \forall i \neq j \in [1, k]: \Set{ v_{i}, v_{i+1} } \neq \Set{ v_{j}, v_{j+1} } \\
\text{Length of the path is the number of edges in it, which is } k \\
4. \quad \boxed{ \text{ Cycle is a path such that: } v_{1} = v_{k+1} } \\
2. \quad \text{Distance between vertices } u, v \in V \\
\boxed{ d(u, v) \text{ is the length of the shortest path between them} } \\
\text{If there is no path between vertices, then } d(u, v) = \infty \\
5. \quad \text{Let } \sim \text{ be a relation on } V \text{ such that:} \\
\forall u, v \in V: u \sim v \iff d(u, v) < \infty \\
\text{In other words: } u \sim v \iff \text{ There is a path between } u, v \\
\sim \text{ is an equivalence relation and } \boxed{ \text{its equivalence classes are called connected components} } \\
\text{Connected components induce subgraphs: } G_{u} = \Set{ [u]_{\sim}, E_{u} } \\
\text{where } E_{u} = \Set{ \Set{ v, w } | v, w \in [u]_{\sim} } \\
1. \quad \text{Connected graph is a graph with exactly one connected component} \\
\text{Acyclic graph is a graph with no cycles} \\
\boxed{ \text{Tree is a connected acyclic graph} } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph} \\
\text{Define the complement } \overline{G} \text{ of graph } G \\
\text{To be } \overline{G} = (V, \overline{E}): \overline{E} = \Set{ \Set{ u, v } | u, v \in V, \Set{ u, v } \not\in E } \\
\text{Prove: for any simple graph with } n \geq 5 \text{ vertices either } G \text{ or } \overline{G} \text{ has a cycle} \\
\\
\text{Proof:} \\
\lvert \overline{E} \rvert = \frac{n(n-1)}{2} - \lvert E \rvert  \\
\text{Let } \lvert E \rvert  \geq n \implies \boxed{ G \text{ has a cycle} } \\
\text{Let } \lvert E \rvert  < n \implies \lvert \overline{E} \rvert > \frac{n(n-1)}{2} - n = \frac{n^{2}-n-2n}{2} = \frac{n(n-3)}{2} \\
n \geq 5 \implies \frac{n-3}{2} \geq \frac{2}{2} = 1 \\
\implies \frac{n(n-3)}{2} \geq n \implies \lvert \overline{E} \rvert > n \implies \boxed{ \overline{G} \text{ has a cycle} } \\
}
$$
# 2
$$
\displaylines{
A \text{ is a set}, \lvert A \rvert \geq 1 \\
\text{Let } f: P(A) \times P(A) \to P(P(A)) \\
\forall B, C \subseteq A: f(B, C) = \Set{ D | D \subseteq B \cap C } \\
\text{Prove or disprove:} \\
1. \quad \text{It is possible that } f \text{ is injective} \\
2. \quad \text{It is possible that } f \text{ is surjective} \\
\\
\text{Disproof for 1:} \\
\text{Let } A \\
A \neq \emptyset \implies \exists a \in A \\
f(\emptyset, \Set{ a }) = f(\Set{ a }, \emptyset) = P(\emptyset) = \Set{ \emptyset } \\
\implies \boxed{ \forall A: f \text{ is not injective} } \\
\text{Disproof for 2:} \\
\text{Let } A \\
A \neq \emptyset \implies \exists a \in A \\
\implies \Set{ a } \in P(A) \implies \Set{ \Set{ a } } \in P(P(A)) \\
\forall X: \emptyset \in P(X) \\
\forall B, C \subseteq A: f(B, C) = P(B \cap C) \implies \emptyset \in f(B, C) \\
\implies f(B, C) \neq \Set{ \Set{ a } } \implies \boxed{\forall A: f \text{ is nor surjective} } \\
}
$$

$$
\displaylines{
\text{Let } A \text{ be a set, } \lvert A \rvert \geq 1 \\
f: P(A) \times P(A) \to P(P(A)), f(B, C) = \Set{ D | D \subseteq B \cap C } \\
\text{In other words } f(B, C) = P(B \cap C) \\
Dom(f) = P(A) \times P(A) \\
Range(f) = P(P(A)) \\
\text{Prove or disprove: It is possible for } f \text{ to be injective} \\
\text{In other words } \exists A: f \text{ is injective} \\
\text{Disproof:} \\
\text{Let } A, \lvert A \rvert \geq 1 \\
\text{Let } a \in A \\
f(\Set{ a }, \emptyset) = f(\emptyset, \Set{ a }) = \Set{ \emptyset } \\
\implies \boxed{ \forall A: f \text{ is not injective} } \\
\\
\text{Prove or disprove: It is possible for } f \text{ to be surjective} \\
\text{In other words } \exists A: f \text{ is surjective} \\
\text{Disproof:} \\
\emptyset \in P(P(A)) \\
f(B, C) = P(B \cap C) \implies \emptyset \in f(B, C) \implies f(B, C) \neq \emptyset \\
\emptyset \in Range(f), \emptyset \not\in Im(f) \\
\implies Im(f) \neq Range(f) \implies \boxed{ \forall A: f \text{ is not surjective} } \\
}
$$

# 3
$$
\displaylines{
\text{Let } A \text{ be a set} \\
\text{Let } f: A \to A \\
\text{Let } B \subseteq A \\
\text{Let } B_{1} = B, \forall n \in \mathbb{N}: B_{n+1} = f^{-1}[B_{n}] \\
1. \quad \text{Prove: if for any } B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} = \emptyset \text{ then } f \text{ has no fixed points} \\
2. \quad \text{Prove or disprove: } f \text{ has no fixed points} \implies \forall B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} = \emptyset \\
\\
\text{Proof for 1:} \\
\text{If } A \text{ is an empty set, then } f \text{ is an empty function which has no fixed points} \\
\text{Let } A \neq \emptyset \\
\text{Let } \forall B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} = \emptyset \\
\text{Let } f \text{ has a fixed point } x \\
\text{Let } B = \Set{ x } \\
\implies x \in f[B] \\
\text{Base case. Let } n = 1 \\
x \in B \implies x \in B_{1} \\
\text{Induction step. Let } x \in B_{n} \\
B_{n+1} = f^{-1}[B_{n}] \\
x \in B_{n}, f(x) = x \implies x \in f^{-1}[B_{n}] = B_{n+1} \\
\implies \text{By induction: } x \in \bigcap_{n \in \mathbb{N}} B_{n} \implies \bigcap_{n \in \mathbb{N}} B_{n} \neq \emptyset - \text{Contradiction!} \\
\implies \boxed{ f \text{ has no fixed points} } \\
\\
\text{Disproof for 2:} \\
\text{Let } A = \mathbb{N} \\
\text{Let } f(n) = 2n \\
\text{Let } B = \mathbb{N} \\
\text{Base case. Let } n = 1 \\
B_{1} = B = \mathbb{N} \\
\text{Induction step. Let } B_{n} = \mathbb{N} \\
B_{n+1} = f^{-1}[B_{n}] = f^{-1}[\mathbb{N}] \\
\text{Let } x \in f^{-1}[\mathbb{N}] \implies x \in \mathbb{N} \implies \boxed{ f^{-1}[\mathbb{N}] \subseteq \mathbb{N} } \\
\text{Let } x \in \mathbb{N} \implies 2x \in \mathbb{N} \implies f(x) = 2x \implies x \in f^{-1}[\Set{ 2x }] \subseteq f^{-1}[\mathbb{N}] \implies \boxed{ \mathbb{N} \subseteq f^{-1}[\mathbb{N}] } \\
\implies B_{n+1} = f^{-1}[\mathbb{N}] = \mathbb{N} \\
\implies \text{By Induction } \forall n \in \mathbb{N}: B_{n} = \mathbb{N} \implies \boxed{ \bigcap_{n \in \mathbb{N}} B_{n} = \mathbb{N} } \\
}
$$
# 4
$$
\dots
$$
# 5
$$
\displaylines{
\text{Let } A \text{ be a set} \\
A \text{ is called transitive if } \forall x \in A: \forall y \in x: y \in A \\
}
$$
## 5a
$$
\displaylines{
\text{Find an example of a transitive and a non-transitive sets} \\ 
\\
\text{Solution:} \\
\text{Let } A_{1} = \emptyset \\
A_{1} \text{ is vacuously transitive} \\
\text{Let } A = \Set{ \Set{ 1 } } \\
1 \not\in A \implies \exists x = \Set{ 1 } \in A: \exists y = 1 \in x: y \not\in A \\
\implies A \text{ is not transitive} \\
}
$$
## 5b
$$
\displaylines{
\text{Let } \Set{ A_{i} }_{i \in I} \text{ be family of transitive sets} \\
\text{Prove: } \bigcap_{i \in I} A_{i} \text{ is transitive} \\
\\
\text{Proof:} \\
\text{Let } x \in \bigcap_{i \in I} A_{i} \\
\implies \forall i \in I: x \in A_{i} \\
\implies \forall i \in I: \forall y \in x: y \in A_{i} \implies \forall y \in x: y \in \bigcap_{i \in I} A_{i} \\
\implies \boxed{ \bigcap_{i \in I} A_{i} \text{ is transitive} } \\
}
$$
## 5c
$$
\displaylines{
\text{Let } A \text{ be a set} \\
\text{Let } A_{1} = A \\
\text{Let } \forall n \in \mathbb{N}: A_{n+1} = A_{n} \cup \Set{ y | \exists x \in A_{n}: y \in x } \\
}
$$
### 5c.1
$$
\displaylines{
\text{Prove: } \bigcup_{n \in \mathbb{N}} A_{n} \text{ is transitive} \\
\\
\text{Proof:} \\
\text{Let } x \in \bigcup_{n \in \mathbb{N}} A_{n} \implies \exists n \in \mathbb{N}: x \in A_{n} \\
x \in A_{n} \implies \forall y \in x: y \in A_{n+1} \implies y \in \bigcup_{n \in \mathbb{N}} A_{n} \\
\implies \boxed{ \bigcup_{n \in \mathbb{N}} A_{n} \text{ is transitive} } \\
}
$$
### 5c.2
$$
\displaylines{
\text{Let } B \text{ be transitive and } A \subseteq B \\
\text{Prove: } \bigcup_{n \in \mathbb{N}} A_{n} \subseteq B \\
\\
\text{Proof:} \\
\text{Base case. Let } n = 1 \\
A_{1} = A \implies A_{1} \subseteq B \\
\text{Induction step. Let } A_{n} \subseteq B \\
A_{n+1} = A_{n} \cup \Set{ y | \exists x \in A_{n}: y \in x } \\
B \text{ is transitive} \implies \forall x \in B: \forall y \in x: y \in B \\
A_{n} \subseteq B \implies \forall x \in A_{n}: \forall y \in x: y \in B \\
\implies \Set{ y | \exists x \in A_{n}: y \in x } \subseteq B \\
\implies A_{n+1} = A_{n} \cup \Set{ y | \exists x \in A_{n}: y \in x } \subseteq B \\
\implies \text{By Induction: } \forall n \in \mathbb{N}: A_{n} \subseteq B \\
\implies \boxed{ \bigcup_{n \in \mathbb{N}} A_{n} \subseteq B } \\
}
$$
