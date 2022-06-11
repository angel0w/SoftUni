function perfectNumber(number) {
  let sumOfDivisors = 1;

  for (let currentNumber = 2; currentNumber < number; currentNumber++) {
    if (number % currentNumber === 0) {
      sumOfDivisors += currentNumber;
    }
  }

  let result =
    sumOfDivisors === number
      ? "We have a perfect number!"
      : "It's not so perfect.";
  console.log(result);
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
