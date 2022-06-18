function sorting(arr) {
  let smallest = arr.slice().sort((a, b) => a - b);
  let biggest = arr.sort((a, b) => b - a);

  let newArray = [];
  for (let i = 0; i < arr.length / 2; i++) {
    newArray.push(biggest[i]);
    newArray.push(smallest[i]);
  }
  if (arr.length % 2 !== 0) {
    newArray.pop();
  }
  console.log(newArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
