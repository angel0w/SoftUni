function areaOfFigures(input) {
    const type = input[0];
    const sideA = Number(input[1]);
    const sideB = Number(input[2]);
    let result = "";

    if (type === "square"){
        result = sideA * sideA;

    } else if ( type ==="rectangle"){
        result = sideA * sideB;

    } else if ( type === "circle"){
        result =  Math.PI * sideA * sideA ;

    } else if ( type === "triangle") {
        result = (sideA * sideB) / 2 ;
    }
    console.log(result.toFixed(3));
}
areaOfFigures(["triangle","4.5","20"]);
