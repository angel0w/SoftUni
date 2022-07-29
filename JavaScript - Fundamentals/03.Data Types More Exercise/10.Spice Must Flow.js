function spiceMustFlow(startYield) {
  let dayCounter = 0;
  let spucesExtracted = 0;
  while (startYield >= 100) {
    dayCounter++;
    spucesExtracted += startYield - 26;
    startYield -= 10;
  }

  console.log(dayCounter);
  if (dayCounter !== 0) {
    console.log(spucesExtracted - 26);
  } else {
    console.log(spucesExtracted);
  }
}
spiceMustFlow(111);
