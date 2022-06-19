function positiveSum(input) {
    let index = 0;

    let num = Number(input[index]);
    index++;

    let result = 0;
    for (let i = 0; i < num; i++){
        index++;
        if ( num < 0){
            continue;
        }

        result += num;

    }
    console.log(result)
}
positiveSum([1,-2,3,4,5]);