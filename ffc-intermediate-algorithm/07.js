/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
    //if (before[0].test(/A-Z/)) after[0].replace(/A-Z/)
    if (before.charAt(0) === before.charAt(0).toUpperCase()) after = after.replace(after[0], after.charAt(0).toUpperCase())   
    if (before.charAt(0) === before.charAt(0).toLowerCase()) after = after.replace(after[0], after.charAt(0).toLowerCase()) 
    return str.replace(before, after);
  }
  
 const a = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
 console.log(a);