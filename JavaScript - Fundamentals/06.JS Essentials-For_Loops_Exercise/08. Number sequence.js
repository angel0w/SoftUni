function numberSequence(input) {
  let num = Number(input[0]);
  index = 1;

  let maxNumber = Number.MIN_SAFE_INTEGER;
  let minNumber = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= num; i++) {
    let step = Number(input[i]);

    if (maxNumber < step) {
      maxNumber = step;
    }
    if (minNumber > step) {
      minNumber = step;
    }
  }
  console.log(`Max number: ${maxNumber}`);
  console.log(`Min number: ${minNumber}`);
}
numberSequence(["5", "10", "20", "304", "0", "50"]);
// numberSequence(["6", "250", "5", "2", "0", "110", "1000"]);
