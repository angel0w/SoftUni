function destinationMapper (input) {
    
    let pattern = /(=|\/)(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/gm
    let match = pattern.exec(input);
    let counter = 0;
    let destinations = [];

    while (match) {
        
        counter += match.groups.destination.length
        destinations.push(match.groups.destination);
        
        match = pattern.exec(input);
    }

    if (destinations.length < 1) {
        console.log(`Destinations:`);
    } else {
        console.log(`Destinations: ${destinations.join(', ')}`);
    }
    
    console.log(`Travel Points: ${counter}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('--===============--');
destinationMapper("ThisIs some InvalidInput");