---
{"publish":true,"created":"20/03/25, 09:03","modified":"2025-11-21T21:10:13.954+02:00","tags":["Academia","Lecture","Data-structures"],"cssclasses":""}
---

## Complexity
### Algorithm runtime #definition 
$$
\displaylines{
\text{Number of operations depending on the size of input is called the algorithm runtime} \\
}
$$
## Worst and best cases #definition 
$$
\displaylines{
1. & \text{Worst case is the most number of operations algorithm can execute} \\
& \text{over all inputs} \\
2. & \text{Best case is the least number of operations algorithm can execute} \\
& \text{over all inputs} \\
}
$$
## Average case #definition 
$$
\displaylines{
\text{Average case is the number of operations algorithm will execute,} \\
\text{averaged over all possible inputs} \\
\\
\text{It is important to devise the probability distribution over inputs,} \\
\text{as the average is not just mathematical avg, it is a weighted average} \\
}
$$
## Example
$$
\displaylines{
\text{Let us examine code of a linear search for an element $k$ in array } arr \\
}
$$
```python
i = 1                            # 1 time
while i <= n:                    # n+1 times
	if arr[i] == k: return True  # n times
	i += 1                       # n times
return False                     # 1 time
								 # _________
                                 # 3n + 3 in total
```
$$
\displaylines{
\text{Worst case is } 3n + 3, \text{ when there is no element } k \text{ in } arr \\
\text{Best case is } 3, \text{ when element } k \text{ is first in } arr \\
\\
\text{Let } f_{i}(n) \text{ represent runtime when } k \text{ is on } i\text{-th place in } arr \\
\begin{array}{}
\left.\begin{array}{}
f_{1}(n) = 3 \\
f_{2}(n) = 6 \\
\vdots \\
f_{n}(n) = 3n \\
\end{array}\right\} & \sum_{i=1}^{n+1} f_{i}(n) = 3 + 6 + \dots + 3n = \frac{3n(n+1)}{2} \\
f_{n+1}(n) = 3n + 3 & \\
\end{array} \\
\implies \text{Average case is } \frac{3n(n+1)}{2n} = \frac{3(n+1)}{2} \\
}
$$
## Big-O, Omega, "order" of functions #definition 
$$
\displaylines{
f(n) = O(g(n)) \iff & \exists \alpha > 0 \in \mathbb{R}, N \in \mathbb{N}_{0}: \forall n \geq N: f(n) \leq \alpha g(n) \\
f(n) = o(g(n)) \iff & \forall \alpha > 0 \in \mathbb{R}: \exists N \in \mathbb{N}_{0}: \forall n \geq N: f(n) \leq \alpha g(n) \\
f(n) = \Omega(g(n)) \iff & \exists \alpha > 0 \in \mathbb{R}, N \in \mathbb{N}_{0}: \forall n \geq N: f(n) \geq \alpha g(n) \\
f(n) = \omega(g(n)) \iff & \forall \alpha > 0 \in \mathbb{R}: \exists N \in \mathbb{N}_{0}: \forall n \geq N: f(n) \geq \alpha g(n) \\
f(n) = \Theta(g(n)) \iff & f(g(n)) = O(g(n)) \text{ and } f(g(n)) = \Omega(g(n)) \\
}
$$
$$
\displaylines{
3n^{2} + 5 = O(n^{2}) ? \\
f(n) = 3n^{2} + 5, g(n) = n^{2} \\
3n^{2} + 5 \leq 3n^{2} + 5n^{2} = 8n^{2} \implies f(n) \leq 8g(n) \implies f(n) = O(g(n)) \\
}
$$
## Data structures
### Array #definition 
$$
\displaylines{
\text{"Linear" ordered data collection with randow access by index} \\
\left|\begin{array}{c|c}
1 & 2 & 3 & \dots & n \\
\end{array}\right| \\
}
$$
### Stack #definition 
$$
\displaylines{
\text{"Linear" ordered data collection with restricted access - LIFO (Last In - First Out)} \\
\text{Stack is usually implemented as array with a counter, pointing to the "top"} \\
}
$$
### Parenthesis validation
$$
\displaylines{
\text{e.g. "[]()\{\}[(((<>)))]"} \\
0. \text{ Read one parenthesis} \\
1. \text{ Opening parenthesis? Push to stack} \\
2. \text{ Closing parenthesis? Pop last parenthesis on stack, check if paired} \\
2.1 \text{ If not paired (or stack is empty), abort, invalid} \\
2.2 \text{ If paired, continue to } 0 \\
3. \text{ Input is over? Check if stack is empty} \\
3.1 \text{ If empty, valid} \\
3.2 \text{ If not empty, invalid} \\
}
$$
### Postfix Polish notation
$$
\displaylines{
\text{operand1 operand2 operation operand3 operation ...} \\
\text{e.g. 2 3 + 8 *} \\
0. \text{ Read one element} \\
1. \text{ Operand? Push to stack} \\
2. \text{ Operation? Pop $n$ operands from stack, perform operation, push result to stack} \\
\text{continue to } 0 \\
3. \text{ Input is over?} \\
3.1 \text{ If stack has more than one element, invalid} \\
3.2 \text{ If stack has one element, it is the result} \\
}
$$
### Queue #definition 
$$
\displaylines{
\text{"Linear" ordered data collection with restricted access - FIFO (First In - First Out)} \\
}
$$
