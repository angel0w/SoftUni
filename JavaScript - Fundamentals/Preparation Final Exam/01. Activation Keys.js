function activationKeys(data) {
    let key = data.shift();

    let line = data.shift();
    while (line !== "Generate") {
        let [command, com1, com2, com3] = line.split(">>>");

        if (command === "Slice") {
            let startIndex = Number(com1);
            let endIndex = Number(com2);

            let firstHalf = key.substring(0, startIndex);

            let secondHalf = key.substring(endIndex);
            key = firstHalf + secondHalf;
            console.log(key);
        } else if (command === "Flip") {
            let lowerUpperCase = com1;
            let startIndex = Number(com2);
            let endIndex = Number(com3);
            let string = key.substring(startIndex, endIndex);
            if (lowerUpperCase === "Lower") {
                let newString = string.toLowerCase();
                key = key.split(string).join(newString);
                console.log(key);
            } else {
                let newString = string.toUpperCase();
                key = key.split(string).join(newString);
                console.log(key);
            }
        } else if (command === "Contains") {
            let substring = com1;

            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        }

        line = data.shift();
    }

    console.log(`Your activation key is: ${key}`);
}
activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate",
]);
console.log("---=============---");
activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate",
]);

