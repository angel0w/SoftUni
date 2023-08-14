function carFactory(object) {
    let resultCar = {};
    let engine = {};
    let carriege = {};
    // let wheels = {};

    resultCar.model = object.model;

    if (object.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (object.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (object.power <= 2000) {
        engine.power = 200;
        engine.volume = 3500;
    }

    carriege.type = object.carriage;
    carriege.color = object.color;

    if (object.wheelsize % 2 == 0) {
        object.wheelsize--;
        // wheels.wheels = [object.wheelsize - 1];
    }

    resultCar.model = object.model;
    resultCar.engine = engine;
    resultCar.carriage = carriege;
    resultCar.wheels = [
        object.wheelsize,
        object.wheelsize,
        object.wheelsize,
        object.wheelsize,
    ];

    return resultCar;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14,
});
