let obj = {
    name: 'Yoan',
    age: 28,
    town: 'Tryavna',
    country: 'Bulgaria'
}
let stringify = JSON.stringify(obj);

let parse = JSON.parse(stringify);


obj.girlfriend = 'Denitsa';
obj.girlfriend = 'Denitsa Stoilova'
let car = 'cars';

obj[car] = 'Audi, Peogeot';


// sort alphabetically
let sorted = Object.keys(obj).sort().reduce((accumulator, key) => {
    accumulator[key] = obj[key];
    return accumulator;
}, {});
console.log(sorted);