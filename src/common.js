// common.js
import { loadHeader } from './load-header.js';

// Initialize common elements
loadHeader().then(() => {
    // Header is loaded, you can do any post-header-load initialization here if needed
}).catch(error => {
    console.error('Error initializing common elements:', error);
});
