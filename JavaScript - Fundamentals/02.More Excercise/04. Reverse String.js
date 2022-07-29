function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);

  // let newStr = str.split("").reverse().join("");
  // console.log(newStr);
}
reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");
