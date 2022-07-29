function tseamAccount(array) {
  let arrayL = array.length;
  let accountGames = array[0].split(" ");

  for (let i = 1; i < arrayL; i++) {
    let currentCommand = array[i].split(" ");
    let command = currentCommand[0];
    let game = currentCommand[1];

    if (command === "Install" && accountGames.includes(game) === false) {
      accountGames.push(game);
    } else if (command === "Uninstall" && accountGames.includes(game)) {
      let index = accountGames.indexOf(game);
      accountGames.splice(index, 1);
    } else if (command == "Update" && accountGames.includes(game)) {
      let index = accountGames.indexOf(game);
      accountGames.splice(index, 1);
      accountGames.push(game);
    } else if (command == "Expansion") {
      let expansion = game.split("-");
      let gameNew = expansion[0];
      if (accountGames.includes(gameNew)) {
        let expandedGame = expansion.join(":");
        let index = accountGames.indexOf(gameNew);
        accountGames.splice(index + 1, 0, expandedGame);
      }
    } else {
      break;
    }
  }
  console.log(accountGames.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
// tseamAccount([
//   "CS WoW Diablo",
//   "Uninstall XCOM",
//   "Update PeshoGame",
//   "Update WoW",
//   "Expansion Civ-V",
//   "Play!",
// ]);
