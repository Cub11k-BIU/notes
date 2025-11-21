---
{"publish":true,"created":"27/01/25, 12:01","modified":"2025-11-21T21:10:14.236+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 24
## Darboux's theorem #theorem 
$$
\displaylines{
\text{Let } f \text{ be a differentiable function on } [a, b] \\
\text{Then } \forall a_{1} < b_{1} \in [a, b]: \forall y \in [f'(a_{1}), f'(b_{1})] \exists x \in [a, b]: f'(x) = y \\
\text{In other words, $f'$ has intermediate value property} \\
\\
\text{Note: } f' \text{ does not have to be differentiable on } [a, b] \\
\text{If it is not continuous, then the discontinuities will be essential} \\
}
$$
---
## Example
$$
\displaylines{
f(x) = \begin{cases}
x^{2}\sin\left( \frac{1}{x^{7}} \right) & x \neq 0 \\
0 & x = 0 \\
\end{cases} \\
f'(0) = \lim_{ h \to 0 } \frac{f(h)-f(0)}{h} = \lim_{ h \to 0 } \frac{h^{2}\sin\left( \frac{1}{x^{7}} \right)}{h} = 0 \\
f'(x) = 2x\sin\left( \frac{1}{x^{7}} \right) + x^{2}\cos\left( \frac{1}{x^{7}} \right)\cdot \frac{-7}{x^{8}} = 2x\sin\left( \frac{1}{x^{7}} \right) - \frac{7\cos\left( \frac{1}{x^{7}} \right)}{x^{6}} \\
f \text{ is continuous at } 0 \\
f' \text{ is not continuous (essential discontinuity) at } 0 \\
}
$$
---
## L'Hopital's theorem/rule #theorem 
$$
\displaylines{
\text{Let } f, g \text{ be differentiable functions in the locality of } a \\
\text{Let } \exists \lim_{ x \to a } \frac{f'(x)}{g'(x)} \\
\text{Let } \lim_{ x \to a } f(x) = \lim_{ x \to a } g(x) = 0 \text{ or } \pm \infty \\
\text{Then } \lim_{ x \to a } \frac{f(x)}{g(x)} = \lim_{ x \to a } \frac{f'(x)}{g'(x)} \\
}
$$
---
## Example
$$
\displaylines{
\lim_{ x \to 0 } \frac{\overbrace{ \arctan x }^{ \to 0 }}{\underbrace{ e^{x}-1 }_{ \to 0 }} \\
(\arctan x)' = \frac{1}{1+x^{2}} \\
(e^{x}-1)' = e^{x} \\
\text{By L'Hopital's rule: } \lim_{ x \to 0 } \frac{\arctan x }{e^{x}-1} = \lim_{ x \to 0 } \frac{1}{(1+x^{2})e^{x}} = 1 \\
}
$$
## Example
$$
\displaylines{
\lim_{ x \to 0 } \frac{x-\arctan x}{x-\sin x} \\
\text{By L'Hopital's rule: } \lim_{ x \to 0 } \frac{\left( 1-\frac{1}{1+x^{2}} \right)}{1-\cos x} = \lim_{ x \to 0 } \frac{x^{2}}{(1+x^{2})(1-\cos x)} = \\
= \lim_{ x \to 0 } \frac{1}{1+x^{2}} \cdot \lim_{ x \to 0 } \frac{x^{2}}{1-\cos x} = \lim_{ x \to 0 } \frac{x^{2}}{1-\cos x} \\
\lim_{ x \to 0 } \frac{1-\cos x}{x^{2}} = \frac{1}{2} \implies \lim_{ x \to 0 } \frac{x^{2}}{1-\cos x} = 2 \\
\implies \lim_{ x \to 0 } \frac{x-\arctan x}{x-\sin x} = 2 \\
}
$$
## Example
$$
\displaylines{
\lim_{ x \to \infty } \frac{e^{x}}{x^{3}+2} = \lim_{ x \to \infty } \frac{e^{x}}{3x^{2}} = \lim_{ x \to \infty } \frac{e^{x}}{6x} = \lim_{ n \to \infty } \frac{e^{x}}{6} = \infty \\
}
$$
## Example
$$
\displaylines{
\lim_{ x \to 7^{+} } (x-7)\ln(x-7) = \lim_{ x \to 7^{+} } \frac{\ln(x-7)}{\frac{1}{x-7}} = \lim_{ x \to 7^{+} } \frac{x-7}{\frac{1}{\ln(x-7)}} \\
\lim_{ x \to 7^{+} } \frac{\ln(x-7)}{\frac{1}{x-7}} = \lim_{ x \to 7^{+} } \frac{\frac{1}{x-7}}{-\frac{1}{(x-7)^{2}}} = \lim_{ x \to 7^{+} } -(x-7) = 0 \\
}
$$
## Example
$$
\displaylines{
\lim_{ x \to 0^{+} } (\sin x)^{\sin x} = \lim_{ x \to 0 } e^{\sin x\ln(\sin x)} = \lim_{ x \to 0 } e^{\ln(\sin x)/(\sin x)^{-1}} \\
\lim_{ x \to 0^{+} } \frac{\ln(\sin x)}{(\sin x)^{-1}} = \frac{\frac{\cos x}{\sin x}}{-(\sin x)^{-2} \cdot \cos x} = \lim_{ x \to 0^{+} } -\frac{(\sin x)^{2}}{\sin x} = 0 \\
\implies \lim_{ x \to 0 } (\sin x)^{\sin x} = e^{0} = 1 \\
}
$$
## Example
$$
\displaylines{
\lim_{ x \to \infty } \left( \sin\left( \frac{1}{x} \right)+\cos\left( \frac{1}{x} \right) \right)^{x^{2}} = \lim_{ x \to \infty } e^{x^{2}\ln(\sin(1/x)+\cos(1/x))} \\
\lim_{ x \to \infty } \frac{\ln\left( \sin\left( \frac{1}{x} \right)+\cos\left( \frac{1}{x} \right) \right)}{\frac{1}{x^{2}}} \underbrace{ = }_{ t = \frac{1}{x} } \lim_{ t \to 0^{+} } \frac{\ln(\sin t + \cos t)}{t^{2}} \overset{ L }{ = } \lim_{ t \to 0^{+} } \frac{\frac{\cos t - \sin t}{\sin t + \cos t}}{2t} = \infty \\
}
$$
---
## When doesn't L'Hopital's rule work? #lemma 
### Case 1
$$
\displaylines{
\text{Exist functions, such that their differentiation only makes things worse} \\
\lim_{ x \to 0 } \frac{e^{-1/x^{2}}}{x^{2}} \overset{ L }{ = } \lim_{ x \to 0 } \frac{\frac{2}{x^{3}}e^{-1/x^{2}}}{2x} = \frac{e^{-1/x^{2}}}{x^{4}} \\
}
$$
### Case 2
$$
\displaylines{
\lim_{ x \to a } \frac{f'}{g'} \text{ doesn't exist} \\
\lim_{ x \to \infty } \frac{x+\sin x}{x+\cos x} \overset{ L }{ = } \lim_{ x \to \infty } \frac{1+\cos x}{1-\sin x} - \text{ doesn't exist} \\
\text{But } \lim_{ x \to \infty } \frac{1+\frac{\sin x}{x}}{1+\frac{\cos x}{x}} = 1 - \text{ exists} \\
}
$$
### Case 3
$$
\displaylines{
\lim_{ x \to 0 } \frac{\sin(x)}{x} \overset{ L }{ = } \lim_{ x \to 0 } \frac{\cos x}{1} = 1 \\
\text{Proof that } (\sin x)' = \cos x \text{ uses the fact that } \lim_{ x \to 0 } \frac{\sin x}{x} = 1 \\
\text{Using L'Hopital's rule here would create a cyclic dependency} \\
\lim_{ x \to 0 } \frac{1-\cos x}{x} = 0 \\
\lim_{ x \to 0 } \frac{\ln(1+x)}{x} = 1 \\
\lim_{ x \to 0 } \frac{a^{x}-1}{x} = \ln a \\
}
$$
### Case 4
$$
\displaylines{
\text{Special limits} \\
\frac{0}{0}, \frac{\infty}{\infty}, 0 \cdot \infty, 1^{\infty}, 0^{0}, \infty^{0} \\
\text{With these 6 forms we can use L'Hopital's rule} \\
\text{But what do we do with } \infty - \infty ? \\
\text{In this case there is no universal technique to convert this into a } \frac{0}{0} \text{ or } \frac{\infty}{\infty} \text{ division} \\
\text{In some cases we will be able to find it, in some cases not} \\
}
$$
---
## Logarithm vs polynomial #lemma 
$$
\displaylines{
\forall a, b > 0: \lim_{ x \to \infty } \frac{(\ln x)^{a}}{x^{b}} = 0 \\
\\
\text{Proof:} \\
\lim_{ x \to \infty } \frac{(\ln x)^{a}}{x^{b}} = \lim_{ x \to \infty } \left( \frac{\ln(x)}{x^{b/a}} \right)^{a} \\
t \to 0 \implies t^{a} \to 0^{a} = 0 \\
\lim_{ x \to \infty } \frac{\ln x}{x^{b/a}} \overset{ L }{ = } \lim_{ x \to \infty } \frac{\frac{1}{x}}{\frac{b}{a} \cdot x^{\frac{b}{a} - 1}} = \lim_{ x \to \infty } \frac{1}{\frac{b}{a} \cdot x^{b/a}} = 0 \\
\implies \boxed{\lim_{ x \to \infty } \frac{(\ln x)^{a}}{x^{b}} = 0} \\
}
$$
## Polynomial vs exponential #lemma 
$$
\displaylines{
\forall a > 1, b > 0: \lim_{ x \to \infty } \frac{x^{b}}{a^{x}} = 0 \\
\\
\text{Proof:} \\
\lim_{ x \to \infty } \frac{x^{b}}{a^{x}} = \lim_{ x \to \infty } \left( \frac{x}{a^{x/b}} \right)^{b} \\
\lim_{ x \to \infty } \frac{x}{a^{x/b}} \overset{ L }{ = } \lim_{ x \to \infty } \frac{1}{\ln(a) \cdot a^{x/b} \cdot \frac{1}{b}} = 0 \\
\implies \boxed{ \lim_{ x \to \infty } \frac{x^{b}}{a^{x}} = 0 } \\
}
$$
---
$$
\displaylines{
\lim_{ x \to 0 } \frac{a^{x}-1}{x} = \ln a \\
\sum \frac{\ln(n)}{n} \geq \sum \frac{1}{n} \implies \sum \frac{\ln(n)}{n} \text{ diverges} \\
}
$$
---
$$
\displaylines{
\lim_{ n \to \infty } (e^{1/n} - e^{-1/n})^{\sin(1/n)} \\
\text{Let } x_{n} = n \\
\text{Let } f(x_{n}) = (e^{1/n} - e^{-1/n})^{\sin(1/n)} \\
\text{Then } \lim_{ n \to \infty } (e^{1/n} - e^{-1/n})^{\sin(1/n)} = \lim_{ x \to \infty } f(x) \\
\lim_{ x \to \infty } (e^{1/x}-e^{-1/x})^{\sin(1/x)} = \lim_{ x \to \infty } e^{\sin(1/x) \cdot \ln(e^{1/x}-e^{-1/x})} \\
\lim_{ x \to \infty } \sin(1/x) \cdot \ln(e^{1/x}-e^{-1/x}) = \lim_{ x \to \infty } \frac{\ln(e^{1/x}-e^{-1/x})}{\left( \sin\left( \frac{1}{x} \right) \right)^{-1}} \\
\text{Let } t = \frac{1}{x}, t \to 0^{+} \\
\lim_{ t \to 0 } \frac{\ln(e^{t}-e^{-t})}{(\sin t)^{-1}} \overset{ L }{ = } \lim_{ t \to 0 } \frac{\frac{e^{t}+e^{-t}}{e^{t}-e^{-t}}}{-(\sin t)^{-2} \cdot \cos t} = - \lim_{ t \to 0 } \frac{(e^{t}+e^{-t})(\sin t)^{2}}{(e^{t}-e^{-t})\cos t} = \\
\overset{ L }{ = } - \lim_{ t \to 0 } \frac{e^{t}+e^{-t}}{\cos t} \cdot \lim_{ t \to 0 } \frac{(\sin t)^{2}}{e^{t}-e^{-t}} = -2 \cdot \lim_{ t \to 0 } \frac{2\overbrace{ \sin t }^{ \to 0 } \cdot \overbrace{ \cos t }^{ \to 1 }}{\underbrace{ e^{t}+e^{-t} }_{ \to 2 }} = -2 \cdot 0 = 0 \\
\implies \lim_{ x \to \infty } e^{\sin(1/x) \cdot \ln(e^{1/x}-e^{-1/x})} = e^{0} = 1 \\
\implies \boxed{ \lim_{ n \to \infty } (e^{1/n} - e^{-1/n})^{\sin(1/n)} = 1 } \\
}
$$
---
