/* MENU BACKGROUND */
const MENU_BACKGROUND = document.getElementById('menu-background')

/* HEADER SECTION */
const HEADER_SECTION = document.getElementById('header-section')
const HAMBURGER_MENU = document.getElementById('nav-bar_mobile-items');
const HAMBURGER_MENU_BTN = document.getElementById('hamburger-menu_btn');

/* MAIN SECTION */
const MAIN_SECTION = document.getElementById('main-section')

/* BACK BOOKMARK SUBSECTION */
const BACK_BOOKMARK_SUBSECTION = document.getElementById('back-bookmark-subsection')
const HERO_TEXT = document.getElementById('hero-text')
const BACK_BTN = document.getElementById('back-btn')
const BOOKMARK_BTN = document.getElementById('bookmark-btn')

/* BACK STATES SUBSECTION */
const CURRENT_BACKED_RATE = document.getElementById('current-backed-rate')
const TOTAL_BACKERS_COUNT = document.getElementById('total-backers-count')
const NUMBER_DAYS_LEFT = document.getElementById('number-days-left')
const PROGRESS_BAR_STATE = document.getElementById('progress-bar-state')

/* ABOUT PROJECT SUBSECTION */
const BAMBOO_STAND_LEFT_BEHIND = document.getElementById('bamboo-stand_left-behind')
const BLACK_EDITION_LEFT_BEHIND = document.getElementById('black-edition_left-behind')
const SPECIAL_EDITION_LEFT_BEHIND = document.getElementById('special-edition_left-behind')

/* MODAL MENU SUBSECTION */
const MODAL_MENU = document.getElementById('modal-menu-subsection')
const REWARD_LIST_ITEMS = document.querySelectorAll('#modal-menu-subsection .select-reward_list-items')
const ENTER_PLEDGE_FORMS = document.querySelectorAll('.enter-pledge_form')
const PLEGE_AMOUNT_INPUTS = document.querySelectorAll('.pledge-amount_input')
const CONTINUE_BUTTONS = document.querySelectorAll('.continue-btn')

let currentBackedRate = 89914;
CURRENT_BACKED_RATE.textContent = currentBackedRate.toLocaleString();

let totalBackersCount = 5007;
TOTAL_BACKERS_COUNT.textContent = totalBackersCount.toLocaleString();

let numberDaysLeft = 56;

const PERCENTAGE = (currentBackedRate / 100000) * 100;
PROGRESS_BAR_STATE.style.width = PERCENTAGE + '%';

function toggleHamburgerMenu() {
    if ( HAMBURGER_MENU.classList.contains('show-menu') ) {
      HAMBURGER_MENU.classList.remove('show-menu');
      HAMBURGER_MENU_BTN.style.backgroundImage = 'url(./images/icon-hamburger.svg)';
      MENU_BACKGROUND.classList.remove('menu-bg_visible');      
      HEADER_SECTION.querySelector('figure').style.zIndex = 'unset';
      HAMBURGER_MENU_BTN.style.zIndex = 'unset';
    } else {
        HAMBURGER_MENU.classList.add('show-menu');
        HAMBURGER_MENU_BTN.style.backgroundImage = 'url(./images/icon-close-menu.svg)';
        MENU_BACKGROUND.classList.add('menu-bg_visible');
        HEADER_SECTION.querySelector('figure').style.zIndex = '10000';
        HAMBURGER_MENU_BTN.style.zIndex = '10000';
    }
}

const HAMBURGER_MENU_LIST_ITEMS = document.querySelectorAll('#nav-bar_mobile-items .nav-menu_list-item').forEach( (li) => {
  li.addEventListener('click', toggleHamburgerMenu);
});

function toggleModalMenu() {
  if ( MODAL_MENU.classList.contains('open-modal') ) {
    MODAL_MENU.classList.remove('open-modal');
    MENU_BACKGROUND.classList.remove('menu-bg_visible');
  } else {
    MODAL_MENU.classList.add('open-modal')
    MENU_BACKGROUND.classList.add('menu-bg_visible')
  }
}

REWARD_LIST_ITEMS.forEach( (REWARD_LI) => {
  REWARD_LI.addEventListener('click', changeBorderColor);
});

function changeBorderColor() {
  REWARD_LIST_ITEMS.forEach( (REWARD_LI) => {
    REWARD_LI.removeAttribute('id');
  });
  this.setAttribute('id', 'selected-reward_list-item');
}