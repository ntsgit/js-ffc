/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArr.push(arr[i]); //condition equvalent to Boolean(arr[i]) === true
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));

//another way using filter method

function bouncer2(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer2([7, "ate", "", false, 9]));
