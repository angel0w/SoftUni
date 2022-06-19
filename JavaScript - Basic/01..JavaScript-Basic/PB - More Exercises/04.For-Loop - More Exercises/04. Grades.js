function grades (input) {
    let index = 0;
    let students = Number(input[index]);
    index++;

    let overFive = 0;
    let overFour = 0;
    let overThree = 0;
    let fail = 0;   
    let average = 0;

    for ( let i = 0; i < students; i ++){
        let grade = Number(input[index]);
        index ++;

        if ( grade >= 2 && grade <= 2.99){
            fail++;
        } else if (grade >= 3 && grade <= 3.99){
            overThree++;
        } else if ( grade >= 4 && grade <= 4.99){
            overFour++;
        } else if ( grade >= 5 ){
            overFive++;
        }

        average += grade;
    }

    let averageGrade = average / students;

    let failProc = fail / students * 100;
    let threeProc = overThree / students * 100;
    let fourProc = overFour / students * 100;
    let fiveProc = overFive / students * 100;

    console.log(`Top students: ${fiveProc.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${fourProc.toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${threeProc.toFixed(2)}%`)
    console.log(`Fail: ${failProc.toFixed(2)}%`)
    console.log(`Average: ${averageGrade.toFixed(2)}`)
}
//grades(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"])
grades(["6","2","3","4","5","6","2.2"]);