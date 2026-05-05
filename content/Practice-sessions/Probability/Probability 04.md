---
{"publish":true,"created":"16/11/25, 18:11","modified":"2026-03-24T14:59:39.107+02:00","tags":["Academia","Practice","Probability"],"cssclasses":""}
---

## Conditional probability #definition 
$$
\displaylines{
\text{Let } (\Omega, \mathcal{F}, P) \text{ be the probability space} \\
\text{Let } A \in \mathcal{F}: P(A) > 0 \\
\text{Define } P_{A}: \mathcal{F} \to [0, 1], P_{A}(B) = \frac{P(B \cap A)}{P(A)} \\
\text{This can be denoted as } P(B \mid A) \\
(\Omega, \mathcal{F}, P_{A}) \text{ is then also a probability space} \\
}
$$
---
## Multiplication rule #theorem 
$$
\displaylines{
\text{For any events } E_{1}, E_{2}, \dots, E_{n} \\
P\left( \bigcap_{i=1}^{n} E_{i} \right) = \prod_{i=1}^{n} P\left( E_{i} \mid \bigcap_{j=i+1}^{n} E_{j} \right) \\
\\
\text{Proof:} \\
P\left( \bigcap_{i=1}^{n} E_{i} \right) = P\lrp{E_{1} \mid \bigcap_{i=2}^{n} E_{i}} \cdot P\lrp{\bigcap_{i=2}^{n} E_{i}} = \dots = \\
= P\lrp{E_{1} \mid \bigcap_{i=2}^{n} E_{i}} \cdot P\lrp{E_{2} \mid \bigcap_{i=3}^{n} E_{i}} \cdot \ldots \cdot P(E_{n-1} \mid E_{n}) \cdot P(E_{n}) \\
}
$$
---
$$
\displaylines{
\text{Let } E_{1} = \text{car is behind the first door} \\
\text{Let } E_{2} = \text{car is behind the second door} \\
\text{Let } E_{3} = \text{car is behind the third door} \\
\text{Each event is equally likely} \\
\text{You choose the door } i \\
\text{Host opens a door you didn't choose and you see it's empty} \\
\text{Should you stay or should you change your choice if offered?} \\
\\
\text{Solution:} \\
\text{Let door } i_{1} \text{ have the car} \\
\text{Assume the "change" strategy} \\
\text{If we choose door } i_{1} \text{ we lose} \\
\text{If we choose doors } i_{2}, i_{3} \text{ we win} \\
\implies \text{The probability of winning with the "change" strategy is } \frac{2}{3} \\
}
$$
$$
\displaylines{
\text{Let the car be behind door } 1 \\
\text{Let's assume the "change" strategy} \\
\Omega = \Set{ (1, 2), (1, 3), (2, 1), (3, 1) } \\
\text{First element of the pair is the initial choice} \\
\text{Second element of the pair is the final choice after change} \\
\\
P(\Set{ (1, 2) }) = \frac{1}{3} \cdot \frac{1}{2} \\
P(\Set{ (1, 3) }) = \frac{1}{3} \cdot \frac{1}{2} \\
P(\Set{ (2, 1) }) = \frac{1}{3} \\
P(\Set{ (3, 1) }) = \frac{1}{3} \\
\implies P(\Set{ (a, b) | b = 1 }) = P(\Set{ (2, 1), (3, 1) }) = P(\Set{ (2, 1) }) + P(\Set{ (3, 1) }) = \frac{2}{3} \\
}
$$
---
$$
\displaylines{
\text{Inspector is } 60\% \text{ sure the suspect is guilty} \\
\text{Inspector then finds out that the criminal was left-handed} \\
\text{Only 20\% of the population are left-handed} \\
\text{How certain should the inspector be now that the suspect is guilty} \\
\text{if the suspect is left-handed?} \\
\\
\text{Solution:} \\
\text{Let } G = \text{suspect is guilty} \\
\text{Let } C = \text{suspect is left-handed} \\
P(G \mid C) = \frac{P(G \cap C)}{P(C)} = \frac{P(C \mid G) \cdot P(G)}{P(C \cap G) + P(C \cap G^{\complement})} \\
\text{Criminal is left-handed } \implies P(C \mid G) = 1 \\
\implies P(G \mid C) = \frac{1 \cdot 0.6}{P(C \mid G) \cdot P(G) + P(C \mid G^{\complement}) \cdot P(G^{\complement})} = \\
= \frac{0.6}{0.6 + 0.2 \cdot 0.4} = \frac{0.6}{0.68} \approx 88\%
}
$$
---
$$
\displaylines{
\text{Suppose we have 3 identical cards} \\
\text{One is red on both sides} \\
\text{One is black on both sides} \\
\text{One is red on one side and black on the other side} \\
\text{One card is randomly drawn and put on the ground} \\
\text{If the side we see is red, what is the probability that the other side is black?} \\
\\
\text{Solution:} \\
\Omega = \Set{ (i, j) | i \in [1, 3], j \in [1, 2] } \\
\text{Where the first element is the number of the card} \\
\text{And the second element is the "number" of the side we see} \\
A = \text{the side we see is red} = \Set{ (1, 1), (1, 2), (3, 1) } \\
B = \text{the other side is black} = \Set{ (2, 1), (2, 2), (3, 1) } \\
B \cap A = \Set{ (3, 1) } \\
P(B \mid A) = \frac{P(B \cap A)}{P(A)} = \frac{\frac{1}{6}}{\frac{1}{2}} = \frac{1}{3} \\
}
$$
---
