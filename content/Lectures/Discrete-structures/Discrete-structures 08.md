---
{"publish":true,"created":"16/12/25, 12:51","modified":"2025-12-16T15:11:14.990+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

# Linear recurrence relation
### The towers of Hanoi
At the time of the creation of the world, three high towers were created. 64 gold disks stacked on the leftmost tower. Each disk rested on a slightly larger disk. Buddhist monks were given the task to re-create the stack on the middle tower by moving disks, one at a time, to another tower with the rule that a larger disk could never be placed on top of a smaller disk. When the task will be completed, the world will end, and everybody will reach Nirvana. How many moves does it take to move the disks from tower $A$ to tower $B$?
$$
\displaylines{
a_{n} = \text{number of moves for } n \text{ disks} \\
a_{0} = 0 \\
a_{1} = 1 \\
a_{2} = 3 \\
\text{Given } n \text{ disks:} \\
\text{Move } n-1 \text{ disks to tower } C \\
\text{Move largest disk to tower } B \\
\text{Move } n-1 \text{ disks to tower } B \\
\implies a_{n} = 2a_{n-1} + 1 \\
\text{Proof by induction: } a_{n} = 2^{n} - 1 \\
a_{n} = 2a_{n-1} + 1 = 2(2^{n-1}-1)+1 = 2^{n} - 1 \\
\\
\text{Assuming one move takes one second,} \\
\text{the end of the world will happen in } \approx 585 \cdot 10^{9} \text{ years} \\
}
$$
### Subsets of naturals
$$
\displaylines{
\text{How many subsets of } \Set{ 1, 2, \dots, n } \text{ don't contain two consecutive numbers?} \\
\\
a_{0} = 1 \\
a_{1} = 2 \\
a_{2} = 3 \\
\text{Let } A = \Set{ C \subseteq [n] \mid n \in C } \\
\text{Let } B = \Set{ C \subseteq [n] \mid n \not\in C } \\
\implies a_{n} = \abs{A} + \abs{B} \\
n-1 \not\in A \implies \abs{A} = a_{n-2} \\
\abs{B} = a_{n-1} \\
\implies a_{n} = a_{n-1} + a_{n-2} \\
}
$$
### Tiling
$$
\displaylines{
\text{How many ways there are to tile the surface of size } 1 \times n \\
\text{with tiles of size } 1 \times 1 \text{ and } 1 \times 2 \\
\\
a_{0} = 1 \\
a_{1} = 1 \\
a_{2} = 2 \\
a_{3} = 3 \\
\text{Let } A = \Set{ \text{first tile is } 1 \times 1 } \\
\text{Let } B = \Set{ \text{first tile is } 1 \times 2 } \\
a_{n} = \abs{A} + \abs{B} \\
\abs{A} = a_{n-1} \\
\abs{B} = a_{n-2} \\
\implies a_{n} = a_{n-1} + a_{n-2} \\
\\
\text{Now let there be a surface of size } 2 \times n \\
\text{And tiles be } 1 \times 1 \text{ and } \text{"angle" tile of size 3 } (1 \times 1 + 1 \times 2) \\
\\
a_{0} = 1 \\
a_{1} = 1 \\
a_{2} = 5 \\
a_{3} = 11 \\
\\
\text{There are } 7 \text{ ways to start the tiling:} \\
\text{Fill } 2 \times 1 \text{ with } 1 \times 1 \\
\text{Fill } 2 \times 2 \text{ with } 1 \times 1, \text{ angle (4 ways)} \\
\text{Fill } 2 \times 3 \text{ with angles (2 ways)} \\
\implies a_{n} = a_{n-1} + 4a_{n-2} + 2a_{n-3} \\
}
$$
## Linear recurrence with constant coefficients #definition 
$$
\displaylines{
\forall \alpha_{1}, \dots, \alpha_{k}, b \in \mathbb{R}: a_{n} = \alpha_{1} \cdot a_{n-1} + \alpha_{2} \cdot a_{n-2} + \dots + \alpha_{k} \cdot a_{n-k} + b \\
\text{Such an equation is called a linear recurrence with constant coefficients} \\
\\
\text{Recurrence is homogeneous} \iff b = 0 \\
\\
\text{Given } a_{0}, a_{1}, \dots, a_{k-1} \text{ starting values, there is a single unique solution} \\
\text{to } \Set{ a_{n} }_{n \in \mathbb{N}} \\
}
$$
### Solving homogeneous linear recurrence with constant coefficients
$$
\displaylines{
\text{Consider the vector space of infinite series of real numbers: } \Set{ x_{n} }_{n \in \mathbb{N}} \in \mathbb{R}^{\mathbb{N}} \\
\Set{ x_{n} }_{n \in \mathbb{N}} + \Set{ y_{n} }_{n \in \mathbb{N}} = \Set{ x_{n} + y_{n} }_{n \in \mathbb{N}} \\
\alpha \cdot \Set{ x_{n} }_{n \in \mathbb{N}} = \Set{ \alpha \cdot x_{n} }_{n \in \mathbb{N}} \\
\\
\text{Let } A = \Set{ \Set{ x_{n} }_{n \in \mathbb{N}} \mid \forall n \geq k: x_{n} = \alpha_{1}x_{n-1} + \dots + \alpha_{k}x_{n-k} } \\
\text{In other words, the set of solutions to a given recurrence relation} \\
\\
A \text{ is a linear subspace} \\
\Set{ z_{n} }_{n \in \mathbb{N}} = \Set{ x_{n} }_{n \in \mathbb{N}} + \Set{ y_{n} }_{n \in \mathbb{N}} \\
\implies \forall n \geq k: z_{n} = x_{n} + y_{n} = (\alpha_{1}x_{n-1} + \dots + \alpha_{k}x_{n-k}) + (\alpha_{1}y_{n-1} + \dots + \alpha_{k}y_{n-k}) = \\
= \alpha_{1}(x_{n-1}+y_{n-1}) + \dots + \alpha_{k}(x_{n-k}+y_{n-k}) = \alpha_{1}z_{n-1} + \dots + \alpha_{k}z_{n-k} \\
\Set{ z_{n} }_{n \in \mathbb{N}} = \beta \Set{ x_{n} }_{n \in \mathbb{N}} = \Set{ \beta x_{n} }_{n \in \mathbb{N}} \\
\implies z_{n} = \beta x_{n} = \alpha_{1}\beta x_{n-1} + \dots + \alpha_{k}\beta x_{n-k} = \alpha_{1}z_{n-1} + \dots + \alpha_{k}z_{n-k} \\
\\
\dim A = k \\
\text{Let } \Set{ x_{n}^{(i)} }_{n \in \mathbb{N}} \in A: \forall j \in [0, k - 1]: x_{j}^{(i)} = \begin{cases}
1 & j = i \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Let } B = \Set{ \Set{ x_{n}^{(i)} }_{n \in \mathbb{N}} \mid i \in [0, k-1] } \\
\text{Let } \beta_{0}\Set{ x_{n}^{(0)} }_{n \in \mathbb{N}} + \dots + \beta_{k-1}\Set{ x_{n}^{(k-1)} }_{n \in \mathbb{N}} = \Set{ 0 }_{n \in \mathbb{N}} \\
\implies \beta_{0}x_{0}^{(0)} = \beta_{1}x_{1}^{(1)} = \dots = \beta_{k-1}x_{k-1}^{(k-1)} = 0 \implies \beta_{0} = \beta_{1} = \dots = \beta_{k-1} = 0 \\
\implies B \text{ is a linear independence} \\
\text{Let } \Set{ y_{n} }_{n \in \mathbb{N}} \in A \\
\Set{ y_{n} }_{n \in \mathbb{N}} = y_{0} \cdot \Set{ x_{n}^{(0)} }_{n \in \mathbb{N}} + y_{1} \cdot \Set{ x_{n}^{(1)} }_{n \in \mathbb{N}} + \dots + y_{k-1} \cdot \Set{ x_{n}^{(k-1)} }_{n \in \mathbb{N}} \\
\implies sp(B) = A \implies B \text{ is a basis of } A \implies \dim A = k \\
}
$$
#### Characteristic polynomial of a recurrence relation #definition 
$$
\displaylines{
\text{Let } \lambda \in \mathbb{R} \\
\Set{ \lambda^{n} }_{n \in \mathbb{N}} \text{ is a good candidate} \\
\Set{ \lambda^{n} }_{n \in \mathbb{N}} \in A \iff \forall n \geq k: \lambda_{n} = \alpha_{1} \cdot \lambda^{n-1} + \dots + \alpha_{k} \cdot \lambda^{n-k} \\
\iff \lambda^{k} - \alpha_{1}\lambda^{k-1} - \dots - \alpha_{k-1}\lambda - \alpha_{k} = 0 \\
\text{This polynomial is called a characteristic polynomial of a recurrence relation} \\
}
$$
#### Root of characteristic polynomial form a basis #lemma 
$$
\displaylines{
\text{Let } \chi \text{ be a real root of the characteristic polynomial} \\
\text{Clearly, } \Set{ \chi^{n} }_{n \in \mathbb{N}} \in A \\
\forall n \geq k : \chi^{n} = \chi^{n-k}\chi^{k} = \chi^{n-k}(\alpha_{1} \chi^{k-1} + \dots + \alpha_{k-1}\chi + \alpha_{k}) = \alpha_{1}\chi^{n-1} + \dots + \alpha_{k}\chi^{n-k} \\
\\
\text{Let } \lambda_{1}, \dots, \lambda_{k} \in \mathbb{R} \text{ be distinct roots of the characteristic polynomial} \\
\text{Then, } \Set{ \lambda_{1}^{n} }_{n \in \mathbb{N}}, \dots, \Set{ \lambda_{k}^{n} }_{n \in \mathbb{N}} \text{ form a basis of } A \\
\\
\text{Proof:} \\
\text{As proved above, } \Set{ \lambda_{1}^{n} }_{n \in \mathbb{N}}, \dots, \Set{ \lambda_{k}^{n} }_{n \in \mathbb{N}} \in A \\
\text{Let } \beta_{1} \Set{ \lambda_{1}^{n} }_{n \in \mathbb{N}} + \dots + \beta_{k} \Set{ \lambda_{k}^{n} }_{n \in \mathbb{N}} = \Set{ 0 }_{n \in \mathbb{N}} \\
\text{Or,} \\
\begin{pmatrix}
1 & 1 & \dots & 1 & 1 \\
\lambda_{1} & \lambda_{2} & \dots & \lambda_{k-1} & \lambda_{k} \\
\vdots & \vdots & \dots & \vdots & \vdots \\
\lambda_{1}^{k-1} & \lambda_{2}^{k-1} & \dots & \lambda_{k-1}^{k-1} & \lambda_{k}^{k-1} \\
\end{pmatrix}\begin{pmatrix}
\beta_{1} \\
\beta_{2} \\
\vdots \\
\beta_{k} \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\vdots \\
0 \\
\end{pmatrix} \\
\text{This is a Vandermonde matrix } V(\lambda_{1}, \dots, \lambda_{k}) \\
\implies \det V(\lambda_{1}, \dots, \lambda_{k}) = \prod_{i > j} (\lambda_{i} - \lambda_{j}) \neq 0 \\
\implies \beta_{1} = \beta_{2} = \dots = \beta_{k} = 0 \\
\implies \Set{ \Set{ \lambda_{1}^{n} }_{n \in \mathbb{N}}, \dots, \Set{ \lambda_{k}^{n} }_{n \in \mathbb{N}} } \text{ is a basis of } A \\
}
$$
#### Example
$$
\displaylines{
a_{0} = 1 \\
a_{1} = 1 \\
a_{n} = a_{n-1} + a_{n-2} \\
x^{2} - x - 1 = 0 \implies x_{1,2} = \frac{1\pm \sqrt{ 5 }}{2} \\
\implies \Set{ \left( \frac{1-\sqrt{ 5 }}{2} \right)^{n} }_{n \in \mathbb{N}}, \Set{ \left( \frac{1+\sqrt{ 5 }}{2} \right)^{n} }_{n \in \mathbb{N}} \\
\implies \begin{eqsys}
\beta_{1} \cdot 1 + \beta_{2} \cdot 1 = a_{0} = 1 \\
\beta_{1} \cdot \frac{1-\sqrt{ 5 }}{2} + \beta_{2} \cdot \frac{1+\sqrt{ 5 }}{2} = a_{1} = 1 \\
\end{eqsys} \implies \begin{eqsys}
\beta_{2} = 1 - \beta_{1} \\
-2\frac{\beta_{1}\sqrt{ 5 }}{2} + \frac{1}{2} + \frac{\sqrt{ 5 }}{2} = 1 \\
\end{eqsys} \\
\implies \beta_{1} = \frac{1+\sqrt{ 5 }}{2\sqrt{ 5 }}, \beta_{2} = \frac{\sqrt{ 5 }-1}{2\sqrt{ 5 }} \\
\implies a_{n} = \dots = \frac{1}{\sqrt{ 5 }} \cdot \left( \frac{1+\sqrt{ 5 }}{2} \right)^{n+1} - \frac{1}{\sqrt{ 5 }} \cdot \left( \frac{1-\sqrt{ 5 }}{2} \right)^{n+1}
}
$$
#### Example
$$
\displaylines{
a_{0} = 1 \\
a_{1} = 1 \\
a_{2} = 5 \\
a_{n} = a_{n-1} + 4a_{n-2} + 2a_{n-3} \\
\implies x^{3} - x^{2} - 4x - 2 = 0 \\
\implies (x+1)(x-(1+\sqrt{ 3 }))(x-(1-\sqrt{ 3 })) = 0 \\
\dots \\
}
$$
#### Example
$$
\displaylines{
a_{0} = 7 \\
a_{1} = 9 \\
a_{2} = 11 \\
a_{n} = 3a_{n-1} - 4a_{n-2} + 12a_{n-3} \\
\implies x^{3} - 3x^{2} + 4x - 12 = (x^{2}+4)(x-3) = 0 \\
\text{What do we do with complex roots?} \\
\text{Turns out - the same!} \\
\text{We can use all the same definitions, claims and lemmas over } \mathbb{C} \text{ instead of } \mathbb{R} \\
\text{Note that if all starting conditions are real and all roots are real,} \\
\text{the whole sequence will be real} \\
\\
a_{n} = \beta_{1} \cdot 3^{n} + \beta_{2} \cdot (2i)^{n} + \beta_{3} \cdot (-2i)^{n} \\
\text{Solution:} \\
\beta_{1} = 3, \beta_{2} = \beta_{3} = 2 \\
\implies a_{n} = 3^{n+1} + 2^{n+1} \cdot i^{n} (1 + (-1)^{n}) = \begin{cases}
3^{n+1} & n = 2k+1 \\
3^{n+1} + (-1)^{k}2^{n+2} & n = 2k \\
\end{cases} \\
}
$$
#### Example
$$
\displaylines{
a_{0} = 3 \\
a_{1} = 14 \\
a_{n} = 2a_{n-1} - 4a_{n-2} \\
\implies x^{2} - 2x - 4 = 0 \implies (x-2)^{2} = 0 \\
\text{What do we do without } k \text{ distinct roots?} \\
\\
\text{Let } \lambda \text{ be the root of the characteristic polynomial of multiplicity } q \\
\text{Then } \Set{ \lambda^{n} }_{n \in \mathbb{N}}, \Set{ n \cdot \lambda^{n} }_{n \in \mathbb{N}}, \dots, \Set{ n^{q-1} \cdot \lambda^{n} }_{n \in \mathbb{N}} \in A \\
\text{This claim is given without proof} \\
\text{Thus, we have the "missing" vectors in our basis and can again solve the recurrence} \\
\\
\text{And the general form of the solution is then:} \\
\begin{align}
a_{n} = & \ \beta_{1_{1}} \lambda_{1}^{n} + \beta_{1_{2}}n\lambda_{1}^{n} + \dots + \beta_{1_{q_{1}-1}}n^{q_{1}-1}\lambda^{n} \\
+ & \ \beta_{2_{1}} \lambda_{2}^{n} + \beta_{2_{2}}n\lambda_{2}^{n} + \dots + \beta_{2_{q_{2}-1}}n^{q_{2}-1}\lambda^{n} \\
+ & \ \dots \\
+ & \ \beta_{k'_{1}} \lambda_{k'}^{n} + \beta_{k'_{2}}n\lambda_{k'}^{n} + \dots + \beta_{k'_{q_{k'}-1}}n^{q_{k'}-1}\lambda^{n}
\end{align} \\
}
$$
### Solving non-homogeneous linear recurrence with constant coefficients
$$
\displaylines{
\text{Consider the set of solutions $S$ to } Ax = b \\
\text{Let } y : Ay = b \\
\implies S = \Set{ x + y \mid Ax = 0} \\
\\
\text{So, we can find some solution to a non-homogeneous recurrence} \\
\text{while ignoring starting conditions and simply add it to the homogeneous one} \\
\text{There is no systematic approach for the general solution} \\
\text{But, we can try to guess!} \\
\text{First guess can be a constant - } \Set{ \mu }_{n \in \mathbb{N}}, \mu \in \mathbb{R} \\
}
$$
---
$$
\displaylines{
\text{Consider } a_{n} = \alpha_{1}a_{n-1} + \dots + \alpha_{k}a_{n-k} + g(n) \\
\text{Let } \Set{ b_{n} }_{n \in \mathbb{N}} \text{ be an arbitrary solution to } a_{n} \\
\text{Then every solution has the form } \Set{ b_{n} }_{n \in \mathbb{N}} + \Set{ c_{n} }_{n \in \mathbb{N}} \\
\text{where } \Set{ c_{n} }_{n \in \mathbb{N}} \text{ is some solution to the respective homogeneous } a_{n}-g(n) \\
}
$$
#### Example
$$
\displaylines{
a_{0} = 15.5 \\
a_{1} = 8.5 \\
a_{2} = -17.5 \\
a_{n} = 2a_{n-1} - 3a_{n-2} + 6a_{n-3} - 8n + 10 \\
\Set{ u }_{n \in \mathbb{N}} \implies \mu = 2\mu - 3\mu + 6\mu - 8n + 10 \\
\implies n = \frac{4\mu+10}{8} \text{ and this doesn't work} \\
\Set{ qn+p }_{n \in \mathbb{N}} \\
\implies qn+p = 2q(n-1)+2p - 3q(n-2) - 3p + 6q(n-3)+6p - 8n + 10 \\
\implies qn+p = 2qn-2q+2p-3qn+6q-3p+6qn-18q+6p-8n+10 = \\
= 5qn - 8n - 14q + 5p + 10 \\
\implies \begin{eqsys}
q = 5q-8 \implies q = 2 \\
p = 5p-18 \implies p = \frac{18}{4} = 4.5 \\
\end{eqsys} \\
\Set{ 2n+4.5 }_{n \in \mathbb{N}} \text{ is our arbitrary solution} \\
a'_{n} = 2a_{n-1}-3a_{n-2}+6a_{n-3} \\
\implies x^{3} - 2x^{2} + 3x - 6 = 0 \implies x^{2}(x-2)+3(x-2) = (x^{2}+3)(x-2) = 0 \\
\implies a'_{n} = \beta_{1}(\sqrt{ 3 }i)^{n} - \beta_{2}(-\sqrt{ 3 }i)^{n} + \beta_{3}2^{n} \\
\implies a_{n} = \beta_{1}(\sqrt{ 3 }i)^{n} - \beta_{2}(-\sqrt{ 3 }i)^{n} + \beta_{3}2^{n} + 2n + 4.5 \\
\text{And apply starting conditions:} \\
\dots \implies \beta_{1} = \beta_{2} = 5, \beta_{3} = 1 \\
\implies a_{n} = 5(\sqrt{ 3 }i)^{n} + 5(-\sqrt{ 3 }i)^{n} + 2^{n} + 2n + 4.5 \\
}
$$
