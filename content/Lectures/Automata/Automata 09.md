---
{"publish":true,"created":"11/01/26, 11:56","modified":"2026-01-11T14:27:09.079+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# Turing machine variations
## Right input line Turing machine
A Turing machine with an input line being infinite only to the right instead of being infinite in both directions. The reading head moves identically to the classic Turing machine, with the exception that moving left in the left-most cell of the input line doesn't move the head.
$$
\displaylines{
\text{Equivalence of a classic Turing machine and a Right input line Turing machine} \\
\\
\text{Proof:} \\
\text{Let } M_{R} = (Q_{R}, \Sigma_{R}, \Gamma_{R}, \delta_{R}, q_{0_{R}}, acc_{R}, rej_{R}) \text{ be the Right input line Turing machine} \\
\\
\text{Let } M \text{ be a classic Turing machine such that the following is added to } M_{R}: \\
\delta(q_{0}, \sigma) = (q_{$}, \sigma, L) \\
\delta(q_{$}, E) = (q_{0}, $, R) \\
\forall q \in Q: \delta(q, $) = (q, $, R) \\
\\
\implies \text{Every Right input line Turing machine can be solved with a classic Turing machine} \\
\\
\text{Let } M = (Q, \Sigma, \Gamma, \delta, q, acc, rej) \text{ be a classic Turing machine} \\
\text{Let } M_{R} \text{ be a Right input line Turing machine} \\
\text{We will "fold" the input line in two, making it a right input line of pairs of letters} \\
\text{Such that } \Gamma_{R} \supseteq \Gamma \times \Gamma \cup \Set{ $ } \\
\text{Each state will have a "location", storing which letter in the pair is currently being read} \\
\begin{array}{c|c}
& $ & \begin{array}{c|c}
u_{1} & u_{2} & \dots \\
l_{1} & l_{2} & \dots \\
\end{array} \\
\end{array} \\
\text{The transitions are then defined as follows:} \\
\text{Lower location preserves direction, upper location reverses direction} \\
\forall ((q, \sigma), (p, \tau), L) \in \delta: \begin{eqsys}
\delta_{R}(q_{l}, (\pi, \sigma)) = (p_{l}, (\pi, \tau), L) \\
\delta_{R}(q_{u}, (\sigma, \pi)) = (p_{u}, (\tau, \pi), R) \\
\end{eqsys} \\
\forall ((q, \sigma), (p, \tau, R)) \in \delta: \begin{eqsys}
\delta_{R}(q_{l}, (\pi, \sigma)) = (p_{l}, (\pi, \tau), R) \\
\delta_{R}(p_{u}, (\sigma, \pi)) = (p_{u}, (\tau, \pi), L) \\
\end{eqsys} \\
\\
\text{Spaces that are not converted into pairs are treated as if they are a pair of spaces} \\
\forall ((q, E), (p, \tau, L)) \in \delta: \begin{eqsys}
\delta_{R}(q_{l}, E) = (p_{l}, (E, \tau), L) \\
\delta_{R}(q_{u}, E) = (p_{u}, (\tau, E), R) \\
\end{eqsys} \\
\forall ((q, E), (p, \tau, R)) \in \delta: \begin{eqsys}
\delta_{R}(q_{l}, E) = (p_{l}, (E, \tau), R) \\
\delta_{R}(q_{u}, E) = (p_{u}, (\tau, E), L) \\
\end{eqsys} \\
\\
\text{From the left boundary (\$) we go right and flip the location} \\
\forall q_{l} \in Q_{R}: \delta_{R}(q_{l}, $) = (q_{u}, $, R) \\
\forall q_{u} \in Q_{R}: \delta_{R}(q_{u}, $) = (q_{l}, $, R) \\
\\
\text{Accepting and rejecting states are trivial} \\
\forall x \in \Gamma_{R}: \begin{eqsys}
\delta_{R}(acc_{l}, x) = (acc, x, R) \\
\delta_{R}(acc_{u}, x) = (acc, x, R) \\
\delta_{R}(rej_{l}, x) = (rej, x, R) \\
\delta_{R}(rej_{u}, x) = (rej, x, R)
\end{eqsys} \\

\\
\text{The only step left is to convert input line into a "folded" one:} \\
\forall \tau \in \Sigma \cup \Set{ E }: \delta_{R}(q_{0}, \tau) = (q_{\tau}, $, R) \\
\forall \sigma \in \Sigma: \delta_{R}(q_{\tau}, \sigma) = (q_{\sigma}, (E, \tau), R) \\
\delta_{R}(q_{E}, E) = (back, (E, E), L) \\
\delta_{R}(back, (E, \tau)) = (back, (E, \tau), L) \\
\delta_{R}(back, $) = (q_{0_{l}}, $, R) \\
\\
\text{With this, } L(M) = L(M_{R}) \text{ and the proof is finished} \\
\text{Classic Turing machine is equivalent to the Right input line Turing machine} \\
}
$$
## TS Turing machine
In the TS Turing machine, the reading head can stay in the same place, whereas in the classic model each transition must move the head to the right or to the left.
$$
\displaylines{
\text{A classic Turing machine and a TS Turing machine are equivalent} \\
\\
\text{Proof:} \\
\text{Clearly, a classic Turing machine is also a TS Turing machine} \\
\text{So, we only need to prove one direction} \\
\\
\text{Let } M_{TS} \text{ be a TS Turing machine} \\
\text{Let } M \text{ be a classic Turing machine such that:} \\
Q = Q_{TS} \cup \Set{ q_{L} \mid q \in Q_{TS} } \\
\forall ((q, \sigma), (p, \pi, S)) \in \delta_{TS}: \begin{eqsys}
\delta(q, \sigma) = (q_{L}, \pi, R) \\
\forall \tau \in \Gamma_{TS}: \delta(q_{L}, \tau) = (q, \tau, L) \\
\end{eqsys} \\
\text{Meaning that any and all S-transitions are converted into two transitions,} \\
\text{one to the right and the other immediately back to the left} \\
\text{That is, } L(M) = L(M_{TS}) \\
\text{Classic Turing machine is equivalent to the TS Turing machine} \\
}
$$
## OR Turing machine
In the OR Turing machine, the reading head can either write something to the input line OR move to the Left/Right. This model is also equivalent to the TS Turing machine, and so is equivalent to the classic Turing machine.
To show the equivalence with TS Turing machine, we can convert all writing transitions to S-transitions and all moving transitions into input-preserving moving transitions in TS.
All non-S transitions in TS Turing machine can be represented as two transitions in the OR Turing machine - one writing and one moving.
## Multi-line Turing machine
In each input line the reading head is independent of the others, it can move in any direction and write anything to its input line. Number of lines is finite and must be defined beforehand, we cannot take the number of lines as input.
$$
\displaylines{
\text{Multi-line Turing machine is equivalent to the classic Turing machine} \\
\\
\text{Proof:} \\
\text{One direction is trivial,} \\
\text{classic Turing machine is simply a multi-line Turing machine with one line} \\
\\
\text{Let } M_{M} \text{ be a multi-line Turing machine with two lines} \\
\text{Let } M \text{ be a classic Turing machine such that:} \\
\Gamma = \Gamma_{M} \times \Set{ *, \uparrow } \times \Gamma_{M} \times \Set{ *, \uparrow } \\
\text{Each configuration can be represented like this:} \\
uq\sigma v \\
q \in Q_{M}, \sigma \in \Gamma, u, v \in \Gamma^{*} \\
\text{Meaning that both lines and both reading heads of $M_{M}$ are part of the input} \\
\text{The classic Turing machine will then emulate execution of } M_{M}: \\
\text{We will store the following:} \\
\begin{eqsys}
q & \text{current state in } M_{M} \\
\sigma_{1} & \text{current letter on the first line} \\
\sigma_{2} & \text{current letter on the second line} \\
\pi_{1} & \text{letter to be written on the first line} \\
\pi_{2} & \text{letter to be written on the second line} \\
d_{1} & \text{move direction on the first line} \\
d_{2} & \text{move direction on the second line} \\
\delta_{M} & \text{transitions in } M_{M} \\
\end{eqsys} \\
\text{Each transition is executed as follows:} \\
\text{Input is scanned until both lines heads are found and storage cells are updated} \\
\text{Then, } \pi_{1}, \pi_{2}, d_{1}, d_{2} \text{ are determined by } q, \sigma_{1}, \sigma_{2}, \delta_{M} \text{ and executed (written)} \\
\\
\text{This can be expanded onto } k \text{ lines directly} \\
}
$$
### Using Multi-line Turing machines to prove closure under intersection
A Multi-line Turing machine can represent $k$ classic Turing machines running on the same input line. If at least one of lines rejects the input - it is rejected by the whole machine. Lines can be run in sequence. This proves that intersection of definable languages is definable.
What about acceptable languages? It is also true, similarly proved with the condition that the input is not accepted if any of the lines is not terminated or rejects the input. What is important - we must run the lines in parallel, as some lines might never terminate.
Same can be inferred for union, where at least one line is needed to accept the input.
## Double-stack PDA
A double-stack PDA is equivalent to the classic Turing machine.
Such automaton is defined to first read all of the input to the first stack, then move it all to the second stack.
First stack stores the input to the left of the reading head, second stack stores the input to the right of the reading head (including).
The transitions (writing, moving) are then done by moving/popping/pushing elements in the two stacks.
## 2D Turing machine
A 2D Turing machine is defined to have a 2D infinite input line (bounded on the left and bottom). Moving is then defined in four directions - Left, Right, Up and Down.
$\mathbb{N}^{2} \sim \mathbb{N}$ so clearly, 2D input line can be mapped to a single input line. The only thing left to do to prove equivalence to the classic Turing machine is to define the moving transitions.
$$
\displaylines{
R: i + (x + y + 1) \\
L: i - (x + y) \\
U: i + (x + y + 2) \\
D: i - (x + y + 1) \\
}
$$
We can now emulate 2D Turing machine using 4 input lines, one for the input (mapped from a 2D input using diagonals), one for the $X$ coordinate, one for the $Y$ coordinate and one for re-computing coordinates given a one dimensional input.
## Non-deterministic Turing machine
Non-determinism is not a new idea, but what is new is the definition of what input is accepted and rejected.
If there exists a computation such that input $w$ is accepted, it is accepted.
If for all computation input $w$ is rejected, it is rejected.
Note that there is no symmetry, input is rejected only if there exists no computation that is *not rejected*.
Non-deterministic Turing machine is especially useful when used on acceptable languages.
Given a non-deterministic Turing machine $N$, we can build a deterministic one, that runs all possible computations, accepts input if one of them accepts and rejects if all of them reject.
We can enumerate all possible transitions from 1 on and then introduce a second input line, that will store the sequence of choices as numbers. Running the input on all possible sequence of choices is exactly equivalent to running $N$ with an exception that we will always terminate(!) each run. Note that the reading head on the second line will only move to the right.
In order to run all possible sequences of choices, we will introduce the third input line, that will simply preserve input to be copied each time a new run is started.
### Closure under prefix using non-deterministic Turing machine
Let there be a classic Turing machine that accepts language $L$
Let us add non-deterministic transitions that add letters to the input and then return back to the leftmost input position, arriving to the starting state of $M_{L}$
Non-deterministic Turing machine we defined now accepts (but doesn't define!) $prefix(L)$
### Closure under concatenation using non-deterministic Turing machine
Let there be classic Turing machines $M_{A}, M_{B}$ that define languages $L_{A}, L_{B}$
Let us define a non-deterministic 2-line Turing machine that defines $L_{A} \circ L_{B}$
Let us preserve the first input line (no writing) and use the second input line to run $M_{A}$ on some prefix of input and then run $M_{B}$ on the leftover suffix of input.
If both $M_{A}, M_{B}$ accepted the input, accept. Otherwise reject.

In a similar fashion, we can prove that definable and acceptable languages are also closed under Kleen closure and DropOut.
