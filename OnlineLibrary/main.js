const HEADER_SECTION = document.querySelector('.header-section')
const MAIN_CONTAINER = document.querySelector('.main-container')

function createPageBackground() {
    if ( document.querySelector('.page-background') ) document.querySelector('.page-background').remove();
    const PAGE_BACKGROUND = document.createElement('div');
    PAGE_BACKGROUND.className = 'page-background';
    document.body.insertBefore(PAGE_BACKGROUND, HEADER_SECTION);
}

/* DATA SECTION */
const DATA_SECTION = document.querySelector('.data-section')
let availableBooksCount = 0;
let inProgressBooksCount = 0;
let completedBooksCount = 0;
let favBooksCount = 0;
let totalReadPagesCount = 0;
const ONLINE_LIBRARY_STATS_BTN = document.getElementById('online-library_stats-btn')

function openCurrentStatsMenu() {
    EMPTY_SECTION.style.display = 'none';
    swipeLibraryRight();

    DATA_SECTION.classList.add('show-data-section');
    createPageBackground();
}

function closeCurrentStatsMenu() {
    centerTheLibrary();
    checkEmptyLibrary();

    DATA_SECTION.classList.remove('show-data-section');
    if ( document.querySelector('.page-background') ) document.querySelector('.page-background').remove();
}

function toggleCurrentStatsMenu() {
    closeNewBookMenu();
    DATA_SECTION.classList.contains('show-data-section') ? closeCurrentStatsMenu() : openCurrentStatsMenu();
}

ONLINE_LIBRARY_STATS_BTN.addEventListener('click', toggleCurrentStatsMenu);

const RESET_LIBRARY_BTN = document.getElementById('reset-library_btn')

function deleteAllBooks() {
    RESET_LIBRARY_BTN.disabled = true;
    const WARNING_AREA = DATA_SECTION.querySelector('.book-delete_warning-area')
    // askUserForConfirmation
    WARNING_AREA.style.display = 'flex';
    createPageBackground();
    HEADER_SECTION.style.zIndex = '3';
    WARNING_AREA.querySelector('.confirm-btn').addEventListener('click', () => {
        RESET_LIBRARY_BTN.disabled = false;
        WARNING_AREA.style.display = 'none';
        ADDED_BOOKS.length = 0;
        closeCurrentStatsMenu();
        if ( document.querySelector('.bookshelf-section') ) {
            document.querySelector('.bookshelf-section').remove();
        } else {
            document.querySelector('.empty-section header h2').textContent = 'Your Online Library is Already Empty!';
            document.querySelector('.empty-section header h2').style.color = '#fb4f56';
        }
        HEADER_SECTION.style.zIndex = '7';
        checkEmptyLibrary();
        resetDataStats();
    });
    WARNING_AREA.querySelector('.cancel-btn').addEventListener('click', () => {
        RESET_LIBRARY_BTN.disabled = false;
        WARNING_AREA.style.display = 'none';
        closeCurrentStatsMenu();
        HEADER_SECTION.style.zIndex = '7';
    });
}
RESET_LIBRARY_BTN.addEventListener('click', deleteAllBooks);

/* FORM SECTION */
const FORM_SECTION = document.querySelector('.form-section')
const NEW_BOOK_MENU_BTN = document.getElementById('new-book_menu-btn')

function openNewBookMenu() {
    EMPTY_SECTION.style.display = 'none';
    swipeLibraryLeft();

    FORM_SECTION.classList.add('show-form-section');
    NEW_BOOK_MENU_BTN.style.backgroundImage = 'url(./images/close-svgrepo-com.svg)';
    NEW_BOOK_MENU_BTN.title = 'close new book registration form menu';
    createPageBackground();
}

function closeNewBookMenu() {
    centerTheLibrary()

    FORM_SECTION.classList.remove('show-form-section');
    NEW_BOOK_MENU_BTN.style.backgroundImage = 'url(./images/plus-svgrepo-com.svg)';
    NEW_BOOK_MENU_BTN.title = 'add a new book';
}

function toggleNewBookMenu() {
    closeCurrentStatsMenu();
    FORM_SECTION.classList.contains('show-form-section') ? closeNewBookMenu() : openNewBookMenu();
}

NEW_BOOK_MENU_BTN.addEventListener('click', toggleNewBookMenu);

/* FORM SECTION -> FORM VALIDATION */

const BOOK_REGISTRATION_FORM = document.getElementById('book-registration_form');

const BOOK_TITLE_INPUT = document.getElementById('book-title');
const BOOK_AUTHOR_INPUT = document.getElementById('book-author-name')
const BOOK_COVER_LINK_INPUT = document.getElementById('book-cover-image')

const BOOK_SELECT_RATE_CONTAINER = document.getElementById('select-rate_container')
const BOOK_SELECT_STATE = document.getElementById('select-state')

const BOOK_PAGES_COUNT_CONTAINER = document.getElementById('book-pages-count_container')
const BOOK_PAGES_COUNT_INPUT = document.getElementById('book-pages-count')

