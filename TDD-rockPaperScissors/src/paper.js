function paperScissors() {
  if (arguments.length === 1) {
    var combinations = ['PAPER', 'SCISSORS', 'ROCK']
    var random = Math.floor(Math.random() * 3) //num random between 0 - 2 (both included)

    arguments[1] = combinations[random]
  }

  var player1 = arguments[0]
  var player2 = arguments[1]

  /*----------------- PAPER ----------------------*/
  if (player1 === 'PAPER') {
    if (player2 === 'ROCK') {
      return player1 + ' vs ' + player2 + ' => ' + player1 + ' wins!'
    } else if (player2 === 'SCISSORS') {
      return player1 + ' vs ' + player2 + ' => ' + player2 + ' wins!'
    } else if (player2 === 'PAPER') {
      return player1 + ' vs ' + player2 + ' => tie!'
    }
  }

  /*----------------- SCISSORS -------------------*/
  if (player1 === 'SCISSORS') {
    if (player2 === 'ROCK') {
      return player1 + ' vs ' + player2 + ' => ' + player2 + ' wins!'
    } else if (player2 === 'PAPER') {
      return player1 + ' vs ' + player2 + ' => ' + player1 + ' wins!'
    } else if (player2 === 'SCISSORS') {
      return player1 + ' vs ' + player2 + ' => tie!'
    }
  }

  /*----------------- ROCK ------------------------*/
  if (player1 === 'ROCK') {
    if (player2 === 'PAPER') {
      return player1 + ' vs ' + player2 + ' => ' + player2 + ' wins!'
    } else if (player2 === 'SCISSORS') {
      return player1 + ' vs ' + player2 + ' => ' + player1 + ' wins!'
    } else if (player2 === 'ROCK') {
      return player1 + ' vs ' + player2 + ' => tie!'
    }
  }
}
