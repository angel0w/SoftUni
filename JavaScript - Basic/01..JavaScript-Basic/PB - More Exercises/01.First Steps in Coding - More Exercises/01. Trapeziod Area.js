function trapeziodArea (input){
    const b1 = Number(input[0]);
    const b2 = Number(input[1]);
    const h = Number(input[2]);

    const face = ((b1 + b2 ) * h) / 2 ;
    console.log(face.toFixed(2));

}
trapeziodArea(["8","13","7"])