---
{"publish":true,"created":"02/12/25, 16:03","modified":"2025-12-22T16:03:12.675+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

## Corollaries of Hall's theorem
$$
\displaylines{
\text{Let } G \text{ be a } d\text{-regular bipartite graph} \\
\text{Then } G \text{ has a perfect matching} \\
\\
\text{Proof:} \\
d \cdot \abs{L} = \abs{E} = d \cdot \abs{R} \implies \abs{L} = \abs{R} \\
\text{Let } S \subseteq L \\
\text{Let } F \subseteq E \text{ be a set of edges incident to } S \\
\text{Let } K \subseteq E \text{ be a set of edge incident to } \Gamma(S) \\
F \subseteq K \\
d \cdot \abs{S} = \abs{F} \leq \abs{K} = d \cdot \abs{\Gamma(S)} \implies \abs{S} \leq \abs{\Gamma(S)} \\
\implies \text{By Hall's theorem } G \text{ has a perfect matching} \\
}
$$

$$
\displaylines{
\text{Let } G \text{ be a bipartite graph such that } \abs{L} < \abs{R} \\
\text{Let } G \text{ fulfill Hall's condition} \\
\text{Then, } G \text{ has a matching } M \text{ such that all vertices in } L \text{ are saturated} \\
\\
\text{Proof:} \\
\text{Let } L' \supset L: \abs{L'} = \abs{L} \\
\text{Let } \forall v \in L' \setminus L: \forall u \in R: \Set{ v, u } \in E' \\
G' = (L' \cup R, E') \text{ fulfills Hall's condition} \implies G' \text{ has a perfect matching} \\
\text{Removing auxilary vertices and edges,} \\
\text{we obtain the matching } M \text{ which saturates all vertices in } L \\
}
$$
## Vertex cover #definition 
$$
\displaylines{
A \subseteq V \text{ is called a vertex cover iff } \\
\forall e = \Set{ v, u } \in E: v \in A \text{ or } u \in A \\
}
$$
Let $MM(G)$ denote the size of the maximum matching in $G$ and $VC(G)$ denote the size of a minimum vertex cover in $G$
## Konig-Egervary theorem #theorem 
$$
\displaylines{
\text{Let } G = (L \cup R, E) \text{ be a bipartite graph} \\
\text{Then, } MM(G) = VC(G) \\
\\
\text{Proof:} \\
\text{Let } M \text{ be a maximum matching in } G \\
\text{Let } A \text{ be the minimum vertex cover in } G \\
\forall \Set{ v, u } \in M: u \in A \text{ or } v \in A \\
\implies \abs{A} \geq \abs{M} \implies MM(G) \leq VC(G) \\
\text{Note that this is true for any graph, we did not use }
\\
\text{Let } L_{A} = L \cap A, R_{A} = R \cap A \\
\text{Let } H_{L} = G[L_{A} \cup (R \setminus R_{A})], H_{R} = G[R_{A} \cup (L \setminus L_{A})] \\
\text{Let } S \subseteq L_{A}: \abs{\Gamma_{H_{L}}(S)} < \abs{S} \\
\text{Let } A' = (A \setminus S) \cup \Gamma_{H_{L}}(S) \\
\text{All edges in } H_{R} \text{ are covered by } R_{A} \\
\text{All edges in } H_{L} \text{ incident to } L_{A} \setminus S \text{ are covered by } L_{A} \setminus S \\
\text{All other edges in } H_{L} \text{ are incident to } S, \text{ hence also to } \Gamma_{H_{L}}(S) \text{ so they are covered} \\
\text{All edges not in } H_{L} \cup H_{R} \text{ are between } L_{A} \text{ and } R_{A} \text{ and so are covered by } R_{A} \\
\implies A' \text{ is a vertex cover in } G \\
\abs{A'} = \abs{A} - \abs{S} + \abs{\Gamma_{H_{L}}(S)} < \abs{A} - \text{Contradiction!} \\
\implies H_{L} \text{ fulfills Hall's condition with relation to } L_{A} \\
\implies \exists \text{ matching } M_{L} \text{ in } H_{L} \text{ saturating all vertices in } L_{A} \\
\text{Symmetrically there is a matching } M_{R} \text{ in } H_{R} \\
MM(G) \geq \abs{M_{L} \cup M_{R}} = \abs{L_{A} \cup R_{A}} = \abs{A} = VC(G) \\
\implies MM(G) \leq VC(G) \text{ and } VC(G) \leq MM(G) \implies MM(G) = VC(G) \\
}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{shapes.geometric, positioning, fit, backgrounds}

\begin{document}
\begin{tikzpicture}[scale=1.5]
    % Define styles
    \tikzset{
        std_vertex/.style={circle, fill=black, inner sep=1.5pt},
        blue_vertex/.style={circle, draw=blue, thick, fill=white, inner sep=2pt},
        pink_edge/.style={draw=pink, line width=1.5pt}
    }

    % Define coordinates
    \foreach \i in {1,...,6} {
        \coordinate (L\i) at (0, 7-\i);
        \coordinate (R\i) at (4, 7-\i);
    }

    % Draw Vertices
    % L column
    \node[std_vertex] (NL1) at (L1) {};
    \node[blue_vertex] (NL2) at (L2) {};
    \node[blue_vertex] (NL3) at (L3) {};
    \node[std_vertex] (NL4) at (L4) {};
    \node[std_vertex] (NL5) at (L5) {};
    \node[std_vertex] (NL6) at (L6) {};

    % R column
    \node[blue_vertex] (NR1) at (R1) {};
    \node[blue_vertex] (NR2) at (R2) {};
    \node[std_vertex] (NR3) at (R3) {};
    \node[blue_vertex] (NR4) at (R4) {};
    \node[blue_vertex] (NR5) at (R5) {};
    \node[blue_vertex] (NR6) at (R6) {};

    % Draw Black Edges
    \draw[black] (NL1) -- (NR1);
    \draw[black] (NL1) -- (NR2);
    \draw[black] (NL1) -- (NR3);
    \draw[black] (NL2) -- (NR1);
    \draw[black] (NL2) -- (NR3);
    \draw[black] (NL2) -- (NR4);
    \draw[black] (NL3) -- (NR2);
    \draw[black] (NL3) -- (NR5);
    \draw[black] (NL4) -- (NR3);
    \draw[black] (NL4) -- (NR6);
    \draw[black] (NL5) -- (NR4);
    \draw[black] (NL5) -- (NR5);
    \draw[black] (NL6) -- (NR4);
    \draw[black] (NL6) -- (NR6);

    % Draw Background Elements (Pink Edges and non-square Dashed Outlines)
    \begin{scope}[on background layer]
        % Pink Edges
        \draw[black] (NL1) -- (NR4);
        \draw[black] (NL1) -- (NR5);
        \draw[black] (NL1) -- (NR6);

        % H_L (Orange dashed loop, smooth and non-intersecting)
        \draw[dashed, orange, thick] plot [smooth cycle, tension=0.8] coordinates {
            (-0.8, 6.8) % Top left
            (4.8, 6.8)  % Top right
            (4.8, 3.8)  % Right side, between R3 and R4
            (2.0, 3.0)  % Middle dip
            (-0.8, 3.8) % Left side, between L3 and L4
        };

        % H_R (Green dashed loop, smooth and non-intersecting)
        \draw[dashed, green!60!black, thick] plot [smooth cycle, tension=0.8] coordinates {
            (-0.8, 3.2) % Top left, between L3 and L4
            (2.0, 2.2)  % Middle dip
            (4.8, 3.2)  % Top right, between R3 and R4
            (4.8, 0.2)  % Bottom right
            (-0.8, 0.2) % Bottom left
        };
    \end{scope}

    % Draw Partitions/Sets (S and Gamma) - on top of edges
    % S (Red dashed around L1)
    \node[draw=red, dashed, thick, fit=(NL1), circle, inner sep=4pt] (S_node) {};
    % Gamma_H_L(S) (Red dashed around R1, R2)
    \node[draw=red, dashed, thick, fit=(NR1)(NR2), rounded corners, inner sep=4pt] (Gamma_node) {};

    % Add Labels
    \node at (-0.8, 6.5) {\Large $L$};
    \node at (4.8, 6.5) {\Large $R$};

    \node[blue] at (-0.8, 5.5) {\Large $L_A$};
    \node[blue] at (4.8, 5.0) {\Large $A'$};
    \node[blue] at (4.8, 2.0) {\Large $R_A$};

    \node[red] at (-0.4, 6.2) {\Large $S$};
    \node[red, right] at (Gamma_node.east) {\Large $\Gamma_{H_L}(S)$};

    % Position labels for H_L and H_R relative to the new loops
    \node[orange] at (3.5, 6.5) {\Large $H_L$};
    \node[green!60!black] at (-0.5, 1.5) {\Large $H_R$};

\end{tikzpicture}
\end{document}
```

---
## Planar graphs
### Planar embedding #definition 
$$
\displaylines{
\text{A planar embedding of a graph is a drawing of that graph on a plane} \\
\text{such that no two edges intersect} \\
\\
\text{A graph is called planar if such embedding exists} \\
}
$$
```tikz
\usepackage{tikz}

\begin{document}

\begin{tikzpicture}[
    thick,
    vertex/.style={circle, draw, fill=black, inner sep=2.5pt, outer sep=0pt},
    every label/.style={font=\sffamily\small}
]

    %%--- Planar Embedding (Left Side) ---%%
    \begin{scope}[xshift=-3.5cm]
        % Define Vertices (Outer triangle and center point)
        \node[vertex] (P1) at (90:2) {};
        \node[vertex] (P2) at (210:2) {};
        \node[vertex] (P3) at (330:2) {};
        \node[vertex] (Pcenter) at (0,0) {};

        % Draw Edges
        % Outer triangle
        \draw (P1) -- (P2) -- (P3) -- (P1);
        % Inner spokes connecting center to outer vertices
        \draw (Pcenter) -- (P1);
        \draw (Pcenter) -- (P2);
        \draw (Pcenter) -- (P3);

        % Label
        \node[below=2.2cm, align=center, font=\sffamily\bfseries] at (0,0) {Planar embedding of $K_4$};
    \end{scope}


    %%--- Non-Planar Drawing (Right Side) ---%%
    \begin{scope}[xshift=3.5cm]
        % Define Vertices (Square formation)
        \node[vertex] (TL) at (-1, 1) {}; % Top Left
        \node[vertex] (TR) at (1, 1) {};  % Top Right
        \node[vertex] (BL) at (-1, -1) {};% Bottom Left
        \node[vertex] (BR) at (1, -1) {}; % Bottom Right

        % Draw Outer Edges (The square)
        \draw (TL) -- (TR) -- (BR) -- (BL) -- (TL);

        % Draw Crossing Diagonals (Highlighted in red)
        \draw[red, very thick] (TL) -- (BR);
        \draw[red, very thick] (TR) -- (BL);

        % Label
        \node[below=2.2cm, align=center, font=\sffamily\bfseries] at (0,0) {Non-planar embedding of $K_4$\\};
    \end{scope}

\end{tikzpicture}
\end{document}
```
$$
\displaylines{
\text{Formally, a planar embedding is an injective map from vertices to } \mathbb{R}^{2} \\
\text{Regions separated by edges are called faces} \\
\text{All faces are mutually disjoint} \\
}
$$
```tikz
\usepackage{tikz}

\begin{document}

\begin{tikzpicture}[thick,
    vertex/.style={circle, draw, fill=black, inner sep=2pt}
]

    % Define vertices for a planar K4
    \coordinate (A) at (90:3);
    \coordinate (B) at (210:3);
    \coordinate (C) at (330:3);
    \coordinate (Center) at (0,0);

    % Fill the faces with different colors
    % Face 1 (Left)
    \fill[fill=red!20] (A) -- (B) -- (Center) -- cycle;
    % Face 2 (Right)
    \fill[fill=blue!20] (A) -- (C) -- (Center) -- cycle;
    % Face 3 (Bottom)
    \fill[fill=green!20] (B) -- (C) -- (Center) -- cycle;
    
    % Fill the unbounded face
    \begin{scope}
        \clip (0,0) circle (4.5cm); % Clip to a larger circle to represent the "outside"
        \fill[fill=yellow!20, even odd rule] (A) -- (B) -- (C) -- cycle (0,0) circle (5cm);
    \end{scope}

    % Draw the edges
    \draw (A) -- (B) -- (C) -- (A); % Outer triangle
    \draw (A) -- (Center);
    \draw (B) -- (Center);
    \draw (C) -- (Center);

\end{tikzpicture}
\end{document}
```
$$
\displaylines{
\text{The hypercubes } Q_{1}, Q_{2}, Q_{3} \text{ are all planar} \\
\text{What about } Q_{4}? \text{ No, it is not planar} \\
}
$$
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}[
    thick,
    vertex/.style={circle, draw, fill=black, inner sep=2pt},
    label_style/.style={font=\sffamily\bfseries\large, align=center}
]

    % --- HEADERS ---
    \node[label_style] at (0, 5) {Planar Embedding};
    \node[label_style] at (5, 5) {Non-Planar Embedding};
    \node[label_style, anchor=east] at (-2, 5) {Graph};

    % ==========================================
    % ROW 1: Q1 (Line Segment)
    % ==========================================
    \node[label_style, anchor=east] at (-2, 3.5) {$Q_1$\\ (Line)};

    % Planar Q1
    \begin{scope}[shift={(0, 3.5)}]
        \draw (-1, 0) -- (1, 0);
        \node[vertex] at (-1, 0) {};
        \node[vertex] at (1, 0) {};
    \end{scope}

    % Crossed Q1 (Impossible)
    \begin{scope}[shift={(5, 3.5)}]
        \node[font=\sffamily\itshape, text=gray] {N/A (Too few edges)};
    \end{scope}

    % ==========================================
    % ROW 2: Q2 (Square)
    % ==========================================
    \node[label_style, anchor=east] at (-2, 0) {$Q_2$\\ (Square)};

    % Planar Q2 (Standard Square)
    \begin{scope}[shift={(0, 0)}]
        \draw (-1, -1) rectangle (1, 1);
        \node[vertex] at (-1, -1) {};
        \node[vertex] at (1, -1) {};
        \node[vertex] at (1, 1) {};
        \node[vertex] at (-1, 1) {};
    \end{scope}

    % Crossed Q2 (Hourglass / Twisted)
    \begin{scope}[shift={(5, 0)}]
        % Vertices defined in a square layout but connected in a twisted cycle
        \coordinate (A) at (-1, 1);
        \coordinate (B) at (1, 1);
        \coordinate (C) at (-1, -1);
        \coordinate (D) at (1, -1);
        
        \draw (A) -- (B);
        \draw[red] (B) -- (C); % Crossing
        \draw (C) -- (D);
        \draw[red] (D) -- (A); % Crossing
        
        \node[vertex] at (A) {};
        \node[vertex] at (B) {};
        \node[vertex] at (C) {};
        \node[vertex] at (D) {};
    \end{scope}

    % ==========================================
    % ROW 3: Q3 (Cube)
    % ==========================================
    \node[label_style, anchor=east] at (-2, -4) {$Q_3$\\ (Cube)};

    % Planar Q3 (Schlegel Diagram - Box in Box)
    \begin{scope}[shift={(0, -4)}]
        % Outer Square
        \coordinate (O1) at (-1.2, -1.2);
        \coordinate (O2) at (1.2, -1.2);
        \coordinate (O3) at (1.2, 1.2);
        \coordinate (O4) at (-1.2, 1.2);
        
        % Inner Square
        \coordinate (I1) at (-0.5, -0.5);
        \coordinate (I2) at (0.5, -0.5);
        \coordinate (I3) at (0.5, 0.5);
        \coordinate (I4) at (-0.5, 0.5);

        % Draw Squares
        \draw (O1) -- (O2) -- (O3) -- (O4) -- cycle;
        \draw (I1) -- (I2) -- (I3) -- (I4) -- cycle;
        
        % Connect Corners
        \draw (O1) -- (I1);
        \draw (O2) -- (I2);
        \draw (O3) -- (I3);
        \draw (O4) -- (I4);

        % Vertices
        \foreach \p in {O1,O2,O3,O4,I1,I2,I3,I4} \node[vertex] at (\p) {};
    \end{scope}

    % Crossed Q3 (Standard 3D Projection)
    \begin{scope}[shift={(5, -4)}]
        % Front Face
        \coordinate (F1) at (-0.8, -0.8);
        \coordinate (F2) at (0.4, -0.8);
        \coordinate (F3) at (0.4, 0.4);
        \coordinate (F4) at (-0.8, 0.4);
        
        % Back Face (Shifted)
        \coordinate (B1) at (-0.2, -0.2);
        \coordinate (B2) at (1.0, -0.2);
        \coordinate (B3) at (1.0, 1.0);
        \coordinate (B4) at (-0.2, 1.0);

        % Draw Faces (using transparency logic for crossing visualization)
        \draw (F1) -- (F2) -- (F3) -- (F4) -- cycle;
        \draw[red] (F2) -- (F3) -- (F4);
        \draw (B1) -- (B2) -- (B3) -- (B4) -- cycle;
        \draw[red] (B4) -- (B1) -- (B2);
        
        % Connectors (Some will cross)
        \draw (F1) -- (B1);
        \draw (F2) -- (B2);
        \draw (F4) -- (B4);
        \draw (F3) -- (B3); % The classic crossing point in this view
        
        % Vertices
        \foreach \p in {F1,F2,F3,F4,B1,B2,B3,B4} \node[vertex] at (\p) {};
    \end{scope}

\end{tikzpicture}
\end{document}
```
### Euler's formula #theorem 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected planar graph} \\
\abs{V} = n, \abs{E} = m, \text{ and } f \text{ is the number of faces induced by } G \\
\text{Then, } n + f - m = 2 \\
\\
\text{Proof:} \\
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
### Upper bound on the number of edges in planar graphs #theorem 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected planar graph with } n \geq 3 \text{ vertices} \\
\text{Then, } m \leq 3n - 6 \\
\\
\text{Proof:} \\
\text{Let } \forall \text{ face } f: t_{f} \text{ denote the number of edges on the boundary of } f \\
\text{Each edge can be a boundary of at most two faces} \\
\implies 2m \geq \sum_{f} t_{f} \\
\text{Every face has at least 3 edges on its boundary (either a minimum cycle or all edges)} \\
\implies 2m \geq \sum_{f} t_{f} \geq 3f \\
2 = n + f - m \leq n + \frac{2}{3}m - m = n - \frac{1}{3}m \\
\implies 3n - m \geq 6 \implies m \leq 3n - 6 \\
}
$$
This upped bound is in fact tight for planar graphs with each face being a triangle. Such graphs are called triangulated.
#### Corollary of the edge number upper bound
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a planar connected graph} \\
\text{Then } \delta(V) \leq 5 \\
\\
\text{Proof:} \\
\text{Let } \delta(V) \geq 6 \\
\implies 2m = \sum_{v \in V} deg(v) \geq 6n \implies m \geq 3n - \text{Contradiction!} \\
}
$$
#### More corollaries
$$
\displaylines{
K_{5} \text{ is not planar} \\
\\
\text{Let } K_{5} \text{ be planar} \\
m = \binom{5}{2} = 10 \implies 10 \leq 15 - 6 = 9 - \text{Contradiction!} \\
}
$$
---
$$
\displaylines{
K_{3,3} \text{ is not planar} \\
\\
\text{Let } K_{3,3} \text{ be planar} \\
n + f - m = 2 \implies 6 + f - 9 = 2 \implies f = 5 \\
18 = 2m \geq \sum_{f}  t_{f} = t_{f_{1}} + t_{f_{2}} + t_{f_{3}} + t_{f_{4}} + t_{f_{5}} \\
\text{There has to be a cycle of length 3, otherwise } \sum_{f} t_{f} \geq 4 \cdot 5 = 20 \\
\implies \text{There is a triangle} - \text{Contradiction! As } K_{3,3} \text{ is bipartite} \\
}
$$
---
$$
\displaylines{
\text{Let } G = K_{5} \setminus \Set{ e } \\
G \text{ is planar} \\
\implies \text{All } 5 \text{ vertex graphs except for } K_{5} \text{ are planar} \\
}
$$
---
### Graph minor #definition 
$$
\displaylines{
H \text{ is called a minor of } G \text{ if } H \text{ can be obtained from } G \text{ by a series of these operations:} \\
\begin{align}
1. & \quad \text{Deleting edges} \\
2. & \quad \text{Deleting vertices (and all incident edges)} \\
3. & \quad \text{Contracting edges (uniting incident vertices into one and deleting an edge)} \\
\end{align} \\
}
$$
### Planarity of graph minors #lemma 
$$
\displaylines{
\text{If } G \text{ is planar, then all its minors are also planar} \\
}
$$
### Wagner-Kuratowski theorem #theorem 
$$
\displaylines{
G \text{ is planar} \iff G \text{ does not include } K_{5} \text{ or } K_{3,3} \text{ as a minor} \\
\\
\text{One direction is rather intuitive to prove, another is a very complicated result,} \\
\text{beyond the scope of this course} \\
}
$$
---
$$
\displaylines{
\text{Peterson graph is not planar} \\
\text{Contracting edges connecting inner and outer vertices gives us } K_{5} \\
\text{Contracting edges will yield } K_{5} \text{ as a minor} \\
}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta, calc}

