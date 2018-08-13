function reorder(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function sort(array) {
  for(var length = 0; length < array.length; length++) {
    for(var b = 1; b < array.length; b++) {
      if(array[b - 1] > array[b]) {
        reorder(array, b - 1, b);
      }
    }
  }
  return array;
}

module.exports = sort
