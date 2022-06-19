function interwewTask() {
  let arr = [1, 2, 3, 4, "asd", true, [5, 6, 7,[8, "asd"]]];
  let result = [];

  function iterateArray(arr) {
    for (let el of arr) {
      if (typeof el === "number") {
        result.push(el);
      } else if (Array.isArray(el)) {
        iterateArray(el);
      }
    }
  }
  
  iterateArray(arr);
  console.log(result);
}
interwewTask();
