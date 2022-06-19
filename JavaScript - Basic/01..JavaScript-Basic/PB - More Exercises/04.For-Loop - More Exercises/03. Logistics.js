function logistic(input) {
    let index = 0;
    let tovari = Number(input[index]);
    index++;
    let totalTons = 0;

    let microbus = 0;
    let kamion = 0;
    let vlak = 0;

    for ( let i = 0;  i < tovari ; i++){
        let tonajNaTovar = Number(input[index]);
        index ++;
        totalTons += tonajNaTovar;

        if ( tonajNaTovar <= 3 ){
            microbus += tonajNaTovar;

        }else if ( tonajNaTovar >= 4 && tonajNaTovar <= 11){
            kamion += tonajNaTovar;
        } else if ( tonajNaTovar >= 12 ){
            vlak += tonajNaTovar;
        }
    }
    let totalSum = (microbus * 200 + kamion * 175 + vlak * 120) / totalTons;

    let micProc = microbus / totalTons * 100;
    let kamionProc = kamion / totalTons * 100;
    let vlakProc = vlak / totalTons * 100;

    console.log(totalSum.toFixed(2));
    console.log(`${micProc.toFixed(2)}%`);
    console.log(`${kamionProc.toFixed(2)}%`);
    console.log(`${vlakProc.toFixed(2)}%`);
}
//logistic(["4","1","5","16","3"]);
logistic(["5","2","10","20","1","7"]);