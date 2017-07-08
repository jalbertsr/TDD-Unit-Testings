function swap(array, i, j) { 
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
function permutations(arrayWithLetters, start, end) {
  var result = [];
  if (start === end) {
    return [arrayWithLetters.join('')];
  }
  for (var i = start; i <= end; i++) { 
    swap(arrayWithLetters, start, i);
    var tempResult = permutations(arrayWithLetters, start + 1, end); //appplaying recursion
    result = result.concat(tempResult);
    swap(arrayWithLetters, start, i);
  }
  return result;
}

/*main function*/
function anagram(word) {

  var letters = word.split('')
  var len = word.length-1

  return permutations(letters, 0, len)
}


 