function search() {
    // TODO
    let towns = Array.from(document.querySelectorAll('ul li'));
    let searchText = document.getElementById('searchText').value;
    let counter = 0;

    if (searchText.length === 0) {
        return (document.getElementById(
            'result'
        ).innerText = `0 matches found`);
    }

    for (let town of towns) {
        let text = town.textContent;

        if (text.includes(searchText)) {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            counter++;
        } else {
            town.style.textDecoration = 'none';
            town.style.fontWeight = '';
        }
    }

    document.getElementById('result').innerText = `${counter} matches found`;
    debugger
   }
