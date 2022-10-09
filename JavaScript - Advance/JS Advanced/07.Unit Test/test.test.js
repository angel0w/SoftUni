const { expext, expect } = require('chai');


describe('няква функция', () => {
    it ('име на тест  should return correct result with array of numbers' , () => {
        // Arrange
        let array = [1,2,3,4];

        // Act
        let result = sum(array);

        //Assert
        // if (result != 6 ) {
        //     throw new Error ('Test fails')
        // }
        expect(result).to.be.equal(6);
        expect(result).to.be.a('string');
        expect(result).to.equal('');
        expect(result).to.have.lengthOf(3);
        expect(result).to.have.property('tea'.with.length(3));
    });

    it ('shoult return NaN if input is not an array', () => {
        // Arrange
        let invalidArray = 'Invalid array';

        // Act
        let result = sum(invalidArray);

        //Assert
        expect(result).to.be.NaN;
    });

    it ('should calculate correct result with array of mixed types', () => {
        // Arrange
        let invalidArray = ['1', true, 2];

        // Act
        let result = sum(mixedArray);
        
        //Assert
        expect(result).to.be.equal(4)
    })
});