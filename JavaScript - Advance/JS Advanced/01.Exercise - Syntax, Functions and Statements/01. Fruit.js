function fruit(type, weightGr, priceForKg) {
    let fruitsKg = weightGr / 1000;
    let money = fruitsKg * priceForKg;

    console.log(
        `I need $${money.toFixed(2)} to buy ${fruitsKg.toFixed(
            2
        )} kilograms ${type}.`
    );
}
fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
