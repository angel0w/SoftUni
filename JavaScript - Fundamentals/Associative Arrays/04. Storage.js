function storage (input) {
    let result = new Map();
    for(let line of input){
        let [product, quantity] = line.split(' ')
        
        if (result.has(product)) {
            let oldQuantity = result.get(product)
            result.set(product, oldQuantity + +quantity)
        } else {
            result.set(product, +quantity)
        }
    }
    // for(let key of result){
    //     console.log(`${key[0]} -> ${key[1]}`);
    // }
    // or
    for (let [k,v] of result) {
        console.log(`${k} -> ${v}`);
        // or
        // console.log(k, "->", v);
    }
}
storage([
'tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40']);
console.log(`---------`);
storage([
'apple 50',

'apple 61',

'coffee 115',

'coffee 40']);