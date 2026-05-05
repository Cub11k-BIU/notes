---
{"publish":true,"created":"02/12/25, 08:51","modified":"2026-03-24T15:00:28.477+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

## Berge theorem #theorem 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } M \text{ be a matching in } G \\
\text{Then, } M \text{ is a maximum matching} \iff G \text{ has no expanding path} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } M \text{ be a maximum matching} \\
\text{Let by contradiction } \exists P: (v_{0} \dots, v_{2k+1}) \text{ expanding path} \\
\text{Note that an alternating path is necessarily of odd length} \\
\text{Let } \forall i \in [1, 2k+1]: e_{i} = \Set{ v_{i-1}, v_{i} } \\
\text{Let } P_{odd} = \Set{ e_{2i+1} | i \in [1, k] }, P_{even} = \Set{ e_{2i} | i \in [1, k] } \\
P_{even} \subseteq M, P_{odd} \cap M = \emptyset, P_{even} \cap P_{odd} = \emptyset \\
\text{Let } M' = (M \setminus P_{even}) \cup P_{odd} \\
\\
u \not\in P \implies u \text{ is incident to a single edge in } M \implies \text{ it is incident to that edge in } M' \\
u \in \Set{ v_{0}, v_{2k+1} } \implies u \text{ is } M\text{-unsaturated and we added exactly one edge to it in } M' \\
u \in \Set{ v_{1}, \dots, v_{2k} } \implies u \text{ is incident to two edges in } P, \text{ one in } P_{even}, \text{ one in } P_{odd} \\
\text{We remove the edge from } P_{even}  \text{ and add an edge from } P_{odd} \text{ to } M' \\
\implies u \text{ is incident to exactly one edge in } M' \implies M' \text{ is a matching} \\
\abs{M'} > \abs{M} - \text{Contradiction!} \implies G \text{ has no expanding path} \\
\\
\boxed{ \impliedby } \text{ Let } M \text{ be a matching such that there is no expanding path in } G \\
\text{Let } M' \text{ be a matching, } \abs{M'} > \abs{M} \\
\text{Let } G_{\triangle} = (V, M \triangle M') \\
\forall v \in V: deg_{G_{\triangle}}(v) \leq 2 \implies G \text{ is a collection of paths and cycles} \\
\text{Cycles contain the same number of edges from } M \text{ and } M' \\
\abs{M} < \abs{M'} \implies \exists P \text{ a path containing more edges from } M' \text{ than from } M \\
P \text{ must be alternating} \implies P \text{ starts and ends with edges from } M' \\
\implies P \text{ is an expanding path} - \text{Contradiction!} \\
\implies M \text{ is a maximm matching} \\
}
$$

## Tutte theorem #theorem 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } o(H) \text{ denote the number of connected components of odd size in } H \\
\text{Then, } G \text{ has a perfect matching} \iff \forall S \subseteq V: o(G \setminus S) \leq \abs{S} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } G \text{ has a perfect matching } M \\
\text{Let } S \subseteq V \\
\text{Let } C \text{ be a connected component of odd size in } G \setminus S \\
\exists e = \Set{ v_{C}, u_{C} } \in M: v_{C} \in C, u_{C} \not\in C \\
u_{C} \in S \text{ as otherwise it would be in } C \\
\implies \text{For each connected componenet of odd size in } G \setminus S \text{ there exists a vertex in } S \\
\implies o(G \setminus S) \leq \abs{S} \\
\\
\boxed{ \impliedby } \\
\text{Let by contradiction be a graph fulfilling the condition but has no perfect matching} \\
\text{First step, maximality assumption} \\
\text{Let } \mathcal{G}_{n} \text{ be the set of all } n \text{ vertex graphs that fulfill Tutte's condition} \\
\text{but do not have a perfect matching} \\
\text{By our assumption, } \mathcal{G}_{n} \neq \emptyset \\
\text{Let } G = (V, E) \in \mathcal{G}_{n} \text{ be a maximal graph} \\
\forall e \not\in E: G' = (V, E \cup \Set{ e }) \text{ still fulfills the condition, } \forall S \subseteq V: o(G' \setminus S) \leq o(G \setminus S) \\
G \text{ is maximal} \implies G' \text{ has a perfect matching} \\
\text{We found a graph } G \text{ without a perfect matching,} \\
\text{but adding any edge would create a perfect matching} \\
\\
\text{Second step, remove the outlier} \\
\text{Let } U \subset V: U = \Set{ v \in V | \forall u \neq v: \Set{ u, v } \in E } \\
\text{Consider } G \setminus U, \text{ note that it is possible } U = \emptyset \\
\text{Let } \mathcal{C} \text{ be the set of connected components in } G \setminus U \\
\text{Let by contradiction every connected component in } \mathcal{C} \text{ is a clique} \\
\text{For each even } C \in \mathcal{C}, \text{ match vertices in } C \text{ arbitrarily} \\
\text{For each odd } C \in \mathcal{C}, \text{ match vertices in } C \text{ arbitrarily except for one vertex } v_{C} \\
G \text{ fulfills Tutte's condition } o(G \setminus U) \leq \abs{U} \\
\implies \text{We can find a vertex } u_{C} \in U \text{ to match with } v_{C} \\
o(G) = o(G \setminus \emptyset) \leq 0 \implies \text{All connected components in } G \text{ are even} \\
\implies \text{Number of vertices in } G \text{ is even} \\
\text{We matched an even subset of vertices} \implies \text{Number of remaining vertices is also even} \\
\text{All these vertices are in } U \implies \text{we can arbitrarily match them} - \text{Contradiction!} \\
\text{We found a perfect matching in } G \\
\implies \exists C \in \mathcal{C}: C \text{ is not a clique} \\
\\
\text{Third step, finding a useful structure} \\
\text{Let } C \in \mathcal{C}: C \text{ is not a clique} \\
\text{Let } v, z \in C: \Set{ v, z } \not\in E \\
\text{Let } P = (v_{0} = v, v_{1}, \dots, v_{q} = z) \text{ be the shortest path from } v \text{ to } z \text{ in } G[C] \\
\Set{ v, z } \not\in E \implies q \geq 2 \\
\text{Let } x = v_{q-2}, y = v_{q-1} \\
\Set{ x, z } \not\in E \\
y \in C \implies y \not\in U \implies \exists w \in V \setminus U: \Set{ y, w } \not\in E \\
}
$$

