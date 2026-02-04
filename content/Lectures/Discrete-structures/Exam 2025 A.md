---
{"publish":true,"created":"02/02/26, 17:54","modified":"2026-02-03T14:31:54.547+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

## 1
$$
\displaylines{
a_{n} = 3a_{n-1} + 4a_{n-2} - 12a_{n-3} \\
a_{0} = 9 \\
a_{1} = 13 \\
a_{2} = 51 \\
\text{Find } a_{99} \\
\\
\text{Solution:} \\
\text{Characteristic polynomial is:} \\
x^{3} - 3x^{2} - 4x + 12 = (x-3)(x^{2} - 4) = (x-3)(x-2)(x+2) \\
\implies a_{n} = A_{1} \cdot 3^{n} + A_{2} \cdot 2^{n} + A_{3} \cdot (-2)^{n} \\
\begin{eqsys}
A_{1} + A_{2} + A_{3} = 9 \\
3A_{1} + 2A_{2} -2A_{3} = 13 \\
9A_{1} + 4A_{2} + 4A_{3} = 51 \\
\end{eqsys} \implies \begin{eqsys}
A_{1} + A_{2} + A_{3} = 9 \\
A_{1} - 4A_{3} = -5 \\
5A_{1} = 15 \\
\end{eqsys} \implies \begin{eqsys}
A_{1} = 3 \\
A_{2} = 4 \\
A_{3} = 2 \\
\end{eqsys} \\
\implies a_{n} = 3^{n+1} + 2^{n+2} + 2^{n+1} \cdot (-1)^{n} = \\
= 3 \cdot 3^{n} + (2 + (-1)^{n}) \cdot 2^{n+1} \\
a_{99} = 3^{100} + 2^{101} + 2^{100} \cdot (-1)^{99} = 3^{100} + 2^{101} - 2^{100} = 3^{100} + 2^{100} \\
}
$$
## 2
$$
\displaylines{
A = \mathbb{Q}^{\mathbb{R}} \\
B = \mathbb{Q}^{\lrp{\mathbb{Q}^{17}}} \\
C = \mathbb{N} \times \mathbb{N}^{\mathbb{N}} \times \mathbb{N}^{\lrp{\mathbb{N}^{\mathbb{N}}}} \times \mathbb{N}^{\lrp{\mathbb{N}^{\lrp{\mathbb{N}^{\mathbb{N}}}}}} \\
D = \Set{ S \subseteq \mathbb{R} \mid S \text{ is infinite} } \\
\text{Find two sets such that } X \sim Y \\
\\
\text{Solution:} \\
A \sim 2^{\mathbb{R}} \sim \mathcal{P}(\mathcal{P}(\mathbb{N})) \\
\mathbb{Q}^{17} \sim \mathbb{Q} \implies B \sim \mathbb{Q}^{\mathbb{Q}} \sim 2^{\mathbb{Q}} \sim \mathcal{P}(\mathbb{N}) \\
\mathbb{N}^{\lrp{\mathbb{N}^{\lrp{\mathbb{N}^{\mathbb{N}}}}}} \sim \mathbb{N}^{\lrp{\mathbb{N}^{\lrp{2^{\mathbb{N}}}}}} \sim \mathbb{N}^{\lrp{\mathbb{N}^{\mathcal{P}(\mathbb{N})}}} \sim \mathbb{N}^{\lrp{2^{\mathcal{P}(\mathbb{N})}}} \sim \mathbb{N}^{\mathcal{P}(\mathcal{P}(\mathbb{N}))} \sim 2^{\mathcal{P}(\mathcal{P}(\mathbb{N}))} \sim \mathcal{P}(\mathcal{P}(\mathcal{P}(\mathbb{N}))) \\
D \sim \mathcal{P}(\mathbb{R}) \sim \mathcal{P}(\mathcal{P}(\mathbb{N})) \\
\implies A \sim D \\
}
$$
## 3
$$
\displaylines{
\text{Let } A, B: A \supseteq B \\
\text{Determine whether the following statements are correct or incorrect:} \\
\\
\text{Solution:} \\
A \preccurlyeq B \implies A \sim B \\
\text{Correct by Cantor-Bernstein theorem} \\
\\
B \sim A \cap B \implies A \sim B \\
\text{Incorrect} \\
A = \mathbb{R}, B = \mathbb{N} \\
A \cap B = \mathbb{N} \implies A \cap B \sim B \text{ but } A \not\sim B \\
\\
\exists f: B \to A \text{ injective} \implies A \sim B \\
\text{Incorrect} \\
A = \mathbb{R}, B = \mathbb{N} \\
f: B \to A, f(n) = n \\
\\
\exists f: A \to B \text{ surjective} \implies A \sim B \\
\text{Incorrect} \\
A = \mathbb{R}, B = \mathbb{N} \\
f: A \to B, f(x) = \begin{cases}
x & x \in \mathbb{N} \\
0 & \text{otherwise} \\
\end{cases} \\
\\
\exists f: A \to B \times B \text{ injective} \implies A \sim B \\
\text{Incorrect} \\
A = \Set{ 1, 2, 3 } \\
B = \Set{ 1, 2 } \\
f: A \to B , \begin{eqsys}
f(1) = (1, 1) \\
f(2) = (1, 2) \\
f(3) = (2, 1) \\
\end{eqsys} \\
\abs{A} = 3, \abs{B} = 2 \implies A \not\sim B \\
}
$$
## 4
$$
\displaylines{
\text{What is the number of labeled trees over } \Set{ 1, \dots, n } \\
\text{such that vertices } \Set{ 1, \dots, k } \text{ are leaves?} \\
\\
\text{Solution:} \\
\text{Using Prufer's encoding/decoding we will get the following property:} \\
\text{First } k \text{ labels in any Prufer sequence will be } (1, \dots, k) \\
\text{Because the smallest leaf in } i\text{-th iteration will be } i \text{ for the first } k \text{ iterations} \\
\text{After that, changes are possible} \\
\text{So the total number of Prufer sequences will be } (n-k)^{n-2} \\
}
$$
## 5
$$
\displaylines{
\text{Prove Euler's formula for connected planar graphs: } n + f - m = 2 \\
\\
\text{Proof:} \\
\text{Proof is by induction on } m \text{ number of edges} \\
\text{Let } n \in \mathbb{N} \\
\text{Base case. } m = n - 1 \implies G \text{ is a tree} \implies f = 1 \\
\implies n + f - m = n + 1-(n-1) = 2 \\
\text{Induction step. Let } \forall m' < m: n + f' - m' = 2 \\
\text{Let } m \geq n \implies G \text{ contains a cycle } C \\
\text{Let } e \in C \\
\text{Let } G' = G \setminus \Set{ e } \\
\text{Let } f' = f + 1, m' = m - 1 \text{ number of faces and edges in } G' \\
n + f - m = n + (f' + 1) - (m' + 1) = n + f' - m' = 2 \\
\implies \text{Proved by induction} \\
}
$$
## 6
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph with odd number of vertices } n > 3 \\
\text{Let } G \text{ have an Euler cycle} \\
\text{Let } G \text{ fulfill Dirak's condition - } \forall v \in V: deg(v) \geq \frac{n}{2} \\
}
$$
### 6a
$$
\displaylines{
\text{Prove: } G \text{ has at least 4 vertices with the same degree} \\
\\
\text{Proof:} \\
G \text{ has an Euler cycle} \implies \forall v \in V: deg(v) \text{ is even} \\
\implies \text{Possible values of degree for each vertex are:} \\
n-1, n-3, n-5, \dots, \frac{n+1}{2} = n - \frac{n-1}{2} \\
\text{There are less than } \frac{n}{4} \text{ possible values for the degree of each vertex} \\
\implies \text{By the pigeonhole principle there exist at least 4 vertices with the same degree} \\
}
$$
### 6b
$$
\displaylines{
\text{Prove: any Hamilton cycle in } G \text{ is not an Euler cycle} \\
\\
\text{Proof:} \\
n > 3 \implies n \geq 5 \implies  \forall v \in V: deg(v) \geq \frac{n}{2} \implies deg(v) \geq 3 \\
G \text{ has an Euler cycle} \implies \forall v \in V: deg(v) \text{ is even} \implies deg(v) \geq 4 \\
\implies \text{In any Euler cycle, each vertex will appear at least twice} \\
\text{In every Hamilton cycle, each vertex appears exactly ones, except for the first one} \\
\implies \text{Every Hamilton cycle is not an Euler cycle} \\
}
$$
## 7
$$
\displaylines{
\text{Let } G = (V, E) \text{ be } d\text{-degenerate iff} \\
\forall H \subseteq G: \delta(H) \leq d \\
}
$$
### 7a
$$
\displaylines{
\text{Let } G = (V, E) \text{ be } d\text{-degenerate} \\
\text{Prove: exists an enumeration of } V = \Set{ v_{1}, \dots, v_{n} } \text{ such that:} \\
\forall i \in [1,, n]: \abs{\Gamma(v_{i}) \cap \Set{ v_{1}, v_{2}, \dots, v_{i-1} }} \leq d \\
\\
\text{Proof:} \\
\text{Iterative construction is as follows (with no proof):} \\
\begin{align}
 & f(V, E, d): \\
1. & \quad \text{Let } v \in V: deg(v) = \delta(G) \leq d \\
2. & \quad \text{return } f(V \setminus \Set{ v }, E', d) \circ v \\
\end{align} \\
\text{Proof of existence is by induction on } n \\
\text{Base case. } n = 1 \\
\text{Trivially, } \Set{ v_{1}, \dots, v_{i-1} } = \emptyset \implies \abs{\Gamma(v_{1}) \cap \emptyset} = 0 \leq d \\
\text{Inductive step. Let } \forall G \text{ a } d\text{-degenrate graph on } n \text{ vertices}: \\
\exists \text{ enumeration } V = \Set{ v_{1}, \dots, v_{n} }: \forall i \in [1,, n]: \abs{\Gamma(v_{i}) \cap \Set{ v_{1}, v_{2}, \dots, v_{i-1} }} \leq d \\
\text{Let } G = (V, E) \text{ be a } d\text{-degenerate graph on } n+1 \text{ vertices} \\
G \subseteq G \implies \delta(G) \leq d \\
\text{Let } v \in V: deg(v) = \delta(G) \leq d \\
\text{Let } G' = G \setminus \Set{ v } \\
\forall H \subseteq G': H \subseteq G' \subseteq G \implies G' \text{ is a } d\text{-degenerate graph on } n \text{ vertices} \\
\implies \text{By inductive hypothesis exists enumeration of } V' = \Set{ v_{1}, \dots, v_{n} } \text{ such that:} \\
\forall i \in [1,, n]: \abs{\Gamma(v_{i}) \cap \Set{ v_{1}, v_{2}, \dots, v_{i-1} }} \leq d \\
\text{Consider enumeration of } V = \Set{ v_{1}, \dots, v_{n}, v } \\
\forall i \in [1, n] \text{ the condition holds} \\
i = n+1 \implies v_{n+1} = v \implies \abs{\Gamma(v_{n+1}) \cap V'} = \abs{\Gamma(v_{n+1})} = \abs{\Gamma(v)} \leq d \\
}
$$
### 7b
$$
\displaylines{
\text{Let } G = (V, E) \text{ be } d\text{-degenerate} \\
\text{Prove: } \chi(G) \leq d+1 \\
\\
\text{Proof:} \\
\text{Let } \Set{ v_{1}, \dots, v_{n} } \text{ be an enumeration of } V \text{ from 7a} \\
\text{Let } \chi: V \to [d+1] \\
\text{Let } \forall i \in [1, d]: \chi(v_{i}) = i \\
\forall i \in [d+1, n]: \abs{\Gamma(v_{i}) \cap \Set{ v_{1}, \dots, v_{i-1} }} \leq d \\
\implies \exists j \in [1, d+1]: \forall u \in \Gamma(v_{i}) \cap \Set{ v_{1}, \dots, v_{i-1} }: \chi(u) \neq j \implies \chi(v_{i}) = j \\
\chi \text{ is then a proper $(d+1)$-coloring of } G \\
}
$$
## 8
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph with } n \text{ vertices} \\
\text{Let } G \text{ contains at most } 16n \text{ different } K_{4} \text{ as an induced subgraph} \\
\text{Prove: } \exists V' \subseteq V: \abs{V'} \geq \frac{3n}{16} \text{ and } K_{4} \not\subseteq G[V'] \\
\\
\text{Proof:} \\
\text{Let } V' \subseteq V \text{ be a random subset of } V \\
\text{Let } \forall v \in V: P(v \in V') = p \\
\text{Let } G' = G[V'] \\
\text{Let } \mathcal{V} = \Set{ V_{1}, \dots, V_{k} } \\
\forall i \in [1, k]: V_{i} \subseteq V, \abs{V_{i}} = 4 \text{ and } G[V_{i}] = K_{4} \\
k \leq 16n \\
\forall i \in [1, k]: P(G'[V_{i}] = K_{4}) = P(V_{i} \subseteq V') = p^{4} \\
\\
\text{Let } X = \text{number of vertices in } V' \\
\text{Let } Y = \abs{\Set{ V_{i} \in \mathcal{V} \mid G'[V_{i}] = K_{4} }} \\
E[X] = \sum_{i=1}^{n} P(v_{i} \in V') = np \\
E[Y] = \sum_{i=1}^{k} P(G'[V_{i}] = K_{4}) = kp^{4} \leq 16np^{4} \\
\text{Let us remove one vertex from each } V_{i} \subseteq V' \text{ to obtain } V'' \\
G[V''] \text{ has no } K_{4} \text{ as an induced subgraph} \\
\text{Clearly, } \abs{V''} \geq X - Y \text{ as we can remove at most one vertex from every } K_{4} \\
E[X - Y] = E[X] - E[Y] \geq np - 16np^{4} = n(p - 16p^{4}) \\
(p-16p^{4})' = 1 - 64p^{3} \\
1 - 64p^{3} = 0 \iff p = \frac{1}{4} \\
\text{Let } p = \frac{1}{4} \\
\implies E[X-Y] \geq n\left( \frac{1}{4} - \frac{1}{16} \right) = \frac{3n}{16} \\
\implies \text{Exists } V' \text{ such that } \abs{V''} \geq X - Y \geq \frac{3n}{16} \\
V'' \subseteq V \text{ is then the required subset of } V \\
}
$$
## 9a
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a } d\text{-regular graph} \\
\text{Let } \abs{V} = 2k + 1 \\
\text{What is the chromatic index } \chi'(G)? \\
\\
\text{Solution:} \\
\text{By Vizing's theorem } d = \Delta(G) \leq \chi'(G) \leq \Delta(G)+1 \\
\text{Note that } 2\abs{E} = \sum_{v \in V} deg(v) = \abs{V}d = (2n+1)d \\
\implies d \text{ is even} \\
\text{Let by contradiction } \chi'(G) = \Delta(G) = d \\
\text{Let } \chi': V \to [d] \text{ be a proper edge coloring of } G \\
\text{Let } \forall i \in [d]: E_{i} = \Set{ e \in E \mid \chi'(e) = i } \\
\forall i \in [d]: E_{i} \text{ is a matching in } G \\
\text{Let } v \in V \\
deg(v) = d \implies v \text{ is incident to } e_{1}, \dots, e_{d} \\
\text{And } \forall i \neq j \in [d]: \chi'(e_{i}) \neq \chi'(e_{j}) \\
\implies \forall i \in [d]: v \text{ is incident to } E_{i} \\
\implies \forall i \in [d]: E_{i} \text{ is a perfect matching in } G \\
\abs{V} = n \text{ is odd} - \text{Contradiction!} \\
\implies \chi'(G) > d \implies \chi'(G) = d + 1 = \Delta(G) + 1 \\
}
$$
## 9b
$$
\displaylines{
\text{Set of edges } M \text{ is called a pseudo-matching iff} \\
\text{each vertex } v \in V \text{ is incident to at least one edge and at most 2 edges in } M \\
\text{Let } G = (V, E) \text{ be a simple } d\text{-regular graph where } d \geq 2 \\
\text{Prove: } G \text{ has a pseudo-matching} \\
\\
\text{Proof:} \\
\text{By Vizing's theorem, } \chi'(G) \leq \Delta(G) + 1 = d + 1 \\
\text{Let } \chi': G \to [d+1] \text{ be a proper edge coloring of } G \\
\text{Let } \forall i \in [d+1]: E_{i} = \Set{ e \in E \mid \chi'(e) = i } \\
\text{Let } M = E_{1} \cup E_{2} \\
\forall v \in V: v \text{ is incident to at most two edges in } M \\
\forall v \in V: \begin{eqsys}
v \text{ is not incident to } E_{1} \implies v \text{ is incident to } E_{2} \\
v \text{ is not incident to } E_{2} \implies v \text{ is incident to } E_{1} \\
\end{eqsys} \implies v \text{ is incident to } M \\
}
$$
