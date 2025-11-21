---
{"publish":true,"created":"27/10/25, 17:10","modified":"2025-11-21T21:10:01.892+02:00","tags":["Academia","Assignment","Algorithms-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Show how matrix multiplication can be performed with 7 multiplications instead of 8} \\
\\
\text{Solution:} \\
\text{Let } X = \begin{pmatrix}
A & B \\
C & D \\
\end{pmatrix}, Y = \begin{pmatrix}
E & F \\
G & H \\
\end{pmatrix}, Z = \begin{pmatrix}
I & J \\
K & L \\
\end{pmatrix} \\
\text{Let } X \cdot Y = Z \\
\implies \begin{eqsys}
I = AE + BG \\
J = AF + BH \\
K = CE + DG \\
L = CF + DH \\
\end{eqsys} \\
\\
\text{Let } \begin{eqsys}
M_{1} = & (A+C)(E+F) \\
M_{2} = & (B+D)(G+H) \\
M_{3} = & (A-D)(E+H) \\
M_{4} = & A(F-H) \\
M_{5} = & (C+D)E \\
M_{6} = & (A+B)H \\
M_{7} = & D(G-E) \\
\end{eqsys} \implies \begin{eqsys}
M_{1} = & AE+AF+CE+CF \\
M_{2} = & BG+BH+DG+DH \\
M_{3} = & AE-DE+AH-DH \\
M_{4} = & AF-AH \\
M_{5} = & CE+DE \\
M_{6} = & AH+BH \\
M_{7} = & DG-DE \\
\end{eqsys} \\
\implies \begin{eqsys}
I = & M_{2} + M_{3} - M_{6} - M_{7} \\
J = & M_{4} + M_{6} \\
K = & M_{5} + M_{7} \\
L = & M_{1} - M_{3} - M_{4} - M_{5} \\
\end{eqsys} \\
\\
\text{This way, we perform } 18 \text{ additions and } 7 \text{ multiplications} \\
\text{Instead of doing $8$ multiplications} \\
}
$$
# 2
$$
\displaylines{
\text{Let } A(x) \text{ be a polynomial of bound-degree } n \\
\text{Let } x_{0} \in \mathbb{R} \\
\text{Show how to calculate } q(x), r \text{ such that } A(x) = q(x)(x-x_{0}) + r \text{ in } O(n) \text{ time} \\
\\
\text{Solution:} \\
\text{Let } A(x) = q(x)(x-x_{0}) + r \\
\text{Let } q(x) = \sum_{i=0}^{n-2} \beta_{i}x^{i} \\
\text{Let } \beta_{-1} = r \\
\implies A(x) = \sum_{i=0}^{n-1} \alpha_{i}x^{i} = \sum_{i=0}^{n-2} (\beta_{i}x^{i+1} - x_{0}\beta_{i}x^{i}) + r = \sum_{i=0}^{n-2} (\beta_{i-1} - x_{0}\beta_{i})x^{i} + \beta_{n-2}x^{n-1} \\
\implies \begin{eqsys}
\alpha_{n-1} = \beta_{n-2} \\
\forall i \in [0, n - 2]: \alpha_{i} = \beta_{i-1} - x_{0}\beta_{i} \\
\end{eqsys} \\
\implies \text{The following recursive formula applies:} \\
\beta_{n-2} = \alpha_{n-1} \\
\forall i \in [n-3, -1]: \beta_{i} = \alpha_{i+1} + x_{0}\beta_{i+1} \\
r = \beta_{-1} = \alpha_{0} + x_{0}\beta_{0} \\
\text{This recursive formula indeed runs in } O(n) \\
}
$$
# 3
$$
\displaylines{
\text{Let } A(x) \text{ be a polynomial of bound-degree $n$ represented as } n \text{ points } (x_{i}, y_{i}) \\
\text{Lagrange's formula: } A(x) = \sum_{k=0}^{n-1} y_{k} \frac{\prod_{j\neq k} (x - x_{j})}{\prod_{j \neq k} (x_{k} - x_{j})} \\
\text{Show how can we calculate interpolation of } A(x) \text{ in } O(n^{2}) \text{ time using Lagrange's formula} \\
\\
\text{Solution:} \\
\text{Let us first calculate } P(x) = \prod_{j=0}^{n-1} (x-x_{j}) \\
\text{We will do this iteratively} \\
\text{Let } p_{j-1}(x) \text{ be the current polynomial calculated up to the moment} \\
\text{The next point is } x_{j} \\
p_{j}(x) = p_{j-1}(x)(x-x_{j}) = x \cdot p_{j-1}(x) - x_{j} \cdot p_{j-1}(x) \\
\text{This step takes } O(deg(p_{j-1}(x))) \text{ time} \\
P(x) = p_{n-1}(x) \\
\\
\text{Next, for each } (x_{k}, y_{k}) \text{ we will take } P(x) \\ \text{and divide it by } (x - x_{k}) \text{ using algorithm from question 2 to get } P_{k}(x) = \prod_{j\neq k}(x - x_{j}) \\
\text{Now all that is left is to multiply } P_{k}(x) \text{ by } \frac{y_{k}}{P_{k}(x_{k})} \text{ to get $k$-th Lagrange's formula term} \\
\implies A(x) = \sum_{k=0}^{n-1} y_{k} \frac{P_{k}(x)}{P_{k}(x_{k})} \\
\\
\text{Calculating } P(x) \text{ takes } O(1 + 2 + \dots + n) = O(n^{2}) \text{ time} \\
\text{Calculating } P_{k}(x) \text{ takes } O(n) \text{ for each } k, O(n^{2}) \text{ for $n$ points} \\
\text{Calculating } P_{k}(x_{k}) \text{ takes } O(n) \text{ for each } k, O(n^{2}) \text{ for $n$ points} \\
\implies \text{All in all, algorithm runs in } O(n^{2}) \\
}
$$
# 4
$$
\displaylines{
\text{Given } (r_{1}, \dots, r_{n}) \ n \text{ roots of polynomial } A(x) \\
\text{Show an algorithm to calculate coefficients representation of } A(x) \text{ in } O(n\log^{2}n) \\
\\
\text{Solution:} \\
\text{Given } n \text{ roots of } A(x) \\
\text{We can represent } A(x) \text{ as} \\
A(x) = (x-r_{1})(x-r_{2})\dots(x-r_{n}) \\
\text{We can then represent } A(x) \text{ as } \\
A(x) = p_{1}(x) \cdot p_{2}(x) \\
\text{Where } \begin{eqsys}
p_{1}(x) = (x-r_{1})\dots\left( x-r_{\floor{\frac{n}{2}}}\right) \\
p_{2}(x) = \left( x-r_{\floor{\frac{n}{2}} + 1} \right)\dots\left( x-r_{n}\right) \\
\end{eqsys} \\
\text{Multiplying } p_{1}(x) \text{ and } p_{2}(x) \text{ is done in } O(n\log n) \text{ time with } FFT \\
\\
\implies T(n) = 2T\left( \frac{n}{2} \right) + O\left( \frac{n}{2}\log \frac{n}{2} \right) \\
\implies T(n) = O(n\log^{2}n) \\
}
$$
# 5
$$
\displaylines{
\text{Let } A(x), B(x) \text{ be polynomials of bound-degrees } n, m \\
\text{Let } B^{R}(x) = \sum_{i=0}^{m-1} b_{m-1-i}x^{i} \\
\text{Calculate } A(x) \cdot B^{R}(x) \\
\\
\text{Solution:} \\
C(x) = A(x) \cdot B^{R}(x) = \sum_{i=0}^{n-1} \left( a_{i}x^{i} \cdot \sum_{j=0}^{m-1} b_{m-1-j}x^{j} \right) = \\
= \sum_{i=0}^{n-1} \sum_{i=0}^{m-1} a_{i}b_{m-1-j}x^{i+j} \\
\implies C(x) = \sum_{k=0}^{n+m-2} c_{k}x^{k} \\
\text{Where } c_{k} = \sum_{i=0}^{k} a_{i}b_{m-k+i-1} \\
C(x) = \sum_{k=0}^{n+m-2} \left( \sum_{i=0}^{k} a_{i}b_{m-k+i-1} \right)x^{k}
}
$$
# 6
$$
\displaylines{
\text{Let } A(x), B(x) \text{ be two polynomials of bound-degree } n \text{ as coefficients} \\
\text{Let } B(x) \text{ be } O(1) \text{ bound, i.e. have } O(1) \text{ non-zero coefficients} \\
\text{Show an algorithm for calculating } C(x) = A(x) \cdot B(x) \\
\text{Prove correctness and runtime complexity} \\
\\
\text{Solution:} \\
A(x) \cdot B(x) = \sum_{k=0}^{n+n-2} \left( \sum_{i+j=k} a_{i}b_{j} \right)x^{k} \\
\\
\text{Let } B' = ((b_{i}, i), \dots, (b_{m}, m)) \\
\text{Let } \forall (b_{i}, i) \in B' : A_{i}(x) = A(x) \cdot b_{i}x^{i} \\
\implies A(x) \cdot B(x) = \sum_{(b_{i}, i) \in B'} A_{i}(x) \\
\text{Each of } A_{i}(x) \text{ can be calculated in } O(n) \text{ time} \\
\implies \text{The algorithm runs in } O(mn) = O(n) \text{ time} \\
}
$$
# 7
$$
\displaylines{
\text{Let } n > 1 \in \mathbb{N} \\
\text{Calculate sum of } n \text{ roots of } 1, S(n) \\
\text{Calculate product of } n \text{ roots of } 1, P(n) \\
\\
\text{Solution:} \\
\text{Assume } n \text{ to be even} \\
\\
n \text{ roots of } 1 \text{ are } \omega_{n}^{0}, \omega_{n}^{1}, \dots, \omega_{n}^{n-1} \\
\forall i \in \left[ 0, \frac{n}{2} \right] : \omega_{n}^{i} = - \omega_{n}^{i+\frac{n}{2}} \\
\implies \forall n \text{ even: } S(n) = 0 \\
\\
\forall i \in [0, n-1]: \exists j : \omega_{n}^{i} = a + bi, \omega_{n}^{j} = a - bi \\
\text{There are } \frac{n}{2} \text{ such pairs} \\
\text{Product of each pair is a sum of angles in spherical coordinates} \\
\text{More specifically, each such pair makes an angle of } 2\pi \text{ or } 0 \\
\text{Only one pair makes an angle of } \pi : (1, -1) \\
\implies \text{In descartes coordinates their products are } 1 \text{ except for } (1, -1) \text{ which yields } -1 \\
\implies \prod_{i=0}^{n-1} \omega_{n}^{i} = -1 \\
}
$$
