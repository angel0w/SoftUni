function smallestOf3Nums(a, b, c) {
  if (a < b && a < c) {
    console.log(a);
  } else if (b < a && b < c) {
    console.log(b);
  } else if (c < a && c < b) {
    console.log(c);
  } else {
    console.log(a);
  }
}
smallestOf3Nums(2, 5, 3);
smallestOf3Nums(600, 342, 123);
smallestOf3Nums(25, 21, 4);
smallestOf3Nums(2, 2, 2);
