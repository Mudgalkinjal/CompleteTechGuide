//Design & Implement a Stack and a Queue in JavaScript

/*
Stack – Last-In-First-Out (LIFO)

Queue – First-In-First-Out (FIFO)
*/


class Stack{
  constructor(){
    this.stack = [];
  }
  push(elem){
    this.stack.push(elem);
    return true
  }
  pop(){
    if(this.stack.length>0) return this.stack.pop();
    else return false
  }
  peek(){
    if(this.stack.length>0) return this.stack[this.stack.length-1];
    else false
  }
  size(){
    return this.stack.length
  }
  isEmpty(){
    return this.stack.length==0
  }
  
}

let s1 = new Stack();
console.log(s1.isEmpty());
console.log(s1.push(3));
console.log(s1.size());
console.log(s1.peek());
console.log(s1.push(4));
console.log(s1.pop());
console.log(s1.size());
console.log(s1.pop());
console.log(s1.size());

class Queue{
    constructor(){
      this.queue = [];
    }
    enqueue(elem){
      this.queue.push(elem);
      return true
    }
    dequeue(){
      if(!this.isEmpty()) return this.queue.shift();
      else return false
    }
    front(){
      if(this.size()>0) return this.queue[0]
      else return false
    }
    isEmpty(){
      return this.queue.length==0
    }
    size(){
      return this.queue.length
    }
  }
  
  let q1 = new Queue();
  console.log(q1.enqueue(1));
  console.log(q1.front());
  console.log(q1.enqueue(2));
  console.log(q1.enqueue(3));
  console.log(q1.front());
  console.log(q1.dequeue());
  console.log(q1.dequeue());
  console.log(q1.front());