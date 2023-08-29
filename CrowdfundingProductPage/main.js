/* HEADER SECTION */
const HAMBURGER_MENU = document.getElementById('nav-menu_list-items');
const HAMBURGER_MENU_BTN = document.getElementById('hamburger-menu_btn');

/* MAIN SECTION */
const BACK_BOOKMARK_SUBSECTION = document.getElementById('back-bookmark-subsection')
const HERO_TEXT = document.getElementById('hero-text')
const BACK_BTN = document.getElementById('back-btn')
const BOOKMARK_BTN = document.getElementById('bookmark-btn')
const BACK_STATE_COUNT_TITLE = document.querySelectorAll('.back-state_count-title')
const BACK_STATE_COUNT_INFO = document.querySelectorAll('.back-state_count-info')
const PROGRESS_BAR_STATE = document.getElementById('progress-bar-state')

function toggleHamburgerMenu() {
    if ( HAMBURGER_MENU.classList.contains("show-menu") ) {
      HAMBURGER_MENU.classList.remove("show-menu");
      HAMBURGER_MENU_BTN.style.backgroundImage = 'url(./images/icon-hamburger.svg)';
    } else {
        HAMBURGER_MENU.classList.add("show-menu");
        HAMBURGER_MENU_BTN.style.backgroundImage = 'url(./images/icon-close-menu.svg)';
    }
}

const HAMBURGER_MENU_LIST_ITEMS = document.querySelectorAll('.nav-menu_mobile-styles').forEach( (li) => {
  li.addEventListener('click', toggleHamburgerMenu);
});