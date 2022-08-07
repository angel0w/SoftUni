function easterEggs (data) {
    
    let regex = /[@#]+(?<color>[a-z]{3,})[@#]+[^A-Za-z0-9]*\/+(?<count>\d+)\/+/g;
    let match = regex.exec(data);

    while (match) {
        let currCollor = match.groups.color;
        let count = match.groups.count;

        console.log(`You found ${count} ${currCollor} eggs!`);

        match = regex.exec(data);
    }
}
easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
console.log('---===========---');
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);