const BOOK_NUMBER_PAGES_READ_CONTAINER = document.getElementById('number-pages-read_container')
const NUMBER_PAGES_READ_INPUT = document.getElementById('number-pages-read');

const CURRENT_BOOK_ERROR_CONTAINER = document.getElementById('current-book_wm-container')
const ERROR_MESSAGE_CLOSE_BTN = document.getElementById('error-message_close-btn')
ERROR_MESSAGE_CLOSE_BTN.addEventListener('click', () => {CURRENT_BOOK_ERROR_CONTAINER.style.display = 'none';})

const SAVE_BOOK_BTN = document.getElementById('submit-form_btn')

const ADDED_BOOKS = [];

/* Regex Functions */
const VALIDETE_FORM_INPUTS = {
    titleNameInput: (input) => {
        const regexForBookTitleInput = /^(?!\s)[a-zA-Z\s]*(?<!\s)$/;
        return regexForBookTitleInput.test(input);
    },
    bookPagesInput: (input) => {
        const regexForPagesNumberInput = /^(1|[1-9]\d{0,3}|[1-9]\d{0,3}|1[0-9]{1,4}|20[0-9]{3}|21[0-3][0-9]{2}|214[0-4][0-9]|2145[0-0])$/; // -> is Between 1 and 21450
        return regexForPagesNumberInput.test(input);
    },
    httpsLinkInput: (input) => {
        const regexForCheckLinkInput = /^https:///;
        return regexForCheckLinkInput.test(input);
    }
}

/* Helper Function */
function removeSpaces(event) {
    const input = event.target;
    if (input.value.trim() === "" && event.keyCode === 32) {
      event.preventDefault();
      input.value = "";
    }
}

function capitalizeFirstLettersForAuthorName(name) {
    const AUTHOR_NAME_ARRAY = name.split(" ");
    let formattedAuthorName = ""; 
    for (let i = 0; i < AUTHOR_NAME_ARRAY.length; i++) {
        const NAME = AUTHOR_NAME_ARRAY[i];
        const CAPITALIZED_NAME = NAME.charAt(0).toUpperCase() + NAME.slice(1).toLowerCase();
        formattedAuthorName = formattedAuthorName + ` ${CAPITALIZED_NAME}`;
    }
    return formattedAuthorName;
}
class Book {
    constructor(title, author, link, bookPages, state, readedPages, bookId) {
        this.title = title.toUpperCase();
        this.author = capitalizeFirstLettersForAuthorName(author).trim();
        this.link = link;
        this.bookPages = bookPages;
        this.state = state;
        this.readedPages = readedPages;
        this.bookId = bookId;
    }
}

const RANDOM_BOOKS = [
    {
        title: 'mastery',
        author: 'robert greene',
        link: 'https://m.media-amazon.com/images/I/71LRdEUOmNL._AC_UF1000,1000_QL80_.jpg',
        bookPages: 368,
        state: 'Already read',
        readedPages: 368,
        bookId: 'book01'
    },
    {
        title: 'clean code',
        author: 'robert martin',
        link: 'https://m.media-amazon.com/images/I/61qLFlgZ5gL._AC_UF1000,1000_QL80_.jpg',
        bookPages: 464,
        state: 'Not read',
        readedPages: 0,
        bookId: 'book02'
    },
    {
        title: 'the art of war',
        author: 'sun tzu',
        link: 'https://m.media-amazon.com/images/I/61BvkqoxLxL._AC_UF1000,1000_QL80_.jpg',
        bookPages: 288,
        state: 'Already read',
        readedPages: 288,
        bookId: 'book03'
    },
    {
        title: 'don quixote',
        author: 'miguel de cervantes',
        link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546112331i/3836.jpg',
        bookPages: 928,
        state: 'Already read',
        readedPages: 928,
        bookId: 'book04'
    },
    {
        title: 'oblomov',
        author: 'ivan goncarov',
        link: 'https://cdn.kobo.com/book-images/e66183fd-1462-410b-ac97-658dcf5730cd/1200/1200/False/oblomov-66.jpg',
        bookPages: 496,
        state: 'Already read',
        readedPages: 496,
        bookId: 'book05'
    },
    {
        title: 'of mice and men',
        author: 'john steinbeck',
        link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511302904i/890.jpg',
        bookPages: 107,
        state: 'Already read',
        readedPages: 107,
        bookId: 'book06'
    }, 
    {
        title: 'martin eden',
        author: 'jack london',
        link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661678127i/929782.jpg',
        bookPages: 393,
        state: 'Already read',
        readedPages: 393,
        bookId: 'book07'
    },
    {
        title: 'the little prince',
        author: 'antonie de saint-exupery',
        link: 'https://m.media-amazon.com/images/I/81G2R0luQJL._AC_UF1000,1000_QL80_.jpg',
        bookPages: 96,
        state: 'Already read',
        readedPages: 96,
        bookId: 'book8'
    }
];

