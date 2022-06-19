function skiTrip(input) {
    const roomOnePerson = 18;
    const apartment = 25;
    const presidentApart = 35;

    const days = Number(input[0]);
    const type = input[1];
    let grade = input[2];

    let sumNights = 0;
    let nights = days - 1;

    if ( type === "room for one person"){
        sumNights = roomOnePerson * nights;
    } else if ( type === "apartment"){
        sumNights = apartment * nights;
            if(days < 10 ){
                sumNights *= 0.7;
            } else if (days >= 10 && days <= 15){
                sumNights *= 0.65;
            } else {
                sumNights *= 0.5;
            }
    } else if (type === "president apartment"){
        sumNights = presidentApart * nights;
            if (days < 10){
                sumNights *= 0.9;
            } else if (days >= 10 && days <= 15){
                sumNights *= 0.85;
            } else {
                sumNights *= 0.8;
            }
    }

    if (grade === 'positive'){
        sumNights *= 1.25;
    } else {
        sumNights *= 0.9;
    }

    console.log(`${sumNights.toFixed(2)}`)
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
