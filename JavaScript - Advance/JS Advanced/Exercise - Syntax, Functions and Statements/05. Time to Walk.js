function timeToWalk(numberSteps, footPrintMeter, speedKm) {
    // Every 500 meters the student rests and takes a 1-minute break
    // Calculate how long the student walks from home to university
    // and print on the console the result in the following format: `hours:minutes:seconds`.

    let meters = numberSteps * footPrintMeter;
    let speedMetersInSec = speedKm / 3.6;
    let time = meters / speedMetersInSec;
    let res = Math.floor(meters / 500);

    let hours = Math.floor(time / 3600);
    let min = Math.floor(time / 60);
    let sec = Number((time - min * 60).toFixed(0));

    hours += Math.floor(min / 60);
    min += res;
    min = min % 60;

    let formattedH = hours < 10 ? `0${hours}` : `${hours}`;
    let formattedM = min < 10 ? `0${min}` : `${min}`;
    let formattedS = sec < 10 ? `0${sec}` : `${sec}`;

    console.log(`${formattedH}:${formattedM}:${formattedS}`);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
