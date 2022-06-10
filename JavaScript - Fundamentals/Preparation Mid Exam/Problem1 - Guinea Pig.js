function guineaPig(arr) {
    let foodInGr = arr[0] * 1000;
    let hayInGr = arr[1] * 1000;
    let coverInGr = arr[2] * 1000;
    let guineaPigWeightInGr = arr[3] * 1000;
    let isEnough = true;

    for ( let i = 1; i <= 30; i++ ) {
        if ( foodInGr < 300 || hayInGr < foodInGr * 0.05 || coverInGr < guineaPigWeightInGr / 3 ) {
            isEnough = false; 
            console.log('Merry must go to the pet store!');
            break;
        }
        foodInGr -= 300;
        if ( i % 2 === 0) {
            hayInGr -= foodInGr * 0.05;
        }
        if (i % 3 === 0) {
            coverInGr -= guineaPigWeightInGr / 3;
        }
    }
    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGr / 1000).toFixed(2)}, Hay: ${(hayInGr / 1000).toFixed(2)}, Cover: ${(coverInGr / 1000).toFixed(2)}.`);
    }

}
guineaPig(["10", "5", "5.2", "1"]);
// guineaPig(["1", "1.5", "3", "1.5"]);
// guineaPig(["9", "5", "5.2", "1"]);
// foodKg, hayKg, coverKg, guineaPigWeight