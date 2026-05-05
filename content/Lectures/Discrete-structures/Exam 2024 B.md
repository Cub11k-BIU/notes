---
{"publish":true,"created":"02/02/26, 16:06","modified":"2026-03-24T15:00:28.576+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

# Part A
## 1
$$
\displaylines{
\text{Prove Cantor's theorem: } \forall A: A \not\sim \mathcal{P}(A) \\
\\
\text{Proof:} \\
\text{Let } f: A \to \mathcal{P}(A) \\
\text{Let } \forall B \in \mathcal{P}(A): \chi_{B}: A \to \Set{ 0, 1 }, \chi(a) = \begin{cases}
1 & a \in B \\
0 & a \not\in B \\
\end{cases} \\
\text{Let } C = \Set{ a \in A \mid a \not\in f(a) } \\
\forall a \in A: \begin{eqsys}
a \in f(a) \implies a \not\in C \\
a \not\in f(a) \implies a \in C \\
\end{eqsys} \\
\implies \forall a \in A: f(a) \neq C \implies f \text{ is not surjective} \\
\implies A \not\sim \mathcal{P}(A) \\
}
$$
## 2a
$$
\displaylines{
\text{Correct/Incorrect:} \\
\forall A, B: A \preccurlyeq B \text{ and } A \not\sim B \iff \exists f: A \to B \text{ injective and not surjective} \\
\\
\text{Solution:} \\
\text{Incorrect} \\
\text{Let } A = B = \mathbb{N} \\
\text{Let } f: \mathbb{N} \to \mathbb{N}, f(n) = n + 1 \\
f \text{ is clearly injective} \\
\mathrm{Im}f = \mathbb{N} \setminus \Set{ 0 } \neq \mathbb{N} \\
\implies f \text{ is not surjective} \\
\exists f: A \to B \text{ injective and not surjective} \\
\text{But } A \sim B \\
}
$$
## 2b
$$
\displaylines{
\text{Correct/Incorrect: } \forall A, B: A \subseteq B \text{ and } A \sim B \implies A = B \\
\\
\text{Incorrect:} \\
A = \mathbb{N} \setminus \Set{ 0 } \\
B = \mathbb{N} \\
A \subseteq B \\
A \sim B \text{ with } f: A \to B, f(n) = n - 1 \\
\text{But } A \neq B \\
}
$$
## 3
$$
\displaylines{
\text{Let } R = R(t_{1}, t_{2}, t_{3}) \\
\text{Be the smallest number such that every edge coloring of } K_{R} \text{ in three colors} \\
\text{has a monochromatic subgraph } K_{t_{i}} \\
\text{Essentially a Ramsey number but for three colors} \\
\text{Prove: } R(t_{1}, t_{2}, t_{3}) \leq R(t_{1} - 1, t_{2}, t_{3}) + R(t_{1}, t_{2}, t_{3} - 1) + R(t_{1}, t_{2}, t_{3} - 1) - 1 \\
\\
\text{Proof:} \\
\text{Assuming } t_{1}, t_{2}, t_{3} \geq 2 \\
\text{Let } R = R(t_{1} - 1, t_{2}, t_{3}) + R(t_{1}, t_{2}, t_{3} - 1) + R(t_{1}, t_{2}, t_{3} - 1) - 1 \\
\text{Let there be some 3-coloring of edges of } K_{R} \\
\text{Let } v \in V(K_{R}) \\
v \text{ is incident to } R-1 \text{ edges} \\
\implies \text{One of the following is true:} \\
\begin{cases}
v \text{ is incident to at least } R(t_{1} - 1, t_{2}, t_{3}) \text{ edges of color 1} \\
v \text{ is incident to at least } R(t_{1}, t_{2} - 1, t_{3}) \text{ edges of color 2} \\
v \text{ is incident to at least } R(t_{1}, t_{2}, t_{3} - 1) \text{ edges of color 3} \\
\end{cases} \\
\text{Otherwise } v \text{ is incident to at most} \\
R(t_{1} - 1, t_{2}, t_{3}) + R(t_{1} - 1, t_{2}, t_{3}) + R(t_{1} - 1, t_{2}, t_{3}) - 3 = R - 2 \text{ edges} \\
\text{Let } v \text{ be incident to } R(t_{1} - 1, t_{2}, t_{3}) \text{ edges of color 1 (similar proof for other colors)} \\
\text{Let } V_{1} = \Set{ u \in V(K_{R}) \mid \Set{ v, u } \text{ is of color 1} } \subseteq \Gamma(v) \\
\abs{V_{1}} \geq R(t_{1} - 1, t_{2}, t_{3}) \implies K_{R}[V_{1}] \text{ contains a clique of color 1 of size } t_{1} - 1 \\
\text{or a clique of color 2 of size } t_{2} \text{ or a clique of color 3 of size } t_{3} \\
\text{All three cases give us a clique of color 1 of size } t_{1}(V_{1} \cup \Set{ v }) \\
\text{or a clique of color 2(3) of size } t_{2}(t_{3}) \text{ in } K_{R} \\
}
$$
## 4
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a } k \text{-critical graph} \\
\text{Meaning that } \chi(G) = k \text{ and } \forall H \subseteq G: \abs{V(H)} < V \implies \chi(H) < \chi(G) \\
\text{Show that } \delta(G) \geq k - 1 \\
\\
\text{Solution:} \\
\text{Let by contradiction } \delta(G) < k-1 \\
\implies \exists v \in G: deg(v) \leq k-2 \\
\text{Let } H = G \setminus \Set{ v } \\
G \text{ is } k\text{-critical} \implies \chi(H) \leq k-1 \\
\text{Let there be a coloring } \chi_{H}: H \to [k-1] \\
\text{As } v \text{ has at most } k-2 \text{ neighbors, it will have an available color from } [k-1] \\
\implies \chi(G) \leq k-1 - \text{Contradiction!} \\
\implies \delta(G) \geq k-1 \\
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
\text{Let } G = (V, E) \text{ be a simple graph} \\
\text{Let } G' = (V, E') \\
E' = \Set{ \Set{ u, v } \mid u \neq v \in V \text{ and } \exists w \in V: \Set{ u, w }, \Set{ w, v } \in E } \\
}
$$
### 6a
$$
\displaylines{
\text{Prove or disprove: } G \text{ is planar} \implies G' \text{ is planar} \\
\\
\text{Disproof:} \\
\text{Let } G = (V, E) \\
V = \Set{ v_{0}, v_{1}, v_{2}, v_{3}, v_{4} } \\
E = \Set{ \Set{ v_{i}, v_{j} } \mid i, j \in [0, 3] } \cup \Set{ \Set{ v_{4}, v_{i} } \mid i \in [0, 2] } \\
G \text{ is planar (see illustration)} \\
\forall i, j, k \in [0, 3]: \Set{ v_{i}, v_{j} }, \Set{ v_{j}, v_{k} } \in E \implies \forall i, k \in [0, 3]: \Set{ v_{i}, v_{k} } \in E' \\
\forall i, j \in [0, 2]: \Set{ v_{4}, v_{i} }, \Set{ v_{i}, v_{j} } \in E \implies \forall j \in [0, 2]: \Set{ v_{4}, v_{j} } \in E' \\
\Set{ v_{4}, v_{0} }, \Set{ v_{0}, v_{3} } \in E \implies \Set{ v_{4}, v_{3} } \in E' \\
\implies G' = K_{5} \text{ which is not planar} \\
}
$$
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}[
    node distance=2cm,
    main/.style={circle, draw, thick, minimum size=6mm, font=\bfseries}
]

    % Vertical central nodes (x = 0)
    \node[main] (4) at (0, 3) {$v_4$};
    \node[main] (0) at (0, 1.2) {$v_0$};
    \node[main] (3) at (0, -0.6) {$v_3$};

    % Mirrored side nodes (equidistant from x = 0)
    \node[main] (2) at (-2.5, -2) {$v_2$};
    \node[main] (1) at (2.5, -2) {$v_1$};

    % Edges connecting to the top vertex
    \draw[thick] (4) -- (2);
    \draw[thick] (4) -- (1);
    \draw[thick] (4) -- (0);
    
    % Edges connecting to node 0
    \draw[thick] (0) -- (1);
    \draw[thick] (0) -- (2);
    \draw[thick] (0) -- (3);
    
    % Edges connecting to node 3
    \draw[thick] (3) -- (1);
    \draw[thick] (3) -- (2);
    
    % The base edge
    \draw[thick] (2) -- (1);

