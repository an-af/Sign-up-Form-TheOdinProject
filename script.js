document.addEventListener('DOMContentLoaded', () => {
    const mainLoad = document.querySelector('main')
    setTimeout(() => {
        mainLoad.classList.add('loaded');
    }, 1000)
})