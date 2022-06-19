function agencyProfit(input) {
    const avioCompany = input[0];
    const biletCountAdult = Number(input[1]);
    const biletCountChild = Number(input[2]);
    const biletPriceNetoAdult = Number(input[3]);
    const feeService = Number(input[4]);

    const biletPriceChild = biletPriceNetoAdult - ( biletPriceNetoAdult * 0.7);

    const FeeAdult = feeService + biletPriceNetoAdult;
    const freeChild = feeService + biletPriceChild;

    const totalPrice = FeeAdult * biletCountAdult + freeChild * biletCountChild;

    const winAgency = totalPrice * 0.2;



console.log(`The profit of your agency from ${avioCompany} tickets is ${winAgency.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir", "15", "5", "120", "40"]);
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);
