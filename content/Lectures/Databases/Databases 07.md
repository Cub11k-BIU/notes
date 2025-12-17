---
{"publish":true,"created":"10/12/25, 10:03","modified":"2025-12-17T10:22:45.653+02:00","tags":["Academia","Lecture","Databases"],"cssclasses":""}
---

# Database normalization
Normalization is a set of rules to apply after designing **what** data should be stored in the DB.
Normalization guarantees certain properties of the DB without the loss of information
- Better organization
- Enforcement of constraints
- Absence of redundant data
- Absence of update anomalies
## First normal form (1NF) #definition 
Tables can only contain atomic values, no nesting is allowed
## Functional dependencies (FDs) #definition 
A functional dependency is a general type of constraints on attributes
$$
\displaylines{
\text{Let two tuples agree on values } A_{1}, \dots, A_{n} \\
\text{Then, these two tuples must also agree on values of } B_{1}, \dots, B_{m} \\
\\
\text{Denoted } A_{1}, \dots, A_{n} \to B_{1}, \dots, B_{m} \\
}
$$
We can detect which FDs hold now, but we don't necessarily have to enforce all of them in the future, that is for the DBA to determine!
## Inference rules for FDs
Given a minimal set of FDs from the architect, it is important to know that there are other FDs, implicitly implied by that set.
### Armstrong's axioms
#### Reflexivity rule #lemma 
$$
\displaylines{
\forall i \in [1, n]: A_{1}, \dots, A_{n} \to A_{i} \\
}
$$
#### Right-Hand-Side Split/Combine rule #lemma 
$$
\displaylines{
A_{1}, \dots, A_{n} \to B_{1}, \dots, B_{m} \iff \begin{eqsys}
A_{1}, \dots, A_{n} \to B_{1} \\
A_{1}, \dots, A_{n} \to B_{2} \\
\vdots \\
A_{1}, \dots, A_{n} \to B_{m} \\
\end{eqsys} \\
}
$$
#### Transitivity rule #lemma 
$$
\displaylines{
\begin{eqsys}
A_{1}, \dots, A_{n} \to B_{1}, \dots, B_{m} \\
B_{1}, \dots, B_{m} \to C_{1}, \dots, C_{k} \\
\end{eqsys} \implies A_{1}, \dots, A_{n} \to C_{1}, \dots, C_{m} \\
}
$$
> [!NOTE] Inferred FDs
> Initial FDs from the provided set and the inferred FDs hold equally, with no distinction between two types
##### Exercise
- Payment(ID, name, title, amount, date, department)
- ID $\to$ name, title
- title $\to$ amount
- amount, department $\to$ date

Which FDs can be inferred?
- `Reflexivity`: ID $\to$ name
- `Reflexivity`: ID $\to$ title
- `Reflexivity`: amount, department $\to$ amount
- `Reflexivity`: amount, department $\to$ department
- `Reflexivity`: ID, department $\to$ ID
- `Transitivity`: ID $\to$ amount
- `Transitivity`: ID, department $\to$ amount
- `Reflexivity`: ID, department $\to$ department
- `Combination`: ID, department $\to$ amount, department
- `Transitivity`: ID, department $\to$ date
- etc.

Number of different inferred FDs grows exponentially, so it is reasonable to only leave the most "interesting" ones:
- Minimal left-side
- Maximal right-side

For example
- ID $\to$ name, title, amount
- ID, department $\to$ name, title, amount, date
## Attribute closure #definition 
$$
\displaylines{
\text{Let } \Set{ A_{1}, \dots, A_{n} } \text{ be a set of attributes} \\
\text{Let } F \text{ be a set of FDs} \\
\text{The closure of } \Set{ A_{1}, \dots, A_{n} } \text{ with relation to } F \text{ is then defined as} \\
\Set{ B \mid A_{1}, \dots, A_{n} \to B } \text{ and denoted } \Set{ A_{1}, \dots, A_{n} }^{+} \\
\\
\text{Computing closure can be done recursively:} \\
\begin{align}
& Closure(\Set{ A_{1}, \dots, A_{n} }, F): \\
1. & \quad X \leftarrow \Set{ A_{1}, \dots, A_{n} } \\
2. & \quad \text{while } \exists \text{ FD } [B_{1}, \dots, B_{m} \to C] \in F \text{ such that} \\
3. & \quad \quad \quad \quad \Set{ B_{1}, \dots, B_{m} } \subseteq X \text{ and } C \not\in X: \\
4. & \quad \quad X \leftarrow X \cup C \\
5. & \quad \text{return } X \\
\end{align} \\
}
$$
Returning to the previous exercice:
- $\Set{ \text{name, title} }^{+} = \Set{ \text{name, title, amount} }$
- $\Set{ \text{ID, department} }^{+} = \Set{ \text{ID, department, name, title, amount, date} }$
## Defining a key based on FDs #lemma 
$$
\displaylines{
\text{A key is a set of attributes } \Set{ A_{1}, \dots, A_{n} } \text{ such that} \\
\forall B \text{ attribute in the relation}: B \in \Set{ A_{1}, \dots, A_{n} }^{+} \\
\forall C \supset \Set{ A_{1}, \dots, A_{n} }: C \text{ is a key, also called superkey} \\
\text{A minimal key is a key such that none of its subsets is a key} \\
}
$$
We will use `key` for the general case (some arbitrary key), and `minimal key`/`super key` for keys that we know to be minimal or not minimal
### Exercise
- Enrollment(student, address, course, room, time)
- student $\to$ address
- room, time $\to$ course
- student, course $\to$ room, time

