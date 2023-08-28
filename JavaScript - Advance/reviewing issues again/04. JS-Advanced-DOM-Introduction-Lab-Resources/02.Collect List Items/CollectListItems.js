function extractText() {

    let items = document.getElementById('items');

    let textArea = document.getElementById('result');

    textArea.textContent = items.textContent;
}