---
{"publish":true,"created":"24/01/25, 18:01","modified":"2025-11-21T21:10:02.150+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } r_{1}, \dots, r_{n+1} \in [0, 1) \subseteq \mathbb{R} \\
\text{Prove: } \exists 1 \leq i < j \leq n+1: \lvert r_{i}-r_{j} \rvert < \frac{1}{n} \\
\\
\text{Proof:} \\
\text{Let's divide } [0, 1) \text{ into } n \text{ half-closed intervals:} \\
\left[ 0, \frac{1}{n} \right), \left[ \frac{1}{n}, \frac{2}{n} \right), \dots, \left[ \frac{n-1}{n}, 1 \right) \\
\text{"Length" of each of these intervals is less than } \frac{1}{n} \\
\text{Let } A = \Set{ r_{1}, \dots, r_{n+1} } \\
\text{Let } B = \Set{ \left[ 0, \frac{1}{n} \right), \left[ \frac{1}{n}, \frac{2}{n} \right), \dots, \left[ \frac{n-1}{n}, 1 \right) } \\
\text{Let } f: A \to B, f \text{ determines in which half-closed interval } x \text{ is} \\
\lvert A \rvert = n+1 > n = \lvert B \rvert \\
\implies \text{By the pigeonhole principle, there are at least two numbers } r_{i}, r_{j} (i < j) \\
\text{ in the same half-closed interval} \\
\implies \frac{k}{n} \leq r_{i}, r_{j} < \frac{k+1}{n} \\
\implies \boxed{ \lvert r_{i} - r_{j} \rvert < \left\lvert  \frac{k}{n} - \frac{k+1}{n} \right\rvert = \frac{1}{n} } \\
}
$$
---

# 2a
$$
\displaylines{
\text{Let } k \in \mathbb{N} \\
\text{Let } n = k^{2} + 1 \\
\text{Let } A \text{ be a set, } \lvert A \rvert = n \\
\text{Let } \Set{ A_{i} }_{i=1}^{k} \text{ be a partition of } A \text{ into } k \text{ sets} \\
\text{Prove: } \exists j \in [1, k]: \lvert A_{j} \rvert \geq k + 1 \\
\\
\text{Proof:} \\
\text{Suppose } \forall j \in [1, k]: \lvert A_{j} \rvert < k + 1 \implies \lvert A_{j} \rvert \leq k \\
\Set{ A_{i} }_{i=1}^{k} \text{ is a partition} \implies \forall i \neq j \in [1, k]: A_{i} \cap A_{j} = \emptyset \\
\implies \left\lvert  \bigcup_{i=1}^{k} A_{i}  \right\rvert = \sum_{i=1}^{k} \lvert A_{i} \rvert \leq k^{2} \\
\text{By definition of partition:} \bigcup_{i=1}^{k} A_{i} = A \\
\implies \left\lvert  \bigcup_{i=1}^{k} A_{i}  \right\rvert = \lvert A \rvert = n = k^{2} + 1 \\
\implies k^{2} + 1 \leq k^{2} - \text{ Contradiction!} \\
\implies \boxed{ \exists j \in [1, k]: \lvert A_{j} \rvert \geq k + 1 } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } L_{n} \text{ be a set of } 2^{n}+1 \text{ lattice points in } \mathbb{R}^{n} \\
\text{Prove: } \exists p, q \in L_{n}: p \neq q \land \text{midpoint of } p, q \text{ is also a lattice point} \\
\\
\text{Proof:} \\
\text{Notation } P(x) \text{ is used as a parity predicate of } x \\
\text{e.g. } P(27) = F, P(2) = T \\
\text{Let } B = \Set{ (P(p_{1}), P(p_{2}), \dots, P(p_{n})) | (p_{1}, p_{2}, \dots, p_{n}) \in L_{n} } \\
\text{In other words, $B$ is a set of binary strings representing parity of a lattice point } \\
\text{Let } f: L_{n} \to B \\
f(p) = (P(p_{1}), P(p_{2}), \dots, P(p_{n})) \\
\text{e.g. for } \mathbb{R}^{4}:  f((0, 16, 2, 37)) = (T, T, T, F) \\
\lvert L_{n} \rvert = 2^{n} + 1 > 2^{n} = \lvert B \rvert \\
\implies \text{By the pigeonhole principle there exists at least two lattice points } p, q \text{ such that:} \\
f(p) = f(q) \\
\text{Meaning:} \\
\exists p \neq q \in L_{n}: \forall i \in [1, n]: P(p_{i}) = P(q_{i}) \implies P(p_{i}+q_{i}) \equiv T \implies \frac{p_{i}+q_{i}}{2} \in \mathbb{Z} \\
\implies \boxed{ \text{Midpoint of } p, q \text{ is a lattice point} } \\
}
$$
---

