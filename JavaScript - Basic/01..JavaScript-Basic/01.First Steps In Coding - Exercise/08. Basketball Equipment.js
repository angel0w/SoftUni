function basketballEquipment (input) {
    const taxYear = Number(input[0]);

    const sneakers = taxYear - (taxYear * 0.4);
    const outfit = sneakers - (sneakers * 0.2);
    const ball = outfit / 4;
    const accessories = ball / 5;

    const cost = taxYear + sneakers + outfit + ball + accessories;

    console.log(cost);

}
basketballEquipment(["365 "]);
basketballEquipment(["550 "]);