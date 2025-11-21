---
{"publish":true,"created":"18/03/25, 12:03","modified":"2025-11-21T21:10:02.389+02:00","tags":["Academia","Assignment","Infi-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\int (x^{5} + 4)^{3}dx = \int (x^{15} + 12x^{10} + 48x^{5} + 64)dx = \\
= \frac{x^{16}}{16} + \frac{12x^{11}}{11} + \frac{48x^{6}}{6} + 64x + C = \\
= \boxed{ \frac{x^{16}}{16} + \frac{12x^{11}}{11} + 8x^{6} + 64x + C }
}
$$
# 2
$$
\displaylines{
\int (2x+71)^{828}dx \\
\text{Let } f(x) = x^{828} \implies \int f(x)dx = \frac{x^{829}}{829} + C \\
\implies \int (2x+71)^{828}dx = \int f(2x+71)dx = \boxed{ \frac{1}{2} \cdot \frac{(2x+71)^{829}}{829} + C } \\
}
$$
# 3
$$
\displaylines{
\int xe^{-x}dx \\
\text{Let } f(x) = x, g'(x) = e^{-x} \\
\implies f'(x) = 1, g(x) = -e^{-x} \\
\implies \int xe^{-x}dx = \int f(x)g'(x)dx = f(x)g(x) - \int f'(x)g(x)dx = \\
= -xe^{-x} + \int e^{-x}dx = \boxed{ -xe^{-x} - e^{-x} + C } \\
}
$$
# 4
$$
\displaylines{
\int \frac{1}{\sqrt{ x+1 }}dx \\
\text{Let } t = \sqrt{ x + 1 } \implies dt = (\sqrt{ x+1 })'dx = \frac{1}{2\sqrt{ x+1 }}dx \\
\implies \int \frac{1}{\sqrt{ x+1 }}dx = \int 2dt = 2t + C = \boxed{ 2\sqrt{ x+1 } + C } \\
}
$$
# 5
$$
\displaylines{
\int \frac{\arcsin(x)}{\sqrt{ x + 1 }}dx \\
\text{Let } f(x) = \arcsin(x), g'(x) = \frac{1}{\sqrt{ x+1 }} \\
\implies f'(x) = \frac{1}{\sqrt{ 1 - x^{2} }}, g(x) = 2\sqrt{ x + 1 } \\
\implies \int \frac{\arcsin(x)}{\sqrt{ x + 1 }}dx = \int f(x)g'(x)dx = f(x)g(x) - \int f'(x)g(x)dx = \\
= 2\arcsin(x)\sqrt{ x+1 } - \int \frac{2\sqrt{ x+1 }}{\sqrt{ (1-x)(1+x) }}dx \\
\int \frac{2\sqrt{ x+1 }}{\sqrt{ (1-x)(1+x) }}dx = \int \frac{2}{\sqrt{ 1-x }}dx \\
\text{Let } t = \sqrt{ 1 - x } \implies dt = -\frac{1}{2\sqrt{ 1 - x }}dx \\
\implies \int \frac{2}{\sqrt{ 1-x }}dx = \int -4dt = -4t + C = -4\sqrt{ 1-x } + C \\
\implies \int \frac{\arcsin(x)}{\sqrt{ x+1 }}dx = \boxed{ 2\arcsin(x)\sqrt{ x+1 } + 4\sqrt{ 1 - x } + C } \\
}
$$
# 6
$$
\displaylines{
\int \frac{e^{x}}{e^{x} + e^{x/2}}dx \\
\text{Let } t = e^{x} \implies dt = e^{x}dx \\
\implies \int \frac{e^{x}}{e^{x} + e^{x/2}}dx = \int \frac{1}{t + \sqrt{ t }}dt = \int \frac{1}{\sqrt{ t }(\sqrt{ t } + 1)}dt \\
\text{Let } u = \sqrt{ t } \implies du = \frac{1}{2\sqrt{ t }}dt \\
\implies \int \frac{1}{\sqrt{ t }(\sqrt{ t } + 1)}dt = \int \frac{2}{u+1}du = 2\ln(\lvert u + 1 \rvert) + C = \\
= 2\ln(\lvert \underbrace{ \sqrt{ t } + 1 }_{ > 0 } \rvert) + C = 2\ln(\sqrt{ t } + 1) + C = \boxed{ 2\ln(e^{x/2} + 1) + C } \\
}
$$
# 7
$$
\displaylines{
\int \frac{(1-x)^{2}}{x^{2}}dx \\
\int \frac{(1-x)^{2}}{x^{2}}dx = \int \frac{1-2x+x^{2}}{x^{2}}dx = \int \frac{1}{x^{2}}dx - 2 \int \frac{1}{x}dx + \int 1dx = \\
= \boxed{ -\frac{1}{x}-2\ln \lvert x \rvert + x + C } \\
}
$$
# 8
$$
\displaylines{
\int \frac{dx}{x\sqrt{ 1 + \ln x }} \\
\text{Let } t = \sqrt{ 1 + \ln x } \implies dt = \frac{1}{2x\sqrt{ 1 + \ln x }}dx \\
\implies \int \frac{dx}{x\sqrt{ 1 + \ln x }} = \int 2dt = 2t + C = \\
= \boxed{ 2\sqrt{ 1 + \ln x } + C } \\
}
$$
# 9
$$
\displaylines{
\int x\sqrt[5]{ 6x + 7 }dx \\
\text{Let } t = 6x + 7 \implies dt = 6dx \\
x = \frac{t-7}{6} \\
\implies \int x\sqrt[5]{ 6x + 7 }dx = \int \frac{(t-7)\sqrt[5]{ t }}{36}dt = \frac{1}{36}\left( \int t^{6/5}dt - 7 \int t^{1/5}dt \right) = \\
= \frac{1}{36}\left( \frac{t^{11/5}}{\frac{11}{5}} - \frac{7t^{6/5}}{\frac{6}{5}} \right) + C = \boxed{ \frac{5}{36}\left( \frac{(6x+7)^{11/5}}{11} - \frac{7(6x+7)^{6/5}}{6} \right) + C } \\
}
$$
# 10
$$
\displaylines{
\int \frac{\sqrt{ x+1 }+3}{x - \sqrt{ x+1 } + 1}dx \\
\text{Let } t = \sqrt{ x + 1 } \implies dt = \frac{1}{2\sqrt{ x+1 }}dx \implies dx = 2tdt \\
x = t^{2} - 1 \\
\implies \int \frac{\sqrt{ x+1 }+3}{x - \sqrt{ x+1 } + 1}dx = \int \frac{t + 3}{t^{2}-1-t+1}2tdt = \int \frac{2t+6}{t-1}dt = \\
= 2 \int \frac{t + 3}{t - 1}dt = 2 \int \left( 1 + \frac{4}{t - 1} \right)dt = 2 \int 1dt + 8 \int \frac{1}{t-1}dt = 2t + 8\ln \lvert t-1 \rvert + C = \\
= \boxed{ 2\sqrt{ x+1 } + 8\ln(\lvert \sqrt{ x+1 }-1 \rvert) + C } \\
}
$$
# 11
$$
\displaylines{
\int \arctan(x)dx \\
\text{Let } f(x) = \arctan(x), g'(x) = 1 \\
\implies f'(x) = \frac{1}{1+x^{2}}, g(x) = x \\
\implies \int \arctan(x)dx = \int f(x)g'(x)dx = f(x)g(x) - \int f'(x)g(x)dx = \\
= x\arctan(x) - \int \frac{x}{1+x^{2}}dx \\
\text{Let } t = 1 + x^{2} \implies dt = 2xdx \\
\implies \int \frac{x}{1+x^{2}}dx = \int \frac{1}{2t}dt = \frac{1}{2}\ln \lvert t \rvert + C = \frac{1}{2}\ln \lvert 1 + x^{2} \rvert + C \\
x^{2} + 1 > 0 \implies \lvert x^{2} + 1 \rvert = x^{2} + 1 \\
\implies \int \arctan(x)dx = \boxed{ x\arctan(x) - \frac{\ln(1 + x^{2})}{2} + C } \\
}
$$
# 12
$$
\displaylines{
\int \frac{\cos^{3}(x)}{\sin^{2}(x)}dx \\
\text{Let } t = \sin(x) \implies dt = \cos(x)dx \\
\implies \int \frac{\cos^{3}(x)}{\sin^{2}(x)}dx = \int \frac{1-t^{2}}{t^{2}}dt \underbrace{ = }_{ \text{Number 7} } -\frac{1}{t} - t + C = \\
= \boxed{ -\frac{1}{\sin(x)} - \sin(x) + C } \\
}
$$
# 13
$$
\displaylines{
\int \sin(\ln x)dx \\
\text{Let } f(x) = \sin(\ln x), g'(x) = 1 \\
\implies \int \sin(\ln x)dx = x\sin(\ln x) - \int \cos(\ln x)dx \\
\int \cos(\ln x)dx \\
\text{Let } f(x) = \cos(\ln x), g'(x) = 1 \\
\int \cos(\ln x)dx = x\cos(\ln x) + \int \sin(\ln x)dx \\
\implies \int \cos(\ln x)dx = x\cos(\ln x) + x\sin(\ln x) - \int \cos(\ln x)dx \\
\implies \int \cos(\ln x)dx = \frac{x\cos(\ln x) + x\sin(\ln x)}{2} + C \\
\implies \int \sin(\ln x)dx = \boxed{ \frac{x\sin(\ln x)-x\cos(\ln x)}{2} + C } \\
}
$$
# 14
$$
\displaylines{
\int x(1-x)^{2022}dx \\
\text{Let } t = 1 - x \implies dt = -dx \\
x = 1 - t \\
\implies \int x(1-x)^{2022}dx = \int -(1-t)t^{2022}dt = \\
= \int t^{2023}dt - \int t^{2022}dt = \frac{t^{2024}}{2024} - \frac{t^{2023}}{2023} + C = \\
= \boxed{ \frac{(1-x)^{2024}}{2024} - \frac{(1-x)^{2023}}{2023} + C } \\
}
$$
# 15
$$
\displaylines{
\int \frac{14}{\sqrt{ 13 - 12x^{2} }}dx \\
\int \frac{14}{\sqrt{ 13 - 12x^{2} }}dx = 14 \int \frac{1}{\sqrt{ 13 }\sqrt{ 1 - \frac{12}{13}x^{2} }}dx = \\
= \frac{14}{\sqrt{ 13 }} \int \frac{1}{\sqrt{ 1 - \frac{12}{13}x^{2} }}dx \\
\text{Let } t = x\sqrt{ \frac{12}{13} } \implies dt = \sqrt{ \frac{12}{13} }dx \\
\implies \int \frac{1}{\sqrt{ 1 - \frac{12}{13}x^{2} }}dx = \int \frac{\sqrt{ \frac{13}{12} }}{\sqrt{ 1 - t^{2} }}dt = \sqrt{ \frac{13}{12} } \int \frac{1}{\sqrt{ 1 - t^{2} }}dt = \\
= \sqrt{ \frac{13}{12} }\arcsin(t) + C = \sqrt{ \frac{13}{12} }\arcsin\left( x\sqrt{ \frac{12}{13} } \right) + C \\
\implies \int \frac{14}{\sqrt{ 13 - 12x^{2} }}dx = \frac{14}{\sqrt{ 13 }} \cdot \sqrt{ \frac{13}{12} } \arcsin\left( x\sqrt{ \frac{12}{13} } \right) + C = \\
= \boxed{ \frac{7}{\sqrt{ 3 }}\arcsin\left( x\sqrt{ \frac{12}{13} } \right) + C } \\
}
$$
# 16
$$
\displaylines{
\int \sqrt{ 2 - x^{2} }dx \\
\int \sqrt{ 2 - x^{2} }dx = \int \sqrt{ 2 }\sqrt{ 1 - \left( \frac{x}{\sqrt{ 2 }} \right)^{2} }dx \\
\text{Let } \sin(t) = \frac{x}{\sqrt{ 2 }} \implies t = \arcsin\left( \frac{x}{\sqrt{ 2 }} \right) \implies dt = \frac{1}{\sqrt{ 2 }\sqrt{ 1 - \left( \frac{x}{\sqrt{ 2 }} \right)^{2} }}dx \\
\implies dx = \sqrt{ 2 }\sqrt{ 1 - \sin^{2}(t) }dt \\
\implies \int \sqrt{ 2 }\sqrt{ 1 - \left( \frac{x}{\sqrt{ 2 }} \right)^{2} }dx = \int 2(1-\sin^{2}(t))dt = \int 2\cos^{2}(t)dt = \\
= 2 \int \frac{\cos(2t)+1}{2}dt = \int \cos(2t)dt + \int 1dt = \frac{\sin(2t)}{2} + t + C = \\
= \boxed{ \frac{\sin\left( 2\arcsin\left( \frac{x}{\sqrt{ 2 }} \right) \right)}{2} + 2\arcsin\left( \frac{x}{\sqrt{ 2 }} \right) + C } = \\
= \sin\left( \arcsin\left( \frac{x}{\sqrt{ 2 }} \right) \right)\cos\left( \arcsin\left( \frac{x}{\sqrt{ 2 }} \right) \right) + 2\arcsin\left( \frac{x}{\sqrt{ 2 }} \right) + C = \\
= \frac{x}{\sqrt{ 2 }}\sqrt{ 1 - \frac{x^{2}}{2} } + 2\arcsin\left( \frac{x}{\sqrt{ 2 }} \right) + C = \\
= \boxed{ \frac{x\sqrt{ 1-x^{2} }}{2} + 2\arcsin\left( \frac{x}{\sqrt{ 2 }} \right) + C } \\
}
$$
# 17
$$
\displaylines{
\int \frac{(x-1)^{2}}{\sqrt{ x }}dx \\
\text{Let } t = \sqrt{ x } \implies dt = \frac{1}{2\sqrt{ x }}dx \\
\implies \int \frac{(x-1)^{2}}{\sqrt{ x }}dx = \int 2(t^{2}-1)^{2}dt = \\
= 2 \int (t^{2}-1)^{2}dt = 2 \int (t^{4} - 2t^{2} + 1)dt = \frac{2t^{5}}{5} - \frac{4t^{3}}{3} + 2t + C = \\
= \boxed{ \frac{2x^{5/2}}{5} - \frac{4x^{3/2}}{3} + 2\sqrt{ x } + C } \\
}
$$
# 18
$$
\displaylines{
\int x\ln^{2}(x)dx \\
\text{Let } f(x) = \ln^{2}(x), g'(x) = x \\
\implies f'(x) = \frac{2\ln(x)}{x}, g(x) = \frac{x^{2}}{2} \\
\implies \int x\ln^{2}(x)dx = \frac{x^{2}\ln^{2}(x)}{2} - \int x\ln(x)dx \\
\int x\ln(x)dx = \frac{x^{2}\ln(x)}{2} - \int \frac{x}{2}dx = \frac{x^{2}\ln(x)}{2} - \frac{x^{2}}{4} + C \\
\implies \int x\ln^{2}(x)dx = \boxed{ \frac{x^{2}\ln^{2}(x)}{2} - \frac{x^{2}\ln(x)}{2} + \frac{x^{2}}{4} + C } \\
}
$$
# 19
$$
\displaylines{
\int \cos^{6}(x)dx \\
\int \cos^{6}(x)dx = \int (\cos^{2}(x))^{3}dx = \int \left( \frac{\cos(2x)+1}{2} \right)^{3}dx = \\
= \frac{1}{8} \int (\cos^{3}(2x) + 3\cos^{2}(2x) + 3\cos(2x) + 1)dx \\
\\
\int 1dx = x + C \\
\\
\int 3\cos(2x)dx = \frac{3}{2}\sin(2x) + C \\
\\
\int 3\cos^{2}(2x)dx \underbrace{ = }_{ t = 2x } \frac{3}{2} \int \cos^{2}(t)dt = \frac{3}{4} \int (\cos(2t) + 1)dt = \frac{3}{8}\sin(2t) + \frac{3}{4}t + C = \\
= \frac{3}{8}\sin(4x) + \frac{3}{2}x + C \\
\\
\int \cos^{3}(2x)dx \underbrace{ = }_{ t = \sin(2x) } \frac{1}{2} \int (1-t^{2})dt = \frac{1}{2}t - \frac{1}{6}t^{3} + C = \frac{1}{2}\sin(2x) - \frac{1}{6}\sin^{3}(2x) + C \\
\\
\implies \int \cos^{6}(x)dx = \frac{1}{8} \int (\cos^{3}(2x) + 3\cos^{2}(2x) + 3\cos(2x) + 1)dx = \\
= \boxed{ \frac{1}{8}\left( \frac{1}{2}\sin(2x) - \frac{1}{6}\sin^{3}(2x) + \frac{3}{8}\sin(4x) + \frac{3}{2}x + \frac{3}{2}\sin(2x) + x \right) + C } \\
}
$$
# 20
$$
\displaylines{
\int \cos^{7}(x)dx \\
\text{Let } t = \sin(x) \implies dt = \cos(x)dx \\
\implies \int \cos^{7}(x)dx = \int (1-t^{2})^{3}dt = \int (1 - 3t^{2} + 3t^{4} - t^{6})dt = \\
= t - t^{3} + \frac{3t^{5}}{5} - \frac{t^{7}}{7} + C = \boxed{ \sin(x) - \sin^{3}(x) + \frac{3\sin^{5}(x)}{5} - \frac{\sin^{7}(x)}{7} + C } \\
}
$$
