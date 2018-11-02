/*
Write a function named `camelCase` that takes one parameter, a string that is all lowercase and doesn't include any punctuation. This function should take that string and convert it to camel case.

EX: camelCase("this is a string") —> "thisIsAString"
EX: camelCase("vacation rentals by owner") —>`"vacationRentalsByOwner"
EX: camelCase("supercalifragalisticexpialidocious") —> "supercalifragalisticexpialidocious"
*/

function camelCase(str) {
   let newStr = str.split(" ").map(function(each) {
       return each = each.charAt(0).toUpperCase() + each.slice(1);
   }).join("");

   return newStr = newStr.charAt(0).toLowerCase() + newStr.slice(1);
}
