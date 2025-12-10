---
{"publish":true,"created":"23/11/25, 10:21","modified":"2025-12-07T09:23:55.965+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
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
\text{Is produced by a non-deterministic finite automaton } C: \\
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
\text{Let } A \text{ be a deterministic finite automaton} \\
\text{Then, language } L = L(A)^{*} \\
\text{Is produced by a non-deterministic finite automaton } C: \\
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
\text{Let } A \text{ be a deterministic finite automaton} \\
\text{Then, language } L = L(A)^{r} \\
\text{Is produced by a non-deterministic finite automaton } C: \\
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
\text{Let } A \text{ be a deterministic finite automaton} \\
\text{Then, language } L = prefix(L(A)) \\
\text{Is produced by a deterministic finite automaton } C: \\
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
## Generalized non-deterministic finite automaton (GFA or GNFA)
A generalized non-deterministic finite automaton is different from NFA in the following way:
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
\text{Let } A \text{ be a deterministic finite automaton} \\
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
\implies \exists A \text{ deterministic fintie automaton: } L(A) = L \\
\implies \exists G \text{ GNFA: } L(G) = L(A) \\
\text{There exists a deterministic algorithm for transforming a } GNFA \\
\text{into an equivalent GNFA, with just two states } s, f \text{ and one transition,} \\
\text{that would be exactly the regular expression equivalent to automaton } A \\
\\
\text{The algorithm takes each node and add all possible paths through it} \\
\text{as direct transitions, then proceeds to delete the now redundant node} \\
\text{Repeating this process for all nodes except } s, f \text{ results in a GNFA we need} \\
}
$$
---
## Pumping lemma #lemma 
$$
\displaylines{
\text{Let } L \text{ be a regular language} \\
\text{Then, } \exists N \in \mathbb{N}: \forall w \in L: \abs{w} \geq N \implies \exists x, y, z \in \Sigma^{*} : \begin{eqsys}
w = xyz \\
\abs{y} > 0 \\
\abs{xy} \leq N \\
\forall i \in \mathbb{N}: xy^{i}z \in L \\
\end{eqsys} \\
\text{Meaning that strating from some length, we can always choose a substring of } w \\
\text{and "pump" it zero or more times into the word, indefinitely} \\
\\
\text{For finite languages the lemma holds vacuously, given } N = \max_{w \in L}\{\abs{w}\} + 1 \\
\\
\text{Proof:} \\
\text{Let } L \text{ be regular} \\
\implies \exists A \text{ a determinstic finite automaton, } L(A) = L \\
\text{Let } N = \abs{Q_{A}} \\
\text{Let } w = \sigma_{1}\sigma_{2}\dots\sigma_{k} \in L, k \geq N \\
\text{Let } s_{0} \to s_{1} \to \dots \to s_{N} \to \dots \to s_{k-1} \to s_{k} \\
\text{Represent the sequence of states to be visited when reading word } w \\
\text{There are } N \text{ states} \implies \exists j \neq l \in [0, N] : s_{j} = s_{l} \\
\text{Let } \begin{eqsys}{}
x = \sigma_{0}\dots\sigma_{j-1} \\
y = \sigma_{j}\dots\sigma_{l} \\
z = \sigma_{l+1}\dots\sigma_{k} \\
\end{eqsys} \\
w = xyz, \abs{y} > 0 \\
\forall i \in \mathbb{N}: xy^{i}z \in L \\
}
$$
#### Example
$$
\displaylines{
\Sigma = \Set{ a, b } \\
L = \Set{ w | \#a_{w} = \#b_{w} } \\
\\
\text{Let } L \text{ be regular} \\
\text{Let } N \in \mathbb{N} \\
\text{Let } w = a^{N}b^{N} \\
w \in L \\
\abs{w} = 2N \implies \text{By Pumping lemma } \exists x, y, z \in \Sigma^{*}: w = xyz \\
\abs{xy} \leq N \implies xy = a^{k}, k \leq N \\
\implies x = a^{i}, y = a^{j}, z = a^{N-i-j}b^{N} \\
\implies xz = a^{N-j}b^{N} \in L, j > 0 - \text{Contradiction!} \\
\implies L \text{ is not regular} \\
}
$$
#### Example
$$
\displaylines{
\Sigma = \Set{ a, b } \\
L = \Set{ uu | u \in \Sigma^{*} } \\
\\
\text{Let } L \text{ be regular} \\
\text{Let } N \in \mathbb{N} \\
\text{Let } w = a^{N}ba^{N}b, \abs{w} > N \\
\text{By Pumping lemma } \exists x, y, z \in \Sigma^{*}: w = xyz \\
\abs{xy} \leq N \implies xy = a^{k}, k \leq N \\
\implies x = a^{i}, y = a^{j}, z = a^{N-i-j}ba^{N}b \\
\implies xz = a^{N-j}ba^{N}b \in L, j > 0 - \text{Contradiction!} \\
\implies L \text{ is not regular} \\
}
$$
#### Example
$$
\displaylines{
\Sigma = \Set{ a, b } \\
L = \Set{ w | w \text{ is a palindrome} } \\
\\
\text{Let } L \text{ be regular} \\
\text{Let } N \in \mathbb{N} \\
\text{Let } w = a^{N}ba^{N} \in L, \abs{w} > N \\
\exists x, y, z \in \Sigma^{*}: w = xyz \\
\abs{xy} \leq N \implies xy = a^{k}, k \leq N \\
\implies x = a^{i}, y = a^{j}, z = a^{N-i-j}ba^{N} \\
\implies xz = a^{N-j}ba^{N} \in L, j > 0 - \text{Contradiction!} \\
\implies L \text{ is not regular} \\
}
$$
#### Example
$$
\displaylines{
\Sigma = \Set{ a } \\
L = \Set{ a^{p} | p \text{ is prime} } \\
\\
\text{Let } L \text{ be regular} \\
\text{Let } N \in \mathbb{N} \\
\text{Let } w = a^{p} \in L, p \geq N \\
\exists x, y, z \in \Sigma^{*}: w = xyz \\
x = a^{j}, y = a^{k}, z = a^{p-j-k}, k > 0 \\
\text{Let } i = p + 1 \\
xy^{i}z = a^{j+k(p+1)+p-j-k} = a^{p(k+1)} \in L - \text{Contradiction!} \\
\implies L \text{ is not regular} \\
}
$$
#### Example
$$
\displaylines{
\Sigma = \Set{ a, b, c } \\
L = \Set{ a^{i}b^{j}c^{k} | i, j, k \in \mathbb{N}: j = \max\{i, k\} } \\
\\
\text{Let } L \text{ be regular} \\
\text{Let } N \in \mathbb{N} \\
\text{Let } w = a^{N+1}b^{N+1}c \in L \\
\abs{w} > N \implies \exists x, y, z \in \Sigma^{*}: w = xyz \\
\abs{xy} \leq N \implies x = a^{j}, y = a^{k}, z = a^{N+1-j-k}b^{N+1}c \\
\implies xz = a^{N+1-k}b^{N+1}c \in L, k > 0 \\
\abs{y} > 0 \implies N > 0 \implies \begin{eqsys}
N+1 > 1 \\
N+1 > N+1-k \\
\end{eqsys} - \text{Contradiction!} \\
\implies L \text{ is not regular} \\
}
$$
#### Example
$$
\displaylines{
\Sigma = \Set{ a } \\
L = \Set{ a^{2^{j}} | j \in \mathbb{N} } \\
\dots \\
}
$$
#### Example
$$
\displaylines{
\Sigma = \Set{ a, \# } \\
L = \Set{ w | w = x_{1}\#x_{2}\#\dots\#x_{k}, k \in \mathbb{N}, \forall i \leq k: x_{i} \in a^{*}, \forall i \neq j \in [1, k]: x_{i} \neq x_{j} } \\
\dots \\
}
$$
---
## Using closure properties to determine regularity
#### Example
$$
\displaylines{
L = \Set{ w | \#a_{w} \neq \#b_{w} } \\
\overline{L} = \Set{ w | \#a_{w} = \#b_{w} } \text{ is not regular} \\
\implies L \text{ is not regular} \\
}
$$
#### Example
$$
\displaylines{
\text{Let } L \text{ be regular} \\
perm(L) = \Set{ w | \exists y \in L : y \text{ is a permutation of } w } \\
\text{Is } perm(L) \text{ regular?} \\
\\
\text{Solution:} \\
\text{Let } \Sigma = \Set{ a, b } \\
\text{Let } L = (ab)^{*} \\
perm(L) = \Set{ w | \#a_{w} = \#b_{w} } \text{ is not regular} \\
\implies \text{Regularity is not closed under permutation} \\
}
$$
#### Example
$$
\displaylines{
\Sigma = \Set{ a, b } \\
L = \Set{ a^{i}b^{j} | i \neq j \in \mathbb{N} } \\
\\
\text{Let } L \text{ be regular} \\
\text{By closure under subtraction:} \\
a^{*}b^{*} \setminus L = \Set{ a^{n}b^{n} | n \in \mathbb{N} } \text{ is regular} - \text{Contradiction!} \\
\implies L \text{ is not regular} \\
}
$$
