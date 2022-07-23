function inventory (input) {
    let heroes = [];

    for (let line of input) {
    let [name, level, items] = line.split(" / ");

    let currentHero = {
        name:name,
        level:+level,
        items:items
    };

    heroes.push(currentHero)
    }

    let sortedByLevel = heroes.sort((a,b) => {
        return a.level - b.level; 
    });
    
    for(let el of sortedByLevel) {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    }
}
inventory([
'Isacc / 25 / Apple, GravityGun',    
'Derek / 12 / BarrelVest, DestructionSword',    
'Hes / 1 / Desolator, Sentinel, Antara']);

console.log('-----------');

inventory([
'Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara'
]);
