function oddOrEvenSumm(number) {
  let odd = 0;
  let even = 0;
  let numberAsString = number.toString();

  for (let char of numberAsString) {
    let currentNum = Number(char);

    if (currentNum % 2 === 0) {
      even += currentNum;
    } else {
      odd += currentNum;
    }
  }

  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddOrEvenSumm(1000435);
// oddOrEvenSumm(3495892137259234);
