function shopingList(arr) {
  let arrL = arr.length;
  let availableProducts = arr[0].split("!");

  for (let i = 1; i < arrL; i++) {
    let currentEl = arr[i].split(" ");
    let command = currentEl[0];
    let product = currentEl[1];
    let newName = currentEl[2];

    if (command === "Go") {
      break;
    } else if (command === "Urgent") {
      if (!availableProducts.includes(product)) {
        availableProducts.unshift(product);
      }
    } else if (command === "Unnecessary") {
      if (availableProducts.includes(product)) {
        let indexOf = availableProducts.indexOf(product);
        availableProducts.splice(indexOf, 1);
        // availableProducts.splice(availableProducts.indexOf(product), 1);
      }
    } else if (command === "Correct") {
      if (availableProducts.includes(product)) {
        let index = availableProducts.indexOf(product);
        availableProducts.splice(index, 1, newName);
      }
    } else if (command === "Rearrange") {
      if (!availableProducts.includes(product)) {
        availableProducts.push(product);
      }
    }
  }

  console.log(availableProducts.join(", "));
}
// shopingList([
//   "Tomatoes!Potatoes!Bread",
//   "Unnecessary Milk",
//   "Urgent Tomatoes",
//   "Go Shopping!",
// ]);
shopingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
