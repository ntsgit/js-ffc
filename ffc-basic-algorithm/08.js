/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  let arr = str.split(""); //split string into array with each character as one element
  let truncArr = []; //empty array to store trunced values

  if (num < str.length) {
    //condition to compare two arguments
    for (let i = 0; i < num; i++) {
      //push first num elements into new array
      truncArr.push(arr[i]);
    }
    return truncArr.join("") + "..."; //join it back to string and add ... at the end
  } else return str;
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);

// another way without using array

function truncateString2(str, num) {
  return num < str.length ? str.slice(0, num) + "..." : str; //use slice method for strings to get a substring of num characters from 0-position
}

console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 9));
