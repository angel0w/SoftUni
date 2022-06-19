function fruitShop(input) {
  const fruit = input[0];
  const day = input[1];
  const quantity = Number(input[2]);


  if ( day == "Monday" || day == "Tuesday" || day == "Wednesday" || 
  day == "Thursday" || day == "Friday") {
    switch (fruit) {
      case "banana":console.log((quantity * 2.5).toFixed(2));break;
      case "apple":console.log((quantity * 1.2).toFixed(2)); break;
      case "orange":console.log((quantity * 0.85).toFixed(2));break;
      case "grapefruit":console.log((quantity * 1.45).toFixed(2));break;
      case "kiwi":console.log((quantity * 2.7).toFixed(2));break;
      case "pineapple": console.log((quantity * 5.5).toFixed(2));break;
      case "grapes":console.log((quantity * 3.85).toFixed(2));break;
      default:console.log("error");break;
    }
  } else if (day == "Saturday" || day == "Sunday") {
    switch (fruit) {
      case "banana":console.log((quantity * 2.7).toFixed(2));break;
      case "apple":console.log((quantity * 1.25).toFixed(2));break;
      case "orange":console.log((quantity * 0.9).toFixed(2));break;
      case "grapefruit":console.log((quantity * 1.6).toFixed(2));break;
      case "kiwi":console.log((quantity * 3).toFixed(2));break;
      case "pineapple":console.log((quantity * 5.6).toFixed(2));break;
      case "grapes":console.log((quantity * 4.2).toFixed(2));break;
      default:console.log("error");break;
    }
  } else {
      console.log("error");
  }

}
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);
