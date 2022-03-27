/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a
two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let newArr = []; //store chunks in new array 
  let k = arr.length / size; //calculate how many times to go through a loop (better solution from i = 0; i<arr.length; i += size)

  for (let i = 0; i < k; i++) {
    newArr.push(arr.splice(0, size)); //splice an array from 0th index for a length of a size
  }
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
