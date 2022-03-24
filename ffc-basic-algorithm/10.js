/*
Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
  return bool === true || bool === false;
}

console.log(booWho(null));

//another way by using typeof

function booWho2(bool) {
  return typeof bool === "boolean";
}

console.log(booWho2(null));
