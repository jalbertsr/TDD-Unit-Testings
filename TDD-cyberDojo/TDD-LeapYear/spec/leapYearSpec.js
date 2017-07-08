describe("function leapYear", function() {
  it("should exist", function() {
    expect(leapYear).toBeDefined();
  })

  it("should be a function ", function() {
    expect(typeof leapYear).toBeDefined();
  })

  it("should return a boolean ", function() {
    expect(typeof leapYear(2003)).toBe('boolean')
  })

  it("should return true for year 1996 ", function() {
    expect(leapYear(1996)).toBeTruthy();
  })

  it("should return false for year 1997 ", function() {
    expect(leapYear(1997)).toBeFalsy();
  })

})
