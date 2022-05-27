function requiredReading(pages, pageReadOneHour, dayForMustRead) {
  let hoursReadBook = pages / pageReadOneHour;
  let hoursPerDay = hoursReadBook / dayForMustRead;

  console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
