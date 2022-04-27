/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate pre will be an object property and 
you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    //iterate through the array of objects
    let obj = collection[i]; //and check in every object
    if (!!obj[pre] == false) return false; //if the given argument when converted to boolean returns false
  }
  return true; //if it returns true in all objects then set the result to true
}

const result = truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: true },
    { name: "Naomi", role: "", isBot: true },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);
console.log(result);
