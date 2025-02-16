export const basePath = import.meta.env.VITE_BASE_PATH || '';

export function updatePaths() {
    document.getElementById('css-link').href = `${basePath}/src/style.css`;
    document.getElementById('home-link').href = `${basePath}/`;
    document.getElementById('articles-link').href = `${basePath}/articles.html`;
}

updatePaths();