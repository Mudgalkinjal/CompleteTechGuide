# JavaScript Stacks: Complete Guide

## **1. What is a Stack?**
- **LIFO (Last In, First Out)** data structure.
- Elements are added (`push`) and removed (`pop`) from the **top**.
- **Key Operations**:
  - `push`: Add an element to the top.
  - `pop`: Remove the top element.
  - `peek`: View the top element without removing it.
  - `isEmpty`: Check if the stack is empty.
  - `size`: Get the number of elements.

---

## **2. Implementation in JavaScript**
### **Array-Based Stack (Most Common)**
```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Push: O(1) amortized (dynamic array resizing)
  push(value) {
    this.items.push(value);
  }

  // Pop: O(1)
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // Peek: O(1)
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // Check if empty: O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Get size: O(1)
  size() {
    return this.items.length;
  }

  // Clear stack: O(1) (truncates array)
  clear() {
    this.items = [];
  }
}
```

### **Linked List-Based Stack**
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Push: O(1)
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  // Pop: O(1)
  pop() {
    if (this.isEmpty()) return null;
    const removed = this.top.value;
    this.top = this.top.next;
    this.size--;
    return removed;
  }

  // Peek: O(1)
  peek() {
    return this.top?.value ?? null;
  }

  // Check if empty: O(1)
  isEmpty() {
    return this.size === 0;
  }

  // Clear stack: O(1)
  clear() {
    this.top = null;
    this.size = 0;
  }
}
```

---

## **3. Core Operations & Big O**

| Operation | Method | Array-Based | Linked List-Based | Description |
|-----------|--------|-------------|-------------------|-------------|
| **Push** | `push()` | O(1)* | O(1) | Add element to the top |
| **Pop** | `pop()` | O(1) | O(1) | Remove top element |
| **Peek** | `peek()` | O(1) | O(1) | View top element |
| **isEmpty** | `isEmpty()` | O(1) | O(1) | Check if stack is empty |
| **Size** | `size()` | O(1) | O(1) | Get number of elements |
| **Clear** | `clear()` | O(1) | O(1) | Reset the stack |

_*Amortized O(1) for dynamic arrays (occasional O(n) resizing)._

---

## **4. Why Use Stacks?**
### **Use Cases**:
1. **Function Call Stack**: Tracks execution context in JavaScript.
2. **Undo/Redo**: Reverses actions in applications.
3. **Backtracking Algorithms**: Maze solving, DFS in graphs.
4. **Syntax Parsing**: Balanced parentheses, HTML tag validation.
5. **Expression Evaluation**: Postfix (RPN) notation.

### **Advantages**:
- Fast O(1) insertions/deletions.
- Simple LIFO logic for reversing or stepwise processing.

### **Avoid When**:
- You need random access to elements (use arrays).
- FIFO (First In, First Out) behavior is required (use queues).

---

## **5. Common Patterns**
### **1. Reverse a String**
```javascript
function reverseString(str) {
  const stack = new Stack();
  for (const char of str) stack.push(char);
  let reversed = '';
  while (!stack.isEmpty()) reversed += stack.pop();
  return reversed;
}
```

### **2. Balanced Parentheses**
```javascript
function isBalanced(expression) {
  const stack = new Stack();
  const pairs = { '(': ')', '[': ']', '{': '}' };

  for (const char of expression) {
    if (pairs[char]) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      if (stack.isEmpty() || pairs[stack.pop()] !== char) return false;
    }
  }
  return stack.isEmpty();
}
```

### **3. Undo/Redo System**
```javascript
class UndoRedo {
  constructor() {
    this.undoStack = new Stack();
    this.redoStack = new Stack();
  }

  execute(action) {
    this.undoStack.push(action);
    this.redoStack.clear();
  }

  undo() {
    if (this.undoStack.isEmpty()) return;
    const action = this.undoStack.pop();
    this.redoStack.push(action);
    // Revert action
  }

  redo() {
    if (this.redoStack.isEmpty()) return;
    const action = this.redoStack.pop();
    this.undoStack.push(action);
    // Reapply action
  }
}
```

---

## **6. Gotchas**
1. **Underflow**: Calling `pop()` or `peek()` on an empty stack. Always check `isEmpty()` first.
2. **Overflow**: In fixed-size stacks (uncommon in JavaScript due to dynamic arrays).
3. **Misusing Arrays**: Avoid using `arr.shift()` or `arr.unshift()`—these turn the stack into a queue.

---

## **7. Performance Tips**
1. **Use Array-Based Stacks** for simplicity and speed in most cases.
2. **Linked List Stacks** are useful if you need precise control over memory.
3. **Avoid Index Access**: Treat the stack as LIFO-only (no `arr[0]` or `arr[index]`).

---

## **8. Comparison: Stack vs Array**

| Feature | Stack | Array |
|---------|-------|-------|
| Insert/Delete | O(1) (top only) | O(n) (middle) |
| Random Access | Not allowed | O(1) |
| Use Case | LIFO workflows | General-purpose |
| Built-in Methods | Limited (`push`, `pop`) | Extensive (`map`, `filter`, etc.) |

---

## **9. Edge Cases**
- **Empty Stack**: Handle `pop()` and `peek()` gracefully.
- **Single-Element Stack**: Ensure `pop()` resets the stack to empty.
- **Large Datasets**: Array-based stacks may resize internally (manage with pre-allocation if needed).

---

## **10. Common Interview Questions**
1. Implement a stack with `getMin()` in O(1) time (Min Stack).
2. Evaluate postfix expressions.
3. Valid parentheses (LeetCode #20).
4. Simplify file paths (LeetCode #71).
5. Design a browser history manager.

