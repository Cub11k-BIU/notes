---
{"publish":true,"created":"03/02/26, 14:33","modified":"2026-03-24T15:00:28.597+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

## 1
$$
\displaylines{
\text{Let } a_{n} \text{ be the number of strings of length } n \text{ over } \Set{ 0, 1, 2 } \\
\text{that do not contain } 00 \\
\text{Find recursive formula for } a_{n} \\
\text{Determine the set of vectors that are in the vector space of its solutions} \\
\\
\text{Solution:} \\
\text{If the sequence starts with 1 or 2, there are } a_{n-1} \text{ options} \\
\text{If the sequence starts with 0, there are } 2a_{n-2} \text{ options} \\
\implies a_{n} = 2a_{n-1} + 2a_{n-2} \\
x^{2} - 2x - 2 = (x-1)^{2} - 3 = (x-1-\sqrt{ 3 })(x-1+\sqrt{ 3 }) \\
\implies a_{n} = A_{1} \cdot (1+\sqrt{ 3 })^{n} + A_{2} \cdot (1-\sqrt{ 3 })^{n} \\
\implies \text{The only nswer from the given choices is } \Set{ 5 \cdot (1 + \sqrt{ 3 })^{n} }_{n \geq 0} \\
}
$$
## 2
$$
\displaylines{
\text{Let } A, B, C \text{ be non-empty sets} \\
\text{Determine correctness of the following statements} \\
\\
\text{Solution:} \\
\aleph_{0} \preccurlyeq A, B \implies A + B \sim A \cap B \\
\text{Incorrect} \\
\text{Let } A \cap B = \emptyset \\
\\
1 \not\in A \implies A \cup \Set{ 1 } \sim A \\
\text{Incorrect} \\
\text{Let } A = \Set{ 2, 3, 4 } \\
\abs{A} = 3 \neq 4 = \abs{A \cup \Set{ 1 }} \\
\\
(A + B) \times C \sim A^{C} + B^{C} \\
\text{Incorrect} \\
A = \Set{ 2, 3 }, B = \Set{ 2, 3, 4 }, C = \Set{ 1, 2 } \\
\abs{(A + B) \times C} = (\abs{A}+\abs{B}) \cdot \abs{C} = 10 \\
\begin{eqsys}
\abs{A^{C}} = 4 \\
\abs{B^{C}} = 9 \\
\end{eqsys} \implies \abs{A^{C} + B^{C}} = 13 \neq 10 \\
\\
A \sim \aleph_{0} \implies A + B \sim A \cup B \\
\text{Correct} \\
\text{If } B \text{ is finite then } A + B \sim \aleph_{0} \sim A \cup B \\
\text{If } B \sim \aleph_{0} \text{ then } A + B \sim \aleph_{0} \sim A \cup B \\
\text{If } \aleph \preccurlyeq B \text{ then } A + B \sim \aleph \sim A \cup B \\
\\
\aleph_{0} \preccurlyeq A, B \implies A^{B} \sim B^{A} \\
\text{Incorrect} \\
A = \mathbb{N}, B = \mathbb{R} \\
A^{B} \sim \mathbb{N}^{\mathbb{R}} \sim 2^{\mathbb{R}} \\
B^{A} \sim \mathbb{R}^{\mathbb{N}} \sim \mathbb{R} \\
}
$$
## 3
$$
\displaylines{
\text{Let } S = \Set{ f: \mathbb{R}_{\geq 0} \to \mathbb{Q} \cap \left( \bigcup_{k \in \mathbb{Z}}[2k, 2k+1] \right) } \\
\text{Find power of } S \\
\\
\text{Solution:} \\
\mathbb{R}_{\geq 0} \sim \mathbb{R} \sim \aleph \\
\mathbb{Q} \cap \left( \bigcup_{k \in \mathbb{Z}}[2k, 2k+1] \right) \sim \mathbb{Q} \sim \mathbb{N} \sim \aleph_{0} \\
\implies S \sim \aleph_{0}^{\aleph} \sim 2^{\aleph} \\
}
$$
## 4
$$
\displaylines{
\text{Let } G \text{ be a connected planar graph} \\
\text{Let } G \text{ has an Euler cycle} \\
\text{Let } \delta(G) \geq 3 \\
\text{What is the minimal number of vertices in } G? \\
\\
\text{Solution:} \\
G \text{ has an Euler cycle} \implies \forall v \in V: deg(v) \text{ is even} \implies deg(v) \geq 4 \\
\implies \abs{V} \geq 5 \\
\abs{V} = 5 \implies G = K_{5} \text{ which is not planar} \\
\implies \abs{V} \geq 6 \\
\text{Let } \abs{V} = 6 \text{ and } \forall v \in V: deg(v) = 4 \\
\text{This is a triangulated graph on 6 vertices} \\
\text{An Euler cycle is then:} \\
(0, 1, 2, 3, 1, 4, 3, 5, 4, 0, 5, 2, 0) \\
}
$$
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}[
    every node/.style={
        draw, 
        circle, 
        thick, 
        minimum size=6mm, 
        font=\bfseries,
        inner sep=0pt
    },
    edge/.style={
        thick
    }
]

    % Define nodes on two circles for symmetry
    % Outer Triangle (at radius 3)
    \node (3) at (90:2.8) {3};
    \node (2) at (210:2.8) {2};
    \node (5) at (330:2.8) {5};

    % Inner Triangle (at radius 1.2, rotated to align with gaps)
    \node (1) at (150:0.8) {1};
    \node (0) at (270:0.8) {0};
    \node (4) at (30:0.8) {4};

    \draw[edge] (0) -- (1);
	\draw[edge] (1) -- (2);
	\draw[edge] (2) -- (3);
	\draw[edge] (3) -- (1);
	\draw[edge] (1) -- (4);
	\draw[edge] (4) -- (3);
	\draw[edge] (3) -- (5);
	\draw[edge] (5) -- (4);
	\draw[edge] (4) -- (0);
	\draw[edge] (0) -- (5);
	\draw[edge] (5) -- (2);
	\draw[edge] (2) -- (0);

