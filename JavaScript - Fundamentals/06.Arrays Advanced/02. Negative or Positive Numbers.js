function negativOrPositiveNumbers(arrayOfString) {
  let result = [];

  for (let element of arrayOfString) {
    let currentEl = Number(element);
    if (currentEl < 0) {
      result.unshift(currentEl);
    } else {
      result.push(currentEl);
    }
  }
  console.log(result.join("\n"));
}
negativOrPositiveNumbers(["7", "-2", "8", "9"]);
negativOrPositiveNumbers(["3", "-2", "0", "-1"]);
