---
{"publish":true,"created":"31/01/25, 15:01","modified":"2025-11-21T21:10:02.648+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
B = \Set{ v_{1} = \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, v_{2} = \begin{pmatrix}
2 \\
1 \\
0 \\
\end{pmatrix}, v_{3} = \begin{pmatrix}
0 \\
3 \\
1 \\
\end{pmatrix} } \text{ is a basis of } \mathbb{R}^{3} \\
C = \Set{ u_{1} = \begin{pmatrix}
0 \\
2 \\
-1 \\
\end{pmatrix}, u_{2} = \begin{pmatrix}
2 \\
0 \\
2 \\
\end{pmatrix}, u_{3} = \begin{pmatrix}
1 \\
-2 \\
1 \\
\end{pmatrix} } \text{ is a basis of } \mathbb{R}^{3} \\
E \text{ is a standard basis of } \mathbb{R}^{3} \\
}
$$
## 1a
$$
\displaylines{
\text{Find } [I]^{B}_{E}, [I]^{C}_{E} \\
\\
\text{Solution:} \\
[I]^{B}_{E} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ [v_{1}]_{E} } } & \overset{ | }{ \underset{ | }{ [v_{2}]_{E} } } & \overset{ | }{ \underset{ | }{ [v_{3}]_{E} } } \\
\end{pmatrix} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ v_{1} } } & \overset{ | }{ \underset{ | }{ v_{2} } } & \overset{ | }{ \underset{ | }{ v_{3} } } \\
\end{pmatrix} = \begin{pmatrix}
1 & 2 & 0 \\
0 & 1 & 3 \\
1 & 0 & 1 \\
\end{pmatrix} \\
\text{In a similar way: } [I]^{C}_{E} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ u_{1} } } & \overset{ | }{ \underset{ | }{ u_{2} } } & \overset{ | }{ \underset{ | }{ u_{3} } } \\
\end{pmatrix} = \begin{pmatrix}
0 & 2 & 1 \\
2 & 0 & -2 \\
-1 & 2 & 1 \\
\end{pmatrix} \\
\implies \boxed{ [I]^{B}_{E} = \begin{pmatrix}
1 & 2 & 0 \\
0 & 1 & 3 \\
1 & 0 & 1 \\
\end{pmatrix} }, \boxed{ [I]^{C}_{E} = \begin{pmatrix}
0 & 2 & 1 \\
2 & 0 & -2 \\
-1 & 2 & 1 \\
\end{pmatrix} } \\
}
$$
## 1b
$$
\displaylines{
\text{Find } [I]^{E}_{C} \\
\\
\text{Solution:} \\
[I]^{E}_{C} = ([I]^{C}_{E})^{-1} = \begin{pmatrix}
0 & 2 & 1 \\
2 & 0 & -2 \\
-1 & 2 & 1 \\
\end{pmatrix}^{-1} \\
\left(\begin{array}{ccc|ccc}
0 & 2 & 1 & 1 & 0 & 0 \\
2 & 0 & -2 & 0 & 1 & 0 \\
-1 & 2 & 1 & 0 & 0 & 1 \\
\end{array}\right) \overset{ \begin{array}{}
R_{2} = R_{2} + 2R_{3} \\
R_{3} = -R_{3} \\
R_{1} \leftrightarrow R_{3} \\
\end{array} }{ \to } \left(\begin{array}{ccc|ccc}
1 & -2 & -1 & 0 & 0 & -1 \\
0 & 4 & 0 & 0 & 1 & 2 \\
0 & 2 & 1 & 1 & 0 & 0 \\
\end{array}\right) \\
\overset{ \begin{array}{}
R_{3} = \frac{1}{2}(2R_{3}-R_{2}) \\
R_{2} = \frac{1}{4}R_{2} \\
\end{array} }{ \to } \left(\begin{array}{ccc|ccc}
1 & -2 & -1 & 0 & 0 & -1 \\
0 & 1 & 0 & 0 & \frac{1}{4} & \frac{1}{2} \\
0 & 0 & 1 & 1 & -\frac{1}{2} & -1 \\
\end{array}\right) \overset{ \begin{array}{}
R_{1} = R_{1} + R_{3} \\
R_{1} = R_{1} + 2R_{2} \\
\end{array} }{ \to } \left(\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 0 & -1 \\
0 & 1 & 0 & 0 & \frac{1}{4} & \frac{1}{2} \\
0 & 0 & 1 & 1 & -\frac{1}{2} & -1 \\
\end{array}\right) \\
\implies \boxed{ [I]^{E}_{C} = \begin{pmatrix}
1 & 0 & -1 \\
0 & \frac{1}{4} & \frac{1}{2} \\
1 & -\frac{1}{2} & -1 \\
\end{pmatrix} } \\
}
$$

