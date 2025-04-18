# JavaScript Utility Patterns & Closure Practice

## 1. Emitter Class with Unsubscribe

Implements a pub-sub pattern. `subscribe(event, callback)` registers a callback and returns an object with an `unsubscribe()` method. `emit(event, data)` calls all callbacks for that event.

```javascript
class Emitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const listeners = this.events.get(eventName);
    listeners.push(callback);
    return {
      unsubscribe: () => {
        const idx = listeners.indexOf(callback);
        if (idx !== -1) {
          listeners.splice(idx, 1);
        }
      }
    };
  }

  emit(eventName, data) {
    const listeners = this.events.get(eventName);
    if (listeners) {
      listeners.forEach(cb => cb(data));
    }
  }
}
```

## 2. createGreeter (Closure)

Returns an object with a method that greets using a captured variable.

```javascript
const createGreeter = (name) => {
  return {
    funcInner() {
      console.log(`Hello ${name}`);
    }
  };
};
```

## 3. createCounter (Closure)

Returns an object with `increment()` and `reset()` methods, maintaining internal `count` state.

```javascript
const createCounter = (count) => {
  return {
    increment: () => {
      count++;
      console.log("Incremented to:", count);
      return count;
    },
    reset: () => {
      count = 0;
      console.log("Reset to:", count);
      return count;
    }
  };
};
```

## 4. once(fn)

Returns a version of a function that can only be called once. Result is cached and reused on future calls.

```javascript
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}
```

## 5. onceAsync(fn)

Handles async functions that should only be called once. All callers receive the same resolved promise.

```javascript
function onceAsync(fn) {
  let called = false;
  let promise;
  return function (...args) {
    if (!called) {
      promise = fn(...args);
      called = true;
    }
    return promise;
  };
}
```

## 6. createTimer (with stop)

Starts a timer that runs every `delay` ms. Returns an object with a `stop()` method to cancel it.

```javascript
const createTimer = (delay, callback) => {
  const timer = setInterval(() => {
    callback();
  }, delay);
  return {
    stop() {
      clearInterval(timer);
    }
  };
};
```

## 7. Exclude Keys from a Map

Filters out keys from a Map using a `Set`.

```javascript
const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4]
]);

const exclude = new Set(['b', 'd']);

const newMap = new Map(
  [...map].filter(([key]) => !exclude.has(key))
);
```