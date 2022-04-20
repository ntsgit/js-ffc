/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two
 previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  let arr = fibArr(num);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) sum += arr[i];
  }
  return sum;
}

function fibArr(num) {
  let arr = [1, 1];
  for (let i = 1; i < num; i++) {
    if (arr[i] <= num) arr.push(arr[i - 1] + arr[i]);
  }
  arr.pop();
  return arr;
}
console.log(fibArr(10));
console.log(sumFibs(10));
