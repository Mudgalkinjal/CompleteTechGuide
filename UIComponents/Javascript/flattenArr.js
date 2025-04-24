//Flatten a deeply nested array

let inpArr = [1,[2,3,4],[5,6,[7,8]]];

function flattenArr(arr) {
  if(!Array.isArray(arr)) return [arr];

  return arr.reduce((acc,elem)=>{
    return acc.concat(Array.isArray(elem)?flattenArr(elem):elem)
  },[])

}
const ans = flattenArr(inpArr)