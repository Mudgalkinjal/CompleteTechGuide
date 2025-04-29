/********************************************************
  PROTOTYPE CHAIN – Person example
********************************************************/
function Person(name) {
    this.name = name;
  }
  Person.prototype.sayName = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
  
  const Anne = new Person('Anne');
  Anne.sayName();                   // Hi, I'm Anne
  console.log(Anne.toString());     // toString found on Object.prototype
  
  /********************************************************
    Object.create – simple delegation
  ********************************************************/
  const animal = {
    breathe() { console.log('🐾  breathing'); }
  };
  
  const dog = Object.create(animal);   // dog → animal → Object.prototype
  dog.bark = function () { console.log('🐶  barking'); };
  
  dog.breathe();  // inherited
  dog.bark();     // own
  
  /********************************************************
    Object.assign – shallow merge
  ********************************************************/
  const src1 = { a: 1 };
  const src2 = { b: 2 };
  const src3 = { c: 3 };
  
  const merged = Object.assign({}, src1, src2, src3);
  console.log('merged:', merged);      // { a:1, b:2, c:3 }
  
  /********************************************************
    Shallow vs. Deep Copy demo
  ********************************************************/
  const original = { x: 1, nested: { y: 2 } };
  
  // SHALLOW copy (nested object still shared)
  const shallow = { ...original };     // or Object.assign({}, original)
  shallow.nested.y = 42;
  console.log('original.nested.y:', original.nested.y); // 42  ⚠️
  
  // DEEP copy with structuredClone (modern browsers / Node 17+)
  const deep = structuredClone(original);
  deep.nested.y = 99;
  console.log('original.nested.y:', original.nested.y); // 42 ✅
  console.log('deep.nested.y:', deep.nested.y);         // 99
  