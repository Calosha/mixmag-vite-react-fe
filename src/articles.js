import { updatePaths } from './utils.js';
import { basePath } from './utils.js';
updatePaths();
console.log('API URL:', import.meta.env.VITE_API_URL);
const apiUrl = import.meta.env.VITE_API_URL;


async function fetchArticles() {
    try {
        const response = await fetch('/api/articles');
        const articles = await response.json();

        const articlesDiv = document.getElementById('articles');
        articles.forEach(article => {
            articlesDiv.innerHTML += `
                <div class="article">
                    <a href="article.html?id=${article.id}">${article.title}</a>    
                    <div class="date">${new Date(article.pub_date * 1000).toLocaleDateString()}</div>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

fetchArticles();