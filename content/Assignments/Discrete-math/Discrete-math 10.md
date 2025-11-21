---
{"publish":true,"created":"16/01/25, 14:01","modified":"2025-11-21T21:10:02.138+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{A person wants to choose 6 cookies from a tray containing at least 6 cookies} \\
\text{of each of the
following types: chocolate chip, wheat, and peanut butter.} \\
\text{How many ways are there to choose
these cookies?} \\
\\
\text{Solution:} \\
\text{How many ways to choose one cookie is there? } 3 \\
\text{There are at least 6 cookies of each type, so the number of ways} \\
\text{doesn't change after choosing 1,2,3,4 or 5 cookies, so it is always } 3 \\
\text{Order is not important and repetitions are allowed} \\
\implies \boxed{\binom{6+3-1}{3-1} = \binom{8}{2}} \\
}
$$
---

# 2
$$
\displaylines{
\text{How many ways are there to arrange number $\Set{ 1, 2, \dots, 9 }$ such that} \\
\text{no multiple of 3 is adjacent to another multiple of 3?} \\
\\
\text{Solution:} \\
\text{Let us first arrange numbers that are not multiples of 3 - 1, 2, 4, 5, 7, 8} \\
\text{There are six of them, which means there are } \frac{6!}{(6-6)!} = 6! \text{ ways to arrange them} \\
\text{Now we have 6 numbers arranged and we need to choose 3 positions} \\
\text{among them for multiples of 3} \\
\text{There are 7 positions: 5 between chosen numbers and 2 on the sides} \\
\text{Each two multiples of 3 will then be separated by at least 1 other number} \\
\text{Number of ways to choose 3 out of these 7 positions is } \frac{7!}{(7-3)!} = \frac{7!}{4!} \\
\text{The final answer is: } \boxed{\frac{7!6!}{4!} = 151200} \\
}
$$
---

# 3
$$
\displaylines{
\text{There are 6 identical balls and 3 distinct boxes} \\
}
$$
## 3a
$$
\displaylines{
\text{In how many ways can 6 balls be arranged in the 3 boxes?} \\
\\
\text{Solution:} \\
\text{Each box can be represented as a variable in the equation:} \\
x_{1} + x_{2} + x_{3} = 6, \forall i \in [1, 3]: x_{i} \geq 0 \\
\text{Number of different solutions is: } \boxed{\binom{6+3-1}{3-1} = \binom{8}{2}} \\
}
$$
## 3b
$$
\displaylines{
\text{In how many ways can 6 balls be arranged in the 3 boxes} \\
\text{such that each box contains at least one ball?} \\
\\
\text{Solution:} \\
x_{1} + x_{2} + x_{3} = 6, \forall i \in [1, 3]: x_{i} \geq 1 \\
\implies (x_{1}-1) + (x_{2}-1) + (x_{3}-1) = 3, \forall i \in [1, 3]: x_{i}-1 \geq 0 \\
\text{Number of different solutions is: } \boxed{\binom{3+3-1}{3-1} = \binom{5}{2}} \\
}
$$
## 3c
$$
\displaylines{
\text{Now there are 7 balls. In how many ways can they be arranged in the 3 boxes} \\
\text{such that no box contains more than 4 balls} \\
\\
\text{Solution:} \\
x_{1} + x_{2} + x_{3} = 7, \forall i \in [1, 3]: 0 \leq x_{i} \leq 4 \\
\text{Let's solve an "inverse" problem: } \\
x_{1} + x_{2} + x_{3} = 7, x_{1} \geq 5 \lor x_{2} \geq 5 \lor x_{3} \geq 5 \\
\text{Note that only one of the variables can be greater than } 4 \text{ at the same time} \\
\implies \text{There are 3 different problems with the same number of solutions:} \\
(x_{i}-5) + x_{j} + x_{k} = 2, x_{i}-5, x_{j}, x_{k} \geq 0 \\
\implies 3 \cdot \binom{2+3-1}{3-1} = 3 \cdot \binom{4}{2} \\
\implies \text{Number of solutions to the initial problem is:} \\
\boxed{\binom{3+7-1}{3-1} - 3 \cdot \binom{4}{2} = \binom{9}{2} - 3 \cdot \binom{4}{2}} \\
}
$$
## 3d
$$
\displaylines{
\text{Now there are 8 balls, 4 boxes labeled A, B, C, D} \\
\text{How many ways to arrange the balls there are such that:} \\
1. \quad \text{Each box contains at least 1 ball} \\
2. \quad \text{Each box contains no more than 4 balls} \\
3. \quad \text{Boxes A and B together contain exactly 5 balls} \\
\\
\text{Solution:} \\
\text{Let } x_{1}, x_{2}, x_{3}, x_{4} \text{ correspond to boxes } A, B, C, D \text{ accordingly} \\
\implies \left\{\begin{array}{}
x_{1} + x_{2} + x_{3} + x_{4} = 8 \\
\forall i \in [1, 4]: 1 \leq x_{i} \leq 4 \\
x_{1} + x_{2} = 5 \\
\end{array}\right. \implies \left\{\begin{array}{}
x_{1} + x_{2} = 5 \\
x_{3} + x_{4} = 3 \\
\forall i \in [1, 4]: 1 \leq x_{i} \leq 4 \\
\end{array}\right. \\
x_{1} + x_{2} = 5, x_{1}, x_{2} \geq 1 \\
\implies \text{There are no solutions where } x_{1} \text{ or } x_{2} \text{ are greater than } 4 \\
\implies (x_{1} - 1) + (x_{2} - 1) = 3, (x_{1}-1), (x_{2}-1) \geq 0 \implies \binom{3+2-1}{2-1} = \binom{4}{1} \\
x_{3} + x_{4} = 3, x_{3}, x_{4} \geq 1 \\
\implies \text{There are no solutions where } x_{3} \text{ or } x_{4} \text{ are greater than } 4 \\
\implies (x_{3}-1) + (x_{4}-1) = 1, (x_{3}-1), (x_{4}-1) \geq 0 \implies \binom{1+2-1}{2-1} = \binom{2}{1} \\
\implies \text{The final answer is } \boxed{\binom{4}{1} \cdot \binom{2}{1}} \\
}
$$
---

# 4
$$
\displaylines{
\text{Let } x, y, n \in \mathbb{N} \cup \Set{ 0 } \\
n \leq x, n \leq y \\
\text{Prove combinatorially: } \binom{x+y}{n} = \sum_{k=0}^{n} \binom{x}{k} \binom{y}{n-k} \\
\\
\text{Proof:} \\
\text{Let us choose } n \text{ people from } x \text{ boys and } y \text{ girls:} \\
\binom{x+y}{n} \\
\text{Let us now choose $k$ boys first and then choose the girls left} \\
A_{k} = \Set{ \text{ways to choose } k \text{ from } x \text{ boys and } n-k \text{ from } y \text{ girls} } \\
\lvert A_{k} \rvert = \binom{x}{k} \cdot \binom{y}{n-k} \\
i \neq j \implies A_{i} \cap A_{j} = \emptyset \\
\left\lvert  \bigcup_{k=0}^{n} A_{k} \right\rvert = \sum_{k=0}^{n} \lvert A_{k} \rvert = \sum_{k=0}^{n} \binom{x}{k} \cdot \binom{y}{n-k} \\
\implies \boxed{\binom{x+y}{n} = \sum_{k=0}^{n} \binom{x}{k} \binom{y}{n-k}} \\
}
$$
---

# 5
$$
\displaylines{
\text{Let } n \in \mathbb{N} \\
\text{Prove algebraically and combinatorially: } \sum_{k=1}^{n} k \cdot k! = (n+1)! - 1 \\
\\
\text{Proof (algebraic):} \\
(n+1)! - 1 = (n+1)n! - 1 = n \cdot n! + n! - 1 \\
\implies \sum_{k=1}^{n} k \cdot k! = \sum_{k=1}^{n} (k \cdot k! + k! - 1) - \sum_{k=1}^{n} (k! - 1) = \sum_{k=1}^{n} ((k+1)!-1-k!+1) = \\
= \sum_{k=1}^{n} (k+1)!-k! = 2! - 1! + 3! - 2! + \dots + (n+1)! - n! = (n+1)! - 1! = (n+1)! - 1 \\
\implies \boxed{\sum_{k=1}^{n} k \cdot k! = (n+1)! - 1} \\
}
$$
$$
\displaylines{
\text{Proof (combinatorial):} \\
\text{Let } A = (1, 2, \dots, n+1) \\
\text{There are } (n+1)! \text{ permutations of this ordered list} \\
\text{Let us count all possible permutations except for the trivial (sorted) one} \\
\text{There are } (n+1)! - 1 \text{ of them} \\
\text{Let us now choose number } k \text{ between 1 and } n \\
1. \quad \text{Let us choose one item from } k \text{ first items and swap it with } (k+1) \text{'th item} \\
\text{There are } k \text{ ways to do so} \\
2. \quad \text{Let us now count all possible permutations of first } k \text{ items} \\
\text{There are } k! \text{ such permutations} \\
\text{Let } A_{k} = \Set{ \text{permutations generated with steps 1 and 2} } \\
\text{Let } i < j \ (\text{symmetrical cases}) \\
A_{i} \cap A_{j} = \emptyset \text{ because in any permutation of } A_{i}, (j+1) \text{'th element is equal to } (j+1) \\
\text{And in any permutations of} A_{j}, (j+1)\text{'th element is not equal to } (j+1) \\
\implies \lvert U_{k=1}^{n} A_{k} \rvert = \sum_{k=1}^{n} \lvert A_{k} \rvert = \sum_{k=1}^{n} k \cdot k! \\
\text{Let } P \text{ be a set of all non-trivial permutations} \\
U_{k=1}^{n} A_{k} \subseteq P \text{ is obvious} \\
\text{This is because } \forall i \in [1, n]: \forall p \in A_{i}: p_{i+1} \neq i+1 \\
\text{Let } p \in P \\
\text{There is a non-trivial part of } p \text{ and there is a trivial part of } p \\
\text{Let the length of a non-trivial part of } p \text{ be } k+1 \\
\text{Then } p \in A_{k} \implies P \subseteq U_{k=1}^{n} A_{k} \\
\implies U_{k=1}^{n} A_{k} \text{ is a set of all possible permutations of } A \text{ except the trivial one} \\
\implies \lvert U_{k=1}^{n} A_{k} \rvert = (n+1)! - 1 \\
\implies \boxed{\sum_{k=1}^{n} k \cdot k! = (n+1)! - 1} \\
}
$$
---

# 6
$$
\displaylines{
\text{Let } A, B \subseteq \mathbb{R} \\
\lvert A \rvert = n \leq k = \lvert B \rvert \\
}
$$
## 6a
$$
\displaylines{
\text{How many functions } f: A \to B \text{ exist such that:} \\
\forall a_{1}, a_{2} \in A: a_{1} < a_{2} \to f(a_{1}) < f(a_{2}) \\
\\
\text{Solution:} \\
\text{Elements of } A \text{ are strictly ordered by } < \text{ on } \mathbb{R} \\
\text{Elements of } B \text{ are also strictly ordered by } < \text{ on } \mathbb{R} \\
\text{Thus to satisfy the condition we must simply choose } n \text{ different images in } B \\
\implies \text{The answer is: } \boxed{\binom{k}{n}} \\
}
$$
## 6b
$$
\displaylines{
\text{How many functions } f: A \to B \text{ exist such that:} \\
\forall a_{1}, a_{2} \in A: a_{1} < a_{2} \to f(a_{1}) \leq f(a_{2}) \\
\\
\text{Solution:} \\
\text{Rhetoric is the same as in 6a, but this time repetitions are allowed} \\
\implies \text{The answer is: } \boxed{\binom{n+k-1}{k-1}} \\
}
$$
---

# 7
$$
\displaylines{
\text{Let } n \in \mathbb{N} \cup \Set{ 0 } \\
\text{Prove algebraically and combinatorially: } \sum_{k=0}^{n} 3^{k} \binom{n}{k} = 4^{n} \\
\\
\text{Proof (algebraic):} \\
\text{By the binomial theorem: } 4^{n} = (1+3)^{n} = \sum_{k=0}^{n} 1^{n-k}3^{k}\binom{n}{k} = \sum_{k=0}^{n} 3^{k}\binom{n}{k} \\
\implies \boxed{\sum_{k=0}^{n} 3^{k} \binom{n}{k} = 4^{n}} \\
\text{Proof (combinatorial):} \\
\text{Let us construct a } n\text{-long string consisting of numbers 1, 2, 3, 4} \\
\text{Number of ways to construct such a string is } 4^{n} \\
\text{Let us now first choose number } 0 \leq k \leq n \\
1. \quad \text{Let us choose } n-k \text{ places for 1's, there are } \binom{n}{k} \text{ways to do so} \\
2. \quad \text{For the left } k \text{ places we need to choose either 2, 3 or 4} \\
\text{There are } 3^{k} \text{ ways to do this} \\
\text{Let } A_{k} = \Set{ \text{strings constructed using steps 1 and 2} } \\
i \neq j \implies A_{i} \cap A_{j} = \emptyset \text{ because the amount of 1's is different} \\
\implies \lvert U_{k=0}^{n} A_{k} \rvert = \sum_{k=0}^{n} \lvert A_{k} \rvert = \sum_{k=0}^{n} 3^{k} \binom{n}{k} \\
\bigcup_{k=0}^{n} A_{k} \text{ is a set of all possible } n \text{-long strings of numbers 1, 2, 3, 4} \\
\implies \text{There are } \sum_{k=0}^{n} 3^{k} \binom{n}{k} \text{ ways to construct a } n \text{-long string of numbers 1, 2, 3, 4} \\
\implies \boxed{\sum_{k=0}^{n} 3^{k} \binom{n}{k} = 4^{n}} \\
}
$$
---

# 8
$$
\displaylines{
\text{Let } n \in \mathbb{N} \cup \Set{ 0 } \\
\text{Prove combinatorially: } \sum_{k=0}^{2n} k\binom{2n}{k} = 2n \cdot 2^{2n-1} \\
\\
\text{Proof (combinatorial):} \\
\text{If } n = 0, \text{ then both sides are equal to } 0 \\
\text{If } n \in \mathbb{N}: \\
X \text{ ways how to choose a team:} \\
1. \quad \text{Choose a captain from } 2n \text{ players} \\
2. \quad \text{Choose a subset of left players to join the captain} \\
X = 2n \cdot 2^{2n-1} \\
Y \text{ ways to choose a team:} \\
1. \quad \text{Choose a subset of } k \text{ players from } 2n \text{ players} \\
2. \quad \text{Choose one of the players in the team to be captain} \\
k \text{ ranges from } 0 \text{ to } 2n \implies Y = \sum_{k=0}^{2n} \left(\binom{2n}{k} \cdot k\right) \\
X = Y \implies \boxed{\sum_{k=0}^{2n} k\binom{2n}{k} = 2n \cdot 2^{2n-1}} \\
\text{P. S. This is also known as Captain's identity} \\
}
$$
---

# 9
$$
\displaylines{
\text{Let } n, m \in \mathbb{N} \cup \Set{ 0 } \\
n \leq m \\
\cancel{ \text{Prove combinatorially: } \sum_{k=0}^{n} \binom{n}{k}\binom{m+k}{n} = \sum_{k=0}^{n} \binom{n}{k}\binom{m}{k}2^{k} } \\
}
$$
---

# 10a
$$
\displaylines{
\text{Let } n \in \mathbb{N} \\
\text{Prove combinatorially: } \sum_{k=0}^{n} k\binom{n}{k} = n \cdot 2^{n-1} \\
\\
\text{Proof:} \\
\text{See task 8, it is identical} \\
}
$$
# 10b
$$
\displaylines{
\text{Let } n \in \mathbb{N} \\
\text{Prove combinatorially: } \sum_{k=0}^{n} k(k-1)\binom{n}{k} = n(n-1) \cdot 2^{n-2} \\
\\
\text{Proof:} \\
\text{Another variation of Captain's identity} \\
\text{but now we choose a captain and his second-in-command, who must be a different person} \\
}
$$
## 10c
$$
\displaylines{
\text{Let } n \in \mathbb{N} \\
\text{Prove algebraically or combinatorially: } \sum_{k=0}^{n} k^{2}\binom{n}{k} = n(n+1)2^{n-2} \\
\\
\text{Proof:} \\
k\binom{n}{k} = n\binom{n-1}{k-1} \\
\implies \sum_{k=0}^{n} k^{2}\binom{n}{k} = n \sum_{k=0}^{n} k\binom{n-1}{k-1} \\
k = 0 \text{ does not affect the sum} \\
\implies \sum_{k=0}^{n} k\binom{n-1}{k-1} = \sum_{k=1}^{n} k\binom{n-1}{k-1} = \sum_{t=0}^{n-1} (t+1)\binom{n-1}{t} = \sum_{t=0}^{n-1} t\binom{n-1}{t} + \sum_{t=0}^{n-1} \binom{n-1}{t} \\
\sum_{t=0}^{n-1} t\binom{n-1}{t} = (n-1) \cdot 2^{n-2} \\
\sum_{t=0}^{n-1} \binom{n-1}{t} = 2^{n-1} \\
\implies \sum_{k=0}^{n} k\binom{n-1}{k-1} = (n-1) \cdot 2^{n-2} +2^{n-1} = (n-1+2) \cdot 2^{n-2} = (n+1)2^{n-2} \\
\sum_{k=0}^{n} k^{2}\binom{n}{k} = n \sum_{k=0}^{n} k\binom{n-1}{k-1} \implies \boxed{\sum_{k=0}^{n} k^{2}\binom{n}{k} = n(n+1)2^{n-2}} \\
}
$$
---

# 11a
$$
\displaylines{
\text{Let } n \in \mathbb{N} \\
\text{How many ways there are to divide 2n tennis players into pairs for the tournament?} \\
\\
\text{Solution:} \\
\text{We need to split } 2n \text{ players into } n \text{ pairs} \\
\text{Order of pairs does not matter} \\
\text{Order inside the pairs also does not matter} \\
\text{So we simply need to calculate the number of ways to choose 2 different players from } 2n \\
\text{and do so } n \text{ times} \\
\text{Order of pairs doesn't matter too, so we should divide by } n ! \\
\text{Which is } \boxed{ \frac{\binom{2n}{2,2,\dots,2}}{n!} = \frac{2n!}{n! \cdot (2!)^{n}} = \frac{(2n)!}{n! \cdot 2^{n}} } \\
}
$$
## 11b
$$
\displaylines{
\text{Let } n \in \mathbb{N} \\
\text{Prove combinatorially: } \frac{(2n)!}{n! \cdot 2^{n}} = 1 \cdot 3 \cdot 5 \dots \cdot (2n-1) \\
\\
\text{Proof:} \\
\text{Let us think about left side in terms of task 11a:} \\
\text{Let us reorder } 2n \text{ players, there are } (2n)! \text{ ways to do so} \\
\text{Let us now treat each two players as a pair} \\
\text{Note that the order of pairs doesn't matter, so we divide by } n! \\
\text{Note that in each pair order also doesn't matter, so we divide } n \text{ times by } 2 \\
\text{The final formula for the amount of pairs is:} \\
\frac{(2n)!}{n! \cdot 2^{n}} \\
\text{Let us now think about the right side:} \\
\text{How many ways to choose a partner does the first person have? } 2n-1 \\
\text{There are now } 2n-2 \text{ players without partners} \\
\text{How many way to choose a partner does the second person have? } 2n-3 \\
\text{This process will continue until the last two persons form a pair} \\
\text{The final formula for the amount of pairs is:} \\
(2n-1) \cdot (2n-3) \cdot \ldots \cdot 3 \cdot 1 \\
\implies \boxed{\frac{(2n)!}{n! \cdot 2^{n}} = 1 \cdot 3 \cdot 5 \dots \cdot (2n-1)} \\
}
$$
---

# 12
$$
\displaylines{
\text{Let } n \in \mathbb{N} \\
\text{Prove combinatorially: } \sum_{k=1}^{n-1} (n-k)^{2}\binom{n - 1}{n - k} = n(n-1) \cdot 2^{n-3} \\
\\
\text{Proof:} \\
\text{Let } t = k - 1 \\
\sum_{k=1}^{n-1} (n-k)^{2}\binom{n-1}{n-k} = \sum_{t=0}^{n-2} (n-1-t)^{2}\binom{n-1}{n-1-t} = \sum_{t=0}^{n-2} (n-1-t)^{2}\binom{n-1}{t} \\
\text{Suppose there are } n-1 \text{ people} \\
\text{We would like to choose a team of at most $n-2$ sailors, led by a captain and a navigator} \\
\text{The same person can be both captain and navigator} \\
\text{Let us first choose } t \text{ people for the team, there are } \binom{n-1}{t} \text{ ways to do so} \\
\text{Let us then choose a captain and a navigator from } n-1-t \text{ people left} \\
\text{They can be the same person, so the number of ways to do so is: } (n-1-t)^{2} \\
\text{The final formula would then be: } \sum_{t=0}^{n-2} (n-1-t)^{2}\binom{n-1}{t} \\
n(n-1) \cdot 2^{n-3} = (n-2 + 2)(n-1) \cdot 2^{n-3} = (n-2)(n-1) \cdot 2^{n-3} + (n-1) \cdot 2^{n-2} \\
\text{Let us now first choose a captain and a navigator:} \\
1. \quad \text{Choose two different persons - } (n-1)(n-2) \\
2. \quad \text{Choose one person for both - } (n-1) \\
\text{And then choose a team of sailors to join them:} \\
1. \quad \text{If captain and navigator are two persons} \\
\text{there are } n-3 \text{ people left to choose from: } 2^{n-3} \\
2. \quad \text{If captain and navigator are the same person} \\
\text{there are } n-2 \text{ people left to choose from: } 2^{n-2} \\
\text{The final formula would then be: } (n-2)(n-1) \cdot 2^{n-3} + (n-1) \cdot 2^{n-2} \\
\implies \sum_{k=1}^{n-1} (n-k)^{2}\binom{n-1}{n-k} = \sum_{t=0}^{n-2} (n-1-t)^{2}\binom{n-1}{t} = \\
= (n-2)(n-1) \cdot 2^{n-3} + (n-1) \cdot 2^{n-2} = n(n-1) \cdot 2^{n-3} \\
\implies \boxed{ \sum_{k=1}^{n-1} (n-k)^{2}\binom{n-1}{n-k} = n(n-1) \cdot 2^{n-3} } \\
}
$$
---
