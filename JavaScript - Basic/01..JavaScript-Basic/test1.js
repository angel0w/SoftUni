function workout(input) {
    let daysCount = Number(input[0]);
    let km = Number(input[1]);
    let index = 2;
 
    let totalKm = 0;
 
    for(let i = 1; i <= daysCount; i++) {
        let percentPerDay = Number(input[index]);
        index++;
        km *= 1 + percentPerDay / 100;
        totalKm += km;
    }
    if(totalKm >= 1000) {
        let kmNeeded = 1000 - totalKm;
        console.log(`You've done a great job running ${Math.ceil(kmNeeded)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(totalKm)} more kilometers`);
    }
 
}
workout(["5",
"30",
"10",
"15",
"20",
"5",
"12"])
