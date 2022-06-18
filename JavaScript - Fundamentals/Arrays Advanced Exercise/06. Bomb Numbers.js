function bombNumbers(sequenceNums, bombWithPower) {
  let bombNum = bombWithPower[0];
  let certainPowerNums = bombWithPower[1];
  let sum = 0;

  for (let i = 0; i < sequenceNums.length; i++) {
    if (sequenceNums.includes(bombNum)) {
      let index = sequenceNums.indexOf(bombNum);
      sequenceNums.splice(index - certainPowerNums, certainPowerNums * 2 + 1);
        
    }
    sum += Number(sequenceNums[i]);
  }
  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
