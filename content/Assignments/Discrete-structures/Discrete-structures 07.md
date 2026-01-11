---
{"publish":true,"created":"19/12/25, 19:50","modified":"2025-12-25T13:22:14.545+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

## 1
$$
\displaylines{
\text{Let } n,m \in \mathbb{N} \\
\text{Let } A \in \mathbb{R}^{n \times m} \text{ be a binary matrix,} \\
\text{representing locations where there are chairs in a classroom} \\
\text{The goal is to seat students in a way such that no student can copy} \\
\text{Student at $(i,j)$ can copy from students at } (i, j \pm 1), (i - 1, j \pm 1) \\
\text{Give an algorithm running in } O(n^{2}m^{2}) \text{ time that finds the maximum number} \\
\text{of students that can sit in one class} \\
\\
\text{Solution:} \\
\text{We can represent the classroom as a graph, where vertices are chairs} \\
\text{and edges are between any two chairs that can copy from one another} \\
G = (V, E) \\
\text{Let us prove that such a graph is bipartite} \\
\text{Let } L = \Set{ (i, j) \in V \mid j \text{ is odd} } \\
\text{Let } R = \Set{ (i, j) \in V \mid j \text{ is even} } \\
\text{Let } (i, j) \in L \\
\implies (i, j \pm 1) \in R, (i-1, j \pm 1) \in R \\
\implies \forall \Set{ u, v } \in E: u \in L, v \in R \\
\implies G \text{ is bipartite} \\
\implies \text{By Konig-Evergary theorem } MM(G) = VC(G) \\
\text{Let } I \text{ be an independent set in } G \\
\forall e \in E: \exists v \in V \setminus I: e = \Set{ v, u } \\
\implies V \setminus I \text{ is a vertex cover} \\
\text{Let } C \text{ be a vertex cover in } G \\
\text{Let by contradiction } u, v \in V \setminus C : \Set{ u, v } \in E \implies u, v \not\in C \\
\implies C \text{ is not a vertex cover} - \text{Contradiction!} \\
\implies \boxed{ I \text{ is an independent set} \iff V \setminus I \text{ is a vertex cover} } \\
\text{Let } I^{*} \text{ be a maximum independent set} \\
\implies VC(G) \geq \abs{V} - \abs{I^{*}} = \abs{V} - MI(G) \\
\text{Let } C^{*} \text{ be a minimum vertex cover} \\
\implies MI(G) \leq \abs{V} - \abs{C^{*}} = \abs{V} - VC(G) \\
\implies \boxed{ MI(G) = \abs{V} - VC(G) = \abs{V} - MM(G) } \\
\text{We are looking for the size of the maximum independent set} \\
\implies \text{we can find the size of a maximum matching instead} \\
\text{Finding an expanding path in a bipartite graph takes} \\
O(E) \text{ time with BFS/DFS from an unsaturated vertex} \\
\text{The size of a maximum matching is at most } \frac{\abs{V}}{2} \\
\implies \text{Runtime of the whole algorithm is } O(\abs{V} \cdot \abs{E}) \\
\abs{V} = O(nm) \\
\abs{E} \leq 4 \cdot \abs{V} = O(nm) \\
\implies \text{Algorithm runs in } O(n^{2}m^{2}) \text{ time} \\
}
$$
## 2a
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a planar graph with } n \geq 3 \text{ vertices} \\
\text{Prove: } \abs{E} \leq 3\abs{V} - 6 \\
\\
\text{Proof:} \\
G \text{ is a planar graph} \implies \text{We can "order" its connected components} \\
\text{in a straight row and enumerate them } C_{1}, \dots, C_{k} \\
\text{Then, } \forall i \in [1, k-1]: \text{ we can add an edge } \Set{ v, u } \text{ where } v \in C_{i}, u \in C_{i+1} \\
\text{We can take two vertices incident to the infinite face} \\
\implies \text{this will not break the planarity} \\
\text{Let } E' = E \cup \Set{ \text{edges from } C_{i} \text{ to } C_{i+1} } \\
\implies G' = (V, E') \text{ is a connected planar graph} \\
\implies \text{Corollary from Euler's formula } \abs{E'} \leq 3\abs{V} - 6 \implies \boxed{ \abs{E} \leq \abs{E'} \leq 3\abs{V} - 6 } \\
}
$$
### 2b
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a planar graph with } n \geq 3 \text{ vertices} \\
\text{Prove: } \abs{F} \leq 2\abs{V} - 4 \\
\\
\text{Proof:} \\
\text{Let us add edges to } G \text{ the same way we did in } 2a \\
G' = (V, E') \\
\text{Number of faces did not decrease} \\
\text{By Euler's formula } \abs{V} + \abs{F'} - \abs{E'} = 2 \\
\implies \abs{V} + \abs{F'} = 2 + \abs{E'} \leq 3\abs{V} - 4 \implies \abs{F'} \leq 2\abs{V} - 4 \\
\implies \boxed{ \abs{F} \leq \abs{F'} \leq 2\abs{V} - 4 } \\
}
$$
## 3a
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected planar graph} \\
\text{Let } d \text{ be the length of the shortest simple cycle in } G \\
\text{Prove/Disprove: } \abs{E} \leq \frac{d}{d-2}(\abs{V}-2) \\
\\
\text{Proof:} \\
\text{Let } \forall \text{ face } f: t_{f} \text{ denote the number of edges on the boundary of } f \\
\text{Each edge can be a boundary of at most two faces} \\
\implies 2m \geq \sum_{f} t_{f} \\
\text{Every face has at least d edges on its boundary (either a minimum cycle or all edges)} \\
\implies 2m \geq \sum_{f} t_{f} \geq df \\
2 = n + f - m \leq n + \frac{2}{d}m - m = n - \frac{2-d}{d}m \\
\implies \boxed{ m \leq \frac{d}{d-2} (n-2) } \\
}
$$
## 3b
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected planar graph} \\
\text{Let } G \text{ has no triangles} \\
\text{Prove: } \delta(G) \leq 3 \\
\\
\text{Proof:} \\
G \text{ has no triangles} \implies \text{Shortest cycle is at least of length } 4 \\
\implies \text{By 3a } \abs{E} \leq 2\abs{V} - 4 \\
\text{Let by contradiction } \delta(G) \geq 4 \\
\implies 2\abs{E} = \sum_{v \in V} deg(v) \geq 4\abs{V} - \text{Contradiction!} \\
\implies \delta(G) \leq 3 \\
}
$$
## 4a
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a planar graph} \\
\text{Let } \abs{V} > 10 \\
\text{Prove: } \overline{G} \text{ is not planar} \\
\\
\text{Proof:} \\
\overline{G} = (V, \overline{E}) \\
n = \abs{V} \\
m = \abs{E} \\
\binom{n}{2} = \frac{n(n-1)}{2} > 2(3n-6) \iff n^{2}-n > 12n-24 \\
\iff n^{2} - 13n + 24 > 0 \\
n > 10 \implies n \geq 11 \implies n^{2} - 13n + 24 \geq 2 > 0 \\
\implies \abs{\overline{E}} = \binom{n}{2} - \abs{E} \geq \binom{n}{2} - (3n-6) > 2(3n-6) - (3n-6) = 3n-6 \\
\implies \boxed{ \overline{G} \text{ is not planar} } \\
}
$$
## 4b
$$
\displaylines{
\text{Let } G = (V, E), G' = (V, E') \text{ be planar graphs} \\
\text{Let } G \cup G' = (V, E \cup E') \\
\text{Prove: } \delta(G \cup G') \leq 11 \\
\\
\text{Proof:} \\
\text{If } G \text{ has less than } 3 \text{ vertices, } \delta(G) \leq 2 \leq 11 \\
\text{Let } G \text{ has at least } 3 \text{ vertices} \\
\abs{E \cup E'} \leq \abs{E} + \abs{E'} \leq 6\abs{V} - 12 \\
\text{Let by contradiction } \delta(G \cup G') \geq 12 \\
2\abs{E \cup E'} = \sum_{v \in V} deg(v) \geq 12\abs{V} \\
\implies \abs{E \cup E'} \geq 6\abs{V} > 6\abs{V} - 12 - \text{Contradiction!} \\
\implies \delta(G \cup G') \leq 11 \\
}
$$
## 5
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected planar bipartite 3-regular graph} \\
\text{Let } \forall e \in E: e \text{ is incident to exactly 2 faces} \\
\text{Prove: } G \text{ has at least 6 square faces} \\
\\
\text{Proof:} \\
3\text{-regular} \implies 2m = 3n \implies m = \frac{3n}{2} \\
\text{Planar} \implies m \leq 3n - 6 \implies \frac{3n}{2} \leq 3n - 6 \implies \frac{3n}{2} \geq 6 \implies n \geq 4  \\
\text{Bipartite} \implies \text{All cycles are of even length} \\
\text{Let } \forall \text{ face } f: t_{f} \text{ denote the number of edges on the boundary of } f \\
\text{Each edge is incident to exactly two faces} \implies 2m = \sum_{f} t_{f} \\
\text{All cycles are of even length} \implies \text{All faces, except the infinite one have even } t_{f} \\
\implies 2m = \sum_{f} t_{f} = t_{f_{inf}} + 2k \implies t_{f_{inf}} \text{ is also even} \\
\text{Let } G \text{ has } q \text{ square faces} \\
\implies 2m = \sum_{f} t_{f} = 4q + \sum_{f'} t_{f'} \geq 4q + 6(f - q) = 6f - 2q \\
n + f - m = 2 \\
\implies n + f - \frac{3n}{2} = 2 \implies f = 2 + \frac{n}{2} \\
\implies 2m = 3n \geq 6\left( 2+\frac{n}{2} \right) - 2q \\
\implies 3n \geq 12 + 3n - 2q \implies 0 \geq 12 - 2q \implies \boxed{ q \geq 6 } \\
}
$$
## 6
$$
\text{Show that the following graph has } K_{2,3} \text{ as a minor} \\
$$
```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[
    node/.style={circle, draw, minimum size=8pt, inner sep=0pt},
	blue node/.style={circle, draw=blue, minimum size=8pt, inner sep=0pt},
    red edge/.style={draw=red, thick},
    black edge/.style={draw, thin}
]

    % Define Outer Nodes (Octagon-like layout)
    % Angle positions adjusted to match the "flattened" look of your image
    \node[node] (N1) at (90:3) {};    % Top
    \node[node] (N2) at (45:3) {};  % Top-Right
    \node[node] (N3) at (0:3) {};     % Right
    \node[node] (N4) at (-45:3) {}; % Bottom-Right
    \node[node] (N5) at (-90:3) {};   % Bottom
    \node[node] (N6) at (225:3) {}; % Bottom-Left
    \node[node] (N7) at (180:3) {};   % Left
    \node[node] (N8) at (135:3) {}; % Top-Left

    % Define Inner Nodes
    \node[node] (I1) at (0.8, 1) {};   % Inner Top-Right
    \node[node] (I2) at (0.8, -1) {};  % Inner Bottom-Right
    \node[node] (I3) at (-0.8, -1) {}; % Inner Bottom-Left
    \node[node] (I4) at (-0.8, 1) {};  % Inner Top-Left

    % Draw Black Edges (Outer Perimeter)
    \draw[black edge] (N1) -- (N2);
    \draw[black edge] (N2) -- (N3);
    \draw[black edge] (N5) -- (N6);
    \draw[black edge] (N6) -- (N7);
    \draw[black edge] (N7) -- (N8);

    % Draw Red Edges (Specific segments from your image)
    \draw[red edge] (N8) -- (N1); % Top-Left to Top    
    \draw[red edge] (N7) -- (N8); % Bottom-Left to Left
    \draw[red edge] (N3) -- (N4); % Right to Bottom-Right    
    \draw[red edge] (N5) -- (N4); % Bottom to Bottom-Right (Corrected per image)
    % Note: The image has red on the bottom-right and top-left corners.
    
    % Draw Internal Connections (Black)
    \draw[black edge] (N1) -- (I1);
    \draw[black edge] (N1) -- (I4);
    
    \draw[black edge] (N3) -- (I1);
    \draw[black edge] (N3) -- (I2);
    
    \draw[black edge] (N5) -- (I2);
    \draw[black edge] (N5) -- (I3);
    
    \draw[black edge] (N7) -- (I3);
    \draw[black edge] (N7) -- (I4);

    % Ensure all nodes are on top of edges
    \foreach \i in {1,...,8} \node[node] at (N\i) {};
    \foreach \i in {1,...,4} \node[node] at (I\i) {};
    \node[blue node] at (N6) {};
    \node[blue node] at (I2) {};
	\node[blue node] at (I4) {};

\end{tikzpicture}
\end{document}
```
$$
\displaylines{
\text{Solution:} \\
\text{Edges marked in red are to be contracted} \\
\text{Vertices marked in blue are to be removed along with incident edges} \\
\text{The resulting graph is exactly } K_{2,3} \\
}
$$
```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[
    node/.style={circle, draw, minimum size=8pt, inner sep=0pt},
	blue node/.style={circle, draw=blue, minimum size=8pt, inner sep=0pt},
    red edge/.style={draw=red, thick},
    black edge/.style={draw, thin}
]

    % Define Outer Nodes (Octagon-like layout)
    % Angle positions adjusted to match the "flattened" look of your image
    \node[node] (N2) at (45:3) {};  % Top-Right
    \node[node] (N4) at (-45:3) {}; % Bottom-Right
    \node[node] (N8) at (135:3) {}; % Top-Left

    % Define Inner Nodes
    \node[node] (I1) at (0.8, 1) {};   % Inner Top-Right
    \node[node] (I3) at (-0.8, -1) {}; % Inner Bottom-Left

    % Draw Black Edges (Outer Perimeter)
    \draw[black edge] (N8) -- (N2);
    \draw[black edge] (N2) -- (N4);

    % Draw Internal Connections (Black)
    \draw[black edge] (N8) -- (I1);
    \draw[black edge] (N8) -- (I3);
    
    \draw[black edge] (N4) -- (I1);
    \draw[black edge] (N4) -- (I3);

    % Ensure all nodes are on top of edges
    \foreach \i in {8,2,4} \node[node] at (N\i) {};
    \foreach \i in {1,3} \node[node] at (I\i) {};

\end{tikzpicture}
\end{document}
```
