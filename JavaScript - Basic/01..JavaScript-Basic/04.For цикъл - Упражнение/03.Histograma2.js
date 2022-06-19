function histograma(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

     let p1 = 0;
     let p2 = 0;
     let p3 = 0;
     let p4 = 0;
     let p5 = 0;

     for (let i = 0; i < n ; i++){
         let x = Number(input[index]);
         index++;
         if ( x < 200 ){
             p1++;
         } else if ( x >= 200 && x <= 399){
             p2++;
         } else if ( x >= 400 && x <= 599){
             p3++;
         } else if (x >= 600 && x <= 799 ){
             p4++;
         } else if ( x >= 800){
             p5++;
         }
     }

     let p1Proc = p1 / n * 100;
     let p2Proc = p2 / n * 100;
     let p3Proc = p3 / n * 100;
     let p4Proc = p4 / n * 100;
     let p5Proc = p5 / n * 100;

     console.log(`${p1Proc.toFixed(2)}%`);
     console.log(`${p2Proc.toFixed(2)}%`);
     console.log(`${p3Proc.toFixed(2)}%`);
     console.log(`${p4Proc.toFixed(2)}%`);
     console.log(`${p5Proc.toFixed(2)}%`);


}
histograma(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])

