/*Challenge: Build a Constructor-Based EventEmitter Library

Use a function constructor and prototype methods to create a reusable EventEmitter class—no ES6 class syntax. This will let you explore:

new and how it sets up this

Storing per-instance state on this

Sharing methods on the prototype to save memory

Using apply/call to forward arguments and context

Removing listeners with correct binding

The power of instanceof checks

Requirements
Constructor:

function EventEmitter() {
  // initialize your listener storage on `this`
}
If called without new, throw an error:


if (!(this instanceof EventEmitter)) {
  throw new Error("Use `new EventEmitter()`");
}
Prototype Methods:

.on(eventName, listener)
Register listener for eventName. Return this for chaining.

.once(eventName, listener)
Register a wrapper so listener runs only once, then auto-removes itself.

.off(eventName, listener)
Remove a specific listener for eventName. Must handle listeners added via .once.

.emit(eventName, ...args)
Invoke all listeners for eventName with args, in the order registered.

.listenerCount(eventName)
Return the number of active listeners for eventName.

Behavioral Details:

Listeners should be stored in an object on this, e.g. { eventName: [fn1, fn2, …], … }.

.once must wrap the original listener in a function that:

Calls the listener

Removes itself via .off

Use fn.apply(this, args) inside emit so this inside each listener refers to the emitter instance.

Ensure .off only removes exact matches, even for wrapped “once” listeners.

All methods should be chainable:

emitter
  .on('msg', msgHandler)
  .once('connect', () => console.log('first connect'))
  .off('msg', msgHandler);
Testing Your Emitter:

// 1) Basic on/emit
const ee = new EventEmitter();
ee.on('ping', x => console.log('pong', x));
ee.emit('ping', 42);      // → pong 42

// 2) once
ee.once('init', () => console.log('init only once'));
ee.emit('init');          // → init only once
ee.emit('init');          // (no output)

// 3) off
function h(x) { console.log('h', x); }
ee.on('h', h).emit('h', 1);  // → h 1
ee.off('h', h).emit('h', 2); // (no output)

// 4) listenerCount
ee.on('a', () => {}).on('a', () => {});
console.log(ee.listenerCount('a')); // → 2
ee.off('a', arguments.callee);
console.log(ee.listenerCount('a')); // → 1
Why this rocks for exploring constructors:

You’ll force yourself to use new and see what happens if you don’t.

You’ll store per-emitter state on this vs. closed variables.

Prototype methods illustrate how to share code across all emitter instances.

You’ll wield apply to forward arbitrary arguments and bind listener context.

You’ll see instanceof EventEmitter in action.

Take your time—build it step by step, test each method, and you’ll get a deep, hands-on feel for JavaScript function constructors, this, prototype chains, and call/apply/bind.
*/




