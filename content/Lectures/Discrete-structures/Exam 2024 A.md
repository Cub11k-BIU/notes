---
{"publish":true,"created":"01/02/26, 12:30","modified":"2026-02-02T16:05:49.958+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

# Part A
## 1a
$$
\displaylines{
\text{Correct/Incorrect: } 2^{\mathbb{R}} \sim 2^{\mathbb{Q}} \\
\\
\text{Solution:} \\
\text{Incorrect} \\
\mathbb{Q} \sim \mathbb{N} \implies 2^{\mathbb{Q}} \sim 2^{\mathbb{N}} \sim \mathcal{P}(\mathbb{N}) \sim \mathbb{R} \not\sim \mathcal{P}(\mathbb{R}) \sim 2^{\mathbb{R}} \\
}
$$
## 1b
$$
\displaylines{
\text{Correct/Incorrect: } \mathbb{N}^{\mathbb{R}} \sim \mathbb{R}^{\mathbb{N}} \\
\\
\text{Solution:} \\
\text{Incorrect} \\
\mathbb{N}^{\mathbb{R}} \sim 2^{\mathbb{R}} \sim \mathcal{P}(\mathbb{R}) \not\sim \mathbb{R} \sim \mathbb{R}^{\mathbb{N}} \\
}
$$
## 1c
$$
\displaylines{
\text{Let } \mathcal{S} = \Set{ A \mid A \preccurlyeq \mathbb{N} } \\
\text{Correct/Incorrect: } \bigcup_{A \in \mathcal{S}} A \preccurlyeq \mathbb{N} \\
\\
\text{Solution:} \\
\text{Incorrect} \\
\forall B \in \mathcal{P}(\mathbb{N}): \Set{ B } \in \mathcal{S} \\
\implies \mathcal{P}(\mathbb{N}) \subseteq \bigcup_{A \in \mathcal{S}} A \implies \mathcal{P}(\mathbb{N}) \preccurlyeq \bigcup_{A \in \mathcal{S}} A \\
\implies \bigcup_{A \in \mathcal{S}} A \not\sim \mathbb{N} \\
}
$$
## 2
$$
\displaylines{
\text{Let } F: \mathbb{N} \to \mathbb{N} \text{ be surjective} \\
\text{Let } A_{0} = 2\mathbb{N} = \Set{ 2k \mid k \in \mathbb{N} } \\
\text{Let } \forall n \in \mathbb{N}: A_{n+1} = F^{-1}[A_{n}] = \Set{ x \in \mathbb{N} \mid \exists y \in A_{n}: F(x) = y } \\
}
$$
### 2a
$$
\displaylines{
\text{Prove: } \forall n \in \mathbb{N}: A_{n} \sim \mathbb{N} \\
\\
\text{Proof:} \\
\text{Proof is by induction on } n \\
\text{Base case. } n = 0 \\
f: \mathbb{N} \to A_{0}, f(n) = 2n \text{ is bijective} \\
\implies A_{0} \sim \mathbb{N} \\
\text{Inductive step. Let } A_{n} \sim \mathbb{N} \\
A_{n+1} = F^{-1}[A_{n}] = \Set{ x \in \mathbb{N} \mid \exists y \in A_{n}: F(x) = y } \\
\text{Clearly, } A_{n+1} \subseteq \mathbb{N} \implies A_{n+1} \preccurlyeq \mathbb{N} \\
\text{We now have to prove that } A_{n+1} \text{ is infinite} \\
\text{Let by contradiction } A_{n+1} \text{ be finite} \\
\implies F[A_{n+1}] \text{ is also finite} \\
F \text{ is surjective} \implies A_{n} = F[F^{-1}[A_{n}]] = F[A_{n+1}] \\
A_{n} \text{ is infinite} - \text{Contradiction!} \\
\implies A_{n+1} \text{ is infinite} \implies A_{n+1} \sim \mathbb{N} \\
}
$$
### 2b
$$
\displaylines{
\text{Let } A_{1} \setminus 2\mathbb{N} \neq \emptyset \\
\text{Prove: } \forall n \in \mathbb{N}: A_{n+1} \setminus A_{n} \neq \emptyset \\
\\
\text{Proof:} \\
\text{Proof is by induction on } n \\
\text{Base case. } n = 0 \\
A_{n+1} \setminus A_{n} = A_{1} \setminus A_{0} = A_{1} \setminus 2\mathbb{N} \neq \emptyset \\
\text{Inductive step. Let } A_{n+1} \setminus A_{n} \neq \emptyset \\
\text{Let by contradiction } A_{n+2} \setminus A_{n+1} = \emptyset \\
\implies A_{n+2} \subseteq A_{n+1} \\
F \text{ is surjective} \implies A_{n+1} = F[F^{-1}[A_{n+1}]] = F[A_{n+2}] \subseteq F[A_{n+1}] = F[F^{-1}[A_{n}]] = A_{n} \\
\implies A_{n+1} \subseteq A_{n} \implies A_{n+1} \setminus A_{n} = \emptyset - \text{Contradiction!} \\
\implies A_{n+2} \setminus A_{n+1} \neq \emptyset \\
}
$$
## 3
$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected graph} \\
\text{Let } u, v \in V \\
\text{Let } P \text{ be the shortest path between } u, v \in V \text{ such that} \\
\text{Each odd cycle } C \text{ contains a vertex from } P \\
\text{Prove: it is possible to color vertices of } G \text{ in 4 colors} \\
\\
\text{Proof:} \\
\text{Let } G' = G \setminus V(P) \\
G' \text{ has no odd cycles} \implies G' \text{ is bipartite} \implies G' \text{ is 2-colorable} \\
\text{Let } \chi': V(G') \to \Set{ 0, 1 } \text{ be a proper coloring of } G' \\
P \text{ is the shortest path} \implies P \text{ is a simple path} \\
\implies \text{Each vertex in } P \text{ has neighbors from } G' \text{ and at most two neighbors in } P \\
u = v \implies P = (u) \implies G \text{ is actually 3-colorable} \\
\text{Let } u \neq v \\
\text{Let } P = (v_{1} = u, v_{2}, \dots, v_{k} = v) \\
\text{Let } \chi: V \to \Set{ 0, 1, 2, 3 } \\
\text{Let } \forall w \in V(G'): \chi(w) = \chi'(w) \\
\text{Let } \forall i \in [1, k]: \chi(v_{i}) = \begin{cases}
2 & i \text{ is odd} \\
3 & i \text{ is even} \\
\end{cases} \\
\chi \text{ is a proper 4-coloring of } G \\
}
$$
## 4
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a planar graph} \\
\text{Prove: } \exists A \subseteq V \text{ an independent set}: \abs{A} \geq \frac{n}{4} \\
\\
\text{Proof:} \\
G \text{ is planar} \implies G \text{ is 4-colorable} \\
\text{Let } \chi: V \to \Set{ 1, 2, 3, 4 } \\
\text{Let } A_{1}, A_{2}, A_{3}, A_{4} \subseteq V: A_{i} = \Set{ v \in V \mid \chi(v) = i } \\
\forall i \in [1, 4]: A_{i} \text{ is an independent set} \\
\text{Let by contradiction } \forall i \in [1, 4]: \abs{A_{i}} < \frac{n}{4} \\
\implies \abs{V} = \sum_{i=1}^{4} \abs{A_{i}} < \frac{4n}{4} = n = \abs{V} - \text{Contradiction!} \\
\implies i \in [1, 4]: \abs{A_{i}} \geq \frac{n}{4} \\
}
$$
# Part B
## 5
$$
\displaylines{
\text{Not studied in semester 2026 A} \\
}
$$
## 6
$$
\displaylines{
\text{Consider sequences of length } n \text{ over } \Set{ 0, 1, 2 } \\
\text{What is the number of sequences such that number of zeroes in it is even?} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \text{number of sequences where the number of zeroes is even} \\
\text{Let } b_{n} = \text{number of sequence where the number of zeroes is odd} \\
\text{If the first digit is 1 or 2, parity is preserved} \\
\text{If the first digit is 0, the parity is inverted} \\
\implies \begin{eqsys}
a_{n} = 2a_{n-1} + b_{n-1} \\
b_{n} = 2b_{n-1} + a_{n-1} \\
\end{eqsys} \\
\implies b_{n-1} = a_{n} - 2a_{n-1} \\
\implies a_{n+1} - 2a_{n} = 2(a_{n} - 2a_{n-1}) + a_{n-1} \\
\implies a_{n+1} = 4a_{n} - 3a_{n-1} \\
\text{or with adjusted indexing, } a_{n} = 4a_{n-1} - 3a_{n-2} \\
\text{Characteristic polynomial is } x^{2} - 4x + 3 = (x-1)(x-3) \\
\implies a_{n} = A_{1} \cdot 1^{n} + A_{2} \cdot 3^{n} \\
a_{0} = 1 \\
a_{1} = 0 \\
\implies \begin{eqsys}
A_{1} + A_{2} = 1 \\
A_{1} + 3A_{2} = 0 \\
\end{eqsys} \implies \begin{eqsys}
A_{1} = \frac{3}{2} \\
A_{2} = -\frac{1}{2} \\
\end{eqsys} \\
\implies a_{n} = \frac{3}{2} - \frac{3^{n}}{2} = \frac{3}{2}(1-3^{n-1}) \\
}
$$
## 7a
$$
\displaylines{
\text{Prove: each tournament graph has a Hamilton path} \\
\\
\text{Proof:} \\
\text{Proof is by induction on } n \\
\text{Base case. } n = 2 \\
(v_{0}, v_{1}) \in E \text{ or } (v_{1}, v_{0}) \in E \\
\implies \text{A Hamilton path } (v_{0}, v_{1}) \text{ or } (v_{1}, v_{0}) \text{ exists} \\
\text{Inductive step. Let every tournament graph on } n \text{ vertices have a Hamilton path} \\
\text{Let } T_{n+1} \text{ be a tournament graph on } n+1 \text{ vetices} \\
\text{Let } v_{0} \in V(T_{n+1}) \\
\text{Let } T_{n} = T_{n+1} \setminus \Set{ v } \\
\text{Clearly, } T_{n} \text{ is a tournament on } n \text{ vertices} \\
\implies T_{n} \text{ has a Hamilton path } (v_{1}, v_{2}, \dots, v_{n}) \\
\text{Let } i \in [1, n] \text{ be maximal such that } \forall j \leq i: (v_{j}, v_{0}) \in E(T_{n+1}) \\
i = n \implies (v_{1}, \dots, v_{n}, v_{0}) \text{ is a Hamilton path in } T_{n+1} \\
i < n \implies (v_{0}, v_{i+1}) \in E(T_{n+1}) \\
\implies (v_{1}, \dots, v_{i}, v_{0}, v_{i+1}, \dots, v_{n}) \text{ is a Hamilton path in } T_{n+1} \\
}
$$
## 7b
$$
\displaylines{
\text{Show that there exists a tournament graph on } n \text{ vertices with at least} \\
\frac{n!}{2^{n-1}} \text{ different Hamilton paths} \\
\\
\text{Solution:} \\
\text{Number of possible different Hamilton paths in a graph is } n! \\
\text{Let } G = (V, E) \text{ be a uniformly random tournament graph over } n \text{ vertices} \\
\forall u, v \in V: P((u, v) \in E) = P((v, u) \in E) = \frac{1}{2} \\
\text{Let us enumerate all possible Hamilton paths somehow} \\
\text{Let } \forall i \in [1, n!]: X_{i} = \begin{cases}
1 & i\text{-th Hamilton path is in } G \\
0 & \text{otherwise} \\
\end{cases} \\
E[X_{i}] = P(X_{i} = 1) = P(i\text{-th Hamilton path is in } G) = \\
= P(\forall j \in [1, n-1]: (v_{j}, v_{j+1}) \in E) = \prod_{j=1}^{n-1} P((v_{j}, v_{j+1}) \in E) = \frac{1}{2^{n-1}} \\
\text{Let } X = \text{number of Hamilton paths in } G \\
\text{Clearly, } X = \sum_{i=1}^{n!} X_{i} \\
E[X] = \sum_{i=1}^{n!} E[X_{i}] = \frac{n!}{2^{n-1}} \\
\implies \text{Exists graph } G \text{ such that } X \geq \frac{n!}{2^{n-1}} \\
}
$$
## 8
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple planar graph} \\
\text{Let } \abs{V} = n \geq 7 \\
\text{Let the shortest cycle in } G \text{ have length } 7 \\
\text{Prove: } \abs{E} \leq \frac{7n+1}{5} - 3 \\
\\
\text{Proof:} \\
\abs{E} \leq 7 \implies \abs{E} \leq 10 - 3 = \frac{7 \cdot 7 + 1}{5} - 3 \\
\implies \text{Statement holds for } n \geq 7 \\
\text{Let } \abs{E} > 7 \\
\implies \forall f \in F: f \text{ is incident to at least 7 edges} \\
\text{(either a cycle or all "outer" edges of a graph)} \\
\text{Let } t_{f} \text{ be the number of edges incident to face } f \\
\implies \sum_{f \in F} t_{f} \geq 7\abs{F} \\
\text{Each edge is incident to at most 2 faces} \\
\implies 2\abs{E} \geq \sum_{f \in F} t_{f} \\
\implies 2\abs{E} \geq 7\abs{F} \\
G \text{ is planar} \implies \text{By Euler's theorem:} \\
\abs{V} + \abs{F} - \abs{E} = 2 \\
\implies \abs{F} = 2 + \abs{E} - \abs{V} \\
\implies 2\abs{E} \geq 14 + 7\abs{E} - 7\abs{V} \\
5\abs{E} \leq 7\abs{V} - 14 \implies \abs{E} \leq \frac{7\abs{V} - 14}{5} = \frac{7\abs{V} + 1}{5} - 3 \\
}
$$
