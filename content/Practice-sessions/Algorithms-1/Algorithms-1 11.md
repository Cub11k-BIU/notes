---
{"publish":true,"created":"11/02/26, 18:26","modified":"2026-02-12T10:34:27.806+02:00","tags":["Academia","#Practice","Algorithms-1"],"cssclasses":""}
---

## Randomized skip-list
A randomized skip-list is a data structure that supports the following operations
- Adding an element to the list
- Searching for an element in the list
- Removing an existing element from the list

All operations are expected to be executed in $O(\log n)$ time or are executed in $O(\log n)$ with a relatively high probability.
Space complexity is expected to be $O(n)$ where $n$ is the number of elements that the list contains.
- The data structure is built of layers or levels, $L_{0}, L_{1}, L_{2}, \dots$
- Each level is a sorted doubly-linked list that, in addition to the actual elements, contains $-\infty, +\infty$ to check if an element is not present when searching
- $L_{0}$ contains all elements in the list and $L_{0} \supseteq L_{1} \supseteq L_{2} \supseteq \dots$
- In addition, each element in the list $L_{i}$ contains a pointer to its copy in the $L_{i-1}$, except for $L_{0}$
#### Adding an element
- Add an element to $L_{0}$, maintaining sorted order (using search)
- Flip a coin, if `heads` then the element is copied to the next level
- Repeat coin flips and "promotions" until `tails`
#### Searching for an element
- Search begins at the highest level $L_{k}$ on its left end, searching for $x$
- Linear search is done until the largest $y \leq x$
	- If $y = x$ then we found the element
	- Otherwise, continue from $y$ on the level $L_{k-1}$
