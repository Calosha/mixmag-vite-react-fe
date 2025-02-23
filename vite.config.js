import { loadEnv } from 'vite'

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    console.log('VITE_BASE_PATH:', env.VITE_BASE_PATH)

    return {
        base: '/mixmag/',
        server: {
            proxy: {
                '/mixmag/api': {
                    target: 'http://localhost:3000',
                    rewrite: (path) => path.replace(/^\/mixmag\/api/, '/api'),
                    changeOrigin: true
                }
            }
        },
        build: {
            outDir: 'dist',
            assetsDir: 'assets',
            rollupOptions: {
                input: {
                    main: 'index.html',
                    articles: 'articles.html',
                    article: 'article.html',
                    news: 'news.html',
                    cdReview: 'cd-reviews.html',
                    cdReviewItem: 'cd-reviews-item.html',
                    newsItem: 'news-item.html',
                    sitemap: 'sitemap.xml',
                    robots: 'robots.txt'
                }
            }
        }
    }
}
