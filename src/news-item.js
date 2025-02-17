async function fetchArticle() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if (!id) throw new Error('Article ID not found');

        const response = await fetch(`/mixmag/api/news/${id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const article = await response.json();
        document.getElementById('article').innerHTML = `
            <div class="article-title">${article.title || 'Untitled'}</div>
            <div class="article-announcement">${article.announcement || ''}</div>
            <div class="article-content">${article.description || ''}</div>
            <div class="article-meta">
                <span class="date">${article.pubDate ? new Date(article.pubDate * 1000).toLocaleDateString() : ''}</span>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching article:', error);
        document.getElementById('article').innerHTML = '<div class="error">News item not found</div>';
    }
}

fetchArticle();