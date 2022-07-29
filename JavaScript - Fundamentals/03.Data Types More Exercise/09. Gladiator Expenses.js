function gladiator(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let fight = 0;
  let shieldBreaks = 0;
  for (let i = 1; i <= lostFights; i++) {
    fight++;
    if (fight % 2 === 0) {
      expenses += helmetPrice;
    }
    if (fight % 3 === 0) {
      expenses += swordPrice;
    }
    if (fight % 6 === 0) {
      expenses += shieldPrice;
      shieldBreaks++;
      if (shieldBreaks % 2 === 0) {
        expenses += armorPrice;
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
// gladiator(7, 2, 3, 4, 5);
gladiator(23, 12.5, 21.5, 40, 200);
