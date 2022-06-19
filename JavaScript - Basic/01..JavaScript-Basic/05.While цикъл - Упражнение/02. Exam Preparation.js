function examPreparation(input) {
    let countOfBadGrades = Number(input[0]);
    let index = 1;
    let command = input[index];
    let numberOfProblems = 0;
    let sumGrades = 0;
    let numOfBadGrades = 0;
    let lastProblem = '';

    while (command !=='Enough'){
        lastProblem = command = input[index];
        numberOfProblems++;
        index++;
        let currentGrade = Number(input[index]);
        sumGrades+=currentGrade;
            if (currentGrade <= 4){
                numOfBadGrades++;
            }
            if ( numOfBadGrades >= countOfBadGrades){
                console.log(`You need a break, ${numOfBadGrades} poor grades.`);
                break;
            }
        index++;
        command = input[index];
        }

        if ( command === 'Enough'){
            let avg = (sumGrades / numberOfProblems).toFixed(2);
            console.log(`Average score: ${avg}`)
            console.log(`Number of problems: ${numberOfProblems}`);

            console.log(`Last problem: ${lastProblem}`)
        }
    }
examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough",]);
//examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
