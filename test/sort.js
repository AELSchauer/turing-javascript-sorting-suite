const assert = require('chai').assert
const bubbleSort = require('../bubble-sort')
const insertionSort = require('../insertion-sort')
const mergeSort = require('../merge-sort')

it('it can bubble sort', function() {
	var unsorted = [5, 3, 1, 2, 4]
	var sorted = [1, 2, 3, 4, 5]
	assert.deepEqual(bubbleSort(unsorted), sorted)
});

it('it can insertion sort', function() {
  var unsorted = [5, 3, 1, 2, 4]
  var sorted = [1, 2, 3, 4, 5]
  var i = unsorted.length
  assert.deepEqual(insertionSort(unsorted, i), sorted)
});

it('it can merge sort', function() {
	var unsorted = [5, 3, 1, 2, 4]
	var sorted = [1, 2, 3, 4, 5]
	assert.deepEqual(mergeSort(unsorted), sorted)
});
