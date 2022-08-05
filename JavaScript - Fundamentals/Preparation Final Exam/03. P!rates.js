function pirastes (data) {
    
    let store = {};

    let lineTargets = data.shift();
    while (lineTargets !== 'Sail') {
        let [city, population, gold] = lineTargets.split("||");
        population = Number(population);
        gold = Number(gold);
        if (!store.hasOwnProperty(city)) {
            store[city] = { populations: population, golds: gold};
        } else {
            store[city]['populations'] += population;
            store[city]['golds'] += gold;
        }

        lineTargets = data.shift();
    }

    let line = data.shift();
    while (line !== 'End') {
        let [command,town, people, gold] = line.split("=>");

        if (command === 'Plunder') {
            if (store.hasOwnProperty(town)) {
                store[town]['populations'] -= people;
                store[town]['golds'] -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                if (store[town]['populations'] <= 0 ||store[town]['golds'] <= 0) {
                    delete store[town];
                    console.log(`${town} has been wiped off the map!`);
                }
            }

        } else if (command === 'Prosper') {
            gold = Number(people);
            if (store.hasOwnProperty(town)) {
                if (gold < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    store[town]['golds'] += gold;
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${store[town]['golds']} gold.`);
                }
            }
        }

        line = data.shift();
    }

    let townKeys = Object.keys(store);
    if (townKeys.length > 0) {
        console.log(`Ahoy, Captain! There are ${townKeys.length} wealthy settlements to go to:`);
        for (const city of townKeys) {
            console.log(`${city} -> Population: ${store[city]['populations']} citizens, Gold: ${store[city]['golds']} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
pirastes(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);
console.log('--================--');
pirastes(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]);