# 3
$$
\displaylines{
\text{Alice wants to register for a university where each course has only one lecture per week at} \\
\text{the same time. She needs to choose 7 courses from among 30 courses without overlap.} \\
\text{Given that each day, from Sunday to Thursday, has 6 courses (for a total of 30)} \\
\text{How many ways can Alice register for courses such that} \\
\text{she has at least one course each day?} \\
\\
\text{Solution:} \\
\text{Let Alice ignore some days when choosing courses} \\
\text{If she ignores at least one day, then the number of ways to choose courses is: } \binom{30-6}{7} \\
\text{If she ignores at least $k$ days, then the number of ways to choose courses is: } \binom{30-6k}{7} \\
\text{Alice can ignore at most 3 days} \implies \text{by the Inclusion-Exclusion principle} \\
\text{The answer is: } \boxed{ \sum_{k=0}^{3} (-1)^{k}\binom{5}{k}\binom{30-6k}{7} } \\
}
$$
---

# 4
$$
\displaylines{
\text{Let } S = \Set{1, 2, . . . , 500} \\
\text{How many integers in S are divisible by 2 or 3 or 5?} \\
\\
\text{Solution:} \\
\text{Let } A = \Set{ s \in S | 2 \mid s \lor 3 \mid s \lor 5 \mid s } \\
\text{Number of integers in $S$ divisible by 2 is: } \left\lfloor  \frac{500}{2}  \right\rfloor = 250 \\
\text{Number of integers in $S$ divisible by 3 is: } \left\lfloor  \frac{500}{3}  \right\rfloor = 166 \\
\text{Number of integers in $S$ divisible by 5 is: } \left\lfloor  \frac{500}{5}  \right\rfloor = 100 \\
\text{Number of integers in $S$ divisible by 2 and 3 is: } \left\lfloor  \frac{500}{2 \cdot 3}  \right\rfloor = 83 \\
\text{Number of integers in $S$ divisible by 2 and 5 is: } \left\lfloor  \frac{500}{2 \cdot 5}  \right\rfloor = 50 \\
\text{Number of integers in $S$ divisible by 3 and 5 is: } \left\lfloor  \frac{500}{3 \cdot 5}  \right\rfloor = 33 \\
\text{Number of integers in $S$ divisible by 2, 3 and 5 is: } \left\lfloor  \frac{500}{2 \cdot 3 \cdot 5}  \right\rfloor = 16 \\
\implies \text{ By the inclusion-exclusion principle:} \\
\lvert A \rvert = |A_{2}| + \lvert A_{3} \rvert + \lvert A_{5} \rvert - \lvert A_{23} \rvert - \lvert A_{25} \rvert - \lvert A_{35} \rvert + \lvert A_{235} \rvert = \\
= 250 + 166 + 100 - 83 - 50 - 33 + 16 \\
\implies \boxed{ \lvert A \rvert = 366 } \\
}
$$
---

