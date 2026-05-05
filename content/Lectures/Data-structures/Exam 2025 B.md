---
{"publish":true,"created":"09/07/25, 20:07","modified":"2026-03-24T15:00:07.236+02:00","tags":["Academia","Lecture","Data-structures"],"cssclasses":""}
---

## Bonus
$$
\displaylines{
\text{Lookup time in Cuckoo hashing is } \Theta(\log n) \\
\\
\text{Solution:} \\
\text{No} \\
}
$$
## 1a
$$
\displaylines{
\text{Draw a Fibonacci tree } F_{4} \\
\\
\text{Solution:} \\
}
$$
![[Pasted image 20250709205258.png]]
## 1b
$$
\displaylines{
\text{Prove: } \forall n \in \mathbb{N}_{0}: \text{Height of } F_{n} \text{ is } n \\
\\
\text{Proof:} \\
\text{Base case. } \text{Height of } F_{0} \text{ is } 0 \text{ as it only has a root} \\
\text{Strong induction step. Let } \forall n' \leq n: \text{height of }F_{n'} \text{ is } n' \\
\text{Height of } F_{n+1} \text{ is equal to } \max\{h(F_{n}) + 1, h(F_{n-1}) + 1\} = \max\{n + 1, n\} = n+1 \\
\implies \text{By induction, } \boxed{ \forall n \in \mathbb{N}_{0}: h(F_{n}) = n } \\
}
$$
## 1c
$$
\displaylines{
\text{Prove: } \forall n \in \mathbb{N}: n > 1 \implies \text{Length of shortest path from root to leaf is } S(F_{n}) = \left\lfloor \frac{n+1}{2}  \right\rfloor \\
\text{ or } \left\{\begin{array}{}
\frac{n}{2} & n = 2k \\
\frac{n+1}{2} & n = 2k+1 \\
\end{array}\right. \\
\\
\text{Proof:} \\
\text{Base case. } S(F_{2}) \text{ is root} \to \text{left leaf} = 1 = \frac{2}{2} \\
\text{Induction step. Let } \forall n' \leq n: \\
\text{the shortest path from root to leaf in } F_{n'} \text{ be of length } \left\{\begin{array}{}
\frac{n}{2} & n = 2k \\
\frac{n+1}{2} & n = 2k+1 \\
\end{array}\right. \\
\text{Shortest path from root to leaf in } F_{n+1} \text{ is then the path from root via } F_{n-1} \text{ or } F_{n} \\
\implies S(F_{n+1}) = 1 + \min\{S(F_{n-1}), S(F_{n})\} \\
\text{Let } n \text{ be even} \implies n+1 \text{ is odd} \\
\text{Then } S(F_{n+1}) = 1 + \frac{n}{2} = \frac{n+2}{2} = \frac{(n+1)+1}{2} \\
\text{Let } n \text{ be odd} \implies n+1 \text{ is even} \\
\text{Then } S(F_{n+1}) = 1 + \frac{n-1}{2} = \frac{n+1}{2} \\
\implies \text{By induction, } \forall n \in \mathbb{N}: n > 2 \implies S(F_{n}) = \left\{\begin{array}{}
\frac{n}{2} & n = 2k \\
\frac{n+1}{2} & n = 2k+1 \\
\end{array}\right. \\
}
$$
