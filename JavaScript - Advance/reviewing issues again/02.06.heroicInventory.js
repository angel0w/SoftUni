function heroicInventory(params) {
    let result = [];

    for (const el of params) {
        let parr = el.split(' / ')
        let name = parr[0];
        let level = parr[1];
        let items = parr[2];
        // let [name, level, items ] = el.split(" / ");

        level = Number(level);

        if (items) {
            items = items.split(', ')
            result.push({name, level, items});
        } else {
            items = []
        }
        // items = items ? items.split(', ') : [];
        // result.push({name, level, items});
        
    }
    console.log(JSON.stringify(result));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);