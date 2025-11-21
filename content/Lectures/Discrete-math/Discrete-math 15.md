---
{"publish":true,"created":"23/12/24, 14:12","modified":"2025-11-21T21:10:14.044+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 15
## Basic counting problems
### Addition rule #lemma 
$$
\displaylines{
\text{Let } A, B \text{ be finite sets such that} A \cap B = \emptyset \\
\text{Then } \lvert A \cup B \rvert = \lvert A \rvert + \lvert B \rvert \\
\forall C, D \subseteq \mathbb{U}: \lvert C \cup D \rvert = \lvert C \setminus D \rvert + \lvert D \rvert \\
}
$$
### Multiplication rule #lemma 
$$
\displaylines{
\forall A, B \subseteq \mathbb{U}: \lvert A \times B \rvert = \lvert A \rvert \cdot \lvert B \rvert \\
}
$$
### Extensions of the multiplication rule
$$
\displaylines{
\text{For any } n \text{ sets} A_{1}, A_{2}, \dots, A_{n} \\
\lvert A_{1} \times A_{2} \times A_{3} \times \dots \times A_{n} \rvert = \lvert A_{1} \rvert \cdot \lvert A_{2} \rvert \cdot \ldots \cdot \lvert A_{n} \rvert \\
}
$$
---
## Example
$$
\displaylines{
\text{Let } A, B \text{ be finite sets} \\
\lvert A \rvert = n, \lvert B \rvert = m \\
\text{How many functions } f: A \to B \text{ is there}? \\
\\
\text{Solution:} \\
A = \Set{ a_{1}, \dots, a_{n} } \\
\text{Let sequence } S_{f} = (f(a_{1}), f(a_{2}), \dots, f(a_{n})) \\
f_{1} = f_{2} \implies S_{f_{1}} = S_{f_{2}} \\
f_{1} \neq f_{2} \implies S_{f_{1}} \neq S_{f_{2}} \\
\implies \lvert B^{A} \rvert = \lvert \Set{ S_{f} | f: A \to B } \rvert = \lvert \underbrace{ B \times B \times B \times \dots \times B }_{ n \text{ times} } \rvert = m^{n} \\
}
$$
---
## Number of permutations/combinations #definition 
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
### With repetitions, order is important
$$
\displaylines{
\text{Each chosen element can be one of } n \text{ elements} \\
\implies \text{Number of ways to choose } k \text{ elements}: n^{k}
}
$$
### Without repetitions, order is important (permutations)
$$
\displaylines{
\text{First chosen element can be one of } n \text{ elements} \\
i \text{-th chosen element can be one of } n-i \text{ elements} \\
i \in [0, k-1] \implies P_{n}^{k} = (n-0)(n-1)(n-2)\dots(n-k+1) = \frac{n!}{(n-k)!} \\
}
$$
### Without repetitions, order is not important (combinations)
$$
\displaylines{
\text{Number of permutations of a binary string of length $k$ is: } k! \\
\implies \text{Number of ways to choose } k \text{ non-repeating elements with disregard to order is:} \\
C_{n}^{k} = \binom{n}{k} = \frac{n!}{(n-k)!k!} \\
}
$$
---
