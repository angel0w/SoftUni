function mergeArray(firstArr, secondArr) {
  let firstArrL = firstArr.length;
  let thirdArray = [];

  for (let i = 0; i < firstArrL; i++) {
    if (i % 2 === 0) {
      thirdArray[i] = Number(firstArr[i]) + Number(secondArr[i]);

    } else {
      thirdArray[i] = firstArr[i] + secondArr[i];

    }
  }
  console.log(thirdArray.join(" - "));
}
mergeArray(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
// mergeArray(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
