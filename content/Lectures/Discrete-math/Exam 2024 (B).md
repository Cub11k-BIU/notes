---
{"publish":true,"created":"11/02/25, 13:02","modified":"2025-11-21T21:10:14.101+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# 5
$$
\displaylines{
\text{Functions } f, g: P(\mathbb{N}) \to P(\mathbb{N}) \text{ are called nice to each other if} \\
\forall A, B \in P(\mathbb{N}): \begin{array}{}
A \subseteq B \implies f(B) \subseteq f(A) \\
A \subseteq B \implies g(B) \subseteq g(A) \\
\end{array} \\
\text{And } \forall A \in P(\mathbb{N}): \begin{array}{}
A \subseteq f(g(A)) \\
A \subseteq g(f(A)) \\
\end{array} \\
}
$$
## 5a
$$
\displaylines{
\text{Find two functions that are nice to each other} \\
\\
\text{Solution:} \\
\text{Let } \forall A \in P(\mathbb{N}): f(A) = g(A) = \mathbb{N} \\
\text{Let } A \subseteq B \in P(\mathbb{N}) \\
f(B) = f(A) = \mathbb{N} \implies f(A) \subseteq f(B) \\
g(A) = g(B) = \mathbb{N} \implies g(A) \subseteq g(B) \\
A \subseteq \mathbb{N} = f(g(A)) = g(f(A)) \\
}
$$
## 5b
$$
\displaylines{
\text{Prove: } f, g \text{ are nice to each other} \iff \forall A, B \in P(\mathbb{N}): A \subseteq f(B) \iff B \subseteq g(A) \\
\\
\text{Proof:} \\
\text{Let } f, g \text{ be nice to each other} \\
\text{Let } A, B \in P(\mathbb{N}) \\
\text{Let } A \subseteq f(B) \\
\implies g(f(B)) \subseteq g(A) \implies \boxed{ B \subseteq g(A) } \\
\text{Let } B \subseteq g(A) \\
\implies f(g(A)) \subseteq f(B) \implies \boxed{ A \subseteq f(B) } \\
\text{Let } \forall A, B \in P(\mathbb{N}): A \subseteq f(B) \iff B \subseteq g(A) \\
\text{Let } A, B \in P(\mathbb{N}) \\
\underbrace{ g(A) }_{ 'B' } \subseteq g(A) \implies \boxed{ A \subseteq f(\underbrace{ g(A) }_{ 'B' }) } \\
\underbrace{ f(B) }_{ 'A' } \subseteq f(B) \implies \boxed{ B \subseteq g(\underbrace{ f(B) }_{ 'A' }) } \\
\text{Let } A \subseteq B \\
B \subseteq f(g(B)) \implies A \subseteq f(g(B)) \implies \boxed{ g(B) \subseteq g(A) } \\
B \subseteq g(f(B)) \implies A \subseteq g(f(B)) \implies \boxed{ f(B) \subseteq f(A) } \\
\implies \boxed{ f, g \text{ are nice to each other} } \\
}
$$
## 5c
$$
\displaylines{
\text{Let } f, g \text{ be nice to each other} \\
\text{Prove: } f = f \circ g \circ f \\
\\
\text{Proof:} \\
Dom(f \circ g \circ f) = P(\mathbb{N}) = Dom(f) \\
Range(f \circ g \circ f) = P(\mathbb{N}) = Range(f) \\
\text{Let } A \in P(\mathbb{N}) \\
A \subseteq g(f(A)) \implies \boxed{ f(g(f(A))) \subseteq f(A) } \\
g(f(A)) \subseteq g(f(A)) \implies \boxed{ f(A) \subseteq f(g(f(A))) } \\
\implies f(A) = f(g(f(A))) \implies \boxed{ f = f \circ g \circ f } \\
}
$$
## 5d
$$
\displaylines{
\text{Let } f, g \text{ be nice to each other} \\
\text{Prove: } \forall A, B \in P(\mathbb{N}): f(A \cup B) = f(A) \cap f(B) \\
\\
\text{Proof:} \\
\text{Let } A, B \in P(\mathbb{N}) \\
x \in f(A \cup B) \iff \Set{ x } \subseteq f(A \cup B) \iff A \cup B \subseteq g(\Set{ x }) \\
\iff A \subseteq g(\Set{ x }) \land B \subseteq g(\Set{ x }) \iff \Set{ x } \subseteq f(A) \land \Set{ x } \subseteq f(B) \\
\iff \Set{ x } \subseteq f(A) \cap f(B) \iff x \in f(A) \cap f(B) \\
\implies \boxed{ f(A \cup B) = f(A) \cap f(B) } \\
}
$$
