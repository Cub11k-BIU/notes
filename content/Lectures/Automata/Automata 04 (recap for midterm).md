---
{"publish":true,"created":"16/11/25, 09:11","modified":"2026-03-24T15:00:00.826+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

$$
\displaylines{
\text{Build a deterministic automaton } A \\
\text{Such that } L(A) = \Set{ wb\sigma | w \in \Sigma^{*}, \sigma \in \Sigma } \\
\\
\text{Solution:} \\
Q = \Set{ q_{0}, q_{1}, q_{2}, q_{3} } \\
F = \Set{ q_{2}, q_{3} } \\
q_{0} = q_{0} \\
\Sigma = \Set{ a, b } \\
\delta(q, \sigma) = \begin{cases}
q_{0} & q = q_{0}, \sigma = a \\
q_{1} & q = q_{0}, \sigma = b \\
q_{2} & q = q_{1}, \sigma = a \\
q_{3} & q = q_{1}, \sigma = b \\
q_{0} & q = q_{2}, \sigma = a \\
q_{1} & q = q_{2}, \sigma = b \\
q_{2} & q = q_{3}, \sigma = a \\
q_{3} & q = q_{3}, \sigma = b \\
\end{cases} \\
\\
\text{A non-deterministic automaton for the same language is:} \\
Q = \Set{ q_{0}, q_{1}, q_{2} } \\
F = \Set{ q_{2} } \\
q_{0} = q_{0} \\
\Delta(q, \sigma) = \begin{cases}
\Set{ q_{0} } & q = q_{0}, \sigma = a \\
\Set{ q_{0}, q_{1} } & q = q_{0}, \sigma = b \\
\Set{ q_{2} } & q = q_{1}, \sigma = b \\
\emptyset & q = q_{2} \\
\end{cases} \\
}
$$
---
$$
\displaylines{
\text{Let } A, B \text{ be deterministic automata over } \Sigma = \Set{ a, b } \\
\text{Build a non-deterministic automaton } N \text{ such that} \\
L(N) = \Set{ w | w \in L(A) \text{ and } \exists u \in L(B) : \abs{u} = \abs{w} } \\
\\
\text{Solution:} \\
Q = Q_{A} \times Q_{B} \\
q_{0} = (q_{0_{A}}, q_{0_{B}}) \\
F = F_{A} \times F_{B} \\
\forall (q, p) \in Q, \sigma \in \Sigma: \Delta((q, p), \sigma) = \Set{ (\delta_{A}(q, \sigma), p') | \exists \pi \in \Sigma: \delta_{B}(p, \pi) = p' } \\
}
$$
---
$$
\displaylines{
\text{Given a deterministic automaton } A \\
\text{Build a non-deterministic automaton } N \\
\text{Such that } L(N) = \Set{ u\sigma \pi v | u \pi \sigma v \in L(A), u, v \in \Sigma^{*}, \pi, \sigma \in \Sigma } \\
\\
\text{Solution:} \\
A \to Swap(\sigma, \pi) \to A' \\
Q = Q_{A} \times \Set{ 0, 1 } \cup Q \times \Sigma \\
F = Q_{A} \times \Set{ 1 } \\
q_{0} = (q_{0}, 0) \\
\Delta((q, 1), \sigma) = \Set{ (\delta_{A}(q, \sigma), 1) } \\
\Delta((q, 0), \sigma) = \Set{ (\delta_{A}(q, \sigma), 0) } \cup \Set{ (p, \pi) | \delta_{A}^{*}(q, \pi \sigma) = p } \\
\Delta((p, \pi), \pi) = \Set{ (p, 1) } \\
}
$$
---
