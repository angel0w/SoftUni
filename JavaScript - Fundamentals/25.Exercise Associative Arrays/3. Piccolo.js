function piccolo (input) {
    let parking = new Set();

    for(let line of input){
        let tokens = line.split(", ");
        let command = tokens[0];
        let numberCar = tokens[1];

        if(command === 'IN'){
            parking.add(numberCar)
        } else if (command === "OUT"){
            parking.delete(numberCar)
        }
    }
    if(parking.size === 0){
        return "Parking Lot is Empty"
    }
    
    let sortParking = Array.from(parking.values()).sort();
    console.log(sortParking.join("\n"));
}
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);
console.log(`----`);
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])