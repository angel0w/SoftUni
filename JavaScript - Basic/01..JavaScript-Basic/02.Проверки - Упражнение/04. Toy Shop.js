function toyShop(input) {
  const puzzle = 2.6;
  const doll = 3;
  const bear = 4.1;
  const minion = 8.2;
  const truck = 2;

  const priceTravel = Number(input[0]);
  const puzzleCount = Number(input[1]);
  const dollCount = Number(input[2]);
  const bearCount = Number(input[3]);
  const minionCount = Number(input[4]);
  const truckCount = Number(input[5]);

  const toysCount =
    puzzleCount + dollCount + bearCount + minionCount + truckCount;
  let totalPrice =
    puzzle * puzzleCount +
    doll * dollCount +
    bear * bearCount +
    minion * minionCount +
    truck * truckCount;
//   Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена.
  if (toysCount >= 50) {
     totalPrice = totalPrice * 0.75;
  }
//    От спечелените пари Петя трябва да даде 10% за наема на магазина.
//     Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
  const rent = totalPrice * 0.1;
  totalPrice = totalPrice - rent;

  let leftMoney = Math.abs(priceTravel - totalPrice);

  if ( priceTravel > totalPrice) {
    console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`);
  } else {
    console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
  }

}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);

