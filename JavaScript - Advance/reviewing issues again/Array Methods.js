let cars = ['Bmw', 'Audi', 'Opel', 'Lada', 'Mercedes'];

// // POP 
// let lastEl = cars.pop();
// // console.log(cars);
// // console.log(lastEl);


// // PUSH
// let newsLength = cars.push('Mercedes');
// // console.log(newsLength);
// // console.log(cars);


// // UNSHIFT
// let firstEl = cars.unshift('bmw');
// console.log(firstEl);
// console.log(cars);


// // SHIFT
// let firstElement = cars.shift('bmw');
// console.log(firstElement);
// console.log(cars);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ || ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\

// splice вмъква на 
// let deletedEl = cars.splice(1, 1 , 'vaz')
// console.log(cars);
// // console.log(deletedEl);


// // fill
// cars.fill('trabant', 3,5);
// console.log(cars);


// // Reverse
// cars.reverse();
// console.log(cars);


// // Sort
// let sorted = cars.sort();
// console.log(cars);
// let numbers = [1, 3, 21, 4, 5];
// console.log(numbers.sort());


// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ || ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
// // Custom sort
// // Numbers
// console.log( numbers.sort((a, b) => b-a)); // 5 4 3 2 1
// console.log( numbers.sort((a, b) => a - b)); // 1 2 3 4 5


// // AlphaBet
// let qwerty = ['b','a','e','d','c']; 
// console.log(qwerty.sort((a,b) => a.localeCompare(b))); // a,b,c,d,e
// console.log(qwerty.sort((a,b) => b.localeCompare(a))); // e,d,c,b,a


// // Join
// console.log(cars.join(', '));


// // Concat
// console.log(cars.concat(numbers));


// // SLice
// let newCars = cars.slice(0,1);
// console.log(cars);
// console.log(newCars);


// // includes
// let isAvailable = cars.includes('Bmw');
// console.log(isAvailable);


// // indexOf
// let bmwIndex = cars.indexOf('Bmw')
// console.log(bmwIndex);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ || ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\


// for of
// for (const car of cars) {
//     // console.log(car);
// }


// // forEach
// cars.forEach(function (car) {
//     console.log(car);
// })


// cars.forEach((car) => console.log(car));


// // Some - true/false
// let result = cars.some((car) =>  {
//     return car[0] == "V";
// })

// console.log(result);


// // Find
let longNameCar = cars.find((car) => {
    return car.length > 3
})
console.log(longNameCar);


// Filter 
let fourLetterCars = cars.filter(car => car.length == 4);
console.log(fourLetterCars);


// Map
let nums = [1,2,3,4,5];
let doubledNums = nums.map(num => num * 2); //  [2, 4, 6, 8, 10]
console.log(doubledNums);
let upperCase = cars.map(car => car.toUpperCase()) // ['BMW', 'AUDI', 'OPEL', 'LADA', 'MERCEDES']
console.log(upperCase);


// Reduce
let sumNums = nums.reduce((acc, number) => {
    return acc + number;
}, 0)
console.log(sumNums);

//
function nameArr(params) {
    let arr = [1,2,3,4];

    let newArr = arr.map(function(el) {
        return el+5
    });

    console.log(newArr);
}
nameArr()
