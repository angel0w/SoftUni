function nfs (data) {
    
    let numberOfCars = data.shift();

    let store = {};

    for (let i = 0; i < numberOfCars; i++) {
        let [car,mileage,fuel] = data.shift().split("|");

        if (!store.hasOwnProperty(car)) {
            store[car] = [];
            store[car].push(Number(mileage), Number(fuel));
        }
    }


    for (const line of data) {
        let [command, cars, distances, fuels] = line.split(" : ");
        if (command === 'Stop') {

            break;
        }
        
        if (command === "Drive") {
            let currDistances = Number(distances);
            let currFuels = Number(fuels);
            if (store[cars][1] > currFuels) {
                store[cars][0] += currDistances;
                store[cars][1] -= currFuels;
                console.log(`${cars} driven for ${distances} kilometers. ${fuels} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }

            if (store[cars][0] > 100000) {
                delete store[cars];
                console.log(`Time to sell the ${cars}!`);
            }

        } else if (command === "Refuel") {
            let currRefuel = Number(distances);

            store[cars][1] += currRefuel;

            if (store[cars][1] >= 75 ) {
                currRefuel = store[cars][1] - 75 - currRefuel;
                store[cars][1] = 75;
            }

            console.log(`${cars} refueled with ${Math.abs(currRefuel)} liters`);


        } else if (command === "Revert") {
            let mileage = Number(distances);

            store[cars][0] -= mileage;
            if (store[cars][0] < 10000) {
                store[cars][0] = 10000
            } else {
                console.log(`${cars} mileage decreased by ${mileage} kilometers`);
            }
        }
    }

    for (const cars in store) {
        console.log(`${cars} -> Mileage: ${store[cars][0]} kms, Fuel in the tank: ${store[cars][1]} lt.`);
    }
}
nfs([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]);
console.log('--==========--');
nfs([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);
console.log('--==========--');
