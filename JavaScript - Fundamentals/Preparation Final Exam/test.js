// function passwordReset(input) {
//   let password = input.shift();

//   let commandParser = {
//     TakeOdd: (password) => {

//       return [...password]
//         .filter((symbov, index) => {
//           return index % 2 !== 0;
//         })
//         .join("");
//     },

//     Cut: (password, index, length) => {

//         index = Number(index);
//         length = Number(length);

//         const substring = password.substr(index, length);
//         return password.replace(substring, "");
//     },

//     Substitute: (password, substring, substitute) => {

//         if (password.includes(substring)) {
//             return password.replace(new RegExp(substring, 'g'), substitute);
//         }
//         console.log('Nothing to replace!');
//         return password;
//     },
//   };

//   input.forEach(line => {
    
//     if (line !== 'Done') {
        
//         let [command, ...tokens] = line.split(" ");
//         let oldPassword = password;

//         password = commandParser[command](password, ...tokens);

//         if (oldPassword !== password) {
//             console.log(password);
//         }
//     }
//   });

//   console.log(`Your password is: ${password}`);
// }
// passwordReset([
//   "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//   "TakeOdd",
//   "Cut 15 3",
//   "Substitute :: -",
//   "Substitute | ^",
//   "Done",
// ]);

// console.log("~~~~~~~~");

// passwordReset([
//   "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//   "TakeOdd",
//   "Cut 18 2",
//   "Substitute ! ***",
//   "Substitute ? .!.",
//   "Done",
// ]);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function destinationMapper(str) {
    
//     let points = 0;
//     let destinations = [];
//     const regex = /([=\/])[A-Z][A-Za-z]{2,}\1/gm;
//     const found = str.match(regex);

//     if (found !== null) {
//         found.forEach((el,i) => {
//             if (el[0] === el[el.length - 1]) {
//                 el = el.substring(1, el.length - 1);
//                 points += el.length;
//                 destinations.push(el)
    
//             }
//         });
//     }


//     console.log(`Destinations: ${destinations.join(", ")}`);
//     console.log(`Travel Points: ${points}`);

// }
// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
// console.log("~~~~~~~~");
// destinationMapper("ThisIs some InvalidInput");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function NFS (input) {
//     let carsCount = input.shift();
//     let result = new Map();
 
//     for (const element of input) {
//         if (element === 'Stop') {
//             break;
//         }
//         if (element.includes('|')) {
//             let [car, mileage, fuel] = element.split('|');
//             //'Audi A6|38000|62'
 
//             result.set(car, []);  //result[car] = []
//             result.get(car).push(Number(mileage));
//             result.get(car).push(Number(fuel));
//         }
//         if (element.includes(' : ')) {
//             //'Drive : Audi A6 : 543 : 47'
//             let tokens = element.split(' : ');
 
//             if (element.includes('Refuel')) {
//                 let givenCar = tokens[1];
//                 let givenFuel = Number(tokens[2]);
 
//                 let sum = givenFuel + result.get(givenCar)[1];
 
//                 if (sum > 75) {
//                     result.get(givenCar)[1] = 75;
//                     sum -= 75;
//                     console.log(`${givenCar} refueled with ${givenFuel - sum} liters`);
//                 } else {
//                     result.get(givenCar)[1] = sum;
//                     console.log(`${givenCar} refueled with ${givenFuel} liters`);
//                 }
//             } else if (element.includes('Revert')) {
//                 let givenCar = tokens[1];
//                 let kilometers = Number(tokens[2]);
 
//                 result.get(givenCar)[0] -= kilometers;
 
//                 if (result.get(givenCar)[0] < 10000) {
//                     result.get(givenCar)[0] = 10000;
//                 } else {
//                     console.log(`${givenCar} mileage decreased by ${kilometers} kilometers`);
//                 }
//             } else if (element.includes('Drive')) {
//                 let givenCar = tokens[1];
//                 let distance = Number(tokens[2]);
//                 let givenFuel = Number(tokens[3]);
 
//                 if (givenFuel <= result.get(givenCar)[1]) {
//                     result.get(givenCar)[1] -= givenFuel;
//                     result.get(givenCar)[0] += distance;
//                     console.log(`${givenCar} driven for ${distance} kilometers. ${givenFuel} liters of fuel consumed.`);
//                 } else {
//                     console.log("Not enough fuel to make that ride");
//                 }
 
//                 if (result.get(givenCar)[0] >= 100000) {
//                     result.delete(givenCar);
//                     console.log(`Time to sell the ${givenCar}!`);
//                 }
//             }
//         }
//     }
 
//     for (const [car, carInfo] of result) {
//         console.log(`${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`);
//     }
// }
// NFS([
//   "3",
//   "Audi A6|38000|62",
//   "Mercedes CLS|11000|35",
//   "Volkswagen Passat CC|45678|5",
//   "Drive : Audi A6 : 543 : 47",
//   "Drive : Mercedes CLS : 94 : 11",
//   "Drive : Volkswagen Passat CC : 69 : 8",
//   "Refuel : Audi A6 : 50",
//   "Revert : Mercedes CLS : 500",
//   "Revert : Audi A6 : 30000",
//   "Stop",
// ]);

// console.log("~~~~~~~~");

// NFS([
//   "4",
//   "Lamborghini Veneno|11111|74",
//   "Bugatti Veyron|12345|67",
//   "Koenigsegg CCXR|67890|12",
//   "Aston Martin Valkryie|99900|50",
//   "Drive : Koenigsegg CCXR : 382 : 82",
//   "Drive : Aston Martin Valkryie : 99 : 23",
//   "Drive : Aston Martin Valkryie : 2 : 1",
//   "Refuel : Lamborghini Veneno : 40",
//   "Revert : Bugatti Veyron : 2000",
//   "Stop",
// ]);



