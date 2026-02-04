---
{"publish":true,"created":"28/01/26, 15:40","modified":"2026-01-29T18:30:16.509+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } M_{O} \text{ be a deterministic Turing machine in the O model (right-infinite input line)} \\
\text{Let } \Sigma = \Set{ 0, 1 } \\
\text{Show an equivalent Turing machine in model } T \\
\text{using the proof structure from the lectures} \\
\\
M_{O}: \\
\begin{array}{|c|c|}
\text{State} & \text{Input} & \text{New state} & \text{Output} & \text{Direction} \\
q_{0} & 0 & q_{0} & 1 & L \\
q_{0} & 1 & q_{0} & 1 & R \\
q_{0} & E & acc & 1 & R \\
\end{array} \\
\\
M_{T}: \\
\begin{array}{|c|c|}
\text{State} & \text{Input} & \text{New state} & \text{Output} & \text{Direction} \\
q_{0} & \sigma & q_{\$} & \sigma & L & \sigma \in \Sigma \\
q_{\$} & E & q_{0} & \$ & R \\
q & \$ & q & \$ & R & q \in Q \\
q_{0} & 0 & q_{0} & 1 & L \\
q_{0} & 1 & q_{0} & 1 & R \\
q_{0} & E & acc & 1 & R \\
\end{array} \\
\text{Explanation:} \\
\text{In the beginning, step once to the left and put a "stop sign" - } \$ \\
\text{Then, if at any given moment the reading head arrives to this "stop sign",} \\
\text{it will immediately make a step to the right, thus emulating a "wall" on the left} \\
}
$$
# 2
$$
\displaylines{
\text{Given } \Sigma, w \in \Sigma^{*} \text{ and } \sigma \in \Sigma \\
\text{Let } w = \sigma_{1}\dots\sigma_{n} \\
\text{Then } w \ominus \sigma = w_{i_{1}}w_{i_{2}}\dots w_{i_{k}} \text{ such that } \forall j \in [1, k]: w_{i_{j}} \neq \sigma \\
\text{In other words, we deleted all occurences of } \sigma \text{ from } w \\
\text{Let } L \subseteq \Sigma^{*} \\
\text{Let } WO(L) = \Set{ u\sigma \mid \exists w \in L: w \ominus \sigma = u \text{ where } u \in \Sigma^{*}, \sigma \in \Sigma } \\
\text{Prove: } L \text{ is regular} \implies WO(L) \text{ is regular} \\
\\
\text{Proof:} \\
\text{Let } L \text{ be regular} \\
\implies \exists A = \lrp{Q, \Sigma, \delta, q_{0}, F} \text{ a DFA such that } L(N) = L \\
\text{Let us build } N = \lrp{Q', \Sigma', \Delta', q_{0}', F'} \text{ a NFA such that } L(N) = WO(L) \\
\\
\text{To do this, we can make "copies" of } A \text{ for each } \sigma \in \Sigma \text{ such that in every copy} \\
\text{transitions with } \sigma \text{ are replaced by } \varepsilon\text{-transitions} \\
\text{Essentially, we will "skip" the } \sigma \text{'s in the input} \\
\\
\text{Formally:} \\
Q' = Q \times \Sigma \cup \Set{ q_{s} } \cup \Set{ q_{f} } \\
\Sigma' = \Sigma \\
q_{0}' = q_{s} \\
F' = \Set{ q_{f} } \\
\text{First, add } \varepsilon\text{-transitions to each copy from } q_{0}' \\
\forall \sigma \in \Sigma: \Delta(q_{s}, \varepsilon) = \Set{ (q_{0}, \sigma) } \\
\text{Second, add } \sigma\text{-transitions from accepting states of each copy to } q_{f} \\
\forall (f, \sigma) \in F \times \Sigma: \Delta((f, \sigma), \sigma) = \Set{ q_{f} } \\
\text{Last, add original transitions from } A \text{ while replacing } \sigma\text{-transitions by } \varepsilon\text{-transitions} \\
\forall q, p \in Q, \forall \sigma \neq \pi \in \Sigma: \begin{eqsys}
\delta(q, \pi) = p \implies \Delta((q, \sigma), \pi) = \Set{ (p, \sigma) } \\
\delta(q, \sigma) = p \implies \Delta((q, \sigma), \varepsilon) = \Set{ (p, \sigma) } \\
\end{eqsys} \\
}
$$
# 3
$$
\displaylines{
\text{Let } WA = \Set{ (P_{1}, P_{2}) \mid \forall w \in L(P_{1}): \exists u \in L(P_{2}): wu \text{ is a palindrome} } \\
\text{Is } WA \text{ decidable? Is it acceptable?} \\
\\
\text{Solution:} \\
\text{Let us prove that } WA \text{ is not acceptable} \\
\text{Let us build a reduction } R \text{ from } \overline{ATM} \text{ to } WA \\
\begin{align}
 & R(P, w): \\
1. & \quad P_{1} = \text{"Q(x): return P(w)"} \\
2. & \quad P_{2} = \text{"Q(x): return 0"} \\
3. & \quad \text{return } (P_{1}, P_{2}) \\
\end{align} \\
L(P_{1}) = \begin{cases}
\Sigma^{*} & P(w) = 1 \\
\emptyset & P(w) \neq 1 \\
\end{cases} \\
L(P_{2}) = \emptyset \\
[(P_{1}, P_{2}) \in WA] \text{ and } [L(P_{2}) = \emptyset] \iff L(P_{1}) = \emptyset \iff P(w) \neq 1 \iff (P, w) \in \overline{ATM}  \\
}
$$
# 4
$$
\displaylines{
\text{Let } \text{b\_after\_a}(w) \text{ be the number of times letter } b \text{ is right after letter } a \text{ in } w \\
\text{Let } L = \Set{ wc^{n} \mid w \in \Set{ a, b }^{*}, \text{b\_after\_a}(w) = n } \\
\text{Build a CFG that derives } L \\
\\
\text{Solution:} \\
\begin{align}
S & \to MabSc \mid M \\
M & \to bM \mid A \\
A & \to aA \mid \varepsilon \\
\end{align} \\
}
$$
# 5
$$
\displaylines{
\text{Let } L = \Set{ wuw \mid w \in \Sigma^{*}, u \in prefix(\Set{ w }) } \\
\text{Prove that } L \text{ is not context-free} \\
\\
\text{Solution:} \\
\text{Let by contradiction } L \text{ is context-free} \\
\implies L \text{ fulfills pumping lemma} \\
\text{Let } N \\
\text{Let } w = a^{N}b^{N}a^{N}b^{N} \\
\text{Let } w = tuxyz \\
\abs{uxy} \leq N, \abs{uy} > 0 \\
\abs{uxy} \leq N \\
\text{Case 1. } uxy = a^{k} \\
\implies u^{0}xy^{0} = a^{k-i}. i \geq 1 \\
\implies tu^{0}xy^{0}z = \begin{cases}
a^{N-i}b^{N}a^{N}b^{N} \not\in L & i \geq 1 \\
a^{N}b^{N}a^{N-i}b^{N} \not\in L & i \geq 1 \\
\end{cases} \\
\\
\text{Case 2. } uxy = a^{k}b^{l} \\
\implies u^{0}xy^{0} = a^{k-i}b^{l-j}, i + j \geq 1 \\
\implies tu^{0}xy^{0}z = \begin{cases}
a^{N-i}b^{N-j}a^{N}b^{N} & i + j \geq 1 \\
a^{N}b^{N}a^{N-i}b^{N-j} & i + j \geq 1 \\
\end{cases} = \begin{cases}
a^{N-i}b^{N}a^{N}b^{N} \in L & i \geq 1 \\
a^{N}b^{N-j}a^{N}b^{N} \not\in L & j \geq 1 \\
a^{N-i}b^{N-j}a^{N}b^{N} \not\in L & i \geq 1, j \geq 1 \\
a^{N}b^{N}a^{N-i}b^{N} \in L & i \geq 1 \\
a^{N}b^{N}a^{N}b^{N-j} \not\in L & j \geq 1 \\
a^{N}b^{N}a^{N-i}b^{N-j} \not\in L & i \geq 1, j \geq 1 \\
\end{cases} \\
\text{Case 1 is covered by } tu^{2}xy^{2}z = a^{N+i}b^{N}a^{N}b^{N} \not\in L, i \geq 1 \\
\text{Case 4 is covered by } tu^{N+2}xy^{N+2}z = a^{N}b^{N}a^{2N+i}b^{N} \not\in L, i \geq 1 \\
\\
\text{Case 3. } uxy = b^{k} \\
\implies u^{0}xy^{0} = b^{k-i}, i \geq 1 \\
\implies tu^{0}xy^{0}z = \begin{cases}
a^{N}b^{N-i}a^{N}b^{N} \not\in L & i \geq 1 \\
a^{N}b^{N}a^{N}b^{N-i} \not\in L & i \geq 1 \\
\end{cases} \\
\text{Case 4. } uxy = b^{k}a^{l} \\
\implies tu^{0}xy^{0}z = \begin{cases}
a^{N}b^{N}a^{N-i}b^{N} \not\in L & i \geq 1 \\
a^{N}b^{N-i}a^{N}b^{N} \not\in L & i \geq 1 \\
a^{N}b^{N-i}a^{N-j}b^{N} \not\in L & i,j \geq 1 \\
\end{cases} \\
}
$$
# 6
$$
\displaylines{
L_{1} \text{ is not regular} \\
L_{1} \preccurlyeq_{m} L_{2} \\
\text{Then } L_{2} \text{ is not regular} \\
\\
\text{Disproof:} \\
\text{Let } L_{1} = \Set{ a^{n}b^{n} \mid n \geq 0 } \\
\text{Let } L_{2} = \Set{ a^{n} \mid n \geq 0 } \\
L_{1} \text{ is not regular} \\
L_{2} \text{ is regular} \\
L_{1} \text{ is context free and so is decidable, let } D\text{-}L_{1} \text{ be a program that decides it} \\
\begin{align}
 & R(w): \\
1. & \quad \text{if } D\text{-}L_{1}(w) == 1: \\
2. & \qquad \text{return } a \\
3. & \quad \text{return } b \\
\end{align} \\
w \in L_{1} \iff R(w) = a \iff R(w) \in L_{2} \\
R \text{ is a computable reduction from } L_{1} \text{ to } L_{2} \\
}
$$
# 8
$$
\displaylines{
G \text{ a CFG} \\
L(G) \text{ is infinite} \implies \exists A \in V, u, v \in (V \cup \Sigma)^{*}: A \to uAv \\
\\
\text{Disproof:} \\
\begin{align}
S & \to aA \mid \varepsilon \\
A & \to S \\
\end{align} \\
}
$$
