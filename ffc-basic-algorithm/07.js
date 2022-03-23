/*
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  let arr = []; //declare empty arr
  for (let i = 1; i <= num; i++) {
    //loop num number of times and push str to declared array
    arr.push(str);
  }
  return arr.join(""); //convert the array back to string and return its value
}
console.log(repeatStringNumTimes("abc", -3));

//same solution but without using an array

function repeatStringNumTimes2(str, num) {
  let newStr = ""; //declare empty str
  for (let i = 1; i <= num; i++) {
    //loop num number of times and concatenate str to newStr
    newStr += str;
  }
  return newStr;
}

console.log(repeatStringNumTimes2("abc", 3));
