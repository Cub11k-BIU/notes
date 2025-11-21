---
{"publish":true,"created":"03/04/25, 09:04","modified":"2025-11-21T21:10:13.960+02:00","tags":["Academia","Lecture","Data-structures"],"cssclasses":""}
---

## BST (Binary Search Tree) #definition 
- Root - starting Node
- Each Node has a left, and a right "child" - another Node
	- Left child is always "smaller" than the parent
	- Right child is always "greater" than the parent
- Node without children is called a Leaf
- Repetitions are usually not allowed
This structure forms an ever widening tree-like pattern

- Branch is a "path" from the root to one of the leaves
- Tree is called balanced if length of all it's branches is the same, in this case, length of branches is called the Height of the tree
## Operations on BST
### Search
This operation is usually recursive, stepping to the left or to the right each call until we find the Node or get to a leaf
```java
public Node searchBST(Node root, Node toFind) {
	if (root == null) {
		return root;
	}
	if (toFind == root) {
		return root;
	} else if (toFind < root) {
		return this.searchBST(root.left, toFind);
	} else {
		return this.searchBST(root.right, toFind);
	}
}
```
### Insertion
This operation is usually recursive, stepping to the left or to the right each call until we get to the leaf
```java
public Node insertNodeBST(Node root, Node new) {
	if (root == null) {
		// new becomes root
		return new;
	}
	if (new < root) {
		root.left = this.insertNodeBST(root.left, new);
	} else if (new > root) {
		root.left = this.insertNodeBST(root.right, new);
	}
	return root;
}
```
### Deletion
This operation is usually recursive, searching for an element to delete and, when found, adjusting tree as follows:
- If the Node to delete has one child - it is just replaced by it
- If the Node has two children - it's immediate successor replaces it
```java
public Node removeNodeBST(Node root, Node toDelete)
	if (!root) {
        return root;
    }
    if (toDelete < root) {
        root.left = removeNodeBST(root.left, toDelete);
    } else if (toDelete > root) {
        root.right = removeNodeBST(root.right, toDelete);
    } else {
        // one right child or zero children
        if (root.left == null) {
            return root.right;
        }
        // one left child or zero children
        if (root.right == null) {
	        return root.left;
        }
        // two children
        Node successor = root.right;
        while (successor.left) {
            successor = successor.left;
        }
        // copy successor data to root
        root.data = successor.data;
        // delete successor
        root.right = removeNodeBST(root.right, successor);
    }
    return root;
```
## BST Traversals
- InOrder Traversal (Left, Root, Right) - visits nodes in ascending order, sorted so to say
- PreOrder Traversal (Root, Left, Right) - useful for creating a copy of the tree
- PostOrder Traversal (Left, Right, Root) - used for deleting the tree efficiently
BST traversals are usually recursive but can be implemented using a stack instead
# Concatenation of BSTs
Concatenation is the process of merging two BSTs, T1​ and T2​, into a single BST while preserving the BST property.
**Conditions:**
- Given two BSTs:
    - T1​ contains elements **smaller** than all elements in T2​.
    - T2​ contains elements **greater** than all elements in T1​.
- An optional **pivot element** may be provided to maintain balance.
### Algorithm for Concatenation
#### Case 1: The height of the trees is approximately equal
1. Find the **maximum element** in T1​. 
2. Remove this maximum element from T1​.
3. Make the removed element the **new root**. 
4. Attach T1 as the **left subtree** and T2 as the **right subtree**.
#### Case 2: One tree is significantly taller than the other
1. Start at the root of the **taller tree** (let’s say T1​).
2. Traverse **down the right spine** until reaching a node where the **height of the subtree matches** that of T2​.
3. Attach T2​ as the right child of this node.
4. Rebalance the tree if necessary.

# Splitting the BST
Splitting a BST means dividing it into two separate BSTs based on a given **split value x**. The goal is:
- T1​ should contain **all elements ≤ x**.
- T2​ should contain **all elements > x**.
### Algorithm for Splitting a BST at Value x

1. Search for x in the BST:
    - If x exists, remove it and make it a pivot.
    - If x doesn’t exist, proceed with the nearest node.
2. Recursive Splitting:    
    - If x is smaller than the root:
        - Recursively split the **left subtree**.            
        - Attach the right subtree of the split **to the right subtree of the root**.
    - If x is larger than the root:
        - Recursively split the **right subtree**. 
        - Attach the left subtree of the split **to the left subtree of the root**.
3. Balancing Step (if needed): 
    - If an **AVL Tree** or **Red-Black Tree** is used, rebalancing may be required.
