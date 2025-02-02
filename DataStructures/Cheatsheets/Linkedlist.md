# JavaScript Linked Lists: Complete Guide

## **1. What is a Linked List?**
- **Linear data structure** where elements are stored in nodes.
- Each node contains:
  - **Value**: The data.
  - **Pointer(s)**: 
    - **Singly Linked List**: `next` pointer to the next node.
    - **Doubly Linked List**: `next` and `prev` pointers.
- **No random access**: Traverse from head to find elements.
- **Dynamic size**: Nodes are allocated at runtime.

---

## **2. Types of Linked Lists**
1. **Singly Linked List**: Nodes have a `next` pointer.
2. **Doubly Linked List**: Nodes have `next` and `prev` pointers.
3. **Circular Linked List**: Last node points back to the head.

---

## **3. Implementation in JavaScript**
### **Node Class**
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // For singly linked list
    this.prev = null; // For doubly linked list
  }
}
```

### **Singly Linked List**
```javascript
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // Optional (improves append efficiency)
    this.size = 0;
  }
}
```

### **Doubly Linked List**
```javascript
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
```

---

## **4. Core Operations (Singly Linked List)**

### **Insertion**
| Method | Description | Time Complexity | Example |
|--------|-------------|-----------------|---------|
| **Prepend** | Add to start | O(1) | `list.prepend(10)` |
| **Append** | Add to end | O(1) with tail / O(n) without | `list.append(20)` |
| **Insert at Index** | Add at position | O(n) | `list.insertAt(30, 1)` |

**Code**:
```javascript
prepend(value) {
  const node = new Node(value);
  node.next = this.head;
  this.head = node;
  if (!this.tail) this.tail = node; // Update tail if list was empty
  this.size++;
}

append(value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.size++;
}
```

### **Deletion**
| Method | Description | Time Complexity | Example |
|--------|-------------|-----------------|---------|
| **Remove Head** | Delete first node | O(1) | `list.removeHead()` |
| **Remove Tail** | Delete last node | O(n) | `list.removeTail()` |
| **Remove by Value** | Delete first occurrence | O(n) | `list.remove(20)` |

**Code**:
```javascript
removeHead() {
  if (!this.head) return null;
  const removed = this.head;
  this.head = this.head.next;
  this.size--;
  if (this.size === 0) this.tail = null;
  return removed.value;
}

remove(value) {
  if (!this.head) return null;
  if (this.head.value === value) return this.removeHead();
  
  let current = this.head;
  while (current.next) {
    if (current.next.value === value) {
      const removed = current.next;
      current.next = current.next.next;
      this.size--;
      if (!current.next) this.tail = current; // Update tail
      return removed.value;
    }
    current = current.next;
  }
  return null;
}
```

### **Search & Traversal**
| Method | Description | Time Complexity | Example |
|--------|-------------|-----------------|---------|
| **Find** | Check if value exists | O(n) | `list.find(20)` |
| **Get at Index** | Get value at position | O(n) | `list.getAt(1)` |

**Code**:
```javascript
find(value) {
  let current = this.head;
  while (current) {
    if (current.value === value) return true;
    current = current.next;
  }
  return false;
}

getAt(index) {
  if (index < 0 || index >= this.size) return null;
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.value;
}
```

---

## **5. Doubly Linked List Operations**
### **Insertion/Deletion**
- **Insert/Delete at Head/Tail**: O(1) (with `head` and `tail` pointers).
- **Insert/Delete in Middle**: O(n) (traversal required).

**Code (Append)**:
```javascript
// Doubly Linked List append
append(value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this.size++;
}
```

---

## **6. Big O Summary**

| Operation | Singly Linked List | Doubly Linked List |
|-----------|--------------------|--------------------|
| Prepend   | O(1)               | O(1)               |
| Append    | O(1)*              | O(1)               |
| Insert/Delete at Head | O(1) | O(1) |
| Insert/Delete at Tail | O(n) | O(1) |
| Insert/Delete at Index | O(n) | O(n) |
| Search by Value | O(n) | O(n) |
| Access by Index | O(n) | O(n) |

_* With tail pointer._

---

## **7. Why Use Linked Lists?**
### **Use When:**
1. Frequent **insertions/deletions at the start** (better than arrays with O(1) time).
2. Dynamic size is needed (no pre-allocation).
3. Implementing stacks/queues (with head/tail pointers).

### **Avoid When:**
1. Frequent random access is needed (use arrays).
2. Memory efficiency is critical (pointers consume extra space).

---

## **8. Common Patterns**
### **Reverse a Linked List**
```javascript
reverse() {
  let prev = null;
  let current = this.head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.tail = this.head;
  this.head = prev;
}
```

### **Detect Cycle (Floyd’s Algorithm)**
```javascript
hasCycle() {
  let slow = this.head;
  let fast = this.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
```

### **Find Middle Node**
```javascript
findMiddle() {
  let slow = this.head;
  let fast = this.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value;
}
```

---

## **9. Gotchas**
1. **Edge Cases**:
   - Empty list (head/tail are `null`).
   - Single-node list (head and tail point to the same node).
   - Operations at head/tail.

2. **Memory Management**:
   - JavaScript lacks manual memory management, but `null` unused pointers to help garbage collection.

3. **Circular References**:
   - In circular linked lists, ensure traversal has an exit condition.

---

## **10. Comparison: Linked List vs Array**

| Feature | Linked List | Array |
|---------|-------------|-------|
| Insert/Delete at Start | O(1) | O(n) |
| Insert/Delete at End | O(1)* | O(1) (amortized) |
| Random Access | O(n) | O(1) |
| Memory Usage | Higher (pointers) | Lower |
| Cache Locality | Poor | Excellent |

---