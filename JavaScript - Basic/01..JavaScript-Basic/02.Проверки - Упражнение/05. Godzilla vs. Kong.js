function godzillaVsKong(input) {
  const budgetFilm = Number(input[0]);
  const staticsCount = Number(input[1]);
  let outfitPriceCount = Number(input[2]);

  const decor = budgetFilm * 0.1;

  if (staticsCount > 150) {
    outfitPriceCount *= 0.9;
  }
  const totalOutfitPrice = staticsCount * outfitPriceCount;

  const totalPrice = decor + totalOutfitPrice;
  const leftMoney = Math.abs(budgetFilm - totalPrice);

  if (budgetFilm >= totalPrice) {
    console.log("Action!");
    console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
  } else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${leftMoney.toFixed(2)} leva more.`);
  }
}
godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
