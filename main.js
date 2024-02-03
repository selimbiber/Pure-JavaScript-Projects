const OUTPUT_AREA = document.getElementById('output-area')
const NUMBER_INPUT = document.getElementById('number-input')
// ALL_EVENTS
const CLEAR_BTN = document.getElementById('clear-btn').addEventListener('click', clearOutputArea)
const DELETE_BTN = document.getElementById('delete-btn').addEventListener('click', deleteLastInput)
const DOT_BTN = document.getElementById('dot-btn').addEventListener('click', convertToDecimal)
// NUMBER_EVENTS
const ZERO_BTN = document.getElementById('zero-btn').addEventListener('click', (N) => enterNumber(0));
const ONE_BTN = document.getElementById('one-btn').addEventListener('click', (N) => enterNumber(1));
const TWO_BTN = document.getElementById('two-btn').addEventListener('click', (N) => enterNumber(2));
const THREE_BTN = document.getElementById('three-btn').addEventListener('click', (N) => enterNumber(3));
const FOUR_BTN = document.getElementById('four-btn').addEventListener('click', (N) => enterNumber(4));
const FIVE_BTN = document.getElementById('five-btn').addEventListener('click', (N) => enterNumber(5));
const SIX_BTN = document.getElementById('six-btn').addEventListener('click', (N) => enterNumber(6));
const SEVEN_BTN = document.getElementById('seven-btn').addEventListener('click', (N) => enterNumber(7));
const EIGHT_BTN = document.getElementById('eight-btn').addEventListener('click', (N) => enterNumber(8));
const NINE_BTN = document.getElementById('nine-btn').addEventListener('click', (N) => enterNumber(9));
// OPERATOR_EVENTS
const PLUS_BTN = document.getElementById('plus-btn').addEventListener('click', (O) => getOperator('+'));
const SUBTRACT_BTN = document.getElementById('subtract-btn').addEventListener('click', (O) => getOperator('-'))
const OBELUS_BTN = document.getElementById('obelus-btn').addEventListener('click', (O) => getOperator('÷'))
const MULTIPLY_BTN = document.getElementById('multiply-btn').addEventListener('click', (O) => getOperator('x'))
// RESULT_EVENT
const EQUAL_BTN = document.getElementById('equal-btn').addEventListener('click', (R) => {
  if ( OUTPUT_AREA.textContent != '' ) {
    const currentInputValue = NUMBER_INPUT.value;
    secondNumber = currentInputValue;
  }
  showResult(currentOperator, firstNumber, secondNumber)
});
// ALL_BTNS 
const ALL_BTNS = document.querySelectorAll('button');
ALL_BTNS.forEach( (BTN) => {
  BTN.addEventListener('click', playSound)
});

let currentOperator;
let firstNumber = 0;
let secondNumber = 0;

// HELPER_FUNCS

function playSound () {
  const AUDIO = new Audio('./assets/calculator_sound-effect.mp3');
  if(!AUDIO) return;
  AUDIO.currentTime = 0;
  AUDIO.play();
}

function clearOutputArea () {
  OUTPUT_AREA.textContent = '';
  NUMBER_INPUT.value = 0;
}

function deleteLastInput () {
  const currentInputValue = [...NUMBER_INPUT.value];
  if (currentInputValue[0] == '.') {
    currentInputValue.shift();
    NUMBER_INPUT.value = currentInputValue.join('');
  } else {
    currentInputValue.pop();
    NUMBER_INPUT.value = currentInputValue.join('');
  }
  if (currentInputValue[currentInputValue.length-1] == '.') {
    const dotElement = currentInputValue.pop();
    currentInputValue.unshift(dotElement);
    NUMBER_INPUT.value = currentInputValue.join('');
  }
}

function convertToDecimal () {
  const currentInputValue = NUMBER_INPUT.value;
  if ( NUMBER_INPUT.value.includes('.') ) {
    NUMBER_INPUT.value = '' + currentInputValue;
  } else {
    NUMBER_INPUT.value = '.' + currentInputValue;
  }
  if ( currentInputValue.length == 0 || currentInputValue == 0 ) {
    NUMBER_INPUT.value = '.0'
  }
}

function enterNumber (number) {
  if (OUTPUT_AREA.textContent == 0) {
    OUTPUT_AREA.textContent = '';
  }
  if ( NUMBER_INPUT.value == 0 && !NUMBER_INPUT.value.includes('.') ) {
    NUMBER_INPUT.value = '';
  }
  if ( NUMBER_INPUT.value == 0 && number == 0 ) {
    NUMBER_INPUT.value = '';
  }
  const currentInputValueArray = [...NUMBER_INPUT.value];
  if ( currentInputValueArray[0] == '.' ) {
    const dotElement = currentInputValueArray.shift();
    currentInputValueArray.push(dotElement)
    currentInputValueArray.push(number)
    const newInput = currentInputValueArray.join('');
    NUMBER_INPUT.value = newInput;
  } else {
    NUMBER_INPUT.value += number;
  }
  if ( currentInputValueArray.length >= 18 ) {
    clearOutputArea();
  }
}

// MAIN_FUNCS

function showResult(operator, minor, major) {
  operator = currentOperator;
  minor = Number(firstNumber);
  major = Number(secondNumber);

  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);
    case '-':
      return subtract(firstNumber, secondNumber);
    case '÷':
      return divide(firstNumber, secondNumber);
    case 'x':
      return multiply(firstNumber, secondNumber);
    default:
      return null;
  }
}

function getOperator (operator) {
  currentOperator = operator;
  const currentInputValue = NUMBER_INPUT.value;
  if ( OUTPUT_AREA.textContent == '' ) {
    firstNumber = currentInputValue;
  }
  const currentInputValueArray = [...NUMBER_INPUT.value];
  if ( !OUTPUT_AREA.textContent.includes(NUMBER_INPUT.value) ) {
    currentInputValueArray.push(' ', operator, ' ');
    OUTPUT_AREA.textContent = currentInputValueArray.join('');
  }
  if (OUTPUT_AREA.textContent != '' || OUTPUT_AREA.textContent != 0) {
    NUMBER_INPUT.value = '';
  }
}

// MATH_FUNCS

function add(major, minor) {
  let result = 0;
  let temp = 0;
  
  if (major < minor) { temp = major; major = minor; minor = temp; }
  
  result = Number(major) + Number(minor);
  OUTPUT_AREA.textContent = '';
  NUMBER_INPUT.value = result;
};

function subtract(major, minor) {
  let result = 0;
  let temp = 0;
  let negativeNumber = false;
  if (major < minor) { negativeNumber = true; temp = major; major = minor; minor = temp; }
  
  result = Number(major) - Number(minor);
  OUTPUT_AREA.textContent = '';
  if (negativeNumber) {
    NUMBER_INPUT.value = result + ' -';
  } else {
    NUMBER_INPUT.value = result;
  }
};

function divide(major, minor) {
  const result = Number(major) / Number(minor);

  OUTPUT_AREA.textContent = '';
  NUMBER_INPUT.value = result.toFixed(1);
}

function multiply(major, minor) {
  const result = Number(major * minor);

  OUTPUT_AREA.textContent = '';
  NUMBER_INPUT.value = result.toFixed(1);
};