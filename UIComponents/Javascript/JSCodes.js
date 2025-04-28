// SETTIMEOUT
function test() {
    console.log('here i am');
  }
  const timerSetTimeout = setTimeout(test, 5000);
  
  // SETINTERVAL
  const timerSetInterval = setInterval(test, 5000);
  
  // COUNTDOWN TIMER
  function countdown(tm) {
    let cnt = tm + 1;
    const timerId = setInterval(() => {
      cnt--;
      if (cnt === 0) {
        console.log('Times up');
        clearInterval(timerId);
      } else {
        console.log(cnt);
      }
    }, 1000);
  }
  countdown(5);
  
  // CONSTRUCTOR TIMER EXAMPLE
  function Test(timer) {
    this.timer = timer * 1000;
    this.timerFunc = setTimeout(() => {
      console.log('Timer triggered after', timer, 'seconds');
    }, this.timer);
  }
  const tst = new Test(5);
  
  // PROMISE HANDLER
  function promise_test() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve({ name: 'Anne', age: 30 });
        } else {
          reject('Failed to fetch user');
        }
      }, 2000);
    });
  }
  
  promise_test()
    .then(res => console.log('Promise Resolved:', res))
    .catch(err => console.error('Promise Rejected:', err));
  
  // DEBOUNCE
  function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }
  
  const debounced = debounce(() => {
    console.log('Debounced function executed');
  }, 5000);
  debounced();
  
  // THROTTLE
  function throttle(fn, delay) {
    let lock = false;
    return function(...args) {
      if (lock) return;
      fn.apply(this, args);
      lock = true;
      setTimeout(() => lock = false, delay);
    };
  }
  
  const throttled = throttle(() => {
    console.log('Throttled function executed');
  }, 5000);
  throttled();
  
  // CUSTOM ITERATION
  function forEachObj(obj, cb) {
    for (const k in obj) {
      cb(obj[k], k);
    }
  }
  forEachObj({ a: 1, b: 2 }, (value, key) => console.log(key, value));
  
  // CALL/APPLY/BIND
  
  // CALL + APPLY + BIND EXAMPLE
  const obj1 = {
    nums1: 2,
    nums2: 4,
    getSum(...args) {
      const sum = this.nums1 + this.nums2;
      console.log('Sum:', sum);
      console.log('Args:', args.join(' '));
    }
  };
  
  const obj2 = { nums1: 6, nums2: 12 };
  
  // Using call
  obj1.getSum.call(obj2, 'Anne', 32);
  
  // Using apply
  obj1.getSum.apply(obj2, ['Raj', 25]);
  
  // Using bind
  const boundGetSum = obj1.getSum.bind(obj2, 'Neha', 30);
  boundGetSum();
  
  // WITHDRAW EXAMPLE USING CALL, APPLY, BIND
  const account1 = { name: "Anne", balance: 1000 };
  const account2 = { name: "Raj", balance: 500 };
  
  function withdraw(amount) {
    if (typeof amount !== "number") {
      console.error('Enter a number');
      return;
    }
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`${this.name} withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.log(`${this.name} has insufficient funds.`);
    }
  }
  
  withdraw.call(account1, 200);               // call
  withdraw.apply(account2, [300]);             // apply
  const withdrawFromAccount1 = withdraw.bind(account1);
  withdrawFromAccount1(100);                   // bind
  
  // CURRYING
  
  // Basic curry
  function add2(a) {
    return function(b) {
      return a + b;
    };
  }
  console.log('Curried add2:', add2(2)(8));
  
  // Curry with 3 parameters
  function curry(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  console.log('Curried 3 numbers:', curry(2)(3)(4));
  
  // Advanced dynamic curry
  function sum(a) {
    let total = a;
  
    function next(b) {
      if (b === undefined) {
        return total;
      }
      total += b;
      return next;
    }
  
    return next;
  }
  
  console.log('Dynamic Curry Sum:', sum(2)(3)(5)(10)()); // 20
  console.log('Dynamic Curry Sum:', sum(1)(1)(1)(1)(1)()); // 5
  
  