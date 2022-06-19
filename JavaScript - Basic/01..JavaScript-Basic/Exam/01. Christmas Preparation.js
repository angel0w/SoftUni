function christmasPreparation(input) {
    let opakovachnaRolkaHartiq = 5.8;
    let plat = 7.2;
    let lepilo = 1.2;

    let broiRolkiOpakovachnaHartiq = Number(input[0]);
    let rolkiPlat = Number(input[1]);
    let litriLepilo = Number(input[2]);
    let procentNamalenie = Number(input[3]);

    let cenaRolkihartiq = broiRolkiOpakovachnaHartiq * opakovachnaRolkaHartiq;
    let cenaRolkiPlat = rolkiPlat * plat;
    let cenaLepilo = litriLepilo * lepilo;

    let vsichkiMateriali = cenaRolkihartiq + cenaRolkiPlat + cenaLepilo;

     let procentNamalenieVpr = procentNamalenie / 100;

    let cenaSnamalenie = vsichkiMateriali - ( vsichkiMateriali * procentNamalenieVpr);

    console.log(cenaSnamalenie.toFixed(3));
   
 

}
//christmasPreparation(["2", "3", "2.5", "25"]);
//christmasPreparation(["4", "2", "5", "13"]);
christmasPreparation(["7",
"8",
"0.5",
"45"])
