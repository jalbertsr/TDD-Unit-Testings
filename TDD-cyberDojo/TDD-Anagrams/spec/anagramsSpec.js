describe("function anagram", function() {
  it("should exist", function() {
    expect(anagram).toBeDefined();
  })

  it("should be a function ", function() {
    expect(typeof anagram).toBeDefined();
  })

  it("should return an array ", function() {
    expect(Array.isArray(anagram("biro"))).toBeTruthy();
  })

  it("should return an array of strings", function() {
    var array = anagram("biro")
    var type =  typeof array[15]
    
    expect(type).toEqual("string")
  })

  it("should return an array without numbers", function() {
    function checkArray(word) {
      return typeof word === 'number'
    }
    var toBeNumber = anagram("biro").some(checkArray)
    expect(toBeNumber).toBeFalsy()
  })

  it("should return 24 combinations for word 'biro' ", function() {
    var anagramLength = anagram("biro").length
    expect(anagramLength).toEqual(24)
  })

  it("should has 'ribo' inside the returned array ", function() {
    var ribo =  anagram("biro").includes('ribo')
    expect(ribo).toBeTruthy()
  })

  it("should has 'orib' inside the returned array ", function() {
    var orib =  anagram("ribo").includes('orib')
    expect(orib).toBeTruthy()
  })
})
