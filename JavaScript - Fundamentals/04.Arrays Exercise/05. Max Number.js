function maxNumber(array) {
  let newArray = [];
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    let number1 = array[i];
    let isBiggest = true;

    for (let j = i + 1; j < arrayL; j++) {
      let number2 = array[j];

      if (number1 <= number2) {
        isBiggest = false;
      }
    }
    if (isBiggest) {
      newArray.push(number1);
    }
  }
  console.log(newArray.join(" "));
}
maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([41, 41, 34, 20]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);
