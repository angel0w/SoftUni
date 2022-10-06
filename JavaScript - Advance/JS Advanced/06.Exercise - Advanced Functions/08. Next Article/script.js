function getArticleGenerator(input) {
    let articles = input;

    return () => {
        if (articles.length) {
            let container = document.getElementById('content');
            let article = document.createElement('article');
            let el = articles.shift();
            article.textContent = el;
            container.appendChild(article)
        }
    }
}
