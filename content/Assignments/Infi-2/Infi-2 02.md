---
{"publish":true,"created":"01/04/25, 11:04","modified":"2025-11-21T21:10:02.412+02:00","tags":["Academia","Assignment","Infi-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\int \frac{2x^{2}-9x-9}{x^{3}-9x} \, dx \\
\\
\text{Solution:} \\
\frac{2x^{2} - 9x - 9}{x^{3} - 9x} = \frac{2x^{2}-9x-9}{x(x-3)(x+3)} = \frac{A}{x} + \frac{B}{x-3} + \frac{C}{x+3} \\
2x^{2} - 9x - 9 = A(x^{2}-9) + B(x^{2}+3x) + C(x^{2}-3x) \\
\implies \left\{\begin{array}{}
A+B+C = 2 \\
3B - 3C = -9 \\
-9A = -9 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = 1 \\
B = -1 \\
C = 2 \\
\end{array}\right. \\
\implies \int \frac{2x^{2}-9x-9}{x^{3}-9x} \, dx = \int \left( \frac{1}{x} - \frac{1}{x-3} + \frac{2}{x+3} \right) \, dx = \\
= \boxed{ \ln \left\lvert x \right\rvert - \ln \left\lvert x-3 \right\rvert + 2\ln \left\lvert x+3 \right\rvert + C } \\
}
$$
# 2
$$
\displaylines{
\int \frac{11x+17}{2x^{2}+7x-4} \, dx \\
\\
\text{Solution:} \\
D = 49 + 32 = 81 \\
x = \frac{-7 \pm 9}{4} = -4, \frac{1}{2} \\
\implies \frac{11x+17}{2x^{2}+7x-4} = \frac{11x+17}{(x+4)(2x-1)} = \frac{A}{x+4} + \frac{B}{2x-1} \\
11x + 17 = A(2x-1) + B(x+4) \\
\implies \left\{\begin{array}{}
2A + B = 11 \\
-A + 4B = 17 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = 3 \\
B = 5 \\
\end{array}\right. \\
\implies \int \frac{11x+17}{2x^{2}+7x-4} \, dx = \int \left( \frac{3}{x+4} + \frac{5}{2x-1} \right) \, dx = \\
= \boxed{ 3\ln \left\lvert x+4 \right\rvert + \frac{5}{2}\ln \left\lvert 2x-1 \right\rvert + C } \\
}
$$
# 3
$$
\displaylines{
\int \frac{3x-10}{x^{2}-4x+4} \, dx \\
\\
\text{Solution:} \\
\frac{3x - 10}{x^{2}-4x+4} = \frac{3x-10}{(x-2)^{2}} = \frac{A}{x-2} + \frac{B}{(x-2)^{2}} \\
3x-10 = A(x-2) + B \\
\implies \left\{\begin{array}{}
A = 3 \\
B = -4 \\
\end{array}\right. \\
\implies \int \frac{3x-10}{x^{2}-4x+4} \, dx = \int \left( \frac{3}{x-2} - \frac{4}{(x-2)^{2}} \right) \, dx = \\
= \boxed{ 3\ln \left\lvert x-2 \right\rvert + \frac{4}{x-2} + C } \\
}
$$
# 4
$$
\displaylines{
\int \frac{x^{3}}{x^{2}-3x+2} \, dx \\
\\
\text{Solution:} \\
\frac{x^{3}}{x^{2}-3x+2} = x + \frac{3x^{2}-2x}{x^{2}-3x+2} = x + 3 + \frac{7x-6}{x^{2}-3x+2} \\
\frac{7x-6}{x^{2}-3x+2} = \frac{7x-6}{(x-1)(x-2)} = \frac{A}{x-1} + \frac{B}{x-2} \\
7x - 6 = A(x-2) + B(x-1) \\
\implies \left\{\begin{array}{}
A + B = 7 \\
-2A - B = -6 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = -1 \\
B = 8 \\
\end{array}\right. \\
\implies \int \frac{x^{3}}{x^{2}-3x+2} \, dx = \int \left( x + 3 - \frac{1}{x-1} + \frac{8}{x-2} \right) \, dx = \\
= \boxed{ \frac{x^{2}}{2} + 3x - \ln \left\lvert x-1 \right\rvert + 8\ln \left\lvert x-2 \right\rvert + C } \\
}
$$
# 5
$$
\displaylines{
\int \frac{x^{5}+2x^{2}+1}{x^{3}-x} \, dx \\
\\
\text{Solution:} \\
\frac{x^{5}+2x^{2}+1}{x^{3}-x} = x^{2} + \frac{x^{3}+2x^{2}+1}{x^{3}-x} = x^{2} + 1 + \frac{2x^{2}-x+1}{x^{3}-x} \\
\frac{2x^{2}-x+1}{x^{3}-x} = \frac{2x^{2}-x+1}{x(x-1)(x+1)} = \frac{A}{x} + \frac{B}{x-1} + \frac{C}{x+1} \\
2x^{2}-x+1 = A(x^{2}-1) + B(x^{2}+x) + C(x^{2}-x) \\
\implies \left\{\begin{array}{}
A + B + C = 2 \\
B - C = -1 \\
-A = 1 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = -1 \\
B = 1 \\
C = 2 \\
\end{array}\right. \\
\implies \int \frac{x^{5}+2x^{2}+1}{x^{3}-x} \, dx = \int \left( x^{2}+1-\frac{1}{x}+\frac{1}{x-1}+\frac{2}{x+1} \right) \, dx = \\
= \boxed{ \frac{x^{3}}{3} + x - \ln \left\lvert x \right\rvert + \ln \left\lvert x-1 \right\rvert + 2\ln \left\lvert x+1 \right\rvert + C } \\
}
$$
# 6
$$
\displaylines{
\int \frac{x^{2}+x+16}{(x+1)(x-3)^{2}} \, dx \\
\\
\text{Solution:} \\
\frac{x^{2}+x+16}{(x+1)(x-3)^{2}} = \frac{A}{x+1} + \frac{B}{x-3} + \frac{C}{(x-3)^{2}} \\
x^{2} + x + 16 = A(x^{2}-6x+9) + B(x^{2}-2x-3) + C(x+1) \\
\implies \left\{\begin{array}{}
A+B = 1 \\
-6A-2B+C = 1 \\
9A - 3B + C = 16 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = 1-B \\
C = 7-4B \\
9-9B - 3B + 7 - 4B = 16 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = 1 \\
B = 0 \\
C = 7 \\
\end{array}\right. \\
\implies \int \frac{x^{2}+x+16}{(x+1)(x-3)^{2}} \, dx = \int \left( \frac{1}{x+1} + \frac{7}{(x-3)^{2}} \right) \, dx = \\
= \boxed{ \ln \left\lvert x+1 \right\rvert - \frac{7}{x-3} + C } \\
}
$$
# 7
$$
\displaylines{
\int \frac{2x^{2}-1}{(4x-1)(x^{2}+1)} \, dx \\
\\
\text{Solution:} \\
\frac{2x^{2}-1}{(4x-1)(x^{2}+1)} = \frac{A}{4x-1} + \frac{Bx+C}{x^{2}+1} \\
2x^{2} - 1 = A(x^{2}+1) + Bx(4x-1) + C(4x-1) \\
\implies \left\{\begin{array}{}
A + 4B = 2 \\
-B + 4C = 0 \\
A - C = -1 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = 2 - 16C \\
B = 4C \\
A = C - 1 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = -\frac{14}{17} \\
B = \frac{12}{17} \\
C = \frac{3}{17} \\
\end{array}\right. \\
\implies \int \frac{2x^{2}-1}{(4x-1)(x^{2}+1)} \, dx = \int \left( -\frac{14}{17(4x-1)} + \frac{12x+3}{17(x^{2}+1)} \right) \, dx = \\
= -\frac{14}{17} \cdot \frac{1}{4} \ln \left\lvert 4x-1 \right\rvert + \frac{3}{17} \int \frac{4x+1}{x^{2}+1} \, dx \\
\int \frac{4x+1}{x^{2}+1} \, dx = 2 \int \frac{\left( 2x+\frac{1}{2} \right)}{x^{2}+1} \, dx = 2 \int \frac{2x}{x^{2}+1} \, dx + \int \frac{1}{x^{2}+1} \, dx = \\
= 2\ln \left\lvert x^{2}+1 \right\rvert + \arctan(x) + C = 2\ln(x^{2}+1) + \arctan(x) + C \\
\implies \int \frac{2x^{2}-1}{(4x-1)(x^{2}+1)} \, dx = \boxed{ -\frac{7}{34} \ln \left\lvert 4x-1 \right\rvert + \frac{6}{17} \ln(x^{2}+1) + \frac{3}{17}\arctan(x) + C } \\
}
$$
# 8
$$
\displaylines{
\int \frac{x^{4}}{x^{4}+5x^{2}+4} \, dx \\
\\
\text{Solution:} \\
\frac{x^{4}}{x^{4}+5x^{2}+4} = 1 - \frac{5x^{2}+4}{x^{4}+5x^{2}+4} \\
\frac{5x^{2}+4}{x^{4}+5x^{2}+4} = \frac{5x^{2}+4}{(x^{2}+1)(x^{2}+4)} = \frac{Ax+B}{x^{2}+1} + \frac{Cx+D}{x^{2}+4} \\
5x^{2}+4 = Ax(x^{2}+4) + B(x^{2}+4) + Cx(x^{2}+1) + D(x^{2}+1) \\
\implies \left\{\begin{array}{}
A + C = 0 \\
B + D = 5 \\
4A + C = 0 \\
4B + D = 4 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = 0 \\
B = -\frac{1}{3} \\
C = 0 \\
D = \frac{16}{3} \\
\end{array}\right. \\
\implies \int \frac{x^{4}}{x^{4}+5x^{2}+4} \, dx = \int \left( 1 + \frac{1}{3(x^{2}+1)} - \frac{16}{3(x^{2}+4)} \right) \, dx = \\
= \boxed{ x + \frac{1}{3}\arctan(x) - \frac{8}{3}\arctan\left( \frac{x}{2} \right) + C } \\
}
$$
# 9
$$
\displaylines{
\int \frac{x^{2}+5x+4}{x^{4}+5x^{2}+4} \, dx \\
\\
\text{Solution:} \\
\frac{x^{2}+5x+4}{x^{4}+5x^{2}+4} = \frac{x^{2}+5x+4}{(x^{2}+1)(x^{2}+4)} = \frac{Ax+B}{x^{2}+1} + \frac{Cx+D}{x^{2}+4} \\
x^{2} + 5x + 4 = Ax(x^{2}+4) + B(x^{2}+4) + Cx(x^{2}+1) + D(x^{2}+1) \\
\implies \left\{\begin{array}{}
A + C = 0 \\
B + D = 1 \\
4A + C = 5 \\
4B + D = 4 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = \frac{5}{3} \\
B = 1 \\
C = -\frac{5}{3} \\
D = 0 \\
\end{array}\right. \\
\implies \int \frac{x^{2}+5x+4}{x^{4}+5x^{2}+4} \, dx = \int \left( \frac{5x+3}{3(x^{2}+1)} - \frac{5x}{3(x^{2}+4)} \right) \, dx \\
\int \frac{5x+3}{3(x^{2}+1)} \, dx = \frac{1}{3} \cdot \frac{5}{2} \int \frac{\left( 2x+\frac{6}{5} \right)}{x^{2}+1} \, dx = \frac{5}{6} \ln(x^{2}+1) + \arctan(x) + C \\
\int \frac{5x}{3(x^{2}+4)} \, dx = \frac{5}{6} \int \frac{2x}{x^{2}+4} \, dx = \frac{5}{6}\ln(x^{2}+4) + C \\
\implies \int \frac{x^{2}+5x+4}{x^{4}+5x^{2}+4} \, dx = \boxed{ \frac{5}{6} \ln(x^{2}+1) + \arctan(x) - \frac{5}{6}\ln(x^{2}+4) + C } \\
}
$$
# 10
$$
\displaylines{
\int \frac{dx}{(x^{2}+1)(x^{2}-1)} \\
\\
\text{Solution:} \\
\frac{1}{(x^{2}+1)(x^{2}-1)} = \frac{1}{(x^{2}+1)(x-1)(x+1)} = \frac{A}{x-1} + \frac{B}{x+1} + \frac{Cx+D}{x^{2}+1} \\
1 = A(x^{3}+x^{2}+x+1) + B(x^{3}-x^{2}+x-1) + Cx(x^{2}-1) + D(x^{2}-1) \\
\implies \left\{\begin{array}{}
A + B + C = 0 \\
A - B + D = 0 \\
A + B - C = 0 \\
A - B - D = 1 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = \frac{1}{4} \\
B = -\frac{1}{4} \\
C = 0 \\
D = -\frac{1}{2} \\
\end{array}\right. \\
\implies \int \frac{dx}{(x^{2}+1)(x^{2}-1)} = \int \left( \frac{1}{4} \frac{1}{x-1} - \frac{1}{4} \frac{1}{x+1} - \frac{1}{2} \frac{1}{x^{2}+1} \right) \, dx = \\
= \boxed{ \frac{1}{4}\ln \left\lvert x-1 \right\rvert - \frac{1}{4}\ln \left\lvert x+1 \right\rvert - \frac{1}{2}\arctan(x) + C } \\
}
$$
# 11
$$
\displaylines{
\int \frac{2x^{3}+3x^{2}-x-14}{x^{3}-8} \, dx \\
\\
\text{Solution:} \\
\frac{2x^{3}+3x^{2}-x-14}{x^{3}-8} = 2 + \frac{3x^{2}-x+2}{x^{3}-8} \\
\frac{3x^{2}-x+2}{x^{3}-8} = \frac{3x^{2}-x+2}{(x-2)(x^{2}+2x+4)} = \frac{A}{x-2} + \frac{Bx+C}{x^{2}+2x+4} \\
3x^{2}-x+2 = A(x^{2}+2x+4) + Bx(x-2) + C(x-2) \\
\implies \left\{\begin{array}{}
A + B = 3 \\
2A - 2B + C = -1 \\
4A - 2C = 2 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = 3 - B \\
C = 4B - 7 \\
12 - 4B - 8B + 14 = 2 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = 1 \\
B = 2 \\
C = 1 \\
\end{array}\right. \\
\implies \int \frac{2x^{3}+3x^{2}-x-14}{x^{3}-8} \, dx = \int \left(2 +  \frac{1}{x-2} + \frac{2x+1}{x^{2}+2x+4} \right) \, dx = \\
= 2x + \ln \left\lvert x-2 \right\rvert + \ln \left\lvert x^{2}+2x+4 \right\rvert - \int \frac{1}{x^{2}+2x+4} \, dx \\
\int \frac{1}{x^{2}+2x+4} \, dx = \int \frac{1}{(x+1)^{2} + (\sqrt{ 3 })^{2}} \, dx = \frac{1}{\sqrt{ 3 }} \arctan\left( \frac{x+1}{\sqrt{ 3 }} \right) + C \\
\implies \int \frac{2x^{3}+3x^{2}-x-14}{x^{3}-8} \, dx = \int \left( \frac{1}{x-2} + \frac{2x+1}{x^{2}+2x+4} \right) \, dx = \\
= \boxed{ 2x + \ln \left\lvert x-2 \right\rvert + \ln(x^{2}+2x+4) - \frac{1}{\sqrt{ 3 }} \arctan\left( \frac{x+1}{\sqrt{ 3 }} \right) + C } \\
}
$$
# 12
$$
\displaylines{
\int \frac{x^{3}}{x^{8}+2x^{4}+1} \, dx \\
\\
\text{Solution:} \\
\text{Let } t = x^{4} \implies dt = 4x^{3}dx \\
\int \frac{x^{3}}{x^{8}+2x^{4}+1} \, dx = \int \frac{1}{4(t+1)^{2}} \, dt = -\frac{1}{4} \frac{1}{t+1} + C = \\
= \boxed{ -\frac{1}{4(x^{4}+1)} + C } \\
}
$$
# 13
$$
\displaylines{
\int \frac{x^{3}}{x^{4}+1} \, dx \\
\\
\text{Solution:} \\
\text{Let } t = x^{4} \implies dt = 4x^{3}dx \\
\int \frac{x^{3}}{x^{4}+1} \, dx = \int \frac{1}{4(t+1)} \, dt = \frac{1}{4}\ln \left\lvert t+1 \right\rvert + C = \\
= \boxed{ \frac{1}{4}\ln(x^{4}+1) + C } \\
}
$$
# 14
$$
\displaylines{
\int \frac{1}{3-2\sin x} \, dx \\
\\
\text{Solution:} \\
\text{Let } t = \tan\left( \frac{x}{2} \right) \\
\frac{1}{\cos^{2}\left( \frac{x}{2} \right)} = \frac{\sin^{2}\left( \frac{x}{2} \right) + \cos^{2}\left( \frac{x}{2} \right)}{\cos^{2}\left( \frac{x}{2} \right)} = \tan^{2}\left( \frac{x}{2} \right) + 1 = t^{2} + 1 \\
\implies dt = \frac{t^{2}+1}{2}dx \implies dx = \frac{2}{t^{2}+1}dt \\
\sin x = 2\sin\left( \frac{x}{2} \right)\cos\left( \frac{x}{2} \right) = 2\tan\left( \frac{x}{2} \right)\cos^{2}\left( \frac{x}{2} \right) = \frac{2t}{t^{2}+1} \\
\implies \int \frac{1}{3-2\sin x} \, dx = \int \frac{2}{(t^{2}+1)\left( 3-\frac{4t}{t^{2}+1} \right)} \, dt = 2\int \frac{1}{\frac{(t^{2}+1)(3t^{2}-4t+3)}{t^{2}+1}} \, dt = \\
= 2 \int \frac{1}{3t^{2}-4t+3} \, dt = \frac{2}{3} \int \frac{1}{t^{2} - \frac{4}{3}t + 1} \, dt = \frac{2}{3} \int \frac{1}{\left( t-\frac{2}{3} \right)^{2} + \left( \frac{\sqrt{ 5 }}{3} \right)^{2}} \, dx = \\
= \frac{2}{3} \frac{3}{\sqrt{ 5 }}\arctan\left( \frac{3\left( t-\frac{2}{3} \right)}{\sqrt{ 5 }} \right) + C = \frac{2}{\sqrt{ 5 }}\arctan\left( \frac{3t-2}{\sqrt{ 5 }} \right) + C = \\
= \boxed{ \frac{2}{\sqrt{ 5 }}\arctan\left( \frac{3\tan\left( \frac{x}{2} \right) - 2}{\sqrt{ 5 }} \right) + C } \\
}
$$
# 15
$$
\displaylines{
\int \frac{\sin x + 3}{3 - \cos x} \, dx \\
\\
\text{Solution:} \\
\int \frac{\sin x + 3}{3 - \cos x} \, dx = \int -\frac{\sin x}{\cos x - 3} \, dx - \int \frac{3}{\cos x - 3} \, dx = \\
= \ln \left\lvert \cos x - 3 \right\rvert - \int \frac{3}{\cos x-3} \, dx = \ln(3-\cos x) - \int \frac{3}{\cos x-3} \, dx \\
\int \frac{3}{\cos x-3} \, dx = \left\{\begin{array}{}
t = \tan\left( \frac{x}{2} \right) \\
dx = \frac{2}{t^{2}+1}dt \\
\cos x = 2\cos^{2}\left( \frac{x}{2} \right) - 1 = \frac{2}{t^{2}+1} - 1 = \frac{1-t^{2}}{1+t^{2}} \\
\end{array}\right\} = \\
= 3 \int \frac{1}{\frac{1-t^{2}}{1+t^{2}} - 3} \cdot \frac{2}{t^{2}+1} \, dt = 3 \int \frac{2}{(-2-4t^{2})} \, dt = -3 \int \frac{1}{2t^{2}+1} \, dt = \\
= -\frac{3}{2} \int \frac{1}{t^{2}+\left( \frac{1}{\sqrt{ 2 }} \right)^{2}} \, dx = -\frac{3}{2} \cdot \sqrt{ 2 } \cdot \arctan(t\sqrt{ 2 }) + C = \\
= -\frac{3}{\sqrt{ 2 }}\arctan\left( \sqrt{ 2 } \cdot \tan\left( \frac{x}{2} \right) \right) + C \\
\implies \int \frac{\sin x + 3}{3 - \cos x} \, dx = \boxed{ \ln(3-\cos x) + \frac{3}{\sqrt{ 2 }}\arctan\left( \sqrt{ 2 } \cdot \tan\left( \frac{x}{2} \right) \right) + C } \\
}
$$
# 16
$$
\displaylines{
\int \frac{\sin^{3}(x)}{\cos^{3}(x)} \, dx \\
\\
\text{Solution:} \\
\text{Let } t = \cos x \implies dt = -\sin x \, dx \\
\int \frac{\sin^{3}(x)}{\cos^{3}(x)} \, dx = \int -\frac{\sin^{2}(x)}{\cos^{3}(x)} \cdot (-\sin x) \, dx = \int \frac{t^{2}-1}{t^{3}} \, dt = \\
\ln \left\lvert t \right\rvert + \frac{1}{2t^{2}} + C = \boxed{ \ln \left\lvert \cos x \right\rvert + \frac{1}{2\cos^{2}(x)} + C } \\
}
$$
# Exercise
## a
$$
\displaylines{
\text{Show: } \int \frac{1}{x^{2}+a^{2}} \, dx = \frac{1}{a} \arctan\left( \frac{x}{a} \right) + C \\
\\
\text{Solution:} \\
\text{Let } a \neq 0 \\
\int \frac{1}{x^{2}+a^{2}} \, dx = \frac{1}{a^{2}} \int \frac{1}{\left( \frac{x}{a} \right)^{2} + 1} \, dx \\
\frac{x}{a} = \frac{1}{a} \cdot x - \text{ this function is linear} \\
\implies \frac{1}{a^{2}} \int \frac{1}{\left( \frac{1}{a} \cdot x \right)^{2}+1} \, dx = \frac{1}{a^{2}} \cdot \frac{1}{\frac{1}{a}} \cdot \arctan\left( \frac{x}{a} \right) + C = \boxed{ \frac{1}{a} \arctan\left( \frac{x}{a} \right) + C } \\
}
$$
## b
$$
\displaylines{
\text{Integrate by parts: } \int \frac{1}{x^{2}+a^{2}} \, dx \\
\\
\text{Solution:} \\
a = 0 \implies \int \frac{1}{x^{2}+a^{2}} \, dx = \int \frac{1}{x^{4}} \, dx = -\frac{1}{3x^{3}} + C \\
\\
\text{Let } a \neq 0 \\
\text{Let } f(x) = \frac{1}{x^{2}+a^{2}}, g'(x) = 1 \\
f'(x) = -\frac{2x}{(x^{2}+a^{2})^{2}} \\
g(x) = x \\
\implies \int \frac{1}{x^{2}+a^{2}} \, dx = \frac{x}{x^{2}+a^{2}} + 2\int \frac{x^{2}}{(x^{2}+a^{2})^{2}} \, dx \\
\int \frac{x^{2}}{(x^{2}+a^{2})^{2}} \, dx = \int \frac{x^{2}+a^{2}}{(x^{2}+a^{2})^{2}} \, dx - a^{2} \int \frac{1}{(x^{2}+a^{2})^{2}} \, dx = \\
= \int \frac{1}{x^{2}+a^{2}} \, dx - a^{2} \int \frac{1}{(x^{2}+a^{2})^{2}} \, dx \\
\implies \int \frac{1}{x^{2}+a^{2}} \, dx = \frac{x}{x^{2}+a^{2}} + 2\left( \int \frac{1}{x^{2}+a^{2}} \, dx - a^{2}\int \frac{1}{(x^{2}+a^{2})^{2}} \, dx  \right) \\
\implies 2a^{2}\int \frac{1}{(x^{2}+a^{2})^{2}} \, dx - \frac{x}{x^{2}+a^{2}} = \int \frac{1}{x^{2}+a^{2}} \, dx = \frac{1}{a}\arctan\left( \frac{x}{a} \right) + C \\
\implies \int \frac{1}{(x^{2}+a^{2})^{2}} \, dx = \boxed{ \frac{x}{2a^{2}(x^{2}+a^{2})} + \frac{1}{2a^{3}}\arctan\left( \frac{x}{a} \right) + C } \\
}
$$
## c
$$
\displaylines{
\int \frac{1}{(x^{2}+a^{2})^{n}} \, dx \\
\\
\text{Let } \int \frac{1}{(x^{2}+a^{2})^{n}} \, dx = F_{n}(x, a) \\
\\
\text{Let } f(x) = \frac{1}{(x^{2}+a^{2})^{n-1}}, g'(x) = 1 \\
f'(x) = -\frac{2(n-1)x}{(x^{2}+a^{2})^{n}}, g(x) = x \\
\int \frac{1}{(x^{2}+a^{2})^{n-1}} \, dx = \frac{x}{(x^{2}+a^{2})^{n-1}} + 2(n-1) \int \frac{x^{2}}{(x^{2}+a^{2})^{n}} \, dx \\
\int \frac{x^{2}}{(x^{2}+a^{2})^{n}} \, dx = \int \frac{1}{(x^{2}+a^{2})^{n-1}} \, dx - a^{2} \int \frac{1}{(x^{2}+a^{2})^{n}} \, dx \\
\implies F_{n-1}(x, a) = \frac{x}{(x^{2}+a^{2})^{n-1}} + 2(n-1)\left( F_{n-1}(x, a) - a^{2}\int \frac{1}{(x^{2}+a^{2})^{n}} \, dx \right) \\
\implies 2(n-1)a^{2}\int \frac{1}{(x^{2}+a^{2})^{n}} \, dx = \frac{x}{(x^{2}+a^{2})^{n-1}} + (2n-3)F_{n-1}(x, a) \\
\implies \boxed{ F_{n}(x, a) = \frac{x}{2(n-1)a^{2}(x^{2}+a^{2})^{n-1}} + \frac{2n-3}{2(n-1)a^{2}}F_{n-1}(x, a) + C } \\
F_{1}(x, a) = \frac{1}{a}\arctan\left( \frac{x}{a} \right) + C \\
}
$$
## d, e, f
$$
\displaylines{
\int \frac{Ax+B}{(ax^{2}+bx+c)^{n}} \, dx \\
\\
\text{Solution:} \\
\text{Let } n \neq 1 \\
\\
\frac{Ax+B}{(ax^{2}+bx+c)^{n}} = \frac{Ax+B}{a^{n}\left( x^{2}+\frac{b}{a}x + \frac{c}{a} \right)^{n}} \underset{ b' = \frac{b}{a}, c' = \frac{c}{a} }{ = } \frac{1}{a^{n}} \cdot \frac{Ax+B}{(x^{2} + b'x + c')^{n}} \\
\frac{Ax+B}{(x^{2} + b'x + c')^{n}} = \frac{Ax+B}{\left( \left( x+\frac{b'}{2} \right)^{2} + \frac{4c'-b'^{2}}{4} \right)^{n}} \\
\text{Let } t = x + \frac{b'}{2} \\
\frac{Ax+B}{\left( \left( x+\frac{b'}{2} \right)^{2} + \frac{4c'-b'^{2}}{4} \right)^{n}} = \frac{\left( At + \frac{2B-Ab'}{2} \right)}{\left( t^{2}+\left( \sqrt{ \frac{4c'-b'^{2}}{4} } \right)^{2} \right)^{n}} = \\
\underset{ k = \sqrt{ \frac{4c'-b'^{2}}{4} } }{ = } A \cdot \frac{t}{\left( t^{2}+k^{2} \right)^{n}} + \frac{2B - Ab'}{2} \cdot \frac{1}{(t^{2}+k^{2})^{n}} \\
\\
\int \frac{t}{\left( t^{2}+k^{2} \right)^{n}} \, dt \underset{ u = t^{2} }{ = } \frac{1}{2} \int \frac{1}{(u+k^{2})^{n}} \, du = \frac{1}{2} \cdot -\frac{1}{(n-1)(u+k^{2})^{n-1}} + C = \\
= -\frac{1}{2(n-1)(t^{2}+k^{2})^{n-1}} + C \\
\\
\implies \boxed{ \int \frac{Ax+B}{(ax^{2}+bx+c)^{n}} \, dx = \frac{1}{a^{n}} \left( \frac{-A}{2(n-1)(t^{2}+k^{2})^{n-1}} + \frac{2B-Ab'}{2} F_{n}(t, k) \right) } \\
}
$$
## g
$$
\displaylines{
\int \frac{2x+1}{(x^{2}+3x+5)^{2}} \, dx \\
\\
\text{Solution:} \\
\text{Let } \int \frac{2x+1}{(x^{2}+3x+5)^{2}} \, dx = G(x) \\
\frac{2x+1}{(x^{2}+3x+5)^{2}} = \frac{2x+1}{\left( \left( x+\frac{3}{2} \right)^{2} + \left( \sqrt{ \frac{11}{4} } \right)^{2} \right)^{2}} = \\
\underset{ t = x + \frac{3}{2} }{ = } \frac{2t-2}{\left( t^{2} + \left( \sqrt{ \frac{11}{4} } \right)^{2} \right)^{2}} = 2 \frac{t}{\left( t^{2}+\left( \sqrt{ \frac{11}{4} } \right)^{2} \right)^{2}} - 2 \frac{1}{\left( t^{2}+\left( \sqrt{ \frac{11}{4} } \right)^{2} \right)^{2}} \\
\implies \int \frac{2x+1}{(x^{2}+3x+5)^{2}} \, dx = 2 \int \frac{t}{\left( t^{2}+\left( \sqrt{ \frac{11}{4} } \right)^{2} \right)^{2}} \, dt - 2F_{2}\left( t, \sqrt{ \frac{11}{4} } \right) \\
\\
\int \frac{t}{\left( t^{2}+\left( \sqrt{ \frac{11}{4} } \right)^{2} \right)^{2}} \, dt \underset{ u = t^{2} }{ = } \frac{1}{2} \int \frac{1}{\left( u+\frac{11}{4} \right)^{2}} \, du = -\frac{1}{2\left( u+\frac{11}{4} \right)} + C \\
F_{2}\left( t, \sqrt{ \frac{11}{4} } \right) = \frac{t}{2\frac{11}{4}\left( t^{2}+\frac{11}{4} \right)} + \frac{1}{2\frac{11}{4}\sqrt{ \frac{11}{4} }}\arctan\left( \frac{t}{\sqrt{ \frac{11}{4} }} \right) + C \\
\\
\implies G(x) = -\frac{2}{2\left( t^{2}+\frac{11}{4} \right)} - 2\left( \frac{t}{\frac{11}{2}\left( t^{2}+\frac{11}{4} \right)} + \frac{1}{\frac{11}{2}\sqrt{ \frac{11}{4} }}\arctan\left( \frac{t}{\sqrt{ \frac{11}{4} }} \right) \right) + C = \\
\underset{ t^{2} + \frac{11}{4} = x^{2}+3x+5 }{ = } -\frac{1}{x^{2}+3x+5} - 2\left( \frac{2x+3}{11(x^{2}+3x+5)} + \frac{4}{11\sqrt{ 11 }}\arctan\left( \frac{2x+3}{\sqrt{ 11 }} \right) \right) + C = \\
= \boxed{ \frac{-4x-17}{11(x^{2}+3x+5)} - \frac{8}{11\sqrt{ 11 }\arctan\left( \frac{2x+3}{\sqrt{ 11 }} \right)} + C } \\
}
$$
