/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
    
    let arr = str.split("") //turn str to array
    let reverseArr = []; //empty array to store values in reversed order

    for (let i = arr.length - 1; i>=0 ; i--) {
        reverseArr.push(arr[i])
    }
    
    return reverseArr.join(''); //convert reversed array into string again and return the value
  }
  
  console.log(reverseString("hello"));