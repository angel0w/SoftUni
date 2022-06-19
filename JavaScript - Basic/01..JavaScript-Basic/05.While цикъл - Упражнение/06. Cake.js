function cake (input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let lenght = Number(input[index]);
    index++;

    let golemina = width * lenght;
    let isPieces = true;
    let command = input[index];
    index++;

    while ( command !=  "STOP"){
        let parcheta = Number(command);
        golemina -= parcheta;

        if ( golemina < 0 ){
            isPieces = false

            console.log(`No more cake left! You need ${Math.abs(golemina)} pieces more.`);
            break;
        } 

        command = input[index];
        index++;
    }
    if (isPieces){
        console.log(`${golemina} pieces are left.`)
    }
}
//cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
