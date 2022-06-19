function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let lenght = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let space = width * lenght * height;
    let isSpace = true;
    let busySpace = 0;

    let command = input[index];
    index++;


    while ( command != "Done"){
        let bagaj = Number(command);
        busySpace += bagaj;

        if (space <= busySpace){
            isSpace = false;
            let needMore = Math.abs(space - busySpace);
            console.log(`No more free space! You need ${needMore} Cubic meters more.`)
            break;
        }

        command = input[index];
        index++;

    }
    if (isSpace){
        let needMoree = Math.abs(space - busySpace);
        console.log(`${needMoree} Cubic meters left.`)
    }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
