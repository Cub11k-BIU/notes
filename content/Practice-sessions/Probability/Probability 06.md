---
{"publish":true,"created":"30/11/25, 18:06","modified":"2025-12-01T19:51:28.587+02:00","tags":["Academia","#Practice","Probability"],"cssclasses":""}
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
= \frac{P(E^{\complement} \mid G)P(G)}{1 - P(E)} + \frac{P(E^{\complement} \mid A)P(A)}{1 - P(E)} = \underbrace{ \frac{0.95 \cdot 0.2}{0.825} }_{ P(G \mid E^{\complement}) } + \underbrace{ \frac{0.85 \cdot 0.5}{0.825} }_{ P(A \mid E^{\complement}) } \approx 0.74 \\
}
$$
---
### Exercise
Consider a serve and rally match (such as volleyball, badminton, or squash) between two players, A and B. The match consists of a sequence of rallies, with each rally beginning with a serve by one of the players and continuing until one of the players has won the rally. The winner of the rally receives a point, and the match ends when one of the players has won a total of $n$ points, with that player being declared the winner of the match. Suppose whenever a rally begins with A as the server, that A wins that rally with probability $p_{A}$ and that B wins it with probability $q_{A} = 1 - p_{A}$, and that a rally that begins with B as the server is won by A with probability $p_{B}$ and by B with probability $q_{B} = 1 - p_{B}$. Player A is to be the initial server. There are two possible server protocols that are under consideration: “winner serves,” which means that the winner of a rally is the server for the next rally, or “alternating serve,” which means that the server alternates from rally to rally, so that no two consecutive rallies have the same server. Thus, for instance, if n = 3, then the successive servers under the “winner serves” protocol would be A, B, A, A if A wins the first point, then B the next, then A wins the next two. On the other hand, the sequence of servers under the “alternating serve” protocol will always be A, B, A, B, A, ... until the match winner is decided. If you were player A, which protocol would you prefer?
$$
\displaylines{
\text{Let the players play } 2n-1 \text{ rallies} \\
\text{And the winner be decided by who accumulated at least } n \text{ points} \\
\\
\text{Let us first consider the winner serves protocol:} \\
\text{Let the player who has already lost definitively, continue serving until the end} \\
\text{If } A \text{ won the match, then } A \text{ served exactly } n \text{ times} \\
\text{If } B \text{ won the match, then } A \text{ also served exactly } n \text{ times} \\
\\
\text{Let us now consider the alternating serves protocol:} \\
A \text{ serves first, so he will serve exactly } n \text{ times} \\
\\
\text{With both serving protocols the game is a $2n-1$ trials} \\
\text{And the probability that } A \text{ wins is the probability that } n \text{ of these trials are successful} \\
\text{Out of } 2n-1 \text{ trials, } n \text{ have probability } p_{A} \text{ to succeed} \\
\text{and } n-1 \text{ have the probability } p_{B} \text{ to succeed} \\
}
$$
---
### Exercise
Suppose that initially there are $r$ players, with player $i$ having $n_{i}$ units, $\forall i \in [1, r]: n_{i} > 0$. At each stage, two of the players are chosen to play a game, with the winner of the game receiving 1 unit from the loser. Any player whose fortune drops to 0 is eliminated, and this continues until a single player has all $n = \sum_{i=1}^{r} n_{i}$ units, with that player designated as the victor. Assuming that the results of successive games are independent and that each game is equally likely to be won by either of its two players, find $P(i)$ , the probability that player $i$ is the victor.
$$
\displaylines{
\text{Let each player represent a team of } n_{i} \text{ players, each with one unit} \\
\text{There are a total of } n \text{ players} \\
\text{Let the initial teams be } S_{1}, \dots, S_{r} \subseteq [1, n] \\
\text{Let } A_{i} = \text{ player } i \text{ won} \\
\forall i \in [1, n]: P(A_{i}) = p \\
\sum_{i=1}^{n} P(A_{i}) = 1 \implies np = 1 \implies p = \frac{1}{n} \\
\implies \text{The probability that winning player } i \text{ is in team } j \in [1, r] \text{ is} \\
P(B_{j}) = P(A_{i_{1}} \cup A_{i_{2}} \cup \dots A_{i_{n_{j}}}) = \sum_{j=1}^{n_{k}} P(A_{i_{j}}) = \frac{n_{j}}{n} \\
}
$$
---
### Exercise
A coin is flipped indefinitely, the probability that it lands heads is $p$.
What is the probability that the first four flips are heads? $p^{4}$
What is the probability that the first flip is tails and then three flips are heads? $(1-p)p^{3}$
What is the probability that four heads in a row occur before tail+3 heads in a row? $p^{4}$ as it is impossible to get four heads in a row first, after tails was flipped

---
