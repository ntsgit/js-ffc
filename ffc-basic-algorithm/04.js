/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    let arr = str.split(" "); //turn the sentence in an array in each word is one element
    let longestWordLength = 0; //set the longest length to 0

   for (let i = 0; i < arr.length; i++) {  //loop through an array to check if there is a word with length longer than 0
       if (arr[i].length > longestWordLength) longestWordLength = arr[i].length 
    }
    return longestWordLength; //return the biggest number found
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  