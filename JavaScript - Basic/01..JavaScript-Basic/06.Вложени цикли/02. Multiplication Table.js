function multiplicationTable (input) {
    for (let f = 1; f<= 10; f++){
        for ( let s = 1; s <= 10; s++){
            let res = f * s;
            console.log(`${f} * ${s} = ${res}`)
        }
    }
}
multiplicationTable()