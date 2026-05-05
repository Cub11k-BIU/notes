---
{"publish":true,"created":"02/11/25, 15:11","modified":"2026-03-24T14:59:04.462+02:00","tags":["Academia","Practice","Discrete-structures"],"cssclasses":""}
---

$$
\displaylines{
\text{Prove: } A \text{ is non-finite} \iff \left\lvert A \right\rvert \geq \left\lvert \mathbb{N} \right\rvert \\
\\
\text{Proof:} \\
\boxed{ \impliedby } \text{ Let } \left\lvert A \right\rvert \geq \left\lvert \mathbb{N} \right\rvert \\
\implies \text{There exists an injective function } f: \mathbb{N} \to A \text{Let } A \text{ be finite} \\
\implies A \sim I_{n} \\
\implies \text{By pigeonhole principle } \exists i \in [1, n]: f(i) = f(n+1) - \text{ Contradiction!} \\
\implies A \text{ is non-finite} \\
\\
\boxed{ \implies } \text{ Let } A \text{ be non-finite} \\
\text{By induction, there exists } f : \mathbb{N} \to A : f \text{ is bijective} \\
}
$$
---
## Cantor-Schroder-Bernstein theorem #theorem 
$$
\displaylines{
\text{Let } A, B \text{ be sets} \\
\text{If } A \preccurlyeq B \text{ and } B \preccurlyeq A \\
\text{Then } A \sim B \\
}
$$
---
