---
{"publish":true,"created":"07/01/26, 16:13","modified":"2026-01-07T17:24:22.555+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } L_{1} = \Set{ w \in \Set{ 0, 1 }^{*} \mid \#0_{w} \geq 2 } \\
\text{Determine whether } L(r) = L_{1} \\
}
$$
## 1a
$$
\displaylines{
r = 1^{*}01^{*}01^{*} \\
\\
\text{Solution:} \\
000 \in L_{1} \setminus L(r) \\
}
$$
## 1b
$$
\displaylines{
r = 1^{*}01^{*}01^{*}(1^{*}01^{*}01^{*})^{*} \\
\\
\text{Solution:} \\
000 \in L_{1} \setminus L(r) \\
}
$$
## 1c
$$
\displaylines{
r = (0|1)^{*}00(1|0)^{*} \\
\\
\text{Solution:} \\
010 \in L_{1} \setminus L(r) \\
}
$$
## 1d
$$
\displaylines{
r = 1^{*}01^{*}0(0|1)^{*} \\
\\
\text{Solution:} \\
L_{1} = L(r) \\
}
$$
# 2
$$
\displaylines{
\text{Let } L = \Set{ a^{i}b^{j}c^{k} \mid \max\lrc{i, k} \geq j \geq \min\lrc{i, k} } \\
\text{Let us try to prove } L \text{ is not regular via the pumping lemma} \\
\text{Let } n \\
\text{Choose words proving that } L \text{ is not regular and provide correct } i \text{ for such words} \\
}
$$
## 2a
$$
\displaylines{
w = a^{n-8}b^{n-8}c^{n-8} \\
\\
\text{Solution:} \\
w = xyz \\
\abs{xy} \leq n \implies xy = \begin{cases}
a^{n-8}b^{k} & k \leq 8 \\
a^{k} & k \leq n-8 \\
\end{cases} \\
\text{Let } xy = a^{n-8}b, y = ab \\
\text{Pumping } y \text{ doesn't give a contradiction} \\
\implies w \text{ doesn't work} \\
}
$$
## 2b
$$
\displaylines{
w = a^{n}b^{n}c^{n-1} \\
\\
\text{Solution:} \\
w = xyz \\
\abs{xy} \leq n \implies xy = a^{k}, k \leq n \\
\implies y = a^{m} \\
i = 0 \implies xy^{i}z = xz = a^{n-m}b^{n}c^{n-1} \\
\max\lrc{i, k} = n-1 \\
\min\lrc{i, k} = n-m \\
n - m \geq n \geq n-1 - \text{Contradiction!} \\
\implies w \text{ works} \\
}
$$
## 2c
$$
\displaylines{
w = a^{6}b^{6}c^{7} \\
\\
\text{Solution:} \\
\abs{w} \not\geq n \\
\implies w \text{ doesn't work} \\
}
$$
## 2d
$$
\displaylines{
w = a^{n-1}b^{n}c^{n} \\
\\
\text{Solution:} \\
\abs{xy} \leq n \\
\text{Let } xy = a^{n-1}b, y = ab \\
\text{Pumping } y \text{ doesn't give a contradiction} \\
\implies w \text{ doesn't work} \\
}
$$
## 2e
$$
\displaylines{
w = a^{n}b^{n}c^{n+1} \\
\\
\text{Solution:} \\
\abs{xy} \leq n \implies xy = a^{k} \\
\implies y = a^{m} \\
\implies xy^{2}z = a^{n+m}b^{n}c^{n+1} \\
\implies \min\lrc{i,k} = n+1 > n - \text{Contradiction!} \\
}
$$
# 3a
$$
\displaylines{
L_{3} = \Set{ a^{n+m}b^{3n}c^{2m} \mid n, m \geq 0 } \\
\text{Provide a CFG for } L_{3} \\
\\
\text{Solution:} \\
\begin{align}
S & \to B \mid aScc \\
B & \to \varepsilon \mid aBbbb \\
\end{align} \\
}
$$
# 3b
$$
\displaylines{
L_{4} = \Set{ a^{n+m}b^{3n}u \mid n, m \geq 0 \text{ and } u \in \Set{ a, b, c }^{*} \text{ and } \#c_{u} = 2m } \\
\text{Provide a CFG for } L_{4} \\
\\
\text{Solution:} \\
\begin{align}
S & \to B \mid aSU \\
B & \to \varepsilon \mid aBbbb \\
U & \to AcAcA \\
A & \to aA \mid bA \mid \varepsilon \\
\end{align} \\
}
$$
# 4
$$
\displaylines{
\text{Based on the CFG from 3a, build a PDA for } L_{3} \text{ with 3 states} \\
\\
\text{Solution:} \\
G = (V, \Sigma, R, S) \\
V = \Set{ S, B } \\
\Sigma = \Set{ a, b, c } \\
\\
\text{Let } P = \lrp{Q, \Sigma, \Gamma, \Delta, q_{0}, F} \\
Q = \Set{ q_{0}, q_{1}, q_{2} } \\
\Sigma = \Set{ a, b, c } \\
\Gamma = \Sigma \cup V \cup \Set{ $ } \\
q_{0} = q_{0} \\
F = \Set{ q_{2} } \\
\begin{align}
& \Delta(q_{0}, \varepsilon, \varepsilon) = \Set{ (q_{1}, S$) } \\
& \Delta(q_{1}, \varepsilon, S) = \Set{ (q_{1}, B), (q_{1}, aScc) } \\
& \Delta(q_{1}, \varepsilon, B) = \Set{ (q_{1}, \varepsilon), (q_{1}, aBbbb) } \\
& \Delta(q_{1}, a, a) = \Set{ (q_{1}, \varepsilon) } \\
& \Delta(q_{1}, b, b) = \Set{ (q_{1}, \varepsilon) } \\
& \Delta(q_{1}, c, c) = \Set{ (q_{1}, \varepsilon) } \\
& \Delta(q_{1}, \varepsilon, $) = \Set{ (q_{2}, \varepsilon) } \\
\end{align} \\
}
$$
# 5
$$
\displaylines{
\text{Let } L = \Set{ uu \mid u \in \Set{ a, b }^{*} } \\
\text{Let us prove that } L \text{ is not context free} \\
\text{Let } n \\
\text{Let } w = ab^{n}ab^{n} \\
\text{Show that } w \text{ does not finish the proof} \\
\\
\text{Solution:} \\
w = tuxyz \\
\abs{uxy} \leq n, \abs{uy} > 0 \\
\implies \begin{cases}
uxy = ab^{k} \\
uxy = b^{k} \\
uxy = b^{k}ab^{j} \\
\end{cases} \\
\text{Let } uxy = b^{k}ab^{j} \\
\text{Let } x = a \\
\implies u = b^{k}, y = b^{j}, t = ab^{n-k}, z = b^{n-j} \\
\text{Let } k = j \\
\implies \forall i : tu^{i}xy^{i}z \in L \\
\text{No contradiction!} \\
}
$$
