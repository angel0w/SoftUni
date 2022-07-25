function AMinerTask (input) {
    let inputL = input.length;
    let collectedResources = {};
    
    for (let i = 0; i < inputL; i+=2) {
        let resources = input[i];
        if (collectedResources.hasOwnProperty(resources)) {
            let oldValue =  +collectedResources[resources];
            collectedResources[resources] = +input[i + 1] + oldValue;
            continue;

        }
        collectedResources[resources] = Number(input[i + 1]);
    }

    for (let el in collectedResources) {
        console.log(`${el} -> ${collectedResources[el]}`);
    }
}
AMinerTask([ 
    'gold', 
    '155',
    'silver', 
    '10', 
    'copper',
    '17', 
    'gold', 
    '15' ]);

    console.log(`~~~~~~`);

AMinerTask([
'Gold',
'155',
'Silver',
'10',
'Copper',
'17']);
