function leftAndRightSumm(input) {
  let leftSum = 0;
  let rightSum = 0;
  let numbersOfArray = input.shift();

  for (let i = 0; i < numbersOfArray; i++) {
    let currentNum = input[i];
    leftSum += Number(currentNum);
  }

  for (let i = numbersOfArray; i < input.length; i++) {
    let currentNum = input[i];
    rightSum += Number(currentNum);
  }

  if (leftSum === rightSum) {
    console.log(`Yes, sum = ${leftSum}`);
  } else {
    let diff = Math.abs(leftSum - rightSum);
    console.log(`No, diff = ${diff}`);
  }
}
leftAndRightSumm([2, 90, 9, 50, 50]);
// leftAndRightSumm([1, 1, 1]);
// leftAndRightSumm([1, 1, 0]);
// leftAndRightSumm([1, 0, 1]);
// leftAndRightSumm([2, 10, 90, 60, 40]);
