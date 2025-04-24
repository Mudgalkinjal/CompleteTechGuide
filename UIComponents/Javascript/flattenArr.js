//Flatten a deeply nested array

let inpArr = [1,[2,3,4],[5,6,[7,8]]];

function flattenArr(arr) {
  if(!Array.isArray(arr)) return [arr];

  return arr.reduce((acc,elem)=>{
    return acc.concat(Array.isArray(elem)?flattenArr(elem):elem)
  },[])

}
const ans = flattenArr(inpArr)

//Flatten a deeply nested array without recursion

let inpArr2 = [1,[2,3,4],[5,6,[7,8]]];

function flattenArr2(arr) {
  let res = [];
  let stack = [...arr];
  while(stack.length){
    let curr = stack.pop();
    if(Array.isArray(curr)){
      stack.push(...curr);
    }
    else{
      res.unshift(curr)
    }
  }
  return res
}
const ans2 = flattenArr2(inpArr2)
console.log(ans)