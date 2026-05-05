---
{"publish":true,"created":"18/12/24, 15:12","modified":"2026-03-24T14:59:27.038+02:00","tags":["Academia","Practice","Linear-1"],"cssclasses":""}
---

# Linear-1 8
## Exercise
$$
\displaylines{
B = \Set{ 1 + x, 3 + x^{2}, x } \\
\text{Prove: } B \text{ is basis of } R_{2}[x] \\
\\
\text{Proof:} \\
\alpha(1+x) + \beta(3+x^{2}) + \gamma x = 0 \\
\left\{\begin{array}{}
\alpha + 3\beta = 0 \\
\alpha + \gamma = 0 \\
\beta = 0
\end{array}\right. \implies \left\{\begin{array}{}
\alpha = 0 \\
\beta = 0 \\
\gamma = 0 \\
\end{array}\right. \implies B \text{ is a linear independence} \\
a + bx + cx^{2} = \alpha(1 + x) + \beta(3 + x^{2}) + \gamma x \\
\left(\begin{array}{ccc|c}
1 & 3 & 0 & a \\
1 & 0 & 1 & b \\
0 & 1 & 0 & c \\
\end{array}\right) \implies \left\{\begin{array}{}
\alpha = a - 3c \\
\beta = c \\
\gamma = b - a + 3c
\end{array}\right. \implies sp(B) = R_{2}[x] \\
}
$$
---
## "Useful" lemma
$$
\displaylines{
U, W \subseteq V - \text{ vector subspaces of } V \\
U \subseteq W \land  dim(U) = dim(W) \implies U = W \\
}
$$
---
## Exercise
$$
\displaylines{
U, W \subseteq V - \text{ vector subspaces of } V \\
dim(U + W) = dim(U \cap W) + 1 \implies U \subseteq W \lor W \subseteq W \\
\\
\text{Proof:} \\
\text{Let } dim(U + W) = dim(U \cap W) + 1 \\
\text{Let } U \not\subseteq W \land W \not\subseteq U \\
U \cap W \subseteq W \\
W \not\subseteq U \implies \exists w \in W: w \not\in U \implies w \not\in U \cap W \implies U \cap W \neq W \\
\implies U \cap W \subset W \\
\\
W \subseteq U + W \\
U \not\subseteq W \implies \exists u \in U: u \not\in W \\
u = u + 0 \implies u \in U + W \implies W \neq U + W \\
\implies W \subset U + W \\
\\
dim(U + W) > dim(W) \implies dim(U + W) \geq dim(W) + 1 \geq dim(U \cap W) + 2 \\
\implies dim(U + W) > dim(U \cap W) + 1 - \text{Condtradiction!} \\
}
$$
---
## Exercise
$$
\displaylines{
U, W \subseteq V - \text{ vector subspaces of } V \\
dim(V) < dim(U) + dim(W) \implies U \cap W \neq \emptyset \Set{ 0 } \\
\\
\text{Proof:} \\
\text{Let } U \cap W = \Set{ 0 } \implies U \oplus W = V \\
\implies dim(V) = dim(U) + dim(V) - \text{ Contradiction!} \\
}
$$
---
