---
{"publish":true,"created":"11/02/26, 17:04","modified":"2026-03-24T14:58:08.278+02:00","tags":["Academia","#Practice","Algorithms-1"],"cssclasses":""}
---

## Coupon collector problem
Let there be a set of $n$ different types of coupons. The goal is to collect all of them.
Assuming that each type is equally likely to appear when acquired, what is the expected number of coupons required to collect all of them?
$$
\displaylines{
\text{Let } X = \text{number of coupons acquired to collect all } n \text{ types} \\
\text{Let } \forall i \in [1, n]: X_{i} = \text{number of coupons acquired to collect } i\text{-th type} \\
\text{when $i-1$ types have already been collected} \\
\implies X = \sum_{i=1}^{n} X_{i} \\
\text{What is the probability of collecting a new type of coupon} \\
\text{when } i-1 \text{ types are already collected?} \\
p_{i} = \frac{n-i+1}{n} \\
\forall i \in [1, n]: X_{i} \text{ is a geomteric random variable} \implies E[X_{i}] = \frac{1}{p_{i}} = \frac{n}{n-i+1} \\
\\
\implies E[X] = \sum_{i=1}^{n} E[X_{i}] = \sum_{i=1}^{n} \frac{n}{n-i+1} = n \sum_{i=1}^{n} \frac{1}{i} = nH_{n} \approx n\ln n = O(n\ln n) \\
\\
\text{Probability that type } i \text{ is collected when a coupon is acquired is } \frac{1}{n} \\
\implies \text{Probability that it is not collected with this coupon is } 1 - \frac{1}{n} \\
\text{After } kn\ln n \text{ coupons, the probability that type } i \text{ is not acquired is} \\
\left( 1 - \frac{1}{n} \right)^{kn\ln n} \leq \frac{1}{e^{k\ln n}} = \frac{1}{n^{k}} \\
\text{The probability that we did not collect all types after } k\ln n \text{ coupons is then:} \\
P(X > kn\ln n) \leq \sum_{i=1}^{n} P(X_{i} > kn\ln n) = n \cdot \frac{1}{n^{k}} = \frac{1}{n^{k-1}} \\
\text{Given } k = c + 1 \text{ the probability to collect all types is } \left( 1 - \frac{1}{n^{c}} \right) \\
\text{which is relatively high} \\
}
$$
## Hitting set
$$
\displaylines{
\text{Let } U \text{ be a universal set of } n \text{ elements} \\
\text{Let } R < n \\
\text{Let } k < n^{c_{1}} \\
\text{Let } \forall i \in [k]: S_{i} \subseteq U \text{ and } \abs{S_{i}} \geq R \\
A \text{ is the ncalled a Hitting Set if } \forall i \in [k]: A \cap S_{i} \neq \emptyset \\
\\
\text{Finding a minimum Hitting Set is an NP-hard problem} \\
\text{Instead of solving this problem, we will solve a similar one:} \\
\text{finding a relatively small Hitting set} \\
\text{Let us prove that it is possible to find a Hitting Set of size } O\left( \frac{R}{n}\log n \right) \\
\text{with relatively high probability} \\
\\
\text{Similarly to the coupon collector problem,} \\
\text{let us choose } c_{2}\frac{R}{n}\ln n \text{ times an element from } U \\
\text{Clearly, size of the resulting set is } O\left( \frac{R}{n}\log n \right) \\
\text{Let } x \text{ be an element we chose at some point} \\
\forall i \in [k]: P(x \in S_{i}) = \frac{\abs{S_{i}}}{\abs{U}} \geq \frac{R}{n} \\
\implies \text{Probability that after } c_{2} \frac{R}{n}\log n \text{ choices there is no element from } S_{i} \text{ is} \\
P(A \cap S_{i} = \emptyset) \leq \left( 1-\frac{R}{n} \right)^{c_{2} \frac{R}{n}\ln n} \leq \frac{1}{e^{c_{2}\ln n}} = \frac{1}{n^{c_{2}}} \\
\text{Let } c_{2} = c + c_{1} \\
k \leq n^{c_{1}} \implies P(A \text{ is not a Hitting Set}) \leq \sum_{i=1}^{k} \frac{1}{n^{c_{2}}} = \frac{k}{n^{c_{2}}} \leq \frac{1}{n^{c_{2}-c_{1}}} = \frac{1}{n^{c}} \\
\implies P(A \text{ is a Hitting Set}) \geq 1 - \frac{1}{n^{c}} \\
}
$$
## Uniform shuffling
The purpose of uniform shuffling is to take elements of some collection (array) and shuffle them randomly to avoid worst case orderings.

The first algorithm to achieve this is as follows:
$$
\displaylines{
\begin{align}
 & ALG_{1}(A): \\
1. & \quad n \leftarrow length(A) \\
2. & \quad P \leftarrow \text{Array of length } n \\
3. & \quad \text{for } i \in [1, n]: \\
4. & \qquad P[i] \leftarrow \text{Random}(1, n^{3}) \\
5. & \quad \text{Sort } A \text{ by keys } P \\
\end{align} \\
\\
\text{What is the probability that there exists a pair } P[i] = P[j]? \\
\text{Let } A = \text{there exists a collision } P[i] = P[j] \\
\text{Let } A_{ij} = \text{event of } P[i] = P[j] \\
P(A_{ij}) = \frac{1}{n^{3}} \\
P(A) \leq \sum_{i,j \in [n]} P(A_{ij}) = \frac{\binom{n}{2}}{n^{3}} = \frac{n(n+1)}{2n^{3}} \leq \frac{1}{n} \\
\text{So the probability that some permutation can be returned is relatively high, } 1 - \frac{1}{n} \\
\text{And the probability of each permutation is } \frac{1}{n!}, \text{ making this a uniform shuffle} \\
\\
\text{Runtime of this algorithm is } O(n\log n) \text{ in general case and } O(n) \text{ if using Radix sort} \\
}
$$
The second algorithm relies on a different approach:
$$
\displaylines{
\begin{align}
 & ALG_{2}(A): \\
1. & \quad n \leftarrow length(A) \\
2. & \quad \text{for } i \in [1, n]: \\
3. & \qquad A[i] \leftrightarrow A[\text{Random}(i, n)] \\
\end{align} \\
\text{This algorithm iteratively swaps elements with a random element} \\
\text{from the right portion of the array} \\
\\
\text{Proof of correctness is by induction} \\
\text{Probability that after } i \text{-th iteration a subpermutation } \pi[1, i] \text{ is returned} \\
\text{is } \frac{(n-i+1)!}{n!} \\
\text{After } n \text{ iterations then, the probability that permutation } \pi \text{ is returned is } \frac{1}{n!} \\
\\
\text{Runtime of this algorithm is } O(n) \\
}
$$
