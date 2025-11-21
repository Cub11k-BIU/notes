---
{"publish":true,"created":"09/11/25, 13:11","modified":"2025-11-21T21:10:24.505+02:00","tags":["Academia","Practice","Automata"],"cssclasses":""}
---

$$
\displaylines{
\text{Let } cycle(L) = \Set{ xy | yx \in L } \\
\\
\text{Let } A = (Q_{A}, \Sigma, \delta_{A}, q_{0_{A}}, F_{A}) : L(A) = L \\
\text{Let } B = (Q, \Sigma, \Delta, q_{0}, F) \\
Q = q_{0} \cup Q_{A} \times Q_{A} \times \Set{ After, Before } \\
\Delta(q_{0}, \varepsilon) = \Set{ (q, q, Before) | q \in Q } \\
\forall f \in F: \Delta((q, f, Before), \varepsilon) = \Set{ (q, q_{0}, After) } \\
\forall q, p \in Q, \sigma \in \Sigma : \begin{array}{}
\Delta((q, p, Before), \sigma) = \Set{ (q, \delta(p, \sigma), Before) } \\
\Delta((q, p, After), \sigma) = \Set{ (q, \delta(p, \sigma), After) } \\
\end{array} \\
F = \Set{ (q, q, After) | q \in Q } \\
}
$$
---
$$
\displaylines{
B \overset{ 1 }{ \leftarrow } C = \Set{ w \in B | \exists y \in C : \#1_{w} = \#1_{y} } \\
\text{Show that if } B, C \text{ are regular, then } B \overset{ 1 }{ \leftarrow } C \text{ is also regular} \\
\\
\text{Solution:} \\
\text{By definition exist deterministic finite automata } D_{B}, D_{C} \\
\\
\text{Let } N = (Q, \Set{ 0, 1 }, \Delta, q_{0}, F) \\
Q = Q_{B} \times Q_{C} \\
q_{0} = (q_{0_{B}}, q_{0_{C}}) \\
\forall (q, p) \in Q, \sigma \in \Set{ 0, 1, \varepsilon }: \Delta((q, r), \sigma) = \begin{cases}
\Set{ (\delta_{B}(q, 0), p) } & \sigma = 0 \\
\Set{ (\delta_{B}(q, 1), \delta_{C}(p, 1)) } & \sigma = 1 \\
\Set{ (q, \delta_{C}(p, 0)) } & \sigma = \varepsilon \\
\end{cases} \\
F = F_{B} \times F_{C} \\
}
$$
---
