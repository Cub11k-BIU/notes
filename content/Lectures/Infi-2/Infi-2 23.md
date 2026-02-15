---
{"publish":true,"created":"30/06/25, 16:06","modified":"2026-02-15T23:51:44.107+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Extremums
### Local extremums #definition 
$$
\displaylines{
& \text{To find local extremums, we have to go through two steps:} \\
1. & \text{Find critical points} \\
2. & \text{Determine which kind of extremum they are, local minimum or maximum, if any} \\
}
$$
$$
\displaylines{
\text{Step 1:} \\
\text{For functions of one variable, critical points are points where: } f' = 0 \\
\text{For functions of multiple variables, we do the same, but with gradient: } \nabla f = 0 \\
}
$$
$$
\displaylines{
\text{Step 2:} \\
\text{For functions of one variable, we can check the behaviour of the function} \\
\text{If it increases/decreases up to the point and then decreases/increases,} \\
\text{the point is a local maximum/minimum. otherwise it is not an extremum} \\
\text{For function of multiple variables, it is problematic as there are infinite paths to the point} \\
\\
\text{Another option is to check the second derivative} \\
\text{If it is positive/negative, the point is minimum/maximum, if it is zero, there is no result} \\
\text{We can continue to differentiate until we get the result, but we'll stop at the second} \\
\text{For functions of multiple variables, matrix } H_{f} \text{ named Hessian, is defined to consist of all} \\
\text{partial second derivatives, e.g. for function of two or three variables:} \\
H_{f} = \begin{pmatrix}
f_{xx} & f_{xy} \\
f_{yx} & f_{yy} \\
\end{pmatrix}, H_{g} = \begin{pmatrix}
g_{xx} & g_{xy} & g_{xz} \\
g_{yx} & g_{yy} & g_{yz} \\
g_{zx} & g_{zy} & g_{zz} \\
\end{pmatrix} \\
\text{Leading principal minors of size $i$ are then denoted as for example:} \\
M_{1} = \begin{pmatrix}
g_{xx}
\end{pmatrix} \\
M_{2} = \begin{pmatrix}
g_{xx} & g_{xy} \\
g_{yx} & g_{yy}
\end{pmatrix} \\
M_{3} = H_{g} \\
\forall i \in [1, n]: \det(M_{i}) > 0 \implies \text{Point is a local minimum} \\
\forall i \in [1, n]: (-1)^{i}\det(M_{i}) > 0 \implies \text{Point is a local maximum} \\
\exists i \in [1, n]: (-1)^{i}\det(M_{i}) < 0 \implies \text{Point is called a saddle} \\
\text{Otherwise, no conclusion} \\
\\
\text{This can also be written down via eigenvalues:} \\
\forall i \in [1, n]: \lambda_{i} > 0 \implies \text{Point is a local minimum} \\
\forall i \in [1, n]: \lambda_{i} < 0 \implies \text{Points is a local maximum} \\
}
$$
$$
\displaylines{
\text{Note: further reading - Sylvester's criterion} \\ 
}
$$
---

$$
\displaylines{
f(x, y) = 3(x^{2} + y^{2}) + x^{3} + 4y \\
\text{Find critical points of } f \text{ and categorize them} \\
\\
\text{Solution:} \\
\nabla f = \begin{pmatrix}
f_{x} \\
f_{y} \\
\end{pmatrix} = \begin{pmatrix}
6x + 3x^{2} \\
6y + 4 \\
\end{pmatrix} \\
\nabla f = 0 \iff \left\{\begin{array}{}
\left[\begin{array}{}
x = 0 \\
x = -2 \\
\end{array}\right. \\
y = -\frac{2}{3} \\
\end{array}\right. \iff \left[\begin{array}{}
\left( 0, -\frac{2}{3} \right) \\
\left( -2, -\frac{2}{3} \right) \\
\end{array}\right. \\
H_{f} = \begin{pmatrix}
f_{xx} & f_{xy} \\
f_{yx} & f_{yy} \\
\end{pmatrix} = \begin{pmatrix}
6x + 6 & 0 \\
0 & 6 \\
\end{pmatrix} \\
H_{f}\left( 0, -\frac{2}{3} \right) = \begin{pmatrix}
6 & 0 \\
0 & 6 \\
\end{pmatrix} \implies \boxed{ \left( 0, -\frac{2}{3} \right) \text{ is a local minimum} } \\
H_{f}\left( -2, -\frac{2}{3} \right) = \begin{pmatrix}
-6 & 0 \\
0 & 6 \\
\end{pmatrix} \implies \boxed{ \left( -2, -\frac{2}{3} \right) \text{ is a saddle} } \\
}
$$

---

$$
\displaylines{
1. & \text{Saddle is a point where in some paths it is a local maximum and in some a minimum} \\
& \text{It is named after the form of saddle, or Pringles} \\
2. & \text{For functions of one variable, there is a connection between the number of maximums} \\
& \text{and minimums, between any two must be an opposite} \\
& \text{For functions of multiple variable there aren't} \\
}
$$

---

$$
\displaylines{
f(x, y, z) = x^{2} + y^{2} + z^{2} - xy + yz - xz - 4x + 6y + 2z \\
\nabla f = \begin{pmatrix}
2x - y - z - 4 \\
2y - x + z + 6 \\
2z + y - x + 2 \\
\end{pmatrix} \\
\nabla f = 0 \iff \left\{\begin{array}{}
2x - y - z - 4 = 0 \\
-x + 2y + z + 6 = 0 \\
-x + y + 2z + 2 = 0 \\
\end{array}\right. \iff \left\{\begin{array}{}
x + y + 2 = 0 \\
-x + 2y + z + 6 = 0 \\
-x + y + 2z + 2 = 0 \\
\end{array}\right. \\
\iff \left\{\begin{array}{}
y = -2 -x \\
-x + 2y + z + 6 = 0 \\
-x + y + 2z + 2 = 0 \\
\end{array}\right. \iff \left\{\begin{array}{}
y = -2 - x \\
x = 1 \\
z = x \\
\end{array}\right. \iff \left\{\begin{array}{}
x = 1 \\
y = -3 \\
z = 1 \\
\end{array}\right. \\
H_{f} = \begin{pmatrix}
f_{xx} & f_{xy} & f_{xz} \\
f_{yx} & f_{yy} & f_{yz} \\
f_{zx} & f_{zy} & f_{zz} \\
\end{pmatrix} = \begin{pmatrix}
2 & -1 & -1 \\
-1 & 2 & 1 \\
-1 & 1 & 2 \\
\end{pmatrix} \\
\det(M_{1}) = 2 > 0 \\
\det(M_{2}) = 3 > 0 \\
\det(M_{3}) = 4 > 0 \\
}
$$

---

$$
\displaylines{
f(x, y, z) = x^{3} + y^{3} + z^{3} - 3xz - 3yz - 3xy \\
\\
\nabla f = \begin{pmatrix}
3x^{2} - 3z - 3y \\
3y^{2} - 3z - 3x \\
3z^{2} - 3x - 3y \\
\end{pmatrix} \\
\nabla = 0 \iff \left\{\begin{array}{}
x^{2} - z - y = 0 \\
y^{2} - z - x = 0 \\
z^{2} - x - y = 0 \\
\end{array}\right. \iff \left\{\begin{array}{}
x^{2} - z - y = 0 \\
y^{2} - x^{2} + y - x = 0 \\
z^{2} - x - y = 0 \\
\end{array}\right. \\
\iff \left\{\begin{array}{}
x^{2} - z - y = 0 \\
(y-x)(y+x+1) = 0 \\
z^{2} - x - y = 0 \\
\end{array}\right. \\
y = x \implies \left\{\begin{array}{}
x^{2} - z - x = 0 \\
z^{2} - x - x = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
2x = z^{2} \\
x^{2} - z - x = 0 \\
\end{array}\right. \\
\implies \left\{\begin{array}{}
x = \frac{z^{2}}{2} \\
\frac{z^{4}}{4} - \frac{z^{2}}{2} - z = z\left( z^{3} - 2z - 4 \right) = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
x = \frac{z^{2}}{2} \\
z(z-2)(z^{2} + 2z + 2) = 0 \\
\end{array}\right. \\
\implies \boxed{ \left[\begin{array}{}
x = 0, y = 0, z = 0 \\
x = 2, y = 2, z = 2 \\
\end{array}\right. } \\
y = - x - 1 \implies \left\{\begin{array}{}
x^{2} - z + x + 1 = 0 \\
z^{2} - x + x + 1 = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
x^{2} - z + x + 1 = 0 \\
z^{2} = -1 \\
\end{array}\right. \implies \text{No solutions} \\
\\
H_{f} = \begin{pmatrix}
f_{xx} & f_{xy} & f_{xz} \\
f_{yx} & f_{yy} & f_{yz} \\
f_{zx} & f_{zy} & f_{zz} \\
\end{pmatrix} = \begin{pmatrix}
6x & -3 & -3 \\
-3 & 6y & -3 \\
-3 & -3 & 6z \\
\end{pmatrix} \\
\det(M_{1}) = 6x \\
\det(M_{2}) = 36xy - 9 \\
\det(M_{3}) = 216xyz + 27 + 27 - 54y - 54z - 54x \\
(0, 0, 0) \implies \det(M_{2}) < 0 \implies \boxed{ (0, 0, 0) \text{ is a saddle} } \\
\boxed{ (2, 2, 2) \text{ is a local minimum} } \\
}
$$
