import { loadEnv } from 'vite'

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    console.log('VITE_BASE_PATH:', env.VITE_BASE_PATH)

    return {
        base: env.VITE_BASE_PATH || '/',
        server: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
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
                    article: 'article.html'
                }
            }
        }
    }
}