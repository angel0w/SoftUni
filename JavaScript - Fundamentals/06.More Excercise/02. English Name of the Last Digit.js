function engNameToLastDigit(num) {
  //   let lastDigitStr = String(num).slice(-1);
  //   let lastDigitNum = Number(lastDigitStr);
  let last = num % 10;
  if (last == 1) {
    console.log("one");
  } else if (last == 2) {
    console.log("two");
  } else if (last == 3) {
    console.log("three");
  } else if (last == 4) {
    console.log("four");
  } else if (last == 5) {
    console.log("five");
  } else if (last == 6) {
    console.log("six");
  } else if (last == 7) {
    console.log("seven");
  } else if (last == 8) {
    console.log("eight");
  } else if (last == 9) {
    console.log("nine");
  } else {
    console.log("zero");
  }
  //   if (lastDigitNum === 1) {
  //     console.log("one");
  //   } else if (lastDigitNum === 2) {
  //     console.log("two");
  //   } else if (lastDigitNum === 3) {
  //     console.log("three");
  //   } else if (lastDigitNum === 4) {
  //     console.log("four");
  //   } else if (lastDigitNum === 5) {
  //     console.log("five");
  //   } else if (lastDigitNum === 6) {
  //     console.log("six");
  //   } else if (lastDigitNum === 7) {
  //     console.log("seven");
  //   } else if (lastDigitNum === 8) {
  //     console.log("eight");
  //   } else if (lastDigitNum === 9) {
  //     console.log("nine");
  //   }
}
engNameToLastDigit(120);
// engNameToLastDigit(1);
// engNameToLastDigit(1643);