let validInputsCount = 1; // -> 1 value for cover link
let selectedStateOption = 0; // -> default option is 'Not read'
let readedPagesCount = 0;

function updateSelectedBookState() {
    selectedStateOption = BOOK_SELECT_STATE.selectedIndex;

    if (selectedStateOption == 0) {
        selectedStateOption = 'Not read';
        BOOK_PAGES_COUNT_CONTAINER.style.display = 'none';
        BOOK_NUMBER_PAGES_READ_CONTAINER.style.display = 'none';
    }

    if (selectedStateOption == 1) {
        selectedStateOption = 'Being read';
        BOOK_PAGES_COUNT_CONTAINER.style.display = 'block';
    }

    if (selectedStateOption == 2) {
        selectedStateOption = 'Already read';
        BOOK_PAGES_COUNT_CONTAINER.style.display = 'block';
        BOOK_NUMBER_PAGES_READ_CONTAINER.style.display = 'none';
    }
}

BOOK_SELECT_STATE.addEventListener('change', updateSelectedBookState);

BOOK_REGISTRATION_FORM.addEventListener('submit', (submit) => {
    submit.preventDefault();

    if ( BOOK_TITLE_INPUT.value.length == 0 ) {
        BOOK_TITLE_INPUT.classList.add('invalid-input');
        document.querySelector('#book-title_wm-blank').style.display = 'block';
        document.querySelector('#book-title_wm-invalid').style.display = 'none';
    } else if ( !VALIDETE_FORM_INPUTS.titleNameInput(BOOK_TITLE_INPUT.value) ) {
        BOOK_TITLE_INPUT.classList.add('invalid-input');
        document.querySelector('#book-title_wm-blank').style.display = 'none';
        document.querySelector('#book-title_wm-invalid').style.display = 'block';
    } else {
        validInputsCount++;
        BOOK_TITLE_INPUT.classList.remove('invalid-input');
        document.querySelector('#book-title_wm-blank').style.display = 'none';
        document.querySelector('#book-title_wm-invalid').style.display = 'none';
    }

    if ( BOOK_AUTHOR_INPUT.value.length == 0 ) {
        BOOK_AUTHOR_INPUT.classList.add('invalid-input');
        document.querySelector('#book-author-name_wm-blank').style.display = 'block';
        document.querySelector('#book-author-name_wm-invalid').style.display = 'none';
    } else if ( !VALIDETE_FORM_INPUTS.titleNameInput(BOOK_AUTHOR_INPUT.value) ) {
        BOOK_AUTHOR_INPUT.classList.add('invalid-input');
        document.querySelector('#book-author-name_wm-blank').style.display = 'none';
        document.querySelector('#book-author-name_wm-invalid').style.display = 'block';
    } else {
        validInputsCount++;
        BOOK_AUTHOR_INPUT.classList.remove('invalid-input');
        document.querySelector('#book-author-name_wm-blank').style.display = 'none';
        document.querySelector('#book-author-name_wm-invalid').style.display = 'none';
    }

    let bookCoverLink = 'https://bookcart.azurewebsites.net/Upload/Default_image.jpg';

    if ( BOOK_COVER_LINK_INPUT.value.length == 0 ) {
        BOOK_COVER_LINK_INPUT.classList.remove('invalid-input');
        document.querySelector('#book-cover-image_wm-invalid').style.display = 'none';
    } else if ( !VALIDETE_FORM_INPUTS.httpsLinkInput(BOOK_COVER_LINK_INPUT.value) ) {
        BOOK_COVER_LINK_INPUT.classList.add('invalid-input');
        document.querySelector('#book-cover-image_wm-invalid').style.display = 'block';
    } else {
        BOOK_COVER_LINK_INPUT.classList.remove('invalid-input');
        document.querySelector('#book-cover-image_wm-invalid').style.display = 'none';
        bookCoverLink = BOOK_COVER_LINK_INPUT.value;
    }

    if (selectedStateOption == 'Being read') {
        if ( BOOK_PAGES_COUNT_INPUT.value.length == 0 ) {
            BOOK_PAGES_COUNT_INPUT.classList.add('invalid-input');
            document.querySelector('#book-pages-count_wm-blank').style.display = 'block';
        } else if ( !(NUMBER_PAGES_READ_INPUT.value > BOOK_PAGES_COUNT_INPUT.value) && VALIDETE_FORM_INPUTS.bookPagesInput(BOOK_PAGES_COUNT_INPUT.value) ) {
            validInputsCount++;
            BOOK_PAGES_COUNT_INPUT.classList.remove('invalid-input');
            document.querySelector('#book-pages-count_wm-blank').style.display = 'none';
            BOOK_NUMBER_PAGES_READ_CONTAINER.style.display = 'block';

            if (NUMBER_PAGES_READ_INPUT) {
                if ( NUMBER_PAGES_READ_INPUT.value.length == 0 ) {
                    NUMBER_PAGES_READ_INPUT.classList.add('invalid-input');
                    document.querySelector('#number-pages-read_wm-blank').style.display = 'block';
                    document.querySelector('#number-pages-read_wm-exceed').style.display = 'none';
                } else if ( NUMBER_PAGES_READ_INPUT.value == BOOK_PAGES_COUNT_INPUT.value ) {
                    NUMBER_PAGES_READ_INPUT.classList.remove('invalid-input');
                    document.querySelector('#number-pages-read_wm-blank').style.display = 'none';
                    document.querySelector('#number-pages-read_wm-exceed').style.display = 'none';
                    validInputsCount++;
                    updateCompletedBooksNumber('+');
                    updateTotalReadPagesNumber(readedPagesCount);
                } else if ( NUMBER_PAGES_READ_INPUT.value == 0 ) {
                    NUMBER_PAGES_READ_INPUT.classList.remove('invalid-input');
                    document.querySelector('#number-pages-read_wm-blank').style.display = 'none';
                    document.querySelector('#number-pages-read_wm-exceed').style.display = 'none';
                    validInputsCount++;
                } else if ( NUMBER_PAGES_READ_INPUT.value > BOOK_PAGES_COUNT_INPUT.value ) {
                    NUMBER_PAGES_READ_INPUT.classList.add('invalid-input');
                    document.querySelector('#number-pages-read_wm-blank').style.display = 'none';
                    document.querySelector('#number-pages-read_wm-exceed').style.display = 'block';
                } else {
                    validInputsCount++;
                    NUMBER_PAGES_READ_INPUT.classList.remove('invalid-input');
                    document.querySelector('#number-pages-read_wm-blank').style.display = 'none';
                    document.querySelector('#number-pages-read_wm-exceed').style.display = 'none';
                }
            }
        }
    }

    if (selectedStateOption == 'Already read' && VALIDETE_FORM_INPUTS.bookPagesInput(BOOK_PAGES_COUNT_INPUT.value) ) {
        BOOK_PAGES_COUNT_INPUT.classList.remove('invalid-input');
        document.querySelector('#book-pages-count_wm-blank').style.display = 'none';
        validInputsCount++;
    } else if (selectedStateOption == 'Already read' && BOOK_PAGES_COUNT_INPUT.value.length == 0) {
        BOOK_PAGES_COUNT_INPUT.classList.add('invalid-input');
        document.querySelector('#book-pages-count_wm-blank').style.display = 'block';
    }

    if ( checkIfBookExists(BOOK_TITLE_INPUT.value, BOOK_AUTHOR_INPUT.value) ) {
        CURRENT_BOOK_ERROR_CONTAINER.style.display = 'block';
        validInputsCount-=2;
        
        BOOK_REGISTRATION_FORM.reset();
    } else {
        if ( validInputsCount == 3 & (selectedStateOption == 0 | selectedStateOption == 'Not read') ) {
            const LAST_BOOK = new Book(BOOK_TITLE_INPUT.value, BOOK_AUTHOR_INPUT.value, bookCoverLink, BOOK_PAGES_COUNT_INPUT.value, selectedStateOption, readedPagesCount, bookIdGenerator());
            
            createNewBookItem(LAST_BOOK.title, LAST_BOOK.author, LAST_BOOK.link, LAST_BOOK.bookPages, LAST_BOOK.state, LAST_BOOK.readedPages, LAST_BOOK.bookId);
    
            ADDED_BOOKS.push(LAST_BOOK);
            
            validInputsCount = 1;
            selectedStateOption = 0;
            readedPagesCount = 0;

            BOOK_REGISTRATION_FORM.reset();
        } else if ( validInputsCount == 4 & (selectedStateOption == 2 | selectedStateOption == 'Already read') ) {
            updateCompletedBooksNumber('+');
            updateTotalReadPagesNumber(readedPagesCount);

            const LAST_BOOK = new Book(BOOK_TITLE_INPUT.value, BOOK_AUTHOR_INPUT.value, bookCoverLink, BOOK_PAGES_COUNT_INPUT.value, selectedStateOption, readedPagesCount, bookIdGenerator());
            
            createNewBookItem(LAST_BOOK.title, LAST_BOOK.author, LAST_BOOK.link, LAST_BOOK.bookPages, LAST_BOOK.state, LAST_BOOK.readedPages, LAST_BOOK.bookId);
    
            ADDED_BOOKS.push(LAST_BOOK);
            
            validInputsCount = 1;
            selectedStateOption = 0;
            readedPagesCount = 0;

            BOOK_PAGES_COUNT_CONTAINER.style.display = 'none';

            BOOK_REGISTRATION_FORM.reset();
        } else if (validInputsCount == 5 && selectedStateOption == 'Being read') {
            readedPagesCount = Number(NUMBER_PAGES_READ_INPUT.value);
            updateInProgressBooksNumber('+');

            const LAST_BOOK = new Book(BOOK_TITLE_INPUT.value, BOOK_AUTHOR_INPUT.value, bookCoverLink, BOOK_PAGES_COUNT_INPUT.value, selectedStateOption, readedPagesCount, bookIdGenerator());
            
            createNewBookItem(LAST_BOOK.title, LAST_BOOK.author, LAST_BOOK.link, LAST_BOOK.bookPages, LAST_BOOK.state, LAST_BOOK.readedPages, LAST_BOOK.bookId);
    
            ADDED_BOOKS.push(LAST_BOOK);
            
            validInputsCount = 1;
            selectedStateOption = 0;
            readedPagesCount = 0;

            BOOK_PAGES_COUNT_CONTAINER.style.display = 'none';
            BOOK_NUMBER_PAGES_READ_CONTAINER.style.display = 'none';

            BOOK_REGISTRATION_FORM.reset();
        }
    }
});

