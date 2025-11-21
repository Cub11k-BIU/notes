---
{"publish":true,"created":"16/12/24, 14:12","modified":"2025-11-21T21:10:14.033+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 13
## Invertible function #definition 
$$
\displaylines{
\text{Function } f: A \to B \text{ is called invertible if there exists a function } g: B \to A \text{ such that} \\
(g \circ f) = Id_{A} \\
(f \circ g) = Id_{B} \\
\text{In this case, } g \text{ is called the inverse of } f \text{ and vice versa} \\
}
$$
### Example
$$
\displaylines{
f: \mathbb{R} \to \mathbb{R}, f(x) = x + 1 \\
g: \mathbb{R} \to \mathbb{R}, g(x) = x - 1 \\
(g \circ f)(x) = f(g(x)) = x \\
(f \circ g)(x) = g(f(x)) = x \\
}
$$
### Uniqueness of the inverse function #lemma 
$$
\displaylines{
\text{If function has in inverse, it is unique} \\
\text{Let } f: A \to B \\
\exists g: B \to A : (g \circ f) = Id_{A} \implies \exists! g: B \to A : (g \circ f) = Id_{A} \\
\\
\text{Proof:} \\
\text{Let } g_{1}, g_{2}: B \to A : (g_{1} \circ f) = Id_{A} \land (f \circ g_{2}) = Id_{B} \\
\text{Let } b \in B \\
g_{2}(b) = (Id_{A} \circ g_{2})(b) = ((g_{1} \circ f) \circ g_{2})(b) = (g_{1} \circ (f \circ g_{2}))(b) = \\
= (g_{1} \circ Id_{B})(b) = g_{1}(b) \\
\implies \forall b \in B: g_{1}(b) = g_{2}(b) \implies \boxed{g_{1} = g_{2}} \\
}
$$
## Inverse function #definition 
$$
\displaylines{
\text{Inverse function is usually denoted as } f^{-1} \\
}
$$
---
## Properties of invertible functions
### Inverse function is invertible #lemma 
$$
\displaylines{
\text{Let } f: A \to B \\
(f^{-1})^{-1} = f \\
\\
\text{Proof:} \\
\exists f^{-1}: B \to A : (f^{-1} \circ f) = Id_{A}, (f \circ f^{-1}) = Id_{B} \\
\text{By definition: } f^{-1} \text{ is invertible and } f \text{ is an inverse of } f^{-1} \\
}
$$
### Composition of invertible functions is invertible #lemma 
$$
\displaylines{
\text{Let } f: A \to B, g: B \to C \text{ be invertible functions} \\
\text{Then } (g \circ f) \text{ is invertible, and } (g \circ f)^{-1} = (f^{-1} \circ g^{-1}) \\
\\
\text{Proof:} \\
((g \circ f) \circ (f^{-1} \circ g^{-1})) = (g \circ (f \circ f^{-1}) \circ g^{-1}) = (g \circ (Id_{B} \circ g^{-1})) = (g \circ g^{-1}) = Id_{C} \\
((f^{-1} \circ g^{-1}) \circ (g \circ f)) = (f^{-1} \circ (g^{-1} \circ g) \circ f) = (f^{-1} \circ (Id_{B} \circ f)) = (f^{-1} \circ f) = Id_{A} \\
}
$$
---
## Invertibility of the function #theorem 
$$
\displaylines{
\text{Let } f: A \to B \\
\exists f^{-1} \iff f \text{ is bijective} \\
\\
\text{Proof:} \\
\text{Let } \exists f^{-1} \\
(f^{-1} \circ f) = Id_{A}, \quad (f \circ f^{-1}) = Id_{B} \\
Id_{A} \text{ is injective} \implies (f^{-1} \circ f) \text{ is injective} \implies f \text{ is injective} \\
Id_{B} \text{ is surjective} \implies (f \circ f^{-1}) \text{ is surjective} \implies f \text{ is surjective} \\
\implies \boxed{f \text{ is bijective}} & [1] \\
\\
\text{Let } f \text{ be bijective} \\
\text{Let } f^{-1} = \Set{ (b, a) \in B \times A | f(a) = b } \\
f \text{ is surjective} \implies \forall b \in B \exists a \in A: f(a) = b \\
\iff \forall b \in B \exists a \in A: (b, a) \in f^{-1} \\
\implies f^{-1} \text{ is complete} & (1) \\
f \text{ is injective} \implies \forall b \in B, \forall a_{1}, a_{2} \in A: [f(a_{1}) = f(a_{2}) = b \to a_{1} = a_{2}] \\
\iff \forall b \in B, \forall a_{1}, a_{2} \in A: [(b, a_{1}), (b, a_{2}) \in f^{-1} \to a_{1} = a_{2}] \\
\implies f^{-1} \text{ is to one} & (2) \\
(1) \land (2) \implies f^{-1}: B \to A, f^{-1}(b) = a \\
(f^{-1} \circ f)(a) = f^{-1}(f(a)) = f^{-1}(b) = a \implies (f^{-1} \circ f) = Id_{A} \\
(f \circ f^{-1})(b) = f(f^{-1}(b)) = f(a) = b \implies (f \circ f^{-1}) = Id_{B} \\
\implies \boxed{\exists f^{-1}} & [2] \\
[1] \land [2] \implies \boxed{f^{-1} \iff f \text{ is bijective}} \\
}
$$
---
