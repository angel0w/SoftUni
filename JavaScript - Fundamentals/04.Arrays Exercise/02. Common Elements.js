function commonElem(firstArr, secondArr) {
  for (let number of firstArr) {
    if (secondArr.includes(number)) {
      console.log(number);
    }
  }
}
commonElem(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
// commonElem(
//   ["S", "o", "f", "t", "U", "n", "i", " "],
//   ["s", "o", "c", "i", "a", "l"]
// );