SAVE_BOOK_BTN.addEventListener('click', () => validInputsCount=1);

/* BOOKSHELF SECTION */

function swipeLibraryLeft() {
    if ( document.querySelector('.bookshelf-section') ) {
        document.querySelector('.bookshelf-section').style.marginRight = 'auto';
    }
}

function swipeLibraryRight() {
    if ( document.querySelector('.bookshelf-section') ) {
        document.querySelector('.bookshelf-section').style.marginLeft = 'auto';
    }
}

function centerTheLibrary() {
    if ( document.querySelector('.bookshelf-section') ) {
        document.querySelector('.bookshelf-section').style.margin = 'unset';
    }
}

/* BOOKSHELF SECTION -> EMPTY LIBRARY WARNING */
const EMPTY_SECTION = document.querySelector('.empty-section')
const RANDOM_BOOKS_BTN = document.getElementById('random-books_btn')

function checkEmptyLibrary() {
    if ( document.querySelector('.bookshelf-subsection') ) {
        document.querySelectorAll('.bookshelf-subsection').forEach(subsection => {
            if (subsection.childElementCount == 0) {
                subsection.remove();
            }
        });
    }
    if ( document.querySelector('.bookshelf-section') ) {
        if (document.querySelector('.bookshelf-section').childElementCount == 0) {
            document.querySelector('.bookshelf-section').remove();
        }
    }
    document.querySelector('.bookshelf-section') != null ? false : showEmptyLibraryMessage();
};
checkEmptyLibrary();

