
# Tree Problems Cheat Sheet (JavaScript)

## Tree Basics
- **Definition:** A hierarchical data structure with nodes connected in parent-child relationships.
- **Key Terms:**  
  - **Root:** The top node.  
  - **Leaf:** A node with no children.  
  - **Depth/Height:** Distance from the root.

## Tree Traversal Methods

### Preorder Traversal (Root, Left, Right)
- **Use:** Copying trees, prefix expression.
- **Example:**
  ```js
  function preorder(node) {
    if (!node) return;
    console.log(node.value);
    preorder(node.left);
    preorder(node.right);
  }
  ```

### Inorder Traversal (Left, Root, Right)

**Use:** For BSTs, yields sorted order.

**Example**:

```js
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.value);
  inorder(node.right);
}
```

### Postorder Traversal (Left, Right, Root)

**Use:** Deletion processes, postfix expression.

**Example**:

```js
function postorder(node) {
  if (!node) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.value);
}
```

### Level-Order Traversal

**Use:** Breadth-first search on trees.

**Example**:

```js
function levelOrder(root) {
  if (!root) return;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
```

### Binary Search Trees (BST)

## Properties:

- Left subtree contains values less than the node.
- Right subtree contains values greater than the node.

## Operations:

- Search/Insertion: Average O(log n), worst-case O(n) if unbalanced.
- Deletion: Handle three cases (leaf, one child, two children).

### Advanced Tree Algorithms

## Lowest Common Ancestor (LCA)

- Purpose: Find the common ancestor of two nodes.

- Example for Binary Tree
```js
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
}
```

### Tree Diameter

**Purpose:** Longest path between any two nodes.
**Tip:** Use recursion to compute both height and diameter simultaneously.

### Balanced Trees

**AVL Trees:*** *   Self-balancing BST using rotations.
* *   Guarantees O(log n) operations.
**Red-Black Trees:*** *   Uses node coloring to maintain balance.

## Heaps (A Special Tree)

**Binary Heap:*** *   Implements min-heap or max-heap.
* *   **Operations:** Insertion and extraction in O(log n), peek in O(1).

_Tips:_

* *   Recursion is common in tree algorithms—practice both recursive and iterative solutions.
* *   When deep recursion is a risk, consider using iterative methods with stacks or queues.






