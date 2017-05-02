function bubbleSort(array) {
	var swapped = true
	while(swapped == true){
		swapped = false
		for(var i = 1; i < array.length; i++) {
			var previous = array[i-1]
			var current = array[i]
			if(array[i-1] > array[i]) {
				array[i-1] = current
				array[i] = previous
				swapped = true
			};
		};
	};
	return array
};

module.exports = bubbleSort
