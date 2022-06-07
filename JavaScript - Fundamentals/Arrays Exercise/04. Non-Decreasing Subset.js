function nonDecreasingSubset(array) {
  let arrayL = array.length;
  let res = [array[0]];
  for (let i = 1; i < arrayL; i++) {
    if (array[i] >= res[res.length - 1]) {
      res.push(array[i]);
    }
  }
  console.log(res.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingSubset([1, 2, 3, 4]);
// nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