## 1c
$$
\displaylines{
\text{Find } [I]^{B}_{C} \\
\\
\text{Solution:} \\
[I]^{B}_{C} = [I]^{E}_{C} [I]^{B}_{E} = \begin{pmatrix}
1 & 0 & -1 \\
0 & \frac{1}{4} & \frac{1}{2} \\
1 & -\frac{1}{2} & -1 \\
\end{pmatrix} \begin{pmatrix}
1 & 2 & 0 \\
0 & 1 & 3 \\
1 & 0 & 1 \\
\end{pmatrix} = \begin{pmatrix}
0 & 2 & -1 \\
\frac{1}{2} & \frac{1}{4} & \frac{5}{4} \\
0 & \frac{3}{2} & -\frac{5}{2} \\
\end{pmatrix} \\
\implies \boxed{ [I]^{B}_{C} = \begin{pmatrix}
0 & 2 & -1 \\
\frac{1}{2} & \frac{1}{4} & \frac{5}{4} \\
0 & \frac{3}{2} & -\frac{5}{2} \\
\end{pmatrix} } \\
}
$$
---

# 2
$$
\displaylines{
\text{Let } V, W \text{ be vector spaces over } \mathbb{R} \\
\text{Let } T: V \to W \text{ be a linear transformation} \\
\text{Let } B = \Set{ v_{1}, v_{2}, v_{3}, v_{4} } \text{ be a basis of } V \\
\text{Let } C = \Set{ u_{1}, u_{2}, u_{3} } \text{ be a basis of } W \\
[T]^{B}_{C} = \begin{pmatrix}
3 & 1 & 6 & 9 \\
1 & 0 & 2 & 6 \\
2 & 1 & 4 & 3 \\
\end{pmatrix} \\
\text{Find bases of } ker(T) \text{ and } Im(T) \text{ via vectors of } B \text{ and } C \\
\\
\text{Solution:} \\
[ker(T)]_{B} = N([T]^{B}_{C}) \\
\begin{pmatrix}
3 & 1 & 6 & 9 \\
1 & 0 & 2 & 6 \\
2 & 1 & 4 & 3 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 & 2 & 6 \\
0 & 1 & 0 & -9 \\
0 & 1 & 0 & -9 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 & 2 & 6 \\
0 & 1 & 0 & -9 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \\
\text{Let } x_{3} = s, x_{4} = t \\
\implies \left\{\begin{array}{}
x_{1} = -2s -6t \\
x_{2} = 9t \\
x_{3} = s \\
x_{4} = t \\
\end{array}\right. \implies N([T]^{B}_{C}) = sp(\Set{ \begin{pmatrix}
-2 \\
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-6 \\
9 \\
0 \\
1 \\
\end{pmatrix} }) \\
\implies \boxed{ ker(T) = sp(\Set{ -2v_{1}+v_{3}, -6v_{1}+9v_{2}+v_{4} }) } \\
[Im(T)]_{C} = C([T]^{B}_{C}) = sp(\Set{ \begin{pmatrix}
3 \\
1 \\
2 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} }) \\
\implies \boxed{ ker(T) = sp(\Set{ 3u_{1}+u_{2}+2u_{3}, u_{1}+u_{3} }) } \\
}
$$
---

