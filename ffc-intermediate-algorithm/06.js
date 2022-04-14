/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {
    if (/[aeiou]/.test(str.charAt(0)))  return str.concat("way") //if a first char is vowel add "way" at the en

    const consonants = str.match(/^[^aeiou]+/)[0]; //else assign to consonant variable all consonants from the begining of the string (match returns array, hence [0])
    return str.substring(consonants.length) + consonants + "ay"; //return the substring after the consonants, add consonants and then "ay"
  }
  
  const a = translatePigLatin("shwartz");
  console.log(a);