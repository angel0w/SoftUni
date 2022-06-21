function manOWar(input) {
  let statusPirateShip = input.shift().split(">").map(Number);
  let warShip = input.shift().split(">").map(Number);
  let maxHealth = Number(input.shift());

  let index = 0;
  let line = input[index];
  while (line !== "Retire") {
    let tokens = line.split(" ");
    let index;

    switch (toke[0]) {
      case "Fire":
        index = Number(tokens[1]);
        let damage = Number(tokens[2]);
        if(index < 0 || index > warShip.length) {
            line = inpit[index];
            index++;
            continue;
        }
        warShip[index] -= damage;
        break;
      case "Defend":

        break;
      case "Repair":

        break;
      case "Status":

        break;


      default:
        break;
    }
    line = input[index];
    index++;
  }
}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]
);
