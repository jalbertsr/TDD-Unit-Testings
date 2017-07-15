describe("function calcStats", function() {
    it("should exists", function() {
        expect(calcStats).toBeDefined();
    })

    it('should be a function', function() {
        expect(typeof calcStats).toBe('function')
    })

    describe("should return an array", function() {
        it('should return an array of strings', function() {
            var result = calcStats([6, 9, 15, -2, 92, 11])[1];
            expect(typeof result).toBe('string')
        })
    })

    describe("should return the following result for the array [6, 9, 15, -2, 92, 11]", function() {
	    it('should return an avarage of 21.833333', function() {
	            var result = calcStats([6, 9, 15, -2, 92, 11])[3];
	            var avarage = parseFloat(parseFloat(result.split('=')[1]).toFixed(6))
	            expect(avarage).toBe(21.833333)
	    })

	    it('should return -2 for the minimum value', function() {
	            var result = calcStats([6, 9, 15, -2, 92, 11])[0];
	            var minimumValue = parseInt(result.split('=')[1])
	            expect(minimumValue).toBe(-2)
	    })

	    it('should return 92 for the maximum value', function() {
	            var result = calcStats([6, 9, 15, -2, 92, 11])[1];
	            var maximumValue = parseInt(result.split('=')[1])
	            expect(maximumValue).toBe(92)
	    })

	    it('should return the length of the array passed', function(){
	    		var arrayLength = [6, 9, 15, -2, 92, 11].length
	    		var result = calcStats([6, 9, 15, -2, 92, 11])[2];
	    		var resultLength = parseInt(result.split('=')[1])
	    		expect(resultLength).toBe(arrayLength)
	    })
	})
});



 //    o) number of elements in the sequence = 6
