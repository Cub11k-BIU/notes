---
{"publish":true,"created":"10/12/24, 16:12","modified":"2025-11-21T21:10:24.675+02:00","tags":["Academia","Practice","Discrete-math"],"cssclasses":""}
---

# Discrete-math 6
$$
\displaylines{
\text{Let } B \subseteq P(A) \\
\text{Then } \\
sup(B) = \bigcup_{X \in B} X \\
inf(B) = \bigcap_{X \in B} X \\
\\
\text{Proof for supremum:} \\
\text{By properties of inclusion: } X \subseteq X \cup Y \implies \bigcup_{X \in B} X \text{ is an upper bound} \\
\text{Let } A' \subset \bigcup_{X \in B} X \text{ such that } A' \text{ is an upper bound of } B \\
\text{Then } \exists a \in \left( \bigcup_{X \in B} X \right) \setminus A' \implies \exists A_{i} \in B: a \in A_{i} \land a \not\in A' \\
\implies a \in A_{i} \setminus A' \implies A' \not\supseteq A_{i} \in B \implies A' \text{ is not an upper bound of } B - \text{Contradiction!} \\
\implies sup(B) = \bigcup_{X \in B} X \\
}
$$
---
$$
\displaylines{
\text{Let } A, B \text{ be finite sets}, \lvert A \rvert = n, \lvert B \rvert = m \\
[\exists f : A \to B : f \text{ is surjective}] \iff m \leq n \\
\\
\text{Proof:} \\
A = \Set{ a_{1}, a_{2}, \dots, a_{n} }, B = \Set{ b_{1}, b_{2}, \dots, b_{m} } \\
\text{Let } m \leq n \\
\text{Let } f = \Set{ (a_{i}, b_{i}) | \forall i \in [1, m] } \iff f(a_{i}) = b_{i} \\
\forall i \in [1, m]: a_{i} \in A \land b_{i} \in B \implies \forall b \in B \exists a \in A : f(a) = b \\
\boxed{m \leq n \implies \exists f : f \text{ is surjective}} \quad (1) \\
\text{Let } \exists f : A \to B : f \text{ is surjective} \\
f \text{ is surjective} \implies Im(f) = B = \Set{ f(a_{1}), f(a_{2}), \dots, f(a_{n}) } \\
\implies \begin{cases}
\lvert B \rvert = \lvert A \rvert  & f \text{ is one-to-one} \\ \\
\lvert B \rvert < \lvert A \rvert  & \text{otherwise} \\
\end{cases} \implies m \leq n \\
\boxed{\exists f: A \to B: f \text{ is surjective} \implies m \leq n} \quad (2) \\
(1) \text{ and } (2) \implies \boxed{\exists f: A \to B: f \text{ is surjective} \iff m \leq n} \\
}
$$
---
