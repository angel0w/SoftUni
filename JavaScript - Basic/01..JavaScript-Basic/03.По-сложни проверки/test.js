function workingHours(input) {
  const hours = Number(input[0]);
  const dayOfWeek = input[1];
 
  if (hours >= 10 && hours <= 18) {
    if (dayOfWeek != 'Sunday'){
       console.log('open');}
  } else {
    console.log('closed');
  }
}
workingHours(["11", "das"]);
workingHours(["19", "dasd"]);
workingHours(["11", "asd"]);