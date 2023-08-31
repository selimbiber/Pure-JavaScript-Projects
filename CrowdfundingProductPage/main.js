const MENU_BACKGROUND = document.getElementById('menu-background')

/* HEADER SECTION */
const HAMBURGER_MENU = document.getElementById('nav-bar_mobile-items');
const HAMBURGER_MENU_BTN = document.getElementById('hamburger-menu_btn');

/* BACK BOOKMARK SUBSECTION */
const BACK_BTN = document.getElementById('back-btn')

/* BACK STATES SUBSECTION */
const CURRENT_BACKED_RATE = document.getElementById('current-backed-rate')
const TOTAL_BACKERS_COUNT = document.getElementById('total-backers-count')
const NUMBER_DAYS_LEFT = document.getElementById('number-days-left')
const PROGRESS_BAR_STATE = document.getElementById('progress-bar-state')

/* ABOUT PROJECT SUBSECTION */
const ENTER_PLEDGE_NO_REWARD = document.getElementById('enter-pledge_no-reward')
const ENTER_PLEDGE_BAMBOO_STAND = document.getElementById('enter-pledge_bamboo-stand')
const ENTER_PLEDGE_BLACK_EDITION = document.getElementById('enter-pledge_black-edition')

/* MODAL MENU SUBSECTION */
const MODAL_MENU = document.getElementById('modal-menu-subsection')
const MODAL_MENU_BTN = document.getElementById('modal-menu_btn')
const REWARD_LIST_ITEMS = document.querySelectorAll('.select-reward_list-items')
const PLEDGE_AMOUNT_INPUTS = document.querySelectorAll('.pledge-amount_input')
const CONTINUE_BUTTONS = document.querySelectorAll('.continue-btn')
const GOT_BTN = document.getElementById('got-it_btn')
const SUCCCESS_MODAL_SUBSECTION = document.getElementById('success-modal-subsection')
const RADIO_BUTTONS = document.querySelectorAll('.input-radio')

const BAMBOO_STAND_LEFT_BEHIND = document.querySelectorAll('.bamboo-stand_left-behind')
const BLACK_EDITION_LEFT_BEHIND = document.querySelectorAll('.black-edition_left-behind')

const DISABLED_RADIO_BUTTONS = document.querySelectorAll('.finished_reward_list-items .input-radio')
DISABLED_RADIO_BUTTONS.forEach( (radioBtn) => {
  radioBtn.disabled = true;
});

let currentBackedRate = 89914;
CURRENT_BACKED_RATE.textContent = currentBackedRate.toLocaleString(); 

let totalBackersCount = 5007;
TOTAL_BACKERS_COUNT.textContent = totalBackersCount.toLocaleString();

function updateCurrentBackedRate (input) {
  currentBackedRate += Number(input);
  totalBackersCount += 1;

  CURRENT_BACKED_RATE.textContent = currentBackedRate.toLocaleString();
  TOTAL_BACKERS_COUNT.textContent = totalBackersCount.toLocaleString();

  const PERCENTAGE = (currentBackedRate / 100000) * 100;
  PROGRESS_BAR_STATE.style.width = PERCENTAGE + '%';
}

let numberDaysLeft = 56;

