---
{"publish":true,"created":"02/11/25, 13:11","modified":"2025-12-07T09:18:57.446+02:00","tags":["Academia","Practice","Automata"],"cssclasses":""}
---

## Deterministic finite automaton
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

```tikz
\usepackage{tikz}
\usetikzlibrary{automata, positioning, arrows}

\tikzset{
	->,
	node distance=3cm,
}

\begin{document}
\begin{tikzpicture}[scale=2]
\node[state, initial, accepting] (q0) {start};
\node[state, accepting, right of=q0] (q1) {$q_a$};
\node[state, accepting, below of=q0] (q2) {$q_b$};
\node[state, right of=q2] (q3) {bad};
\draw
(q0) edge[above] node{a} (q1)
(q0) edge[left] node{b} (q2)
(q1) edge[bend left, above] node{b} (q2)
(q1) edge[right] node{a} (q3)
(q2) edge[bend left, above] node{a} (q1)
(q2) edge[above] node{b} (q3)
(q3) edge[loop right] node{a, b} (q3)
;
\end{tikzpicture}
\end{document}
```
---
## Word function $\delta^{*}$
$$
\displaylines{
\delta^{*} : Q \times \Sigma^{*} \to Q \\ \\
}
$$
## Automaton language
$$
\displaylines{
L(A) = \Set{ w | \delta^{*}(q_{0}, w) \in F } \\
}
$$
---
### Example of combining (multiplying) two automata
```tikz
\usepackage{tikz}
\usetikzlibrary{automata, positioning, arrows}

\tikzset{
	->,
	node distance=3cm,
}

\begin{document}
\begin{tikzpicture}[scale=1.5]
\node[state, initial] (q0) {$q_0$};
\node[state, accepting, right of=q0] (q1) {$q_1$};
\draw
(q0) edge[loop above] node{b} (q0)
(q0) edge[above] node{a} (q1)
(q1) edge[bend left, below] node{b} (q0)
(q1) edge[loop above] node{a} (q1)
;
\end{tikzpicture}
\\
\\
\begin{tikzpicture}[scale=1.5]
\node[state, initial, accepting] (p0) {$p_0$};
\node[state, right of=p0] (p1) {$p_1$};
\draw
(p0) edge[above] node{a, b} (p1)
(p1) edge[bend left, below] node{a, b} (p0)
;
\end{tikzpicture}
\end{document}
```
```tikz
\usepackage{tikz}
\usetikzlibrary{automata, positioning, arrows}

\tikzset{
	->,
	node distance=3cm,
}

\begin{document}
\begin{tikzpicture}[scale=2]
\node[state, initial, accepting] (q0p0) {$q_0,p_0$};
\node[state, right of=q0p0] (q0p1) {$q_0,p_1$};
\node[state, accepting, below of=q0p0] (q1p0) {$q_1,p_0$};
\node[state, accepting, right of=q1p0] (q1p1) {$q_1,p_1$};
\draw
(q0p0) edge[above] node{b} (q0p1)
(q0p0) edge[above] node{a} (q1p1)
(q0p1) edge[bend right, above] node{b} (q0p0)
(q0p1) edge[bend right, above] node{a} (q1p0)
(q1p0) edge[above] node{a} (q1p1)
(q1p0) edge[bend right, above] node{b} (q0p1)
(q1p1) edge[bend left, above] node{a} (q1p0)
(q1p1) edge[bend left, above] node{b} (q0p0)
;
\end{tikzpicture}
\end{document}
```
---
## Building abstract automaton
$$
\displaylines{
\text{Let } L \text{ be a language} \\
\text{Let } L_{a} = \Set{ aw | w \in L } \\
\text{Given an automaton } A \text{ with language } L(A) = L, \\
\text{we can build an automaton } B \text{ with language } L(B) = L_{a} \\
}
$$
$$
\displaylines{
\text{Let } A = (Q, \Sigma, \delta, q_{0}, F) \\
\\
\text{Let } B = (Q \lor \Set{ q_{s}, q_{t} }, \Sigma, \delta', q_{s}, F) \\
\delta'(q, \sigma) = \begin{cases}
q_{0} & q = q_{s}, \sigma = a \\
q_{t} & q = q_{s}, \sigma = b \\
q_{t} & q = q_{t} \\
\delta'(q, \sigma) = \delta(q, \sigma) & q \in Q \\
\end{cases} \\
\implies L(B) = L_{a} \\
}
$$
Another example
$$
\displaylines{
\text{Let } L \text{ be a regular language} \\
\text{Let } L_{-a} = \Set{ w | wa \in L, w \in \Set{ a, b }^{*} } \\
\\
\text{Let } A = (Q, \Sigma, \delta, q_{0}, F): L(A) = L \\
\text{Let } B = (Q, \Sigma, \delta, q_{0}, F') \\
F' = \Set{ q | \delta(q, a) \in F } \\
\implies L(B) = L_{-a} \\
}
$$
---
## Shuffle operation #definition
$$
\displaylines{
\text{Let } u, w \text{ be words} \\
\text{Then } u \diamond w = \Set{ u_{1}w_{1}u_{2}w_{2}\dots u_{n}w_{n} | \begin{array}{}
u = u_{1}u_{2}\dots u_{n} \\
w = w_{1}w_{2}\dots w_{n} \\
n \geq 1 \text{ and } \forall i \in [1, n]: u_{i}, v_{i} \in \Sigma^{*} \\
\end{array} } \\
}
$$
---
## Zigzag language #definition 
$$
\displaylines{
Zigzag(L_{1}, L_{2}) = \Set{ w = a_{1}b_{1}a_{2}b_{2}\dots a_{n}b_{n} | \forall i \in [1, n]: a_{i} \in L_{1}, b_{i} \in L_{2} } \\
\text{or simply } L_{1} \diamond_{Z} L_{2}
}
$$
$$
\displaylines{
\text{Let } A: L(A) = L_{1} \\
\text{Let } B: L(B) = L_{2} \\
\text{Build } C: L(C) = Zigzag(L_{1}, L_{2}) \\
\\
\text{Solution:} \\
A = (Q_{A}, \Sigma, \delta_{A}, q_{0_{A}}, F_{A}) \\
B = (Q_{B}, \Sigma, \delta_{B}, q_{0_{B}}, F_{B}) \\
\\
C = (Q_{A} \times Q_{B} \times \Set{ 1, 2 }, \Sigma, \delta_{C}, (q_{0_{A}}, q_{0_{B}}, 1), F_{A} \times F_{B} \times \Set{ 1 }) \\
\delta_{C}((q, p, i), \sigma) = \begin{cases}
(\delta_{A}(q, \sigma), p, 2) & i = 1 \\
(q, \delta_{B}(p, \sigma), 1) & i = 2 \\
\end{cases} \\
}
$$
---
## SemiZigzag language #definition 
$$
\displaylines{
SemiZigzag(L_{1}, L_{2}) = \Set{ w = a_{1}b_{1}a_{2}b_{2}\dots a_{n}b_{n} | \forall i \in [1, n]: a_{i} \in L_{1} \text{ or } \forall i \in [1, n]: b_{i} \in L_{2} } \\
\text{or simply } L_{1} \diamond_{S} L_{2} \\
\\
\text{Prove: } L_{1}, L_{2} \text{ are regular} \implies SemiZigzag(L_{1}, L_{2}) \text{ is regular} \\
\\
\text{Proof:} \\
\text{Let } A = (Q_{A}, \Sigma, \delta_{A}, q_{0_{A}}, F_{A}) : L(A) = L_{1} \\
\text{Let } B = (Q_{B}, \Sigma, \delta_{B}, q_{0_{B}}, F_{B}): L(B) = L_{2} \\
\\
\text{Let } C = (Q_{A} \times Q_{B} \times \Set{ 1, 2 }, \Sigma, \delta_{C}, (q_{0_{A}}, q_{0_{B}}, 1), F_{A} \times Q_{B} \times \Set{ 1 } \cup Q_{A} \times F_{B} \times \Set{ 1 }) \\
\delta_{C}((q, p, i), \sigma) = \begin{cases}
(\delta_{A}(q, \sigma), p, 2) & i = 1 \\
(q, \delta_{B}(p, \sigma), 1) & i = 2 \\
\end{cases} \\
L(C) = SemiZigzag(L_{1}, L_{2}) \implies SemiZigzag(L_{1}, L_{2}) \text{ is regular} \\
}
$$
---
## Welding two languages #definition 
$$
\displaylines{
\text{Let } L_{1} \text{ over } \Sigma_{1}, L_{2} \text{ over } \Sigma_{2} \\
\text{Let } \Sigma_{1} \cap \Sigma_{2} = \emptyset \\
\text{Welding of two languages can be defined as } L_{1} \diamond_{W} L_{2} = \bigcup_{w \in L_{1}, u \in L_{2}} (u \diamond w) \\
\\
\text{Prove: } L_{1}, L_{2} \text{ are regular} \implies L_{1} \diamond_{W} L_{2} \text{ is regular} \\
\\
\text{Proof:} \\
\text{Let } A = (Q_{A}, \Sigma_{1}, \delta_{A}, q_{0_{A}}, F_{A}) : L(A) = L_{1} \\
\text{Let } B = (Q_{B}, \Sigma_{2}, \delta_{B}, q_{0_{B}}, F_{B}): L(B) = L_{2} \\
\\
\text{Let } C = (Q_{A} \times Q_{B}, \Sigma_{1} \cup \Sigma_{2}, \delta_{C}, (q_{0_{A}}, q_{0_{B}}), F_{A} \times F_{B}) \\
\delta_{C}((q, p), \sigma) = \begin{cases}
(\delta_{A}(q, \sigma), p) & \sigma \in \Sigma_{1} \\
(q, \delta_{B}(p, \sigma)) & \sigma \in \Sigma_{2} \\
\end{cases}
}
$$
---
$$
\displaylines{
\text{Let } L(A) = L \\
\text{Let } Long(L) = \Set{ w | w \in L, \left\lvert w \right\rvert > 2 } \\
\text{Build } B \text{ such that } L(B) = Long(L) \\
\\
\text{Solution:} \\
Long(L) = \Sigma^{*}_{>2} \cap L \\
\text{Let } B = (\Set{ p_{0}, p_{1}, p_{2}, p_{3} }, \Sigma, \delta_{B}, p_{0}, \Set{ p_{3} }) \\
\delta_{B}(p_{i}, \sigma) = \begin{cases}
p_{i+1} & i < 3 \\
p_{3} & \text{otherwise} \\
\end{cases} \\
\implies L(B) = \Sigma^{*}_{>2} \\
\\
\text{Next we just use an intersection of automata:} \\
C = (Q_{A} \times Q_{B}, \Sigma, \delta_{C}, (q_{0_{A}}, q_{0_{B}}), F_{A} \times F_{B}) \\
\delta_{C}((q, p), \sigma) = (\delta_{A}(q, \sigma), \delta_{B}(p, \sigma)) \\
}
$$
---
$$
\displaylines{

}
$$