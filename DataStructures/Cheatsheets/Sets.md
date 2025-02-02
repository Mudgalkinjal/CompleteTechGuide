# JavaScript Sets: Complete Guide

## **1. What is a Set?**
- **Collection of unique values** (no duplicates allowed).
- Values can be of **any type** (primitives, objects, etc.).
- **Insertion order** is preserved (ES6+).
- **Key Features**:
  - Fast existence checks (`has()` in **O(1)** average time).
  - Automatic deduplication.
  - Iterable via `for...of`, `forEach()`, etc.

---

## **2. Initialization & Syntax**
### **Create a Set**
```javascript
// Empty Set
const set1 = new Set();

// Initialize with values
const set2 = new Set([1, 2, 3, 2]); // {1, 2, 3} (duplicates removed)
const set3 = new Set("hello");      // {'h', 'e', 'l', 'o'}

// From an array (deduplicate)
const arr = [1, 2, 2, 3];
const set4 = new Set(arr);          // {1, 2, 3}
```

### **Key Properties**
```javascript
set.size; // Number of elements (O(1))
```

---

## **3. Core Methods (with Big O)**

| Method | Syntax | Description | Time Complexity | Example |
|--------|--------|-------------|-----------------|---------|
| `add()` | `set.add(value)` | Add a value to the Set | **O(1)** avg | `set.add(4)` → `{1, 2, 3, 4}` |
| `delete()` | `set.delete(value)` | Remove a value | **O(1)** avg | `set.delete(2)` → `true` |
| `has()` | `set.has(value)` | Check if value exists | **O(1)** avg | `set.has(2)` → `true` |
| `clear()` | `set.clear()` | Remove all elements | **O(n)** | `set.clear()` → `{}` |

---

## **4. Iteration Methods**
| Method | Syntax | Description | Time Complexity | Example |
|--------|--------|-------------|-----------------|---------|
| `forEach()` | `set.forEach((v) => {})` | Iterate values | **O(n)** | `set.forEach(v => console.log(v))` |
| `keys()` | `set.keys()` | Iterator of values | **O(n)** | `[...set.keys()]` → `[1, 2, 3]` |
| `values()` | `set.values()` | Alias for `keys()` | **O(n)** | Same as `keys()` |
| `entries()` | `set.entries()` | Iterator of `[value, value]` | **O(n)** | `[...set.entries()]` → `[[1,1], [2,2]]` |

---

## **5. Why Use Sets?**
### **Use Cases**:
1. **Remove duplicates** from arrays.
2. **Membership testing** (faster than arrays).
3. **Mathematical operations** (union, intersection, difference).
4. Tracking **unique events/items** (e.g., visited nodes in a graph).

### **Advantages**:
- **Uniqueness**: Automatically handles duplicate values.
- **Performance**: `has()`, `add()`, and `delete()` are O(1) on average.
- **Simplicity**: Cleaner than manual deduplication with arrays.

### **Avoid When**:
- You need key-value pairs (use `Map` or `Object`).
- Order matters but not uniqueness (use arrays).

---

## **6. Common Patterns**
### **1. Deduplicate an Array**
```javascript
const arr = [1, 2, 2, 3];
const uniqueArr = [...new Set(arr)]; // [1, 2, 3] (O(n))
```

### **2. Set Operations**
```javascript
// Union
const union = new Set([...setA, ...setB]); // O(m + n)

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x))); // O(n)

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x))); // O(n)

// Subset Check
const isSubset = [...setA].every(x => setB.has(x)); // O(n)
```

### **3. Track Unique Elements**
```javascript
const visited = new Set();
function process(item) {
  if (!visited.has(item)) {
    visited.add(item);
    // Process item
  }
}
```

---

## **7. Big O Summary**

| Operation | Method | Average Case | Worst Case |
|-----------|--------|--------------|------------|
| Add | `add()` | O(1) | O(n) |
| Delete | `delete()` | O(1) | O(n) |
| Check Existence | `has()` | O(1) | O(n) |
| Iteration | `forEach()`, `keys()`, etc. | O(n) | O(n) |
| Convert to Array | `[...set]` | O(n) | O(n) |

---

## **8. Gotchas**
1. **NaN Equality**:  
   ```javascript
   const set = new Set();
   set.add(NaN);
   set.has(NaN); // true (NaN === NaN is false, but Sets treat NaN as equal)
   ```

2. **Object References**:  
   Objects are compared by reference, not value:
   ```javascript
   const set = new Set();
   set.add({id: 1});
   set.has({id: 1}); // false (different object reference)
   ```

3. **Primitive Uniqueness**:  
   ```javascript
   const set = new Set();
   set.add(5);
   set.add("5"); // Treated as distinct (different types)
   ```

---

## **9. Performance Tips**
1. **Use Sets over Arrays** for frequent `includes()` checks (O(1) vs O(n)).
2. **Convert to Array** only when needed (e.g., for sorting).
3. **Prefer `Set` for large datasets** with uniqueness requirements.

---

## **10. Comparison: Set vs Array vs Object**

| Feature | Set | Array | Object |
|---------|-----|-------|--------|
| Uniqueness | ✅ | ❌ | ❌ (keys only) |
| Key Types | Any | Indexes | String/Symbol |
| Order | Insertion Order | Index Order | Insertion Order (ES6+) |
| Use Case | Unique elements | Ordered elements | Key-value pairs |

---

## **11. Edge Cases**
- **Empty Set**: `set.size === 0`.
- **Primitive vs Object**: `5` vs `"5"` vs `{value: 5}`.
- **Undefined/Null**: Can be stored in Sets.

---

## **12. Real-World Examples**
1. **Tag Management**: Track unique tags for a blog post.
2. **Graph Traversal**: Track visited nodes in BFS/DFS.
3. **Form Validation**: Ensure selected options are unique.

---