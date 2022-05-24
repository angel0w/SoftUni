function characterSequence(input) {
  let string = input.shift();
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    console.log(letter);
  }
}
characterSequence(["softuni"]);
// characterSequence("ice cream");
