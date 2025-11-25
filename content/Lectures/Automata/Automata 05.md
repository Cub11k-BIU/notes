---
{"publish":true,"created":"23/11/25, 10:21","modified":"2025-11-23T13:07:16.947+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# Regular languages
## Closure under operation #definition 
$$
\displaylines{
\text{Set } A \text{ is called closed under operation } f \text{ iff} \\
\forall a, b \in A: f(a, b) \in A \\
}
$$
For example $\mathbb{N}$ is closed under addition and multiplication, but not subtraction
And $\mathbb{Z}$ is closed under addition, multiplication and subtraction, but not division
## Closure of a set of regular languages
List of operations under which closure is preserved, proofs are below
- Complement
- Union
- Intersection
- Concatenation
- Kleene closure
- Reverse
- Prefix
$$
\displaylines{
\text{Let } R = \Set{ L | L \text{ is a regular language} } \\
\text{As proved earlier, } R \text{ is closed under complement, union and intersection} \\
}
$$
### Closure under concatenation #lemma 
$$
\displaylines{
\text{Let } A, B \text{ be deterministic finite automata with languages } L(A), L(B) \\
\text{Then, language } L = L(A) \circ L(B) \\
\text{Is produced by a non-deterministic finite automata } C: \\
Q_{C} = Q_{A} \cup Q_{B} \\
\Sigma = \Sigma_{A} \cup \Sigma_{B} \\
Q_{0_{C}} = \Set{ q_{0_{A}} } \\
F_{C} = F_{B} \\
\Delta_{C}(q, \sigma) = \begin{cases}
\Set{ \delta_{A}(q, \sigma) } & q \in Q_{A}, \sigma \in \Sigma_{A} \\
\Set{ \delta_{B}(q, \sigma) } & q \in Q_{B}, \sigma \in \Sigma_{B} \\
\emptyset & \text{otherwise} \\
\end{cases} \\
\forall q \in F_{A}: \Delta_{C}(q, \varepsilon) = \Set{ q_{0_{B}} } \\
}
$$
### Closure under Kleene closure #lemma 
$$
\displaylines{
\text{Let } A \text{ be a deterministic finite automata} \\
\text{Then, language } L = L(A)^{*} \\
\text{Is produced by a non-deterministic finite automata } C: \\
Q_{C} = Q_{A} \cup \Set{ p_{0} } \\
\Sigma_{C} = \Sigma_{A} \\
Q_{0_{C}} = \Set{ p_{0}, q_{0_{A}} } \\
F_{C} = F_{A} \cup \Set{ p_{0} } \\
\forall q \in Q_{C}, \sigma \in \Sigma_{C}: \Delta_{C}(q, \sigma) = \Set{ \delta_{A}(q, \sigma) } \\
\forall q \in F_{C}: \Delta_{C}(q, \varepsilon) = \Set{ q_{0_{A}} } \\
}
$$
Clearly, a finite number of operation compositions preserves the closure.
From this follows that any finite language is regular(!)
### Closure under reverse #lemma 
$$
\displaylines{
\text{Let } A \text{ be a deterministic finite automata} \\
\text{Then, language } L = L(A)^{r} \\
\text{Is produced by a non-deterministic finite automata } C: \\
Q_{C} = Q_{A} \\
\Sigma_{C} = \Sigma_{A} \\
F_{C} = \Set{ q_{0_{A}} } \\
Q_{0_{C}} = F_{A} \\
\forall q \in Q_{C}, \sigma \in \Sigma_{C}: \Delta_{C}(q, \sigma) = \Set{ p | \delta_{A}(p, \sigma) = q } \\
}
$$
### Closure under prefix #lemma 
$$
\displaylines{
\text{Let } A \text{ be a deterministic finite automata} \\
\text{Then, language } L = prefix(L(A)) \\
\text{Is produced by a deterministic finite automata } C: \\
C = (Q_{A}, \Sigma_{A}, \delta_{A}, q_{0_{A}}, F_{C}) \\
F_{C} = \Set{ q | \exists u \in \Sigma^{*}: \delta_{A}^{*}(q, u) \in F_{A} } \\
}
$$
---
## Regular expressions (regex) #definition 
Regular expression is a short(er) way to express a set of strings
$$
\displaylines{
ab^{*}a \to aa, aba, abba, \dots \\
c(aa|b) \to caa, cb \\
c(aa|b)^{*} \to c, caa, cb, caab, cbbaab, \dots \\
}
$$
A formal inductive definition is as follows:
$$
\displaylines{
\text{Base case.} \\
\text{The following are all regular expressions: } \begin{eqsys}
\sigma & \sigma \in \Sigma \\
\varepsilon \\
\emptyset \\
\end{eqsys} \\
\text{Inductive step.} \\
\forall r_{1}, r_{2} \text{ regular expressions: the following are too, regular expressions:} \\
\begin{eqsys}
r_{1}r_{2} & \text{concatenation} \\
r_{1}|r_{2} & \text{union} \\
r_{1}^{*} & \text{Kleene closure} \\
(r_{1}) & \text{disambiguation and/or grouping} \\
\end{eqsys} \\
}
$$
Each regular expression can be represented by a tree, and represents a regular language
$$
\displaylines{
\text{Proof:} \\
\begin{eqsys}
L(r) = \Set{ \sigma } & r = \sigma & \sigma \in \Sigma \\
L(r) = \Set{ \varepsilon } & r = \varepsilon \\
L(r) = \emptyset & r = \emptyset \\
\end{eqsys} \text{ all of these are regular languages} \\
\forall r_{1}, r_{2} \text{ regular expressions } \begin{eqsys}
L(r) = L(r_{1}) \circ L(r_{2}) & r = r_{1}r_{2} \\
L(r) = L(r_{1}) \cup L(r_{2}) & r = r_{1}|r_{2} \\
L(r) = L(r_{1})^{*} & r = r_{1}^{*} \\
L(r) = L(r_{1}) & r = (r_{1}) \\
\end{eqsys} \\
\text{all of these are regular languages,} \\
\text{as they are formed by operations under which regular languages are closed} \\
}
$$
In regular expressions, the following order (priority) of operations is established:
- Parentheses (grouping)
- Asterisk (Kleene closure)
- Concatenation
- Union
- left-to-right
### Representing a regular language as a regular expression
$$
\displaylines{
L = \Set{ wbbu | w, u \in \Sigma^{*} } \to (a|b)^{*}bb(a|b)^{*} \\
\\
L = \Set{ w | \forall 2i \in [1, \abs{w}]: w_{2i} = b } \to ((a|b)b)^{*}(a|b|\varepsilon) \\
}
$$
#### Exercises
All exercises assume $\Sigma = \Set{ a, b }$
$$
\displaylines{
L = \Set{ w | \abs{w} \text{ mod } 2 = 0 \text{ or } \abs{w} \text{ mod } 3 = 0 } \\
((a|b)(a|b))^{*} \mid ((a|b)(a|b)(a|b))^{*} \\
\\
L = \Set{ w | \not\exists u \in \Sigma^{*}: w = uba } \\
(a|b|\varepsilon) \mid ((a|b)^{*}(aa|b)) \\
\\
L = \Set{ w | aa \in w, bb \in w } \\
(a|b)^{*}aa(a|b)^{*}bb(a|b)^{*} \mid (a|b)^{*}bb(a|b)^{*}aa(a|b)^{*} \\
}
$$
## Generalized non-deterministic finite automata (GFA or GNFA)
A generalized non-deterministic finite automata is different from NFA in the following way:
$$
\displaylines{
\Delta: Q \times R_{\Sigma} \to \mathcal{P}(Q) \\
\text{Where } R_{\Sigma} = \Set{ r | r \text{ is a regular expression on alphabet } \Sigma } \\
\\
\text{There is a unique starting state } s \text{ with no incoming transitions} \\
\text{There is a unique accepting state } f \text{ with no outcoming transitions} \\
\text{There is a transition between any two states, in both directions, including self-loops} \\
}
$$
### Equivalence of GNFA and DFA #theorem 
$$
\displaylines{
\text{Let } A \text{ be a deterministic finite automata} \\
\text{Let } G \text{ be a GNFA:} \\
Q_{G} = Q_{A} \cup \Set{ s, f } \\
\Sigma_{G} = R_{\Sigma_{A}} \\
F_{G} = \Set{ f } \\
q_{0_{G}} = s \\
\text{Add $\varepsilon$-transtition from } s \text{ to } q_{0} \\
\Delta_{G}(s, \varepsilon) = \Set{ q_{0_{A}} } \\
\text{Replicate existing transitions from } A \\
\forall q \in Q_{A}, \sigma \in \Sigma: \Delta(q, \sigma) = \Set{ \delta_{A}(q, \sigma) } \\
\text{Add $\varepsilon$-transitions from } F_{A} \text{ to } f \\
\forall q \in F_{A}: \Delta_{G}(q, \varepsilon) = \Set{ f } \\
\\
\text{Add any "missing" transitions as } \emptyset\text{-transitions} \\
\forall (q, p) \in Q_{A} \times Q_{A}: \not\exists \sigma \in \Sigma: \delta_{A}(q, \sigma) = p : \Delta_{G}(q, \emptyset) = \Set{ p } \\
\forall q \in Q_{A}: \Delta_{G}(q, \varepsilon) \neq \Set{ f } : \Delta_{G}(q, \emptyset) = \Set{ f } \\
\Delta_{G}(s, \emptyset) = \Set{ f } \\
\\
\implies L(G) = L(A) \\
}
$$
$$
\displaylines{
\text{Note that } \Delta_{G} \text{ can also be transformed into} \\
T: Q_{G} \setminus \Set{ f } \times Q_{G} \setminus \Set{ s } \to R_{\Sigma}, T(q, p) = r \\
\text{where } r \text{ is the label of transition from } q \text{ to } p \\
}
$$
### Equivalence of regular language and a regular expression #theorem 
$$
\displaylines{
r \text{ is a regular expression } \iff L(r) \text{ is a regular language} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ was proved earlier} \\
\boxed{ \impliedby } \text{ Let } L \text{ be a regular language} \\
\implies \exists A \text{ deterministic fintie automata: } L(A) = L \\
\implies \exists G \text{ GNFA: } L(G) = L(A) \\
\text{There exists a deterministic algorithm for transforming a } GNFA \\
\text{into an equivalent GNFA, with just two states } s, f \text{ and one transition,} \\
\text{that would be exactly the regular expression equivalent to automata } A \\
\\
\text{The algorithm takes each node and add all possible paths through it} \\
\text{as direct transitions, then proceeds to delete the now redundant node} \\
\text{Repeating this process for all nodes except } s, f \text{ results in a GNFA we need} \\
}
$$
### NOT FINISHED!!!!
