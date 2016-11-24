module.exports = {

findMinMax: function(array){
	var min= array[0];
	var max = array[0];

	for(var i = 1; i < array.length; i++){
		if(array[i] > max)
			max = array[i];
		if(array[i] < min)
			min = array[i];
		if(array[i] == max && array[i] == min){
			max = array[i];
			min = array[i];
		}

		}

		if(min != max)
			return [min,max];
		else
			return [min];
	}

}

