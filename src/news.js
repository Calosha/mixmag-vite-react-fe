async function fetchArticles() {
    try {
        const response = await fetch('/mixmag/api/news');
        const articles = await response.json();

        const articlesDiv = document.getElementById('articles');
        articles.forEach(article => {
            articlesDiv.innerHTML += `
                <div class="article">
                    <a href="news-item.html?id=${article.id}">${article.title}</a>    
                    <div class="date">${new Date(article.pub_date * 1000).toLocaleDateString()}</div>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

fetchArticles();