# 3
$$
\displaylines{
\text{Let } V, W \text{ be vector spaces over } \mathbb{F} \\
\text{Let } T: V \to W \text{ be a linear transformation} \\
\text{Let } B \text{ be a basis of } V \\
\text{Let } C \text{ be a basis of } W \\
\text{Let } A_{1} = [T]^{B}_{C} \in \mathbb{F}^{m \times n} \\
\text{Let } A_{2}, A_{3} \in \mathbb{F}^{m \times n} \\
}
$$
## 3a
$$
\displaylines{
\text{Prove: } \exists C' \text{ basis of } W : [T]^{B}_{C'} = A_{2} \iff A_{1} \text{ is row-equivalent to } A_{2} \\
\\
\text{Proof:} \\
\text{Let } \exists C' \text{ basis of } W : [T]^{B}_{C'} = A_{2} \\
A_{1} = [T]^{B}_{C} = [I]^{C'}_{C} \cdot [T]^{B}_{C'} = [I]^{C'}_{C} \cdot A_{2} \\
[I]^{C'}_{C} \text{ is invertible} \implies \boxed{ A_{1} \text{ is row-equivalent to } A_{2} } \\
\text{Let } A_{1} \text{ be row-equivalent to } A_{2} \\
\implies A_{1} = X \cdot A_{2} \text{ where } X \text{ is invertible} \\
X \text{ is invertible}, X \in \mathbb{F}^{m \times m} \implies \exists C' \text{ basis of } W: [I]^{C'}_{C} = X \\
[T]^{B}_{C} = [I]^{C'}_{C} \cdot A_{2} \implies [I]^{C}_{C'} \cdot [T]^{B}_{C} = [I]^{C}_{C'} \cdot [I]^{C'}_{C} \cdot A_{2} = A_{2} \\
\implies \boxed{ [T]^{B}_{C'} = A_{2} } \\
}
$$
## 3b
$$
\displaylines{
\text{Prove: } \exists B' \text{ basis of } V : [T]^{B'}_{C} = A_{3} \iff A_{1}^{T} \text{ is row-equivalent to } A_{3}^{T} \\
\\
\text{Proof:} \\
\text{Let } \exists B' \text{ basis of } V: [T]^{B'}_{C} = A_{3} \\
[T]^{B}_{C} = [T]^{B'}_{C} \cdot [I]^{B}_{B'} \implies ([T]^{B}_{C})^{T} = ([I]^{B}_{B'})^{T}([T]^{B'}_{B})^{T} \\
\implies A_{1}^{T} = ([I]^{B}_{B'})^{T} A_{3}^{T} \\
[I]^{B}_{B'} \text{ is invertible} \implies ([I]^{B}_{B'})^{T} \text{ is invertible} \implies \boxed{ A_{1}^{T} \text{ is row-equivalent to } A_{3}^{T} } \\
\text{Let } A_{1}^{T} \text{ be row-equivalent to } A_{3}^{T} \\
\implies A_{1}^{T} = X \cdot A_{3}^{T} \implies A_{1} = A_{3} \cdot X^{T} \text{ where $X$ is invertible} \\
X \text{ is invertible}, X \in \mathbb{F}^{n \times n} \implies X^{T} \text{ is invertible}, X^{T} \in \mathbb{F}^{n \times n} \\
\implies \exists B' \text{ basis of } V: [I]^{B}_{B'} = X^{T} \\
[T]^{B}_{C} = A_{3} \cdot [I]^{B}_{B'} \implies [T]^{B}_{C} \cdot [I]^{B'}_{B} = A_{3} \cdot [I]^{B}_{B'} \cdot [I]^{B'}_{B} = A_{3} \\
\implies \boxed{ [T]^{B'}_{C} = A_{3} } \\
}
$$
---

# 4
$$
\displaylines{
B = \Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} } \quad \quad C = \Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
2 \\
\end{pmatrix} } \\
\text{Let } T: \mathbb{R}^{3} \to \mathbb{R}^{3} \text{ be a linear transformation} \\
[T]^{B}_{C} = \begin{pmatrix}
1 & 0 & 0 \\
0 & a & 1 \\
a-2 & 1 & a \\
\end{pmatrix} \text{ where } a \in \mathbb{R} \text{ is a parameter} \\
}
$$
## 4a
$$
\displaylines{
\text{Find all values of } a \text{ such that } T \text{ is invertible} \\
\text{Solution:} \\
T \text{ is invertible } \iff [T]^{B}_{C} \text{ is invertible} \iff rank([T]^{B}_{C}) = 3 \\
\begin{pmatrix}
1 & 0 & 0 \\
0 & a & 1 \\
a-2 & 1 & a \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 & 0 \\
0 & a & 1 \\
0 & 1 & a \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & a \\
0 & a & 1 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & a \\
0 & 0 & 1-a^{2} \\
\end{pmatrix} \\
rank([T]^{B}_{C}) = 3 \iff 1 - a^{2} \neq 0 \iff (1-a)(1+a) \neq 0 \iff \boxed{ \left\{\begin{array}{}
a \neq 1 \\
a \neq -1 \\
\end{array}\right. } \\
}
$$
## 4b
$$
\displaylines{
\text{For } a = 3 \text{ find } T^{-1}(\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}) \\
\text{Solution:} \\
a = 3 \implies [T]^{B}_{C} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 3 & 1 \\
1 & 1 & 3 \\
\end{pmatrix} \\
\left.\begin{array}{}
[T(\begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix})]_{C} = \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} \implies T(\begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}) = \begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix} \\
[T(\begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix})]_{C} = \begin{pmatrix}
0 \\
3 \\
1 \\
\end{pmatrix} \implies T(\begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix}) = \begin{pmatrix}
0 \\
4 \\
5 \\
\end{pmatrix} \\
[T(\begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix})]_{C} = \begin{pmatrix}
0 \\
1 \\
3 \\
\end{pmatrix} \implies T(\begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix}) = \begin{pmatrix}
0 \\
4 \\
7 \\
\end{pmatrix} \\
\end{array}\right\} \implies [T]^{B}_{E} = \begin{pmatrix}
1 & 0 & 0 \\
1 & 4 & 4 \\
2 & 5 & 7 \\
\end{pmatrix} \\
}
$$
$$
\displaylines{
[T^{-1}(v)]_{E} = [T^{-1}]^{E}_{E}[v]_{E} = ([T]^{E}_{E})^{-1}[v]_{E} = ([T]^{B}_{E}[I]^{E}_{B})^{-1}[v]_{E} \\
[\begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}]_{B} = \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix}, \quad [\begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix}]_{B} = \begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix}, \quad [\begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix}]_{B} = \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} \\
\implies [I]^{E}_{B} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
-1 & -1 & 1 \\
\end{pmatrix} \\
[T]^{B}_{E}[I]^{E}_{B} = \begin{pmatrix}
1 & 0 & 0 \\
1 & 4 & 4 \\
2 & 5 & 7 \\
\end{pmatrix}\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
-1 & -1 & 1 \\
\end{pmatrix} = \begin{pmatrix}
1 & 0 & 0 \\
-3 & 0 & 4 \\
-5 & -2 & 7 \\
\end{pmatrix} \\
\left(\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 0 & 0 \\
-3 & 0 & 4 & 0 & 1 & 0 \\
-5 & -2 & 7 & 0 & 0 & 1 \\
\end{array}\right) \to \left(\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 0 & 0 \\
0 & -2 & 7 & 5 & 0 & 1 \\
0 & 0 & 4 & 3 & 1 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 0 & 0 \\
0 & 2 & 0 & \frac{1}{4} & \frac{7}{4} & -1 \\
0 & 0 & 1 & \frac{3}{4} & \frac{1}{4} & 0 \\
\end{array}\right) \\
\to \left(\begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 0 & 0 \\
0 & 1 & 0 & \frac{1}{8} & \frac{7}{8} & -\frac{1}{2} \\
0 & 0 & 1 & \frac{3}{4} & \frac{1}{4} & 0 \\
\end{array}\right) \\
\implies ([T]^{B}_{E}[I]^{E}_{B})^{-1}[v]_{E} = \begin{pmatrix}
1 & 0 & 0 \\
\frac{1}{8} & \frac{7}{8} & -\frac{1}{2} \\
\frac{3}{4} & \frac{1}{4} & 0 \\
\end{pmatrix}\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} = \begin{pmatrix}
x \\
\frac{1}{8}x+\frac{7}{8}y-\frac{1}{2}z \\
\frac{3}{4}x+\frac{1}{4}y \\
\end{pmatrix} \\
\implies \boxed{ T^{-1}(\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}) = \begin{pmatrix}
x \\
\frac{1}{8}x+\frac{7}{8}y-\frac{1}{2}z \\
\frac{3}{4}x+\frac{1}{4}y \\
\end{pmatrix} } \\
}
$$
## 4c
$$
\displaylines{
\text{For } a = 1 \text{ find bases of } ker(T) \text{ and } Im(T) \\
\\
\text{Solution:} \\
[T]^{B}_{C} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 1 \\
-1 & 1 & 1 \\
\end{pmatrix} \\
[ker(T)]_{B} = N([T]^{B}_{C}) \\
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 1 \\
-1 & 1 & 1 \\
\end{pmatrix} \overset{ \text{4a} }{ \to } \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 1 \\
0 & 0 & 0 \\
\end{pmatrix} \implies \left\{\begin{array}{}
x_{1} = 0 \\
x_{2} = -s \\
x_{3} = s \\
\end{array}\right. \\
\implies N([T]^{B}_{C}) = sp(\Set{ \begin{pmatrix}
0 \\
-1 \\
1 \\
\end{pmatrix} }) \implies \boxed{ ker(T) = sp(\Set{ \begin{pmatrix}
0 \\
-1 \\
0 \\
\end{pmatrix} }) } \\
[ker(T)]_{C} = C([T]^{B}_{C}) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} }) \implies \boxed{ ker(T) = sp(\Set{ \begin{pmatrix}
1 \\
-1 \\
-2 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
3 \\
\end{pmatrix} }) } \\
}
$$
---

