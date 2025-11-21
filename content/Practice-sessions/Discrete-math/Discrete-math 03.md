---
{"publish":true,"created":"19/11/24, 16:11","modified":"2025-11-21T21:10:24.642+02:00","tags":["Academia","Practice","Discrete-math"],"cssclasses":""}
---

# Discrete-math 3
### Exercise
$$
\displaylines{
N_{odd} = \{ 2n-1 \mid n \in \mathbb{N} \} \\
N_{even} = \{ 2n \mid n \in \mathbb{N} \} \\
\text{Let } a \in N_{even} \\
\text{There exists $n$, such as } a = 2n \\
\text{$a$ is a product of 2 natural numbers, so } a \in \mathbb{N} \\
\text{Let } b \in N_{odd} \\
\text{There exists $n$, such as } b = 2n - 1 \\
\text{$b$ is a difference of two natural numbers, so } b \in \mathbb{Z} \\
n \in N \implies n \geq 1 \implies 2n - 1 \geq 1 \implies b \in \mathbb{N} \\
(N_{even} \cup N_{odd}) \subseteq \mathbb{N} \\
\\
\text{Let } n \in \mathbb{N}, \text{ if $n$ is odd, there exists } k \in \mathbb{N}: n = 2k - 1 \in N_{odd} \\
\text{if $n$ is even, there exists } k \in \mathbb{N}: n = 2k \in N_{even} \\
\implies n \in \mathbb{N} \implies n \in N_{odd} \lor n \in N_{even} \iff \\ \iff \mathbb{N} \subseteq (N_{even} \cup N_{odd}) \\
\implies (N_{odd} \cup N_{even}) = \mathbb{N}
}
$$
---
### Exercise
$$
\displaylines{
A_{n} = \left\{  \frac{m}{n} \bigg| m \in \mathbb{N} \right\}, n \in \mathbb{N} \\
\text{Prove: } \bigcup_{n \in \mathbb{N}} A_{n} = \mathbb{Q}^{+} \\
\text{Let } x \in \bigcup_{n \in \mathbb{N}} A_{n} \\
\text{Then there exists } n \in \mathbb{N} \text{, such that } x \in A_{n} \\
\text{Therefore exists } m \in \mathbb{N} \text{, such that } x = \frac{m}{n} \in \mathbb{Q}^{+} \\
\implies \bigcup_{n \in \mathbb{N}} A_{n} \subseteq \mathbb{Q}^{+} \\
\\
\text{Let } x \in \mathbb{Q}^{+} \\
\text{Then exists } m \in \mathbb{Z}, n \in \mathbb{N} \text{, such that } x = \frac{m}{n}, x > 0 \\
\text{Since } x > 0 \text{, } m > 0 \text{ is also true, thus } m \in \mathbb{N} \\
\text{Therefore } x \in A_{n} \implies x \in \bigcup_{n \in \mathbb{N}} A_{n} \\
\implies \mathbb{Q}^{+} \subseteq \bigcup_{n \in \mathbb{N}} A_{n} \\
\implies \bigcup_{n \in \mathbb{N}} A_{n} = \mathbb{Q}^{+} \\
}
$$
---