$$
\displaylines{
\text{Finishing the proof} \\
\text{Let } G_{xz} = (V, E \cup \Set{ x, z }), G_{yw} = (V, E \cup \Set{ y, w }) \\
\text{By maximality of } G, G_{xz} \text{ and } G_{yw} \text{ contain perfect matchings } M_{xz}, M_{yw} \\
\text{Clearly, } \Set{ x, z } \in M_{xz}, \Set{ y, w } \in M_{yw} \\
\text{as otherwise there would've already been a perfect matching in } G \\
\text{Let } H = (V, E_{H} = M_{xz} \cup M_{yw}) \\
\text{All vertex degrees in } H \text{ are } 1 \text{ or } 2 \\
\forall q \in V: deg_{H}(q) = 1 \iff q \text{ is matched to the same vertex in both } M_{xz} \text{ and } M_{yw} \\
deg_{H}(q) = 1 \implies q \text{ is in a connected component of size 2} \\
\text{All other vertices have degree 2 and thus belong to cyclic connected components} \\
\text{All these cycles will be of even length,} \\
\text{as each vertex is incident to one edge from } M_{xz} \text{ and one from } M_{yw} \\
\Set{ x, z } \in M_{xz} \setminus M_{yw} \implies x \text{ and } z \text{ are matched to different vertices in } M_{yw} \\
\text{Same holds for } y \text{ and } w \\
\implies \Set{ x, z } , \Set{ y, w } \text{ are part of even cycles } C_{xz}, C_{yw} \\
\text{Case 1. } C_{xz} \neq C_{yw} \\
\text{Then } M = (M_{xz} \setminus C_{xz}) \cup (C_{xz} \cap M_{yw}) \text{ is a perfect matching in } G - \text{Contradiction!} \\
\text{Case 2. } C_{xz} = C_{yw} \\
\text{Let } C_{xz} = (v_{0} = x, v_{1} = z, v_{2}, \dots, v_{2k-1}=y, v_{2k}=w, v_{2k+1}, \dots, v_{2q} = v_{0}) \\
\text{Note that all } M_{xz} \text{ edges are at even position}, \Set{ v_{2l}, v_{2l+1} } \\
\text{And all } M_{yw} \text{ edges are at even position}, \Set{ v_{2l+1}, v_{2l+2} } \\
\text{We assume here that } w \text{ comes before } y \text{ in the cycle, the opposite is proved similarly} \\
\text{Let } M = M_{xz} \setminus C_{xz} \dots \\
\ldots \cup \Set{ \Set{ v_{2i-2}, v_{2i-1} } | i \in [2, k] } \cup \Set{ \Set{ v_{2k} = y, v_{1} = z } } \cup \Set{ \Set{ v_{2i+1}, v_{2i+2} } | i \in [k, q-1] } \\
M \text{ is a perfect matching in } G - \text{Contradiction!} \\
\implies \mathcal{G}_{n} = \emptyset \\
}
$$
Red edges represent $M_{xz}$, blue edges represent $M_{yw}$
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}[
    scale=0.7,
    vertex/.style={circle, fill=black, inner sep=1.5pt},
    thick
]

    % --- Define Coordinates ---
    
    % Bottom Row (y=0), Even x-coordinates for grid alignment
    % Indices mapped relative to v0 at (0,0)
    \coordinate (bot_start) at (-8, 0);
    \coordinate (bot_l3) at (-6, 0);
    \coordinate (bot_l2) at (-4, 0); % v_{2q-2}
    \coordinate (bot_l1) at (-2, 0); % v_{2q-1}
    \coordinate (v0)     at (0, 0);   % x = v_0
    \coordinate (v1)     at (2, 0);   % z = v_1
    \coordinate (v2)     at (4, 0);
    \coordinate (v3)     at (6, 0);
    \coordinate (v4)     at (8, 0);
    \coordinate (bot_end) at (10, 0);

    % Top Row (y=1.5), Odd x-coordinates for staggered alignment
    \coordinate (top_start) at (-9, 1.5);
    \coordinate (top_l3) at (-7, 1.5);
    \coordinate (top_l2) at (-5, 1.5);
    \coordinate (top_l1) at (-3, 1.5);
    \coordinate (left_of_v2k) at (-1, 1.5);
    \coordinate (v2k)    at (1, 1.5); % y = v_{2k}
    \coordinate (v2k_1)  at (3, 1.5); % w = v_{2k-1}
    \coordinate (v2k_2)  at (5, 1.5); % v_{2k-2}
    \coordinate (top_r3) at (7, 1.5);
    \coordinate (top_end) at (9, 1.5);


    % --- Draw Edges ---

    % 1. The Central Triangle (Black edges)
    \draw[black] (v0) -- (v2k) -- (v1);

    % 2. Bottom Row Horizontal Edges
    % Sequence starting from far left. 
    % Based on image: v0-v1 is Red. v1-v2 is Blue.
    % Left of v0 (v2q-1 -> v0) is Blue. (v2q-2 -> v2q-1) is Red.
        
    % Bottom Right
    \draw[red]  (v0) -- (v1);
    \draw[blue] (v1) -- (v2);
    \draw[red]  (v2) -- (v3);
    \draw[blue] (v3) -- (v4);
    \draw[red]  (v4) -- (bot_end);

    % Bottom Left (Left of v0)
    \draw[blue] (v0) -- (bot_l1);
    \draw[red]  (bot_l1) -- (bot_l2);
    \draw[blue] (bot_l2) -- (bot_l3);


    % 3. Top Row Horizontal Edges
    % v2k to right: Blue. 
    % v2k to left: Red.
    
    % Top Right
    \draw[blue] (v2k) -- (v2k_1);
    \draw[red]  (v2k_1) -- (v2k_2);
    \draw[blue] (v2k_2) -- (top_r3);
    \draw[red]  (top_r3) -- (top_end);

    % Top Left
    \draw[red]  (v2k) -- (left_of_v2k);
    \draw[blue] (left_of_v2k) -- (top_l1);
    \draw[red]  (top_l1) -- (top_l2);
    \draw[blue] (top_l2) -- (top_l3);

    % 4. End Diagonals
    % Left end (Red)
    \draw[red] (top_l3) -- (bot_l3);
    % Right end (Blue)
    \draw[blue] (top_end) -- (bot_end);


    % --- Draw Vertices and Labels ---

    % Bottom Nodes
    \node[vertex] at (bot_l3) {};
    \node[vertex, label=above:$v_{2q-2}$] at (bot_l2) {};
    \node[vertex, label=above:$v_{2q-1}$] at (bot_l1) {};
    \node[vertex, label=below:{$x=v_0$}] at (v0) {};
    \node[vertex, label=below:{$z=v_1$}] at (v1) {};
    \node[vertex, label=above:$v_2$] at (v2) {};
    \node[vertex, label=above:$v_3$] at (v3) {};
    \node[vertex, label=above:$v_4$] at (v4) {};
    \node[vertex] at (bot_end) {};

    % Top Nodes
    \node[vertex] at (top_l3) {};
    \node[vertex] at (top_l2) {};
    \node[vertex] at (top_l1) {};
    \node[vertex] at (left_of_v2k) {};
    \node[vertex, label={[xshift=-4pt]above:$y=v_{2k}$}] at (v2k) {};
    \node[vertex, label=above:{$w=v_{2k-1}$}] at (v2k_1) {};
    \node[vertex, label=below:{$v_{2k-2}$}] at (v2k_2) {};
    \node[vertex] at (top_r3) {};
    \node[vertex] at (top_end) {};

