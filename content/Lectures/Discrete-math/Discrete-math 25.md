---
{"publish":true,"created":"28/01/25, 14:01","modified":"2025-11-21T21:10:14.071+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 25
# Exam 2023(A)
$$
\displaylines{
\text{Prove: for any simple acyclic graph } G = (V, E) \\
\text{there is a coloring of vertices in 2 colors such that no adjacent vertices have the same color} \\
\\
\text{Proof:} \\
\text{Base case. Let } n = 1 \\
\text{We can color 1 vertex black and we are done} \\
\\
\text{Induction step. Let there be such a coloring for any graph with } n \text{ vertices} \\
\text{Let } G = (V, E) \text{ be a graph with } n+1 \text{ vertices} \\
G' \text{ is a forest} \implies \text{Any connected component of } G' \text{ is a tree} \\
\text{Case 1. All connected components each have 1 vertex} \\
\implies \text{Any vertex can be colored either black or white, there are no adjacent ones} \\
\text{Case 2. At least one connected component has 2 vertices or more} \\
\text{Any tree with } n \geq 2 \text{ vertices has at least 1 leaf} \\
\text{Let this leaf be vertex} v \text{ with one neighbor } u \\
G' = G \setminus \Set{ v } \text{ has } n \text{ vertices} \implies \text{there is such a coloring for } G' \\
\text{Let us use the coloring of } G' \text{ and let the color of } v \text{ be different from the color of } u \\
\implies \text{There is such a coloring for } G \\
\boxed{ \text{Proved by induction} } \\
}
$$
# Exam 2023(B)
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph} \\
\text{Define the complement } \overline{G} \text{ of graph } G \\
\text{To be } \overline{G} = (V, \overline{E}): \overline{E} = \Set{ \Set{ u, v } | u, v \in V, \Set{ u, v } \not\in E } \\
\text{Prove: for any simple graph with } n \geq 5 \text{ vertices either } G \text{ or } \overline{G} \text{ has a cycle} \\
\\
\text{Proof:} \\
\lvert \overline{E} \rvert = \frac{n(n-1)}{2} - \lvert E \rvert  \\
\text{Let } \lvert E \rvert  \geq n \implies \boxed{ G \text{ has a cycle} } \\
\text{Let } \lvert E \rvert  < n \implies \lvert \overline{E} \rvert > \frac{n(n-1)}{2} - n = \frac{n^{2}-n-2n}{2} = \frac{n(n-3)}{2} \\
n \geq 5 \implies \frac{n-3}{2} \geq \frac{2}{2} = 1 \\
\implies \frac{n(n-3)}{2} \geq n \implies \lvert \overline{E} \rvert > n \implies \boxed{ \overline{G} \text{ has a cycle} } \\
}
$$
# Exam 2024(A)
$$
\displaylines{
\text{Dani has 10 different fruits} \\
\text{In how many ways can he arrange them such that 3 apples (green, red, yellow)} \\
\text{are next to each other, but banana and orange are not next to each other} \\
\\
\text{Solution:} \\
\text{There are } 3! \text{ ways to arrange three apples} \\
\text{Let us treat 3 apples as 1 item} \\
\implies \text{There are } 3! \cdot 8! \text{ ways to arrange all the fruits} \\
\text{Let us subtract the number of ways to arrange the fruits such that} \\
\text{apples are next to each other and banana and orange are next to each other} \\
\text{Let us treat banana and orange as 1 item} \\
\text{There are } 3! \cdot 2! \cdot 7! \text{ ways to do so} \\
\implies \text{The final answer is: } \boxed{ 3! \cdot 8! - 3! \cdot 2! \cdot 7! } \\
}
$$
$$
\displaylines{
\text{Now Dani needs to plan 3 of his school lunches with these 10 different fruits} \\
\text{His mom allows him to take at most 5 fruits per day} \\
\\
\text{Solution:} \\
\text{Let us count the total number of options without the limit of 5:} \\
\text{Each fruit can be taken in one of three days} \\
\implies \text{the number of such options is } 3^{10} \\
\text{Let us now count the number of options where Dani took exactly } 6 \leq k \leq 10 \\
\text{ fruits in one day} \\
\text{It is } \sum_{k=6}^{10} \binom{10}{k} \cdot 2^{10-k} \\
\text{Dani can take more than 5 fruits in only one day} \\
\implies \text{The answer is: } \boxed{ 3^{10} - \binom{3}{1}\sum_{k=6}^{10} \binom{10}{k} \cdot 2^{10-k} } \\
}
$$
$$
\displaylines{
\text{Prove combinatorially: } \sum_{i=0}^{n-1} 9^{i}\binom{n-1}{i} = 10^{n-1} \\
\\
\text{Proof:} \\
\text{On the right side we are making a } (n-1)\text{-long string of decimal digits} \\
\implies 10^{n-1} \\
\text{On the left side we first choose } (n-1-i) \text{ places for digit 0 which is } \binom{n-1}{i} \\
\text{And then choose } i \text{ places for 9 digits left which is } 9^{i} \\
\implies \text{The left side is } \sum_{i=0}^{n-1} 9^{i}\binom{n-1}{i} \\
\implies \boxed{ \sum_{i=0}^{n-1} 9^{i}\binom{n-1}{i} = 10^{n-1} } \\ 
}
$$
# Exam 2024(B)
$$
\displaylines{
\text{Park has 4 stations: crafting, ice skating, water fight and science} \\
\text{The day is divided into 10 hours, each visit to the station takes 1 hour} \\
\text{After water-fight children are not allowed to do ice-skating} \\
\text{In how many ways can the child plan his day?} \\
\\
\text{Solution:} \\
\text{Case 1. There are no water-fights in the plan} \\
\implies \text{There are } 3^{10} \text{ options} \\
\text{Case 2. There is a first water-fight in the } i \text{-th position in the plan} \\
\text{There are } 3^{i-1} \text{ options before water-fight and } 3^{10-i} \text{ options after it} \\
\implies \text{number of such options is: } 3^{9} \\
\text{There are 10 options for i} \\
\implies \text{There are a total of } 10 \cdot 3^{9} \text{ such options} \\
\implies \text{The final answer is: } \boxed{ 3^{10} + 10 \cdot 3^{9} } \\
}
$$
$$
\displaylines{
\text{Prove combinatorially: } \sum_{k=0}^{n} \binom{2n+1}{k} = 2^{2n} \\
\\
\text{Proof:} \\
\text{Let us choose two disjoint groups of numbers from } [2n+1] \\
\text{This is } \sum_{k=0}^{n} \binom{2n+1}{k} \\
\text{Let us now take number 1 to be a first group} \\
\text{Let us now separate } 2n \text{ elements left into two groups:} \\
\text{Group of 1 and the other one} \\
\text{There are } 2^{2n} \text{ ways to do so} \\
\implies \boxed{ \sum_{k=0}^{n} \binom{2n+1}{k} = 2^{2n} } \\
}
$$
