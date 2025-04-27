/* Write a Queue (class or constructor function) that supports at least these methods:
enqueue(item)
dequeue()
front() (or peek())
isEmpty()
size() */

function Queue(){
    if(!(this instanceof Queue)){
      throw new Error('Use new Queue');
    }
    this.queue = new Array();
  
    this.enqueue=function(item){
      this.queue.push(item);
      return true
    }
    this.dequeue=function(){
      if(this.queue.length==0) return false;
      return this.queue.shift()
    }
    this.front=function(){
      if(this.queue.length==0) return false;
      return this.queue[0]
    }
    this.isEmpty=function(){
      return this.queue.length==0
    }
    this.size=function(){
      return this.queue.length
    }
  }
  
  const inst1 = new Queue();
  console.log(inst1.isEmpty());
  console.log(inst1.enqueue(20));
  console.log(inst1.enqueue(21));
  console.log(inst1.isEmpty());
  console.log(inst1.front());
  console.log(inst1.size());
  console.log(inst1.dequeue());
  console.log(inst1.isEmpty());
  console.log(inst1.front());
  console.log(inst1.size());
  