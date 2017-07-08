//check there are no queens attacking the queen on column i
function checkConflicts(columns, i) {
  for (var j = 0; j < i; j++) {
    // same row
    if (columns[j] === columns[i]) return false
      // diagonal
    if (i - j === Math.abs(columns[j] - columns[i])) return false
  }
  return true
}

function eightQueens(columns, i) { //columns = array with current solution, i = current column position
  var nQueens = 8
    // if we arrived column 8 
  if (i === nQueens) return columns
    // try placing the next queen on every row
  for (var j = 0; j < nQueens; j++) {
    columns[i] = j
    if (checkConflicts(columns, i)) {
      var solution = eightQueens(columns, i + 1) //recursively solves the n-queens problem by brute force 
      if (solution) return solution
    }
  }
}
