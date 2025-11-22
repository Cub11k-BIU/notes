---
{"publish":true,"created":"21/11/25, 22:36","modified":"2025-11-22T22:00:40.829+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# 4
$$
\displaylines{
\text{Let } A, B \text{ be deterministic automata} \\
\text{Build a non-deterministic } N = (Q_{N}, \Sigma, \Delta_{N}, q_{0_{N}}, F_{N}) \\
\text{such that } L(N) = \Set{ uxv | uv \in L(A), x \in L(B) } \\
\\
\text{Solution:} \\
Q_{N} = Q_{A} \cup Q_{A} \times Q_{B} \cup \Set{ q' | q \in Q_{A} } \\
F_{N} = \Set{ f' | f \in F_{A} } \\
q_{0_{N}} = q_{0_{A}} \\
\forall q \in Q_{A}, \sigma \in \Sigma: \Delta_{N}(q, \sigma) = \Set{ \delta_{A}(q, \sigma) } \\
\forall q \in Q_{A}, \sigma \in \Sigma: \Delta_{N}(q', \sigma) = \Set{ p' | \delta_{A}(q, \sigma) = p } \\
\text{Add } \varepsilon\text{-transitions from } A \text{ to } B_{q_{i}}: \\
\forall q \in Q_{A}: \Delta_{N}((q, p), \varepsilon) = \Set{ (q, q_{0_{B}}) } \\
\text{Add } \varepsilon\text{-transitions from } F_{B_{q_{i}}} \text{ to } A': \\
\forall (q, p) \in Q_{A} \times F_{B}: \Delta_{N}((q, p), \varepsilon) = \Set{ q' } \\
}
$$
# 5
$$
\displaylines{
\text{Let } N \text{ be the automata from exercise } 4 \\
\text{Build a non-deterministic } N' = (Q_{N}, \Sigma, \Delta_{N'}, q_{0_{N}}, F_{N}) \\
\text{such that } L(N') = \Set{ uxv | uv \in L(A), \exists \sigma \in \Sigma: x\sigma \in L(B) } \\
\\
\text{Solution:} \\
\text{Similarly to } 4, \text{ we have to connect automata } A, B_{q_{i}} \text{ and } A' \\
\text{But instead of finishing word } x \text{ in } F_{B}, \text{ we will finish one letter ($\sigma$) earlier:} \\
\text{What is the set of such states?} \\
P_{B} = \Set{ p | \exists \sigma \in \Sigma: \delta_{B}(p, \sigma) \in F_{B} } \\
\text{meaning all the states from which we can somehow arrive to } F_{B} \\
\\
\forall q \in Q_{A}, \sigma \in \Sigma: \Delta_{N'}(q, \sigma) = \Set{ \delta_{A}(q, \sigma) } \\
\forall q \in Q_{A}, \sigma \in \Sigma: \Delta_{N'}(q', \sigma) = \Set{ p' | \delta_{A}(q, \sigma) = p } \\
\text{Add } \varepsilon\text{-transitions from } A \text{ to } B_{q_{i}}: \\
\forall q \in Q_{A}: \Delta_{N'}((q, p), \varepsilon) = \Set{ (q, q_{0_{B}}) } \\
\text{This is the only part that changes:} \\
\text{Add } \varepsilon\text{-transitions from } F_{B_{q_{i}}} \text{ to } A': \\
\forall (q, p) \in Q_{A} \times P_{B}: \Delta_{N'}((q, p), \varepsilon) = \Set{ q' } \\
\\
\text{This can be written in multiple ways:} \\
1. \quad \forall (q, p) \in Q_{A} \times P_{B}: \Delta_{N'}((q, p), \varepsilon) = \Set{ q' } \\
2. \quad \forall (q, p) \in Q_{A} \times \Set{ p | \exists \sigma \in \Sigma: \delta_{B}(p, \sigma) \in F_{B} }: \Delta_{N'}((q, p), \varepsilon) = \Set{ q' } \\
3. \quad \forall (q, p) \in Q_{A} \times Q_{B}: \Delta_{N'}((q, p), \varepsilon) = \begin{cases}
\Set{ q' } & p \in P_{B} \\
\emptyset & \text{otherwise} \\
\end{cases} \\
}
$$
