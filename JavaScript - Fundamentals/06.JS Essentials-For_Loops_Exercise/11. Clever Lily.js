function cleverLily(input) {
  let lilyYear = input[0];
  let washmachinePrice = input[1];
  let toyPrice = input[2];
  let currentMoney = 10;
  let totalMoney = 0;
  let toys = 0;
  let stolen = 0;
  let moneyFromSellToys = 0;

  for (let stepYear = 1; stepYear <= lilyYear; stepYear++) {
    if (stepYear % 2 === 0) {
      totalMoney += currentMoney;
      currentMoney += 10;
      stolen++;
    } else {
      toys++;
    }
  }
  let stolenMoney = stolen * 1;
  totalMoney -= stolenMoney;

  moneyFromSellToys = toys * toyPrice;
  totalMoney += moneyFromSellToys;

  let diff = Math.abs(totalMoney - washmachinePrice);
  if (totalMoney >= washmachinePrice) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}
// cleverLily([10, 170.0, 6]);
cleverLily([21, 1570.98, 3]);
