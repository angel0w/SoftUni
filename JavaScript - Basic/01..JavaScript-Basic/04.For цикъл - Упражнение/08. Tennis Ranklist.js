function tennisRanking(input) {
    let index = 0;
    let tournamentCount = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    
    let tempPoints = 0;
    let countWin = 0;

    for ( let i = 0; i < tournamentCount; i++){
        let res = input[index];
        index++;
        switch (res){
            case "W":
                tempPoints += 2000;
                countWin++;
                break;
            case "F": tempPoints += 1200;break;
            case "SF": tempPoints += 720;break;
        }

    }
    let finalPoint = startPoints + tempPoints;
    let avgPoint = tempPoints / tournamentCount;
    let win = countWin / tournamentCount * 100;
    console.log(`Final points: ${finalPoint}`);
    console.log(`Average points: ${Math.floor(avgPoint)}`);
    console.log(`${win.toFixed(2)}%`)
}
tennisRanking(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
