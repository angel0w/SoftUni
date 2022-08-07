function hogwarts(data) {

    let spell = data.shift();

    let line = data.shift();
    while (line !== 'Abracadabra') {
        let [command, com1, com2] = line.split(" ");

        if (command === 'Abjuration') {
            spell = spell.toUpperCase();
            console.log(spell);

        } else if (command === 'Necromancy') {
            spell = spell.toLowerCase();
            console.log(spell);


        } else if (command === 'Illusion') {
            let index = Number(com1);
            let letter = com2;

            if (index >= 0 && index < spell.length) {
                
                spell = spell.substring(0,index) + letter + spell.substring(index + 1);
                console.log('Done!');



            } else {
                console.log('The spell was too weak.');
            }



        } else if (command === 'Divination') {
            let firstSubstring = com1;
            let secondSubstring = com2;


            if (spell.includes(firstSubstring)) {
                spell = spell.split(firstSubstring).join(secondSubstring);
            }
            console.log(spell);

        } else if (command === 'Alteration') {
            let substring = com1;

            if (spell.includes(substring)) {
                spell = spell.replace(substring, "");
                console.log(spell);

            }

        } else {
            console.log(`The spell did not work!`);
        }

        line = data.shift();
    }
}
hogwarts([
    "A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra",
]);
console.log("---===========---");
hogwarts([
    "TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra",
]);
console.log("---===========---");
hogwarts([
    "SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra",
]);
