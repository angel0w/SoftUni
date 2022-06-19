function memoryGame(input) {
    let board = input.shift().split(' ');
    let command = input.shift();
    let turns = 1;
 
    while (command !== 'end' && board.length > 0) {
 
        let [first, second] = command.split(' ').map(Number);
        //same as row 7
        // let row = command.split(' ').map(Number);
        // let first = row[0];
        // let second = row[1];
        let isInvalidInput = (first < 0 || first >= board.length) || (second < 0 || second >= board.length) || first === second;
        if (isInvalidInput) {
            console.log("Invalid input! Adding additional elements to the board");
            let middleIndex = Math.floor(board.length / 2);
            let elementToAdd = `-${turns}a-${turns}a`;
            board.splice(middleIndex, 0, elementToAdd);
        } else {
            if (board[first] === board[second]) {
                console.log(`Congrats! You have found matching elements - ${board[first]}!`);
                board = board.filter(e => e !== board[first]);
            } else {
                console.log("Try again!");
            }
        }
 
        if (board.length === 0) {
            console.log(`You have won in ${turns} turns!`);
            break;
        }
 
        command = input.shift();
        turns++;
    }
    if (board.length > 0) {
        console.log(`Sorry you lose :(\n${board.join(' ')}`);
    }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
