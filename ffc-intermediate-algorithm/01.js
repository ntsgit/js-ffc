/*Sum All Numbers in a Range
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.*/

function sumAll(arr) {
  let sum = 0;
  arr.sort((a, b) => a - b);

  for (let i = arr[0]; i <= arr[1]; i++) sum += i;

  return sum;
}

console.log(sumAll([1, 4]));
