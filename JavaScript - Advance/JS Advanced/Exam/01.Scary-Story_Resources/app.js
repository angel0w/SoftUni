window.addEventListener('load', solve);

function solve() {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let age = document.getElementById('age');
    let storyTitle = document.getElementById('story-title');
    let genre = document.getElementById('genre');
    let storyText = document.getElementById('story');

    let previewUl = document.getElementById('preview-list');

    let piblishBtn = document
        .getElementById('form-btn')
        .addEventListener('click', publish);

    function publish() {
        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let ageValue = age.value;
        let genreValue = genre.value;
        let storyTitleValue = storyTitle.value;
        let storyTextValue = storyText.value;

        if (
            !firstNameValue ||
            !lastNameValue ||
            !ageValue ||
            !storyTitleValue ||
            !storyTextValue
        ) {
            return;
        }

        let li = document.createElement('li');
        li.classList.add('story-info');

        let article = document.createElement('article');

        let h4 = document.createElement('h4');
        h4.textContent = `Text: ${firstNameValue} ${lastNameValue}`;

        let pAge = document.createElement('p');
        pAge.textContent = `Age: ${ageValue}`;

        let pTitle = document.createElement('p');
        pTitle.textContent = `Title: ${storyTitleValue}`;

        let pGenre = document.createElement('p');
        pGenre.textContent = `Genre: ${genreValue}`;

        let pText = document.createElement('p');
        pText.textContent = `${storyTextValue}`;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save Story';
        // saveBtn.setAttribute("disabled", false);
        saveBtn.addEventListener('click', save);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit Story';
        // editBtn.setAttribute("disabled", true);
        editBtn.addEventListener('click', edit);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete Story';
        // deleteBtn.setAttribute("disabled", false);
        deleteBtn.addEventListener('click', deleteFnc);

        article.appendChild(h4);
        article.appendChild(pAge);
        article.appendChild(pTitle);
        article.appendChild(pGenre);
        article.appendChild(pText);
        li.appendChild(article);
        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        previewUl.appendChild(li);

        firstName.value = '';
        lastName.value = '';
        age.value = '';
        storyTitle.value = '';
        storyText.value = '';

        // piblishBtn.setAttribute("disabled", true);

        function save(e) {
            console.log(
                e.target.parentElement.parentElement.parentElement.parentElement.remove()
            );

            let h1 = document.createElement('h1');
            h1.textContent = 'Your scary story is saved!';

            let body = document.getElementsByClassName('body')[0];
            body.appendChild(h1);
        }

        function edit(e) {
            let currentPostLi = e.target.parentElement;
            e.target.parentElement.remove();


            let article =
                currentPostLi.getElementsByTagName('article')[0].children;

            let name = article[0].textContent.split(' ');

            let firstNamN = name[1].textContent;
            let lastNameN = name[2].textContent;
            let ageN = article[1].textContent;
            let titleN = article[2].textContent;
            let genreN = article[3].textContent;
            let textN = article[4].textContent;

            firstName.value = firstNamN;
            lastName.value = lastNameN;
            age.value = ageN;
            genre.value = genreN;
            storyTitle.value = titleN;
            storyText.value = textN;
            piblishBtn.disabled = false;
        }

        function deleteFnc(e) {
            e.target.parentElement.remove();

            piblishBtn.disabled = false;
        }
    }
}
