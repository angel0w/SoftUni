function sleepyCat (input) {
    const playWork = 63;
    const PlayHoliday = 127;
    const yearDays = 365;
    const YeartomPlayNorm = 30000;

    const holidays = Number(input[0]);

    const minutesPlayHoli = holidays * PlayHoliday;
    const minutesPlayWork = (yearDays - holidays) * playWork; 

    const totalPlayminutes = minutesPlayHoli + minutesPlayWork;

    const timePlay = Math.abs(YeartomPlayNorm - totalPlayminutes);
    const hours = Math.floor(timePlay / 60);
    const minutes = timePlay % 60;

    if ( totalPlayminutes > YeartomPlayNorm){
        console.log('Tom will run away');
        console.log(`${hours.toFixed(0)} hours and ${minutes.toFixed(0)} minutes more for play`);
    } else {
        console.log('Tom sleeps well')
        console.log(`${hours.toFixed(0)} hours and ${minutes.toFixed(0)} minutes less for play`)
    }

}
sleepyCat(["20"]);
sleepyCat(["113"]);