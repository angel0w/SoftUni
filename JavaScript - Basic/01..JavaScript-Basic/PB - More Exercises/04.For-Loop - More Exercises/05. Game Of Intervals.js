function gameOfIntervals(input) {
    let index = 0;
    let hodove = Number(input[index]);
    index++;

    let res = 0;

    let nullToNine = 0;
    let tenToNineteen = 0;
    let twentyToTwentynine = 0;
    let thurtyToThurtynine = 0;
    let fourtyToFifty = 0;
    let invalide = 0;

    for ( let i = 0; i < hodove; i++){
        let interval = Number(input[index]);
        index++;

        if ( interval >= 0 && interval <= 9){
            res += hodove * 0.2;
            nullToNine++;

        } else if ( interval >= 10 && interval <=19){
            res += hodove * 0.3;
            tenToNineteen++;

        } else if (interval >= 20 && interval <= 29){
            res += hodove * 0.4;
            twentyToTwentynine++;

        } else if ( interval >= 30 && interval <=39){
            res += 50;
            thurtyToThurtynine++;

        } else if ( interval >= 40 && interval <= 50){
            res += 100;
            fourtyToFifty++;

        } else {
            invalide++
            res /= 2;
        }
    }

    console.log(res.toFixed(2))
    console.log(`From 0 to 9: ${((nullToNine / hodove) * 100)}%`);
    console.log(`From 10 to 9: ${((tenToNineteen / hodove) * 100)}%`)
    console.log(`From 20 to 9: ${((twentyToTwentynine / hodove) * 100)}%`)
    console.log(`From 30 to 9: ${((thurtyToThurtynine / hodove) * 100)}%`)
    console.log(`From 40 to 9: ${((fourtyToFifty / hodove) * 100)}%`)
    console.log(`Invalid numbers: ${((invalide / hodove) * 100)}%`)
}
gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"]);