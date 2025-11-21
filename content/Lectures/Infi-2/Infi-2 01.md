---
{"publish":true,"created":"16/03/25, 10:03","modified":"2025-11-21T21:10:14.363+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

# Integrals
## Primitive function #definition 
$$
\displaylines{
\text{Let } f \text{ be a function on } [a, b] \text{ or any other} \\
\text{Function } F \text{ is called primitive of $f$ if} \\
F' = f \\
\text{For example:} \\
f(x) = x^{2} \implies \forall C \in \mathbb{R}: F(x) = \frac{x^{3}}{3} + C \\
}
$$
## Two primitives #lemma 
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{Let } F, G \text{ be antiderivatives of } f \\
\text{Then } \exists C \in \mathbb{R}: F = G + C \\
\\
\text{Proof:} \\
(F - G)' = F' - G' = f - f = 0 \\
\implies F-G \text{ is constant} \implies \exists C \in \mathbb{R}: F - G = C \\
\implies \exists C \in \mathbb{R}: F = G + C \\
}
$$
## Indefinite integral #definition 
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{Integral is a set of primitives of } f \\
\text{Integral is denoted as } \int f(x)dx \\
\text{Note: this integral is an indefinite integral} \\
}
$$
---
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{We want to find it's primitive } F \\
}
$$
$$
\displaylines{
& \text{Let there be four types of functions} \\
1. & \quad \text{Functions without a primitive} \\
& \text{By Darboux's theorem, if function has a removable or a jump discontinuity} \\
& \text{it has no primitive} \\
2. & \text{Functions with "immediate" (known) integrals} \\
& \begin{array}{}
\int x^{n}dx = \frac{x^{n+1}}{n+1} + C \\
\int x^{-1}dx = \ln \lvert x \rvert + C \\
\int a^{x}dx = \frac{a^{x}}{\ln a} + C \\
\int \sin(x)dx = -\cos(x) + C \\
\int \cos(x)dx = \sin(x) + C \\
\int \frac{1}{\cos^{2}(x)}dx = \tan(x) + C \\
\int \frac{1}{x^{2}+1}dx = \arctan(x) + C \\
\int \frac{1}{\sqrt{ 1-x^{2} }}dx = \arcsin(x) + C \\
\int \ln(x)dx = x\ln x - x + C \\
\end{array} \\
3. & \text{Functions with no elementary primitive} \\
& \text{For example: } \int e^{x^{2}}dx = \frac{\sqrt{ \pi }}{2} erfi(x) + C \\
4. & \text{...} \\
}
$$
## Linearity of integrals #lemma 
$$
\displaylines{
\int (af + g)(x)dx = a\int f(x)dx + \int g(x)dx \\
\\
\text{Proof:} \\
\text{Let } F' = f \\
\text{Let } G' = g \\
\implies (aF' + G') = af+g \\
\implies \int (af + g)(x)dx = (aF+G) = aF + G = a\int f(x)dx + \int g(x)dx \\
\implies \int (af + g)(x)dx = a\int f(x)dx + \int g(x)dx \\
}
$$
## Integration by parts #theorem 
$$
\displaylines{
\text{Let } f, g \text{ be functions} \\
\text{Then } \int (fg')(x)dx = fg - \int (f'g)(x)dx \\
\\
\text{Proof:} \\
(fg)' = f'g + fg' \\
\implies \int (fg)'(x)dx = \int (f'g + fg')(x)dx = \int (f'g)(x)dx + \int (fg')(x)dx \\
\implies fg = \int (f'g)(x)dx - \int (fg')(x)dx \implies \int (fg')(x)dx = fg - \int (f'g)(x)dx \\
}
$$
### When should we use integration by parts?
$$
\displaylines{
1. \quad \text{ Product of functions, when one function is an obvious derivative} \\
\text{with known primitive} \\
\int x\sin x dx = \int x(-\cos x)'dx = -x\cos x - \int -\cos xdx = -x\cos x + \sin x + C \\
\text{Usually, choosing polynomial as } f \text{ is profitable} \\
}
$$
$$
\displaylines{
\int \ln(x)dx = \int \ln(x)x'dx = x\ln x - \int (\ln x)'xdx = x\ln x - \int 1 dx = x\ln x - x + C \\
}
$$
---
$$
\displaylines{
\int \sin(\ln x)dx = \int \sin(\ln x)x'dx = x\sin(\ln x) - \int \cos(\ln x)dx \\
\int \cos(\ln x)dx = \int \cos(\ln x)x'dx = x\cos(\ln x) + \int \sin(\ln x)dx \\
\implies 2\int \cos(\ln x)dx = x\sin(\ln x) + x\cos(\ln x) \\
\implies \int \cos(\ln x)dx = \frac{x\sin(\ln x) + x\cos(\ln x)}{2} + C \\
\implies \int \sin(\ln x)dx = \frac{x\sin(\ln x) - x\cos(\ln x)}{2} + C \\
}
$$