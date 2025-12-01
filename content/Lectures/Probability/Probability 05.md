---
{"publish":true,"created":"26/11/25, 12:57","modified":"2025-11-26T16:31:49.314+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## Independence of many events
### Independence of two events and their complements #lemma 
$$
\displaylines{
\text{Let events $E, F$ be independent} \\
\text{Then $E$ and $F^{\complement}$ are also independent} \\
\\
\text{Proof:} \\
P(E \cap F) = P(E)P(F) \\
E = (E \cap F) \cup (E \cap F^{\complement}) \\
\implies P(E) = P(E \cap F) + P(E \cap F^{\complement}) = P(E)P(F) + P(E \cap F^{\complement}) \\
\implies P(E \cap F^{\complement}) = P(E)(1 - P(F)) = P(E)P(F^{\complement}) \\
}
$$
### Independence of an intersection
$$
\displaylines{
\text{Let } E, F, G \text{ be events} \\
\text{Let } E \text{ and } F \text{ be independent} \\
\text{Let } E \text{ and } G \text{ be independent} \\
\text{Then } E \text{ and } F \cap G \text{ are independent} \\
\text{Is this true?} \\
\\
E = \text{sum of two dice is 7} \\
F = \text{first die is 3} \\
G = \text{second die is 4} \\
F \cap G = \Set{ (3, 4) } \\
P(E \cap (F \cap G)) = P(E \mid F \cap G)P(F \cap G) = P(F \cap G) = \frac{1}{36} \\
P(E)P(F \cap G) = \frac{1}{6} \cdot \frac{1}{36} \neq \frac{1}{36} = P(E \cap (F \cap G)) \\
}
$$
### Independence of three events #definition 
$$
\displaylines{
\text{Events } E, F, G \text{ are called independent iff} \\
\begin{aeqsys}
& P(E \cap F) = P(E)P(F) \\
& P(E \cap G) = P(E)P(G) \\
& P(F \cap G) = P(F)P(G) \\
& P(E \cap F \cap G) = P(E)P(F)P(G) \\
\end{aeqsys} \\
}
$$
### Independence of many events #definition 
$$
\displaylines{
\text{Let } \mathcal{I} \text{ be a countable (maybe for uncountable too) set of indices} \\
\text{Events } \Set{ E_{i} }_{i \in \mathcal{I}} \text{ are called independent iff} \\
\forall \mathcal{J} \in \mathcal{P}_{\text{finite}}(\mathcal{I}) : P\left( \bigcap_{j \in \mathcal{J}} E_{j} \right) = \prod_{j \in \mathcal{J}} P(E_{j}) \\
}
$$
---
## Experiments and Trials
Experiments - some observations
Some experiments can be considered a series of sub-experiments
### Trials #definition 
$$
\displaylines{
\text{A series of equal and independent experiments is called trials} \\
}
$$
#### Example
$$
\displaylines{
\text{Let each trial have two outcomes} - \Set{ 0, 1 } \\
P(1) = p, P(0) = q = 1-p \\
\text{Calculate: } \begin{aeqsys}
1. & \quad P(\text{at least one 1 in } n \text{ trials}) \\
2. & \quad P(\text{exactly } k \text{ 1's in } n \text{ trials}) \\
3. & \quad P(\text{All trials are 1's}) \\
\end{aeqsys} \\
}
$$

$$
\displaylines{
\text{Solution:} \\
P(\text{at least one 1 in } n \text{ trials}) = 1 - P(\text{All 0's in } n \text{ trials}) = 1 - q^{n} = 1 - (1-p)^{n} \\
\\
\text{Let } E_{i_{1}, \dots, i_{k}} = \text{ 1's are only in given indices out of } n \text{ trials} \\
P(E_{i_{1}, \dots, i_{k}}) = p^{k}q^{n-k} = p^{k}(1-p)^{n-k} \\
P(\text{exactly } k \text{ 1's in } n \text{ trials}) = P\left( \bigcup_{\Set{ i_{1}, \dots, i_{k} } \subseteq [n]} E_{i_{1}, \dots, i_{k}} \right) = \sum_{\Set{ i_{1}, \dots, i_{k} } \subseteq [n]} P(E_{i_{1}, \dots, i_{k}}) = \\
= \binom{n}{k}p^{k}(1-p)^{n-k} \\
\\
P(\text{All trials are 1's}) = \lim_{ n \to \infty } p^{n} = \begin{eqsys}
0 & p < 1 \\
1 & p = 1 \\
\end{eqsys} \\
}
$$
#### Example
$$
\displaylines{
\text{Let each trial be a sum of one toss of 2 dice} \\
\text{Calculate } P(5 \text{ appears before } 7) \\
}
$$
$$
\displaylines{
\text{Solution:} \\
\text{Let } E_{n} = \text{in trial } n \text{ sum of } 5 \text{ appeared and no 5 or 7 has appeared before} \\
\text{Let } F = \text{no } 7 \text{ has appeared before} \\
P(5 \text{ appears before } 7) = P\left( \bigcup_{i = 1}^{\infty} E_{i} \right) = \sum_{i=1}^{\infty} P(E_{i}) \\
P(\text{Sum of } 2 \text{ dice is } 5) = \frac{4}{36} \\
P(\text{Sum of } 2 \text{ dice is } 7) = \frac{6}{36} \\
P(\text{Sum of } 2 \text{ dice is not } 5 \text{ or } 7) = 1 - \frac{4}{36} - \frac{6}{36} = \frac{26}{36} = \frac{13}{18} \\
P(E_{n}) = \frac{4}{36} \cdot \left( \frac{13}{18} \right)^{n-1} \\
\implies P(5 \text{ appears before } 7) = \sum_{i=1}^{\infty} P(E_{i}) = \frac{1}{9} \sum_{i=1}^{\infty} \left( \frac{13}{18} \right)^{i-1} = \frac{1}{9} \cdot \frac{1}{1-\frac{13}{18}} = \frac{2}{5} \\
}
$$

$$
\displaylines{
\text{Another solution:} \\
\text{Let } E = \text{5 appears before 7} \\
\text{Let } F = \text{first toss is 5} \\
\text{Let } G = \text{first toss is 7} \\
\text{Let } H = \text{first toss is not 5 and not 7} \\
P(E) = P(E \mid F)P(F) + P(E \mid G)P(G) + P(E \mid H)P(H) = \\
= 1 \cdot \frac{4}{36} + 0 \cdot \frac{6}{36} + P(E) \cdot \frac{13}{18} \\
\implies \frac{5}{18} P(E) = \frac{1}{9} \implies P(E) = \frac{2}{5} \\
}
$$
##### Generalization
$$
\displaylines{
\text{Let } E, F, G : P(E) = p, P(F) = q, P(G) = 1-p-q \\
\text{Let } A: P(A \mid E) = 1, P(A \mid F) = 0, P(A \mid G) = P(A) \\
\implies P(A) = p + (1-p-q) \cdot P(A) \implies P(A) = \frac{p}{p+q} \\
}
$$
#### Example
$$
\displaylines{
\text{Let there be } n \text{ types of coupons} \\
\text{Each coupon can be collected with probability } p_{i} \\
p_{1} + \dots + p_{n} = 1 \\
\text{John has } k \text{ coupons} \\
\text{Let } A_{i} = \text{coupon } i \text{ is collected} \\
\\
P(A_{i}) = 1 - (1-p_{i})^{k} \\
\\
P(A_{i} \cup A_{j}) = 1 - P((A_{i} \cup A_{j})^{\complement}) = 1 - P(A_{i}^{\complement} \cap A_{j}^{\complement}) = 1 - (1-p_{i}-p_{j})^{k} \\
\\
P(A_{i} \cap A_{j}) = P(A_{i} \cup A_{j}) - P(A_{i}) - P(A_{j}) = \\
= -1 - (1-p_{i}-p_{j})^{k} + (1-p_{i})^{k} + (1-p_{j})^{k} \\
}
$$
---
## Properties of conditional probability
$$
\displaylines{
\text{Let } F \text{ be an event}, F \subseteq \Omega \\
\text{Let } Q: \mathcal{P}(\Omega) \to \mathbb{R}, Q(E) = P(E \mid F) \\
\text{Then } Q \text{ is a probability function} \\
\\
\text{Proof:} \\
\forall E \in \mathcal{P}(\Omega): Q(E) = \frac{P(E \cap F)}{P(F)} \geq 0 \\
E \cap F \subseteq F \implies P(E \cap F) \leq P(F) \implies Q(E) \leq 1 \\
\implies Q: \mathcal{P}(\Omega) \to [0, 1] & (1) \\
Q(\Omega) = \frac{P(\Omega \cap F)}{P(F)} = \frac{P(F)}{P(F)} = 1 & (2) \\
\text{Let } \kappa \preccurlyeq \mathbb{N} : \forall i \neq j \in \kappa: E_{i} \cap E_{j} = \emptyset \\
Q\left( \bigcup_{i \in \kappa} E_{i} \right) = \frac{P\left( \left( \bigcup_{i \in \kappa} E_{i} \right) \cap F \right)}{P(F)} = \frac{P\left( \bigcup_{i \in \kappa} (E_{i} \cap F) \right)}{P(F)} = \frac{\sum_{i \in \kappa} P(E_{i} \cap F)}{P(F)} = \\
= \sum_{i \in \kappa} Q(E_{i}) & (3) \\
(1), (2) \text{ and } (3) \implies Q \text{ is a probability function} \\
}
$$

$$
\displaylines{
\text{Given this, we can use any and all theorems about probability functions for } Q \\
\text{i.e., we can use the short total law of probability:} \\
Q(E_{1}) = Q(E_{1} \mid E_{2})Q(E_{2}) + Q(E_{1} \mid E_{2}^{\complement})Q(E_{2}^{\complement}) = \\
= P(E_{1} \mid E_{2} \cap F)P(E_{2} \mid F) + P(E_{1} \mid E_{2}^{\complement} \cap F)P(E_{2}^{\complement} \mid F) \\
}
$$
#### Example
$$
\displaylines{
\text{Let there be infinite trials} \\
\text{Each trial has a probability of success } p \text{ and probability of failure } q = 1- p \\
\text{We want to calculate probability that} \\
n \text{ consecutive successes occured before } m \text{ consecutive failures occured} \\
\\
\text{Solution:} \\
\text{Let } E = n \text{ consecutive successes occured before } m \text{ consecutive failures occured} \\
\text{Let } H = \text{first trial is a success} \\
P(E) = P(E \mid H)p + P(E \mid H^{\complement})q \\
\text{Let } F_{n} = \text{trials } 2, 3, \dots, n \text{ are all successes} \\
P(E \mid H) = P(E \mid H \cap F_{n})P(F_{n} \mid H) + P(E \mid H \cap F_{n}^{\complement})P(F_{n}^{\complement} \mid H) = \\
= 1 \cdot \underbrace{ P(F_{n}) }_{ p^{n-1} } + P(E \mid H^{\complement}) \cdot (1-p^{n-1}) \\
P(E \mid H) = p^{n-1} + (1-p^{n-1})P(E \mid H^{\complement}) \\
\\
\text{Let } G_{m} = \text{trials } 2, 3, \dots, m \text{ are all failures} \\
\text{Applying the same logic:} \\
P(E \mid H^{\complement}) = (1-q^{m-1})P(E \mid H) \\
\implies P(E \mid H) = p^{n-1} + (1-p^{n-1})(1-q^{m-1})P(E \mid H) \\
\implies P(E \mid H) = \frac{p^{n-1}}{1 - (1-p^{n-1})(1-q^{m-1})} = \frac{p^{n-1}}{p^{n-1} + q^{m-1} - p^{n-1}q^{m-1}} \\
\implies P(E \mid H^{\complement}) = \frac{p^{n-1} - p^{n-1}q^{m-1}}{p^{n-1} + q^{m-1} - p^{n-1}q^{m-1}} \\
\implies P(E) = \frac{p^{n-1}(p + q - q^{m})}{p^{n-1} + q^{m-1} - p^{n-1}q^{m-1}} \\
}
$$
---
