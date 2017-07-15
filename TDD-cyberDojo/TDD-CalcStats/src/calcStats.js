function calcStats(arr){
	var result = []
	var length = arr.length
	var ascendant = function(a,b){return a-b}
	var minValue = arr.sort(ascendant)[0]
	var maxValue = arr.sort(ascendant)[length-1]
	var avarage = arr.reduce(function(num, acc){
		return num + acc;
	},0)/length

	result.push('minimum value = '+ minValue)
	result.push('maximun value = '+ maxValue)
	result.push('number of elements in the sequance = '+ length)
	result.push('avarage value = '+ avarage)

	return result 
}