function dishwasher(input){
    let index = 0;
    let countPreparat = input[index];
    index++;
    let command = input[index];
    index++;
 
 
    let kolichestvoPreparat = countPreparat * 750;
    let counter = 0;
 
    let izpolzvanPreparat = 0;
 
    let totalTendjeri = 0;
    let totalChinii = 0;
 
 
    while (command !== 'End'){
        let chinii = Number(command);
        counter++;
        let diff = Math.abs(izpolzvanPreparat - kolichestvoPreparat);
        if (counter % 3 === 0){
            let tendjeri = Number(command);
            izpolzvanPreparat += 15 * tendjeri;
            totalTendjeri += tendjeri;
            if (izpolzvanPreparat > kolichestvoPreparat){
                diff = Math.abs(izpolzvanPreparat - kolichestvoPreparat)
                console.log(`Not enough detergent, ${diff} ml. more necessary!`);
                break;
            }
            command = input[index];
            index++
            continue;
        }
        izpolzvanPreparat += 5 * chinii;
        totalChinii += chinii;
 
        if (izpolzvanPreparat > kolichestvoPreparat){
            diff = Math.abs(izpolzvanPreparat - kolichestvoPreparat)
            console.log(`Not enough detergent, ${diff} ml. more necessary!`);
            break;
        }
        command = input[index];
        index++;
    }
    let diff = Math.abs(kolichestvoPreparat - izpolzvanPreparat);
 
    if (kolichestvoPreparat >= izpolzvanPreparat){
        console.log(`Detergent was enough!`);
        console.log(`${totalChinii} dishes and ${totalTendjeri} pots were washed.`);
        console.log(`Leftover detergent ${diff} ml.`)
    }
}