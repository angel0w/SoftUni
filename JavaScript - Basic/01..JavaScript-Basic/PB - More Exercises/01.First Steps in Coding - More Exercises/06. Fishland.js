function fishLand (input){
    const cenaKgSkumriq = Number(input[0]);
    const cenaKgCaca = Number(input[1]);

    const kgPalamud = Number(input[2]);
    const kgSafrid = Number(input[3]);
    const kgMidi = Number(input[4]);

    const cenaPalamudKg = cenaKgSkumriq +  (cenaKgSkumriq * 0.6);
    const cenaSafridKg = cenaKgCaca + (cenaKgCaca * 0.8);
    const cenaMidiKg = 7.5;

    const cost = (kgPalamud * cenaPalamudKg) + (kgSafrid * cenaSafridKg) + (kgMidi * cenaMidiKg);

    console.log(cost.toFixed(2));

}
fishLand(["6.90","4.20","1.5","2.5","1"]);
fishLand(["5.55","3.57","4.3","3.6","7"]);