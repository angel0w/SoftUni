function pipesInPool (input){
    const obemBaseinLitri= Number(input[0]);
    const debitTruba1chas = Number(input[1]);
    const debitTruba2Chas = Number(input[2]);
    const hoursMissedWorker = Number(input[3]);

    const truba1napulnila = debitTruba1chas * hoursMissedWorker;
    const truba2napulnila = debitTruba2Chas * hoursMissedWorker;
    const totalwater = truba1napulnila + truba2napulnila;


    const diff = Math.abs(totalwater - obemBaseinLitri);
    
     if ( totalwater <= obemBaseinLitri){
        console.log(
            `The pool is ${(totalwater * 100 / obemBaseinLitri).toFixed(2)}% full.
            Pipe 1: ${(truba1napulnila * 100 / totalwater).toFixed(2)}%.
            Pipe 2: ${(truba2napulnila * 100 / totalwater).toFixed(2)}%.`
        )
     } else {
         console.log(
             `For ${hoursMissedWorker.toFixed(2)} hours the pool overflows with ${(totalwater - obemBaseinLitri).toFixed(2)} liters.`
         )
     }

}
//pipesInPool(["1000","100","120","3"]);
pipesInPool(["100","100","100","2.5"]);