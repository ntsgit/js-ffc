/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings 
of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let arr = str.split("");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    //finding the number to which char is mapped
    let num = arr[i].charCodeAt();

    // A = 65, Z = 90
    if (num > 64 && num < 78) num += 13;
    else if (num > 77 && num < 91) num -= 13;

    newArr.push(String.fromCharCode(num))
  }

  return newArr.join("");
}

const result = rot13("SERR PBQR PNZC");
console.log(result);

