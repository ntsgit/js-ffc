/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  let flatArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      //if an element is not an array push it into flatArr
      flatArr.push(arr[i]);
    } else {
      flatArr.push(...steamrollArray(arr[i])); //else use a recursive function to go into an arrays till it finds a value
    }
  }
  return flatArr;
}

const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result);
