---
{"publish":true,"created":"06/01/25, 14:01","modified":"2025-11-21T21:10:14.049+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 18
# Even and Odd numbers amount #lemma 
$$
\displaylines{
\text{Let } n \in \mathbb{N} \\
E = \Set{ X \subseteq [n] | \ \lvert X \rvert \text{ is even} } \\
O = \Set{ X \subseteq [n] | \ \lvert X \rvert \text{ is odd} } \\
\text{Then } \lvert E \rvert = \lvert O \rvert \\
\\
\text{Proof:} \\
\text{How to choose a subset of even size:} \\
1. \quad \text{Choose any subset of } [n-1]. \text{ Number of ways to do it is } 2^{n-1} \\
2. \quad \text{If the size of the chosen subset is even, we are done. If it's odd, we add } n \text{ to the subset} \\
\implies \lvert E \rvert = 2^{n-1} \cdot 1 = 2^{n-1} \\
O \cap E = \emptyset \\
O \cup E = P([n]) \\
\lvert O \cup E \rvert = \lvert O \rvert + \lvert E \rvert - \lvert O \cap E \rvert \\
\implies \lvert O \rvert = \lvert P([n]) \rvert - \lvert E \rvert = 2^{n} - 2^{n-1} = 2^{n-1} \\
\implies \lvert E \rvert = \lvert O \rvert \\
}
$$
---
# Alternating binomial sum #lemma 
$$
\displaylines{
\forall n \in \mathbb{N}: \sum_{k=0}^{n} (-1)^{k} \binom{n}{k} = 0 \\
\\
\text{Proof (combinatorial):} \\
\sum_{k=0}^{n} (-1)^{k} \binom{n}{k} = \underbrace{ \sum_{k=0}^{\lfloor n/2 \rfloor } \binom{n}{2k} }_{ \text{Number of subsets of even size} } - \underbrace{ \sum_{k=1}^{\lceil n/2 \rceil } \binom{n}{2k-1} }_{ \text{Number of subsets of odd size} } = 0 \\
\text{Proof (algebraic):} \\
\forall x, y \in \mathbb{R}: x \neq 0 \neq y: (x+y)^{n} = \sum_{k=0}^{n} \binom{n}{k}x^{k}y^{n-k} \\
\text{Let } x = -1, y = 1 \\
(-1 + 1)^n = \sum_{k=0}^{n} \binom{n}{k}(-1)^{k}1^{n-k} = \sum_{k=0}^{n} \binom{n}{k}(-1)^{k} \\
\implies \sum_{k=0}^{n} (-1)^{k}\binom{n}{k} = 0 \\
}
$$
---
# Captain's identity #lemma 
$$
\displaylines{
\forall n \in \mathbb{N}: \sum_{k=0}^{n} k\binom{n}{k} = n \cdot 2^{n-1} \\
\\
\text{Proof (combinatorial):} \\
X \text{ ways how to choose a team:} \\
1. \quad \text{Choose a captain from } n \text{ players} \\
2. \quad \text{Choose a subset of left players to join the captain} \\
X = n \cdot 2^{n-1} \\
Y \text{ ways to choose a team:} \\
1. \quad \text{Choose a subset of } k \text{ players from } n \text{ players} \\
2. \quad \text{Choose one of the players in the team to be captain} \\
\implies Y = \sum_{k=0}^{n} \binom{n}{k} \cdot k \\
X = Y \implies \sum_{k=0}^{n} k\binom{n}{k} = n \cdot 2^{n-1} \\
\text{Proof (algebraic):} \\
k\binom{n}{k} = n\binom{n-1}{k-1} \\
\sum_{k=0}^{n} k\binom{n}{k} = \sum_{k=1}^{n} n\binom{n-1}{k-1} = n \sum_{k=1}^{n} \binom{n-1}{k-1} \underbrace{ = }_{ t = k - 1 } n \sum_{t=0}^{n-1} \binom{n-1}{t} = n \cdot 2^{n-1} \\
\text{Proof (calculus):} \\
\forall x, y \in \mathbb{R}: x \neq 0 \neq y: (x+y)^{n} = \sum_{k=0}^{n} \binom{n}{k}x^{k}y^{n-k} \\
\text{Let } y = 1 \\
(x+1)^{n} = \sum_{k=0}^{n} \binom{n}{k} x^{k} \\
\text{Let's differentiate both sides:} \\
n \cdot (x+1)^{n-1} = \sum_{k=0}^{n} k\binom{n}{k} x^{k-1} \\
\text{Let } x = 1 \\
n \cdot 2^{n-1} = \sum_{k=0}^{n} k\binom{n}{k} \\
}
$$
---
# Catalan numbers #definition 
## Lattice paths
$$
\displaylines{
\text{Moves right or up, how many ways there are to get from } (0, 0) \text{ to } (n, n) \\
n \text{ moves up} \\
n \text{ moves right} \\
\text{Total of } 2n \text{ moves} \\
\implies \text{Number of paths is the number of ways to choose } n \text{ steps up from } 2n \text{ steps total} \\
\implies \text{Number of paths is } \binom{2n}{n} \\
}
$$
## "Good" lattice paths
$$
\displaylines{
\text{Each step in path satisfies } x \geq y \\
\text{Any "bad" path goes through the line } y = x + 1 \\
\text{Every "bad" path can be represented as an "inversed" Lattice path from } (-1, 1) \\
\implies \text{Number of "bad" paths is } \binom{2n}{n-1} \\
\implies \text{Number of "good" paths is } \binom{2n}{n} - \binom{2n}{n-1} = \\
\frac{(2n)!}{n!n!} - \frac{(2n)!}{(n+1)!(n-1)!}= \frac{(2n)!}{n!n!} - \frac{(2n)!}{n!n!}\cdot \frac{n}{n+1} = \frac{n+1 - n}{n+1}\binom{2n}{n} = \frac{1}{n+1}\binom{2n}{n} \\
}
$$
## Catalan n-th number
$$
\displaylines{
\forall n \in \mathbb{N}: C_{n} = \frac{1}{n+1}\binom{2n}{n} \\
}
$$
## Example
$$
\displaylines{
\text{How many balanced sequences of } 2n \text{ brackets are there?} \\
\text{Balanced sequence of brackets is:} \\
1. \quad \text{For any prefix } \#_{[} \geq \#_{]} \\
2. \quad \text{For the whole sequence }\#_{[} = \#_{]} \\
\\
\text{Let } [ \text{ be a step to the right} \\
\text{Let } ] \text{ be a step up} \\
\implies \text{Number of balanced bracket sequences is a number of "good" Lattice paths} \\
\text{from } (0, 0) \text{ to } (n, n) \\
\text{Which is equal to } n\text{-th} \text{ Catalan number} \\
C_{n} = \frac{1}{n+1}\binom{2n}{n} \\
}
$$
---
