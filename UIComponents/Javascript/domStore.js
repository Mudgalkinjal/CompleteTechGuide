/********************************************************
  Call, Apply, Bind Playground – Logger Example
********************************************************/
function logger(message, details) {
    console.log(`[${this.prefix}] ${message}${details ? ' - ' + details : ''}`);
  }
  
  const alertObj = { prefix: '⚠️ Alert' };
  const httpObj = { prefix: '🌐 HTTP' };
  
  // Bind logger to alertObj with pre-filled 'WARN'
  const warn = logger.bind(alertObj, 'WARN');
  warn('Disk almost full');  
  // Output: [⚠️ Alert] WARN - Disk almost full
  
  // Call logger directly with httpObj
  logger.call(httpObj, 'INFO', '200 OK');
  // Output: [🌐 HTTP] INFO - 200 OK
  
  /********************************************************
    Monkey-Patch setTimeout to Track and Clear All
  ********************************************************/
  const timeoutIds = new Set();
  const originalSetTimeout = global.setTimeout;
  
  global.setTimeout = function(callback, delay, ...args) {
    const id = originalSetTimeout(() => {
      callback(...args);
      timeoutIds.delete(id);
    }, delay);
  
    timeoutIds.add(id);
    return id;
  };
  
  function clearTimeouts() {
    timeoutIds.forEach(id => clearTimeout(id));
    timeoutIds.clear();
  }
  
  // Usage example:
  // const id1 = setTimeout(() => console.log('Hello!'), 5000);
  // clearTimeouts();  // cancels before firing
  
  /********************************************************
    DOMStore Class – Using Map for DOM Node Keys
  ********************************************************/
  class DOMStore {
    constructor() {
      this.store = new Map();
    }
  
    set(node, value) {
      if (!(node instanceof Node)) {
        throw new Error('Key must be a DOM Node');
      }
      this.store.set(node, value);
    }
  
    get(node) {
      return this.store.get(node);
    }
  
    has(node) {
      return this.store.has(node);
    }
  
    delete(node) {
      return this.store.delete(node);
    }
  
    clear() {
      this.store.clear();
    }
  }
  
  // Demo:
  const div = document.createElement('div');
  const button = document.createElement('button');
  
  const domStore = new DOMStore();
  
  domStore.set(div, { clicked: false });
  domStore.set(button, { label: 'Submit' });
  
  console.log(domStore.get(div));    // { clicked: false }
  console.log(domStore.get(button)); // { label: 'Submit' }
  
  console.log(domStore.has(div));    // true
  domStore.delete(div);
  console.log(domStore.has(div));    // false
  