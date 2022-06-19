function theLift(input) {
  let passengers = Number(input.shift());
  let wagon = input.shift().split(" ").map(Number);
  let wagonsLength = wagon.length;

  if (passengers) {
    for (let i = 0; i < wagonsLength; i++) {
      let currentWagon = wagon[i];

      while (currentWagon !== 4) {
        currentWagon++;
        passengers--;
        if (passengers === 0) {
          break;
        }
      }

      wagon[i] = currentWagon;
      if (passengers === 0) {
        break;
      }
    }

    let isFull = wagon.filter((w) => w !== 4);
    if (isFull.length === 0 && passengers === 0) {
      console.log(wagon.join(" "));
    } else if (isFull.length !== 0) {
      console.log("The lift has empty spots!");
      console.log(wagon.join(" "));
    } else {
      console.log(`There ist't enough space! ${passengers} people in a queue!`);
      console.log(wagon.join(" "));
    }
  }
}
theLift(["15", "0 0 0 0 0"]);