function EventEmitter() {
    if (!(this instanceof EventEmitter)) {
      throw new Error("Use new EventEmitter");
    }
    this._listeners = {};
  }
  
  EventEmitter.prototype.on = function(event, listener) {
    if (!this._listeners[event]) {
      this._listeners[event] = [];
    }
    this._listeners[event].push(listener);
    return this;
  };
  
  EventEmitter.prototype.off = function(event, listener) {
    const list = this._listeners[event];
    if (!list) {
      throw new Error(`No such event: ${event}`);
    }
    this._listeners[event] = list.filter(fn =>
      fn !== listener && fn._original !== listener
    );
    return this;
  };
  
  EventEmitter.prototype.emit = function(event, ...args) {
    const listeners = this._listeners[event];
    if (!listeners) {
      throw new Error(`No such event: ${event}`);
    }
    return listeners.map(fn => fn.apply(this, args));
  };
  
  EventEmitter.prototype.once = function(event, listener) {
    const wrapper = (...args) => {
      this.off(event, wrapper);
      return listener.apply(this, args);
    };
    wrapper._original = listener;
    return this.on(event, wrapper);
  };
  
  EventEmitter.prototype.listenerCount = function(event) {
    const list = this._listeners[event];
    return list ? list.length : 0;
  };
  
  const ee = new EventEmitter();
  
  function greet(name) {
    console.log(`Hello, ${name}!`);
    return `Greeted ${name}`;
  }
  
  ee
    .on('sayHello', greet)
    .once('sayHello', name => `One-time hi to ${name}`)
    .on('sayHello', name => console.log(`Another listener for ${name}`));
  
  console.log('Count before emit:', ee.listenerCount('sayHello'));
  console.log(ee.emit('sayHello', 'Alice'));
  console.log('Count after emit:', ee.listenerCount('sayHello'));
  
  
  //CODE WITH COMMENTS
  
  /*
  // Constructor function for EventEmitter.
  // Must be called with `new`, otherwise throws an error.
  function EventEmitter() {
    if (!(this instanceof EventEmitter)) {
      throw new Error("Use new EventEmitter");
    }
    // Internal storage for event listeners.
    this._listeners = {};
  }
  
  // Register a listener for a given event.
  // Returns `this` to allow method chaining.
  EventEmitter.prototype.on = function(event, listener) {
    if (!this._listeners[event]) {
      this._listeners[event] = [];              // create array if first listener
    }
    this._listeners[event].push(listener);      // add listener to the array
    return this;
  };
  
  // Remove a specific listener (or its once-wrapper) for an event.
  // Throws if the event doesn’t exist.
  // Returns `this` for chaining.
  EventEmitter.prototype.off = function(event, listener) {
    const list = this._listeners[event];
    if (!list) {
      throw new Error(`No such event: ${event}`);
    }
    // Keep only functions that aren’t the listener or its original in case of once-wrappers
    this._listeners[event] = list.filter(fn =>
      fn !== listener && fn._original !== listener
    );
    return this;
  };
  
  // Emit (fire) an event: invoke every listener with provided args.
  // Returns an array of each listener’s return value.
  // Throws if the event doesn’t exist.
  EventEmitter.prototype.emit = function(event, ...args) {
    const listeners = this._listeners[event];
    if (!listeners) {
      throw new Error(`No such event: ${event}`);
    }
    // Call each listener with the emitter as `this`
    return listeners.map(fn => fn.apply(this, args));
  };
  
  // Register a one-time listener: it wraps your listener so that
  // after the first emit, it automatically unregisters itself.
  EventEmitter.prototype.once = function(event, listener) {
    // Wrapper that calls the original listener then removes itself
    const wrapper = (...args) => {
      this.off(event, wrapper);
      return listener.apply(this, args);
    };
    // Tag the wrapper so .off(event, originalListener) can also remove it
    wrapper._original = listener;
    return this.on(event, wrapper);
  };
  
  // Return the number of listeners currently registered for an event.
  EventEmitter.prototype.listenerCount = function(event) {
    const list = this._listeners[event];
    return list ? list.length : 0;
  };
  
  // ------------------------
  // Usage Example
  // ------------------------
  
  const ee = new EventEmitter();
  
  function greet(name) {
    console.log(`Hello, ${name}!`);     // side effect in listener
    return `Greeted ${name}`;           // return value collected by emit()
  }
  
  ee
    .on('sayHello', greet)                         // regular listener
    .once('sayHello', name => `One-time hi to ${name}`) // one-time listener
    .on('sayHello', name => console.log(`Another listener for ${name}`));
  
  console.log('Count before emit:', ee.listenerCount('sayHello'));
  // → Count before emit: 3
  
  const results = ee.emit('sayHello', 'Alice');
  // Console output during emit:
  //   Hello, Alice!
  //   Another listener for Alice
  // (the one-time listener returns its string but does not log)
  
  console.log('Emit returned:', results);
  // → Emit returned: ["Greeted Alice", "One-time hi to Alice", undefined]
  
  console.log('Count after emit:', ee.listenerCount('sayHello'));
  // → Count after emit: 2   (the one-time listener has been removed)
  */