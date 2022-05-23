function magicNum (input) {
    let magicNumber = Number(input);
    let solution = '';

    for (let d1 = 1; d1 < 10; d1++) {
        for ( let d2 = 1; d2 < 10; d2++){
            for( let d3 = 1; d3 < 10; d3++){
                for (let d4 = 1; d4 < 10; d4++){
                    for (let d5 = 1;d5 < 10; d5++){
                        for (let d6 = 1; d6 < 10; d6++){
                            if ( d1 * d2 * d3 * d4 * d5 * d6 === magicNumber) {
                                solution = 
                                    solution.concat(d1, d2, d3, d4, d5, d6, ' ');
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(solution);
    
}
magicNum(5);
