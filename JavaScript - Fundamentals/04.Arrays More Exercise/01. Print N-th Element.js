function printNElement(arr) {
  let arrL = arr.length - 1;
  let step = Number(arr[arrL]);
  let res2 = [];
  let result = "";
  for (let i = 0; i < arrL; i += step) {
    //   result += arr[i];  test
    // result += `${arr[i]} `;  test
    res2.push(arr[i]);
  }
  console.log(res2.join(" "));
  //   console.log(result);
}
printNElement(["5", "20", "31", "4", "20", "2"]);
// printNElement(["dsa", "asd", "test", "test", "2"]);
// printNElement(["1", "2", "3", "4", "5", "6"]);