\end{tikzpicture}
\end{document}
```
### 6b
$$
\displaylines{
\text{Prove or disprove: } G' \text{ is planar} \implies G \text{ is planar} \\
\\
\text{Disproof:} \\
\text{Let } G = K_{3,3} \\
V = \Set{ v_{1}, v_{2}, v_{3}, u_{1}, u_{2}, u_{3} } \\
E = \Set{ \Set{ v_{i}, u_{j} } \mid i, j \in [1, 3] } \\
G' = (V, E') \\
G \text{ has no triangles} \implies \forall e \in E: e \not\in E' \\
\implies E' = \Set{ \Set{ v_{i}, v_{j} } \mid i \neq j \in [1, 3] } \cup \Set{ \Set{ u_{i}, u_{j} } \mid i \neq j \in [0, 3] } \\
\implies G' = K_{3} \cup K_{3} \text{ which is planar} \\
}
$$
## 7
$$
\displaylines{
\text{Let } G = (V_{1}, V_{2}, E) \text{ be a bipartite graph} \\
\text{Let } \abs{V_{1}} = \abs{V_{2}} = n \\
\text{Let } \delta(G) \geq \frac{n}{2} \\
\text{Prove: } G \text{ has a perfect matching} \\
\\
\text{Proof:} \\
\text{Let } S \subseteq V_{1} \\
\text{Case 1. } \abs{S} \leq \frac{n}{2} \\
\implies \forall s \in S: \abs{\Gamma(S)} \geq \abs{\Gamma(s)} \geq \frac{n}{2} \geq \abs{S} \\
\text{Case 2. } \abs{S} > \frac{n}{2} \\
\text{Let } R = V_{2} \setminus \Gamma(S) \\
\abs{R} = 0 \implies \abs{\Gamma(S)} = n \geq \abs{S} \\
\text{Let } \abs{R} > 0 \\
\implies \forall r \in R: \abs{\Gamma(R)} \geq \abs{\Gamma(r)} \geq \frac{n}{2} \\
\implies \exists s \in S: s \in \Gamma(r) \implies r \in \Gamma(s) \subseteq \Gamma(S) - \text{Contradiction!} \\
\implies \abs{R} = 0 \implies \abs{\Gamma(S)} = n \geq \abs{S} \\
\implies \forall S \subseteq V_{1}: \abs{\Gamma(S)} \geq \abs{S} \implies \text{By Hall's theorem } G \text{ has a perfect matching} \\
}
$$
## 8
$$
\displaylines{
\text{Solve the following recursive formula:} \\
a_{n} = 4a_{n-1} - a_{n-2} - 6a_{n-3} + 12 \\
a_{0} = 3 \\
a_{1} = -2 \\
a_{2} = 2 \\
\\
\text{Solution:} \\
\text{Non-homogeneous solution:} \\
\text{Let } a_{n} = c \\
\implies c = 4c - c - 6c + 12 \implies 4c = 12 \implies c = 3 \\
\text{Homogeneous solution:} \\
a_{n} = 4a_{n-1} - a_{n-2} - 6a_{n-3} \\
\text{Characteristic polynomial is} \\
x^{3} - 4x^{2} + x + 6 = (x+1)(x^{2} - 5x + 6) = (x+1)(x-3)(x-2) \\
\\
\implies a_{n} = A_{1} \cdot (-1)^{n} + A_{2} \cdot 2^{n} + A_{3} \cdot 3^{n} \\
\text{Final solution:} \\
a_{n} = A_{1} \cdot (-1)^{n} + A_{2} \cdot 2^{n} + A_{3} \cdot 3^{n} + 3 \\
\implies \begin{eqsys}
A_{1} + A_{2} + A_{3} + 3 = 3 \\
-A_{1} + 2A_{2} + 3A_{3} + 3 = -2 \\
A_{1} + 4A_{2} + 9A_{3} + 3 = 2 \\
\end{eqsys} \implies \begin{eqsys}
A_{1} + A_{2} + A_{3} = 0 \\
A_{1} - 2A_{2} - 3A_{3} = 5 \\
A_{1} + 4A_{2} + 9A_{3} = -1 \\
\end{eqsys} \\
\implies \begin{eqsys}
A_{1} + A_{2} + A_{3} = 0 \\
3A_{2} + 4A_{3} = -5 \\
3A_{2} + 8A_{3} = -1 \\
\end{eqsys} \implies \begin{eqsys}
A_{1} + A_{2} + A_{3} = 0 \\
3A_{2} + 4A_{3} = -5 \\
4A_{3} = 4 \\
\end{eqsys} \implies \begin{eqsys}
A_{1} = 2 \\
A_{2} = -3 \\
A_{3} = 1 \\
\end{eqsys} \\
\implies a_{n} = 2 \cdot (-1)^{n} - 3 \cdot 2^{n} + 3^{n} + 3 \\
}
$$
