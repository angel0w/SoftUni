function workingHours(input) {
    const time = Number(input[0]);
    const day = input[1];

    if( time >= 10 && time <= 18){
        switch (day){
            case "Monday": console.log("open");break;
            case "Tuesday": console.log("open");break;
            case "Wednesday": console.log("open");break;
            case "Thursday": console.log("open");break;
            case "Friday": console.log("open");break;
            case "Saturday": console.log("open");break;
            case "Sunday": console.log("closed");break;
            default:console.log("Error")
        }
    } else {
        console.log("closed")
    }
}
workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);
