/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    let a = 'abcdefghijklmnopqrstuvwxyz'
    let k = a.indexOf(str[0])
    for (let i = k; i < k + str.length; i++) {
      if (str.indexOf(a[i]) === -1) return a[i]
    }
  }
  
  const a = fearNotLetter("abcdeg");
  console.log(a);