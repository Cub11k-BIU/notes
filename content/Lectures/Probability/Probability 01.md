---
{"publish":true,"created":"29/10/25, 13:10","modified":"2026-03-24T15:01:00.063+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

# Sample space and events
What entities are we operating with?
- Experiments - some kinds of actions that lead to some results
- Outcomes - possible results of experiments
## Sample space (or probability space) #definition 
A set $S$ of all possible outcomes of our experiment
$S$ can be one of three types, by cardinality
- Finite
- Countable (with cardinality $\aleph_{0}$)
- Uncountable (with cardinality $\aleph$ or larger)
### Examples of experiments and sample spaces
- Determining the sex of a newborn baby, $S = \Set{ \text{girl}, \text{boy} }$
- A race of 7 horses, numbered 1 through 7, $S = \Set{ (i_{1}, \dots, i_{7}) | (i_{1}, \dots, i_{7}) \in S_{7} }$
- Flipping two coins with heads($h$) and tails($t$) only, $S = \Set{ (h, h), (h, t), (t, h), (t, t) }$
- Tossing two d6 dice, $S = \Set{ (i, j) | i, j \in [1, 6] \subseteq \mathbb{N} }$
- Measuring the lifetime of a transistor, $S = \Set{ 0 } \cup \mathbb{R}_{+} = [0, +\infty) \subseteq \mathbb{R}$
## Event #definition 
Any (for uncountable case only "good") subset $E \subseteq S$
If our outcome belongs to $E$, we say that event $E$ has occurred.
### Examples of event in previous experiments
- Horse number 3 won the race, $E = \Set{ (3, i_{2}, \dots, i_{7}) }$
- First coin was a head, $E = \Set{ (h, h), (h, t) }$
- Sum of dice was 7, $E = \Set{ (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1) }$
- Transistor worked for some time, less than 5 hours, $E = \Set{ x | x \in (0, 5) }$
## Operations on events
$$
\displaylines{
\text{Let } \Set{ E_{i} }_{i \in \kappa} \text{ be a family of events} \text{ where } \kappa \text{ is some set, not necessarily countable} \\
\\
\begin{align}
1. & \text{ Intersection:} & \bigcap_{i \in \kappa} E_{i} \\
2. & \text{ Union:} & \bigcup_{i \in \kappa} E_{i} \\
3. & \text{ Complement:} & E^{C} = S \setminus E \\
4. & \text{ Subset:} & F \subseteq E \\
\end{align} \\
}
$$
$$
\displaylines{
\text{De Morgan laws} \\
(E \cup F)^{C} = E^{C} \cap F^{C} \\
(E \cap F)^{C} = E^{C} \cup F^{C} \\
}
$$
---
$$
\displaylines{
\text{Let } S \text{ be a sample space} \\
\text{Let } E \subseteq S \text{ be some event} \\
\text{Let } n(E) \text{ be a number of occurences of } E \text{ after } n \text{ experiments} \\
}
$$
If we can perform an infinite number of experiments, we might want to define probability as $p(E) = \lim_{ n \to \infty } \frac{n(E)}{n}$
This definition is very practical, but for theoretical applications it is problematic
So how do we define the probability of some event?
## Probability of an event #definition
$$
\displaylines{
\text{Let } S \text{ be a sample space} \\
\text{All possible events are } E \in \mathcal{P}(S) \\
\text{A probability function is a function } P: \mathcal{P}(S) \to [0, 1] \\
\text{With the following axioms:} \\
\begin{align}
1. & \quad \forall E \in \mathcal{P}(S) : P(E) \in [0, 1] \\
2. & \quad P(S) = 1 \\
3. & \quad \forall \kappa : \kappa \preccurlyeq \mathbb{N} : \forall \Set{ E_{i} }_{i \in \kappa} : \forall i \neq j \in \kappa: E_{i} \cap E_{j} = \emptyset \implies P\left( \bigcup_{i \in \kappa} E_{i} \right) = \sum_{i \in \kappa} P(E_{i}) \\
\end{align} \\
}
$$
### Properties of probability #lemma 
$$
\displaylines{
\begin{align}
1. & \quad P(E^{C}) = 1 - P(E) \\
2. & \quad E \subseteq F \implies P(E) \leq P(F), \quad P(F) = P(E) + P(F \setminus E) \\
3. & \quad P(E \cup F) = P(E) + P(F) - P(E \cap F) \\
\end{align} \\
}
$$
---
### Symmetrical, equally likely outcomes
Symmetrical outcomes are equally likely
$$
\displaylines{
\left\lvert S \right\rvert = n \\
S = \Set{ \omega_{1}, \dots, \omega_{n} } \\
P(\omega_{i}) = \frac{1}{n} \\
\left\lvert E \right\rvert = k \implies P(E) = \frac{k}{n} \\
}
$$
---
$$
\displaylines{
\text{Two dice are rolled} \\
\text{What is the probability that the sum is 7} \\
\\
\left\lvert E \right\rvert = 6 \\
\left\lvert S \right\rvert = 36 \\
\implies P(E) = \frac{6}{36} = \frac{1}{6} \\
}
$$
---
$$
\displaylines{
\text{If three balls are randomly taken from the box and the box itself contains} \\
\text{6 white and 5 black balls,} \\
\text{what is the probability that there is one white and two black balls?} \\
\\
\text{Let all balls be numbered} \\
\text{Then there are a total of } \left\lvert S \right\rvert = \frac{11!}{8!} \text{ ways to take three balls} \\
E = \Set{ (w,b,b), (b,w,b), (b,b,w) } \\
\implies \left\lvert E \right\rvert = 3 \cdot \left( 6 \cdot \frac{5!}{3!} \right) \\
\implies P(E) = \frac{\frac{6!}{2!}}{\frac{11!}{8!}} = \frac{4}{11} \\
}
$$
---
$$
\displaylines{
\text{A group of 9 men and 6 women, we want to select a commitee of 5 people} \\
\text{What is the probability of the commitee having 3 men and 2 women?} \\
\\
\text{Let all men be indistinguishable and all women be indistinguishable} \\
\text{The total number of possible outcomes is } \binom{15}{5} \\
\text{Let us first choose 3 men, } \binom{9}{3} \text{ and then choose 2 women, } \binom{6}{2} \\
\implies P(E) = \frac{\binom{6}{2} \cdot \binom{9}{3}}{\binom{15}{5}} \\
}
$$
---
$$
\displaylines{
\text{Poker!} \\
52 \text{ cards} \\
13 \text{ cards in each suit (spades, hearts, diamonds, clubs)} \\
A \to 2 \to 3 \to \dots \to 10 \to J \to Q \to K \to A \\
\text{Poker hand consists of 5 cards} \\
\text{A straight is a combina \\tion of 5 consequent (by nomination/value) cards of any suits} \\
\text{Note that straight with all cards of the same suit is not the same combination} \\
\text{and is called straight flush} \\
\\
\text{What is the probability of getting a straight?} \\
\\
\frac{?}{\binom{52}{5}} \\
\\
\text{The first card in our straight can be any of the first } 10 \\
\text{For each starting card, we can choose any of the suits for all five cards, this gives us } 4^{5} \\
\text{After that, we subtract the number of ways to get a straight flush, which is just } 4 \\
\implies \frac{10 \cdot (4^{5}-4)}{\binom{52}{5}} \\
}
$$

$$
\displaylines{
\text{A full house is a combination of two cards of the same value} \\
\text{and 3 cards of different same value} \\
\text{What is the probability of getting a full house?} \\
\\
\frac{?}{\binom{52}{5}} \\
\\
\text{First we choose a value of the 3 cards, } 13 \\
\text{Then we choose 3 out of 4 suits for them, } \binom{4}{3} \\
\text{Then we choose a value of the 2 cards, } 12 \\
\text{Then we choose 2 out of 4 suits for them, } \binom{4}{2} \\
\\
\implies \frac{13 \cdot \binom{4}{3} \cdot 12 \cdot \binom{4}{2}}{\binom{52}{5}} = \frac{13 \cdot 4 \cdot 12 \cdot 6}{\binom{52}{5}} \\
}
$$
---
$$
\displaylines{
\text{Now the game of Bridge!} \\
\text{There are 4 players, same deck of cards as poker, 52 cards} \\
\\
\text{What is the probabiliy of one of the players getting all 13 spades?} \\
\\
E_{i} = \Set{ \text{Player number } i \text{ receives all spades} } \\
E = \bigcup_{i \in [4]} E_{i} \implies \left\lvert E \right\rvert = 4 \cdot \left\lvert E_{1} \right\rvert = \frac{4}{\binom{52}{13}} \\
}
$$
$$
\displaylines{
\text{What is the probability of each player receiving exactly one ace?} \\
\\
\text{Let us separate cards into two subsets, 4 aces and 48 cards} \\
\text{To deal 48 cards, we simply divide them into 4 parts: } \binom{48}{12,12,12,12} \\
\text{To deal 4 aces we simply arrange them, } 4! \\
\\
\implies \frac{4! \binom{48}{12,12,12,12}}{\binom{52}{13,13,13,13}} = \frac{4! \cdot 13^{4}}{49 \cdot 50 \cdot 51 \cdot 52} = \frac{3! \cdot 13^{3}}{49 \cdot 50 \cdot 51} \\
}
$$
---
$$
\displaylines{
\text{The birthday problem!} \\
\text{There are } n \text{ people in the room} \\
\text{What is the probability of at least two of them having birthday on the same day?} \\
\\
\left\lvert E^{C} \right\rvert = \frac{(365)!}{(365-n)!} \\
\left\lvert S \right\rvert = 365^{n} \\
\implies P(E) = 1 - P(E^{C}) = 1 - \frac{\frac{(365)!}{(365-n)!}}{365^{n}} = \frac{365^{n}(365-n)! - (365)!}{365^{n}(365-n)!} \\
\\
n = 23 \implies P(E) > \frac{1}{2} \\
}
$$
---
