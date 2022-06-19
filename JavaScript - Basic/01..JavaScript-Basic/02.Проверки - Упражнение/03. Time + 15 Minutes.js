function timePlusMinutes(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);
    minutes += 15;

    if ( minutes  >= 60){
        hours += 1;
        minutes -= 60; 
    }

  if ( hours >= 24){
      hours = 0;
  }
  if (minutes < 10 ){
      console.log(`${hours}:0${minutes}`)

      } else {
          console.log(`${hours}:${minutes}`)
      }

}
timePlusMinutes(["1", "46"]);
timePlusMinutes(["0", "01"]);
timePlusMinutes(["23", "59"]);
timePlusMinutes(["11", "08"]);
timePlusMinutes(["12", "49"]);
