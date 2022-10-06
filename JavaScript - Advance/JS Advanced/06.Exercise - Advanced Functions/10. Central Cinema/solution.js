function solve() {
    // inputs
    let nameInput =document.querySelectorAll('input')[0];
    let hallInput =document.querySelectorAll('input')[1];
    let ticketPriceInput =document.querySelectorAll('input')[2];
    // buttons
    let onScreenBtn = document.getElementsByTagName('button')[0];
    let clearBtn = document.getElementsByTagName('button')[1];
    // ul elements
    let ulMovieElements = document.querySelectorAll('ul')[0];
    let ulArchiveElements = document.querySelectorAll('ul')[1];

    clearBtn.addEventListener('click', (e) => {
        let elements = Array.from(ulArchiveElements.children);
        if (elements.length > 1) {
            
            for (let index = 0; index < elements.length; index++) {
                let child = elements[i];
                child.remove();
            }
        } else if (elements.length == 1) {
                elements[0].remove()
        }
        
    });


    onScreenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (nameInput.value !== '' && hallInput.value !== '' && ticketPriceInput !== '' && !isNaN(ticketPriceInput.value)) {
            addMovie(nameInput.value, hallInput.value, ticketPriceInput.value);
        } else {
            clearTheInput();
        }
    });


    function addMovie(nameInput,hallInput,ticketPriceInput) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let strong = document.createElement('strong');
        let div = document.createElement('div');
        let input = document.createElement('ínput');
        let strongInsideDiv = document.createElement('strong');
        let btnArchive = document.createElement('button');


        span.textContent = `${nameInput}`;
        strong.textContent = `Hall: ${hallInput}`
        strongInsideDiv.textContent = `${ticketPriceInput}`;
        input.placeholder = 'Tickets Sold';
        btnArchive.textContent = 'Archive';

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);
        li.appendChild(strongInsideDiv);
        li.appendChild(input);
        li.appendChild(btnArchive);
        ulMovieElements.appendChild(li);

        let archiveUl = document.querySelector('#archive ul')

        btnArchive.addEventListener('click', () => {
            archiveUl.appendChild(li)
        });

    }


        function clearTheInput(){
                nameInput.value = '';
                hallInput.value = '';
                ticketPriceInput.value = '';
        }

}
