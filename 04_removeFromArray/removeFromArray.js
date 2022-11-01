const removeFromArray = function(array, ...manyMoreArgs) {
  for (let i = 0; i < manyMoreArgs.length; i++) {
    let index = array.indexOf(manyMoreArgs[i]);
    if (index > -1) array.splice(index,1);
  }
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