# 5
$$
\displaylines{
\text{Let } T: \mathbb{R}^{2 \times 2} \to \mathbb{R}^{2 \times 2}, T(A) = A-A^{T} \\
B = \Set{ \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} } \\
C = \Set{ \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} } \\
B, C \text{ are bases of } \mathbb{R}^{2 \times 2} \\
}
$$
## 5a
$$
\displaylines{
\text{Find } [T]^{B}_{C}, [T]^{C}_{B} \\
\\
\text{Solution:} \\
B \text{ is a standard basis}, B = E \\
\implies [T]^{B}_{B} = [T]^{E}_{E} \\
T(e_{1}) = T(e_{4}) = 0 \\
T(e_{2}) = -T(e_{3}) = \begin{pmatrix}
0 & 1 \\
-1 & 0 \\
\end{pmatrix} \\
\implies \boxed{ [T]^{B}_{B} = [T]^{E}_{E} = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 1 & -1 & 0 \\
0 & -1 & 1 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} } \\
T(\begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}) = T(\begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix}) = T(\begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix}) = 0 \\
T(\begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix}) = \begin{pmatrix}
0 & -2 \\
2 & 0 \\
\end{pmatrix} \\
\implies \boxed{ [T]^{C}_{B} = [T]^{C}_{E} = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & -2 \\
0 & 0 & 0 & 2 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} } \\
}
$$
## 5b
$$
\displaylines{
\text{Find basis and dimension of } Im(T), ker(T) \\
\\
\text{Solution:} \\
[Im(T)]_{E} = C([T]^{C}_{E}) = sp(\Set{ \begin{pmatrix}
0 \\
-2 \\
2 \\
0 \\
\end{pmatrix} }) \implies Im(T) = sp(\Set{ \begin{pmatrix}
0 & -2 \\
2 & 0 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
0 & -2 \\
2 & 0 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \boxed{ \Set{ \begin{pmatrix}
0 & -2 \\
2 & 0 \\
\end{pmatrix} } \text{ is a basis of } Im(T) \text{ and } dim(Im(T)) = 1 } \\
[ker(T)]_{E} = N([T]^{E}_{E}) \\
\begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 1 & -1 & 0 \\
0 & -1 & 1 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \to \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 1 & -1 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \implies \left\{\begin{array}{}
x_{1} = u \\
x_{2} = t \\
x_{3} = t \\
x_{4} = s \\
\end{array}\right. \\
\implies N([T]^{E}_{E}) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
0 \\
1 \\
\end{pmatrix} }) \\
\implies ker(T) = sp(\Set{ \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \boxed{ \Set{ \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} } \text{ is a basis of } ker(T) \text{ and } dim(ker(T)) = 3 } \\
}
$$
## 5c
$$
\displaylines{
\text{Find } [T^{2}]^{C}_{C} \\
\\
\text{Solution:} \\
T^{2}(A) = T(A) - (T(A))^{T} = (A-A^{T}) - (A-A^{T})^{T} = A - A^{T} - A^{T} + A = \\
= 2A-2A^{T} = 2T(A) \\
\text{Let } C = \Set{ c_{1}, c_{2}, c_{3}, c_{4} } \\
T^{2}(c_{1}) = T^{2}(c_{2}) = T^{2}(c_{3}) = 0 \\
T^{2}(c_{4}) = 2T(c_{4}) = \begin{pmatrix}
0 & -4 \\
4 & 0 \\
\end{pmatrix} \implies [T^{2}(c_{4})]_{C} = \begin{pmatrix}
0 \\
0 \\
0 \\
4 \\
\end{pmatrix} \\
\implies \boxed{ [T^{2}]^{C}_{C} = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 4 \\
\end{pmatrix} } \\
}
$$
---
