---
{"publish":true,"created":"24/03/25, 13:03","modified":"2025-11-21T21:10:24.853+02:00","tags":["Academia","Practice","Infi-2"],"cssclasses":""}
---

$$
\displaylines{
\int \frac{x^{3}}{x^{2}-3x+3}dx = \int (x+3)dx + 3 \int \frac{2x-3}{x^{2}-3x+3}dx = \\
= \frac{x^{2}}{2} + 3x + 3\ln \lvert x^{2}-3x+3 \rvert + C \\
}
$$
---
$$
\displaylines{
\int \frac{x}{x^{2} - 4x + 8}dx = \frac{1}{2} \int \frac{2x - 4}{x^{2}-4x+8}dx + \frac{1}{2} \int \frac{4}{x^{2}-4x+8}dx = \\
= \frac{1}{2}\ln \lvert x^{2}-4x+8 \rvert + 2 \int \frac{1}{(x-2)^{2}+2^{2}}dx = \\
= \frac{1}{2}\ln \lvert x^{2}-4x+8 \rvert + \arctan\left( \frac{x-2}{2} \right) + C \\
}
$$
---
$$
\displaylines{
\int \frac{x+3}{x^{2}-3x-40}dx = \int \frac{x+3}{(x+5)(x-8)}dx = \\
= \int \frac{A}{x+5}dx + \int \frac{B}{x-8}dx = \\
\left\{\begin{array}{}
A + B = 1 \\
-8A + 5B = 3 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = \frac{2}{13} \\
B = \frac{11}{13} \\
\end{array}\right. \\
\implies \int \frac{x+3}{x^{2}-3x-40}dx = \frac{2}{13}\ln \lvert x+5 \rvert + \frac{11}{13}\ln \lvert x-8 \rvert + C \\
}
$$
---
$$
\displaylines{
\int \frac{x^{3}-2}{x^{4}-x}dx = \int \frac{x^{3}-2}{x(x^{3}-1)}dx = \int \frac{x^{3}-2}{x(x-1)(x^{2}+x+1)}dx \\
\frac{1}{x(x-1)(x^{2}+x+1)} = \frac{A}{x} + \frac{B}{x-1} + \frac{Cx+D}{x^{2}+x+1} \\
x^{3} - 2 = A(x^{3}-1) + B(x^{3}+x^{2}+x) + Cx^{3} - Cx^{2} + Dx^{2} - Dx \\
\implies \left\{\begin{array}{}
A + B + C = 1 \\
B - C + D = 0 \\
B - D = 0 \\
A = 2 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = 2 \\
B = -\frac{1}{3} \\
C = -\frac{2}{3} \\
D = -\frac{1}{3} \\
\end{array}\right. \\
\implies \int \frac{x^{3}-2}{x^{4}-x}dx = 2\int \frac{1}{x}dx - \frac{1}{3}\int \frac{1}{x-1}dx - \frac{1}{3} \int \frac{2x+1}{x^{2}+x+1}dx = \\
= 2\ln \lvert x \rvert - \frac{1}{3}\ln \lvert x-1 \rvert - \frac{1}{3}\ln \lvert x^{2}+x+1 \rvert + C \\
}
$$
---
$$
\displaylines{
\int \frac{x^{6}+x+1}{x^{4}+5x^{2}+4}dx = \dots = \int x^{2}-5 + \frac{21x^{2}+x+21}{x^{4}+5x^{2}+4}dx = \\
= \int (x^{2}-5)dx + \int \frac{21x^{2}+x+21}{(x^{2}+1)(x^{2}+4)}dx = \dots \\
}
$$
---
$$
\displaylines{
\begin{array}{c|c}
\sqrt{ a^{2}-x^{2} } & x = a \cdot \sin t \\
\sqrt{ a^{2}+x^{2} } & x = a \cdot \tan t \\
\sqrt{ x^{2}-a^{2} } & x = \frac{a}{\cos^{2}t} \\
\end{array} \\
\text{For example:} \\
\int \frac{1}{x^{2}\sqrt{ 4-x^{2} }}dx \\
x = 2\sin t \implies dx = 2\cos tdt \\
\int \frac{1}{x^{2}\sqrt{ 4-x^{2} }}dx = \int \frac{2\cos t}{4\sin^{2}t\sqrt{ 4\cos^{2}t }}dt = \frac{1}{4} \int \frac{1}{\sin^{2}t}dt = -\frac{1}{4}\cot t + C \\
\sin^{2}t = \frac{x^{2}}{4} = 1 - \cos^{2}t \implies \cos t = \frac{\sqrt{ 1-x^{2} }}{2} \\
\implies \int \frac{1}{x^{2}\sqrt{ 4-x^{2} }}dx = \frac{-\sqrt{ 1 - x^{2} }}{4x} + C \\
}
$$
---
$$
\displaylines{
\int \frac{1}{\sin x}dx = \left\{\begin{array}{}
t = \tan \frac{x}{2} \\
dx = \frac{2}{1+t^{2}}dt \\
\sin x = \frac{2t}{1+t^{2}} \\
\end{array}\right\} = \int \frac{1+t^{2}}{2t} \frac{2}{1+t^{2}}dt = \int \frac{1}{t}dt = \\
= \ln \left\lvert  \tan \frac{x}{2}  \right\rvert + C \\
\\
\int \frac{1}{\cos x}dx = \left\{\begin{array}{}
t = \tan \frac{x}{2} \\
dx = \frac{2}{1+t^{2}}dt \\
\cos x = \frac{1-t^{2}}{1+t^{2}} \\
\end{array}\right\} = \int \frac{1+t^{2}}{1-t^{2}} \frac{2}{1+t^{2}}dt = \int \frac{2}{1-t^{2}}dt = \\
= \ln \lvert 1 - t \rvert + \ln \lvert 1 + t \rvert + C \\
}
$$
---
