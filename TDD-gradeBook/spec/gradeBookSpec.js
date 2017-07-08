describe("function gradeBook", function() {
  it("gradeBook should exist", function() {
    expect(gradeBook).toBeDefined();
  });

  it('gradeBook should be a function', function() {
    expect(typeof gradeBook).toBe("function")
  });

  it('gradeBook(22,56,78) should return a string', function() {
    expect(typeof gradeBook(22, 56, 78)).toBe("string")
  })

  it('gradeBook(55,33,22) should return a "F"', function() {
    expect(gradeBook(55, 33, 22)).toBe('F')
  })

  it('gradeBook(65,65,65) should return a "D"', function() {
    expect(gradeBook(65, 65, 65)).toBe('D')
  })

  it('gradeBook(78,71,79) should return a "C"', function() {
    expect(gradeBook(78, 71, 79)).toBe('C')
  })

  it('gradeBook(87,85,82) should return a "B"', function() {
    expect(gradeBook(87, 85, 82)).toBe('B')
  })

  it('gradeBook(100,95,92) should return a "A"', function() {
    expect(gradeBook(100, 95, 92)).toBe('A')
  })

  it('gradeBook(95) should return a "A"', function() {
    expect(gradeBook(95)).toBe('A')
  })
  
  it('gradeBook(82,86) should return a "B"', function() {
    expect(gradeBook(82, 86)).toBe('B')
  })


});
