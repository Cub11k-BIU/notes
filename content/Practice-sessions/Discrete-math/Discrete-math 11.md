---
{"publish":true,"created":"21/01/25, 16:01","modified":"2025-11-21T21:10:24.729+02:00","tags":["Academia","Practice","Discrete-math"],"cssclasses":""}
---

# Discrete-math 11
## Pigeonhole principle
$$
\displaylines{
\lvert A \rvert > \lvert B \rvert \\
f: A \to B \\
\implies \exists a_{1} \neq a_{2} \in A: f(a_{1}) = f(a_{2}) \\
}
$$
---
## Exercise
$$
\displaylines{
A \subseteq \mathbb{Z}, \lvert A \rvert = 6 \\
\text{Prove: } \exists a_{1}, a_{2} \in A:  5 \mid (a_{1} - a_{2}) \\
\\
\text{Solution:} \\
\text{Let } B = \Set{ \text{Remainders of division by 5} }= \Set{ 0, 1, 2, 3, 4 } \\
\lvert A \rvert > \lvert B \rvert \\
f: A \to B \\
f(a) = a \mod 5 \\
\implies \exists a_{1}, a_{2} \in A: f(a_{1}) = f(a_{2}) = x \\
\implies \left\{\begin{array}{}
a_{1} = 5n + x \\
a_{2} = 5m + x \\
\end{array}\right. \\
\implies a_{1} - a_{2} = 5(n-m) \implies f(a_{1}-a_{2}) = 0 \implies 5 \mid (a_{1} - a_{2}) \\
}
$$
---
## Exercise
$$
\displaylines{
n \geq 2 \text{ women shake hands} \\
\text{Prove: there are at least two women who shook the same number of hands} \\
\\
\text{Proof:} \\
\text{Let } A = \Set{ \text{women} }, \lvert A \rvert = n \\
\text{Let } B = \Set{ \text{possible numbers of handshakes} } \\
\text{Case 1. One woman shook everybody's hand} \\
\implies \text{No woman shook 0 hands} \\
\implies \text{Possible numbers of handshakes is from 1 to } n-1 \\
\implies \lvert A \rvert > \lvert B \rvert = n - 1 \\
\text{Case 2. No woman shook everybody's hand} \\
\implies \text{Possible numbers of handshakes is from 0 to } n-2 \\
\implies \lvert A \rvert > \lvert B \rvert = n - 1 \\
\text{Both cases lead to pigeonhole principle} \\
}
$$
---
## Exercise
$$
\displaylines{
A = \subseteq \Set{ 1, \dots, 100 }, \lvert A \rvert = 51 \\
\text{Prove: } \exists a, b \in A: a \mid b \\
\\
\text{Proof:} \\
\forall x \in A: x = a \cdot 2^{k}, 2 \not\mid a \\
\text{Let } B = \Set{ 1, 3, 5, \dots, 99 } \\
f: A \to B, f(x) = f(a \cdot 2^{k}) = a \\
\lvert A \rvert > \lvert B \rvert \\
\implies \exists x_{1}, x_{2} \in A: f(x_{1}) = f(x_{2}) = a \\
\implies \left\{\begin{array}{}
x_{1} = a \cdot 2^{i} \\
x_{2} = a \cdot 2^{j} \\
\end{array}\right. \\
\implies \frac{x_{1}}{x_{2}} = 2^{i-j}, \frac{x_{2}}{x_{1}} = 2^{j-i} \\
\implies \begin{cases}
i \leq j \implies x_{1} \mid x_{2} \\
j < i \implies x_{2} \mid x_{1} \\
\end{cases} \\
}
$$
---
## Inclusion-Exclusion principle
$$
\displaylines{
\left\lvert  \bigcup_{i=1}^{n} A_{i} \right\rvert = \sum_{k=1}^{n} (-1)^{k-1} \sum_{1 \leq k_{1} < k_{2} < \dots < k_{k} \leq n} \left\lvert  \bigcap_{i \in \Set{k_{1}, k_{2}, \dots, k_{k}}} A_{i} \right\rvert \\
\bigcap_{i=1}^{n} A_{i}^{c} = \left( \bigcup_{i=1}^{n} A_{i} \right)^{c} = U - \bigcup_{i=1}^{n} A_{i} \\
}
$$
---
## Exercise
$$
\displaylines{
80 \text{ balls} \\
5 \text{ boxes} \\
\text{Each box has at most } 24 \text{ balls} \\
\\
\text{Solution:} \\
\text{Total number of ways to divide balls into boxes:} \\
\binom{80+5-1}{80} \\
\text{Let } A = \Set{ \text{At least one box has 25 balls} } \\
\text{Let } A_{i} = \Set{ \text{Box } i \text{ has at least } 25 \text{ balls} } \\
\lvert A_{i} \rvert = \binom{55+5-1}{55} \\
\lvert A_{i} \cap A_{j} \rvert = \binom{30+5-1}{30} \\
\lvert A_{i_{1}} \cap \dots \cap A_{i_{k}} \rvert = \binom{80 - 25k + 5 - 1}{80-25k} = \alpha_{k} \\
\implies \left\lvert  \bigcup_{i=1}^{5} A_{i} \right\rvert = \sum_{k=1}^{5} (-1)^{k-1}\binom{5}{k}\alpha_{k} = \sum_{k=1}^{3} (-1)^{k-1}\binom{5}{k} \alpha_{k} \\
\text{The final answer is: } \boxed{ \binom{80+5-1}{80} - \sum_{k=1}^{3} (-1)^{k-1}\binom{5}{k} \binom{80 - 25k + 5 - 1}{80-25k} } \\
}
$$
---
## Exercise
$$
\displaylines{
A = \Set{ 1, 2, \dots, n } \\
f: A \to A \\
x \in A \text{ is a called a fixed point of $f$ if } f(x) = x \\
\text{How many invertible functions with no fixed points there are?} \\
\\
\text{Solution:} \\
\text{Number of invertible functions on } A \text{ is } n! \\
\text{Let } A_{i} = \Set{ f \in A^{A} | i \text{ is a fixed point of } f } \\
\lvert A_{i} \rvert = (n-1)! \\
\lvert A_{i} \cap A_{j} \rvert = (n-2)! \\
\dots \\
\alpha_{k} = (n-k)! \\
\implies \left\lvert \bigcup_{i=1}^{n} A_{i} \right\rvert = \sum_{k=1}^{n} (-1)^{k-1}\binom{n}{k}(n-k)! \\
\implies \text{The final answer is: } \boxed{ n! - \sum_{k=1}^{n} (-1)^{k-1}\binom{n}{k}(n-k)! } \\
}
$$
---
