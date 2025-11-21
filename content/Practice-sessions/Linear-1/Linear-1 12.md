---
{"publish":true,"created":"29/01/25, 15:01","modified":"2025-11-21T21:10:25.176+02:00","tags":["Academia","Practice","Linear-1"],"cssclasses":""}
---

# Linear-1 12
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{m \times n} \\
rank(A+B) = rank(A) + rank(B) \implies C(A) \cap C(B) = \Set{ 0 } \\
\\
\text{Proof:} \\
dim(C(A+B)) = dim(C(A)) + dim(C(B)) = dim(C(A)+C(B)) + dim(C(A) \cap C(B)) \\
C(A+B) \subseteq C(A) + C(B) \\
\implies dim(C(A+B)) \leq dim(C(A)+C(B)) \\
\implies dim(C(A) + C(B)) + dim(C(A) \cap C(B)) \leq dim(C(A)+C(B)) \\
\implies dim(C(A) \cap C(B)) \leq 0 \implies dim(C(A) \cap C(B)) = 0 \\
\implies \boxed{ C(A) \cap C(B) = \Set{ 0 } } \\
}
$$
---
$$
\displaylines{
\text{Let } V \text{ be a vector space of dimension } n \\
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Prove or disprove: } \exists B, C \text{ bases of } V: [I]^{B}_{C} = A \\
\\
\text{Disproof:} \\
\text{Let } A \text{ be non-invertible} \\
\forall B, C: [I]^{B}_{C} \text{ is invertible} \implies [I]^{B}_{C} \neq A \\
\text{Let } A \text{ be invertible} \\
\implies C(A) \text{ is a linear independence} \\
\implies B = \Set{ C_{1}(A), \dots, C_{n}(A) } \text{ is a basis of } V \\
\text{Let } C = S_{V} \\
\implies [I]^{B}_{C} = A \\
}
$$
---
$$
\displaylines{
\text{Let } A \neq 0 \in \mathbb{R}^{n \times n} \\
rank(A) = rank(A^{2}) \\
\text{Prove or disprove: } A \text{ is invertible} \\
\\
\text{Disproof:} \\
\text{Let } A = \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix} \\
A^{2} = A \implies rank(A^{2}) = rank(A) \\
A \text{ is not invertible} \\
}
$$
---
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear transformation, } T = T^{2} \\
\text{Prove: } Im(T) \oplus ker(T) = V \\
\\
\text{Proof:} \\
\text{Let } v \in Im(T) \cap ker(T) \\
\implies T(v) = 0, \exists w \in V: T(w) = v \\
T(w) = T(T(w)) = T(v) = 0 \implies v = 0 \\
\implies \boxed{ Im(T) \cap ker(T) = \Set{ 0 } } \\
\implies dim(Im(T) + ker(T)) = dim(Im(T)) + dim(ker(T))) = dim(V) \\
Im(T) + ker(T) \subseteq V \land dim(Im(T) + ker(T)) = dim(V) \\
\implies Im(T) + ker(T) = V \implies \boxed{ Im(T) \oplus ker(T) = V } \\
}
$$
---
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear transformation, } T = T^{2} \\
\text{Prove: } ker(I-T) \oplus ker(T) = V \\
\\
\text{Proof:} \\
\text{Let } v \in ker(I-T) \\
(I-T)(v) = I(v) - T(v) = v - T(v) = 0 \implies T(v) = v \implies v \in Im(T) \\
\implies ker(I-T) \subseteq Im(T) \\
\text{Let } v \in Im(T) \\
\exists w \in V: T(w) = v \\
(I-T)(v) = v - T(v) = T(w) - T(T(w)) = T(w) - T(w) = 0 \\
\implies Im(T) \subseteq ker(I-T) \\
\implies Im(T) = ker(I-T) \implies \boxed{ ker(I-T) \oplus ker(T) = V } \\
}
$$
---
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
rank(A) = k \\
\text{Prove: } rank(B) < n-k \implies A + B \text{ is non-invertible} \\
\\
\text{Proof:} \\
rank(A+B) \leq rank(A) + rank(B) < n-k + k = n \\
\implies A+B \text{ is non-invertible} \\
}
$$
---
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
rank(A) = k \\
\text{Prove or disprove:} \\
A \neq 0 \text{ and non-invertible} \implies \exists B: rank(B) = n-k: A + B \text{ is non-invertible} \\
\\
\text{Proof:} \\
A \neq 0 \implies \exists i \in [1, n]: C_{i}(A) \neq 0 \quad (WLOG) \\
\text{Let } C_{i}(B) = -C_{i}(A) \\
\text{Let } \Set{ v_{2}, \dots, C_{i}(B), \dots, v_{n-k} } \text{ be a linear independence} \\
\text{Let } n-k \text{ columns of } B \text{ be } \Set{ v_{2}, \dots, C_{i}(B), \dots, v_{n-k} } \\
\text{And } k \text{ columns of } B \text{ be } 0 \\
\implies rank(B) = n-k \\
\text{And } C_{i}(A+B) = 0 \implies A+B \text{ is non-invertible} \\
}
$$
---
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
rank(A) = k \\
\text{Prove: } \exists B: rank(B) = n-k: A + B \text{ is invertible} \\
\\
\text{Proof:} \\
\text{Let } \Set{ C_{i_{1}}(A), C_{i_{2}}(A), \dots, C_{i_{k}}(A) } \text{ be a linear independence} \\
\text{Let } C_{i_{1}}(B) = C_{i_{2}}(B) = \dots = C_{i_{k}}(B) = 0 \\
\text{For } n-k \text{ columns left:} \\
\text{Let } \Set{ v_{1}, \dots, v_{n-k} } \text{ be a linear independence} \\
\text{Let } \forall j \in [1, n-k]: C_{i_{j}}(B) = v_{j} - C_{i_{j}}(A) \\

}
$$