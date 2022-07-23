function storeProvision (currentStock, forDelivery) {
    let currentStockL = currentStock.length;
    let forDeliveryL = forDelivery.length;
    let storeProducts = {};

    for (let i = 0; i < currentStockL; i+=2) {
        let product = currentStock[i];
        storeProducts[product] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < forDeliveryL; i+=2) {
        let product = forDelivery[i];
        if (!storeProducts.hasOwnProperty(product)) {
        storeProducts[product] = 0;
        } 
        storeProducts[product] += Number(forDelivery[i + 1]) 
        
    }
    for (let el in storeProducts) {
        console.log(`${el} -> ${storeProducts[el]}`);
    }
}
storeProvision([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
console.log('--------');
storeProvision([
'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],[
'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);