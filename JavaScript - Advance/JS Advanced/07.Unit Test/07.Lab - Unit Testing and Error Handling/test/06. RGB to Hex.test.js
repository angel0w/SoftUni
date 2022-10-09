const { expect } = require('chai');
const rgbToHexColor = require('../06. RGB to Hex');

describe(' function RGB to Hex', () => {

    it('convert current color', () => {
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });

    it('converts to black, down boundr', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('converts to white, upper bound', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('should return undefined for out of upper bound', () => {
        // // Arrange
        // let input = [260, 300, 1200];
        // // Act
        // let result = rgbToHexColor(input);
        // // Assert
        expect(rgbToHexColor(1260,1300,1200)).to.be.undefined;
    });

    it('should return undefined if input is invalid type', () => {
        // Arrange
        let input = ['200', '200', '200'];
        // Act
        let result = rgbToHexColor(input);
        // Assert
        expect(result).to.be.undefined;
    });

    it('should return undefined if input is empty', () => {
        // Arrange

        // Act

        // Assert
        expect(rgbToHexColor()).to.be.undefined;
    });


    it('should return undefined if input is not integer', () => {
        // // Arrange
        // let input = [200.2, 200, 200];
        // // Act
        // let result = rgbToHexColor(input);
        // // Assert
        expect(rgbToHexColor(200.2, 200.3, 200.4)).to.be.undefined;
    });


    it('should return undefined if input is negative', () => {
        expect(rgbToHexColor(-200, -200, -200)).to.be.undefined;
    });

    it('return undefined for missing params', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });

});
