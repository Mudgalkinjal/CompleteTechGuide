
# JavaScript Arrays: Complete Guide

## **1. What is an Array?**
- **Ordered collection** of elements (can hold mixed data types: numbers, strings, objects, etc.).
- **Zero-indexed**: Elements accessed via numeric indices (`arr[0]`).
- **Dynamic**: Size automatically adjusts as elements are added/removed.

---
2
## **2. Initialization & Syntax**
### **Create Arrays**
```javascript
// Literal (most common)
const arr1 = [];                    // Empty array
const arr2 = [1, "hello", true];    // With initial values

// Constructor (less common)
const arr3 = new Array();           // []
const arr4 = new Array(5);          // Creates 5 empty slots (length = 5)
const arr5 = new Array(1, 2, 3);    // [1, 2, 3]

// Static Methods
const arr6 = Array.from("abc");     // ["a", "b", "c"] (from iterable)
const arr7 = Array.of(5);           // [5] (avoids Array(5) pitfall)
```

### **Key Properties**
```javascript
arr.length; // Returns the number of elements (O(1))
```

---

## **3. Core Operations**
### **Access/Modify Elements**
```javascript
const arr = [10, 20, 30];
arr[0] = 100; // Modify index 0 (O(1))
console.log(arr[1]); // 20 (O(1))
```

### **Array Length**
```javascript
arr.length = 2; // Truncates array to 2 elements (mutates)
```

---

## **4. Array Methods (with Big O)**
### **Mutating Methods (Change Original Array)**

| Method | Syntax | Description | Time Complexity | Example |
|--------|--------|-------------|-----------------|---------|
| `push()` | `arr.push(...items)` | Add items to end | **O(1)** | `arr.push(4)` → `[1,2,3,4]` |
| `pop()` | `arr.pop()` | Remove last item | **O(1)** | `arr.pop()` → `[1,2]` |
| `unshift()` | `arr.unshift(...items)` | Add items to start | **O(n)** | `arr.unshift(0)` → `[0,1,2]` |
| `shift()` | `arr.shift()` | Remove first item | **O(n)** | `arr.shift()` → `[2,3]` |
| `splice()` | `arr.splice(start, deleteCount, ...items)` | Add/remove elements at index | **O(n)** | `arr.splice(1, 0, 99)` → Inserts 99 at index 1 |
| `reverse()` | `arr.reverse()` | Reverse array in-place | **O(n)** | `[1,2].reverse()` → `[2,1]` |
| `sort()` | `arr.sort([compareFn])` | Sort elements in-place | **O(n log n)** | `[3,1].sort((a,b) => a-b)` → `[1,3]` |
| `fill()` | `arr.fill(value, start, end)` | Fill array with value | **O(n)** | `new Array(3).fill(0)` → `[0,0,0]` |

### **Non-Mutating Methods (Return New Array)**

| Method | Syntax | Description | Time Complexity | Example |
|--------|--------|-------------|-----------------|---------|
| `concat()` | `arr.concat(arr2)` | Merge arrays | **O(m + n)** | `[1].concat([2])` → `[1,2]` |
| `slice()` | `arr.slice(start, end)` | Copy subarray | **O(k)** | `[1,2,3].slice(1)` → `[2,3]` |
| `map()` | `arr.map((val, idx) => {})` | Transform elements | **O(n)** | `[1,2].map(x => x*2)` → `[2,4]` |
| `filter()` | `arr.filter((val, idx) => {})` | Filter elements | **O(n)** | `[1,2,3].filter(x => x > 1)` → `[2,3]` |
| `reduce()` | `arr.reduce((acc, val) => {}, initial)` | Reduce to a single value | **O(n)** | `[1,2].reduce((a,b) => a+b, 0)` → `3` |
| `flat()` | `arr.flat(depth)` | Flatten nested arrays | **O(n)** | `[[1], [2]].flat()` → `[1,2]` |
| `flatMap()` | `arr.flatMap((val) => {})` | Map + flatten | **O(n)** | `[1,2].flatMap(x => [x, x])` → `[1,1,2,2]` |

---

## **5. Search & Query Methods**

| Method | Syntax | Description | Time Complexity | Example |
|--------|--------|-------------|-----------------|---------|
| `includes()` | `arr.includes(value)` | Check existence | **O(n)** | `[1,2].includes(2)` → `true` |
| `indexOf()` | `arr.indexOf(value)` | Find first index | **O(n)** | `[1,2,2].indexOf(2)` → `1` |
| `lastIndexOf()` | `arr.lastIndexOf(value)` | Find last index | **O(n)** | `[1,2,2].lastIndexOf(2)` → `2` |
| `find()` | `arr.find((val) => {})` | Find first match | **O(n)** | `[1,2,3].find(x => x > 1)` → `2` |
| `findIndex()` | `arr.findIndex((val) => {})` | Find index of first match | **O(n)** | `[1,2,3].findIndex(x => x > 1)` → `1` |
| `every()` | `arr.every((val) => {})` | Test all elements | **O(n)** | `[2,4].every(x => x%2 === 0)` → `true` |
| `some()` | `arr.some((val) => {})` | Test at least one element | **O(n)** | `[1,2].some(x => x%2 === 0)` → `true` |

---

## **6. Why Use Arrays?**
### **Use Arrays When:**
1. You need **ordered elements** with index access (O(1) access by position).
2. You require built-in methods for iteration/manipulation (`map`, `filter`, `reduce`).
3. You want to store sequences of related data (e.g., a list of user names).

### **Avoid Arrays When:**
1. You need **key-value pairs** (use `Object` or `Map`).
2. You require **unique elements** (use `Set`).
3. You need **frequent insertions/deletions at the start** (consider linked lists).

---

## **7. Big O Summary Table**

| Operation | Method | Time Complexity |
|-----------|--------|-----------------|
| Access by Index | `arr[i]` | O(1) |
| Add/Remove End | `push()`, `pop()` | O(1) |
| Add/Remove Start | `unshift()`, `shift()` | O(n) |
| Add/Remove Middle | `splice()` | O(n) |
| Search by Value | `includes()`, `indexOf()` | O(n) |
| Sort | `sort()` | O(n log n) |
| Iteration | `forEach()`, `map()`, `filter()` | O(n) |
| Copy | `slice()`, `concat()`, `[...arr]` | O(n) |

---

## **8. Common Patterns**
### **Copy Array**
```javascript
const copy1 = [...arr];       // Spread operator (O(n))
const copy2 = arr.slice();    // slice() (O(n))
```

### **Remove Duplicates**
```javascript
const unique = [...new Set(arr)]; // O(n)
```

### **Flatten Nested Arrays**
```javascript
const flat = arr.flat(Infinity); // O(n)
```

### **Initialize Range**
```javascript
const range = Array.from({length: 5}, (_, i) => i); // [0,1,2,3,4]
```

---

## **9. Gotchas**
1. **Sparse Arrays**:  
   ```javascript
   const arr = [1,,3]; // Empty slots are `undefined`
   arr.length; // 3
   ```

2. **Sorting Numbers**:  
   ```javascript
   [10, 2, 1].sort(); // Lexicographical sort → [1, 10, 2]
   [10, 2, 1].sort((a, b) => a - b); // Correct numeric sort → [1, 2, 10]
   ```

3. **Reference Types**:  
   Arrays store references for objects, so duplicates are shallow:
   ```javascript
   const arr = [{id: 1}];
   const copy = [...arr];
   copy[0].id = 99; // Affects original array’s object!
   ```

---