function showEmptyLibraryMessage() {
    EMPTY_SECTION.style.display = 'flex';
    RANDOM_BOOKS_BTN.addEventListener('click', getRandomBooks);
}

function getRandomBooks() {
    EMPTY_SECTION.style.display = 'none';
    RANDOM_BOOKS.forEach(book => {
        const LAST_BOOK = new Book(book.title, book.author, book.link, book.bookPages, book.state, book.readedPages, book.bookId);

        createNewBookItem(LAST_BOOK.title, LAST_BOOK.author, LAST_BOOK.link, LAST_BOOK.bookPages, LAST_BOOK.state, LAST_BOOK.readedPages, LAST_BOOK.bookId);

        ADDED_BOOKS.push(LAST_BOOK);
    });
}

/* BOOKSHELF SECTION -> CREATE BOOKSHELF SECTION & FIRST BOOKSHELF SUBSECTION */
function createBookshelfSection() {
    const CURRENT_BOOKSHELF_SECTION = MAIN_CONTAINER.querySelector('.bookshelf-section');
    if (!CURRENT_BOOKSHELF_SECTION) {
        const BOOKSHELF_SECTION = document.createElement('section');
        BOOKSHELF_SECTION.classList.add('bookshelf-section');
        MAIN_CONTAINER.appendChild(BOOKSHELF_SECTION);
            const FIRST_BOOKSHELF_SUBSECTION = document.createElement('ul');
            FIRST_BOOKSHELF_SUBSECTION.classList.add('bookshelf-subsection');
            FIRST_BOOKSHELF_SUBSECTION.classList.add('first-subsection');
            BOOKSHELF_SECTION.appendChild(FIRST_BOOKSHELF_SUBSECTION);
        return BOOKSHELF_SECTION;
    }
}

/* BOOKSHELF SECTION -> ADD BOOK ELEMENT */
const NEW_CREATED_BOOKS_IDS_ARRAY = [];

// Helper Function for createNewBookItem();
function bookIdGenerator() {
    let bookId = "";
    const allLeters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ'; // next -> title + author
    do {
        bookId = "";
        for (let i = 0; i < Math.floor(Math.random() * 26); i++) {
            bookId += allLeters.charAt( Math.floor(Math.random() * allLeters.length) );
        }
    } while (NEW_CREATED_BOOKS_IDS_ARRAY.includes(bookId) || bookId.trim() === "");
    
    NEW_CREATED_BOOKS_IDS_ARRAY.push(bookId);
    return bookId;
}

function checkIfBookExists(title, author) {
    for (let i = 0; i < ADDED_BOOKS.length; i++) {
      if (ADDED_BOOKS[i].title.toLowerCase() === title.toLowerCase() && ADDED_BOOKS[i].author.toLowerCase() === author.toLowerCase()) {
        return true;
      }
    }
    return false;
}

