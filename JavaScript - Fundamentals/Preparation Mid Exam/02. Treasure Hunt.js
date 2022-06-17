function treasureHunt(array) {
    let arrayL = array.length;
   let  treasureChest =  array.shift().split("|");
   console.log(treasureChest);
   console.log(array);

   for ( let i = 0; i < arrayL; i++) {
    console.log(array[i]);
   }


}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
// treasureHunt([
//   "Diamonds|Silver|Shotgun|Gold",
//   "Loot Silver Medals Coal",
//   "Drop -1",
//   "Drop 1",
//   "Steal 6",
//   "Yohoho!",
// ]);
