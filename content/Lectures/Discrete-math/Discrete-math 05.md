---
{"publish":true,"created":"18/11/24, 14:11","modified":"2025-11-21T21:10:14.006+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 5

## Induction #definition 
$$
\displaylines{
P(n), n \in \mathbb{N} \\
\begin{array}{}
1. & P(1) \equiv T \\
2. & \forall n \in \mathbb{N}: P(n) \to P(n+1) \\
\end{array} \\
}
$$
---
## Example
$$
\displaylines{
P(n) \equiv 1+2+\dots+n = \frac{n(n+1)}{2} \\
\text{Prove: } \forall n \in \mathbb{N}: P(n) \\
\\
\text{Induction:} \\
P(1) \equiv 1 = \frac{1*2}{2} \equiv T \\
\text{Let } P(n) \equiv T : \\
1+2+\dots+n = \frac{n(n+1)}{2} \\
\implies
1+2+\dots+(n+1) = \frac{n(n+1)}{2} + (n+1) = \\
= \frac{n(n+1) + 2(n+1)}{2} = \frac{(n+1)(n+2)}{2} \\
\implies (P(n) \to P(n+1)) \equiv T \\
\implies \boxed{\forall n \in N: P(n)} \\
}
$$
---
## Hand Shaking lemma #lemma 
$$
\displaylines{
\text{In a group of $n$ people, everyone shakes hands with every other member of the group} \\
\text{The total number of handshakes is equal to } \frac{n(n-1)}{2} \\
P(n) \equiv f(n) = \frac{n(n-1)}{2}
\\
\text{Induction:} \\
P(1) \equiv \frac{1*0}{2} = 0 \equiv T \\
\text{Let } P(n) \equiv T : \\
f(n+1) = f(n) + n = \frac{n(n-1)}{2} + n = \frac{n(n-1) + 2n}{2} = \frac{(n+1)n}{2} \\
\implies (P(n) \to P(n+1)) \equiv T \\
\implies \boxed{\forall n \in \mathbb{N}: P(n)} \\
}
$$
---
## "Limited" induction #definition 
$$
\displaylines{
\begin{array}{} \\
1. & P(m) \equiv T \\
2. & \forall n \geq m : P(n) \to P(n+1)
\end{array} \\
}
$$
---
## Example
$$
\displaylines{
\text{Prove: } \forall n \geq_{2} : P(n) \equiv n! < n^{n} \\
\\
P(2) \equiv 2! < 2^{2} \equiv 2 < 4 \equiv T \\
\text{Let } n \geq 2, P(n) \equiv T \\
(n+1)! = n!(n+1) < n^{n}(n+1) < (n+1)^{n}(n+1) = (n+1)^{n+1} \\
\implies (n+1)! < (n+1)^{n+1} \\
\implies \forall n \geq 2: (P(n) \to P(n+1)) \equiv T \\
\implies \boxed{\forall n \geq 2: P(n)}
}
$$
---
## Strong induction #definition 
$$
\displaylines{
\begin{array}{}
1. & P(1) \equiv T \\
2. & \forall n \in \mathbb{N}: (\forall k \leq n: P(k)) \to P(n+1) \\
\end{array} \\
}
$$
---
## Example
$$
\displaylines{
\text{Prove: } \forall n \geq 2 \in \mathbb{N}: S(n) \equiv (P(n) \lor (S(a) \land S(b) \land n = a \cdot b)) \\
\\
S(2) \equiv P(2) \equiv T \\
S(n+1): \\
\begin{array}{}
1. & P(n+1) \equiv T \implies S(n+1) \equiv T \\
2. & P(n+1) \equiv F \implies S(n+1) \equiv S(a) \land S(b) \land n+1 = a \cdot b \\
\end{array} \\
\exists 2 \leq a, b \leq n: S(a) \land S(b) \land n+1 = a*b \\
}
$$
---
## Chocolate bar problem #lemma 
$$
\displaylines{
m\times n = k \\
f(k) = k-1 \\
P(k) \equiv f(k) = k-1 \\
\\
P(1) \equiv f(1) = 0 \equiv T \\
m\times n = k+1 \\
k+1 = a + b; a \leq k; b \leq k \\
f(a) = a-1; f(b) = b-1 \\
f(k+1) = f(a) + f(b) + 1 = a+b-2+1 = k+1-1 = k \\
\implies f(k+1) = k \\
}
$$
---
