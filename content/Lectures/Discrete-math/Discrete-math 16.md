---
{"publish":true,"created":"24/12/24, 14:12","modified":"2025-11-21T21:10:14.040+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 16

## Number of permutations/combinations (continued) #definition 
$$
\displaylines{
\text{How many ways there is to choose } k \text{ elements from the set} \\
\Set{ 1, 2, \dots, n } = [n] \\
\\
\text{Solution:} \\
\left(\begin{array}{c|c|c}
 & \text{Order is important} & \text{Order is not important} \\
\text{With repetitions} & A_{n}^{k} = n^{k} & C_{n+k-1}^{k} = \frac{(n+k-1)!}{(n-1)!k!} \\
\text{Without repetitions} & P_{n}^{k} = \frac{n!}{(n-k)!} & C_{n}^{k} = \frac{n!}{(n-k)!k!} \\
\end{array}\right) \\
}
$$
### With repetitions, order is not important
$$
\displaylines{
\text{Multiset is a set of elements that can repeat } \\
\text{It can be denoted as: } M = a_{1}^{\alpha_{1}}a_{2}^{\alpha_{2}}\dots a_{n}^{\alpha n} \\
\text{Number of ways to choose } k \text{ elements from the set $A$ of size } n \text{ is equal to the number of} \\
\text{multisets of size } k \text{ contatining elements of set } A \\
\text{Which is equal to number of solutions of equation } \alpha_{1} + \alpha_{2} + \dots + \alpha_{n} = k \\
\text{Let us denote this equation as:} \\
\underbrace{ 00\dots0 }_{ \alpha_{1} }1\underbrace{ 00\dots0 }_{ \alpha_{2} }1\dots 1\underbrace{ 00\dots0 }_{ \alpha_{n} } \\
\text{Length of this binary string is } n+k-1 \\
\text{Number of ways to choose } k \text{ places in the string of length } n+k-1 \text{ is:} \\
\frac{(n+k-1)!}{(n-1)!k!} = \binom{n+k-1}{k} = \binom{n+k-1}{n-1}\\
}
$$
---
$$
\displaylines{
\text{How many solutions is there:} \\
x_{1} + x_{2} + \dots + x_{n} \leq k & (1) \\
\forall i \in [1, n]: x_{i} \geq 0 \\
\text{Let } x_{n+1} = k - \sum_{i=1}^{n} x_{i} \\
\text{Each solution for } (1) \text{ is equivalent to solution of} \\
x_{1} + \dots + x_{n} + x_{n+1} = k \\
\implies \text{Number of such solutions is: } \binom{n+k}{k} \\
}
$$
---
## Properties of Binomial coefficient #lemma 
$$
\displaylines{
\forall n \geq k \in \mathbb{N}: \binom{n}{k} \in \mathbb{N} \\
\\
\text{Proof (combinatorial):} \\
\binom{n}{k} \text{ is equal to the number of subsets of size } k \text{ of element from set } [n] \\
\text{Number of subsets is a natural number} \implies \binom{n}{k} \in \mathbb{N} \\
}
$$
$$
\displaylines{
\binom{n}{k} = \binom{n}{n-k} \\
\text{Proof:} \\
\binom{n}{k} = \frac{n!}{(n-k)!k!} = \frac{n!}{k!(n-k)!} = \binom{n}{n-k} \\
}
$$
### Pascal identity #lemma
$$
\displaylines{
\forall n \geq k \in \mathbb{N}: \binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1} \\
\text{Proof:} \\
\binom{n-1}{k} + \binom{n-1}{k-1} = \frac{(n-1)!}{(n-k-1)!k!} + \frac{(n-1)!}{(n-k)!(k-1)!} = \\
= \frac{(n-1)!(n-k)}{(n-k)!k!} + \frac{(n-1)!k}{(n-k)!(k)!} = \frac{(n-1)!n}{(n-k)!(k)!} = \binom{n}{k}
}
$$
---