\end{tikzpicture}
\end{document}
```
## 5
$$
\displaylines{
\text{Prove the interesting direction of Hall's theorem} \\
\\
\text{Proof:} \\
\boxed{ \impliedby } \text{ Let } \forall S \subseteq L: \abs{S} \leq \abs{\Gamma(S)} \\
\text{Base case. } n = \abs{L} = \abs{R} = 1 \\
\text{Trivially, the graph contains two vertices and one edge} \\
\text{Induction step. Let } \forall n' < n: n' = \abs{L} = \abs{R} \text{ the theorem holds} \\
\text{Let } G = (L \cup R, E) \text{ be a bipartite graph with } \abs{L} = \abs{R} = n \\
\\
\text{Case 1. } \forall S \subset L : \abs{S} < \abs{\Gamma(S)} \\
\text{Let } u \in L, v \in \Gamma(u) \\
\text{Let } G' = (L \setminus \Set{ u } \cup R \setminus \Set{ v }, E') \\
G' \text{ is bipartite, } \abs{L} = \abs{R} = n-1 \\
\forall S \subseteq L': \abs{\Gamma_{G'}(S)} = \abs{\Gamma_{G}(S) \setminus \Set{ v }} \geq \abs{\Gamma_{G}(S)} - 1 \geq \abs{S} + 1 - 1 = \abs{S} \\
\implies G' \text{ has a perfect matching } M' \\
\implies G \text{ has a perfect matching } M' \cup \Set{ \Set{ v, u } } \\
\\
\text{Case 2. } \exists S \subset L: \abs{S} = \abs{\Gamma(S)} \\
\text{Let } G_{1} = G[S \cup \Gamma(S)], G_{2} = G[V \setminus (S \cup \Gamma(S))] \\
\text{Clearly, } G_{1} \text{ is bipartite} \\
\forall S' \subseteq S: \abs{\Gamma_{G_{1}}(S')} = \abs{\Gamma_{G}(S')} \geq \abs{S'} \implies G_{1} \text{ has a perfect matching } M_{1} \\
G_{2} \text{ is also bipartite} \\
\forall S' \subseteq L \setminus S: \abs{\Gamma_{G_{2}}(S')} = \abs{\Gamma_{G}(S' \cup S)} - \abs{\Gamma_{G}(S)} \geq \abs{S' \cup S} - \abs{S} = \abs{S'} \\
\implies G_{2} \text{ has a perfect matching } M_{2} \implies G \text{ has a perfect matching } M_{1} \cup M_{2} \\
}
$$
## 6a
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } \forall S \subseteq V: \abs{S} \leq \frac{n}{2} \implies o(G \setminus S) \leq \abs{S} \\
\text{Prove or disprove: } G \text{ has a perfect matching} \\
\\
\text{Proof:} \\
\text{It is almost Tutte's theorem, except for the upper boundary on the size of } S \\
\text{Let } S \subseteq V: \abs{S} > \frac{n}{2} \\
G \setminus S = (V \setminus S, E') \\
o(G \setminus S) \leq \abs{V \setminus S} < \frac{n}{2} < \abs{S} \\
\implies o(G \setminus S) < S \implies \text{By Tutte's theorem } G \text{ has a perfect matching} \\
}
$$
## 6b
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } \forall S \subseteq V: \abs{S} \leq \frac{n}{3} \implies o(G \setminus S) \leq \abs{S} \\
\text{Prove or disprove: } G \text{ has a perfect matching} \\
\\
\text{Disproof:} \\
\text{Let } G = K_{4,6} = (L, C, E) \\
\text{Let } L = \Set{ l_{i} \mid i \in [1, 6] } \\
\text{Let } C = \Set{ c_{i} \mid i \in [1, 4] } \\
n = 10 \\
\text{Let } S \subseteq V: \abs{S} \leq \frac{n}{3} \implies \abs{S} \leq 3 \\
\abs{S} = 0 \implies o(G \setminus S) = 0 \\
\abs{S} = 1 \implies o(G \setminus S) = 1 \\
\abs{S} = 2 \implies o(G \setminus S) = 0 \\
\abs{S} = 3 \implies o(G \setminus S) = 1 \\
\text{But } G \text{ has no perfect matching as } \abs{L} \neq \abs{C} \\
}
$$
## 7
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a bipartite graph} \\
\text{A line graph of } G \text{ is then defined as:} \\
L(G) = (E, L(E)) \\
L(E) = \Set{ \Set{ e, e' } \mid e, e' \in E: e \cap e' \neq \emptyset } \\
\text{Prove: line graph } L(G) \text{ is perfect} \\
\\
\text{Proof:} \\
L(G) \text{ is perfect} \iff \forall A \subseteq E: \chi(L(G)[A]) = \omega(L(G)[A]) \\
\text{Let } A \subseteq E \\
L(G)[A] = (A, L(A)) \\
L(A) = \Set{ \Set{ e, e' } \mid e, e' \in A: e \cap e' \neq \emptyset } \\
\text{Let } V_{A} = \Set{ v \in V \mid \exists e \in A: v \in e } \\
\text{Let } G_{A} = (V_{A}, A) \\
\text{Then } L(G)[A] = L(G_{A}) \\
\implies \chi(L(G)[A]) = \chi(L(G_{A})) = \chi'(G_{A}) \\
G_{A} \subseteq G \implies G_{A} \text{ is bipartite} \implies \text{By Konig's theorem } \chi'(G_{A}) = \Delta(G_{A}) \\
\implies \chi(L(G_{A})) = \chi'(G_{A}) = \Delta(G_{A}) \\
G_{A} \text{ is bipartite} \implies \Delta(G_{A}) = \omega(L(G_{A})) \\ 
\implies \chi(L(G)[A]) = \omega(L(G)[A]) \implies L(G) \text{ is perfect} \\
}
$$
## 8
$$
\displaylines{
\text{Let } m, n \geq 1: \binom{m}{n} \cdot 2^{1-\binom{n}{2}} < 1 \\
\text{Prove: } R(n, n) > m \\
\\
\text{Proof:} \\
\text{Let there be a random red-blue coloring of } K_{m} \\
\text{Let } S \subseteq V(K_{m}) \\
P(K_{m}[S] \text{ is a red clique}) = P\lrp{\binom{\abs{S}}{2} \text{ edges are red}} = \frac{1}{2^{\binom{\abs{S}}{2}}} \\
\text{Let } \abs{S} = n \\
\implies P(K_{m}[S] \text{ is a red clique or a blue clique}) = \frac{2}{2^{\binom{n}{2}}} \\
\text{Number of ways to choose such } S \text{ is } \binom{m}{n} \\
\text{Let } \forall S \subseteq V, \abs{S} = n: A_{S} = K_{m}[S] \text{ is a red or a blue clique} \\
\implies P(K_{m} \text{ contains a red or a blue } K_{n}) = P\left( \bigcup_{S \subseteq V(K_{m})} A_{S} \right) \leq \\ \leq \sum_{S \subseteq V(K_{m})} P(A_{S}) = \binom{m}{n} \cdot 2^{1-\binom{n}{2}} \\
R(n, n) > m \iff \exists \text{ a red-blue coloring of } K_{m} \text{ with no red and no blue clique} \\
\iff P(K_{m} \text{ contains a red or a blue } K_{n}) < 1 \\
\\
\binom{m}{n} \cdot 2^{1-\binom{n}{2}} < 1 \implies P(K_{m} \text{ contains a red or a blue } K_{n}) \leq \binom{m}{n} \cdot 2^{1-\binom{n}{2}} < 1 \\
\implies R(n, n) > m \\
}
$$
## 9
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } G^{3} = (V, E') \\
E' = \Set{ \Set{ u, v } \mid u \neq v \in V: d(u, v) \leq 3 } \\
\\
\text{Prove: } T = (V, E) \text{ is a tree} \implies T^{3} \text{ has a Hamilton path} \\
\\
\text{Proof:} \\
\text{Proof is by induction on } n \text{ number of vertices} \\
\text{Base case. } n = 1, n = 2, n = 3 \\
\text{Trivially holds} \\
\text{Inductive step. } n \geq 3 \\
\text{Let } \forall T \text{ a tree on } n \text{ vertices}: \forall \Set{ u, v } \in E: T^{3} \text{ has a Hamilton path from } u \text{ to } v \\
\text{Let } T = (V, E) \text{ be a tree on } n+1 \text{ vertices} \\
\text{Let } \Set{ x, y } \in E \\
\text{Let } T' = (V, E \setminus \Set{ \Set{ x, y } }) \\
T' \text{ is a forest with two connected components, } T'_{x}, T'_{y} \\
\text{Both } T_{x}', T_{y}' \text{ are trees with at most } n-1 \text{ vertices} \\
\\
\text{Case 1. } T_{x}' \text{ is a single vertex (symmetrically for $T_{y}'$)} \\
\text{Then } T_{y}' \text{ is a tree with } n-1 \text{ vertices} \\
\text{Let } \Set{ y, v } \in E(T_{y}') \\
\implies (T_{y}')^{3} \text{ has a Hamilton path from } v \text{ to } y \\
(v, \dots, y) \\
\Set{ y, v } \in E(T_{y}') \implies \Set{ y, v } \in E \implies (x, y, v) \in T \implies d_{T}(x, v) \leq 2 \\
\implies \Set{ x, v } \in E(T^{3}) \implies (x, v, \dots, y) \text{ is a Hamilton path in } T^{3} \\
\\
\text{Case 2. Both } T_{x}', T_{y}' \text{ have at least } 2 \text{ vertices} \\
\implies \exists \Set{ u, x } \in E(T_{x}'), \Set{ y, v } \in E(T_{y}') \\
T_{x}' \text{ is a tree with at most } n-2 \text{ vertices} \\
\implies (T_{x}')^{3} \text{ has a Hamilton path from } x \text{ to } u \\
(x, \dots, u) \\
T_{y}' \text{ is a tree with at most } n-2 \text{ vertices} \\
\implies (T_{y}')^{3} \text{ has a Hamilton path from } v \text{ to } y \\
(v, \dots, y) \\
\Set{ u, x }, \Set{ y, v } \in E(T') \implies \Set{ u, x }, \Set{ x, y }, \Set{ y, v } \in E \\
\implies (u, x, y, v) \in T \implies d(u, v) \leq 3 \implies \Set{ u, v } \in T^{3} \\
\implies (x, \dots, u, v, \dots, y) \text{ is a Hamilton path in } T^{3} \\
}
$$