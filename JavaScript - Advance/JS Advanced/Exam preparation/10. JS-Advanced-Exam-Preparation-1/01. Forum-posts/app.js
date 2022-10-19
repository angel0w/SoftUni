window.addEventListener('load', solve);

function solve() {
    let title = document.getElementById('post-title');
    let category = document.getElementById('post-category');
    let content = document.getElementById('post-content');

    let ulReviewList = document.getElementById('review-list');
    let ulPublishedList = document.getElementById('published-list');
    document.getElementById('clear-btn').addEventListener('click', clearPost);


    document
        .getElementById('publish-btn')
        .addEventListener('click', createPost);

    function createPost(e) {

        titleValue = title.value;
        categoryValue = category.value;
        contentValue = content.value;

        if (!titleValue || !categoryValue || !contentValue) {
            return;
        }

        let li = document.createElement('li');
        let article = document.createElement('article');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let btnEdit = document.createElement('button');
        let btnApprove = document.createElement('button');

        btnEdit.addEventListener('click', editPost);
        btnApprove.addEventListener('click', approvePost)

        h4.textContent = titleValue;
        p.textContent = `Category: ${categoryValue}`;
        p2.textContent = `Content: ${contentValue}`;
        btnEdit.textContent = 'Edit';
        btnApprove.textContent = 'Approve';

        li.classList.add('rpost');
        btnEdit.classList.add('action-btn', 'edit');
        btnApprove.classList.add('action-btn', 'approve');

        article.appendChild(h4);
        article.appendChild(p);
        article.appendChild(p2);
        article.appendChild(btnEdit);
        article.appendChild(btnApprove);
        li.appendChild(article);
        ulReviewList.appendChild(li);

        clearFormField();
    }
    
    function clearFormField() {
        title.value = '';
        category.value = '';
        content.value = '';
    }

    function editPost(e) {
        let currentPost = e.target.parentElement.parentElement;
        let articleContent = currentPost.getElementsByTagName('article')[0].children;

        let titleValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent
        let contentValue = articleContent[2].textContent
        
        title.value = titleValue;
        category.value = categoryValue.split(": ")[1];
        content.value = contentValue.split(": ")[1];

        currentPost.remove();
    }

    function approvePost(e) {
        let currentPost = e.target.parentElement.parentElement;
        ulPublishedList.appendChild(currentPost);
        Array.from(currentPost.querySelectorAll('button')).forEach(btn => btn.remove());
    }

    function clearPost(e) {
        Array.from(ulPublishedList.children).forEach(el => el.remove())
    }
}
