function sumTable() {
    let table = document.querySelectorAll('table tr')
    console.log(table);
    let buff = 0

    for(let i = 1; i < table.length-1; i++) {
        console.log(table[i].lastElementChild);
        buff += table[i].lastElementChild.textContent
    }

    let result = document.getElementById('sum');

    result.textContent = buff
}