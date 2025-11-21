---
{"publish":true,"created":"13/11/24, 17:11","modified":"2025-11-21T21:10:02.521+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

## 1a
$$
\displaylines{
\text{Solve: } 4x + 6 = 0 \mid \mathbb{Z}_{11} \\
11 \text{ is prime } \implies \mathbb{Z}_{11} \text{ is a field} \\
\\
4x + 6 = 0  \mid + (-6) \\
(-6) \equiv 5 \\
(4x + 6) + (-6) = 5 \\
4x + (6 + (-6) = 5 \\
4x + 0 = 5 \\
4x = 5 \mid *(4^{-1}) \\
4^{-1} \equiv 3 \\
4^{-1}(4x) = 5*3 \\
(4^{-1}*4)x = 4 \\
(1)x = 4 \\
\boxed{x = 4}
}
$$
---

## 1b
$$
\displaylines{
\text{Solve: } x^{2} = 1 \mid \mathbb{Z}_{8} \\
\\
\text{Let us try all possible values of $x$ in } \mathbb{Z}_{8} \\
\begin{align}
 & 0^{2} = 0 \\
 & \boxed{1^{2} = 1} \\
 & 2^{2} = 4 \\
 & \boxed{3^{2} = 1} \\
 & 4^{2} = 0 \\
 & \boxed{5^{2} = 1} \\
 & 6^{2} = 4 \\
 & \boxed{7^{2} = 1}
\end{align}
\implies \left[\begin{array}{}
x = 1 \\
x = 3 \\
x = 5 \\
x = 7
\end{array}\right. \space \text{ over } \mathbb{Z}_{8}
}
$$
---

## 1c
$$
\displaylines{
\text{Given: } \mathbb{F} \text{ is a field where $2$ is an invertible } (2 \neq 0_{\mathbb{F}}) \\
\text{Prove: } x^{2} = 1 \text{ over $\mathbb{F}$ has exactly two different solutions} \\
\\
x^{2} = 1 \\
x^{2} - 1 = 0 \\
(x + 1)(x-1) = 0 \\
\left[\begin{array}{}
x = 1 \\
x = -1
\end{array}\right. \\
\begin{cases}
2 \equiv 0_{\mathbb{F}} \implies 2+(-1) = 0+(-1) \implies 1 = -1 \implies x^{2} = 1 \text{ has exactly one distinct solution} \\
2 \not\equiv 0_{\mathbb{F}} \implies 2+(-1) \neq 0+(-1) \implies 1 \neq -1 \implies \boxed{x^{2} = 1 \text{ has exactly two distinct solutions}}
\end{cases} \\
\\
\text{If } \mathbb{F} = \mathbb{Z}_{2} \text{, then:} \\
2 \equiv 0_{\mathbb{Z}_{2}} \implies \boxed{x^{2} = 1 \text{ has exactly one distinct solution}}
}
$$
---

## 2
$$
\displaylines{
\text{Prove: } \forall a \in \mathbb{F} : -(-a) = a \\
\\
\text{Proved in the first lecture: } \forall a, b, c \in \mathbb{F} : \left\{\begin{array}{}
a + b = 0 \\
a + c = 0
\end{array}\right. \implies b = c \\
b = -a \\
\left\{\begin{array}{}
a + b = 0 \\
b + -b = 0
\end{array}\right. \implies a = -b \\
-b = -(-a) \implies \boxed{a = -(-a)}
}
$$
---

## 3a
$$
\displaylines{
\text{Solve: }
\left\{\begin{array}{}
3y + 6z = -9 \\
2x+4y+7z=-22 \\
x+5y+10z=-21 \\
\end{array}\right.
\text{ over } \mathbb{R} \\
\\
\left(\begin{array}{ccc|c}
0 & 3 & 6 & -9 \\
2 & 4 & 7 & -22 \\
1 & 5 & 10 & -21 \\
\end{array}\right) \overset{ R_{3} \leftrightarrow R_{1}}{ \to }
\left(\begin{array}{ccc|c}
1  & 5 & 10 & -21 \\
2 & 4 & 7 & -22 \\
0 & 3 & 6 & -9 \\
\end{array}\right) \overset{ R_{2} = R_{2} - 2R_{1} }{ \to }
\left(\begin{array}{ccc|c}
1 & 5 & 10 & -21 \\
0 & -6 & -13 & 20 \\
0 & 3 & 6 & -9 \\
\end{array}\right) \\
\overset{ R_{3} = 2R_{3} + R_{2} }{ \to }
\left(\begin{array}{ccc|c}
1 & 5 & 10 & -21 \\
0 & -6 & -13 & 20 \\
0 & 0 & -1 & 2 \\
\end{array}\right) \\
\left\{\begin{align}{}
x+5y+10z & =-21 \\
-6y-13z & =20 \\
-z & =2 \\
\end{align}\right. \\
-z = 2 \implies z = -2 \\
-6y -13z = -6y +26 = 20 \implies -6y = -6 \implies y = 1 \\
x + 5y + 10z = x + 5 - 20 = -21  \implies x = -6 \\
\implies \boxed{\left\{\begin{array}{}
x = -6 \\
y = 1 \\
z = -2
\end{array}\right.}
}
$$
---

## 3b
$$
\displaylines{
\text{Solve: }
\left\{\begin{array}{}
 5x+ 3y+3z =0 \\
 7x+ 3y+7z =0 \\
 7x+ 9y =0 \\
\end{array}\right. \text{ over } \mathbb{Z}_{11} \\
\\
\left(\begin{array}{ccc|c}
5 & 3 & 3 & 0 \\
7 & 3 & 7 & 0 \\
7 & 9 & 0 & 0 \\
\end{array}\right) \overset{ R_{1} = 9R_{1} }{ \underset{ R_{2} = R_{2} + 4R_{1} }{ \to } }
\left(\begin{array}{ccc|c}
1 & 5 & 5 & 0 \\
0 & 1 & 5 & 0 \\
7 & 9 & 0 & 0 \\
\end{array}\right) \overset{ R_{3} = R_{3} + 4R_{1} }{ \to }
\left(\begin{array}{ccc|c}
1 & 5 & 5 & 0 \\
0 & 1 & 5 & 0 \\
0 & 7 & 9 & 0 \\
\end{array}\right) \\
\overset{ R_{3} = R_{3} + 4R_{2} }{ \to }
\left(\begin{array}{ccc|c}
1 & 5 & 5 & 0 \\
0 & 1 & 5 & 0 \\
0 & 0 & 7 & 0 \\
\end{array}\right) \\
\left\{\begin{align}
x+5y+5z & =0 \\
y+5z & =0 \\
7z & =0 \\
\end{align}\right. \\
7z = 0 \implies z  = 0 \\
y + 5z = y = 0 \\
x + 5y + 5z = x = 0 \\
\implies \boxed{\left\{\begin{array}{}
x = 0 \\
y = 0 \\
z = 0 \\
\end{array}\right.}
}
$$
---

## 3c
$$
\displaylines{
\text{Solve: }
\left\{\begin{array}{}
ix+2y+z+2w=3 \\
x+(1-2i)y+z=1 - 3i \\
\end{array}\right. \text{ over } \mathbb{C} \\
\\
\left(\begin{array}{cccc|c}
i & 2 & 1 & 2 & 3 \\
1 & 1-2i & 1 & 0 & 1-3i \\
\end{array}\right) \\
\overset{ R_{2} = R_{2}*i }{ \underset{ R_{2} = R_{2} - R_{1} }{ \to } }
\left(\begin{array}{cccc|c}
i & 2 & 1 & 2 & 3 \\
0 & i & -1+i & -2 & i \\
\end{array}\right) \\
\overset{ R_{2}=R_{2}*(-i) }{ \underset{ R_{1} = R_{1} - 2R_{2} }{ \to } }
\left(\begin{array}{cccc|c}
i & 0 & -1-2i & 2-4i & 1 \\
0 & 1 & 1+i & 2i & 1 \\
\end{array}\right) \\
\overset{ R_{1} = R_{1}*(-i) }{ \to }
\left(\begin{array}{cccc|c}
1 & 0 & -2+i & -4-2i & -i \\
0 & 1 & 1+i & 2i & 1 \\
\end{array}\right) \\
\left\{\begin{align}
x + 0y + (-2+i)z + (-4-2i)w &= -i \\
y + (1+i)z + (2i)w &= 1 \\
\end{align}\right. \\
\implies 
\boxed{\left\{\begin{array}{}
x =  & (2-i)z + (4+2i)w - i \\
y =  & (-1-i)z + (0-2i)w + 1 \\
& z \in \mathbb{C}; w \in \mathbb{C} \\
\end{array}\right.}
}
$$
---

## 4a
$$
\displaylines{
\text{Solve: }
\left\{\begin{array}{}
3y + 6z = 0 \\
2x+4y+7z= 0 \\
x+5y+10z= 0 \\
\end{array}\right. 
\text{ over } \mathbb{R} \\
\\
\text{Let us use the transformations made in 3a:} \\
\left(\begin{array}{ccc|c}
0 & 3 & 6 & 0 \\
2 & 4 & 7 & 0 \\
1 & 5 & 10 & 0 \\
\end{array}\right)
{ \to }
\left(\begin{array}{ccc|c}
1 & 5 & 10 & ? \\
0 & -6 & -13 & ? \\
0 & 0 & -1 & ? \\
\end{array}\right) \\
\text{The right side of the system is all zero over $\mathbb{R}$, so basic transformations do not affect it:} \\
\left(\begin{array}{ccc|c}
1 & 5 & 10 & 0 \\
0 & -6 & -13 & 0 \\
0 & 0 & -1 & 0 \\
\end{array}\right) \\
\left\{\begin{align}
x+5y+10z & =0 \\
-6y-13z & =0 \\
-z & =0 \\
\end{align}\right. \\
-z = 0 \implies z = 0 \\
-6y -13z = -6y = 0 \implies y = 0 \\
x + 5y + 10z = x = 0 \implies x = 0 \\
\boxed{\left\{\begin{array}{}
x = 0 \\
y = 0 \\
z = 0 \\
\end{array}\right.}
}
$$
---

## 4b
$$
\displaylines{
\text{Solve: }
\left\{\begin{array}{}
 5x+ 3y+3z =5 \\
 7x+ 3y+7z =7 \\
 7x+ 9y =7 \\
\end{array}\right. \text{ over } \mathbb{Z}_{11} \\
\\
\text{Let us use the transformations made in 3b:} \\
\left(\begin{array}{ccc|c}
5 & 3 & 3 & 5 \\
7 & 3 & 7 & 7 \\
7 & 9 & 0 & 7 \\
\end{array}\right) \to
\left(\begin{array}{ccc|c}
1 & 5 & 5 & ? \\
0 & 1 & 5 & ? \\
0 & 0 & 7 & ? \\
\end{array}\right) \\
\text{Let us also note that the right side of the system is equal to the first column:} \\
\left(\begin{array}{ccc|c}
5 & . & . & 5 \\
7 & . & . & 7 \\
7 & . & . & 7 \\
\end{array}\right) \\
\text{Equal matrices will stay equal after applying the same basic transformations} \\
\implies
\left(\begin{array}{c}
5 \\
7 \\
7 \\
\end{array}\right) \to
\left(\begin{array}{ccc|c}
1 \\
0 \\
0 \\
\end{array}\right) \\
\implies
\left(\begin{array}{ccc|c}
5 & 3 & 3 & 5 \\
7 & 3 & 7 & 7 \\
7 & 9 & 0 & 7 \\
\end{array}\right) \to
\left(\begin{array}{ccc|c}
1 & 5 & 5 & 1 \\
0 & 1 & 5 & 0 \\
0 & 0 & 7 & 0 \\
\end{array}\right) \\
\left\{\begin{align}
x + 5y + 5z & =1 \\
y + 5z & =0 \\
7z & =0 \\
\end{align}\right. \\
7z = 0 \implies z = 0 \\
y + 5z = y = 0 \implies y = 0 \\
x + 5y + 5z = x \implies x = 1 \\
\boxed{
\left\{\begin{array}{}
x = 1 \\
y = 0 \\
z = 0 \\
\end{array}\right.}
}
$$
---

## 4c
$$
\displaylines{
\text{Solve: }
\left\{\begin{array}{}
ix+2y+z+2w=0 \\
x+(1-2i)y+z=0 \\
\end{array}\right. \text{ over } \mathbb{C} \\
\\
\text{Let us use the transformations made in 3c:} \\
\left(\begin{array}{cccc|c}
i & 2 & 1 & 2 & 0 \\
1 & 1-2i & 1 & 0 & 0 \\
\end{array}\right) \to
\left(\begin{array}{cccc|c}
1 & 0 & -2+i & -4-2i & ? \\
0 & 1 & 1+i & 2i & ? \\
\end{array}\right) \\
\text{The right side of the system is all zero over $\mathbb{C}$, so basic transformations do not affect it:} \\
\implies \left(\begin{array}{cccc|c}
i & 2 & 1 & 2 & 0 \\
1 & 1-2i & 1 & 0 & 0 \\
\end{array}\right) \to
\left(\begin{array}{cccc|c}
1 & 0 & -2+i & -4-2i & 0 \\
0 & 1 & 1+i & 2i & 0 \\
\end{array}\right) \\
\left\{\begin{align}
x + 0y + (-2+i)z + (-4-2i)w &= 0 \\
y + (1+i)z + (2i)w &= 0 \\
\end{align}\right. \\
\implies 
\boxed{\left\{\begin{array}{}
x =  & (2-i)z + (4+2i)w \\
y =  & (-1-i)z + (0-2i)w \\
& z \in \mathbb{C}; w \in \mathbb{C} \\
\end{array}\right.}
}
$$
---

## 5
$$
\displaylines{
\text{For the system of equations: }
\left\{\begin{array}{}
(10+2a)x+(-5+5a)y+5z=a \\
(-5+a)y+5z=a \\
(15+3a)x+(-10+8a)y+(3+a)z=-2+2a \\
\end{array}\right. 
\text{ over } \mathbb{R} \\
\text{For all values of parameter $a$ define whether system has 0, 1 or $\infty$ solutions} \\
\\
\left(\begin{array}{ccc|c}
10+2a & -5+5a & 5 & a \\
0 & -5+a & 5 & a \\
15+3a & -10+8a & 3+a & -2+2a \\
\end{array}\right)
\overset{ R_{3} = 2R_{3} - 3R_{1} }{ \to }
\left(\begin{array}{ccc|c}
10+2a & -5+5a & 5 & a \\
0 & -5+a & 5 & a \\
0 & -5+a & -9+2a & -4+a \\
\end{array}\right) \\
\overset{ R_{3}=R_{3}-R_{2} }{ \to }
\left(\begin{array}{ccc|c}
10+2a & -5+5a & 5 & a \\
0 & -5+a & 5 & a \\
0 & 0 & -14+2a & -4 \\
\end{array}\right) \overset{ R_{1} = R_{1} - R_{2} }{ \underset{ R_{1} = \frac{1}{2}R_{1} }{ \to } }
\left(\begin{array}{ccc|c}
5 + a & 2a & 0 & 0 \\
0 & -5+a & 5 & a \\
0 & 0 & -14+2a & -4 \\
\end{array}\right)
\\
\left\{\begin{align}
(5+a)x + (2a)y + 0z & = 0 \\
(-5+a)y+5z & =a \\
(-14+2a)z & =-4
\end{align}\right. \\
(-14+2a)z = -4 \implies (-7+a)z = -2\begin{cases}
 & \boxed{\emptyset : a = 7} \\
z = \frac{-2}{-7+a}  & : a \neq 7
\end{cases} \\
\\
a \neq 7: \\
(-5+a)y+5z = (-5+a)y + \frac{-10}{-7+a} = a \implies (-5+a)y = \frac{a^{2} - 7a + 10}{-7+a} = \frac{(a-2)(a-5)}{a-7}\\
\implies \begin{cases}
y \in \mathbb{R}  & : a = 5 \\
y = \frac{a-2}{a-7}  & : a \neq 5
\end{cases} \\
\begin{cases}
(5+a)x + (2a)y = 10x + 10y = 0 \implies x = -y : a = 5 \\ \\
(5+a)x + (2a)y = 10y = 0 \implies y = 0 \implies a-2=0  & : a = 5 \implies \boxed{\emptyset : a = -5} \\
(5+a)x + 2a(y) = 0 \implies (5+a)x = \frac{-2a(a-2)}{a-7} \implies x = \frac{-2a(a-2)}{(a-7)(a+5)}  & : \lvert a \rvert \neq 5 \\
\end{cases} \\
\implies \boxed{\begin{cases}
\emptyset & : a = 7 \implies 0 \text{ solutions} \\
\emptyset  & : a = -5 \implies 0 \text{ solutions} \\
x = -y; z = 1  & : a = 5 \implies \infty \text{ solutions} \\
x = \frac{-2a(a-2)}{(a-7)(a+5)}; y = \frac{a-2}{a-7};z = \frac{-2}{a-7}  & : a \not\in \{ -5, 5, 7 \} \implies 1 \text{ solution}
\end{cases}}
}
$$
---

## 6i
$$
\displaylines{
\text{For the system of equations: }
\left\{\begin{array}{}
x + y + az = 1 \\
x + ay + z = 1 \\
ax + y + z = 1 \\
\end{array}\right. \\
\text{For all values of parameter $a \in \mathbb{R}$ define whether system has 0, 1 or $\infty$ solutions} \\
\\
\left(\begin{array}{ccc|c}
1 & 1 & a & 1 \\
1 & a & 1 & 1 \\
a & 1 & 1 & 1 \\
\end{array}\right) \overset{ R_{2} = R_{2} - R_{1} }{ \underset{ R_{3} = R_{3} - a*R_{1} }{ \to } }
\left(\begin{array}{ccc|c}
1 & 1 & a & 1 \\
0 & a-1 & 1-a & 0 \\
0 & 1-a & 1-a^{2} & 1-a \\
\end{array}\right) \\
\overset{ R_{3} = R_{3} + R_{2} }{ \to }
\left(\begin{array}{ccc|c}
1 & 1 & a & 1 \\
0 & a-1 & 1-a & 0 \\
0 & 0 & 2-a-a^{2} & 1-a
\end{array}\right) \\
\left\{\begin{align}
x+y+az & =1 \\
(a-1)y+(1-a)z & =0 \\
(1-a)(a+2)z & = (1-a) \\
\end{align}\right. \\
(1-a)(a+2)z = (1-a) \implies \begin{cases}
 & \boxed{\emptyset : a = -2} \\
z \in \mathbb{R}  & : a = 1 \\
z = \frac{1}{a+2}  & : a \neq 1 \\
\end{cases} \\
\\
a \neq -2: \\
(a-1)y + (1-a)z = 0 \implies (a-1)(y - z) = 0 \begin{cases}
y \in \mathbb{R}  & : a = 1 \\
y = z  & : a \neq 1 \\
\end{cases} \\
x + y + az = 1 \implies \begin{cases}
x + y + z = 1 \implies x = 1 - y - z  & : a = 1 \\
x + \frac{a+1}{a+2} = 1 \implies x = \frac{1}{a+2} & : a \neq 1
\end{cases} \\
\implies \boxed{\begin{cases}
\emptyset  & : a = -2 \implies 0 \text{ solutions} \\
x = 1-y-z; y \in \mathbb{R}; z \in \mathbb{R}  & : a = 1 \implies \infty \text{ solutions} \\
x = y = z = \frac{1}{a+2}  & : a \not\in \{ -2, 1 \} \implies 1 \text{ solution}\\
\end{cases}}
}
$$
---

## 6ii
$$
\displaylines{
\text{For the system of equations: }
\left\{\begin{array}{}
x + y + az = 1 \\
x + ay + z = 1 \\
ax + y + z = 1 \\
\end{array}\right. \\
\text{For all values of parameter $a \in \mathbb{Z}_{3}$ define whether system has 0, 1 or $\infty$ solutions} \\
\\
\left(\begin{array}{ccc|c}
1 & 1 & a & 1 \\
1 & a & 1 & 1 \\
a & 1 & 1 & 1 \\
\end{array}\right) \overset{ R_{2}=R_{2}+2R_{1} }{ \underset{ R_{3}=R_{3}+2aR_{1} }{ \to } }
\left(\begin{array}{ccc|c}
1 & 1 & a & 1 \\
0 & a+2 & 1+2a & 0 \\
0 & 1+2a & 1+2a^{2} & 1+2a \\
\end{array}\right) \\
\overset{ R_{3} = R_{3}+R_{2} }{ \to }
\left(\begin{array}{ccc|c}
1 & 1 & a & 1 \\
0 & a+2 & 1+2a & 0 \\
0 & 0 & 2(a^{2}+a+1) & 1+2a \\
\end{array}\right) \\
\left\{\begin{align}
x+y+az & =1 \\
(a+2)y+(1+2a)z & =0 \\
2(a^{2}+a+1)z & =1+2a \\
\end{align}\right. \\
\\
\text{Let $a = 0:$} \\
\left\{\begin{array}{}
2z = 1 \implies z = 2 \\
2y + z = 0 \implies 2y + 2 = 0 \implies y = -1_{\mathbb{Z}_{3}} = 2 \\
x + y = 1 \implies x + 2 = 1 \implies x = -1_{\mathbb{Z}_{3}} = 2\\
\end{array}\right. \\
\\
\text{Let $a = 1:$} \\
\left\{\begin{array}{}
2(0)z = 0 \implies 0 = 0 \implies z \in \mathbb{Z}_{3} \\
0y + 0z = 0 \implies 0 = 0 \implies y \in \mathbb{Z}_{3} \\
x + y + z = 1 \implies x = 1+(-y)+(-z) \\ \\
\end{array}\right. \\
\text{As there are $3^{2}=9$ combinations of $y$ and $z$ in $\mathbb{Z}_{3}$, there are $9$ solutions in this case} \\
\\
\text{Let $a = 2:$} \\
\left\{\begin{array}{}
2(1)z = 2 \implies 2z = 2 \implies z = 1 \\
y + 2z = 0 \implies y = 1 \\
x + y + 2z = 1 \implies x + 1 + 2 = 1 \implies x = 1 \\
\end{array}\right. \\
\\
\implies \boxed{\begin{cases}
x=y=z=1 & : a=0 \implies 1 \text{ solution} \\
x=y=z=2 & : a=2 \implies 1 \text{ solution} \\
x=1+(-y)+(-z); y \in \mathbb{Z}_{3}; z \in \mathbb{Z}_{3}  & : a = 1 \implies 9 \text{ solutions}
\end{cases}}
}
$$
---

## 7a
$$
\displaylines{
\text{Determine if the following matrices are row equivalent: } \\
A = \begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 \\
\end{pmatrix},
B = \begin{pmatrix}
1 & 0 & 2 \\
1 & 1 & -2 \\
3 & 2 & -2 \\
\end{pmatrix} \\
A \equiv \begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 \\
\end{pmatrix} \overset{ R_{2} = R_{2}-4R_{1} }{ \underset{ R_{3} = R_{3}-7R_{1} }{ \to } }
\begin{pmatrix}
1 & 2 & 3 \\
0 & -3 & -6 \\
0 & -6 & -12 \\
\end{pmatrix} \overset{ R_{3} = R_{3} -2R_{2} }{ \underset{ R_{2} = \frac{-1}{3}R_{2} }{ \to } }
\begin{pmatrix}
1 & 2 & 3 \\
0 & 1 & 2 \\
0 & 0 & 0 \\
\end{pmatrix}
\overset{ R_{1} = R_{1} - 2R_{2} }{ \to } 
\begin{pmatrix}
1 & 0 & -1 \\
0 & 1 & 2 \\
0 & 0 & 0 \\
\end{pmatrix} \\
B \equiv \begin{pmatrix}
1 & 0 & 2 \\
1 & 1 & -2 \\
3 & 2 & -2 \\
\end{pmatrix} \overset{ R_{2} = R_{2}-R_{1} }{ \underset{ R_{3} = R_{3}-3R_{1} }{ \to } }
\begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & -4 \\
0 & 2 & -8 \\
\end{pmatrix} \overset{ R_{3}=R_{3}-2R_{2} }{ \to }
\begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & -4 \\
0 & 0 & 0 \\
\end{pmatrix} \\

\text{Both matrices are canonical, but the third column of the matrices is not equal} \\
\implies \boxed{\text{matrices $A, B$ are not row equivalent}}
}
$$
---

## 7b
$$
\displaylines{
\text{Determine if the following matrices are row equivalent: } \\
A = \begin{pmatrix}
1 & 0 & 1 \\
2 & 2 & 2 \\
3 & 4 & 5 \\
\end{pmatrix},
B = \begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 10 \\
\end{pmatrix} \\
A \equiv \begin{pmatrix}
1 & 0 & 1 \\
2 & 2 & 2 \\
3 & 4 & 5 \\
\end{pmatrix} \overset{ R_{2} = \frac{1}{2}R_{2}-R_{1} }{ \underset{ R_{3}=R_{3}-3R_{1} }{ \to } }
\begin{pmatrix}
1 & 0 & 1 \\
0 & 1 & 0 \\
0 & 4 & 2 \\
\end{pmatrix} \overset{ R_{3} = \frac{1}{2}R_{3}-2R_{2} }{ \underset{ R_{1}=R_{1}-R_{3} }{ \to } }
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
B \equiv \begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 10 \\
\end{pmatrix} \overset{ R_{2}=R_{2}-4R_{1} }{ \underset{ R_{3}=R_{3}-7R_{1} }{ \to } }
\begin{pmatrix}
1 & 2 & 3 \\
0 & -3 & -6 \\
0 & -6 & -11 \\
\end{pmatrix} \overset{ R_{2} = \frac{-1}{3}R_{2} }{ \underset{ R_{3} = R_{3}+6R_{2} }{ \to } }
\begin{pmatrix}
1 & 2 & 3 \\
0 & 1 & 2 \\
0 & 0 & 1 \\
\end{pmatrix} \overset{ R_{2}=R_{2}-2R_{3} }{ \underset{ R_{1}=R_{1}-2R_{2}-3R_{3} }{ \to } }
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
\text{Both matrices are canonical and equal to $I_{3}$} \\
\implies \boxed{\text{matrices $A,B$ are row equivalent}}
}
$$
---
