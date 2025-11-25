---
{"publish":true,"created":"23/11/25, 13:06","modified":"2025-11-23T13:17:15.905+02:00","tags":["Academia","#Practice","Automata"],"cssclasses":""}
---

### Exercises with regular expressions
$$
\displaylines{
L = \Set{ w | \#0_{w} \geq 2 } \to 1^{*}01^{*}0(0|1)^{*} \\
}
$$
$$
\displaylines{
L = \Set{ w | \#a_{w} \in \Set{ 2, 3 } \text{ and } \text{first two } a \text{'s are not consecutive} } \\
\to \begin{cases}
b^{*}abb^{*}ab^{*}(a|b^{*}) \leftarrow \text{ My solution, disproof by } ababab \\
b^{*}abb^{*}ab^{*}(a|\varepsilon)b^{*} \\
b^{*}abb^{*}ab^{*}(a|b^{*})b^{*} \\
\end{cases} \\
}
$$
---
### 