const reverseString = function(string) {
  let tempArray = string.split('');
  tempArray.reverse();
  let reversed = tempArray.join('');
  return reversed;
}

// Do not edit below this line
module.exports = reverseString;
