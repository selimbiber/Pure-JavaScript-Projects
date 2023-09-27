const BODY_CONTAINER = document.getElementById('container')
const HEADER_SECTION = document.getElementById('header-section')
const HAMBURGER_MENU = document.getElementById('header-section_nav-menu')
const HAMBURGER_BTN = document.getElementById('hamburger-menu_btn')
const ICON_OPEN_MENU = document.getElementById('icon-open-menu')
const ICON_CLOSE_MENU = document.getElementById('icon-close-menu')
const HERO_IMAGE = document.getElementById('hero-section_mobile-image')
const HERO_TEXT = document.getElementById('content-subsection_article-text')
const HERO_BTN = document.getElementById('content-subsection_article-btn')
const DROPDOWN_ITEMS = document.querySelectorAll('.dropdown-items')
const CLIENT_ICONS = document.querySelectorAll('.client-icons')

function createPageBackground() {
  if ( document.querySelector('.page-background') ) document.querySelector('.page-background').remove();
  const PAGE_BACKGROUND = document.createElement('div');
  PAGE_BACKGROUND.className = 'page-background';
  document.body.insertBefore(PAGE_BACKGROUND, HEADER_SECTION);
}

if (window.innerWidth < 1440) {
  function toggleMenu() {
    if ( HAMBURGER_MENU.classList.contains("show-menu") ) {
      HAMBURGER_MENU.classList.remove("show-menu");
      document.querySelector('.page-background').remove();
    } else {
      HAMBURGER_MENU.classList.add("show-menu");
      ICON_CLOSE_MENU.style.display = "block";
      ICON_OPEN_MENU.style.display = "none";
      createPageBackground();
    }
  }
} else {
  function toggleMenu() {
    return false;
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
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
      if ( detail.hasAttribute('open') ) {
        lastClickedDetail.querySelector('summary img').classList.remove('active-icon-arrow');
      }
      if ( detail.hasAttribute('open') ) {
        lastClickedDetail.querySelectorAll('ul li').forEach( (link) => {
          link.addEventListener('click', () => {
            detail.removeAttribute("open");
          });
        });
      }
    });
  });
});