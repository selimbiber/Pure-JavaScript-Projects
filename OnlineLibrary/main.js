const PAGE_BACKGROUND = document.getElementById('page-background')

/* DATA SECTION */
const DATA_SECTION = document.querySelector('.data-section')
const ONLINE_LIBRARY_STATS_BTN = document.getElementById('online-library_stats-btn')

function openCurrentStatsMenu() {
    DATA_SECTION.classList.add('show-data-section');
    PAGE_BACKGROUND.classList.add('page-bg_visible');
}

function closeCurrentStatsMenu() {
    DATA_SECTION.classList.remove('show-data-section');
    PAGE_BACKGROUND.classList.remove('page-bg_visible');
    PAGE_BACKGROUND.classList.add('page-bg_hidden'); 
}

function toggleCurrentStatsMenu() {
    closeNewBookMenu();
    DATA_SECTION.classList.contains('show-data-section') ? closeCurrentStatsMenu() : openCurrentStatsMenu();
}

ONLINE_LIBRARY_STATS_BTN.addEventListener('click', toggleCurrentStatsMenu);

/* FORM SECTION */
const FORM_SECTION = document.querySelector('.form-section')
const NEW_BOOK_MENU_BTN = document.getElementById('new-book_menu-btn')

function openNewBookMenu() {
    FORM_SECTION.classList.add('show-form-section');
    NEW_BOOK_MENU_BTN.style.backgroundImage = 'url(./images/close-svgrepo-com.svg)';
    NEW_BOOK_MENU_BTN.title = 'close new book registration form menu';
    PAGE_BACKGROUND.classList.add('page-bg_visible');
}

function closeNewBookMenu() {
    FORM_SECTION.classList.remove('show-form-section');
    NEW_BOOK_MENU_BTN.style.backgroundImage = 'url(./images/plus-svgrepo-com.svg)';
    NEW_BOOK_MENU_BTN.title = 'add a new book';
    PAGE_BACKGROUND.classList.remove('page-bg_visible');
    PAGE_BACKGROUND.classList.add('page-bg_hidden'); 
}

function toggleNewBookMenu() {
    closeCurrentStatsMenu();
    FORM_SECTION.classList.contains('show-form-section') ? closeNewBookMenu() : openNewBookMenu();
}

NEW_BOOK_MENU_BTN.addEventListener('click', toggleNewBookMenu);

/* EMPTY SECTION */
const EMPTY_SECTION = document.querySelector('.empty-section')
const RANDOM_BOOKS_BTN = document.getElementById('random-books_btn')

function centerComponentOnScreen () {
    EMPTY_SECTION.style.position = 'fixed';
    EMPTY_SECTION.style.top = '50%';
    EMPTY_SECTION.style.left = '50%';
    EMPTY_SECTION.style.transform = 'translate(-50%, -50%)';
}

function showEmptyLibraryMessage () {
    PAGE_BACKGROUND.classList.add('page-bg_visible');
    EMPTY_SECTION.style.display = 'flex';
  
    centerComponentOnScreen();
  
    RANDOM_BOOKS_BTN.addEventListener('click', () => {
      EMPTY_SECTION.style.display = 'none';
      PAGE_BACKGROUND.classList.remove('page-bg_visible');
    });
}