function passwordReset(data) {
    let password = data.shift();

    let line = data.shift();
    while (line !== "Done") {
        let [command, tokenOne, tokenTwo] = line.split(" ");

        if (command === "TakeOdd") {
            let buff = "";
            for (let i = 0; i < password.length; i++) {
                let ch = password[i];
                if (i % 2 === 0) {
                } else {
                    buff += ch;
                }
            }
            password = buff;
            console.log(password);
        } else if (command === "Cut") {
            let index = Number(tokenOne);
            let length = Number(tokenTwo);

            let firstHalf = password.substring(0, index);
            let secondHalf = password.substring(index + length);
            password = firstHalf + secondHalf;
            console.log(password);
        } else if (command === "Substitute") {
            // Substitute {substring} {substitute}"
            // o	If the raw password contains the given substring, replaces all of its occurrences with the substitute
            //          text given and prints the result.
            // o	If it doesn't, prints "Nothing to replace!".
            let substring = tokenOne;
            let substitute = tokenTwo;

            if (password.includes(substring)) {
                password = password.split(substring).join(substitute);
                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }
        }

        line = data.shift();
    }

    console.log(`Your password is: ${password}`);
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done",
]);
console.log("---===========---");
passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done",
]);
