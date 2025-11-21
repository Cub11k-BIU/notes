---
{"publish":true,"created":"15/05/25, 12:05","modified":"2025-11-21T21:10:01.970+02:00","tags":["Academia","Assignment","Data-structures"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } c \geq 1 \\
\text{Let } AVL-c \text{ tree family be a family of binary trees such that} \\
\text{for all subtrees of } T \text{, the difference in height of left and right subtrees is at most } c \\
\text{Prove: } \forall T \text{ in } AVL-c \text{ tree family}: T \text{ has } n \text{ elements}: h(T) \leq O(\log n) \\
\\
\text{Proof:} \\
\text{Let } N(h) \text{ denote a minimum number of nodes of an $AVL-c$ tree of height } h \\
\text{The only tree of height 0 is just a root} \implies  N(0) = 1 \\
\text{Smallest tree of height 1 is just a root and a child} \implies N(1) = 2 \\
\text{Let } h(T) = k \geq 2 \\
\text{Let } L, R \text{ be left and right subtrees of } T \\
\implies h(L) = k - 1 \text{ or } h(R) = k - 1 \\
\text{Let } h(L) = k - 1 \quad \text{WLOG} \\
\text{To minimize the number of nodes, we should make } R \text{ as short as possible} \\
\implies h(R) = k - 1 - c \\
\implies N(k) = 1 + N(h(L)) + N(h(R)) = 1 + N(k-1) + N(k-1-c) \\
\implies N(h) = \left\{\begin{array}{}
h+1 & 0 \leq h < 2 \\
1 + N(h-1) + N(h-1-c) & h \geq 2 \\
\end{array}\right. \\
1 + N(h-1) \geq N(h-1-c) \implies N(h) \geq 2N(h-1-c) \\
\text{We can show by induction: } N(h) \geq 2^{k}N(h-k(c+1)) \\
\text{Let } k = \frac{h}{c+1} \\
\implies N(h) \geq 2^{h/c+1}N(0) = 2^{h/c+1} \\
\implies \forall T: h(T) = h : n \geq 2^{h/c+1} \implies \log n \geq \frac{h}{c+1}\log(2) \implies h \leq \frac{c+1}{\log(2)}\log n \\
\implies \boxed{ h \in O(\log n) } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } c \geq 1 \\
\text{Let } AVL-c \text{ tree family be a family of ternary trees such that} \\
\text{for any pair of subtrees of } T \text{, the difference in height of is at most } c \\
\text{Prove: } \forall T \text{ in } AVL-c \text{ tree family}: T \text{ has } n \text{ elements}: h(T) \leq O(\log n) \\
\\
\text{Proof:} \\
\text{Let } N(h) \text{ denote a minimum number of nodes of an $AVL-c$ tree of height } h \\
\text{The only tree of height 0 is just a root} \implies  N(0) = 1 \\
\text{Smallest tree of height 1 is just a root and a child} \implies N(1) = 2 \\
\text{Let } h(T) = k \geq 2 \\
\text{Let } L, M, R \text{ be left and right subtrees of } T \\
\implies h(L) = k - 1 \text{ or } h(M) = k -1 \text{ or } h(R) = k - 1 \\
\text{Let } h(L) = k - 1 \quad \text{WLOG} \\
\text{To minimize the number of nodes, we should make } M \text{ and } R \text{ as short as possible} \\
\implies h(M) = h(R) = k - 1 - c \\
\implies N(k) = 1 + N(h(L)) + N(h(M)) + N(h(R)) = 1 + N(k-1) + 2 \cdot N(k-1-c) \\
\implies N(h) = \left\{\begin{array}{}
h+1 & 0 \leq h < 2 \\
1 + N(h-1) + 2 \cdot N(h-1-c) & h \geq 2 \\
\end{array}\right. \\
1 + N(h-1) \geq N(h-1-c) \implies N(h) \geq 3N(h-1-c) \\
\text{We can show by induction: } N(h) \geq 3^{k}N(h-k(c+1)) \\
\text{Let } k = \frac{h}{c+1} \\
\implies N(h) \geq 3^{h/c+1}N(0) = 3^{h/c+1} \\
\implies \forall T: h(T) = h : n \geq 2^{h/c+1} \implies \log n \geq \frac{h}{c+1}\log(3) \implies h \leq \frac{c+1}{\log(3)}\log n \\
\implies \boxed{ h \in O(\log n) } \\
}
$$
# 2
$$
\displaylines{
& \text{Describe a data structure that wopuld satisfy the following:} \\
& \text{Efficient operations (at most } O(\log n)) \text{ where } n \text{ is the number of elements stored:} \\
1. & \text{ Insert key } x \\
2. & \text{Delete key } x \\
3. & \text{Find key } x \text{ (or its absense)} \\
4. & \text{Calculate an average of all keys in range } [a, b] \\
\\
& \text{Calculate and prove each operation correctness and time complexity} \\
\\
& \text{Solution:} \\
& \text{Let us use an augmented AVL-1 tree:} \\
& \text{Each node of the tree would contain the following information:} \\
}
$$
```c
class Node:
  key: int
  size: int   # number of nodes in the tree with this Node as a root
  sum: int    # sum of all keys in the tree with this Node as a root
  left: Node
  right: Node
```
$$
\displaylines{
\text{Insert, Delete and Find operations take } O(\log n) \text{ time in AVL trees} \\
\text{In this augmented tree, the only addition to these operations is} \\
\text{updating fields size and sum in each node we visit and doing:} \\
\text{Insert:} \\
\text{size} = \text{left.size} + \text{right.size} + 1 \\
\text{sum} = \text{left.sum} + \text{right.sum} + x \\
\text{Delete:} \\
\text{size} = \text{left.size} + \text{right.size} \\
\text{sum} = \text{left.sum} + \text{right.sum} \\
}
$$
$$
\displaylines{
& \text{Returning an average in range } [a, b] \text{ is done in the following way:} \\
1. & \text{Start from the root and find the first node that is in range} \\
2. & \text{If there is no such node - return 0} \\
3. & \text{Once we found the root, take node.sum and node.size fields as totalSum, totalCount} \\
4. & \text{Subtract all values from the left subtree that are less-than-range} \\
5. & \text{Subtract all values from the right subtree that are greater-than-range} \\
6. & \text{Return totalSum / totalCount} \\
& \text{Pseudocode for less-than-range and greater-than-range would then look like this:} \\
}
$$
```c
func less_than(root, a):
  sum = 0
  size = 0
  while root != null:
    // if root is less than range
    // then root and left subtree are less-than-range
    // and we continue to root.right
    if root.key < a:
      if root.left ! null:
        sum += root.left.sum
        size += root.left.size
      sum += node.key
      size += 1
      root = root.right
    else:
      // otherwise node and node.right in [a, b], continue to node.left
      root = root.left
  return sum, size

func greater_than(root, b):
  sum = 0
  size = 0
  while root != null:
    // if root is greater than range
    // then root and right subtree are greater-than-range
    // and we continue to root.left
    if root.key > b:
      if root.right ! null:
        sum += root.right.sum
        size += root.right.size
      sum += node.key
      size += 1
      root = root.left
    else:
      // otherwise node and node.left in [a, b], continue to node.right
      root = root.right
  return sum, size
```
$$
\displaylines{
\\
\\
\\
\\
\text{Pseudocode for average-in-range would then look like this:} \\
}
$$
```c
func average_in_range(root, a, b):
  while root != null:
    if root.key < a:
      root = root.right
    elif root.key > b:
      root = root.left
    else:
      break
  if root == null:
    return null
  sum = root.sum
  size = root.size
  left_sum, left_size = less_than(root, a)
  right_sum, right_size = greater_than(root, b)
  sum -= left_sum
  sum -= right_sum
  size -= left_size
  size -= right_size
  return sum / size
```
$$
\displaylines{
\text{Time complexity:} \\
\text{Height of the tree is } O(\log n) \\
\text{Insert, Delete and Find operations are } O(\log n) \text{ as in regular AVL tree} \\
\text{Calculating an average is:} \\
\text{Search for a suitable root is at most } O(\log n) \\
\text{Calculating less\_than and greater\_than is at most } O(\log n) \\
\text{ as for each node in the traversal it does } O(1) \text{ operations and visits one node at each level} \\
\implies \text{Overall time complexity for claculating average is } O(\log n) \\
\\
\text{Correctness:} \\
\text{Insert, Delete and Find operations are exactly the same as in a regular AVL tree} \\
\text{As such, they are proven correct} \\
\text{Finding the average in range can be represented as cutting off out-of-range subtrees} \\
\text{or coloring the nodes} \\
\text{Each time we skip the node until we find the suitable root} \\
\text{we cut off out-of-range subtrees from both left or right} \\
\text{After finding the root (if we cut off the whole tree we just return null)} \\
\text{we proceed to cut off less-than-range subtrees on the left} \\
\text{and greater-than-range subtrees on the right} \\
\text{In the end, we are left with the subtree that only contains elements in range} \\
}
$$
# 3a
$$
\displaylines{
\text{Let } T \text{, an } m\text{-ary tree be a "perfect" tree where each node has } m \text{ children or is a leaf} \\ 
\text{Let } m > 1 \text{ be odd} \\
\text{Prove by induction: in "perfect" } m\text{-ary tree there is an odd number of leaves} \\
\\
\text{Proof:} \\
\text{Base case. Let } h(T) = 0 \\
T \text{ then has 1 node that is a root and thus 1 leaf} \\
\text{Let } h(T) = 1 \\
T \text{ then has root with m children and thus } m \text{ leaves, where } m \text{ is odd} \\
\text{Induction step. Let } h(T') = k \implies T' \text{ has an odd number of leaves} \\
\text{Let } h(T) = k + 1 \\
\text{Let } T' \text{ be formed by removing all leaves of } T \\
T \text{ is a "perfect" tree} \implies T' \text{ is also a "perfect" tree} \\
h(T') = k \implies T' \text{ has an odd number of leaves, say } n \\
\implies T \text{ has } n \cdot m \text{ leaves} \\
n \text{ is odd and so is } m \implies \boxed{ n \cdot m \text{ is odd} } \\
\implies \text{By induction } \boxed{ \forall k \in \mathbb{N}_{0}: h(T) = k \implies T \text{ has an odd number of leaves} } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } T \text{, an } m\text{-ary tree be a "perfect" tree where each node has } m \text{ children or is a leaf} \\
\text{Let } m > 1 \ (\text{otherwise } m - 1 = 0) \\
\text{Prove by induction: in "perfect" } m\text{-ary tree with } n \text{ leaves there are } \frac{n-1}{m-1} \text{ inner nodes} \\
\\
\text{Proof:} \\
\text{Base case. Let } h(T) = 0 \\
\implies T \text{ has one node that is a root and thus one leaf} \\
\implies T \text{ has zero inner nodes, } \frac{n-1}{m-1} = \frac{1-1}{m-1} = 0 \\
\text{Induction step. Let } h(T') = k \implies T' \text{ has } \frac{n-1}{m-1} \text{ inner nodes} \\
\text{Let } h(T) = k + 1 \\
\text{Let } T' \text{ be a tree formed by cutting off all leaves of } T \\
T \text{ is a "perfect" tree} \implies T' \text{ is a "perfect" tree} \\
h(T') = k \implies T' \text{ has } \frac{n'-1}{m-1} \text{ inner nodes} \\
T' \text{ has } n' \text{ leaves} \\
\implies T \text{ has } n = n' \cdot m \text{ leaves and } n' + \frac{n'-1}{m-1} \text{ inner nodes} \\
n' + \frac{n'-1}{m-1} = \frac{n'(m-1) + n' - 1}{m-1} = \frac{n'm - 1}{m-1} = \frac{n-1}{m-1} \\
\implies \text{By induction: } \boxed{ \forall k \in \mathbb{N}_{0}: h(T) = k \implies T \text{ has } \frac{n-1}{m-1} \text{ inner nodes} } \\
}
$$
# 4
$$
\displaylines{
\text{Let } B_{k} \text{ be a binomial tree of order } k \\
\text{Prove: } \forall i \in [0, h(B_{k})]: \text{Number of nodes on i-th level is } \binom{k}{i} \\
\\
\text{Proof:} \\
\text{Let } N_{k}(i) = \text{number of nodes on i-th level of } B_{k} \\
\text{Let } i < 0 \implies N_{k}(i) = 0 \\
\text{Base case. Let } k = 0 \\
\implies B_{0} \text{ has 1 node, } h(B_{k}) = 0 \\
\forall i \in [0, 0]: \binom{k}{i} = \binom{0}{0} = 1 \\
\text{Strong induction step. Let } \forall k' \leq k: \forall i \in [0, h(B_{k'})]: N_{k'}(i) = \binom{k'}{i} \\
\text{Let } B_{k+1} \\
B_{k+1} \text{ consists of } B_{k} (B_{k}^{1}) \text{ and a copy of } B_{k} (B_{k}^{2}) \text{ as a left child of root of } B_{k}^{1} \\
\implies \forall i \in [0, h(B_{k+1})]: N_{k+1}(i) = N_{k}(i) + N_{k}(i-1) = \left\{\begin{array}{}
\binom{k}{i} = \binom{k}{0} = \binom{k+1}{0} = 1 & i = 0 \\
\binom{k}{i} + \binom{k}{i-1} & i \geq 1 \\
\end{array}\right. \\
\binom{k}{i} + \binom{k}{i-1} = \frac{k!}{(k-i)!i!} + \frac{k!}{(k-i+1)!(i-1)!} = \\
= \frac{k!(k-i+1)}{(k-i+1)!i!} + \frac{k!i}{(k-i+1)!i!} = \frac{k!(k+1)}{(k-i+1)!i!} = \frac{(k+1)!}{(k+1-i)!i!} = \binom{k+1}{i} \\
\implies \forall i \in [0, h(B_{k+1})]: N_{k+1}(i) = \binom{k+1}{i} \\
\implies \text{By induction: } \boxed{ \forall k \in \mathbb{N}_{0}: \forall i \in [0, h(B_{k})]: \text{Number of nodes on i-th level is } \binom{k}{i} } \\
}
$$
# 5
$$
\displaylines{
\text{Present an algorithm that, given a constant } k \\
\text{and a min-heap of size } n \text{ represented as an array,} \\
\text{would return } k \text{ smallest elements in sorted order with time complexity } \min\{O(k\log n), O(k^{2})\} \\
\\
\text{Solution:} \\
\text{Assume } k \leq n \\
\text{Let } H \text{ be a min-heap of size $n$ represented as an array, let } L \text{ be an empty array of size } k \\
\text{Let } Q \text{ be an empty min-heap that is also represented as an array, that stores pairs (element, index in H)} \\
\text{Algorithm is then defined as:} \\
}
$$
$$
\displaylines{
1. & \text{Add a "true" minium to } Q \\
2. & \text{Pop the next minimum-candidate from } Q \\
3. & \text{Add the minimum-candidate to } L \\
4. & \text{Add left and right children of minimum-candidate from $H$ to } Q \\
5. & \text{Repeat for } i \in [0, k-1] \text{ from step 2} \\
& \text{Pseudocode for this algorithm would then look like this:} \\
}
$$
```c
func k_min(H, n, k):
  L = array[k]
  Q = new_min_heap(k)              // allocate a new heap for k elements
  insert((min(H), 0), Q)
  for i in [0, k-1]:
    m, idx = delete_min(Q)         // pop the next minimum-candidate
    L[i] = m                       // add minimum candidate to L
    if 2*idx + 1 < n:              // Add left and right children to Q
      insert((H[2*idx + 1], 2*idx + 1), Q)
	if 2*idx + 2 < n:
  	  insert((H[2*idx + 2], 2*idx + 2), Q)
  return L
```
$$
\displaylines{
\text{Correctness:} \\
\text{The algorithm starts by taking the "true" minimum in the heap} \\
\text{and adding it to the queue (also a min-heap)} \\
\text{Algorithm then does } k \text{ iterations of:} \\
\text{Extract minimum (m) from the queue, add it to the result list} \\
\text{Next-after-m minimum is one of children of m in the min-heap} \\
\text{As such, add left and right children of m to the queue} \\
\text{Next-after-current minimum from min-heap is now guaranteed to be in the queue} \\
\text{On each iteration, i-th minimum from min-heap is inserted into result list} \\
\implies \text{After } k \text{ iterations, result list would contain } k \text{ minimums} \\
\\
\text{Time complexity:} \\
\text{Allocation of queue and result list is done in O(1)} \\
\text{Getting min(H) and inserting it into an empty queue is } O(1) \\
\\
\text{On each iteration, one element is removed from the queue and at most two are added} \\
\implies \text{On i-th iteration, Q contains at most i elements} \\ \implies \text{Deleting min from Q and inserting two nodes into Q on each iteration is } 3 \cdot O(\log i) \\
\sum_{i=1}^{k} 3 \log i = 3 O(\log k!) = 3O(k\log k) = O(k\log k) \\
\implies \boxed{ \text{Overall time complexity is } O(k\log k) } \\
\text{This solution uses extra memory} \\
\\
\text{There is also an alternative solution, without using extra memory} \\
\text{and with time complexity exactly as requested:} \\
k \text{ minimums can only be stored up to k-th level in the heap} \\
\text{As such, we will only operate on a subset of the heap, of height } k \\
\text{We will perform } k \text{ minimum extractions according to the standard algorithm} \\
\text{Height of the heap is k} \implies \text{Each extraction is } O(h) = O(k) \\
\text{There are } k \text{ extractions} \implies \text{The overall time complexity is } O(k^{2}) \\
\text{The worst case is when we extract minimums from the last level too, which would then} \\
\text{operate on the whole heap and lead to overall time complexity } O(k\log n) \\
\implies \boxed{ \text{The overall time complexity is } \min\{O(k^{2}), O(k\log n)\} } \\
}
$$
