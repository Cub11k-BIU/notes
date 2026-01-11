---
{"publish":true,"created":"23/12/25, 13:09","modified":"2025-12-23T15:23:29.142+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

# Boolean Matrix Multiplication (BMM) and Triangle Detection
$$
\displaylines{
\text{Clearly, naive matrix multiplication can be done in } O(n^{3}) \\
\text{Anything faster than that, i.e. } O(n^{\omega}) \text{ where } \exists \varepsilon > 0: \omega \leq 3 - \varepsilon \\
\text{is called Fast Matrix Multiplication - FMM} \\
}
$$
One of FMM algorithms that have reduced $\omega$ is Strassen (1969) - $\omega \leq \log_{2}7 \approx 2.81$
We have already seen it in the first assignment
$$
\displaylines{
\text{Let } AB = C \\
\implies \forall i, j: c_{ij} = \inp{R_{i}(A)}{C_{j}(B)} = \sum_{k} a_{ik}b_{kj} \\
\\
\text{We can also redefine the inner product to be something else, i.e. } c_{ij} = \min_{k} \{a_{ik} + b_{kj}\} \\
\text{And get a problem that is equivalent to solving APSP} \\
\text{Can we then solve it in } O(n^{\omega}) \text{ time?} \\
\text{Turns out no, at least not trivially,} \\
\text{because FMM relies heavily on } '+' \text{ having an inverse operation } '-', \\
\text{and we only have } \Set{ \min, + } \\
}
$$
The next question is, can we find a fast combinatorial algorithm?
- What is a combinatorial algorithm? Not well defined, but it is an algorithm that does not use techniques of FMM
- What is a fast combinatorial algorithm? Similarly to FMM, the algorithm that runs in $O(n^{3-\varepsilon})$ for some $\varepsilon > 0$. Note that it is not equivalent to sub-polynomial algorithms with runtime of $O(n^{3-o(1)})$!
## Boolean Matrix Multiplication (BMM) #definition 
$$
\displaylines{
\text{Let } A, B \text{ be boolean matrices} \\
\text{Then } AB = C \iff \forall i, j: c_{ij} = \bigvee_{k} a_{ik} \land b_{kj} \\
}
$$
Clearly, BMM seems to be computationally easier than general FMM, or at least not harder, so the CS community focused on finding a combinatorial $O(n^{3-\varepsilon})$ algorithm for solving BMM.

Existing combinatorial(!) algorithms are
- Yu (2015) - $O\left( \frac{n^{3}}{\log^{4}n} \right)$
- Abboud, Fischer, Kelley, Lovett, and Meka (2024) - $O\left( \frac{n^{3}}{2^{\sqrt[7]{ \log n }}} \right)$
Both of these are $O(n^{3-o(1)})$, not $O(n^{3-\varepsilon})$
## Non-existence of a combinatorial BMM algorithm #hypothesis
$$
\displaylines{
\text{CS community has drawn a hypothesis that there exists no} \\
\text{combinatorial BMM algorithm that runs in } O(n^{3-\varepsilon}) \\
}
$$
What does this hypothesis mean for the CS researchers?
- If the community has decided to accept such a hypothesis, it means that it is likely (but not guaranteed) that in order to disprove the hypothesis, we need to invent new algorithmic techniques and apply them to said problem. So it might be a good idea not to work on solving such problems until new algorithmic techniques are discovered.
- Hypothesized lower bounds open the option of proving conditional lower bounds for other problems, based (conditioned) on the correctness of the hypothesis.
- Often, while the problem is hard for general inputs, it is possible that the problem is easier to solve on restricted families of inputs. Moreover, solving the problem on restricted families of inputs could provide insight into how to improve the algorithms for the general case, or maybe how to prove that the hypothesis is correct (if some restricted input families turn out to be too hard).

Further on, we will use the following notation $\tilde{O}(\cdot)$ which suppresses sub-polynomial terms, i.e. $O(n^{2}\log^{3}n)$ and $O\left( \frac{n^{2}}{\log n} \right)$ are both $\tilde{O}(n^{2})$
## Triangle Detection Problem
### Input
$$
\displaylines{
G = (V, E) \text{ undirected graph} \\
}
$$
### Output
$$
\displaylines{
\text{True if } G \text{ contains a triangle, False otherwise} \\
}
$$
### Solution
$$
\displaylines{
\text{Let } M \text{ be an adjacency boolean matrix of } G \\
\text{Then, any } 1 \text{ on the diagonal of } M^{3} \text{ is clearly a triangle} \\
\implies \text{We can solve TD in } \tilde{O}(\abs{V}^{3}) \text{ time via BMM} \\
\text{Can we do it faster using a combinatorial algorithm?} \\
}
$$
### Equivalence of TD and BMM #theorem 
$$
\displaylines{
\text{If we can solve TD in } \tilde{O}(\abs{V}^{3-\varepsilon}) \text{ then we can solve BMM in } \tilde{O}(\abs{V}^{3-\varepsilon/3}) \\
\\
\text{Note that if we indeed can solve TD in } \tilde{O}(\abs{V}^{3-\varepsilon}) \text{ combinatorially} \\
\text{then the hypothesis we saw earlier is disproved} \\
\\
\text{Proof:} \\
\text{Let } ALG_{TD} \text{ be an algorithm that solves TD in } \tilde{O}(n^{3-\varepsilon}) \\
\text{We will build } ALG_{BMM} \text{ that solves BMM in } \tilde{O}(n^{3-\varepsilon/3}) \\
\text{The input is two boolean matrices } A, B \text{ of size } n \times n \\
\text{The output is } C = AB \text{ with relation to BMM} \\
\text{Let } G \text{ be a tripartite graph with patitions } I, J, K \text{ of size } n \text{ each} \\
\text{Let } E_{IJ} = \Set{ \Set{ i, j } \mid a_{ij} = 1 } \\
\text{Let } E_{JK} = \Set{ \Set{ i, j } \mid b_{ij} = 1 } \\
\text{Let } E_{KI} = \Set{ \Set{ i, j } \mid i,j \in [1, n] } \\
\text{Let } E = E_{IJ} \cup E_{JK} \cup E_{KI} \\
\text{Note that } \abs{V} = 3n \text{ and } \abs{E} = O(n^{2}) + O(n^{2}) + n^{2} = \Theta(n^{2}) \\
\\
\text{Let us prove that } i \in I, k \in K: \Set{ i, k } \text{ is a part of a triangle} \iff c_{ik} = 1 \\
\Set{ i, k } \text{ is a part of a triangle} \iff \exists j: \Set{ i, j }, \Set{ j, k } \in E \\
\iff \exists j : a_{ij} = 1, b_{jk} = 1 \iff c_{ik} = 1 \\
ALG_{BMM} \text{ will then be defined as following:} \\
\begin{align}
& ALG_{BMM}(A, B): \\
1. & \quad C \leftarrow 0^{n \times n} \\
2. & \quad G \leftarrow Build-G(A, B) \\
3. & \quad \text{while } \exists (i,j,k) \in I \times J \times K \text{ triangle}: \\
4. & \quad \quad c_{ik} = 1 \\
5. & \quad \quad E \leftarrow E \setminus \Set{ i, k } \\
6. & \quad \text{return } C \\
\end{align} \\
}
$$
This algorithms has a couple of problems
- $ALG_{TD}$ doesn't locate triangles, it detects their existence(!)
- Worst-case runtime is: $\Omega(n^{2})$ iterations of filling $c_{ik} = 1$ and each iteration is at least $\Omega(n^{2})$ - in total $\Omega(n^{4})$
$$
\displaylines{
\text{Let us first reduce the runtime} \\
\text{In order to reduce the runtime, we will divide each partition } I, J, K \text{ into } t \text{ parts} \\
\text{i.e. } I \to I_{1}, \dots, I_{t} \text{ each of size } \frac{n}{t} \\
\text{Instead of looking for triangles in the whole graph,} \\
\text{we will look for them in each of the triplets } (I_{x}, J_{y}, K_{z}) \\
\\
\text{Proof of correctness:} \\
\text{Let } i \in I, k \in K: \Set{ i, k } \text{ is a part of a triangle in } G \\
\text{Let triplet } (I_{x}, J_{y}, K_{z}) \text{ be considered such that } i \in I_{x}, j \in J_{y}, k \in K_{z} \\
\text{Case 1. } \Set{ i, k } \text{ has already been considered in one of triangles with } j \in J_{y'}: y' \neq y \\
\implies \Set{ i, k } \text{ has already been removed from the graph and } c_{ik} = 1 \\
\text{Case 2. } \Set{ i, k } \text{ hasn't been considered yet} \\
\implies \text{We set } c_{ik} = 1 \text{ and remove } \Set{ i, k } \text{ from the graph} \\
\text{Note that if the desired output is } c_{ik} = 0 \text{ then } \Set{ i, k } \text{ is not a part of any triangle in } G \\
\\
\text{Runtime complexity:} \\
\text{We have to calculate how many times } ALG_{TD} \text{ is called on graphs with } \frac{3n}{t} \text{ vetices} \\
\text{There are at most } n^{2} \text{ trangles found and } c_{ik} \text{ set to } 1 \\
\text{There are } t^{3} \text{ triplets considered that will fail (have no triangle) once}  \\
\implies ALG_{TD} \text{ is called at most } n^{2} + t^{3} \text{ times} \\
\implies \text{Runtime complexity is } (n^{2}+t^{3}) \cdot \tilde{O}\left( \left( \frac{3n}{t} \right)^{3-\varepsilon} \right) \\
\text{This runtime is minimized when } t = n^{2/3} \\
\implies \text{Runtime complexity is } \tilde{O}(n^{3-\varepsilon/3}) \\
}
$$
Now to the second problem, finding the triangle instead of just detecting it!
$$
\displaylines{
\text{Let } T(n) = \Omega(n) \text{ be a non-decreasing function} \\
\text{Let } ALG_{TD} \text{ run in } T(\abs{V}) \text{ on graph } G = (V, E) \\
\text{Then, } ALG_{TF} \text{ runs in } O(T(\abs{V})) \\
\\
\text{Proof:} \\
\text{Assume } \abs{V} \text{ to be a multiple of } 4 & WLOG \\
\text{Divide } V \text{ into four equal parts, } V_{1}, V_{2}, V_{3}, V_{4} \\
\forall i \in [1, 4]: \text{ run } ALG_{TD} \text{ on } V \setminus V_{i} \\
\text{Continue recursively to the subgraph } V \setminus V_{i} \text{ with a triangle} \\
T'(\abs{V}) = 4T\left( \frac{3\abs{V}}{4} \right) + T'\left( \frac{3\abs{V}}{4} \right) = T'\left( \frac{3\abs{V}}{4} \right) + O(T(\abs{V})) \\
\text{By Master's theorem, } T'(\abs{V}) = O(T(\abs{V})) \\
}
$$
### Finding triangles in sparse graphs
$$
\displaylines{
\text{Let } G = (V, E) \\
\text{Let } \tau \text{ be a parameter} \\
\forall u \in V: u \text{ is called heavy} \iff deg(u) \geq \tau \\
\text{Number of heavy vertices is at most } \frac{2\abs{E}}{\tau} \\
\text{For light vertices, we can scan all } O(deg(u)^{2}) \text{ pairs of neighbors of } u \\
\text{to test whether } u \text{ is a part of a triangle} \\
\implies \text{We can guarantee to detect a triangle containing a light vertex} \\
\text{Consider a graph $ \hat{G}$ induced by heavy vertices} \\ 
\text{Let } \hat{M} \text{ be the adjacency matrix of } \hat{G} \\
\text{We can compute } \hat{M}^{3} \text{ usign FMM and scan the diagonal for detecting triangles} \\
\text{Correctness follows immediately} \\
\text{Runtime of the first part:} \\
\sum_{u \in V \text{ is light}} deg(u)^{2} \leq \sum_{u \in V \text{ is light}} \tau \cdot deg(u) = \tau \cdot \sum_{u \in V \text{ is light}} deg(u) \leq \tau \cdot \sum_{u \in V} deg(u) = 2\tau \abs{E} \\
\text{Runtime of the second part is } O\left( \left( \frac{\abs{E}}{\tau} \right)^{\omega} \right) \\
\implies \text{Total runtime complexity is } O\lrp{\tau \abs{E} + \left( \frac{\abs{E}}{\tau} \right)^{\omega}} \\
\text{This is minimized when } \tau \abs{E} = \left( \frac{\abs{E}}{\tau} \right)^{\omega} \\
\implies \tau = \abs{E}^{\frac{\omega-1}{\omega+1}} \implies \tau \abs{E} = \abs{E}^{\frac{2\omega}{\omega+1}} \\
\implies \text{Total runtime complexity is } O\left( \abs{E}^{\frac{2\omega}{\omega+1}} \right) \\
}
$$
