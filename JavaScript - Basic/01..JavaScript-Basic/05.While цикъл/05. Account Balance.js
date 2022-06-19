function accountBalance (input){
    let index = 0;
    let comand = Number(input[index]);
    index++;

    let account = 0;

    while (comand !== "NoMoreMoney"){
        let money = Number(comand)

        if ( money < 0){
            console.log('Invalid operation!');
            break;
        }

        account += money;
        console.log(`Increase: ${money.toFixed(2)}`);

        

        comand = input[index];
        index++
    }
    console.log(`Total: ${account.toFixed(2)}`);
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
accountBalance(["120",
"45.55",
"-150"])

