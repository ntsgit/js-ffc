/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") arr.push(["A", "T"]);
    if (str[i] === "T") arr.push(["T", "A"]);
    if (str[i] === "C") arr.push(["C", "G"]);
    if (str[i] === "G") arr.push(["G", "C"]);
  }
  return arr;
}

const a = pairElement("GCG");
const b = pairElement2("GCG");
console.log(a);
console.log(b);

//another way using a switch statement

function pairElement2(str) {
  let arr = [];

  let search = function (char) {
    switch (char) {
      case "A":
        arr.push(["A", "T"]);
        break;
      case "T":
        arr.push(["T", "a"]);
        break;
      case "C":
        arr.push(["C", "G"]);
        break;
      case "G":
        arr.push(["G", "C"]);
        break;
    }
  };

  for (let i = 0; i < str.length; i++) search(str[i]);

  return arr;
}
