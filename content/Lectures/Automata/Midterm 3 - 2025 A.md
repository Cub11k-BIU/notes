---
{"publish":true,"created":"17/01/26, 20:28","modified":"2026-03-24T15:00:01.012+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } M = (Q, \Sigma, \Gamma, \delta, q_{0}, acc, rej) \text{ be a deterministic Turing machine} \\
\text{Let } abba \in \Sigma^{*} \\
\text{Define formally via configuration the phrase "$M$ accepts word abba"} \\
\\
\text{Solution:} \\
u_{0} = \varepsilon \\
\sigma_{0} = a \\
v_{0} = bba \\
\exists \sigma \in \Gamma, u, v \in \Gamma^{*}, q \in Q: u_{0}q\sigma_{0}v_{0} \vdash_{M} u \ acc \ \sigma v \\
\\
\text{Note that empty character is in } \Gamma \text{ so the empty input line is not a problem for } \sigma \\ 
}
$$
# 2
$$
\displaylines{
\text{Let } P \text{ be a PDA} \\
\text{Let } c_{1} \text{ be its configuration} \\
\text{Let } c_{1} \vdash_{P} c_{2} \vdash_{P} c_{3} \\
\text{Write formally } c_{1} \text{ and all possible } c_{3} \text{ as defined on the image} \\
\\
\text{Solution:} \\
c_{1} = (q_{1}, aba, $) \\
c_{2} \in \Set{ (q_{1}, ba, aa$), (q_{2}, aba, \varepsilon) } \\
c_{3} \in \emptyset \\
}
$$
# 3
$$
\displaylines{
\text{Define a PDA with at most 4 states that accepts language} \\
L = \Set{ uw \mid u,w \in \Set{ a, b }^{*}, \#a_{u} = \#b_{w} } \\
\\
\text{Solution:} \\
\text{Let } P = \lrp{Q, \Sigma, \Gamma, \Delta, q_{0}, F} \\
Q = \Set{ q_{0}, q_{1}, q_{2}, q_{3} } \\
\Sigma = \Set{ a, b } \\
\Gamma = \Set{ A, $ } \\
q_{0} = q_{0} \\
F = \Set{ q_{3} } \\
\Delta: \begin{array}{c|c}
 & Q \times \Sigma_{\varepsilon} \times \Gamma_{\varepsilon} & \mathcal{P}(Q \times \Gamma^{*}) &  \\
 & (q_{0}, \varepsilon, \varepsilon) & \Set{ (q_{1}, $) } \\
 & (q_{1}, a, \varepsilon) & \Set{ (q_{1}, A) } \\
 & (q_{1}, b, \varepsilon) & \Set{ (q_{1}, \varepsilon) } \\
 & (q_{1}, \varepsilon, \varepsilon) & \Set{ (q_{2}, \varepsilon) } \\
 & (q_{2}, a, \varepsilon) & \Set{ (q_{2}, \varepsilon) } \\
 & (q_{2}, b, A) & \Set{ (q_{2}, \varepsilon) } \\
 & (q_{2}, \varepsilon, $) & \Set{ (q_{3}, \varepsilon) } \\
\end{array} \\
}
$$
# 4
$$
\displaylines{
\text{Let } M \text{ be a DTM that accepts language } L(M) \\
M = (Q, \Sigma, \Gamma, \delta, q_{0}, acc, rej) \\
\text{Let } N = (Q \cup \Set{ \hat{q}_{0}, \hat{q}_{1} }, \Sigma, \Gamma, \Delta, \hat{q}_{0}, acc, rej) \text{ be a NTM} \\
\text{Let the table of transitions of } N \text{ include all transitions from } M \text{ and these:} \\
\begin{array}{c|c}
 & \text{State} & \text{Input} & \text{New state} & \text{Output} & \text{Direction} &  \\
 & \hat{q}_{0} & \sigma & \hat{q}_{0} & \pi & R & \sigma, \pi \in \Sigma \\
 & \hat{q}_{0} & E & \hat{q}_{1} & E & L \\
 & \hat{q}_{1} & \pi & \hat{q}_{1} & \pi & L & \pi \in \Sigma \\
 & \hat{q}_{1} & E & q_{0} & E & R \\
\end{array} \\
\text{What is } L(N)? \\
\\
\text{Solution:} \\
L(N) = \Set{ w \mid \exists u \in L(M): \abs{u} = \abs{w} } \\
}
$$
# 5
$$
\displaylines{
\text{Convert given automaton to a right regular grammar} \\
\\
\text{Solution:} \\
S = q_{0} \\
\begin{align}
q_{0} & \to aq_{1} \mid bq_{2} \\
q_{1} & \to bq_{1} \mid aq_{2} \\
q_{2} & \to aq_{2} \mid bq_{1} \\
\end{align} \\
}
$$
