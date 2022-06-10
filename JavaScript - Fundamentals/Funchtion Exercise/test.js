// solve()
// function solve () {
//     let text = '1 2 3 4 5 6'
//     let arr = text.split(' ');
//     console.log(arr.join('<->'));
// }

// <<<<< ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ >>>>>

// Анонимка функция

// let printText = function ( text) {
//     console.log(text);
// }
// printText("Hello");

// <<<<< ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ >>>>>

// function solve() {

//     let printText = function ( text) {
//         console.log(text);
//     }
//     printText("Hello");
// }
// solve();

// <<<<< ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ >>>>>

// рекурсия самопризоваване
// Викана сама фунцкия

// function countDown(x) {
//   console.log(x);
//   if (x > 0) {
//     countDown(x - 1); // invoking itself
//   }

// //   while (x >= 0) {
// //     console.log(x);
// //     x--;
// //   }
// }
// countDown(5);

// <<<<< ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ >>>>>

// function printHeader() {
//     console.log();
// }
// printHeader()

// <<<<< ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ >>>>>

// function printHeader(nameArr) {
//   console.log(nameArr[0] + " " + nameArr[1]);
// }
// printHeader(["John", "Smith"]);

// <<<<< ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ >>>>>

// function printBiggestNum(numbersArr) {
//   let a = Math.min(...numbersArr);
//   console.log(a);
// }
// printBiggestNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// <<<<< ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ >>>>>

// function readFullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
// // const fullName = readFullName  ("John", "Smith");
// // console.log(fullName);
// console.log(readFullName ("John", "Smith"));

// <<<<< ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ >>>>>

// проверка даденм индекс дали е валиден

// function readFullName(arr, index) {
//     let isValindIndex =  isValid(arr, index)//isValid(index, arr)
//     if(!isValindIndex) {
//         return isValindIndex;
//     }

//     // isValid([1,2,3,4,5], 6)

//     function isValid(index, arr) {
//         if (Number.isInteger(index) && index >=0 && index < arr.length) {
//             return true;
//         } else {
//             return false;
//         }
//        }
// }
// console.log(readFullName([1,2,3,4,5], ));

// <<<<< ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ >>>>>

// function repeatString(str,n) {
//     // let buff = '';
//     let buff;
//     for(let i = 0; i < n; i++) {
//         // buff += str;
//         if (!buff) {
//             buff = str

//         } else {
//             buff += str;
//         }
//     }
//     return buff;
// }
// console.log(repeatString("abc",3));

// <<<<< ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ >>>>>

//   => Arrow Function

// function readElInArr(num) {
let increment = (x, b) => {
  b =+ 1;
  return x + b;
};

console.log(increment(3, 4));

// }
// console.log(readElInArr(3));

// function  increment (x) {
//     let increment = x => x +1;
//     console.log(increment);
// }
// increment(5)
