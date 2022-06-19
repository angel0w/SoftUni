function digitize(input) {
    index = 9;
    let nums = Number(input[index]);
    index--;
    
    for ( i = 1; i < nums; i--){
    console.log(i);

    }
}
  digitize(["1","2","3","4","5","6","7","8","9"])

// function hospital (input) {
//     let index = 0; 
//     let days = Number(input[index]); 
//     index ++;

//     let doctors = 7;
//     let untreated = 0; 
//     let treated = 0;

//     for( let i = 1; i <= days; i++){
//         let dayilyCount = Number(input[index]); 
//         index++;
//         if ( i % 3 === 0 && dayilyCount > doctors){
//             doctors++;
//         } 
//         if (dayilyCount <= doctors){
//             treated += dayilyCount;
//         } else if ( dayilyCount > doctors){
//             treated += doctors; 
//             untreated += (dayilyCount - doctors);
//         }

//     } 
//     console.log(`Treated patients: ${treated}.`);
//     console.log(`Untreated patients: ${untreated}.`);
    
// } 