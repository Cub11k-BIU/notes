---
{"publish":true,"created":"27/10/25, 17:10","modified":"2026-03-24T14:58:08.184+02:00","tags":["Academia","#Practice","Algorithms-1"],"cssclasses":""}
---

# Polynomial multiplication problem
## Problem input
$$
\displaylines{
A(x) = \sum_{i=0}^{n-1} a_{i}x^{i} \\
B(x) = \sum_{i=0}^{n-1} b_{i}x^{i} \\
}
$$
## Problem output
$$
\displaylines{
C(x) = A(x) \cdot B(x) \\
}
$$
---
## Polynomial #definition 
$$
\displaylines{
\text{Polynomial of bound-degree } n \text{ is the following function:} \\
A(x) = a_{0} + a_{1}x + \dots + a_{n}x^{n-1} = \sum_{i=0}^{n-1} a_{i}x^{i} \\
}
$$
- Polynomial can be represented in memory as an array of coefficients $(a_{0}, \dots, a_{n-1})$
- Polynomial can also be represented as $n$ arbitrary points $(x_{0}, y_{0}), \dots, (x_{n-1}, y_{n-1})$ such that $\forall i \in[0, n-1]: A(x_{i}) = y_{i}$
$$
\displaylines{
\text{Vandermonde matrix:} \\
V = \begin{pmatrix}
x_{0}^{0} & x_{0}^{1} & \dots & x_{0}^{n-1} \\
\vdots &  &  & \vdots \\
\vdots &  &  & \vdots \\
x_{n-1}^{0} & x_{n-1}^{1} & \dots & x_{n-1}^{n-1} \\
\end{pmatrix} ; \vec{a} = \begin{pmatrix}
a_{0} \\
\vdots \\
a_{n-1} \\
\end{pmatrix} \\
\implies V \cdot \vec{a} = \begin{pmatrix}
y_{0} \\
\vdots \\
y_{n-1} \\
\end{pmatrix} = \vec{y} \\
}
$$
- Transformation from coefficients to points takes $O(n^{2})$ time
- Transformation from points to coefficients also takes $O(n^{2})$ time, this is to be proved in HWs
$$
\displaylines{
A(x) + B(x) = \sum_{i=0}^{n-1} (a_{i} + b_{i})x^{i} \\
A(x) \cdot B(x) = \sum_{i=0}^{n} a_{i}B(x) = \sum_{i=0}^{n-1} a_{i}x^{i}\left( \sum_{j=0}^{n-1} b_{j}x^{j} \right) = \sum_{i=0}^{n-1} \sum_{i=0}^{n-1} a_{i}b_{j}x^{i+j} \\
\\
\left(\begin{array}{c|c}
 & \text{Evaluation} & \text{Addition} & \text{Multiplication} \\
\text{Coefficients} & O(n^{2}) & O(n) & O(n^{2}) \to O(n^{\log_{2}3}) \to O(n\log n) \\
\text{Points} & - & O(n) (\text{given same } x\text{-s}) & O(n) (\text{given same } x\text{-s} \text{ and } 2n \text{ points}) \\
\end{array}\right) \\
}
$$
## Fast Fourier Transformation (FFT) #definition 
An algorithm for performing transformations between coefficients and points representations in $O(n\log n)$ time
## Karatsuba algorithm #definition 
An algorithm for performing polynomial multiplication in $O(n^{\log_{2}3})$ time (and subsequently n-digit multiplication)
$$
\displaylines{
A(x) = a_{0}x^{0} + \dots + a_{\frac{n}{2}-1}x^{\frac{n}{2}-1} + \left( a_{\frac{n}{2}}x^{0} + \dots + a_{n-1}x^{\frac{n}{2}-1} \right)x^{\frac{n}{2}-1} = \\
= q(x) + p(x)x^{\frac{n}{2}} \\
B(x) = \dots = r(x) + s(x)x^{\frac{n}{2}} \\
\\
\implies A(x) \cdot B(x) = \left( q(x) + p(x)x^{\frac{n}{2}} \right)\left( r(x) + s(x)x^{\frac{n}{2}} \right) = \\
= q(x)r(x) + (q(x)s(x) + r(x)p(x))x^{\frac{n}{2}} + p(x)s(x)x^{n} \\
\\
\implies T(n) = 4T\left( \frac{n}{2} \right) + O(n) = O(n^{2}) \\
\text{Not enough!} \\
\\
p_{1}(x) = q(x)r(x) \\
p_{2}(x) = p(x)s(x) \\
p_{3}(x) = (p(x)+q(x))(r(x)+s(x)) \\
\implies (p_{3} - p_{2} - p_{1})(x) = q(x)s(x) + p(x)r(x) \\
\implies T(n) = 3T\left( \frac{n}{2} \right) + O(n) = \boxed{ O(n^{\log_{2}3}) } \\
}
$$
---
# Generalization
$$
\displaylines{
\text{Let } A(x) \text{ be of degree } n \\
\text{Let } B(x) \text{ be of degree } m \\
\text{Let } n > m \\
}
$$
## First solution
Fill $B(x)$ with zeroes up to degree $n$ and use FFT. The result is $O(n\log n)$
## Second solution
Naive multiplication, $O(nm)$
## Combination of two solutions
Compare $m \ ? \ \log n$ and choose either solution. $O(n \cdot \min(m, \log n))$
## Third solution
Divide $A(x)$ into $m$-sized chunks and perform FFT. There are $\frac{n}{m}$ iterations of FFT ($O(m\log m)$). All and all, $O(n\log m)$

---
# Using polynomial multiplication in the 3-SUM problem
## Problem input
$$
\displaylines{
X = x_{1}, \dots, x_{n} \in \mathbb{N} \\
}
$$
## Problem output
$$
\displaylines{
\text{True if } \exists x_{i}, x_{j}, x_{k} \in X : x_{i} + x_{j} = x_{k} \\
\text{False otherwise} \\
}
$$
## First solution
Running 2-SUM for each element. $O(n^{2})$
## Second solution
Let $\forall i \in [1, n]: x_{i} \in [1, 10n^{1.5}]$
$$
\displaylines{
\text{Let } A(x) = \sum_{i=0}^{n} x^{x_{i}} \\
}
$$
This means that $A(x)$ can be represented as an array of coefficients 0, 1 of size $10n^{1.5}$, this takes $O(10n^{1.5})$ time
We can calculate $A(x)A(x)$ in $O(n^{1.5}\log n)$ using FFT and then check which coefficients are non-zero. $\exists j \in [1, n]: ax^{j}, a \neq 0$
This check takes $O(n^{1.5})$, all and all, $O(n^{1.5}\log n)$

With the limitation of not using the same element twice, we simply check if the coefficient is larger than 1, not just non-zero
