function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let sum = 0;
    for (let i = 1;i < rows.length-1; i++) {
        console.log(rows[i].lastElementChild);
        let cell = rows[i].lastElementChild.textContent;
        sum += Number(cell);
    }
    
    document.getElementById('sum').textContent = sum;
}
