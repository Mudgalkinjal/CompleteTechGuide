/* 1) Implement a stack in JavaScript
Write a Stack “class” (or constructor function) that supports at least these methods:
push(item)
pop()
peek()
isEmpty()
size()
Paste your implementation, and we’ll review before moving on. */

class Stack{
    constructor(){
      this.stack = new Array();
    }
    push(item){
      this.stack.push(item);
      return true
    }
    pop(){
      if(this.isEmpty()) return false;
      return this.stack.pop();
    }
    peek(){
      if(this.isEmpty()) return false;
      return this.stack[this.stack.length-1]
    }
    isEmpty(){
      return this.stack.length==0
    }
    size(){
      return this.stack.length
    }
  }
  
  const inst1 = new Stack();
  console.log(inst1.isEmpty());
  console.log(inst1.size());
  console.log(inst1.push(20))
  console.log(inst1.size());
  console.log(inst1.isEmpty());
  console.log(inst1.pop())
  console.log(inst1.size());
  console.log(inst1.isEmpty());
  console.log(inst1.pop())
  console.log(inst1.peek())
  console.log(inst1.push(21))
  console.log(inst1.push(22))
  console.log(inst1.isEmpty());
  console.log(inst1.size());
  console.log(inst1.pop())
  console.log(inst1.size());
  console.log(inst1.isEmpty());