function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  let skusan = 0;
  let klas = 1;
  let average = 0;
  let sumOcenka = 0;
  let izkluchena = false;
  while (klas <= 12) {
    let ocenka = Number(input[index]);
    index++;
    if (ocenka < 4) {
      skusan++;
      if (skusan > 1) {
        izkluchena = true;
        console.log(`${name} has been excluded at ${klas} grade`);
        break;
      }
      continue;
    }
    sumOcenka += ocenka;
    klas++;
  }
  if (!izkluchena) {
    average = sumOcenka / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
  }
}
//graduation(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5",]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
