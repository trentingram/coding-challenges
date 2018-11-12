/*
Given an arbitrary input string, write a function that returns the first non-repeating character. For strings with all repeats, return 'sorry'.

EX: "ABCD" --> "A"
EX: "XXXXX" --> "sorry"
EX: "ALABAMA" --> "L"
EX: "BABA" --> "sorry"
*/
function firstNonRepeatedCharacter(str){
  let myStr = str;
  let newStr = str.toLowerCase();
  let filtered = newStr
      .split('')
      .filter(function(val, i){
        return (newStr.indexOf(val) == i && newStr.indexOf(val, i+1) == -1)
      });
  return filtered.length === 0 ? "sorry" : str.charAt(newStr.indexOf(filtered[0]))
}

/*
function firstNonRepeatedCharacter(string) {
   let firstSingle = string.split('').filter(function(char) {
       return string.indexOf(char) === string.lastIndexOf(char);
  })[0];

  return !!firstSingle ? firstSingle : 'sorry'
}
*/

module.exports = firstNonRepeatedCharacter;
