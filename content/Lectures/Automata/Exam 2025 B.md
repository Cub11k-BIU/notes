---
{"publish":true,"created":"29/01/26, 11:12","modified":"2026-03-24T15:00:00.959+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } M_{T} \text{ be a deterministic Turing machine in the T model} \\
\text{Let } \Sigma = \Set{ 0, 1 } \\
\text{Show an equivalent Turing machine in model } O \\
\text{using the proof structure from the lectures, it is sufficient to show the alphabet} \\
\\
M_{T}: \\
\begin{array}{|c|c|}
\text{State} & \text{Input} & \text{New state} & \text{Output} & \text{Direction} \\
q_{0} & 0 & q_{0} & 1 & L \\
q_{0} & 1 & q_{0} & 1 & R \\
q_{0} & E & acc & 1 & R \\
\end{array} \\
\\
\Gamma_{O} = \Set{ 0, 1, E } \cup \Set{ \$ } \cup \Set{ (\sigma, \pi) \mid \sigma, \pi \in \Set{ 0, 1, E } } \\
\text{Explanation:} \\
\text{We fold the input line in two halves, \$ sign denotes the wall} \\
\text{Every other cell is now composed oftwo - one "on the left" of \$ and one "on the right"} \\
}
$$
# 2
$$
\displaylines{
\text{Let } WQ(L) = \Set{ \sigma_{1}u_{1}\dots\sigma_{n}u_{n} \mid \sigma_{1}\dots\sigma_{n} \in L, \forall i \in [1, n]: \sigma_{i} \in \Sigma, u_{i} \in \Sigma \cup \Set{ \varepsilon }, n \geq 0 } \\
\\
\text{Prove: } L \text{ is regular} \implies WQ(L) \text{ is regular} \\
\\
\text{Proof:} \\
\text{Let } A = \lrp{Q, \Sigma, \delta, q_{0}, F} \text{ be a DFA such that } L(A) = L \\
\text{Let us build } N = \lrp{Q', \Sigma', \Delta', q_{0}', F'} \text{ an NFA such that } L(N) = WQ(L) \\
\\
\text{We will build this as follows:} \\
\text{What we need is to interleave two languages - } L \text{ and } \Sigma^{*} \\
\text{To do this, we need to read one letter in } A, \text{ then one letter in } B \\
\text{To finish, we must read the last one from } B \text{ and finish in } A \\
\text{Let } B = \lrp{Q_{B}, \Sigma_{B}, \Delta_{B}, q_{0_{B}}, F_{B}} \\
Q_{B} = \Set{ q_{0_{B}} } \\
\Sigma_{B} = \Sigma \\
\forall \sigma \in \Sigma_{B} \cup \Set{ \varepsilon }: \Delta_{B}(q_{0_{B}}, \sigma) = \Set{ q_{0_{B}} } \\
F_{B} = \Set{ q_{0_{B}} } \\
\text{Clearly, } L(B) = \Sigma^{*} \text{ and } B \text{ can continue running } \varepsilon\text{-transitions indefinitely} \\
\\
\text{Now to building } N: \\
\text{Note that } B \text{ has only one state, so we can essentially remove it} \\
\text{and just stay in the same state when reading } u_{i} \\
Q' = Q \times \Set{ 1, 2 } \\
\Sigma' = \Sigma \\
q_{0}' = (q_{0}, 1) \\
F' = F \times \Set{ 1 } \\
\forall (q, 1) \in Q', \forall \sigma \in \Sigma: \Delta'((q, 1), \sigma) = \Set{ (\delta(q, \sigma), 2) } \\
\forall (q, 2) \in Q', \forall \sigma \in \Sigma: \begin{eqsys}
\Delta'((q, 2), \sigma) = \Set{ (q, 1) } \\
\Delta'((q, 2), \varepsilon) = \Set{ (q, 1) } \\
\end{eqsys} \\
}
$$
# 3
$$
\displaylines{
NCF = \Set{ (P_{1}, P_{2}) \mid L(P_{1}) \setminus L(P_{2}) \text{ is not context free} } \\
\text{Is NCF decidable? Is it acceptable?} \\
\\
\text{Solution:} \\
\text{We will build a computable reduction from } \overline{ATM} \text{ to } NCF \\
\text{We want: } (P, w) \in \overline{ATM} \iff P(w) \neq 1 \iff R(P, w) \in NCF \\
\begin{align}
 & R(P, w): \\
1. & \quad P_{1} = \text{"Q(x): return (x == $\Set{ a^{n}b^{n}c^{n} \mid n \geq 0 }$) or P(w)"} \\
2. & \quad P_{2} = \text{"Q(x): return 0"} \\
3. & \quad \text{return } (P_{1}, P_{2}) \\
\end{align} \\
\implies L(P_{1}) = \begin{cases}
\Sigma^{*} & P(w) = 1 \\
\Set{ \Set{ a^{n}b^{n}c^{n} \mid n \geq 0 } } & P(w) \neq 1 \\
\end{cases} \\
\implies R(P, w) = (P_{1}, P_{2}) \in NCF \iff L(P_{1}) \neq \Sigma^{*} \iff \\
\iff P(w) \neq 1 \iff (P, w) \in \overline{ATM} \\
R \text{ is clearly computable, it only writes strings} \\
\implies \overline{ATM} \preccurlyeq_{m} NCF \implies \boxed{ NCF \text{ is not acceptable and not decidable} } \\
}
$$
# 4
$$
\displaylines{
\text{Let } L = \Set{ a^{n}w \mid w \in \Set{ b, c }^{*}, \#b_{w} + \frac{\#c_{w}}{2} = n, n \geq 0 } \\
\text{Build a CFG for } L \\
\\
\text{Solution:} \\
G = (V, \Sigma, R, S) \\
\\
\begin{align}
S & \to aSb \mid aScc \mid aMc \mid \varepsilon \\
M & \to aMb \mid aScb \mid aSbc \mid c \\
\end{align} \\
}
$$
# 5
$$
\displaylines{
\text{Let } L = \Set{ u\#w \mid u, w \in \Set{ a, b }^{*}, \text{b\_after\_a}(w) = \text{b\_after\_a}(u) } \\
\text{Prove: } L \text{ is not regular} \\
\\
\text{Proof:} \\
\text{Let by contradiction } L \text{ be regular} \\
\text{Let } N \\
\text{Let } w = (ab)^{N}\#(ab)^{N} \\
\abs{xy} \leq N \implies xy = \begin{cases}
(ab)^{k} & 1 \leq k \leq N \\
(ab)^{k}a & 0 \leq k \leq N-1 \\
(ba)^{k} & 1 \leq k \leq N \\
(ba)^{k}b & 0 \leq k \leq N-1 \\
\end{cases} \\
\text{In addition, } xy^{0}z = w'\#(ab)^{N} \text{ in all cases, so} \\
\text{b\_after\_a}(w') \neq \text{b\_after\_a}(w) = N \implies xy^{0}z \not\in L \\
\\
\text{Case 0. } y = a \text{ or } y = b \\
\implies \text{b\_after\_a}(w) = \text{b\_after\_a}(u) - 1 \implies xy^{0}z \not\in L \\
\text{Case 1. } y = (ab)^{i}, i \geq 1 \\
\implies xy^{0}z = (ab)^{N-i}\#(ab)^{N} \not\in L \\
\text{Case 2. } y = (ab)^{i}a, i \geq 1 \\
\implies xy^{0}z = (ab)^{k-i}b(ab)^{N-1-k-i}\#(ab)^{N} \not\in L \\
\text{Case 3. } y = (ba)^{i}, i \geq 1 \\
\implies xy^{0}z = (ab)^{N-i}\#(ab)^{N} \not\in L \\
\text{Case 4. } y = (ba)^{i}b, i \geq 1 \\
\implies xy^{0}z = (ab)^{k-i}a(ab)^{N-2-k-i}\#(ab)^{N} \not\in L \\
}
$$
# 6
$$
\displaylines{
L_{3} \text{ is acceptable and } L_{3} \cup E \text{ is acceptable} \overset{ ? }{ \implies } L_{3} \text{ is decidable} \\
\\
\text{Solution:} \\
\text{Let } L_{3} = \overline{E} \\
L_{3} \text{ is acceptable} \\
L_{3} \cup E = \Sigma^{*} \text{ is acceptable} \\
\text{But } L_{3} = \overline{E} \text{ is not decidable} \\
}
$$
# 7
$$
\displaylines{
\text{Let } N = \lrp{Q, \Sigma, \Delta, q_{0}, F} \text{ be a NFA} \\
\text{Let } \forall q \in Q: \exists u \in \Sigma^{*}: \Delta^{*}(q, u) \cap F \neq \emptyset \\
\text{Then } L(N) \text{ is infinite} \\
\\
\text{Disproof:} \\
\text{Let } Q = \Set{ q_{0} } \\
\text{Let } F = \Set{ q_{0} } \\
\text{Let } \Delta = \Set{  } \\
\text{Then, } \Delta^{*}(q_{0}, \varepsilon) = \Set{ q_{0} } = F \\
}
$$
# 8
$$
\displaylines{
\text{Let } r_{1}, r_{2} \text{ be two regular expressions} \\
\text{Then }r_{1} \neq r_{2} \implies L(r_{1}) \neq L(r_{2}) \\
\\
\text{Disproof:} \\
r_{1} = a(a|b) \\
r_{2} = (aa|ab) \\
L(r_{1}) = L(r_{2}) = \Set{ aa, ab } \\
}
$$
