describe("function fizzBuzz", function() {
  it("should exists", function() {
    expect(fizzBuzz).toBeDefined();
  })

  it('should be a function', function() {
    expect(typeof fizzBuzz).toBe('function')
  })

  it('should return an array', function() {
    expect(Array.isArray(fizzBuzz())).toBe(true)
  })

  it('should return a length array of 100', function() {
    expect(fizzBuzz().length).toBe(100)
  })

  it('never should return numbers that are divisibles by 3 or 5', function() {
    expect(fizzBuzz().includes(3 || 5)).toBe(false)
  })

  it('never should return a 15 on the array', function() {
    expect(fizzBuzz().includes(30)).toBe(false)
  })

  it('should return "fizz" if numbers are divisibles by 3', function() {
    var array = fizzBuzz()
    expect(array[2]).toBe('fizz')
  })

  it('should return "buzz" if numbers are divisibles by 5', function() {
    var array = fizzBuzz()
    expect(array[4]).toBe('buzz')

  })

  it('should return "fizzBuzz" if numbers are divisibles by 15', function() {
    var array = fizzBuzz()
    expect(array[44]).toBe('fizzBuzz')

  })

})