- Best case scenario is $x \in L_{k}$
- Worst case scenario is $x \in L_{0}, x \not\in L_{1}$
#### Removing an element
- First search for an element
- Then remove it from all levels
#### Analysis of the data structure
$$
\displaylines{
\text{Let the height of an element be } h: U \to \mathbb{N} \\
\forall x \in L_{0}: h(x) = \max_{i}\lrc{x \in L_{i}} \\
\text{Height of the skip-list is then } h_{SL} = \max_{x \in L_{0}}\lrc{h(x)} \\
\\
\text{First, let us calculate the expected height of each element} \\
\text{Height of each element } h(x) \text{ is a geometric variable with } p = \frac{1}{2} \\
\implies E[h(x)] = \frac{1}{p} = 2 \\
\\
\text{What is the probability } P(h_{SL} \geq h) ? \\
\forall x \in L_{0}: P(h(x) \geq h) = \frac{1}{2^{h}} \\
\implies P(h_{SL} \geq h) = P\lrp{\bigcup_{x \in L_{0}} h(x) \geq h} \leq \sum_{x \in L_{0}} P(h(x) \geq h) = n \cdot \frac{1}{2^{h}} \\
\\
\text{Given } h = (c + 1) \log n \\
P(h_{SL} \geq (c + 1)\log n) \leq n \cdot \frac{1}{2^{(c+1)\log n}} = \frac{1}{n^{c}} \\
\implies P(h_{SL} = O(\log n)) \geq 1 - \frac{1}{n^{c}} \\
\\
\text{What is the expected number of elements in the skip-list?} \\
\forall i \in [1, k]: E[\abs{L_{i}}] = E\left[ \sum_{i=1}^{\abs{L_{i-1}}} \frac{1}{2} \right] = \frac{1}{2}E[\abs{L_{i-1}}] \\
\abs{L_{0}} = n \implies \sum_{i=0}^{\infty} E[\abs{L_{i}}] = n\sum_{i=0}^{\infty} \frac{1}{2^{i}} = 2n \in \Theta(n) \\
}
$$
#### Runtime of operations
##### Search
$$
\displaylines{
\text{What are the operations performed during search?} \\
\text{Steps to the right and steps to the lower level} \\
\text{Let us consider the sequence of operations in reverse,} \\
\text{starting from the element we're looking for and going left/up} \\
\text{Step up is done whenever possible, that is when element is present in } L_{i+1} \\
\text{Step left is done otherwise } \\
\text{Number of steps up is bounded by the height of the skip-list, which is } O(\log n) \\
\text{Number of steps left is bounded by the number of times} \\
\text{the element was not promoted to next level} \\
\text{Let us consider } 10c\log n \text{ coin flips} \\
\text{What is the probability that number of heads is at most } c\log n? \\
\text{This is equivalent to there being at least } 9c\log n \text{ tails} \\
\text{Which is at most } \frac{\binom{10c\log n}{9c\log n}}{2^{9c\log n}} = \binom{10c\log n}{c\log n} \frac{1}{2^{9c\log n}} \\
\lrp{\frac{n}{k}}^{k} \leq \binom{n}{k} \leq \lrp{e \frac{n}{k}}^{k} \\
\implies P(\#\text{heads} \leq c\log n) \leq \binom{10c\log n}{c\log n} \frac{1}{2^{9c\log n}} \leq \frac{(10e)^{c\log n}}{2^{9c\log n}} = \left( \frac{10e}{2^{9}} \right)^{c\log n} \leq \\
\leq \lrp{\frac{28}{512}}^{c\log n} < \frac{1}{2^{c\log n}} = \frac{1}{n^{c}} \\
\\
\text{This in turn means that, with relatively high probability,} \\
\text{at least } c\log n \text{ heads were flipped and thus at most } 10c\log n \text{ operations} \\
\text{can be performed during the search} \\
}
$$
Let us now prove that search is performed in $O(\log n)$ time with relatively high probability
$$
\displaylines{
\text{Let } A = \text{height of the skip-list is at most } c\log n \\
\text{Let } B = \text{number of steps up in the sequence of} \\ 10(c+2)\log n \text{ operations is at least } (c+2)\log n \\
\\
P((A \cap B)^{\complement}) = P(A^{\complement} \cup B^{\complement}) \leq P(A^{\complement}) + P(B^{\complement}) \leq \frac{1}{n^{c+1}} + \frac{1}{n^{c+2}} \leq \frac{2}{n^{c+1}} \leq \frac{1}{n^{c}} \\
\implies P(A \cap B) \geq 1 - \frac{1}{n^{c}} \\
\implies \text{Search is performed in } O(\log n) \text{ time with a relatively high probability} \\
}
$$
##### Adding an element
- First, search is performed in $O(\log n)$ time with relatively high probability
- Second, insert ($O(1)$) is performed in at most each level, which is, with relatively high probability, at most $O(\log n)$ levels
##### Removing an element
- First, search is performed in $O(\log n)$ time with relatively high probability
- Second, deletion ($O(1)$) is performed in at most each level, which is, with relatively high probability, at most $O(\log n)$ levels
---
## Quick-Select
Quick-select is a randomized algorithm for finding $k$-th smallest element in the array of $n$ elements
$$
\displaylines{
\begin{align}
 & \text{Quick-Select}(A[1\dots n], k): \\
1. & \quad p \leftarrow \text{Partition}(A, \text{Random}(1, n)) \\
2. & \quad \text{if } p == k: \\
3. & \qquad \text{return } A[p] \\
4. & \quad \text{else if } p > k: \\
5. & \qquad \text{return Quick-Select}(A[1\dots p-1], k) \\
6. & \quad \text{return Quick-Select}(A[p+1\dots n], k - p) \\
\end{align} \\
\\
\text{Partition algorithm partitions the array around pivot } x = A[i] \\
\text{All elements smaller than pivot are put to the left of it, all elements larger to the right} \\
\text{And returns the index of } x \\
}
$$
How do we analyze this algorithm?
$$
\displaylines{
\text{First, let us prove that } P\left( n_{i+1} > \frac{3}{4}n_{i} \right) \leq \frac{1}{2} \\
\text{Where } n_{i} \text{ is the size of subarray on the } i\text{-th recursion step} \\
P\left( \frac{n}{4} \leq p \leq \frac{3}{4}n \right) \geq \frac{1}{2} \\
\implies P\left( n_{i+1} > \frac{3}{4}n_{i} \right) = P\left( \left( \frac{n}{4} \leq p \leq \frac{3}{4}n \right)^{\complement} \right) \leq \frac{1}{2} \\
\\
\text{Let } X = \text{runtime of the algorithm} \\
\text{What is } E[X]? \\
\text{Let us call a recursion step good if } n_{i+1} < \frac{3n_{i}}{4} \\
\text{That is, after } j \text{ good steps } n_{j} \leq \left( \frac{3}{4} \right)^{j}n \\
\text{Let } X_{j} = \text{runtime of the algorithm from } j\text{-th good step until } (j+1)\text{-st good step} \\
\text{Let } D_{j} = \text{number of steps between } j\text{-th and } (j+1)\text{-st good steps} \\
D_{j} \text{ is a geometric variable with } p \geq \frac{1}{2} \implies E[D_{j}] = \frac{1}{p} \leq 2 \\
\implies X_{j} \leq D_{j} \cdot \left( \frac{3}{4} \right)^{j}n \\
\implies E[X] = \sum_{j} E[X_{j}] \leq \sum_{j} \left( \frac{3}{4} \right)^{j}n \cdot E[D_{j}] \leq 2n \sum_{j} \left( \frac{3}{4} \right)^{j} = O(n) \\
\\
\text{In addition, } E[n_{i+1}] \leq \frac{1}{2} \cdot \left( \frac{3}{4}n_{i} \right) + \frac{1}{2}n_{i} = \frac{7}{8}n_{i} \\
\text{And a more precise decomposition yields:} \\
E[n_{i+1}] = E[E[n_{i+1}]] \leq E\left[ \frac{3}{4}n_{i} \right] = \frac{3}{4}E[n_{i}] \\
\implies E[n_{i}] \leq \left( \frac{3}{4} \right)^{i} \cdot n \centernot\implies \text{After } \log_{\frac{3}{4}}n + 1 \text{ steps the algorithm will terminate} \\
\text{To finalize the proof we have to use Markov's inequality:} \\
P\left( n_{(c+1)\log_{\frac{3}{4}}n} > 1 \right) < E\left[ n_{(c+1)\log_{\frac{3}{4}}n} \right] \leq \lrp{\frac{3}{4}}^{(c+1)\log_{\frac{3}{4}}n} \cdot n = \frac{1}{n^{c}} \\
\\
\implies \text{With relatively high probability the algorithm will terminate after} \\
(c+1)\log_{\frac{3}{4}}n = O(\log n) \text{ recursion steps} \\
\text{Each recursion step takes } O(n) \text{ time} \\
\implies T(n) = O(n\log n) \\
}
$$
