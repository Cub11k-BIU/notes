---
{"publish":true,"created":"20/01/26, 16:23","modified":"2026-01-24T14:28:45.049+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

## Closures
### Closure of decidable languages
- Union
- Intersection
- Complement
- Concatenation
- Kleene closure
### Closure of acceptable languages
- Union
- Intersection
- Concatenation
- Kleene closure
## Relation between decidable and acceptable languages
If the language is decidable, it is also acceptable, this is trivial.
If, however, both the language and its complement are acceptable, the language itself is decidable! Proof is by running (simulating) both $M_{L}, M_{\overline{L}}$ in parallel, for example with a multi-line Turing machine. If the word is accepted by $M_{L}$, it is accepted. If it is accepted by $M_{\overline{L}}$ then it is rejected.
## Church-Turing thesis
### SIMPLE programming language
- Variables
	- Natural numbers
	- Infinite arrays
- Operations
	- Assignment (both literal and variable)
	- Addition, Subtraction, Multiplication of natural variables
- Conditions
	- Equality ($==$)
	- Inequality ($\geq$)
- Flow
	- All instructions are numbered, execution is sequential
	- `goto` allows jumping to an arbitrary instruction
	- `stop` terminates the program with exit code (0 or 1)
### Language of a SIMPLE program
$$
\displaylines{
\text{Let } P \text{ be a SIMPLE program} \\
L(P) = \Set{ w \in \Sigma^{*} \mid P(w) = 1 } \\
\overline{L(P)} = \Set{ w \in \Sigma^{*} \mid P(w) = 0 } \\
}
$$
SIMPLE defines a set of all possible computer programs
### SIMPLE program is equivalent to Turing machine
$$
\displaylines{
\text{Clearly, we can simulate a DTM execution using SIMPLE program the same way} \\
\text{we can do so using Java or another common programming language} \\
\\
\text{Now let us simulate a SIMPLE program using a Turing machine} \\
\text{For each variable (and literal), we will allocate one input line} \\
\text{For variable assignment we simply copy one input line to another} \\
\text{For literal assignment we first clear the line, then write given number of 1's} \\
\text{For arrays, assignment by index is first locating the place and then assigning there} \\
\text{For arithmetic operations, use existing Turing machines we already studied} \\
\text{Equality and inequality are checked by reading two lines in parallel} \\
\text{Sequential execution of commands is natural, via transitions between states} \\
\text{Goto is simply a transition between states with no writing or moving} \\
stop(1) \text{ is the same as } acc \\
stop(0) \text{ is the same as } rej \\
}
$$
This equivalence allows us to write pseudo-code in order to define a Turing machine and conclude that physical computers (up to the finiteness of memory) are equivalent to Turing machine!

---
## General grammars
Similarly to context free grammars, general grammars are sets of derivation rules, but in general grammars, it is possible to put arbitrary strings to the left side of the rule!
### Example
$$
\displaylines{
L = \Set{ a^{n}b^{n}c^{n} \mid n \geq 0 } \\
\\
\text{Solution:} \\
\begin{align}
S & \to S'] \\
S & \to aS'bC \mid \varepsilon \\
Cb & \to bC \\
C] & \to \, ]c \\
] & \to \varepsilon \\
\end{align} \\
}
$$
On the example of $L = \Set{ uu \mid u \in \Sigma^{*} }$ we can show that general grammars can "emulate" the execution of a Turing machine.
### Acceptability of a language #lemma 
$$
\displaylines{
L \text{ is acceptable} \iff \exists G \text{ general grammar such that } L(G) = L \\
\\
\text{Solution:} \\
\text{Let } G \text{ be a general grammar} \\
\text{Let the following be the pseudo-code of a NTM:} \\
\begin{align}
 & \text{Input } w \\
 & u = S \\
 & \text{while True} : \\
 & \quad \text{Let } u = xyz \text{ non-deterministically} \\
 & \quad \text{Choose } t \to v \in G \text{ non-deterministically} \\
 & \quad \text{if } y \neq t: \\
 & \qquad \text{stop(0)} \\
 & \quad u = xvz \\
 & \quad \text{if } w == u: \\
 & \qquad \text{stop(1)} \\
\end{align} \\
\text{Clearly there exists an execution that accepts the input iff it is derivable by } G \\
\\
\text{Now, let } L \text{ be accepted by some } M \\
\text{We can build a general grammar by assigning each} \\
C_{1} \vdash_{M} C_{2} \text{ a derivation rule } C_{1} \to C_{2} \\
\text{Formally:} \\
\delta(q, \sigma) = (p, \pi, R) \implies q\sigma \to \pi p \in G \\
\delta(q, \sigma) = (p, \pi, L) \implies \forall \tau \in \Gamma: \tau q\sigma \to p \tau \pi \in G \\
\text{This is the general idea, technical details as} \\
\text{how to initialize the starting state and how to finish are left out} \\
}
$$
---
## Chomsky hierarchy

- Acceptable languages - General grammar - Turing machine
	- *Context-aware languages - Context-aware grammar - Linearly bounded automaton*
		- Context-free languages - Context-free grammar - Stack automaton
			- Regular languages - Regular - Finite automaton

Chomsky hierarchy doesn't provide an answer to the question "Is every CFL decidable?", but this claim is true! Proof is left out

---
## Church-Turing thesis #hypothesis 
The Turing machine model embodies the abstract concept of an "algorithm".
That is, any algorithm that can be described as a mechanistic process in which:  
- The process is carried out as a series of steps  
- Each step requires a finite amount of "work"  
Can also be described as a Turing machine. In particular, there is no mechanistic/automatic model more powerful than a Turing machine.
This hypothesis still stands today, as there is, yet, no computational models more powerful than a Turing machine.

---
