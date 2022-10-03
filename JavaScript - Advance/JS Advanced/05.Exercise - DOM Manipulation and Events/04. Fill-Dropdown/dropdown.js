function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let newItem = document.getElementById('menu');

    let option = document.createElement('option');

    option.textContent = text.value;
    option.value = value.value;

    newItem.appendChild(option);

    text.value = '';
    value.value = '';
}
