---
{"publish":true,"created":"07/01/25, 14:01","modified":"2025-11-21T21:10:14.051+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 19
# Inclusion-Exclusion Principle #definition 
$$
\displaylines{
\text{Let } A_{1}, \dots, A_{n} \text{ be finite sets} \\
\text{Then } \left\lvert  \bigcup_{i=1}^{n} A_{i}  \right\rvert = \sum_{k=1}^{n} (-1)^{k-1}\sum_{\begin{array}{}
B \subseteq [n] \\
\lvert B \rvert = k \\
\end{array}} \left\lvert  \bigcap_{j \in B} A_{j} \right\rvert = \\
= \sum_{k=1}^{n} (-1)^{k-1} \sum_{1 \leq i_{1} < i_{2} < \dots < i_{k} \leq n} \lvert A_{i_{1}} \cap A_{i_{2}} \cap \dots \cap A_{i_{k}} \rvert \\
\\
\text{Proof:} \\
\text{Let } x \in U \\
\text{Let } m \text{ be a number of sets which contain } x \\
\text{Let } m = 0 \\
\implies \left\{\begin{array}{}
x \not\in \bigcup_{i=1}^{n} A_{i} \\
\forall k \in [n]: \forall B \subseteq [n], \lvert B \rvert = k: x \not\in \bigcap_{j \in B} A_{j} \\
\end{array}\right. \\
\implies x \text{ is counted zero times on both sides} \\
\\
\text{Let } m > 0 \\
x \in A_{i_{1}}, A_{i_{2}}, \dots, A_{i_{m}} \\
\text{Let } D = \Set{ i \in [n] | x \in A_{i} } \\
\lvert D \rvert = m \\
x \in \bigcup_{i=1}^{n} A_{i} \implies x \text{ is counted once on the left side} \\
\forall B \not\subseteq D: x \not\in \bigcap_{j \in B} A_{j} \implies \forall B \not\subseteq D: x \text{ is counted zero times on the right side} \\
\text{Total contribution of $x$ to the sum on the right side:} \\
\sum_{k=1}^{m} (-1)^{k-1}\sum_{\begin{array}{}
B \subseteq D \\
\lvert B \rvert = k \\
\end{array}} 1 = \sum_{k=1}^{m} (-1)^{k-1} \binom{m}{k} = -\sum_{k=1}^{m} (-1)^{k} \binom{m}{k} = 1 - \sum_{k=0}^{m} (-1)^{k} \binom{m}{k} = \\
= 1 - 0 = 1 \\
\implies \forall x \in U: x \text{ is counted the same number of times on both sides} \\
\text{Proved} \\
}
$$
## Special case
$$
\displaylines{
\text{If } \forall k \in [n]: \text{sizes of intersection of any } k \text{ sets are equal to } \alpha_{k} \\
\text{Then } \left\lvert  \bigcup_{i=1}^{n} A_{i}  \right\rvert = \sum_{k=1}^{n} (-1)^{k-1}\sum_{\begin{array}{}
B \subseteq [n] \\
\lvert B \rvert = k \\
\end{array}} \alpha_{k} = \sum_{k=1}^{n} (-1)^{k-1}\alpha_{k}\binom{n}{k} \\
}
$$
---
## Example
$$
\displaylines{
\text{How many numbers from } [1000] \text{ can be divided by at least one of numbers: } 2, 3, 5 ? \\
\\
\text{Solution:} \\
\text{Let } A_{2} = \Set{ n \in [1000] | 2 \mid n } \\
\text{Let } A_{3} = \Set{ n \in [1000] | 3 \mid n } \\
\text{Let } A_{5} = \Set{ n \in [1000] | 5 \mid n } \\
\lvert A_{2} \cup A_{3} \cup A_{5} \rvert = \underbrace{ \lvert A_{2} \rvert + \lvert A_{3} \rvert + \lvert A_{5} \rvert }_{ k = 1 } - \underbrace{ (\lvert A_{2} \cap A_{3} \rvert + \lvert A_{2} \cap A_{5} \rvert + \lvert A_{3} \cap A_{5} \rvert) }_{ k = 2 } + \\
+ \underbrace{ \lvert A_{2} \cap A_{3} \cap A_{5} \rvert }_{ k = 3 } = \\
\lvert A_{2} \rvert = \left\lfloor  \frac{1000}{2}  \right\rfloor = 500 \\
\lvert A_{3} \rvert = \left\lfloor  \frac{1000}{3}  \right\rfloor = 333 \\
\lvert A_{5} \rvert = \left\lfloor  \frac{1000}{5}  \right\rfloor = 200 \\
\lvert A_{2} \cap A_{3} \rvert = \left\lfloor  \frac{1000}{2*3}  \right\rfloor = 166 \\
\lvert A_{2} \cap A_{5} \rvert = \left\lfloor  \frac{1000}{2*5}  \right\rfloor = 100 \\
\lvert A_{3} \cap A_{5} \rvert = \left\lfloor  \frac{1000}{3*5}  \right\rfloor = 66 \\
\lvert A_{2} \cap A_{3} \cap A_{5} \rvert = \left\lfloor  \frac{1000}{2*3*5}  \right\rfloor = 33 \\
\implies \lvert A_{2} \cup A_{3} \cup A_{5} \rvert = 500+333+200-166-100-66+33 = 734 \\
}
$$
---
## Example
$$
\displaylines{
\text{Let } n, m \in \mathbb{N} \\
\text{What is the number of surjective functions } f: [n] \to [m] ? \\
\\
\text{Solution:} \\
\text{Let } m > n \\
\implies \lvert [n] \rvert < \lvert [m] \rvert \implies \text{Number of surjective functions is zero} \\
\text{Let } m \leq n \\
\lvert [m]^{[n]} \rvert = m^{n} \\
\text{Let's count the number of functions that are not surjective} \\
\text{Let } \forall i \in [m]: A_{i} = \Set{ f: [n] \to [m] | i \not\in Im(f) } \\
f(1) \in [m] \setminus \Set{ i } \\
f(2) \in [m] \setminus \Set{ i } \\
\dots \\
f(n) \in [m] \setminus \Set{ i } \\
\implies \forall i \in [m]: \lvert A_{i} \rvert = (m-1)^{n} \\
\forall 1 \leq i_{1} < i_{2} < \dots < i_{k} \leq m: \lvert \underbrace{ A_{i_{1}} \cap A_{i_{2}} \cap \dots \cap A_{i_{k}} }_{ f: [n] \to [m]: i_{1}, i_{2}, \dots, i_{k} \not\in Im(f) \implies \lvert Im(f) \rvert = m-k  } \rvert = (m-k)^{n} \\
\implies \left\lvert  \bigcup_{i \in [m]} A_{i} \right\rvert = \sum_{k=1}^{m} (-1)^{k-1}(m-k)^{n}\binom{m}{k} \\
\text{Number of surjective functions is equal to:} \\
m^{n} - \left\lvert  \bigcup_{i \in [m]} A_{i} \right\rvert = m^{n} - \sum_{k=1}^{m} (-1)^{k-1}(m-k)^{n}\binom{m}{k} \\
}
$$
---
# Pigeon hole principle #theorem 
$$
\displaylines{
\text{If there are } n \text{ pigeons and } n-1 \text{ pigeon holes} \\
\text{then there are at least } 2 \text{ pigeons in one of the holes} \\
\\
\text{Proof:} \\
\dots
}
$$
---
