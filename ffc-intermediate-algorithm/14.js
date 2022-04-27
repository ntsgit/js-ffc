/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in 
the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
The answer here would be 6.
*/

const smallestCommons = (arr) => {
  const [min, max] = arr.sort((a, b) => a - b);
  const numDivisors = max - min + 1;

  //largest possible value for smallest common multiple
  let upperBond = 1;
  for (let i = arr[0]; i <= arr[1]; i++) {
    upperBond *= i;
  }

  for (let multiple = max; multiple <= upperBond; multiple += max) { //for all multiples of max
    let divisorCount = 0;
    for (let i = min; i <= max; i++) { //check if every value from the range is divides multiple
      if (multiple % i == 0) {
        divisorCount += 1; //count divisors
      }
    }
    if (divisorCount == numDivisors) return multiple;
  }
};

console.log(smallestCommons([1, 5]));
