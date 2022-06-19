function vacation(input) {
  let excursion = Number(input[0]);
  let money = Number(input[1]);
  let index = 2;
  let daysSpend = 0;
  let daysCounter = 0;
  while ( money < excursion){
    let command = input[index];
    index++; 

    let tempMoney = Number(input[index]);
    daysCounter++;

    if ( command === 'spend'){
      money -= tempMoney;
        if ( money < 0){
          money = 0;
        }
    daysSpend++;
    } else if (command = 'safe') {
      money += tempMoney;
      daysSpend--;
    }
    if ( daysSpend === 5){
      console.log("You can't save the money.")
      console.log(`${daysCounter}`)
    }
    if ( money >= excursion){
      console.log(`You saved the money for ${daysCounter} days.`)
    }
    index++;
    command = (input[index]);
  }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);

//vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"]);

//vacation(["250","150","spend","50","spend","50","save","100","save","100",]);
