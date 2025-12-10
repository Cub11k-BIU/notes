---
{"publish":true,"created":"07/12/25, 09:07","modified":"2025-12-07T18:04:50.182+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# Pushdown automaton (PDA)
Pushdown automaton is an extension of an NFA
One thing added to PDA is an input window, a read-only string in memory, where each character is read once, no backtracking is allowed.
Another is a stack, read-write memory implemented as stack, with all its properties.
Note that a non-deterministic PDA is stronger than a deterministic PDA (with no proof), which is why we define PDA to be non-deterministic.
## PDA #definition 
$$
\displaylines{
P = (Q, \Sigma, \Gamma, \Delta, q_{0}, F) \\
\text{The only addition in comparison to NFA is } \Gamma - \text{the alphabet of the stack} \\
\text{and transitions function} - \Delta: Q \times \Sigma_{\varepsilon} \times \Gamma_{\varepsilon} \to \mathcal{P}(Q \times \Gamma^{*}) \\
}
$$
### Configuration #definition 
Configuration is a "snapshot" of the current state of PDA.
$$
\displaylines{
\text{Configuation is a triplet } (q, u, x) \text{ where } \begin{eqsys}{}
q \in Q & \text{current state} \\
u \in \Sigma^{*} & \text{unread part of input} \\
x \in \Gamma^{*} & \text{current state of the stack} \\
\end{eqsys} \\
}
$$
### Step-relation #definition 
$$
\displaylines{
\text{Let } P \text{ be a PDA} \\
\text{Let } c_{1}, c_{2} \text{ be two configurations of } P \\
\text{Then } c_{1} \vdash_{P} c_{2} \text{ denotes the step-relation between } c_{1} \text{ and } c_{2}, \\
\text{meaning it is possible to get from } c_{1} \text{ to } c_{2} \text{ in one transition} \\
\\
\text{A multiple step relation, that is, } c_{1} \vdash_{P}^{*} c_{2} \\
\text{denotes the possibility of getting from } c_{1} \text{ to } c_{2} \text{ in 0 or more transitions} \\
}
$$
### PDA language #definition 
$$
\displaylines{
\text{Let } {P} = \lrp{Q, \Sigma, \Gamma, \Delta, q_{0}, F} \\
\text{Then } L(P) = \Set{ w \in \Sigma^{*} | \exists f \in F, u \in \Gamma^{*}: (q_{0}, w, \varepsilon) \vdash_{P}^{*} (f, \varepsilon, u)} \text{ is the language of } P \\
}
$$
#### Example
$$
\displaylines{
\Sigma = \Set{ a, b } \\
L = \Set{ a^{n}b^{m} | n \leq m \leq 2n } \\
\\
{P} = \lrp{Q, \Sigma, \Gamma, \Delta, q_{0}, F} \\
Q = \Set{ q_{0}, q_{a}, q_{b}, q_{f} } \\
\Sigma = \Set{ a, b } \\
\Gamma = \Set{ $, A} \\
q_{0} = q_{0} \\
F = \Set{ q_{f} } \\
\Delta: \begin{array}{|c|c|}
\underline{Q \times \Sigma_{\varepsilon} \times \Gamma_{\varepsilon}} & \underline{Q \times \Gamma^{*}} \\
(q_{0}, \varepsilon, \varepsilon) & (q_{a}, $) \\
(q_{a}, a, \varepsilon) & (q_{a}, A) \\
(q_{a}, a, \varepsilon) & (q_{a}, AA) \\
(q_{a}, \varepsilon, \varepsilon) & (q_{b}, \varepsilon) \\
(q_{b}, b, A) & (q_{b}, \varepsilon) \\
(q_{b}, \varepsilon, $) & (q_{f}, \varepsilon) \\
\end{array} \\
}
$$
#### Example
$$
\displaylines{
\Sigma = \Set{ a, b } \\
L = \Set{ w \in \Sigma^{*} | \#a_{w} = \#b_{w} } \\
\\
{P} = \lrp{Q, \Sigma, \Gamma, \Delta, q_{0}, F} \\
Q = \Set{ q_{0}, q_{ab}, q_{f} } \\
\Sigma = \Set{ a, b } \\
\Gamma = \Set{ $, A, B } \\
q_{0} = q_{0} \\
F = \Set{ q_{f} } \\
\Delta: \begin{array}{|c|c|}
\underline{Q \times \Sigma_{\varepsilon} \times \Gamma_{\varepsilon}} & \underline{Q \times \Gamma^{*}} \\
(q_{0}, \varepsilon, \varepsilon) & (q_{ab}, $) \\
(q_{ab}, a, $) & (q_{ab}, A$) \\
(q_{ab}, a, A) & (q_{ab}, AA) \\
(q_{ab}, a, B) & (q_{ab}, \varepsilon) \\
(q_{ab}, b, $) & (q_{ab}, B$) \\
(q_{ab}, b, B) & (q_{ab}, BB) \\
(q_{ab}, b, A) & (q_{ab}, \varepsilon) \\
(q_{ab}, \varepsilon, $) & (q_{f}, \varepsilon) \\
\end{array} \\
}
$$
## Equivalence of CFG and PDA #theorem 
$$
\displaylines{
L \text{ is a CFL} \iff \exists P \text{ a PDA}: L(P) = L \\
\\
\text{Explanation (not a formal proof):} \\
\text{Let us build a PDA equivalent to a CFG} \\
\text{Let } G = (V, \Sigma, R, S) \\
\text{Let } {P} = \lrp{Q, \Sigma, \Gamma, \Delta, q_{0}, F} \\
Q = \Set{ q_{0}, q_{1}, q_{2} } \\
\Gamma = \Sigma \cup V \cup \Set{ $ } \\
q_{0} = q_{0} \\
F = \Set{ q_{2} } \\
\Delta(q_{0}, \varepsilon, \varepsilon) = \Set{ (q_{1}, S$) } \\
\forall A \in V: \Delta(q_{1}, \varepsilon, A) = \Set{ (q_{1}, z) | A \to z \in R } \\
\forall \sigma \in \Sigma: \Delta(q_{1}, \sigma, \sigma) = \Set{ (q_{1}, \varepsilon) } \\
\Delta(q_{1}, \varepsilon, $) = \Set{ (q_{2}, \varepsilon) } \\
\implies \boxed{ L(P) = L(G) = L } \\
\\
\text{Let us now build a CFG equivalent to a PDA} \\
\text{Let } {P} = \lrp{Q, \Sigma, \Gamma, \Delta, q_{0}, F} \\
\text{Let us make some reasonable assumptions about } P: \\
\begin{align}
1. & \quad F = \Set{ q_{f} } \\
2. & \quad P \text{ empties out the stack before accepting} \\
3. & \quad \text{In each transition, } P \text{ inserts/pops exactly one letter to/from the stack} \\
\end{align} \\
\text{These assumptions are WLOG, without proof} \\
\text{Let } G = (V, \Sigma, R, S) \\
V = \Set{ A_{p,q} | p, q \in Q } \\
S = A_{q_{0}, q_{f}} \\
\forall p, q, s \in Q: A_{p,q} \to A_{p,s}A_{s,q} \in R \\
\forall p, q, r, s \in Q, \forall \sigma \in \Gamma, \forall a, b \in \Sigma_{\varepsilon}: \begin{eqsys}
(r, \sigma) \in \Delta(p, a, \varepsilon) \\
(q, \varepsilon) \in \Delta(s, b, \sigma) \\
\end{eqsys} : A_{p,q} \to aA_{r,s}b \in R \\
\forall p \in Q: A_{p, p} \to \varepsilon \in R \\
\implies \boxed{ L(G) = L(P) = L } \\
}
$$
## Closure under intersection #lemma 
$$
\displaylines{
\text{Let } L_{1} \text{ be a CFL} \\
\text{Let } L_{2} \text{ be a regular language} \\
\text{Then, } L_{1} \cap L_{2} \text{ is a CFL} \\
\\
\text{Proof:} \\
\text{Let } {P} = \lrp{Q_{P}, \Sigma, \Gamma_{P}, \Delta_{P}, q_{0_{P}}, F_{P}} : L(P) = L_{1} \\
\text{Let } {D} = \lrp{Q_{D}, \Sigma_{D}, \delta_{D}, q_{0_{D}}, F_{D}} : L(D) = L_{2} \\
\\
\text{Let us build a PDA } U: L(U) = L_{1} \cap L_{2} \\
\text{We will define it as a regular multiplication automaton} \\
{U} = \lrp{Q_{U}, \Sigma, \Gamma_{U}, \Delta_{U}, q_{0_{U}}, F_{U}} \\
Q_{U} = Q_{D} \times Q_{P} \\
q_{0_{U}} = (q_{0_{D}}, q_{0_{P}}) \\
F_{U} = F_{D} \times F_{P} \\
\Gamma_{U} = \Gamma_{P} \\
\text{All "regular" transitions are from both}: \forall q \in Q_{D}, \forall p \in Q_{P}, \forall \pi \in \Gamma_{U}, \forall \sigma \in \Sigma: \\
\Delta_{U}((q, p), \sigma, \pi) = \Set{ ((\delta_{D}(q, \sigma), p'), u) | (p', u) \in \Delta_{P}(p, \sigma, \pi) } \\
\text{All } \varepsilon\text{-transitions are from } P \text{ only}: \\
\forall q \in Q_{D}, \forall p \in Q_{P}, \forall \pi \in \Gamma_{U}: \Delta_{U}((q, p), \varepsilon, \pi) = \Set{ ((q, p'), u) | (p', u) \in \Delta_{P}(p, \sigma, \pi) } \\
L(U) = L_{1} \cap L_{2} \implies L_{1} \cap L_{2} \text{ is a CFL} \\
}
$$
## Regular grammars
Regular grammars can be right or left.
$$
\displaylines{
\text{A right regular grammar is of the folliowing structure} \\
\begin{align}
A & \to \sigma B \\
A & \to \sigma \\
A & \to \varepsilon \\
\end{align} \\
\text{where } A, B \in V, \sigma \in \Sigma \\
}
$$
A left regular grammar differs only in the position of $\sigma$ relative to $B$
### Regular grammar and regular languages #theorem 
$$
\displaylines{
L \text{ is a regular language} \iff \exists G: \text{ a right/left regular grammar} \\
\\
\text{Proof:} \\
\text{Let } L \text{ be a regular language} \\
\text{Let } {A} = \lrp{Q, \Sigma, \delta, q_{0}, F} : L(A) = L \\
\text{Let } G = (V, \Sigma_{G}, R, S) \\
\Sigma_{G} = \Sigma \\
V = Q \\
S = q_{0} \\
\forall q, p \in Q, \sigma \in \Sigma, \delta(q, \sigma) = p : q \to \sigma p \in R \\
\forall f \in F: f \to \varepsilon \in R \\
\boxed{ L(A) = L(G) = L } \\
\\
\text{Full formal proof would require proving} \\
\forall q, p \in Q, \forall u \in \Sigma^{*}: \cfg{G}{q}{up} \iff \delta^{*}(q, u) = p \\
}
$$