function createNewBookItem(title, author, link, bookPages, state, readedPages, bookId) {
    createBookshelfSection();

    const NEW_BOOK_ITEM = document.createElement('li');
    NEW_BOOK_ITEM.className = 'bookshelf-subsection_book-item';
    NEW_BOOK_ITEM.setAttribute('id', bookId);

        const BOOK_COVER = document.createElement('figure');
        BOOK_COVER.className = 'book-cover';
            const BOOK_COVER_IMAGE = document.createElement('img');
            BOOK_COVER_IMAGE.src = link;
            BOOK_COVER_IMAGE.alt = `${title} (${author})`;
            BOOK_COVER.appendChild(BOOK_COVER_IMAGE);
        NEW_BOOK_ITEM.appendChild(BOOK_COVER);

        const BOOK_OPTIONS_AREA = document.createElement('div');
        BOOK_OPTIONS_AREA.className = 'book-options-area';
            const UPDATE_BTN = document.createElement('button');
            UPDATE_BTN.textContent = 'UPDATE';
            UPDATE_BTN.className = 'update-btn';
            BOOK_OPTIONS_AREA.appendChild(UPDATE_BTN)
            const DELETE_BTN = document.createElement('button');
            DELETE_BTN.className = 'delete-btn';
            DELETE_BTN.textContent = 'DELETE';
            BOOK_OPTIONS_AREA.appendChild(DELETE_BTN);
        NEW_BOOK_ITEM.appendChild(BOOK_OPTIONS_AREA);

        const BOOK_DELETE_WM = document.createElement('div');
        BOOK_DELETE_WM.className = 'book-delete_warning-area';
            const BOOK_DELETE_WM_QUES = document.createElement('p');
            BOOK_DELETE_WM_QUES.className = 'book-delete_warning-question';
            BOOK_DELETE_WM_QUES.textContent = 'Are you sure you want to delete this book from the library?';
            BOOK_DELETE_WM.appendChild(BOOK_DELETE_WM_QUES);
            const WM_BUTTONS_CONTAINER = document.createElement('div');
            WM_BUTTONS_CONTAINER.className = 'warning-question_buttons-container';
                const CONFIRM_BTN = document.createElement('button');
                CONFIRM_BTN.className = 'confirm-btn';
                WM_BUTTONS_CONTAINER.appendChild(CONFIRM_BTN);
                const CANCEL_BTN = document.createElement('button');
                CANCEL_BTN.className = 'cancel-btn';
                WM_BUTTONS_CONTAINER.appendChild(CANCEL_BTN);
            BOOK_DELETE_WM.appendChild(WM_BUTTONS_CONTAINER);
        NEW_BOOK_ITEM.appendChild(BOOK_DELETE_WM);

        const BOOK_INFO_SCREEN = document.createElement('div');
        BOOK_INFO_SCREEN.className = 'book-info-screen';
            const BOOK_SEARCHING_LINK = document.createElement('a');
            BOOK_SEARCHING_LINK.href = 'https://www.goodreads.com/search?utf8=%E2%9C%93&query=' + title;
            BOOK_SEARCHING_LINK.target = '_blank';
            BOOK_SEARCHING_LINK.className = 'book-info-screen_book-cover';
            BOOK_SEARCHING_LINK.title = 'search this book on goodreads.';
            BOOK_INFO_SCREEN.appendChild(BOOK_SEARCHING_LINK);
                const BOOK_INFO_SCREEN_COVER = document.createElement('img');
                BOOK_INFO_SCREEN_COVER.src = link;
                BOOK_INFO_SCREEN_COVER.alt = title;
                BOOK_SEARCHING_LINK.appendChild(BOOK_INFO_SCREEN_COVER);
            BOOK_INFO_SCREEN.appendChild(BOOK_SEARCHING_LINK)

            const BOOK_INFO_SCREEN_LIST = document.createElement('ul');
            BOOK_INFO_SCREEN_LIST.className = 'book-info-screen_list-items';
                const BOOK_INFO_SCREEN_LIST_ITEM1 = document.createElement('li');
                    const BOOK_INFO_SCREEN_LIST_ITEM1_HEADER = document.createElement('header');
                        const BOOK_NAME = document.createElement('h3');
                        BOOK_NAME.className = 'book-name';
                        BOOK_NAME.textContent = title.toUpperCase();
                        BOOK_INFO_SCREEN_LIST_ITEM1_HEADER.appendChild(BOOK_NAME);
                        const BOOK_AUTHOR = document.createElement('p');
                        BOOK_AUTHOR.className = 'book-author';
                        BOOK_AUTHOR.textContent = capitalizeFirstLettersForAuthorName(author);
                        BOOK_INFO_SCREEN_LIST_ITEM1_HEADER.appendChild(BOOK_AUTHOR);
                    BOOK_INFO_SCREEN_LIST_ITEM1.appendChild(BOOK_INFO_SCREEN_LIST_ITEM1_HEADER);
                BOOK_INFO_SCREEN_LIST.appendChild(BOOK_INFO_SCREEN_LIST_ITEM1);
                const BOOK_INFO_SCREEN_LIST_ITEM2 = document.createElement('li');
                    const PROGRESS_BAR_CONTAINER = document.createElement('div');
                    PROGRESS_BAR_CONTAINER.className = 'progress-bar-container';
                        const BOOK_READING_PROGRESS_BAR = document.createElement('div');
                        BOOK_READING_PROGRESS_BAR.className = 'book-reading-progress-bar';
                        if (state == 'Not read' | state == 0) {
                            BOOK_READING_PROGRESS_BAR.style.width = '0%';
                            PROGRESS_BAR_CONTAINER.title = 'The book has not been read yet.';
                        } else if (state == 'Already read') {
                            BOOK_READING_PROGRESS_BAR.style.width = '100%';
                            BOOK_READING_PROGRESS_BAR.title = 'The entire book has been read.';
                        } else {
                            const PERCENTAGE = (readedPages / bookPages) * 100;
                            BOOK_READING_PROGRESS_BAR.style.width = PERCENTAGE + '%';
                            BOOK_READING_PROGRESS_BAR.title = PERCENTAGE.toPrecision(3) + '% of the book has been read.';
                        }
                        PROGRESS_BAR_CONTAINER.appendChild(BOOK_READING_PROGRESS_BAR);
                    BOOK_INFO_SCREEN_LIST_ITEM2.appendChild(PROGRESS_BAR_CONTAINER);
                BOOK_INFO_SCREEN_LIST.appendChild(BOOK_INFO_SCREEN_LIST_ITEM2);
                const BOOK_INFO_SCREEN_LIST_ITEM3 = document.createElement('li');
                BOOK_INFO_SCREEN_LIST_ITEM3.className = 'book-note';
                    const TEXT_AREA = document.createElement('textarea');
                    BOOK_INFO_SCREEN_LIST_ITEM3.appendChild(TEXT_AREA);
                    const SAVE_BTN = document.createElement('button');
                    SAVE_BTN.className = 'book-note_save-btn';
                    SAVE_BTN.textContent = 'Save Note';
                    BOOK_INFO_SCREEN_LIST_ITEM3.appendChild(SAVE_BTN);
                BOOK_INFO_SCREEN_LIST.appendChild(BOOK_INFO_SCREEN_LIST_ITEM3);
            BOOK_INFO_SCREEN.appendChild(BOOK_INFO_SCREEN_LIST);
            const BOOK_INFO_SCREEN_CLOSE_BTN = document.createElement('button');
            BOOK_INFO_SCREEN_CLOSE_BTN.className = 'book-info-screen_close-btn';
            BOOK_INFO_SCREEN_CLOSE_BTN.title = 'close book info screen';
            BOOK_INFO_SCREEN.appendChild(BOOK_INFO_SCREEN_CLOSE_BTN);
        NEW_BOOK_ITEM.appendChild(BOOK_INFO_SCREEN);

        let newSubsection = null;
        let hasSpace = false;
        const SUBSECTIONS = document.querySelectorAll('.bookshelf-subsection');
        
        for (let i = 0; i < SUBSECTIONS.length; i++) {
            const SUBSECTION = SUBSECTIONS[i];
          
            if (SUBSECTION.childElementCount < 4) {
                SUBSECTION.appendChild(NEW_BOOK_ITEM);
                updateAvailableBooksNumber('+');
                hasSpace = true;
                break;
            }   
        }
        
        if (!hasSpace) {
            newSubsection = document.createElement('ul');
            newSubsection.classList.add('bookshelf-subsection', 'new-subsection');
            const lastSubsection = SUBSECTIONS[SUBSECTIONS.length - 1];
            lastSubsection.parentNode.insertBefore(newSubsection, lastSubsection.nextSibling);
        }
        
        if (hasSpace) {
          // -> Found child section with less than 4 child items
        } else if (newSubsection) {
            newSubsection.appendChild(NEW_BOOK_ITEM);
            updateAvailableBooksNumber('+');
        }
    // Helper Functions
    toggleBookInfoScreen();
    //-> DELETE BOOK ELEMENT
    DELETE_BTN.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'button') {
            const BOOK_OPTIONS_AREA = target.parentNode;
            const WARNING_AREA = BOOK_OPTIONS_AREA.nextElementSibling;
            const CARD_ITEM = BOOK_OPTIONS_AREA.parentNode;

            // askUserForConfirmation
            WARNING_AREA.style.display = 'flex';
            createPageBackground();
            HEADER_SECTION.style.zIndex = '3';

            WARNING_AREA.querySelector('.confirm-btn').addEventListener('click', () => {
                CARD_ITEM.remove();
                if ( document.querySelector('.page-background') ) document.querySelector('.page-background').remove();
                HEADER_SECTION.style.zIndex = '7';
                checkEmptyLibrary();
                const index = ADDED_BOOKS.findIndex(book => book.bookId === CARD_ITEM.id);
                if (index !== -1) {
                    ADDED_BOOKS.splice(index, 1);
                }
                if( document.querySelector('.bookshelf-section') ) {
                    if (document.querySelector('.bookshelf-section').childElementCount === 1) {
                        document.querySelector('.bookshelf-subsection').classList.add('first-subsection');
                        document.querySelector('.bookshelf-subsection').classList.remove('new-subsection');
                    }
                }
                updateAvailableBooksNumber('');
            });
            
            WARNING_AREA.querySelector('.cancel-btn').addEventListener('click', () => {
                WARNING_AREA.style.display = 'none';
                if ( document.querySelector('.page-background') ) document.querySelector('.page-background').remove();
                HEADER_SECTION.style.zIndex = '7';
            });
        }
    });
}

