function vacation(number, type, day) {
  let sum = 0;

  if (type === "Students") {
    switch (day) {
      case "Friday":
        sum = number * 8.45;
        break;
      case "Saturday":
        sum = number * 9.8;
        break;
      case "Sunday":
        sum = number * 10.46;
        break;
    }

    if (number >= 30) {
      sum = sum * 0.85;
    }
  } else if (type === "Business") {
    if (number >= 100) {
      number = number - 10;
    }

    switch (day) {
      case "Friday":
        sum = number * 10.9;
        break;
      case "Saturday":
        sum = number * 15.6;
        break;
      case "Sunday":
        sum = number * 16;
        break;
    }
  } else if (type === "Regular") {
    switch (day) {
      case "Friday":
        sum = number * 15;
        break;
      case "Saturday":
        sum = number * 20;
        break;
      case "Sunday":
        sum = number * 22.5;
        break;
    }

    if (number >= 10 && number <= 20) {
      sum = sum * 0.95;
    }
  }

  console.log(`Total price: ${sum.toFixed(2)}`);
}
vacation(130, "Business", "Sunday");
