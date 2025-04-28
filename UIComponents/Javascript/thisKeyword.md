
* * *

### 1\. “Method lost” — `this` evaporates when you detach

```js
const user = {
  name: "Kinjal",
  greet() { console.log(`Hi, I’m ${this.name}`); }
};

const f = user.greet;   // ❌ implicit rule is gone
f();                    // undefined (or error in strict mode)

const fixed = user.greet.bind(user); // ✅ lock it
fixed();                // Hi, I’m Kinjal
```

_Why it matters:_ a common interview bug when passing methods as callbacks.

* * *

### 2\. `setTimeout` – arrow vs regular

```js
function Counter() {
  this.count = 0;

  setInterval(function () {   // regular
    console.log("regular:", this.count); // NaN or error
  }, 1000);

  setInterval(() => {         // arrow inherits
    console.log("arrow:", ++this.count); // 1,2,3…
  }, 1000);
}
new Counter();
```

_Rule-of-thumb:_ use arrows inside constructors when you want to keep the instance `this`.

* * *

### 3\. Using `thisArg` with array methods

```js
const bag = {
  factor: 2,
  nums: [1, 2, 3],
  doubleAll() {
    return this.nums.map(function (n) {
      return n * this.factor;          // needs thisArg
    }, this);                          // ← pass it here
  }
};
console.log(bag.doubleAll()); // [2, 4, 6]
```

(Arrow would work too, but `thisArg` pops up in interviews.)

* * *

### 4\. Arrow as a class field vs prototype method

```js
class Greeter {
  name = "Kinjal";

  say1() { console.log(this.name); }   // prototype method

  say2 = () => console.log(this.name); // arrow bound per-instance
}

const g = new Greeter();
const { say1, say2 } = g;

say1();   // undefined  (lost implicit binding)
say2();   // Kinjal     (arrow kept lexical this)
```

Modern React components often use the arrow-property pattern.

* * *

### 5\. Closure with private state

```js
function makeOnce(fn) {
  let called = false, result;
  return function (...args) {
    if (!called) { result = fn.apply(this, args); called = true; }
    return result;
  };
}

const initSDK = makeOnce((key) => { console.log("Init with", key); });
initSDK("ABC"); // runs
initSDK("XYZ"); // ignored, but keeps same this if needed
```

_Shows:_ closure + explicit `this` forwarding with `.apply`.

* * *

### 6\. Strict-mode global default

```js
(function () {
  'use strict';
  console.log(this);   // undefined
  function f() { console.log(this); }
  f();                 // undefined (not window)
})();
```

Demonstrates why relying on global `this` is brittle.

* * *

