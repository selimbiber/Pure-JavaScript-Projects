const HEADER_SECTION = document.getElementById('header-section')
const HAMBURGER_MENU = document.getElementById('header-section_nav-menu')
const HAMBURGER_MENU_BTN = document.getElementById('hamburger-menu_btn')
const ICON_OPEN_MENU = document.getElementById('icon-open-menu')
const ICON_CLOSE_MENU = document.getElementById('icon-close-menu')
const DROPDOWN_ITEMS = document.querySelectorAll('.dropdown-items')

function createPageBackground() {
  if ( document.querySelector('.page-background') ) document.querySelector('.page-background').remove();
  const PAGE_BACKGROUND = document.createElement('div');
  PAGE_BACKGROUND.className = 'page-background';
  document.body.insertBefore(PAGE_BACKGROUND, HEADER_SECTION);
}

const MAX_WIDTH = window.matchMedia('(max-width: 1440px)');

function toggleMenu(media) {
  if (media.matches) {
    HAMBURGER_MENU_BTN.addEventListener('click', () => {
      if ( HAMBURGER_MENU.classList.contains("show-menu") ) {
        HAMBURGER_MENU.classList.remove("show-menu");
        ICON_CLOSE_MENU.style.display = "none";
        ICON_OPEN_MENU.style.display = "block";
        document.querySelector('.page-background').remove();
      } else {
        HAMBURGER_MENU.classList.add("show-menu");
        ICON_CLOSE_MENU.style.display = "block";
        ICON_OPEN_MENU.style.display = "none";
        createPageBackground();
      }
    });
  } else {
    return false;
  }
}

toggleMenu(MAX_WIDTH);

MAX_WIDTH.addEventListener(toggleMenu);

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