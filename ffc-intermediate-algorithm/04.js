/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, 
that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  let sourceKey = Object.keys(source); // list of all keys from source object

  return collection.filter((item) =>    //filter collection array
    sourceKey.every(                    //check if for every key from source object 
      // eslint-disable-next-line no-prototype-builtins
      (key) => item.hasOwnProperty(key) && item[key] == source[key]  //element from collection array has that key and the same value as source obj
    )
  );
}

const a = whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
console.log(a);
