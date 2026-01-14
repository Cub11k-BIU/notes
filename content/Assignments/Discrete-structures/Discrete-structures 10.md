---
{"publish":true,"created":"13/01/26, 17:53","modified":"2026-01-14T17:16:39.966+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } G \text{ be a Petersen graph} \\
\text{Prove: } \chi'(G) = \Delta(G) + 1 \\
\\
\text{Proof:} \\
G \text{ is 3-regular, } \Delta(G) = 3 \\
\text{By Vizing's theorem } \Delta(G) \leq \chi'(G) \leq \Delta(G) + 1 \\
\implies \chi'(G) \in \Set{ 3, 4 } \\
\text{Let by contradiction } \chi'(G) = 3 \\
\text{Let } \chi': E(G) \to \Set{ 1, 2, 3 } \\
G \text{ contains } C_{5} \text{ as a subgraph (outer edges)} \\
\chi'(C_{5}) = 3 \\
\text{Let } C_{5} = (v_{0}, v_{1}, v_{2}, v_{3}, v_{4}, v_{0}) \\
\text{Let } \chi'(v_{0}, v_{1}) = 1, \chi'(v_{1}, v_{2}) = 2, \chi'(v_{2}, v_{3}) = 3, \chi'(v_{3}, v_{4}) = 2, \chi'(v_{4}, v_{0}) = 3 & WLOG \\
\text{Each outer vertex now has two out of three incident edges colored} \\
\implies \text{Colors of "connecting" edges are then uniquely defined:} \\
\chi'(v_{0}, u_{0}) = 2, \chi'(v_{1}, u_{1}) = 3, \chi'(v_{2}, u_{2}) = 1, \chi'(v_{3}, u_{3}) = 1, \chi'(v_{4}, u_{4}) = 1 \\
\begin{eqsys}
\chi'(v_{1}, u_{1}) = 3 \\
\chi'(v_{4}, u_{4}) = 1 \\
\end{eqsys} \implies \chi'(u_{1}, u_{4}) = 2 \implies \chi'(u_{1}, u_{3}) = 1 \\
\begin{eqsys}
\chi'(v_{3}, u_{3}) = 1 \\
\chi'(v_{0}, u_{0}) = 2 \\
\end{eqsys} \implies \chi'(u_{0}, u_{3}) = 3 \implies \chi'(u_{1}, u_{3}) = 2 - \text{Contradiction!} \\
\implies G \text{ is not 3-edge-colorable} \implies \boxed{ \chi'(G) = 4 = \Delta(G)+1 } \\
}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta, calc}

\begin{document}
\begin{tikzpicture}[
    % Define styles for consistency
    vertex/.style={circle, fill=black, inner sep=1.5pt},
    standard edge/.style={thin, black}
]

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
	
	\node at (\angle:\Router + 0.3) {$v_{\i}$};
	\node at (\angle-10:\Rinner + 0.3) {$u_{\i}$};
}

% Draw outer pentagon
\draw[standard edge] (outer0) -- (outer1) -- (outer2) -- (outer3) -- (outer4) -- cycle;

% Draw inner pentagram (connecting every second vertex)
\draw[standard edge] (inner0) -- (inner2) -- (inner4) -- (inner1) -- (inner3) -- cycle;

% Draw the highlighted spokes (blue double arrows)
% Shorten them slightly so they don't overlap the vertex dots too much
\foreach \i in {0,1,2,3,4} {
	\draw[standard edge, shorten >=2pt, shorten <=2pt] (inner\i) -- (outer\i);
}

