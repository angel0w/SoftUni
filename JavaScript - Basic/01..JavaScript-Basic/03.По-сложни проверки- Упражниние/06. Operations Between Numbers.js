function operationBetweenNumbers(input) {
    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    const op = input[2];


    if (op === "+"){
        let res = n1 + n2;
        if (res % 2 === 0){
            console.log(`${n1} ${op} ${n2} = ${res} - even`);
        } else {
            console.log(`${n1} ${op} ${n2} = ${res} - odd`);
        }
    } else if (op === "-"){
        res = n1 - n2;
        if (res % 2 === 0){
            console.log(`${n1} ${op} ${n2} = ${res} - even`)
        } else {
            console.log(`${n1} ${op} ${n2} = ${res} - odd`);
        }
    } else if (op === "*"){
        res = n1 * n2;
        if(res % 2 === 0){
            console.log(`${n1} ${op} ${n2} = ${res} - even`);
        } else {
            console.log(`${n1} ${op} ${n2} = ${res} - odd`);
        }

    } else if (op === "/"){
        if(n2 === 0){
        console.log(`Cannot divide ${n1} by zero`)
        } else {
            res = n1 / n2;
            console.log(`${n1} / ${n2} = ${res.toFixed(2)}`)
        }

    } else {
        if (n2 === 0){
            console.log(`Cannot divide ${n1} by zero`)
        }else {
            let res = n1 % n2;
            console.log(`${n1} % ${n2} = ${res}`)
        }

    }

}
operationBetweenNumbers(["10", "12", "+"]);
operationBetweenNumbers(["10", "1", "-"]);
operationBetweenNumbers(["7", "3", "*"]);
operationBetweenNumbers(["123", "12", "/"]);
operationBetweenNumbers(["10", "3", "%"]);
operationBetweenNumbers(["112", "0", "/"]);
operationBetweenNumbers(["10", "0", "%"]);
