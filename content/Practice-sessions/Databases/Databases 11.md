---
{"publish":true,"created":"14/01/26, 19:02","modified":"2026-03-24T14:58:50.283+02:00","tags":["Academia","#Practice","Databases"],"cssclasses":""}
---

## Cost of the query
- $R$(<u>A</u>, B, C)
- $S$(<u>D</u>, F, E)
- $W$(<u>G</u>, H)
- $(\sigma_{C=2024}(R \Join_{B=E} S)) \Join_{F=H} W$

Calculate output size of $\sigma_{C=2024}(R \Join_{B=E} S)$
- Output size of $R \Join_{B=E} S$ is $\frac{B(R)T(S) + B(S)T(R)}{\max\lrc{V(R, B), V(S, E)}} = B(J_{1})$
- Output size of $\sigma_{C=2024}$ is $\frac{B(J_{1})}{V(R, C)} = \frac{B(R)T(S) + B(S)T(R)}{V(R, C) \cdot \max\lrc{V(R, B), V(S, E)}}$

Let the previous output be of size $B(Sel), T(Sel)$
Both joins are hash joins, calculate cost of the query
- Cost of join on $B = E$ is $3(B(R) + B(S))$
- Cost of selection is $0$, it is pipelined
- Cost of join on $F = H$ is $2B(Sel) + 3B(W)$

Total cost is $3(B(R) + B(S)) + 2B(Sel) + 3B(W)$

Sorted clustered index on $C$, first join is a nested join loop, second join is a sort merge join
- Cost of join on $B = E$ is $B(R) + B(R) \cdot B(S)$
- Cost of selection is again 0
- Cost of join on $F = H$ is $4B(Sel)+5B(W)$

Total cost is $B(R) + B(R) \cdot B(S) + 4B(Sel) + 5B(W)$

Sorted clustered index on $B$ and on $F$, both joins are sort-merge joins
- Cost of join on $B = E$ is $B(R) + 5B(S)$
- Cost of selection is again 0
- Cost of join on $F = H$ is $4B(Sel) + 5B(W)$

Total cost is $B(R) + 5B(S) + 4B(Sel) + 5B(W)$

---
- $R$(<u>A</u>, B, C)
- $S$(<u>D</u>, E)
- $((\sigma_{R_{1}.B=x}(R_{1})) \Join_{R_{1}.C = R_{2}.B} R_{2}) \Join_{R_{2}.C=S.E} S$

Calculate output size of $(\sigma_{R_{1}.B=x}(R_{1})) \Join_{R_{1}.C = R_{2}.B} R_{2}$
- Output size of $\sigma_{R_{1}.B=x}(R_{1})$ is $\frac{B(R)}{V(R, B)}$
- Output size of $\Join_{R_{1}.C=R_{2}.B}$ is $\frac{2B(R)T(R)}{V(R, B) \cdot \max\lrc{V(R, C), V(R, B)}}$

Let the previous output be of size $B(Join_{1}), T(Join_{1})$
Calculate cost of the query given both joins are nested loop joins
- Cost of selection is $B(R)$
- Cost of join on $C = B$ is $\frac{B(R)^{2}}{V(R, B)}$
- Cost of join on $C = E$ is $B(Join_{1}) \cdot B(S)$

Total cost is $B(R) + \frac{B(R)^{2}}{V(R, B)} + B(Join_{1}) \cdot B(S)$

Sorted clustered index on $B$, both joins are hash joins
- Cost of selection is $\frac{B(R)}{V(R, B)}$
- Cost of join on $C = B$ is $\frac{2B(R)}{V(R, B)} + 3B(R)$
- Cost of join on $C = E$ is $2B(Join_{1}) + 3B(S)$

Total cost is $\frac{B(R)}{V(R, B)} + \frac{2B(R)}{V(R, B)} + 3B(R) + 2B(Join_{1}) + 3B(S)$
