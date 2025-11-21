---
{"publish":true,"created":"10/12/24, 14:12","modified":"2025-11-21T21:10:14.030+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 12
## Associativity of the function composition  #theorem 
$$
\displaylines{
\text{Let} \\
f : A \to B \\
g : B \to C \\
h : C \to D \\
h \circ (g \circ f) = (h \circ g) \circ f \\
\\
\text{Proof:} \\
\underline{\text{For function } h \circ (g \circ f)} \\
f : A \to B, g : B \to C \\
\text{By definition of composition: } (g \circ f) : A \to C \\
h : C \to D \\
\text{By definition of composition: } (h \circ (g \circ f)) : A \to D \\
\underline{\text{For function } (h \circ g) \circ f} \\
g: B \to C, h: C \to D \\
\text{By definition of composition: } (h \circ g) : B \to D \\
f : A \to B \\
\text{By definition of composition: } ((h \circ g) \circ f) : A \to D \\
\implies \boxed{\left\{\begin{array}{}
Dom(h \circ (g \circ f)) = Dom((h \circ g) \circ f) \\
Range(h \circ (g \circ f)) = Range((h \circ g) \circ f) \\
\end{array}\right.} \quad (1) \\
\\
\text{Let } a \in A \\
(h \circ (g \circ f))(a) = h((g \circ f)(a)) = h(g(f(a))) \\
((h \circ g) \circ f)(a) = (h \circ g)(f(a)) = h(g(f(a))) \\
\implies \boxed{\forall a \in A: (h \circ (g \circ f))(a) = ((h \circ g) \circ f)(a)} \quad (2) \\
(1) \text{ and } (2) \implies \boxed{h \circ (g \circ f) = (h \circ g) \circ f} \\
}
$$
---
## Properties of function composition #theorem 
$$
\displaylines{
& \text{Let } f : A \to B, g : B \to C \\
1. & \text{If } (g \circ f) \text{ is one-to-one, then } f \text{ is one-to-one} \\
2. & \text{If } (g \circ f) \text{ is onto, then } g \text{ is onto} \\
}
$$
$$
\displaylines{
\text{Proof for 1.} \\
\text{Let } a_{1}, a_{2} \in A: f(a_{1}) = f(a_{2}) \\
g \text{ is complete and to one} \implies g(f(a_{1})) = g(f(a_{2})) \\
\implies \text{By definition of composition: } (g \circ f)(a_{1}) = (g \circ f)(a_{2}) \\
(g \circ f) \text{ is one-to-one} \implies a_{1} = a_{2} \\
\implies \boxed{\forall a_{1}, a_{2} \in A: f(a_{1}) = f(a_{2}) \to a_{1} = a_{2}} \\
}
$$
$$
\displaylines{
\text{Proof for 2.} \\
\text{Let } c \in C \\
(g \circ f) \text{ is onto} \implies \forall c \in C: \exists a \in A: (g \circ f)(a) = c \iff g(f(a)) = c \\
\text{Let } b = f(a), b \in B \\
\implies \boxed{\forall c \in C: \exists b \in B: g(b) = c} \\
}
$$
---
### Composition of two injective functions is injective #lemma 
$$
\displaylines{
\text{Let } f_{1} : A \to B, f_{2} : B \to C \\
\text{If } f_{1}, f_{2} \text{ are one-to-one} \\
\text{Then } (f_{2} \circ f_{1}) \text{ is one-to-one} \\
\text{Proof:} \\
\text{Let } a_{1},a_{2} \in A : (f_{2} \circ f_{1})(a_{1}) = (f_{2} \circ f_{1})(a_{2}) \\
\text{By definition of composition: } (f_{2} \circ f_{1})(a_{1}) = (f_{2} \circ f_{1})(a_{2}) \iff f_{2}(f_{1}(a_{1})) = f_{2}(f_{1}(a_{2})) \\
f_{2} \text{ is one-to-one} \implies f_{1}(a_{1}) = f_{1}(a_{2}) \\
f_{1} \text{ is one-to-one} \implies a_{1} = a_{2} \\
\implies \boxed{\forall a_{1},a_{2} \in A: (f_{2} \circ f_{1})(a_{1}) = (f_{2} \circ f_{1})(a_{2}) \to a_{1} = a_{2}} \\
}
$$
## Composition of injective functions is injective #theorem 
$$
\displaylines{
\text{Let } f_{1}, f_{2}, \dots, f_{n} \text{ be one-to-one functions, such that} \\
\text{the composition } (((f_{n} \circ \dots) \circ f_{2}) \circ f_{1}) \text{ is defined} \\
\text{Then, } (((f_{n} \circ \dots) \circ f_{2}) \circ f_{1}) \text{ is also one-to-one} \\
}
$$
$$
\displaylines{
\text{Proof:} \\
\text{Base case. Let } n = 1 \\
(((f_{n} \circ \dots) \circ f_{2}) \circ f_{1}) = (f_{1}) \\
\boxed{(f_{1}) \text{ is one-to-one}} \\
\text{Induction step. Let } (((f_{n} \circ \dots) \circ f_{2}) \circ f_{1}) \text{ be one-to-one} \\
\text{Composition of functions is associative} \\
\implies (((f_{n+1} \circ \dots) \circ f_{2}) \circ f_{1}) = (f_{n+1} \circ (((f_{n} \circ \dots) \circ f_{2}) \circ f_{1}))\\
\text{Let } g = (((f_{n} \circ \dots) \circ f_{2}) \circ f_{1}) \\
\text{Then } (((f_{n+1} \circ \dots) \circ f_{2}) \circ f_{1}) = (f_{n+1} \circ g) \\
g \text{ is one-to-one and } f_{n+1} \text{ is one-to-one} \\
\text{By the lemma above: } (f_{n+1} \circ g) \text{ is one-to-one} \\
\implies \boxed{(((f_{n+1} \circ \dots) \circ f_{2}) \circ f_{1}) \text{ is one-to-one}} \\
\text{Base case + induction step } \implies \text{Proved by induction} \\
}
$$
---
