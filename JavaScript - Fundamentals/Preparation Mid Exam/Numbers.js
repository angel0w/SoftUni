function numbers(string) {
  let arrOfStrings = string.split(" ");

  let arrOfNums = [];
  let sum = 0;

  for (let el of arrOfStrings) {
    let currentNums = Number(el);
    arrOfNums.push(currentNums);
    sum += currentNums;
  }

  let avg = sum / arrOfNums.length;

  let greaterThanAvg = [];
  for (let el of arrOfNums) {
    if (el > avg) {
      greaterThanAvg.push(el);
    }
  }

  greaterThanAvg = greaterThanAvg.sort((a, b) => b - a);
  for (let i = 0; i < 5 && i < greaterThanAvg.length; i++) {
    console.log(greaterThanAvg[i]);
  }
}
numbers("10 20 30 40 50");
