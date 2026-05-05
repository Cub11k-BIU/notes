---
{"publish":true,"created":"26/10/25, 17:10","modified":"2026-03-24T14:59:39.088+02:00","tags":["Academia","Practice","Probability"],"cssclasses":""}
---

# Combinatorics
## Generalized basic principle of counting
$$
\displaylines{
\text{Let there be a sequence of } r \text{ experiments} \\
\text{Let } \forall i \in [1, n]: i\text{-th experiment has } n_{i} \text{ possible outcomes} \\
\text{Then the total number of possible outcomes of the sequence of experiments} \\
\text{is } \prod_{i=1}^{n} n_{i} \\
}
$$
---
$$
\displaylines{
\text{How many possible license plates can be generated with the following conditions:} \\
\begin{array}{}
1. & \text{License plate is 7 characters long} \\
2. & \text{First three places are occupied by upper case english letters} \\
3. & \text{Four places left are occupied by digits from 0 to 9} \\
\end{array} \\
\\
\text{Solution:} \\
26^{3} \cdot 10^{4} = 175760000 \\
}
$$
---
$$
\displaylines{
\text{How many possible license plates can be generated with the following conditions:} \\
\begin{array}{}
1. & \text{License plate is 7 characters long} \\
2. & \text{First three places are occupied by upper case english letters} \\
3. & \text{Four places left are occupied by digits from 0 to 9} \\
4. & \text{Repetitions are not allowed} \\
\end{array} \\
\\
\text{Solution:} \\
\frac{26!}{(26-3)!} \cdot \frac{10!}{(10-4)!} = 78624000 \\
}
$$
---
## Variations of the basic counting principle
$$
\displaylines{
\left(\begin{array}{c|c}
 & \text{With order} & \text{Without order} \\
\text{With repetitions} & n^{k} & C_{n+k-1}^{k} = \binom{n-1+k}{k} \\
\text{Without repetitions} & \frac{n!}{(n-k)!} & C_{n}^{k} = \binom{n}{k} = \frac{n!}{(n-k)!k!} \\
\end{array}\right) \\
}
$$
With/without repetitions and with order, without repetitions and without order are pretty much obvious, see explanations in Discrete math course, lecture 15
### Explanation for "with repetitions, without order"
Choosing k elements out of a set of size n is the same as creating a multiset of total size k. This can be written as
$$
\displaylines{
M_{A} = a_{1}^{x_{1}}a_{2}^{x_{2}}\dots a_{n}^{x^{n}} \\
}
$$
Which in turn is equal to the number of solutions to the equation:
$$
\displaylines{
\forall i \in [1, n]: x_{i} \in \mathbb{N}_{0} \\
x_{1} + \dots + x_{n} = k \\
}
$$
This can be interpreted as stars and bars problem with n-1 bars and k stars.

---
$$
\displaylines{
\text{In how many ways can 12 distinct balls can be distributed into 3 indistinguishable boxes?} \\
\text{One box should have 5 balls in it, one have 4 balls in it and one have 3 balls in it} \\
\\
\text{Solution:} \\
\text{First, we arrange 12 balls in a line} \\
\text{Then we place three bars between them, such that there are 5, 4 and 3 ball-groups} \\
\text{Inside each group, we do not care about the order} \\
\text{So the number of possibilities is } \frac{12!}{5!4!3!} = \binom{12}{5,4,3} \text{ which is also called a multinomial} \\
\text{But we also do not care about the order in which we place our bars, which gives us } \frac{\binom{12}{5,4,3}}{3!} \\
}
$$
---
## Catalan numbers
### Lattice paths
$$
\displaylines{
\text{Moving only Right or Up, how many ways there are to get from } (0, 0) \text{ to } (n, n) \\
n \text{ moves up} \\
n \text{ moves right} \\
\text{Total of } 2n \text{ moves} \\
\implies \text{Number of paths is the number of ways to choose } n \text{ steps Up from } 2n \text{ steps total} \\
\implies \text{Number of paths is } \binom{2n}{n} \\
}
$$
### "Good" Lattice paths
$$
\displaylines{
\text{Each step in the path satisfies } x \geq y, \text{i.e. is below the main diagonal} \\
}
$$
...TO BE CONTINUED (you can also see Discrete math course, lecture 18)

