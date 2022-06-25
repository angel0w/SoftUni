function inventory(input) {
    let inventory = input.shift().split(", ");
    let commands = input.shift();

    while (commands !== "Craft!") {
    let tokens = commands.split(" - ");
    let command = tokens[0];
    let item = tokens[1];

    switch (command) {
        case "Collect":
        if (!inventory.includes(item)) {
        inventory.push(item);
        }
        break;

        case "Drop":
        if (inventory.includes(item)) {
        let index = inventory.indexOf(item);
        inventory.splice(index, 1);
        }
        break;

        case "Combine Items":
        let combineItms = item.split(":");
        if (inventory.includes(combineItms[0])) {
        let index = inventory.indexOf(combineItms[0]);
        inventory.splice(index + 1, 0, combineItms[1]);
        }
        break;

    case "Renew":
        if (inventory.includes(item)) {
        let index = inventory.indexOf(item);
        let itemToMove = inventory.splice(index, 1);
        inventory.push(itemToMove);
        }
        break;
    }
    commands = input.shift();

    }
    console.log(inventory.join(", "));
}
// inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
    ]
    );
