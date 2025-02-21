export async function loadHeader() {
    try {
        const response = await fetch('/mixmag/components/header.html');
        const html = await response.text();
        document.querySelector('.wrap').insertAdjacentHTML('afterbegin', html);
    } catch (error) {
        console.error('Error loading header:', error);
    }
}