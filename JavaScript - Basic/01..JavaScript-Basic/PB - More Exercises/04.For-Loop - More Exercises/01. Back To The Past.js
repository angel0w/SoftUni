function backToThePast(input) {
    let index = 0;
    const money = Number(input[index]);
    index++;
    const yearToLive = Number (input[index]);
    index++;

    let currentAge = 18;
    let sumMoney = 0;

    for (let i = 1800; i <= yearToLive; i++){
        if (i % 2 === 0){
            sumMoney += 12000;
            currentAge++;
            continue;
        } else {
            sumMoney +=  12000 + 50 * currentAge;
            currentAge++;
        }
    }

    let diff = Math.abs(sumMoney - money);

    if ( money >= sumMoney){
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }
}
backToThePast(['50000','1802']);
backToThePast(["100000.15",
"1808"])
