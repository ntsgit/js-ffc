/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that
expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  let [first, second] = arguments;
  if (typeof first !== "number") return undefined; //if the first arg is not a number return undefined
  if (second == undefined) return (second) => addTogether(first, second); //if a second one is undefined return a function which takes another argument and uses it as a second to original function
  if (typeof second !== "number") return undefined; // if the second argument is not defined return undefined
  return first + second;
}

const result = addTogether(3)(2);
console.log(result);
