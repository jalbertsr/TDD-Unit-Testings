describe("function fizzBuzz", function(){
  it("fizzBuzz should exists", function(){
    expect(fizzBuzz).toBeDefined();
  })
  
  it('fizzBuzz should a function', function(){
    expect(typeof fizzBuzz).toBe('function')
  })
  
  it('fizzBuzz should return an array', function(){
    expect(Array.isArray(fizzBuzz())).toBe(true)
  })

  it('fizzBuzz should return a length array of 100', function(){
    expect(fizzBuzz().length).toBe(100)
  })

  it('fizzBuzz never should return numbers that are divisibles by 3', function(){
    expect(fizzBuzz().includes(3)).toBe(false)
  })

  it('fizzBuzz should return fizz if numbers are divisibles by 3', function(){
    var array = fizzBuzz()
    expect(array[2]).toBe('fizz')
    
  })
  it('fizzBuzz never should return numbers that are divisibles by 5', function(){
    expect(fizzBuzz().includes(5)).toBe(false)
  })

  it('fizzBuzz should return buzz if numbers are divisibles by 3', function(){
    var array = fizzBuzz()
    expect(array[4]).toBe('buzz')
    
  })

  it('fizzBuzz never should return a 15 on the array', function(){
    expect(fizzBuzz().includes(15)).toBe(false)
  })

  it('fizzBuzz should return fizzBuzz if numbers are divisibles by 15', function(){
    var array = fizzBuzz()
    expect(array[29]).toBe('fizzBuzz')
    
  })

  it('fizzBuzz never should return numbers that are divisibles by 3 or 5', function(){
    expect(fizzBuzz().includes(3 || 5)).toBe(false)
  })


  it('fizzBuzz should return fizz if numbers has a 3', function(){
    var array = fizzBuzz()
    expect(array[34]).toBe('fizz')
    
  })

  it('fizzBuzz should return fizzBuzz if numbers has a 5', function(){
    var array = fizzBuzz()
    expect(array[49]).toBe('buzz')
    
  })
})