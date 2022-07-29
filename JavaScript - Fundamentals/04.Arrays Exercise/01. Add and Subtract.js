function addSubtract(input) {
  let inputL = input.length;
  let sumOfArray = 0;
  let newArray = 0;

  for (let i = 0; i < inputL; i++) {
    sumOfArray += input[i];
    if (input[i] % 2 === 0) {
      input[i] += i;
    } else {
      input[i] -= i;
    }
    newArray += input[i];
  }
  console.log(input);
  console.log(sumOfArray);
  console.log(newArray);
}
// addSubtract([5, 15, 23, 56, 35]);
addSubtract([-5, 11, 3, 0, 2]);
