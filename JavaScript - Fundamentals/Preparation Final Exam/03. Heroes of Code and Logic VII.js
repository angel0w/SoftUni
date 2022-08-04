function heroesOfCodeAndLogic(data) {
    let heroNumbers = data.shift();

    let store = {};

    for (let i = 0; i < heroNumbers; i++) {
        let [nameHero, hp, mp] = data.shift().split(" ");
        hp = Number(hp);
        mp = Number(mp);

        if (!store.hasOwnProperty(nameHero)) {
            store[nameHero] = { "Hit points": hp, "Mana points": mp };
            if (store[nameHero]["Hit points"] > 100) {
                store[nameHero]["Hit points"] = Number(100);
            }
            if (store[nameHero]["Mana points"] > 200) {
                store[nameHero]["Mana points"] = Number(200);
            }
        }
    }

    let line = data.shift();
    while (line !== "End") {
        let [command, hero, mpNeeded, speelName] = line.split(" - ");
            mpNeeded = Number(mpNeeded);

        // console.log(command, hero, mpNeeded, speelName);

        if (command === "Heal") {
            // "Heal – {hero name} – {amount}"
            // •	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100)
            // , HP is increased to 100 (the HP can't go over the maximum value).
            // •	 Print the following message:
            // o	"o	"{hero name} healed for {amount recovered} HP!"
            if (store.hasOwnProperty(hero)) {
                let oldHp = store[hero]["Hit points"];
                let recoveredHp = 0;
                store[hero]["Hit points"] += mpNeeded;
                if (store[hero]["Hit points"] > 100) {
                    store[hero]["Hit points"] = Number(100);
                }

                if (store[hero]["Hit points"] >= 100) {
                    recoveredHp = 100 - oldHp;
                } else {
                    recoveredHp = store[hero]["Hit points"] - oldHp
                }
                console.log(`${hero} healed for ${recoveredHp} HP!`);
            }

        } else if (command === "Recharge") {
            // "Recharge – {hero name} – {amount}"
            // •	The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can't go over the maximum value).
            // •	 Print the following message:
            // o	"{hero name} recharged for {amount recovered} MP!"

            if (store.hasOwnProperty(hero)) {
                let oldMp = store[hero]["Mana points"];
                let recoveredMp = 0;
                store[hero]["Mana points"] += mpNeeded;
                if (store[hero]["Mana points"] > 200) {
                    store[hero]["Mana points"] = Number(200);
                }

                if (store[hero]["Mana points"] >= 200) {
                    recoveredMp = 200 - oldMp;
                } else {
                    recoveredMp = store[hero]["Mana points"] - oldMp
                }
                console.log(`${hero} recharged for ${recoveredMp} MP!`);
            }


        } else if (command === "TakeDamage") {
            // "TakeDamage – {hero name} – {damage} – {attacker}"
            // •	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
            // o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
            // •	If the hero has died, remove him from your party and print:
            // o	"{hero name} has been killed by {attacker}!"
            let attacker = speelName;
            let damageHp = mpNeeded;
            
            if (store.hasOwnProperty(hero)) {
                    store[hero]["Hit points"] -= damageHp;
                    if (store[hero]["Hit points"] <= 0) {
                        console.log(`${hero} has been killed by ${attacker}!`);
                        delete store[hero];
                    } else {
                        console.log(`${hero} was hit for ${damageHp} HP by ${attacker} and now has ${store[hero]["Hit points"]} HP left!`);
                    }
                }

        } else if (command === "CastSpell") {
            // "CastSpell – {hero name} – {MP needed} – {spell name}"
            // •	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message:
            // o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
            // •	If the hero is unable to cast the spell print:
            // o	"{hero name} does not have enough MP to cast {spell name}!"

            if (store.hasOwnProperty(hero)) {
                if (store[hero]["Mana points"] < mpNeeded) {
                    console.log(`${hero} does not have enough MP to cast ${speelName}!`);
                } else if (store[hero]["Mana points"] >= mpNeeded) {
                    let oldMp = store[hero]["Mana points"];
                    let mpLeft = 0;
                    mpLeft = oldMp - mpNeeded;
                    store[hero]["Mana points"] -= mpNeeded;
                    console.log(`${hero} has successfully cast ${speelName} and now has ${mpLeft} MP!`);
                }
            }

        }


        line = data.shift();
    }

    let key = Object.keys(store);

    for (const hero of key) {
            console.log(`${hero}\n  HP: ${store[hero]["Hit points"]}\n  MP: ${store[hero]["Mana points"]}`);
    }

}
heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End",
]);

console.log("--=============--");

heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End",
]);
