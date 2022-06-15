function blackFlag(array) {
  let dayOfPlunders = Number(array[0]);
  let dailyPlunder = Number(array[1]);
  let expectedPlunder = Number(array[2]);

  let plunder = 0;

  for (let i = 1; i <= dayOfPlunders; i++) {
    plunder += dailyPlunder;

    if (i % 3 === 0) {
      plunder += dailyPlunder * 0.5;
    }

    if (i % 5 === 0) {
      plunder = plunder * 0.7;
    }
  }

  let difference = Math.abs(expectedPlunder - plunder);
  let percentDifference = (plunder * 100) / expectedPlunder;

  if (plunder >= expectedPlunder) {
    console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(
      `Collected only ${percentDifference.toFixed(2)}% of the plunder.`
    );
  }
}
// blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
