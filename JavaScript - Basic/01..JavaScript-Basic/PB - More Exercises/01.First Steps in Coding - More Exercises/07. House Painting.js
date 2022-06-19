function housePaiting(input) {
  const visochinaXkushta = Number(input[0]);
  const duljinaStranichstenaY = Number(input[1]);
  const visochinaTriugStenaH = Number(input[2]);
  const razhodZelenaBoqLityr = 3.4;
  const razhodChervenaBoqLityr = 4.3;
  // STENI
  // stranichna stena
  let stranichnaStena = visochinaXkushta * duljinaStranichstenaY;
  let prozorec = 1.5 * 1.5;
  // 2te stranichni steni
  let dveStranichniSteni = 2 * stranichnaStena - 2 * prozorec;
  //zadna stena
  let zadnaStena = visochinaXkushta * visochinaXkushta;
  // vrata
  let vrata = 1.2 * 2;
  //dvete zadna i predna stena
  let zadnaPrednaStena = zadnaStena * 2 - vrata;
  // obshtaplost
  let obshtaPlosht = dveStranichniSteni + zadnaPrednaStena;

  //zelena boq lityr
  let zelenaBoqLityr = obshtaPlosht / razhodZelenaBoqLityr;


  //POKRIV
  //Dvata pravougylni pokriva
  let pravoygylniPokriva = 2 * (visochinaXkushta * duljinaStranichstenaY);
  //dvata triygylnika
  let pokrivTriygylnici = 2 * ((visochinaXkushta * visochinaTriugStenaH) / 2);
  //chervena boq
  let chervenaBoq = pravoygylniPokriva + pokrivTriygylnici;

  //lityrchervena boq
  let lityrChervenaBoq = chervenaBoq / razhodChervenaBoqLityr;

  console.log(zelenaBoqLityr.toFixed(2));
  console.log(lityrChervenaBoq.toFixed(2));
}
housePaiting(["6", "10", "5.2"]);
