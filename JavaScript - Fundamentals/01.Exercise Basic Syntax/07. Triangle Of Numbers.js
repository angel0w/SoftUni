function triangleOfNums(num) {
  for (let row = 1; row <= num; row++) {
    let space = "";
    for (let col = 1; col <= row; col++) {
      space += `${row} `;
    }
    console.log(space);
  }
}
triangleOfNums(3);
triangleOfNums(5);
triangleOfNums(6);
