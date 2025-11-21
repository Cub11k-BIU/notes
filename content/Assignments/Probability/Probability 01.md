---
{"publish":true,"created":"08/11/25, 21:11","modified":"2025-11-21T21:10:02.823+02:00","tags":["Academia","Assignment","Probability"],"cssclasses":""}
---

## 0.1
$$
\displaylines{
\text{Let } \Omega \text{ be a set} \\
\text{Let } A_{1}, \dots, A_{n} \subseteq \Omega \\
\forall A \subseteq \Omega: A^{0} = A, A^\complement = \Omega \setminus A \\
}
$$
### 0.1.1
$$
\displaylines{
\text{Prove: } \mathcal{F} = \Set{ \bigcap_{i = 1}^{n} A_{i}^{x_{i}} | x_{1}, \dots, x_{n} \in \Set{ 0, \complement } } \text{ is a partition of } \Omega \\
\text{Clarification:} \\
\text{Let } n = 2 \\
\text{Let } \omega = \mathbb{N} \\
\text{Let } A_{1} = \Set{ 1 } \\
\text{Let } A_{2} = \mathbb{N} \setminus \Set{ 1 } \\
\implies A_{1}^{0} \cap A_{2}^{0} = \emptyset \in \mathcal{F} \implies \mathcal{F} \text{ is not a partition} \\
\text{Necessary adjustment:} \\
\text{Let } \mathcal{F} = \mathcal{F} \setminus \Set{ \emptyset } \\
\text{With this adjustment, } \mathcal{F} \text{ is indeed a partition of } \Omega \\
\\
\text{Proof:} \\
\text{First, by our adjustment, } \emptyset \not\in \mathcal{F} & (1) \\
\text{Let us now prove } \bigcup \mathcal{F} = \Omega \\
\text{Let } x \in \Omega \\
\text{Case 1. } \forall i \in [1, n]: x \not\in A_{i} \\
\implies x \in \bigcap_{i = 1}^{n} A^{\complement}, \bigcap_{i = 1}^{n} A^{\complement} \in \mathcal{F} \implies x \in \bigcup \mathcal{F} \implies \boxed{ \Omega \subseteq \bigcup \mathcal{F} } \\
\text{Case 2. } \exists i \in [1, n]: x \in A_{i} \\
\text{Let } E = \bigcap_{i = 1}^{n} A_{i}^{x_{i}} \text{ where } \forall i \in [1, n]: x_{i} = \begin{cases}
0 & x \in A_{i} \\
\complement & x \not\in A_{i} \\
\end{cases} \\
\implies x \in E, E \in \mathcal{F} \implies x \in \bigcup \mathcal{F} \implies \boxed{ \Omega \subseteq \bigcup \mathcal{F} } \\
}
$$
$$
\displaylines{
\text{Let } x \in \bigcup \mathcal{F} \\
\implies \exists x_{1}, \dots, x_{n} \in \Set{ 0, \complement } : x \in \bigcap_{i = 1}^{n} A_{i}^{x_{i}} \\
\forall i \in [1, n]: A_{i}^{x_{i}} \subseteq \Omega \implies \bigcap_{i = 1}^{n} A_{i}^{x_{i}} \subseteq \Omega \implies x \in \Omega \implies \boxed{ \bigcup \mathcal{F} \subseteq \Omega } \\
\implies \boxed{ \Omega = \bigcup \mathcal{F} } & (2) \\
\\
\text{Let us now prove } \forall E_{1} \neq E_{2} \in \mathcal{F}: E_{1} \cap E_{2} = \emptyset \\
\text{Let } E_{1} = \bigcap_{i = 1}^{n} A_{i}^{x_{i}}, E_{2} = \bigcap_{i = 1}^{n} A_{i}^{y_{i}} \\
E_{1} \neq E_{2} \implies \exists j \in [1, n]: x_{j} \neq y_{j} \\
\text{Let } x_{j} = 0, y_{j} = \complement & WLOG \\
\implies E_{1} \subseteq A_{j}, E_{2} \subseteq A_{j}^\complement = \Omega \setminus A_{j} \\
\text{Let } x \in E_{1} \cap E_{2} \\
\implies \begin{eqsys}
x \in A_{j} \\
x \in \Omega \setminus A_{j} \\
\end{eqsys} - \text{Contradiction!} \implies E_{1} \cap E_{2} = \emptyset & (3) \\
\\
(1), (2) \text{ and } (3) \implies \boxed{ \mathcal{F} \text{ is a partition of } \Omega } \\
}
$$
### 0.1.2
$$
\displaylines{
\text{Prove that for all indices } 1 \leq i_{1} < \dots < i_{k} \leq n \text{ each of the sets} \\
\bigcap_{j = 1}^{k} A_{i_{j}} \text{ and } \bigcup_{j = 1}^{k} A_{i_{j}} \\
\text{ is a union of some elements in } \mathcal{F} \\
\\
\text{Proof:} \\
\text{Let } 1 \leq i_{1} < \dots < i_{k} \leq n \\
\text{Let } I = \bigcap_{j = 1}^{k} A_{i_{j}}, U = \bigcup_{j = 1}^{k} A_{i_{j}} \\
\text{Let } x \in I \\
\forall i \in [1, n]: \begin{cases}
x_{i} = 0 & x \in A_{i} \\
x_{i} = \complement & x \not\in A_{i} \\
\end{cases} \implies x \in \bigcap_{i = 1}^{n} A_{i}^{x_{i}} = E_{x} \in \mathcal{F} \\
\implies \forall x \in I: x \in E_{x} \implies \boxed{ I \subseteq \bigcup_{x \in I} E_{x} } & (1) \\
\text{Let } y \in \bigcup_{x \in I} E_{x} \\
\implies \exists x \in I: y \in E_{x} \\
E_{x} = \bigcap_{i=1}^{n} A_{i}^{x_{i}}, x_{i} = \begin{cases}
0 & x \in A_{i} \\
\complement & x \not\in A_{i} \\
\end{cases} \\
x \in I \implies \forall j \in [1, k]: x \in A_{i_{j}} \implies \forall j \in [1, k]: x_{i_{j}} = 0 \\
y \in E_{x} \implies \forall i \in [1, n]: y \in A_{i}^{x_{i}} \\
\implies \forall j \in [1, k]: y \in A_{i_{j}} \implies y \in I \implies \boxed{ \bigcup_{x \in I} E_{x} \subseteq I } & (2) \\
\\
(1) \text{ and } (2) \implies \boxed{ I = \bigcup_{x \in I} E_{x} } \\
}
$$
$$
\displaylines{
\text{Let } x \in U \\
\forall i \in [1, n]: \begin{cases}
x_{i} = 0 & x \in A_{i} \\
x_{i} = \complement & x \not\in A_{i} \\
\end{cases} \implies x \in \bigcap_{i = 1}^{n} A_{i}^{x_{i}} = E_{x} \in \mathcal{F} \\
\forall x \in U: x \in E_{x} \implies U \subseteq \boxed{ \bigcup_{x \in U} E_{x} } & (3) \\
\text{Let } y \in \bigcup_{x \in U} E_{x} \\
\implies \exists x \in U: y \in E_{x} \\
E_{x} = \bigcap_{i=1}^{n} A_{i}^{x_{i}}, x_{i} = \begin{cases}
0 & x \in A_{i} \\
\complement & x \not\in A_{i} \\
\end{cases} \\
x \in U \implies \exists j \in [1, k]: x \in A_{i_{j}} \implies x_{i_{j}} = 0 \\
\implies E_{x} \subseteq A_{i_{j}} \implies y \in A_{i_{j}} \implies y \in U \implies \boxed{ \bigcup_{x \in U} E_{x} \subseteq U } & (4) \\
\\
(3) \text{ and } (4) \implies \boxed{ U = \bigcup_{x \in U} E_{x} } \\
}
$$
---
## 0.2
$$
\displaylines{
\text{A fair dice is tossed three times and we sum the results} \\
\text{What is the probability that the sum will be 5?} \\
\text{What is the probability that the sum will be 10?} \\
\\
\text{Solution:} \\
\text{Possible outcomes of each toss are } \Set{ 1, 2, 3, 4, 5, 6 } \\
\implies S = \Set{ (i, j, k) | i, j, k \in [1, 6] } \\
\abs{S} = 6^{3} = 216 \\
E_{5} = \Set{ (i, j, k) | \begin{eqsys}
i + j + k = 5 \\
i, j, k \in [1, 6] \\
\end{eqsys} } \\
 i > 3 \implies i + j + k > 5 \implies i, j, k \leq 3 \\
\implies E_{5} = \Set{ (i, j, k) | \begin{eqsys}
i + j + k = 5 \\
i, j, k \in [1, 3] \\
\end{eqsys} } \\
\text{Possible combinations for sum of 5 are: } \Set{ 1, 1, 3 } \text{ and } \Set{ 1, 2, 2 } \\
\text{There are } 3 \text{ permutations of } \Set{ 1, 1, 3 } \text{ and } 3 \text{ permutations of } \Set{ 1, 2, 2 } \\
\implies \abs{E_{5}} = 6 \implies \boxed{ P(E_{5}) = \frac{\abs{E_{5}}}{\abs{S}} = \frac{1}{36} } \\
E_{10} = \Set{ (i, j, k) | \begin{eqsys}
i + j + k = 10 \\
i, j, k \in [1, 6] \\
\end{eqsys} } \\
\text{Possible combinations for sum of 10 are:} \Set{ 1, 3, 6 }, \Set{ 2, 2, 6 }, \Set{ 1, 4, 5 }, \Set{ 2, 3, 5 }, \Set{ 2, 4, 4 } \\
\text{There are } 6, 3, 6, 6 \text{ and } 3 \text{ permutations of each combination respectively} \\
\implies \abs{E_{10}} = 24 \implies \boxed{ P(E_{10}) = \frac{\abs{E_{10}}}{S} = \frac{1}{9} } \\
\\
}
$$
## 0.3
$$
\displaylines{
\text{The deck of 52 playing cards is shuffled, and the cards are turned up one at a time} \\
\text{until the first ace appears} \\
\text{Is the next card - that is , the card following the first ace - more likely} \\
\text{to be an ace of spades or a two of clubs?} \\
\\
\text{Solution:} \\
\text{Let } E_{AS}, E_{2C} \text{ be events of ace of spades and two of clubs being immediately} \\
\text{after the first ace respectively} \\
E_{AS} \text{ occurs in every shuffle where } 51 \text{ cards are shuffled and } \\
\text{then ace of spades is inserted right after the first ace} \\
\text{There are } 51! \text{ such shuffles} \\
E_{2C} \text{ occurs in every shuffle where } 51 \text{ cards are shuffled and } \\
\text{then two of clubs is inserted right after the first ace} \\
\text{There are } 51! \text{ such shuffles} \\
\implies \abs{E_{AS}} = \abs{E_{2C}} \implies \boxed{ P(E_{AS}) = P(E_{2C}) } \\
}
$$
## 0.4
$$
\displaylines{
\text{From a set of } n \text{ people, a commitee of size } j \text{ is to be chosen, and} \\
\text{from this commitee a subcommitee of size } i \ (i \leq j) \text{ is to be chosen} \\
}
$$
### 0.4.a
$$
\displaylines{
\text{Derive a combinatorial identity by counting, in two ways, the number of} \\
\text{possible choices of commitee and subcommitee - first by choosing} \\
\text{commitee and then subcommitee; and second by choosing the subcommitee first} \\
\text{and then the remaining members of the commitee} \\
\\
\text{Solution:} \\
\text{First way} \\
\text{Let } j \in [0, n], i \in [0, j] \\
\text{Choosing a commitee of size } j \text{ is } \binom{n}{j} \\
\text{Choosing a subcommitee of size } i \text{ is } \binom{j}{i} \\
\implies \text{For any given } j, i \text{ the number of possible choices is } \binom{n}{j} \cdot \binom{j}{i} \\
\\
\text{Second way} \\
\text{Let } i \in [0, n], j \in [i, n] \\
\text{Choosing a subcommitee of size } i \text{ is } \binom{n}{i} \\
\text{Choosing the remaining members of the commitee is } \binom{n-i}{j-i} \\
\implies \text{For any given } i, j \text{ the number of possible choices is } \binom{n}{i} \cdot \binom{n-i}{j-i} \\
\implies \boxed{ \forall 0 \leq i \leq j \leq n : \binom{n}{j} \cdot \binom{j}{i} = \binom{n}{i} \cdot \binom{n-i}{j-i} } \\
}
$$
### 0.4.b
$$
\displaylines{
\text{Use part 0.4.a to prove: } \sum_{j=i}^{n} \binom{n}{j}\binom{j}{i} = \binom{n}{i}2^{n-i} \text{ where } i \leq n \\
\\
\text{Solution:} \\
\sum_{j=i}^{n} \binom{n}{j}\binom{j}{i} = \sum_{j=i}^{n} \binom{n}{i}\binom{n-i}{j-i} = \binom{n}{i} \sum_{j=i}^{n} \binom{n-i}{j-i} = \\
= \sbs{k = j - i} = \binom{n}{i}\sum_{k=0}^{n-i} \binom{n-i}{k} \underbrace{ = }_{ \text{Binomial theorem} } \binom{n}{i}(1+1)^{n-i} = \binom{n}{i}2^{n-i} \\
}
$$
### 0.4.c
$$
\displaylines{
\text{Use part 0.4.a to prove: }  \sum_{j=i}^{n} \binom{n}{j}\binom{j}{i}(-1)^{n-j} = 0 \text{ where } i < n \\
\\
\text{Solution:} \\
\sum_{j=i}^{n} \binom{n}{j}\binom{j}{i}(-1)^{n-j} = \sum_{j=i}^{n} (-1)^{n-j}\binom{n}{i}\binom{n-i}{j-i} = \binom{n}{i} \sum_{j=i}^{n} (-1)^{n-j}\binom{n-i}{j-i} = \\
= \sbs{k=j-i} \binom{n}{i}\sum_{k=0}^{n-i} (-1)^{n-i-k}\binom{n-i}{k} \underbrace{ = }_{ \text{Binomial theorem} } \binom{n}{i}(1-1)^{n-i} = 0 \\
}
$$
---
## 0.5
$$
\displaylines{
\text{A certain town with a population of } 100\,000 \text{ has three newpapres: } I, II, \text{ and } III \\
\text{The proportions of people who read the newspapers are as follows:} \\
\begin{align}{}
(1) & \ I: 10\% & (4) & \ I \text{ and } II: 8\% & (7) & \ I, II \text{ and }III: 1\% \\
(2) & \ II: 30\% & (5) & \ I \text{ and } III: 2\% \\
(3) & \ III: 5\% & (6) & \ II \text{ and } III: 4\% \\
\end{align} \\
}
$$
### 0.5.a
$$
\displaylines{
\text{Find the number of people who read only one newspaper} \\
\\
\text{Solution:} \\
\text{By the inclusion-exclusion principle:} \\
\text{Number of people who only read } I: (1) - [(4) + (5)] + (7) = 1\% \\
\text{Number of people who only read } II: (2) - [(4) + (6)] + (7) = 19\% \\
\text{Number of people who read } III: (3) - [(5) + (6)] + (7) = 0\% \\
\implies \text{Total number of people who read only one newspaper is } \boxed{ 20\% \text{ or } 20\,000 } \\
}
$$
### 0.5.b
$$
\displaylines{
\text{How many people read at least two newspapers?} \\
\\
\text{Solution:} \\
\text{By the inclusion-exclusion principle:} \\
\text{Number of people who read exactly } I \text{ and } II: (4) - (7) = 7\% \\
\text{Number of people who read exactly } I \text{ and } III: (5) - (7) = 1\% \\
\text{Number of people who read exactly } II \text{ and } III: (6) - (7) = 3\% \\
\implies \text{Total number of people who read at least two newspapers is:} \\
(4)+(5)+(6)-2(7) = \boxed{ 12\% \text{ or } 12\,000 } \\
}
$$
### 0.5.c
$$
\displaylines{
\text{Let } I \text{ and } III \text{ be morning papers and } II \text{ be an evening paper} \\
\text{How many people read at least one morning paper plus an evening paper?} \\
\\
\text{Solution:} \\
\text{People reading at least one morning paper plus an evening paper must read} \\
\text{papers } I \text{ or } III \text{ and read paper } II \\
\text{So we're looking for people reading papers } (4) I \text{ and } II, (6) II \text{ and } III \text{ and } (7) I, II \text{ and } III \\
\text{These people read at least two papers and do not read "only } I \text{ and } III \text{"} \\
\implies \text{Total number of people is } 12\% - 1\% = \boxed{ 11\% \text{ or } 11\,000 } \\
}
$$
### 0.5.d
$$
\displaylines{
\text{How many people do not read any newspapers?} \\
\\
\text{Solution:} \\
\text{By inclusion-exclusion principle:} \\
\text{Total number of people reading newspapers is} \\
[(1) + (2) + (3)] - [(4) + (5) + (6)] + (7) = 32\% \text{ or } 32\,000 \\
\implies \text{Total number of people not reading any newspapers is } \boxed{ 68\% \text{ or } 68\,000 } \\
}
$$
### 0.5.e
$$
\displaylines{
\text{How many people read only one morning paper and only one evening paper?} \\
\\
\text{Solution:} \\
\text{People reading only one morning paper and only one evening paper are reading only } \\
I \text{ and } II \text{ or only } III \text{ and } II \\
\implies \text{Total number of people is } 7\%+3\% = \boxed{ 10\% \text{ or } 10\,000 } \\
}
$$
---
## 0.6
$$
\displaylines{
\text{Let } \pi \text{ be a uniformly random permutation of } \Set{ 1, \dots, n } \\
\text{If } \pi(i) = i \text{ then } i \text{ is called a fixed point of } \pi \\
}
$$
### 0.6.a
$$
\displaylines{
\text{Using the inclusion-exclusion principle, find the probability that } \pi \text{ has no fixed points} \\
\\
\text{Solution:} \\
\text{Let } E_{0} \text{ be an event that a permutation has no fixed points} \\
\text{Number of bijections } \pi: [n] \to [n] \text{ is } \abs{[n]}! = n! \\
\implies \abs{S} = n! \\
\\
\text{Let } E_{i} = \Set{ \pi | \pi(i) = i } \\
\forall k \in [1, n]: \bigcap_{j=1}^{k} E_{i_{j}} = \Set{ \pi | \forall j \in [1, k]: \pi(i_{j}) = i_{j} } \\
k \text{ places are pre-defined, we can only permute } n-k \text{ places left} \\
\implies \forall k \in [1, n]: \abs{\bigcap_{j=1}^{k} E_{i_{j}}} = (n-k)! \\
\text{By Inclusion-Exclusion principle:} \\
\text{Number of permutations with at least one fixed point is } \sum_{k=1}^{n} (-1)^{k-1} \binom{n}{k} \abs{\bigcap_{j=1}^{k} E_{i_{j}}} = \\
= \sum_{k=1}^{n} (-1)^{k-1} \binom{n}{k}(n-k)! \\
\implies \text{Number of permutations with no fixed points is} \\
\abs{E_{0}} = n! - \sum_{k=1}^{n} (-1)^{k-1} \binom{n}{k}(n-k)! \\
\implies P(E_{0}) = \frac{\abs{E_{0}}}{\abs{S}} = 1 - \sum_{k=1}^{n} (-1)^{k-1} \frac{\binom{n}{k}(n-k)!}{n!} = 1 - \sum_{k=1}^{n} \frac{(-1)^{k-1}}{k!} = \sum_{k=0}^{n} \frac{(-1)^{k}}{k!} \\
}
$$
### 0.6.b
$$
\displaylines{
\text{Show: } \lim_{ n \to \infty } P(E_{0}) = \frac{1}{e} \\
\\
\text{Solution:} \\
\text{Taylor series: }e^{x} = \sum_{k=0}^{\infty} \frac{x^{k}}{k!} \\
\implies \lim_{ n \to \infty } \sum_{k=0}^{n} \frac{(-1)^{k}}{k!} = e^{-1} \text{ and we're done} \\
\text{Without using Taylor series:} \\
\text{Let } S_{n} = P(E_{0}) = \sum_{k=0}^{n} \frac{(-1)^{k}}{k!} \\
\lim_{ n \to \infty } S_{n} = \sum_{k=0}^{\infty} \frac{(-1)^{k}}{k!} \\
\text{This series converges by alternating series test} \implies \exists \lim_{ n \to \infty } S_{n} \\
\lim_{ n \to \infty } \left( 1 - \frac{1}{n} \right)^{n} = \frac{1}{e} \\
\text{Let } T_{n} = \left( 1-\frac{1}{n} \right)^{n} \\
\text{We will show } \lim_{ n \to \infty } (S_{n} - T_{n}) = 0 \text{ thus showing } \lim_{ n \to \infty } S_{n} = \frac{1}{e} \\
}
$$
$$
\displaylines{
\text{By binomial theorem: } \left( 1 - \frac{1}{n} \right)^{n} = \sum_{k=0}^{n} \binom{n}{k}\frac{(-1)^{k}}{n^{k}} \\
\frac{\binom{n}{k}}{n^{k}} = \frac{1}{k!}\left( \frac{n}{n} \cdot \frac{n-1}{n} \cdot \ldots \cdot \frac{n-k+1}{n} \right) = \frac{1}{k!} \cdot 1 \cdot \left( 1-\frac{1}{n} \right) \cdot \ldots \cdot \left( 1 - \frac{k-1}{n} \right) \\
\text{Let } P_{k}(n) = 1 \cdot \left( 1-\frac{1}{n} \right) \cdot \ldots \cdot \left( 1 - \frac{k-1}{n} \right) \\
\implies T_{n} = \sum_{k=0}^{n} \frac{(-1)^{k}}{k!} P_{k}(n) \\
S_{n} - T_{n} = \sum_{k=0}^{n} \frac{(-1)^{k}}{k!}(1-P_{k}(n)) \underbrace{ = }_{ P_{0}(n) = P_{1}(n) = 1 } \sum_{k=2}^{n} \frac{(-1)^{k}}{k!}(1-P_{k}(n)) \\
\implies \abs{S_{n} - T_{n}} \leq \sum_{k=2}^{n} \frac{1}{k!}\abs{1-P_{k}(n)} \\
\forall i \in [1, k - 1]: 0 < 1 - \frac{i}{n} < 1 \implies 0 < P_{k}(n) < 1 \\
\implies \abs{S_{n} - T_{n}} \leq \sum_{k=2}^{n} \frac{1}{k!}(1-P_{k}(n)) \\
\forall a > 0, b > 0 \in \mathbb{R}: (1-a)(1-b) \geq 1 - a - b \\
P_{k}(n) = \left( 1-\frac{1}{n} \right)\left( 1-\frac{2}{n} \right)\dots\left( 1-\frac{k-1}{n} \right) \geq \\
\geq \left( 1-\left( \frac{1}{n} + \frac{2}{n} \right) \right)\left( 1-\frac{3}{n} \right)\dots\left( 1-\frac{k-1}{n} \right) \geq \\
\geq 1 - \left( \frac{1}{n} + \frac{2}{n} + \dots + \frac{k-1}{n} \right) \\
\implies 1 - P_{k}(n) \leq \frac{1}{n}(1 + 2 + \dots + k-1) = \frac{(k-1)k}{2n} \\
\implies \abs{S_{n} - T_{n}} \leq \sum_{k=2}^{n} \frac{1}{k!}\frac{(k-1)(k)}{2n} = \frac{1}{2n}\sum_{k=2}^{n} \frac{1}{(k-2)!} \\
\lim_{ n \to \infty } \frac{1}{2n}\sum_{k=2}^{n} \frac{1}{(k-2)!} = \lim_{ n \to \infty } \frac{1}{2n} \cdot \lim_{ n \to \infty } \sum_{k=2}^{n} \frac{1}{(k-2)!} \\
\lim_{ n \to \infty } \sum_{k=2}^{n} \frac{1}{(k-2)!} = \sum_{k=2}^{\infty} \frac{1}{(k-2)!} \\
\lim_{ n \to \infty } \abs{\frac{a_{n+1}}{a_{n}}} = \lim_{ n \to \infty } \frac{(n-2)!}{(n-1)!} = \lim_{ n \to \infty } \frac{1}{n-1} = 0 \\
\implies \text{By the ratio test series converges} \\
\implies \lim_{ n \to \infty } \frac{1}{2n}\sum_{k=2}^{n} \frac{1}{(k-2)!} = 0 \cdot \lim_{ n \to \infty } \sum_{k=2}^{n} \frac{1}{(k-2)!} = 0 \\
\implies 0 \leq \abs{S_{n} - T_{n}} \leq \underbrace{ \frac{1}{2n}\sum_{k=2}^{n} \frac{1}{(k-2)!} }_{ \to 0 } \\
\implies \lim_{ n \to \infty } \abs{S_{n} - T_{n}} = 0 \implies \boxed{ \lim_{ n \to \infty } S_{n} = \lim_{ n \to \infty } T_{n} = \frac{1}{e} } \\
}
$$
---
