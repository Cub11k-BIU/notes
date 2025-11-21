---
{"publish":true,"created":"14/01/25, 16:01","modified":"2025-11-21T21:10:24.718+02:00","tags":["Academia","Practice","Discrete-math"],"cssclasses":""}
---

# Discrete-math 10
$$
\displaylines{
\text{Prove: } \binom{n}{k} \cdot \binom{k}{m} = \binom{n}{m} \cdot \binom{n-m}{k-m} \\
\text{Proof (algebraic):} \\
\binom{n}{k} \cdot \binom{k}{m} = \frac{n!}{(n-k)!k!} \cdot \frac{k!}{(k-m)!m!} = \frac{n!}{(n-k)!(k-m)!m!} \\
\binom{n}{m} \cdot \binom{n-m}{k-m} = \frac{n!}{(n-m)!m!} \cdot \frac{(n-m)!}{(n-k)!(k-m)!} = \frac{n!}{(n-k)!(k-m)!m!} \\
\text{Proof (combinatorial):} \\
\text{How many ways we can choose } k \text{ workers out of } n \text{ people such that } \\
m \text{ of them are managers?} \\
\text{Let us first choose } m \text{ managers out of } n \text{ people} \\
\text{and then choose } k-m \text{ people out of } n-k \text{ people left, which is:} \\
\binom{n}{m} \cdot \binom{n-m}{k-m} \\
\text{Now let us first choose } k \text{ people out of } n \text{ people} \\
\text{and then choose } m \text{ out of these } k \text{ people to be managers, which is:} \\
\binom{n}{k} \cdot \binom{k}{m} \\
}
$$
---
## Fermat's identity
$$
\displaylines{
\text{Let } n, k \in \mathbb{N}, k < n \\
\sum_{i=k}^{n} \binom{i}{k} = \binom{n+1}{k+1} \\
\\
\text{Proof:} \\
\text{How many ways there are to choose } k+1 \text{ people from the group of } n+1 \text{ people?} \\
\binom{n+1}{k+1} \\
\text{Now let's pick the } i\text{'th tallest person} \\
\text{Let's then pick } k \text{ people who are shorter than this person} \\
\text{Number of ways to pick them is: } \sum_{i=k+1}^{n+1} \binom{i-1}{k} \underbrace{ = }_{ j = k = i-1} \sum_{j=k}^{n} \binom{j}{k} \\
\text{This way, we have chosen some } k+1 \text{ people} \\
\implies \boxed{\sum_{i=k}^{n} \binom{i}{k} = \binom{n+1}{k+1}} \\
}
$$
---
$$
\displaylines{
\sum_{i=0}^{n-1} \binom{n+i}{i} = \binom{2n}{n-1} \\
\\
\text{Proof:} \\
\sum_{i=0}^{n-1} \binom{n+i}{n} = \binom{2n}{n+1} \\
\text{Let } k = i+n \\
\sum_{k=n}^{2n-1} \binom{k}{n} = \binom{2n-1 + 1}{n+1} = \binom{2n}{n+1} \\
}
$$
---
$$
\displaylines{
\text{Let } n \in \mathbb{N} \cup \Set{ 0 } \\
S_{r} = \Set{ (x_{1}, x_{2}, \dots, x_{r}) | \sum_{i=1}^{r} x_{i} = n } \\
\sum_{r=1}^{n} \lvert S_{r} \rvert = \sum_{r=1}^{n} \binom{r+n-1}{r-1} = \sum_{k=0}^{n-1} \binom{k+n}{k} = \binom{2n}{k-1} = \binom{2n}{n-1} \\
}
$$
---
## Multinomials
$$
\displaylines{
\text{How many strings can we write down with letters of word "mississippi"?} \\
\\
\text{Solution:} \\
\text{4 positions for "i", 4 positions for "s", 2 positions for "p", 1 position for "m"} \\
\binom{11}{4} \cdot \binom{7}{4} \cdot \binom{3}{2} \cdot \binom{1}{1} \\
\text{Multinomial is a "multiple choice" binomial:} \\
\binom{11}{4,4,2,1} = \binom{11}{4} \cdot \binom{7}{4} \cdot \binom{3}{2} \cdot \binom{1}{1} = \frac{11!}{7!4!} \cdot \frac{7!}{3!4!} \cdot \frac{3!}{2!1!} = \frac{11!}{4!4!2!1!} \\
\binom{n}{n_{1},\dots,n_{k}} = \frac{n!}{n_{1}!n_{2}!\dots n_{k}!} = \frac{n!}{\prod_{i=1}^{k} n_{i}!} \\
}
$$
---
$$
\displaylines{
\text{2 pizzas in size S, M, L or XL} \\
\text{8 toppings} \\
\\
\text{Solution:} \\
\text{Number of different pizzas:} \\
4 \cdot 2^{8} = 2^{10} \\
\text{Number of ways to choose 2 pizzas out of all possible pizzas is:} \\
\binom{2^{10}+2-1}{2} = \binom{2^{10}+1}{2} \\
}
$$
---
$$
\displaylines{
\text{How many polinomials of degree 6 there are such that:} \\
\text{All coefficients are non-negative integers, } p(1) = 30, p(-1) = 12 \\
p(x) = a_{0} + a_{1}x + a_{2}x^{2} + a_{3}x^{3} + a_{4}x^{4} + a_{5}x^{5} + a_{6}x^{6} \\
p(1) = a_{0} + a_{1} + a_{2} + a_{3} + a_{4} + a_{5} + a_{6} = 30 \\
p(-1) = a_{0} - a_{1} + a_{2} - a_{3} + a_{4} - a_{5} + a_{6} = 12 \\
\implies \left\{\begin{array}{}
a_{0}+a_{1}+a_{2}+a_{3}+a_{4}+a_{5}+a_{6} = 30 \\
a_{1}+a_{3}+a_{5} = 9 \\
\end{array}\right. \implies \left\{\begin{array}{}
a_{0} + a_{2} + a_{4} + a_{6} = 21 \\
a_{1} + a_{3} + a_{5} = 9 \\
\end{array}\right. \\
\binom{4+21-1}{21} \cdot \binom{3+9-1}{9} = \binom{24}{21} \cdot \binom{11}{9} \\
}
$$
---
$$
\displaylines{
\text{Let } n \geq 2 \\
S = \Set{ 1, \dots, n+1 } \\
T = \Set{ (x, y, z) | \left\{\begin{array}{}
x < z \\
y < z \\
x, y, z \in S \\
\end{array}\right. } \\
\lvert T \rvert = \sum_{k=1}^{n} k^{2} = \binom{n+1}{2} + 2 \cdot \binom{n+1}{3} \\
\text{Proof:} \\
\text{Let } z \in S \\
\text{Number of ways to choose } x, y < z \text{is:} \\
(z-1)(z-1) \\
\implies \sum_{z=1}^{n+1} (z-1)^{2} = \sum_{k=1}^{n} k^{2} \\
\text{Let } x = y \\
\text{We need to choose two numbers} - x, z \\
\implies \binom{n+1}{2} \\
\text{Let } x \neq y \\
\text{We need to choose three numbers} - x, y, z \\
x < y \text{ and } y < x \text{ are symmetrical and different} \\
\implies 2 \cdot \binom{n+1}{3} \\
\implies \binom{n+1}{2} + 2 \cdot \binom{n+1}{3} \\
}
$$
---
$$
\displaylines{
\text{Let } n, m, r \in \mathbb{N} \\
r \leq m \leq n \\
\sum_{i=0}^{r} \binom{m}{i} \cdot \binom{n}{r-i} = \binom{m+n}{r} \\
\\
\text{Proof:} \\
\text{Let us choose } r \text{ people from } m \text{ boys and } n \text{ girls:} \\
\binom{m+n}{r} \\
\text{Let us now choose $i$ boys first and then choose the girls left} \\
A_{i} = \Set{ \text{ways to choose } i \text{ from } m \text{ boys and } r-i \text{ from } n \text{ girls} } \\
\lvert A_{i} \rvert = \binom{m}{i} \cdot \binom{n}{r-i} \\
i \neq j \implies A_{i} \cap A_{j} = \emptyset \\
\left\lvert  \bigcup_{i=0}^{r} A_{i} \right\rvert = \sum_{i=0}^{r} \lvert A_{i} \rvert = \sum_{i=0}^{r} \binom{m}{i} \cdot \binom{n}{r-i} \\
}
$$
---
