function addItem() {
    //TODO...
    let input = document.getElementById('newItemText');
    let ul = document.getElementById('items');

    if (input.value == '') {
        return;
    }

    let li = document.createElement('li');
    li.textContent = input.value;

    let btnDelete = document.createElement('a');
    btnDelete.href = '#';
    btnDelete.textContent = '[Delete]';
    btnDelete.addEventListener('click', function (event) {
        event.target.parentElement.remove();
    });

    ul.appendChild(li);
    li.appendChild(btnDelete);
    input.value = '';
}

// let input = document.getElementById('newItemText');
// let ul = document.getElementById('items');
// let li = document.createElement('li');
// li.textContent = input.value;

// let deleteBtn = document.createElement('a');
// deleteBtn.textContent = 'Delete';
// deleteBtn.addEventListener('click', function (event) {
//     event.target.parentElement.remove();
// })

// li.append(deleteBtn);
// ul.append(li);

// input.value = '';
