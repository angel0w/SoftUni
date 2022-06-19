function pomosht(input){
    let index = 0;
    let chisla = Number(input[index]);
    index++;
    let total = 0;
 
    while (chisla){
        let currentChislo = chisla;
        if (currentChislo < 0){
            chisla = Number(input[index]);
            index++;
            continue;
        }
        total += chisla;
 
        chisla = Number(input[index]);
        index++;
    }
    console.log(total)
}
pomosht(['1', '-2', '3', '4', '5'])