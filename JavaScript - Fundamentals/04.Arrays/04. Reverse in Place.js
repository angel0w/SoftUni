function reverseInPalce(arr) {
  let reverse = "";
  let space = " ";
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse += arr[i] + space;
  }
  console.log(reverse);

  //   let k = arr.length - 1;
  //   for (let i = 0; i < arr.length / 2; i++, k--) {
  //     let temp = arr[i];
  //     arr[i] = arr[k];
  //     arr[k] = temp;
  //   }
  //   console.log(arr.join(" "));
}
reverseInPalce(["a", "b", "c", "d", "e"]);
console.log(`~~~~~~~~~`);
reverseInPalce(["abc", "def", "hig", "klm", "nop"]);
console.log(`~~~~~~~~~`);
reverseInPalce(["33", "123", "0", "dd"]);
