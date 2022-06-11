function palindrome(input) {
  for (let el of input) {
    let current = String(el);
    console.log(current);
    let reversed = String(el).split("").reverse().join("");
    console.log(reversed);

    if (current === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindrome([123, 323, 421, 121]);
// palindrome([32,2,232,1010]);
