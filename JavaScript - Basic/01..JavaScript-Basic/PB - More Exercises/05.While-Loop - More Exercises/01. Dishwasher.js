function dishwasher (input){
    let index = 0;
    let preparat = Number(input[0]);
    index++;

    let obshtoPreparat = preparat * 750;
    let command = input[index];
    index++;

    let counter = 0;
    let isEnough = true;
    let kolichestvo = 0;
    let chinii = 0;
    let tenjeri = 0;

    while (command !== "End"){
        let sudove = Number(command);
        counter++;
        if ( counter % 3 == 0){
            tenjeri += sudove;
            kolichestvo = sudove * 15;
            obshtoPreparat = obshtoPreparat - kolichestvo;
        } else {
            chinii += sudove;
            sudove *= 5;
            obshtoPreparat -= sudove;
        }



        if ( obshtoPreparat < 0){
            isEnough = false;
          
            console.log(`Not enough detergent, ${Math.abs(obshtoPreparat)} ml. more necessary!`);
            break;
        }

        command = input[index];
        index++;
    }
    if (obshtoPreparat >= 0 ){
       
        console.log("Detergent was enough!");
        console.log(`${chinii} dishes and ${tenjeri} pots were washed.`);
        console.log(`Leftover detergent ${obshtoPreparat} ml.`)
    }
}
dishwasher(["2","53","65","55","End"]);
//dishwasher(["1","10","15","10","12","13","30"]);