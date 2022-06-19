function deerOfSanta (input){
//     •	Първи ред – брой дни, в които Дядо Коледа отсъства – цяло число в интервала [1…5000]
    let broiDni = Number(input[0]);
// •	Втори ред – оставена храна в килограми – цяло число в интервала [0…100000]\
    let ostavenaHranaKg = Number(input[1]);
// •	Трети ред – храна на ден за първия елен в килограми – реално число в интервала [0.00…100.00]
    let pyrviElenHranaZaDenKg = Number(input[2]);
// •	Четвърти ред – храна на ден за втория елен в килограми– реално число в интервала [0.00…100.00]
    let vtoriElenHranaZaDenKg = Number(input[3]);
// •	Пети ред – храна на ден за третия елен в килограми – реално число в интервала [0.00…100.00]
    let tretiElenHranaZaDenKg = Number(input[4]);

    let purviElen = broiDni * pyrviElenHranaZaDenKg;
    let vtoriElen = broiDni * vtoriElenHranaZaDenKg;
    let tretiElen = broiDni * tretiElenHranaZaDenKg;

    let obshtoHrana = purviElen + vtoriElen + tretiElen;
    let diff = Math.abs(obshtoHrana - ostavenaHranaKg)
    if (ostavenaHranaKg >= obshtoHrana){
        console.log(`${Math.floor(diff)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }

//     •	Ако оставената храна Е достатъчна:
// o	“{килограми, които остават} kilos of food left.”
// 	Резултатът трябва да е закръглен към ПО-МАЛКОТО цяло число
// •	Ако оставената храна НЕ Е достатъчна:
// o	“{килограми, които не  недостигат} more kilos of food are needed.”
// 	Резултатът трябва да е закръглен към ПО-ГОЛЯМОТО цяло число

}
deerOfSanta(["2",
"10",
"1",
"1",
"2"])
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])