\begin{document}
\begin{tikzpicture}[
    % Define styles for consistency
    vertex/.style={circle, fill=black, inner sep=1.5pt},
    standard edge/.style={thin, black},
    highlight arrow/.style={blue, line width=2.5pt, <->, >={Stealth[inset=0pt, angle=45:10pt]}},
    block arrow outline/.style={line width=1.5pt, black, line join=round}
]

% --- Left Graph (Petersen with blue arrows) ---
\begin{scope}[local bounding box=leftGraph]
    % Define radii for outer and inner rings
    \def\Router{2.2}
    \def\Rinner{1.0}

    % Place vertices
    \foreach \i in {0,1,2,3,4} {
        % Calculate angles (start from top, 90 degrees)
        \pgfmathsetmacro{\angle}{90 + \i*72}
        \coordinate (outer\i) at (\angle:\Router);
        \coordinate (inner\i) at (\angle:\Rinner);
        \node[vertex] at (outer\i) {};
        \node[vertex] at (inner\i) {};
    }

    % Draw outer pentagon
    \draw[standard edge] (outer0) -- (outer1) -- (outer2) -- (outer3) -- (outer4) -- cycle;

    % Draw inner pentagram (connecting every second vertex)
    \draw[standard edge] (inner0) -- (inner2) -- (inner4) -- (inner1) -- (inner3) -- cycle;

    % Draw the highlighted spokes (blue double arrows)
    % Shorten them slightly so they don't overlap the vertex dots too much
    \foreach \i in {0,1,2,3,4} {
        \draw[highlight arrow, shorten >=2pt, shorten <=2pt] (inner\i) -- (outer\i);
    }
