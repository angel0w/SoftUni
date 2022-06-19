function foodDelivery(input) {
  const chickenMenuPrice = 10.35;
  const fishMenuPrice = 12.4;
  const veggieMenuPrice = 8.15;
  const foodDelivery = 2.5;

  const chickenMenu = Number(input[0]);
  const fishMenu = Number(input[1]);
  const veggieMenu = Number(input[2]);

  const menuCost =
    chickenMenu * chickenMenuPrice +
    fishMenu * fishMenuPrice +
    veggieMenu * veggieMenuPrice;

  const dessert = menuCost * 0.2;

  const totalCost = menuCost + dessert + foodDelivery;

  console.log(totalCost);
}
foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);
