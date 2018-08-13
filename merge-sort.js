function reorder(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function sort(array) {
  for(var length = 0; length < array.length; length++) {
    for(var j = 1; j < array.length; j++) {
      if(array[j - 1] > array[j]) {
        reorder(array, j - 1, j);
      }
    }
  }
  return array;
}

module.exports = sort
