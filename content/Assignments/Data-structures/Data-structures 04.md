---
{"publish":true,"created":"12/06/25, 16:06","modified":"2025-11-21T21:10:01.982+02:00","tags":["Academia","Assignment","Data-structures"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let there be a circular doubly-linked list of bits} \\
\text{The task is to find out the number of bits using only one pointer} \\
\text{Use of counters is allowed} \\
}
$$
## 1a
$$
\displaylines{
\text{Let all bits be initially set} \\
\text{Give an algorithm for finding the length of list in linear time} \\
\\
\text{Solution:} \\
\text{Assume the list to be non-empty} \\ 
\text{Let } head \text{ be a pointer to some bit in the list} \\
\text{The algorithm is then defined as follows:} \\
}
$$
$$
\displaylines{
1. & \text{Set the counter to } 1 \\
2. & \text{Unset bit at } head \\
3. & \text{Move } head \text{ one step forward} \\
4. & \text{Start a while loop, with the condition being 'while (head.value == 1)'} \\
5. & \text{On each iteration of the loop increase counter by } 1 \text{ and move } head \text{ one step forward} \\
6. & \text{After the loop, counter holds the length of the list} \\
7. & \text{(Optional) set bit at } head \text{ to restore the initial state} \\
}
$$
## 1b
$$
\displaylines{
\text{Let all bits have unknown state} \\
\text{Give an algorithm for determining if the length of the list is} \\
\text{larger than some } l \in \mathbb{N} \\
\text{Calculate algorithm's time complexity} \\
\\
\text{Solution:} \\
\text{Assume the list is non-empty} \\
\text{Assume the list can changed and doesn't have to be restored} \\
\text{Let } head \text{ be a pointer to some bit in the list} \\
\text{Then algorithm is then defined as follows:} \\
}
$$
$$
\displaylines{
1. & \text{ Unset bit at } head \\
2. & \text{Move } head \text{ one step forward} \\
3. & \text{Start a loop of } l \text{ iterations} \\
4. & \text{On each iteration set bit at } head \text{ and move } head \text{ one step forward} \\
5. & \text{Start a loop of } l \text{ iterations} \\
6. & \text{On each iteration move } head \text{ one step back} \\
7. & \text{If 'head.value == 0' than the length of the list is larger or equal to } l \\
\\
& \text{ There are two loops with } l \text{ iterations and each iteration takes a constant time} \\
& \implies \text{Time complexity of this algorithm is } O(2l) = O(l) \\
}
$$
## 1c
$$
\displaylines{
\text{Let all bits have unknown state} \\
\text{Give an algorithm for determining the length of the list in } O(n^{2}) \text{ time} \\
\\
\text{Solution:} \\
\text{Assume the list to be non-empty} \\
\text{Assume the list can changed and doesn't have to be restored} \\
\text{Let } head \text{ be a pointer to some bit in the list} \\
\text{Then algorithm is then defined as follows:} \\
}
$$
$$
\displaylines{
1. & \text{Set counter } l \text{ to } 1 \\
2. & \text{Start an endless while loop, alternatively use a boolean flag} \\
3. & \text{Run algorithm from 1b with the value of counter } l \\
4. & \text{If the length of the list is smaller than } l, \text{ break the loop, alternatively set a flag} \\
5. & \text{Otherwise increase } l \text{ by } 1 \\
6. & \text{After the loop, counter } l \text{ holds the length of the list plus one, so subtract one from } l \\
\\
& \text{The runtime of each iteration is } i \text{ where } i \text{ is the "index" of iteration, } i \text{ equals } l \\
& \text{There are } n + 1 \text{ iterations, until } l \text{ equals } n + 1 \\
& \implies T(n) = \sum_{i=1}^{n+1} i = \frac{(n+1)(n+2)}{2} = O(n^{2}) \\
}
$$
## 1d
$$
\displaylines{
\text{Let all bits have unknown state} \\
\text{Give an algorithm for determining the length of the list in } O(n) \text{ time} \\
\\
\text{Solution:} \\
\text{Assume the list to be non-empty} \\
\text{Assume the list can changed and doesn't have to be restored} \\
\text{Let } head \text{ be a pointer to some bit in the list} \\
\text{Then algorithm is then defined as follows:} \\
}
$$
$$
\displaylines{
1. & \text{Set counter } l \text{ to } 1 \\
2. & \text{Start an endless while loop, alternatively use a boolean flag} \\
3. & \text{Run algorithm from 1b with the value of counter } l \\
4. & \text{If the length of the list is smaller than } l, \text{ break the loop, alternatively set a flag} \\
5. & \text{Otherwise multiply } l \text{ by } 2 \\
6. & \text{After the loop, list consists entirely out of ones (set bits)} \\
7. & \text{Use algorithm from 1a to determine the length of the list} \\ 
\\
& \text{The runtime of each iteration is } 2^{i} \text{ where } i \text{ is the "index" of iteration} \\
& \text{There are } \lceil \log n \rceil \text{ iterations, until } l \text{ equals } 2^{\lceil \log n \rceil} \geq n \\
& \implies T'(n) = \sum_{i=0}^{\lceil \log n \rceil} 2^{i} = \frac{1(2^{\lceil \log n \rceil} - 1)}{2-1} = 2^{\lceil \log n \rceil} - 1 = 2^{\log n} \cdot 2^{k} - 1 \text{ where } k \in [0, 1) \\
& \implies T'(n) \leq 2n - 1 \\
& \text{After the loop, algorithm from 1a is run, being a } O(n) \\
& \implies \text{The runtime of the algorithm is } T(n) \leq 2n - 1 + O(n) = O(n) \\
}
$$
# 2
$$
\displaylines{
& \text{Build a } 3SUM \text{ data-structure supporting the following operations:} \\
1. & \text{Building(initializing) the structure} \\
2. & \text{Getting a triplet of indices (i, j, k) such that } x_{i}+x_{j}+x_{k} = y \text{ where } y \text{ is an argument} \\
\\
& \text{Let there exist a } 2SUM \text{ data-structure with the following properties:} \\
1. & \text{Building(initializing) the structure in } O(n\log n) \\
2. & \text{Getting a pair of indices (i, j) such that } x_{i} + x_{j} = y \text{ where } y \text{ is an argument in } O(f(n)) \\
& \text{Prove: exists a $3SUM$ data-structure with building in } O(n\log n) \\
& \text{and getting a triplet of indices in } O(n \cdot f(n)) \\
}
$$
$$
\displaylines{
\\
\text{Solution:} \\
\text{We'll start with the second part of the question:} \\
\text{Let the } 3SUM \text{ data-structure be defined as following:} \\
\text{Building the structure is just building a slightly modified 2SUM} \\
\text{and saving S, which is } O(n\log n) \\
\text{By slightly modified I mean allowing the get2sum method} \\
\text{to accept one more argument - index to ignore} \\
\\
\text{Getting a triplet of indices is then done as follows:} \\
}
$$
$$
\displaylines{
1. & \text{Iterate over } [0, n-1] \text{ with index } i \\
2. & \text{On each iteration call get2sum($y - x_{i}, i$)} \\
3. & \text{If the result is not null - return} \\
}
$$
$$
\displaylines{
\text{Runtime of this algorithm is at most } n \text{ iterations, each taking } O(f(n)) \\
\implies T(n) = n \cdot O(f(n)) = O(n \cdot f(n)) \\
}
$$
$$
\displaylines{
\text{Let us return to the first part of the solution:} \\
\text{All that is left is to use the } 3SUM \text{ structure we defined} \\
\text{And to define the } 2SUM \text{ structure} \\
\\
\text{Let the initialization be defined as initializing the hashtable } H \\
\text{with keys being elements of S and values being lists of indices of these values} \\
\text{Each list of indices can be limited to just two entries, any other can be ignored,} \\
\text{as there is no case where we need more than two identical elements} \\
\text{e.g. if } S[0] = S[5] = S[8] = S[24] = 91 \text{ then } H[91] = [0, 5] \\
\\
\text{Note: if our task is to return all suitable pairs of indices, not just any one of them,} \\
\text{we have to store all element repetitions} \\
\\
\text{Initialization of such a hashtable is } O(n) \\
\text{get2sum}(y, k) \text{ is then defined as follows:} \\
}
$$
$$
\displaylines{
1. & \text{Iterate over } [0, n-1] \text{ with index } i \\
2. & \text{If } i == k \text{ proceed to next iteration} \\
3. & \text{Let } z = y - S[i] \\
4. & \text{Check if } z \text{ is in } H \\
5. & \text{If not, continue to next interation} \\
6. & \text{If yes, iterate over } H[z] \text{ with index } j \\
7. & \text{On each iteration check if } H[z][j] \neq k - \text{ return } (i, H[z][j]) \\
8. & \text{Return null if no suitable index was found} \\
}
$$
$$
\displaylines{
\text{Runtime complexity for this } 2SUM \text{ structure is:} \\
\text{With an assumption that } H \text{ contains at most } 2 \text{ indices in each key-value pair,} \\
\text{runtime of get2sum is } O(2 \cdot n) = O(n) \\
\text{Without this assumption, worst case runtime (S contains $n$ copies of one unique element)} \\
\text{is just } O(n^{2}) \\
}
$$
# 3
$$
\displaylines{
\text{Let } A \text{ be a two-dimensional array } [1..n,1..n] \\
A \text{ represents a map of heights, each element of } A \text{ stores a distinct value} \\
\text{Give an algorithm using divide-and-conquer method to find any local minimum} \\
\text{Meaning, to find an element } (i, j) \text{ such that its neighbors} \\
(i, j+1), (i, j-1), (i+1, j), (i-1, j) \text{ are all larger than the element itself} \\
\text{Non-existing neighbors should be considered walls of infinite height} \\
\\
\text{Solution:} \\
\text{The algorithm is as follows:} \\
}
$$
$$
\displaylines{
1. & \text{Given a map of size } N \times N \text{ find a "middle cross" (middle row and middle column)} \\
2. & \text{Find minimum element in this cross, let's call it crossMin} \\
3. & \text{If crossMin is a local linimum - we are done} \\
4. & \text{Otherwise, there exists a neighbor that is smaller than crossMin and not on a cross(!)} \\
5. & \text{Repeat the algorithm for a quadrant of size $\frac{N}{2} \times \frac{N}{2}$ in which this neighbor is} \\
6. & \text{If there are multiple such neighbors - we can choose any one of them} \\
}
$$
```python
def findLocalMinimum(map, startRow, startCol, endRow, endCol)
	"""
	Find local minimum on the map

	Args:
		map (list[list[int]]): 2-dimensional array of integers
		startRow (int): first row index
		startCol (int): first column index
		endRow (int): last row index
		endCol (int): last column index
	"""
```
$$
\displaylines{
\text{Complexity of this algorithm is defined by a recursive formula:} \\
T(N) = T\left( \frac{N}{2} \right) + O(f(N)) \\
\text{Where } f(N) \text{ is the amount of work in each recursive call} \\
\text{In each recursive call we find a crossMin which is } O(2N) = O(N) \\
\text{And find one of its smaller neighbors, if any, which is } O(1) \\
\implies f(N) = O(N) \\
\implies T(N) = T\left( \frac{N}{2} \right) + O(N) \\
\log_{2} 1 = 0 < 1 \\
\text{Let } \varepsilon = \frac{1 - \log_{2} 1}{2} \\
\implies \log_{2} 1 + \varepsilon < 1 \implies N^{\log_{2} 1 + \varepsilon} < N \implies N \in \Omega(N^{\log_{2} 1 + \varepsilon}) \\
\implies \text{By master theorem } \boxed{ T(N) = O(N) } \\
}
$$
# 4a
$$
\displaylines{
& \text{Given an array of } n \text{ integers, check if they are all distinct in } O(n\log n) \\
\\
& \text{Solution:} \\
1. & \text{Sort the array, which is } O(n\log n) \\
2. & \text{Any elements with the same value are now neighbors} \\
3. & \text{Iterate over } [1, n-1] \text{ wich index } i, \text{ if } A[i-1] == A[i], \text{ return false} \\
4. & \text{Return true} \\
& \text{Complexity of this algorithm is } O(n\log n) + O(n) = O(n\log n) \\
}
$$
## 4b
$$
\displaylines{
\text{Given an array of } n \text{ integers, check if they are all distinct in } O(n) \\
\\
\text{Solution:} \\
}
$$
$$
\displaylines{
1. & \text{Create an empty hashtable } H \\
2. & \text{Iterate over } [0, n-1] \text{ with index } i \\
3. & \text{For each element } A[i], \text{ check if it is already present in the hashtable} \\
4. & \text{If it is, return false} \\
5. & \text{Otherwise, insert it and continue} \\
}
$$
$$
\displaylines{
\text{We iterate over the array once, which is } n \text{ iterations} \\
\text{On each iteration, we lookup an element in $H$ and insert an element into } H \\
\text{Both of these operations are } O(1) \\
\implies \text{Complexity of this algorithm is } O(n) \\
}
$$
