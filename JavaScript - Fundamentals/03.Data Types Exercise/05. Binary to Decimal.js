function binaryToDecimal(binary) {
  let binaryStr = binary.toString();
  let digit = parseInt(binaryStr, 2);

  console.log(digit);
}
binaryToDecimal(00001001);
binaryToDecimal(11110000);
