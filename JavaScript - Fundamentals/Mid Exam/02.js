function taxCalculator (arr) {
    let array = arr.join('>>').split('>>');
    let sum = 0;
    let taxes = 0;
    let tokens = [];

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' ');

        if (tokens[0] === "family") {
            taxes = Math.trunc(tokens[2] / 3000) * 12 + (50 - tokens[1] * 5)
            sum += taxes;
            console.log(`A family car will pay ${taxes.toFixed(2)} euros in taxes.`);
        } else if (tokens[0] === "heavyDuty") {
            taxes = Math.trunc(tokens[2] / 9000) * 14 + (80 - tokens[1] * 8)
            sum += taxes;
            console.log(`A heavyDuty car will pay ${taxes.toFixed(2)} euros in taxes.`);
        } else if (tokens[0] === "sports") {
            taxes = Math.trunc(tokens[2] / 2000) * 18 + (100 - tokens[1] * 9)
            sum += taxes;
            console.log(`A sports car will pay ${taxes.toFixed(2)} euros in taxes.`);
        } else {
            console.log('Invalid car type.');
        }

    }
    console.log(`The National Revenue Agency will collect ${sum.toFixed(2)} euros in taxes.`);
}
// taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
taxCalculator([`family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012`])