function toggleHamburgerMenu() {
    if ( HAMBURGER_MENU.classList.contains('show-menu') ) {
      HAMBURGER_MENU.classList.remove('show-menu');
      HAMBURGER_MENU_BTN.style.backgroundImage = 'url(./images/icon-hamburger.svg)';
      MENU_BACKGROUND.classList.remove('menu-bg_visible');      
      document.querySelector('#header-section figure').style.zIndex = 'unset';
      HAMBURGER_MENU_BTN.style.zIndex = 'unset';
    } else {
      HAMBURGER_MENU.classList.add('show-menu');
      HAMBURGER_MENU_BTN.style.backgroundImage = 'url(./images/icon-close-menu.svg)';
      MENU_BACKGROUND.classList.add('menu-bg_visible');
      document.querySelector('#header-section figure').style.zIndex = '10000';
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

MODAL_MENU_BTN.addEventListener('click', () => {
  toggleModalMenu();
  removeBorderColor();
});

RADIO_BUTTONS.forEach( (radio) => {
  radio.addEventListener('click', () => {
    changeBorderColor(radio.parentElement.parentElement)
  });
} );

function changeBorderColor(element) {
  removeBorderColor()
  element.setAttribute('id', 'selected-reward_list-item');
}

function removeBorderColor() {
  REWARD_LIST_ITEMS.forEach( (REWARD_LI) => {
    REWARD_LI.removeAttribute('id');
  });
}

const NO_REWARD_PLEDGE_FORM = document.getElementById('no-reward_pledge-form')
NO_REWARD_PLEDGE_FORM.addEventListener('submit', (submit) => {
  submit.preventDefault();
  if (ENTER_PLEDGE_NO_REWARD.value < 1) {
    const WM = document.querySelector('#warning-message_no-reward')
    WM.style.display = 'block';
  } else {
    const WM = document.querySelector('#warning-message_no-reward')
    WM.style.display = 'none';
    updateCurrentBackedRate(ENTER_PLEDGE_NO_REWARD.value);
    toggleModalMenu();
    showSuccessMessage();
  }
});

const BAMBOO_STAND_PLEDGE_FORM = document.getElementById('bamboo-stand_pledge-form')
BAMBOO_STAND_PLEDGE_FORM.addEventListener('submit', (submit) => {
  submit.preventDefault();
  if (ENTER_PLEDGE_BAMBOO_STAND.value < 25) {
    const WM = document.querySelector('#warning-message_bamboo-stand')
    WM.style.display = 'block';
  } else {
    const WM = document.querySelector('#warning-message_bamboo-stand')
    WM.style.display = 'none';
    updateCurrentBackedRate(ENTER_PLEDGE_BAMBOO_STAND.value);
    BAMBOO_STAND_LEFT_BEHIND.forEach( (leftBehind) => {
      leftBehind.textContent = Number(leftBehind.textContent) -1;
      if (leftBehind.textContent == '0') {
        leftBehind.parentElement.parentElement.classList.add('finished_reward_list-items');
        document.querySelector('span.bamboo-stand_left-behind').parentElement.parentElement.parentElement.classList.add('finished_reward_list-items');
        ENTER_PLEDGE_BAMBOO_STAND.disabled = true;
        const BTN = document.getElementById('bamboo-stand_continue-btn');
        BTN.disabled = true;
        BTN.classList.add('out-of-stock_btn')
        document.querySelector('#bamboo-stand_radio').checked = false;
        document.querySelector('.finished_reward_list-items .select-reward_btn').textContent = 'Out of Stock';
      }
    } );
    toggleModalMenu();
    showSuccessMessage();
  }
} );

const BLACK_EDITION_PLEDGE_FORM = document.getElementById('black-edition_pledge-form')
BLACK_EDITION_PLEDGE_FORM.addEventListener('submit', (submit) => {
  submit.preventDefault();
  if (ENTER_PLEDGE_BLACK_EDITION.value < 75) {
    const WM = document.querySelector('#warning-message_black-edition')
    WM.style.display = 'block';
  } else {
    const WM = document.querySelector('#warning-message_black-edition')
    WM.style.display = 'none';
    updateCurrentBackedRate(ENTER_PLEDGE_BLACK_EDITION.value);
    BLACK_EDITION_LEFT_BEHIND.forEach( (leftBehind) => {
      leftBehind.textContent = Number(leftBehind.textContent) -1;
      if (leftBehind.textContent == '0') {
        leftBehind.parentElement.parentElement.classList.add('finished_reward_list-items');
        document.querySelector('span.black-edition_left-behind').parentElement.parentElement.parentElement.classList.add('finished_reward_list-items');
        ENTER_PLEDGE_BLACK_EDITION.disabled = true;
        const BTN = document.getElementById('black-edition_continue-btn');
        BTN.disabled = true;
        BTN.classList.add('out-of-stock_btn')
        document.querySelector('#black-edition_radio').checked = false;
        document.querySelector('.finished_reward_list-items .select-reward_btn').textContent = 'Out of Stock';
      }
    } );
    toggleModalMenu();
    showSuccessMessage();
  }
});

const SELECT_REWARD_BUTTONS = document.querySelectorAll('.select-reward_btn')
SELECT_REWARD_BUTTONS.forEach( (REWARD_BTN) => {
  if (REWARD_BTN !== null) {
    REWARD_BTN.classList.contains('out-of-stock_btn') ? REWARD_BTN.disabled = true : REWARD_BTN.disabled = false;
    REWARD_BTN.addEventListener('click', (e) => {
      if ( e.target.name === 'bamboo-stand_reward-btn' ) {
        removeBorderColor();
        const listItem = document.getElementsByName('bamboo-stand_li')
        listItem.forEach( (li) => {
          li.hasAttribute('id') ? false : li.setAttribute('id', 'selected-reward_list-item');
        } );
        const RADIO = document.querySelector('#bamboo-stand_radio');
        RADIO.checked = true;
      } else if (e.target.name === 'black-edition_reward-btn') {
        removeBorderColor();
        const listItem = document.getElementsByName('black-edition_li')
        listItem.forEach( (li) => {
          li.hasAttribute('id') ? false : li.setAttribute('id', 'selected-reward_list-item');
        } );
        const RADIO = document.querySelector('#black-edition_radio');
        RADIO.checked = true;
      }
    });
  }
});

CONTINUE_BUTTONS.forEach( (btn) => {
  btn.addEventListener('click', () => {
    removeBorderColor();
  });
} );

//! prevent negative number input
PLEDGE_AMOUNT_INPUTS.forEach( (input) => {
    input.addEventListener('input', (input) => {
      const num = input.target.value.match(/^\d+$/);
      if (num === null) {
          input.target.value = "";
      }
    }, false)
} );

function showSuccessMessage () {
  MENU_BACKGROUND.classList.add('menu-bg_visible');
  SUCCCESS_MODAL_SUBSECTION.style.display = 'flex';

  centerComponentOnScreen();

  GOT_BTN.addEventListener('click', () => {
    SUCCCESS_MODAL_SUBSECTION.style.display = 'none';
    MENU_BACKGROUND.classList.remove('menu-bg_visible');
  });
}

function centerComponentOnScreen () {
  SUCCCESS_MODAL_SUBSECTION.style.position = 'fixed';
  SUCCCESS_MODAL_SUBSECTION.style.top = '50%';
  SUCCCESS_MODAL_SUBSECTION.style.left = '50%';
  SUCCCESS_MODAL_SUBSECTION.style.transform = 'translate(-50%, -50%)';
}