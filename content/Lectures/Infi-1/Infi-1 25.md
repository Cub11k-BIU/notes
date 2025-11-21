---
{"publish":true,"created":"29/01/25, 11:01","modified":"2025-11-21T21:10:14.239+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 25
## Lemma
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
## Lemma
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
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{sin(n) \cdot \ln^{2}(n)}{n} \\
\sum_{n=1}^{\infty} \sin n \text{ is bounded} \\
\frac{\ln^{2}(n)}{n} \to 0 \\
\text{Let } f(x) = \frac{\ln^{2}(x)}{x} \\
f'(x) = \frac{\left( x \cdot 2\ln(x) \cdot \frac{1}{x} - \ln^{2}(x) \right)}{x^{2}} = \frac{\ln x}{x^{2}} \cdot (2-\ln x) \\
x > e^{2} \implies 2 - \ln x < 0 \implies f'(x) < 0 \\
\implies f(x) \text{ is monotonically decreasing after } e^{2} \\
\implies \frac{\ln^{2}(n)}{n} \text{ is monotonically decreasing after } e^{2} \\
\implies \text{By the Dirichlet's test: } \sum_{n=1}^{\infty} \frac{sin(n) \cdot \ln^{2}(n)}{n} \text{ converges} \\
}
$$
---
