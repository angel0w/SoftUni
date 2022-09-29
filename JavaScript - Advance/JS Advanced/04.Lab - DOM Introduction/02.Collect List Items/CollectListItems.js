function extractText() {
    // TODO
    // let items = document.querySelectorAll('#items');
    // let result = [];

    // for (const item of items) {
    //     result.push(item.textContent);
    // }
    // document.getElementById('result').textContent = result.join('\n');

    let lists = document.getElementsByTagName('li');
    let result = [];
    for (const list of lists) {
        result.push(list.textContent);
    }
    document.getElementById('result').textContent = result.join('\n');
}