---
$$
\displaylines{
\text{A snail climbs 100 stairs, he can either climb 1 stair or 2 stairs at a time} \\
\text{How many different combinations of "steps" to do are there?} \\
\\
\text{Solution:} \\
\text{Let } f_{n} \text{ be the number of possibilities to reach stair } n \\
\text{Snail can reach stair } n \text{ from stair } n-1 \text{ or } n-2 \\
\implies f_{n} = f_{n-1} + f_{n-2} \\
\implies f_{n} = F(n) \text{ where } F \text{ is the Fibonacci number} \\
\\
\begin{pmatrix}
f_{n} \\
f_{n-1} \\
\end{pmatrix} = \begin{pmatrix}
1 & 1 \\
1 & 0 \\
\end{pmatrix}\begin{pmatrix}
f_{n-1} \\
f_{n-2} \\
\end{pmatrix} \implies \dots \implies \begin{pmatrix}
f_{n} \\
f_{n-1} \\
\end{pmatrix} = \begin{pmatrix}
1 & 1 \\
1 & 0 \\
\end{pmatrix}^{n-1}\begin{pmatrix}
f_{1} \\
f_{0} \\
\end{pmatrix} \\
}
$$
---
$$
\displaylines{
\text{How many distinct sequences can be formed from the alphabet:} \\
A, A, A, B, B, C, C, C, C, 7, 7 \\
\\
\text{Solution:} \\
\text{Arranging all of the letters gives us } 11! \\
\text{We do not care for the order of equal letters, so we divide by their arrangement numbers:} \\
\frac{11!}{3!2!4!2!} = \boxed{ \begin{pmatrix}
11 \\
3,2,4,2 \\
\end{pmatrix} } \\
}
$$
---
$$
\displaylines{
\text{Calculate: } \sum_{k=0}^{n} \binom{n}{k}2^{k} \\
\\
\text{Solution:} \\
\boxed{ 3^{n} } = (2+1)^{n} = \sum_{k=0}^{n} \binom{n}{k} 2^{k}1^{n-k} = \sum_{k=0}^{n} \binom{n}{k}2^{k} \\
\\
\text{Or:} \\
\text{We first choose some } k \in [0, n] \\
\text{Then we choose a subset of } [n] \text{ of size } k \\
\text{And then choose a subset of that subset} \\
\text{This is equal to first choosing some subset } B \text{ of } [n] \\
\text{And then choosing a subset } C \text{ of } B \\
\text{This is basically the same as assigning each element in } [n] \text{ one of three states: } B, C \text{ or none} \\
\implies \text{There are } 3^{n} \text{ ways to do this} \\
}
$$
---
$$
\displaylines{
\text{Let } 0 \leq m \leq l \leq n \\
\text{Calculate: } \binom{n}{m} - \binom{n}{m+1} + \dots \pm \binom{n}{l} \\
\\
\text{Solution:} \\
\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k} \\
\binom{n}{m} - \binom{n}{m+1} = \binom{n-1}{m-1} + \binom{n-1}{m} - \binom{n-1}{m} - \binom{n-1}{m+1} \\
\binom{n}{m+2} - \binom{n}{m+3} = \binom{n-1}{m+1} + \binom{n-1}{m+2} - \binom{n-1}{m+2} - \binom{n-1}{m+3} \\
\implies \binom{n}{m} - \binom{n}{m+1} + \dots \pm \binom{n}{l} = \boxed{ \binom{n-1}{m-1} \pm \binom{n-1}{l} } \\
}
$$
---
