let { expect } = require('chai');
let { createCalculator } = require('../07. Add  Subtract');

describe('Function Add Substract', () => {
    it('should be return object', () => {
        expect(createCalculator()).to.be.an('object')
    });

    it('should be return NaN subtrack', () => {
        let result = createCalculator();
        result.subtract('str')
        expect(result.get()).to.be.NaN
    });

    it('should be return NaN add', () => {
        let result = createCalculator();
        result.add('str')
        expect(result.get()).to.be.NaN
    });

    it('should be return correct result', () => {
        let result = createCalculator();
        result.subtract(1)
        expect(result.get()).to.equal(-1)
    });

    it('should be return correct result add', () => {
        let result = createCalculator();
        result.add(1)
        expect(result.get()).to.equal(1)
    });
})

