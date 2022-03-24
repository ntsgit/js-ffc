/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    let arr = str.split(" ");
    let newArr =[];

    for (let i =0; i<arr.length; i++) {
        //let a = arr[i]
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1,arr[i].length).toLowerCase())
    }
    return newArr.join(" ");
  }
  

  console.log(titleCase("I'm a little tea pot"));