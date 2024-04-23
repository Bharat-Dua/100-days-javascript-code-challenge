//* ---------------------
//* Programming question : Sort an array
//* -----------------------

//? Write a function to sort an array of numbers in an ascending order.

//* method 1
function sortAscending(arr) {
  let copy = [...arr];
  copy.sort((a, b) => a - b);
  return copy;
}

//* method 2

function sortArray(array) {
  // Clone array
  let arr = [...array];
  // Using bubble sort
  for (j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

//* method 3

function sorting(arr) {
  const mynewarr = [...arr];
  let length = mynewarr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 1 + i; j < length; j++) {
      if (mynewarr[i] > mynewarr[j]) {
        [mynewarr[i], mynewarr[j]] = [mynewarr[j], mynewarr[i]];
      }
    }
  }
  return mynewarr;
}

const arr = [4, 2, 3, 1];
console.log(sorting(arr));
console.log(arr);

console.log(sortArray([5, 3, 1, 8])); // [1, 3, 5, 8]
// Example usage:
// console.log(sortAscending([5,3,1,8]));  // Output: [1,3,5,8]
console.log(sortAscending([5, 3, 10, 8])); // Output: [3,5,8,10]
console.log(typeof sortAscending([2]));

//todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are  not allowed to use any built-in sorting method.
