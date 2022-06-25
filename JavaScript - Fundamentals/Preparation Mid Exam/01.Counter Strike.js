function counterStrike(input) {

    let energy = Number(input.shift());
    let wins = 0;
    let isEnergyZero = false;
    for ( let i = 0; i < input.length; i++) {
        let disctanceEnergy = Number(input[i]);
        if (isNaN(disctanceEnergy)) {
            break;
        }

        if (disctanceEnergy <=   energy) {
            energy -= disctanceEnergy;
            wins ++;
            
        } else {
            isEnergyZero = true;
            let final = console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            return final;
        }       

        if  (wins > 0 && wins % 3 === 0){
                energy += wins;
        }

    }
    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
