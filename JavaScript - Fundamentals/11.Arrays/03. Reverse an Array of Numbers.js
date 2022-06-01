function reverseArrayOfNums(n, numbers) {
  let res = [];

  for (let r = n - 1; r >= 0; r--) {
    res.push(numbers[r]);
    // }

    // for (let r = res.length -1 ; r >= 0 ; r--) {
    //     console.log(res[r]);
  }
  console.log(res.join(" "));
}
reverseArrayOfNums(3, [10, 20, 30, 40, 50]);
console.log("--------------");
reverseArrayOfNums(4, [-1, 20, 99, 5]);
console.log("--------------");
reverseArrayOfNums(2, [66, 43, 75, 89, 47]);
