---
{"publish":true,"created":"05/11/24, 16:11","modified":"2025-11-21T21:10:02.026+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

## 1a
$$
\text{Prove or disprove: } (A \to B) \to (B \to A) \equiv A \lor \lnot B
$$
$$
F \equiv (A \to B) \to (B \to A)
$$

| $A$ | $B$ | $A \to B$ | $B \to A$ | $A \lor \lnot B$ | $F$ |
| :-: | :-: | :-------: | :-------: | :--------------: | :-: |
|  0  |  0  |     1     |     1     |        1         |  1  |
|  0  |  1  |     1     |     0     |        0         |  0  |
|  1  |  0  |     0     |     1     |        1         |  1  |
|  1  |  1  |     1     |     1     |        1         |  1  |
$$
\implies (A \to B) \to (B \to A) \equiv A \lor \lnot B
$$
## 1b
$$
\text{Prove or disprove: } p \to q \equiv \lnot q \to \lnot p
$$

| $p$ | $q$ | $p \to q$ | $\lnot q \to \lnot p$ |
| :-: | :-: | :-------: | :-------------------: |
|  0  |  0  |     1     |           1           |
|  0  |  1  |     1     |           1           |
|  1  |  0  |     0     |           0           |
|  1  |  1  |     1     |           1           |
$$
\implies p \to q \equiv \lnot q \to \lnot p 
$$
<div style="page-break-after: always;"></div>

## 1c
$$
\text{Prove or disprove: } (p \leftrightarrow q) \leftrightarrow (\lnot q \leftrightarrow  \lnot p) \text{ } \text{is a tautology}
$$
$$
F \equiv (p \leftrightarrow q) \leftrightarrow (\lnot q \leftrightarrow  \lnot p)
$$

| $p$ | $q$ | $p \leftrightarrow q$ | $\lnot q \leftrightarrow \lnot p$ | $F$ |
| :-: | :-: | :-------------------: | :-------------------------------: | :-: |
|  0  |  0  |           1           |                 1                 |  1  |
|  0  |  1  |           0           |                 0                 |  1  |
|  1  |  0  |           0           |                 0                 |  1  |
|  1  |  1  |           1           |                 1                 |  1  |
$$
\implies F - \text{tautology}
$$
## 1d
$$
\text{Prove or disprove: } (p \lor q) \land (p \lor r) \equiv p \land (q \lor r)
$$
$$
F \equiv (p \lor q) \land (p \lor r)
$$
$$
G \equiv p \land (q \lor r)
$$

| $p$ | $q$ | $r$ | $p \lor q$ | $p \lor r$ | $q \lor r$ | $F$ | $G$ |
| :-: | :-: | :-: | :--------: | :--------: | :--------: | :-: | :-: |
|  0  |  0  |  0  |     0      |     0      |     0      |  0  |  0  |
|  0  |  0  |  1  |     0      |     1      |     1      |  0  |  0  |
|  0  |  1  |  0  |     1      |     0      |     1      |  0  |  0  |
|  0  |  1  |  1  |     1      |     1      |     1      |  1  |  0  |
$$
\implies (p \lor q) \land (p \lor r) \neq p \land (q \lor r)
$$
---
## 2a
$$
\text{Prove: } \lnot (p \leftrightarrow q) \equiv (p \land \lnot q) \lor (q \land \lnot p)
$$
$$
\lnot (p \leftrightarrow q) \equiv \lnot ((p \to q) \land (q \to p)) \equiv \lnot ((\lnot p \lor q) \land (\lnot q \lor p)) \equiv
$$
$$
\lnot (\lnot p \lor q) \lor \lnot(\lnot q \lor p) \equiv (p \land \lnot q) \lor (q \land \lnot p)
$$
<div style="page-break-after: always;"></div>

## 2b
$$
\text{Prove: } (\lnot p \to (q \land \lnot r)) \lor (p \land q) \equiv p \lor (q \land \lnot r)
$$
$$
(\lnot p \to (q \land \lnot r)) \lor (p \land q) \equiv (p \lor (q \land \lnot r)) \lor (p \land q) \equiv p \lor ((q \land \lnot r) \lor (p \land q)) \equiv
$$

$$
p \lor (q \land (\lnot r \lor p)) \equiv (p \lor q) \land (p \lor (\lnot r \lor p)) \equiv
$$

$$
(p \lor q) \land (p \lor \lnot r) \equiv p \lor (q \land \lnot r)
$$

## 2c
$$
\text{Prove: } \lnot(p \to q) \equiv p \land \lnot q
$$
$$
\lnot (p \to q) \equiv \lnot (\lnot p \lor q) \equiv p \land \lnot q
$$
---
## 3a
1. If Eran is tired, he is upset.
2. When Eran is not upset, he is not tired.

$$
A \equiv \text{Eran is tired}
$$
$$
B \equiv \text{Eran is upset}
$$
$$
1. \text{ } A \to B \equiv \lnot A \lor B
$$
$$
2.\text{ } \lnot B \to \lnot A \equiv B \lor \lnot A \equiv \lnot A \lor B
$$
$$
\implies 1. \equiv 2.
$$
<div style="page-break-after: always;"></div>

## 3b
1. If Eyal is happy, Anat is tall; and if Anat is tall, Haggai is cute.
2. If Eyal is happy, Haggai is cute.

$$
A \equiv \text{Eyal is happy}
$$
$$
B \equiv \text{Anat is tall}
$$
$$
C \equiv \text{Haggai is cute}
$$
$$
1. \text{ } (A \to B) \land (B \to C)
$$
$$
2. \text{ } A \to C
$$

| $A$ | $B$ | $C$ | $A \to B$ | $B \to C$ | $1.$ | $2.$ |
| :-: | :-: | :-: | :-------: | :-------: | :--: | :--: |
|  0  |  1  |  0  |     1     |     0     |  0   |  1   |

$$
\implies 1. \neq 2.
$$
## 3c
1. If I am vegan, then I eat quinoa and do not eat shawarma.
2. I do not eat quinoa only if I am not vegan, and I also do not eat shawarma
if I am vegan.

$$
A \equiv \text{I am vegan}
$$
$$
B \equiv \text{I eat quinoa}
$$
$$
C \equiv \text{I eat shawarma}
$$
$$
1. \text{ } (A \to B) \land (A \to \lnot C)
$$
$$
2. \text{ } (\lnot B \to \lnot A) \land (A \to \lnot C)
$$

$$
\text{Conditional law: } A \to B \equiv \lnot B  \to \lnot A
$$
$$
\implies 1. \equiv 2.
$$
---
<div style="page-break-after: always;"></div>

## 4
The next exercise deals with cards that have a symbol on both sides—an English
letter on one side and a natural number on the other. Four cards are placed on the
table, showing the symbols A, P, 2, and 3. Which cards should be flipped to check
the statement ”If there is one of the letters AEIOU on one side of the card, then on
the other side, there is an even number”? Justify well (why the cards you suggested
need to be flipped, and why the other cards do not need to be checked).
$$
A \equiv \text{There is a letter A,E,I,O or U on the one side of the card}
$$
$$
B \equiv \text{There is an even number on the other side of the card}
$$
$$
\text{Statement: } F \equiv A \to B
$$

1. If there is a letter A on one side, then on the other is a natural number. If it's even, the statement holds, if not, the statement is false, thus we have to flip this card.
2. If there is a letter P on one side, then on the other is a natural number, if it's odd, the statement holds, if it's even, the statement still holds, thus we don't have to flip that card.
3. If there is a number 2 on one side, then on the other is a letter. If it's one of A,E,I,O or U, the statement holds, if it's not, the statement still holds, thus we don't have to flip this card.
4. If there is a number 3 on one side, then on the other is a letter. If it's not one of A,E,I,O or U, the statement holds, if it is, the statement is false, thus we have to flip this card. 

$$
C \equiv \text{If there is a letter A on one side of the card, then there is an even number on the other}
$$
$$
D \equiv \text{If there is a number 3 on one side of the card, then there is a letter A,E,I,O or U on the other}
$$
$$
F \to (C \land \lnot D) \text{ or in other words, } (\lnot C \lor D) \to \lnot F
$$
$$
\text{ We have to flip the card with a letter A and the card with a number 3}
$$
---
<div style="page-break-after: always;"></div>

## 5a
1. If I am tired or hungry, then I am irritable.
2. If I am not irritable, then I am not tired.
Conclusion: I am tired if and only if I am irritable.

$$
A \equiv \text{I am tired}
$$
$$
B \equiv \text{I am hungry}
$$
$$
C \equiv \text{I am irritable}
$$
$$
1. \text{ } (A \lor B) \to C
$$
$$
2. \text{ } \lnot C \to \lnot A
$$
$$
\text{Conclusion: } (1. \land 2. ) \to (A \leftrightarrow C)
$$

| $A$ | $B$ | $C$ | $1.$ | $2.$ | $1. \land 2.$ | $A \leftrightarrow C$ | $\text{Conclusion}$ |
| :-: | :-: | :-: | :--: | :--: | :-----------: | :-------------------: | :-----------------: |
|  0  |  1  |  1  |  1   |  1   |       1       |           0           |          0          |

$$
\implies \text{Conclusion is incorrect}
$$
##### Alternative proof:
$$
\text{If I am irritable, I can just be hungry, but not tired. Contradiction with the conclusion.}
$$
$$
\implies \text{Conclusion is incorrect}
$$
<div style="page-break-after: always;"></div>

## 5b
1. If the sun is shining, then all the roosters are crowing.
2. If my rooster, Kuki, is crowing, then the sun is shining.
Conclusion: The sun shines if and only if all the roosters are crowing

$$
A \equiv \text{The sun is shining}
$$
$$
B \equiv \text{All the roosters are crowing}
$$
$$
C \equiv \text{My rooster, Kuki, is crowing}
$$
$$
\text{Obvious implication: } B \to C
$$
$$
1. \text{ } A \to B
$$
$$
2. \text{ } C \to A
$$
$$
\text{Conclusion: } (1. \land 2.) \to (A \leftrightarrow B)
$$
$$
\text{Lines that are crossed out are contradictions to the obvious implication,} 
$$
$$
\text{and thus do not affect the result}
$$

| $A$   | $B$       | $C$       | $1.$  | $2.$  | $1. \land 2.$ | $A \leftrightarrow B$ | $\text{Conclusion}$ |
| ----- | --------- | --------- | ----- | ----- | ------------- | --------------------- | ------------------- |
| 0     | 0         | 0         | 1     | 1     | 1             | 1                     | 1                   |
| 0     | 0         | 1         | 1     | 0     | 0             | 1                     | 1                   |
| ~~0~~ | ==~~1~~== | ==~~0~~== | ~~1~~ | ~~1~~ | ~~1~~         | ~~0~~                 | ~~0~~               |
| 0     | 1         | 1         | 1     | 0     | 0             | 0                     | 1                   |
| 1     | 0         | 0         | 0     | 1     | 0             | 0                     | 1                   |
| 1     | 0         | 1         | 0     | 1     | 0             | 0                     | 1                   |
| ~~1~~ | ==~~1~~== | ==~~0~~== | ~~1~~ | ~~1~~ | ~~1~~         | ~~1~~                 | ~~1~~               |
| 1     | 1         | 1         | 1     | 1     | 1             | 1                     | 1                   |
$$
\implies \text{Conclusion is correct}
$$
##### Alternative proof:
$$
\text{If all the roosters are crowing, then my rooster Kuki is crowing, then the sun is shining.}
$$
$$
\implies \text{Conclusion is correct}
$$
---
<div style="page-break-after: always;"></div>

Let p, q be two statements such that the statement p → q has the value ”true.” In
this case, we say that p is a sufficient condition for q, and q is a necessary condition
for p. Formalize each of the following sections using appropriate predicates. In all
sections, the ”world” is the natural numbers; there is no need to state this.
$$
\text{Let us define the predicates:}
$$
$$
P(N) \equiv \text{number N is prime}
$$
$$
E(N) \equiv \text{number is even}
$$
$$
G(N, M) \equiv N > M
$$
$$
D(N, M) \equiv M \mid N \text{ (the } \mid \text{ character is a "divides" relation, in this case "M divides N")}
$$
## 6a
For every natural number n, the statement ”the number n is prime” is a sufficient condition for ”the number n is odd.”
$$
\forall N : P(N) \to \lnot E(N)
$$
## 6b
For every natural number n, the statement ”the number n is prime and greater than 2” is a sufficient and necessary condition for ”the number n is odd.”
$$
\forall N : (P(N) \land G(N, 2)) \leftrightarrow \lnot E(N)
$$
## 6c
For every natural number n, the statement ”the number n is divisible by 4” is a sufficient condition for ”the number n is even.”
$$
\forall N : D(N, 4) \to E(N)
$$
## 6d
For every natural number n, the statement ”the number n is even” is a necessary condition for ”the number n is divisible by 4.”
$$
\forall N : D(N, 4) \to E(N)
$$
---
