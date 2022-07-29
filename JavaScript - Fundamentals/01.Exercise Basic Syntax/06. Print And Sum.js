function printAndSum(startNum, endNum) {
  let sum = 0;
  let space = "";

  for (let i = startNum; startNum <= endNum; startNum++) {
    sum += startNum;

    space += `${startNum} `;
  }
  console.log(space);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
