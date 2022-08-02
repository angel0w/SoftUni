function worldTour(input) {
    let stops = input.shift();

    let line = input.shift();
    while (line !== "Travel") {
        let [command, com1, com2] = line.split(":");

        if (command === "Add Stop") {
            // Insert the given string at that index only if the index is valid
            //          Add Stop:7:Rome
            com1 = Number(com1);
            if (com1 >= 0 && com1 <= stops.length) {
                let firstHalf = stops.substring(0, com1);
                let secondHalf = stops.substring(com1);

                stops = firstHalf + com2 + secondHalf;
                console.log(stops);
            }
        } else if (command === "Remove Stop") {
            let startIndex = Number(com1);
            let endIndex = Number(com2);

            // Remove the elements of the string from the starting index to the end index
            // (inclusive) if both indices are valid

            // Remove Stop:11:16

            // проверка дали индекса е валиден
            if (stops[startIndex] && stops[endIndex]) {
                let subStr = stops.substring(startIndex, endIndex + 1);
                stops = stops.replace(subStr, "");
            }

            console.log(stops);
        } else if (command === "Switch") {
            // "Switch:{old_string}:{new_string}":
            // If the old string is in the initial string, replace it with the new one (all occurrences)

            // Hawai::Rome-Greece
            // Bulgaria::Rome-Greece

            // Switch:Hawai:Bulgaria

            stops = stops.replace(com1, com2);
            console.log(stops);
        }

        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel",
]);
