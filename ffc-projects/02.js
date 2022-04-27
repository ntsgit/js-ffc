/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

Roman Numeral Converter
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  //maping numbers to corresponding roman numbers
  let lookupRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  //loop through the look up
  for (let i in lookupRoman) {
    while (num >= lookupRoman[i]) { //while the number is bigger than the number on that position
      roman += i; //concatenate the roman number to existing variable called roman
      num -= lookupRoman[i]; //and decrease the given number for the number on that position
    }
  }
  return roman;
}

const result = convertToRoman(36);
console.log(result);
