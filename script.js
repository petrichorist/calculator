'use strict';

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const divide = function (a, b) {
  return a / b;
};
const multiply = function (a, b) {
  return a * b;
};

function operate(numA, operator, numB) {
  if (operator === '÷' && numB === 0) {
    return '(:';
  }

  if (operator == '+') {
    return parseFloat(add(numA, numB).toFixed(2));
  } else if (operator === '-') {
    return parseFloat(subtract(numA, numB).toFixed(2));
  } else if (operator === '÷') {
    return parseFloat(divide(numA, numB).toFixed(2));
  } else if (operator === '×') {
    return parseFloat(multiply(numA, numB).toFixed(2));
  } else {
    return '';
  }
}

function numEnabler(bool) {
  for (let i = 0; i <= 9; i++) {
    document.getElementById('btn' + i).disabled = bool;
  }
}

function opEnabler(bool) {
  document.getElementById('+').disabled = bool;
  document.getElementById('-').disabled = bool;
  document.getElementById('×').disabled = bool;
  document.getElementById('÷').disabled = bool;
}

function decEnabler(bool) {
  document.getElementById('dec').disabled = bool;
}

let calculator = document.querySelector('.calculator');
let output = document.querySelector('#output');
let miniOutput = document.querySelector('#miniOutput');
let numStorage = '';
let num1 = '';
let num2 = '';
let currentOperator;
let result;

const choice = document.addEventListener('click', e => {
  let number = e.target.textContent;

  if (
    number === '0' ||
    number === '1' ||
    number === '2' ||
    number === '3' ||
    number === '4' ||
    number === '5' ||
    number === '6' ||
    number === '7' ||
    number === '8' ||
    number === '9'
  ) {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '.') {
    decEnabler(true);
    numStorage += number;
    output.textContent = numStorage;
  }

  if (number === '÷' || number === '×' || number === '-' || number === '+') {
    numEnabler(false);
    opEnabler(true);
    decEnabler(false);

    if (numStorage === '' && num1 !== '') {
      // if no new number is entered, use the result stored in num1
      numStorage = num1;
    }

    currentOperator = number;
    miniOutput.textContent = '';
    miniOutput.textContent += numStorage;
    miniOutput.textContent += currentOperator;
    num1 = numStorage;
    numStorage = '';
  }

  if (number === '=') {
    numEnabler(false);
    opEnabler(false);
    decEnabler(false);

    if (numStorage === '') {
      num2 = num1;
    } else {
      num2 = numStorage;
    }

    result = operate(
      parseFloat(num1, 10),
      currentOperator,
      parseFloat(num2, 10)
    );

    num1 = result;
    output.textContent = num1;
    miniOutput.textContent += num2 + '=';
    num2 = '';
    numStorage = '';
    currentOperator = '';
  }

  if (number === 'AC') {
    numEnabler(false);
    opEnabler(false);
    decEnabler(false);
    num1 = '';
    num2 = '';
    numStorage = '';
    currentOperator = '';
    output.textContent = '0';
    miniOutput.textContent = '';
  }

  if (number === 'C') {
    numEnabler(false);
    opEnabler(false);
    decEnabler(false);
    numStorage = numStorage.slice(0, -1);
    output.textContent = numStorage;
  }

  if (number === '💥') {
    calculator.classList.add('hidden');
  }

  if (number === '+/-') {
    if (numStorage[0] === '-') {
      numStorage = numStorage.slice(1);
    } else {
      numStorage = '-' + numStorage;
    }
    output.textContent = numStorage;
  }

  if (numStorage.length === 9) {
    numEnabler(true);
    decEnabler(true);
  }
});
