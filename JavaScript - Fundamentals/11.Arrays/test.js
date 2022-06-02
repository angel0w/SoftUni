// function solve() {
//   let arr = ["s", "o", "f", "t", "u", "n", "i"];
// //   let newArr = arr[0] + arr[1];
//   console.log(arr.length);

// }
// solve();

// function solve() {
//   let arr = [1, 2, 3, 4, 5, 6];

//   arr[3] = 50;
//   console.log(arr);

//   arr.push(50);
//   console.log(arr);
// }
// solve();

// function solve() {
//   let arr = [1, 2, 3, 4, 5];
//   arr[0] = 50;

//   console.table(arr);
// }
// solve();

// {
//   let x = 8;
// }
// console.log(x);

// function solve() {
//   let arr = [1, 2, 3, 4, 5];
//   let type = typeof(arr.join());
//   console.log(type);
//   console.log(arr.join("~"));
// }
// solve();

// function solve() {
//     let arr = [1, 2, 3, 4, 5,6];
//     for (let i = 0; i < arr.length; i ++){
//         console.log(arr[i]);
//     }
//   }
//   solve();

// function solve(arr) {
//   // let firstArr = arr[0];
//   // let lastArr = arr[arr.length -1];
//   // let sum = firstArr + lastArr;
//   // console.log(sum);
//   console.log(arr[0] + arr[arr.length - 1]);
// }
// solve([20, 30, 40]);

// function solve(day) {
//   let days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   if (day >= 1 && day <= 7) {
//     console.log(days[day - 1]);
//   } else {
//     console.log("Invalid day!");
//   }
// }
// solve(7);

// function solve(n, numbers) {
//   let newArr = [];

//   for (let i = 0; i < n; i++) {
//     newArr.push(numbers[i]);
//   }

//   let output = "";
//   for (let i = newArr.length - 1; i >= 0; i--) {
//     output += newArr[i] + " ";
//   }
//   console.log(output);
// }
// solve(3, [10, 20, 30, 40, 50]);
// // solve(4, [-1, 20, 99, 5]);
// // solve(2, [66, 43, 75, 89, 47]);

// function solve(n, numbers) {
//   let res = [];

//   for (let i = n - 1; i >= 0; i--) {
//     res.push(numbers[i]);
//   }
//   console.log(res.join(" "));
// }
// solve(3, [10, 20, 30, 40, 50]);
// solve(4, [-1, 20, 99, 5]);
// solve(2, [66, 43, 75, 89, 47]);

// 04. Reverse in Place
// function solve(arr) {
//   let reverse = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse += arr[i] + " ";
//   }
//   console.log(reverse);
// }
// solve(["a", "b", "c", "d", "e"]);
// solve(["abc", "def", "hig", "klm", "nop"]);
// solve(["33", "123", "0", "dd"]);

// 05. Sum Even Numbers

// function solve(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(arr[i]);

//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   console.log(sum);
// }
// // solve(['1','2','3','4','5','6']);
// // solve(['3','5','7','9']);
// solve(["3", "5", "7", "9"]);

// 06. Even and Odd Subtraction
// function solve(numbers) {
//   let result = [];

//   for (let el of numbers) {
//     result.push(el);
//   }

//   while (result.length > 1) {
//     let tempArr = [];
//     for (let i = 0; i < result.length - 1; i++) {
//       tempArr[i] = result[i] + result[i + 1];
//     }
//     result = tempArr;
//   }
//   console.log(result[0]);
// }
// solve([2, 10, 3]);
// solve([5, 0, 4, 1, 2]);
// solve([1]);

///////////////
function solve() {
  let numbers = [1, 2, 3, 4, 5];
  let output = '';
  for(let num of numbers) {
    output +=`${num}`
  }
  console.log(output);
}
solve();
