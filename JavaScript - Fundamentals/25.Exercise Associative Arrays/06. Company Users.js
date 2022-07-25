function companyUsers (input) {

    let resultObj = {};

    for(let line of input) {

        let [company, id] = line.split(" -> ");

        if(!resultObj.hasOwnProperty(company)){
            resultObj[company] = new Set();
        }
            resultObj[company].add(id)
    }

    let entries = Object.entries(resultObj);

    entries.sort((a,b) => a[0].localeCompare(b[0]));

    for(const [comp, id] of entries) {
        console.log(`${comp}`);
        let set = new Set(id);
        for(let id of set) {
            console.log(`-- ${id}`);
        }
    }
}
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);
console.log('--------');
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]);