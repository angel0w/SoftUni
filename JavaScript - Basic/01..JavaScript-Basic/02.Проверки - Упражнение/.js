function godzilaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decor = budget * 0.10;
    let moneyForClothing = extras * clothingPrice;
    if ( extras >  150){
        moneyForClothing = moneyForClothing * 0.90;
    }

    let totalMoney = decor + moneyForClothing;
    let diff = Math.abs(totalMoney - budget ); 
    if (budget >= totalMoney ) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    } else { 
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.` );
    }
}