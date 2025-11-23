---
{"publish":true,"created":"02/11/25, 10:11","modified":"2025-11-23T09:35:55.636+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# Deterministic finite automata #definition 
$$
\displaylines{
A = (Q, \Sigma, \delta, q_{0}, F) \\
Q - \text{a finite set of states} \\
\Sigma - \text{alphabet} \\
\text{Letter function } \delta : Q \times \Sigma \to Q \\
q_{0} - \text{starting state} \\
F - \text{a finite set of accepting states} \\
}
$$
An example of a deterministic finite automata would be a vending machine, that releases a product when use pays 3 or more ILS, no change is given.
```tikz
\usepackage{tikz}
\usetikzlibrary{automata, positioning, arrows}

\tikzset{
	node distance=3cm
}

\begin{document}
\begin{tikzpicture}[scale=1.2]
\node[state, initial] (q0) {0 ILS};
\node[state, right of=q0] (q1) {1 ILS};
\node[state, right of=q1] (q2) {2 ILS};
\node[state, accepting, right of=q2] (q3) {3+ ILS};
\draw
(q0) edge[above] node{1} (q1)
(q0) edge[bend left, above] node{2} (q2)
(q0) edge[bend right, below] node{5} (q3)
(q1) edge[above] node{1} (q2)
(q1) edge[bend left, above] node{2, 5} (q3)
(q2) edge[above] node{1, 2, 5} (q3);
\end{tikzpicture}
\end{document}
```
$$
\displaylines{
\Sigma = \Set{ 1, 2, 5 } \\
L = \Set{ \sigma_{1}\sigma_{2}\dots\sigma_{n} | \sum_{i=1}^{n} \sigma_{i} \geq 3 } \\
}
$$
---
```tikz
\usepackage{tikz}
\usetikzlibrary{automata, positioning, arrows}

\tikzset{
	node distance=3cm
}

\begin{document}
\begin{tikzpicture}[scale=2]
\node[state, accepting, initial] (q0) {Start};
\node[state, accepting, above right of=q0] (q1) {Hebrew};
\node[state, accepting, below right of=q0] (q2) {English};
\node[state, below right of=q1] (q3) {Mixed};
\draw
(q0) edge[above] node{$\aleph$} (q1)
(q0) edge[above] node{a} (q2)
(q1) edge[loop right] node{$\aleph$} (q1)
(q1) edge[above] node{a} (q3)
(q2) edge[loop right] node{a} (q2)
(q2) edge[above] node{$\aleph$} (q3)
;
\end{tikzpicture}
\end{document}
```
$$
\displaylines{
\Sigma = \Set{ a, \aleph } \\
L = \Set{ a }^{*} \cup \Set{ \aleph }^{*} \\
}
$$
---
## Word function $\delta^{*}$ #definition 
$$
\displaylines{
\delta^{*} : Q \times \Sigma^{*} \to Q \\ \\
}
$$
## Automata language #definition 
$$
\displaylines{
L(A) = \Set{ w | \delta^{*}(q_{0}, w) \in F } \\
}
$$
