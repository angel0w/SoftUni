function circleAndPerimeter (input){
    const num = Number(input[0]);

    const perameter = Math.PI * num * 2; 
    const area = (2 * num * perameter) / 4;
    
    console.log(area.toFixed(2));
    console.log(perameter.toFixed(2));

}
circleAndPerimeter(["3"]);
circleAndPerimeter(["4.5"]);

// const perameter = Math.PI * r * 2;

// const area = (2 * r * perameter) / 4;