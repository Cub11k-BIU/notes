---
{"publish":true,"created":"03/11/25, 17:11","modified":"2026-03-24T14:58:08.195+02:00","tags":["Academia","#Practice","Algorithms-1"],"cssclasses":""}
---

## FFT pseudo-code example
$$
\displaylines{
FFT(a_{0}, \dots, a_{n-1}) \to (y_{0}, \dots, y_{n-1}) \\
\\
\begin{align}{}
& \ FFT(A(a_{0}, \dots, a_{n-1})): \\
1. &\quad \text{ if } n = 1 \\
2. &\quad \quad \text{ return } a_{0} \\
3. &\quad \text{ Let } A_{even} = (a_{0}, a_{2}, \dots, a_{n-2}) \\
4. &\quad \text{ Let } A_{odd} = (a_{1}, a_{3}, \dots, a_{n-1}) \\
5. &\quad \ P_{even} = FFT(A_{even}) \\
6. &\quad \ P_{odd} = FFT(A_{odd}) \\
7. &\quad \ \text{for } j = 0 \text{ to } \frac{n}{2} - 1: \\
8. &\quad \quad \ y_{j} = P_{even}[j] + \omega_{n}^{j} \cdot P_{odd}[j] \\
9. &\quad \quad \ y_{\frac{n}{2} + j} = P_{even}[j] - \omega_{n}^{j} \cdot P_{odd}[j] \\
10. &\quad \text{ return } (y_{0}, \dots, y_{n-1}) \\
\end{align} \\
}
$$
## Example of running FFT
$$
\displaylines{
A(x) = -9 + x \\
B(x) = 1 + 8x \\
C(x) = A(x) \cdot B(x) = -9 -71x + 8x^{2} \\
\\
\begin{align}
A & = (-9, 1, 0, 0) \\
B & = (1, 8, 0, 0) \\
C & = (-9, -71, 8, 0) \\
\end{align} \\
}
$$

$$
\displaylines{
\begin{array}{}
FFT(-9, 1, 0, 0) \implies \begin{array}{}
A_{even} = (-9, 0) \\
A_{odd} = (1, 0) \\
\end{array} \\
\implies P_{even} = FFT(-9, 0) \implies \begin{array}{}
A_{even} = (-9) \\
A_{odd} = (0) \\
P_{even} = -9 \\
P_{odd} = 0 \\
\end{array} \implies j = 0: \begin{array}{}
y_{0} = -9 + 0 \\
y_{1} = -9 - 0 \\
\end{array} \\ \\
\implies P_{even} = FFT(-9, 0) \implies \dots = (-9, -9) \\
\implies P_{odd} = FFT(1, 0) \implies \dots = (1, 1) \\
j = 0 \implies \begin{array}{}
y_{0} = -9 + 1 \cdot 1 = -8 \\
y_{2} = -9 - 1 \cdot 1 = -10 \\
\end{array} \\
j = 1 \implies \begin{array}{}
y_{1} = -9 + i \cdot 1 = -9+i \\
y_{3} = -9 - i \cdot 1 = -9-i \\
\end{array} \\
\text{return } (-8, -9+i, -10, -9-i) \\
\end{array} \\
\implies \left\{\begin{array}{}
A(x) = (-8, -9+i, -10, -9-i) \\
B(x) = \dots = (9, 1+8i, -7,1-8i) \\
\end{array}\right. \\
\implies C(x) = (-72, -17-71i, 70, -17+71i) \\
}
$$
## Example of running FFT$^{-1}$
$$
\displaylines{
C(x) = (-72, -17-71i, 70, -17+71i) \\
FFT^{-1}(-72, -17-71i, 70, -17+71i) \\
\implies FFT^{-1}(-72, 70) + FFT^{-1}(-17-71i, -17+71i) \\
\\
FFT^{-1}(-72, 70) = (-2, -142) \\
FFT^{-1}(-17-71i, -17+71i) = (-34, -142i) \\
j = 0 \implies \begin{array}{}
y_{0} = -2 - 34 = -36 \\
y_{2} = -2 + 34 = 32 \\
\end{array} \\
j = 1 \implies \begin{array}{}
y_{1} = -142 + (-i)(-142i) = -142 - 142 = -284 \\
y_{3} = -142 - (-i)(-142i) = -142 + 142 = 0 \\
\text{return } (-36, 32, -284, 0) \\
\end{array} \\
\implies C(x) = (-9, -71, 8, 0) \\
}
$$
---
## Hamming distance between long string and short window-template
### Input
$$
\displaylines{
T[1..n] \\
P[1..m] \\
n \geq m \\
\text{Both text and template are binary} \\
}
$$
### Output
$$
\displaylines{
\forall i \in [0, n-m]: HD(P, T[i+1..i+m]) \\
}
$$
### Naive solution
For each window, calculate Hamming distance, this takes $O(nm)$
### Better solution
$$
\displaylines{
\text{Let } T = a_{0}\dots a_{n-1} \\
\text{Let } P = b_{0}\dots p_{m-1} \\
\\
\text{Let } A(x) = (a_{0}, \dots, a_{n-1}) \\
\text{Let } B(x) = (b_{m-1}, \dots, b_{0}) \\
\text{Let } C(x) = A(x)B(x) \\
\text{Let } \tilde{C}(x) = \tilde{A}(x)\tilde{B}(x) \\
\implies \forall i \in [0, n-m]: HD(P, T[i+1..i+m]) = C(x)[m+i] + \tilde{C}(x)[m+i] \\
}
$$
Complexity, in this case, is $O(n\log m)$
