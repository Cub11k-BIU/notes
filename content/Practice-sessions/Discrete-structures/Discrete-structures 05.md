---
{"publish":true,"created":"23/11/25, 15:02","modified":"2026-03-24T14:59:04.497+02:00","tags":["Academia","#Practice","Discrete-structures"],"cssclasses":""}
---

$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected graph} \\
\text{Let } C \text{ be a connected component that has no Euler cycle (there is at least one)} \\
\text{Prove: it is possible to add one vertex and some edges such that} \\
\text{each connected component has an Euler cycle} \\
\\
\text{Proof:} \\
\text{Let } S = \Set{ C_{i} | C_{i} \text{ has no Euler cycle} } \\
\text{Let } G' = \left( V \cup \Set{ v }, E \cup \Set{ \Set{ v, u } | \exists C_{i} \in S: u \in V_{i} \text{ and } deg(u) \text{ is odd} } \right) \\
\implies \text{All vertices in } G' \text{ have even degrees} \\
\implies \text{Each connected component has an Euler cycle} \\
}
$$
---
$$
\displaylines{
\text{Let there be } 2k+1 \text{ countries and } k \text{ representatives from each country} \\
\text{All representatives are seated around a circle table} \\
\text{Is it possible to seat them such that any two countries have their representatives} \\
\text{seat near each other?} \\
\\
\text{Solution:} \\
\text{We can represent all possible pairs of countries as a clique, } K_{2k+1} \\
\text{Degree of each vertex is } 2k \implies \text{There exists an Euler cycle in } K_{2k+1} \\
\implies \text{There exists a seating where each of } k \cdot (2k+1) \text{ edges(pairs) is present} \\
}
$$
---
## De Bruijn sequence #definition 
De Bruijn sequence of order $n$ of $k$-sized alphabet (simplest case is binary) is a cycle sequence in which every possible $n$-length string on A occurs exactly once as a substring. Such a sequence is denoted $B(n, k)$ and has length $k^{n}$
In order to build such a sequence, one has to take an Euler cycle in an $n-1$ dimensional De Bruijn graph, i.e. for $n = 4$
```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, bending, positioning}

\begin{document}
    \begin{tikzpicture}[
        >={Stealth[round]}, 
        shorten >=1pt,
        auto,
        thick,
        node distance=3cm,
        state/.style={
            circle,
            draw=black,
            thick,
            minimum size=1.2cm,
            font=\bfseries
        }
    ]
        
        % --- VERTICES ---
        % Arranged in a circle
        \node[state] (000) at (180:4cm) {000};
        \node[state] (001) at (135:4cm) {001};
        \node[state] (011) at (90:4cm)  {011};
        \node[state] (111) at (45:4cm)  {111};
        \node[state] (110) at (0:4cm)   {110};
        \node[state] (100) at (-45:4cm) {100};
        \node[state] (101) at (-90:4cm) {101};
        \node[state] (010) at (-140:4cm){010};

        % --- EDGES ---
        
        % From 000
        \path[->] (000) edge [loop left] node {0} (000)
                  (000) edge             node {1} (001);
        
        % From 001
        \path[->] (001) edge             node {0} (010)
                  (001) edge             node {1} (011);
        
        % From 010
        \path[->] (010) edge             node {0} (100)
                  (010) edge             node {1} (101);
        
        % From 011
        \path[->] (011) edge [bend right=15] node [swap] {0} (110)
                  (011) edge             node {1} (111);
        
        % From 100
        \path[->] (100) edge [bend left=15] node {0} (000)
                  (100) edge [bend right=15] node [swap] {1} (001);
        
        % From 101
        \path[->] (101) edge [bend left=15] node {0} (010)
                  (101) edge             node {1} (011);
        
        % From 110
        \path[->] (110) edge             node {0} (100)
                  (110) edge             node {1} (101);
        
        % From 111
        \path[->] (111) edge             node {0} (110)
                  (111) edge [loop right] node {1} (111);

    \end{tikzpicture}
\end{document}
```
---
## Tournament graph #definition 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed graph} \\
\text{such that } \forall v, u \in V: (v, u) \in E \text{ xor } (u, v) \in E \\
}
$$
---
$$
\displaylines{
\text{Let } G \text{ be a tournament} \\
\text{Let } \abs{V} \geq 2 \\
\text{Prove: } G \text{ has a Hamilton path} \\
\\
\text{Proof:} \\
\text{Let } P = (v_{1}, \dots, v_{k}) \text{ be the longest simple path in } G \\
\text{Let by contradiction } u \in V \setminus P \\
\forall i \in [1, k]: (v_{i}, u) \in E \text{ xor } (u, v_{i}) \in E \\
\text{Case 1. } \forall i \in [1, k]: (v_{i}, u) \in E \\
\implies P' = (v_{1}, \dots, v_{k}, u) \text{ is longer than } P - \text{Contradiction!} \\
\text{Case 2. } \forall i \in [1, k]: (u, v_{i}) \in E \\
\implies P' = (u, v_{1}, \dots, v_{k}) \text{ is longer than } P - \text{Contradiction!} \\
\text{Case 3. } \exists i, j \in [1, k]: (v_{i}, u) \in E, (u, v_{j}) \in E \\
\text{Let } i \in [1, k]: (v_{i}, u) \in E, (u, v_{i+1}) \in E \\
\implies P' = (v_{1}, \dots, v_{i}, u, v_{i+1}, \dots v_{k}) \text{ is longer than } P - \text{Contradiction!} \\
}
$$
---
