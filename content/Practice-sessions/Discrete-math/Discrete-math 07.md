---
{"publish":true,"created":"17/12/24, 16:12","modified":"2026-03-24T14:58:58.062+02:00","tags":["Academia","Practice","Discrete-math"],"cssclasses":""}
---

# Discrete-math 7
$$
\displaylines{
B \subseteq A \\
f: P(A) \to P(A) \\
f(C) = C \triangle B \\
f(f(C)) = (C \triangle B) \triangle B = C \triangle (B \triangle B) = C \triangle \emptyset = C \\
\implies f = f^{-1} \\
}
$$
---
$$
\displaylines{
f, g: A \to A \\
\exists (f \circ (g \circ f))^{-1} \\
(f \circ (g \circ f)) \text{ is surjective} \implies f \text{ is surjective} \\
((f \circ g) \circ f) \text{ is injective} \implies f \text{ is injective} \\
f \text{ is bijective} \implies \exists f^{-1} \\
(f^{-1} \circ ((f \circ (g \circ f)) \circ f^{-1})) = ((f^{-1} \circ f) \circ g \circ (f \circ f^{-1}))) = g \\
g \text{ is a composition of invertible functions} \implies \exists g^{-1} \\
}
$$
---
## Set of functions
$$
\displaylines{
B^{A} = \Set{ f \subseteq A \times B | f \text{ is a function}} \\
\lvert B^{A} \rvert = \lvert B \rvert ^{\lvert A \rvert } \\
}
$$
---
$$
\displaylines{
\text{Let } A \neq \emptyset \\
F: A^{A} \to A \\
G: A \to A^{A} \\
\text{Find } F \text{ which is surjective} \\
\text{Find } G \text{ which is injective} \\
\\
\text{Solution:} \\
\exists a \in A \implies F(f) = f(a) \\
\text{Let } x \in A \\
\text{Let } f_{x}: A \to A, \quad \forall b \in A: f_{x}(b) = x \\
F(f_{x}) = f_{x}(a) = x \\
\forall a \in A: G(a) = f_{a} \\
}
$$
---
