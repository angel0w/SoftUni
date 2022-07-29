function loadingBar (number) {
    
    let compleated = '%'.repeat(number / 10);
    let incompleted = '.'.repeat(10 - compleated.length);

    if (incompleted.length === 0 ) {
        console.log('100% Complete!'); 
    } else {
        console.log(`${number}% [${compleated}${incompleted}]`);
        console.log('Still loading...');
    }
    
}
loadingBar(30);
// loadingBar(50);
// loadingBar(100);