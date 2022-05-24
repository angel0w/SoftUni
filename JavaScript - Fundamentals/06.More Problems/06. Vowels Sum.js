function vowelsSum(input) {
  let string = input[0];
  let sum = 0;

  for (let i = 0; i <= string.length; i++) {
    if (string.charAt(i) === "a") {
      sum += 1;
    } else if (string.charAt(i) === "e") {
      sum += 2;
    } else if (string.charAt(i) === "i") {
      sum += 3;
    } else if (string.charAt(i) === "o") {
      sum += 4;
    } else if (string.charAt(i) === "u") {
      sum += 5;
    }
  }

  console.log(sum);
}
vowelsSum(["hello"]);
// vowelsSum(hi);
// vowelsSum(bamboo);
// vowelsSum(beer);