/* BOOKSHELF SECTION -> BOOK INFO SCREEN */
function toggleBookInfoScreen() {
    const UPDATE_BTN = document.querySelectorAll('.update-btn');

    UPDATE_BTN.forEach( (updateBtn) => {
        const OPENED_BOOK = updateBtn.parentElement.parentElement;
        const BOOK_INFO_SCREEN = OPENED_BOOK.querySelector('.book-info-screen');

        function openBookInfoScreen() {
            BOOK_INFO_SCREEN.style.display = 'flex';
            createPageBackground();
            HEADER_SECTION.style.zIndex = '3';
        }
        updateBtn.addEventListener('click', openBookInfoScreen);

        function closeBookInfoScreen() {
            BOOK_INFO_SCREEN.style.display = 'none';
            if ( document.querySelector('.page-background') ) document.querySelector('.page-background').remove();
            HEADER_SECTION.style.zIndex = '9';
        }

        const BOOK_INFO_SCREEN_CLOSE_BTN = BOOK_INFO_SCREEN.querySelector('.book-info-screen_close-btn');
        BOOK_INFO_SCREEN_CLOSE_BTN.addEventListener('click', closeBookInfoScreen);
    });
}

/* STATS DATA ASSIGNMENT */
const AVAILABLE_BOOKS_NUMBER = document.getElementById('available-books_number');
function updateAvailableBooksNumber(operator) {
    if (operator === '+') {
        AVAILABLE_BOOKS_NUMBER.textContent = ADDED_BOOKS.length + 1;
    } else if (operator === '-') {
        AVAILABLE_BOOKS_NUMBER.textContent = ADDED_BOOKS.length - 1;
    } else if (operator === '') {
        AVAILABLE_BOOKS_NUMBER.textContent = ADDED_BOOKS.length;
    }
}
updateAvailableBooksNumber('');

