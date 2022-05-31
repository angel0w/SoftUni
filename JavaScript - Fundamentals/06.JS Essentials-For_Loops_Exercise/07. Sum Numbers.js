function sumNumbers(input) {
  let nums = Number(input[0]);
  let sum = 0;

  for (let i = 1; i <= nums; i++) {
    let nextNum = Number(input[i]);
    sum += nextNum;
  }
  console.log(sum);
}
sumNumbers(["2", "10", "20"]);
// sumNumbers([3, -10, -20, -30]);
// sumNumbers([4, 45, -20, 7, 11]);
// sumNumbers([1, 999]);
