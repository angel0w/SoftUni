function newHouse(input) {
    const rose = 5;
    const dahlias = 3.8;
    const tulips = 2.8;
    const narcissus = 3;
    const gladiolus = 2.5;

    const typeFlower = input[0];
    const flowersCount = Number(input[1]);
    const budget = Number(input[2]);

    let sum = 0;

    switch (typeFlower){
        case "Roses":
             sum = rose * flowersCount;
            if(flowersCount > 80){
                 sum *= 0.90;
            }
            break;

        case "Dahlias": 
            sum = dahlias * flowersCount;
            if ( flowersCount > 90){
                sum *= 0.85;
            }
            break;

        case "Tulips":
            sum = tulips * flowersCount;
            if ( flowersCount > 80){
                sum *= 0.85;
            }
            break;

        case "Narcissus":
            sum = narcissus * flowersCount;
            if( flowersCount < 120){
                sum *= 1.15;
            }
            break;

        case "Gladiolus" :
            sum = gladiolus * flowersCount;
            if ( flowersCount < 80){
                sum *= 1.20;
            }
            break;
        
    }

    let  diff = Math.abs(sum - budget);

    if (budget >= sum ){
        console.log(`Hey, you have a great garden with ${flowersCount} ${typeFlower} and ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);
newHouse(["Gladiolus","64","160"]);
