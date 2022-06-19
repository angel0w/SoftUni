function suppliesForSchool(input) {
  const packetPens = Number(input[0]);
  const packetMarkers = Number(input[1]);
  const preparation = Number(input[2]);
  const percent = Number(input[3]);

  const pensSum = 5.8;
  const markersSum = 7.2;
  const preparationSum = 1.2;
  const totalPrice =
    packetPens * pensSum +
    packetMarkers * markersSum +
    preparation * preparationSum;

  const discount = totalPrice -  (totalPrice * percent) / 100;
  //const all = totalPrice - discount;
  console.log(discount);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
