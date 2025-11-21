---
{"publish":true,"created":"15/01/25, 16:01","modified":"2025-11-21T21:10:02.614+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Let } T: \mathbb{R}^{n \times n} \to \mathbb{R}^{n \times n}, T(B) = AB - BA \\
\text{Let } S: \mathbb{R}^{n \times n} \to \mathbb{R}^{n \times n}, S(B) = AB + BA \\
}
$$
## 1a
$$
\displaylines{
\text{Prove: } T, S \text{ are linear transformations} \\
\\
\text{Proof:} \\
\text{Let } \alpha \in \mathbb{R}, B_{1}, B_{2} \in \mathbb{R}^{n \times n} \\
T(B_{1} + \alpha B_{2}) = A(B_{1} + \alpha B_{2}) - (B_{1}+\alpha B_{2})A = AB_{1} - B_{1}A + \alpha AB_{2} - \alpha B_{2}A = \\
= T(B_{1}) + \alpha T(B_{2}) \\
\implies \boxed{ T \text{ is a linear transformation} } \\
S(B_{1} + \alpha B_{2}) = A(B_{1} + \alpha B_{2}) + (B_{1}+\alpha B_{2})A = AB_{1} + B_{1}A + \alpha AB_{2} + \alpha B_{2}A = \\
= S(B_{1}) + \alpha S(B_{2}) \\
\implies \boxed{ S \text{ is a linear transformation} } \\
}
$$
## 1b
$$
\displaylines{
\text{Let } A = \begin{pmatrix}
2 & 2 \\
2 & 2 \\
\end{pmatrix} \\
\text{Find basis and dimension of } Im(T), ker(T) \\
\text{Prove: } Im(T) \oplus ker(T) = \mathbb{R}^{2 \times 2} \\
\\
\text{Solution:} \\
Im(T) = \Set{ B \in \mathbb{R}^{2 \times 2} | \exists C \in \mathbb{R}^{2 \times 2}: T(B) = C } = \Set{ AB-BA | B \in \mathbb{R}^{2 \times 2} } \\
AB = \begin{pmatrix}
2 & 2 \\
2 & 2 \\
\end{pmatrix} \begin{pmatrix}
a & b \\
c & d \\
\end{pmatrix} = \begin{pmatrix}
2a+2c & 2b+2d \\
2a+2c & 2b+2d \\
\end{pmatrix} \\
BA = \begin{pmatrix}
a & b \\
c & d \\
\end{pmatrix} \begin{pmatrix}
2 & 2 \\
2 & 2 \\
\end{pmatrix} = \begin{pmatrix}
2a+2b & 2a+2b \\
2c+2d & 2c+2d \\
\end{pmatrix} \\
AB-BA = \begin{pmatrix}
2c-2b & 2d-2a \\
2a-2d & 2b-2c \\
\end{pmatrix} = (2b-2c)\begin{pmatrix}
-1 & 0 \\
0 & 1 \\
\end{pmatrix} + (2a-2d)\begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} \\
Im(T) = \Set{ (2b-2c)\begin{pmatrix}
-1 & 0 \\
0 & 1
\end{pmatrix} + (2a-2d)\begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} | a, b, c, d \in \mathbb{R} } = \\
= sp(\Set{ \begin{pmatrix}
-1 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
-1 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \boxed{ \Set{ \begin{pmatrix}
-1 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} } \text{ is a basis of } Im(T) \text{ and } dim(Im(T)) = 2 } \\
}
$$
$$
\displaylines{
ker(T) = \Set{ B \in \mathbb{R}^{2 \times 2} | T(B) = 0 } = \Set{ \begin{pmatrix}
a & b \\
c & d \\
\end{pmatrix} | \begin{array}{}
a - d = 0 \\
b - c = 0 \\
\end{array} } = \Set{ \begin{pmatrix}
a & b \\
b & a \\
\end{pmatrix} | a, b \in \mathbb{R} } = \\
= sp(\Set{ \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \boxed{ \Set{ \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix} } \text{ is a basis of } ker(T) \text{ and } dim(ker(T)) = 2 } \\
ker(T) \cap Im(T) = sp(\Set{ \begin{pmatrix}
-1 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} }) \cap sp(\Set{ \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix} }) = \Set{ 0 } \\
\implies dim(ker(T) \cap Im(T)) = 0 \\
ker(T), Im(T) \subseteq \mathbb{R}^{2 \times 2} \implies ker(T) + Im(T) \subseteq \mathbb{R}^{2 \times 2} \\
dim(ker(T)+Im(T)) = dim(ker(T))+dim(Im(T))-dim(ker(T) \cap Im(T)) \\
\implies dim(ker(T)+Im(T)) = 2 + 2 - 0 = 4 = dim(\mathbb{R}^{2 \times 2}) \\
\implies ker(T)+Im(T)=\mathbb{R}^{2 \times 2} \land ker(T) \cap Im(T) = \Set{ 0 } \\
\implies \boxed{ ker(T) \oplus Im(T) = \mathbb{R}^{2 \times 2} } \\
}
$$
## 1c
$$
\displaylines{
\text{Let } A = \begin{pmatrix}
1 & 1 \\
1 & 1 \\
\end{pmatrix} \\
\text{Find basis of } ker(ST), Im(ST) \\
\\
\text{Solution:} \\
ST(B) = S(T(B)) = S(AB-BA) = A(AB-BA) + (AB-BA)A = \\
= AAB - ABA + ABA - BAA = A^{2}B - BA^{2} \\
A^{2} = \begin{pmatrix}
1 & 1 \\
1 & 1 \\
\end{pmatrix} \begin{pmatrix}
1 & 1 \\
1 & 1 \\
\end{pmatrix} = \begin{pmatrix}
2 & 2 \\
2 & 2 \\
\end{pmatrix} \\
\text{Let } A' = A^{2} \\
\implies ST(B) = A'B - BA' = T_{A'}(B) \\
\implies \boxed{ Im(ST), ker(ST) \text{ are equal to } Im(T), ker(T) \text{ from the previous task} } \\
}
$$
## 1d
$$
\displaylines{
\text{Let } C_{A} = \Set{ B \in \mathbb{R}^{n \times n} | AB = BA } \\
\text{Prove: } C_{A} \text{ is a vector subspace of } \mathbb{R}^{n \times n} \\
\\
\text{Proof:} \\
C_{A} \subseteq \mathbb{R}^{n \times n} \\
C_{A} = \Set{ B \in \mathbb{R}^{n \times n} | AB - BA = 0 } = ker(T) \\
\text{Kernel of a linear transformation is always a vector subspace of the domain} \\
\implies \boxed{ C_{A} \text{ is a vector subspace of } \mathbb{R}^{n \times n} } \\
}
$$
---

# 2
$$
\displaylines{
\text{Let } n \in \mathbb{N}: 1 \leq m \leq n \\
\text{Let } f^{(m)} \text{ be } m \text{'th derivative of } f \\
T: \mathbb{R}_{n}[x] \to \mathbb{R}_{n}[x], T(f) = x^{m-1}f^{(m)} \\
}
$$
## 2a
$$
\displaylines{
\text{Prove: } T \text{ is a linear transformation} \\
\\
\text{Proof:} \\
\text{Let } f, g \in \mathbb{R}_{n}[x], \alpha \in \mathbb{R} \\
T(f+\alpha g) = x^{m-1}(f+\alpha g)^{(m)} = x^{m-1}(f^{(m)}+\alpha (g^{(m)})) = x^{m-1}f^{(m)}+\alpha x^{m-1}g^{(m)} = \\
= T(f) + \alpha T(g) \\
\implies \boxed{ T \text{ is a linear transformation} } \\
}
$$
## 2b
$$
\displaylines{
\text{Find basis and dimension of } Im(T), ker(T) \\
\\
\text{Solution:} \\
\text{Let } f \in \mathbb{R}_{n}[x] \\
f(x) = \sum_{k=0}^{n} a_{k}x^{k} \\
(a_{k}x^{k})^{(m)} = \begin{cases}
0 & k < m \\
\frac{k!}{(k-m)!}a_{k}x^{k-m} & k \geq m \\
\end{cases} \\
f^{(m)}(x) = \left( \sum_{k=0}^{n} a_{k}x^{k} \right)^{(m)} = \sum_{k=0}^{n} (a_{k}x^{k})^{(m)} = \sum_{k=m}^{n} \frac{k!}{(k-m)!}a_{k}x^{k-m} \\
\implies T(f) = x^{m-1}\left( \sum_{k=m}^{n} \frac{k!}{(k-m)!}a_{k}x^{k-m} \right) = \sum_{k=m}^{n} \frac{k!}{(k-m)!}a_{k}x^{k-1} = \\
= m!a_{m}x^{m-1} + (m+1)!a_{m+1}x^{m} + \dots + \frac{n!}{(n-m)!}a_{n}x^{n-1} \\
\implies T(f) \in sp(\Set{ x^{m-1}, x^{m}, \dots, x^{n-1} }) \\
\implies \boxed{ Im(T) \subseteq sp(\Set{ x^{m-1}, x^{m}, \dots, x^{n-1} }) } \\
}
$$
$$
\displaylines{
\text{Let } m-1 \leq k \leq n-1 \\
x^{k} \in sp(\Set{ x^{m-1}, x^{m}, \dots, x^{n-1} }) \\
x^{k+1} \in \mathbb{R}_{n}[x] \\
T(x^{k+1}) = x^{m-1} \cdot \frac{(k+1)!}{(k+1-m)!} \cdot x^{k+1-m} = \frac{(k+1)!}{(k+1-m)!} x^{k} \\
\implies T(\frac{(k+1-m)!}{(k+1)!}x^{k+1}) = x^{k} \\
\implies x^{k} \in Im(T) \implies \Set{ x^{m-1}, \dots, x^{n-1} } \subseteq Im(T) \\
sp(\Set{ x^{m-1}, \dots, x^{n-1} }) \text{ is a minimal vector space containing } \Set{ x^{m-1}, \dots, x^{n-1} } \\
\implies \boxed{ sp(\Set{ x^{m-1}, \dots, x^{n-1} }) \subseteq Im(T) } \\
\implies Im(T) = sp(\Set{ x^{m-1}, \dots, x^{n-1} }) \\
\Set{ x^{m-1}, \dots, x^{n-1} } \text{ is a linear independence} \\
\implies \boxed{ \Set{ x^{m-1}, \dots, x^{n-1} } \text{ is a basis of } Im(T) \text{ and } dim(Im(T)) = n-m+1 } \\
dim(ker(T)) = dim(\mathbb{R}_{n}[x]) - dim(Im(T)) = m \\
1. \quad \Set{ 1, x, \dots, x^{m-1} } \text{ is a linear independence} \\
2. \quad dim(sp(\Set{ 1, x, \dots, x^{m-1} })) = m = dim(ker(T)) \\
\implies \boxed{ \Set{ 1, x, \dots, x^{m-1} } \text{ is a basis of } ker(T) \text{ and } dim(ker(T)) = m } \\
}
$$
---

# 3
$$
\displaylines{
\text{Let } V, W \text{ be finitely generated vector spaces over } \mathbb{F} \\
\text{Let } S, T: V \to W \text{ be linear transformations} \\
}
$$
## 3a
$$
\displaylines{
\text{Prove or disprove: } ker(S) \cap ker(T) = \Set{ 0_{V} } \implies Im(S) \cap Im(T) = \Set{ 0_{W} } \\
\\
\text{Disproof:} \\
\text{Let } W \neq \Set{ 0 } \\
\text{Let } S = T \text{ be invertible} \\
\implies \begin{array}{}
1. &  \quad dim(V) = dim(W) \\
2. &  \quad ker(T) = ker(S) = ker(S) \cap ker(T) = \Set{ 0_{V} } \\
3. &  \quad Im(T) = Im(S) = Im(S) \cap Im(T) = W \neq \Set{ 0_{W} } \\
\end{array} \\
\text{For example:} \\
V = W = \mathbb{R}^{3} \\
T = S = Id_{\mathbb{R}^{3}} \\
ker(S) \cap ker(T) = \Set{ 0 } \\
Im(S) \cap Im(T) = \mathbb{R}^{3} \\
}
$$
## 3b
$$
\displaylines{
\text{Prove: } Im(T) \subseteq Im(S) \iff \exists \text{ a linear transformation } R: V \to V, T = SR \\
\\
\text{Proof:} \\
\text{Let } Im(T) \subseteq Im(S) \\
\implies \forall v \in V: \exists v_{1} \in V: T(v) = S(v_{1}) \\
\text{Let } u, v \in V, \alpha \in \mathbb{F} \\
\implies \exists u_{1}, v_{1}: S(u_{1}) = T(u), S(v_{1}) = T(v) \\
\implies S(v_{1} + \alpha u_{1}) = S(v_{1}) + \alpha S(u_{1}) = T(v) + \alpha T(u) = T(v+\alpha u) \\
\text{Let } R: V \to V, R(v) = v_{1} \\
R(v+\alpha u) = w \\
S(w) = T(v+\alpha u) \implies w = v_{1} + \alpha u_{1} = R(v) + \alpha R(u) \\
\implies R(v+\alpha u) = R(v) + \alpha R(u) \implies \boxed{ R \text{ is a linear transformation} } \\
\forall v \in V: \exists v_{1}: T(v) = S(v_{1}) = S(R(v)) \implies \boxed{ T = SR } & (1) \\
\text{Let } \exists \text{ a linear transformation } R: V \to V, T = SR \\
\implies \forall v \in V: T(v) = S(R(v)) \\
\implies \forall v \in V: \exists v_{1} \in V: R(v) = v_{1} \\
\implies \forall v \in V: \exists v_{1} \in V: T(v) = S(v_{1}) \\
\implies \boxed{ Im(T) \subseteq Im(S) } & (2) \\
(1) \text{ and } (2) \implies \\
\implies \boxed{Im(T) \subseteq Im(S) \iff \exists \text{ a linear transformation } R: V \to V, T = SR} \\
}
$$
---

# 4
$$
\displaylines{
\text{Let } T: V \to V \text{ be a linear transformation} \\
1. \quad Im(T) = Im(T^{2}) \\
2. \quad ker(T) = ker(T^{2}) \\
3. \quad ker(T) \oplus Im(T) = V \\
\text{Prove: } 1 \iff 2 \iff 3 \\
\\
\text{Proof:} \\
\text{Let } Im(T) = Im(T^{2}) \\
\implies dim(Im(T)) = dim(Im(T^{2})) \\
\implies dim(ker(T)) = dim(V) - dim(Im(T)) = dim(V) - dim(Im(T^{2})) = dim(ker(T^{2})) \\
\text{Let } v \in ker(T) \\
\implies T(v) = 0 \implies T(T(v)) = T(0) = 0 \\
\implies v \in ker(T^{2}) \implies ker(T) \subseteq ker(T^{2}) \\
\implies ker(T) = ker(T^{2}) \implies \boxed{1 \implies 2} \\
\\
\text{Let } ker(T) = ker(T^{2}) \\
\implies dim(ker(T)) = dim(ker(T^{2})) \\
\implies dim(Im(T)) = dim(V) - dim(ker(T)) = dim(V) - dim(ker(T^{2})) = dim(Im(T^{2})) \\
\text{Let } v \in Im(T^{2}) \\
\implies \exists u \in V: T(T(u)) = v \\
T(u) \in V \implies v \in Im(T) \implies Im(T^{2}) \subseteq Im(T) \\
\implies Im(T) = Im(T^{2}) \implies \boxed{2 \implies 1} \\
\implies \boxed{1 \iff 2} \\
}
$$
$$
\displaylines{
\text{Let } ker(T) = ker(T^{2}) \\
ker(T), Im(T) \subseteq V \implies ker(T) + Im(T) \subseteq V \\
\text{Let } v \in ker(T) \cap Im(T) \\
\implies T(v) = 0 \land \exists u \in V: T(u) = v \\
\implies T(T(u)) = 0 \implies u \in ker(T^{2}) \implies u \in ker(T) \\
\implies T(u) = 0 \implies v = 0 \implies ker(T) \cap Im(T) = \Set{ 0 } \\
\implies dim(ker(T) \cap Im(T)) = 0 \\
\implies dim(ker(T)+Im(T)) = dim(ker(T)) + dim(Im(T)) = dim(V) \\
\implies ker(T)+Im(T) = V \land ker(T) \cap Im(T) = \Set{ 0 } \\
\implies ker(T) \oplus Im(T) = V \implies \boxed{2 \implies 3} \\
\\
\text{Let } ker(T) \oplus Im(T) = V \\
\text{Let } v \in ker(T^{2}) \\
\implies T^{2}(v) = T(T(v)) = 0 \\
\text{Let } w = T(v) \\
\implies w \in Im(T) \\
T(w) = 0 \implies w \in ker(T) \implies w \in ker(T) \cap Im(T) \implies w = 0 \\
\implies T(v) = 0 \implies v \in ker(T) \implies ker(T^{2}) \subseteq ker(T) \\
\text{As shown earlier, } ker(T) \subseteq ker(T^{2} \implies ker(T) = ker(T^{2}) \implies \boxed{3 \implies 2} \\
\implies \boxed{2 \iff 3} \\
\\
\implies \boxed{1 \iff 2 \iff 3} \\
}
$$
---

# 5a
$$
\displaylines{
\text{Prove or disprove: } \exists \text{ different non-invertible linear transformations } S, T: \mathbb{R}^{3} \to \mathbb{R}^{3} \\
\text{such that: } Im(S) = Im(T), ker(S) = ker(T) \\
\\
\text{Proof:} \\
A = \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix}, B = \begin{pmatrix}
0 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
T(v) = Av, S(v) = Bv \\
\implies T(\begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix}) = \begin{pmatrix}
0 \\
b \\
c \\
\end{pmatrix}, S(\begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix}) = \begin{pmatrix}
0 \\
-b \\
c \\
\end{pmatrix} \\
Im(T) = Im(S) = sp(\Set{ \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} }) \\
ker(T) = ker(S) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} }) \\
}
$$
# 5b
$$
\displaylines{
\text{Prove or disprove: } \exists \text{ non-invertible linear transformations } S, T: \mathbb{R}^{3} \to \mathbb{R}^{3} \text{ such that:} \\
ker(S) = Im(T), ker(T) = Im(S) \\
\\
\text{Proof:} \\
A = \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix}, B = \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
T(v) = Av, S(v) = Bv \\
\implies T(\begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix}) = \begin{pmatrix}
0 \\
b \\
c \\
\end{pmatrix}, S(\begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix}) = \begin{pmatrix}
a \\
0 \\
0 \\
\end{pmatrix} \\
Im(T) = ker(S) = sp(\Set{ \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} }) \\
Im(S) = ker(T) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} }) \\
}
$$
---
