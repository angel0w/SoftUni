function orders(product, quantity) {
  let totalPrice;
  if (product === "coffee") {
    totalPrice = quantity * 1.5;
    // console.log((totalPrice = quantity * 1.50).toFixed(2));
  } else if (product === "water") {
    totalPrice = quantity * 1;
    // console.log((totalPrice = quantity * 1).toFixed(2));
  } else if (product === "coke") {
    totalPrice = quantity * 1.4;
    // console.log((totalPrice = quantity * 1.4).toFixed(2));
  } else if (product === "snacks") {
    totalPrice = quantity * 2;
    // console.log((totalPrice = quantity * 2).toFixed(2));
  }
  return totalPrice.toFixed(2);
  // console.log(totalPrice.toFixed(2));
}
console.log(orders("water", 5));
// orders("water", 5);
// orders("coffee", 2);
