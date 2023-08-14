function lowestPriceInCities(params) {
    let obj = {};
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        let [ town, product, price] = element.split(" | ");
        
        town.productName = product;
        town.pricePr = price
        console.log(productName);
        
    }
}
lowestPriceInCities([
    'Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10',
]);
