function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let tempMoney = 10;
    let money = 0;
    let toyCount = 0;

    for ( let i = 1; i <= age; i++ ){
        if ( i % 2 === 0){
            money += tempMoney;
            tempMoney += 10;
            money -= 1;
        } else {
            toyCount++;
        }
    }
    let p = toyCount * toyPrice;
    money = money + p;

    let diff = Math.abs(money - washingMachinePrice);

    if ( money >= washingMachinePrice){
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
cleverLily(["10",
"170.00",
"6"])
cleverLily(["21",
"1570.98",
"3"])

