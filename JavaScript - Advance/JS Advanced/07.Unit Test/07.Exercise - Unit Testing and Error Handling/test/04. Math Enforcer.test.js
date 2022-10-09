let { expect } = require('chai');
let { mathEnforcer } = require('../04. Math Enforcer');

describe('MathEnforcer', () => {
    it('addFive should return undefined with no input', () => {
        expect(mathEnforcer.addFive()).to.be.undefined;
    });

    it('addFive should return undefined with string', () => {
        expect(mathEnforcer.addFive('string')).to.be.undefined;
    });

    it('addFive should return correct result', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
    });

    it('addFive should return negative result', () => {
        expect(mathEnforcer.addFive(-20)).to.equal(-15);
    });

    it('addFive should return undefined with float number', () => {
        expect(mathEnforcer.addFive(0.5)).to.equal(5.5);
    });



    it('subtract should return undefined with no input', () => {
        expect(mathEnforcer.subtractTen()).to.be.undefined;
    });
    it('subtract should return undefined with string', () => {
        expect(mathEnforcer.subtractTen('string')).to.be.undefined;
    });

    it('subtaract should return correct result', () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });

    it('subtaract should return negative result', () => {
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });

    it('subtaract should return undefined with float number', () => {
        expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
    });



    it('sum should return undefined', () => {
        expect(mathEnforcer.sum('2', 3)).to.be.undefined;
    });

    it('sum should return correct result', () => {
        expect(mathEnforcer.sum(2, 2)).to.equal(4);
    });

    it ('sum should return undefined with half correct input', () => {
        expect(mathEnforcer.sum(1)).to.be.undefined
    })
    it('sum should return correct result with float number', () => {
        expect(mathEnforcer.sum(10.10,10.10)).to.equal(20.20);
    });

    it('sum should return undefined empty input', () => {
        expect(mathEnforcer.sum()).to.be.undefined;
    });
});
