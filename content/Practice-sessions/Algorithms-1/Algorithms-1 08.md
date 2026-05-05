---
{"publish":true,"created":"11/02/26, 13:28","modified":"2026-03-24T14:58:08.256+02:00","tags":["Academia","#Practice","Algorithms-1"],"cssclasses":""}
---

## Defining flow
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a flow network} \\
\text{Let } c: V^{2} \to \mathbb{R}^{+} \cup \Set{ 0 } \\
\text{Let } s, t \in V \\
\text{Let } f \text{ be a flow in } G \text{ as defined in the lectures} \\
\text{Let } G_{f} \text{ be a residual network} \\
\text{Let } P_{f} \text{ be a set of edges in } G_{f} \text{ that belong to some path from } s \text{ to } t \text{ in } G_{f} \\
\text{Let } m_{f} \text{ be the smallest residual capacity in } P_{f}, \text{that is } m_{f} = \min_{(u, v) \in P_{f}}\lrc{c_{f}(u, v)} \\
\text{Let } \forall (u, v) \in V^{2}: f'(u, v) = \begin{cases}
f(u, v) + m_{f} & (u, v) \in P_{f} \\
f(u, v) - m_{f} & (v, u) \in P_{f} \\
f(u, v) & \text{otherwise} \\
\end{cases} \\
\text{Prove or disprove: } f' \text{ is a flow in } G \\
\\
\text{Disproof:} \\
\text{First property to be proved is: } \forall u, v \in V: f(u, v) \leq c(u, v) \\
\text{Let } u, v \in V \\
\text{Case 1. } (u, v) \not\in P_{f} \text{ and } (v, u) \not\in P_{f} \\
\implies f'(u, v) = f(u, v) \leq c(u, v) \\
\text{Case 2. } (u, v) \in P_{f} \\
f'(u, v) = f(u, v) + m_{f} \\
c_{f}(u, v) = c(u, v) - f(u, v) \\
m_{f} \leq c_{f}(u, v) = c(u, v) - f(u, v) \\
\implies f'(u, v) = f(u, v) + m_{f} \leq f(u, v) + c(u, v) - f(u, v) = c(u, v) \\
\text{Case 3. } (v, u) \in P_{f} \\
m_{f} \geq 0 \implies f'(u, v) = f(u, v) - m_{f} \leq f(u, v) \leq c(u, v) \\
\\
\text{Second property to be proved is } \forall u, v \in V: f'(u, v) = -f'(v, u) \\
\text{Case 1. } (u, v) \not\in P_{f} \text{ and } (v, u) \not\in P_{f} \\
f'(u, v) = f(u, v) = -f(v, u) = -f'(v, u) \\
\text{Case 2. } (u, v) \in P_{f} \\
f'(u, v) = f(u, v) + m_{f} = -(-f(u, v) - m_{f}) = -(f(v, u) - m_{f}) = -f'(v, u) \\
\text{Case 3. } (v, u) \in P_{f} \\
f'(v, u) = f(v, u) - m_{f} = -(-f(v, u) + m_{f}) = -(f(u, v) + m_{f}) = -f'(u, v) \\
\\
\text{Third property to be proved is } \forall u \in V \setminus \Set{ s, t }: \sum_{v \in V} f(u, v) = 0 \\
\text{This property is problematic, and there exists a conterexample of a flow network} \\
\text{with just 4 vertices and 4 edges:} \\
V = \Set{ s, x, y, t }, E = \Set{ (s, x), (s, y), (x, y), (y, t) } \\
c(u, v) = \begin{cases}
1 & (u, v) \in E \\
0 & \text{otherwise} \\
\end{cases} \\
\sum_{v \in V} f'(y, v) = f'(y, s) + f'(y, x) + f'(y, y) + f'(y, t) = -1 -1 + 1 = -1 \neq 0 \\
\\
\text{It is possible to adjust the definition} \\
\text{for } P_{f} \text{ to only include edges of a single augmenting path,} \\
\text{giving a flow identical to the one produced by an iteration of Ford-Fulkerson} \\
}
$$
