function fishTank(input) {
  const length = Number(input[0]);
  const width = Number(input[1]);
  const height = Number(input[2]);
  const percent = Number(input[3]);

  const volume = length * width * height;
  const litreVolume = volume / 1000;

  const reserveSpace = percent / 100;

  const waterNeeded =litreVolume * (1 - reserveSpace);

  console.log(waterNeeded);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
