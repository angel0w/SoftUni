function workingHours(input){
    const time = Number(input[0]);
    const day = input[1];
    if (time >= 10 && time <= 18){
        if(day == "Sunday") {
            console.log("closed");
        } else {
            console.log("open")
        }
    }
    }
    workingHours(["11", "Monday"]);
    workingHours(["19", "Friday"]);
    workingHours(["11", "Sunday"]);
    