\end{scope}

% --- Middle Arrow ---
% Position it to the right of the first graph
\begin{scope}[shift={($(leftGraph.east) + (0.7,0)$)}]
    \draw[block arrow outline] 
        (0, -0.4) -- (1.2, -0.4) -- (1.2, -0.8) -- (2.2, 0) -- 
        (1.2, 0.8) -- (1.2, 0.4) -- (0, 0.4) -- cycle;
\end{scope}

% --- Right Graph (Plain Petersen) ---
% Position it to the right of the arrow
\begin{scope}[shift={($(leftGraph.east) + (5.5,0)$)}, yshift=-8]
    % Define radii (same as above)
    \def\Router{2.2}
    \def\Rinner{2.2}

    % Place vertices
    \foreach \i in {0,1,2,3,4} {
        \pgfmathsetmacro{\angle}{90 + \i*72}
        \coordinate (r-outer\i) at (\angle:\Router);
        \coordinate (r-inner\i) at (\angle:\Rinner);
        \node[vertex] at (r-outer\i) {};
        \node[vertex] at (r-inner\i) {};
    }

    % Draw outer pentagon
    \draw[standard edge] (r-outer0) -- (r-outer1) -- (r-outer2) -- (r-outer3) -- (r-outer4) -- cycle;

    % Draw inner pentagram
    \draw[standard edge] (r-inner0) -- (r-inner2) -- (r-inner4) -- (r-inner1) -- (r-inner3) -- cycle;
