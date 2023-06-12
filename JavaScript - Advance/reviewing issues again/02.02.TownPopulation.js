function townPopulation(array) {
    let register = {};

    for (const el of array) {
        let res = el.split(' <-> ');
        let town = res[0];
        let population = Number(res[1]);

        // if (register[town] != undefined) {
        //     population += register[town];
        // }
        if(!register[town]) {
            register[town] = 0
        }


        register[town] += population;
    }
    
    for (const key in register) {
        console.log(`${key} : ${register[key]}`);
    }


}
// townPopulation([
//     'Sofia <-> 1200000',

//     'Montana <-> 20000',

//     'New York <-> 10000000',

//     'Washington <-> 2345000',

//     'Las Vegas <-> 1000000',
// ]);
townPopulation([
    'Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000']);
