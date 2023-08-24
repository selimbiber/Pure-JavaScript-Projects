const BODY_CONTAINER = document.getElementById('container')
const HAMBURGER_MENU = document.getElementById('header-section_nav-menu')
const HAMBURGER_BTN = document.getElementById('hamburger-menu_btn')
const ICON_OPEN_MENU = document.getElementById('icon-open-menu')
const ICON_CLOSE_MENU = document.getElementById('icon-close-menu')
const HERO_IMAGE = document.getElementById('hero-section_mobile-image')
const HERO_TEXT = document.getElementById('hero-section_article-text')
const HERO_BTN = document.getElementById('hero-section_article-btn')
const DROPDOWN_ITEMS = document.querySelectorAll('.dropdown-items')
const CLIENT_ICONS = document.querySelectorAll('.client-icons')

function toggleMenu() {
    if ( HAMBURGER_MENU.classList.contains("show-menu") ) {
      HAMBURGER_MENU.classList.remove("show-menu");
      ICON_CLOSE_MENU.style.display = "none";
      ICON_OPEN_MENU.style.display = "block";
      NEWS_HOMEPAGE.style.backgroundColor = 'var(--neutral-color-almost-white)';
      HERO_BTN.style.opacity = '1';
      HERO_IMAGE.style.filter = 'none';
      CLIENT_ICONS.forEach(icon => {
        icon.style.filter = 'brightness(1)';
      });
    } else {
      HAMBURGER_MENU.classList.add("show-menu");
      ICON_CLOSE_MENU.style.display = "block";
      ICON_OPEN_MENU.style.display = "none";
      NEWS_HOMEPAGE.style.backgroundColor = 'var(--neutral-color-medium-gray)';
      HERO_BTN.style.opacity = '.9';
      HERO_IMAGE.style.filter = 'brightness(.36)';
      CLIENT_ICONS.forEach(icon => {
        icon.style.filter = 'brightness(.45)';
      });
      HERO_TEXT.style.color = 'var(--active-color-dark-gray)';
    }
}

DROPDOWN_ITEMS.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    targetDetail.querySelector('summary img').classList.add('active-icon-arrow')
    const lastClickedDetail = document.getElementById('opened-detail');
    if (lastClickedDetail && lastClickedDetail !== targetDetail) {
      lastClickedDetail.querySelector('summary img').classList.remove('active-icon-arrow');
    }
    lastClickedDetail?.removeAttribute('id');
    targetDetail.setAttribute('id', 'opened-detail');
    
    DROPDOWN_ITEMS.forEach( (detail) => {
      // if (detail !== targetDetail) {
      //   detail.removeAttribute("open");
      // }
      if ( detail.hasAttribute('open') ) {
        lastClickedDetail.querySelector('summary img').classList.remove('active-icon-arrow');
      }
    });
  });
});