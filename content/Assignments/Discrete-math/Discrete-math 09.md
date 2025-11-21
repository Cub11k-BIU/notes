---
{"publish":true,"created":"12/01/25, 15:01","modified":"2025-11-21T21:10:02.126+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{How many even numbers with 6 different digits exist?} \\
\\
\text{Solution:} \\
1. \quad \text{Number of numbers without digit 0: } \\
4 \text{ options for the last digit and 5 places with 8 digits left: } 4 \cdot \frac{8!}{3!} \\
2. \quad \text{0 is the last digit: } \\
\text{Five places for 9 digits: } \frac{9!}{4!} \\
3. \quad \text{0 is the second, third, fourth or fifth digit, for each case:} \\
\text{Last digit has 4 options} \\
\text{Four digits left have 8 options and 4 places} \\
\implies 4 \cdot 4 \cdot \frac{8!}{4!} \\
\text{The final answer: } \boxed{4 \cdot \frac{8!}{3!} + \frac{9!}{4!} + 4 \cdot 4 \cdot \frac{8!}{4!} = 68880}
}
$$
---

# 2
$$
\displaylines{
\text{How many 7 letter words can you construct using "a, b, c, d" such that} \\
\text{letters "a" and "b" appear exactly once} \\
\\
\text{Solution:} \\
\text{Number of ways to place one "a" and one "b" in a 7 letter word is: } 7 \cdot 6 \\
\text{5 places left will be filled with "c" and "d", so it's a "without order, with repetition"} \\
2^{5} \\
\text{So the final answer is: } \\
\boxed{7 \cdot 6 \cdot 2^{5} = 42 \cdot 32 = 1344} \\
}
$$
---

# 3
$$
\displaylines{
\text{What is the sum of all 3 digit numbers that are constructed from digits "7, 5, 3, 1"} \\
\text{Each digit can appear more than once} \\
\\
\text{Solution:} \\
\text{Number of all such numbers is (without order, with repetition): } 4^{3} = 64 \\
\text{If we fix any given digit, then the number of options is } 4^{2} = 16 \\
\implies \begin{array}{}
\text{Sum of hundreds is } (7+5+3+1) \cdot 16 \cdot 100 = 25600 \\
\text{Sum of tens is } (7+5+3+1) \cdot 16 \cdot 10 = 2560 \\
\text{Sum of ones is } (7+5+3+1) \cdot 16 \cdot 1 = 256 \\
\end{array} \\
\implies \text{Sum of all such numbers is:} \\
\boxed{25600+2560+256 = 28416} \\
}
$$
---

# 4
$$
\displaylines{
\text{Let } A = \Set{ 1, 2, \dots, 10 }, B = \Set{ a, b, c, d, e , f } \\
}
$$
## 4a
$$
\displaylines{
\text{What is the size of } C = \Set{ g | g: A \to B } \\
\text{Solution:} \\
C = B^{A} \implies \lvert \boxed{C \rvert = \lvert B^{A} \rvert = 6^{10}} \\
}
$$
## 4b
$$
\displaylines{
\text{What is the size of } D = \Set{ h | h: B \to A } \\
\text{Solution:} \\
D = A^{B} \implies \boxed{\lvert D \rvert = \lvert A^{B} \rvert = 10^{6}} \\
}
$$
## 4c
$$
\displaylines{
\text{What is the size of } E = \Set{ g | g: A \to B, g \text{ is injective} } \\
\text{Solution:} \\
\lvert A \rvert > \lvert B \rvert \implies \boxed{\text{Number of injective functions from } A \text{ to } B \text{ is zero}} \\
}
$$
## 4d
$$
\displaylines{
\displaylines{
\text{What is the size of } F = \Set{ h | h: B \to A, h \text{ is injective} } \\
\text{Solution:} \\
\text{We have 6 sources and 10 images} \\
\text{We need to choose exactly 6 different images in order for the function to be injective} \\
\text{This is "with order, without repetition" formula which is } \frac{n!}{(n-k)!} \\
\implies \text{The final answer is } \boxed{ \frac{10!}{(10-6)!} = \frac{10!}{4!} } \\
}
}
$$
---

# 5
$$
\displaylines{
\text{Let } A \text{ be a set of } n \text{ elements} \\
}
$$
## 5a
$$
\displaylines{
\text{How many relations there are on A?} \\
\text{Solution:} \\
\lvert A \times A \rvert = n^{2} \\
\text{Relation is a subset of } A \times A \\
\text{Number of relations is a number of ways to choose a subset of } A \times A \\
\implies \boxed{\text{Number of relations is equal to } \lvert P(A \times A) \rvert = 2^{n^{2}}} \\
}
$$
## 5b
$$
\displaylines{
\text{How many reflexive relations there are on A?} \\
\text{Solution:} \\
\text{Reflexive relations are supersets of } Id_{A} \\
\text{Number of pairs in } Id_{A} \text{ is } n \\
\implies \text{Number of reflexive relations is a number of ways to choose a subset of} \\
A \times A \setminus Id_{A} \\
\text{Which is } \boxed{\lvert P(A \times A \setminus Id_{A}) \rvert = 2^{\lvert A \times A \setminus Id_{A} \rvert } = 2^{n^{2}-n}} \\
}
$$
## 5c
$$
\displaylines{
\text{How many symmetric relations there are on A?} \\
\text{Solution:} \\
\text{Number of pairs with equal elements is } n \\
\text{Number of pairs with different elements is } n(n-1) \\
\text{For each pair with different elements we will automatically choose it's symmetric one} \\
\implies \text{Number of symmetric pair choices is } \frac{n(n-1)}{2} \\
\implies \text{Number of pairs to choose from is } \frac{n(n-1)}{2} + n = \frac{n(n+1)}{2} \\
\implies \boxed{\text{Number of symmetric relations on } A \text{ is } 2^{n(n+1)/2}} \\
}
$$
## 5d
$$
\displaylines{
\text{How many total order relations there are on A?} \\
\text{Solution:} \\
\text{Let } R \text{ be a total order relation on } A \\
\text{Let us construct a "sorted" chain of elements of A} \\
\text{For each } i \in [1, n]: a_{i} \in A: \\
1. \quad \text{If chain is empty, place } a_{i} \text{ anywhere} \\
2. \quad \text{If } a_{i} R \text{ "the leftmost element of the chain"}, \text{ then place } a_{i} \text{ to the left e.g. } a_{i} < a_{j} < \dots \\
3. \forall j \in [1, n]: \text{If } a_{i} R a_{j} - \text{continue, otherwise place } a_{i} \text{ to the right of } a_{j} \\
\text{e.g. } \dots < a_{j} < a_{i} < \dots \\
\text{This will result in a unique "sorted" chain of length $n$: } a_{i} < a_{j} < a_{k} \dots < a_{l} \\
\text{Number of such ordered chains is a "with order, without repetition", which is } n! \\
\implies \boxed{\text{Number of total order relations on } A \text{ is } n!} \\
}
$$
---

# 6
$$
\displaylines{
\text{2 classes went to a school trip. With them went 6 mothers and 8 fathers.} \\
}
$$
## 6a
$$
\displaylines{
\text{How many ways there are to choose 5 parents responsible for food,} \\
\text{such that they are 3 mothers and 2 fathers?} \\
\text{Solution:} \\
\text{We need to choose 3 out of 6 mothers and 2 out of 8 fathers} \\
\text{which is } \boxed{\binom{6}{3} \cdot \binom{8}{2}} \\
}
$$
## 6b
$$
\displaylines{
\text{How many ways there are to choose 3 parents to be medics?} \\
\text{Solution:} \\
\text{Choosing 3 different parents from the total of 14 parents is: } \boxed{\frac{14!}{(14-3)!} = \frac{14!}{11!}} \\
}
$$
## 6c
$$
\displaylines{
\text{How many ways there are to choose two groups of 7 parents,} \\
\text{such that there is at least one mother in each group?} \\
\text{Solution:} \\
\text{Number of ways to choose two groups is: } \binom{14}{7} \\
\text{Number of ways to choose a group that has no mothers is} \\
\text{the number of ways to choose 7 out of 8 fathers: } \binom{8}{7} \\
\text{Groups of parents are different, so we will count this number twice} \\
\text{Number of ways to choose two groups such that there is at least one mother is:} \\
\boxed{\binom{14}{7} - 2 \cdot \binom{8}{7} = \binom{14}{7} - 2 \cdot 8} \\
}
$$
---

# 7a
$$
\displaylines{
\text{How many ways there are to sit 2 women and 4 men on a bench,} \\
\text{such that 2 women sit next to each other?} \\
\text{Solution:} \\
\text{Let us count 2 women as one "option"} \\
\text{Then we have to choose a sit for each of 5 options: } 5! \\
\text{Number of ways to sit 2 women is: } 2! \\
\text{So the final answer is: } \boxed{5! \cdot 2! = 120 \cdot 2 = 240} \\
}
$$
# 7b
$$
\displaylines{
\text{How many ways there are to sit 2 women and 4 men on a bench,} \\
\text{such that 4 men sit next to each other?} \\
\text{Solution:} \\
\text{Let us count 4 men as one "option:} \\
\text{Then we have to choose a sit for each of 3 options: } 3! \\
\text{Number of ways to sit 4 men is: } 4! \\
\text{So the final answer is: } \boxed{3! \cdot 4! = 6 \cdot 24 = 144} \\
}
$$
---
