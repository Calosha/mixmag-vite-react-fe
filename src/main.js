import { updatePaths } from './utils.js';
updatePaths();
document.getElementById('env-test').textContent = `API URL: ${import.meta.env.VITE_API_URL}`;