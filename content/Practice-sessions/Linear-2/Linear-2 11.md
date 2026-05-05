---
{"publish":true,"created":"17/06/25, 18:06","modified":"2026-03-24T14:59:33.340+02:00","tags":["Academia","Practice","Linear-2"],"cssclasses":""}
---

$$
\displaylines{
T \text{ is normal} \implies S = aT + bT^{*} \text{ is normal} \\
\\
\text{Proof:} \\
SS^{*} = (aT + bT^{*})(aT + bT^{*})^{*} = (aT + bT^{*})(\overline{a}T^{*} + \overline{b}T) = \\
= \left\lvert a \right\rvert^{2}TT^{*} + a\overline{b}TT + b\overline{a}T^{*}T^{*} + \left\lvert b \right\rvert^{2}T^{*}T \\
S^{*}S = (\overline{a}T^{*} + \overline{b}T)(aT + bT^{*}) = \\
= \left\lvert a \right\rvert^{2}T^{*}T + \overline{b}aTT + \overline{a}bT^{*}T^{*} + \left\lvert b \right\rvert^{2}TT^{*} \\
T^{*}T = TT^{*} \implies S^{*}S = SS^{*} \\
\\
\text{Note:} \\
\forall T: S \text{ is normal} \iff \left\lvert a \right\rvert = \left\lvert b \right\rvert \\
}
$$
---
$$
\displaylines{
A = \begin{pmatrix}
a & 0 & b \\
0 & 2a & a \\
i & 1 & a \\
\end{pmatrix} \\
\text{Find all values of } a, b \text{ such that } A \text{ is normal/unitary/hermitian} \\
\\
\text{Solution:} \\
A^{*} = \begin{pmatrix}
\overline{a} & 0 & -i \\
0 & 2\overline{a} & 1 \\
\overline{b} & \overline{a} & \overline{a} \\
\end{pmatrix} \\
AA^{*} = \begin{pmatrix}
\left\lvert a \right\rvert^{2} + \left\lvert b \right\rvert^{2} & b\overline{a} & \overline{a}b-ai \\
a\overline{b} & 5\left\lvert a \right\rvert^{2} & 2a + \left\lvert a \right\rvert^{2} \\
\overline{a}i+a\overline{b} & 2\overline{a} + \left\lvert a \right\rvert^{2} & 2 + \left\lvert a \right\rvert^{2} \\
\end{pmatrix} \\
A^{*}A = \begin{pmatrix}
2 & -i & -2i \\
i & 4\left\lvert a \right\rvert^{2}+1 & 2\left\lvert a \right\rvert^{2} + a \\
a\overline{b}+\overline{a}i & 2\left\lvert a \right\rvert^{2} + \overline{a} & \left\lvert b \right\rvert^{2} + 2\left\lvert a \right\rvert^{2} \\
\end{pmatrix} \\
AA^{*} = A^{*}A \iff \left\{\begin{array}{}
\left\lvert a \right\rvert^{2} + \left\lvert b \right\rvert^{2} = 2 \\
b\overline{a} = -i \\
a\overline{b} = i \\
\left\lvert a \right\rvert^{2} = 1 \\
\left\lvert a \right\rvert^{2} = a \\
\end{array}\right. \implies \boxed{ \left\{\begin{array}{}
a = 1 \\
b = -i
\end{array}\right. } \\
\text{Now let us check unitarity and hermitianity:} \\
(AA^{*})_{11} \neq 1 \implies \boxed{ A \text{ is not unitary} } \\
\text{Let } a = 1, b = -i \implies \boxed{ A \text{ is hermitian} } \\
}
$$
---
$$
\displaylines{
A \text{ is hermitian and untary } \overset{ ? }{ \implies } A = I \\
A \text{ is hermitian and untary } \overset{ ? }{ \implies } A^{2} = I \\
A \text{ is hermitian and } A^{2} = I \overset{ ? }{ \implies } A \text{ is unitary} \\
A \text{ is unitary and } A^{2} = I \overset{ ? }{ \implies } A \text{ is hermitian} \\
\\
\text{Solution:} \\
\text{First is wrong: } \boxed{ A = -I } \implies A^{*} = -I \implies AA^{*} = A^{*}A = I \\
\text{Second is correct: } A = A^{*} \implies AA^{*} = I \implies \boxed{ A^{2} = I } \\
\text{Third is correct: } A = A^{*} \implies \boxed{ I = AA = AA^{*} = A^{*}A } \\
\text{Fourth is correct: } A^{2} = I, AA^{*} = I \implies \boxed{ A^{*} = A^{-1} = A } \\
}
$$
---
