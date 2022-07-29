function sumDigit(num) {
  let numberToString = num.toString();
  let sumOfNumbers = 0;

  for (let index = 0; index < numberToString.length; index++) {
    let currentDigit = Number(numberToString[index]);
    sumOfNumbers += currentDigit;
  }
  console.log(sumOfNumbers);
}
sumDigit(245678);
// sumDigit(97561);
// sumDigit(543);
