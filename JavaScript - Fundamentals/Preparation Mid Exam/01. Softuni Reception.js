function softuniReception (array) {

    let totalCountStudents = Number(array.pop());
    let time = 0;
    let perHour = 0;

    for (let i = 0; i < array.length; i++) {
        perHour += Number(array[i]);
    }

    while (totalCountStudents > 0) {
        time++;

        if ( time % 4 !== 0 ) {
            totalCountStudents -= perHour;
        }

    }
    console.log(`Time needed: ${time}h.`);
}
softuniReception(['5','6','4','20']);
console.log('-----------------------------------------');
softuniReception(['1','2','3','45']);
console.log('-----------------------------------------');

softuniReception(['3','2','5','40']);