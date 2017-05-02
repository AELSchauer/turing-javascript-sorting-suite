function insertionSort(array, i) {
  if(i > 0) {
    array = insertionSort(array, i - 1);
    current = array[i];
    for(var j = i - 1; j >= 0 && array[j] > current; j--){
      array[j+1] = array[j];
    };
    array[j+1] = current;
  };
  return array
};

module.exports = insertionSort
