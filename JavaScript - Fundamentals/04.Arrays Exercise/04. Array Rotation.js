function arrayRotation(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let elementToMove = arr.shift();
    arr.push(elementToMove);
  }
  let newArr = arr.join(" ");
  console.log(newArr);
}
arrayRotation([51, 47, 32, 61, 21], 2);
// arrayRotation([32, 21, 61, 1], 4);
// arrayRotation([2, 4, 15, 31], 5);

// while (rotations > 0) {
//   let elementToMove = arr.shift(); //51 ; 47
//   arr.push(elementToMove);
//   rotations--;
// }
// console.log(arr.join(" "));
