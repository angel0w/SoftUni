function dictionary(data) {
    let store = {};


    let diction = data.shift().split(" | ");


    for( let el of diction ) {
        
        let [word1,defin1] = el.split(": ");
        
        if (!store.hasOwnProperty(word1)) {
            store[word1] = new Set();
        }
        store[word1].add(defin1);

    }

    let words = data.shift().split(" | ");
    let command = data.shift();

    for (const el of words) {
        if (command === "Test" ) {
            if (store.hasOwnProperty(el)) {
                console.log(`${el}:`);
                for (const def of store[el]) {
                    console.log(` -${def}`);
                }
            }

        } else if (command === "Hand Over"){
            const words = Object.keys(store);
            console.log(words.join(" "));

        }

    
        
    }
}
dictionary([
    "programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over",
]);
console.log("---===========---");
dictionary([
    "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test",
]);
