function addAndRemoveEl(arr) {
    let result = [];

    for (let i = 0; i< arr.length;i++) {
        let currentCom = arr[i];

        if(currentCom === 'add') {
            result.push(i + 1);
        } else if (currentCom === 'remove') {
            result.pop();
        }

    }
    if ( result.length > 0) {
        for (const el of result) {
            console.log(el);
        }
    } else {
        console.log('Empty');
    }
}
addAndRemoveEl(['add', 'add', 'add', 'add']);
addAndRemoveEl(['add', 'add', 'remove', 'add', 'add']);
