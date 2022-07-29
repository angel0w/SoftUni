function repeatString(str, n) {
  let buff = "";
  for (let i = 0; i < n; i++) {
    if (!buff) {
      buff = str;
    } else {
      buff += str;
    }
  }
  return buff;
}
console.log(repeatString("abc", 3));
// repeatString("String", 2);
