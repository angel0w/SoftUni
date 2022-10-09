let {assert, expect} = require('chai');
let {sum} = require('../04. Sum of Numbers');

describe('Test sum functionally', () => {
    it ('return 0 with empty arr', () => {
        assert.equal(sum([]),0);
    })

    it ('work with arr with nums', () => {
        assert.equal(sum([3,3,3]),9);
    })

    it ('return NaN with arr str parram', () => {
        expect(sum(['a', 'b','c'])).to.be.NaN; // Работи
        // assert.equal(sum(['a', 'b', 'c']), NaN); // Не работи
    })
})