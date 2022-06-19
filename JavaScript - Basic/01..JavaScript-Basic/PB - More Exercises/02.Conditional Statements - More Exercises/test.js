function transportPrice(input) {
    const kilometers = Number(input[0]);
    const dayOrNight = input[1];
    let taksa = 0.70;
    if (kilometers < 20) {
        if (dayOrNight === "day") {
            const dayTaksa = 0.79;
            console.log((taksa + kilometers * dayTaksa).toFixed(2));
        } else {
            const nightTaksa = 0.90;
            console.log((taksa + kilometers * nightTaksa).toFixed(2));
        }
    } else if (kilometers >= 100) {
        taksa = 0.06;
        console.log((kilometers * taksa).toFixed(2));
    } else if (kilometers < 100) {
        taksa = 0.09;
        console.log((kilometers * taksa).toFixed(2));
    }
}