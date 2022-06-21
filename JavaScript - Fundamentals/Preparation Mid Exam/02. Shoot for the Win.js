function bonusScoringSystem(input) {
  let targets = input.shift();
  targets = targets.split(" ");
  targets = targets.map((x) => Number(x));
  input.pop();

  let numberOfShots = 0;
  let shots = input.map((x) => Number(x));

  for (let i = 0; i < shots.length; i++) {
    let currentShot = shots[i];
    let currentTarget = targets[currentShot];

    if (currentTarget > -1) {
      targets[currentShot] = -1;
      numberOfShots++;

      for (let j = 0; j < targets.length; j++) {
        if (targets[j] > -1) {
          if (targets[j] > currentTarget) {
            targets[j] -= currentTarget;
          } else {
            targets[j] += currentTarget;
          }
        }
      }
    }
  }
  console.log(`Shot targets: ${numberOfShots} -> ${targets.join(" ")}`);
}
bonusScoringSystem(["24 50 36 70", "0", "4", "3", "1", "End"]);
// bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
