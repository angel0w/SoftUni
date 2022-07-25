function travelTime (input) {

    let travelDestination = {};

    for (const line of input) {
        let [country, town, travelCost] = line.split(" > ");

        if (!travelDestination.hasOwnProperty(country)) {
            travelDestination[country] = {};
        }

        if (!travelDestination[country].hasOwnProperty(town)) {
            travelDestination[country][town] = travelCost;
        } else if (travelDestination[country][town] > travelCost) {
            travelDestination[country][town] = travelCost;
        }
    }
    
    let sortCountry = Object.entries(travelDestination).sort((a,b) => 
        a[0].localeCompare(b[0])
    );

    for (let [country, towns] of sortCountry) {
        let result = '';
        let output = Object.entries(towns).sort((a,b) => a[1] - b[1]);
        for (const [town, cost] of output) {
            result += `${town} -> ${cost} `
        }
        console.log(country + ' -> ' + result);
    }
}
travelTime([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200"]);

console.log('~~~~~~~');

travelTime([
'Bulgaria > Sofia > 25000',
'Kalimdor > Orgrimar > 25000',
'Albania > Tirana > 25000',
'Bulgaria > Varna > 25010',
'Bulgaria > Lukovit > 10'

]);