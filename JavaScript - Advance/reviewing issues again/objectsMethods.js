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
let propName = 'age'
cat.name = 'Puhcho' // dot notation
cat['breed'] = 'Ulichna Prevyzhodna'; // bracket notation
cat[propName] = 7;
console.log(cat.name);
console.log(cat.breed);
console.log(cat['breed']);
console.log(cat[propName]);
console.log('~~~~~~~~~~~~~');
// Object destructuring Assigment Syntax
let {age, bread } = cat;
console.log(cat);

let car = {};
car.person = 'Gosho'
car.person2 = 'Sasho';
car['person3'] = "Pesho";
console.log(car);

console.log('~~~~~~~~~~~~~');
//
let phones = {
    'Ivan Petrov': '12312312',
    'Gosho Petrov': '12312312'
}
console.log(phones["Ivan Petrov"]);
phones["Ivan Petrov"] = '987654321';
console.log(phones["Ivan Petrov"]);


console.log('~~~~~~~~~~~~~');
// Iteration for in

for (name in phones) {
    console.log(name);
}


console.log('~~~~~~~~~~~~~');
// Iteration - methods

let names = Object.keys(phones)
let phoness = Object.values(phones)
console.log(names);
console.log(phoness);

Object.keys(phones).forEach((x => {
    console.log(`${x} - ${phones[x]}`);
}))

// used for Sorting Objects
let entries = Object.entries(phones)
console.log(entries);

for(kvp of entries) {
    console.log(kvp);
}