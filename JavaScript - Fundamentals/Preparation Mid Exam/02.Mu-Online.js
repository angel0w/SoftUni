function muOnline (input) {
    let health = 100;
    let bitcoin = 0;
    let dungeonRooms = input.slice().split("|");
    let room = 0;
    let isAlive = true;
    let diff = 0;

    for (let i = 0; i < dungeonRooms.length; i++ ) {
        room++;
        let currentRoom = [dungeonRooms[i]];
        let command = currentRoom[0].split(' ')

        if(command[0] === 'potion') {
            health += Number(command[1]);
            if ( health > 100) {
                command[1] -= (health - 100)
                health = 100;
            }
            console.log(`You healed for ${command[1]} hp.`);
            // console.log(`You healed for ${command[1]} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command[0] === 'chest') {
            bitcoin += Number(command[1]);
            console.log(`You found ${command[1]} bitcoins.`);
            
        } else {
            health -= command[1];
            if(health > 0 ){
                console.log(`You slayed ${command[0]}.`);

            } else if (health <= 0) {
                isAlive = false;
                console.log(`You died! Killed by ${command[0]}.`);
                console.log(`Best room: ${room}`);
                break;
            }
        }
    }

    if (isAlive) {
        console.log(`You've made it!\nBitcoins: ${bitcoin}\nHealth: ${health}`);
    }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");