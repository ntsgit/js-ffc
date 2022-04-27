/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function 
func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  //keep removing first elements as long as they don't meet the condition and there are elements in the array
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

const result = dropElements([7, 8, 9, 1, 2, 3, 5], function (n) {
  return n < 3;
});
console.log(result);
