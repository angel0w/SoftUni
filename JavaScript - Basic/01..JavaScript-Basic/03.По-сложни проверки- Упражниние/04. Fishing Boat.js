function fishingBoat(input) {
    const budgetGroup = Number(input[0]);
    let season = input[1];
    const fisherCount = Number(input[2]);
    let rent = 0;

    if ( season === "Spring"){
        rent = 3000;
    } else if ( season === "Summer" || season === "Autumn"){
        rent =  4200;
    } else if ( season === "Winter"){
        rent = 2600;
    }

    if ( fisherCount <= 6){
        rent *= 0.90; 
    } else if (fisherCount >= 7 && fisherCount <= 11){
        rent *= 0.85;
    } else if (fisherCount >=12){
        rent *= 0.75;
    }

    if (fisherCount % 2 === 0 && season != "Autumn"){
        rent *= 0.95;
    }
    let diff = Math.abs(rent - budgetGroup);
    
    if ( budgetGroup >= rent){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
