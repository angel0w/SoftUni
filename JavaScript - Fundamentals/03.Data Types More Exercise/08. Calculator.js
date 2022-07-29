function calculator(first, operator, second) {
  if (operator === "+") {
    console.log((first + second).toFixed(2));
  } else if (operator === "-") {
    console.log((first - second).toFixed(2));
  } else if (operator === "*") {
    console.log((first * second).toFixed(2));
  } else if (operator === "/") {
    console.log((first / second).toFixed(2));
  }
}
calculator(5, "+", 10);

function calculatorTwo(first, operator, second) {
  let sum = 0;
  switch (operator) {
    case "+":
      sum = first + second;
      break;

    case "-":
      sum = first - second;
      break;
    case "*":
      sum = first * second;
      break;
    case "/":
      sum = first / second;
      break;
  }
  console.log(sum.toFixed(2));
}
calculatorTwo(5, "+", 10);
calculatorTwo(25.5, "-", 3);
