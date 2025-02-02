# JavaScript HashMaps (Maps): Complete Guide

## **1. What is a HashMap?**
- **Key-value pairs** (like dictionaries).
- **Keys are unique**: Each key maps to exactly one value.
- **Fast lookups**: Average **O(1)** time for get/set/delete (worst-case O(n) due to collisions).
- **Implementation**: Use JavaScript’s `Map` (preferred) or `Object` for simple cases.

---

## **2. Initialization & Syntax**
### **Create a Map**
```javascript
// Using Map constructor
const map = new Map(); // Empty Map

// Initialize with key-value pairs
const map2 = new Map([
  ['key1', 'value1'],
  [2, 'value2'],
  [{ id: 3 }, 'value3'] // Objects can be keys!
]);

// From Object (caution: keys converted to strings)
const obj = { a: 1, b: 2 };
const map3 = new Map(Object.entries(obj)); // [['a', 1], ['b', 2]]
```

### **Key Types**
- Maps allow **any data type** as keys (objects, numbers, strings, etc.).
- Objects only allow **strings/symbols** as keys.

---

## **3. Core Methods (with Big O)**

| Method | Syntax | Description | Time Complexity | Example |
|--------|--------|-------------|-----------------|---------|
| `set()` | `map.set(key, value)` | Add/update key-value pair | **O(1)** avg | `map.set('name', 'Alice')` |
| `get()` | `map.get(key)` | Get value by key | **O(1)** avg | `map.get('name')` → `'Alice'` |
| `has()` | `map.has(key)` | Check if key exists | **O(1)** avg | `map.has('name')` → `true` |
| `delete()` | `map.delete(key)` | Remove key-value pair | **O(1)** avg | `map.delete('name')` → `true` |
| `clear()` | `map.clear()` | Remove all entries | **O(n)** | `map.clear()` |
| `size` | `map.size` | Get number of entries | **O(1)** | `map.size` → `3` |

---

## **4. Iteration Methods**

| Method | Syntax | Description | Time Complexity | Example |
|--------|--------|-------------|-----------------|---------|
| `forEach()` | `map.forEach((value, key) => {})` | Iterate entries | **O(n)** | `map.forEach((v, k) => console.log(k, v))` |
| `keys()` | `map.keys()` | Get iterator of keys | **O(n)** | `[...map.keys()]` → `['key1', 2, {id:3}]` |
| `values()` | `map.values()` | Get iterator of values | **O(n)** | `[...map.values()]` → `['value1', 'value2', 'value3']` |
| `entries()` | `map.entries()` | Get iterator of [key, value] pairs | **O(n)** | `[...map.entries()]` → Original entries |

---

## **5. Why Use HashMaps?**
### **Use Maps When:**
1. **Fast key-based access** is needed (O(1) average for get/set/delete).
2. Keys are **non-strings** (e.g., objects, numbers).
3. You need to preserve **insertion order** (Maps maintain order; Objects do not).
4. Frequent additions/deletions (better performance than Objects).

### **Use Objects When:**
1. Simple key-value storage with string/symbol keys.
2. JSON serialization is needed.
3. Methods/prototypes are required (e.g., `obj.hasOwnProperty`).

---

## **6. Big O Summary**

| Operation | Method | Average Case | Worst Case |
|-----------|--------|--------------|------------|
| Insert/Update | `set()` | O(1) | O(n) |
| Lookup | `get()` | O(1) | O(n) |
| Delete | `delete()` | O(1) | O(n) |
| Check Existence | `has()` | O(1) | O(n) |
| Iteration | `forEach()`, `keys()`, etc. | O(n) | O(n) |

---

## **7. Common Patterns**
### **Merge Two Maps**
```javascript
const map1 = new Map([['a', 1]]);
const map2 = new Map([['b', 2]]);
const merged = new Map([...map1, ...map2]); // O(n + m)
```

### **Convert to Array**
```javascript
// Keys/values/entries to arrays
const keys = [...map.keys()]; // O(n)
const values = [...map.values()]; // O(n)
const entries = [...map.entries()]; // O(n)
```

### **Filter Entries**
```javascript
const filtered = new Map(
  [...map].filter(([key, value]) => value > 10) // O(n)
);
```

### **Clone a Map**
```javascript
const copy = new Map(map); // O(n)
```

---

## **8. Gotchas**
1. **Key Comparison**:  
   Maps use **strict equality** (`===`) for keys, except `NaN`:
   ```javascript
   map.set(NaN, 'test');
   map.get(NaN); // 'test' (NaN === NaN is false, but Map treats NaN as equal)
   ```

2. **Object Keys**:  
   Objects as keys are compared by **reference**, not value:
   ```javascript
   const key1 = { id: 1 };
   const key2 = { id: 1 };
   map.set(key1, 'A');
   map.get(key2); // undefined (different reference)
   ```

3. **JSON Serialization**:  
   Maps can’t be directly serialized to JSON:
   ```javascript
   JSON.stringify([...map]); // Convert to array of entries first
   ```

---

## **9. Performance Tips**
1. **Prefer Maps over Objects** for frequent additions/deletions.
2. **Avoid using objects as keys** unless necessary (reference checks can be tricky).
3. **Use `Map` for large datasets** (better performance with dynamic keys).

---

## **10. Comparison: Map vs Object**

| Feature | Map | Object |
|---------|-----|--------|
| Key Types | Any type | String/Symbol |
| Insertion Order | Preserved | Not guaranteed |
| Size Property | `map.size` | Manual tracking |
| Default Keys | None | Prototype keys |
| Iteration | Built-in methods | `for...in`, `Object.keys()` |
| JSON Support | Manual conversion | Native |

---

