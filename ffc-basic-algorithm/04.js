/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    let arr = str.split(" ");
    let longestWordLength = 0;

   for (let i = 0; i < arr.length; i++) {
      
       if (arr[i].length > longestWordLength) longestWordLength = arr[i].length
    }
    return longestWordLength;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  