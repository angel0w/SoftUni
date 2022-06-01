function sumFirstAndLastArrayElements(array) {
  let firstNum = array[0];
  let lastNum = array[array.length - 1];
  let sum = firstNum + lastNum;
  // let sum = array[0] + array[array.length - 1];
  console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);
