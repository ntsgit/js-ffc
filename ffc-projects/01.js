/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case 
(lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

const palindrome = (str) => {
  //remove all non-alphanumerical char and convert everything to lower case
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  for (let i = 0; i < Math.floor(str.length / 2); i++)
    if (str[i] !== str[str.length - 1 - i]) return false;
  return true;

  //another way of checking palindrom but it is not the most optimized way
  //if (str === str.split("").reverse().join("")) return true;
  //return false;
};

console.log(palindrome("almostomla"));
