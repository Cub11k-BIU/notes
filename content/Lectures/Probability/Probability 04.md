---
{"publish":true,"created":"19/11/25, 12:58","modified":"2025-11-21T21:10:14.636+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

# Bayes formula and law of total probability
## "Short" law of total probability #lemma 
$$
\displaylines{
\text{Let } \Omega \text{ be the sample space} \\
\text{Let } E \text{ be some event} \\
\text{Let } F \text{ be some event} \\
\\
\text{Then } P(E) = P(E \cap F) + P(E \cap F^{\complement}) = P(E \mid F)P(F) + P(E \mid F^{\complement})P(F^{\complement}) = \\
= P(E \mid F)P(F) + P(E \mid F^{\complement})(1 - P(F)) \\
}
$$
## "Short" Bayes formula #definition 
$$
\displaylines{
P(E \mid F)P(F) = P(E \cap F) = P(F \cap E) = P(F \mid E)P(E) \\ \implies P(E \mid F) = \frac{P(F \mid E)P(E)}{P(F)} \\
}
$$
---
#### Example
Let there be some insurance company. The insurance company believes that all people are divided into two categories - accident prone ones and not accident prone ones. Accident prone ones are considered to be $30\%$ of population. 
Accident prone ones have probability of $40\%$ to have at least one accident in the next year.
Not accident prone ones have probability of $20\%$ to have an accident in the next year.
What is the probability of some new client having an accident in the next year?
$$
\displaylines{
\text{Let } A = \text{new person has an accident in the next year} \\
\text{Let } B = \text{new person is accident prone} \\
P(A) = P(A \cap B) + P(A \cap B^{\complement}) = P(A \mid B)P(B) + P(A \mid B^{\complement})(1 - P(B)) = \\
= 0.4 \cdot 0.3 + 0.2 \cdot 0.7 = 0.12 + 0.14 = 0.26 \\
}
$$
Let us now assume that the new client had an accident last year. What is the probability of him being accident prone?
$$
\displaylines{
A \text{ occured} \\
\implies \text{We're calculating probability of } B \text{ with } A \text{ being the condition} \\
\text{By short Bayes formula: } P(B \mid A) = \frac{P(A \mid B)P(B)}{P(A)} = \frac{0.4 \cdot 0.3}{0.26} = \frac{12}{26} \approx 0.46 \\
}
$$
---
#### Example
Let there be a deck of n distinct cards. One player is opening cards one by one. Second player has an opportunity to call one card (the next one) to be a card $X$. Is there a specific moment in which the second player should call the next card?
$$
\displaylines{
\text{Let us prove by induction that any strategy would be equivalently bad (or good)} \\
\text{Base case. } n = 2 \implies \text{Probability of winning is } \frac{1}{2} \\
\text{Induction step. Let any strategy for } n-1 \text{ cards be equivalently bad (or good)} \\
\text{with probability to win being } \frac{1}{n-1} \\
\text{Let us have a deck of } n \text{ cards} \\
\text{Let us fix some strategy } S \\
\text{Let } p \text{ be the probability that the first card is chosen according to strategy } S \\
\implies \text{Probability of winning in this case is } p \cdot \frac{1}{n} \\
\text{Let the first card be not } X \\
\text{The probability of out strategy not choosing first card is } (1-p) \\
\text{Three events occured:} \\
\text{We didn't choose first card, first card was not } X \text{ and we won with } n-1 \text{ cards} \\
\text{The probability of all of these events happening is } (1-p) \frac{n-1}{n} \cdot \frac{1}{n-1} = (1-p) \frac{1}{n} \\
\\
\text{From this we can conclude that for any strategy, the probability to win would be } \frac{1}{n} \\
}
$$
---
#### Example
Let there be a multiple choice question with $m$ possible answers
Student knows the correct answer with probability $p$
In case the student doesn't know the answer, he takes a guess, with probability $\frac{1}{m}$ he gives a correct answer.
What is the probability of student actually knowing the correct answer if he answered correctly?
$$
\displaylines{
\text{Let } K = \text{student knows the correct answer} \\
\text{Let } C = \text{student answered correctly} \\
\\
P(K \mid C) = \frac{P(C \mid K)P(K)}{P(C)} = \frac{1 \cdot p}{P(C \mid K)P(K) + P(C \mid K^{\complement})(1-P(K))} = \\
= \frac{p}{p + \frac{1-p}{m}} = \frac{pm}{p(m-1)+1} \\
}
$$
---
#### Example
Let there be some blood test for disease $X$
With probability $95\%$ it detects a disease if it is present (true positive)
With probability $1\%$ it detects a disease if it is not present (false positive)
$0.5\%$ of population have the disease
What is the probability of a person having the disease if the test is positive?
$$
\displaylines{
P(D \mid +) = \frac{P(+ \mid D)P(D)}{P(+)} = \frac{0.95 \cdot 0.005}{P(+ \cap D) + P(+ \mid D^{\complement})(1-P(D))} = \\
= \frac{0.00475}{0.00475 + 0.01 \cdot 0.995} = \frac{95}{294} \approx 0.32 \\
}
$$
---
#### Example
Professor $P$ studies disease $X$
Professor has a dilemma:
- If he is at least $80\%$ certain that his patient has disease $X$ - he immediately performs the surgery
- If he is less than $80\%$ certain - he asks to do some additional expensive testing
Let there be a new diabetic patient, professor was $60\%$ certain that he has disease $X$
Patient took the test and got the positive result
The test always gives true positives, and gives $30\%$ false positives
Should the professor perform surgery or perform more tests?
$$
\displaylines{
P(D \mid +) = \frac{P(+ \mid D)P(D)}{P(+ \mid D)P(D) + P(+ \mid D^{\complement})P(D^{\complement})} = \frac{0.6}{0.6 + 0.3 \cdot 0.4} = \frac{60}{72} \approx 0.833 \\
\\
\implies \text{Professor should perform surgery} \\
}
$$
---
## Law of total probability #theorem 
$$
\displaylines{
\text{Let } \Omega \text{ be a sample space} \\
\text{Let } F_{1}, F_{2}, \dots, F_{n} \text{ be mutually exclusive events} \\
\text{Let } E \text{ be an event} \\
\implies E = \bigcup_{i=1}^{n} (E \cap F_{i}) \\
\implies P(E) = \sum_{i=1}^{n} P(E \cap F_{i}) = \sum_{i=1}^{n} P(E \mid F_{i})P(F_{i}) \\
}
$$
#### Example
Let's take a previous example of $n$ cards game
There are $n-1$ cards, excluding card $X$
There are $(n-1)!$ different orders of these cards
$$
\displaylines{
\text{Let } E = \text{we win with some strategy } S \\
P(E) = \sum_{O \in \text{All orders}} P(E \mid O)P(O) = \sum_{O \in \text{All orderings}} \frac{1}{n} \cdot \frac{1}{(n-1)!} = \frac{(n-1)!}{n(n-1)!} = \frac{1}{n} \\ 
}
$$
## Bayes formula #definition 
$$
\displaylines{
\forall i \in [1, n]: P(F_{i} \mid E) = \frac{P(E \mid F_{i})P(F_{i})}{P(E)} = \frac{P(E \mid F_{i})P(F_{i})}{\sum_{j=1}^{n} P(E \mid F_{j})P(F_{j})} \\
}
$$
---
#### Example
Let there be a plane is missing.
There are three different disjoint areas - $A_{1}, A_{2}, A_{3}$
If the plane is in region $A_{i}$, we can locate it with probability $1 - \beta_{i}$
We tried to find it in area $A_{1}$ and we didn't succeed.
What is the probability of the plane being in area $A_{1}, A_{2} \text{ or } A_{3}?$
$$
\displaylines{
\text{Let } R_{i} = \text{plane is in } A_{i} \\
\text{Let } E = \text{we didn't find the plane in } A_{1} \\
\\
P(R_{i} \mid E) = \frac{P(E \mid R_{i})P(R_{i})}{P(E)} = \\
= \frac{P(E \mid R_{i})P(R_{i})}{P(E \mid R_{1})P(R_{1}) + P(E \mid R_{2})P(R_{2}) + P(E \mid R_{3})P(R_{3})} \\
\forall i \in [1, 3]: P(R_{i}) = \frac{1}{3} \\
\implies \begin{eqsys}
P(R_{1} \mid E) = \frac{\beta_{1}}{\beta_{1} + 2} \\
P(R_{2} \mid E) = \frac{1}{\beta_{1} + 2} \\
P(R_{3} \mid E) = \frac{1}{\beta_{1} + 2} \\
\end{eqsys} \\
}
$$
---
#### Example
Let there be three cards, one with both sides being red, one with sides being black and one with one red and one black side.
One card is randomly selected, the side we see is red
What is the probability of the other side to be black?
$$
\displaylines{
P(RR) = P(RB) = P(BB) \\
\\
P(RB \mid R) = \frac{P(R \mid RB)P(RB)}{P(R \mid RR)P(RR) + P(R \mid RB)P(RB) + P(R | BB)P(BB)} = \\
= \frac{P(R \mid RB)}{P(R \mid RR) + P(R \mid RB) + P(R \mid BB)} = \\
= \frac{\frac{1}{2}}{1 + \frac{1}{2} + 0} = \frac{1}{3} \\
}
$$
---
#### Example
Let there be a small town
A new family is moving into a house in this town
Family is father, mother and two kids
We can see a mother walking with her daughter
What is the probability that both kids are girls?
$$
\displaylines{
G = \text{one of the kids is a girl} \\
P(G_{1} \cap G_{2} \mid G) = \frac{P(G \mid G_{1} \cap G_{2})P(G_{1} \cap G_{2})}{P(G)} = \\
= \frac{P(G \mid G_{1} \cap G_{2})P(G_{1} \cap G_{2})}{P(G \mid G_{1} \cap G_{2})P(G_{1} \cap G_{2}) + P(G \mid G_{1} \cap B_{2})P(G_{1} \cap B_{2}) + P(G \mid B_{1} \cap G_{2})P(B_{1} \cap G_{2})} = \\
= \frac{\frac{1}{4}}{\frac{1}{4} + P(G \mid G_{1} \cap B_{2}) \frac{1}{4} + P(G \mid B_{1} \cap G_{2}) \frac{1}{4}} \\
\text{Let } p \text{ be the probability that mother walks with the daughter} \\
\implies (1-p) \text{ is the probability that mother walks with the son} \\
\implies P(G_{1} \cap G_{2} \mid G) = \frac{1}{1 + 2p} \\
}
$$
---
