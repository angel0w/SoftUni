function thePianistRound2 (data) {
    let pieces = data.shift();
    let store = {};

    for (let i = 0; i < pieces; i++) {
        let [pieces, composer, key] = data.shift().split("|");

        if (!store.hasOwnProperty(pieces)) {
            store[pieces] = { Composer: composer, Key: key };
        }
    }

    let line = data.shift();
    while (line !== 'Stop') {
        let [command,piece, composer, key] = line.split("|");

        if (command === 'Add') {
            if (!store.hasOwnProperty(piece)) {
                store[piece] = {Composer: composer, Key: key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }

        } else if (command === 'Remove') {
            if (!store.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                delete store[piece];
                console.log(`Successfully removed ${piece}!`);
            }


        } else if (command === 'ChangeKey') {
            let newKey = composer;
            if (!store.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                store[piece]['Key'] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }

        line = data.shift();
    }


    let storeKeys = Object.keys(store);

    for (const el of storeKeys) {
        console.log(`${el} -> Composer: ${store[el]['Composer']}, Key: ${store[el]['Key']}`);
    }
}
thePianistRound2([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);

console.log('---==============---');

thePianistRound2([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);
