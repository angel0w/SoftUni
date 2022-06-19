function excellentResult (input){
    const grade = Number(input[0]);
    //ако оценката е 5.50 или по-висока.
    if ( grade >= 5.50){
        console.log("Excellent!");
    }
}
excellentResult(["6"]);
excellentResult(["5"]);
excellentResult(["5.50"]);
excellentResult(["5.49"]);