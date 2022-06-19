function trekkingMania(input) {
    let index = 0;
    let groupCount = Number(input[index]);
    index++;
    
    let musala = 0;
    let monbland = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;

    for ( let i = 0; i < groupCount; i++){
        let countPeople = Number(input[index]);
        index++;
        total +=countPeople;
        
        if ( countPeople <= 5 ){
            musala+= countPeople;
        } else if ( countPeople >= 6 && countPeople <= 12){
            monbland+= countPeople;
        } else if ( countPeople >= 13 && countPeople <= 25){
            kilimanjaro+= countPeople;
        } else if ( countPeople >= 26 && countPeople <=40){
            k2+=countPeople;
        } else {
            everest +=countPeople;
        }
    }
    let musalaProc = musala / total * 100;
    let monblancProc = monbland / total * 100;
    let kilimanjaroProc = kilimanjaro / total * 100;
    let k2Proc = k2 / total * 100;
    let everestProc = everest / total * 100;
    
    console.log(`${musalaProc.toFixed(2)}%`)
    console.log(`${monblancProc.toFixed(2)}%`)
    console.log(`${kilimanjaroProc.toFixed(2)}%`)
    console.log(`${k2Proc.toFixed(2)}%`)
    console.log(`${everestProc.toFixed(2)}%`)

}

trekkingMania(["5", "25", "41", "31", "250", "6"]);
