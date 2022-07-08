function rotate(array) {
  let rotates = array.pop();

  for (let el = 0; el < rotates; el++) {
    let lastEl = array.pop();
    array.unshift(lastEl);
  }
  console.log(array.join(" "));
}
rotate(["1", "2", "3", "4", "2"]);
// rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
