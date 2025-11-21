---
{"publish":true,"created":"29/04/25, 10:04","modified":"2025-11-21T21:10:14.511+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Minimal polynomial #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } f(x) \in \mathbb{F}[x] \\
f \text{ is called a minimal polynomial of } A \text{ if} \\
A \text{ is it's root and there are no such polynomials of smaller degree} \\
\text{Minimal matrix polynomial is denoted as } m_{A}(x) \\
\text{Note: minimal polynomial is always monic} \\ 
}
$$
## Existence and uniqueness of minimal polynomial #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\exists! m_{A}(x): m_{A}(A) = 0 \\
\\
\text{Proof:} \\
\text{By Cayley-Hamilton theorem: } P_{A}(A) = 0 \\
P_{A}(x) \text{ is of degree } n \\
\text{Let } f = P_{A}(x) \\
\text{Let us make } n \text{ choices:} \\
\text{Choice 1. } \not\exists \deg m_{A} < \deg f \\
\text{Choice 2. } \exists m_{A} \in \mathbb{F}[x]: \deg m_{A} < \deg f \implies f = m_{A} \\
\text{After } n \text{ choices, } f \text{ definitely contains the minimal polynomial} \\
\text{Let } f, g \text{ be minimal polynomials of } A \\
f(x) = x^{k} + \sum_{i=1}^{k-1} \alpha_{i}x^{i} \\
g(x) = x^{k} + \sum_{i=1}^{k-1} \beta_{i}x^{i} \\
\implies f(x) - g(x) \in \mathbb{F}_{t}[x]: t \leq k - 1, \frac{1}{\alpha_{t} - \beta_{t}}(f-g)(A) = 0 - \text{Contradiction!} \\
\implies \boxed{ \exists! f \text{ minimal polynomial of } A } \\
}
$$
## Minimal polynomial divides any polynomial with matrix as a root #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } f(x) \in \mathbb{F}[x]: f(A) = 0 \\
\text{Then } m_{A}(x) \mid f(x) \\
\\
\text{Proof:} \\
\text{Case 0. } f = 0 \text{ and we are done} \\
\text{Case 1. } f \neq 0 \\
\deg f \geq \deg m_{A} \\
\implies \exists q, r \in \mathbb{F}[x]: f(x) = q(x)m_{A}(x) + r(x) \\
\deg r(x) < \deg m_{A} \\
f(A) = q(A)\underbrace{ m_{A}(A) }_{ = 0 } + r(A) = 0 \\
\implies r(A) = 0 \implies \left\{\begin{array}{}
r = 0 \\
\frac{1}{\alpha} r \text{ is a minimal polynomial} \\
\end{array}\right. \\
\implies r = 0 \implies \boxed{ m_{A} \mid f } \\
\\
\text{Corollary:} \\
m_{A} \mid P_{A} \\
\implies \text{Roots of } m_{A}(x) \text{ are roots of } P_{A}(x) \text{ and eigenvalues of } A \\
}
$$
## Characteristic polynomial divides any polynomial to the power of n with matrix as a root #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } f(x) \in \mathbb{F}[x]: f(A) = 0, \deg f \leq n \\
\text{Then } P_{A} \mid f^{n} \\
\\
\text{Proof:} \\
\text{Let } f(x) = b_{n}x^{n} + b_{n-1}x^{n-1} + \dots \\
\text{Let } f(A) = 0 \\
P_{A} \mid f^{n} \iff f^{n}(x) = P_{A}(x) \cdot q(x) \\
f^{n}(x) = \det(f(x)I) \\
P_{A}(x) = \det(xI-A) \\
\text{If exists } B(x) : (xI-A)B(x) = f(x)I \\
\implies \det((xI-A)B(x)) = \det(f(x)I) \\
\implies P_{A}(x)\underbrace{ \det(B(x)) }_{ q(x) } = f^{n}(x) \\
\text{Let } B(x) = x^{n-1}B_{n-1} + \dots + xB_{1} + B_{0} \in \mathbb{F}[x] \\
(xI - A)(x^{n-1}B_{n-1} + \dots + xB_{1} + B_{0}) = \\
= x^{n}B_{n-1} + x^{n-1}B_{n-2} + \dots + xB_{0} - x^{n-1}AB_{n-1} - x^{n-2}AB_{n-2} - \dots = \\
= x^{n}B_{n-1} + x^{n-1}(B_{n-2} - AB_{n-1}) + x^{n-2}(B_{n-3} - AB_{n-2}) + \dots \\
\left\{\begin{array}{}
\text{Let } B_{n-1} & = b_{n}I \\
\text{Let } B_{n-2} & = AB_{n-1} + b_{n-1}I \\
\dots \\
\end{array}\right. \\
\implies x^{n}B_{n-1} + x^{n-1}(B_{n-2} - AB_{n-1}) + x^{n-2}(B_{n-3} - AB_{n-2}) + \dots = \\
= x^{n}(b_{n}I) + x^{n-1}\underbrace{ (AB_{n-1} + b_{n-1}I - AB_{n-1}) }_{ b_{n-1}I } + \dots = \\
= f(x) \cdot I \\
\implies \boxed{ \exists B(x): P_{A}(x)\det(B(x)) = f^{n}(x) } \\
\\
\text{Corollary:} \\
P_{A} \mid m_{A}^{n} \\
}
$$
### Corollary of two lemmas above
$$
\displaylines{
\text{Minimal polynomial contains all irreducible factors of } P_{A} \\
\text{at least once and at most algebraic multiplicity of each factor} \\
\implies \text{All eigenvalues of } A \text{ are roots of } m_{A} \\
}
$$
## Jordan block #definition 
$$
\displaylines{
\text{Matrix } A \text{ is called a Jordan block with element } \alpha \text{ if} \\
A \in \mathbb{F}^{n \times n}: A_{ij} = \left\{\begin{array}{}
\alpha & i = j \\
1 & i = j - 1 \\
0 & \text{otherwise} \\
\end{array}\right. \\
\text{Jordan block is denoted as } J_{n}(\alpha) \\
\\
P_{J_{n}(\alpha)}(\lambda) = (\lambda-\alpha)^{n} \\
\mu_{J_{n}(\alpha)}(\alpha) = n \\
\gamma_{J_{n}(\alpha)}(\alpha) = 1 \\
\\
\text{Useful property:} \\
(J_{n}(0)^{k})_{ij} = \left\{\begin{array}{}
1 & i = j - k \\
0 & \text{otherwise} \\
\end{array}\right. \\
\\
m_{J_{n}(\alpha)}(\lambda) = (\lambda-\alpha)^{k}, 1 \leq k \leq n \\
\implies m_{J_{n}(\alpha)}(J_{n}(\alpha)) = J_{n}(0)^{k} \\
m_{J_{n}(\alpha)} = 0 \implies k = n \implies m_{J_{n}(\alpha)} = P_{J_{n}(\alpha)} \\
}
$$
## Jordan form #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \text{ is said to be a matrix in Jordan form if} \\
A \text{ can be written as a diagonal block matrix} \\
\text{where each block on the diagonal is a Jordan block and all other blocks are } 0 \\
\text{e.g. } A = \begin{pmatrix}
J_{2}(3) & 0 & 0 \\
0 & J_{1}(3) & 0 \\
0 & 0 & J_{3}(5) \\
\end{pmatrix} \in \mathbb{F}^{6 \times 6} \\
\text{The common notation is: } A = J_{2}(3) \oplus J_{1}(3) \oplus J_{3}(5) \\
}
$$
## Jordan decomposition theorem #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Then} \quad \begin{array}{}
1. & A \sim A_{J} \iff P_{A} \text{ is factorizable into linear factors over } \mathbb{F} \\
2. & A_{J} \text{ is unique up to the order of Jordan blocks} \\
3. & \mu_{A}(\alpha) \text{ is the sum of sizes of Jordan blocks corresponding to eigenvalue } \alpha \\
4. & \gamma_{A}(\alpha) \text{ is the number of Jordan blocks corresponding to eigenvalue } \alpha \\
5. & \text{Algebraic multiplicity of } \alpha \text{ in the minimal polynomial} \\
& \text{is the largest size of Jordan block corresponding to eigenvalue } \alpha \\ 
\end{array} \\
}
$$
$$
\displaylines{
\text{Example:} \\
P_{A}(\lambda) = (\lambda-3)^{5}(\lambda-1) \\
m_{A}(\lambda) = (\lambda-3)^{2}(\lambda-1) \\
\gamma_{A}(3) = 3 \\
\implies A_{J} = \begin{pmatrix}
J_{1}(1) & 0 & 0 & 0 \\
0 & J_{1}(3) & 0 & 0 \\
0 & 0 & J_{2}(3) & 0 \\
0 & 0 & 0 & J_{2}(3) \\
\end{pmatrix} \\
}
$$
## Diagonalization and minimal polynomial #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \sim D \iff m_{A} \text{ is factorizable into distinct linear factors} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } A \sim D \\
\implies P_{A}(\lambda) = \prod_{i=1}^{k} (\lambda-\alpha_{i})^{\mu_{A}(\alpha_{i})} \\
\implies m_{A}(\lambda) = \prod_{i=1}^{k} (\lambda-\alpha_{i})^{t_{i}}, t_{i} \leq \mu_{A}(\alpha_{i}) \\
A_{J} = D \\
\implies \text{Largest Jordan block corresponding to any eigenvalue of $A$ is of size } 1 \\
\implies \forall i \in [1, k]: t_{i} = 1 \implies \boxed{ m_{A}(\lambda) = \prod_{i=1}^{k} (\lambda-\alpha_{i}) } \\
\\
\boxed{ \impliedby } \text{Let } m_{A} \text{ be factorizable into distinct linear factors} \\
\implies m_{A}(\lambda) = \prod_{i=1}^{k} (\lambda-\alpha_{i}) \\
\implies P_{A}(\lambda) = \prod_{i=1}^{k} (\lambda-\alpha_{i})^{\mu_{A}(\alpha_{i})} \implies A \sim A_{J} \\
\implies \text{Largest Jordan block corresponding to any eigenvalue of $A$ is of size } 1 \\
\implies A_{J} = D \implies \boxed{ A \sim D } \\
}
$$
