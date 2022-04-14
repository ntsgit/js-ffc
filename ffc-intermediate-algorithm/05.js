/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    return str.split(/(?=[A-Z])/).join("-").toLowerCase().replace("/\W/[^a-z_]", "");
    //toLowerCase().split(' ').join('-');
  }
  
  const a = spinalCase('The_Andy_Griffith_Show');
  console.log(a);