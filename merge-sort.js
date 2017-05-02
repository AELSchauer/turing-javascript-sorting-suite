pry = require('pryjs')
// eval(pry.it);

function mergeSort(numbers) {
  if(numbers.length == 1){
    return numbers
  }else{
    var half = Math.floor(numbers.length / 2);
    var list_1 = numbers.slice(0, half);
    var sorted_1 = mergeSort(list_1);
    var list_2 = numbers.slice(half);
    var sorted_2 = mergeSort(list_2)
    return mergeLists(sorted_1, sorted_2)
  };
};

function mergeLists(a, b) {
  merged = []
  while(a.length > 0 && b.length > 0){
    // eval(pry.it)
    if(a[0] <= b[0]){
      merged.push(a.shift());
    }else{
      merged.push(b.shift());
    };
  };
  while(a.length > 0){
    merged.push(a.shift())
  };
  while(b.length > 0){
    merged.push(b.shift())
  };
  return merged
};

module.exports = mergeSort
