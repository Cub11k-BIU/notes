---
{"publish":true,"created":"26/10/25, 11:10","modified":"2025-11-21T21:10:13.917+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# Problems
- Computational problem
- Optimization problem
- Decision problem
In this course, we will look at decision problems.
## Decision problems - why choose them?
- Easy to define
- Interesting and strong conclusions from the solution
- Computational problems can be represented as a decision one (or series of them)
## Decision problem
### Input representation
Input is usually represented as a sequence of elements of some alphabet
#### Alphabet #definition 
A finite (in this course) set of all characters("letters") necessary to represent the input
$$
\displaylines{
\Sigma = \Set{ 0, 1 } \\
\Sigma = \Set{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 } \\
\Sigma = \Set{ a, b, c, \dots, z } \\
\dots \\
\text{Letters of the alphabet are usually denoted } \sigma, \pi, \tau, \dots \\
}
$$
#### Actions of alphabet #definition 
- Concatenation - $\Sigma_{1} \circ \Sigma_{2} = \Set{ \sigma_{1}\sigma_{2} | \sigma_{1} \in \Sigma_{1}, \sigma_{2} \in \Sigma_{2} }$
- Power - $\Sigma^{n} = \Sigma \circ \Sigma \circ \dots \circ \Sigma$ 
#### Word #definition 
A sequence of letters from the given alphabet. Not every word is a valid input.
$$
\displaylines{
\text{Words are usually denoted as } w, u, v, x, y \\
\left\lvert w \right\rvert \text{ denotes the length of the word, which in this course is always finite} \\
\text{Empty word is denoted } \varepsilon, \left\lvert \varepsilon \right\rvert = 0 \\
\varepsilon \neq \emptyset \\
\Set{ \varepsilon } \neq \emptyset \\
\\
\Sigma^{*} \text{ denotes the set of all finite words producible from } \Sigma \\
\Sigma^{*} = \bigcup_{n = 0}^{\infty} \Sigma^{n} \\
\Sigma^{+} = \Sigma^{*} - \Set{ \varepsilon } = \bigcup_{n = 1}^{\infty} \Sigma^{n} \\
}
$$
#### Actions on words #definition 
- Concatenation - denoted $w \circ u$ or just $wu$
- Power - denoted $w^{n} = w \circ w \circ \dots \circ w$. Note that $w^{0} = \varepsilon$
#### Language #definition 
A set of words, not necessarily finite(!)
$$
\displaylines{
L \subseteq \Sigma^{*} \\
}
$$
#### Actions on languages
- All actions on sets
- Concatenation - $L_{1} \circ L_{2} = \Set{ u \circ w | u \in L_{1}, w \in L_{2} }$
- Power - $L^{n} = L \circ L \circ \dots \circ L$. Note that $L^{0} = \Set{ \varepsilon }$
- Kleene closure - $L^{*} = \bigcup_{n = 0}^{\infty} L^{n}$ and $L^{+} = \bigcup_{n = 1}^{\infty} L^{n}$
#### Reverse #definition 
$$
\displaylines{
x \in L \\
x = x_{1}x_{2}\dots x_{n} \implies x^{r} = x_{n}x_{n-1}\dots x_{1} \\
\\
L^{r} = \Set{ w^{r} | w \in L } \\
}
$$
#### Prefix, suffix and sub #definition 
$$
\displaylines{
prefix(L) = \Set{ x | x, y \in \Sigma^{*} : xy \in L } \\
suffix(L) = \Set{ y | y, x \in \Sigma^{*} : xy \in L } \\
sub(L) = \Set{ y | x, y, z \in \Sigma^{*} : xyz \in L } \\
}
$$
## Defining decision problem via language
$$
\displaylines{
\text{Problem: Is number $n$ prime?} \\
\text{Let } L_{Prime} = \Set{ w | w \text{ is a string representation of a prime number} } \\
\text{Problem: Does representation of number } n \text{ belong to } L_{Prime}? \\
}
$$
$$
\displaylines{
\text{Problem: is graph $G$ connected?} \\
\text{Let } L_{Connected} = \Set{ g | g \text{ is a representation of a connected graph} } \\
\text{Problem: Does representation of graph } G \text{ belong to } L_{Connected}? \\
}
$$
#### Any decision problem can be defined as a language #definition 
Is this representation unique? - No! For example:
$$
\displaylines{
\Sigma = \Set{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 } \\
\text{Let } L_{Prime} = \Set{ w | w \text{ is a string representation of a prime number} } \\
L_{Prime} = \Set{ 2, 3, 5, \dots } \\
\Sigma = \Set{ 0, 1 } \\
\text{Then, } L_{Prime} = \Set{ 10, 11, 101, \dots } \\
\Sigma = \Set{ 1 } \\
\text{Then, } L_{Prime} = \Set{ 11, 111, 11111, \dots } \\
}
$$
---
$$
\displaylines{
(L_{1} \cdot L_{2})^{*} = L_{1}^{+} \cdot L_{2}^{+} ? \\
\\
\text{Solution:} \\
L_{1} = L_{2} = \Set{ a } \\
aaa \in L_{1}^{+} \cdot L_{2}^{+} \\
aaa \not\in (L_{1} \cdot L_{2})^{*} \\
}
$$
---
$$
\displaylines{
(L_{1} \cup L_{2})^{*} = (L_{1}^{*} \cdot L_{2})^{*} \cup (L_{1} \cdot L_{2}^{*})^{*}? \\
\\
\text{Solution:} \\
w \in (L_{1} \cup L_{2})^{*} \\
\implies \exists n : \exists w_{1}, \dots, w_{n} \in (L_{1} \cup L_{2}) : w = w_{1}w_{2}\dots w_{n} \\
\\
L_{1} = \Set{ a } \\
L_{2} = \Set{ b } \\
ba \in (L_{1} \cup L_{2})^{*} \\
ba \not\in (L_{1}^{*} \cdot L_{2})^{*} \cup (L_{1} \cdot L_{2}^{*})^{*} \\
}
$$
---
$$

$$