/*
Write a function flattenDeep(arr) that takes an array containing values or arbitrarily nested arrays of values, and returns a new one-dimensional array with all values in order. For example:

const input = [1, [2, [3, [4]], 5], 6];
console.log(flattenDeep(input)); 
// → [1, 2, 3, 4, 5, 6]
Requirements:

Handle nesting to any depth.

Don’t use built-in .flat() or libraries.

Return a brand-new array (don’t mutate the original).

Bonus: After your recursive solution, try an iterative version using a stack or queue.
*/

const input = [1, [2, [3, [4]], 5], 6];

function flattenDeep(arr,depth){

  if(!Array.isArray(arr)) return [arr]
  if(depth<1) return [arr];

  const a = arr.reduce((acc,elem)=>{
    if(Array.isArray(elem)){
     return acc.concat(flattenDeep(elem,depth-1))
    }
    else{
     return acc.concat(elem)
    }
  },[])

  return a

}

console.log(flattenDeep(input,3))

//iterative

// const input = [1,[2,[3,[4]],5],6];
// function flattenDeep(arr){
//   if(!Array.isArray(arr)) throw new Error('Not a Array')

//   let stack = [arr];
//   let res = [];
//   while(stack.length){
//     let top = stack.pop()
//     if(Array.isArray(top)){
//       for(let i = top.length-1; i>=0; i--){
//         stack.push(top[i])
//       }
//     }
//     else{
//       res.push(top)
//     }
//   }
//   return res
// }
// console.log(flattenDeep(input))
