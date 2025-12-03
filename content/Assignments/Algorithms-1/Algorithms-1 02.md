---
{"publish":true,"created":"10/11/25, 08:11","modified":"2025-12-03T16:48:07.995+02:00","tags":["Academia","Assignment","Algorithms-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Solve the Hamming distance problem between text and template for } \Sigma = \Set{ 0, 1, 2 } \\
\\
\text{Solution:} \\
\text{For each letter $\sigma$ in the alphabet, define } T_{\sigma}, t_{\sigma} \text{ be text and template} \\
\text{with all letters replaced by zeroes and all } \sigma \text{-s replaced by ones} \\
\text{Let } \sigma \in \Sigma \\
\text{Let } A_{\sigma}(x) = (T_{\sigma}[1], T_{\sigma}[2], \dots, T_{\sigma}[n]) \\
\text{Let } B_{\sigma}(x) = (t_{\sigma}[1], t_{\sigma}[2], \dots, t_{\sigma}[m]) \\
\text{Let } C_{\sigma}(x) = A_{\sigma}(x)B_{\sigma}(x) \\
\implies \forall i \in [0, n-m]: HD(t, T[i+1..i+m]) = \sum_{\sigma \in \Sigma} C_{\sigma}(x)[m + i] \\
\text{We need to multiply two polynomials of sizes } n, m, \text{ this is } O(n\log m) \\
\text{We need to perform this operation } \abs{\Sigma} \text{ times} \\
\implies T(n, m) = O(\abs{\Sigma} \cdot n\log m) \\
}
$$
# 2
$$
\displaylines{
\text{Let } \Sigma = \Set{ 1, 2, \dots, 20 } \\
\text{Let } \forall a, b \in \Sigma: HD_{3}(a, b) = \begin{cases}
0 & \abs{a-b} \leq 3 \\
\abs{a-b} & \text{otherwise} \\
\end{cases} \\
\text{Solve the Hamming distance problem between text and template for } \Sigma \text{ with } HD_{3} \\
\\
\text{Solution:} \\
\forall i \in [1, 17]: \text{Let } T_{i}, t_{i} \text{ be text and template with all letters} \\
\text{replaced by zeroes and all letters in } [i, i+3] \text{ replaced by ones} \\
\text{Let } i \in [1, 17] \\
\text{Let } A_{i}(x) = (T_{i}[1], T_{i}[2], \dots, T_{i}[n]) \\
\text{Let } B_{i}(x) = (t_{i}[1], t_{i}[2], \dots, t_{i}[m]) \\
\text{Let } C_{i}(x) = A_{i}(x)B_{i}(x) \\
\implies \forall j \in [0, n-m]: HD_{3}(t, T[j..j+m]) = \sum_{i=1}^{17} C_{i}(x)[m + j] \\
\text{We need to multiply two polynomials of sizes } n, m, \text{ this is } O(n\log m) \\
\text{We need to perform this operation } \abs{\Sigma} - 3 \text{ times} \\
\implies T(n, m) = O(\abs{\Sigma} \cdot n\log m) \\
}
$$
# 3
$$
\displaylines{
\text{Let } S \text{ be a string of length } n \text{ over alphabet } \Sigma = \Set{ 0, 1 } \\
\text{Show an algorithm for counting triplets of indices such that:} \\
\begin{eqsys}
S[i] = S[j] = S[k] = 1 \\
k - j = j - i \\
\end{eqsys} \\
\\
\text{Solution:} \\
\text{Notes: } \begin{array}{}
1. & i, k \text{ must have the same oddity} \\
2. & \text{Pair } i, k \text{ uniquely defines the triplet} \\
\end{array} \\
\text{This problem can be interpreted as counting } HD \text{ of ones only} \\
\text{between text and template where templates are } 111, 10101, 1001001, \dots \\
\text{And then for each template counting number of zero HDs} \\
T(n) = O\left( n\log\left( n!! \right) \right) = O(n^{2}\log n) \\
\text{Anything better?} \\
\text{Let } A(x) = (0,s_{1},s_{2},\dots,s_{n}) \\
B(x) = A(x) \cdot A(x) \\
a_{i} \neq 0 \implies b_{2i} = b_{2i} + 1 \\
\text{Let } i, j, k \text{ be the triplet we're looking for} \\
k - j = j - i \implies k + i = 2j, a_{i} = a_{j} = a_{k} = 1 \\
\implies b_{2j} = b_{2j} + 1 + 2 \\
\implies \text{For each triplet we're looking for, } b_{2j} \text{ will increase by } 2 \\
\implies \forall j \in [1, n]: b_{2j} \text{ is odd} \\
\forall i \in [1, 2n]: b_{i} \text{ is } \begin{cases}
\text{odd} & i \text{ is even and } a_{i} = 1 \\
\text{even} & i \text{otherwise} \\
\end{cases} \\
\implies \text{Number of triplets we're looking for is: } \\
\forall i \in [1, 2n]: \sum_{b_{i} \text{ is odd}} \frac{b_{i} - 1}{2} \\
\text{The algorithm only multiplies } A(x) \text{ by itself once, hence } O(n\log n) \\
}
$$
# 4
$$
\displaylines{
\text{Let there be a set of coins with distinct positive integer nominals } v_{1}, \dots, v_{k} \\
}
$$
## 4a
$$
\displaylines{
\text{Show an algorithm that finds all possible sums of exactly } t \text{ coins in } O(tv_{k}\log^{2}(tv_{k})) \\
\\
\text{Solution:} \\
\text{Let } p(x) = \sum_{i=0}^{v_{k}} p_{i}x^{i} \\
p_{i} = \begin{cases}
1 & \exists j \in [1, k]: i = v_{j} \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Let } q(x) = p^{2}(x) \\
q_{i} \neq 0 \implies \exists j, k : v_{j} + v_{k} = i \\
\text{Let } r(x) = p^{t}(x) \\
r_{i} \neq 0 \implies \exists v_{i_{1}}, \dots, v_{i_{t}}: \sum_{j=1}^{t} v_{i_{j}} = i \\
\implies \text{All possible sums are } \Set{ i | \exists i \in [0, tv_{k}]: r_{i} \neq 0 } \\
\text{Raising something to the power of } t \text{ can be done in } O(\log t) \text{ multiplications} \\
\text{Each multiplication takes } O(tv_{k}\log(tv_{k})) \text{ time by using } FFT \\
\implies \text{All in all, algorithm runs in } O(tv_{k}\log^{2}(tv_{k})) \\
}
$$
## 4b
$$
\displaylines{
\text{Show an algorithm that finds all possible sums of } t \text{ coins or less in } O(tv_{k}\log^{2}(tv_{k})) \\
\\
\text{Solution:} \\
\text{Let us add coin } '0' \\
\text{Let } P_{i} = \begin{cases}
1 & i = 0 \\
p_{i} & \text{otherwise} \\
\end{cases} \\
\implies P^{t}(x) \text{ contains all combinations of } t \text{ coins} \\
\text{and } t-k \text{ coins where } k \text{ is the number of } '0' \text{ coins} \\
\text{Same algorithm, same complexity} \\
}
$$
## 4c
$$
\displaylines{
\text{Given a positive integer } z \text{ find number of solutions to equation} \\
\sum_{j=1}^{t} v_{i_{j}} = z \\
\text{In } O(z \log^{2}z) \text{ time} \\
\\
\text{Solution:} \\
\text{Similarly to previous solutions, } r(x) = p^{t}(x) \implies r_{z} = \text{ number of ways to sum } z \\
\text{We will limit the polynomial degree by } z \text{ at each step} \\
\implies p^{t}(x) \text{ can then be calculated in } O(z\log ^{2} z) \\
\text{All we need after multiplying is to return } r_{z} \\
\implies \text{All in all, algorithm runs in } O(z\log ^{2}z) \\
}
$$
# 5
$$
\displaylines{
\text{Let } a_{0}, \dots, a_{n-1} \\
\text{Let } b_{0}, \dots, b_{n-1} \\
\text{Let } A_{ij} = \begin{cases}
a_{j-i} & i \leq j \\
0 & \text{otherwise} \\
\end{cases}, B_{ij} = \begin{cases}
b_{j-i} & i \leq j \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Show an algorithm for calculating } C = AB \text{ in } O(n\log n) \\
\\
\text{Solution:} \\
A,B \text{ are upper triangular} \implies C \text{ is also upper triangular} \\
\text{Let } A(x), B(x) \text{ be polynomials based on given coefficients} \\
\text{Then, } C(x) = A(x)B(x) = \sum_{i=0}^{2n-2} c_{d}x^{d} \\
\text{Note that } C_{ij} = (AB)_{ij} = \begin{cases}
c_{d} & j-i = d \geq 0 \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Correctness:} \\
C_{ij} = C_{i,i+d} = \sum_{k=1}^{n} A_{ik}B_{k,i+d} = \sum_{k=i}^{i+d} a_{k-i}b_{i+d-k} \\
C_{i+1,j+1} = C_{i+1,i+d+1} = \sum_{k=1}^{n} A_{i+1,k}B_{k,i+d+1} = \\
= \sum_{k=i+1}^{i+d+1} a_{k-i+1}b_{i+d+1-k} = \sum_{k'=i}^{i+d} a_{k-i}b_{i+d-k} = C_{ij} \\
\implies \text{All diagonals of } C \text{ are scalar} \\
\text{In addition, } \forall d \in [0, n-1]: C_{0,d} = \sum_{k=0}^{d} a_{k}b_{d-k} = c_{d} \\
\\
\text{Multiplying two polynomials of degree } n \text{ is } O(n\log n) \\
}
$$
# 6
$$
\displaylines{

}
$$