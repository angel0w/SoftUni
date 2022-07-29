function towns (input) {
    let currentTown = {};

    for (const city of input) {
        let cityElements = city.split(" | ");
        let townName = cityElements[0];
        let townlatitude = Number(cityElements[1]).toFixed(2);
        let townlongitude = Number(cityElements[2]).toFixed(2);

        currentTown.town = townName;
        currentTown.latitude = townlatitude;
        currentTown.longitude = townlongitude;
        console.log(currentTown);
    }
}
towns([
'Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'
]);
console.log(
    '-------------'
);
towns([
'Plovdiv | 136.45 | 812.575'
]);