function hotelRoom(input) {
  const mount = input[0];
  const nights = Number(input[1]);
  let studio = 0;
  let apart = 0;
  if (mount === "May" || mount === "October") {
    studio = 50;
    apart = 65;
        if (nights > 14){
            studio *= 0.7;
        } else if (nights >7){
            studio *= 0.95;
        }
  } else if (mount === "June" || mount === "September") {
    studio = 75.2;
    apart = 68.70;
        if (nights > 14) {
            studio *= 0.8;
        }
  } else if (mount === "July" || mount === "August") {
    studio = 76;
    apart = 77;
  }
        if (nights > 14) {
        apart *= 0.9;
        }

  let sumStudioNights = studio * nights;
  let sumApartNights = apart * nights;

  console.log(`Apartment: ${sumApartNights.toFixed(2)} lv.`);
  console.log(`Studio: ${sumStudioNights.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
