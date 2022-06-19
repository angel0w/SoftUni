function hospital(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let doctors = 7;
    let treated = 0;
    let untreated = 0;

    for (let i = 1; i <= days; i++ ){
        let pacients = Number(input[index]);
        index++;
        if (i % 3 === 0 ){
            if (untreated > treated){
                doctors++;
            }
        }

        if (pacients < doctors){
            treated +=pacients;
        } else {
            treated += doctors;
            untreated += pacients - doctors;
        }
        
    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}  
hospital(['4','7','27','9','1']);
hospital(['6','25','25','25','25','25','2']);
hospital(["3","7","7","7"]); 