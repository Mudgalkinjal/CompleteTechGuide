# Index

## JavaScript Basics
1. [What is the difference between `map` and `forEach` in JavaScript?](#1-what-is-the-difference-between-map-and-foreach-in-javascript)
2. [JavaScript functions: `reduce`, `find`, `findIndex`, `filter`, `some`, `every`, `map`, `forEach`](#2-javascript-functions-reduce-find-findindex-filter-some-every-map-foreach)
3. [Arrow functions](#3-arrow-functions)
4. [Includes](#4-includes)
5. [Difference Between Object and Array](#5-difference-between-object-and-array)
6. [String Functions](#6-string-functions)

## Advanced JavaScript Concepts
7. [What is the concept of Destructuring Assignment?](#7-what-is-the-concept-of-destructuring-assignment)
8. [Abstract Class and Variables](#8-abstract-class-and-variables)
9. [Memoization](#9-memoization)
10. [When is a good time not to use `"use strict"` in JavaScript?](#10-when-is-a-good-time-not-to-use-use-strict-in-javascript)

## Asynchronous JavaScript
11. [Event Loops](#11-event-loops)
12. [Asynchronous Methods](#12-asynchronous-methods)
13. [Promises](#13-promises)
14. [Difference Between Promises and Callbacks](#14-difference-between-promises-and-callbacks)
15. [Promisify a Function](#15-promisify-a-function)
16. [Fetch](#16-fetch)
17. [Async/Await](#17-asyncawait)
18. [Callbacks](#18-callbacks)
19. [How is asynchronous code carried out on the website?](#19-how-is-asynchronous-code-carried-out-on-the-website)
20. [XHR (XMLHttpRequest)](#20-xhr-xmlhttprequest)

## Timers and Scheduling
21. [`setTimeout`](#21-settimeout)
22. [`setInterval`](#22-setinterval)
23. [`clearTimeout`](#23-cleartimeout)
24. [`clearInterval`](#24-clearinterval)
25. [`setTimeout` and `setInterval`](#25-settimeout-and-setinterval)

## Event Handling
26. [Event Listeners](#26-event-listeners)
27. [Event Propagation](#27-event-propagation)

## DOM Manipulation
28. [Manipulate the DOM Tree](#28-manipulate-the-dom-tree)

## Data Structures
29. [Maps Over Objects](#29-maps-over-objects)
30. [Sets Over Arrays](#30-sets-over-arrays)

## Object-Oriented Programming
31. [Design a Class and Implement Its Methods](#31-design-a-class-and-implement-its-methods)
32. [Code an Observer Pattern and Discuss Edge Cases](#32-code-an-observer-pattern-and-discuss-edge-cases)

## Functional Programming
33. [What is Functional Programming?](#33-what-is-functional-programming)

## Rendering and Web Performance
34. [What Happens When You Type a URL?](#34-what-happens-when-you-type-a-url)
35. [General HTML, CSS, and Interaction Between Client and Servers During Render](#35-general-html-css-and-interaction-between-client-and-servers-during-render)

## Networking and APIs
36. [What Are RESTful Services?](#36-what-are-restful-services)
37. [Explain Common HTTP Methods](#37-explain-common-http-methods)

## Security and Optimization
38. [Sanitization](#38-sanitization)

## Multithreading in JavaScript
39. [Web Workers](#39-web-workers)

## Miscellaneous
40. [JS Animation](#40-js-animation)
41. [Emitter Function in JavaScript](#41-emitter-function-in-javascript)
42. [Difference Between Class and ID](#42-difference-between-class-and-id)


### 

# JavaScript Basics  

## 1\. What is the difference between `map` and `forEach` in JavaScript?  - **`map`**: Creates a new array with the results of applying a function to each element. - **`forEach`**: Executes a function for each element but does not return a new array.  

### Example: 
```javascript
const numbers = [1, 2, 3];

// Using map
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9]

// Using forEach
numbers.forEach(num => console.log(num)); // Logs 1, 2, 3
```

* * *

## 2\. JavaScript Functions: `reduce`, `find`, `findIndex`, `filter`, `some`, `every`, `map`, `forEach`

### Function Overview:

### | Function | Purpose |
| --- | --- |
| reduce | Reduces an array to a single value. |
| find | Returns the first element that matches a condition. |
| findIndex | Returns the index of the first element that matches a condition. |
| filter | Returns a new array with elements that pass a condition. |
| some | Returns true if at least one element matches a condition. |
| every | Returns true if all elements match a condition. |
| map | Transforms each element and returns a new array. |
| forEach | Executes a function for each element but does not return a new array. |

### Examples:

### 



```javascript
const arr = [1, 2, 3, 4];

// reduce
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// find
const firstEven = arr.find(num => num % 2 === 0);
console.log(firstEven); // 2

// findIndex
const firstEvenIndex = arr.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // 1

// filter
const evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// some
const hasOdd = arr.some(num => num % 2 !== 0);
console.log(hasOdd); // true

// every
const allPositive = arr.every(num => num > 0);
console.log(allPositive); // true

// map
const squared = arr.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]

// forEach
arr.forEach(num => console.log(num)); // Logs 1, 2, 3, 4
```
* * *

## 3\. Arrow Functions

### 

*   **Arrow functions** are a shorter way to define functions.
*   They do not bind their own `this`.

### Example:

### 



```javascript
// Traditional function
function greet(name) {
  return `Hello, ${name}`;
}

// Arrow function
const greetArrow = name => `Hello, ${name}`;

console.log(greet("John")); // Hello, John
console.log(greetArrow("John")); // Hello, John
```

* * *

## 4\. Includes

### 

*   **`includes`** checks whether an array or string contains a specific value.

### Example:

### 



```javascript
// On arrays
const numbers = [1, 2, 3];
console.log(numbers.includes(2)); // true

// On strings
const text = "JavaScript";
console.log(text.includes("Script")); // true
```

* * *

## 5\. Difference Between Object and Array

### | Feature | Object | Array |
| --- | --- | --- |
| Structure | Key-value pairs. | Ordered collection of elements. |
| Access | Access by key: obj.key. | Access by index: arr[0]. |
| Use Case | Represent entities with properties. | Store lists or collections of items. |

### Example:

### 


```javascript
// Object
const person = { name: "John", age: 30 };
console.log(person.name); // John

// Array
const colors = ["red", "green", "blue"];
console.log(colors[0]); // red
```

* * *

## 6\. String Functions

### Common Functions:

### | Function | Description | Example |
| --- | --- | --- |
| slice | Extracts part of a string. | "Hello".slice(1, 4) → "ell" |
| split | Splits string into an array. | "a,b,c".split(",") → ["a", "b", "c"] |
| replace | Replaces part of a string. | "foo".replace("o", "x") → "fxo" |
| toUpperCase | Converts to uppercase. | "abc".toUpperCase() → "ABC" |
| toLowerCase | Converts to lowercase. | "ABC".toLowerCase() → "abc" |

### Example:

### 



```javascript
const text = "Hello World";

// slice
console.log(text.slice(0, 5)); // Hello

// split
console.log(text.split(" ")); // ["Hello", "World"]

// replace
console.log(text.replace("World", "JavaScript")); // Hello JavaScript

// toUpperCase
console.log(text.toUpperCase()); // HELLO WORLD

// toLowerCase
console.log(text.toLowerCase()); // hello world
```

###

# Advanced JavaScript Concepts  

## 1. What is the concept of Destructuring Assignment?  

- **Destructuring assignment** allows you to extract values from arrays or objects into individual variables.  

### Examples:  

#### Array Destructuring:  
```javascript
const arr = [10, 20, 30];
const [first, second] = arr;
console.log(first); // 10
console.log(second); // 20
```

#### Object Destructuring:

### 



```javascript
const person = { name: "John", age: 30 };

const { name, age } = person;
console.log(name); // John
console.log(age); // 30
```

#### Nested Destructuring:

### 



```javascript
const user = { id: 1, details: { username: "john" } };

const { details: { username } } = user;
console.log(username); // john
```

* * *

## 2\. Abstract Class and Variables

### 

*   **Abstract Classes** are not natively supported in JavaScript but can be simulated using base classes.
*   They serve as blueprints and cannot be instantiated directly.

### Example:

### 



```javascript
class AbstractClass {
  constructor() {
    if (new.target === AbstractClass) {
      throw new Error("Cannot instantiate an abstract class.");
    }
  }

  abstractMethod() {
    throw new Error("Abstract method must be implemented in derived class.");
  }
}

class ConcreteClass extends AbstractClass {
  abstractMethod() {
    return "Implemented!";
  }
}

const instance = new ConcreteClass();
console.log(instance.abstractMethod()); // Implemented!
```

* * *

## 3\. Memoization

### 

*   **Memoization** is a technique to optimize performance by storing the results of expensive function calls and reusing them when the same inputs occur.

### Example:

### 



```javascript
const memoize = (fn) => {
  const cache = {};
  return (arg) => {
    if (cache[arg]) {
      return cache[arg]; // Return cached result
    }
    const result = fn(arg);
    cache[arg] = result; // Store result in cache
    return result;
  };
};

const factorial = memoize((n) => (n <= 1 ? 1 : n * factorial(n - 1)));

console.log(factorial(5)); // 120
console.log(factorial(5)); // Cached result: 120
```

* * *

## 4\. When is a good time not to use `"use strict"` in JavaScript?

### 

*   **"use strict"** enforces stricter parsing and error handling, preventing certain bad practices.
*   However, you may choose not to use it:
    *   When working with **legacy code** or older libraries that rely on non-strict mode.
    *   When you need to **prototype quickly** and do not want strict rules to interrupt.
    *   In **global scripts** where strict mode might unintentionally break third-party code.

### Example Without "use strict":

### 



```javascript
// Legacy code that depends on implicit globals
someVariable = 10; // No error in non-strict mode
console.log(someVariable); // 10
```

### Example With "use strict":

### 



```javascript
"use strict";

// Will throw an error because `someVariable` is not declared
someVariable = 10; // ReferenceError: someVariable is not defined
```


### 

# Asynchronous JavaScript

## 1. Event Loops

- **Definition**: The event loop is the mechanism that handles the execution of asynchronous code in JavaScript.
- **How it works**:  
  1. Executes synchronous code in the call stack.  
  2. Moves asynchronous tasks (e.g., `setTimeout`, Promises) to the task queue.  
  3. When the call stack is empty, tasks from the queue are moved to the stack.  

### Example:
```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
// Output: Start → End → Promise → Timeout
```

* * *

## 2\. Asynchronous Methods

### 

*   Common asynchronous methods include:
    *   `setTimeout`
    *   `setInterval`
    *   Promises (`fetch`, `async/await`)
    *   `XMLHttpRequest`
*   These methods allow JavaScript to handle tasks like API calls, timers, and user interactions without blocking the main thread.

* * *

## 3\. Promises

### 

*   A **Promise** represents a value that might be available now, in the future, or never.
*   **States**:
    1.  `Pending`: The initial state.
    2.  `Fulfilled`: The operation was successful.
    3.  `Rejected`: The operation failed.

### Example:

### 

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched!"), 1000);
});

fetchData.then(console.log).catch(console.error);
// Output after 1 second: Data fetched!
```



* * *

## 4\. Difference Between Promises and Callbacks

### 

| Feature | Promises | Callbacks |
| --- | --- | --- |
| Readability | Cleaner with .then() and .catch(). | Can result in "callback hell". |
| Error Handling | Centralized error handling with .catch(). | Requires handling in every callback layer. |
| Chaining | Supports easy chaining. | Difficult to chain multiple operations. |

### Examples:

#### Callback Example:

### 



```javascript
function fetchDataCallback(callback) {
  setTimeout(() => callback(null, "Data"), 1000);
}

fetchDataCallback((err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

#### Promise Example:

### 


```javascript
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data"), 1000);
  });
}

fetchDataPromise().then(console.log).catch(console.error);
```


* * *

## 5\. Promisify a Function

### 

*   Converts a callback-based function into a Promise-based one.

### Example:

### 

```javascript
const fs = require('fs');

const readFile = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

readFile('example.txt')
  .then(console.log)
  .catch(console.error);
```



* * *

## 6\. Fetch

### 

*   **`fetch`** is a built-in JavaScript API for making HTTP requests.
*   Returns a Promise.

### Example:

### 

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  ```

* * *

## 7\. Async/Await

### 

*   **Async/Await** is syntactic sugar for Promises, providing a cleaner way to write asynchronous code.

### Example:

### 

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

* * *

## 8\. Callbacks

### 

*   A **callback** is a function passed as an argument to another function, executed later.

### Example:

### 

```javascript
function fetchData(callback) {
  setTimeout(() => callback("Data fetched!"), 1000);
}

fetchData((data) => console.log(data));
// Output after 1 second: Data fetched!
```

* * *

## 9\. How Is Asynchronous Code Carried Out on a Website?

### 

*   JavaScript handles asynchronous tasks using:
    *   **Web APIs**: Timers, `fetch`, DOM events.
    *   **Event Loop**: Coordinates execution of tasks.
    *   **Task Queues**: Stores asynchronous callbacks.
    *   **Promises**: Allows chaining of asynchronous operations.
*   Example workflows:
    *   Fetching data from an API.
    *   Handling user events like clicks without blocking other tasks.

* * *

## 10\. XHR (XMLHttpRequest)

### 

*   An older method for making HTTP requests in JavaScript.
*   Provides more control but is less modern compared to `fetch`.

### Example:

### 

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error('Request failed');
  }
};

xhr.send();
```

# Timers and Scheduling

## 1. `setTimeout`

- **Definition**: Executes a function after a specified delay.
- **Returns**: A unique ID (timeout ID) that can be used to cancel it.

### Example:
```javascript
const timeoutId = setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```
* * *

## 2\. `setInterval`

### 

*   **Definition**: Repeatedly executes a function at specified intervals.
*   Returns a unique ID (interval ID) that can be used to stop it.

### Example:

### 

```javascript
const intervalId = setInterval(() => {
  console.log("Executed every 1 second");
}, 1000);
```


* * *

## 3\. `clearTimeout`

### 

*   **Definition**: Cancels a timer set with `setTimeout`.

### Example:

### 

```javascript
const timeoutId = setTimeout(() => {
  console.log("This will not execute");
}, 2000);

clearTimeout(timeoutId); // Cancels the timeout
```

* * *

## 4\. `clearInterval`

### 

*   **Definition**: Stops an interval set with `setInterval`.

### Example:

### 

```javascript
const intervalId = setInterval(() => 
{   console.log("This will stop after 3 seconds"); 

}, 1000); 

setTimeout(() => 
{   clearInterval(intervalId);
}
 // Stops the interval after 3 seconds }, 3000);`
 ```

* * *

## 5\. `setTimeout` and `setInterval`

### 

*   **Key Differences**:
    *   `setTimeout`: Executes a function **once** after a delay.
    *   `setInterval`: Executes a function **repeatedly** at regular intervals.

### Combined Example:

### 


```javascript
// setTimeout example 
setTimeout(() => {   
    console.log("Executed once after 2 seconds"); 
}, 2000);  
// setInterval example 

const intervalId = setInterval(() => {   
    console.log("Repeating every 1 second"); 
}, 1000);  

setTimeout(() => {   
    clearInterval(intervalId);
} // Stops the interval after 5 seconds }, 5000);`
```

* * *

# Event Handling

## 1\. Event Listeners

### 

*   **Definition**: Attach a function to an element to handle specific events (e.g., `click`, `mouseover`).

### Example:

### 

```javascript

const button = document.querySelector("button");  
button.addEventListener("click", () => {   
    console.log("Button clicked!"); 
});
```

*   **Remove Event Listener**
    
    ```javascript

    const handleClick = () => console.log("Clicked!");  
    button.addEventListener("click", handleClick); 
    button.removeEventListener("click", handleClick); // Removes the event listener
    ```
    

* * *

## 2\. Event Propagation

### 

*   **Definition**: Describes the flow of events through the DOM during an event.

### Phases:

### 

1.  **Capturing Phase**: Event travels from the root to the target.
2.  **Target Phase**: Event reaches the target element.
3.  **Bubbling Phase**: Event bubbles back up to the root.

### Methods:

### 

*   **`stopPropagation()`**: Stops the event from propagating further.
*   **`preventDefault()`**: Prevents the default action associated with the event.

### Example:

### 


```javascript

const parent = document.querySelector("#parent"); 
const child = document.querySelector("#child");  
// Parent event listener 
parent.addEventListener("click", () => {   
    console.log("Parent clicked (bubbling)"); 
});  

// Child event listener 
child.addEventListener("click", (e) => {   
    console.log("Child clicked");   
    e.stopPropagation(); 
    // Stops event propagation 
});  // Prevent default action 

child.addEventListener("click", (e) => {   
    e.preventDefault(); 
    // Prevents default action (e.g., link navigation) 
});
```

### Example HTML:

### 

```javascript

<div id="parent" style="padding: 20px; background-color: lightblue;">   Parent   <button id="child">Child Button</button> </div>
```

### 


# DOM Manipulation  

## 1. Manipulate the DOM Tree  - **Definition**: The DOM (Document Object Model) is a tree structure representing the HTML document. JavaScript allows us to manipulate this structure dynamically.  

### Common Methods: | Method                    | Description                           | |---------------------------|---------------------------------------| | `querySelector`           | Selects the first matching element.  | | `querySelectorAll`        | Selects all matching elements.       | | `createElement`           | Creates a new element.               | | `appendChild`             | Appends an element as a child.       | | `removeChild`             | Removes a child element.             | | `textContent` / `innerHTML` | Modifies the content of an element. |  

### Example: 


```javascript 

// Select an element 
const div = document.querySelector("div");  
// Add a new paragraph 
const paragraph = document.createElement("p"); 
paragraph.textContent = "This is a new paragraph."; 
div.appendChild(paragraph);  
// Remove the paragraph div.removeChild(paragraph);
```

* * *

# Data Structures

## 2\. Maps Over Objects

### 

| Feature | Map | Object |
| --- | --- | --- |
| Key Types | Any type (objects, functions, etc.). | Strings or symbols only. |
| Iteration | Easier with Map methods like .forEach. | Requires Object.keys or for...in. |
| Performance | Optimized for frequent additions/removals. | Slower for frequent operations. |

### Example:

### 

```javascript

// Using a Map 
const map = new Map(); 
map.set("key1", "value1"); 
map.set({ id: 1 }, "value2"); 
console.log(map.get("key1")); 
// value1  
// Using an Object 
const obj = { key1: "value1" }; 
console.log(obj.key1); 
// value1`
```

* * *

## 3\. Sets Over Arrays

### 

| Feature | Set | Array |
| --- | --- | --- |
| Unique Values | Ensures all elements are unique. | Allows duplicate values. |
| Performance | Faster for checking existence. | Slower for includes checks. |
| Methods | add, delete, has, etc. | Extensive array manipulation. |

### Example:

### 

```javascript

// Using a Set 
const set = new Set([1, 2, 2, 3]); 
console.log(set); 
// {1, 2, 3}  
// Using an Array 
const arr = [1, 2, 2, 3]; 
console.log(arr); 
// [1, 2, 2, 3]
```


* * *

# Object-Oriented Programming

## 4\. Design a Class and Implement Its Methods

### Example:

### 

```javascript

class Calculator {   
    add(a, b) {     
        return a + b;   
    }    
    
    subtract(a, b) {     
        return a - b;   
    } 
}  
const calc = new Calculator(); 
console.log(calc.add(5, 3)); 
// 8 console.log(calc.subtract(5, 3)); 
// 2
```

* * *

## 5\. Code an Observer Pattern and Discuss Edge Cases

### Example:

### 

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log("Data received:", data);
  }
}

// Usage
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello Observers!");

// Unsubscribe an observer
subject.unsubscribe(observer1);
subject.notify("Only observer2 will receive this.");
```

### Edge Cases:

### 

*   Avoid infinite loops if an observer modifies the subject during notification.
*   Ensure proper handling of unsubscribed observers.

* * *

# Functional Programming

## 6\. What is Functional Programming?

### 

*   **Definition**: Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state or mutable data.

### Core Principles:

### 

1.  **Pure Functions**: No side effects; same input always gives the same output.
2.  **Immutability**: Data is never changed; new data is created instead.
3.  **First-Class Functions**: Functions are treated as values.

### Example:

### 

```javascript

// Pure function 
const add = (a, b) => a + b; 
console.log(add(2, 3)); 
// 5
```

* * *

# Rendering and Web Performance

## 7\. What Happens When You Type a URL?

### 

1.  **DNS Lookup**: The domain name is resolved to an IP address.
2.  **TCP Handshake**: A connection is established between the client and server.
3.  **HTTP Request**: The client sends a request for the resource.
4.  **Server Response**: The server sends the requested resource (e.g., HTML, CSS, JS).
5.  **Rendering**: The browser parses and renders the HTML, applies CSS, and executes JavaScript.

* * *

## 8\. General HTML, CSS, and Interaction Between Client and Servers During Render

### 

*   **HTML**: Provides the structure of the page.
*   **CSS**: Styles the HTML elements.
*   **JavaScript**: Adds interactivity and dynamic behavior.
*   **Client-Server Interaction**:
    *   Client sends HTTP requests (e.g., for resources like images, stylesheets).
    *   Server responds with the requested resources.
    *   Browser renders the resources in the DOM.

* * *

# Networking and APIs

## 9\. What Are RESTful Services?

### 

*   **REST (Representational State Transfer)**: Architectural style for APIs.
*   **Key Principles**:
    1.  Stateless communication.
    2.  Use of standard HTTP methods.
    3.  Resources are identified by URIs.

* * *

## 10\. Explain Common HTTP Methods

### 

| Method | Description | Example |
| --- | --- | --- |
| GET | Retrieve data from the server. | GET /users |
| POST | Send new data to the server. | POST /users with { name: "John" } |
| PUT | Update an existing resource. | PUT /users/1 |
| DELETE | Remove a resource. | DELETE /users/1 |

* * *

# Security and Optimization

## 11\. Sanitization

### 

*   **Definition**: Sanitization removes or escapes malicious user inputs to prevent security vulnerabilities (e.g., XSS attacks).

### Example:

### 

```javascript

const sanitizedInput = DOMPurify.sanitize(userInput); 
document.body.innerHTML = sanitizedInput;

```

* * *

# Multithreading in JavaScript

## 12\. Web Workers

### 

*   **Definition**: Web Workers allow JavaScript code to run in the background, separate from the main thread.

### Example:

### 

```javascript

// worker.js 
onmessage = (e) => {   
    postMessage(e.data * 2); 
};  

// main.js 
const worker = new Worker("worker.js"); 
worker.postMessage(5); 
worker.onmessage = (e) => console.log(e.data); 
// Output: 10
```

* * *

# Miscellaneous

## 13\. JS Animation

### 

*   **Definition**: Use `requestAnimationFrame` for smooth animations.

### Example:

### 

```javascript

const box = document.querySelector(".box"); 
let position = 0;  
function animate() {   
    if (position < 100) 
    {     
        position++;     
        box.style.left = position + "px";     
        requestAnimationFrame(animate);   
    } 
}  
animate();
```

* * *

## 14\. Emitter Function in JavaScript

### Example:

### 

```javascript

const EventEmitter = require("events"); 
const emitter = new EventEmitter();  
emitter.on("event", () => {   
    console.log("Event triggered"); 
});  

emitter.emit("event");
```

* * *

## 15\. Difference Between Class and ID

### 

| Feature | Class | ID |
| --- | --- | --- |
| Selector | .className | #idName |
| Reusability | Can be used for multiple elements. | Must be unique in a document. |

### Example:

### 

```javascript

<div class="box"></div> 
<div id="uniqueBox"></div>
```
