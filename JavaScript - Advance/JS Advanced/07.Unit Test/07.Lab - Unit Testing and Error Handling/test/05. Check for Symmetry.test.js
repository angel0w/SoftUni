let { expect } = require('chai');
let { isSymmetric } = require('../05. Check for Symmetry');

describe(' function isSymmetric', () => {
    // · Take an array as an argument
    // · Return false for any input that isn’t of the correct type

    it('should return true if inputs is an array', () => {
        // Arrange
        let arr = [];

        // Act
        let res = isSymmetric(arr);

        //Assert
        expect(res).to.be.true;
    });

    it('should return false if inputs is not an array', () => {
        // Arrange
        let inp = 'Not Array';

        // Act
        let res = isSymmetric(inp);

        //Assert
        expect(res).to.be.false;
    });

    // · Return true if the input array is symmetric
    it('should return true if input is symetric ', () => {
        // Arrange
        let input = [1, 2, 3, 4, 3, 2, 1];

        // Act
        let res = isSymmetric(input);

        //Assert
        expect(res).to.be.true;
    });

    // · Otherwise, return false
    it ('should return false if input is not symetric', () => {
        //Arrange
        let input = [3, 2, 3, 4, 3, 2, 1];

        // Act
        let res = isSymmetric(input);

        //Assert
        expect(res).to.be.false;
    });

    it('should return true if inputs is nested array', () => {
        // Arrange
        let arr = [[1], [2], [1]];

        // Act
        let res = isSymmetric(arr);

        //Assert
        expect(res).to.be.true;
    });

    it ('should return false if isSymetric have string and number in array', () => [
        expect(isSymmetric(['1',2]))
    ]);

    it ('should return true if input have only one param' , () => {
        let input = [2];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    })
});
