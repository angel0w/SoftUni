function fruit(fruit, weightGr, pricePerKg) {
    let kg = weightGr / 1000
    let moneyForFruit = kg * pricePerKg;
    console.log(`I need $${moneyForFruit.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)