---
{"publish":true,"created":"26/10/25, 13:10","modified":"2026-03-24T14:58:28.745+02:00","tags":["Academia","Practice","Automata"],"cssclasses":""}
---

$$
\displaylines{
(L^{r})^{*} = (L^{*})^{r} \ ? \\
\\
\text{Let } w \in (L^{r})^{*} \\
\implies \exists n : \exists w_{1}, \dots, w_{n} \in L^{r} : w = w_{1}\dots w_{n} \\
\implies w^{r} = w_{n}^{r}w_{n-1}^{r}\dots w_{1}^{r} \\
w_{1}, \dots, w_{n} \in L^{r} \implies w_{1}^{r}, \dots, w_{n}^{r} \in L \\
\implies w^{r} \in L^{*} \implies w = (w^{r})^{r} \in (L^{*})^{r} \\
\implies (L^{r})^{*} \subseteq (L^{*})^{r} \\
\text{Same way for } \supseteq \\
}
$$
---
$$
\displaylines{
(L_{1} \cap L_{2})L_{3} \overset{ ? }{ = } (L_{1}L_{3}) \cap (L_{2}L_{3}) \\
\\
L_{1} = \Set{ a } \\
L_{2} = \Set{ aa } \\
L_{3} = \Set{ a, \varepsilon } \\
\implies L_{1} \cap L_{2} = \emptyset \\
L_{1}L_{3} = \Set{ a, aa } \\
L_{2}L_{3} = \Set{ aaa, aa } \\
\implies \emptyset \neq \Set{ aa } \implies \text{Disproof} \\
}
$$
---
$$
\displaylines{
\varepsilon \in l_{1} \implies l_{2} \subseteq l_{1}l_{2} \\
l_{2} \subseteq l_{1}l_{2} \centernot\implies \varepsilon \in l_{1} \\
}
$$
---
$$
\displaylines{
\varepsilon \in L \iff L^{*} \neq L^{+} - \Set{ \varepsilon } \\
}
$$
---
$$
\displaylines{
(L^{3})^{*} \overset{ ? }{ = } (L^{*})^{3} \\
\\
L = \Set{ a } \\
\implies aaaa \in (L^{*})^{3} \\
(L^{3})^{*} = \Set{ (aaa)^{n} | n \in \mathbb{N}_{0} } \implies aaaa \not\in (L^{3})^{*} \\
\implies \text{Disproof} \\
}
$$
---
$$
\displaylines{
\left\lvert L_{1} \circ L_{2} \right\rvert = \left\lvert L_{1} \right\rvert \cdot \left\lvert L_{2} \right\rvert \ ? \\
\\
L_{1} = \Set{ a, aa } \\
L_{2} = \Set{ a, \varepsilon } \\
\implies L_{1}L_{2} = \Set{ aa, a, aaa } \implies \text{Disproof} \\
}
$$
---
$$
\displaylines{
(L^{*})^{*} = L^{*} \\
\\
(L^{*})^{*} = \bigcup_{n = 0}^{\infty} (L^{*})^{n} = \Set{ \varepsilon } \cup L^{*} \cup \bigcup_{n = 2}^{\infty} (L^{*})^{n} \\
\implies (L^{*})^{*} \supseteq L^{*} \\
\\
w \in (L^{*})^{*} \implies \exists n \in \mathbb{N}_{0}: \exists w_{1}, \dots, w_{n} \in L^{*} : w = w_{1}\dots w_{n} \\
\forall i \in [1, n]: \exists n_{i} : \exists w_{i_{1}}, \dots, w_{i_{n_{i}}} \in L: w_{i} = w_{i_{1}}\dots w_{i_{n_{i}}} \\
\implies w = w_{1}\dots w_{n} = w_{1_{1}}\dots w_{1_{n_{1}}}\dots w_{n_{1}}\dots w_{n_{n_{n}}} \in L^{\sum_{k=1}^{n} n_{k}} \subseteq L^{*} \\
\implies (L^{*})^{*} \subseteq L^{*} \\
}
$$
---
$$
\displaylines{
\Sigma = \Set{ a, b } \\
L = \Set{ aba, ba } \\
Drop-out(L) = \Set{ uv | \exists \sigma \in \Sigma, u, v \in \Sigma^{*} : u\sigma v \in L } \\
\implies Drop-out(L) = \Set{ a, b, ba, ab, aa } \\
}
$$
---