What would be the minimal key?
- Clearly, student must be in any key (any attribute that only appears in the left-side must be in the key)
- Clearly, address will not be in the minimal key (any attribute that only appears in the right-side won't be in the minimal key)
$$
\displaylines{
\Set{ \text{student, course} }^{+} = \Set{ \text{student, course, address, room, time} } = \text{Enrollment} \\
\Set{ \text{student, room, time} }^{+} = \Set{ \text{student, room, time, address, course} } = \text{Enrollment} \\
}
$$
## Relation decomposition
Let there be a relation

| Name  | ID        | Phone       | City      |
| ----- | --------- | ----------- | --------- |
| Alice | 123456789 | 03-1111111  | Ramat Gan |
| Alice | 123456789 | 050-1111112 | Ramat Gan |
| Bob   | 012345678 | 03-1111113  | Tel Aviv  |
| Bob   | 012345678 | 052-1111114 | Tel Aviv  |
- ID $\to$ Name, City
- ID $\not\to$ Phone
- Redundancy - repeated data
- Update anomalies - what if Alice moves to Tel Aviv?
- Deletion anomalies - what if Alice drops all phone numbers?

What is the solution?
- Decompose relation without losing any information
- Obtain a set of relations without abnormalities (a normal form)

For example:

| Name  | ID        | City      |
| :---- | --------- | --------- |
| Alice | 123456789 | Ramat Gan |
| Bob   | 012345678 | Tel Aviv  |

| ID        | Phone       |
| --------- | ----------- |
| 123456789 | 03-1111111  |
| 123456789 | 050-1111112 |
| 012345678 | 03-1111113  |
| 012345678 | 052-1111114 |
But how can we say for sure that a decomposition is correct, i.e. it doesn't lose any information?
## Boyce-Codd normal form (BCNF) #definition 
$$
\displaylines{
\text{Let } R \text{ be a relation} \\
\text{A non-reflexive FD } A_{1}, \dots, A_{n} \to B_{1}, \dots, B_{m} \text{ can hold in } R \\
\text{only if } \Set{ A_{1}, \dots, A_{n} } \text{ is a key in } R \\
\\
\text{In words, if a set of attributes determines even one other attribute in } R, \\
\text{it should determine the all other attributes in } R \\
}
$$
## Lossless decomposition step #lemma 
$$
\displaylines{
\text{Let } R = \Set{ A_{1}, \dots, A_{n}, B_{1}, \dots, B_{m}, C_{1}, \dots, C_{k} } \\
\text{Let } A_{1}, \dots, A_{n} \to B_{1}, \dots, B_{m} \\
\text{If } A_{1}, \dots, A_{n} \not\to C_{1}, \dots, C_{k} \implies R \text{ is not in BCNF} \\
\\
\text{We decompose } R \text{ into two relations:} \\
R_{1} = \Set{ A_{1}, \dots, A_{n}, B_{1}, \dots, B_{m} } \\
R_{2} = \Set{ A_{1}, \dots, A_{n}, C_{1}, \dots, C_{k} } \\
\\
\text{Both } R_{1}, R_{2} \text{ might already be in BCNF or might not} \\
\text{If not, we should repeat the decomposition for } R_{1}, R_{2} \text{ separately} \\
\\
\text{Clearly, a join between } R_{1} \text{ and } R_{2} \text{ on } A_{1}, \dots, A_{n} \text{ will yield exactly } R \\
}
$$
- During decomposition, it is important to be careful with duplicate rows
- For simplicity, we will assume that `DISTINCT` is applied to every relation

- All the FDs that hold in the original relation, also hold in projected relations, including implied FDs, but, excluding FDs involving attributes that were projected out
- Prefer FDs with minimal left-side and maximal right-side for decomposition
- Prefer FDs that split the relation roughly in half
### Example
- Person(name, SSN, age, hairColor, phoneNumber)
- SSN $\to$ name, age
- age $\to$ hairColor

First, find all implied FDs
- SSN $\to$ name, age, hairColor

Second, find all keys
- $\Set{ \text{SSN, phoneNumber} }$ and its supersets

Clearly, $R$ is not in BCNF, all three FDs violate it
Let us decompose on SSN $\to$ name, age, hairColor
- R1(SSN, name, age, hairColor) - all FDs are preserved
	- age $\to$ hairColor still violates BCNF, decompose again
		- R11(age, hairColor) = $\Set{ \text{age} }^{+}$
		- R12(age, SSN, name) = $\Set{ \text{SSN} }^{+}$
- R2(SSN, phoneNumber) = $\Set{ \text{SSN, phoneNumber} }^{+}$

Decomposition $\Set{ R_{1_{1}}, R_{1_{2}}, R_{2} }$ is a BCNF decomposition of $R$
