const NAVBAR = document.getElementById('navbar')
const HERO = document.getElementById('hero-section')

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= HERO.offsetHeight) {
        NAVBAR.style.backgroundColor = 'black'
    } else {
        NAVBAR.style.backgroundColor = 'bisque'
    }
});