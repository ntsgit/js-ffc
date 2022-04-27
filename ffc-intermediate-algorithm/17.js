/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
  let arr = str.split(" "); //split the string into an array of binary strings
  return arr
    .map((element) => String.fromCharCode(parseInt(element, 2))) //map each element to a word, first parse it to decimal and then convert it to text
    .join(""); // in the end join the array to make a sentence
}

const result = binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
console.log(result);