# 5a
$$
\displaylines{
\text{How many ways can 50 identical balls be distributed into 10 different boxes such that} \\
\text{Each box has at most } 4 \text{ balls} \\
\\
\text{Solution:} \\
\text{If each box has at most 4 balls, then total is at most } 40, \text{ which is less than 50} \\
\implies \boxed{ \text{The answer is } 0 } \\
}
$$
# 5b
$$
\displaylines{
\text{How many ways can 50 identical balls be distributed into 10 different boxes such that} \\
\text{Each box has at most } 5 \text{ balls} \\
\\
\text{Solution:} \\
\text{If each box has at most 5 balls, then the total is at most } 50 \\
\sum_{i=1}^{10} x_{i} = 50 \\
\text{Let } x_{1} < 5 \text{ WLOG} \\
\implies \sum_{i=2}^{10} x_{i} > 50-5 = 45 \implies \text{Some box has more than 5 balls} \\
\implies \text{each box has exactly 5 balls} \\
\implies \boxed{ \text{The answer is } 1 } \\
}
$$
# 5c
$$
\displaylines{
\text{How many ways can 50 identical balls be distributed into 10 different boxes such that} \\
\text{Each box has at most } 10 \text{ balls} \\
\\
\text{Solution:} \\
\left\{\begin{array}{}
\sum_{i=1}^{10} x_{i} = 50 \\
\forall i \in [1, 10]: x_{i} \leq 10 \\
\end{array}\right. \\
\text{Let at least $k$ boxes have more then 10 balls:} \\
\implies \binom{50-11k+10-1}{10-1} = \binom{59-11k}{9} \\
\text{There are } \binom{10}{k} \text{ ways to choose these } k \text{ boxes} \\
\text{There are 50 balls} \implies \text{ There are at least 0 and at most 4 boxes with 11 balls or more} \\
\implies \# \text{ of ways such that at least one box has more than 10 balls is:} \\
\text{By the inclusion-exclusion principle: } \sum_{k=1}^{4} (-1)^{k+1}\binom{10}{k}\binom{59-11k}{9} \\
(-1)^{k+1} \text{ is due to an inverted sign, because we're counting the opposites} \\
\text{The total \# of ways to distribute 50 balls into 10 boxes is:} \\
\binom{50+10-1}{10-1} = \binom{59}{9} \\
\implies \text{The final answer is: } \boxed{ \binom{59}{9} - \sum_{k=1}^{4} (-1)^{k+1}\binom{10}{k}\binom{59-11k}{9} } \\
\text{This can be rewritten as: } \boxed{ \sum_{k=0}^{4} (-1)^{k}\binom{10}{k}\binom{59-11k}{9} } \\
}
$$
# 5d
$$
\displaylines{
\text{How many ways can 50 identical balls be distributed into 10 different boxes such that} \\
\text{Each box has at most 12 balls and at least 2 balls} \\
\\
\text{Solution:} \\
\text{Let's factor out "at least 2": } \sum_{i=1}^{10} (x_{i}-2) = 50-20 = 30 \\
\text{Now there are 2 balls in each box, for some to have 13, they need 11 more} \\
\text{Let's use the same rhetoric as in 5c} \\
\text{This time the total is 30 balls, not 50, so we can only get 2 boxes to have 11 balls or more} \\
\sum_{k=0}^{2} (-1)^{k}\binom{30-11k+10-1}{10-1}\binom{10}{k} = \sum_{k=0}^{2} (-1)^{k}\binom{39-11k}{9}\binom{10}{k} \\
\implies \boxed{ \text{The final answer is: } \sum_{k=0}^{2} (-1)^{k}\binom{39-11k}{9}\binom{10}{k} } \\
}
$$
---

# 6
$$
\displaylines{
\text{Let } n \in \mathbb{N} \\
\text{Suppose n people are standing in a line.} \\
\text{In how many ways can the people be arranged in line} \\
\text{such that no person stands in the same position they were in before?} \\
\\
\text{Solution:} \\
\text{How many ways there are such that at least one person stays in his position?} \\
\text{One fixed position and } n-1 \text{ positions left to arrange: } (n-1)! \\
\text{How many ways there are such that at least $k$ people stay in their position?} \\
(n-k)! \\
\text{There are } \binom{n}{k} \text{ ways to choose these } k \text{ people} \\
\implies \text{By the inclusion-exclusion principle the answer is:} \\
\boxed{ \sum_{k=0}^{n} (-1)^{k}(n-k)!\binom{n}{k} } \\
}
$$
---

# 7
$$
\displaylines{
\text{In the exam there are 15 questions numbered from 1 to 15.} \\
\text{Each question can either be answered correctly or incorrectly} \\
\text{We know that no student answered two consecutive questions correctly} \\
\text{There are 1600 students who took the exam} \\
\text{Must there be two students with identical answers or not?} \\
\\
\text{Solution:} \\
\text{Consider a binary string of length 15} \\
\text{How many such strings can we produce without two consecutive ones?} \\
\text{Let } B \text{ be such a string} \\
B = (b_{1}, b_{2}, \dots, b_{15}) \\
\\
\text{Let } f: \mathbb{N} \to \mathbb{N} \text{ be a function, that counts the number of such strings} \\
\text{If } b_{15} \text{ is a zero, then there are } f(14) \text{ possibilities for binary string} (b_{1}, b_{2}, \dots, b_{14}) \\
\text{If } b_{15} \text{ is a one, then } b_{14} \text{ is a zero and there are } \\
f(13) \text{ possibilities for binary string } (b_{1}, b_{2}, \dots, b_{13}) \\
\implies f(15) = f(14) + f(13) \\
\\
\text{In other words } f(n) = f(n-1) + f(n-2) \text{ or Fibonacci sequence} \\
f(1) = 2 \text{ (strings 0 and 1), which is the 3rd Fibonacci number} \\
f(2) = 3 \text{ (strings 00, 01 and 10), which is the 4th Fibonacci number} \\
\implies f(n) \text{ is } (n+2)'\text{th Fibonacci number} \\
\implies f(15) = F(17) = 1597 \\
\implies \text{There are 1600 students and 1597 different exam answers} \\
\\
\text{Let } A \text{ be a set of students, } \lvert A \rvert  \\
\text{Let } C \text{ be a set of possible exam answers, } \lvert C \rvert = 1597 < \lvert A \rvert = 1600 \\
\text{Let } g: A \to C \text{ be a function mapping students to their exam answers} \\
\lvert A \rvert > \lvert C \rvert \implies \text{By the pigeonhole principle: } \exists a_{1}, a_{2} \in A: g(a_{1}) = g(a_{2}) \\
\implies \boxed{ \text{There are at least two students with the same answers} } \\
}
$$
---

# 8
$$
\displaylines{
\text{Let } A, B \text{ be sets} \\
\lvert A \rvert = n, \lvert B \rvert = k, k \leq n \\
}
$$
## 8a
$$
\displaylines{
\text{How many injective functions } f: A \to B \text{ exist?} \\
\\
\text{Solution:} \\
\text{If } k < n, \text{ then } \lvert A \rvert > \lvert B \rvert \implies \text{ There are 0 injective functions in } B^{A} \\
\text{If } k = n, \text{ then there are exactly } n! \text{ injective functions in } B^{A} \\
\implies \boxed{ \text{The answer is: } n! } \\
}
$$
## 8b
$$
\displaylines{
\text{How many surjective functions } f: A \to B \text{ exist?} \\
\\
\text{Solution:} \\
\text{There are a total of } k^{n} \text{ functions in } B^{A} \\
\text{Let's count functions that do not map to at least } i \text{ elements:} \\
B' \subseteq B, \lvert B' \rvert = k-i \\
f': A \to B' \in B'^{A}, \lvert B'^{A} \rvert = (k-i)^{n} \\
\text{There are } \binom{k}{i} \text{ ways to choose these } i \text{ elements} \\
\implies \text{By the exclusion-inclusion principle \# of surjective functions is:} \\
\boxed{ \sum_{i=0}^{k} (-1)^{i}\binom{k}{i}(k-i)^{n} } \\ 
}
$$
---

# 9
$$
\displaylines{
\text{Let } p_{1}, \dots, p_{n} \in \Set{ T, F } \text{ be logical propositions} \\
\\
\text{Solution:} \\
\text{There are a total of } 2^{n} \text{ possible assignments for } p_{1}, \dots, p_{n} \\
\text{Only one of them has zero Truths, when all propositions are False} \\
\implies \text{The final answer is: } \boxed{ 2^{n}-1 } \\
}
$$
---

# 10a
$$
\displaylines{
\text{Convert } (p \to (q \land \lnot r)) \lor (r \land p) \text{ into CNF and DNF} \\
\\
\text{Solution:} \\
\text{Let } X = (p \to (q \land \lnot r)) \lor (r \land p) \\
\begin{array}{c|c|c|c|c|c|c}
p & q & r & q \land \lnot r & p \to (q \land \lnot r) & r \land p & X \\
0 & 0 & 0 & 0 & 1 & 0 & 1 \\
0 & 0 & 1 & 0 & 1 & 0 & 1 \\
0 & 1 & 0 & 1 & 1 & 0 & 1 \\
0 & 1 & 1 & 0 & 1 & 0 & 1 \\
1 & 0 & 0 & 0 & 0 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 1 & 1 \\
1 & 1 & 0 & 1 & 1 & 0 & 1 \\
1 & 1 & 1 & 0 & 0 & 1 & 1 \\
\end{array} \\
\implies \boxed{ \text{CNF of } X \text{ is: } (\lnot p \lor q \lor r) } \\
\implies \boxed{ \text{DNF of } X \text{ is: } (\lnot p) \lor (q) \lor (r) } \\
}
$$
# 10b
$$
\displaylines{
\text{Convert } ((p \to q) \lor \lnot r) \land (p \leftrightarrow q) \text{ into CNF and DNF} \\
\\
\text{Solution:} \\
\text{Let } X = ((p \to q) \lor \lnot r) \land (p \leftrightarrow q) \\
\begin{array}{c|c|c|c|c|c|c}
p & q & r & p \to q & (p \to q) \lor \lnot r & p \leftrightarrow q & X \\
0 & 0 & 0 & 1 & 1 & 1 & 1 \\
0 & 0 & 1 & 1 & 1 & 1 & 1 \\
0 & 1 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & 1 & 1 & 1 & 0 & 0 \\
1 & 0 & 0 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 0 & 0 \\
1 & 1 & 0 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 \\
\end{array} \\
\implies \boxed{ \text{CNF of } X \text{ is: } (p \lor \lnot q \lor r) \land (p \lor \lnot q \lor \lnot r) \land (\lnot p \lor q \lor r) \land (\lnot p \lor q \lor \lnot r) } \\
\text{Note that this can be simplified into: } \boxed{ (p \lor \lnot q) \land (\lnot p \lor q) } \\
\implies \boxed{ \text{DNF of } X \text{ is: } (\lnot p \land \lnot q \land \lnot r) \lor (\lnot p \land \lnot q \land r) \lor (p \land q \land \lnot r) \lor (p \land q \land r) } \\
\text{Note that this can be simplified into: } \boxed{ (\lnot p \land \lnot q) \lor (p \land q) } \\
}
$$
---

# 11a
$$
\displaylines{
\text{Prove: } \Set{ \lnot, \to } \text{ is complete} \\
\\
\text{Proof:} \\
\Set{ \land, \lor, \lnot } \text{ is complete (there is a DNF for any proposition)} \\
p \land q = \lnot(\lnot p \lor \lnot q) \\
\implies \Set{ \lor, \lnot } \text{ is also complete} \\
p \lor q = \lnot p \to q \\
\implies \boxed{ \Set{ \lnot, \to } \text{ is also complete} } \\
}
$$
# 11b
$$
\displaylines{
\text{Prove: } \Set{ \uparrow } \text{ is complete} \\
\\
\text{Proof:} \\
\Set{ \land, \lor, \lnot } \text{ is complete (there is a DNF for any proposition)} \\
p \lor q = \lnot(\lnot p \land \lnot q) \\
\implies \Set{ \land, \lnot } \text{ is also complete} \\
\lnot p = p \uparrow p \\
p \land q = \lnot (p \uparrow q) = (p \uparrow q) \uparrow (p \uparrow q) \\
\implies \boxed{ \Set{ \uparrow } \text{ is also complete} } \\
}
$$
# 11c
$$
\displaylines{
\text{Prove: } \Set{ \downarrow } \text{ is complete} \\
\\
\text{Proof:} \\
\Set{ \land, \lor, \lnot } \text{ is complete (there is a DNF for any proposition)} \\
p \land q = \lnot(\lnot p \lor \lnot q) \\
\implies \Set{ \lor, \lnot } \text{ is also complete} \\
\lnot p = p \downarrow p \\
p \lor q = \lnot(p \downarrow q) = (p \downarrow q) \downarrow (p \downarrow q) \\
\implies \boxed{ \Set{ \downarrow } \text{ is also complete} } \\
}
$$
---
