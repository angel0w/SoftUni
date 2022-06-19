function transportPrice(input) {
    const kilometers = Number(input[0]);
    const typeDay = input[1];

    const taxiInitial = 0.7;
    const taxiDayKilom = 0.79;
    const taxiNightKilom = 0.9;

    const busKilom = 0.09;
    const trailKilom = 0.06;

    let fee = 0;
        if (kilometers < 20){
            fee = fee + taxiInitial;
            if( typeDay === "day"){
                fee =  fee + kilometers * taxiDayKilom;
            } else if ( typeDay === "night"){
                fee = fee + kilometers * taxiNightKilom;
            }
        } else if (kilometers > 20 && kilometers < 100){
            fee = kilometers * busKilom;
        } else if ( kilometers > 100){
            fee = kilometers * trailKilom;
        }
    console.log(fee.toFixed(2))
}
transportPrice(["5","day"]);
transportPrice(["7","night"]);
transportPrice(["25","days"]);
transportPrice(["180","night"]);
