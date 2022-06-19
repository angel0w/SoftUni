function oscars(input) {
    let index = 0;
    let actior = input[index];
    index++;

    let point = Number(input[index]);
    index++;
    let juriCount = Number(input[index]);
    index++;
    let isNiminee = false;
    for ( let i = 0; i < juriCount;i++) {
        let name = input[index];
        index++;
        let tempPoint = Number (input[index]);
        index++;
        point += name.length * tempPoint /2;
        if(point > 1250.5) {
            console.log(`Congratulations, ${actior} got a nominee for leading role with ${point.toFixed(1)}!`)
            isNiminee = true;
            break;
        }
    }
    if (!isNiminee){
        let diff = 1250.5 - point;
        console.log(`Sorry, ${actior} you need ${diff.toFixed(1)} more!`)
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
