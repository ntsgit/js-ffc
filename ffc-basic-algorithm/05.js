/*
Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
    let largestNumArr = []; //new array which will contain largest elements of each subarray
    
    for (let i=0; i < arr.length; i++) { //loop through the array
        let max = arr[i][0]; //set the first element of each subarray to be max element
        
        for (let j=0; j < arr[i].length; j++) { //loop through each subarray and check if there is an element grater than max 
            if (arr[i][j] > max) max = arr[i][j]
        }
        largestNumArr.push(max); //push the largest number found in a subarray in the new array
    }
    return largestNumArr;
  }
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
