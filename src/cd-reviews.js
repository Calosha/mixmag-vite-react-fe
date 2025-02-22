async function fetchNews(page = 1) {
    try {
        const response = await fetch(`/mixmag/api/cd_reviews?page=${page}`);
        const news_page = await response.json();

        const articlesDiv = document.getElementById('articles');
        articlesDiv.innerHTML = ''; // Clear existing content

        news_page.items.forEach(news_item => {
            articlesDiv.innerHTML += `
                <div class="article">
                    <a href="cd-reviews-item.html?id=${news_item.id}">
                        <div class="title">${news_item.title}</div>
                        ${news_item.name ? `<div class="artist">${news_item.name}</div>` : ''}
                    </a>
                    <div class="date">${new Date(news_item.pub_date * 1000).toLocaleDateString()}</div>
                </div>
            `;
        });

        const pagination = document.createElement('div');
        pagination.className = 'pagination';

        const prevButton = document.createElement('button');
        prevButton.textContent = '←';
        prevButton.disabled = page === 1;
        prevButton.onclick = () => fetchNews(page - 1);
        pagination.appendChild(prevButton);

        for (let i = Math.max(1, page - 2); i <= Math.min(news_page.total_pages, page + 2); i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = i === page ? 'active' : '';
            pageButton.onclick = () => fetchNews(i);
            pagination.appendChild(pageButton);
        }

        const nextButton = document.createElement('button');
        nextButton.textContent = '→';
        nextButton.disabled = page === news_page.total_pages;
        nextButton.onclick = () => fetchNews(page + 1);
        pagination.appendChild(nextButton);

        articlesDiv.appendChild(pagination);

        // Update URL
        const url = new URL(window.location);
        url.searchParams.set('page', page);
        window.history.pushState({}, '', url);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Get initial page from URL
const urlParams = new URLSearchParams(window.location.search);
const initialPage = parseInt(urlParams.get('page')) || 1;
fetchNews(initialPage);