const IN_PROGRESS_BOOKS_NUMBER = document.getElementById('in-progress-books_number');
function updateInProgressBooksNumber(operator) {
    if (operator === '+') {
        IN_PROGRESS_BOOKS_NUMBER.textContent = ++inProgressBooksCount;
    } else if (operator === '-') {
        IN_PROGRESS_BOOKS_NUMBER.textContent = --inProgressBooksCount;
    } else {
        IN_PROGRESS_BOOKS_NUMBER.textContent = inProgressBooksCount;
    }
}
updateInProgressBooksNumber();

const COMPLETED_BOOKS_NUMBER = document.getElementById('completed-books_number');
function updateCompletedBooksNumber(operator) {
    if (operator === '+') {
        COMPLETED_BOOKS_NUMBER.textContent = ++completedBooksCount;
    } else if (operator === '-') {
        COMPLETED_BOOKS_NUMBER.textContent = --completedBooksCount;
    } else {
        COMPLETED_BOOKS_NUMBER.textContent = completedBooksCount;
    }
    
}
updateCompletedBooksNumber();

const FAV_BOOKS_NUMBER = document.getElementById('fav-books_number');
function updateFavBooksNumber(operator) {
    if (operator === '+') {
        FAV_BOOKS_NUMBER.textContent = ++favBooksCount;
    } else if (operator === '-') {
        FAV_BOOKS_NUMBER.textContent = --favBooksCount;
    } else {
        FAV_BOOKS_NUMBER.textContent = favBooksCount;
    }
}
updateFavBooksNumber();

const TOTAL_READ_PAGES_NUMBER = document.getElementById('total-read-pages_number');
function updateTotalReadPagesNumber(number) {
    TOTAL_READ_PAGES_NUMBER.textContent = Number(TOTAL_READ_PAGES_NUMBER.textContent) + number;
}
updateTotalReadPagesNumber(0);

function resetDataStats() {
    AVAILABLE_BOOKS_NUMBER.textContent = 0;
    IN_PROGRESS_BOOKS_NUMBER.textContent = 0;
    COMPLETED_BOOKS_NUMBER.textContent = 0;
    FAV_BOOKS_NUMBER.textContent = 0;
    TOTAL_READ_PAGES_NUMBER.textContent = 0;
}