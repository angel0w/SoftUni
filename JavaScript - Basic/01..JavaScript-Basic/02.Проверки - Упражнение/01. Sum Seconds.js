function sumSeconds (input) {
    const racerSec1 = Number(input[0]);
    const racerSec2 = Number(input[1]);
    const racerSec3 = Number(input[2]);

    let totalSecs = racerSec1 + racerSec2 + racerSec3;

    let minutes = Math.floor(totalSecs / 60);
    let seconds = totalSecs % 60;

    if ( seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);
