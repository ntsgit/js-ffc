/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  let arr = str.split("");
  let truncArr = [];


  if (num < str.length) {
    for (let i = 0; i < num; i++) {
      truncArr.push(arr[i]);
    }
    return truncArr.join("") + "...";
  } else return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));


// another way without using array

function truncateString2(str, num) {
    
    return (num < str.length)  ? str.slice(0, num) + '...' : str;
    
  }
  
  console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 9));

