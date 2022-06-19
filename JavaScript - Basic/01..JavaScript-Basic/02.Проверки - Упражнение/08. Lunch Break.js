function lunchBreak(input) {
    const serialName = input[0];
    const serialTime = Number(input[1]);
    const breakTime = Number(input[2]);
    
    const lunchTime = breakTime / 8;
    const chillTime = breakTime / 4 ;

    const freetime = breakTime - lunchTime - chillTime;
    const diff = Math.ceil(Math.abs(serialTime - freetime));

    if ( freetime >= serialTime){
        console.log(`You have enough time to watch ${serialName} and left with ${diff} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${diff} more minutes.`)
    }

}
lunchBreak(["Game of Thrones", "60", "96"]);
//lunchBreak(["Teen Wolf", "48", "60"]);
