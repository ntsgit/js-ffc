/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "&":
        arr[i] = "&amp;";
        break;
      case "<":
        arr[i] = "&lt;";
        break;
      case ">":
        arr[i] = "&gt;";
        break;
      case `"`:
        arr[i] = "&quot;";
        break;
      case `'`:
        arr[i] = "&apos;";
        break;
    }
  }

  return arr.join('');
}

const a = convertHTML("Dolce & Gabbana");
console.log(a);
