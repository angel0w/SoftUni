function processOddNumbers(numbers) {
  let filteredEl = numbers.filter((el, i) => i % 2 == 1);
  let doubledNumbers = filteredEl.map((x) => x * 2);

  console.log(doubledNumbers.reverse().join(" "));
}
processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);
