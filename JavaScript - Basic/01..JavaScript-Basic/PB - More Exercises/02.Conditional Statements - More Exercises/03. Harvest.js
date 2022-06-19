function harvest(input) {
    //За 1 литър вино са нужни 2,5 кг. грозде
    const NujniZalityrVinoKg = 2.5;
//     •	1ви ред: X кв.м е лозето – цяло число в интервала [10 … 5000]
    const lozetoKvM = Number(input[0]);
// •	2ри ред: Y грозде за един кв.м – реално число в интервала [0.00 … 10.00]
    const grozdeZaKvMKg = Number(input[1]);
// •	3ти ред: Z нужни литри вино – цяло число в интервала [10 … 600]
    const nujniLitriVinoProdan = Number(input[2]);
// •	4ти ред: брой работници – цяло число в интервала [1 … 20]
    const broiRabotnici = Number(input[3]);

    //obshto grozde
    const grozdeKg = lozetoKvM * grozdeZaKvMKg;
    //40% za vino
    const grozdezaVino = grozdeKg * 0.40;
    // litri vino
    const vino = grozdezaVino / NujniZalityrVinoKg;
    //razlika
    let diff = Math.abs(vino - nujniLitriVinoProdan);

    // vino za rabotnici
 
    let vinoZaRabotnici = diff / broiRabotnici;

    // •	Ако произведеното вино е по-малко от нужното:
    // o	“It will be a tough winter! More {недостигащо вино} liters wine needed.”
    // 	Резултатът трябва да е закръглен към по-ниско цяло число
    if (nujniLitriVinoProdan > vino) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`)
        // •	Ако произведеното вино е колкото или повече от нужното:
        // o	“Good harvest this year! Total wine: {общо вино} liters.”
        // 	Резултатът трябва да е закръглен към по-ниско цяло число
        
    } else if ( vino >= nujniLitriVinoProdan){
        console.log(`Good harvest this year! Total wine: ${(Math.floor(vino))} liters.`)
        // o	“{Оставащо вино} liters left -> {вино за 1 работник} liters per person.”
        // 	И двата резултата трябва да са закръглени към по-високото цяло число
        console.log(`${Math.ceil(diff)} liters left -> ${(Math.ceil(vinoZaRabotnici))} liters per person.`)
    }
}
harvest(["650","2","175","3"]);
harvest(["1020","1.5","425","4"]);