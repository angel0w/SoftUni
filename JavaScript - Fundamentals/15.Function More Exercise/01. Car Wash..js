function carWash(input) {
  let result = 0;

  let soap = (x) => x + 10;
  let water = (x) => x + x * 0.2;
  let vacuum = (x) => x + x * 0.25;
  let mud = (x) => x - x * 0.1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "soap") {
      result = soap(result);
      // result += 10;
    } else if (input[i] === "water") {
      result = water(result);
      // result = result + ( result * 0.2);
    } else if (input[i] === "vacuum cleaner") {
      result = vacuum(result);
      // result = result + ( result * 0.25);
    } else if (input[i] === "mud") {
      result = mud(result);
      // result = result - (result * 0.10);
    }
  }
  console.log(`The car is ${result.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
