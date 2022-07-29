// 1.1. Smallest of Three Numbers
// function theSmallesNumber(a, b, c) {
//   let smallestN = Math.min(a, b, c);
//   console.log(smallestN);
// }
// theSmallesNumber(2, 5, 3);

// <<< ~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~ >>>

// 2. Add and Subtract
// function add(a, b, c) {
//   let add = a + b;

//   substract();
//   function substract() {
//     res = add - c;
//   }
//   console.log(res);
// }
// add(23, 6, 10);
// add(1, 17, 30);
// add(42, 58, 100);

// <<< ~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~ >>>

// 3. Characters in Range
// function charakterInRange(firstChar, secondChar) {
//   let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
//   console.log(startChar);
//   let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
//   let charsInRangeArray = [];

//   for (let current = startChar + 1; current < endChar; current++) {
//     let currentChar = String.fromCharCode(current);
//     charsInRangeArray.push(currentChar);
//   }
//   console.log(charsInRangeArray.join(" "));
// }
// charakterInRange("a", "d");
// charakterInRange("#", ":");
// charakterInRange("C", "#");

// <<< ~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~ >>>

// 04. Odd And Even Sum
// function oddAndEvenSum(number) {
//   let odd = 0;
//   let even = 0;
//   let numsToString = number.toString();

//   for (let char of numsToString) {

//     let currentNum = Number(char);

//     if (currentNum % 2 === 0) {
//       even += currentNum;
//     } else {
//       odd += currentNum;
//     }
//   }
//   console.log(`Odd sum = ${odd}, Even sum = ${even}`);
// }
// oddAndEvenSum(1000435);
// oddAndEvenSum(3495892137259234);

// <<< ~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~ >>>
// 05. Palindrome Integers
// function palindrome(arr) {
//   for (let el of arr) {
//     let current = String(el);
//     // console.log(current);
//     let reversed = String(el).split("").reverse().join("");
//     // console.log(reversed);
//     if (current === reversed) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   }
// }
// palindrome([123, 323, 421, 121]);

// <<< ~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~ >>>
// 06  Password Validator
// function name(params) {

// }

// <<< ~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~ >>>
// 07 Matrix
// function matrixNxN(num) {
//   for (let i = 0; i < num; i++) {
//     let matrix = [];
//     for (let j = 0; j < num; j++) {
//       matrix.push(num);
//     }
//     console.log(matrix.join(" "));
//   }
// }
// matrixNxN(7);

// <<< ~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~ >>>
// 8. Perfect Number

function perfectNumber(number) {
  let sumOfDivisors = 1;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      sumOfDivisors += i;
    }
  }

  let result =
    sumOfDivisors === number
      ? "We have a perfect number!"
      : "It's not so perfect.";

  console.log(result);
}
perfectNumber(6);

// <<< ~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~ >>>
// 9.  9. Loading Bar

// function loadingBar(number) {
//   let completed = "%".repeat(number / 10);
//   let incompleted = ".".repeat(10 - completed.length);

//   if (incompleted.length === 0) {
//     console.log("100% Complete!");
//   } else {
//     console.log(`${number}% [${completed}${incompleted}]`);
//     console.log(`${"Still loading..."}`);
//   }
// }
// loadingBar(100);
