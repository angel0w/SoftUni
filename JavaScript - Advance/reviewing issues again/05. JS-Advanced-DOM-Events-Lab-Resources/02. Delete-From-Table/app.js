function deleteByEmail() {
//     Write a program that takes an email from an input field and deletes the matching row from a table.
    let emails = Array.from(document.querySelectorAll('tbody tr td:nth-child(even)'));
    let msgResult = document.getElementById('result');
    let input = document.querySelector('input[name="email"]').value;
    
    let flag = 'false'

    for (const email of emails) {
        if (email.textContent == input) {
            email.parentElement.remove()
            flag = 'true';
            msgResult.textContent = "Deleted."
        } else {
            msgResult.textContent = "Not found."

        }
        
    }
    document.querySelector('input[name="email"]').value = ''
    
}