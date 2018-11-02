/*
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

EX: [2, 1, 3, 7] --> 42
EX: [0, 2, 3] --> 0
*/

function largestProductFromThree(arr) {
   return arr.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a * b);
}
