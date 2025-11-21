---
{"publish":true,"created":"09/12/24, 14:12","modified":"2025-11-21T21:10:14.023+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 11
## Partial order properties (continued) #theorem 
$$
\displaylines{
& \text{Let } (A, \preccurlyeq) \text{ be a partially ordered set} \\
1. & \text{If } A \text{ has a smallest element, then it is unique} \\
2. & \text{If } A \text{ has a smallest element, then it is minimal and the only minimal element of the set} \\
3. & \text{If in addition, } (A, \preccurlyeq) \text{ is a totally ordered set and } a \text{ is a minimal element,} \\
& \text{then } a \text{ is also the smallest} \\
}
$$
$$
1. \text{ and } 2. \text{ proved in lecture 10}
$$
$$
\displaylines{
\text{Proof for 3.} \\
\text{Let } a \in A \text{ be a minimal element} \\
(A, \preccurlyeq) \text{ is a totally ordered set } \implies \forall a, b \in A: \left[\begin{array}{}
a \preccurlyeq b \\
b \preccurlyeq a \\
\end{array}\right. \\
\text{Let } b \in A \\
1. \quad b \preccurlyeq a \\
a \text{ is minimal} \implies \\
\forall b \in A: (b \preccurlyeq a \to b = a) \implies b = a \\
\underset{ \preccurlyeq \text{ is reflexive} }{ \implies } a \preccurlyeq a \implies a \preccurlyeq b \\
2. \quad a \preccurlyeq b \\
\forall b \in A: a \preccurlyeq b \implies a = min(A)
}
$$
---
## Definitions
$$
\displaylines{
\text{Let } (A, \preccurlyeq) \text{ be a partially ordered set}, B \subseteq A \\
}
$$
### Upper bound #definition 
$$
\displaylines{
u \in A \text{ is called an upper bound of } B \text{ iff } \\
\forall x \in B: x \preccurlyeq u \\
}
$$
### Lower bound #definition 
$$
\displaylines{
l \in A \text{ is called a lower bound of} B \text{ iff } \\
\forall x \in B: l \preccurlyeq x \\
}
$$
### Least upper bound (supremum, sup) #definition
$$
\displaylines{
\text{Let } U \text{ be set of all upper bounds of } B \\
\text{If } U \text{ has a minimum, this element is called the least upper bound of } B \\
\exists u = min(U) \implies u = sup(B) \\
}
$$
### Greatest lower bound (infimum, inf) #definition 
$$
\displaylines{
\text{Let } L \text{ be set of all lower bounds of } B \\
\text{If } L \text{ has a maximum, this element is called the greatest lower bound of } B \\
\exists l = max(L) \implies l = inf(B) \\
}
$$
---
## Properties of relations
$$
\text{Let } f \subseteq A \times B
$$
### Complete #definition 
$$
\displaylines{
f \text{ is complete iff} \\
\forall a \in A \exists b \in B: (a, b) \in f \\
}
$$
### To one #definition 
$$
\displaylines{
f \text{ is to one iff} \\
\forall a \in A \forall b_{1}, b_{2} \in B: ((a, b_{1}) \in f \land (a, b_{2}) \in f) \to b_{1} = b_{2} \\
}
$$
### Onto #definition 
$$
\displaylines{
f \text{ is onto iff} \\
\forall b \in B \exists a \in A: (a, b) \in f \\
}
$$
### One-to-one #definition 
$$
\displaylines{
f \text{ is one-to-one iff} \\
\forall a_{1}, a_{2} \in A \forall b \in B: ((a_{1}, b) \in f \land (a_{2}, b) \in f) \to a_{1} = a_{2} \\
}
$$
---
## Example
$$
\displaylines{
\text{Let } f \subseteq \mathbb{N} \times P(\mathbb{N}) \\
f = \Set{ (n, X) | \forall n \in \mathbb{N}, \forall X \in P(\mathbb{N}): n \in X } \\
\\
f \text{ is complete: } \forall n \in \mathbb{N}: n \in \mathbb{N} \\
f \text{ is not to one: } \forall n \in \mathbb{N}: n \in \mathbb{N} \land n \in \Set{ n } \\
f \text{ is not onto: } \forall n \in \mathbb{N}: (n, \emptyset) \not\in f \\
f \text{ is not one-to-one: } (1, \mathbb{N}) \in f \land (2, \mathbb{N}) \in f \\
}
$$
---
## Function #definition 
$$
\displaylines{
\text{Relation } f \subseteq A \times B \text{ is called a function iff} \\
f \text{ is complete and one-to-one} \\
\\
\text{In this case: } f : A \to B \\
\forall a \in A \exists! b \in B: (a, b) \in f \\
b = f(a) \\
}
$$
---
## Example
$$
\displaylines{
\text{Let } f \subseteq \mathbb{N} \times \mathbb{N} \\
f = \Set{ (x, y) | \forall x, y \in \mathbb{N} : y = x - 1 } \\
f \text{ is not complete: } x = 1 \implies x-1 \not\in \mathbb{N} \\
}
$$
---
## Definitions
$$
\text{Let } f : A \to B
$$
### One-to-one function (injection) #definition 
$$
\displaylines{
f \text{ is called a one-to-one function iff} f \text{ is also a one-to-one relation} \\
\forall a_{1}, a_{2} \in A: f(a_{1}) = f(a_{2}) \implies a_{1} = a_{2} \\
}
$$
### Onto function (surjection) #definition 
$$
\displaylines{
f \text{ is called an onto function iff } f \text{ is also an onto relation} \\
\forall b \in B \exists a \in A: f(a) = b \\
}
$$
### Onto and one-to-one (bijection) #definition 
---
## Example
$$
\displaylines{
\text{Let } f : \mathbb{N} \to \mathbb{N} \\
f(x) = x + 1 \\
f \text{ is one-to-one: } f(x_{1}) = f(x_{2}) \implies x_{1} + 1 = x_{2} + 1 \implies x_{1} = x_{2} \\
f \text{ is not onto: } f(x) \neq 1 \\
}
$$
---
## Domain of the function #definition 
$$
\displaylines{
\text{Let } f : A \to B \\
A \text{ is called a domain of } f \\
Dom(f) = A \\
}
$$
## Range of the function #definition 
$$
\displaylines{
\text{Let } f : A \to B \\
B \text{ is called a range of } f \\
Range(f) = D
}
$$
## Image of the function #definition 
$$
\displaylines{
\text{Let } f : A \to B \\
\text{Set of all possible values of } f(x) \text{ is called image of the function} \\
Im(f) = \Set{ f(x) | x \in A } = \Set{ b \in B | \exists a \in A: f(a) = b } \\
}
$$
---
## Composition of functions #definition 
$$
\displaylines{
\text{Let } f : A \to B, g : B \to C \\
\text{Composition of } f \text{ with } g : \quad (g \circ f) : A \to C \\
\forall x \in A: (g \circ f)(x) = g(f(x)) \\
}
$$
---
