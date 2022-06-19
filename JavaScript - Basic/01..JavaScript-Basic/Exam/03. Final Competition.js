function finalCompetition (input) {

    let broiTanciori = Number(input[0]);
    let broiTochki = Number(input[1]);
    let season = input[2];
    let mqsto  = input[3];

    let spechelenaSuma = 0;
    if ( mqsto === "Bulgaria"){
        spechelenaSuma = broiTanciori * broiTochki;
    } else if (mqsto === "Abroad"){
        spechelenaSuma = (broiTanciori * broiTochki);
        let dobavka  = spechelenaSuma * 0.50;
        spechelenaSuma += dobavka;

    }
    
    if ( mqsto === "Bulgaria"){
        if ( season === "summer"){
            spechelenaSuma = spechelenaSuma * 0.95;
        } else {
            spechelenaSuma = spechelenaSuma * 0.92;
        }
    } else {
        if ( season === "summer"){
            spechelenaSuma = spechelenaSuma * 0.90;
        } else {
            spechelenaSuma = spechelenaSuma * 0.85;
        }
    }

    let darenie = spechelenaSuma * 0.75;
    spechelenaSuma = spechelenaSuma - (spechelenaSuma * 0.75);
    let razdelqne = spechelenaSuma / broiTanciori;

    console.log(`Charity - ${darenie.toFixed(2)}`);
    console.log(`Money per dancer - ${razdelqne.toFixed(2)}`);

}
finalCompetition(["1", "89.5", "summer", "Abroad"]);
//finalCompetition(["25", "98", "winter", "Bulgaria"]);
