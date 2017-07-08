describe('function paperScissors', function() {
  it('should exist', function() {
    expect(paperScissors).toBeDefined()
  })

  it('should be a function', function() {
    expect(typeof paperScissors).toBe('function')
  })

  it('should return a string', function() {
    expect(typeof paperScissors('ROCK')).toBe('string')
  })

  it('should return "PAPER vs SCISSORS => SCISSORS wins!" if paperScissors("PAPER", "SCISSORS")', function() {
    expect(paperScissors('PAPER', 'SCISSORS')).toBe('PAPER vs SCISSORS => SCISSORS wins!')
  })

  it('should return "PAPER vs PAPER => tie!" if paperScissors("PAPER", "PAPER")', function() {
    expect(paperScissors('PAPER', 'PAPER')).toBe('PAPER vs PAPER => tie!')
  })

  it('should return "ROCK vs SCISSORS => ROCK wins!" if paperScissors("ROCK", "SCISSORS")', function() {
    expect(paperScissors('ROCK', 'SCISSORS')).toBe('ROCK vs SCISSORS => ROCK wins!')
  })
  it('only have one arguments the second argument should be random', function() {
    var str = paperScissors('PAPER')
    expect(/PAPER/g.test(str)).toBeTruthy()
  })
  it('should return the move in the string returned', function() {
    var movePlayer1 = 'PAPER'
    var movePlayer2 = 'ROCK'
    var result = paperScissors(movePlayer1, movePlayer2)
    var textToCheck = movePlayer1 + ' vs ' + movePlayer2
    expect(result.includes(textToCheck)).toBeTruthy()
  })
})
