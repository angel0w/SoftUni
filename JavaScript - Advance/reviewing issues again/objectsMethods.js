// function cityRecord(name,population,treasury) {
//     let obj = {
//         name:city,
//         population:population,
//         treasury:treasury,
//     };
//     return obj;
// }

// let record = {};

// record.obj = city;
// record.population = population;
// record.treasury = treasury;

// let record2 = { name,population,treasury }

let cat = {};
let propName = 'age';
cat.name = 'Puhcho'; // dot notation
cat['breed'] = 'Ulichna Prevyzhodna'; // bracket notation
cat[propName] = 7;
console.log(cat.name);
console.log(cat.breed);
console.log(cat['breed']);
console.log(cat[propName]);
console.log('~~~~~~~~~~~~~');
// Object destructuring Assigment Syntax
let { age, bread } = cat;
console.log(cat);

let car = {};
car.person = 'Gosho';
car.person2 = 'Sasho';
car['person3'] = 'Pesho';
console.log(car);

console.log('~~~~~~~~~~~~~');
//
let phones = {
    'Ivan Petrov': '12312312',
    'Gosho Petrov': '12312312',
};
console.log(phones['Ivan Petrov']);
phones['Ivan Petrov'] = '987654321';
console.log(phones['Ivan Petrov']);

console.log('~~~~~~~~~~~~~');
// Iteration for in

for (name in phones) {
    console.log(name);
}

console.log('~~~~~~~~~~~~~');
// Iteration - methods

let names = Object.keys(phones);
let phoness = Object.values(phones);
console.log(names);
console.log(phoness);

Object.keys(phones).forEach((x) => {
    console.log(`${x} - ${phones[x]}`);
});

// used for Sorting Objects
let entries = Object.entries(phones);
console.log(entries);

for (kvp of entries) {
    console.log(kvp);
}

//

let carr = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    hong: function () {
        // Method with funchiton expression
        console.log('Beep beep');
    },
    hong2: () => {
        // Method with arrow function
        console.log('Beep beep2');
    },
    hong3() {
        // Object method notation
        console.log('Beep beep3');
    },
};
carr.hong();
carr.hong2();
carr.hong3();

let calc = {
    sum: function (a, b) {
        return a + b;
    },
    divide: function (a, b) {
        return a - b;
    },
};

console.log(calc.sum(1, 3));
console.log(calc.divide(1, 3));

console.log('~~~~~~~~~');
// Delete key from object

delete calc.divide;
console.log(calc);

console.log('~~~~~~~~~');
// Copy objecy

let copy = JSON.parse(JSON.stringify(carr));
console.log(copy);

console.log('~~~~~~~~~');
// Достъпване KEY & VALUE

for (let el in carr) {
    // console.log(el); // KEY
    console.log(carr[el]); // VALUE
}

console.log('~~~~~~~~~');

let keys = Object.keys(carr);
let values = Object.values(carr);
let entriessss = Object.entries(carr);

console.log(keys);
console.log(values);
console.log(entriessss[1]);
