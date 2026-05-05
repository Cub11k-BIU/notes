---
{"publish":true,"created":"23/11/25, 18:07","modified":"2026-03-24T14:59:39.116+02:00","tags":["Academia","#Practice","Probability"],"cssclasses":""}
---

### Exercise
$$
\displaylines{
\text{There are two coins } A \text{ and one coin } B \\
\text{Coin } A \text{ has probability } \frac{1}{4} \text{ to come up heads} \\
\text{Coin } B \text{ has probability } \frac{3}{4} \text{ to come up heads} \\
\text{What is the probability that the random coin that landed on heads is the coin } A? \\
\\
\text{Solution:} \\
F = \text{coin came up heads} \\
E = \text{coin is coin } A \\
P(E \mid F) = \frac{P(E \cap F)}{P(F)} = \frac{P(F \mid E)P(E)}{P(F)} = \\
= \frac{P(F \mid E)P(E)}{P(F \mid E)P(E) + P(F \mid E^{\complement})P(E^{\complement})} = \frac{\frac{1}{4} \cdot \frac{2}{3}}{\frac{1}{4} \cdot \frac{2}{3} + \frac{3}{4} \cdot \frac{1}{3}} = \frac{\frac{1}{6}}{\frac{10}{24}} = 0.4 \\
}
$$
---
### Exercise
$$
\displaylines{
\text{Consider an urn containing 12 balls, of which 8 are white} \\
\text{A sample of size 4 is to be drawn with replacement (without replacement)} \\
\text{What is the conditional probability (in each case) that the first and third balls drawn} \\
\text{will be white given that the sample drawn contains exactly 3 white balls?} \\
\\
\text{Solution:} \\
1. \quad \text{With replacement} \\
\text{Let } A = \text{sample contains exactly 3 white balls} \\
\text{Let } B_{i} = i\text{-th ball drawn is white} \\
\text{Let } C_{i} = \text{only } i \text{-th ball is not white} \\
A = (B_{1} \cap B_{2} \cap B_{3} \cap B_{4}^{\complement}) \cup (B_{1} \cap B_{2} \cap B_{3}^{\complement} \cap B_{4}) \cup \dots = \\
= C_{1} \cup C_{2} \cup C_{3} \cup C_{4} \\
P(B_{1} \cap B_{3} \mid A) = \frac{P(B_{1} \cap B_{3} \cap A)}{P(A)} \\
P(B_{1} \cap B_{3} \cap A) = P(C_{2} \cup C_{4}) = P(C_{2}) + P(C_{4}) = \left( \frac{8}{12} \right)^{3} \cdot \frac{4}{12} \cdot 2 = \frac{4}{81} \\
P(A) = P(C_{1} \cup C_{2} \cup C_{3} \cup C_{4}) = \sum_{i=1}^{4} P(C_{i}) = \left( \frac{8}{12} \right)^{3} \cdot \frac{4}{12} \cdot 4 = \frac{8}{81} \\
\implies P(B_{1} \cap B_{3} \mid A) = \frac{\frac{4}{81}}{\frac{8}{81}} = \frac{1}{2} \\
}
$$
$$
\displaylines{
2. \quad \text{Without replacement} \\
\text{Let } A = \text{sample contains exactly 3 white balls} \\
\text{Let } B_{i} = i\text{-th ball drawn is white} \\
\text{Let } C_{i} = \text{only } i \text{-th ball is not white} \\
A = (B_{1} \cap B_{2} \cap B_{3} \cap B_{4}^{\complement}) \cup (B_{1} \cap B_{2} \cap B_{3}^{\complement} \cap B_{4}) \cup \dots = \\
= C_{1} \cup C_{2} \cup C_{3} \cup C_{4} \\
P(B_{1} \cap B_{3} \mid A) = \frac{P(B_{1} \cap B_{3} \cap A)}{P(A)} \\
P(B_{1} \cap B_{3} \cap A) = P(C_{2} \cup C_{4}) = P(C_{2}) + P(C_{4}) \\
P(C_{1}) = P(C_{2}) = P(C_{3}) = P(C_{4}) = \frac{8 \cdot 7 \cdot 6 \cdot 4}{12 \cdot 11 \cdot 10 \cdot 9} \\
\implies P(B_{1} \cap B_{3} \mid A) = \frac{P(B_{1} \cap B_{3} \cap A)}{P(A)} = \frac{2 \cdot P(C_{1})}{4 \cdot P(C_{1})} = \frac{1}{2} \\
}
$$
---
### Exercise
$$
\displaylines{
\text{A red die, a blue die, and a yellow die (all six sided) are rolled} \\
\text{We are interested in the prob- ability that the number appearing on the blue die} \\
\text{is less than that appearing on the yellow die,} \\
\text{which is less than that appearing on the red die} \\
\text{That is, with B, Y, and R denoting the number on the blue, yellow, and red die,} \\
\text{we are interested in P(B < Y < R).} \\
\begin{align}
 & \text{(a) What is the probability that no two of the dice land on the same number?} \\
 & \text{(b) Given that no two of the dice land on the same number,} \\
 & \quad \quad \text{what is the conditional probability that B < Y < R?} \\
 & \text{(c) What is P(B < Y < R)?}
\end{align}
\\
\text{Solution:} \\
}
$$
$$
\displaylines{
\begin{align}
 & \centerOver{\bigcirc}{a} \quad \Omega = \Set{ (B, Y, R) | B, Y, R \in [1, 6] } \\
 & \quad \quad \text{Let } A = \text{No two dies land on the same number} \\
 & \quad \quad P(A) = 1 - P(A^{\complement}) = 1 - \frac{6+6 \cdot 5 \cdot 3}{6^{3}} \\
 & \centerOver{\bigcirc}{b} \quad P(B < Y < R \mid A) = \frac{1}{3!} \\
 & \centerOver{\bigcirc}{c} \quad P(B < Y < R) = P(B < Y < R \mid A)P(A) + P(B < Y < R \mid A^{\complement})P(A^{\complement}) = \\
 & \quad \quad = P(B < Y < R \mid A)P(A) = \frac{1}{3!} - \frac{6+6 \cdot 5 \cdot 3}{6^{3}3!} \\
\end{align} \\
}
$$
---
### Exercise
Ms. Aquina has just had a biopsy on a possibly cancerous tumor. Not wanting to spoil a weekend family event, she does not want to hear any bad news in the next few days. But if she tells the doctor to call only if the news is good, then if the doctor does not call, Ms. Aquina can conclude that the news is bad. So, being a student of probability, Ms. Aquina instructs the doctor to flip a coin. If it comes up heads, the doctor is to call if the news is good and not call if the news is bad. If the coin comes up tails, the doctor is not to call. In this way, even if the doctor doesn’t call, the news is not necessarily bad. Let $\alpha$ be the probability that the tumor is cancerous; let $\beta$ be the conditional probability that the tumor is cancerous given that the doctor does not call.
$$
\displaylines{
\begin{align}
& \text{(a) Which should be larger, $\alpha$ or $\beta$?} \\
& \text{(b) Find $\beta$ in terms of $\alpha$, and prove your answer
in part (a).} \\
\end{align} \\
}
$$
$$
\displaylines{
\text{Solution:} \\
\text{To be solved later} \\
}
$$
---
### Exercise
Suppose that an insurance company classifies people into one of three classes: good risks, average risks, and bad risks. The company’s records indicate that the probabilities that good-, average-, and bad-risk persons will be involved in an accident over a 1-year span are, respectively, $0.05, 0.15, \text{ and } 0.3$. If $20\%$ of the population is a good risk, $50\%$ an average risk, and $30\%$ a bad risk, what proportion of people have accidents in a fixed year? If policy holder A had no accidents in 1997, what is the probability that he or she is a good or average risk?
$$
\displaylines{
\text{Solution:} \\
\text{Let } E = \text{accident in the first year} \\
\text{Let } G, A, B \text{ be good, average and bad respectively} \\
P(E) = P(E \mid G)P(G) + P(E \mid A)P(A) + P(E \mid B)P(B) = \\
= 0.05 \cdot 0.2 + 0.15 \cdot 0.5 + 0.3 \cdot 0.3 = 0.175 \\
\\
P(G \cup A \mid E^{\complement}) = \frac{P((G \cup A) \cap E^{\complement})}{P(E^{\complement})} = \frac{P(G \cap E^{\complement} \cup A \cap E^{\complement})}{P(E^{\complement})} = \\
= \frac{P(E^{\complement} \mid G)P(G)}{1 - P(E)} + \frac{P(E^{\complement} \mid A)P(A)}{1 - P(E)} = \frac{0.95 \cdot 0.2}{0.825} + \frac{0.85 \cdot 0.5}{0.825} \approx 0.74 \\
}
$$
---
