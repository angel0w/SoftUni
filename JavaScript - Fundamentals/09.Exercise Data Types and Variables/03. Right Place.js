function rightPlace(string, char, string2) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let ch = string[i];
    if (ch === "_") {
      newString += char;
    } else {
      newString += ch;
    }
  }

  let res = newString === string2 ? "Matched" : "Not Matched";
  console.log(res);
}
rightPlace("Str_ng", "I", "Strong");
// rightPlace("Str_ng", "i", "String");