\end{tikzpicture}
\end{document}
```
# 2
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a random graph over } n \text{ vertices} \\
\text{Let } \forall u \neq v \in V: P(\Set{ u, v } \in E) = p \\
}
$$
## 2a
$$
\displaylines{
\text{Let } k \geq 3 \in \mathbb{N} \\
\text{Let } X^{(k)} = \text{number of simple cycles of length $k$ in } G \\
\text{Find } E[X^{(k)}] \\
\\
\text{Solution:} \\
\text{What is the number of simple cycles of length $k$ in } G? \\
\text{It is the number of sequences } v_{1}, \dots, v_{k} \text{ (without repetitions)} \\
\text{Such that } \forall i \in [1, k-1]: \Set{ v_{i}, v_{i+1} } \in E, \Set{ v_{k}, v_{1} } \in E \\
\\
\text{Let } v_{1}, v_{2}, \dots, v_{k} \in V \text{ be a sequence of vertices without repetitions} \\
\text{There are } \frac{n!}{(n-k)!} \text{ such sequences} \\
\text{Note that shift in indices, i.e. } v_{i}, \dots, v_{k}, v_{1}, \dots, v_{i-1} \text{ is the same cycle as } v_{1}, \dots, v_{k} \\
\text{Note also that reversing the direction is the same cycle too} \\
\text{There are a total of } k \text{ shifts and for each there are two directions} \\
\implies \text{Each cycle is represented by } 2k \text{ sequences} \\
\implies \text{Maximum number of simple cycles of length } k \text{ is } T_{k} = \frac{n!}{2k(n-k)!} \\
\\
\text{Let } C_{1}, \dots, C_{T_{k}} \text{ be all possible cycles of length } k \text{ in } G \\
\text{Let } \forall i \in [1, T_{k}] X^{(k)}_{i} = \begin{cases}
1 & C_{i} \in G \\
0 & \text{otherwise} \\
\end{cases} \\
E[X^{(k)}_{i}] = P(X_{i}^{(k)} = 1) = P(C_{i} \in G) = p^{k} \text{(probability that $k$ edges are in $G$)} \\
\boxed{ E[X^{(k)}] = \sum_{i=1}^{T_{k}} E[X^{(k)}_{i}] = T_{k} \cdot p^{k} = \frac{n!}{2k(n-k)!} p^{k} } \\
\\
\text{Note that from here, we can calculate } E[X^{(k)}] \text{ for } p \in \Set{ 0, 1 } \\
\boxed{ p = 0 \implies E[X^{(k)}] = 0 = X^{(k)} } \\
\boxed{ p = 1 \implies E[X^{(k)}] = T_{k} = \frac{n!}{2k(n-k)!} = X^{(k)} } \\
}
$$
## 2b
$$
\displaylines{
\text{Give an upper limit on the probability that } G \text{ has at least } s \text{ simple cycles of length } k \\
\text{Use Markov's inequality} \\
\\
\text{Solution:} \\
\text{Let } X^{(k)} = \text{number of simple cycles of length } k \text{ in } G \\
\text{Markov's inequality: } P(X^{(k)} \geq t) \leq \frac{E[X^{(k)}]}{t} \\
\implies P(X \geq s) \leq \frac{E[X^{(k)}]}{s} = \boxed{ \frac{n! \cdot p^{k}}{s \cdot 2k(n-k)!} } \\
}
$$
## 2c
$$
\displaylines{
\text{Give an upper limit on the probability that } G \text{ has a Hamilton cycle} \\
\text{Use Markov's inequality} \\
\\
\text{Solution:} \\
\text{Any simple cycle of length } n \text{ is a Hamilton cycle} \\
\implies P(G \text{ has a Hamilton path}) = P(X^{(n)} \geq 1) \leq \frac{E[X^{(n)}]}{1} = \\
= E[X^{(n)}] = \frac{n! \cdot p^{n}}{2n} = \boxed{ \frac{(n-1)! \cdot p^{n}}{2} } \\
}
$$
# 3
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } k \geq 2 \in \mathbb{N} \\
\text{Prove: } \exists G' = (V', E') \text{ a subgraph of } G: \chi(G') \leq k \text{ and } \abs{E'} \geq \abs{E}\left( 1-\frac{1}{k} \right) \\
\\
\text{Proof:} \\
\text{Let } f: V \to [k] \text{ be a random coloring of } G, \text{ not necessarily correct} \\
\text{Let } \Set{ u, v } \in E \\
P(f(u) = f(v)) = \frac{1}{k} \\
\text{In other words, each edge has probability } \frac{1}{k} \text{ to violate coloring correctness} \\
\text{Let } X = \text{number of edges } \Set{ u, v } \text{ such that } f(u) = f(v) \\
\implies \text{By symmetry } E[X] = \frac{\abs{E}}{k} \\
\implies \exists f: \text{ at most } \frac{\abs{E}}{k} \text{ edges violate coloring correctness} \\
\text{Let } E' = \Set{ \Set{ u, v } \in E \mid f(u) \neq f(v) } \\
\text{Clearly, } \abs{E'} \geq \abs{E} - \frac{\abs{E}}{k} = \abs{E}\left( 1 - \frac{1}{k} \right) \\
\text{It is also clear that } G' = (V, E') \text{ is } k\text{-colorable} \\
}
$$
# 4
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph, } \abs{V} = n \geq 2 \\
\text{Prove: } ch(G) \leq \ceil{\chi(G)\ln n} \\
\\
\text{Proof:} \\
\text{Let } k = \chi(G) \\
\text{Let } \chi: V \to [k] \\
\text{Let } C_{1}, C_{2}, \dots, C_{k} \subseteq V: \forall i \in [k]: C_{i} = \Set{ v \in V \mid \chi(v) = i } \\
\\
\text{Let } L = \Set{ L_{v} }_{v \in V} \text{ be a collection of lists} \\
\text{Let } \forall v \in V: \abs{L_{v}} = \ceil{k\ln n} \\
\text{For each } l \in \bigcup_{v \in V} L_{v} \text{ choose uniformly } i \in [k] \\
\text{Assign } \forall v \in C_{i}: v \text{ is colored with } l, \text{ if possible, meaning } l \in L_{v} \\
\text{Probability that } v \in C_{i} \text{ remains uncolored is the probability that for every color } l \in L_{v} \\
\text{we have chosen } j \in [k]: j \neq i \\
\text{This probability is } \left( 1 - \frac{1}{k} \right)^{\ceil{k\ln n}} < \left( 1-\frac{1}{k} \right)^{k\ln n} \leq (e^{-1/k})^{k\ln n} = \frac{1}{n} \\
\text{Let } X = \text{number of uncolored vertices} \\
E[X] = n \cdot p < n \cdot \frac{1}{n} = 1 \\
\implies \text{There exists a list-coloring such that all vertices are colored} \\
\implies ch(G) \leq \ceil{k\ln n} \\
}
$$
