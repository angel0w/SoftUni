let {assert} = require('chai');
let {lookupChar} = require("../03. Char Lookup");

describe("Test lookupChar wth incorect type", () => {
    it('result should be indefine with first parameter is incorrect', () => {
        assert.equal(lookupChar(5, 5), undefined);  
    })

    it ('result should be indefine with second param is incorrect', () => {
        assert.equal(lookupChar('Pesho', "Gosho"), undefined);
    })

    it ('result should be indefine with second parameter is decimal number', () => {
        assert.equal(lookupChar('Pesho', 0.99), undefined)
    });

    it('result should be indefine with first parameter is incorrect', () => {
        assert.equal(lookupChar([], 0), undefined);  
    })
})

describe('Test lookupChar with correct type but the value of the index is incorrect', () => {
    it('result should be incorrect inde with bigger index', () => {
        assert.equal(lookupChar('Todor', 100), 'Incorrect index');
    })

    it('result should be Incorrect index with equal indedx', () => {
        assert.equal(lookupChar('Todor', 5), 'Incorrect index');
    })

    it ("result shound be Incorrect index with negative index", () => {
        assert.equal(lookupChar('Todor', -1), 'Incorrect index');
    })
})

describe('Test lookupChar with correct type and value', () => {
    it('result should be T with zero index (Todor)',() => {
        assert.equal(lookupChar("Todor", 4), 'r');
    })
})