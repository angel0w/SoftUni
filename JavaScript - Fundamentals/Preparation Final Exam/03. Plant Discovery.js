function plantDiscovery (input) {
    let n = input.shift();

    let store = {};

    for (let i = 0; i < n; i++) {

        let [plant, rarity] = input.shift().split("<->");
        rarity = Number(rarity);
        if (!store.hasOwnProperty(plant)) {
            store[plant] = { rarity: rarity , rating: []};

        } else {
            store[plant]['rarity'] = rarity;
        }

    }

    let line = input.shift();
    while (line !== 'Exhibition') {
        let [command, tokens] = line.split(": ");
        let [plants, raritys] = tokens.split(" - ");


        raritys = Number(raritys);
        if (command === 'Exhibition') {
            break;
        }

        if (command === 'Rate') {
            // "Rate: {plant} - {rating}" – 
            // add the given rating to the plant (store all ratings);
            if (store.hasOwnProperty(plants)) {
                store[plants]['rating'].push(raritys);
            }
            
        } else if (command === 'Update') {
            // Update: {plant} - {new_rarity}" – 
            // update the rarity of the plant with the new one

            store[plants]['rarity'] = raritys;

        } else if (command === 'Reset') {
            // "Reset: {plant}" – remove all the ratings of the given plant;

            store[plants]['rating'] = [];

        } else {
            console.log('error');
        }

    line = input.shift();
    }

    console.log('Plants for the exhibition:');

    let pl = Object.keys(store);
    
    for (const el of pl) {

        if (store[el].rating.length == 0) {
            console.log(`- ${el}; Rarity: ${store[el]['rarity']}; Rating: 0.00`);
        } else {

            let avg = store[el]['rating'].reduce((a,b) => a + b) / store[el]['rating'].length;
            console.log(`- ${el}; Rarity: ${store[el]['rarity']}; Rating: ${avg.toFixed(2)}`);
        }
    }
}
plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
;
console.log('--===========--');
plantDiscovery([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);