\end{scope}

\end{tikzpicture}
\end{document}
```
---
## Chromatic numbers
### $k$-coloring and Chromatic number #definition 
$$
\displaylines{
\text{Given a graph } G = (V, E) \\
k\text{-coloring is a function } \chi: V \to \Set{ 1, \dots, k } \text{ such that} \\
\forall u, v \in V: \Set{ u, v } \in E: \chi(u) \neq \chi(v) \\
G \text{ is } k\text{-colorable if it admits a } k\text{-coloring} \\
\text{The chromatic number of } G, \chi(G) \text{ is the minimum } k \text{ such that } G \text{ is } k\text{-colorable} \\
}
$$
---
$$
\displaylines{
G \text{ is bipartite} \iff G \text{ is 2-colorable} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } G \text{ be bipartite} \\
\text{Let } \chi(v) = \begin{cases}
1 & v \in L \\
2 & v \in R \\
\end{cases} \\
\boxed{ \impliedby } \text{ Let } G \text{ be 2-colorable} \\
\implies L = \chi^{-1}[1], R = \chi^{-1}[2] \\
}
$$
---
$$
\displaylines{
\text{Every graph } G = (V, E) \text{ with } \Delta(V) = k \text{ is } (k+1) \text{-colorable} \\
\\
\text{Proof:} \\
\text{Proof by iteratively coloring vertices in arbitrary order with the first available color} \\
\text{At most } k \text{ colors will be used for each } v \implies \text{at least one color will be available} \\
\implies G \text{ is } (k+1)\text{-colorable} \\
}
$$
---
$$
\displaylines{
\chi(K_{n}) = n \\
G \text{ contains } K_{q} \implies \chi(G) \geq q \\
\text{Let } \omega(G) \text{ be the largest clique in } G \\
\text{Is it always true that } \chi(G) = \omega(G)? \text{ No!} \\
\text{For example an odd cycle has chromatic number } 3 \text{ and maximum clique of size } 2 \\
}
$$
---
### Interval graph #definition 
$$
\displaylines{
\text{Interval graph } G = (V, E) \text{ is a graph where each vertex} \\
v_{i} \in V \text{ corresponds to an interval } [l_{i}, r_{i}] \subset \mathbb{R} \\
E = \Set{ \Set{ v_{i}, v_{j} } \mid [l_{i}, r_{i}] \cap [l_{j}, r_{j}] \neq \emptyset } \\
}
$$
