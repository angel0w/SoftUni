function firstAndLast(arr) {
  let firstElement = arr.shift();
  let lastElement = arr.pop();

  console.log(Number(firstElement) + Number(lastElement));
}
firstAndLast(["20", "30", "40"]);
firstAndLast(["5", "10"]);
