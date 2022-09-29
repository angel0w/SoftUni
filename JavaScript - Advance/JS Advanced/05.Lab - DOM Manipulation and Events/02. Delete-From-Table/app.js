function deleteByEmail() {
    let valueInput = document.querySelector('input[name="email"]').value;

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let found = false;
    for (let row of rows) {
        console.log(row);
        if (row.children[1].textContent == valueInput) {
            const parent = row.parentElement;
            parent.removeChild(row);
            found = true;
        }
    }

    document.getElementById('result').textContent = found
        ? 'Deleted.'
        : 'Not found.';
}
