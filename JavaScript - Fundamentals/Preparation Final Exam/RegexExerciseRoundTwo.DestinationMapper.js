function destinationMapper (input) {
    
    let regex = /(\=|\/)(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/gm;
    let match = regex.exec(input);
    let sumLength = 0;
    let arr = [];


    while (match) {

        sumLength += match.groups.destination.length;;
        arr.push(match.groups.destination);

        match = regex.exec(input);
    }
    
    if (arr.length < 1) {
        console.log(`Destinations:`);
    } else {
        console.log(`Destinations: ${arr.join(", ")}`);
    }

    console.log(`Travel Points: ${sumLength}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('---============---');
destinationMapper("ThisIs some InvalidInput");

