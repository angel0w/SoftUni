function movieDestination (input){
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let dayCount = Number(input[3]);

    let sum = 0;

    switch(destination){
        case 'Dubai':
            if (season === 'Winter'){
                sum += 45000;
            } else {
                sum += 40000;
            }
            break;
        case 'Sofia':
            if ( season === 'Winter'){
                sum += 17000;
            } else {
                sum += 12500;
            }
            break;
        case 'London':
            if (season === 'Winter'){
                sum += 24000;
            } else {
                sum += 20250
            }
            break;
    }
    sum *= dayCount;
    if (destination === 'Dubai'){
        sum *= 0.70;
    } else if ( destination === 'Sofia'){
        sum *= 1.25;
    }

    let diff = Math.abs(sum - budget)
    if ( sum <= budget){
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`"The director needs ${diff.toFixed(2)} leva more!"`)
    }
}
movieDestination(["40000","Sofia","Winter","20"])
