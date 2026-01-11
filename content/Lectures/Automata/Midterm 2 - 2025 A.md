---
{"publish":true,"created":"07/01/26, 17:27","modified":"2026-01-07T20:32:54.328+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# 1
$$
\displaylines{
\dots \text{ stuff about regular expressions} \\
}
$$
# 2
$$
\displaylines{
\text{Build a PDA with 3 states for the following language:} \\
L_{3} = \Set{ a^{x}b^{y}a^{z}b^{x+y+z} \mid x, y, z \geq 0 } \\
\\
\text{Solution:} \\
\text{First, we'll build a CFG for } L_{3} \\
\begin{align}
S & \to aSb \mid M \\
M & \to bMb \mid A \\
A & \to aAb \mid \varepsilon \\
\end{align} \\
\text{Then a PDA for that CFG:} \\
{P} = \lrp{Q, \Sigma, \Gamma, \Delta, q_{0}, F} \\
Q = \Set{ q_{0}, q_{1}, q_{2} } \\
\Sigma = \Set{ a, b, c } \\
\Gamma = V \cup \Sigma \cup \Set{ $ } \\
q_{0} = q_{0} \\
F = \Set{ q_{2} } \\
\Delta(q_{0}, \varepsilon, \varepsilon) = \Set{ (q_{1}, S$) } \\
\Delta(q_{1}, S, \varepsilon) = \Set{ (q_{1}, aSb), (q_{1}, M) } \\
\Delta(q_{1}, M, \varepsilon) = \Set{ (q_{1}, bMb), (q_{1}, A) } \\
\Delta(q_{1}, A, \varepsilon) = \Set{ (q_{1}, aAb), (q_{1}, \varepsilon) } \\
\Delta(q_{1}, a, a) = \Delta(q_{1}, b, b) = \Delta(q_{1}, c, c) = \Set{ (q_{1}, \varepsilon) } \\
\Delta(q_{1}, $, \varepsilon) = \Set{ (q_{2}, \varepsilon) } \\
}
$$
# 3
$$
\displaylines{
\text{Given a CFG } G = (V, \Sigma, R, S) \\
\begin{align}
S & \to AB \mid ACA \\
A & \to aA \mid bA \mid \varepsilon \\
B & \to aaa \mid bb \\
C & \to Aa \mid Ba \\
\end{align} \\
}
$$
## 3a
$$
\displaylines{
\text{What is the shortest string in } L(G) \\
\\
\text{Solution:} \\
S \to AB \to \varepsilon B \to \varepsilon bb = bb \\
S \to ACA \to \varepsilon C\varepsilon \to \varepsilon Aa\varepsilon \to \varepsilon \varepsilon a \varepsilon = a \\
\implies a \\
}
$$
## 3b
$$
\displaylines{
\text{In the set of all tree derivations of strings in } L(G), \\
\text{what is the minimum number of internal nodes in such a tree?} \\
\\
\text{Solution:} \\
S \to AB \to \varepsilon B \to \varepsilon bb \\
S \to ACA \to \dots \implies 4 \text{ internal nodes or more} \\
\text{The minimum tree has 3 internal nodes - } S, A, B \\
}
$$
# 4
$$
\displaylines{
\text{Let } L_{2} = \Set{ uu^{r} \mid u \in \Set{ a, b }^{*}} \\
\text{Let } n \\
\text{Determine whether } w \text{ proves that } L_{2} \text{ is not regular} \\
}
$$
## 4a
$$
\displaylines{
w = ab^{2n}a \\
\\
\text{Solution:} \\
w = xyz \\
\abs{xy} \leq n \implies xy = ab^{k}, y = \begin{cases}
ab^{k} & x = \varepsilon \\
b^{k-j} & x = ab^{j} \\
\end{cases} \\
x = \varepsilon, y = ab^{k} \implies xy^{0}z \not\in L_{2} \\
x = ab^{j}, y = b^{k-j} \implies xy^{i}z \in L \iff k-j \text{ is even} \\
\implies w \text{ doesn't work with, for example, decomposition } x = a, y = bb, z = b^{2n-2}a \\
}
$$
## 4b
$$
\displaylines{
w = a^{n}a^{n} \\
\\
\text{Solution:} \\
w = xyz, \abs{xy} \leq n \implies xy = a^{k} \\
\text{Let } x = a, y = aa, z = a^{2n-3} \\
\implies \forall i: xy^{i}z = a^{2n+2i-2} \in L_{2} \\
\implies w \text{ doesn't work} \\
}
$$
## 4c
$$
\displaylines{
w = a^{n-1}bba^{n-1} \\
\\
\text{Solution:} \\
w = xyz, \abs{xy} \leq n \implies xy = \begin{cases}
a^{k} & k \leq n-1 \\
a^{n-1}b \\
\end{cases} \\
\abs{y} > 0 \implies y = \begin{cases}
a^{j} & j > 0 \\
a^{j}b & j \geq 0 \\
\end{cases} \\
y = a^{j} \implies xy^{0}z = a^{n-1-j}bba^{n-1} \not\in L_{2} \\
y = a^{j}b \implies xy^{0}z = a^{n-1-j}ba^{n-1} \not\in L_{2} \\
\implies w \text{ works} \\
}
$$
## 4d
$$
\displaylines{
w = a^{n-2}bba^{n-2} \\
\\
\text{Solution:} \\
\text{Let } x = a^{n-2}, y = bb \\
\implies \forall i: xy^{i}z = a^{n-2}b^{2i}a^{n-2} \in L_{2} \\
\implies w \text{ doesn't work} \\
}
$$
# 5
$$
\displaylines{
\text{Let } G = (V, \Sigma, R, S) \\
\begin{align}
S & \to aaB \\
B & \to baB \mid aC \\
C & \to b \\
\end{align} \\
\text{Convert } G \text{ to an equivalent right regular CFG} \\
\\
\text{Solution:} \\
}
$$
$$
\displaylines{
\begin{align}
S & \to aA' \\
A' & \to aB' \\
B' & \to bD' \mid aC' \\
D' & \to aB' \\
C' & \to b \\
\end{align}
}
$$
