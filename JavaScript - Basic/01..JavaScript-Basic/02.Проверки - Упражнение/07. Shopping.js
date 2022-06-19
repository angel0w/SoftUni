function shopping (input) {
    let videoCardPrice = 250;

    let budged = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoSum = videoCardCount * videoCardPrice;
    let processorSum = processorCount * ( videoSum * 0.35);
    let ramSum = ramCount * (videoSum * 0.1);

    let totalSum = videoSum + processorSum + ramSum;
    if ( videoCardCount > processorCount){
        totalSum = totalSum * 0.85;
    }
    let diff = Math.abs(totalSum - budged);
    
    if ( budged >= totalSum  ){
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }

}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
