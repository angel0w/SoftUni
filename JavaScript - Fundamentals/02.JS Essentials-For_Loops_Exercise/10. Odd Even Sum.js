function oddEvenSum(input) {
  let index = 0;
  let nums = Number(input[0]);
  index++;

  let even = 0;
  let odd = 0;

  for (let i = 0; i < nums; i++) {
    let currentNum = Number(input[index]);
    index++;
    if (i % 2 === 0) {
      even += currentNum;
    } else {
      odd += currentNum;
    }
  }

  let diff = Math.abs(even - odd);

  if (even === odd) {
    console.log("Yes");
    console.log(`Sum = ${even}`);
  } else {
    console.log("No");
    console.log(`Diff = ${diff}`);
  }
}
oddEvenSum([4, 10, 50, 60, 20]);
// oddEvenSum(4, 3, 5, 1, -2);
// oddEvenSum(3, 5, 8, 1);
