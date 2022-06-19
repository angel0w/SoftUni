function journey(input) {
    const budget = Number(input[0]);
    const season = input[1];

let sum = 0;

    if (budget <= 100){
        console.log('Somewhere in Bulgaria')
        if (season === "summer"){
             sum = budget * 0.3;
        } else if ( season === "winter"){
             sum = budget * 0.7;
        }

    } else if (budget <= 1000){
        console.log('Somewhere in Balkans')
        if ( season === "summer"){
             sum = budget * 0.4;

        }else if ( season === "winter"){
            sum = budget * 0.8;
        }

    } else if ( budget > 1000){
        console.log('Somewhere in Europe')
        sum = budget * 0.9;
    }

    let diff = Math.abs(budget - sum);

    if (season === "summer" && !(budget >1000) ){
        console.log(`Camp - ${sum.toFixed(2)}`)
    } else {
        console.log(`Hotel - ${sum.toFixed(2)}`);
    }
}
// journey(["50", "summer"]);
// journey(["75", "winter"]);
// journey(["312", "summer"]);
// journey(["678.53", "winter"]);
journey(["1500", "summer"]);