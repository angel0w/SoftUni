function celsiumToFahrenheit (input) {
    const celsium = Number(input[0]);

    const farenheit = (celsium * ( 9 / 5 )) + 32;

    console.log(farenheit.toFixed(2));
}
celsiumToFahrenheit(["25"])

//T (° F) = T (° C) × 9/5 + 32