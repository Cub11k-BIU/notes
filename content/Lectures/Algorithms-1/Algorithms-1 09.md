---
{"publish":true,"created":"06/01/26, 13:06","modified":"2026-01-06T15:25:55.997+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

# Random/randomized algorithms
An algorithm is a "black box" that receives a collection of bits (input) and yields a collection of bits (output)
In addition to that, a randomized algorithm receives an infinite random string of bits that is used to make randomized decisions (random, $r$)
In deterministic case, for the given input, the algorithm will always yield the same output by executing the exact same sequence of operations.

| ${_{\displaystyle \text{Runtime}}}\Big\\{^{\displaystyle \text{Correctness}}}$ | Deterministic            | Random Variable          |
| ------------------------------------------------------------------------------ | ------------------------ | ------------------------ |
| Deterministic                                                                  | Deterministic algorithms | Monte-Carlo algorithms   |
| Random Variable                                                                | Las Vegas algorithms     | Atlantic City algorithms |
## Las Vegas (LV) algorithms
$$
\displaylines{
T(n) = \begin{cases}
O(n\log n) & p \\
O(2^{n}) & 1-p \\
\end{cases} \\
p \text{ is called "high" if the probability of the worst-case is polynomially small} \\
\text{e.g. } p = 1 - \frac{1}{n^{C}} \\
}
$$
## Monte Carlo (MC) algorithms
$$
\displaylines{
\text{Correctness of the algorithm is dependant on } r - \text{random string} \\
}
$$
## Verifying BMM
### Input
$$
\displaylines{
A, B, C \in \mathbb{B}^{n \times n}
}
$$
### Output
$$
\displaylines{
A \cdot B \equiv C \pmod{2} \\
}
$$
### Naive solution
$$
\displaylines{
\text{Compute } A \cdot B \text{ and compare to } C \\
\text{Runtime is } O(n^{\omega}) \\
}
$$
### Monte-Carlo algorithm
$$
\displaylines{
\text{We will provide a randomized algorithm running in } O(n^{2}\log n) \\
\text{and correct with probability } 1 - \frac{1}{n^{\alpha}} \text{ for some } \alpha \geq 1 \\
}
$$
Let us first try to solve this problem in $O(n^{2})$ with probability of at least $\frac{1}{2}$
$$
\displaylines{
\text{Let } v \in \mathbb{B}^{n} \\
\text{Calculate } v_{B} = Bv \\
\text{Calculate } v_{AB} = Av_{B} = ABv \\
\text{Calculate } v_{C} = Cv \\
\text{Compare } v_{C} \text{ with } v_{AB} \\
\begin{align}
& \text{Verify-BMM-Basic(A, B, C)}: \\
1. & \quad v \leftarrow (v_{1}, v_{2}, \dots, v_{n}) \in \mathbb{B}^{n} \\
2. & \quad v_{B} \leftarrow B \cdot v \\
3. & \quad v_{AB} \leftarrow A \cdot v_{b} \\
4. & \quad v_{C} \leftarrow C \cdot v \\
5. & \quad \text{return } v_{C} == v_{AB} \\
\end{align} \\
\boxed{ \text{This algorithm clearly runs in } O(n^{2}) } \\
\\
v_{C} \neq v_{AB} \implies C \neq AB \implies \text{There can be no false negatives} \\
\text{If the vectors are equal, there is a probability that } C = AB \\
\text{What is that probability?} \\
v_{C} = v_{AB} \iff Cv = ABv \iff (C-AB)v = 0 \iff v \in N(C - AB) \\
\text{Let } C \neq AB \\
\text{Let } D = C - AB \neq 0 \\
\implies \exists i, j \in [1, n]: D_{ij} = 1 \\
\text{Let } v \in \mathbb{B}^{n}: Dv = 0 \\
\forall k \in [1, n]: (Dv)_{k} = \sum_{l=1}^{n} D_{kl}v_{l} \\
\text{Let } w \in \mathbb{B}^{n}: \forall k \in [1, n]: w_{k} = \begin{cases}
1 & k = j \\
0 & \text{otherwise} \\
\end{cases} \\
D(v+w) = Dv+Dw = Dw \\
\implies (D(v+w))_{i} = (Dw)_{i} = 1 \\
\implies \text{For each vector } v \text{ such that } Dv = 0 \text{ there exists at least one vector} \\
v' = v+w \text{ such that } Dv' \neq 0 \\
\text{Further, } v_{1} \neq v_{2}: Dv_{1} = Dv_{2} = 0 \implies v_{1} + w \neq v_{2} + w \\
\implies \forall u \in \mathbb{B}^{n}: P(Du = 0) \leq \frac{1}{2} \\
\implies \text{The algorithm returns a false positive with the probability of at most } \frac{1}{2} \\
\implies \boxed{ \text{The algorithm returns a correct answer with probability of at least } \frac{1}{2} } \\
}
$$
An improvement of this algorithm (an amplification of probability) would be to simply run this algorithm multiple times, independently (why?)
How many times is enough?
$$
\displaylines{
\text{Let us run the algorithm } k \text{ times} \\
P(\text{false positive}) \leq \frac{1}{2^{k}} \\
\frac{1}{2^{k}} = \frac{1}{n^{\alpha}} \implies k = \alpha \log n \\
\text{This gives as the following algorithm:} \\
\begin{align}
& \text{Verify-BMM}(A, B, C): \\
1. & \quad k \leftarrow \alpha \log n \\
2. & \quad \text{for } i \in [1, k]: \\
3. & \qquad \text{if Verify-BMM-Basic(A, B, C)} == \text{"false"}: \\
4. & \qquad \quad \text{return "false"} \\
5. & \quad \text{return "true"} \\ 
\end{align} \\
\text{The runtime of this algorithm is then } O(n^{2}\log n) \\
}
$$
## Paranoid QuickSort (Las Vegas)
Let us augment the classic QuickSort to always choose a "good" pivot, meaning that $\abs{L}, \abs{G} \geq \frac{n}{4}$
What is the expected runtime of this algorithm?
$$
\displaylines{
E[T(n)] = E[T(\abs{L}) + T(\abs{G}) + \text{time to choose a "good" pivot}] = \\
= E[T(\abs{L})] + E[T(\abs{G})] + E[\text{times the pivot is chosen}] \cdot O(n) \\
E[\text{times the pivot is chosen}] \cdot O(n) = E\left[ Geom\left( \frac{1}{2} \right) \right] \cdot O(n) = 2 \cdot O(n) = O(n) \\
\implies E[T(n)] = E[T(n - \abs{G})] + E[T(\abs{G})] + O(n) \\
\text{Let } T'(n) = E[T(n)] \\
\text{Let } x = \abs{G} \\
T'(n) = T'(n-x) + T'(x) + O(n) \\
x \leq \frac{3n}{4} \implies T'(n) = O(n\log n) \\
\implies \boxed{ E[T(n)] = O(n\log n) } \\
}
$$
### Expected runtime of any randomized QuickSort
$$
\displaylines{
\text{Let } y_{1}, \dots, y_{n} \text{ be the output} \\
\text{Let } x_{ij} = \begin{cases}
1 & y_{i} \text{ and } y_{j} \text{ were compared} \\
0 & \text{otherwise} \\
\end{cases} \\
\implies E[T(n)] = E\left[ \sum_{i=1}^{n-1} \sum_{j=i+1}^{n} x_{ij} \right] = \sum_{i=1}^{n-1} \sum_{j=i+1}^{n}E\left[ x_{ij} \right] \\
E[x_{ij}] = P(x_{ij} = 1) \\
P(x_{ij} = 1) = P(\text{first pivot selected from } y_{i}, y_{i+1}, \dots, y_{j} \text{ is either } y_{i} \text{ or } y_{j}) = \\
= \frac{2}{j-i+1} \\
\implies E[T(n)] = \sum_{i=1}^{n-1} \sum_{j=i+1}^{n} \frac{2}{j-i+1} = 2\sum_{i=1}^{n-1} \left( \frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{n-i+1} \right) = \\
= 2\sum_{i=1}^{n-1} \sum_{k=1}^{n-i+1} \frac{1}{k} = O\lrp{\sum_{i=1}^{n-1} \ln(n-i+1)} = O(\log(n!)) = O(n\log n) \\
}
$$
## Bucket sort (Atlantic city)
### Input
$$
\displaylines{
\text{Array } A \\
\forall i \in [1, n]: A_{i} \in [0, 1) \subseteq \mathbb{R} \text{ is a uniformly random number} \\
}
$$
### Output
$$
\displaylines{
\text{Sorted } A \\
}
$$
### Atlantic city algorithm
$$
\displaylines{
\text{Let } \forall i \in [1, n]: B_{i} = \left[ \frac{i-1}{n}, \frac{i}{n} \right) \\
\text{First, put all elements into corresponding buckets} \\
\text{Then, sort each bucket using insertion sort} \\
\text{Finally, concatenate all buckets into a sorted array} \\
\\
\text{Let } n_{i} \text{ be the number of elements in bucket } B_{i} \\
\text{Sorting } B_{i} \text{ is done in } O(n_{i}^{2}) \\
\text{Total cost of the algorithm is } O\left( n + \sum_{i=1}^{n} n_{i}^{2} \right) \\
E\left[ O\left( n + \sum_{i=1}^{n} n_{i}^{2} \right) \right] = O\left( n + \sum_{i=1}^{n} E[n_{i}^{2}] \right) \\
\text{Let } i \in [1, n] \\
P(n_{i} = n) = \left( \frac{1}{n} \right)^{n} \\
P(n_{i} = 0) = \left( 1 - \frac{1}{n} \right)^{n} \leq \frac{1}{e} \\
n_{i} \sim Bin\left( n, \frac{1}{n} \right) \implies E[n_{i}] = 1 \\
E[n_{i}^{2}] = E[n_{i}]^{2} + Var(n_{i}) = 1 + 1 - \frac{1}{n} = 2 - \frac{1}{n} \\
\implies E[T(n)] = O\left( n + \sum_{i=1}^{n} \left( 2-\frac{1}{n} \right) \right) = O(n+2n-1) = O(n) \\
}
$$
