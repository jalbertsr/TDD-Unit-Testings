function fizzBuzz() {
  var arr = [];

  for (var i = 0; i < 100; i++) {

    arr[i] = i + 1

    if (arr[i] % 15 === 0) arr[i] = "fizzBuzz"

    else if (arr[i] % 3 === 0) arr[i] = "fizz"

    else if (arr[i] % 5 === 0) arr[i] = "buzz"
  }

  return arr

}






















// function sum(a, b) {
//   return parseFloat(a) + parseFloat(b);
// }
