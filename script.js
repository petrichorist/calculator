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
let toggleSignUsed = false;

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
    if (toggleSignUsed) {
      numStorage = '';
      toggleSignUsed = false;
    }

    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '.') {
    decEnabler(true);

    if (toggleSignUsed) {
      numStorage = '';
      toggleSignUsed = false;
    }

    numStorage += number;
    output.textContent = numStorage;
  }

  if (number === '÷' || number === '×' || number === '-' || number === '+') {
    numEnabler(false);
    opEnabler(true);
    decEnabler(false);

    if (numStorage === '' && num1 !== '') {
      numStorage = num1;
    }

    num2 = '';
    currentOperator = '';
    currentOperator = number;
    miniOutput.textContent = '';
    miniOutput.textContent += numStorage;
    miniOutput.textContent += currentOperator;
    num1 = numStorage;
    numStorage = '';
    toggleSignUsed = false;
  }

  if (number === '=') {
    numEnabler(false);
    opEnabler(false);
    decEnabler(false);

    if (num2 == '') {
      if (numStorage === '') {
        num2 = num1;
      } else {
        num2 = numStorage;
      }
    }

    result = operate(
      parseFloat(num1, 10),
      currentOperator,
      parseFloat(num2, 10)
    );

    output.textContent = result;
    miniOutput.textContent = num1 + currentOperator + num2 + '=';
    num1 = String(result);
    numStorage = '';
    toggleSignUsed = false;
  }

  if (number === 'AC') {
    numEnabler(false);
    opEnabler(false);
    decEnabler(false);
    toggleSignUsed = false;

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

    numStorage = String(numStorage).slice(0, -1);
    num1 = numStorage;
    output.textContent = numStorage || '0';
  }

  if (number === '💥') {
    calculator.classList.add('hidden');
  }

  if (number === '+/-') {
    if (numStorage !== '') {
      if (numStorage[0] === '-') {
        numStorage = numStorage.slice(1);
        num1 = numStorage;
      } else if (numStorage[0] !== '-') {
        numStorage = '-' + numStorage;
        num1 = numStorage;
      }
    } else {
      if (num1[0] === '-') {
        numStorage = num1.slice(1);
        num1 = numStorage;
      } else if (num1[0] !== '-') {
        num1 = '-' + num1;
        num1 = numStorage;
      }
    }

    output.textContent = num1;
    toggleSignUsed = true;
  }

  if (numStorage.length === 9) {
    numEnabler(true);
    decEnabler(true);
  }
});