\end{tikzpicture}
\end{document}
```
The final matching M is as follows in red:
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}[
    scale=0.7,
    vertex/.style={circle, fill=black, inner sep=1.5pt},
    thick
]

    % --- Define Coordinates ---
    
    % Bottom Row (y=0), Even x-coordinates for grid alignment
    % Indices mapped relative to v0 at (0,0)
    \coordinate (bot_start) at (-8, 0);
    \coordinate (bot_l3) at (-6, 0);
    \coordinate (bot_l2) at (-4, 0); % v_{2q-2}
    \coordinate (bot_l1) at (-2, 0); % v_{2q-1}
    \coordinate (v0)     at (0, 0);   % x = v_0
    \coordinate (v1)     at (2, 0);   % z = v_1
    \coordinate (v2)     at (4, 0);
    \coordinate (v3)     at (6, 0);
    \coordinate (v4)     at (8, 0);
    \coordinate (bot_end) at (10, 0);

    % Top Row (y=1.5), Odd x-coordinates for staggered alignment
    \coordinate (top_start) at (-9, 1.5);
    \coordinate (top_l3) at (-7, 1.5);
    \coordinate (top_l2) at (-5, 1.5);
    \coordinate (top_l1) at (-3, 1.5);
    \coordinate (left_of_v2k) at (-1, 1.5);
    \coordinate (v2k)    at (1, 1.5); % y = v_{2k}
    \coordinate (v2k_1)  at (3, 1.5); % w = v_{2k-1}
    \coordinate (v2k_2)  at (5, 1.5); % v_{2k-2}
    \coordinate (top_r3) at (7, 1.5);
    \coordinate (top_end) at (9, 1.5);


    % --- Draw Edges ---

    % 1. The Central Triangle (Black edges)
    \draw[black] (v0) -- (v2k);
    \draw[red] (v2k) -- (v1);

    % 2. Bottom Row Horizontal Edges
    % Sequence starting from far left. 
    % Based on image: v0-v1 is Red. v1-v2 is Blue.
    % Left of v0 (v2q-1 -> v0) is Blue. (v2q-2 -> v2q-1) is Red.
        
    % Bottom Right
    \draw[black]  (v0) -- (v1);
    \draw[black] (v1) -- (v2);
    \draw[red]  (v2) -- (v3);
    \draw[black] (v3) -- (v4);
    \draw[red]  (v4) -- (bot_end);

    % Bottom Left (Left of v0)
    \draw[red] (v0) -- (bot_l1);
    \draw[black]  (bot_l1) -- (bot_l2);
    \draw[red] (bot_l2) -- (bot_l3);


    % 3. Top Row Horizontal Edges
    % v2k to right: Blue. 
    % v2k to left: Red.
    
    % Top Right
    \draw[black] (v2k) -- (v2k_1);
    \draw[red]  (v2k_1) -- (v2k_2);
    \draw[black] (v2k_2) -- (top_r3);
    \draw[red]  (top_r3) -- (top_end);

    % Top Left
    \draw[black]  (v2k) -- (left_of_v2k);
    \draw[red] (left_of_v2k) -- (top_l1);
    \draw[black]  (top_l1) -- (top_l2);
    \draw[red] (top_l2) -- (top_l3);

    % 4. End Diagonals
    % Left end (Red)
    \draw[black] (top_l3) -- (bot_l3);
    % Right end (Blue)
    \draw[black] (top_end) -- (bot_end);


    % --- Draw Vertices and Labels ---

    % Bottom Nodes
    \node[vertex] at (bot_l3) {};
    \node[vertex, label=above:$v_{2q-2}$] at (bot_l2) {};
    \node[vertex, label=above:$v_{2q-1}$] at (bot_l1) {};
    \node[vertex, label=below:{$x=v_0$}] at (v0) {};
    \node[vertex, label=below:{$z=v_1$}] at (v1) {};
    \node[vertex, label=above:$v_2$] at (v2) {};
    \node[vertex, label=above:$v_3$] at (v3) {};
    \node[vertex, label=above:$v_4$] at (v4) {};
    \node[vertex] at (bot_end) {};

    % Top Nodes
    \node[vertex] at (top_l3) {};
    \node[vertex] at (top_l2) {};
    \node[vertex] at (top_l1) {};
    \node[vertex] at (left_of_v2k) {};
    \node[vertex, label={[xshift=-4pt]above:$y=v_{2k}$}] at (v2k) {};
    \node[vertex, label=above:{$w=v_{2k-1}$}] at (v2k_1) {};
    \node[vertex, label=below:{$v_{2k-2}$}] at (v2k_2) {};
    \node[vertex] at (top_r3) {};
    \node[vertex] at (top_end) {};

\end{tikzpicture}
\end{document}
```
## Hall theorem #theorem 
$$
\displaylines{
\text{Let } G = (L \cup R, E) \text{ be a bipartite graph, } \abs{L} = \abs{R} \\
G \text{ has a perfect matching} \iff \forall S \subseteq L: \abs{S} \leq \abs{\Gamma(S)} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let there be a perfect matching } M \\
\text{Let } \forall S \subseteq L: Q \subseteq R \text{ be the set of vertices matched to } S \\
\implies \abs{\Gamma(S)} \geq \abs{Q} = \abs{S} \\
\\
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
