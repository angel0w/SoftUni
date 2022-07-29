function evenOddSubtract(arr) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    if (arr[i] % 2 === 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }

  //   for (let num of arr) {
  //     if (num % 2 === 0) {
  //       even += num;
  //     } else {
  //       odd += num;
  //     }
  //   }
  let diff = even - odd;
  console.log(diff);
}
evenOddSubtract([1, 2, 3, 4, 5, 6]);
// evenOddSubtract([3, 5, 7, 9]);
// evenOddSubtract([2, 4, 6, 8, 10]);
