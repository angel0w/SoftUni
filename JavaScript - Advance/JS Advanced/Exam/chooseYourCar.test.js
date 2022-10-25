let chooseYourCar = require('../07.Unit Test/exam/chooseYourCar');
let { assert, expect } = require('chai');

describe('Tests chooseYourCar ', function () {
    describe('TODO choosingType', function () {
        it(' invalid year', function () {
            assert.throw(
                () => chooseYourCar.choosingType('str', 'str', 1800),
                `Invalid Year!`
            );
            assert.throw(
                () => chooseYourCar.choosingType('str', 'str', 2025),
                `Invalid Year!`
            );
        });

        it('invalid type', function () {
            assert.throw(
                () => chooseYourCar.choosingType('str', 'str', 2000),
                'This type of car is not what you are looking for.'
            );
        });

        it('greater or equal year', function () {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal(
                `This red Sedan meets the requirements, that you have.`
            );
        });
        it('otherwse is not greater or equal year', function () {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal(
                'This Sedan is too old for you, especially with that red color.'
            );
        });
    });

    describe('TODO brandName', function () {
        it('correct result', () => {
            expect(
                chooseYourCar.brandName(['BMW', 'Toyota', 'Peogeot'], 2)
            ).to.be.equal('BMW, Toyota');
        });
        it('invalid []', () => {
            assert.throw(
                () => chooseYourCar.brandName({}, 2009),
                `Invalid Information!`
            );
        });
        it('invalid index', () => {
            assert.throw(
                () => chooseYourCar.brandName([], ''),
                `Invalid Information!`
                );
            });
        });
        
        describe('TODO carFuelConsumption', function () {
            // CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres)
        it('corrent result', () => {
            expect(chooseYourCar.carFuelConsumption(2000, 10)).to.be.equal(
                `The car is efficient enough, it burns 0.50 liters/100 km.`
            );
        });
        it('wrong distanceInKilometers', () => {
            assert.throw(
                () => chooseYourCar.carFuelConsumption('', 2009),
                'Invalid Information!'
                );
            });
            it('wrong distanceInKilometers', () => {
                assert.throw(
                    () => chooseYourCar.carFuelConsumption([], 2009),
                    'Invalid Information!'
                );
            });
            it('distanceInKilometers is zero', () => {
            assert.throw(
                () => chooseYourCar.carFuelConsumption(0, 2009),
                'Invalid Information!'
            );
        });
        it('consumptedFuelInLitres is wrong type', () => {
            assert.throw(
                () => chooseYourCar.carFuelConsumption(2000, {}),
                'Invalid Information!'
            );
        });
        it('consumptedFuelInLitres is less than 0', () => {
            assert.throw(
                () => chooseYourCar.carFuelConsumption(2000, -2000),
                'Invalid Information!'
            );
        });
        it('consumptedFuelInLitres is zero', function () {
            assert.throw(
                () => chooseYourCar.carFuelConsumption(2000, 0),
                'Invalid Information!'
            );
        });
    });
});
