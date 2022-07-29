function computerStore(input) {
  let index = 0;
  let command = input[index];
  index++;

  let partsPrice = 0;
  let partsPriceTaxes = 0;
  let taxes = 0;
  while (command !== "special" && command !== "regular") {
    let currentPrice = Number(command);

    if (currentPrice < 0) {
      console.log("Invalid price!");
      command = input[index];
      index++;
      continue;
    }

    partsPrice += currentPrice;
    taxes = partsPrice * 0.2;
    partsPriceTaxes = partsPrice + taxes;

    command = input[index];
    index++;
  }
  if (command === "special") {
    partsPriceTaxes *= 0.9;
  }

  if (partsPriceTaxes === 0) {
    console.log("Invalid order!");
  } else {
    console.log(
      `Congratulations you've just bought a new computer!\nPrice without taxes: ${partsPrice.toFixed(
        2
      )}$\nTaxes: ${taxes.toFixed(
        2
      )}$\n-----------\nTotal price: ${partsPriceTaxes.toFixed(2)}$`
    );
  }
}

// computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
// computerStore([
//   "1023",
//   "15",
//   "-20",
//   "-5.50",
//   "450",
//   "20",
//   "17.66",
//   "19.30",
//   "regular",
// ]);
computerStore(["regular"]);
