---
{"publish":true,"created":"01/07/25, 16:07","modified":"2025-11-21T21:10:02.005+02:00","tags":["Academia","Assignment","Data-structures"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } A[1..n] \text{ be an array of natural numbers} \\
\text{Let } k \text{ be a natural number} \\
\text{Give an algorithm checking whether there is a subset of } A \text{ such that its sum is } k \\
\text{If there is, algorithm should return the indices} \\
\\
\text{Solution:} \\
\text{A naive algorithm would be to check all the subsets of } A, \text{ there are } 2^{n} \text{ of them}, \\
\text{ so its complexity would be } O(2^{n}) \\
\\
\text{Solution using recursion and dynamic programming:} \\
\text{The data structure used will be a 2D array "dp" with n+1 rows and k+1 columns} \\
\text{Each cell $dp[i][j]$ will represent a possibility of getting sum } j \text{ from susbet } A[1..i] \\
\text{Initial setup of the data structure is as follows:} \\
}
$$
$$
\displaylines{
1. & dp[0][0] = true - \text{an empty set gives a zero sum} \\
2. & \forall j \in [1, k]: dp[0][j] = false - \text{an empty can never give a non-zero sum} \\
3. & \forall i \in [1, n]: \forall j \in [0, k] \text{ there are two options:} \\
& 3.1. \quad \text{Don't include } A[i-1] \implies dp[i][j] = dp[i-1][j] \\
& 3.2 \quad \text{If } j \geq A[i-1], \text{ include } A[i-1] \implies
dp[i][j] = dp[i-1][j - A[i-1]] \\
& \text{Final recursive formula for } dp[i][j]: \\
}
$$
```python
dp[i][j] = dp[i-1][j] or (j >= A[i-1] and dp[i-1][j - A[i-1]])
```
$$
\displaylines{
\text{If } dp[n][k] = true \text{ then there exists a subset of } A \text{ such that its sum is } k \\
\text{To get the indices we will backtrack in the following way:} \\
}
$$
$$
\displaylines{
1. & \text{Start with } i = n, j = k, indices = [\,] \\
2. & \text{Start a while loop "while i > 0 and j > 0"} \\
3. & \text{If sum can be achieved without} A[i-1] (dp[i-1][j] == true) \text{ then just decrement } i \\
4. & \text{Otherwise} \\
& 4.1. \quad \text{Insert } i-1 \text{ into } indices \\
& 4.2. \quad \text{Subtract } A[i-1] \text{ from } j \\
& 4.3. \quad \text{Decrement } i \\
5. & \text{After the loop is finished, } indices \text{ contains the list of indices to return} \\
}
$$
$$
\displaylines{
\text{Initial setup of the data structure will take } O(n \cdot k) \text{ time} \\
\text{as each cell is computed in constant time based on the previous ones} \\
\text{The following inquiries (lookup) for $k' \leq k$ will take } O(n) \text{ time to backtrack the indices} \\
\text{Space used is A itself and the 2D array with } n+1 \text{ rows and } k + 1 \text{ columns, so } O(n \cdot k) \\
\text{Space complexity can be reduced by only storing the last two rows} \\
\text{that is, without reconstructing indices} \\
\text{Storing indices in each cell will allow us to store only the last two anyway, but will still be } O(n \cdot k) \\
}
$$
---
# 2
$$
\displaylines{
\text{Let there be } k \text{ types of coins with distinct values } v_{1} < \dots < v_{k} \in \mathbb{N} \\
\text{Let } n \in \mathbb{N} \text{ be an amount to pay} \\
\text{Give an algorithm, which determines the minimal amount of coins to pay the amount} \\
\\
\text{Solution:} \\
\text{The naive algorithm would be a recursive back-tracking without memorizing previous calls} \\
\text{For each call, we'd have to check } k \text{ types of coins} \\
\text{There can be at most } n \text{ calls, so } O(k^{n}) \\
\\
\text{Solution using recursion and dynamic programming:} \\
\text{Let "v" be an array of size } k, \text{ containing values of coins} \\
\text{Let "dp" be an array of size } n+1 \\
\text{Each cell } dp[i] \text{ will store the minimal amount of coins required to pay amount } i \\
\\
\text{Initial setup of the data structure is as follows:} \\
}
$$
$$
\displaylines{
0. & \forall i \in [0, n]: dp[i] = None \\
1. & dp[0] = 0 - \text{we can pay a zero amount with zero coins} \\
2. & \forall i \in [1, n]: \forall j \in [0, k-1]: \text{If } v[j] \leq i \text{ where } j \text{ is the type of coin index} \\
& 2.1. \quad \text{ If } dp[i] \text{ is } None, \text{ then we should just assign } dp[i] = dp[i - v[j]] + 1 \\
& 2.2. \quad \text{ Otherwise } dp[i] = min(dp[i], dp[i - v[j]] + 1) \\
& \text{Final recursive formula for } dp[i]: \\
}
$$
```python
dp[i] = min(dp[i], dp[i - v[j]] + 1) if dp[i] is not None else dp[i - v[j]] + 1
```
$$
\displaylines{
dp[n] \text{ will then store the minimal number of coins to pay amount } n \\
\\
\text{Initial setup of the data structure will take } O(n \cdot k) \text{ time} \\
\text{as for each amount from 1 to $n$ we have to check } k \text{ types of coins} \\
\text{The following inquiries(lookup) for $n' \leq n$ will take } O(1) \text{ time} \\
\text{Space used is "v" itself and an array of size } n+1, \text{ so } O(n+k) = O(\max\{n, k\}) \\
}
$$
---
# 3
$$
\displaylines{
\text{Let } T(S, i, j), i \leq j \text{ be a function checking whether substring } S[i..j] \text{ is a valid word in } O(1) \\
\text{Give an algorithm for determining whether string } S \text{ can be splitted into valid words} \\
\\
\text{Solution:} \\
\text{The naive algorithm would be a recursive back-tracking, trying every possible split point} \\
\text{There are } 2^{n} \text{ such possibilites, so } O(2^{n}) \\
\\
\text{Solution using recursion and dynamic programming:} \\
\text{Let } S \text{ be a string of length } n \\
\text{Let } L \text{ be the maximum possible length of the valid word} \\
\text{Let "dp" be an array of size } n+1 \\
\text{Each cell } dp[i] \text{ will store the possibility of splitting } S[0..i] \text{ into valid words} \\
\\
\text{Initial setup of the data structure is as follows:} \\
}
$$
$$
\displaylines{
1. & dp[0] = true - \text{ we can always split empty string into valid words} \\
2. & \forall i \in [1, n]: \forall j \in [\max\{0, i - L\}, i-1]: \\
& dp[j] == true \implies S[0..j-1] \text{ can be splitted into valid words} \\
& T(S, j, i-1) == true \implies S[j..i-1] \text{ can also be splitted into valid words} \\
& \text{Final recursive formula for } dp[i]: \\
}
$$
```python
for j in range(max(0, i - L), i):
	dp[i] = dp[j] and T(S, j, i - 1)
	# or
	if dp[j] and T(S, j, i - 1):
		dp[i] = True
		break # continue to next i
```
$$
\displaylines{
dp[n] \text{ will then store } true \text{ if it's possible to split the string into valid words} \\
\text{and } false \text{ otherwise} \\
\\
\text{Initial setup of the data structure will take } O(n \cdot L) \text{ time} \\
\text{as for each } i \text{ from } 1 \text{ to } n \text{ we have to check } L \text{ possible prefixes} \\
\text{The following inquiries(lookup) for $n' \leq n$ will take } O(1) \text{ time} \\
\text{Space used is S itself and an array of size } n+1 \text{, so } O(2n) = O(n) \\
}
$$
---
# 4
$$
\displaylines{
\text{Let $E$ be an arithmetic expression, containing integer non-negative numbers} \\
\text{and operations } + \text{ or } - \\
\text{We are allowed to place any amount of parentheses in the expression} \\
\text{Give an algorithm, determining the maximum possible result of this expression} \\
\text{with some combination of parentheses} \\
\\
\text{Solution:} \\
\text{The naive algorithm would be to check every possible parentheses placement} \\
\text{for $n$ operands there are } C_{n-1} \text{ such possibilities (Catalan numbers)} \\
\text{which is approximately } \frac{4^{n-1}}{(n-1)^{3/2}\pi} = O\left( \frac{4^{n}}{n^{3/2}} \right) \\
\\
\text{Solution using recursion and dynamic programming:} \\
\text{Let there be } n \text{ numbers(operands) in the expression: } a_{1}, \dots, a_{n} \\
\text{Number of operations is then } n-1 \\
\text{Let "num" be an array of size } n \text{ which stores numbers} \\
\text{Let "op" be an array of size } n-1 \text{ which stores operations} \\
\text{Let "dpmax" be a 2D array of size } n \times n \\
\text{Each cell } dpmax[i][j] \text{ will store a max possible result of the sub-expression from } a_{i+1} \text{ to } a_{j+1} \\
\text{e.g. } E = 5 - 3 - 2 + 1 \implies dpmax[1][3] = \max\{3-2+1\} = 2 \\
\text{Let "dpmin" be a 2D array of size } n \times n \\
\text{Each cell } dpmin[i][j] \text{ will store a min possible result of the sub-expression from } a_{i+1} \text{ to } a_{j+1} \\
\text{e.g. } E = 5 - 3 - 2 + 1 \implies dpmin[1][3] = \min\{3-2+1\} = 0 \\
\text{Note: we have to store minimals to maximize their subtraction} \\
\\
\text{Initial setup of the data structure(s) is as follows:} \\
}
$$
```python
for i in range(0, n):
	# expression of length one is just the value itself 
	dpmax[i][i] = num[i]
	dpmin[i][i] = num[i]
# for each possible length of the sub-expression
for len in range(2, n + 1):
	# for each possible starting index i
	for i in range(0, n - len):
		# endind index j is calculated based on start and length
		j = i + len - 1
		# some initial value of "unknown", can be inf and -inf
		dpmax[i][j] = None
		dpmin[i][j] = None
		# for each k, split sub-expression into two parts up to k and after k
		# this imitates the placement of parenthesis around left and right parts
		for k in range(i, j):
			leftmax = dpmax[i][k]
			leftmin = dpmin[i][k]
			rightmax = dpmax[k + 1][j]
			rightmin = dpmin[k + 1][j]

			# operator(operation) between left and right 
			operator = op[k]
			curmax = 0
			curmin = 0
			if operator == "+":
				# maximize and minimize sum
				curmax = leftmax + rightmax
				curmin = leftmin + rightmin
			else:
				# maximize and minimize difference
				curmax = leftmax - rightmin
				curmin = leftmin - rightmax

			dpmax[i][j] = max(dpmax[i][j], curmax) if dpmax[i][j] is not None else curmax
			dpmin[i][j] = max(dpmin[i][j], curmin) if dpmin[i][j] is not None else curmin
```
$$
\displaylines{
dpmax[0][n-1] \text{ will then store the maximum possible value of } E \\
\\
\text{Initial setup of the data structure will take } O(n^{3}) \text{ time} \\
\forall \ len \in [2, n]: \forall i \in [0, n - len]: \forall k \in [i, i+len-1]: O(1) \\
\sum_{len=2}^{n} \sum_{i=0}^{n-len} \sum_{k=i}^{i+len-1} 1 = \sum_{len=2}^{n} \sum_{i=0}^{n-len} (i+len-1) = \sum_{len=2}^{n} \left( \sum_{i=0}^{n-len} i + \sum_{i=0}^{n-len} (len-1) \right) = \\
= \sum_{len=2}^{n} \frac{(n-len)(n-len+1)}{2} + \sum_{len=2}^{n} (n-len)(len-1) = \\
= \sum_{len=2}^{n} \frac{(n-len)(n-len+1+2len-2)}{2} = \sum_{len=2}^{n} \frac{(n-len)(n+len-1)}{2} = \\
= \frac{1}{2} \sum_{len=2}^{n} (n^{2} - len^{2} - n + len) = \frac{(n^{2}-n)(n-2)}{2} + \frac{1}{2} \sum_{len=2}^{n} len - \frac{1}{2} \sum_{len=2}^{n} len^{2} = \\
= \frac{n^{3}-3n^{2}+2n}{2} + \frac{n(n+1)-2}{4} - \frac{n(n+1)(2n+1) - 6}{12} = \\
= \frac{6n^{3}-18n^{2}+12n + 3n^{2}+3n-6 - 2n^{3}-3n^{2}-n+6}{12} = \frac{n^{3}}{3} - O(n^{2}) = O(n^{3}) \\
\text{The following inquiries(lookup) for expression and its sub-expressions will take } O(1) \text{ time} \\
\text{Space used is "num" and "op" themselves and two 2D arrays of size } n \times n \\
\text{so } O(2n^{2} + 2n) = O(n^{2}) \\
}
$$



$$
\displaylines{
T(n) = \sqrt{ 2 }T\left( \frac{n}{2} \right) + \log n \\
T(n) = \sqrt{ 2 }^{k}T\left( \frac{n}{2^{k}} \right) + \sum_{i=0}^{k} \sqrt{ 2 }^{i} \log\left( \frac{n}{2^{i}} \right) \\
\\
\log\left( \frac{n}{2^{i}} \right) = \log n - i \\
\implies \sum_{i=0}^{k} \sqrt{ 2 }^{i} \log\left( \frac{n}{2^{i}} \right) = \log n \sum_{i=0}^{k} \sqrt{ 2 }^{i} - \sum_{i=0}^{k} i\sqrt{ 2 }^{i} = \Theta(\sqrt{ n }\log n) - \\
\\
\sum_{i=0}^{k} x^{i} = \frac{x^{k}-1}{x-1} \\
\left( \sum_{i=0}^{k} x^{i} \right)' = \left( \frac{x^{k}-1}{x-1} \right)' \\
\implies \sum_{i=0}^{k} ix^{i} = x \cdot \sum_{i=0}^{k} ix^{i-1} = x \cdot \left( \frac{x^{k}-1}{x-1} \right)' \\
}
$$
