---
{"publish":true,"created":"12/11/25, 12:11","modified":"2026-03-24T15:01:00.090+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## Matching problem
$$
\displaylines{
\text{There are } n \text{ men and } n \text{ hats} \\
\text{Hats are thrown together and shuffled} \\
\text{Then men choose some hat} \\
\text{Calculate the probability that no man has his own hat} \\
\text{This can be interpreted as permuting } \Set{ 1, \dots, n } \\
\text{and calculating number of permutations with no fixed points} \\
\\
\text{Solution:} \\
\text{Let } E_{i} = \Set{ \pi | \pi(i) = i } \\
\forall k \in [1, n]: \bigcap_{j=1}^{k} E_{i_{j}} = \Set{ \pi | \forall j \in [1, k]: \pi(i_{j}) = i_{j} } \\
k \text{ places are pre-defined, we can only permute } n-k \text{ places left} \\
\implies \forall k \in [1, n]: \abs{\bigcap_{j=1}^{k} E_{i_{j}}} = (n-k)! \\
\text{By Inclusion-Exclusion principle:} \\
\text{Number of permutations with at least one fixed point is } \sum_{k=1}^{n} (-1)^{k-1} \binom{n}{k} \abs{\bigcap_{j=1}^{k} E_{i_{j}}} = \\
= \sum_{k=1}^{n} (-1)^{k-1} \binom{n}{k}(n-k)! \\
\implies \text{Number of permutations with no fixed points is} \\
\abs{E_{0}} = n! - \sum_{k=1}^{n} (-1)^{k-1} \binom{n}{k}(n-k)! = \sum_{k=0}^{n} (-1)^{k}\binom{n}{k}(n-k)! \\
\implies P(E_{0}) = \sum_{k=0}^{n} (-1)^{k} \frac{\binom{n}{k}(n-k)!}{n!} = \sum_{k=0}^{n} \frac{(-1)^{k}}{k!} \\
\text{Let's call it } P_{n} = P(E_{0}) \\
}
$$
## Round table problem
$$
\displaylines{
\text{Let there be } 10 \text{ married couples (husbands and wives)} \\
\text{They're randomly seated around the round table} \\
\text{Find the probability that no wife is sitting next to her husband} \\
\\
\text{Solution:} \\
\text{There are a total of } 19! \text{ seatings} \\
\text{Let } E_{i} \text{ be the event where couple number } i \text{ sits together} \\
P(E) = 1 - P\left( \bigcup_{i=1}^{10} E_{i} \right) \\
P(E_{i_{1}} \cap E_{i_{2}} \cap \dots \cap E_{i_{k}}) = ? \\
k \text{ couples are sitting together, let's consider them as } k \text{ units} \\
\text{In each unit there are } 2 \text{ arrangements} \\
\implies \text{There are now } 20 - k \text{ units and thus } 2^{k}(19-k)! \text{ seatings} \\
\implies P(E) = \sum_{k=0}^{10} (-1)^{k}\binom{10}{k} \frac{2^{k}(19-k)!}{19!} \\
\text{For } n \text{ couples the formula is: } P(E) = \sum_{k=0}^{n} (-1)^{k}\binom{n}{k} \frac{2^{k}(2n-1-k)!}{(2n-1)!} \\
}
$$
# Conditional probability
Let us toss 2 dice
Each outcome (sum of two dice) has the probability of $\frac{1}{36}$
Let us now know the result of the first die, e.g. $3$
What is the probability of each outcome now? For the outcomes that are now impossible the probability is $0$, for outcomes that are possible the probability is now $\frac{1}{6}$
Let $E$ denote the event and $F$ be a condition
Then $P(E \mid F)$ denotes the probability of event $E$ occurring under condition $F$
$F$ basically reduces the initial sample space $S$ to some subset $S_{F}$
$$
\displaylines{
P(E \mid F) = \frac{P(E \cap F)}{P(F)} \\
}
$$
### Examples
Joe is $80\%$ certain that his key is in the pockets of his jacket
Joe is also $40\%$ sure that it is in the left pocket and $40\%$ sure that it is in the right pocket
Joe is checking his left pocket, keys are not in the left pocket.
What is the probability that the keys are now in the right pocket?
$$
\displaylines{
\text{Let } E_{L} = \text{keys are in the left pocket} \\
\text{Let } E_{R} = \text{keys are in the right pocket} \\
P(E_{R} \mid E_{L}^\complement) = \frac{P(E_{R} \cap E_{L}^\complement)}{P(E_{L}^{\complement})} = \frac{40\%}{60\%} = 66\% \\
}
$$
---
There are 52 cards
There are four players - North, South, East, West
We know that North and South together have 8 spades
What is the probability that East has three spades?
$$
\displaylines{
E_{8} = \text{North and South have 8 spades} \\
E_{3} = \text{East has 3 spades} \\
\text{Alternative solution, not by definition of conditional probability} \\
\text{There are 26 cards to be divided between East and West, among them 5 spades} \\
\implies P(E_{3} \mid E_{8}) = \frac{\binom{5}{3}\binom{21}{10}}{\binom{26}{13}} \\
}
$$
---
What is the probability of drawing 2 red balls from the box with 8 red balls and 4 white balls?
$$
\displaylines{
\text{Let } E_{1} = \text{first ball is red} \\
\text{Let } E_{2} = \text{second ball is red} \\
\\
\text{An equally likely balls case:} \\
P(E_{1} \cap E_{2}) = P(E_{1}) \cdot P(E_{2} \mid E_{1}) = \\
= \frac{2}{3} \cdot \frac{7}{11} = \frac{14}{33} \\
\\
\text{Non-equally likely balls case:} \\
\text{Let } \omega(\text{red}) = n \\
\text{Let } \omega(\text{white}) = m \\
\text{Let } P(\text{ball}) = \frac{\omega(\text{ball})}{\sum_{b \in \text{Box}} \omega(b)} \\
\implies P(E_{1} \cap E_{2}) = P(E_{1}) \cdot P(E_{2} \mid E_{1}) = \\
= P\left( \bigcup_{i=1}^{8} r^{1}_{i} \right) \cdot P\left( \bigcup_{i=1}^{8} r^{2}_{i} \mid \bigcup_{i=1}^{8} r^{1}_{i} \right) = \left( \sum_{i=1}^{8} P(r^{1}_{i}) \right) \cdot P\left( \bigcup_{i=1}^{8} r^{2}_{i} \mid \bigcup_{i=1}^{8} r^{1}_{i} \right) = \\
= \frac{8n}{8n+4m} \cdot \frac{7n}{7n+4m} \\
}
$$
---
## Multiplication rule #theorem 
$$
\displaylines{
\text{For any events } E_{1}, E_{2}, \dots, E_{n} \\
P\left( \bigcap_{i=1}^{n} E_{i} \right) = \prod_{i=1}^{n} P\left( E_{i} \mid \bigcap_{j=i+1}^{n} E_{j} \right) \\
\\
\text{Proof by writing each of the probabilities by definition and cancelling each other out} \\
}
$$
## Event independence #definition 
$$
\displaylines{
\text{Events } E_{1}, E_{2} \text{ are called independent} \\
\text{iff } P(E \cap F) = P(E)P(F) \\
}
$$
### Hat-check problem
$$
\displaylines{
\text{Probability of no man taking his own hat is } P_{n} = \sum_{k=0}^{n} \frac{(-1)^{k}}{k!} \\
}
$$
Then, what is the probability that exactly $k$ men have taken their own hat?
$$
\displaylines{
\text{Solution:} \\
\text{Let's choose some } k \text{ men} \\
\text{Let } F = k \text{ men have their own hats} \\
\text{Let } G = \text{all other men don't have their own hats} \\
P(F) = P\left( \bigcap_{i=1}^{k} F_{i} \right) = P(F_{1})P(F_{2} \mid F_{1})P(F_{3} \mid F_{1} \cap F_{2}) \dots P(F_{k} \mid F_{1} \cap \dots \cap F_{k-1}) = \\
= \frac{1}{n} \cdot \frac{1}{n-1} \cdot \ldots \cdot \frac{1}{n-k+1} = \frac{(n-k)!}{n!} \\
\implies P(E) = \binom{n}{k}P(F \cap G) = P(F) \cdot P(G \mid F) = \binom{n}{k}\frac{(n-k)!}{n!} \cdot P_{n-k} = \frac{P_{n-k}}{k!} \\
}
$$
---
Let there be 52 cards divided into 4 piles of 13 cards
What is the probability that each pile has exactly one ace?
$$
\displaylines{
\text{Let } E_{1} = \text{AS is in some pile} \\
\text{Let } E_{2} = \text{AS and AH are in different piles} \\
\text{Let } E_{3} = \text{AS, AH and AC are in different piles} \\
\text{Let } E_{4} = \text{All aces are in different piles} \\
\\
P\left( \bigcap_{i=1}^{4} E_{i} \right) = P(E_{1}) \cdot P(E_{2} \mid E_{1}) \cdot P(E_{3} \mid E_{1} \cap E_{2}) \cdot P(E_{4} \mid E_{1} \cap E_{2} \cap E_{3}) = \\
= 1 \cdot \underbrace{ \frac{39}{51} }_{ 1 - \frac{12}{51} } \cdot \underbrace{ \frac{26}{50} }_{ 1 - \frac{26}{50} } \cdot \underbrace{ \frac{13}{49} }_{ 1 - \frac{36}{49} } \approx 0.1 \\
}
$$
---
Let there be a basketball quarter-final round, there are 8 teams
4 teams are strong and famous, say teams 1-4, 4 are no-name weaker teams
What is the probability that none of the strong teams play against each other in the quarter-final?
$$
\displaylines{
\text{Let } \forall i \in [1, 4]: E_{i} = \text{Team } i \text{ plays with a weaker team} \\
P\left( \bigcap_{i=1}^{4} E_{i} \right) = P(E_{1}) \cdot P(E_{2} \mid E_{1}) \cdot P(E_{3} \mid E_{1} \cap E_{2}) \cdot P(E_{4} \mid E_{1} \cap E_{2} \cap E_{3}) = \\
= \frac{4}{7} \cdot \frac{3}{5} \cdot \frac{2}{3} \cdot 1 = \frac{24}{105} \approx 0.23
}
$$
---
