/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr, ...args) {
    let newArr = [...args]; //spread the arguments into an array
  
    for (let i = 0; i < arr.length; i++) { //loop through all elements of a given array
      for (let j = 0; j <= newArr.length; j++) { //and loop through the arguments to check if they match with any of the elements from the array
        if (arr[i] === newArr[j]) delete arr[i]; //if they match delete the value
      }
    }
    return arr.filter((element) => element !== null); //after delete filter only elements which have a value (are not null i.e [1,2,,3,,])
  }
console.log(destroyer([2, 3, 2, 3], 2, 3));

//functional programing
function destroyer2(arr, ...args) {
   return arr.filter(element =>  !args.includes(element))
  }
console.log(destroyer2([2, 3, 2, 3], 2, 3));