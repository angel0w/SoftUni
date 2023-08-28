function addItem() {
    console.log('TODO:...');
    let ulItems = document.getElementById('items');
    let newItemValue = document.getElementById('newItemText').value;

    let newLi = document.createElement('li');
    newLi.textContent = newItemValue;
    ulItems.appendChild(newLi)
    

}