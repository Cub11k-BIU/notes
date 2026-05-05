---
{"publish":true,"created":"09/11/25, 12:11","modified":"2026-03-24T15:00:00.836+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# Non-deterministic finite automaton (NFA) #definition 
Non-deterministic automaton is different from a deterministic one in that it can contain multiple transitions of the same letter from one state to other(s)

The second difference is that states can have no transitions with some letters. The absence of such a transfer means that the automaton can be "stopped" by sending input that arrives to such a state and tries to continue to a non-existing transfer

The language of such an automaton is defined as follows:
Word is part of automaton language if and only if there exists a sequence of transitions such that automaton finishes in the accepting state
$$
\displaylines{
\text{A non-deterministic automaton is then defined formally as:} \\
N = (Q, \Sigma, \Delta, q_{0}, F) \\
\text{Where } Q, \Sigma, q_{0} \text{ and } F \text{ are defined identically to a deterministic automaton} \\
\text{And } \Delta: Q \times \Sigma \to \mathcal{P}(Q) \text{ defines a set of all possible destinations from } q \\
\Delta^{*} \text{ is then too defined as a set of all possible destinations } \\
\text{Language is then defined as follows:} \\
L(N) = \Set{ w | \exists f \in F : f \in \Delta^{*}(q_{0}, w) } = \Set{ w | \Delta^{*}(q_{0}, w) \cap F \neq \emptyset } \\
}
$$
---
$$
\displaylines{
\Sigma = \Set{ 0, 1 } \\
L = \Set{ w 0\sigma | w \in \Sigma^{*}, \sigma \in \Sigma } \\
\\
Q = \Set{ q_{0}, q_{1}, q_{2} } \\
F = \Set{ q_{2} } \\
\Delta(q, \sigma) = \begin{cases}
\Set{ q_{0} } & q = q_{0}, \sigma = 1 \\
\Set{ q_{0}, q_{1} } & q = q_{0}, \sigma = 0 \\
\Set{ q_{2} } & q = q_{1} \\
\emptyset & q = q_{2} \\
\end{cases} \\
}
$$
---
$$
\displaylines{
\Sigma = \Set{ 0, 1 } \\
L = \Set{ w 1101 u | w, u \in \Sigma^{*} } \\
\\
Q = \Set{ q_{0}, q_{1}, q_{2}, q_{3}, q_{4} } \\
F = \Set{ q_{4} } \\
\Delta(q, \sigma) = \begin{cases}
\Set{ q_{0} } & q = q_{0}, \sigma = 0 \\
\Set{ q_{0}, q_{1} } & q = q_{0}, \sigma = 1 \\
\Set{ q_{2} } & q = q_{1}, \sigma = 1 \\
\emptyset & q = q_{1}, \sigma = 0 \\
\Set{ q_{3} } & q = q_{2}, \sigma = 0 \\
\emptyset & q = q_{2}, \sigma = 1 \\
\Set{ q_{4} } & q = q_{3}, \sigma = 1 \\
\emptyset & q = q_{3}, \sigma = 0 \\
\Set{ q_{4} } & q = q_{4} \\
\end{cases} \\
}
$$
---
$$
\displaylines{
\Sigma = \Set{ 0, 1 } \\
L = \Set{ 1 w 00 u 1 | w, u \in \Sigma^{*} } \\
\\
Q = \Set{ q_{0}, q_{1}, q_{2}, q_{3}, q_{4} } \\
F = \Set{ q_{4} } \\
\Delta(q, \sigma) = \begin{cases}
\emptyset & q = q_{0}, \sigma = 0 \\
\Set{ q_{1} } & q = q_{0}, \sigma = 1 \\
\Set{ q_{1} } & q = q_{1}, \sigma = 1 \\
\Set{ q_{1}, q_{2} } & q = q_{1}, \sigma = 0 \\
\Set{ q_{3} } & q = q_{2}, \sigma = 0 \\
\emptyset & q = q_{2}, \sigma = 1 \\
\Set{ q_{3} } & q = q_{3}, \sigma = 0 \\
\Set{ q_{3}, q_{4} } & q = q_{3}, \sigma = 1 \\
\emptyset & q = q_{4} \\
\end{cases} \\
}
$$
---
$$
\displaylines{
\Sigma = \Set{ a, b, c } \\
L = \Set{ \sigma_{1}w\sigma_{2} | \sigma_{1} \neq \sigma_{2} \in \Sigma, w \in \Sigma^{*} } \\
\\
Q = \Set{ q_{0}, q_{a}, q_{b}, q_{c}, q_{F} } \\
F = \Set{ q_{F} } \\
\Delta(q, \sigma) = \begin{cases}
\Set{ q_{a} } & q = q_{0}, \sigma = a \\
\Set{ q_{b} } & q = q_{0}, \sigma = b \\
\Set{ q_{c} } & q = q_{0}, \sigma = c \\
\Set{ q_{a} } & q = q_{a}, \sigma = a \\
\Set{ q_{a}, q_{F} } & q = q_{a}, \sigma \in \Set{ b, c } \\
\Set{ q_{b} } & q = q_{b}, \sigma = b \\
\Set{ q_{b}, q_{F} } & q = q_{b}, \sigma \in \Set{ a, c } \\
\Set{ q_{c} } & q = q_{c}, \sigma = c \\
\Set{ q_{c}, q_{F} } & q = q_{c}, \sigma \in \Set{ a, b } \\
\emptyset & q = q_{F} \\
\end{cases} \\
}
$$
---
$$
\displaylines{
L = \Set{ w_{1}cw_{2}c\dots w_{k}c | k \geq 1, \forall i \in [1, k]: w_{i} \in \Set{ a, b }^{+}, \exists i \in [1, k]: w_{i} \in \Set{ a }^{+} } \\
\\
Q = \Set{ q_{0}, q_{1}, q_{2}, q_{3}, q_{4} } \\
F = \Set{ q_{2} } \\
\Delta(q, \sigma) = \begin{cases}
\Set{ q_{1}, q_{3} } & q = q_{0}, \sigma = a \\
\Set{ q_{3} } & q = q_{0}, \sigma = b \\
\emptyset & q = q_{0}, \sigma = c \\
\Set{ q_{1} } & q = q_{1}, \sigma = a \\
\emptyset & q = q_{1}, \sigma = b \\
\Set{ q_{2} } & q = q_{1}, \sigma = c \\
\Set{ q_{4} } & q = q_{2}, \sigma \in \Set{ a, b } \\
\emptyset & q = q_{2}, \sigma = c \\
\Set{ q_{3} } & q = q_{3}, \sigma \in \Set{ a, b } \\
\Set{ q_{0} } & q = q_{3}, \sigma = c \\
\Set{ q_{4} } & q = q_{4}, \sigma \in \Set{ a, b } \\
\Set{ q_{2} } & q = q_{4}, \sigma = c \\
\end{cases} \\
}
$$
---
## Stronger non-determinism
$$
\displaylines{
\text{Let } N = (Q, \Sigma, \Delta, Q_{0}, F) \\
\text{Where } Q_{0} \text{ is a set of all possible states where a non-deterministic automaton can start} \\
}
$$
## Equivalence of DFA and NFA #theorem 
$$
\displaylines{
\text{Let } N \text{ be a non-deterministic automaton} \\
\text{Then } L(N) \text{ is a regular language, in other words, exists a deterministic automaton } A \\
\text{such that } L(A) = L(N) \\
\\
\text{Proof:} \\
\text{Let } N = (Q_{N}, \Sigma_{N}, \Delta_{N}, Q_{0_{N}}, F_{N}) \\
\text{Let us build } A = (Q_{A}, \Sigma_{A}, \delta_{A}, q_{0_{A}}, F_{A}) \text{ such that } L(A) = L(N) \\
\text{Let } Q_{A} = \mathcal{P}(Q_{N}) \\
\text{Let } \Sigma_{A} = \Sigma_{N} \\
\text{Let } \forall R \in Q_{A}, \sigma \in \Sigma: \delta_{A}(R, \sigma) = \bigcup_{q \in R} \Delta_{N}(q, \sigma) \\
\text{Let } q_{0_{A}} = Q_{0_{N}} \\
\text{Let } F = \Set{ R \in Q_{A} | R \cap F_{N} \neq \emptyset } \\
}
$$
---
$$
\displaylines{
N = (Q = \Set{ q_{0}, q_{1}, q_{2} }, \Set{ a, b }, \Delta, q_{0}, \Set{ q_{0} }) \\
\Delta(q, \sigma) = \begin{cases}
\Set{ q_{0}, q_{1} } & q = q_{0}, \sigma = a \\
\Set{ q_{1} } & q = q_{0}, \sigma = b \\
\emptyset & q = q_{1}, \sigma = a \\
\Set{ q_{1}, q_{2} } & q = q_{1}, \sigma = b \\
\Set{ q_{0}, q_{2} } & q = q_{2}, \sigma = a \\
\Set{ q_{2} } & q = q_{2}, \sigma = b \\
\end{cases} \\
\begin{align}
A = ( & \mathcal{P}(Q), \\
& \Set{ a, b }, \\
& \delta, \\
& \Set{ q_{0} }, \\
& \Set{ \Set{ q_{0} }, \Set{ q_{0}, q_{1} }, \Set{ q_{0}, q_{2} }, Q }) \\
\end{align} \\
\delta(R, \sigma) = \begin{cases}
\emptyset & q = \emptyset \\
\Set{ q_{0}, q_{1} } & q = \Set{ q_{0} }, \sigma = a \\
\Set{ q_{1} } & q = \Set{ q_{0} }, \sigma = b \\
\emptyset & q = \Set{ q_{1} }, \sigma = a \\
\Set{ q_{1}, q_{2} } & q = \Set{ q_{1} }, \sigma = b \\
\Set{ q_{0}, q_{2} } & q = \Set{ q_{2} }, \sigma = a \\
\Set{ q_{2} } & q = \Set{ q_{2} }, \sigma = b \\
\Set{ q_{0}, q_{1} } & q = \Set{ q_{0}, q_{1} }, \sigma = a \\
\Set{ q_{1}, q_{2} } & q = \Set{ q_{0}, q_{1} }, \sigma = b \\
Q & q = \Set{ q_{0}, q_{2} }, \sigma = a \\
\Set{ q_{1}, q_{2} } & q = \Set{ q_{0}, q_{2} }, \sigma = b \\
\Set{ q_{0}, q_{2} } & q = \Set{ q_{1}, q_{2} }, \sigma = a \\
\Set{ q_{1}, q_{2} } & q = \Set{ q_{1}, q_{2} }, \sigma = b \\
Q & q = Q, \sigma = a \\
\Set{ q_{1}, q_{2} } & q = Q, \sigma = b \\
\end{cases} \\
}
$$
---
## NFA with $\varepsilon$ transitions #definition 
This is a variation of a non-deterministic automaton that allows changing the state without reading any input, it is denoted as a $\varepsilon$ transition.
This allows us to build complex automata much more easily!
For example a union of automata can be built as a "sum" of automata and a new start state, that has $\varepsilon$ transitions to all start states of each automaton
## $\varepsilon$ Closure #definition
$$
\displaylines{
\text{Let } CL(q) = \Set{ p \in Q | p \text{ can be reached from } q \text{ without reading any input} } \\
}
$$
## Equivalence of NFA and NFA with $\varepsilon$ transitions #theorem 
$$
\displaylines{
\text{Let } N_{\varepsilon} = (Q_{\varepsilon}, \Sigma_{\varepsilon}, \Delta_{\varepsilon}, Q_{0_{\varepsilon}}, F_{\varepsilon}) \\
\text{Then } L(N_{\varepsilon}) \text{ is regular} \\
\\
\text{Proof:} \\
\text{It is enough to prove that there exists a non-deterministic automaton} \\
\text{without } \varepsilon \text{ transitions} \\
\text{Let } N = (Q_{\varepsilon}, \Sigma_{\varepsilon}, \Delta, Q_{0}, F_{\varepsilon}) \\
\Delta(q, \sigma) = \bigcup_{p \in \Delta_{\varepsilon}(q, \sigma)} CL(p) \\
Q_{0} = \bigcup_{p \in Q_{0_{\varepsilon}}} CL(p) \\
}
$$
---
$$
\displaylines{
\text{Let deterministic } A = (Q, \Sigma, \delta, q_{0}, F) \\
\text{Build a non-deterministic } A' = (Q', \Sigma, \Delta', q_{0}', F') \text{ where } \abs{F'} = 1 \\
\\
\text{Solution:} \\
Q' = Q \cup \Set{ p_{F} } \\
q_{0}' = q_{0} \\
F' = p_{F} \\
\forall q \in Q, \sigma \in \Sigma: \Delta'(q, \sigma) = \Set{ \delta(q, \sigma) } \\
\forall p \in F: \Delta'(p, \varepsilon) = \Set{ p_{F} } \\
}
$$
---
$$
\displaylines{
\text{Let } L_{1}, L_{2} \text{ be regular} \\
L_{3} = \Set{ w_{1}w_{2}w_{3} | w_{1}, w_{3} \in L_{1}, w_{2} \in L_{2} } \\
\text{Prove that } L_{3} \text{ is regular} \\
\\
\text{Proof:} \\
\text{Let } A: L(A) = L_{1} \\
\text{Let } B: L(B) = L_{2} \\
\text{Let } A': L(A') = L_{1} \\
\\
\text{Let } C = (Q_{C}, \Sigma_{C}, \Delta_{C}, q_{0_{C}}, F_{C}) \\
Q_{C} = Q_{A} \cup Q_{B} \cup Q_{A'} \\
\Sigma_{C} = \Sigma_{A} \cup \Sigma_{B} \\
q_{0_{C}} = q_{0_{A}} \\
F_{C} = F_{A'} \\
\forall q \in Q_{C}, \sigma \in \Sigma_{C}: \Delta_{C}(q, \sigma) = \begin{cases}
\Set{ \delta_{A}(q, \sigma) } & q \in Q_{A}, \sigma \in \Sigma_{A} \\
\emptyset & q \in Q_{A}, \sigma \not\in \Sigma_{A} \\
\Set{ \delta_{B}(q, \sigma) } & q \in Q_{B}, \sigma \in \Sigma_{B} \\
\emptyset & q \in Q_{B}, \sigma \not\in \Sigma_{B} \\
\Set{ \delta_{A'}(q, \sigma) } & q \in Q_{A'}, \sigma \in \Sigma_{A} \\
\emptyset & q \in Q_{A'}, \sigma \not\in \Sigma_{A} \\
\end{cases} \\
\forall q \in F_{A}: \Delta_{C}(q, \varepsilon) = \Set{ q_{0_{B}} } \\
\forall q \in F_{B}: \Delta_{C}(q, \varepsilon) = \Set{ q_{0_{A'}} } \\
}
$$
---
$$
\displaylines{
\text{Let } L_{1}, L_{2} \text{ be regular} \\
L_{3} = \Set{ uxv | uv \in L_{1}, x \in L_{2} } \\
\text{Prove that } L_{3} \text{ is regular} \\
\\
\text{Proof:} \\
\text{Let } A: L(A) = L_{1} \\
\text{Let } B: L(B) = L_{2} \\
\text{Let } A': L(A') = L_{1} \\
\text{Let } f: Q_{A} \to Q_{A'}, f(q) = q' : \forall u \in \Sigma_{A}^{*}: \delta^{*}_{A}(q_{0_{A}}, u) = q \iff \delta^{*}_{A'}(q_{0_{A'}}, u) = q' \\
\text{In other words, define a bijection between equivalent states in } A \text{ and } A' \\
\text{Let (virtually) } \forall q \in Q_{A}: B_{q} : L(B_{q}) = L_{2} \\
\\
\text{Let } C = (Q_{C}, \Sigma_{C}, \Delta_{C}, q_{0_{C}}, F_{C}) \\
Q_{C} = Q_{A} \cup \underbrace{ Q_{A} \times Q_{B} }_{ \equiv \bigcup_{q \in Q_{A}} Q_{B_{q}} } \cup Q_{A'} \cup \Set{ q_{F} } \\
\Sigma_{C} = \Sigma_{A} \cup \Sigma_{B} \\
q_{0_{C}} = q_{0_{A}} \\
F_{C} = \Set{ q_{F} } \\
\forall q \in Q_{A}, \sigma \in \Sigma: \Delta_{C}(q, \sigma) = \begin{cases}
\Set{ \delta_{A}(q, \sigma) } & \sigma \in \Sigma_{A} \\
\emptyset & \text{otherwise} \\
\end{cases} \\
\forall q \in Q_{A}: \Delta_{C}(q, \varepsilon) = \Set{ (q, q_{0_{B}}) } \\
\forall (q, p) \in Q_{A} \times Q_{B}, \sigma \in \Sigma: \Delta_{C}((q, p), \sigma) = \begin{cases}
\Set{ (q, \delta_{B}(p, \sigma)) } & \sigma \in \Sigma_{B} \\
\emptyset & \text{otherwise} \\
\end{cases} \\
\forall (q, p) \in  Q_{A} \times F_{B}: \Delta_{C}((q, p), \varepsilon) = \Set{ f(q) } \\
\forall q' \in Q_{A'}, \sigma \in \Sigma: \Delta_{C}(q', \sigma) = \begin{cases}
\Set{ \delta_{A'}(q', \sigma) } & \sigma \in \Sigma_{A} \\
\emptyset & \text{otherwise} \\
\end{cases} \\
\forall q' \in F_{A'}: \Delta_{C}(q', \varepsilon) = \Set{ q_{F} } \\
}
$$
---
