describe("function eightQueens", function() {
  it("should exist", function() {
    expect(eightQueens).toBeDefined()
  })

  it("should be a function ", function() {
    expect(typeof eightQueens).toBeDefined()
  })

  it("should return an array ", function() {
    expect(Array.isArray(eightQueens([],0))).toBeTruthy()
  })

  it("should return an array with integers and no strings", function() {
    var checkedResult = eightQueens([],0).filter(function(number){
      return typeof number === 'number'
    })
    var theResult = eightQueens([],0)
    expect(checkedResult).toEqual(theResult)
  })

  it("should return a length array of 8", function() {
    var length = eightQueens([],0).length
    expect(length).toBe(8)
  })

  it("shouldn't return any number greater than 8 inside the returned array", function() {
    var numbers = eightQueens([],0)[3]
    expect(numbers).toBeLessThan(8)
  })
  

})
