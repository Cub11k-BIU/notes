---
{"publish":true,"created":"14/12/25, 09:49","modified":"2026-03-24T15:00:00.879+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# Turing machine
A Turing machine has two components:
- Central controller (where the states are)
	- A unique accepting state `acc`
	- A unique rejecting state `rej`
	- All other states are non-terminal(!), meaning that the Turing machine will continue running until either in state `acc` or `rej`
	- Each transition between states is in the form of $\sigma \to \pi, D$, where $D$ is the direction, either R(right) or L(left). And $\sigma, \pi$ are letters, $\sigma$ is the current letter in the input line and $\pi$ is the letter to write into the input line.
- Input line
	- The input line can be navigated both forward and backward
	- Input line spans infinitely both forward and backward, and all non-filled cells are considered to have a "space" character
	- It is possible to write into the input line(!)
## Formal definition
$$
\displaylines{
M = (Q, \Sigma, \Gamma, \delta, q_{0}, acc, rej) \\
\begin{align}
& Q - \text{a set of states} \\
& \Sigma - \text{alphabet of the input} \\
& \Gamma - \text{alphabet of the input line (including letters the machine writes)} \\
& \delta: (Q \setminus \Set{ acc, rej }) \times \Gamma \to Q \times \Gamma \times \Set{ L, R } - \text{transitions function} \\
& q_{0} - \text{initial state} \\
& acc - \text{accepting state} \\
& rej - \text{rejecting state} \\
\end{align} \\
}
$$
### Configuration
$$
\displaylines{
\text{Let } M = (Q, \Sigma, \Gamma, \delta, q_{0}, acc, rej) \\
\text{A string } uq\sigma v \text{ is called a configuration} \\
\text{where } u, v \in \Gamma^{*}, \sigma \in \Gamma, q \in Q \\
u\sigma v \text{ denotes the current state of input line} \\
q\sigma \text{ denotes that the reading head is currently at letter } \sigma \text{ and the current state is } q \\
}
$$
### Turing machine language #definition 
$$
\displaylines{
M \text{ accepts word } w \iff \exists u, v \in \Gamma^{*}, \sigma \in \Gamma :  q_{0}w \vdash_{M}^{*} u \ acc \ \sigma v \\
M \text{ rejects word } w \iff \exists u, v \in \Gamma^{*}, \sigma \in \Gamma :  q_{0}w \vdash_{M}^{*} u \ rej \ \sigma v \\
\text{Note that } M \text{ might not accept or reject the word, that is, it might not terminate} \\
\text{With this notion,} \\
M \text{ defines/decides language } L \subseteq \Sigma^{*} \iff \begin{eqsys}
\forall w \in L: M \text{ accepts } w \\
\forall w \not\in L: M \text{ rejects } w \\
\end{eqsys} \\
\exists w \in \Sigma^{*}: M \text{ doesn't asccept, nor reject } w \implies M \text{ does not define a language} \\
\\
M \text{ accepts } L(M) \iff \forall w \in L(M) : M \text{ accepts } w \\
\\
\text{Note that } M \text{ always accepts some language, but might not define a language} \\
}
$$
## Example
$$
\displaylines{
L = \Set{ w\#w \mid w \in \Set{ a, b }^{*} } \\
\\
\text{First, let us build the abstract idea} \\
\text{Read a letter, remember it, read until \# and then find first occurence of the letter} \\
\text{Return to the beginning and repeat until all letters are read} \\
\\
\text{Now to the formal part:} \\
M = (Q, \Sigma, \Gamma, \delta, q_{0}, acc, rej) \\
Q = \Set{ q_{1\varepsilon}, q_{2\varepsilon}, q_{1a}, q_{2a}, q_{1b}, q_{2b}, back, acc, rej} \\
\Sigma = \Set{ a, b, \# } \\
\Gamma = \Set{ v, a, b, \#, E } \text{ where } E \text{ denotes empty/space character} \\
q_{0} = q_{1\varepsilon} \\
\delta : \begin{array}{|c|cc|}
(Q \setminus \Set{ acc, rej } \times \Gamma) & Q \times \Gamma \times \Set{ L, R } & \text{Comments} \\
(q_{1\varepsilon}, v) & (q_{1\varepsilon}, v, R) & \text{Ignore completed} \\
 \\
(q_{1\varepsilon}, a) & (q_{1a}, v, R) & \text{Remember } b \\
(q_{1a}, a) & (q_{1a}, a, R) & \text{Ignore until \#} \\
(q_{1a}, b) & (q_{1a}, b, R) & \text{Ignore until \#} \\
(q_{1a}, \#) & (q_{2a}, \#, R) & \text{Found \#} \\
(q_{2a}, v) & (q_{2a}, v, R) & \text{Ignore completed} \\
(q_{2a}, a) & (back, v, L) & \text{Found } a \\
 \\
(q_{1\varepsilon}, b) & (q_{1b}, v, R) & \text{Remember } b \\
(q_{1b}, a) & (q_{1b}, a, R) & \text{Ignore until \#} \\
(q_{1b}, b) & (q_{1b}, b, R) & \text{Ignore until \#} \\
(q_{1b}, \#) & (q_{2b}, \#, R) & \text{Found \#} \\
(q_{2b}, v) & (q_{2b}, v, R) & \text{Ignore completed} \\
(q_{2b}, b) & (back, v, L) & \text{Found } b \\
 \\
(q_{1\varepsilon}, \#) & (q_{2\varepsilon}, \#, R) & \text{Nothing left of \#} \\
(q_{2\varepsilon}, v) & (q_{2\varepsilon}, v, R) & \text{Ignore completed} \\
(q_{2\varepsilon}, E) & (acc, E, R) & \text{Nothing right of \#, accept} \\
 \\
(back, \sigma) & (back, \sigma, L) & \sigma \in \Gamma \setminus \Set{ E } \\
(back, E) & (q_{1\varepsilon}, E, R) \\
 \\
(q, \gamma) & (rej, \gamma, R) & \text{Reject everything else} \\
\end{array} \\
\\
\text{We can also simplify this table:} \\
\delta : \begin{array}{|c|cc|}
(Q \setminus \Set{ acc, rej } \times \Gamma) & Q \times \Gamma \times \Set{ L, R } & \text{Comments} \\
(q_{1\varepsilon}, v) & (q_{1\varepsilon}, v, R) \\
(q_{1\varepsilon}, \sigma) & (q_{1\sigma}, v, R) & \sigma \in \Set{ a, b } \\
(q_{1\sigma}, \pi) & (q_{1\sigma}, \pi, R) & \pi \in \Set{ a, b } \\
(q_{1\tau}, \#) & (q_{2\tau}, \#, R) & \tau \in \Set{ a, b, \varepsilon } \\
(q_{2\tau}, v) & (q_{2\tau}, v, R) & \tau \in \Set{ a, b, \varepsilon } \\
(q_{2\sigma}, \sigma) & (back, v, L) & \sigma \in \Set{ a, b } \\
(q_{2\varepsilon}, E) & (acc, E, R) \\
(back, \sigma) & (back, \sigma, L) & \sigma \in \Set{ a, b, v, \# } \\
(back, E) & (q_{1\varepsilon}, E, R) \\
(q, \gamma) & (rej, \gamma, R) & \text{Reject everything else} \\
\end{array} \\
}
$$
## Example
$$
\displaylines{
L = \Set{ w \in \Set{ a, b, c }^{*} | \#a_{w} = \#b_{w} = \#c_{w} } \\
\\
\text{This example is conceptually similar to the previous one} \\
\\
M = (Q, \Sigma, \Gamma, \delta, q_{0}, acc, rej) \\
Q = \Set{ q_{S} \mid S \subseteq \Set{ a, b, c } } \cup \Set{back, acc, rej} \\
\Sigma = \Set{ a, b, c } \\
\Gamma = \Set{ v, a, b, c, E } \text{ where } E \text{ denotes empty/space character} \\
q_{0} = q_{\emptyset} \\
\delta: \begin{array}{|c|cc|}
(Q \setminus \Set{ acc, rej }) \times \Gamma & Q \times \Gamma \times \Set{ L, R } & \text{Comments} \\
 \\
(q_{S}, \sigma) & (q_{S \cup \Set{ \sigma }}, v, R) & \begin{array}{}
S \subset \Set{ a, b, c } \\
\sigma \in \Set{ a, b, c } \setminus S \\
\end{array} \\
 \\
(q_{S}, \sigma) & (q_{S}, \sigma, R) & \begin{array}{}
S \subset \Set{ a, b, c } \\
\sigma \in S \\
\end{array} \\
 \\
(q_{S}, v) & (q_{S}, v, R) & S \subset \Set{ a, b, c } \\
(q_{\Set{ a, b, c }}, \gamma) & (back, \gamma, L) & \gamma \in \Gamma \\
(q_{\emptyset}, E) & (acc, E, R) \\
(back, \sigma) & (back, \sigma, L) & \sigma \in \Set{ a, b, c, v } \\
(back, E) & (q_{\emptyset}, E, R) \\
(q, \gamma) & (rej, \gamma, R) & \text{Reject everything else} \\
\end{array} \\
}
$$
## Example
$$
\displaylines{
L = \Set{ a^{n}b^{n}c^{n} \mid n \in \mathbb{N}_{0} } \\
\\
\text{This time, we will represent the Turing machine via pseudocode} \\
\begin{align}
1. & \quad \text{For each letter } v \text{ move head to the right} \\
 & \qquad a. \quad E \implies acc \\
 & \qquad b. \quad b, c \implies rej \\
 & \qquad c. \quad a \to E \text{ and move head to the right} \\
2. & \quad \text{For each letter } a, v \text{ move head to the right} \\
 & \qquad a. \quad c, E \implies rej \\
 & \qquad b. \quad b \to v \text{ and move head to the right} \\
3. & \quad \text{For each letter } b, v \text{ move head to the right} \\
 & \qquad a. \quad E \implies rej \\
 & \qquad b. \quad c \to v \text{ and move head to the left} \\
4. & \quad \text{Move head to the left until the first letter on the input line} \\
\end{align} \\
}
$$
## Example
$$
\displaylines{
L = \Set{ a^{i}b^{j}c^{i \cdot j} \mid i, j > 0 \in \mathbb{N} } \\
\\
\begin{align}
1. & \quad \text{Replace } a \text{ with } E, \text{ if the first letter is not } a, \text{ reject} \\
2. & \quad \text{Read to the right until the first } b, \text{ if } c, E \text{ is before } b, \text{ reject} \\
3. & \quad \text{For each letter } b \\
 & \qquad a. \quad b \to x \\
 & \qquad b. \quad \text{Read until the first } c, c \to v \\
 & \qquad c. \quad a, E \implies rej \\
4. & \quad \text{Return to the left, replace all } x \text{ with } b, \text{ until the first letter on the input line} \\
5. & \quad \text{If } a \text{ on the input line, repeat from } 1. \\
6. & \quad \text{Read until } E, \text{ if no } c \text{'s are present, accept, otherwise reject} \\
\end{align} \\
}
$$
## Computing functions
$$
\displaylines{
\text{Let } f: \Sigma_{1}^{*} \to \Sigma_{2}^{*} \\
\text{Let } M = (Q, \Sigma, \Gamma, \delta, q_{0}, qcc, rej) \\
M \text{ is said to compute } f \iff \begin{eqsys}
\sigma = \Sigma_{1}, \Sigma_{2} \subseteq \Gamma \\
\forall w \in \Sigma_{1}^{*}: q_{0}w \vdash_{M}^{*} acc \ f(w) \\ 
\end{eqsys} \\
\\
\text{For functions on strings, the representation is trivial} \\
\text{What about functions on numbers?} \\
\text{Let } f: \mathbb{N}^{k} \to \mathbb{N}^{t} \\
\text{First, convert all numbers to unary} \\
\text{Second, separate multiple arguments by \#} \\
\text{Finally, run the Turing machine, i.e.:} \\
f(2, 3) = 2 + 3 \iff 11\#111 \underset{ M }{ \leadsto } 11111 \\
f(2, 3) = 2 \cdot 3 \iff 11\#111 \underset{ M }{ \leadsto } 111111 \\
\dots \\
}
$$
