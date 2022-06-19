function vacationBooksList(input) {
  const pages = Number(input[0]);
  const pagesForHour = Number(input[1]);
  const days = Number(input[2]);

  const hoursForReadBook = pages / pagesForHour;
  const hoursAday = hoursForReadBook / days;

  console.log(hoursAday);
}
vacationBooksList(["212 ", "20 ", "2 "]);
