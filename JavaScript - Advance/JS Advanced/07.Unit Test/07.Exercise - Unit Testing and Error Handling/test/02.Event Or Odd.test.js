let { assert } = require('chai');
let {
    isOddOrEven,
} = require('../02.EvenOrOdd');


describe('test isOddOrEven functionality', () => {
    describe('test isOddOrEven with incorrect value', () => {
        it('Result shult be indefine with array argument', () => {
            assert.equal(isOddOrEven([]), undefined);
        });

        it('Result shult be indefine with empty object argument', () => {
            assert.equal(isOddOrEven({}, undefined));
        });

        it('Result shult be indefine with object argument', () => {
            assert.equal(isOddOrEven({ name: 'Pesho' }));
        });

        it('Result shult be indefine with object argumen', () => {
            assert.equal(isOddOrEven(1), undefined);
        });

        it('Result shult be indefine with object argumen', () => {
            assert.equal(isOddOrEven(true), undefined);
        });
    });

    describe("test isOddOrEven wth correct value", () => {
        it("Result should be even with `Love`", () =>{
            assert.equal(isOddOrEven('love'),"even");
        })

        it("Result should be even with `Todor`", () =>{
            assert.equal(isOddOrEven('Todor'),"odd");
        })
    })
});
