function experienceGaining(input) {
    let expUnlockTank = input.shift();
    let fights = input.shift();
    let sumOfFights = 0;
    let counter = 0;

    let win = false;

    for ( let i = 0; i < input.length; i++) {
        let currentExp = input[i];
        counter++;
        if (counter > 0 && counter % 3 === 0) {
            currentExp *= 1.15;
            
        } else if ( counter % 5 === 0) {
            currentExp *= 0.90;
        } else if ( counter % 15 === 0) {
            currentExp *= 1.05;
        }
        sumOfFights += currentExp; 

        if (sumOfFights >= expUnlockTank) {
            win = true;
            console.log(`Player successfully collected his needed experience for ${counter} battles.`);
            break;
        }
    }
    let diff = Math.abs(sumOfFights - expUnlockTank)

    if (!win) {
        console.log(`Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`);
    }

}
// experienceGaining([500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     30])
//     ;
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20])
    ;
// experienceGaining([400,
//     5,
//     50,
//     100,
//     200,
//     100,
//     20])
//     ;
