function cinema(input) {
    const premierePrice = 12.00;
    const normalPrice = 7.50;
    const childStudentsDiscount = 5.00;

    const typeProjection = input[0];
    const rowCount = Number(input[1]);
    const collumCount = Number(input[2]);
    let win = 0;
    // Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели числа) и
    //  изчислява общите приходи от билети при пълна зала.
    //  Резултатът да се отпечата във формат като в примерите по-долу, с 2 знака след десетичната точка.  

    if ( typeProjection === "Premiere"){
        win = premierePrice * rowCount * collumCount;
    } else if (typeProjection === "Normal"){
        win = normalPrice * rowCount * collumCount;
    } else if (typeProjection === "Discount"){
        win = childStudentsDiscount * rowCount * collumCount;
    }
    console.log(`${win.toFixed(2)} leva`)
}
cinema(["Premiere", "10", "12"]);
//cinema(["Normal", "21", "13"]);
//cinema(["Discount", "12", "30"]);
