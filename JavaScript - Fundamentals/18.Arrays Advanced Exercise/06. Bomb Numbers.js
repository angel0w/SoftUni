function bombNumbers(sequenceNums, bombWithPower) {
  let bomb = Number(bombWithPower[0]);
  let range = Number(bombWithPower[1]);

  while (sequenceNums.includes(bomb)) {
    let index = sequenceNums.indexOf(bomb);
    let elementsToRemove = range * 2 + 1;
    let startIndex = index - range;

    if (startIndex < 0) {
      elementsToRemove += startIndex;
      startIndex = 0;
    }
    sequenceNums.splice(startIndex, elementsToRemove);
  }
  console.log(sequenceNums.reduce((a, partial) => a + partial, 0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
