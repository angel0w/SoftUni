function minNumber(input) {
    let index = 0;
    let command = input[index];
    index++;
    let minNumber = Number.MAX_SAFE_INTEGER;

    while(command !== "Stop"){
        let num = Number(command);

        if (minNumber > num) {
            minNumber = num
        }
        command = input[index];
        index++;
    }
    console.log(minNumber)
}
minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
//maxNumber(["-10", "-20", "Stop"]);