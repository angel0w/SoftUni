function multiplicationTable(input) {
    const num = Number(input[0]);
    let res = 0;
    for (let i = 1; i<= 10; i++){
        res = i * num ;
        console.log(`${i} * ${num} = ${res}`);
    }
}
multiplicationTable ([2])