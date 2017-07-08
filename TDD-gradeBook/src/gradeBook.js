function gradeBook() {
  //var arr = [...arguments]
  var arr = Array.prototype.slice.call(arguments)
  var totalSum = arr.reduce(function(sum,marks){
    return sum+marks;
  },0)
  var avarage = totalSum/arr.length;

  if(avarage < 60) return 'F'
  if(avarage < 70) return 'D'
  if(avarage < 80) return 'C'
  if(avarage < 90) return 'B'
  if(avarage <= 100) return 'A'
}


















