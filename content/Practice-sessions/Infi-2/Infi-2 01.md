---
{"publish":true,"created":"17/03/25, 13:03","modified":"2025-11-21T21:10:24.841+02:00","tags":["Academia","Practice","Infi-2"],"cssclasses":""}
---

## Primitive function and indefinite integral
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{Let } F \text{ be a differentiable function such that } F' = f \left( \frac{dF}{dx} = f \right) \\
F \text{ is then called a primitive function of } f \\
\text{Indefinite integral of } f \text{ is a set of its primitive functions} \\
\text{It is denoted as } \int f(x)dx = F + C \\
}
$$
## Known integrals
$$
\displaylines{
n \neq 1, \int x^{n}dx = \frac{x^{n+1}}{n+1} + C \\
\int \frac{1}{x}dx = \ln \lvert x \rvert + C \\
\int a^{x}dx = \frac{a^{x}}{\ln(a)} + c \\
\int e^{x}dx = e^{x} + C \\
\int \cos(x)dx = \sin(x) + C \\
\int \sin(x)dx = -\cos(x) + C \\
\int \frac{1}{1+x^{2}}dx = \arctan(x) + C \\
\int \frac{1}{\sqrt{ 1 - x^{2} }}dx = \arcsin(x) + C \\
\int \frac{1}{\cos^{2}(x)}dx = \tan(x) + C \\
}
$$
## Linearity of integral
$$
\displaylines{
\int (af + g)(x)dx = a\int f(x)dx + \int g(x)dx \\
}
$$
## Examples
$$
\displaylines{
\int \sqrt[6]{ x }dx = \int x^{1/6}dx = \frac{6}{7}\sqrt[6]{ x^{7} } + C \\
\\
\int \frac{7\cos^{2}(x)+2\sin^{2}(x)}{\cos^{2}(x)}dx = \int \frac{5\cos^{2}(x)}{\cos^{2}(x)} + \frac{2(\cos^{2}(x)+\sin^{2}(x))}{\cos^{2}(x)}dx = \\
= \int 5dx + \int \frac{2}{\cos^{2}x}dx = 5x + 2\tan(x) + C \\
}
$$
## Linear composition
$$
\displaylines{
\int f(x)dx = F(x) + C \\
\implies \int f(ax+b)dx = \frac{1}{a}F(ax+b) + C \\
}
$$
## Examples
$$
\displaylines{
\int \cos(3x+5)dx = \frac{1}{3}\sin(3x+5) + C \\
\\
\int e^{3x}dx = \frac{1}{3}e^{3x} + C \\
}
$$
## Trigonometric equalities
$$
\displaylines{
\sin^{2}(x) + \cos^{2}(x) = 1 \\
\sin(2x) = 2\sin(x)\cos(x) \\
\cos(2x) = 2\cos^{2}(x) - 1 = 1 - 2\sin^{2}(x) \\
\sin^{2}(x) = \frac{1-\cos(2x)}{2} \\
\cos^{2}(x) = \frac{1+\cos(2x)}{2} \\
\sin(x \pm y) = \sin(x)\cos(y) \pm \sin(y)\cos(x) \\
\cos(x \pm y) = \cos(x)\cos(y) \mp \sin(x)\sin(y) \\
\cos(x)\cos(y) = \frac{\cos(x-y) + \cos(x+y)}{2} \\
\sin(x)\sin(y) = \frac{\cos(x-y)-\cos(x+y)}{2} \\
\sin(x)\cos(y) = \frac{\sin(x+y) + \sin(x-y)}{2} \\
}
$$
## Examples
$$
\displaylines{
\int \sin(5x)\cos(2x)dx = \frac{1}{2} \int (\sin(7x) + \sin(3x))dx = \frac{1}{2}\left( -\frac{1}{7}\cos(7x) - \frac{1}{3}
\cos(3x) \right) + C \\
\\
\int \sin^{4}(x)dx = \int (\sin^{2}(x))^{2}dx = \int \left( \frac{1-\cos(2x)}{2} \right)^{2}dx = \\
= \frac{1}{4} \int (1 - 2\cos(2x) + \cos^{2}(2x))dx = \frac{1}{4} \int \left( 1 - 2\cos(2x) + \frac{1}{2} + \frac{\cos(4x)}{2} \right)dx = \\
= \frac{1}{4} \int \left( \frac{3}{2} - 2\cos(2x) + \frac{\cos(4x)}{2} \right)dx = \frac{1}{4}\left( \frac{3x}{2} - \sin(2x) + \frac{1}{8}\sin(4x) \right) + C \\
}
$$
## Integration by parts
$$
\displaylines{
\int f(x)g'(x)dx = f(x)g(x) - \int f'(x)g(x)dx \\
}
$$
## Examples
$$
\displaylines{
\int x^{4}\ln(x)dx = \int \ln(x)\left( \frac{x^{5}}{5} \right)'dx = \frac{x^{5}\ln(x)}{5} - \int \frac{x^{5}}{5x}dx = \\
= \frac{x^{5}\ln(x)}{5} + \frac{x^{5}}{25} + C \\
}
$$
## LIATE
$$
\displaylines{
&\text{Order of functions to choose as } f, g \text{ in integration by parts} \\
& \text{The higher the place, the better choice it is for } f \text{ and not } g \\
1. & \text{Logarithmic} \\
2. & \text{Inverse trigonometric} \\
3. & \text{Algebraic} \\
4. & \text{Trigonometric} \\
5. & \text{Exponential} \\
}
$$
## Examples
$$
\displaylines{
\int \cos(\ln x)dx = x\cos(\ln x) + \int \sin(\ln x)dx \\
\int \sin(\ln x)dx = x\sin(\ln x) - \int \cos(\ln x)dx \\
\implies \int \cos(\ln x)dx = x\cos(\ln x) + x\sin(\ln x) - \int \cos(\ln x)dx \\
\implies \int \cos(\ln x)dx = \frac{x\cos(\ln x) + x\sin(\ln x)}{2} + C \\
\implies \int \sin(\ln x)dx = \frac{x\sin(\ln x)-x\cos(\ln x)}{2} + C \\
}
$$
## Variable substitution
$$
\displaylines{
(f(g(x)))' = f'(g(x))g'(x) \\
\implies \int f'(g(x))g'(x)dx = f(g(x)) + C \\
t = g(x) \implies \int f'(t)g'(x)dx = f(t) + C = \int f'(t)dt \\
\implies f'(t)g'(x)dx = f'(t)dt \implies dt = g'(x)dx \\
}
$$
## Examples
$$
\displaylines{
\int \frac{2x}{1+x^{2}}dx \\
t = 1 + x^{2} \implies dt = (1+x^{2})'dx = 2xdx \implies dx = \frac{dt}{2x} \\
\implies \int \frac{2x}{t} \frac{dt}{2x} = \int \frac{1}{t}dt = \ln \lvert t \rvert + C = \ln \lvert 1+x^{2} \rvert + C \\
\\
\int \sin^{4}(x)\cos(x)dx \\
t = \sin(x) \implies dt = \cos(x)dx \\
\implies \int t^{4}dt = \frac{t^{5}}{5} + C = \frac{\sin^{5}(x)}{5} + C \\
\\
\int \arctan(x)dx = x\arctan(x) - \int \frac{x}{1+x^{2}}dx = \\
= x\arctan(x) - \frac{1}{2} \ln \lvert 1+x^{2} \rvert + C \\
}
$$
$$
\displaylines{
\int \sin^{m}(x)\cos^{n}(x)dx \\
\text{Choose function with even power} \\
\int \cos^{3}(x)\sin^{2}(x)dx \\
t = \sin(x) \implies dt = \cos(x)dx \\
\implies \int (1-t^{2})t^{2}dt = \int (t^{2}-t^{4})dt = \frac{t^{3}}{3} - \frac{t^{5}}{5} + C = \frac{\sin^{3}(x)}{3} - \frac{\sin^{5}(x)}{5} + C \\
\\
\int xe^{x^{2}}dx \underbrace{ = }_{ t = x^{2} } \frac{1}{2} \int e^{t}dt = \frac{e^{x^{2}}}{2} + C \\
\\
\int x^{3}e^{x^{2}}dx = \frac{x^{2}e^{x^{2}}}{2} - \int xe^{x^{2}}dx = \frac{x^{2}e^{x^{2}}}{2} - \frac{e^{x^{2}}}{2} + C \\
}
$$
