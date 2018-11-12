/*
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

EX: [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] --> 2
EX: [ "cat", "dog", "dig", "cat" ] --> "cat"
EX: [ "one", "two", "three" ] --> null
*/

function evenOccurrence (arr) {
   var obj = {};
   for (var i = 0; i < arr.length; i++) {
       if (obj[arr[i]]) {
           obj[arr[i]]++;
       } else {
           obj[arr[i]] = 1;
       }
   }
   for (var j = 0; j < arr.length; j++) {
       if (obj[arr[j]] % 2 === 0){
           return arr[j];
       }
   }
   return null;
}

module.exports = evenOccurrence;