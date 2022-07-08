function addAndSubtrack(a, b, c) {
  sum = a + b;
  
  substract(c);
  function substract() {
    sumSubt = sum - c;
  }
  console.log(sumSubt);
}
addAndSubtrack(23, 6, 10);
addAndSubtrack(1, 17, 30);
addAndSubtrack(42, 58, 100);
