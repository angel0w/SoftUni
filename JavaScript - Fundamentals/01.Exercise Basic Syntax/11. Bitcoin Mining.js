function bitcoinMining(minedGold) {
  const goldGram = 67.51;
  const bitcoin = 11949.16;

  let dayCounter = 0;
  let bitcoinCount = 0;
  let money = 0;
  let dayBuyedBitcoin = 0;
  let thirdDay = 0;

  for (let i = 0; i < minedGold.length; i++) {
    dayCounter++;
    thirdDay++;

    if (thirdDay === 3) {
      minedGold[i] *= 0.7;
      thirdDay = 0;
    }

    money += minedGold[i] * goldGram;

    while (money >= bitcoin) {
      money -= bitcoin;
      bitcoinCount++;

      if (bitcoinCount == 1) {
        dayBuyedBitcoin += dayCounter;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoinCount}`);
  if (bitcoinCount >= 1) {
    console.log(`Day of the first purchased bitcoin: ${dayBuyedBitcoin}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([3124.15, 504.212, 2511.124]);
