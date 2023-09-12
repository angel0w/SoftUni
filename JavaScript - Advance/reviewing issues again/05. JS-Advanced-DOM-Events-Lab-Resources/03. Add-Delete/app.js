function addItem() {
    //TODO...
    let ulItems = document.getElementById('items');
    let inputValue = document.getElementById('newItemText').value;

    let li = document.createElement('li');
    li.textContent = inputValue;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = 'Delete';

    
    deleteBtn.addEventListener('click', function(ev) {
        // console.log(ev.target.parentElement.delete);
        ev.target.parentElement.remove();
    });
    

    if(inputValue !== '') {
        li.append(deleteBtn);
        ulItems.appendChild(li);

    }
    document.getElementById('newItemText').value = '';



}