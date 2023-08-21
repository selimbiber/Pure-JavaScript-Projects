const NEWS_HOMEPAGE = document.getElementById('news-homepage')
const HAMBURGER_MENU = document.getElementById('nav-bar_hamburger-menu')
const MENU_LINKS = document.getElementsByClassName('nav-bar_menu-link')
const MENU_BTN = document.getElementById('menu-btn')
const ICON_MENU_OPENED = document.getElementById('icon-menu_opened')
const ICON_MENU_CLOSE = document.getElementById('icon-menu_close')
const HERO_IMAGE = document.getElementById('mobile_web3-hero-image')

function toggleMenu() {
    if ( HAMBURGER_MENU.classList.contains("show-menu") ) {
      HAMBURGER_MENU.classList.remove("show-menu");
      ICON_MENU_CLOSE.style.display = "none";
      ICON_MENU_OPENED.style.display = "block";
      NEWS_HOMEPAGE.style.backgroundColor = 'var(--neutral-color_off-white)';
      HERO_IMAGE.style.filter = 'none';
    } else {
      HAMBURGER_MENU.classList.add("show-menu");
      ICON_MENU_CLOSE.style.display = "block";
      ICON_MENU_OPENED.style.display = "none";
      NEWS_HOMEPAGE.style.backgroundColor = 'var(--secondary-page-bg-dark-color)';
      HERO_IMAGE.style.filter = 'brightness(.5)';
    }
}

MENU_BTN.addEventListener('click', toggleMenu)
const MENU_LINKS_ARRAY = [...MENU_LINKS].forEach(link => {
    link.addEventListener('click', toggleMenu)
});