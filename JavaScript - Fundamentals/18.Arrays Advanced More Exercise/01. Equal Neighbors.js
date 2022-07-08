function equalNeighbors(arr) {
  let count = [];
  for (let i = 1; i < arr.length; i++) {

    let filteredArray = arr[i].filter((number, index) => {
      return arr[i - 1].indexOf(number, index) === index;
    });

    count.push(...filteredArray);

    let filteredArray1 = arr[i - 1].filter((element, index) => {
      return element === arr[i - 1][index - 1];
    });
    
    count.push(...filteredArray1);

  }

  let filteredArray2 = arr[arr.length - 1].filter((element, index) => {
    return element === arr[arr.length - 1][index - 1];
  });
  count.push(...filteredArray2);

  console.log(count.length);
}
equalNeighbors([
  ["7", "2", "59", "5", "4"],
  ["2", "0", "95", "3", "2"],
  ["7", "2", "8", "1", "2"],
]);
