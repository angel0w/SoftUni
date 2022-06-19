function evenPowersOf2 (input){
    const n = Number(input);

    for (let i = 0; i <= n; i +=2 ){
        console.log(Math.pow(2,i));
}
}
evenPowersOf2(["7"])