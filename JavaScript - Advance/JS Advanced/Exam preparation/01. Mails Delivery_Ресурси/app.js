function solve() {
    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', add);
    resetBtn.addEventListener('click', reset);

    let listOfMails = document.getElementById('list');
    let sendMails = document.getElementsByClassName('sent-list')[0];
    let deleteMails = document.getElementsByClassName('delete-list')[0];

    function add(e) {
        recipientValue = recipient.value;
        titleValue = title.value;
        messageValue = title.value;


        e.preventDefault();
        if (!recipient.value || !title.value || !message.value) {
            return;
        }

        let li = document.createElement('li');

        let hTitle = document.createElement('h4');
        hTitle.textContent = `Title: ${title.value}`;

        let hRecipient = document.createElement('h4');
        hRecipient.textContent = `Recipient Name: ${recipient.value}`;

        let span = document.createElement('span');
        span.textContent = message.value;

        let div = document.createElement('div');
        div.setAttribute('id', 'list-action');

        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.setAttribute('type', 'submit');
        sendButton.setAttribute('id', 'send');
        sendButton.addEventListener('click', sendMail);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('type', 'submit');
        deleteButton.setAttribute('id', 'delete');
        deleteButton.addEventListener('click', deleteMail);

        div.appendChild(sendButton);
        div.appendChild(deleteButton);

        li.appendChild(hTitle);
        li.appendChild(hRecipient);
        li.appendChild(span);
        li.appendChild(div);
        listOfMails.appendChild(li);

        recipient.value = '';
        title.value = '';
        message.value = '';


        function sendMail(e) {
            let li = document.createElement('li');

            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipientValue}`;

            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${titleValue}`;

            let div = document.createElement('div');
            div.classList.add('btn');

            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            buttonDelete.setAttribute('type', 'submit');
            buttonDelete.classList.add('delete');
            buttonDelete.addEventListener('click', deleteMailE)

            li.appendChild(spanTo);
            li.appendChild(spanTitle);
            div.appendChild(buttonDelete);
            li.appendChild(div);
            sendMails.appendChild(li);

            e.target.parentElement.parentElement.remove();

            function deleteMailE (e) {

                deleteMail(e)

            }
        }

        function deleteMail(e) {
            let li = document.createElement('li');
            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipientValue}`
            
            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${titleValue}`

            li.appendChild(spanTo);
            li.appendChild(spanTitle);
            deleteMails.appendChild(li);

            e.target.parentElement.parentElement.remove();

        }
    }

    function reset(e) {
        e.preventDefault();
        recipient.value = '';
        title.value = '';
        message.value = '';
    }


}
solve();
