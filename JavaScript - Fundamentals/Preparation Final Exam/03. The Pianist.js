function thePianist(input) {
  let numPieces = +input.shift();
  let piecesInfo = {};

  for (let i = 0; i < numPieces; i++) {
    let [pieces, composer, key] = input.shift().split("|");

    if (!piecesInfo.hasOwnProperty(pieces)) {
      piecesInfo[pieces] = {};
    }
    piecesInfo[pieces][composer] = key;
  }

  for (let line of input) {
    let [command, piece, composer, key] = line.split("|");
    if (command === "Stop") {
      break;
    }

    if (command === "Add") {
      if (piecesInfo.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
        break;
      }

      piecesInfo[piece] = {};
      piecesInfo[piece][composer] = key;
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);

    } else if (command === "Remove") {
      if (piecesInfo.hasOwnProperty(piece)) {
        delete piecesInfo[piece];
        console.log(`Successfully removed ${piece}!`);
        break;
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      if (!piecesInfo.hasOwnProperty(piece)) {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }

      let newKey = composer;
      for (let [keyComposer, valueKey] of Object.entries(piecesInfo[piece])) {
        piecesInfo[piece][keyComposer] = newKey;
      }

      console.log(`Changed the key of ${piece} to ${newKey}!`);
    }
  }

  for (let [piece, composer] of Object.entries(piecesInfo)) {
    for (let composerKey of Object.keys(piecesInfo[piece])) {
      console.log(
        `${piece} -> Composer : ${composerKey}, Key: ${composer[composerKey]}`
      );
    }
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
console.log("--==========--");
thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);

// pieInfo {
//     Fur Elise: {
//                 'Beethonven': a Minor;
//                 }

//         }
