---
{"publish":true,"created":"29/01/25, 17:01","modified":"2025-11-21T21:10:25.042+02:00","tags":["Academia","Practice","Infi-1"],"cssclasses":""}
---

# Infi-1 13
## Lagrange's mean value theorem
$$
\displaylines{
\text{This is a generalization of Rolle's theorem} \\
\text{Let } f \text{ be continuous on } [a, b] \text{ and differentiable on } (a, b) \\
\text{Then } \exists \xi \in (a, b): f'(\xi) = \frac{f(b)-f(a)}{b-a} \\
}
$$
---
## Exercise
$$
\displaylines{
0 < y \leq x < \frac{\pi}{2} \\
\frac{x-y}{\cos^{2}(y)} + \tan(y) \leq \tan x \leq \frac{x-y}{\cos^{2}(x)} + \tan y \\
\text{Let } x = y \\
\tan y \leq \tan x \leq \tan y \iff \tan x = \tan y \\
\\
\text{Let } x \neq y \\
\frac{x-y}{\cos^{2}(y)} \leq \tan x - \tan y \leq \frac{x-y}{\cos^{2}(x)} \\
\frac{1}{\cos^{2}(y)} \leq \frac{\tan x - \tan y}{x-y} \leq \frac{1}{\cos^{2}(x)} \\
\text{Let } f(t) = \tan t \text{ on interval } (y, x) \\
\tan t \text{ is continuous on } \left( 0, \frac{\pi}{2} \right) \supseteq [y, x] \\
\tan t \text{ is differentiable on } \left( o, \frac{\pi}{2} \right) \supseteq (y, x) \\
\implies \text{By the mean value theorem: } \exists c \in (y, x): f'(c) = \frac{\tan x - \tan y}{x - y} \\
\text{Let } g(t) = f'(t) = \frac{1}{\cos^{2}(t)} \\
\cos t \text{ is monotonically decreasing on } \left( 0, \frac{\pi}{2} \right) \\
\implies \cos^{2}(t) \text{ is monotonically decreasing on } \left( 0, \frac{\pi}{2} \right) \\
\implies \frac{1}{\cos^{2}(t)} \text{ is monotonically increasing on } \left( o, \frac{\pi}{2} \right) \\
\implies \forall d \in (y, x): \frac{1}{\cos^{2}(y)} \leq \frac{1}{\cos^{2}(d)} \leq \frac{1}{\cos^{2}(x)} \\
\exists c \in (y, x): \frac{\tan x - \tan y}{x-y} = f'(c) = g(c) = \frac{1}{\cos^{2}(c)} \\
\implies \frac{1}{\cos^{2}(y)} \leq \frac{\tan x - \tan y}{x-y} \leq \frac{1}{\cos^{2}(x)} \\
\implies \boxed{ \frac{x-y}{\cos^{2}(y)} + \tan(y) \leq \tan x \leq \frac{x-y}{\cos^{2}(x)} + \tan y } \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove: } \forall 0 < a < b: \frac{b-a}{b} < \ln\left( \frac{b}{a} \right) < \frac{b-a}{a} \\
\\
\text{Proof:} \\
\ln\left( \frac{b}{a} \right) = \ln(b) - \ln(a) \\
b \neq a \\
\frac{b-a}{b} < \ln\left( \frac{b}{a} \right) < \frac{b-a}{a} \\
\iff \frac{1}{b} < \frac{\ln b - \ln a}{b-a} < \frac{1}{a} \\
\text{Let } f(t) = \ln t \\
\ln t \text{ is differentiable on } (0, \infty) \supseteq [a, b] \\
\text{By the mean value theorem: } \exists c \in (a, b): f'(c) = \frac{\ln b - \ln a}{b-a} \\
\text{Let } g(t) = f'(t) = \frac{1}{t} \\
\frac{1}{t} \text{ is monotonically decreasing on } (0, \infty) \supseteq [a, b] \\
\implies \forall d \in (a, b): \frac{1}{b} < \frac{1}{d} < \frac{1}{a} \\
\exists c \in (a, b): \frac{\ln b - \ln a}{b-a} = f'(c) = g(c) = \frac{1}{c} \\
\implies \frac{1}{b} < \frac{\ln b - \ln a}{b-a} < \frac{1}{a} \\
\implies \boxed{ \frac{b-a}{b} < \ln\left( \frac{b}{a} \right) < \frac{b-a}{a} } \\
}
$$
---
## Cauchy's theorem
$$
\displaylines{
\text{Let } f, g \text{ be continuous on } [a, b] \\
\text{and differentiable on } (a, b) \\
\text{Let } \forall x \in (a, b): g'(x) \neq 0 \\
\text{Then } \exists c \in (a, b): \frac{f'(c)}{g'(c)} = \frac{f(b)-f(a)}{g(b)-g(a)} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Let } 0 < x < 1 \\
\text{Prove: } \frac{\ln(x^{2}+1)}{\tan x} < \frac{2x}{x^{2}+1} \\
\\
\text{Proof:} \\
\frac{\ln(x^{2}+1)}{\tan x} = \frac{\ln(x^{2}+1) - \ln(0^{2}+1)}{\tan x - \tan 0} \\
\text{Let } f(t) = \ln(t^{2}+1) \\
\text{Let } g(t) = \tan t \\
f'(t) = \frac{2t}{t^{2}+1} \\
\forall t \in (0, 1): g'(t) = \frac{1}{\cos^{2}(t)} \neq 0 \\
\implies \text{By Cauchy's theorem: } \exists c \in (0, x): \frac{f'(c)}{g'(c)} = \frac{\ln(x^{2}+1) - \ln(0^{2}+1)}{\tan x - \tan 0} \\
\frac{f'(c)}{g'(c)} = \frac{2c}{c^{2}+1} \cdot \cos^{2}(c) \\
\forall c \in (0, x): \cos^{2}(c) \leq 1 \implies \frac{2c}{c^{2}+1}\cdot \cos^{2}(c) \leq \frac{2c}{c^{2}+1} \\
\text{Let } h(t) = \frac{2t}{t^{2}+1} \\
h'(t) = \frac{2(t^{2}+1) - 4t^{2}}{(t^{2}+1)^{2}} = \frac{2-2t^{2}}{(t^{2}+1)^{2}} \\
t < 1 \implies t^{2} < 1 \implies 2-2t^{2} > 0 \implies h'(t) > 0 \\
\implies h(t) \text{ is monotonically increasing } on (0, 1) \\
\implies \forall d \in (0, x): 0 < \frac{2d}{d^{2}+1} < \frac{2x}{x^{2}+1} \\
\exists c \in (0, x): \frac{\ln(x^{2}+1) - \ln(0^{2}+1)}{\tan x - \tan 0} = \frac{f'(c)}{g'(c)} = \frac{2c}{c^{2}+1} < \frac{2x}{x^{2}+1} \\
\implies \boxed{ \frac{\ln(x^{2}+1)}{\tan x} < \frac{2x}{x^{2}+1} } \\
}
$$
---
$$
\displaylines{
\lim_{ x \to 1^{-} } (2-x)^{\tan\left( \frac{\pi}{2}x \right)} = \lim_{ x \to 1^{-} } e^{\tan\left( \frac{\pi}{2}x \right)\ln(2-x)} \\
\lim_{ x \to 1^{-} } \tan\left( \frac{\pi}{2}x \right)\ln(2-x) = \lim_{ x \to 1^{-} } \frac{\ln(2-x)}{\left( \tan\left( \frac{\pi}{2}x \right) \right)^{-1}} \\
\overset{ L }{ = } \lim_{ x \to 1^{-} } \frac{\frac{-1}{2-x}}{\frac{-\frac{\pi}{2}}{\sin^{2}\left( \frac{\pi}{2}x \right)}} = \frac{2}{\pi} \\
\implies \lim_{ x \to 1^{-} } (2-x)^{\tan\left( \frac{\pi}{2}x \right)} = e^{2/\pi} \\
}
$$
---
