function townPopulation(arr) {
    let obj = {};

    for (const el of arr) {
        let [name, population] = el.split(' <-> ');
        population = Number(population);
        if (obj[name] != undefined) {
            population += obj[name];
        }
        obj[name] = population;
    }
    for (const town in obj) {
        console.log(`${town} : ${obj[town]}`);
    }
}
townPopulation([
    'Sofia <-> 1200000',

    'Montana <-> 20000',

    'New York <-> 10000000',

    'Washington <-> 2345000',

    'Las Vegas <-> 1000000',
]);
townPopulation([
    'Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000',
]);
